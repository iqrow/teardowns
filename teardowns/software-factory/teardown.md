---
title: Software factory
prompt: I want agents to turn tickets into merged code while I'm away
root: software-factory
assembly:
  - title: Pick the problem and the level
    text: Start from one problem the team has now, such as untriaged tickets or pull requests waiting for review. Choose how far agents may go without a human, and where the human comes back in. Plan to buy the services and build the tasks.
    adds: [start-slow, buy-vs-build, autonomy-level, human-re-entry, slop]
    makes: factory-design
  - title: Fill the ticket tracker slot
    text: Choose where tickets live and which labels or statuses route work to a task. Connect the sources that file tickets from outside, and decide what stops each one filing the same ticket twice.
    adds: [ticket, routing-label, comment-thread, ticket-source]
    makes: ticket-tracker
  - title: Fill the git host slot
    text: Give the factory its own bot identity, protect the main branch with required checks and reviews, and send signed webhooks to the orchestrator.
    adds: [pull-request, bot-identity, branch-protection, webhook]
    makes: git-host
  - title: Draw the security boundary
    text: Treat every ticket, comment and web page as untrusted input, and give each run only the permissions its task needs.
    adds: [prompt-injection, least-privilege]
    makes: security-boundary
  - title: Set up a disposable runner inside the boundary
    text: Give every run a fresh machine or container inside the security boundary, with a timeout, an optional cache, scoped secrets and a narrow network allowlist.
    adds: [disposable-environment, run-timeout, cache, network-egress, secrets, security-boundary]
    makes: runner
  - title: Install the brakes
    text: Make types, lint and tests a required check, and add an automated review run with a try cap on rework. Keep human review on every pull request for now.
    adds: [automated-checks, automated-review, review-rework-loop, human-review]
    makes: brakes
  - title: Configure the coding agent
    text: Pick the harness, the model and how much reasoning effort it spends. Pre-approve the tools an unattended run needs, because nobody is there to answer a permission request, and let the sandbox limit what they can reach. Size each task so it fits one fresh context window.
    adds: [agent-harness, model-choice, effort, context-window, permission-mode]
    makes: coding-agent
  - title: Write the first task
    text: Define the task's trigger, its work, the run it triggers next and where a human re-enters.
    adds: [run, coding-agent, run-chain]
    makes: task
  - title: Wire the orchestrator
    text: Map each trigger to a task, record every run's state, and claim work so two runs never do the same job. Set the concurrency limit, the throttle, the try cap and the budget cap low.
    adds: [trigger, run-state, work-claim, concurrency-limit, throttle, try-cap, budget-cap]
    makes: orchestrator
  - title: Measure the factory
    text: Track how many agent pull requests merge, how long work waits, how often merged changes fail, and how long the review queue is.
    adds: [merge-rate, lead-time, change-failure-rate, review-queue]
    makes: factory-metrics
  - title: Watch the runs
    text: Read each run's log on the run page. Add traces and token cost when the run page cannot explain a failure or a bill, and show the factory's metrics beside them.
    adds: [run-log, agent-trace, token-cost, factory-metrics]
    makes: observability
  - title: Make the codebase agent-ready
    text: Keep the code in deep modules with clear names. Write a short instructions map and a glossary, give agents one verify command and a CLI that drives the app, and connect the tools they need. Turn each review comment that keeps coming back into a check.
    adds: [codebase-health, instructions, shared-vocabulary, verify-command, control-cli, tool-access, ratchet]
    makes: agent-ready-codebase
  - title: Build verification
    text: Write a spec for each piece of work and turn it into scenarios. Keep some scenarios where the author cannot see them, and stand up twins of outside services. Each run proves its own change, then a separate verifier scores it against the scenarios over several trials, because the same ticket can give a different change on each run.
    adds: [spec, scenario, holdout-scenario, digital-twin, self-verification, satisfaction, non-determinism]
    makes: verification
  - title: Merge by risk
    text: Label each change by what it composes, extends or adds. Let agents merge low-risk work once checks and evidence pass, and keep a person on high-risk changes and on the gates. Widen the policy only as the evidence holds.
    adds: [risk-class, merge-policy, review-bottleneck]
    makes: brakes
  - title: Open the throttle and run in parallel
    text: Turn what review catches into checks, instructions and scenarios, and open the throttle as trust grows. Run several tasks at once, each in its own worktree or runner, and rerun the factory's evals after every change to it. People decide what to build and own the one-way doors. The services, tasks and gates now run as one software factory.
    adds: [ticket-tracker, git-host, orchestrator, runner, agent-ready-codebase, task, verification, brakes, observability, factory-design, parallel-runs, human-role, factory-evals, trust-loop, improvement-loop]
    makes: software-factory
---

A software factory turns events, such as a new ticket, a pull request, a failed check or a clock, into coding-agent runs, and turns their output into merged code. Inside each run a harness drives a model through tool calls, the context window fills as it works, and its permissions are set in advance because nobody is watching. Each run works on a disposable runner and remembers nothing; the ticket tracker, the git host and the orchestrator hold the state between runs. The factory succeeds by giving agents a space where they can do the work and prove it: an agent-ready codebase with a short map, one verify command and a tool that drives the app, plus verification against scenarios the author never saw. Practitioners start with one throttled trigger and human review on every pull request, turn what review catches into checks, and let evidence earn trust. At level 4, low-risk work merges on checks and evidence, and people spend their review on specs, one-way doors and high-risk changes.
