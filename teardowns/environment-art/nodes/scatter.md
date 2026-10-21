---
term: Scatter
aka:
  - vegetation placement
  - instance placement
  - planting
kind: process
plain: "Scatter places foliage and ground clutter by rules for density, slope, height, masks, exclusion, clustering and edges. The rule set makes a population feel grown from the ground rather than dropped at random."
does: "Turns a small set of foliage assets into a coherent population that follows terrain, paths, gaps and biome logic."
ask: "What rule puts this instance here, what rejects it, and where should the next cluster or gap occur?"
cues:
  - "Plants stop at paths, steep slopes or painted exclusions"
  - "Edges have a reason, such as shade, water, height or use"
  - "Clusters and gaps repeat at uneven intervals"
  - "The same location gives the same population when revisited"
trouble: "Scatter looks random rather than placed, forms a planting grid, ignores edges, fills every gap, or repeats one cluster too clearly."
range: "Density mask; slope and height limits; exclusion masks; seed; spacing; clustering and edge rules."
at: [0.08, 0.17, 0.46]
pattern: pattern-breakup
links:
  - {to: scatter-density, rel: controls}
  - {to: landform, rel: controls}
  - {to: pattern-accumulation, rel: see also}
sources:
  - work: david-whatley-virtual-botany
    page: 1.1, Scene Management
    quote: "With guided deterministic random-number generation, we have an algorithm that can \"plant\" all of the elements of nature in a reasonable manner while achieving the same visual results each time we revisit the same spot on the map."
  - work: david-whatley-virtual-botany
    page: 1.1.2, Planting Strategy
    quote: "Generally, we would like to pick random spots, at some desired density, and then see if the corresponding points on the ground are acceptable for what we are planting."
  - work: randima-fernando-gpu-gems
    url: https://developer.nvidia.com/gpugems/gpugems2/part-i-geometric-complexity/chapter-1-toward-photorealism-virtual-botany
    page: 1.1.2, Planting Strategy
    quote: "A better approach is to collect all of the polygons that intersect the cell, discard all polygons inappropriate for planting, and then scan-convert them to find suitable spots for planting."
variants:
  - label: Placement method
    items:
      - id: placement-hand-painted-density
        name: Hand-painted density
        plain: "An artist paints where a layer is present and how strongly it covers the ground."
        why: "The method is direct authoring of a density field. The visible biome or colour is only the content of that field."
        sources:
          - work: unity-terrain-grass-details
            page: Paint Details
            quote: "Initially, a Terrain has no grass or details available. In the Inspector, click the Edit Details button to display a menu with the Add Detail Mesh and Add Grass Texture options. Click either option to bring up a window that lets you choose Assets to add to the Terrain for painting."
          - work: unity-terrain-grass-details
            page: Add Detail Mesh
            quote: "The Detail Density value controls the detail’s density relative to its size."
      - id: placement-procedural-rules
        name: Procedural rules
        plain: "A generator tests terrain data and masks, then places instances that pass its rules."
        why: "The method is a rule-driven test. A random-looking result is not proof that placement is procedural."
        sources:
          - work: david-whatley-virtual-botany
            page: 1.1.2, Planting Strategy
            quote: "Each time we hit a polygon, we check to see if it is suitable (Can grass be planted here? Is the slope too severe?). If we succeed, then we have a planted point."
      - id: placement-poisson-blue-noise
        name: Poisson-disk or blue-noise distribution
        plain: "Samples remain separated while retaining an irregular, evenly spread pattern."
        why: "The method controls neighbour spacing. A field can be blue-noise even when its plants share one material."
        sources:
          - work: robert-bridson-fast-poisson-disk-sampling
            page: 1, Introduction
            quote: "Blue noise sample patterns—for example produced by Poisson disk distributions, where all samples are at least distance r apart for some user-supplied density parameter r—are generally considered ideal for many applications in rendering"
      - id: placement-clustered-clumped
        name: Clustered or clumped
        plain: "Instances gather in groups, such as a tree line, with empty or lightly covered space between groups; a procedural tool can author that grouping."
        why: "The method is the spatial grouping rule. A single designed grass clump is an asset and does not by itself make the population clustered."
        sources:
          - work: robert-yang-the-level-design-book
            page: Environment Art
            url: https://book.leveldesignbook.com/process/env-art
            quote: "To make a forest, place one tree, then duplicate, shrink, rotate, and slightly offset"
          - work: jaap-van-muijden-horizon-procedural-placement
            page: GPU-Based Procedural Placement in Horizon Zero Dawn
            quote: "He demonstrates the power of this procedural approach by showing how painting in a tree line and redirecting roads can be just as easy as moving mountains and changing a desert into a tropical swamp."
---
