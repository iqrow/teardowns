---
term: Review and rework loop
aka:
  - evaluator loop
  - fix and recheck
  - ping-pong
kind: loop
plain: An automated review fails a pull request, a rework run fixes what the review named and pushes, and the push starts a new review. A try cap ends the loop and hands the pull request to a person.
does: Fixes review findings without a human, and stops a disagreement between two runs from looping forever.
ask: How many tries does the loop get before a human, and what does the human see when it stops?
trouble: The same finding comes back on every try, or the loop runs all night on one pull request.
pattern: pattern-accelerator-brake
loop:
  type: balancing
  through:
    - automated-review
    - run
    - automated-checks
    - try-cap
links:
  - {to: try-cap, rel: see also}
sources:
  - work: anthropic-building-effective-agents
    page: "Workflow: Evaluator-optimizer"
    quote: "In the evaluator-optimizer workflow, one LLM call generates a response while another provides evaluation and feedback in a loop."
  - work: anthropic-building-effective-agents
    page: Agents
    quote: "Agents can then pause for human feedback at checkpoints or when encountering blockers."
  - work: anthropic-building-effective-agents
    page: Agents
    quote: "it’s also common to include stopping conditions (such as a maximum number of iterations) to maintain control."
---
