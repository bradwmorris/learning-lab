# Why might the harness be the path to RSI?

- Type: question
- Marker: Final synthesis grill / crux of article
- Created: 2026-07-09T01:21:15.000Z

## Summary

The article's sharper crux is that harness engineering may be the practical near-term substrate for recursive self-improvement. The harness includes editable parts around the model: tools, scripts, workflows, evals, memory, prompts, permissions, and logs. The RSI implication appears only when those editable parts are inside a loop: run the agent, observe failures, propose harness changes, evaluate them, keep the better harness, then use that improved harness for future improvement.

## Interaction

### user

are we sure this is correct > isn't the whole thing being implied here that > the harness may be the path to rsi?

### assistant

Yes. The sharper crux is that harness engineering may be the practical near-term path to RSI: the harness is not just support infrastructure; it may be the editable substrate that lets a model improve the system that helps it improve later.

### user

ok - next question, really help me understand this

### assistant

Imagine the base model is frozen. It cannot learn new weights. A coding agent still gets better over time because its harness changes. What exactly could change in the harness that would make the same model better at future coding tasks? Give me three concrete changes, not abstractions.

### user

better tools
better prompts
better workflow

### assistant

That is directionally right, but still at label level. Make it concrete: for each one, name the actual change to the coding agent. For example, not "better tools" but a specific new tool or tool policy; not "better workflow" but a specific sequence change.

### user

i don't understand what you're getting at here with your question.

the harness is the stuff surrounding the model that can be updated right? so it's the tools, scripts/workflows, evals, memory.

so improving any of this stuff should improve? i gues im not understanding > is this where we're talking about loops etc?

### assistant

Yes: this is where the loop matters. A harness part changing once is just engineering. RSI-shaped harness improvement means the system can use outcomes from its own work to change the harness, evaluate the change, keep it, and thereby become better at the next improvement cycle.
