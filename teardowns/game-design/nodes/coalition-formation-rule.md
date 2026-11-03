---
term: Coalition formation rule
aka: [alliance topology, who may ally]
kind: knob
plain: "A coalition formation rule sets eligibility, consent, visibility, overlap, entry windows and exit timing. A bilateral alliance graph is not automatically a formal winning coalition: connected edges can contain players who remain rivals unless the victory rule says otherwise."
does: Determines whether adding a partner consumes a scarce slot, creates a new obligation, or merely adds another nonbinding relationship.
ask: Is the relevant object an edge, a clique, a declared coalition or a team, and when can it change?
range: Informal or nonbinding; exclusive formal coalition; overlapping bilateral graph
trouble: If connected bilateral alliances are pooled transitively, two players who are still enemies can accidentally share a victory. If only a declared coalition counts, a friendly edge may not pool progress. [DESIGN EXAMPLE]
links:
  - {to: victory-aggregation, rel: controls}
  - {to: coalition-stability, rel: raises}
  - {to: order-commitment, rel: see also}
  - {to: async-turn-deadline, rel: see also}
variants:
  - label: Coalition topology
    items:
      - id: coalition-nonbinding
        name: Informal or nonbinding pact
        plain: Players may coordinate privately or publicly, but the agreement itself does not force future actions.
        why: It counts when the relationship changes expectations without changing the legal action set.
        sources:
          - work: avalon-hill-the-rules-of-diplomacy
            page: printed p. 6, Diplomatic Phase
            quote: These discussions and written agreements, however, do not bind a player to anything he or she may say.
      - id: coalition-exclusive
        name: Exclusive formal coalition
        plain: Membership is explicit, visible and limited; a player cannot belong to multiple formal winning coalitions at once.
        why: It counts when membership is a single recognized group with entry and exit constraints, not a collection of independent promises.
        sources:
          - work: gale-force-nine-dune-rulebook
            page: p. 12, Alliances
            quote: No more than two players may be in an Alliance ... no player can be a member of more than one Alliance.
      - id: coalition-overlapping-edges
        name: Overlapping bilateral edges
        plain: A player can maintain several bilateral alliances, while the player's allies may remain enemies of one another.
        why: It counts when each edge has its own obligations and victory membership is not inferred from graph connectivity.
        sources:
          - work: iron-helmet-neptunes-pride-formal-alliances
            page: Formal Alliances
            quote: A formal alliance is an agreement between two players, but a player may be in as many formal alliances as they wish. If a player is allied with two neighbors, those neighbors will still be enemies and must create their own formal agreement.
sources:
  - work: iron-helmet-neptunes-pride-formal-alliances
    page: Formal Alliances
    quote: A formal alliance is an agreement between two players, but a player may be in as many formal alliances as they wish.
  - work: gale-force-nine-dune-rulebook
    page: p. 12, Alliances
    quote: During a Nexus, all players have a chance to make, join or break Alliances.
---
