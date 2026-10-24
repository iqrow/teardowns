---
term: Brakes
aka:
  - quality gates
  - release gates
  - backpressure
  - feedback loop
kind: part
plain: The gates that slow or stop a run before its change moves forward. They include deterministic checks, a separate automated review and human review, plus the risk class and merge policy that decide which of them each change must pass.
does: Keep accelerators from flooding the repository with changes that are hard to trust or costly to undo.
ask: Which independent gate can stop this change, and what evidence does it require?
cues:
  - Red or green check dots on a pull request
  - An automated review with findings separate from the author run
  - A required human approval or a blocked merge button
at: [1.85, 0.8, 0.3]
children: [automated-checks, automated-review, review-rework-loop, human-review, risk-class, merge-policy, review-bottleneck]
pattern: pattern-accelerator-brake
sources:
  - work: anthropic-claude-code-best-practices
    page: Give Claude a way to verify its work
    quote: "Give Claude a check it can run: tests, a build, a screenshot to compare."
  - work: anthropic-claude-code-best-practices
    page: Give Claude a way to verify its work
    quote: "By a second opinion: a verification subagent or a dynamic workflow that checks its own findings has a fresh model try to refute the result"
  - work: github-protected-branches
    page: Require pull request reviews before merging
    quote: "can require that all pull requests receive a specific number of approving reviews before someone merges the pull request into a protected branch."
  - work: matt-pocock-software-factories
    page: Software Factories for Real Engineers
    quote: "Automated checks, automated & human review. Slows the agent down and increases quality. … Before you can trust your agent to go fast, you need to know that the quality of work is going to be high at any speed."
  - work: kent-c-dodds-you-own-the-outcome
    page: Shipping a feature without writing it
    quote: "The agent wrote the implementation, tests, and PR. Automated gates and AI reviewers checked the work."
  - work: matt-pocock-software-factory-skill
    page: Start slow
    quote: "Every trigger is an accelerator. Accelerators without brakes make a slop cannon."
  - work: matt-pocock-ai-coding-dictionary
    page: Automated check
    url: https://www.aihero.dev/ai-coding-dictionary/automated-check
    quote: "Avoid: \"feedback loop\" / \"backpressure\" … both lump checks together with review."
---
