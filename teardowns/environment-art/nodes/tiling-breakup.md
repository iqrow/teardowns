---
term: Tiling breakup
aka:
  - texture repetition breakup
  - stochastic tiling
  - hiding the grid
kind: process
plain: "Tiling breakup varies samples or adds masks and decals so a repeated tile loses its visible grid."
does: "Preserves usable texture detail without letting the player see the texture's repeat period."
ask: "Which scale or sample changes before the eye finds the tile boundary?"
cues:
  - "No straight grid of identical stones or blades crosses the view"
  - "Detail scale changes over a broad macro pattern"
  - "Rotated or re-sampled marks interrupt repeated corners"
trouble: "Visible tiling, a checkerboard of identical patches, texture swimming, or breakup so strong that the material loses its identity."
at: [0.68, 0.085, -0.25]
pattern: pattern-detail-scales
links:
  - {to: macro-variation, rel: controls}
  - {to: normal-map, rel: see also}
  - {to: pattern-breakup, rel: see also}
sources:
  - work: daniel-mcgowan-stages-environment-art
    page: Environment Assets, Modular Assets
    quote: "modular pieces are usually textured using trim sheets and tiling textures, with vert blending or decals to break-up any visual repetition."
  - work: patricio-gonzalez-vivo-the-book-of-shaders
    url: https://thebookofshaders.com/12/
    page: Cellular Noise, Tiling and iteration
    quote: "So, for each tile we will have one feature point in a random position within the tile."
---
