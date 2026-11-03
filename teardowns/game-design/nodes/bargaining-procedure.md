---
term: Bargaining procedure
aka: [how offers are made and accepted]
kind: knob
plain: A bargaining procedure defines who may propose, counter, accept, reject, wait, vote or act without agreement. Procedure changes which outside options remain available during delay and who controls the next move.
does: Makes negotiation a rule with observable timing instead of an unmodeled conversation layer.
ask: Who moves next, what can they offer, and what happens when everyone waits or rejects?
range: Explicit offers; timed negotiation window; tacit action and response
trouble: If one player can delay without cost while others lose opportunities, the procedure grants hidden bargaining power. [INFERENCE]
links:
  - {to: outside-option, rel: controls}
  - {to: choice-time-pressure, rel: see also}
  - {to: choice-information, rel: see also}
variants:
  - label: Procedure model
    items:
      - id: bargaining-explicit-offers
        name: Explicit offers and counters
        plain: Players exchange proposals that can be accepted, rejected or revised before a deal is recorded.
        why: It counts when the offer itself is a visible action with a defined response, not merely a private intention.
        sources:
          - work: branislav-slantchev-bargaining-dynamic-commitment
            page: p. 7, Explicit bargaining
            quote: The example of negotiation demonstrates explicit bargaining, where actors communicate offers and counter-offers, and reach agreements.
      - id: bargaining-timed-window
        name: Timed negotiation window
        plain: Negotiation is available only during a phase or deadline, after which actions commit or the status quo applies.
        why: It counts when the rules close discussion at a visible boundary and thereby make delay costly.
        sources:
          - work: avalon-hill-the-rules-of-diplomacy
            page: printed p. 6, Diplomatic Phase
            quote: These “diplomatic negotiations” take place before each turn. Negotiations last 30 minutes before the first turn and 15 minutes before each turn thereafter.
      - id: bargaining-tacit-action
        name: Tacit action
        plain: Movement, restraint, payment or another observable act communicates a proposal without a formal offer message.
        why: It counts when the action changes expectations even though no offer is logged as a contract.
        sources:
          - work: branislav-slantchev-bargaining-dynamic-commitment
            page: p. 7, Tacit bargaining
            quote: One can engage in tacit bargaining, where intentions and demands are communicated not with words but with actions.
sources:
  - work: branislav-slantchev-bargaining-dynamic-commitment
    page: p. 5, Distributional Conflict and Bargaining
    quote: Bargaining occurs when players want to coordinate expectations.
---
