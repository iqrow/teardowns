---
term: Human role
aka:
  - owner
  - product decider
  - factory engineer
  - head chef
kind: concept
plain: The work left for people once agents write and prove most changes. People decide what should exist and write the specs. They own the one-way doors and the gates, read the diffs of high-risk changes, watch outcomes and cost, and fix the factory when the same mistake repeats. A person attends to the factory when it stops or asks, the way a Toyota worker attends a machine only when it stops on an abnormality. In kitchen terms the person is the head chef, who designs the recipes while agents cook.
does: Puts scarce human attention on the decisions that only a person can make.
ask: Which decisions here can only a person make, and where is someone still spending attention on work the factory could prove?
at: [-0.575, 0.76, 0.06]
links:
  - {to: human-review, rel: see also}
  - {to: human-re-entry, rel: see also}
  - {to: pattern-kitchen-brigade, rel: see also}
pattern: pattern-stop-the-line
sources:
  - work: kent-c-dodds-you-own-the-outcome
    page: Decide what should exist
    quote: "The valuable part is deciding whether the request should be built at all, and what it should actually be."
  - work: kent-c-dodds-kcd-skills
    page: autopilot skill
    url: https://github.com/kentcdodds/kcd-skills/blob/ffa3faf9911210b89b1d9953e025d52247632070/skills/autopilot/SKILL.md
    quote: "Agents ship most changes; the human owns product decisions."
  - work: kent-c-dodds-kcd-skills
    page: autopilot skill
    url: https://github.com/kentcdodds/kcd-skills/blob/ffa3faf9911210b89b1d9953e025d52247632070/skills/autopilot/SKILL.md
    quote: "Product calls and one-way doors go to the human."
  - work: kody-repository
    page: docs/contributing/harness-engineering.md
    url: https://github.com/kody-hq/kody/blob/51c3a853c43e67600ab1bde6eb08a2965371b050/docs/contributing/harness-engineering.md
    quote: "Optimize for human attention as the scarce resource."
  - work: matt-pocock-ai-coding-dictionary
    page: Software factory
    url: https://www.aihero.dev/ai-coding-dictionary/software-factory
    quote: "Deciding which of those decisions stay human is the main design question."
  - work: delinea-software-factory
    page: The Delinea Software Factory
    quote: "Humans define intent: what the system should do, the scenarios it needs to handle, the constraints that matter."
  - work: taiichi-ohno-toyota-production-system
    page: "Chapter 1, Starting from Need (Taylor & Francis preview PDF)"
    url: "https://api.taylorfrancis.com/content/books/mono/download?identifierName=doi&identifierValue=10.4324/9780429273018&type=googlepdf"
    quote: "Only when the machine stops because of an abnormal situation does it get human attention. As a result, one worker can attend several machines, making it possible to reduce the number of operators and increase production efficiency"
  - work: kent-c-dodds-you-own-the-outcome
    page: Watch the outcomes
    quote: "Build self-healing automations. Things will break. Set things up so that failures get noticed and triaged (often by another agent) instead of silently rotting."
  - work: gene-kim-steve-yegge-vibe-coding
    url: https://itrevolution.com/articles/from-line-cookto-head-chef-orchestrating-ai-teams/
    page: "From Line Cook to Head Chef: Orchestrating AI Teams (book excerpt)"
    quote: "Welcome back, head chefs. You’ve mastered working with your AI sous chef."
  - work: poppendieck-lean-software-development
    page: "Introduction, p. xxvi (publisher's sample chapter)"
    url: https://ptgmedia.pearsoncmg.com/images/0321150783/samplechapter/poppendieckch.pdf
    quote: "Development is like creating a recipe, while production is like making the dish."
---
