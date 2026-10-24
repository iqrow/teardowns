---
term: Control CLI
aka:
  - app driver
  - verification skill
  - feature map
kind: part
plain: A checked-in command-line tool that starts the app, signs in and drives its features. An agent uses it to try its change the way a user would and to capture the evidence.
does: Lets an agent prove a user-visible change itself, so no person has to click through it before merge.
ask: Can an agent start the app, sign in and exercise this feature with one documented command?
cues:
  - A CLI or script in the repository that starts and drives the app
  - A feature map that lists each feature and the command that exercises it
  - Pull requests with captured output or screenshots from the driven app
at: [0.27, 0.5, 0.1]
links:
  - {to: self-verification, rel: see also}
sources:
  - work: kody-repository
    page: .agents/skills/control-kody/SKILL.md
    url: https://github.com/kody-hq/kody/blob/51c3a853c43e67600ab1bde6eb08a2965371b050/.agents/skills/control-kody/SKILL.md
    quote: "Drive and verify the Kody app with a Feature Map and one CLI."
  - work: kody-repository
    page: .agents/skills/control-kody/SKILL.md
    url: https://github.com/kody-hq/kody/blob/51c3a853c43e67600ab1bde6eb08a2965371b050/.agents/skills/control-kody/SKILL.md
    quote: "Do not invent a throwaway curl script, scrape PR comments by hand, or rediscover account routes"
  - work: kody-repository
    page: .agents/skills/control-kody/SKILL.md
    url: https://github.com/kody-hq/kody/blob/51c3a853c43e67600ab1bde6eb08a2965371b050/.agents/skills/control-kody/SKILL.md
    quote: "CI green is not enough for a user-visible account change. Local verification is the default"
  - work: kent-c-dodds-kcd-skills
    page: autopilot skill, references/verification.md
    url: https://github.com/kentcdodds/kcd-skills/blob/ffa3faf9911210b89b1d9953e025d52247632070/skills/autopilot/references/verification.md
    quote: "An agent that starts the app, signs in, and asserts on real responses catches its own bugs before merge."
  - work: lauren-tan-pstack
    page: Create a verification skill
    url: https://raw.githubusercontent.com/cursor/plugins/9580c23696ac8d7abed0c166f2f9918800afb819/pstack/skills/create-verification-skill/SKILL.md
    quote: "Every serious project needs a scripted way to drive the real app and prove behavior: launch it, exercise a feature the way a user would, and capture evidence."
---
