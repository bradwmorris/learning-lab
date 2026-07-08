# Why is full RSI still hard?

- Type: question
- Marker: Future Challenges
- Created: 2026-07-08T23:25:37.000Z

## Summary

Weng's simple point is that self-improvement loops work best when success is easy to measure, but real research and real software work are hard to measure. The main bottlenecks are fuzzy evaluators, growing memory, poor handling of negative results, diversity collapse, reward hacking, short-term optimization, and the need for human oversight. These are all ways the loop can look like it is improving while actually becoming narrower, brittle, or misaligned with long-term value.

## Interaction

### user

explain this simple

Toward full RSI, researchers have made real progress, but several bottlenecks remain...

### assistant

The simple version: current self-improvement works best when the system has a clear scoreboard.

Coding tests pass or fail. A kernel is faster or slower. A benchmark score goes up or down.

But real research and real engineering often do not have a clean scoreboard.

Weak evaluators mean we cannot easily tell if an idea is actually good.

Context and memory means long projects need durable memory, not just a giant prompt.

Negative results means agents must learn from failures, not only chase successes.

Diversity collapse means optimization may produce many copies of the same decent idea.

Reward hacking means the agent may game the metric instead of solving the real problem.

Long-term success means short-term task wins may damage maintainability or future work.

Humans still matter because judgment, taste, safety, and long-term direction are not fully captured by current metrics.

Check-back: which bottleneck is the root of many others: bad memory, or bad measurement/evaluation?
