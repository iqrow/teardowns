---
term: Performance budget
aka:
  - budget
  - poly budget
  - triangle budget
  - optimisation
  - the game runs slowly
  - frame budget
kind: measure
plain: "The limits a scene must fit inside to hold its frame rate: memory, triangles and vertices, draw calls and overdraw. Artists spend it like money and read it off profiling tools."
does: "Decides where detail can go: the play space gets most of it, distant views and small props get what is left."
ask: "What does this scene cost, and is the detail spent where the player looks?"
cues:
  - "Grass and small props that fade or pop in at a set distance"
  - "Distant hills and skylines made of flat cards or simple shapes"
  - "Models that switch to a simpler version as the camera pulls back (LOD pop)"
range: "Each LOD step should at least halve the vertex count."
trouble: "Low or uneven frame rate; stacked transparent foliage cards that cost far more than their triangle count (overdraw); detail spent on things the player never looks at."
links:
  - {to: detail-hierarchy, rel: see also}
  - {to: scatter-density, rel: see also}
children: [frame-time, draw-calls]
pattern: pattern-set-point
sources:
  - work: robert-yang-the-level-design-book
    url: https://book.leveldesignbook.com/process/env-art/optimization
    page: Performance budget
    quote: "Laggy low framerates happen when your project is overusing its budget for one or more of these resource types"
  - work: robert-yang-the-level-design-book
    url: https://book.leveldesignbook.com/process/env-art/optimization
    page: Profiling
    quote: "Never try to optimize on faith or a hunch, because you could be wrong about what's making the game run slowly."
  - work: epic-games-ue-performance-guidelines-for-artists
    page: For Artists
    quote: "Opaque materials are fastest due to having the best z buffer culling, masked are a bit slower, and translucent materials are slowest because of overdraw."
  - work: epic-games-ue-performance-guidelines-for-artists
    page: For Level Designers
    quote: "Adjust the draw distance on smaller objects to allow for better culling."
  - work: epic-games-ue-performance-guidelines-for-artists
    page: For Level Designers
    quote: "Verify LOD are setup with aggressive transition ranges. A LOD should use vertex count by at least 2x."
  - work: daniel-mcgowan-stages-environment-art
    page: Environment Assets
    quote: "In order to make the level beautiful and convincing the artist needs to use most of their polygons inside the play-space itself, and the vista will get what is left in the budget."
  - work: daniel-mcgowan-stages-environment-art
    page: Environment Assets
    quote: "Vista assets are usually cards or volumes with no back-faces on them."
  - work: polycount-wiki
    url: http://wiki.polycount.com/wiki/Polygon_Count
    page: Polygon Count
    quote: "Vertex count is ultimately more important for performance and memory than the triangle count, but for historical reasons artists more commonly use triangle count as a performance measurement."
---
