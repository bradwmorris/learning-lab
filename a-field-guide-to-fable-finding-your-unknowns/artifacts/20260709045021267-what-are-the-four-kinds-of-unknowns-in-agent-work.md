# What are the four kinds of unknowns in agent work?

- Type: stuck
- Marker: Section 2: four kinds of unknowns
- Created: 2026-07-09T04:50:21.267Z

## Summary

The four unknown types separate what is already specified, what is consciously unresolved, what is tacit but unstated, and what is outside the user's current frame. In agentic work, failures often come from the last two: the agent cannot infer your unstated taste or domain assumptions, and neither of you may notice a missing constraint until the real task exposes it.

## Media

_No media recorded._


## Interaction

### user

these things:

Known Knowns: This is essentially what is in my prompt. What do I tell the agent that I want?
Known Unknowns: What haven't I figured out yet, but I’m aware that I haven’t?
Unknown Knowns: What's so obvious I’d never write it down, but would recognize it if I saw it?
Unknown Unknowns: What haven't I considered at all? What knowledge am I not aware of? Do I know how good something can be?

### assistant

Think of these as four buckets for the gap between your prompt and the real task. Known knowns are the explicit instructions: 'add a login button to the header.' Known unknowns are open decisions you know about: 'I haven't decided whether login opens a modal or goes to a new page.' Unknown knowns are tacit expectations: you never said it, but you would instantly notice if the button looked off-brand or appeared on mobile in the wrong place. Unknown unknowns are missing considerations outside your frame: maybe the app already has auth middleware, accessibility rules, analytics events, or a security constraint you did not know existed. The article's point is that better agent work means surfacing these buckets earlier, before the agent guesses badly. Check-back: for a login button task, give me one example of an unknown known versus an unknown unknown.
