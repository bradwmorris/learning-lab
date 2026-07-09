# How does map versus territory explain agent unknowns?

- Type: stuck
- Marker: Section 1: map versus territory
- Created: 2026-07-09T04:48:42.691Z

## Summary

In the article, the map is the prompt, plan, skill file, or context you give the agent. The territory is the actual task: the codebase, constraints, edge cases, product taste, and real-world mess. Unknowns are the gaps between those two. When the map is incomplete, the agent must guess what the territory requires.

## Media

_No media recorded._


## Interaction

### user

the map is not the territory. how is this related?

### assistant

The map is what you give the agent: your prompt, plan, examples, skills, and context. The territory is the real thing the agent has to work inside: the actual codebase, the product constraints, the edge cases, your taste, the user need, and all the messy details. The article is saying: agent failures often happen in the gap between those two. Your prompt might sound clear as a map, but the real task may contain things the map did not describe. Those gaps are what Thariq calls unknowns. So when Claude or Fable makes a bad choice, it may not be because it cannot code. It may be because the map you gave it did not match the territory it had to navigate. Check-back: imagine you ask an agent to add a login button. What is one thing that might exist in the territory that was not obvious from that simple map?
