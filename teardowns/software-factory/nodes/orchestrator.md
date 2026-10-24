---
term: Orchestrator
aka: [workflow engine, dispatcher, scheduler, control plane]
kind: part
plain: The service that receives trigger events, starts workflow runs, and records their lifecycle.
does: Turns an event into a bounded run and exposes enough state for later triggers, humans, and metrics.
ask: What starts this run, which task does it select, how is duplicate work prevented, and what event comes next?
cues:
  - A run queue or dispatch panel
  - Queued, in-progress, and finished run records
  - Trigger rules and concurrency settings
range: Hosted CI, workflow engine, agent platform, queue-backed service, a small custom controller, or a coordinator agent that directs subagents and writes no code.
trouble: Events disappear, runs start twice, state goes stale, or a completion event starts an uncontrolled chain.
children: [trigger, run-state, concurrency-limit, work-claim, throttle, try-cap, budget-cap, parallel-runs]
at: [0, 1.8, -0.55]
links:
  - {to: runner, rel: controls}
  - {to: run, rel: see also}
  - {to: trigger, rel: see also}
sources:
  - work: github-actions-events
    page: About events that trigger workflows
    quote: Workflow triggers are events that cause a workflow to run.
  - work: github-actions-workflow-runs
    page: About workflow runs in GitHub Actions
    quote: You can use the REST API to view, re-run, cancel, and view logs for workflow runs in GitHub Actions.
  - work: lauren-tan-pstack
    page: When the night holds a queue, not a task
    url: https://raw.githubusercontent.com/cursor/plugins/9580c23696ac8d7abed0c166f2f9918800afb819/pstack/docs/guide/07-overnight.md
    quote: "The coordinator authors briefs, collects what its subagents finish, keeps the lowest unmerged PR green, and never writes code itself."
---
