const http = require("http");
const fs = require("fs/promises");
const path = require("path");

const root = __dirname;
const port = Number(process.env.PORT || 4173);

const mime = {
  ".html": "text/html; charset=utf-8",
  ".css": "text/css; charset=utf-8",
  ".js": "text/javascript; charset=utf-8",
  ".json": "application/json; charset=utf-8",
  ".md": "text/markdown; charset=utf-8",
  ".png": "image/png",
  ".jpg": "image/jpeg",
  ".jpeg": "image/jpeg",
  ".svg": "image/svg+xml; charset=utf-8"
};

function send(res, status, body, type = "application/json; charset=utf-8") {
  res.writeHead(status, { "Content-Type": type });
  res.end(body);
}

function safeJoin(...parts) {
  const filePath = path.normalize(path.join(root, ...parts));
  const relative = path.relative(root, filePath);
  if (relative.startsWith("..") || path.isAbsolute(relative)) throw new Error("Invalid path");
  return filePath;
}

function readBody(req) {
  return new Promise((resolve, reject) => {
    let body = "";
    let tooLarge = false;
    req.on("data", chunk => {
      body += chunk;
      if (body.length > 1_000_000) {
        tooLarge = true;
        req.destroy();
        reject(new Error("Body too large"));
      }
    });
    req.on("end", () => {
      if (!tooLarge) resolve(body);
    });
    req.on("error", reject);
  });
}

function slugify(value) {
  return String(value || "")
    .toLowerCase()
    .replace(/[^a-z0-9]+/g, "-")
    .replace(/^-+|-+$/g, "")
    .slice(0, 80) || "artifact";
}

async function readJson(filePath, fallback) {
  try {
    return JSON.parse(await fs.readFile(filePath, "utf8"));
  } catch (error) {
    if (error.code === "ENOENT") return fallback;
    throw error;
  }
}

async function listResources() {
  const entries = await fs.readdir(root, { withFileTypes: true });
  const resources = [];

  for (const entry of entries) {
    if (!entry.isDirectory() || entry.name.startsWith(".") || entry.name === "node_modules") continue;

    const resourcePath = path.join(root, entry.name, "resource.json");
    try {
      const resource = JSON.parse(await fs.readFile(resourcePath, "utf8"));
      resources.push({
        slug: entry.name,
        title: resource.title || entry.name,
        sourceUrl: resource.sourceUrl || "",
        author: resource.author || "",
        type: resource.type || "resource",
        createdAt: resource.createdAt || ""
      });
    } catch (error) {
      if (error.code !== "ENOENT") throw error;
    }
  }

  return resources.sort((a, b) => a.title.localeCompare(b.title));
}

async function getResource(slug) {
  const resources = await listResources();
  return resources.find(resource => resource.slug === slug);
}

async function readArtifacts(slug) {
  const resource = await getResource(slug);
  if (!resource) {
    const error = new Error("Unknown resource");
    error.status = 404;
    throw error;
  }

  return readJson(safeJoin(slug, "artifacts.json"), []);
}

async function writeArtifactFile(slug, artifact) {
  const artifactsDir = safeJoin(slug, "artifacts");
  await fs.mkdir(artifactsDir, { recursive: true });
  const filename = `${artifact.id}-${slugify(artifact.title || artifact.kind)}.md`;
  const filepath = path.join(artifactsDir, filename);
  const interaction = Array.isArray(artifact.interaction)
    ? artifact.interaction.map(message => {
      const role = message.role || message.speaker || "note";
      const content = message.content || message.text || "";
      return `### ${role}\n\n${String(content).replace(/\r\n/g, "\n").trim()}`;
    }).join("\n\n")
    : String(artifact.transcript || artifact.interaction || artifact.note || "").replace(/\r\n/g, "\n").trim();
  const media = Array.isArray(artifact.media) ? artifact.media : [];
  const mediaLines = media.flatMap(asset => [
    `![${asset.alt || asset.caption || "artifact image"}](${String(asset.src || "").replace(`${slug}/artifacts/`, "")})`,
    asset.caption ? `_${asset.caption}_` : "",
    ""
  ]);
  const lines = [
    `# ${artifact.title}`,
    "",
    `- Type: ${artifact.kind}`,
    `- Marker: ${artifact.marker || "none"}`,
    `- Created: ${artifact.createdAt}`,
    "",
    "## Summary",
    "",
    String(artifact.synthesis || artifact.note || "").replace(/\r\n/g, "\n").trim() || "_No summary recorded._",
    "",
    "## Media",
    "",
    ...(mediaLines.length ? mediaLines : ["_No media recorded._", ""]),
    "",
    "## Interaction",
    "",
    interaction || "_No interaction recorded._",
    ""
  ];
  await fs.writeFile(filepath, lines.join("\n"), "utf8");
  return path.posix.join(slug, "artifacts", filename);
}

