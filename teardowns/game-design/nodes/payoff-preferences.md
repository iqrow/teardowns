---
term: Payoff preferences
aka: [utility model, what a player actually values]
kind: concept
plain: "A payoff model assigns value to outcomes, potentially including material progress, rank, team success, fairness, revenge, roleplay or social experience. These are modeling choices, not automatic facts about players. [MODEL ASSUMPTION]"
does: Prevents a design from silently assuming that every player maximizes a solo win at every moment.
ask: Which outcomes does this player prefer, and which sacrifices are they willing to make for them?
trouble: Treating all players as win-only can turn a rational rank-improving or relationship-preserving move into an apparent mistake. [INFERENCE]
links:
  - {to: goal-state, rel: see also}
  - {to: choice-dominance-check, rel: controls}
variants:
  - label: Payoff basis
    items:
      - id: payoff-objective
        name: Objective success
        plain: "Model a player's payoff as increasing with the objective outcome itself, such as winning, surviving or completing a declared goal. [MODEL ASSUMPTION]"
        why: "Use this item only when the payoff model assigns intrinsic value to objective progress; the cited rules show goals, not measured human utility. [MODEL ASSUMPTION]"
        sources:
          - work: firaxis-games-civilization-iv-manual
            page: p. 99, Leaders
            quote: Each leader has his or her own agenda. They, too, seek to achieve victory – some through force of arms, others through technological prowess, others through cultural domination.
      - id: payoff-rank-score
        name: Rank or score
        plain: "Model a player's payoff as increasing with relative placement or score even when first place is no longer reachable. [MODEL ASSUMPTION]"
        why: It counts when relative placement matters independently of the winner label.
        sources:
          - work: dave-eng-what-is-kingmaking
            page: Reasons behind kingmaking
            quote: The first option is usually to make the best scoring play possible.
          - work: dave-eng-what-is-kingmaking
            page: Kingmaking and player agency and experience
            quote: While they might not be able to win, they could potentially still do relatively better than the rest of their competition.
      - id: payoff-team-success
        name: Team or coalition success
        plain: "Model a player's payoff as increasing with a defined teammate or coalition result. [MODEL ASSUMPTION]"
        why: "Use this item only when shared utility is explicitly modeled; the cited rules define shared victory or defeat, not an observed preference. [MODEL ASSUMPTION]"
        sources:
          - work: firaxis-games-civilization-iv-manual
            page: p. 103, Permanent Alliance
            quote: "You each continue to have control over your units and cities, but you share everything else: resources, technologies, maps, and victory or defeat."
      - id: payoff-social-roleplay
        name: Social or roleplay experience
        plain: "Model a player's payoff as including trust, drama, identity, storytelling or time with other players even when those values do not improve the final result. [MODEL ASSUMPTION]"
        why: It counts when the play experience itself is part of the payoff rather than a side effect of winning.
        sources:
          - work: tynan-sylvester-decision-based-gameplay-design
            page: Closing Thoughts
            quote: Gamers want to make decisions and see results, but they also want to socialize, imagine themselves as fighter pilots, build gleaming cities, or create powerful personas known throughout the land.
sources:
  - work: stanford-encyclopedia-game-theory
    page: opening definition
    quote: Game theory is the study of the ways in which interacting choices of economic agents produce outcomes with respect to the preferences (or utilities) of those agents.
---
