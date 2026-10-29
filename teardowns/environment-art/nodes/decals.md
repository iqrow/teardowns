---
term: Decals
aka:
  - projected marks
  - ground decals
  - splats and stains
kind: part
plain: "A decal projects a local image or material change onto existing geometry. Paths, cracks, puddles, tyre marks and stains use it to add a specific event without replacing the whole ground material."
does: "Adds local history and readable edges to terrain, props and structures while keeping the base mesh reusable."
ask: "What surface event needs a local mark, and should it change colour, relief, roughness or all three?"
cues:
  - "A crack or stain follows the ground rather than floating above it"
  - "A puddle changes colour and highlight inside a bounded shape"
  - "A path mark crosses more than one underlying material"
trouble: "The decal floats, z-fights, clips over a sharp slope, or reads as a dark shadow instead of a material mark."
children:
  - blend-mode
at: [0.22, 0.105, 0.88]
links:
  - {to: wear, rel: controls}
  - {to: grounding, rel: made from}
  - {to: terrain-layers, rel: see also}
sources:
  - work: martin-evans-deferred-screenspace-decals
    page: What Are Decals For?
    quote: "Decals are used in games to draw images onto others surfaces. Every time you see a bullet hole or a blood splatter appear on a surface in a game that’s a decal in action."
  - work: martin-evans-deferred-screenspace-decals
    page: Deferred Screen Space Decals
    quote: "Screen space decals fit right into the middle of this pipeline - they modify the GBuffer and change the data written there."
---
