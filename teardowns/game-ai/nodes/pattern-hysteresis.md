---
term: Hysteresis
aka: [dead band, switching hysteresis, commitment threshold]
kind: pattern
plain: "Different thresholds for starting and undoing a change, so noise near a boundary does not make the system flip back and forth."
ask: "What gap separates the threshold to start a change from the threshold to reverse it?"
sources:
  - work: texas-instruments-understanding-schmitt-triggers
    page: "p. 1"
    quote: "The true Schmitt trigger input has the switching threshold adjusted where the part switches at a higher point (Vt+) on the rising edge and at a lower point (Vt–) on the falling edge."
  - work: graham-utility-theory
    page: "Section 9.7"
    quote: "If your AI agent is attempting to decide something every frame, it’s possible to run into oscillation issues, especially if you have two things that are scored similarly."
---
