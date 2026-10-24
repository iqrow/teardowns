---
term: Budget cap
aka:
  - spend limit
  - token budget
  - cost cap
kind: knob
plain: A hard limit on model spend for an organization or a project. When spend reaches it, the provider refuses new requests until someone raises or removes the limit or the next monthly cycle resets it, so a runaway loop stops instead of running up a bill. Set it low while you learn what a run costs, and raise it with evidence.
does: Puts a ceiling on what a flood of triggers or a looping run can cost.
ask: What happens to runs in flight when the cap is hit, and who may raise it?
cues:
  - A hard spend limit in the model provider's project settings
  - A cost figure for each run on the run page
  - Runs that fail with a spend-limit error
range: From a small project cap while learning to a large daily budget. StrongDM argues that a mature factory should spend at least $1,000 of tokens per engineer each day.
trouble: The cap is hit mid-run and leaves half-finished work, or there is no cap and a loop runs all night.
at: [0.66, 0.36, 0.06]
links:
  - {to: token-cost, rel: measured by}
sources:
  - work: openai-spend-limits
    page: Spend limits
    quote: "To stop traffic after tracked spend reaches a configured amount, enforce a hard spend limit for your organization or an individual project."
  - work: openai-spend-limits
    page: Spend limits
    quote: "Hard spend limits can interrupt production traffic."
  - work: openai-spend-limits
    page: Spend limits
    quote: "Reaching a project hard limit returns a 429 error … Raising or removing the reached limit allows traffic to resume after the update propagates. Otherwise, the limit resets with the next monthly cycle."
  - work: strongdm-software-factory
    page: Software Factories And The Agentic Moment
    quote: "If you haven’t spent at least $1,000 on tokens today per human engineer, your software factory has room for improvement"
  - work: kent-c-dodds-you-own-the-outcome
    page: Watch the outcomes
    quote: "Know your metrics and unit economics. \"It works\" isn't the bar. Does it work at a cost that makes sense?"
---
