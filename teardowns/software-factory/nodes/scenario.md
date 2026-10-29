---
term: Scenario
aka:
  - end-to-end user story
  - acceptance scenario
  - scenario test
kind: part
plain: A user story, written down, that a harness runs from start to finish against the built software. It checks what a user would see, and a model can judge results that are hard to assert exactly.
does: Tests the whole change the way a user meets it, as close to the real environment as the factory can get.
ask: Does each scenario run end to end against the real app or a faithful twin of its services?
cues:
  - A folder of scenario files written as user stories
  - Scenario runs listed beside the unit test results
  - A model's judgement recorded for each scenario run
at: [0, 0.6, 0.5]
links:
  - {to: spec, rel: made from}
sources:
  - work: strongdm-software-factory
    page: Software Factories And The Agentic Moment
    quote: "We repurposed the word scenario to represent an end-to-end \"user story\", often stored outside the codebase (similar to a \"holdout\" set in model training), which could be intuitively understood and flexibly validated by an LLM."
  - work: strongdm-software-factory
    page: The Principles
    url: https://factory.strongdm.ai/principles
    quote: "Your validation harness must be end-to-end, as close to the real environment as possible"
  - work: simon-willison-software-factory
    quote: "Their scenario tests became scripts for agents to constantly execute against the new systems as they were being built."
---
