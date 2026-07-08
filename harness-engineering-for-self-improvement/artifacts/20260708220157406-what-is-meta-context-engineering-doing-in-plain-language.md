# What is Meta Context Engineering doing in plain language?

- Type: stuck
- Marker: Context Engineering / Meta Context Engineering notation
- Created: 2026-07-08T22:01:57.406Z

## Summary

MCE separates two things: the context itself and the method for building context. A skill is a recipe for constructing useful context for a task. Static components are reusable resources like prompts, knowledge bases, and code libraries. Dynamic operators are actions like search, selection, filtering, and formatting. The inner loop tries to build the best context for training tasks using a given skill. The outer loop chooses or evolves the best skill by checking validation performance. A meta-agent combines prior successful skills to create new skill recipes, while a base-level context engineer executes the recipe and updates context from rollout feedback.

## Media

_No media recorded._


## Interaction

### user

you're going to have to take me through all this - don't understand

An MCE skill defines a context function and maps an input to context, where:

static components are prompts, knowledge bases, code libraries. dynamic operators are search, selection, filtering, formatting. The bi-level optimization is to find the best context given skill on the training data, while the outer loop finds the optimal skill that provides the best performance on the validation set. The skill database tracks the history of previous skills, context functions and eval metrics. A meta-level agent performs agentic crossover over prior skills to create a new skill given a task. Then a base-level context engineer executes the skill and learns the context function from rollout feedback, guided by the current skill.

### assistant

Think of MCE as optimizing the recipe for building context, not just optimizing one context note. In ACE, the system improves a playbook of useful context bullets. In MCE, the system asks a higher-level question: what is the best method for creating and updating that playbook? A skill is the recipe. It says: for this kind of task, use these resources, search these places, select this kind of evidence, format it this way, and update memory like this. Static components are the ingredients that do not change much: prompts, knowledge bases, code libraries. Dynamic operators are the actions the recipe performs: search, select, filter, format. Inner loop: given one recipe, find the best context it can produce on training examples. Outer loop: compare recipes on validation examples and pick/evolve the recipe that generalizes best. Skill database: memory of old recipes, contexts, and scores. Crossover: combine useful pieces of previous recipes to create a new recipe. Base-level context engineer: runs the recipe and updates context from trial-and-error feedback. One sentence: ACE improves the context; MCE tries to improve the method that improves the context. Check-back: in this setup, is the 'skill' the actual context shown to the model, or the recipe for constructing that context?
