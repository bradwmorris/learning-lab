# Why does Weng emphasize code as a universal language?

- Type: question
- Marker: Self-Improving Harness / code as universal language
- Created: 2026-07-08T22:25:07.060Z

## Summary

Weng emphasizes code because code can express the whole harness, not just prompts: prompts, tool calls, subagents, memory, workflow logic, permissions, evaluation, retries, and control flow. If the harness is code, then a coding agent can edit it, run it, test it, and improve it. The sparkles are playful emphasis: code is the common representation that lets systems like Meta-Harness, ADAS, and AFlow turn agent design into something executable and searchable.

## Media

_No media recorded._


## Interaction

### user

up to this > Self-Improving Harness

why she say code in sparkles?

. As we have seen in work like Meta-Harness, ADAS, and AFlow, ✨code✨ is a universal language for

### assistant

The sparkles are playful emphasis, but the point is serious: code is the representation that can describe the whole agent system. A prompt can describe behavior, but code can implement behavior. It can define prompts, choose context, call tools, run subagents, store memory, check permissions, run evals, retry failures, and route control flow. So when she says code is a universal language, she means many different harness designs can be expressed as executable programs. That matters because once the harness is code, a coding agent can modify it and test whether the modification works. Meta-Harness edits harness code. ADAS writes new agent workflows in code. AFlow represents workflows in code/graphs and searches over them. Grounding: prompt = advice to the model; code = the machine that actually controls the model's environment. Check-back: why is code a better target for self-improvement than only a prompt: because it is prettier, or because it can be executed, tested, and changed?
