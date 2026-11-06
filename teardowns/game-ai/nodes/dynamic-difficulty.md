---
term: Dynamic difficulty adjustment
aka: [DDA, adaptive challenge, AI director]
kind: process
plain: "Changing the opponent or its surrounding conditions during play in response to evidence about the player's current performance."
does: "Keeps challenge near the intended experience instead of leaving a fixed setting mismatched to the player."
ask: "Which observed signal changes which lever, by how much, and how slowly can the adjustment move?"
cues: ["A challenge or pressure meter moving after player successes", "Enemy behaviour changing after a run of wins or losses", "A smoothing delay between performance and adjustment"]
trouble: "The player notices the game helping or punishing them, or noisy short-term performance causes oscillation."
pattern: pattern-catch-up
at: [-0.34, -0.23, 0.08]
sources:
  - work: yannakakis-player-modeling
    page: "Section 5.1, Adaptive Player Experience and Game Balancing"
    quote: "A more sophisticated approach consists of adapting the game’s challenge in response to the actions of the players and to the state of the game environment."
  - work: spronck-dynamic-scripting
    page: "Abstract"
    quote: "an enhancement is investigated that allows scaling of the difficulty level of the game AI to the human player’s skill level."
---
