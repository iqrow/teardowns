---
term: Ratchet
aka:
  - baseline tightening
  - shrinking exception list
kind: process
plain: A stricter check is switched on while known failures remain in an exception list. New failures stop the run, and fixed exceptions are removed so the baseline only improves. The same move turns a review comment that keeps coming back into a lint rule, check or script.
does: Converts a large legacy gap into a one-way improvement path without accepting new violations.
ask: What is the current exception set, and what removes an exception from it?
cues:
  - A checked-in suppressions or baseline file
  - New violations fail while old entries remain listed
  - A periodic prune removes fixed entries
at: [-0.8, 0.55, 0.08]
pattern: pattern-ratchet
links:
  - {to: automated-checks, rel: controls}
sources:
  - work: eslint-cli-suppressions
    page: --suppress-all
    quote: "Suppresses existing violations, so that they are not being reported in subsequent runs."
  - work: eslint-cli-suppressions
    page: --prune-suppressions
    quote: "Prune unused suppressions from the suppressions file. This option is useful when you addressed one or more of the suppressed violations."
  - work: evolutionaryarchitecture-fitness-functions
    page: Architectural Fitness Functions
    quote: "An architectural fitness function provides an objective integrity assessment of some architectural characteristic(s)."
  - work: building-evolutionary-architectures
    page: Chapter 1, Evolving Software Architecture (free chapter PDF)
    quote: "When an architect identifies an architectural characteristic they want to protect as things evolve, they define one or more fitness functions to protect that feature."
  - work: kody-repository
    page: docs/contributing/harness-engineering.md
    url: https://github.com/kody-hq/kody/blob/51c3a853c43e67600ab1bde6eb08a2965371b050/docs/contributing/harness-engineering.md
    quote: "Rule of thumb: if reviewers repeat the same comment twice, encode it."
  - work: lauren-tan-pstack
    page: Steer with principle names
    url: https://raw.githubusercontent.com/cursor/plugins/9580c23696ac8d7abed0c166f2f9918800afb819/pstack/docs/guide/08-principles.md
    quote: "turns advice you've repeated twice into a lint, check, or script"
---
