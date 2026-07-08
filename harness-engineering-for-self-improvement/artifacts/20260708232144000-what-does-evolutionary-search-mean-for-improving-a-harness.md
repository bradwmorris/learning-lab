# What does evolutionary search mean for improving a harness?

- Type: stuck
- Marker: Section: Evolutionary Search
- Created: 2026-07-08T23:21:44.000Z

## Summary

Evolutionary search means treating harness designs as candidate programs: generate variations, evaluate them with tests or benchmarks, keep better ones, and use those as parents for the next round. In this article, it is the same basic idea as natural selection, but applied to code, workflows, prompts, memory rules, and optimizer logic.

## Interaction

### user

help me really udnerstand this section

Evolutionary Search

### assistant

Evolutionary search here means selection over executable designs.

You do not just ask the model for one best harness. You keep a population of candidates, mutate or recombine them, evaluate each one, keep the ones that score well, and use those as parents for the next generation.

In this section, Weng is saying that because harnesses can be represented as code, they become searchable objects. A candidate might differ in prompt wording, workflow order, retry policy, memory format, tool-use logic, or evaluator logic.

The evolutionary loop is:

candidate design -> run it -> score it -> keep/reject -> generate variants

The important part is the evaluator. Without an external score, it is just brainstorming. With a score, the system can search.

AlphaEvolve is the clean example: candidate programs are mutated by LLMs, tested by an evaluator, and successful variants stay in the pool. The same principle can apply to harnesses: evolve the system around the model, not necessarily the model weights.

Check-back: if a harness variant survives into the next round, what made it survive: the model liked the idea, or evaluation showed it worked better?
