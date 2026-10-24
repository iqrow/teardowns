---
term: Holdout scenario
aka:
  - hidden test
  - holdout set
kind: part
plain: A scenario kept where the coding agent cannot read it. Only the verifier runs it, so the author cannot shape its code to pass that test alone.
does: Catches an agent that wrote code to pass the tests it could see, and not to do the job.
ask: Which scenarios can the author run read, and which ones does only the verifier hold?
cues:
  - Scenarios stored outside the repository the agent works in
  - A verifier run that reports results the author never saw
  - The loop ends only when the hidden scenarios pass
at: [0.95, 0.42, -0.2]
pattern: pattern-holdout-set
sources:
  - work: simon-willison-software-factory
    quote: "That idea of treating scenarios as holdout sets … used to evaluate the software but not stored where the coding agents can see them … is fascinating."
  - work: strongdm-software-factory
    page: The Principles
    url: https://factory.strongdm.ai/principles
    quote: "The loop runs until the holdout scenarios pass (and stay passing)"
  - work: strongdm-software-factory
    page: Software Factories And The Agentic Moment
    quote: "We repurposed the word scenario to represent an end-to-end \"user story\", often stored outside the codebase (similar to a \"holdout\" set in model training)"
---
