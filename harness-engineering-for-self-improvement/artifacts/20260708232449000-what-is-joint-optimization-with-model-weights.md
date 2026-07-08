# What is joint optimization with model weights?

- Type: question
- Marker: Section: Joint Optimization with Model Weights
- Created: 2026-07-08T23:24:49.000Z

## Summary

Joint optimization with model weights means improving two layers in the same loop: the harness around the model and the model parameters themselves. Earlier examples usually keep the base model fixed and change prompts, memory, workflow, tools, or harness code. Joint optimization asks whether the system should sometimes update the harness and sometimes train or adapt the model weights, based on feedback from recent task trajectories.

## Interaction

### user

Joint Optimization with Model Weights - what is?

### assistant

This is the section where Weng says: until now, most examples improved the non-parametric layer around the model, meaning the harness.

Joint optimization means the loop can improve both:

harness = external machinery around the model

model weights = the model itself

Harness update means changing prompts, tools, memory, workflow, permissions, evaluators, retry logic, etc.

Weight update means changing the model parameters through training, fine-tuning, continual learning, or test-time adaptation.

The SIA example has a feedback agent that looks at recent trajectories and chooses which kind of update is needed next:

change the harness, or update the model weights.

Check-back: if the agent fails because it used the wrong workflow, which layer should change? If it fails because the model lacks the skill even with the right workflow, which layer should change?
