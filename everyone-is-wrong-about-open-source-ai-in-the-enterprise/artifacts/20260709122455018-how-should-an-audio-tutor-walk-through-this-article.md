# How should an audio tutor walk through this article?

- Type: insight
- Marker: Whole article
- Created: 2026-07-09T02:24:55.018Z

## Summary

Use the tutor prompt to read each logical section of Jesse Zhang's article almost verbatim, then add brief plain-English context and ask whether the user is ready to continue.

## Interaction

### user

Create a prompt that breaks this article into logical sections, adds more context/colour, and has another agent talk me through each section in plain terms over audio. Ensure every section is read almost verbatim.

### assistant

Created [tutor-prompt.md](../tutor-prompt.md), a resource-level audio walkthrough prompt with eight logical sections, near-verbatim read-aloud text, plain-English context, check-back questions, and ready-to-continue prompts after each section.

### user

I want you to break this article up into logical sections, add more context/colour to it, etc.

Create me a prompt with those sections, so another agent will just talk me through each section in plain and simple terms, engaging me, asking me if ready to move to next - I will be speaking via audio.

JUST ENSURE EVERY SINGLE SECTION IS READ TO ME ALMOST VERBATIM.

### assistant

Tightened [tutor-prompt.md](../tutor-prompt.md) so the next audio tutor must treat each `READ ALOUD` block as source text to be read first, almost verbatim, without skipping, compressing, or summarizing before the plain-English explanation. The prompt now also requires an explicit ready-to-continue answer before moving on.
