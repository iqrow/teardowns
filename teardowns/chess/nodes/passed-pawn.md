---
term: Passed pawn
aka:
  - pawn passer
  - advancing passer
kind: process
plain: A passed pawn has no opposing pawn able to stop it by a direct capture on its file or an adjacent file. Its practical value comes from the race to promotion, the squares it controls, and the pieces the opponent must tie down to blockade it.
does: Creates a concrete promotion threat that can win material, distract defenders, or force a king route.
ask: Can the passer advance safely, be supported, or be used to create a second weakness before the opponent blockades it?
cues:
  - No opposing pawn on the file or adjacent file
  - Pawn race to promotion
  - Controlled squares ahead
  - Pieces tied to a blockade
trouble: The passer is pushed without calculating checks, blockades, promotion choices, or the opponent's counterplay.
at: [0.0, -0.02, 0.04]
pattern: pattern-chunking
links:
  - {to: king-activity, rel: controls}
  - {to: theoretical-position, rel: see also}
  - {to: tablebase, rel: measured by}
sources:
  - work: chesscom-endgames-10-principles
    page: "Rule #3"
    quote: "Recognize a passed pawn, and push it!"
  - work: chesscom-endgames-10-principles
    page: "Rule #3"
    quote: "you must push your passed pawns!"
---
