---
term: Chess engine
aka:
  - UCI engine
  - computer analysis
kind: measure
plain: A chess engine evaluates legal continuations and reports a preferred move or line; Stockfish is one free, strong UCI engine. Use the output as a comparison instrument after identifying the human decision and position, not as a replacement for understanding.
does: Finds tactical resources, tests candidate lines, and exposes evaluation changes that can be turned into questions for human analysis.
ask: Which human candidate did the engine refute or confirm, and what concrete feature explains the evaluation change?
cues:
  - Preferred move or line
  - Evaluation change
  - Depth, time or multipv settings
trouble: Treating one numerical evaluation as an explanation, or accepting an engine move without checking legality, alternatives, and the resulting plan.
range: Engine depth, time, multipv, and evaluation settings vary; compare like with like when reviewing a position.
at: [0.36, 0.34, 0.05]
pattern: pattern-braking-engine
links:
  - {to: game-analysis, rel: measured by}
  - {to: variation, rel: controls}
  - {to: tablebase, rel: see also}
unverified: The Stockfish README was unavailable to the verifier; the node keeps the engine description conservative.
---
