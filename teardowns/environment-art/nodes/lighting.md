---
term: Lighting
aka:
  - scene lighting
  - light rig
kind: part
plain: "Lighting is the direct and indirect energy that reaches surfaces and the camera. Artists shape it with a key, fill, shadows, occlusion and bounce."
does: "Reveals form and material, sets mood and time, and keeps the playable space readable."
ask: "Does the light reveal form, material and play space without flattening the scene?"
cues:
  - "One clear direction gives the hill and house a readable plane change"
  - "Warm key light sits against a cooler fill"
  - "Contact and cast shadows anchor objects to the ground"
  - "Bounced colour appears below walls and under foliage"
children:
  - key-light
  - fill-light
  - shadows
  - ambient-occlusion
  - global-illumination
at: [-1.7, 2.1, -1.1]
links:
  - {to: surface-materials, rel: controls}
  - {to: value-structure, rel: raises}
sources:
  - work: robert-yang-the-level-design-book
    page: "Lighting"
    url: https://book.leveldesignbook.com/process/lighting
    quote: "Lighting design is about placing lights in the game world to create visual depth, evoke mood, and provide information to help players play."
  - work: robert-yang-the-level-design-book
    page: "Lighting, What is video game lighting?"
    url: https://book.leveldesignbook.com/process/lighting
    quote: "Light sources: base layer of direct illumination, based on light angle and position"
---
