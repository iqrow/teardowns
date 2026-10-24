---
term: Agent-ready codebase
aka:
  - agent experience
  - AX
  - agent legibility
  - harness engineering
  - the playground
kind: part
plain: The repository set up so an agent can find its way, make a change and prove the change works with no person watching. It holds a short instructions map, a glossary of the project's terms, one verify command, a tool that drives the running app, the tools and skills the agent may call, and checks that tighten after each repeated mistake.
does: Lets the same agent and model do good work that it can prove, so less of its output needs a person to read it.
ask: Can a fresh agent find the right code, run the one verify command, drive the app and show evidence, all without asking a person?
cues:
  - A short AGENTS.md map and a glossary near the repository root
  - One verify command that runs the same checks as CI
  - A checked-in CLI or script that starts and drives the app
  - Lint rules and checks that cite the review comment they replaced
at: [-1.75, 1.65, -0.45]
children: [codebase-health, instructions, shared-vocabulary, verify-command, control-cli, tool-access, ratchet]
links:
  - {to: merge-rate, rel: raises}
  - {to: verification, rel: see also}
sources:
  - work: matt-pocock-ai-coding-dictionary
    page: AX
    url: https://www.aihero.dev/ai-coding-dictionary/ax
    quote: "how well the environment is set up for an agent to do good work in a codebase."
  - work: matt-pocock-ai-coding-dictionary
    page: AX
    url: https://www.aihero.dev/ai-coding-dictionary/ax
    quote: "When the same agent performs well in one repo and badly in another … same model, same harness … the difference is usually AX."
  - work: matt-pocock-ai-coding-dictionary
    page: AX
    url: https://www.aihero.dev/ai-coding-dictionary/ax
    quote: "The instinct is to blame the model or rewrite the prompt; the fix is more often in the repo."
  - work: kent-c-dodds-kcd-skills
    page: autopilot skill
    url: https://github.com/kentcdodds/kcd-skills/blob/ffa3faf9911210b89b1d9953e025d52247632070/skills/autopilot/SKILL.md
    quote: "Audit any repository and set it up so coding agents ship changes safely with little human review."
  - work: kent-c-dodds-kcd-skills
    page: autopilot skill
    url: https://github.com/kentcdodds/kcd-skills/blob/ffa3faf9911210b89b1d9953e025d52247632070/skills/autopilot/SKILL.md
    quote: "The repo tells agents what to build and how to prove it."
  - work: kent-c-dodds-you-own-the-outcome
    page: Design the playground
    quote: "Build good primitives. Agents are only as good as the building blocks you give them."
  - work: kody-repository
    page: docs/contributing/harness-engineering.md
    url: https://github.com/kody-hq/kody/blob/51c3a853c43e67600ab1bde6eb08a2965371b050/docs/contributing/harness-engineering.md
    quote: "Humans steer outcomes; agents execute implementation details."
  - work: lauren-tan-pstack
    page: Verify the result and open a PR
    url: https://raw.githubusercontent.com/cursor/plugins/9580c23696ac8d7abed0c166f2f9918800afb819/pstack/docs/guide/06-verify-and-ship.md
    quote: "Make the agent able to do it, and you stop being the bottleneck."
---
