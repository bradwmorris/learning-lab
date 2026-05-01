---
name: new-resource
description: Create and prepare a new Learning Lab resource from a user-provided video, paper, book, article, podcast, tweet/thread, repository, local file, or other study source; use when the user gives a new resource URL or file and wants it added as a project with metadata, artifacts storage, shared UI discovery, and the source opened for study.
---

# New Resource

Use this skill to add a new study resource to Learning Lab and make it available in the shared resource selector.

Use `skills/rah-memory/SKILL.md` before creating the local resource folder. A Learning Lab resource should link to an existing RAH node when possible.

## Workspace Contract

The Learning Lab root is the repository root.

The shared UI lives only at the root. Resource folders are data-only. Do not create UI files inside a resource folder.

The root app discovers resources by scanning direct child folders for `resource.json`.

## Workflow

1. Identify the resource type: video, paper, podcast, book, article, tweet/thread, repo, local file, or other.
2. Determine a clean title, source URL or file path, author/publisher if known, and type.
3. Search RAH by title, URL, author, or filename. Reuse the existing RAH node if found; create or propose a node only according to `rah-memory`.
4. Create a lowercase slug from the title using hyphens.
5. Create a direct child folder:

   `<repo-root>/<resource-slug>`

6. Inside the folder, create:

   - `resource.json`
   - `artifacts.json`
   - `artifacts/`

7. Start or reuse the shared UI at:

   `http://localhost:4173`

8. Open the actual resource in the Codex in-app browser when possible. For local browser control, use the Browser Use plugin/tooling rather than macOS `open`.

## Metadata

Use metadata endpoints when practical:

- YouTube: use oEmbed to get title and author.
- Articles: use page metadata when accessible.
- Papers/books/local files: infer conservatively from filename, title page, DOI page, or user wording.

If metadata is unavailable, derive a short descriptive title from the URL or user message.

`resource.json` must use this shape:

```json
{
  "title": "Human readable resource title",
  "sourceUrl": "https://source.example/resource",
  "author": "Author or publisher if known",
  "type": "video",
  "createdAt": "YYYY-MM-DD",
  "rahNodeId": 123
}
```

For local files, put the absolute path in `sourceUrl` if there is no web URL.

Omit `rahNodeId` only if no matching RAH node exists yet.

Initialize `artifacts.json` as:

```json
[]
```

## Slug Rules

- Use lowercase ASCII.
- Replace runs of non-alphanumeric characters with `-`.
- Trim leading and trailing hyphens.
- Keep it readable, not overly short.
- If the folder already exists, reuse it if it is the same resource; otherwise append a short disambiguator.

## UI Contract

Do not modify the UI unless the user explicitly asks.

The existing UI should remain:

- root screen: folder-like resource selector only
- resource screen: vertical collapsible artifact feed only

After setup, the new resource should appear automatically in the root selector after refresh.

## Resource Opening

After creating the folder, open or prepare the source for study:

- web URLs: open in the Codex in-app browser
- YouTube/podcasts: open the source page
- papers/articles: open the source URL or local file in the browser if possible
- local files that cannot open in browser: tell the user the file path and keep the Learning Lab UI ready

## Handoff

When setup is complete, report:

- resource folder path
- resource title
- UI URL
- whether the source was opened successfully

Then use `learning-lab-tutor` when the user starts pausing, asking questions, or unpacking the resource.
