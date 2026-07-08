# Is ADAS a real system or just a concept?

- Type: question
- Marker: Workflow Design / ADAS
- Created: 2026-07-08T22:19:57.338Z

## Summary

ADAS is a real research framework and implemented algorithm, not just a concept. Hu, Lu, and Clune propose Meta Agent Search: start with an archive of simple agent workflows, have a meta-agent write new agent workflow code inspired by prior designs, evaluate candidates, and add successful ones back to the archive. It is a research prototype for automatically discovering better agent designs, not necessarily a deployed product.

## Media

_No media recorded._


## Interaction

### user

is this a real system being explained here?

 Automated Design of Agentic Systems (ADAS; [Hu et al. 2025](https://arxiv.org/abs/2408.08435)) formulates agent design itself as an optimization problem, “meta-agent search” where a meta-agent proposes new designs of agentic workflows.

Initialize an archive of agentic workflows with simple agents such as CoT and self-refine.
Ask a meta-agent to program new agents, all in code, inspired by existing solutions in the archive.
The meta-agent first generates a high-level description of the new workflow, and then implements it in code.
The draft program then goes through two self-refine steps (i.e. ask the model to provide feedback and then ask the same model to refine the previously generated outputs based on the feedback; [Madaan et al. 2023](https://arxiv.org/abs/2303.17651)) by the meta-agent to check its novelty.
Evaluate each new candidate and add successful ones back to the archive.
Repeat steps 2-3 until the maximum iteration count is reached.

### assistant

Yes. ADAS is a real research framework/paper, and the authors demonstrate an implemented algorithm called Meta Agent Search. It is not just a metaphor. But treat it as a research prototype, not necessarily a polished product people are using day-to-day. What it does: start with simple agent designs, like Chain-of-Thought or self-refine; keep them in an archive; ask a meta-agent to invent a new agent workflow, described in plain language and then implemented in code; run self-refinement on the draft; evaluate the new agent; if it works well, add it to the archive; repeat. The key idea is recursive-ish: an agent is designing better agents. Not by changing model weights, but by changing the workflow/scaffold around the model. Check-back: in ADAS, what is being improved: the base model weights, or the code/workflow that wraps the model?
