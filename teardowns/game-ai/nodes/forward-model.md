---
term: Forward model
aka: [simulator, resolver model, rollout model, game model]
kind: part
plain: "A fast copy of the game's rules that maps a state and a joint order set to the next state without rendering or waiting for the live game."
does: "Lets search inspect consequences, score outcomes and roll out many candidate orders before committing one to the real resolver."
ask: "Does this model produce the same state as the live rules for the orders that matter, and is it fast enough for the search budget?"
cues: ["A debug view shows a simulated state beside the live state", "Rollout counters or a timeline advance without drawing the full game", "A mismatch report names a resolver rule or order interaction"]
trouble: "The simulator resolves an order differently from the live game, omits a conflict rule, or is too slow to explore enough joint plans."
sources:
  - work: yannakakis-togelius-ai-and-games
    page: "Section 3.2.2.2, p. 107"
    quote: "In other words, it is a way of playing the game in simulation, so that consequences of multiple actions can be explored before actually taking some of those actions."
  - work: yannakakis-togelius-ai-and-games
    page: "Section 3.2.2.2, p. 107"
    quote: "Having a forward model of the game is necessary in order to be able to use any tree search-based approaches to playing a game."
  - work: churchill-rts-combat-search
    page: "Section 2, p. 2"
    quote: "As one search may simulate millions of moves, with each move having a duration of at least one simulation frame, it remains for us to construct an abstract model of STARCRAFT combat which is able to efficiently implement moves in a way that does not rely on simulating each in-game frame."
  - work: melis-planet-wars-post-mortem
    page: "Move Generation"
    quote: "The first thing was to implement simulating the future (see `FUTURE` class), which was trivial except I screwed battle resolution up and for the longest time it was holding results back."
---
