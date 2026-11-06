---
term: Payoff matrix
aka: [matrix game, normal-form game, stage game, outcome table]
kind: part
plain: "A table with one row for each AI plan and one column for each opponent plan. Each cell records the simulated outcome of that joint choice."
does: "Makes the simultaneous decision explicit, so the value comes from a distribution over rows and columns rather than a blind max or min."
ask: "What outcome does every important pair of candidate plans produce, and which plans can be removed as dominated?"
cues: ["Rows and columns are labelled with complete plans", "Cells contain simulated scores or outcomes", "A colour scale shows wins, losses or neutral outcomes across the table"]
trouble: "The table is filled with one-sided scores, stale simulations or too few candidate plans, so the selected mix looks strong only against an untested reply."
at: [0.0, 0.865, 0.08]
sources:
  - work: lanctot-tron-simultaneous-mcts
    page: "Section 2.1, p. 2"
    quote: "Each cell of the matrix corresponds to a joint move, i.e., a move chosen by both players simultaneously, and a corresponding child node (successor state)."
  - work: nisan-algorithmic-game-theory
    page: "Chapter 3, p. 55"
    url: "https://www.cs.cmu.edu/~sandholm/cs15-892F13/algorithmic-game-theory.pdf"
    quote: "A mixed strategy x for player 1 is a probability distribution on rows, written as an m-vector of probabilities. Similarly, a mixed strategy y for player 2 is an n-vector of probabilities for playing columns."
  - work: shoham-leyton-brown-multiagent-systems
    page: "Section 3.2.2, p. 55"
    url: "http://www.masfoundations.org/mas.pdf"
    quote: "A game written in this way amounts to a representation of every player’s utility for every state of the world, in the special case where states of the world depend only on the players’ combined actions."
---
