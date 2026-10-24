---
term: Routing label
aka: [ready label, ready-for-agent, queue label, status column]
kind: knob
plain: A label or status value that tells the factory which task may handle a ticket.
does: Selects work for a task without hiding the ticket's human state.
ask: Which exact label or state means this task may claim the ticket now?
cues:
  - A coloured label chip on a ticket
  - A board column such as Ready or In progress
  - A workflow rule matching the label or state
range: One explicit ready label, a small set of task labels, or a status transition with a task filter.
trouble: Broad labels start the wrong task, a missing label strands work, or an agent adds its own trigger label repeatedly.
at: [0.1, 0.66, 0.07]
links:
  - {to: trigger, rel: controls}
  - {to: work-claim, rel: see also}
sources:
  - work: github-labels
    page: About labels
    quote: You can manage your work on GitHub by creating labels to categorize issues, pull requests, and discussions.
  - work: github-actions-triggering-workflow
    page: Using event activity types
    quote: For example, the following workflow triggers when an issue is opened or labeled.
---
