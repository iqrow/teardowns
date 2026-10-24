---
term: Satisfaction
aka:
  - behavioral pass rate
  - user-fit measure
  - trajectory score
kind: measure
plain: The fraction of observed scenario trajectories that probably satisfy the user. It measures behavior across the whole run instead of counting only assertions.
does: Shows whether the factory's changes satisfy users, even when a scenario needs judgement rather than an exact value.
ask: Of all observed scenario trajectories, what fraction likely satisfies the user?
cues:
  - A scenario score with the evidence that led to it
  - A trend split by scenario and release
  - A threshold that blocks or permits the next run
at: [0, 1.13, 0.35]
sources:
  - work: strongdm-software-factory
    page: Software Factories And The Agentic Moment
    quote: "We use the term satisfaction to quantify this validation: of all the observed trajectories through all the scenarios, what fraction of them likely satisfy the user?"
---
