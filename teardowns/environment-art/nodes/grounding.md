---
term: Grounding
aka:
  - contact treatment
  - sits on the ground
  - stop floating
kind: process
plain: The pass that makes an object appear to meet the surface beneath it. Contact shadow, a dirt skirt or decal, and slight mesh intersection all close the gap between object and ground.
does: Removes the floating or pasted on look and gives weight to structures and props.
ask: What visible contact evidence makes this object belong to this ground?
at: [0, 0.09, 0.12]
cues:
  - A dark contact band sits under the object
  - Dirt or a decal gathers where surfaces meet
  - The base slightly intersects or follows the ground instead of hovering
trouble: "Floating object, pasted on object, a bright gap under the base, or a perfectly clean contact line."
pattern: pattern-accumulation
links:
  - {to: ambient-occlusion, rel: made from}
  - {to: decals, rel: made from}
  - {to: scatter, rel: made from}
sources:
  - work: robert-yang-the-level-design-book
    page: Texturing
    url: https://book.leveldesignbook.com/process/env-art/texturing
    quote: "Edge detail at the top and bottom helps emphasize where the wall meets the ceiling and the floor, simulating ambient occlusion / the realistic accumulation of dirt."
  - work: unity-ssao
    page: Introduction to screen space ambient occlusion in URP
    quote: "The Screen Space Ambient Occlusion effect darkens creases, holes, intersections and surfaces that are close to each other in real-time."
  - work: martin-evans-deferred-screenspace-decals
    page: What Are Decals For?
    quote: "Decals are used in games to draw images onto others surfaces."
  - work: adam-bryla-3d-foliage-vanishing-ethan-carter
    page: How We Approached 3D Foliage in The Vanishing of Ethan Carter
    quote: "when such flat triangle intersects with the ground geometry or other objects, it really shows."
---
