---
term: Group movement
aka: [formations, flocking, crowd movement, flow fields]
kind: process
plain: "Movement rules that keep several units coordinated while preserving spacing, roles, routes or formation shape."
does: "Makes a group arrive as a useful group instead of turning many individually valid paths into a jam."
ask: "What must the group preserve, and which local rule resolves a conflict between cohesion, spacing and progress?"
cues: ["Units keeping lanes or relative offsets", "A formation that bends around an obstacle", "Separation, cohesion or alignment vectors in a debug view"]
trouble: "The group bunches up, oscillates at a doorway, loses its leader, or spreads so far that it no longer acts together."
at: [0.0, 1.1, 0.08]
sources:
  - work: reynolds-steering
    page: "Steering Behaviors"
    quote: "The next three steering behaviors: separation, cohesion, and alignment, relate to groups of characters."
  - work: reynolds-steering
    page: "Steering Behaviors"
    quote: "Flocking behavior: in addition to other applications, the separation, cohesion and alignment behaviors can be combined to produce the boids model of flocks, herds and schools"
---
