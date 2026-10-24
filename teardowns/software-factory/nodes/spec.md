---
term: Spec
aka:
  - specification
  - PRD
  - intent
kind: part
plain: A written description of what a piece of work must do and how anyone will know it is done. It carries the intent across sessions, so the author run, the verifier and the person all work toward the same target.
does: Gives verification a target that exists before the code does.
ask: Does the spec say what must be true when the work is done, in terms a scenario can check?
cues:
  - A spec or PRD file linked from the ticket
  - Acceptance criteria written as statements a test can check
  - Out-of-scope notes and open questions
at: [-1.3, 0.5, -0.4]
sources:
  - work: matt-pocock-ai-coding-dictionary
    page: Spec
    url: https://www.aihero.dev/ai-coding-dictionary/spec
    quote: "A handoff artifact describing a multi-session piece of work"
  - work: strongdm-software-factory
    page: Software Factories And The Agentic Moment
    quote: "non-interactive development where specs + scenarios drive agents that write code, run harnesses, and converge without human review."
  - work: delinea-software-factory
    page: The Delinea Software Factory
    quote: "Humans define intent: what the system should do, the scenarios it needs to handle, the constraints that matter."
  - work: dan-shapiro-five-levels
    page: Level 4
    quote: "You write a spec. You argue with it about the spec. … Then you leave for 12 hours, and check to see if the tests pass."
---
