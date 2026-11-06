---
term: Path cost
aka: [movement cost, traversal cost, danger cost]
kind: knob
plain: "The accumulated price assigned to a route, including distance, terrain, time, danger or other tactical preferences."
does: "Makes the shortest route mean the route the AI actually wants, not merely the route with the fewest graph steps."
ask: "What should this unit prefer, avoid or pay extra for along the route?"
cues: ["A heatmap of terrain costs", "A route that avoids danger despite being longer", "A cost breakdown beside the chosen path"]
range: "Distance-only costs, terrain and traversal costs, or combined costs that include danger and tactical preferences."
trouble: "A cheap route crosses an obvious hazard, a small weight dominates every choice, or costs change without invalidating the route."
at: [0.28, 0.86, 0.08]
sources:
  - work: patel-astar
    page: "Movement costs"
    quote: "In some pathfinding scenarios there are different costs for different types of movement."
  - work: patel-astar
    page: "Movement costs"
    quote: "Movement costs can also be used to avoid or prefer areas based on proximity to enemies or allies."
---
