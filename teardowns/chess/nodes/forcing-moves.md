---
term: Forcing moves
aka:
  - checks, captures, threats
  - forcing sequence
kind: process
plain: "A forcing move sharply limits the opponent's useful replies: begin with checks, then captures, then concrete threats. It is a search order, not a guarantee that every forcing move is sound."
does: Shrinks the reply tree so tactical opportunities and defensive resources can be calculated first.
ask: What checks, captures, or concrete threats does each side have right now?
cues:
  - Check on the king
  - Capture of a piece or pawn
  - Concrete threat requiring a reply
range: Checks; captures; direct threats, in that practical order.
trouble: A player treats a forcing-looking move as automatically good and misses the opponent's stronger forcing reply.
children: []
at: [-0.34, 0.16, 0.02]
pattern: pattern-build-test-learn
links:
  - {to: candidate-moves, rel: raises}
  - {to: tactical-motif, rel: controls}
sources:
  - work: chesscom-forcing-moves-part-1
    page: article
    quote: "Essentially, a forcing move is either a check, a capture, or a threat."
  - work: chesscom-forcing-moves-part-1
    page: article
    quote: "When we calculate variations, we should always pay attention – and calculate first – the forcing moves."
---
