---
term: Demonstrations
aka: [teleoperation data, training data]
kind: process
plain: Demonstrations record a human teleoperator's observations and actions while the robot performs a task.
does: Supplies example trajectories for imitation learning.
ask: How many demonstrations are there, and how much do they vary in objects, poses, and recovery behavior?
cues:
  - Human teleoperator and robot
  - Recorded observations and actions
  - Example trajectories across objects and poses
range: ACT reports successful real-robot tasks from a low-cost setup; the needed amount is task-dependent.
at: [-0.4486, 0, 0.02]
sources:
  - work: tony-z-zhao-et-al-learning-fine-grained-bimanual
    page: Abstract
    quote: "We present a low-cost system that performs end-to-end imitation learning directly from real demonstrations, collected with a custom teleoperation interface."
    flag: arXiv preprint
deeper: The next level would hold teleoperation interfaces, observation and action schemas, episode filtering, coverage, and train/test splits.
---
