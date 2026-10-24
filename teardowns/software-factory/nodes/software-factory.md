---
term: Software factory
aka:
  - agent factory
  - autopilot
kind: product
plain: A system that turns tickets, pull requests, failed checks and timers into coding-agent runs, and turns the runs' output into merged code. It works when agents have a space where they can do the work and prove it, so that human review leaves the critical path for low-risk changes.
ask: What starts the work, what evidence proves it, and who may merge it?
cues:
  - Tickets move to Done without a person starting each run
  - Bot-authored pull requests carry check results and the run's own evidence
  - Low-risk pull requests merge with no human approval
  - A run page records each ticket from trigger to finish
children: [ticket-tracker, git-host, orchestrator, runner, agent-ready-codebase, task, verification, brakes, observability, factory-design]
variants:
  - label: Setup
    items:
      - id: all-in-one-git-platform
        name: All on one git platform
        plain: The ticket board, pull requests, checks and workflow engine live in one hosted git platform.
        why: The shared platform joins the work item, the source change and its checks in one place.
        sources:
          - work: gitlab-platform
            page: Platform
            quote: "Planning, source control, and CI/CD in one platform. Projects, releases, and code share one data plane, so your team and agents work from a single source of truth."
      - id: dedicated-tracker-own-orchestrator
        name: Dedicated tracker and own orchestrator
        plain: A separate tracker sends issue context to a team-owned service when an event fires.
        why: The tracker and dispatcher meet at an explicit event boundary.
        sources:
          - work: linear-agents
            page: Receiving your first webhook
            quote: "This triggers a `created` AgentSessionEvent webhook containing an `agentSession` object with the relevant issue, comment, and context."
      - id: own-ticket-run-app
        name: Own app for tickets and runs
        plain: A purpose-built application holds project context, work orders, agent connections, and feedback.
        why: The application is the durable interface for work context, work orders, and feedback.
        sources:
          - work: software-factory-8090
            page: Create your first project
            quote: "A project holds the context that defines your software, from requirements and blueprints to work orders and feedback."
      - id: vendor-hosted-agent-platform
        name: Vendor hosted agent platform
        plain: A vendor hosts the agent's ephemeral development environment while repository instructions shape its work.
        why: The platform supplies the run environment while repository instructions shape the task.
        sources:
          - work: github-copilot-task-practices
            page: Pre-installing dependencies in GitHub Copilot's environment
            quote: "While working on a task, Copilot has access to its own ephemeral development environment, powered by GitHub Actions, where it can explore your code, make changes, execute automated tests and linters and more."
          - work: github-copilot-task-practices
            page: Adding custom instructions to your repository
            quote: "By adding custom instructions to your repository, you can guide Copilot on how to understand your project and how to build, test and validate its changes."
sources:
  - work: simon-willison-software-factory
    quote: "We built a Software Factory: non-interactive development where specs + scenarios drive agents that write code, run harnesses, and converge without human review."
  - work: factory-software-factory
    page: Custom Automations
    url: https://docs.factory.com/software-factory/automations
    quote: "Each automation starts a Droid session when its trigger fires: on a schedule, when a message lands in a Slack channel, on a GitHub event, or when another service sends a webhook."
  - work: factory-software-factory
    page: Events feed
    url: https://docs.factory.com/software-factory/automations
    quote: "Runs Each run's outcome and duration, with a link to its session."
  - work: factory-software-factory
    page: Custom Automations
    url: https://docs.factory.com/software-factory/automations
    quote: "Automations turn Droid into a teammate for work that keeps coming back."
  - work: matt-pocock-software-factories
    page: Classic Concepts + Coding Agents
    quote: "Assign your coding agent to chew through tickets, and come back to clean code and informative PRs for your review"
  - work: matt-pocock-software-factory-skill
    page: Software factory
    quote: "A software factory is a system of agents that turns tickets, PRs and schedules into merged code, deployed on remote infrastructure the user chooses."
  - work: matt-pocock-ai-coding-dictionary
    page: Software factory
    url: https://www.aihero.dev/ai-coding-dictionary/software-factory
    quote: "A factory takes the human out of starting sessions, and not necessarily out of anything else."
  - work: kent-c-dodds-kcd-skills
    page: autopilot skill
    url: https://github.com/kentcdodds/kcd-skills/blob/ffa3faf9911210b89b1d9953e025d52247632070/skills/autopilot/SKILL.md
    quote: "Audit any repository and set it up so coding agents ship changes safely with little human review."
  - work: lauren-tan-pstack
    page: pstack
    url: https://raw.githubusercontent.com/cursor/plugins/9580c23696ac8d7abed0c166f2f9918800afb819/pstack/README.md
    quote: "throughput without quality is not a goal i aspire to."
---
