---
term: Treaty duration and exit timing
aka: [term, renewal, notice period]
kind: knob
plain: "Treaty duration sets when a deal starts, expires, renews or can be ended. Exit timing also matters relative to simultaneous-order lock: [INFERENCE] an exit before orders lock can change the plan, while an exit after lock leaves the committed orders to resolve under the old relationship."
does: Controls how long cooperation can compound and whether a player can safely react to a breach before the next resolution.
ask: When does the agreement take effect, when can either side leave, and which already-committed actions remain binding?
range: One-shot; fixed term; notice period; permanent or shared-state
trouble: Immediate exit can make a promise unreliable at the moment it is most valuable; delayed exit can trap a player after a genuine breach. [INFERENCE]
links:
  - {to: order-commitment, rel: controls}
  - {to: async-turn-deadline, rel: controls}
  - {to: treaty-obligations, rel: see also}
variants:
  - label: Duration model
    items:
      - id: treaty-one-shot
        name: One-shot
        plain: The exchange resolves immediately and creates no continuing duty.
        sources:
          - work: firaxis-games-civilization-iv-manual
            page: p. 103, Immediate Items
            quote: "These are items that are exchanged immediately. That is, the deals have no duration."
      - id: treaty-zero-notice-exit
        name: Zero-notice exit
        plain: "A continuing relationship can be ended at the actor's choice without a preparation interval. [INFERENCE]"
        sources:
          - work: avalon-hill-the-rules-of-diplomacy
            page: printed p. 6, Diplomatic Phase
            quote: These discussions and written agreements, however, do not bind a player to anything he or she may say.
      - id: treaty-fixed-term
        name: Fixed term
        plain: The deal persists for a stated period and cannot be cancelled freely before that period ends.
        sources:
          - work: firaxis-games-civilization-iv-manual
            page: p. 103, Annual Trade Items
            quote: Annual trades last for a minimum of 10 turns. They can continue for longer than 10 turns if both sides agree, but neither side can cancel an annual trade before 10 turns are up – except by declaration of war.
      - id: treaty-permanent
        name: Permanent shared state
        plain: The relationship has no ordinary expiry and joins selected future decisions until a special rule ends it.
        sources:
          - work: firaxis-games-civilization-iv-manual
            page: p. 103, Permanent Alliance
            quote: If one declares war, the other automatically does so as well. If one signs a treaty, the other is bound by it.
      - id: treaty-notice-period
        name: Notice period
        plain: A player announces exit now, but the relationship remains active while the notice period runs.
        sources:
          - work: iron-helmet-neptunes-pride-formal-alliances
            page: Formal Alliances, Advantages
            quote: 24 ticks notice must be given before ending an alliance. This gives both players a short time to prepare for war.
sources:
  - work: firaxis-games-civilization-iv-manual
    page: p. 103, Immediate and Annual Items
    quote: "Annual trades last for a minimum of 10 turns. They can continue for longer than 10 turns if both sides agree, but neither side can cancel an annual trade before 10 turns are up – except by declaration of war."
  - work: iron-helmet-neptunes-pride-formal-alliances
    page: Formal Alliances
    quote: It takes 24 ticks to end an alliance. To do so you must Declare War, then wait for the timer to expire before you ships can capture former allied stars.
  - work: avalon-hill-the-rules-of-diplomacy
    page: printed p. 6, Order Writing Phase
    quote: Each player secretly writes “orders” for each of his or her units on a slip of paper. All players then reveal orders at the same time.
---
