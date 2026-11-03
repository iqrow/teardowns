---
term: Signal design
aka: [what an action communicates, message channel]
kind: knob
plain: Signal design chooses whether a message is cheap, costly, noisy, verified or tied to an action that changes the sender's own options. The designer sets what receivers can observe and what types can imitate the signal.
does: Controls whether communication separates meaningful types, creates a pooling bluff or leaves beliefs uncertain.
ask: What can each type send, what does sending cost, and can the receiver distinguish the signal from ordinary play?
range: Cheap talk; costly action; noisy observation; verified record
trouble: If every type can send the same costless signal, the message may pool all types; if only one type can afford it, it may separate them. [INFERENCE]
links:
  - {to: choice-visibility, rel: controls}
  - {to: signal-credibility, rel: raises}
  - {to: commitment-device, rel: see also}
variants:
  - label: Signal channel
    items:
      - id: signal-cheap-talk
        name: Cheap talk
        plain: A message is observed but does not directly change the sender's payoff or legal options.
        why: It counts when communication is payoff-irrelevant at the moment it is sent.
        sources:
          - work: alexander-wolitzky-signaling-games
            page: p. 2, Communication Games
            quote: "Cheap talk games: sender’s “action” is a payoff-irrelevant message (“cheap talk”)."
      - id: signal-costly-action
        name: Costly action
        plain: The signal consumes a resource, time, option or safety margin for the sender.
        why: It counts when the signal changes the sender's own incentives, not merely the receiver's beliefs.
        sources:
          - work: branislav-slantchev-bargaining-dynamic-commitment
            page: p. 16, Communication
            quote: "In fact, we shall see that not just any action can “speak”, only the ones that are costly to the one taking them."
      - id: signal-noisy-observation
        name: Noisy observation
        plain: The receiver observes an imperfect trace of the sender's signal and must update without certainty.
        why: It counts when observation error is part of the rule rather than a bug in the interface.
        sources:
          - work: alexander-wolitzky-signaling-games
            page: p. 14, Responses to Equilibrium Multiplicity
            quote: Assume signals are observed with noise, so there are no off-path information sets.
sources:
  - work: alexander-wolitzky-signaling-games
    page: p. 2, Communication Games
    quote: "Signaling games: sender’s action set is exogenous and payoff-relevant."
---
