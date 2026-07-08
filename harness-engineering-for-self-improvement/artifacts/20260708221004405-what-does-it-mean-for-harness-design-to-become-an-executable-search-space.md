# What does it mean for harness design to become an executable search space?

- Type: question
- Marker: Meta-Harness / executable search space
- Created: 2026-07-08T22:10:04.405Z

## Summary

The claim is that if harness design choices are represented as editable, runnable code, then an AI coding agent can search over those choices the way a human engineer would: change retrieval logic, memory format, prompt assembly, tool policies, workflow loops, evals, and retry behavior; run the harness; score it; keep improvements. The design space is 'executable' because each candidate harness can actually be run and evaluated, not just discussed as an idea.

## Media

_No media recorded._


## Interaction

### user

i don't fully understand this >

Still, the important lesson is clear: once harness design becomes an executable search space, a strong coding agent can exploit the same design space human engineers use.

### assistant

She means: if the harness is written as code that can be edited, run, tested, and scored, then improving the harness becomes a search problem a coding agent can work on. Human engineers improve a harness by trying design changes: change how context is retrieved, change how memory is stored, change the workflow loop, change tool permissions, change evals, change retries, run experiments, compare results. Once those choices live in executable code, a strong coding agent can do the same thing: propose a change, edit the harness, run it on benchmark tasks, inspect failures, keep or discard the change. 'Executable search space' = a set of possible harness designs that can actually be run and evaluated. 'Same design space human engineers use' = prompts, retrieval, memory, tools, workflows, evals, code structure, policies, and logging. Concrete example: instead of asking an agent 'what would be a better memory system?', you let it edit the memory module, run 100 tasks, measure accuracy/token cost/failures, and keep the version that works better. Check-back: why does it matter that the design space is executable rather than just described in prose?
