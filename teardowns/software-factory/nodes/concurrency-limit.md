---
term: Concurrency limit
aka: [WIP limit, parallelism cap, concurrency group]
kind: knob
plain: A bound on how many runs or jobs may be active together for one key, repository, branch, or resource.
does: Prevents conflicting runs and keeps the runner pool and review queue within capacity.
ask: What is the key, how many runs may be active, and should a new run wait, replace, or cancel an older one?
cues:
  - A concurrency group name
  - A counter or queue badge
  - A cancel-in-progress or pending policy
range: One active run per group, a small fixed worker pool, or a larger queue with explicit cancellation rules.
trouble: Parallel runs edit the same target, stale runs consume capacity, or the cap hides a slow downstream gate.
at: [-0.27, 0.18, 0.06]
links:
  - {to: work-claim, rel: see also}
  - {to: throttle, rel: see also}
pattern: pattern-accelerator-brake
sources:
  - work: github-actions-concurrency
    page: Using concurrency in different scenarios
    quote: You can use `jobs.<job_id>.concurrency` to ensure that only a single job or workflow using the same concurrency group will run at a time.
  - work: atlassian-wip-limits
    page: What are WIP limits?
    quote: In agile development, work in progress (WIP) limits set the maximum amount of work that can exist in each status of a workflow.
---