async function createArtifact(slug, input) {
  const resource = await getResource(slug);
  if (!resource) {
    const error = new Error("Unknown resource");
    error.status = 404;
    throw error;
  }

  const artifacts = await readArtifacts(slug);
  const now = new Date();
  const kind = ["stuck", "insight", "question"].includes(input.kind) ? input.kind : "stuck";
  const title = String(input.title || input.note || kind).trim().slice(0, 100);
  const artifact = {
    id: now.toISOString().replace(/\D/g, ""),
    resourceSlug: slug,
    kind,
    title: title || kind,
    marker: String(input.marker || "").trim(),
    note: String(input.note || "").trim(),
    synthesis: String(input.synthesis || "").trim(),
    media: Array.isArray(input.media) ? input.media : [],
    interaction: input.interaction || input.messages || "",
    transcript: String(input.transcript || "").trim(),
    createdAt: now.toISOString()
  };
  artifact.file = await writeArtifactFile(slug, artifact);
  artifacts.unshift(artifact);
  await fs.writeFile(safeJoin(slug, "artifacts.json"), `${JSON.stringify(artifacts, null, 2)}\n`, "utf8");
  return artifact;
}

function parseResourceApi(pathname) {
  const match = pathname.match(/^\/api\/resources\/([^/]+)\/artifacts$/);
  return match ? decodeURIComponent(match[1]) : "";
}

function publicStaticPath(pathname) {
  const decoded = decodeURIComponent(pathname);
  if (decoded === "/" || decoded === "/index.html") return decoded;

  const parts = decoded.split("/").filter(Boolean);
  const isMediaPath = parts.length === 4 && parts[1] === "artifacts" && parts[2] === "media";
  const isSafe = parts.every(part => part !== "." && part !== ".." && !part.includes("\\"));
  return isMediaPath && isSafe ? decoded : "";
}

async function serveStatic(pathname, res) {
  const publicPath = publicStaticPath(pathname);
  if (!publicPath) {
    send(res, 404, "Not found", "text/plain; charset=utf-8");
    return;
  }

  const filePath = publicPath === "/" ? safeJoin("index.html") : safeJoin(publicPath.slice(1));
  try {
    const body = await fs.readFile(filePath);
    send(res, 200, body, mime[path.extname(filePath)] || "application/octet-stream");
  } catch (error) {
    send(res, 404, "Not found", "text/plain; charset=utf-8");
  }
}

const server = http.createServer(async (req, res) => {
  try {
    const url = new URL(req.url, `http://${req.headers.host}`);

    if (req.method === "GET" && url.pathname === "/api/resources") {
      send(res, 200, JSON.stringify(await listResources()));
      return;
    }

    const artifactSlug = parseResourceApi(url.pathname);
    if (artifactSlug && req.method === "GET") {
      send(res, 200, JSON.stringify(await readArtifacts(artifactSlug)));
      return;
    }

    if (artifactSlug && req.method === "POST") {
      let input;
      try {
        input = JSON.parse(await readBody(req) || "{}");
      } catch (error) {
        error.status = 400;
        throw error;
      }
      send(res, 201, JSON.stringify(await createArtifact(artifactSlug, input)));
      return;
    }

    if (req.method === "GET") {
      await serveStatic(url.pathname, res);
      return;
    }

    send(res, 405, "Method not allowed", "text/plain; charset=utf-8");
  } catch (error) {
    send(res, error.status || 500, JSON.stringify({ error: error.message }));
  }
});

server.listen(port, () => {
  console.log(`Learning Lab: http://localhost:${port}`);
});
