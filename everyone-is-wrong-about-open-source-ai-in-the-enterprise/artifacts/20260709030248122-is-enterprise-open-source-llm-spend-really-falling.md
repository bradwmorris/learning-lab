# Is enterprise open-source LLM spend really falling?

- Type: question
- Marker: Claim: open source is eating enterprise / 11% vs 19%
- Created: 2026-07-09T03:02:48.122Z

## Summary

The paradox is that the story people tell says open source is winning, but one important enterprise metric says open source share is falling. Zhang's resolution is maturity: a use case means a specific business job AI is deployed to do, like customer support triage, coding assistance, invoice extraction, sales email drafting, legal review, or internal search. Most enterprise use cases are still immature, so teams buy frontier closed models while discovering the workflow. Mature, repeated, high-volume use cases are where open models can be fine-tuned and optimized.

## Media

_No media recorded._


## Interaction

### user

Go and spend a good deal of time trying to validate or invalidate the claim: “The prevailing story right now is that open source is eating the enterprise... open source models just fell to 11% of enterprise LLM spend, down from 19% a year ago.” Deep background websearch.

### assistant

Researched Menlo Ventures 2024, mid-year 2025, and December 2025 enterprise reports; Hugging Face Spring 2026 open-source ecosystem data; OpenRouter/a16z 100T-token usage study; Linux Foundation open-source AI adoption research; TechCrunch coverage of Menlo; and current market reporting on AI cost pressure. Working conclusion: Menlo supports the directional enterprise API-share claim, with important methodology caveats; broader ecosystem data supports the counter-narrative that open-weight models are growing quickly outside large-enterprise API spend.

### user

What exactly is the paradox? Is it that the narrative says open source is winning, but numbers say open source is losing?

### assistant

Yes, that's the basic paradox, with one precision: the numbers do not prove open source is losing overall. They show open source losing share in a specific enterprise LLM API/spend metric, while the broader narrative says open source is gaining fast in capability, developer adoption, startup usage, and some production workloads.

The puzzle is why both can be true at once. The answer is scope and maturity: new enterprise use cases spend on frontier closed models, while mature or cost-sensitive workloads are where open models tend to grow.

Check-back: if open models are used heavily for cheap high-volume tasks, but closed models are used for expensive frontier tasks, which side might win on usage volume and which side might win on dollar spend?

### user

Enterprise as a whole is at the beginning of the maturity curve? What exactly does he mean by "use cases"?

### assistant

A use case is a specific business job or workflow where AI is being applied, not AI in general.

Examples: answering customer support tickets, summarizing sales calls, reviewing contracts, generating code, extracting invoice fields, routing insurance claims, searching internal documents, or drafting marketing copy.

When Zhang says enterprise AI is early in the maturity curve, he means most of these workflows are still in discovery: teams are figuring out the inputs, desired outputs, edge cases, evaluation criteria, and ROI. In that stage they buy powerful frontier models because flexibility matters.

Once the workflow is stable and high-volume, they can fine-tune a smaller open model to do that narrow job quickly and cheaply.

Check-back: pick one use case, like customer support. What would make it mature enough to replace a frontier model with a smaller fine-tuned open model?
