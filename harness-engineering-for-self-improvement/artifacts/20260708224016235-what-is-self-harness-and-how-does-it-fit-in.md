# What is Self-Harness and how does it fit in?

- Type: question
- Marker: Self-Improving Harness / Self-Harness
- Created: 2026-07-08T22:40:16.235Z

## Summary

Self-Harness is a more direct version of the self-improving harness idea: an LLM agent proposes changes to its own harness, evaluates whether those changes improve performance, and accepts only useful changes. It fits after STOP because STOP improves the improver/scaffold in an abstract sense, while Self-Harness specifically targets the harness surrounding the agent. It also relates to ADAS, AFlow, and Meta-Harness because all treat agent design as something editable, executable, and evaluable.

## Media

_No media recorded._


## Interaction

### user

A more recent work, Self-Harness ([Zhang et al. 2026](https://arxiv.org/abs/2606.09498)), relies on LLM agents to improve their own harness via a propose-evaluate-accept loop.

back to this? what is this? how does it fit in?

### assistant

Self-Harness is the idea made very direct: let the agent improve the wrapper around itself. The loop is: propose a harness change, evaluate it on tasks, accept it only if it helps. Harness change could mean changing prompts, memory rules, context retrieval, tool-use logic, workflow steps, validation, retries, or other scaffold code. How it fits: STOP says 'improve the improver,' but more abstractly. ADAS/AFlow search over agent workflows. Meta-Harness searches over harness code. Self-Harness says: the agent itself participates in improving its own harness through propose -> evaluate -> accept. The key thing is the accept step. It prevents every random self-change from being kept. The system needs an evaluator: did this new harness actually perform better? Grounding analogy: you do not just rewrite your study routine and assume it is better. You try the new routine for a few tasks, compare results, and keep it only if it improves learning. Check-back: what makes Self-Harness safer than just letting an agent rewrite itself freely: the propose step, or the evaluate-and-accept gate?
