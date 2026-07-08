# What is the Darwin Godel Machine changing?

- Type: question
- Marker: Evolutionary Search / Darwin Godel Machine
- Created: 2026-07-08T23:23:54.000Z

## Summary

Darwin Godel Machine is an evolutionary self-improvement setup where the object being evolved is the coding agent's own harness-code repository. This is different from AlphaEvolve-style solution improvement: AlphaEvolve mainly evolves candidate programs or algorithms, while DGM evolves versions of the agent/harness that writes and edits code. A parent agent reads its own benchmark logs, proposes harness-code changes, creates a child agent, and the child is evaluated; good child agents are kept in the population.

## Interaction

### user

what is this?

Unlike the methods above, which focus on solution improvement, Darwin Gödel Machine (DGM; [Zhang et al. 2025](https://arxiv.org/abs/2505.22954)) e

### assistant

DGM is the more direct self-improving-agent version of evolutionary search.

AlphaEvolve asks: can we evolve better solution programs?

DGM asks: can we evolve better versions of the coding agent/harness itself?

The loop is: start with one coding agent, run it on benchmarks, inspect failure logs, let that agent edit its own harness code, create a child agent, evaluate the child, and keep it if it performs well.

The model weights stay fixed; the surrounding agent code changes.

Check-back: compared with AlphaEvolve, is DGM evolving the code solution to a task, or the agent/harness that solves tasks?
