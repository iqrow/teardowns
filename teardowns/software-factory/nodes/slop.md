---
term: Slop
aka:
  - low-value output
  - review debt
kind: concept
plain: Fast, plausible output that reaches review without enough evidence or attention to make it trustworthy. It raises triage work.
does: Names the failure mode where generation outruns verification and human review capacity.
ask: What evidence is missing, and what gate would make this output safe to merge?
cues:
  - Large pull requests with vague intent and little test evidence
  - Repeated review comments or abandoned runs
  - A growing queue beside a rising generation count
at: [-0.45, 0.08, 0.12]
links:
  - {to: review-queue, rel: raises}
  - {to: throttle, rel: lowers}
sources:
  - work: addy-osmani-agentic-code-review
    page: What this means if you run a team
    quote: "The steady stream of plausible but hollow contributions costs real triage time even when it is well-intentioned"
  - work: birgitta-bockeler-to-vibe
    page: "Detectability: Will you notice when AI gets it wrong?"
    quote: "This dimension leans heavily on traditional engineering skills: test coverage, system knowledge, code review practices."
---
