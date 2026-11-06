---
term: Navigation graph
aka: [map representation, navigation mesh, waypoint graph]
kind: part
plain: "The locations and connections that pathfinding is allowed to search."
does: "Compresses the world into a representation with enough detail for useful routes and few enough nodes for the available budget."
ask: "Which places are nodes, which connections are edges, and what detail is lost by this representation?"
cues: ["Grid cells, waypoint dots, polygon borders or coarse regions", "Edges that stop at doors, bridges or corners", "A debug view showing the graph separate from render geometry"]
trouble: "The graph is too dense to search, too coarse to express a useful route, or disconnected at a real crossing."
at: [-0.62, 1.1, 0.08]
variants:
  - label: Representation
    items:
      - id: nav-grid
        name: Grid
        plain: "A regular array of walkable cells connected to their neighbours."
        why: "It counts as a grid when the representation divides space into uniform tiles, even if the rendered world is not tiled."
        sources:
          - work: patel-map-representations
            page: "Grids"
            quote: "A grid map uses a uniform subdivision of the world into small regular shapes sometimes called \"tiles\"."
      - id: nav-waypoints
        name: Waypoints
        plain: "A sparse graph of meaningful points such as corners, doors, intersections or cover positions."
        why: "It counts as waypoints when authored or computed points carry the route graph instead of every walkable cell."
        sources:
          - work: patel-map-representations
            page: "Polygonal maps"
            quote: "we choose those corners (red circles) as the key \"navigation points\" points to tell A* about"
      - id: nav-mesh
        name: Navigation mesh
        plain: "A graph over connected polygons that represent walkable space."
        why: "It counts as a navigation mesh when walkable regions, rather than obstacles or individual tiles, form the primary representation."
        sources:
          - work: patel-map-representations
            page: "Navigation Meshes"
            quote: "we can represent the walkable areas with non-overlapping polygons, also called a navigation mesh."
      - id: nav-hierarchical
        name: Hierarchical graph
        plain: "Several graph resolutions, from local detail to larger regions, searched as a route and then refined."
        why: "It counts as hierarchical when a coarse route limits the search before finer routes fill in local movement."
        sources:
          - work: patel-map-representations
            page: "Hierarchical"
            quote: "A hierarchical map has many levels in its representation."
sources:
  - work: patel-map-representations
    page: "Map representations"
    quote: "The map representation can make a huge difference in the performance and path quality."
  - work: epic-unreal-navigation-system
    page: "Navigation System"
    quote: "The system generates a Navigation Mesh from the collision geometry in the Level and divides the mesh into tiles. These tiles are then divided into polygons to form a graph that is used by Agents when navigating to their destination."
---
