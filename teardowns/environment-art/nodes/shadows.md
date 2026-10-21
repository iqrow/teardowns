---
term: Shadows
aka:
  - cast shadows
  - shadow maps
  - penumbra
kind: part
plain: "A shadow is the area where a light path is blocked. Cast shadows carry the key direction, softness and scale of the environment onto other surfaces."
does: "Anchors objects, separates planes and adds a readable value pattern under the key."
ask: "Do direction, softness, colour and resolution hold at the camera's distances?"
cues:
  - "The house casts a shadow in one consistent direction"
  - "Penumbra widens away from a soft source"
  - "Contact darkening joins the cast shadow to the object base"
  - "Shadow edges stay stable as the camera moves"
range: "Choose hard or soft penumbra, a shadow colour or tint, and a resolution or filtering budget suited to the view distance."
trouble: "Shadows with no colour look cut out. Acne, peter-panning, swimming edges and missing contacts expose bias, resolution or temporal problems."
at: [0, 0.02, 0]
links:
  - {to: key-light, rel: controls}
  - {to: ambient-occlusion, rel: see also}
sources:
  - work: robert-yang-the-level-design-book
    page: "Lighting, What is video game lighting?"
    url: https://book.leveldesignbook.com/process/lighting
    quote: "Shadows: objects occlude (block) light and project shadow maps onto other objects"
  - work: jorge-jimenez-next-generation-post-processing
    page: "Post effects overview"
    quote: "for shadow mapping a 8-tap filter with a special per-pixel noise A.K.A. ‘Interleaved Gradient Noise’"
---
