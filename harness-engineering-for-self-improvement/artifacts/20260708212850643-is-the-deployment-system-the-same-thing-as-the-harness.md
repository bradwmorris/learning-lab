# Is the deployment system the same thing as the harness?

- Type: question
- Marker: Introduction / quote: deployment system
- Created: 2026-07-08T21:28:50.643Z

## Summary

The deployment system is the broader real-world layer that turns a base model into a usable product or agent. A harness is one important part of that layer: it controls how the model is prompted, given tools, looped through tasks, managed with context, checked, and connected to artifacts. The deployment system also includes serving infrastructure, product UI, permissions, monitoring, evaluation, logging, routing, safety systems, and user workflows.

## Media

_No media recorded._


## Interaction

### user

she says deployment system?

“deployment system”

is this the harness - or harness is just one part?

### assistant

The harness is one major part of the deployment system, but not the whole thing. Think of three layers: base model = the trained weights; harness = the runtime wrapper that decides prompts, tools, planning loops, context, memory, artifacts, checks, and retries; deployment system = the whole setup that makes the model useful in the world, including the harness plus serving infrastructure, product UI, permissions, logging, evals, monitoring, safety controls, routing, and human workflows. In this article, Weng is zooming in on the harness because it is the part of deployment that can make a model much more capable without changing the model weights. Check-back: if Codex uses GPT-5, a terminal, file edits, git, tests, permissions, and this Learning Lab memory, which part is the base model and which parts are harness/deployment around it?
