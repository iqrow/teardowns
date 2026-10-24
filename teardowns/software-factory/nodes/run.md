---
term: Run
aka:
  - execution
  - agent run
  - session
  - AFK session
kind: concept
plain: One execution of one task. The agent uses tools in a loop, then the run ends and leaves anything needed later in backing services such as the tracker and the git host.
does: Gives each task a clear start and end, and an outcome that the next step can act on.
ask: What started this run, what changed, what evidence did it leave, and what event follows?
cues:
  - A run page with trigger, timestamps, status, logs, and artifacts
  - A link from one ticket or pull request to one execution
  - A finished status with a next event or human handoff
at: [-0.42, 0.48, 0.12]
links:
  - {to: runner, rel: see also}
  - {to: run-state, rel: measured by}
  - {to: agent-harness, rel: made by}
  - {to: human-re-entry, rel: see also}
pattern: pattern-stateless-worker
sources:
  - work: anthropic-building-effective-agents
    page: Agents
    quote: "They are typically just LLMs using tools based on environmental feedback in a loop."
  - work: twelve-factor-processes
    page: VI. Processes
    quote: "Twelve-factor processes are stateless and share-nothing. Any data that needs to persist must be stored in a stateful backing service, typically a database."
  - work: factory-software-factory
    page: Events feed
    url: https://docs.factory.com/software-factory/automations
    quote: "Runs Each run's outcome and duration, with a link to its session."
  - work: factory-software-factory
    page: What an automation is
    url: https://docs.factory.com/software-factory/automations
    quote: "Each automation starts a Droid session when its trigger fires: on a schedule, when a message lands in a Slack channel, on a GitHub event, or when another service sends a webhook."
  - work: matt-pocock-ai-coding-dictionary
    page: Session
    url: https://www.aihero.dev/ai-coding-dictionary/session
    quote: "One bounded run of interaction with an agent. Starts empty, accumulates messages, tool results, and files read, and ends when cleared, closed, or compacted into a fresh session."
  - work: matt-pocock-ai-coding-dictionary
    page: AFK
    url: https://www.aihero.dev/ai-coding-dictionary/afk
    quote: "Away from keyboard. A working pattern where the user kicks off a session and leaves the agent to run unattended."
  - work: matt-pocock-ai-coding-dictionary
    page: Stateless
    url: https://www.aihero.dev/ai-coding-dictionary/stateless
    quote: "An agent is stateless across sessions by default: a new session starts empty, with no trace of prior ones."
---
