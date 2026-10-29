---
term: Verify command
aka:
  - validate script
  - single gate
  - local CI
kind: part
plain: One command that runs every check the repository requires, the same way on a laptop, on a runner and in CI. An agent runs it before it says a change is done.
does: Gives every run one fast, trusted answer to whether the checks pass, with no guessing about which checks count.
ask: Is there one command, and does CI run exactly the same checks?
cues:
  - A validate or verify script named in AGENTS.md
  - CI jobs that run the same command or the same list of checks
  - A pull request that reports the command's result
at: [0.7, 1.25, 0.12]
links:
  - {to: automated-checks, rel: see also}
sources:
  - work: kent-c-dodds-kcd-skills
    page: autopilot skill
    url: https://github.com/kentcdodds/kcd-skills/blob/ffa3faf9911210b89b1d9953e025d52247632070/skills/autopilot/SKILL.md
    quote: "One small AGENTS.md map and one verify command (local == CI)."
  - work: kody-repository
    page: AGENTS.md
    url: https://github.com/kody-hq/kody/blob/51c3a853c43e67600ab1bde6eb08a2965371b050/AGENTS.md
    quote: "npm run validate is the single authoritative local gate."
  - work: kody-repository
    page: .github/workflows/validate.yml
    url: https://github.com/kody-hq/kody/blob/51c3a853c43e67600ab1bde6eb08a2965371b050/.github/workflows/validate.yml
    quote: "Local npm run validate remains the authoritative single-command gate."
  - work: kent-c-dodds-kcd-skills
    page: autopilot skill, references/verification.md
    url: https://github.com/kentcdodds/kcd-skills/blob/ffa3faf9911210b89b1d9953e025d52247632070/skills/autopilot/references/verification.md
    quote: "What helps agents ship quality, in order: unit and integration test suites, typecheck, agents running their own change, a control CLI to drive the app, end-to-end tests, and decision records."
  - work: matt-pocock-skills
    page: "#3: The Code Doesn't Work"
    quote: "Without feedback on how the code it produces actually runs, the agent will be flying blind."
---
