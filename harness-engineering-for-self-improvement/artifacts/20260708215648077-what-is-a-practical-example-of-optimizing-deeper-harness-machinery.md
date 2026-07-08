# What is a practical example of optimizing deeper harness machinery?

- Type: question
- Marker: Harness Optimization / surface text to deeper system machinery
- Created: 2026-07-08T21:56:48.077Z

## Summary

A practical example is improving a coding agent. At the surface level, you tune the prompt wording. Deeper, you change what context it receives, then the workflow it follows, then the harness code that manages tools, tests, permissions, memory, and retries. At the deepest level, you improve the optimizer that automatically searches over prompts, contexts, workflows, and harness code. The same goal shifts from editing instructions to editing the machinery that produces better behavior.

## Media

_No media recorded._


## Interaction

### user

can we just come back to this:

the optimization target moves from surface text to deeper system machinery.

give me more practical example of this

### assistant

Practical example: imagine you want a coding agent to fix bugs more reliably. Surface text: change the prompt from 'fix the bug' to 'inspect the failing test, identify root cause, make a minimal change, run tests.' Structured context: change what the agent sees: include the failing test output, relevant files, recent diffs, repo conventions, and known gotchas. Workflow: change the loop: reproduce failure -> inspect code -> patch -> run focused test -> run broader test -> summarize. Harness code: change the actual system: automatically detect test commands, capture logs, restrict risky shell commands, save intermediate notes, retry on flaky failures, require approval for destructive actions. Optimizer code: change the system that searches for better versions of all the above: it tries different prompts/workflows/tool policies, scores them on benchmark tasks, and keeps the best variants. So 'deeper machinery' means you stop only asking 'what words should I put in the prompt?' and start asking 'what process, tools, memory, checks, and improvement loop should surround the model?' Check-back: in the bug-fixing example, which change is deeper: telling the model 'be careful', or changing the harness so it must run tests and inspect failures before declaring success?
