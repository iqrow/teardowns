---
term: Digital twin
aka:
  - behavioral clone
  - service twin
kind: part
plain: A local service that copies the behavior and edge cases of an outside dependency at its boundary. Scenarios can run against it quickly and safely instead of calling the live service.
does: Makes integration verification fast, repeatable and safe at factory scale.
ask: Which boundary must the twin reproduce, including its failures and observable behavior?
cues:
  - A local service with the same API boundary as a dependency
  - Fixtures for success, failure and edge cases
  - Scenario runs that use the twin instead of production
at: [1.85, 0.34, -0.3]
sources:
  - work: strongdm-software-factory
    page: Digital Twin Universe
    url: https://factory.strongdm.ai/techniques/dtu
    quote: "We built twins of Okta, Jira, Slack, Google Docs, Google Drive, and Google Sheets, replicating their APIs, edge cases, and observable behaviors."
  - work: strongdm-software-factory
    page: Digital Twin Universe
    url: https://factory.strongdm.ai/techniques/dtu
    quote: "The key insight is to replicate behavior at the boundary."
  - work: strongdm-software-factory
    page: Software Factories And The Agentic Moment
    quote: "We can run thousands of scenarios per hour without hitting rate limits, triggering abuse detection, or accumulating API costs."
---
