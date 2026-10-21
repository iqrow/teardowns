---
term: Variation
aka:
  - calculated line
  - move tree
kind: process
plain: A variation is one candidate move followed by the opponent's best replies and the player's continuations, ending when the position can be evaluated or a forcing result is reached. Keep the board state, move order, and side to move explicit.
does: Exposes refutations and winning continuations before a move is committed.
ask: What is the opponent's strongest forcing reply, and what position remains after the line?
range: From a single reply to a branching tree; stop at a stable position or a forced result.
trouble: A line is extended past the useful point while a forcing reply, changed defender, or move-order issue is forgotten.
at: [0.0, 0.0, 0.04]
pattern: pattern-build-test-learn
links:
  - {to: calculation, rel: made by}
  - {to: blunder-check, rel: raises}
sources:
  - work: chesscom-forcing-moves-part-1
    page: article
    quote: "When we calculate variations, we should always pay attention – and calculate first – the forcing moves."
  - work: chesscom-forcing-moves-part-1
    page: article
    quote: "It is pure calculation that allows a chess player to decide between these two moves."
---
