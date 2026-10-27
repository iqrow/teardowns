---
term: Automated checks
aka:
  - deterministic gates
  - CI checks
kind: part
plain: Repeatable checks such as type checks, lint, tests, builds, security scans, and scenario tests. They return evidence that a run or pull request can read.
does: Catches deterministic failures early and gives rework a concrete signal.
ask: What must pass before merge, and can the check expose a failure without a human reading the diff?
cues:
  - Green or red check dots on a pull request
  - A check name, command, duration, and artifact on a run page
  - A required status check blocking the merge control
at: [-0.58, 0.9, 0.12]
pattern: pattern-defense-in-depth
links:
  - {to: branch-protection, rel: controls}
  - {to: ratchet, rel: see also}
sources:
  - work: anthropic-claude-code-best-practices
    page: Give Claude a check to run
    quote: "If you give it something that comes back pass or fail, Claude can close that loop itself."
  - work: github-protected-branches
    page: Require status checks before merging
    quote: "After enabling required status checks, all required status checks must pass before collaborators can merge changes into the protected branch."
  - work: software-engineering-google
    page: Continuous Integration
    url: https://abseil.io/resources/swe-book/html/ch23.html
    quote: "Each integration is verified by an automated build (including test) to detect integration errors as quickly as possible."
  - work: martin-fowler-continuous-integration
    page: Every Push to Mainline Should Trigger a Build
    quote: "We thus need to ensure that every commit is verified in a reference environment."
  - work: martin-fowler-continuous-delivery-article
    page: Continuous Delivery
    quote: "Anybody can get fast, automated feedback on the production readiness of their systems any time somebody makes a change to them"
  - work: building-evolutionary-architectures
    page: Chapter 1, Evolving Software Architecture (free chapter PDF)
    quote: "The fitness function metaphor encompasses a variety of mechanisms we employ to ensure architecture doesn’t change in undesirable ways, including metrics, tests, and other verification tools."
  - work: lauren-tan-pstack
    page: Script the check when you can
    url: https://raw.githubusercontent.com/cursor/plugins/9580c23696ac8d7abed0c166f2f9918800afb819/pstack/skills/principle-prove-it-works/SKILL.md
    quote: "The strongest proof is a deterministic script that re-runs the same comparison, not a one-time eyeball."
  - work: matt-pocock-ralph-tips
    page: 5. Use Feedback Loops
    quote: "The best setup blocks commits unless everything passes. Ralph can't declare victory if the tests are red."
  - work: matt-pocock-ai-coding-dictionary
    page: Automated check
    url: https://www.aihero.dev/ai-coding-dictionary/automated-check
    quote: "Determinism is what makes the loop trustworthy"
  - work: matt-pocock-software-factory-skill
    page: Start slow
    quote: "deterministic gates (types, lint, tests) that every run must pass."
---
