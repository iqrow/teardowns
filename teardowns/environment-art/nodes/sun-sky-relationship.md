---
term: Sun–sky relationship
aka:
  - sun and sky
  - atmospheric sun
kind: knob
plain: "The sun–sky relationship keeps the directional sun or moon, atmospheric disk and sky colour driven by the same light direction and atmosphere."
does: "Makes time of day read as one lighting event instead of a background pasted behind an unrelated key."
ask: "Does the directional light that casts the shadows also drive the atmospheric disk, scattering and sky-light update?"
cues:
  - "The sun disk sits on the same side of the sky as the cast shadows"
  - "Sunrise and sunset shift both the horizon colour and key-light direction"
  - "A second moon or sun occupies a distinct atmospheric-light slot"
range: "Enable Atmosphere Sun Light, assign the primary and secondary indices, and rotate the directional lights with the sky simulation."
trouble: "The disk, shadow direction and ambient colour disagree, or a moving sun changes the sky without refreshing the sky-light capture."
at: [0.92, 1.12, 0.25]
links:
  - {to: key-light, rel: controls}
  - {to: sky-light, rel: controls}
sources:
  - work: epic-games-sky-atmosphere
    page: "Sky Atmosphere Component"
    quote: "You can have two atmospheric Directional Lights that receive sun disk representation in the atmosphere with sky color that depends on the sunlight and atmosphere properties."
  - work: epic-games-directional-lights
    page: "Atmosphere and Cloud"
    quote: "Whether the Directional Light can interact with the atmosphere, clouds and generate a visual sun disk, all of which compose the visual sky."
---
