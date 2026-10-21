---
term: Pattern-braking engine
aka:
  - error-correction loop
  - balancing review loop
kind: pattern
plain: "A pattern-braking engine is the balancing loop that interrupts overconfidence: a candidate is calculated, a blunder or evaluation change is exposed by a check or tool, the position is explained, and the next test is adjusted. It protects the catalogue from turning repeated mistakes into false rules."
ask: What evidence stops this pattern from being applied mechanically, and what new check will catch the same failure?
loop:
  type: balancing
  through:
    - candidate-moves
    - chess-engine
    - game-analysis
    - blunder-check
    - candidate-moves
links:
  - {to: blunder-check, rel: see also}
  - {to: game-analysis, rel: see also}
  - {to: chess-engine, rel: see also}
  - {to: tablebase, rel: see also}
sources:
  - work: chesscom-forcing-moves-part-1
    page: article
    quote: "Assumptions are your enemy when calculating."
---
