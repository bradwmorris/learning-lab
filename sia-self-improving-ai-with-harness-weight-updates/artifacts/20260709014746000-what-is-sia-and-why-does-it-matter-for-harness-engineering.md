# What is SIA and why does it matter for harness engineering?

- Type: question
- Marker: Background research / full-paper map
- Created: 2026-07-09T01:47:46.000Z

## Summary

SIA tries to combine two previously separate self-improvement levers: harness/scaffold updates with model weights fixed, and test-time training/RL with the harness fixed. Its Feedback-Agent reads trajectories and metrics, then chooses whether to rewrite the task agent's scaffold or trigger a LoRA/RL weight update. The key claim is that harness updates improve how the model searches and acts, while weight updates internalize domain-specific patterns that no prompt or scaffold can easily instill. The evidence is interesting but should be read cautiously because it depends on verifier-shaped tasks and Weng flags confounds in the experiments.

## Interaction

### user

go and do deep background websearch on this > along with the surrounding information and dig right into the supporting research >

https://arxiv.org/abs/2605.27276

so that I really understand this deeply

### assistant

SIA sits at the intersection of harness self-improvement systems such as DGM, Meta-Harness, ADAS, and Self-Harness, and weight-update systems such as TTT, TTRL, TTT-Discover, STaR, and self-play fine-tuning. The core test is always: what object is being improved, what feedback selects the improvement, and whether the verifier is strong enough to avoid Goodharting.
