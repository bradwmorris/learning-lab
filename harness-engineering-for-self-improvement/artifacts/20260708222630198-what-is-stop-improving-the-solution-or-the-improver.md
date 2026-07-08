# What is STOP improving: the solution or the improver?

- Type: stuck
- Marker: Self-Improving Harness / STOP
- Created: 2026-07-08T22:26:30.198Z

## Summary

STOP is about improving the improver, not just improving one answer. An improver is a procedure that takes a candidate solution, a scoring function, and a language model, then returns a better solution. STOP evaluates an improver across many downstream tasks using meta-utility: the average quality of solutions it produces. Then it asks the model to create a better version of the improver itself. This is recursive scaffolding improvement: use the current improver to improve the mechanism that improves future solutions.

## Media

_No media recorded._


## Interaction

### user

i don't understand this:

Self-Taught Optimizer (STOP; [Zelikman et al. 2023](https://arxiv.org/abs/2310.02304)) is one of the early examples of recursive scaffolding improvement. A seed improver at step takes an initial solution, a utility function, and a black-box language model, and returns an improved solution. The goal of STOP is not directly to improve the solution but to improve the improver itself. First, let’s define the meta-utility as the average utility of a given improver function over a collection of downstream tasks. Because improving the improver function is an optimization problem itself, we can recursively get a new version of the improver based on its performance measured by meta-utility via a self-improvement update.

### assistant

Ignore the math first. STOP is saying: don't just use the model to improve one answer; use the model to improve the procedure that improves answers. Imagine you have a helper script called `Improve(solution)`. You give it a rough answer, and it returns a better answer. Normal optimization asks: did the answer get better? STOP asks: can we make `Improve` itself better, so future answers improve more reliably? The pieces are: initial solution = rough draft; utility function = scoring rule; black-box model = the LLM; improver = the method/scaffold that uses the model to improve the draft; improved solution = better draft; meta-utility = average score of the improver across many tasks. Then the recursive step is: use the current improver plus its performance results to propose a better improver. Simple analogy: instead of only improving one essay, you improve your editing checklist. Then that better checklist improves future essays. Check-back: in STOP, is the main target the individual solution, or the method that improves solutions?
