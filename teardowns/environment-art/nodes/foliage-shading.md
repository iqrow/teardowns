---
term: Foliage shading
aka:
  - leaf shader
  - vegetation lighting
  - subsurface foliage
kind: part
plain: "Foliage shading adapts lighting to thin leaves, cards, stems and trunks. It uses alpha, normals, ambient occlusion and a subsurface or backlight approximation so plants keep volume in sun and shade."
does: "Makes foliage read as thin, light-catching material instead of flat paper or opaque plastic."
ask: "Where should light pass through, what should stay in shadow, and does the shader agree with the ground and canopy light?"
cues:
  - "Backlit leaves show a controlled warm or bright transmission"
  - "Leaf edges stay readable without a hard cutout halo"
  - "Trunks shade as solid forms while leaves remain thin"
  - "Foliage darkens in canopy shadow without becoming a black card"
trouble: "Leaves look like flat paper, alpha edges are jagged, backlight blooms, or foliage shading disagrees with the ground."
at: [0.86, 0.92, -0.66]
links:
  - {to: roughness, rel: see also}
  - {to: ambient-occlusion, rel: controls}
  - {to: wind, rel: see also}
sources:
  - work: tiago-sousa-crysis-vegetation
    page: 16.2, Vegetation Shading
    quote: "In reality, foliage can have different thicknesses (for our foliage, that is the assumption we always make) and lets variable amounts of light pass through in different areas. Therefore, we needed a subsurface-scattering approximation."
  - work: tiago-sousa-crysis-vegetation
    page: 16.2.1, Ambient Lighting
    quote: "We also use a precomputed ambient occlusion term stored in the vertex's alpha channel, which is painted by artists or computed using standard 3D modeling software."
---
