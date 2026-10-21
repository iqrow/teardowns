---
term: Robot description (URDF)
aka: [robot model file]
kind: part
plain: A robot description names links and joints and gives their visual, collision and inertial properties; URDF also carries joint dynamics and limits where defined.
does: It supplies a shared model for kinematics, collision checking, visualization and simulation.
ask: Do the masses, inertias, frames, limits and collision shapes match the real robot?
at: [-0.5091, -0.0859, 0.02]
sources:
  - work: kevin-m-lynch-and-frank-c-park-modern-robotics
    url: https://hades.mech.northwestern.edu/images/7/7f/MR.pdf
    page: Ch. 4 §4.2, URDF file format
    quote: "The Universal Robot Description Format (URDF) is an XML (eXtensible Markup Language) file format used by the Robot Operating System (ROS) to describe the kinematics, inertial properties, and link geometry of robots."
    flag: author preprint
  - work: russ-tedrake-robotic-manipulation
    url: https://manipulation.mit.edu/robot.html
    page: Ch. 2, Robot description files (URDF/SDF)
    quote: "Drake currently loads Universal Robot Description Format (URDF), Simulation Description Format (SDF), and has limited support for the MuJoCo format (MJCF)."
    flag: open online notes
deeper: The next level would hold link geometry, collision meshes, inertial tensors, joint limits and dynamics, frames and model-validation checks.
---
