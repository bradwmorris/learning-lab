# What does the progression from prompts to optimizer code mean?

- Type: question
- Marker: Harness Optimization / optimization targets progression
- Created: 2026-07-08T21:54:47.350Z

## Summary

Weng is describing a progression in what the AI system can improve. Early systems optimize simple instructions or prompts. More advanced systems optimize structured context and workflows: what information is shown and what steps are followed. Stronger systems can edit the harness code itself: the tools, loops, memory, and evaluation logic. The most advanced version optimizes the optimizer code: the machinery that searches for and improves future harnesses. The target moves from small surface text to deeper system machinery.

## Media

_No media recorded._


## Interaction

### user

don't really understand this >

The progression in the object being optimized in the harness system is roughly: instruction [prompts](https://lilianweng.github.io/posts/2023-03-15-prompt-engineering/) → structured context → workflow → harness code → optimizer code. As the model becomes more intelligent and powerful, we move toward more complex targets and generic methods.

### assistant

She is saying: as models get stronger, we stop only tuning the words we give them, and start tuning deeper parts of the system. Think of it as levels. Level 1, instruction prompts: change the wording, like 'think step by step' or 'be concise.' Level 2, structured context: change what information the model sees and how it is organized, like summaries, examples, rules, memory, retrieved docs. Level 3, workflow: change the process the model follows, like plan -> act -> test -> revise. Level 4, harness code: change the actual software wrapper: tool APIs, memory system, permission logic, eval code, retry behavior. Level 5, optimizer code: change the code that searches for better prompts/workflows/harnesses in the first place. The key idea: weak models can only help with simple surface changes. Stronger models can modify more abstract machinery. Check-back: if an agent changes the wording of its instructions, which level is that? If it changes the loop from 'answer once' to 'write code, run tests, fix failures,' which level is that?
