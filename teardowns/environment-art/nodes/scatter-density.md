---
term: Scatter density
aka:
  - coverage
  - planting density
  - foliage budget
kind: knob
plain: "Scatter density is the amount of foliage or clutter per ground area, together with its coverage, LOD and draw distance. It is a visual control and a performance budget."
does: "Sets how full the ground feels at each distance without spending the same cost on every blade."
ask: "How much cover should the player see here, and when should the population simplify or disappear?"
cues:
  - "Near ground has readable clumps while distance becomes a continuous mass"
  - "Clearings remain visible instead of filling with a uniform carpet"
  - "LOD changes preserve the broad silhouette without a sudden pop"
range: "Instances per area; coverage mask; LOD distances; cull distance; per-layer draw budget."
trouble: "Ground looks sparse, a uniform green carpet hides the material, LODs pop, or the frame rate drops when the camera faces a field."
at: [-0.48, 0.18, 0.32]
links:
  - {to: performance-budget, rel: see also}
  - {to: detail-hierarchy, rel: see also}
  - {to: scatter, rel: controls}
sources:
  - work: david-whatley-virtual-botany
    page: 1.1, Scene Management
    quote: "For each layer of botany, we establish a distance from the camera that the layer needs to generate visuals; this determines the size of our virtual grid."
  - work: david-whatley-virtual-botany
    page: 1.1.2, Planting Strategy
    quote: "We continue until we reach the proper density."
---
