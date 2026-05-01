# Learning Lab

Minimal local UI for an agent-assisted study session. The user and agent share a resource; when the user pauses, the agent saves a concise flashcard-style artifact.

## Setup

```sh
npm install
npm start
```

Open `http://localhost:4173`.

## Agent Use

Point your Codex-style agent at this folder and tell it to follow `AGENTS.md`.

For a new resource, ask:

```text
Add this to Learning Lab: <url or file>
```

During study, pause with the timestamp/page/section and your question. The agent should create or update one artifact immediately, then help until you can explain the idea back.

## Resource Shape

Each resource is a direct child folder:

- `resource.json`
- `artifacts.json`
- `artifacts/`

The UI discovers resource folders by finding `resource.json`.

Study resources are ignored by git by default because they can contain private notes. Force-add only examples you intentionally want public.
