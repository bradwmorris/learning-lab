---
name: rah-memory
description: Use the user's RAH knowledge graph during Learning Lab work when available; read graph context when it can help with a resource, link new Learning Lab resources to existing RAH nodes, search before creating duplicates, and propose durable nodes or edges when the user learns, gets stuck, forms an insight, or creates reusable understanding.
---

# RAH Memory

Use this skill whenever Learning Lab work should read from or write back to the user's RAH graph. If RAH tools are unavailable, continue the Learning Lab workflow without graph memory.

## Defaults

- Read when graph context could help.
- Search before every create.
- Prefer updating or linking existing nodes over creating duplicates.
- Propose agent-suggested writes before doing them.
- Create edges only after explicit user confirmation.
- Keep writes sparse and high signal.

## Read

For broad context:

```text
retrieveQueryContext(query, limit)
```

For direct lookup or duplicate checks:

```text
queryNodes(query, limit)
```

For exact records:

```text
getNodesById(nodeIds)
```

For transcript/article/source text inside a known node:

```text
searchContentEmbeddings(query, node_id, limit)
```

Read the RAH `DB Operations` skill when unsure about graph policy.

## New Resource Rule

When adding a Learning Lab resource, first search RAH for the source by title, URL, author, or filename.

- If a matching node exists, store its ID in `resource.json` as `rahNodeId`.
- If no matching node exists and the user explicitly asked to add/import the resource, create the node after duplicate search.
- If no matching node exists but the user did not clearly ask for RAH capture, propose it first.

Use external URLs in `link`. Store canonical source/transcript text in `source` when available.

## Learning Session Rule

When the user gets stuck or reaches an insight, look for chances to connect the moment back to RAH:

- Search for related nodes before explaining if prior context may help.
- Suggest a new node when the point is durable beyond the current resource.
- Suggest an edge when the point clearly connects two existing ideas.
- Do not ask to save every minor clarification.

Suggested prompt:

`Add this to RAH as "<title>"? It would capture <why it matters>.`

For edges:

`I see a possible edge: <source> -> "<relationship>" -> <target>. Add it?`

## Write Quality

Descriptions should be natural prose under 500 characters:

- what the thing is
- why it matters here
- current status, if known

For user-authored ideas, preserve the user's wording in `source` as much as possible.

## Useful Tools

- `queryNodes`
- `retrieveQueryContext`
- `searchContentEmbeddings`
- `getNodesById`
- `createNode`
- `updateNode`
- `queryEdge`
- `createEdge`
- `writeContext`
