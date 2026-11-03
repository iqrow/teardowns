---
term: Recurring payment
aka: [gold per turn, annual deal]
kind: knob
plain: A recurring payment transfers value each turn for a minimum term, keeping both sides exposed to the relationship's future state.
does: Makes duration, treasury health, and war escape part of the bargain rather than hidden implementation details.
ask: Is payment guaranteed when the treasury is empty, and what event ends the schedule?
cues: [A row of repeated coin marks across turns, A payment counter that decrements each round]
range: Fixed per-turn amount; resource per turn; escalating or indexed amount.
trouble: A schedule that survives every war can force absurd payments; one that vanishes at the first threat may have no commitment value.
sources:
  - work: 2k-civ4-manual
    page: 102
    quote: "Annual trades last for a minimum of 10 turns. They can continue for longer than 10 turns if both sides agree, but neither side can cancel an annual trade before 10 turns are up – except by declaration of war."
  - work: 2k-civ6-manual
    page: 138
    quote: "These agreements are rendered null and void if the two civilizations go to war."
at: [0.0, 0.42, 0.02]
---