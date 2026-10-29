---
term: Improvement loop
aka:
  - retro loop
  - the factory learns
  - friction loop
kind: loop
plain: Finished runs leave logs and review findings. A retro, by a human or a retro run, finds a mistake that repeats and changes the factory's instructions or checks. A check holds better than a written rule, because nothing fails when an agent skips a rule, so each repeated review comment should become a check where it can. Later runs make that mistake less often, so more of their pull requests merge without a person.
does: Turns each repeated mistake into a lasting fix in the factory, so quality grows with use.
ask: Which repeated failure should change the factory next, and which measure will show the change worked?
trouble: The same review comments appear week after week, and nobody edits the instructions or adds a check.
loop:
  type: reinforcing
  through:
    - run-log
    - instructions
    - ratchet
    - merge-rate
sources:
  - work: anthropic-building-effective-agents
    page: Combining and customizing these patterns
    quote: "the key to success, as with any LLM features, is measuring performance and iterating on implementations."
  - work: donella-meadows-leverage-points
    page: 7. The gain around driving positive feedback loops
    quote: "Positive feedback loops are sources of growth, explosion, erosion, and collapse in systems."
  - work: site-reliability-engineering
    page: Chapter 1, Introduction
    url: https://sre.google/sre-book/introduction/
    quote: "This investigation should establish what happened in detail, find all root causes of the event, and assign actions to correct the problem or improve how it is addressed next time."
  - work: site-reliability-workbook
    page: Chapter 2 - Implementing SLOs
    url: https://sre.google/workbook/implementing-slos/
    quote: "Your first attempt at an SLI and SLO doesn’t have to be correct; the most important goal is to get something in place and measured, and to set up a feedback loop so you can improve."
  - work: devops-handbook-gene-kim
    page: Part I - Introduction
    url: https://itrevolution.com/wp-content/uploads/2022/06/DOHB2_Excerpt.pdf
    quote: "The principles of Continual Learning and Experimentation, which foster a high-trust culture and a scientific approach to organizational improvement and risk-taking as part of our daily work."
  - work: github-copilot-task-practices
    page: Adding custom instructions to your repository
    quote: "If Copilot is able to build, test and validate its changes in its own development environment, it is more likely to produce good pull requests which can be merged quickly."
  - work: lauren-tan-pstack
    page: Fix the environment with /correct
    url: https://raw.githubusercontent.com/cursor/plugins/9580c23696ac8d7abed0c166f2f9918800afb819/pstack/docs/guide/09-make-it-yours.md
    quote: "When you correct agents for the same mistake again and again, the fix belongs in the repo, not in your next prompt."
  - work: lauren-tan-pstack
    page: Fix the environment with /correct
    url: https://raw.githubusercontent.com/cursor/plugins/9580c23696ac8d7abed0c166f2f9918800afb819/pstack/docs/guide/09-make-it-yours.md
    quote: "Write it down as a doc or agent rule. Nothing fails when an agent skips a rule, so this comes last."
  - work: kody-repository
    page: docs/contributing/harness-engineering.md
    url: https://github.com/kody-hq/kody/blob/51c3a853c43e67600ab1bde6eb08a2965371b050/docs/contributing/harness-engineering.md
    quote: "When a mistake repeats, encode it in the strongest cheap guardrail that actually works. Prefer a failing check over another paragraph of advice."
  - work: kody-repository
    page: docs/contributing/harness-engineering.md
    url: https://github.com/kody-hq/kody/blob/51c3a853c43e67600ab1bde6eb08a2965371b050/docs/contributing/harness-engineering.md
    quote: "Rule of thumb: if reviewers repeat the same comment twice, encode it."
  - work: kent-c-dodds-kcd-skills
    page: autopilot skill
    url: https://github.com/kentcdodds/kcd-skills/blob/ffa3faf9911210b89b1d9953e025d52247632070/skills/autopilot/SKILL.md
    quote: "Agents file friction after every PR with a priority; other agents fix it, highest priority first."
---
