---
term: Counter strength
aka: [soft counter, hard counter]
kind: measure
plain: Counter strength is the advantage a designated counter has over its target under stated conditions, from a contestable efficiency edge to a near-invalidating interaction.
does: Separates a soft counter from a hard counter before numbers are retuned, so the designer can state how much advantage the matchup is meant to buy.
ask: How much cost efficiency, win probability, hits-to-kill or time-to-kill advantage should this counter have, and what can still overturn it?
range: "Soft counter: the advantage changes the odds but positioning, timing, support or execution can reverse it. Hard counter: the target cannot trade efficiently without changing composition or conditions. Record the assumptions for either label."
trouble: A nominal soft counter with overwhelming cost efficiency behaves as a hard counter; a hard counter with no readable route to adaptation becomes a binary loss.
at: [0.42, -0.36, 0.1]
links:
  - {to: interaction-observation, rel: measured by}
  - {to: hits-to-kill, rel: see also}
  - {to: time-to-kill, rel: see also}
variants:
  - label: Counter severity
    items:
      - id: soft-counter
        name: Soft counter
        plain: An advantage that changes the odds while positioning, timing, support or execution can still reverse the exchange.
        sources:
          - work: ian-schreiber-level-9-intransitive-mechanics
            page: Solutions to intransitive mechanics; Solving RPS with Incomplete Wins
            quote: Players may make certain choices in light of what they observe other players doing now
          - work: brandon-casteel-in-defense-of-hard-counters-in
            page: What is a Hard Counter?; Soft Counters and the HP Problem
            quote: Marines and Banelings are a 'soft counter' to each other, since Marines can and do come out on top in this relationship based on the player's control over their units.
      - id: hard-counter
        name: Hard counter
        plain: An interaction in which the target is practically unable to trade efficiently without changing composition or conditions.
        sources:
          - work: brandon-casteel-in-defense-of-hard-counters-in
            page: What is a Hard Counter?; Rock Paper Scissors?; It's All About The Proportion
            quote: a 'hard counter' is an interaction where it is practically or actually impossible for one unit or army composition to defeat another unit or army composition.
sources:
  - work: ian-schreiber-level-9-intransitive-mechanics
    page: Solutions to intransitive mechanics; Solving RPS with Unequal Scoring; Solving RPS with Incomplete Wins
    quote: there will not be a single dominant strategy that invalidates all of the others, because it will be weak against at least one other counter-strategy.
  - work: brandon-casteel-in-defense-of-hard-counters-in
    page: What is a Hard Counter?; Soft Counters and the HP Problem; Attribute Design vs Bonuses and Penalties
    quote: The harder the counter, the more cost efficient the trade will always be between 2 participants in combat.
---
