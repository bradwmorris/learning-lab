# What is the TLDR of Continual Harness?

- Type: question
- Marker: Abstract / Introduction
- Created: 2026-07-09T04:32:56.106Z

## Summary

The paper argues that long-running embodied agents can improve by editing their harness, not just by updating model weights. Continual Harness starts with a minimal game interface, lets the agent act, then periodically has a refiner rewrite prompts, sub-agents, skills, and memory from recent trajectory failures. In Pokemon experiments, this reduces wasted button presses and recovers much of the gap to a hand-engineered expert harness; the gains are strongest when the underlying model is capable enough. The paper also extends the loop to open-source model training, where a frontier teacher relabels rollouts and the model and harness improve together without environment resets.

## Media

_No media recorded._


## Interaction

### user

give me the tldr of this

### assistant

TLDR: this paper says self-improving agents may improve fastest by changing the harness around the model: prompts, tools, sub-agents, skills, and memory, while the agent is still in the middle of a long task. The authors test this in Pokemon. Starting from a minimal interface, the agent plays, notices failures through a refiner, edits its own harness, and keeps going without resetting. This makes frontier models much more efficient than a barebones baseline and recovers much of the gap to a hand-built expert system. Then they add model-weight learning too: an open-source model plays through the improving harness, a stronger teacher labels bad/good process windows, and the model is updated. So the big claim is: the path to self-improving agents is not only better base models; it is a live loop where model behavior creates data, the harness rewrites itself, and eventually the model learns from those improved trajectories. Check-back: if you had to explain why reset-free matters here, what would you say is lost when every training update restarts the game from the beginning?
