---
term: Factory design
aka:
  - operating model
  - automation policy
kind: process
plain: The deliberate work of choosing a problem, adding triggers and services in small steps, and deciding where people stay in the loop. It also covers the human role once agents carry most changes, and the evals that show whether a change to the factory helped.
does: Turns an automation idea into a small system that earns more autonomy as evidence comes in.
ask: What is the smallest useful loop, what can stop it, and what evidence earns the next level?
at: [2.55, 0.21, 0.85]
children: [start-slow, buy-vs-build, autonomy-level, human-re-entry, agent-persona, slop, human-role, factory-evals, trust-loop, improvement-loop]
sources:
  - work: anthropic-building-effective-agents
    page: When (and when not to) use agents
    quote: "we recommend finding the simplest solution possible, and only increasing complexity when needed."
  - work: gene-kim-vibe-coding-pairing
    page: "Vibe Coding: Pairing vs. Delegation"
    quote: "You delegate when you’re sure the task novelty is not terribly high"
  - work: factory-software-factory
    page: Custom Automations
    url: https://docs.factory.com/software-factory/automations
    quote: "Create, configure, and monitor automations that run Droid on a schedule, from Slack messages, on GitHub events, or from inbound webhooks."
  - work: anthropic-building-effective-agents
    page: Agents
    quote: "Agents can then pause for human feedback at checkpoints or when encountering blockers."
  - work: matt-pocock-software-factory-skill
    page: Designing a factory
    quote: "Buy the services and build the tasks: the tasks carry the user's design, the services are generic."
  - work: matt-pocock-ai-coding-dictionary
    page: Software factory
    url: https://www.aihero.dev/ai-coding-dictionary/software-factory
    quote: "Deciding which of those decisions stay human is the main design question."
  - work: kent-c-dodds-kcd-skills
    page: autopilot skill
    url: https://github.com/kentcdodds/kcd-skills/blob/ffa3faf9911210b89b1d9953e025d52247632070/skills/autopilot/SKILL.md
    quote: "Order: P1 first (checkable), then P2/P3 (trust), then loops."
---
