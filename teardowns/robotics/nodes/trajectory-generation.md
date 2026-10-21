---
term: Trajectory generation
aka: [time parameterisation, motion profile]
kind: process
plain: Trajectory generation adds time to a geometric path and produces positions, velocities, and accelerations within joint limits.
does: Turns a path into time-stamped setpoints that a controller can track.
ask: Are velocity, acceleration, and any jerk limits respected after retiming?
cues:
  - Time-stamped positions, velocities and accelerations
  - Joint-limit boundaries
  - Controller setpoints
range: MoveIt trajectory processing time-parameterizes paths using the robot's joint limits; jerk limits depend on the selected method and model.
at: [0.3182, 0.1209, 0.02]
sources:
  - work: moveit-trajectory-processing
    page: Time parameterization
    quote: "MoveIt includes several trajectory processing algorithms that can work on these paths and generate trajectories that are properly time-parameterized accounting for the maximum velocity and acceleration limits imposed on individual joints."
  - work: kevin-m-lynch-and-frank-c-park-modern-robotics
    page: Ch. 9
    quote: "During robot motion, the robot controller is provided with a steady stream of goal positions and velocities to track."
    flag: author preprint
deeper: The next level would hold time parameterization, velocity and acceleration limits, jerk limits, interpolation, and controller sampling.
---
