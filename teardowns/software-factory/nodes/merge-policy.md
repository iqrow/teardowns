---
term: Merge policy
aka:
  - merge authority
  - agent may merge
  - auto-merge policy
  - risk tolerance
kind: knob
plain: The risk classes an agent may merge on its own once the required checks and evidence pass. The rest wait for a person. A short "always human" list names areas such as auth, payments and migrations that always need a human approval, and a change to the gates themselves always goes to a human.
does: Takes low-risk work out of the human review queue while keeping a person on the changes that need judgement.
ask: Which risk classes may merge without a human today, which areas always need one, and what evidence would widen the policy?
cues:
  - A checked-in "agent may merge" setting beside an "always human" list
  - Auto-merge enabled on a pull request, waiting for required checks
  - High-risk or gate-changing pull requests parked for a person
range: Start at none, with a person merging everything. Widen to low risk, then to low and medium, as the evidence holds.
trouble: The policy widens on hope, or an agent edits the gates that decide what it may merge.
at: [0.45, 0.12, 0.38]
pattern: pattern-two-way-door
links:
  - {to: human-review, rel: controls}
  - {to: review-queue, rel: lowers}
variants:
  - label: Agent may merge
    items:
      - id: merge-none
        name: None
        plain: A person merges every pull request, whatever its risk class. A factory starts here.
        sources:
          - work: kent-c-dodds-kcd-skills
            page: autopilot skill
            url: https://github.com/kentcdodds/kcd-skills/blob/ffa3faf9911210b89b1d9953e025d52247632070/skills/autopilot/SKILL.md
            quote: "P2 Agent may merge: low risk (default) | low+medium | none"
          - work: lauren-tan-noodle
            page: docs/concepts/modes.md
            url: https://raw.githubusercontent.com/poteto/noodle/82d2921c52370f23f29086de81ccfb600939c037/docs/concepts/modes.md
            quote: "A new project starts in supervised. Critical infrastructure stays in manual."
      - id: merge-low
        name: Low risk
        plain: Agents merge low-risk pull requests once the checks are green. Medium and high risk wait for a person.
        sources:
          - work: kent-c-dodds-kcd-skills
            page: autopilot skill, references/templates.md
            url: https://github.com/kentcdodds/kcd-skills/blob/ffa3faf9911210b89b1d9953e025d52247632070/skills/autopilot/references/templates.md
            quote: "Tiers the agent may merge (with --merge) without a human approval."
          - work: github-dependabot-actions
            page: Enabling automerge on a pull request
            quote: "Here is an example that automerges all patch updates to my-dependency"
      - id: merge-low-medium
        name: Low and medium
        plain: Agents merge low- and medium-risk pull requests once the checks, an AI review and the run's own proof pass. High risk waits for a person.
        sources:
          - work: kent-c-dodds-kcd-skills
            page: autopilot skill, references/templates.md
            url: https://github.com/kentcdodds/kcd-skills/blob/ffa3faf9911210b89b1d9953e025d52247632070/skills/autopilot/references/templates.md
            quote: "only low- and medium-risk PRs auto-merge, only with green CI, and within the Agent may merge answer."
          - work: kent-c-dodds-you-own-the-outcome
            page: Design the playground
            quote: "Automate shipping where the risk is low or medium."
sources:
  - work: kent-c-dodds-kcd-skills
    page: autopilot skill
    url: https://github.com/kentcdodds/kcd-skills/blob/ffa3faf9911210b89b1d9953e025d52247632070/skills/autopilot/SKILL.md
    quote: "only low/medium risk with green CI auto-merges."
  - work: kent-c-dodds-kcd-skills
    page: autopilot skill
    url: https://github.com/kentcdodds/kcd-skills/blob/ffa3faf9911210b89b1d9953e025d52247632070/skills/autopilot/SKILL.md
    quote: "Name the changes that always need your approval (e.g. auth, payments, migrations, public API, store releases)"
  - work: kent-c-dodds-kcd-skills
    page: autopilot skill
    url: https://github.com/kentcdodds/kcd-skills/blob/ffa3faf9911210b89b1d9953e025d52247632070/skills/autopilot/SKILL.md
    quote: "the human always merges it (it changes the gates)."
  - work: kent-c-dodds-kcd-skills
    page: autopilot skill, references/templates.md
    url: https://github.com/kentcdodds/kcd-skills/blob/ffa3faf9911210b89b1d9953e025d52247632070/skills/autopilot/references/templates.md
    quote: "High risk, red or pending CI, and anything in Always human park for the human."
  - work: github-auto-merge
    page: Automatically merging a pull request
    quote: "Auto-merge merges a pull request automatically after all required reviews and status checks pass"
  - work: lauren-tan-noodle
    page: docs/concepts/modes.md
    url: https://raw.githubusercontent.com/poteto/noodle/82d2921c52370f23f29086de81ccfb600939c037/docs/concepts/modes.md
    quote: "The mode is a trust dial, not a capability switch."
  - work: aws-scaling-agentic-coding
    page: Scaling agentic coding past the human bottleneck
    quote: "A low-risk ticket went the whole way on its own, code read, fix written, pull request raised and merged, ticket updated, with nobody touching a keyboard."
---
