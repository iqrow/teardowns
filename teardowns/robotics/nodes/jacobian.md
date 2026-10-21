---
term: Jacobian and singularities
aka: [velocity map]
kind: concept
plain: The Jacobian maps joint velocities to tool twist and maps tool wrench to joint torque through its transpose.
does: It supports velocity control, numerical IK, force control and singularity analysis.
ask: How close is the current configuration to losing a task-space direction?
range: For a full-row-rank Jacobian, manipulability can be written w = sqrt(det(J J^T)); it falls to zero at a singularity.
trouble: At a singularity the Jacobian loses rank; some tool motions become unavailable and joint speeds can become very large near it.
at: [0.0636, 0, 0.02]
sources:
  - work: kevin-m-lynch-and-frank-c-park-modern-robotics
    url: https://hades.mech.northwestern.edu/images/7/7f/MR.pdf
    page: Ch. 5 §§5.1–5.5
    quote: "Kinematic singularities, which are configurations in which the end-effector frame loses the ability to move or rotate in one or more directions, correspond to those configurations at which the Jacobian matrix fails to have maximal rank."
    flag: author preprint
  - work: peter-corke-robotics-vision-and-control
    url: https://link.springer.com/chapter/10.1007/978-3-642-20144-8_8
    page: Ch. 8, Velocity Relationships
    quote: "The joint velocity and the end-effector velocity are related by the manipulator Jacobian matrix which is a function of manipulator pose."
    flag: publisher chapter preview
deeper: "Next level: space and body Jacobians, wrench duality, rank tests, manipulability and damped inverse Jacobians."
---
