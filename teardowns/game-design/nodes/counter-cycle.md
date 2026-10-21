---
term: Counter cycle
aka: ["A beats B, B beats C, C beats A", rock-paper-scissors relationship, RPS]
kind: concept
plain: "A counter cycle is a directed matchup graph: each unit has a favorable target, an unfavorable target and conditions such as damage type, range, terrain or support that determine whether the advantage appears."
does: Makes counter strength, unit roles, matrix results and mirror matches explicit before stats are retuned; exposes dominant strategies and gives the designer a testable target.
ask: Does each unit have a job beyond its preferred target, is every edge readable and reachable, and does the mirror reveal skill rather than a hidden stat or first-move advantage?
children: [counter-strength-scale, counter-unit-role, counter-matchup-matrix, counter-mirror-match]
links:
  - {to: interaction-observation, rel: measured by}
  - {to: hits-to-kill, rel: see also}
  - {to: time-to-kill, rel: see also}
sources:
  - work: ian-schreiber-game-design-concepts-level-16-game
    page: "Three Ways to Balance Game Objects: intransitive relationships and rock-paper-scissors"
    quote: The second method is an intransitive relationship between game objects, better known as a rock-paper-scissors relationship.
  - work: ian-schreiber-level-9-intransitive-mechanics
    page: This Week; Solutions to intransitive mechanics; Who Cares?
    quote: normal attacks are defeated by blocks, blocks are defeated by throws, and throws are defeated by attacks.
  - work: brandon-casteel-in-defense-of-hard-counters-in
    page: What is a Hard Counter?; Soft Counters and the HP Problem; Attribute Design vs Bonuses and Penalties
    quote: In practical terms, in RTS games
  - work: alex-jaffe-metagame-balance
    page: pp. 29–31, Matchup Charts
    quote: a matchup chart for Street Fighter 4, depicting the chance that any character should beat any other, in a fair game between skilled players.
---
