---
term: Rating
aka:
  - strength estimate
  - performance number
kind: measure
plain: A rating is a statistical measure of results against rated opponents, useful for comparing performance over a pool of games and time. It is an outcome measure, not a complete diagnosis of calculation, pattern knowledge, or endgame technique.
does: Tracks performance changes across rated play while the improvement loop uses positions and decisions to explain why the number moved.
ask: What result and opponent pool produced this change, and which position-based evidence explains the performance?
cues:
  - Rating number
  - Results against rated opponents
  - Opponent pool and time
  - Rating change
range: FIDE's system converts fractional scores into rating differences and uses rating-difference probabilities to calculate rating change.
trouble: Treating a single rating swing as proof of a newly learned skill, or confusing online and federation ratings without checking their systems.
at: [0.36, 0.0, 0.05]
pattern: pattern-build-test-learn
links:
  - {to: game-analysis, rel: measured by}
  - {to: pattern-catalogue, rel: see also}
sources:
  - work: fide-rating-regulations
    page: §8
    quote: "The FIDE Rating system is a numerical system in which fractional scores are converted to rating differences and vice versa."
  - work: fide-rating-regulations
    page: §8.3.2
    quote: "Delta R = score - PD. For each game, the score is 1, 0.5 or 0."
---
