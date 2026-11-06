---
term: "Opponent modelling"
aka: [opponent model, plan recognition, strategy prediction]
kind: process
plain: "The process of inferring an opponent's current strategy, hidden plan or recurring habits from observed actions and absences."
does: "Provides a belief about what the opponent is likely to do next, so the AI can choose a counter before the threat becomes visible."
ask: "What hidden plan best explains the evidence, and how much uncertainty remains between its plausible alternatives?"
cues: ["A belief panel ranks candidate strategies", "A predicted technology or attack appears before full confirmation", "Scouting updates the confidence of a plan rather than replacing it blindly"]
trouble: "The model treats a noisy observation as certainty, confuses a decoy with the plan or cannot represent a new strategy."
deeper: "Observations, latent strategies, plan recognition, belief updates, uncertainty, prediction horizon and model failure."
sources:
  - work: hostetler-limited-reconnaissance
    page: "Abstract, p. 1"
    quote: "We present a dynamic Bayes net model of strategies in the RTS game Starcraft that combines a generative model of how strategies relate to observable quantities with a principled framework for incorporating evidence gained via scouting."
  - work: ontanon-rts-survey
    page: "Section II-B, p. 3"
    quote: "For this type of uncertainty, the AI, as the human player, can only build a sensible model of what the opponent is likely to do."
  - work: bourg-ai-game-developers
    page: "Book excerpt, Fighting Game Strike Prediction"
    url: "https://www.gamedeveloper.com/programming/book-excerpt-ai-for-game-developers"
    quote: "We want the computer opponent to somehow learn to anticipate which strike the player will throw next given the most recently thrown strikes and some history of the player's strike patterns."
at: [-0.48, 0.30, 0.03]
---
