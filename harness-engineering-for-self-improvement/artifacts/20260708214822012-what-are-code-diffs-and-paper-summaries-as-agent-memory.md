# What are code diffs and paper summaries as agent memory?

- Type: question
- Marker: Pattern 2: File System as Persistent Memory / code diffs and paper summaries
- Created: 2026-07-08T21:48:22.012Z

## Summary

Code diffs are commonly stored as git commits, patch/diff files, pull requests, or logs from commands like git diff and git show. They preserve what changed, where it changed, and sometimes why. Paper summaries are short structured notes about research papers: the problem, core idea, method, results, limitations, and relevance to the current task. In a harness, both are durable artifacts the model can re-read instead of keeping every detail in context.

## Media

_No media recorded._


## Interaction

### user

what are common ways to store code diffs? 

and 'paper summarries' meaning what?

### assistant

Common ways to store code diffs: git commits, which are the normal durable record of changes; patch files, such as `fix-bug.patch`, which are portable diff files; pull requests, which store the diff plus discussion and review; `git diff` logs saved to files, useful during experiments; and structured change notes, like `changed X because Y, tests Z passed`. A code diff means: the before/after changes to code, usually line-by-line. Paper summaries means concise notes about papers the agent has read. Not a full copy of the paper. More like: what problem does this paper solve, what is the core method, what did it find, what are the limitations, and why does it matter for this task? In long research workflows, the agent might read 30 papers. It should not keep all paper text in context; it should save useful summaries and pull them back when needed. Check-back: if an agent reads a paper about a new evaluation method, should it save the whole PDF in prompt context, or save a compact summary with the key method, findings, and relevance?
