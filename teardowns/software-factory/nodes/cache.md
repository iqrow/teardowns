---
term: Cache
aka: [dependency cache, reusable build cache]
kind: part
plain: An optional store for dependencies or intermediate files that a run can regenerate. It speeds later runs without becoming their source of truth.
does: Cuts repeated downloads and setup time while leaving a clean run able to recover from a miss.
ask: Can this run recreate the files when the cache is empty or poisoned?
cues:
  - "A cache hit or miss line in the run log"
  - "A key based on a lockfile or runner image"
  - "A cache retention and eviction setting"
range: "Cache dependencies and intermediate outputs. Keep secrets and sensitive data out."
trouble: "A stale or poisoned cache changes the result, a cache miss breaks the task, or cache growth evicts useful entries."
at: [-0.7, 0.35, 0.65]
links:
  - {to: disposable-environment, rel: see also}
sources:
  - work: github-actions-cache
    page: Artifacts versus dependency caching
    quote: "Use caching when you want to reuse files that don't change often between workflow runs, such as dependencies downloaded by a package management system, intermediate build outputs, or other files that are expensive to regenerate."
  - work: github-actions-cache
    page: Artifacts versus dependency caching
    quote: "a job should always be able to re-download or regenerate these files if a cache isn't available."
  - work: github-actions-cache
    page: Cache security
    quote: "Any run that can read a cache restores its contents as-is, so you should treat restored files as untrusted input and never store secrets or other sensitive data in a cache."
---
