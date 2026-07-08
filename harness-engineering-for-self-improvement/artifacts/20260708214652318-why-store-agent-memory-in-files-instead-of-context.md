# Why store agent memory in files instead of context?

- Type: question
- Marker: Pattern 2: File System as Persistent Memory
- Created: 2026-07-08T21:46:52.318Z

## Summary

Yes: Weng is listing examples of durable state that should live outside the model's immediate context. The point is not just 'store memories'; it is 'do not make the chat/context window carry the whole long-running task.' Experiment logs, code diffs, paper summaries, error traces, and rollout histories can become too large, so the harness saves them in files and retrieves the relevant pieces when needed.

## Media

_No media recorded._


## Interaction

### user

these are just a quick mention of things that should be stored in 'memory' right?

A recurring pattern in long-horizon agent systems is simple control over rich states and artifacts. A harness should not carry the entire workflow and all logs in context; instead, it should keep durable state in files. In long-horizon agentic rollout, artifacts such as experiment logs, code diffs, paper summaries, error traces, and past rollout trajectories often grow much longer than the context window that the model has trained for.

### assistant

Yes, but with one sharper distinction: she means file-backed memory, not memory as 'stuff currently in the prompt.' Those examples, experiment logs, code diffs, paper summaries, error traces, and past trajectories, are the durable record of a long task. They should be stored somewhere stable, usually files, because they can get too large for the model's context window. The model can later read the relevant pieces back in. So the pattern is: context = short-term working memory; files = long-term task memory/artifact store. Check-back: if an agent runs 40 experiments, should every log stay inside the prompt forever, or should the harness save logs to files and pull in only the relevant parts when needed?
