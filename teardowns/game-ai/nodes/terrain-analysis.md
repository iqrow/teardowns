---
term: Terrain analysis
aka: [spatial analysis, influence map, tactical map]
kind: process
plain: "A precomputed reading of the map that marks useful meaning such as danger, reachability, cover, fronts or likely positions."
does: "Turns raw geometry and actor locations into shared spatial evidence that decisions can query cheaply."
ask: "What does each region mean to this decision, and how often is that meaning rebuilt?"
cues: ["A heatmap over the terrain", "Chokepoints, cover or high-ground markers", "A query that selects the safest or most valuable nearby cell"]
range: "Static annotations can be built once, while influence and threat maps are refreshed as agents and hazards move."
trouble: "The map is detailed but stale, expensive to rebuild, or rewards a location that is safe only in geometry and not in the current fight."
children: []
at: [-0.15, 0.28, 0.08]
sources:
  - work: mark-modular-influence-maps
    page: "Section 30.2"
    quote: "The influence map doesn’t actually provide instruction—it only provides information that is used by the decision-making structures of the agents."
  - work: mark-modular-influence-maps
    page: "Section 30.2"
    quote: "The basic form of the influence map is to divide the space into sections—most often a grid—and assign values to the cells."
---
