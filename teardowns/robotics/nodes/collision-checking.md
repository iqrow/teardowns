---
term: Collision checking
aka: [collision detection]
kind: process
plain: Collision checking tests whether robot geometry intersects obstacles or itself at a configuration or along a path segment.
does: Rejects invalid states and edges inside a motion planner.
ask: What padding, collision meshes, and continuous checks are needed for this speed?
range: Simplified collision geometry and safety padding trade computation time against conservatism.
at: [-0.0636, 0.0318, 0.02]
links:
  - {to: robot-description, rel: made from}
sources:
  - work: moveit-developer-concepts
    page: Motion plan request
    quote: "Collisions are checked for by default (including self-collisions and attached objects)."
  - work: ompl-planner-and-state-validation-documentation
    url: https://ompl.kavrakilab.org/stateValidation.html
    page: State validity checking
    quote: "If continuous collision checking is available, it is recommended that a different implementation of ompl::base::MotionValidator is provided, one that does not rely on discretizing the motion at a specific resolution."
deeper: The next level would hold broad-phase culling, narrow-phase geometry tests, self-collision pairs, padding, and continuous collision checks.
---
