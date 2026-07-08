# How can a harness be written as code?

- Type: question
- Marker: Meta-Harness / harness as code
- Created: 2026-07-08T22:14:12.604Z

## Summary

A harness is code because it is the software wrapper that decides how the model is called and what surrounds it: prompt assembly, context retrieval, memory writes, tool definitions, tool-call execution, workflow loops, permission checks, retries, logging, evaluation, and result formatting. The model weights are not the harness; the harness is the program that orchestrates the model's interaction with tools, state, and tasks.

## Media

_No media recorded._


## Interaction

### user

how can the harness be written as code?

### assistant

Because the harness is the software wrapper around the model. The model is called by code, and that code decides what happens before, during, and after the model call. For example, harness code can do: build the prompt; retrieve relevant memories/files; define available tools; execute tool calls; decide the workflow loop; check permissions; run tests/evals; save logs; retry after failure; summarize the final answer. Tiny example: `context = retrieve(task); prompt = buildPrompt(task, context); answer = callModel(prompt, tools); if answer.callsTool: runTool(answer.toolCall); score = evaluate(answer)`. None of that is the model weights. It is ordinary software that orchestrates the model. So when Weng says harness design can become executable, she means these choices can live in editable code rather than just human-written advice. Check-back: in Codex, is `GPT-5` the harness, or are things like tool definitions, file access, shell execution, approval rules, and artifact saving the harness code around the model?
