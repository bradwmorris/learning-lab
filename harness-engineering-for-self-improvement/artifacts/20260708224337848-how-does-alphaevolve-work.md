# How does AlphaEvolve work?

- Type: question
- Marker: Evolutionary Search / AlphaEvolve
- Created: 2026-07-08T22:43:37.848Z

## Summary

AlphaEvolve is best understood as an evolutionary program-search system. It uses LLMs/agents inside a harness-like orchestration loop, but it is not primarily a coding-agent product like Codex or Claude Code, and it is not primarily evolving its own harness. The thing being evolved is usually candidate code/programs/algorithms. The system selects parent programs, asks frozen LLMs to propose code diffs, evaluates the child programs, and keeps useful variants. Weng uses it as evidence that executable code spaces can be searched and improved, which is why similar logic can later be applied to harnesses.

## Media

_No media recorded._


## Interaction

### user

take me through the whole alphaevolve thing

### assistant

AlphaEvolve is evolutionary search over code. Start with candidate programs in a pool. Pick a parent program. Give an LLM the parent code, results so far, instructions, and sometimes meta information. The LLM proposes a code diff, a small mutation/improvement. Run the child program. Score it with an evaluator, such as speed, correctness, benchmark score, or scientific objective. If it improves or is useful, keep it in the pool. Repeat. Over time the pool evolves toward better programs. The important details in Weng's summary: the LLM is frozen, so the model weights are not changing; the system improves by changing candidate programs. The agent may see the full repo, but only certain marked regions may be meant for evolution, such as `EVOLVE-BLOCK-START` / `EVOLVE-BLOCK-END`. The meta-prompt can also evolve, meaning the instructions for generating future mutations can improve too. How it fits: AlphaEvolve is not primarily harness self-improvement; it is solution/program evolution. Weng uses it to show why evolutionary search works well when candidates are executable and easy to score. Check-back: in AlphaEvolve, what is evolving: the LLM's weights, or the pool of candidate programs and prompts used to mutate them?

### user

is AlphaEvolve specifically a coding harness? or agent? or what?

### assistant

AlphaEvolve is not best categorized as a coding harness or a normal coding agent. It is an evolutionary program-search system.

It uses LLM agents as proposal engines, and it has a harness-like orchestration system around them, but the main object being optimized is candidate code/programs/algorithms.

So the clean taxonomy is:

base LLM = proposes mutations

agent/scaffold = manages proposal, editing, and evaluation steps

AlphaEvolve system = evolutionary search loop over executable programs

Weng brings it up because it shows a general recipe: if something can be represented as code and evaluated, an LLM-driven search loop can improve it. Harnesses are one possible future target of that recipe, but AlphaEvolve itself is mostly about evolving programs.

Check-back: in your own words, is AlphaEvolve the thing being evolved, or the system doing the evolving?
