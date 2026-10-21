---
term: Matchup matrix
aka: [matchup chart, victory table]
kind: measure
plain: A matchup matrix puts every unit on both axes and records the result of each pairing under fixed conditions, making a proposed cycle visible instead of anecdotal.
does: Tests whether each unit has a favorable edge, a meaningful answer and a useful mirror; it also exposes a dominant row, a dead column or an accidental linear hierarchy.
ask: What does each cell say for equal value, equal skill, map and upgrades, and do the directed edges still form the intended cycle?
range: Cells can use hard counter, normal fight, resistant or mirror labels, then add win probability, cost efficiency, hits-to-kill or time-to-kill when the test harness is stable.
trouble: A matrix with no assumptions mixes duels, armies, maps and upgrades; a matrix whose rows all point one way reveals a hierarchy rather than an intransitive cycle.
at: [0.42, -0.03, 0.1]
links:
  - {to: interaction-observation, rel: measured by}
  - {to: parts-register, rel: see also}
variants:
  - label: Matchup label
    items:
      - id: matrix-hard-counter
        name: Hard counter
        plain: The row unit reliably wins under the stated test and the column unit has little efficient counterplay.
        sources:
          - work: brandon-casteel-in-defense-of-hard-counters-in
            page: What is a Hard Counter?; It's All About The Proportion
            quote: very bad at killing that target type.
      - id: matrix-normal-fight
        name: Normal fight
        plain: Neither side's type advantage decides the result; execution, timing, positioning and context remain meaningful.
        sources:
          - work: ramses-jelsma-the-logic-behind-violence-a-primer
            quote: The aspects that define how a player interacts with meaningful choice are the players’ knowledge and execution.
          - work: alex-sulman-improving-the-battlefield-1-weapon
            quote: These encounters remain mostly unchanged. These classes are opposite extremes; the winner of the engagement will usually come down to range.
      - id: matrix-resistant
        name: Resistant
        plain: The target blunts the listed counter and stays useful long enough to create value; the advantage is conditional rather than decisive.
        sources:
          - work: brandon-casteel-in-defense-of-hard-counters-in
            page: Rock Paper Scissors?; Soft Counters and the HP Problem
            quote: non-damage based counters, like units which can prevent other units from attacking
          - work: ian-schreiber-level-9-intransitive-mechanics
            page: Who Cares?; Solutions to intransitive mechanics
            quote: Players may make certain choices in light of what they observe other players doing now
      - id: matrix-mirror
        name: Mirror
        plain: Both sides use the same unit or role, so compare execution, timing, positioning, information and first-move effects rather than a composition edge.
        sources:
          - work: blizzard-entertainment-heroes-of-the-storm-patch
            quote: Quick Match will now prefer not to make mirror matches, the same hero on both teams, when other options are available.
          - work: ramses-jelsma-the-logic-behind-violence-a-primer
            quote: The aspects that define how a player interacts with meaningful choice are the players’ knowledge and execution.
sources:
  - work: alex-jaffe-metagame-balance
    page: pp. 29–31, Matchup Charts
    quote: a matchup chart for Street Fighter 4, depicting the chance that any character should beat any other, in a fair game between skilled players.
  - work: ian-schreiber-game-design-concepts-level-16-game
    page: Three Ways to Balance Game Objects; Learn to love Excel
    quote: Intransitive relationships can actually be solved, using matrices and some basic linear algebra.
unverified: The exact hard counter / normal fight / resistant labels are a practical roster taxonomy; the opened sources describe the underlying matchup, counter-strength and matrix ideas rather than a universal three-label standard.
---
