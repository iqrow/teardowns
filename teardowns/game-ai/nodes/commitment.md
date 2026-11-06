---
term: Commitment
aka: [hysteresis, inertia, action lock, cooldown]
kind: knob
plain: "A bias or minimum time that keeps the AI on its current choice until another option is clearly better."
does: "Stops dithering between near-equal options while still allowing a genuine change of situation to interrupt the action."
ask: "How much better must a new option be, or how long must the current action last, before it can change?"
cues: ["A target or plan held through small score changes", "A cooldown timer after a choice", "A deliberate transition instead of frame-by-frame switching"]
range: "A small score bonus, a cooldown, a minimum action duration, or commitment until success or failure."
trouble: "Units twitch between two targets, or a plan survives long after it stopped working."
pattern: pattern-hysteresis
links:
  - {to: randomness, rel: see also}
at: [0.68, 0.82, 0.08]
sources:
  - work: graham-utility-theory
    page: "Section 9.7"
    quote: "One solution is to add a weight to any action that you are already currently engaged in. This will cause the AI to tend to remain committed until something truly better comes along."
  - work: graham-utility-theory
    page: "Section 9.7"
    quote: "Another solution is to stall making another decision—either for a period of time or until such time as the current action is finished."
---
