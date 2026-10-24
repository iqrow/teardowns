---
term: Ticket
aka: [issue, work item, card, spec]
kind: part
plain: A work item that records a request, its state, its owner and its discussion, and scopes one session of work.
does: Provides a durable place to assign and update work.
ask: Is the request specific enough to implement, review, or route without guessing?
cues:
  - Title and body text
  - State, labels, and assignee shown together
  - Links to a pull request, commit, or report
range: Bug, feature request, support request, investigation, maintenance task, or decomposition item.
trouble: The ticket has no acceptance signal, mixes several problems, or has no owner or next state.
at: [-0.28, 0.42, 0.06]
links:
  - {to: ticket-source, rel: made by}
  - {to: routing-label, rel: see also}
sources:
  - work: gitlab-issues
    page: Issues
    quote: "Issues: Track feature proposals, tasks, support requests, and bug reports. Organize and prioritize work with assignees, due dates, and health status."
    
  - work: jira-automation-triggers
    page: Work item created
    quote: You can use this trigger with actions to customize the new work item, including populating fields, assigning to users, and adding sub-tasks.
  - work: matt-pocock-ai-coding-dictionary
    page: Ticket
    url: https://www.aihero.dev/ai-coding-dictionary/ticket
    quote: "A handoff artifact scoping one session of work. Stands alone, or hangs off a spec as one of its children. Tickets can block or be blocked by sibling tickets, so the order of work falls out of their dependency graph rather than a linear plan."
deeper: Ticket fields, acceptance checks, state transitions, deduplication keys, and links to commits and pull requests.
---
