---
term: "Influence map"
aka: [tactical heat map, threat grid, spatial influence]
kind: part
plain: "A spatial grid whose cells accumulate values such as strength, danger, reach or interest from agents and the environment."
does: "Lets many units share a coherent picture of safe ground, fronts, concentrations and threatened space without recomputing every pairwise relation."
ask: "What value should each cell carry, how should it spread, and which combination answers this tactical question?"
cues: ["A red and blue heat map overlays the battlefield", "Hot cells cluster around units or projected reach", "A query picks a high or low cell as a destination or target"]
range: "Maps may encode positive or negative influence, signed faction control, reach, threat or interest, at a chosen grid granularity."
trouble: "The grid is stale, too coarse for the action, or spreads influence through barriers that units cannot cross."
deeper: "Cells, propagation curves, templates, faction maps, working maps, normalisation and spatial queries."
sources:
  - work: mark-modular-influence-maps
    page: "Section 30.2, p. 3"
    quote: "The basic form of the influence map is to divide the space into sections—most often a grid—and assign values to the cells."
  - work: mark-modular-influence-maps
    page: "Section 30.2, p. 2"
    quote: "The influence map doesn’t actually provide instruction—it only provides information that is used by the decision-making structures of the agents."
at: [-0.48, 0.24, 0.03]
---
