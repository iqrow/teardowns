---
term: Run timeout
aka: [execution deadline, wall-clock limit, time budget, heartbeat timeout, dead man's switch]
kind: knob
plain: The maximum time a run or one of its steps may execute before the runner cancels it. The limit covers hangs as well as useful work. A long or open-ended run uses a heartbeat timeout instead. The run reports progress, and the factory fails it when the reports stop for longer than a grace time. A timeout only stops a run. To show the work is done, the run still needs a check that can pass or fail.
does: Bounds compute cost and gives the orchestrator a clear failure signal for a stuck task.
ask: What should happen when this run reaches its deadline?
cues:
  - "A timeout-minutes field beside the job settings"
  - "A countdown or elapsed-time badge on the run page"
  - "A failed or cancelled result marked DeadlineExceeded or timeout"
range: "Set a positive integer per job and step. GitHub Actions defaults a job to 360 minutes and supports up to 360 minutes for a step. Kubernetes uses activeDeadlineSeconds for a Job."
trouble: "A run burns the whole budget on retries, leaves child processes behind, or times out before it can save its result."
at: [0.75, 0.25, 0.65]
links:
  - {to: disposable-environment, rel: controls}
sources:
  - work: github-actions-workflow-syntax
    page: jobs.<job_id>.timeout-minutes
    quote: "The maximum number of minutes to let a job run before GitHub automatically cancels it. Default: 360"
  - work: github-actions-workflow-syntax
    page: jobs.<job_id>.steps[*].timeout-minutes
    quote: "The maximum number of minutes to run the step before killing the process. Maximum: 360 for both GitHub-hosted and self-hosted runners."
  - work: kubernetes-jobs
    page: Active deadline
    quote: "The `activeDeadlineSeconds` applies to the duration of the job, no matter how many Pods are created."
  - work: kubernetes-jobs
    page: Active deadline
    quote: "Once a Job reaches `activeDeadlineSeconds`, all of its running Pods are terminated and the Job status will become `type: Failed` with `reason: DeadlineExceeded`."
  - work: lauren-tan-pstack
    page: Let loops start themselves
    url: https://raw.githubusercontent.com/cursor/plugins/9580c23696ac8d7abed0c166f2f9918800afb819/pstack/docs/guide/07-overnight.md
    quote: 'a duration is not a finish condition. "work on this for 4 hours" gives the agent nothing to check'
  - work: factory-software-factory
    page: Run health and alerts
    url: https://docs.factory.com/software-factory/automations
    quote: "A run that stops reporting progress is marked failed, and the next scheduled run proceeds as normal."
  - work: healthchecks-docs
    page: Concepts
    quote: "It is the additional time to wait before sending an alert when a check is late."
---
