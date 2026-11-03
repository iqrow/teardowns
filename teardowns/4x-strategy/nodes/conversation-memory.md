---
term: Conversation history
aka: [conversation memory, diplomatic memory, relationship history]
kind: part
plain: The earlier exchanges an AI considers alongside the current board when predicting another player's actions and expectations.
does: Gives dialogue-aware strategy context beyond the latest message.
ask: Which past exchange supports the current prediction, and is it still relevant to this board state?
cues: [Earlier messages with their speaker and turn, A reply referring to a previous proposal]
trouble: An old statement is treated as a current plan, or a player's claim is remembered as an observed fact.
at: [0.55, 0.13, 0.02]
links:
  - {to: strategy-grounded-dialogue, rel: see also}
sources:
  - work: meta-cicero
    page: "p. 1, Introduction"
    quote: "At each point in the game, Cicero models how the other players are likely to act on the basis of the game state and their conversations."
---
