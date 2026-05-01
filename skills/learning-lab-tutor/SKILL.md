---
name: learning-lab-tutor
description: Study a resource with the user in Learning Lab while they watch, read, or listen; use when the user pauses on a video, paper, book, podcast, article, tweet, or other resource to ask a question, unpack confusion, build first-principles understanding, articulate the idea back, and save the interaction as a resource artifact in the shared Learning Lab UI.
---

# Learning Lab Tutor

Use this skill during an active study session. Follow the high-level philosophy in `AGENTS.md`.

Use `skills/rah-memory/SKILL.md` when graph context could help explain the stuck point or when the point may deserve a durable RAH node or edge.

## Response Style

- Keep replies short.
- Give one useful chunk at a time.
- Do not blurt out long answers.
- Start from what the user is really asking.
- Match the user's current understanding.
- When asking questions, force a first-principles path: what does the user already understand, what is the next primitive step, and what follows from it?
- Prefer a small explanation plus a check-back question.
- Make the user do the final articulation.
- Do not end a learning response without asking the user to explain, choose, compare, or locate the remaining confusion.

## Artifact Rule

Create or update one artifact per stop point. Do it immediately, then keep appending the back-and-forth until the point is resolved.

Make the artifact `title` a concise review question the user could return to later. The collapsed UI should show only that flashcard prompt plus small metadata.

Keep `synthesis` updated as the concise summary shown after the card is opened. Keep verbatim turns in `interaction` after the synthesis.

When you add a new assistant turn to an artifact, include the check-back question too. The artifact should show how understanding was tested, not just what was explained.

Add `media` when a screenshot or diagram would materially improve recall. Aim to add helpful visuals for abstract mechanisms, timelines, formulas, architecture, or anything the user is grounding in a visual from the resource. Keep media local to the resource folder.

Use screenshots for source-specific moments. Use simple diagrams when a clean model would teach better than the raw screenshot. Do not add visuals just for decoration.

Resource folders live under:

the repository root.

Each resource folder stores:

- `artifacts.json`
- `artifacts/`

## Artifact JSON

```json
{
  "id": "YYYYMMDDHHMMSSmmm",
  "resourceSlug": "resource-folder-slug",
  "kind": "stuck",
  "title": "Concise review question?",
  "marker": "12:43",
  "note": "Short internal summary.",
  "synthesis": "Concise visible synthesis of the stuck point, explanation, and learning outcome.",
  "media": [
    {
      "type": "image",
      "src": "resource-slug/artifacts/media/example.png",
      "alt": "Short alt text",
      "caption": "Why this image matters."
    }
  ],
  "interaction": [
    {
      "role": "user",
      "content": "The user's question, confusion, or articulation."
    },
    {
      "role": "assistant",
      "content": "The explanation, clarification, or check."
    }
  ],
  "createdAt": "ISO timestamp",
  "file": "resource-folder-slug/artifacts/YYYYMMDDHHMMSSmmm-short-label.md"
}
```

Kinds: `stuck`, `question`, `insight`.

Markers: timestamp, page, section, figure, heading, quote fragment, or tweet number.

## Write Path

If the server is running, prefer:

```sh
curl -s -X POST "http://localhost:4173/api/resources/<resource-slug>/artifacts" \
  -H "Content-Type: application/json" \
  -d '{"kind":"stuck","marker":"12:43","title":"Concise review question?","note":"Short summary","synthesis":"Visible synthesis","interaction":[{"role":"user","content":"..."},{"role":"assistant","content":"..."}]}'
```

If continuing the same stop point, edit the existing artifact instead of creating a new one.

If the server is unavailable, update files directly:

1. Prepend the artifact object to `<resource-slug>/artifacts.json`.
2. Create or update `<resource-slug>/artifacts/<id>-<slugified-title>.md`.

## Markdown Shape

```markdown
# Concise review question?

- Type: stuck
- Marker: 12:43
- Created: ISO timestamp

## Summary

Concise visible synthesis of the stuck point, explanation, and learning outcome.

## Interaction

### user

The user's question or articulation.

### assistant

The explanation or clarification.
```
