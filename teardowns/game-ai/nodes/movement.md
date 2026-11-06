---
term: Movement and pathfinding
aka: [locomotion control, navigation, getting there]
kind: part
plain: "The systems that turn a chosen destination or formation order into legal, readable motion through the world."
does: "Makes good decisions look competent by finding routes, respecting terrain and steering around agents and obstacles."
ask: "Can the unit reach the chosen place, and does its route still look intentional when the world changes?"
cues: ["A route line over walkable ground", "Units slowing, separating and turning around obstacles", "A group arriving without collapsing into one point"]
trouble: "Units get stuck, take absurd detours, collide, bunch up or arrive too late for the decision that sent them."
children: [pathfinding, navigation-graph, path-cost, steering, group-movement]
pattern: pattern-hierarchical-control
at: [-0.25, 0.7, 0.04]
sources:
  - work: reynolds-steering
    page: "Abstract and Introduction"
    quote: "Combinations of steering behaviors can be used to achieve higher level goals (For example: get from here to there while avoiding obstacles, follow this corridor, join that group of characters...)"
  - work: patel-map-representations
    page: "Map representations"
    quote: "The map representation can make a huge difference in the performance and path quality."
  - work: millington-ai-for-games
    page: "ch. 3, p. 42"
    url: "https://api.pageplace.de/preview/DT0400.9781351053297_A36789489/preview-9781351053297_A36789489.pdf"
    quote: "A movement algorithm is designed to use these properties to work out where the character should be next."
---
