---
term: Non-determinism
aka:
  - nondeterminism
  - run-to-run variance
  - different answer every run
kind: concept
plain: The same ticket on the same code can produce a different change on each run.
does: Makes one passing run weak evidence, so the factory repeats scenarios and reports scores across several trials.
ask: How many trials passed, and did each run reach the same user outcome?
range: Use pass@k when one successful attempt is enough, and pass^k when every trial must succeed.
trouble: A change passes one trial and fails or behaves differently on another, or a score is reported from one trial only.
at: [0.4, 1.13, 0.3]
sources:
  - work: matt-pocock-ai-coding-dictionary
    page: Non-determinism
    url: https://www.aihero.dev/ai-coding-dictionary/non-determinism
    quote: "The same input can produce different output. Run a model twice with identical context and you may get two different answers — sometimes a word, sometimes a completely different approach. Nothing in your code has to change for this to happen."
  - work: anthropic-demystifying-evals
    page: The structure of an evaluation
    quote: "Each attempt at a task is a trial. Because model outputs vary between runs, we run multiple trials to produce more consistent results."
  - work: anthropic-demystifying-evals
    page: How to evaluate AI agents
    quote: "pass@k measures the likelihood that an agent gets at least one correct solution in k attempts."
  - work: anthropic-demystifying-evals
    page: How to evaluate AI agents
    quote: "pass^k measures the probability that all k trials succeed."
  - work: strongdm-software-factory
    page: From Tests to Scenarios and Satisfaction
    quote: "We use the term satisfaction to quantify this validation: of all the observed trajectories through all the scenarios, what fraction of them likely satisfy the user?"
---
