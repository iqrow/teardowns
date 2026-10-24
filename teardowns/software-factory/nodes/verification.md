---
term: Verification
aka:
  - proof
  - evidence
  - prove it works
  - validation harness
kind: part
plain: The evidence that a change does what its spec asked. Scenarios run end to end against the real app or a twin of its outside services, and a run that did not write the code judges the result. When the evidence is strong, a person can check the outcome instead of reading the diff.
does: Moves trust from reading code to checking evidence, so human review can leave the critical path for low-risk work.
ask: What evidence shows this change works, which run produced it, and could the author have gamed it?
cues:
  - Scenario results and captured evidence attached to a pull request
  - A verifier run that is separate from the author run
  - A pass rate against scenarios the author never saw
at: [1.5, 1.12, 0.3]
children: [spec, scenario, holdout-scenario, digital-twin, self-verification, satisfaction]
links:
  - {to: review-queue, rel: lowers}
  - {to: merge-policy, rel: see also}
sources:
  - work: simon-willison-software-factory
    quote: "I’m particularly invested in the question of what it takes to have agents prove that their code works without needing to review every line of code they produce."
  - work: lauren-tan-pstack
    page: Verify the result and open a PR
    url: https://raw.githubusercontent.com/cursor/plugins/9580c23696ac8d7abed0c166f2f9918800afb819/pstack/docs/guide/06-verify-and-ship.md
    quote: "Verification is the slowest step in most agent work, because it's the step that usually waits on a human."
  - work: strongdm-software-factory
    page: The Principles
    url: https://factory.strongdm.ai/principles
    quote: "Your validation harness must be end-to-end, as close to the real environment as possible"
  - work: delinea-software-factory
    page: The Delinea Software Factory
    quote: "It’s what happens when validation replaces code review."
  - work: kent-c-dodds-you-own-the-outcome
    page: Shipping a feature without writing it
    quote: "I didn't read that diff line by line. I read the outcome: does it do what we decided it should do, and did the gates I trust pass? That's only reasonable because of everything I'd set up ahead of time"
---
