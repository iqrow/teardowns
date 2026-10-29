---
term: Factory metrics
aka:
  - delivery measures
  - factory dashboard
kind: part
plain: The measures that show whether automated work flows, waits, fails, and recovers in a useful way. They connect agent output to delivery and review capacity.
does: Turns run and pull request history into evidence for throttle, staffing, gate, and task changes.
ask: What moved faster, what failed, and where did a person have to wait?
cues:
  - A dashboard of merge, lead-time, failure, and queue readings
  - A time series split by task type or trigger
  - A review queue with age and volume
at: [0, 1.62, 0.08]
children: [merge-rate, lead-time, change-failure-rate, review-queue]
sources:
  - work: dora-metrics-history
    page: From four keys to five (2024)
    quote: "measuring these factors over time gives teams a high-level understanding of their performance, regardless of their technology stack."
  - work: addy-osmani-agentic-code-review
    page: What the 2026 data actually shows
    quote: "Reviewers simply could not keep pace with the volume, so code began merging unread, and that became normal."
---
