---
term: Macro variation
aka:
  - broad colour drift
  - large-scale noise
  - macro map
kind: knob
plain: "Macro variation is a slow colour, value or material drift across a large ground area. It changes the scale above the tile so repeated patches do not line up."
does: "Hides repetition and gives the terrain a broad read before detail maps and decals are visible."
ask: "What broad pattern changes the ground, and is it slow enough to sit above the tile detail?"
cues:
  - "Large quiet shifts of hue or value cross several texture repeats"
  - "The ground does not share one uniform colour under all props"
  - "Noise changes slowly, with smaller marks still visible on top"
  - "Ground of one flat colour loses scale and depth cues"
range: "Macro map scale, noise frequency, amplitude and material mix."
trouble: "The same patch repeats across the map, noise becomes cloudy airbrush, or broad variation fights the path and focal areas. Ground of one flat colour loses scale and depth cues; viewers may call it shiny or plastic even when it has no highlight."
unverified: "No opened source says viewers describe flat-coloured ground as shiny or plastic."
at: [-0.15, 0.08, -0.1]
pattern: pattern-detail-scales
links:
  - {to: tiling-breakup, rel: raises}
  - {to: foliage-color, rel: see also}
  - {to: pattern-breakup, rel: see also}
sources:
  - work: johan-andersson-terrain-rendering-frostbite
    page: "ch. 5.1, Introduction"
    quote: "One of the more common approaches for terrain texturing is to combine low-resolution unique color maps (Figure 1) for low-frequency details with multiple tiled detail maps for high-frequency details"
  - work: johan-andersson-terrain-rendering-frostbite
    page: ch. 5.2.3, Masking
    quote: "We can improve the bland transitions by adding detail on a per-material basis to the computed masks."
  - work: robert-yang-the-level-design-book
    page: "Metrics: Use world-aligned grid textures"
    url: https://book.leveldesignbook.com/process/blockout/metrics
    quote: "Do not use flat solid colors, these lose visual scale and depth cues while prototyping."
---
