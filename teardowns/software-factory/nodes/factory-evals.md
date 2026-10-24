---
term: Factory evals
aka:
  - eval suite
  - regression evals
  - replayed tickets
kind: process
plain: A fixed set of past tickets and scenarios that the factory reruns after any change to its models, prompts, tools or gates. Regression tasks should keep passing at close to 100%. Capability tasks show whether the change made the factory better at work it used to fail. Each eval names a failure mode and counts how often it happens.
does: Shows whether a change to the factory helped or hurt before the change meets real tickets.
ask: Which past tasks prove the factory still works, and what result blocks a change to the factory?
cues:
  - A suite of past tickets with known good outcomes
  - Pass rates per model, prompt or gate version
  - A factory change held back by a failing regression eval
at: [0.575, 1.07, 0.06]
links:
  - {to: improvement-loop, rel: see also}
  - {to: model-choice, rel: see also}
sources:
  - work: anthropic-demystifying-evals
    page: Demystifying evals for AI agents
    quote: "Once evals exist, you get baselines and regression tests for free"
  - work: anthropic-demystifying-evals
    page: Demystifying evals for AI agents
    quote: "Regression evals ask, ‘Does the agent still handle all the tasks it used to?’ and should have a nearly 100% pass rate."
  - work: ai-engineering-chip-huyen
    page: "Agents, adapted from the Agents section of the book (author's blog)"
    url: https://huyenchip.com/2025/01/07/agents
    quote: "To evaluate an agent, identify its failure modes and measure how often each of these failure modes happens"
---
