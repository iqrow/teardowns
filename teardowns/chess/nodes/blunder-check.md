---
term: Blunder check
aka:
  - final safety scan
  - pre-move check
kind: process
plain: "A blunder check is the last deliberate scan after choosing a move: re-read the opponent's checks, captures, threats, loose pieces, opened lines, and tactical counters in the resulting position. It is separate from the deeper line that produced the candidate."
does: Catches the one-move refutation that survives an otherwise plausible calculation.
ask: After my intended move, what is the opponent's strongest check, capture, or threat?
trouble: The player stops at the attractive endpoint of a line and never tests the actual position after the intended move.
at: [0.34, 0.0, 0.04]
pattern: pattern-braking-engine
links:
  - {to: variation, rel: controls}
  - {to: game-analysis, rel: measured by}
sources:
  - work: chesscom-forcing-moves-part-1
    page: article
    quote: "Assumptions are your enemy when calculating."
---
