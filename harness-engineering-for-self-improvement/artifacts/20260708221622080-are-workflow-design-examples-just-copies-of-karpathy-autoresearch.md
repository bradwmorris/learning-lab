# Are workflow design examples just copies of Karpathy autoresearch?

- Type: question
- Marker: Workflow Design / auto-research examples
- Created: 2026-07-08T22:16:22.080Z

## Summary

The workflow design examples are not simply copies of Karpathy's autoresearch, but they share the same core idea: make research or agent work into an explicit loop or pipeline that can be run, evaluated, and improved. AI Scientist builds a research-paper pipeline; ScientistOne emphasizes evidence and verifiability; Autodata uses challenger/solver/verifier roles to generate useful data; ADAS searches over agent workflow designs; AFlow represents workflows as graphs and optimizes them. The progression moves from handcrafted research workflows toward automated search over workflow designs.

## Media

_No media recorded._


## Interaction

### user

im in the workflow design section >

help me understand through this>

are all these examples basically examples which copied karpathy's auto-research to.create some self improving research system? explain those to me

### assistant

Not exactly copied from Karpathy, but yes, they are in the same family. Karpathy's autoresearch is a clean minimal example of the pattern: turn research into a loop where the agent proposes, executes, observes results, improves, and repeats. The Workflow Design section is showing variations of that broader idea. AI Scientist: a handcrafted research pipeline: generate idea -> write code -> run experiments -> analyze results -> write paper -> review. ScientistOne: similar research automation, but with verifiability as the main constraint: every claim must trace back to evidence. Autodata: not full paper-writing; it is a workflow for generating training/eval data using roles like challenger, weak solver, strong solver, and verifier. ADAS: instead of hand-designing one workflow, a meta-agent designs new agent workflows in code, evaluates them, and keeps successful ones. AFlow: represents workflows as graphs and uses search to improve the graph. So the progression is: handcrafted auto-research workflow -> evidence-constrained workflow -> data-generation workflow -> automated search over workflow designs. Check-back: which examples are manually designed workflows, and which ones are trying to search for better workflows automatically?
