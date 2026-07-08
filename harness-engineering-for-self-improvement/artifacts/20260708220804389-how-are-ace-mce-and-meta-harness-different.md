# How are ACE, MCE, and Meta-Harness different?

- Type: question
- Marker: Context Engineering / ACE vs MCE vs Meta-Harness
- Created: 2026-07-08T22:08:04.389Z

## Summary

Yes, they are related but different levels. ACE optimizes the context content: it maintains a structured playbook of useful context items. MCE optimizes the method for constructing context: it evolves skills/recipes for finding, selecting, filtering, and formatting context. Meta-Harness goes broader and optimizes harness code itself: the source code that decides what to store, retrieve, and present to the model. The progression is context content, context-building recipe, then broader harness code.

## Media

_No media recorded._


## Interaction

### user

is this a different thing again?

so there's ace, mce and https://arxiv.org/abs/2603.28052

### assistant

Yes. They are three related ideas at different levels. ACE: optimize the context itself. It keeps a cleaner playbook of useful lessons/bullets, instead of dumping everything into the prompt. MCE: optimize the recipe for building context. It asks: what skill/process should we use to search, select, filter, format, and update context? Meta-Harness: optimize the harness code more broadly. The arXiv paper is Meta-Harness: End-to-End Optimization of Model Harnesses. Its target is not just context notes or context recipes; it searches over the code that determines what information to store, retrieve, and present to the model. So the ladder is: ACE = better context memory; MCE = better method for making context memory; Meta-Harness = better harness code around the model, including context management. Check-back: which one is broadest: ACE, MCE, or Meta-Harness?
