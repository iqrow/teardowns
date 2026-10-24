---
term: Run state
aka: [run status, queued, in progress, completed]
kind: part
plain: The durable state record for one run from dispatch through completion.
does: Lets the orchestrator show capacity, decide which transitions are legal, and trigger the next task from a known outcome.
ask: Is this run queued, in progress, or finished, and what conclusion or failure explains the state?
cues:
  - Queued, in progress, and completed status pills
  - Start and finish timestamps
  - A conclusion such as success, failure, cancelled, or timed out
range: Queued, requested, waiting, in progress, completed, cancelled, failure, skipped, stale, success, or timed out.
trouble: A run stays queued forever, finishes without a conclusion, or a retry looks like a new piece of work.
at: [0, 0.45, 0.06]
links:
  - {to: try-cap, rel: see also}
  - {to: trigger, rel: see also}
sources:
  - work: github-actions-workflow-runs
    page: List workflow runs for a repository
    quote: "Can be one of: `completed`, `action_required`, `cancelled`, `failure`, `neutral`, `skipped`, `stale`, `success`, `timed_out`, `in_progress`, `queued`, `requested`, `waiting`, `pending`"
  - work: github-actions-workflow-runs
    page: About workflow runs in GitHub Actions
    quote: You can use the REST API to view, re-run, cancel, and view logs for workflow runs.
---
