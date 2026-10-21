---
term: Terrain
aka:
  - landscape
  - ground
  - terrain tiles
kind: part
plain: "Terrain is the ground surface and its material field. It carries slopes, paths, patches, stains and wear."
does: "Gives the world a readable base. It joins landform, layered materials and local marks so the ground changes for a reason."
ask: "Where does the ground change shape, material or history, and will that change read at the camera distance?"
cues:
  - "A slope or bank changes the horizon and the walkable silhouette"
  - "Grass, dirt and rock occupy distinct but joined patches"
  - "Paths, stains and worn edges break the unmarked ground"
trouble: "The ground looks like one flat tile, the material boundary is airbrushed, or a mark reads as a shadow rather than a change of surface."
children:
  - landform
  - terrain-layers
  - height-blend
  - macro-variation
  - tiling-breakup
  - decals
  - wear
at: [-0.5, 0.15, 0.6]
links:
  - {to: foliage, rel: see also}
  - {to: environment-pipeline, rel: made by}
sources:
  - work: johan-andersson-terrain-rendering-frostbite
    page: ch. 5.1, Introduction
    quote: "One of the more common approaches for terrain texturing is to combine low-resolution unique color maps (Figure 1) for low-frequency details with multiple tiled detail maps for high-frequency details"
  - work: unity-terrain-layers
    page: Terrain Layers
    quote: "You can use multiple Terrain Layers, each with different Textures, to build up interesting, varied Terrain surfaces."
---
