# What makes harness engineering more than an early agent framework?

- Type: question
- Marker: Harness Design Patterns / agent framework vs harness engineering
- Created: 2026-07-08T21:35:15.200Z

## Summary

The early agent formula names the ingredients of an agent: model, memory, tools, planning, and action. Harness engineering is more like designing the runtime system that governs those ingredients in production: what loop the model follows, how success is evaluated, what actions are permitted, what state persists outside context, and how the system observes, checks, retries, and improves. The shift is from assembling agent components to engineering the operating environment around the model.

## Media

_No media recorded._


## Interaction

### user

Compared with [early agent frameworks](https://lilianweng.github.io/posts/2023-06-23-agent/), “agent = LLM + memory + tools + planning + action”, harnesses engineering additionally include workflow design (e.g. loop engineering), evaluation, permission controls, and persistent state management. It is no longer only prompt templates, but closer to runtime and software system design: how the model observes, acts, memorizes, checks itself, and improves.

is the agent = llm + memory + tools + planning + action > is this just early software engineering? > 

but she is saying these extra things make it harness eng?

workflow design (e.g. loop engineering), evaluation, permission controls, and persistent state management.

### assistant

Yes, you have it. The early formula is more like an ingredient list: LLM + memory + tools + planning + action. It says what pieces an agent has. Harness engineering is more like designing the runtime around those pieces: what loop does the agent follow, when does it stop, how does it check its work, what is it allowed to do, where does durable state live, how does it recover after failure, and how does it improve next time? So it is not exactly just early software engineering. Early agent frameworks were already software, but often framed as plugging capabilities into an LLM. Weng is saying mature harness work looks more like serious systems engineering: control loops, evals, permissions, state, observability, and product/runtime behavior. Check-back: if we give a model a calculator tool, that fits the early agent formula. If we design when it must use the calculator, how to verify the result, what logs to save, and when to ask permission, which layer are we now engineering?
