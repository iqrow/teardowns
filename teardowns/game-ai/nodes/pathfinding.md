---
term: Pathfinding
aka: [A star, A*, route search, graph search]
kind: process
plain: "A graph search that chooses a sequence of connected locations from a start to a goal."
does: "Provides a route for movement while trading path quality, search time and map detail."
ask: "What graph is being searched, what counts as a good path, and when is the search allowed to stop?"
cues: ["An open frontier or explored-node overlay", "A route line made from graph nodes and edges", "A fallback or partial route when the search budget ends"]
trouble: "No route is found despite a connection, the route is optimal only for the wrong graph, or the search starves other AI work."
at: [-0.62, 0.86, 0.08]
sources:
  - work: patel-astar
    page: "Representing the map"
    quote: "Graph search algorithms let us find the shortest path on a map represented as a graph."
  - work: patel-astar
    page: "The A* algorithm"
    quote: "The A* algorithm uses both the actual distance from the start and the estimated distance to the goal."
---
