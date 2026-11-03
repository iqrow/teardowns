---
term: Treaty capabilities
aka: [what an agreement permits]
kind: knob
plain: "Treaty capabilities are the actions an agreement enables or forbids: access, information exchange, defense response, peace, trade or shared state. Name each capability separately so players can price the help without guessing what the label includes."
does: Gives cooperation a concrete action set instead of treating alliance as a single undifferentiated bonus.
ask: Which actions become legal, automatic or impossible while this agreement is active?
range: Access; information; transfer; defense response; shared victory state
trouble: If one treaty label silently grants movement, information and automatic war together, players cannot identify which capability made the deal attractive. [DESIGN EXAMPLE]
links:
  - {to: choice-availability, rel: controls}
  - {to: treaty-obligations, rel: see also}
  - {to: treaty-transfers, rel: see also}
variants:
  - label: Capability scope
    items:
      - id: treaty-access
        name: Access and transit
        plain: Members may enter or use one another's territory under the agreement's movement rule.
        sources:
          - work: firaxis-games-civilization-iv-manual
            page: p. 103, Open Borders
            quote: Your units can now move freely through your partner’s territory, and vice versa.
      - id: treaty-defense
        name: Automatic defense response
        plain: "An attack by a third party triggers a defined military response, subject to the pact's cancellation conditions. [INFERENCE]"
        sources:
          - work: firaxis-games-civilization-iv-manual
            page: p. 103, Defensive Pact
            quote: "If either of your civilizations is attacked by a third party, the other civilization automatically declares war on the attacker. This agreement is nullified if either of the signatories attacks anybody."
      - id: treaty-information
        name: Shared information
        plain: "Members may voluntarily share plans and information; automatic map or sensor exposure is a separate rule."
        sources:
          - work: gale-force-nine-dune-rulebook
            page: p. 12, How an Alliance Functions
            quote: Allies may discuss and share strategy and information secretly at any time.
          - work: iron-helmet-neptunes-pride-formal-alliances
            page: Formal Alliances
            quote: Players in a formal alliance share scanning data.
      - id: treaty-shared-state
        name: Shared state and victory
        plain: Members are treated as one side for selected resources, obligations, victory or defeat.
        sources:
          - work: firaxis-games-civilization-iv-manual
            page: p. 103, Permanent Alliance
            quote: "You each continue to have control over your units and cities, but you share everything else: resources, technologies, maps, and victory or defeat. If one declares war, the other automatically does so as well. If one signs a treaty, the other is bound by it."
sources:
  - work: firaxis-games-civilization-iv-manual
    page: p. 99, Diplomacy
    quote: You can trade technologies, resources, maps, gold, and even cities. You can form mutual protection pacts; you can declare war; you can negotiate peace settlements.
---
