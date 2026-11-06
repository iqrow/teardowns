---
term: Response curves
aka: [utility curves, consideration curves, scoring curves]
kind: knob
plain: "Curves that map a normalised input to a 0 to 1 consideration score."
does: "Controls when a consideration becomes important, how sharply it changes, and where it saturates."
ask: "Should this input matter steadily, suddenly, around a midpoint, or only past a threshold?"
cues: ["A plotted input-to-score curve in a tuning tool", "A score that rises slowly then sharply near a danger point", "Several candidate actions with different curve shapes"]
range: "Linear, quadratic, logistic and hand-tuned step-like curves are common choices."
trouble: "A curve reacts too early, never becomes urgent, saturates too soon, or creates a hidden discontinuity."
at: [-0.24, 0.82, 0.08]
variants:
  - label: Curve
    items:
      - id: curve-linear
        name: Linear
        plain: "A steady increase with a constant slope."
        why: "It counts as linear when equal input changes produce equal score changes across the range."
        sources:
          - work: graham-utility-theory
            page: "Section 9.5.1"
            quote: "A linear curve forms a straight line with a constant slope."
      - id: curve-quadratic
        name: Quadratic
        plain: "A power curve that stays low or high for longer, then changes more sharply."
        why: "It counts as quadratic when an exponent shapes the normalised input into a parabola."
        sources:
          - work: graham-utility-theory
            page: "Section 9.5.2"
            quote: "A quadratic function is one that forms a parabolic curve, causing it to start slow and then curve upwards very quickly."
      - id: curve-logistic
        name: Logistic
        plain: "A sigmoid curve with its largest rate of change around a midpoint and soft limits at both ends."
        why: "It counts as logistic when the score approaches its bounds rather than changing linearly at the extremes."
        sources:
          - work: graham-utility-theory
            page: "Section 9.5.3"
            quote: "It’s one of several sigmoid functions that place the largest rate of change in the center of the input … range, trailing off at both ends as they approach 0 and 1."
      - id: curve-step
        name: Step or piecewise
        plain: "A thresholded or hand-tuned curve made from selected points and segments."
        why: "It counts as step or piecewise when designers set explicit breakpoints instead of accepting one fixed formula."
        sources:
          - work: graham-utility-theory
            page: "Section 9.5.4"
            quote: "A piecewise linear curve is just a custom-built curve. The idea is that you hand-tune a bunch of 2D points that represent the thresholds you want."
sources:
  - work: graham-utility-theory
    page: "Section 9.5"
    quote: "The key to utility theory is to understand the relationship between the input and the output, and being able to describe that resulting curve."
---
