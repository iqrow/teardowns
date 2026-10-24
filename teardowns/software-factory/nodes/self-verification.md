---
term: Self-verification
aka:
  - run your own change
  - author proof
  - evidence capture
kind: process
plain: The agent runs its change through the repository's checks and real user paths, then claims only what it actually verified. A separate verifier judges the result because an author naturally checks what it meant to build.
does: Gives the next gate evidence from an exercised change instead of a summary from its author.
ask: What did the agent run, what evidence did it capture, and who other than the author judged it?
cues:
  - A run that starts the app and exercises the changed path
  - Evidence links attached to the run or pull request
  - A fresh verifier that reads the result cold
at: [-0.85, 0.45, 0.4]
links:
  - {to: control-cli, rel: made from}
  - {to: automated-review, rel: see also}
sources:
  - work: kent-c-dodds-kcd-skills
    page: autopilot skill
    url: https://github.com/kentcdodds/kcd-skills/blob/ffa3faf9911210b89b1d9953e025d52247632070/skills/autopilot/SKILL.md
    quote: "Agents run their own change before merge and claim only what they verified."
  - work: kent-c-dodds-kcd-skills
    page: autopilot skill, references/verification.md
    url: https://github.com/kentcdodds/kcd-skills/blob/ffa3faf9911210b89b1d9953e025d52247632070/skills/autopilot/references/verification.md
    quote: "An agent that starts the app, signs in, and asserts on real responses catches its own bugs before merge."
  - work: lauren-tan-pstack
    page: Shipping
    url: https://raw.githubusercontent.com/cursor/plugins/9580c23696ac8d7abed0c166f2f9918800afb819/pstack/skills/poteto-mode/playbooks/shipping.md
    quote: "Only a verdict from an agent that did not write the code counts, because an author checks what it meant to build."
  - work: lauren-tan-pstack
    page: Shipping
    url: https://raw.githubusercontent.com/cursor/plugins/9580c23696ac8d7abed0c166f2f9918800afb819/pstack/skills/poteto-mode/playbooks/shipping.md
    quote: "Green CI and an approving bot review are not verdicts, because neither runs the change as a user would."
  - work: matt-pocock-ai-coding-dictionary
    page: Hallucination
    url: https://www.aihero.dev/ai-coding-dictionary/hallucination
    quote: "Hallucinated code is plausible by construction: it's what the API would look like if it existed, which is exactly what makes it slip past a skim-level review and fail only when run."
---
