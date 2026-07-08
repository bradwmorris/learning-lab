# How does AlphaEvolve work?

- Type: question
- Marker: Evolutionary Search / AlphaEvolve
- Created: 2026-07-08T22:43:37.848Z

## Summary

AlphaEvolve is an evolutionary search system for improving programs. It keeps a pool of candidate programs, asks frozen LLMs to generate code diffs that mutate/improve parent programs, runs each child program against an evaluator, and keeps successful children in the pool. The prompt gives the LLM the parent program, past results, instructions, and sometimes meta information. Code regions can be marked as evolvable blocks, and even the meta-prompt can evolve. It fits the article because it shows how code becomes an executable search space: propose code changes, run them, score them, keep the better variants.

## Media

_No media recorded._


## Interaction

### user

take me through the whole alphaevolve thing

### assistant

AlphaEvolve is evolutionary search over code. Start with candidate programs in a pool. Pick a parent program. Give an LLM the parent code, results so far, instructions, and sometimes meta information. The LLM proposes a code diff, a small mutation/improvement. Run the child program. Score it with an evaluator, such as speed, correctness, benchmark score, or scientific objective. If it improves or is useful, keep it in the pool. Repeat. Over time the pool evolves toward better programs. The important details in Weng's summary: the LLM is frozen, so the model weights are not changing; the system improves by changing candidate programs. The agent may see the full repo, but only certain marked regions may be meant for evolution, such as `EVOLVE-BLOCK-START` / `EVOLVE-BLOCK-END`. The meta-prompt can also evolve, meaning the instructions for generating future mutations can improve too. How it fits: AlphaEvolve is not primarily harness self-improvement; it is solution/program evolution. Weng uses it to show why evolutionary search works well when candidates are executable and easy to score. Check-back: in AlphaEvolve, what is evolving: the LLM's weights, or the pool of candidate programs and prompts used to mutate them?
