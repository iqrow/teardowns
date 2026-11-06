---
term: Parameter tuning
aka: [calibration, balance pass, weight fitting]
kind: process
plain: "Changing thresholds, weights, curves, delays and budgets against evidence until the AI's behaviour meets its target."
does: "Turns a working architecture into a consistent opponent whose choices stay within the intended challenge and style."
ask: "Which parameter explains the observed failure, and what test protects the other behaviours when it changes?"
cues: ["A parameter table with before and after values", "A curve or weight editor beside a match result", "A/B runs comparing one controlled change"]
trouble: "Many coupled values change at once, a local fix creates a new exploit, or tuning targets only the easiest metric."
at: [0.0, -0.34, 0.08]
sources:
  - work: graham-utility-theory
    page: "Section 9.5"
    quote: "The key to utility theory is to understand the relationship between the input and the output, and being able to describe that resulting curve."
  - work: dawe-behavior-selection-algorithms
    page: "Section 4.5, Utility Systems"
    quote: "The trick is to juggle all the models to encourage the most reasonable behaviors to shine when it is most appropriate."
---
