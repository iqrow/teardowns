---
term: Review queue
aka:
  - PR backlog
  - reviewer load
kind: measure
plain: The count and age of pull requests waiting for an automated or human review. Read volume and wait together because either can hide the bottleneck.
does: Shows whether generated work is arriving faster than the available review capacity.
ask: How many changes await review, how old are they, and which gate is holding them?
cues:
  - A list of open pull requests sorted by review age
  - Queue depth and time-to-first-review charts
  - Labels for waiting on checks, bot review, or human review
at: [0, 0.38, 0.12]
trouble: Queue age grows, reviewers skip evidence, or stale pull requests merge after attention has moved elsewhere.
sources:
  - work: addy-osmani-agentic-code-review
    page: What the 2026 data actually shows
    quote: "median review duration up 441.5%, with time-to-first-review and average review time both roughly doubling"
  - work: addy-osmani-agentic-code-review
    page: What the 2026 data actually shows
    quote: "This is already how I work on my own projects, including the open-source ones that now see more PRs in a day than I could carefully read in an evening."
---
