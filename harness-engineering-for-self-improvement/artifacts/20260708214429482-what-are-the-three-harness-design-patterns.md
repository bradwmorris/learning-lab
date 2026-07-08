# What are the three harness design patterns?

- Type: question
- Marker: Harness Design Patterns / three patterns TLDR
- Created: 2026-07-08T21:44:29.482Z

## Summary

The three patterns are: workflow automation, where the harness gives the model a repeatable loop such as plan, act, observe, test, and improve; file system as persistent memory, where long-running state, logs, artifacts, and decisions live in files instead of fragile chat context; and sub-agent/backend jobs, where the harness can run parallel workers or background processes and later merge their results. Together they make an AI system more like a durable runtime than a one-shot prompt.

## Media

_No media recorded._


## Interaction

### user

what are these three patterns, tldr

[Pattern 1: Workflow Automation](https://lilianweng.github.io/posts/2026-07-04-harness/#pattern-1-workflow-automation)
[Pattern 2: File System as Persistent Memory](https://lilianweng.github.io/posts/2026-07-04-harness/#pattern-2-file-system-as-persistent-memory)
[Pattern 3: Sub-agent and Backend Jobs](https://lilianweng.github.io/posts/2026-07-04-harness/#pattern-3-sub-agent-and-backend-jobs)

### assistant

TLDR: these are three ways to make an AI agent durable and useful beyond a single prompt. Pattern 1, workflow automation: give the model a loop. It does not just answer once; it plans, acts, observes results, tests, fixes, and repeats. Pattern 2, file system as persistent memory: do not keep everything in the chat context. Save plans, logs, outputs, notes, code, errors, and artifacts in files so the agent can recover and continue. Pattern 3, sub-agent and backend jobs: let the harness run multiple workers or long-running tasks in parallel, then inspect their outputs and merge the useful results. Grounding example: Codex uses all three. It follows a work loop, saves/reads files, and can run commands or delegate parallel work. Check-back: which pattern solves the problem of the model forgetting long task history: workflow loops, files as memory, or subagents?
