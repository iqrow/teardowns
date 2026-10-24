---
term: Trigger
aka: [event, start condition, hook]
kind: part
plain: The event that starts a run. It carries enough identity and context for the orchestrator to choose a task.
does: Converts a change in a tracker, git host, clock, monitor, or prior run into one dispatch decision.
ask: Which event starts this task, which activity types count, and what stops the event from starting a duplicate run?
cues:
  - An event name and activity type in a run record
  - A webhook delivery or schedule rule
  - A manual Run workflow control
range: Ticket created or labelled, status moved, comment or mention, pull request opened, check failed, review submitted, schedule, run finished, monitor alert, or manual dispatch.
trouble: A broad event fires too often, a self-written event loops, or a filtered event leaves work silently unhandled.
at: [-0.33, 0.78, 0.06]
links:
  - {to: run-state, rel: raises}
  - {to: throttle, rel: see also}
  - {to: webhook, rel: made by}
variants:
  - label: Trigger kind
    items:
      - id: trigger-ticket-created
        name: Ticket created
        plain: A new ticket enters the tracker and starts intake or triage.
        sources:
          - work: jira-automation-triggers
            page: Work item created
            quote: The flow will run when an work item is created.
      - id: trigger-ticket-labelled
        name: Ticket labelled
        plain: A label is added to a ticket and selects a task such as implementation.
        sources:
          - work: github-actions-triggering-workflow
            page: Using event activity types
            quote: For example, the following workflow triggers when an issue is opened or labeled.
      - id: trigger-status-moved
        name: Status moved
        plain: A ticket moves from one workflow state to another, such as Ready to In progress.
        sources:
          - work: jira-automation-triggers
            page: Work item transitioned
            quote: The flow will run when a work item transitions from one status to another.
      - id: trigger-comment-mention
        name: Comment or mention
        plain: A new comment or an explicit mention asks a task to respond.
        sources:
          - work: linear-agents
            page: Overview
            quote: They can be @mentioned, delegated issues through assignment, create and reply to comments, collaborate on projects and documents, etc.
      - id: trigger-pr-opened
        name: Pull request opened
        plain: A new pull request starts checks or an automated review.
        sources:
          - work: github-actions-events
            page: pull_request_target
            quote: Runs your workflow when activity on a pull request in the workflow's repository occurs. For example, if no activity types are specified, the workflow runs when a pull request is opened or reopened or when the head branch of the pull request is updated.
      - id: trigger-check-failed
        name: Check failed
        plain: A check or commit status reports failure and starts diagnosis or rework.
        sources:
          - work: github-actions-events
            page: status
            quote: Runs your workflow when the status of a Git commit changes. For example, commits can be marked as error, failure, pending, or success.
      - id: trigger-review-submitted
        name: Review submitted
        plain: A reviewer submits an approval, request for changes, or comment on a pull request.
        sources:
          - work: github-actions-events
            page: pull_request_review
            quote: To run your workflow when a pull request has been approved, you can trigger your workflow with the `submitted` type of `pull_request_review` event, then check the review state with the `github.event.review.state` property.
      - id: trigger-schedule
        name: Schedule
        plain: A clock starts a task at a configured time or interval.
        sources:
          - work: github-actions-events
            page: schedule
            quote: The `schedule` event allows you to trigger a workflow at a scheduled time.
      - id: trigger-run-finished
        name: Run finished
        plain: A completed or requested run starts the next task in a chain.
        sources:
          - work: github-actions-events
            page: workflow_run
            quote: This event occurs when a workflow run is requested or completed. It allows you to execute a workflow based on execution or completion of another workflow.
      - id: trigger-monitor-alert
        name: Monitor alert
        plain: A monitored signal crosses a threshold and asks the factory to investigate.
        sources:
          - work: datadog-jira
            page: Jira integration
            quote: To create Jira issues from Datadog alert events, enter the notification handle of one or more issue templates.
      - id: trigger-manual-dispatch
        name: Manual dispatch
        plain: A person presses a run control or sends a dispatch API call.
        sources:
          - work: github-actions-events
            page: workflow_dispatch
            quote: To enable a workflow to be triggered manually, you need to configure the `workflow_dispatch` event.
sources:
  - work: github-actions-events
    page: About events that trigger workflows
    quote: You can configure your workflows to run when specific activity on GitHub happens, at a scheduled time, or when an event outside of GitHub occurs.
  - work: github-actions-triggering-workflow
    page: Using events to trigger workflows
    quote: If multiple triggering events for your workflow occur at the same time, multiple workflow runs will be triggered.
  - work: gitlab-trigger-pipelines
    page: Trigger a pipeline
    quote: You can use an API call to the pipeline triggers API endpoint to trigger a pipeline for a specific branch or tag.
---
