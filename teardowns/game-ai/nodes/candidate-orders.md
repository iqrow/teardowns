---
term: Candidate orders
aka: [action sampling, move generator, order slots, action portfolio, candidate plans]
kind: process
plain: "A move generator builds a short, legal list of complete plans for each side from the much larger set of unit or order combinations."
does: "Makes a simultaneous search affordable while keeping enough distinct plans to expose counters and non-obvious joint actions."
ask: "Which legal plans survive the generator, and what useful strategy would be missing if they do not?"
cues: ["A generator log shows legal plans being ranked or sampled", "Several complete order cards cover different tactical intents", "A search node reports a candidate count far below the raw action count"]
trouble: "The list contains only one safe script, omits a strong counter, or grows so large that the search cannot evaluate it in time."
at: [0.53, 0.865, 0.08]
sources:
  - work: churchill-hierarchical-portfolio-search
    page: "Section 30.4, p. 3"
    quote: "The main idea behind these “portfolio-based” search systems is to reduce the branching factor of the game tree by using a portfolio of algorithms to generate a much smaller, yet hopefully intelligent set of actions."
  - work: ontanon-combinatorial-bandits
    page: "Introduction, p. 58"
    quote: "The key to the success of these algorithms is to sample the search space, rather than exploring it systematically."
  - work: ontanon-combinatorial-bandits
    page: "Introduction, p. 58"
    quote: "To illustrate this, consider Real-Time Strategy (RTS) games, where each player controls a collection of units, all of which can be controlled simultaneously, leading to a combinatorial branching factor."
  - work: gray-no-press-diplomacy
    page: "Section 2, p. 2"
    quote: "We refer to a tuple of orders, one order for each of a player’s units, as an action. … There are an average of 26 valid orders for each unit … so the game’s branching factor is massive and on some turns enumerating all actions is intractable."
    url: "https://arxiv.org/pdf/2010.02923"
---
