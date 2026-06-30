# What is the big bet AI labs are making with this training paradigm?

- Type: stuck
- Marker: 00:00 - The big research bet the labs are making
- Created: 2026-06-30T01:27:15.447Z

## Summary

The big bet is that labs can spend enormous compute on sample-inefficient trial-and-error training as long as the resulting lessons become durable model improvements. The economics work only if learning is amortized across future sessions by updating the model weights, not merely spent inside one temporary run.

## Media

_No media recorded._


## Interaction

### user

can you really help me understand > what is he claiming is the big bet labs are making? 
the 'big bet the labs are making': 
' this kind of training' - these things can be steamrolled etc, when you have enough compute. they are 1 1millionth as sample efficiency. ammortised across sessions

### assistant

Here’s the claim in plain terms:

The big bet is: **even if this new kind of training is insanely inefficient per attempt, labs can make it work by throwing huge compute at it, as long as the learning becomes reusable.**

Think of two cases.

Case 1: the model spends 1 million attempts solving one hard task, but afterward it is only better inside that one chat/session. That is bad. The compute is “spent” and mostly disappears.

Case 2: the model spends 1 million attempts solving many hard tasks, and the lessons get trained back into the model’s weights. Now future users get the benefit without rerunning those 1 million attempts. That is amortized learning.

So “1 millionth as sample efficient” means: compared with a human, the AI may need vastly more trial-and-error examples to learn the same thing. Dwarkesh is saying labs may not care if compute is cheap/abundant enough and if the result gets baked into the model. They can “steamroll” sample inefficiency with scale.

The key phrase is probably **getting the learning back to the weights**. If the model only learns during a temporary reasoning trace, it doesn’t compound. If the learning updates the base model, then every expensive training episode becomes an investment in the next model.

Check-back: if an AI uses tons of compute to solve a task once, what has to happen for that compute to become a reusable improvement rather than just a one-off expense?
