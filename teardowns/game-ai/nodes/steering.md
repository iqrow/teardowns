---
term: Steering
aka: [steering behaviours, local movement, obstacle avoidance]
kind: process
plain: "Reactive movement forces that turn a route or goal into velocity while handling local obstacles and nearby agents."
does: "Bridges global route planning and locomotion with seek, arrive, separation, avoidance and other local behaviours."
ask: "What should the unit do this instant when its route, momentum and nearby bodies disagree?"
cues: ["A desired-velocity arrow beside the current-velocity arrow", "Units slowing as they approach a destination", "A local sidestep around an obstacle without replanning the whole route"]
trouble: "The unit overshoots, oscillates near a goal, collides with a nearby obstacle, or follows a route while ignoring its body."
at: [0.62, 0.62, 0.08]
sources:
  - work: reynolds-steering
    page: "Abstract"
    quote: "These \"steering behaviors\" are largely independent of the particulars of the character’s means of locomotion."
  - work: reynolds-steering
    page: "Steering Behaviors"
    quote: "Arrival behavior is identical to seek while the character is far from its target. But instead of moving through the target at full speed, this behavior causes the character to slow down as it approaches the target"
---
