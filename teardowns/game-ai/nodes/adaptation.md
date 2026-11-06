---
term: "Adaptation"
aka: [adaptive AI, opponent response, learning during play]
kind: part
plain: "The part that changes an opponent's choices after it observes an opponent, a player or the results of its own plans."
does: "Prevents one discovered answer from deciding every match, while keeping changes bounded enough to remain useful and fair."
ask: "What evidence justifies changing the policy, and how can the change improve the next decision without erasing useful variety?"
cues: ["A known counter changes after repeated evidence", "The opponent's visible style alters the AI's response", "A match result updates a persistent strategy record"]
children: [opponent-modelling, player-modelling, in-game-adaptation, cross-game-learning, exploit]
sources:
  - work: ontanon-rts-survey
    page: "Section II-B, p. 3"
    quote: "In-game learning: How can bots deploy online learning techniques that allow them to improve their game play while playing a game?"
  - work: spronck-dynamic-scripting
    page: "Abstract, p. 1"
    quote: "Online learning in commercial computer games allows computer-controlled opponents to adapt to the way the game is being played."
---
