---
term: Change failure rate
aka:
  - failed change percentage
  - change fail rate
kind: measure
plain: The percentage of production deployments that cause a failure. Define the failure signal and remediation window before comparing periods. Most outages come from changes, so a factory that merges more also needs progressive rollouts and fast rollback after merge. That work sits outside the factory, which ends at merge.
does: Shows whether faster delivery is producing changes that need rollback, hotfix, or other recovery work.
ask: Which deployments caused a production failure, and what counts as a failure for this service?
cues:
  - A percentage of deployments marked failed
  - Links from a failed deployment to incident, rollback, or fix-forward work
  - A trend beside lead time and deployment frequency
at: [0.5, 0.8, 0.12]
sources:
  - work: dora-metrics-history
    page: From four keys to five (2024)
    quote: "Change fail rate: Percentage of deployments causing failures in production."
  - work: site-reliability-engineering
    page: Chapter 1, Introduction
    url: https://sre.google/sre-book/introduction/
    quote: "SRE has found that roughly 70% of outages are due to changes in a live system. … Implementing progressive rollouts … Rolling back changes safely when problems arise"
---
