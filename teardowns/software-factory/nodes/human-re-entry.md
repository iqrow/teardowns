---
term: Human re-entry
aka:
  - escalation point
  - handoff boundary
kind: concept
plain: The point where a person comes back after a run ends or a gate blocks progress. The person's change or decision becomes a new event that starts another run.
does: Keeps automated work bounded while preserving a clear path for judgement, clarification, and recovery.
ask: What exact evidence or failure brings a person back, and what event starts after their change?
cues:
  - A stopped run with a human-review or needs-clarification label
  - A comment, approval, or ticket edit that starts a new run
  - A handoff record naming the decision still needed
at: [-0.8, 0.08, 0.12]
pattern: pattern-stop-the-line
links:
  - {to: try-cap, rel: see also}
  - {to: trigger, rel: see also}
sources:
  - work: anthropic-building-effective-agents
    page: Agents
    quote: "Agents can then pause for human feedback at checkpoints or when encountering blockers."
  - work: site-reliability-engineering
    page: Chapter 1, Introduction
    url: https://sre.google/sre-book/introduction/
    quote: "Monitoring should never require a human to interpret any part of the alerting domain. Instead, software should do the interpreting, and humans should be notified only when they need to take action."
  - work: github-copilot-task-practices
    page: Using comments to iterate on a pull request
    quote: "After a user with write access mentions `@copilot` in a comment, Copilot will start to make any required changes, and will update the pull request when it's done."
---
