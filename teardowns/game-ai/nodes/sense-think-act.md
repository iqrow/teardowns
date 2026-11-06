---
term: Sense, think, act
aka: [agent loop, perception-decision-action cycle, control loop]
kind: loop
plain: "A repeating cycle in which the AI reads the world, chooses a response and applies it, then observes the changed world."
does: "Keeps decisions connected to the changing game instead of treating a plan as a one-time script."
ask: "What changed since the last cycle, what decision used that evidence, and what action changed the next observation?"
loop:
  type: cycle
  through: [knowledge, decision-core, movement]
sources:
  - work: dawe-behavior-selection-algorithms
    page: "Section 4.1"
    quote: "While each of these example AIs may follow the Sense–Think–Act cycle, the “think” part of that cycle is ill-defined."
  - work: millington-ai-for-games
    page: "ch. 1, p. 13"
    url: "https://api.pageplace.de/preview/DT0400.9781351053297_A36789489/preview-9781351053297_A36789489.pdf"
    quote: "agent-based AI is about producing autonomous characters that take in information from the game data, determine what actions to take based on the information, and carry out those actions."
---
