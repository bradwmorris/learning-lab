# How can prompts be part of code if LLM outputs are nondeterministic?

- Type: stuck
- Marker: Self-Improving Harness / code as universal language follow-up
- Created: 2026-07-08T22:28:51.784Z

## Summary

Code does not make the model's output deterministic. Instead, code acts as the container and control system around nondeterministic model calls. It can store prompt templates, choose variables, retrieve context, set model parameters, validate outputs, retry failures, route tool calls, log results, and run evaluations. A prompt is often a string or template inside the program; the LLM call is a probabilistic operation inside an otherwise executable workflow. This is why harness designs can be represented as code even when one component, the model, is nondeterministic.

## Media

_No media recorded._


## Interaction

### user

back to this:

So when she says code is a universal language, she means many different harness designs can be expressed as executable programs.

I just don't fully understand this bit. What does it mean that the prompt and the tool, I understand how tools, for example, are expressed as programs or code, but I don't understand how there are other things in there, like the prompts, which they can fit inside the code, but they're not deterministic in the same way, like the output.

### assistant

You're exactly right to notice the difference. The prompt is not deterministic in the same way a normal function is. The point is not that code turns the model into deterministic software. The point is that code can contain and control the nondeterministic parts. A harness program might say: choose this prompt template, fill in these variables, retrieve these files, call the model with temperature 0.2, require JSON output, validate the JSON, retry if invalid, run this tool if requested, score the final answer. The model call is probabilistic, but the surrounding procedure is executable. So the prompt is part of code as a template/string/config, while the model response is an uncertain result produced inside that programmed workflow. Analogy: a weather simulation program may include randomness, but it is still code because the simulation rules, inputs, outputs, and evaluation are specified. Check-back: is the key claim that prompts become deterministic code, or that prompts can be embedded inside a coded control loop that manages the model's nondeterministic outputs?
