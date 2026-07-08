# Why use markdown files instead of a database for agent memory?

- Type: question
- Marker: Context Engineering / ACE and MCE memory storage
- Created: 2026-07-08T21:59:53.746Z

## Summary

Yes, the intuition is right: ACE-style systems keep external memory/context outside the prompt, often as structured text or files. But databases are also used in agent memory systems, especially vector databases, SQL tables, key-value stores, and graph databases. Files are common in research harnesses because they are simple, inspectable, versionable, easy for coding agents to edit, and flexible while the memory schema is still evolving. Databases help when memory needs scale, querying, relationships, permissions, concurrency, or typed structure. The tradeoff is flexibility and agent-readability versus stricter schema and retrieval power.

## Media

_No media recorded._


## Interaction

### user

The fact that ACE learns insights from rollouts helps us move toward self-managed memory, but the update rules and the overall workflow are still handcrafted. To move toward a more self-improving loop, Meta Context Engineering (MCE; [Ye et al. 2026](https://arxiv.org/abs/2601.21557)

Okay, this is where my thinking is going with this, is basically just trying to have the agent write to and append an external corpus of memory, which I'm assuming here is just in markdown file format. And now they're talking about a different one. So the ACE format is that. And then metacontext engineering, I guess. But why don't people use the database here? Or are some of them using a database? Is there any case to be made for why the agent isn't reading from and writing to a structured database as opposed to markdown file? Wouldn't this help?

### assistant

Yes, your intuition is good. ACE is basically moving useful lessons out of the transient prompt into an external, maintained memory/context artifact. In the paper framing, that artifact is often file-like or markdown-like because it is easy for an agent to read, edit, diff, version, and inspect. But people absolutely do use databases for agent memory: vector DBs for semantic retrieval, SQL tables for structured facts/events, key-value stores for simple state, and graph DBs for relationships between concepts. The reason markdown/files show up a lot in harness research is pragmatic: files are schema-light, human-readable, git-diffable, easy for coding agents to manipulate, and flexible when you do not yet know the right memory schema. A database helps when you need scale, precise queries, relationships, permissions, concurrency, deduplication, or typed fields. The tradeoff is that a database forces you to design the schema and retrieval API. That can help, but it can also make early experimentation brittle. So the clean mental model: markdown/files are good for evolving playbooks and inspectable agent state; databases are good when memory becomes large, relational, multi-user, or query-heavy. Check-back: if the agent is still discovering what kinds of lessons matter, would you start with a rigid schema, or a flexible file/playbook that can later be migrated into a database?
