---
term: Work claim
aka: [claim, lock, lease, dedupe, idempotency key]
kind: process
plain: The act of marking a piece of work as owned by one run or one task before side effects begin.
does: Stops two runs from implementing, reviewing, or reworking the same ticket at the same time.
ask: What is the claim key, when does it expire, and how can a later run tell whether the work is still owned?
cues:
  - An assignee, delegate, lock, or claim label on the ticket
  - A run id or idempotency key in an event record
  - A concurrency group derived from the work key
range: Concurrency group, claim label or assignee/delegate set before work starts, lease with expiry, or idempotency key.
trouble: A claim is made after editing, never expires after a crash, or two identifiers refer to one ticket.
at: [0.28, 0.12, 0.06]
links:
  - {to: concurrency-limit, rel: see also}
  - {to: ticket, rel: see also}
  - {to: bot-identity, rel: see also}
pattern: pattern-stateless-worker
sources:
  - work: github-actions-concurrency
    page: "Example: Concurrency groups"
    quote: Concurrency groups provide a way to manage and limit the execution of workflow runs or jobs that share the same concurrency key.
  - work: linear-agents
    page: Mention + assign scopes
    quote: Assigning an issue to your app now sets it as the delegate, not the assignee
  - work: github-labels
    page: About labels
    quote: You can use these default labels to help create a standard workflow in a repository.
  - work: github-webhooks-best-practices
    page: Use the X-GitHub-Delivery header
    quote: You can use the X-GitHub-Delivery header to ensure that each delivery is unique per event.
---
