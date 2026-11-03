---
term: Victory aggregation
aka: [who counts as a winner, finish rule]
kind: knob
plain: Victory aggregation maps the final state and declared relationships to winner labels, draws, teams or ranked placements. It is a rule about outcomes, not a complete model of player preferences.
does: Controls whether another player's progress is a rival's loss, a shared result, a placement change or an additional route to success.
ask: Which final states produce a solo win, a shared win, a draw, a ranking or no winner?
range: One winner; shared threshold; agreed draw; team lockstep; ranked finish
trouble: If every additional ally receives the same win without adding a cost or changing the objective, inviting everyone can dominate narrower cooperation. [DESIGN EXAMPLE]
links:
  - {to: payoff-preferences, rel: see also}
  - {to: coalition-formation-rule, rel: controls}
  - {to: goal-state, rel: controls}
variants:
  - label: Victory rule
    items:
      - id: victory-solo-threshold
        name: Solo threshold
        plain: One player satisfies the objective alone and is the winner.
        why: It counts when the winning condition is evaluated per player rather than pooled across allies.
        sources:
          - work: avalon-hill-the-rules-of-diplomacy
            page: printed p. 4, Object of the Game
            quote: As soon as one Great Power controls 18 supply centers, it’s considered to have gained control of Europe. The player representing that Great Power is the winner.
      - id: victory-shared-coalition
        name: Shared coalition threshold
        plain: A formally defined coalition combines the relevant progress and wins together.
        why: It counts when the rules name the coalition whose joint state is evaluated, rather than treating every friendly edge as one team.
        sources:
          - work: gale-force-nine-dune-rulebook
            page: p. 12, How an Alliance Functions
            quote: Allied players’ forces are considered the same for the purposes of victory. If together their joint forces hold 4 strongholds in the Mentat Pause Phase, they have jointly won the game.
      - id: victory-agreed-draw
        name: Agreed draw
        plain: Players can end without a single winner and share the result under an explicit agreement.
        why: It counts when the end condition is consent-based rather than an automatic solo threshold.
        sources:
          - work: avalon-hill-the-rules-of-diplomacy
            page: printed p. 4, Object of the Game
            quote: Players can end the game by agreement before a winner is determined. In this case, all players who still have pieces on the game board share equally in a draw.
      - id: victory-team-lockstep
        name: Team lockstep
        plain: A predeclared team shares both victory and defeat, with membership treated as one scoring side.
        why: It counts when team membership is an outcome identity fixed by the match rules, not merely a temporary pact.
        sources:
          - work: firaxis-games-civilization-iv-manual
            page: p. 172, Locked Alliances
            quote: Team-members share line of sight, wonder effects, and technology research. They also share victory and defeat.
sources:
  - work: avalon-hill-the-rules-of-diplomacy
    page: printed p. 4, Object of the Game
    quote: The player representing that Great Power is the winner. However, players can end the game by agreement before a winner is determined.
  - work: gale-force-nine-dune-rulebook
    page: p. 6, Object of the Game
    quote: A player may win alone or in an Alliance with other players.
---
