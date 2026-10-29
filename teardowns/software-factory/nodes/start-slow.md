---
term: Start slow
aka:
  - canary rollout
  - throttled start
kind: process
plain: Start with one useful task and one automated trigger at a time, throttled to a small event sample or a once-daily clock. Require human review on every pull request and cap rework at a few tries. This is level 3, where a person reads every diff. Add triggers and open the throttle only after checks and review evidence earn trust; the trust loop then moves the factory toward level 4.
does: Exposes weak instructions, missing checks, and unsafe permissions while the blast radius is small.
ask: What is the smallest live loop that can prove value and reveal failure?
cues:
  - A canary label or sampled trigger rule
  - A low concurrency setting and human approval on every pull request
  - A change log showing one trigger or gate added at a time
at: [0.45, 0.3, 0.12]
sources:
  - work: anthropic-building-effective-agents
    page: When (and when not to) use agents
    quote: "we recommend finding the simplest solution possible, and only increasing complexity when needed."
  - work: github-copilot-task-practices
    page: Choosing the right type of tasks to give to Copilot
    quote: "Initially, you might want to start by giving Copilot simpler tasks, to see how it works as a cloud agent."
  - work: refactoring-martin-fowler
    page: Refactoring
    url: https://martinfowler.com/books/refactoring.html
    quote: "By doing them in small steps you reduce the risk of introducing errors."
  - work: anthropic-building-effective-agents
    page: Agents
    quote: "We recommend extensive testing in sandboxed environments, along with the appropriate guardrails."
  - work: anthropic-building-effective-agents
    page: Agents
    quote: "Agents can then pause for human feedback at checkpoints or when encountering blockers."
  - work: anthropic-building-effective-agents
    page: Agents
    quote: "it’s also common to include stopping conditions (such as a maximum number of iterations) to maintain control."
  - work: github-protected-branches
    page: Require pull request reviews before merging
    quote: "can require that all pull requests receive a specific number of approving reviews before someone merges the pull request into a protected branch."
  - work: factory-software-factory
    page: Filter which deliveries start a run
    url: https://docs.factory.com/software-factory/automations
    quote: "starts a run only for payloads that carry that field, which keeps a busy event stream from running the automation on every message."
  - work: factory-software-factory
    page: Review deliveries
    url: https://docs.factory.com/software-factory/automations
    quote: "The automation already started 10 runs this hour. The limit resets at the top of the next hour."
  - work: factory-software-factory
    page: Schedules
    url: https://docs.factory.com/software-factory/automations
    quote: "A frequency without a time, such as daily, runs at 9:00 UTC."
  - work: github-copilot-task-practices
    page: Adding custom instructions to your repository
    quote: "If Copilot is able to build, test and validate its changes in its own development environment, it is more likely to produce good pull requests which can be merged quickly."
  - work: lauren-tan-pstack
    page: Earn the trust before the loop
    url: https://raw.githubusercontent.com/cursor/plugins/9580c23696ac8d7abed0c166f2f9918800afb819/pstack/docs/guide/07-overnight.md
    quote: "Make the loop autonomous only after all four hold. Until then, run it while you watch."
  - work: matt-pocock-ralph-tips
    page: 2. Start With HITL, Then Go AFK
    quote: "You'll understand what it does, refine your prompt, and build confidence before going hands-off."
  - work: matt-pocock-software-factory-skill
    page: Start slow
    quote: "Add one automated trigger at a time, throttled at first (one bug report in ten, a clock once a day), with human review on every PR."
  - work: lauren-tan-noodle
    page: docs/reference/configuration.md
    url: https://raw.githubusercontent.com/poteto/noodle/82d2921c52370f23f29086de81ccfb600939c037/docs/reference/configuration.md
    quote: "Start with max_concurrency = 1 or 2 while you’re learning the system, then scale up once you’ve seen the cost per session on your workload."
  - work: dan-shapiro-five-levels
    page: Level 3
    quote: "You are the human in the loop. Your coding agent is always running multiple tabs. You spend your days reviewing code."
---
