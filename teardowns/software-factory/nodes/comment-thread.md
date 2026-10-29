---
term: Comment thread
aka: [comments, discussion, conversation]
kind: part
plain: The ordered conversation attached to a ticket or pull request. People and runs leave context, questions, decisions, and links there.
does: Keeps human re-entry and run results beside the work item instead of in transient runner output.
ask: Can a new run tell what was tried, what failed, and what a human decided?
cues:
  - A chronological list of comments
  - Replies or threaded discussions under a ticket
  - Mentions, links, and author identities
trouble: Results are only in logs, comments are ambiguous, or an automated reply triggers itself forever.
at: [0.31, 0.2, 0.06]
links:
  - {to: bot-identity, rel: see also}
  - {to: ticket, rel: see also}
sources:
  - work: gitlab-issues
    page: Issues
    quote: Facilitate team discussion and decision-making through comments and threaded discussions.
  - work: linear-agents
    page: Overview
    quote: They can be @mentioned, delegated issues through assignment, create and reply to comments, collaborate on projects and documents, etc.
---
