---
term: Contact force limits
aka: [biomechanical limits]
kind: knob
plain: Contact-force limits constrain power and force in a power-and-force-limited application; body-specific limits require a risk assessment.
does: Constrain speed, energy, and contact behavior after the application risk assessment.
ask: Which body region could be hit or clamped, and which limit applies?
at: [0.0955, -0.0954, 0.02]
variants:
  - label: Body region
    items:
      - id: region-hand
        name: Hand and fingers
        plain: The body model lists hand and finger as an individual body region.
        sources:
          - work: dguv-bgia-design-of-workplaces-with-collaborative-robots
            page: p. 14, body model explanatory text
            quote: "The body model establishes 4 main body regions and 15 individual body regions within the main regions so all anthropometric points of the body surface can be allocated in the body model."
      - id: region-forearm
        name: Lower arm
        plain: The body model lists lower arm and hand joint as an individual body region.
        sources:
          - work: dguv-bgia-design-of-workplaces-with-collaborative-robots
            page: p. 14, body model explanatory text
            quote: "The body model establishes 4 main body regions and 15 individual body regions within the main regions so all anthropometric points of the body surface can be allocated in the body model."
      - id: region-chest
        name: Chest
        plain: The body model lists chest as an individual body region.
        sources:
          - work: dguv-bgia-design-of-workplaces-with-collaborative-robots
            page: p. 14, body model explanatory text
            quote: "The body model establishes 4 main body regions and 15 individual body regions within the main regions so all anthropometric points of the body surface can be allocated in the body model."
      - id: region-face
        name: Face
        plain: The body model lists face as an individual body region.
        sources:
          - work: dguv-bgia-design-of-workplaces-with-collaborative-robots
            page: p. 14, body model explanatory text
            quote: "The body model establishes 4 main body regions and 15 individual body regions within the main regions so all anthropometric points of the body surface can be allocated in the body model."
sources:
  - work: fanuc-collaborative-robot-options-safety
    page: Power and force limiting
    quote: "power or force feedback built in, allowing it to detect contact with a person"
  - work: dguv-bgia-design-of-workplaces-with-collaborative-robots
    page: p. 13, risk analysis and individual body regions
    quote: "In risk analysis, the individual body regions assigned to a collision risk are determined."
deeper: The next level would hold contact geometry, quasi-static versus transient cases, pressure-force conversion, speed limits, and validation measurements.
---
