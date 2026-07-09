# Why are fuzzy evaluators the bottleneck for self-improving harnesses?

- Type: question
- Marker: Final synthesis grill / evaluator bottleneck
- Created: 2026-07-09T01:30:46.000Z

## Summary

The central bottleneck is that many valuable tasks do not have unit-test-shaped feedback. For summaries, research taste, idea ranking, and learning artifacts, the evaluator must judge whether the output captured the real crux, prioritized the right ideas, and will remain useful later. If that verifier has weak taste, the self-improvement loop can optimize for shallow proxies instead of real value.

## Interaction

### user

im not an expert software eng, but i undersand how some thing, like unit tests for example, might indicate whether something is right/wrong - but most things aren't this shape > ie,

let's think of some examples here?

- does the summary capture the crux of the argument?
- were the ideas extracted and ranked correctly?

so this all just depends on whether or not the final verifier has good taste to understand if the output is good/bad?

### assistant

Yes, that is the evaluator bottleneck. Unit tests give crisp feedback, but many research and learning outputs require judgment: did the summary catch the real crux, did the ranking reflect importance, and will the artifact be useful later? In those cases, the loop is only as good as the verifier's taste or the proxy signals it uses.
