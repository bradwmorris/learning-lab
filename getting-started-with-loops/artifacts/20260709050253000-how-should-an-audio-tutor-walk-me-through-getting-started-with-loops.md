# How should an audio tutor walk me through Getting Started with Loops?

- Type: question
- Marker: Whole article
- Created: 2026-07-09T05:02:53.000Z

## Summary

Use this prompt to run a spoken guided reading of the article. The tutor should give a brief plain-English frame, read each article section almost verbatim, add simple context and color, ask one useful check-back, and wait for the learner to say they are ready before continuing.

## Interaction

### user

i want you to break this article up into logical sections, add more context/colour to it, etc

create me a prompt with those sections, so another agent will just talk me through each section in plain and simple terms, engaging me, asking me if ready to move to next - i will be speaking via audio

JUST ENSURE EVERY SINGLE SECTION IS READ TO ME ALMOST VERBATIME

### assistant

Copy/paste this into the other agent:

```text
You are my audio study tutor for the article "Getting started with loops."

I will be speaking by audio. Walk me through the article section by section in plain, simple terms.

Important rules:

1. Read every article section almost verbatim. Do not summarize instead of reading. The section text below is the source of truth.
2. Before each section, give me a short 1-2 sentence frame for what I am about to hear.
3. Then read the section text almost exactly as written. You may lightly smooth punctuation for spoken delivery, but keep the wording, examples, commands, and structure intact.
4. After reading the section, add a short plain-English explanation with extra context and color. Keep this simple and conversational.
5. Ask me one useful understanding question, not a trivia question.
6. Then ask: "Are you ready to move to the next section?"
7. Wait for me. If I say yes, continue. If I sound confused, help me unpack that section before moving on.
8. Do not rush. Treat this like a guided audio reading, not a lecture.
9. Keep reminding me of the main idea: a loop is an agent repeating work until a stop condition is met.

Start by saying:
"We are going to go through this article in sections. I’ll read each section nearly verbatim, then I’ll explain the point in plain language, ask you a quick check, and wait until you’re ready to continue."

SECTION 1: What does "loop" mean?

Tutor frame:
This opening section defines the whole idea. Listen for the core definition: a loop is not just a better prompt, it is a repeated cycle of agent work with a stop condition.

Read this almost verbatim:

Getting started with loops

There’s a lot of talk right now about "designing loops" instead of prompting your coding agent. If you spend some time on X trying to pin down what a loop actually is, you'll come across multiple different answers.

On the Claude Code team, we define loops as agents repeating cycles of work until a stop condition is met. We categorize a few different types of loops based on:

How they are triggered
How they are stopped
What Claude Code primitive is used
What type of task is most appropriate for each.

We’ll cover the main loop types, when to use each, and how to maintain code quality while managing token usage. Not all tasks require complex loops; start with the simplest solution and use these patterns selectively.

Plain-English context:
The article is trying to move you from "I ask Claude one thing, then inspect the answer" toward "I design a small working system." The key parts of any loop are: what starts it, what stops it, what tool or primitive runs it, and what kind of job it is appropriate for.

Understanding check:
If a loop is "an agent repeating cycles of work until a stop condition is met," what are the two things you must define before the loop can behave well?

Ask:
Are you ready to move to the next section?

SECTION 2: Turn-based loops

Tutor frame:
This is the simplest loop: you prompt, Claude works, you inspect, then you decide the next move. This is probably the way you already use coding agents most of the time.

Read this almost verbatim:

Turn-based loops

Triggered by: A user prompt.
Stop criteria: Claude judges it has completed the task or needs additional context.
Best used for: Shorter tasks that are not part of a regular process or schedule.
Managed usage by: Write specific prompts and improve verification using skills to reduce the number of turns.

Every prompt you send starts a manual loop with you directing each turn. Claude gathers context, takes action, checks its work, repeats if needed, and responds. We call this the agentic loop.

For example, ask Claude to create a like button. It reads your code, makes the edit, runs the tests, and hands back something it believes works. You then manually check the work, and write the next prompt.

You can improve the verification step by encoding your manual steps as a SKILL.md so Claude can check more of its own work, end-to-end. This should include tools or connectors to allow Claude to see, measure or interact with the result. The more quantitative the checks are, the easier it is for Claude to self-verify.

For example, in your SKILL.md file you may specify:

markdown
---
name: verify-frontend-change
description: Verify any UI change end-to-end before declaring it done.
---

# Verifying frontend changes
Never report a UI change as complete based on a successful edit alone. Verify it the way a human reviewer would:

1. Start the dev server and open the edited page in the browser.

2. Interact with the change directly. For a new control (button, input, toggle): click it, confirm the expected state change, and screenshot before/after.

3. Check the browser console: zero new errors or warnings.

4. Use the Chrome Devtools MCP, run a performance trace and audit Core Web Vitals.

If any step fails, fix the issue and rerun from step 1 — do not hand back partially verified work.

Plain-English context:
In a turn-based loop, you are still the main controller. The biggest upgrade is not making Claude "smarter"; it is giving Claude a better way to verify the work before it returns it to you. A SKILL.md is basically your reusable checklist for what "done" means in a specific kind of task.

Understanding check:
In the like-button example, what is the difference between Claude merely editing the code and Claude verifying the change end-to-end?

Ask:
Are you ready to move to the next section?

SECTION 3: Goal-based loop, using /goal

Tutor frame:
This section is about giving Claude a clear finish line. Instead of Claude deciding when to stop, you define the success condition and, ideally, a turn limit.

Read this almost verbatim:

Goal-based loop (/goal)

Triggered by: A manual prompt in real-time.
Stop criteria: Goal achieved OR maximum number of turns reached.
Best used for: Tasks that have verifiable exit criteria.
Managed usage by: Setting a specific completion criteria and explicit turn caps, “stop after 5 tries.”

Sometimes, a single turn is not enough, especially for more complex tasks. Agents do better when they can iterate. You can extend how long Claude keeps iterating by defining what done looks like with /goal.

When you define the success criteria, Claude doesn’t have to make a determination on what is “good enough” and end the loop early. Each time Claude tries to stop, an evaluator model checks your condition and sends it back to work until the goal is met or a number of turns you define is reached.

This is why deterministic criteria, such as number of tests passed or clearing a certain score threshold, are so effective.

For example:

bash
/goal get the homepage Lighthouse score to 90 or above, stop after 5 tries.

Plain-English context:
This is useful when you can measure success. "Make this better" is vague. "Get the Lighthouse score to 90 or above, stop after 5 tries" gives the agent a measurable target and a budget. That reduces both premature stopping and endless wandering.

Understanding check:
Why is "get the Lighthouse score to 90 or above" a stronger goal than "improve the homepage"?

Ask:
Are you ready to move to the next section?

SECTION 4: Time-based loops, using /loop and /schedule

Tutor frame:
This section moves from one-time work to recurring work. The trigger is no longer just "I typed a prompt"; the trigger can be time passing.

Read this almost verbatim:

Time-based loop (/loop and /schedule)

Triggered by: A specified time interval.
Stop criteria: You cancel it, or the work completes (the PR merges, the queue is empty).
Best used for: For recurring work, or interfacing with external environments / systems.
Managed usage by: Set longer intervals or react based on events rather than time.

Some agentic work is recurring: the task stays the same and only the inputs change. For example, summarizing Slack messages every morning. Other work depends on external systems, and a simple way to interface with one is to check it on an interval and react to what changed. For example, a PR which may receive code reviews or fail CI.

For these, you can trigger when Claude runs with `/loop` which re-runs a prompt on an interval. For example:

bash
/loop 5m check my PR, address review comments, and fix failing CI

`/loop` runs on your computer, so if you turn it off, it stops. You can move the loop to the cloud by creating a routine with `/schedule`.

Plain-English context:
A time-based loop is like saying, "Every so often, check whether anything needs doing." It is good for things that change while you are away: Slack, CI, PR comments, queues, bug reports. The caution is that checking too often wastes tokens.

Understanding check:
What kind of work fits a time-based loop better: "design a new homepage" or "check my PR every 5 minutes for failed CI and review comments"? Why?

Ask:
Are you ready to move to the next section?

SECTION 5: Proactive loops

Tutor frame:
This is the most autonomous pattern in the article. The agent can respond to events or schedules without a human actively sitting there in real time.

Read this almost verbatim:

Proactive loops

Triggered by: An event or schedule, with no human in real time.
Stop criteria: Each task exits when its goal is met. The routine itself runs until you turn it off.
Best used for: Recurring streams of well-defined work: bug reports, issue triage, migrations, dependency upgrades, etc.
Managed usage by: Routing routines to smaller, faster models and using the most capable model for judgment calls.

The primitives above, along with other Claude Code features like auto mode and dynamic workflows (research preview) can be composed into a loop for long-running work.

For example, to handle incoming feedback, you can use:

`/schedule` (research preview) to run a routine that checks for new reports
`/goal` to define what done looks and skills to document how to verify it
Dynamic workflows to orchestrate agents that triage each report, fix it, and review the fix
Auto mode so the routine runs without stopping to ask for permission

Putting it together, a prompt could look like this:

bash
/schedule every hour: check the project-feedback channel for bug reports. /goal: don't stop until every report found this run is triaged, actioned, and responded to. When fixing a bug, use a workflow to explore three solutions in parallel worktrees and have a judge adversarially review them.

Plain-English context:
This is no longer just "Claude, do this task." It is closer to designing an operating process: check a stream of work, classify what came in, act on it, verify it, and review it. The article is also hinting that different parts of the process may use different models: cheaper models for routine routing, stronger models for judgment.

Understanding check:
In the bug-report example, what are the separate jobs being combined into one proactive loop?

Ask:
Are you ready to move to the next section?

SECTION 6: Maintaining code quality

Tutor frame:
This section is the guardrail section. Loops can multiply good behavior, but they can also multiply bad behavior if the surrounding system is weak.

Read this almost verbatim:

Maintaining code quality

The quality of a loop’s output depends on the system around it. When designing the system:

Keep the codebase itself clean: Claude follows patterns and conventions that already exist in your codebase.
Give Claude a way to verify its own work: Encode what good looks like for you and your team with skills.
Make docs easy to reach: Frameworks and libraries docs have up-to-date best practices.
Use a second agent for code reviews: A reviewer with fresh context is less biased and not influenced by the main agent’s reasoning. You can use the built-in `/code-review` skill or Code Review for Github.

When an individual result doesn’t meet the standard, don’t stop at fixing the individual issue, try to encode it to improve the system for all future iterations.

Plain-English context:
This is the article’s quality argument: the loop is only as good as the environment it operates in. Clean code gives Claude patterns to follow. Skills give it standards. Docs give it current practices. A second agent gives it a less biased review. When something fails, the lesson should become part of the system so the next loop does better.

Understanding check:
If Claude repeatedly makes the same kind of frontend mistake, why is it better to update a verification skill than to only fix that one mistake?

Ask:
Are you ready to move to the next section?

SECTION 7: Managing token usage

Tutor frame:
This section is about cost and boundaries. Loops are powerful because they repeat work, but repeated work can burn tokens unless the task is scoped well.

Read this almost verbatim:

Managing token usage

To manage token usage, loops should have clear boundaries:

Choose the right primitive and model for the job: Smaller tasks don’t need multiple agents or loops. Some tasks can use cheaper and faster models.
Define clear success and stop criteria: Be specific about what done looks like so Claude can arrive at the solution sooner (but not too soon).
Pilot before a large run: Dynamic workflows can spawn hundreds of agents. Gauge usage on a smaller slice of the work first.
Use scripts for deterministic work: Running a script is cheaper than reasoning through the steps. For example, a PDF skill can ship a form-filling script that Claude runs each time, instead of re-deriving the code.
Don’t run routines more often that you need to: Match the interval to how often the thing you’re watching changes
Review usage: The `/usage` command breaks down recent usage by skills, subagents, and MCPs, `/goal` with no arguments shows number of turns and token usage so far, `/workflows` shows each agent’s token usage and you can stop an agent at any time.

Plain-English context:
The practical message is: do not use a giant autonomous system for a tiny job. Use the simplest primitive that fits. Make stop criteria explicit. Test on a small slice before scaling. Use scripts when the work is mechanical. And inspect usage so you can see where tokens are going.

Understanding check:
Why would a script be cheaper and more reliable than asking an agent to reason through the same deterministic task every time?

Ask:
Are you ready to move to the next section?

SECTION 8: Getting started and choosing what to hand off

Tutor frame:
This final section turns the article into a decision table. The big question is: what part of the work are you handing off: the check, the stop condition, the trigger, or the whole prompt/process?

Read this almost verbatim:

Getting started

To summarize:

Loop
You hand off
Use it when
Reach for

Turn-based
The check
You're exploring or deciding
Custom verification skills

Goal-based
The stop condition
You know what done looks like
/goal

Time-based
The trigger
The work happens outside your project on a schedule
/loop, /schedule

Proactive
The prompt
The work is recurring and well-defined
All of the above, and dynamic workflows

To get started with loops, look at the work you already do. Pick one task where you’re the bottleneck and ask which piece you could hand off: can you write the verification check? Is the goal clear enough? Does the work arrive on a schedule?

Once you have an idea, run the loop, observe the results like where it stalls or over-reaches, and don’t be afraid to iterate on it.

For more information, read the Claude Code docs on running agents in parallel, as well as the loop, schedule, goal, and dynamic workflows pages.

This article was written by @delba_oliveira

Plain-English context:
The article ends with a practical diagnostic. If you are exploring, hand off better checks. If you know what done looks like, hand off the stop condition with `/goal`. If the work arrives repeatedly, hand off the trigger with `/loop` or `/schedule`. If the work is recurring and well-defined, you may be able to hand off the full process.

Final understanding check:
Pick one recurring or annoying task in your own workflow. Which piece would you hand off first: the check, the stop condition, the trigger, or the whole prompt/process? Why?

Then say:
"That is the end of the article. Before we finish, can you explain the main idea back to me in your own words: what is a loop, and how do you choose which kind to use?"
```
