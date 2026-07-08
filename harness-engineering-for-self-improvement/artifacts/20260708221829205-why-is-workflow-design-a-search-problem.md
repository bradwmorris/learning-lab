# Why is workflow design a search problem?

- Type: question
- Marker: Workflow Design / workflow as search problem
- Created: 2026-07-08T22:18:29.205Z

## Summary

Workflow design is a search problem because there are many possible ways to arrange an agent's steps, roles, tools, checks, retries, and stopping rules. Instead of hand-picking one workflow, a system can generate candidate workflows, run them on tasks, score their performance, and keep or refine the better ones. The search space is the set of possible workflows; the evaluation score tells the system which designs work better.

## Media

_No media recorded._


## Interaction

### user

i don't fully understand this

The design space for workflow is enormous, and naturally we can think of workflow design as a search problem -

### assistant

This means there are many possible workflows an agent could follow, and we do not know in advance which one is best. Example: for a coding task, possible workflows include: answer immediately; plan first then code; run tests before editing; write code then run tests; ask a critic agent to review; spawn subagents to inspect different files; retry twice after failure; stop only after passing tests. Each choice changes the workflow. The number of combinations explodes. That is the 'design space.' Calling it a search problem means: instead of a human manually choosing one workflow, we can generate many candidate workflows, run them on benchmark tasks, score them, and keep the ones that work better. So: workflow design space = all possible process recipes; search = trying candidates and selecting better ones. Check-back: if we compare 20 different agent workflows on the same task set and keep the highest-scoring one, what are we searching over: model weights, prompts only, or workflow designs?
