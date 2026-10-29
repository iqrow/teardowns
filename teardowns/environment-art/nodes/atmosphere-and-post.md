---
term: Atmosphere and post-processing
aka:
  - fog and post
  - aerial perspective
  - post effects
kind: part
plain: "Atmosphere and post-processing shape the image after surface lighting. Fog changes colour with distance, while tone mapping, grading and focus transform the rendered frame for the display."
does: "Compresses distance and scene range into a readable image while preserving value structure and the intended mood."
ask: "Do fog, exposure, grade and focus keep the environment's value structure and gameplay cues intact?"
cues:
  - "Distant hills lose contrast and move towards the air colour"
  - "Bright HDR highlights roll into the display range"
  - "A controlled grade links the ground, foliage and sky palette"
  - "Objects outside the focus plane soften without hiding the route"
children:
  - fog
  - exposure
  - tone-mapping
  - color-grading
  - depth-of-field
at: [0, 0.8, -1.5]
links:
  - {to: composition-and-readability, rel: controls}
  - {to: value-structure, rel: see also}
sources:
  - work: bart-wronski-designing-next-generation-post-effects
    page: "Introduction"
    quote: "Today I will cover only “final” post effects that happen after the lighting, so:"
  - work: sebastien-hillaire-physically-based-and-scalable-atmospheres
    page: "What are we talking about?, slide 2"
    quote: "When light scattering happens between objects and your eyes, this physical interaction is called aerial perspective. Those objects then look like they are in a fog."
---
