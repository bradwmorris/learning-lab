# What does the operating system analogy mean for harnesses?

- Type: question
- Marker: Harness Design Patterns / operating system analogy
- Created: 2026-07-08T21:36:31.209Z

## Summary

An operating system is the software layer that sits between applications and the machine's messy details: files, memory, processes, devices, permissions, and scheduling. The analogy is that a harness sits between the model and the messy external world: tools, context, memory, workflows, permissions, evaluation, artifacts, and execution. Like an OS, a good harness hides complicated coordination behind a simpler interface.

## Media

_No media recorded._


## Interaction

### user

what exactly is an operating system in the example given here?

The design should be deliberately simple and generic to enable generalization, likely with reference to existing software engineering practices to benefit from prertaining knowlege. There is also a strong analogy between operating systems and harnesses. Similar to an OS, a harness should encapsulate complicated logic while keeping the interface simple. Meanwhile, configs, tool interfaces and other protocols may gradually become standardized across the industry.

### assistant

An operating system is the layer that lets programs use a computer without each program having to manage all the messy details itself. For example, an app does not directly control the disk, RAM, keyboard, network card, permissions, and process scheduling from scratch. It asks the OS through simpler interfaces: read this file, start this process, allocate memory, send this packet, check this permission. Weng is saying a harness should do something similar for a model. The model should not have to manually manage every low-level detail of tool calls, memory, context, retries, permissions, evals, and artifacts. The harness wraps that complexity and gives the model a simpler way to observe, act, remember, and check itself. So in the analogy: OS sits between app and hardware; harness sits between model and real-world task environment. Check-back: in Codex, when I call a shell command or edit a file, am I directly being the base model doing raw computer control, or am I using harness/tool interfaces that simplify and constrain what I can do?
