---
term: Spec
aka:
  - specification
  - PRD
  - intent
kind: part
plain: "A written description of the shared design concept: what a piece of work must do and how anyone will know it is done. It carries the intent across sessions, so the author run, the verifier and the person all work toward the same target."
does: Gives verification a target that exists before the code does.
ask: Does the spec say what must be true when the work is done, in terms a scenario can check?
cues:
  - A spec or PRD file linked from the ticket
  - Acceptance criteria written as statements a test can check
  - Out-of-scope notes and open questions
at: [-1.3, 0.5, -0.4]
variants:
  - label: Spec technique
    items:
      - id: grilling
        name: Grilling
        plain: The agent interviews the person one decision at a time and delays the handoff artifact until the design concept stabilises.
        why: Use it when the open questions are decisions a person can settle in conversation.
        sources:
          - work: matt-pocock-ai-coding-dictionary
            page: Grilling
            url: https://www.aihero.dev/ai-coding-dictionary/grilling
            quote: "A technique for developing a design concept with an agent: the agent interviews the user Socratically, one decision at a time, proposing a recommended answer for each."
          - work: matt-pocock-ai-coding-dictionary
            page: Grilling
            url: https://www.aihero.dev/ai-coding-dictionary/grilling
            quote: "Slows the rush to a finished plan — no handoff artifact is written until the concept stabilises."
      - id: prototyping
        name: Prototyping
        plain: The agent builds a quick, rough version when conversation is too low-fidelity, so the person can react to a real artifact.
        why: Use it when a question needs a real artifact to answer, such as how an interaction feels or whether an API shape reads well in calling code.
        sources:
          - work: matt-pocock-ai-coding-dictionary
            page: Prototyping
            url: https://www.aihero.dev/ai-coding-dictionary/prototyping
            quote: "Having the agent build a quick, rough version of something, for when conversation is too low-fidelity and you need a real artifact to talk about."
          - work: matt-pocock-ai-coding-dictionary
            page: Prototyping
            url: https://www.aihero.dev/ai-coding-dictionary/prototyping
            quote: "Grilling resolves design decisions in conversation. Conversation is cheap, but it's low-fidelity: some questions can't be answered in words — how an interaction feels, whether an API shape is ergonomic in real calling code, whether the layout works at real data sizes."
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
  - work: matt-pocock-ai-coding-dictionary
    page: Design concept
    url: https://www.aihero.dev/ai-coding-dictionary/design-concept
    quote: "The shared understanding of what's being built, held in common between user and agent but separate from any asset."
---
