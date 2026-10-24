---
term: Throttle
aka: [rate limit, sampling, trigger budget]
kind: knob
plain: A limit on how often an automated trigger may create work over time or across a stream of events.
does: Keeps noisy sources and fast loops below the review, API, runner, and budget capacity of the factory.
ask: Is the limit per source, repository, task, hour, or event sample, and what happens when the budget is spent?
cues:
  - A per-hour or per-minute counter
  - A sampling percentage or cooldown window
  - A disabled, delayed, or queued trigger
range: Every event, sampled events, one run per interval, an open-PR cap, or a fixed API request budget.
trouble: The trigger floods the queue, a critical event is delayed behind noise, or retries multiply the rate.
at: [0.32, 0.62, 0.06]
links:
  - {to: trigger, rel: controls}
  - {to: concurrency-limit, rel: see also}
  - {to: review-queue, rel: see also}
pattern: pattern-accelerator-brake
sources:
  - work: renovate-configuration-options
    page: prHourlyLimit
    quote: Rate limit PRs to maximum x created per hour. 0 means no limit.
  - work: github-dependabot-options
    page: open-pull-requests-limit
    quote: When either limit is reached, Dependabot reports an error and stops opening additional pull requests until some of the open pull requests are merged or closed.
  - work: github-rest-rate-limits
    page: Primary rate limit for GitHub App installations
    quote: GitHub Apps authenticating with an installation access token use the installation's minimum rate limit of 5,000 requests per hour.
  - work: site-reliability-engineering
    page: Chapter 3, Embracing Risk
    url: https://sre.google/sre-book/embracing-risk/
    quote: "Many products use this control loop to manage release velocity: as long as the system’s SLOs are met, releases can continue. If SLO violations occur frequently enough to expend the error budget, releases are temporarily halted"
  - work: phoenix-project-gene-kim
    page: "Chapter 7, p. 89 (5th Anniversary Edition excerpt, ISBN 9781942788294)"
    url: https://reader.itrevolution.com/api/pub/phoenix-project-extra-excerpt/pdf/file
    quote: "Therefore, one of the most critical mechanisms in the management of any plant is job and materials release"
  - work: phoenix-project-gene-kim
    page: "Chapter 7, p. 89 (5th Anniversary Edition excerpt, ISBN 9781942788294)"
    url: https://reader.itrevolution.com/api/pub/phoenix-project-extra-excerpt/pdf/file
    quote: "they all agree on one thing: WIP is the silent killer"
---
