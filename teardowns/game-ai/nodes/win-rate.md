---
term: Win rate
aka: [victory share, match win percentage]
kind: measure
plain: "The share of completed matches the AI wins over a defined opponent group, version or difficulty setting."
does: "Shows whether challenge is in the intended band, while leaving fairness, variety and enjoyment for other measures."
ask: "Against whom, under which rules and over how many matches is this percentage meaningful?"
cues: ["A gauge or percentage with its sample size", "Separate win-rate bars for player cohorts or AI versions", "Confidence bands that widen when few matches have been played"]
range: "A win rate is 0 to 1, or 0% to 100%; report the opponent pool, sample size and draw treatment with it."
trouble: "A small sample gives a false sense of certainty, or a target percentage hides repetitive, unfair or unfun matches."
at: [-0.3, 0.05, 0.08]
sources:
  - work: spronck-dynamic-scripting
    page: "p. 6, Description of Dynamic Scripting"
    quote: "The fitness is commonly defined as the probability that the team to which the agent belongs wins the game."
  - work: vinyals-alphastar
    page: "p. 2"
    quote: "The agent parameters were subsequently trained by a reinforcement learning algorithm that is designed to maximize the win rate."
---
