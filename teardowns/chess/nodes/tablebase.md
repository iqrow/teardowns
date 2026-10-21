---
term: Tablebase
aka:
  - endgame oracle
  - exact endgame lookup
kind: measure
plain: A tablebase is a lookup service for supported low-material positions. It returns an objective category and ordered legal moves, while the human study task is to explain the king route, pawn race, or defensive resource that makes the result hold.
does: Checks a theoretical position's exact result and candidate moves without pretending that the lookup itself teaches the underlying idea.
ask: What category and best move does the tablebase return, and what human pattern explains it?
cues:
  - Low-material position entered
  - Objective category returned
  - Ordered legal moves shown
  - 50-move rule status
range: Standard-chess positions covered by the service; the API also reports whether the 50-move rule changes certainty.
trouble: A tablebase verdict is treated as a general middlegame evaluation, or a cursed/blessed result is mistaken for an ordinary win or loss.
at: [0.38, 0.36, 0.03]
pattern: pattern-braking-engine
links:
  - {to: theoretical-position, rel: measured by}
  - {to: chess-engine, rel: see also}
unverified: The cited tablebase API page did not expose stable text to the verifier; the node describes the API fields conservatively.
---
