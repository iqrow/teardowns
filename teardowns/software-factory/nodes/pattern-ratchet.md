---
term: Ratchet
aka:
  - shrinking exception set
kind: pattern
plain: A baseline check accepts known exceptions while rejecting new failures, then removes exceptions as the system improves. The boundary moves in one direction.
ask: What exception can disappear next, and what prevents the baseline from loosening?
sources:
  - work: evolutionaryarchitecture-fitness-functions
    page: Architectural Fitness Functions
    quote: "An architectural fitness function provides an objective integrity assessment of some architectural characteristic(s)."
  - work: eslint-cli-suppressions
    page: --prune-suppressions
    quote: "Prune unused suppressions from the suppressions file. This option is useful when you addressed one or more of the suppressed violations."
  - work: eslint-cli-suppressions
    page: --suppress-all
    quote: "It allows you to enable one or more lint rules and be notified only when new violations show up."
---
