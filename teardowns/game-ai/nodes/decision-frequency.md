---
term: Decision frequency
aka: [think rate, update interval, replan interval]
kind: knob
plain: "How often the AI rechecks evidence and selects a new action."
does: "Trades responsiveness and freshness against CPU cost and visible twitching."
ask: "What must trigger a new decision, and what can safely wait until the current action ends?"
cues: ["A timer or event marker between decision traces", "Actions that continue between thinking ticks", "A visible burst of updates after a stimulus"]
range: "Every update, on a fixed interval, once per turn, when an event arrives, or when the current action finishes."
trouble: "The AI reacts late, burns time reconsidering unchanged facts, or visibly changes its mind every update."
at: [0.24, 0.82, 0.08]
sources:
  - work: dawe-behavior-selection-algorithms
    page: "Section 4.2"
    quote: "The central update() function, which is called each tick and is responsible for running our behavioral algorithm"
  - work: graham-utility-theory
    page: "Section 9.7"
    quote: "Once an AI agent makes a decision, they enter a cooldown stage where the weighting for remaining in that action is extremely high."
---
