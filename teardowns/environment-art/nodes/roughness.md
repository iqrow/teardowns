---
term: Roughness
aka:
  - microsurface
  - gloss control
  - shiny look
kind: knob
plain: "Roughness controls how rough or smooth a material's surface is. High roughness scatters reflections broadly; low roughness gives sharp reflections."
does: "Sets whether natural ground reads as granular and matte, or as a smooth wet or polished surface."
ask: "Does the roughness map preserve believable variation across the surface?"
cues:
  - "Broad soft highlights across dry soil"
  - "Tight bright highlights on a puddle or polished stone"
  - "Variation keeps the environment from being uniformly smooth or matte"
range: "The Unreal scale runs from 0, a mirror reflection, to 1, a diffuse or matte surface."
trouble: "A roughness value that is too low or too uniform gives ground and foliage a plastic, wet or shiny look. If everything is smooth and reflective, the environment becomes noisy and overwhelming."
at: [0, 0.3, -0.5]
links:
  - {to: key-light, rel: see also}
  - {to: normal-map, rel: see also}
  - {to: macro-variation, rel: see also}
sources:
  - work: epic-games-physically-based-materials
    page: "Roughness"
    quote: "The Roughness input controls how rough or smooth a Material's surface is. In the Material this manifests as how sharp or blurry reflections appear on the Material."
  - work: epic-games-physically-based-materials
    page: "Roughness"
    quote: "A Roughness of 0 (smooth) results in a mirror reflection. A Roughness of 1 (rough) results in a diffuse or matte surface."
  - work: daniel-mcgowan-stages-environment-art
    page: "Material variation"
    quote: "Think about it, if everything in the environment is smooth and reflective it becomes noisy and overwhelming, and conversely, if everything is rough and matte, there is no visual interest."
---
