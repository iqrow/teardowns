---
term: "Opponent modelling"
aka: [opponent model, plan recognition, strategy prediction]
kind: process
plain: "The process of inferring an opponent's current strategy, hidden plan or recurring habits from observed actions and absences."
does: "Provides a belief about what the opponent is likely to do next, so the AI can choose whether to keep its opening or select a response before the threat becomes visible."
ask: "What hidden plan best explains the evidence, and should the current opening remain or switch to a response?"
cues: ["A belief panel ranks candidate strategies", "A predicted technology or attack appears before full confirmation", "Scouting updates the confidence of a plan rather than replacing it blindly"]
trouble: "The model treats a noisy observation as certainty, confuses a decoy with the plan or cannot represent a new strategy."
deeper: "Observations, latent strategies, plan recognition, belief updates, uncertainty, prediction horizon, opening commitment and response selection; opening prediction can use a Bayesian model learned from replay-labelled openings."
links:
  - {to: order-prediction, rel: see also}
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
  - work: synnaeve-bessiere-opening-prediction
    page: "Abstract, p. 1"
    url: "https://api.archives-ouvertes.fr/search/?q=halId_s:hal-00607277&fl=title_s,abstract_s&wt=json"
    quote: "This paper presents a Bayesian model to predict the opening (first strategy) of opponents in real-time strategy (RTS) games."
  - work: synnaeve-bessiere-opening-prediction
    page: "Abstract, p. 1"
    url: "https://api.archives-ouvertes.fr/search/?q=halId_s:hal-00607277&fl=title_s,abstract_s&wt=json"
    quote: "The parameters of this model are learned from replays (game logs), labeled with openings."
  - work: steamhammer-opening-selection
    page: "opening selection by the opponent model"
    quote: "If there are few games, Steamhammer prefers to try an opening that responds to the enemy plan."
at: [-0.48, 0.30, 0.03]
---
