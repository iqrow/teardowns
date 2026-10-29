---
term: Review bottleneck
aka:
  - verification bottleneck
  - PRs nobody reads
kind: loop
plain: Opening the throttle makes more pull requests. They wait in the human review queue, so lead time grows. The team closes the throttle again, or the queue caps throughput by itself, and every agent added makes the queue longer. Speeding up the agents does not help, because the constraint is the reviewer. The way out is to let evidence carry low-risk work. An agent-ready codebase, verification and a merge policy by risk class take that work out of the queue.
does: Shows why the factory's speed is set by how fast its output can be trusted, and where to work to raise it.
ask: Is the review queue growing faster than merges, and which share of it could merge on evidence instead?
trouble: Pull requests sit unreviewed for days, go stale and need rework, or reviewers start approving what they have not read.
pattern: pattern-accelerator-brake
loop:
  type: balancing
  through:
    - throttle
    - pull-request
    - review-queue
    - lead-time
sources:
  - work: addy-osmani-agentic-code-review
    page: What the 2026 data actually shows
    quote: "We poured machine-speed output into a system built for human-speed work. The bottleneck did not disappear; it moved to verification"
  - work: gene-kim-steve-yegge-vibe-coding
    url: https://itrevolution.com/articles/from-line-cookto-head-chef-orchestrating-ai-teams/
    page: "From Line Cook to Head Chef: Orchestrating AI Teams (book excerpt)"
    quote: "When coding is no longer the bottleneck, the rest of your organization becomes the bottleneck."
  - work: aws-scaling-agentic-coding
    page: Scaling agentic coding past the human bottleneck
    quote: "Agentic coding today scales only as far as the person approving every step"
  - work: aws-scaling-agentic-coding
    page: Scaling agentic coding past the human bottleneck
    quote: "What caps agentic development is supervision bandwidth, not model quality."
  - work: phoenix-project-gene-kim
    page: "Chapter 7, p. 90 (5th Anniversary Edition excerpt, ISBN 9781942788294)"
    url: https://reader.itrevolution.com/api/pub/phoenix-project-extra-excerpt/pdf/file
    quote: "You don’t factor the availability of any of the other nineteen stations in your decision"
  - work: team-topologies-skelton-pais
    page: "Chapter 1, p. 12 (publisher's excerpt)"
    url: https://itrevolution.com/wp-content/uploads/2022/06/TTOP_excerpt.pdf
    quote: "Ultimately, the team becomes a delivery bottleneck, as their cognitive capacity has been largely exceeded, leading to delays, quality issues, and often, a decrease in team members’ motivation"
  - work: matt-pocock-ai-coding-dictionary
    page: Human review
    url: https://www.aihero.dev/ai-coding-dictionary/human-review
    quote: "Agents raise the volume of code produced, so review becomes the bottleneck."
---
