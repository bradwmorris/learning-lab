# What is AFlow in simple terms?

- Type: question
- Marker: Workflow Design / AFlow
- Created: 2026-07-08T22:22:28.223Z

## Summary

AFlow is a method for automatically improving agent workflows. It represents a workflow as a graph: nodes are LLM calls or agent actions, and edges decide what happens next. Instead of manually choosing the best workflow, AFlow starts from a template, asks an LLM to propose modified workflows, runs and scores them, keeps improved ones, and searches further from the better candidates. In simple terms, it is automated trial-and-error over workflow diagrams.

## Media

_No media recorded._


## Interaction

### user

AFlow - explain this in more simple terms

### assistant

AFlow is basically a way to automatically search for a better agent workflow. Think of a workflow as a flowchart. Each node is something the agent does, like ask the model to reason, call a tool, critique an answer, revise, or produce the final output. Each edge says what happens next. AFlow starts with a simple workflow, like a template. Then it asks an LLM to make a variation of that workflow. It runs the new workflow on tasks, scores it, and keeps it if it improves. Then it repeats. The MCTS part just means it does this search in a smarter tree-like way: explore some new branches, exploit branches that already look promising. Simple analogy: instead of manually designing the perfect recipe, AFlow keeps trying recipe variants, tasting/scoring them, and exploring the best branches. Check-back: is AFlow mainly changing the model weights, or changing the sequence/graph of steps the agent follows?
