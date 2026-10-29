---
term: Risk class
aka:
  - risk tier
  - blast radius
  - door type
kind: measure
plain: A label for how much damage a change can do and how hard it is to undo. A change that only composes existing pieces is low risk. One that extends a piece's behavior or contract is medium. One that adds a piece, a data store, an outside service or a trust boundary, or that crosses a one-way door, is high. The class decides which gates the change must pass and whether an agent may merge it.
does: Sends low-risk work through trusted automation and keeps human attention for high-risk and one-way-door changes.
ask: Does this change compose, extend or add, and how costly is it to undo?
cues:
  - A low, medium or high label on a pull request
  - A pull request summary that says which pieces the change composes, extends or adds
  - High-risk pull requests waiting for a named human
at: [-0.55, 0.12, 0.38]
pattern: pattern-two-way-door
links:
  - {to: merge-policy, rel: controls}
variants:
  - label: Risk tier
    items:
      - id: low-risk
        name: Low
        plain: The change composes existing pieces as designed. Green checks are enough to merge it.
        why: The change uses pieces that already exist and does not change how they behave.
        sources:
          - work: kent-c-dodds-kcd-skills
            page: autopilot skill, references/templates.md
            url: https://github.com/kentcdodds/kcd-skills/blob/ffa3faf9911210b89b1d9953e025d52247632070/skills/autopilot/references/templates.md
            quote: "composes = uses existing pieces as designed (low)."
          - work: kody-repository
            page: .agents/skills/ship-pr/SKILL.md
            url: https://github.com/kody-hq/kody/blob/51c3a853c43e67600ab1bde6eb08a2965371b050/.agents/skills/ship-pr/SKILL.md
            quote: "low: green CI. AI review is optional."
      - id: medium-risk
        name: Medium
        plain: The change extends an existing piece's behavior or contract. It needs green checks, an AI reviewer and the run's own proof that the change works.
        why: The change alters how an existing piece behaves, so its callers can break.
        sources:
          - work: kent-c-dodds-kcd-skills
            page: autopilot skill, references/templates.md
            url: https://github.com/kentcdodds/kcd-skills/blob/ffa3faf9911210b89b1d9953e025d52247632070/skills/autopilot/references/templates.md
            quote: "extends = changes an existing piece's behavior or contract (medium)."
          - work: kent-c-dodds-kcd-skills
            page: autopilot skill
            url: https://github.com/kentcdodds/kcd-skills/blob/ffa3faf9911210b89b1d9953e025d52247632070/skills/autopilot/SKILL.md
            quote: "P2 Risk tiers: low = CI green; medium = +AI reviewer +rung 4 proof; high = +human"
      - id: high-risk
        name: High
        plain: The change adds a new piece, data store, outside service or trust boundary, or it is a one-way door such as a public API name. A human approves it before merge.
        why: The change is costly to undo or widens what the system can reach.
        sources:
          - work: kent-c-dodds-kcd-skills
            page: autopilot skill, references/templates.md
            url: https://github.com/kentcdodds/kcd-skills/blob/ffa3faf9911210b89b1d9953e025d52247632070/skills/autopilot/references/templates.md
            quote: "adds = new piece, data store, external service, or trust boundary (high)."
          - work: kent-c-dodds-kcd-skills
            page: autopilot skill
            url: https://github.com/kentcdodds/kcd-skills/blob/ffa3faf9911210b89b1d9953e025d52247632070/skills/autopilot/SKILL.md
            quote: "P2 Risk tiers: low = CI green; medium = +AI reviewer +rung 4 proof; high = +human"
          - work: kent-c-dodds-you-own-the-outcome
            page: Then, ask for options instead of an answer
            quote: "Two-way doors you can walk through quickly and let the agent run. One-way doors (public API names, data shapes, pricing) are where you slow down and think."
sources:
  - work: kody-repository
    page: docs/contributing/architecture/primitives.yaml
    url: https://github.com/kody-hq/kody/blob/51c3a853c43e67600ab1bde6eb08a2965371b050/docs/contributing/architecture/primitives.yaml
    quote: "wires existing primitives without changing them … changes a primitive's behavior, shape, or contract … introduces a new primitive"
  - work: kent-c-dodds-kcd-skills
    page: autopilot skill
    url: https://github.com/kentcdodds/kcd-skills/blob/ffa3faf9911210b89b1d9953e025d52247632070/skills/autopilot/SKILL.md
    quote: "P2 Risk tiers: low = CI green; medium = +AI reviewer +rung 4 proof; high = +human"
  - work: kent-c-dodds-you-own-the-outcome
    page: Design the playground
    quote: "Automate shipping where the risk is low or medium. Well-structured PRs, tests, and AI reviewers let a lot of changes ship without you in the middle. Save your attention for the high-risk, one-way-door stuff."
  - work: addy-osmani-agentic-code-review
    page: Should we just let AI review more of it?
    quote: "How much human you keep is a dial, and you set it by blast radius, not by guilt."
  - work: birgitta-bockeler-to-vibe
    page: A sliding scale of review effort
    quote: "High probability + high impact + low detectability High level of review is advisable. Assume the AI might be wrong and cover for it."
---
