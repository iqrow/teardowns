---
term: Merge rate
aka:
  - merge share
  - accepted PR rate
kind: measure
plain: The share of agent-assisted pull requests that merge during a stated period. Keep the denominator and time window fixed when comparing task types or throttles.
does: Shows how much generated work survives checks and review to become repository history.
ask: Of the agent pull requests opened in this window, how many merged, closed, or remain open?
cues:
  - A dashboard percentage labelled merged over opened agent PRs
  - Counts for merged, closed, and open pull requests
  - A trend split by task type or model
range: "83.8% accepted and merged in a 567-PR Claude Code sample; 54.9% merged without further modification."
trouble: A high percentage hides many abandoned PRs, or merges rise while change failures and review wait rise too.
at: [-0.5, 0.46, 0.12]
sources:
  - work: watanabe-agentic-coding-pull-requests
    page: Abstract
    quote: "The results indicate that 83.8% of these agent-assisted PRs are eventually accepted and merged by project maintainers, with 54.9% of the merged PRs are integrated without further modification."
---
