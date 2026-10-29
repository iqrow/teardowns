---
term: Terrain layers
aka:
  - ground material layers
  - landscape layers
  - splat maps
kind: part
plain: "Terrain layers are the ground materials that overlap on the surface, such as grass, dirt, rock, sand or snow. A mask, weight, vertex value or runtime cache decides how much of each layer appears."
does: "Turns a single ground mesh into material zones with useful transitions and artist control."
ask: "Which layer owns this pixel, what supplies its weight, and what should remain visible beneath it?"
cues:
  - "Grass, dirt and rock have different colour, roughness and relief"
  - "A painted patch follows a path, slope or drainage line"
  - "Overlapping edges keep some detail from both materials"
trouble: "A layer fills the whole map by accident, boundaries are soft and airbrushed, or one layer loses its ground colour under a decal."
at: [0.25, 0.09, 0.42]
links:
  - {to: height-blend, rel: controls}
  - {to: decals, rel: see also}
  - {to: albedo, rel: controls}
sources:
  - work: epic-games-landscape-materials
    page: Layer Weights and Ordering
    quote: "Landscape materials operate as a blend between multiple layers, where painted blend weights control the influence of each layer."
  - work: unity-terrain-layers
    page: Terrain Layers
    quote: "You can use multiple Terrain Layers, each with different Textures, to build up interesting, varied Terrain surfaces."
  - work: epic-games-landscape-materials
    page: Landscape Layer Blend Node
    quote: "The Landscape Layer Blend node blends together multiple per-layer values, such as texture samples or materials."
  - work: johan-andersson-terrain-rendering-frostbite
    page: ch. 5.2.3, Masking
    quote: "The resolution of the mask computed from the procedural slope in the shader is limited by the resolution of the heightfields. Therefore at extreme close-ups the masks can become blurry due to bilinear texture magnification of the heightfields. This can create dull and unnaturally smooth transitions between materials."
variants:
  - label: Blend method
    items:
      - id: blend-splat-weight-map
        name: Splat or weight map
        plain: "A painted or generated weight map controls the influence of each terrain layer."
        why: "The method is the explicit per-layer weight field. The landscape type or engine is only the surface it is used on."
        sources:
          - work: epic-games-landscape-materials
            page: Layer Weights and Ordering
            quote: "Landscape materials operate as a blend between multiple layers, where painted blend weights control the influence of each layer."
      - id: blend-vertex-colour
        name: Vertex colour
        plain: "Vertex colour stores blend data on terrain mesh vertices so the shader can mix materials without a separate full-resolution mask."
        why: "The method is data carried by mesh vertices. The visible colour of the ground is not the blend control."
        sources:
          - work: epic-games-vertex-weight-painting
            page: Vertex Color
            quote: "You can use vertex color data in a material to blend between different texture layers based on a color value painted onto the mesh."
      - id: blend-height-based
        name: Height-based blend
        plain: "A layer's height map changes the blend edge so raised grains and stones sit above a filling material."
        why: "The method uses height data at the edge. A smooth colour gradient alone is not a height blend."
        sources:
          - work: epic-games-landscape-materials
            page: Landscape Layer Blend Types
            quote: "This is the same as LB Weight Blend, but also adds detail to the transition between layers based on a height map."
      - id: blend-runtime-virtual-texture
        name: Runtime virtual texture
        plain: "A GPU-built texture cache stores terrain shading and receives material information from surfaces and decals at runtime."
        why: "The method is a runtime shading cache. The large landscape area is a workload, not the definition of the method."
        sources:
          - work: epic-games-runtime-virtual-texturing
            page: Runtime Virtual Texturing
            quote: "The RVT caches shading data over large areas, making them a good fit for Landscape shading that uses decal-like materials and splines that are well suited to conform to the terrain."
      - id: blend-tile-autotiling
        name: Tile transitions or autotiling
        plain: "A tile system uses labels on vertices, edges or faces and a formula to choose the tile to place."
        why: "The method is the data and rule used to identify a tile. A biome or art style is only the surface it is used on."
        sources:
          - work: boris-the-brave-classification-tilesets
            page: A Recap on Auto-Tiling
            quote: "In each case, you end up using some labels on vertices, edges, faces (in 3d) and the cell centers, and some formula to relate those to the tile to place."
---
