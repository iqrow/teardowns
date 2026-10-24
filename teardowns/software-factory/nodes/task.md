---
term: Task
aka:
  - work type
  - job definition
  - job
  - workflow
kind: part
plain: A repeatable work definition that names its trigger, action, and next handoff.
does: Turns a broad request into a bounded run that can be selected and repeated by an orchestrator.
ask: What triggers this task, what does it change, and what event should follow it?
cues:
  - A ticket or run page names the task type
  - A trigger rule maps an event to the task
  - A run result links to the next task or handoff
at: [-1.5, 1.05, 0.31]
children: [run, agent-harness, model-choice, run-chain]
variants:
  - label: Task type
    items:
      - id: triage-explore
        name: Triage or explore
        plain: "Trigger: an unclear ticket. Does: classifies whether its requirements are clear enough to assign. Next: a ready task or human clarification."
        sources:
          - work: github-copilot-task-practices
            page: Making sure your issues are well-scoped
            quote: "An ideal task includes: A clear description of the problem to be solved or the work required."
          - work: github-copilot-task-practices
            page: Choosing the right type of tasks to give to Copilot
            quote: "Tasks lacking clear definition: tasks with ambiguous requirements, open-ended tasks, tasks that require working through uncertainty to find a solution"
          - work: lauren-tan-pstack
            page: Let loops start themselves
            url: https://raw.githubusercontent.com/cursor/plugins/9580c23696ac8d7abed0c166f2f9918800afb819/pstack/docs/guide/07-overnight.md
            quote: "Software maintenance splits into stages that suit this well: triage a report, reproduce it, fix it, verify the fix."
          - work: kent-c-dodds-introducing-kody
            page: P.S.
            quote: "Just ask your agent to submit feedback. My kody kicks off an agent to triage the feedback automatically."
      - id: implement
        name: Implement
        plain: "Trigger: a scoped task. Does: researches the repository, plans, and makes iterative changes on a branch before opening a pull request. Next: pull request review."
        sources:
          - work: github-copilot-task-practices
            page: Researching, planning, and iterating before opening a pull request
            quote: "you can use Copilot cloud agent to research a repository, create an implementation plan, and make iterative code changes on a branch first."
          - work: factory-software-factory
            page: Popular use cases
            url: https://docs.factory.com/software-factory/automations
            quote: "Picks up ready tickets from Linear or Jira one at a time and drives each to an open pull request."
      - id: automated-review-task
        name: Automated review
        plain: "Trigger: a new or updated pull request. Does: checks it with a fresh model and posts a review finding. Next: rework or human review."
        sources:
          - work: anthropic-claude-code-best-practices
            page: Give Claude a way to verify its work
            quote: "By a second opinion: a verification subagent or a dynamic workflow that checks its own findings has a fresh model try to refute the result"
          - work: factory-software-factory
            page: Popular use cases
            url: https://docs.factory.com/software-factory/automations
            quote: "Reviews new pull or merge requests and posts one review comment per head commit."
          - work: anthropic-building-effective-agents
            page: Agents
            quote: "Agents can then pause for human feedback at checkpoints or when encountering blockers."
      - id: rework
        name: Rework
        plain: "Trigger: a pull request needs further work. Does: makes the requested change and pushes it. Next: another review or merge."
        sources:
          - work: github-copilot-task-practices
            page: Using comments to iterate on a pull request
            quote: "it’s common for the pull request to need further work before it can be merged."
          - work: factory-software-factory
            page: Popular use cases
            url: https://docs.factory.com/software-factory/automations
            quote: "Makes the change a teammate asks for in a pull request comment, pushes one commit, and replies."
      - id: decompose
        name: Decompose
        plain: "Trigger: a task can be split into subtasks. Does: decomposes it into a sequence whose steps pass outputs forward. Next: the following step."
        sources:
          - work: anthropic-building-effective-agents
            page: "Workflow: Prompt chaining"
            quote: "Prompt chaining decomposes a task into a sequence of steps, where each LLM call processes the output of the previous one."
      - id: ratchet-task
        name: Ratchet
        plain: "Trigger: a stricter check is enabled with known violations. Does: suppresses existing violations while surfacing new ones. Next: prune fixed suppressions."
        sources:
          - work: eslint-cli-suppressions
            page: --suppress-all
            quote: "It allows you to enable one or more lint rules and be notified only when new violations show up."
          - work: eslint-cli-suppressions
            page: --prune-suppressions
            quote: "Prune unused suppressions from the suppressions file. This option is useful when you addressed one or more of the suppressed violations."
      - id: dependency-update
        name: Dependency update
        plain: "Trigger: a package schedule or update alert. Does: monitors package ecosystems and creates pull requests. Next: status checks and review."
        sources:
          - work: github-dependabot-options
            page: Required keys
            quote: "Use these options to customize how Dependabot monitors package ecosystems, schedules updates, and creates pull requests."
          - work: github-dependabot-options
            page: Required keys
            quote: "All dependencies defined in lock files with vulnerable dependencies are updated by security updates."
          - work: renovate-configuration-options
            page: Configuration Options
            quote: "In that case Renovate first creates a branch and associated Pull Request, and then automerges the PR on a subsequent run once it detects the PR's status checks are \"green\"."
      - id: fix-factory
        name: Fix the factory
        plain: "Trigger: a failed CI run. Does: classifies the failure and, when safe, drives it back to green or opens a fix pull request. Next: automated review."
        sources:
          - work: factory-software-factory
            page: Guided setups
            url: https://docs.factory.com/software-factory/automations
            quote: "watches your open pull requests and drives failing CI to green."
          - work: factory-software-factory
            page: Popular use cases
            url: https://docs.factory.com/software-factory/automations
            quote: "investigates the errors that matter, and opens a fix PR when safe."
          - work: factory-software-factory
            page: Popular use cases
            url: https://docs.factory.com/software-factory/automations
            quote: "Classifies failed GitHub Actions or GitLab pipelines as flaky, infrastructure, or regression, and names the responsible commit."
          - work: kent-c-dodds-you-own-the-outcome
            page: Watch the outcomes
            quote: "Set things up so that failures get noticed and triaged (often by another agent) instead of silently rotting."
      - id: architecture-sweep
        name: Architecture sweep
        plain: "Trigger: an architectural fitness check. Does: objectively assesses an architectural characteristic with tests or metrics. Next: an integrity assessment."
        sources:
          - work: evolutionaryarchitecture-fitness-functions
            page: Architectural Fitness Functions
            quote: "Fitness functions encompass existing engineering practices such as testing and metrics"
          - work: evolutionaryarchitecture-fitness-functions
            page: Architectural Fitness Functions
            quote: "An architectural fitness function provides an objective integrity assessment of some architectural characteristic(s)."
      - id: retro
        name: Retro
        plain: "Trigger: a measured result. Does: measures performance and iterates on implementation. Next: another measured result."
        sources:
          - work: anthropic-building-effective-agents
            page: Combining and customizing these patterns
            quote: "the key to success, as with any LLM features, is measuring performance and iterating on implementations."
sources:
  - work: anthropic-building-effective-agents
    page: What are agents?
    quote: "Workflows are systems where LLMs and tools are orchestrated through predefined code paths."
  - work: github-copilot-task-practices
    page: Making sure your issues are well-scoped
    quote: "GitHub Copilot provides better results when assigned clear, well-scoped tasks."
  - work: factory-software-factory
    page: What an automation is
    url: https://docs.factory.com/software-factory/automations
    quote: "Each automation starts a Droid session when its trigger fires: on a schedule, when a message lands in a Slack channel, on a GitHub event, or when another service sends a webhook."
---
