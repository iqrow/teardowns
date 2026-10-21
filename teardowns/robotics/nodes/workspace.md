---
term: Workspace and payload
aka: [reach, how much it can lift]
kind: measure
plain: Workspace is the set of tool poses the mechanism can reach. Payload is the load it can carry at a specified pose and speed.
does: It decides whether the task fits the robot's geometry and load envelope.
ask: Are all target poses reachable and dexterous with the required payload?
cues:
  - Tool poses inside the reachable set
  - Payload at a specified pose and speed
  - Position-reachable but orientation-infeasible targets
  - Load beyond the usable envelope
range: Universal Robots lists the UR10e at 1,300 mm reach and 10 kg or 12.5 kg maximum payload. The exact usable payload depends on pose, speed and tool configuration.
trouble: A target can be position-reachable but orientation-infeasible, outside the dexterous workspace, or too heavy at that pose.
at: [0.64, 0.75, 0.05]
sources:
  - work: kevin-m-lynch-and-frank-c-park-modern-robotics
    url: https://hades.mech.northwestern.edu/images/7/7f/MR.pdf
    page: Ch. 2 §2.5
    quote: "The workspace is defined to be the subset of the task space that the end-effector frame can reach."
    flag: author preprint
  - work: universal-robots-technical-specifications-ur10e
    url: https://www.universal-robots.com/media/1807466/ur10e_e-series_datasheets_web.pdf
    page: Technical specification
    quote: "Our most versatile robot, the UR10e delivers an impressive payload of 12.5 kg and 1300 mm reach, making it ideal for a wide range of applications."
  - work: mark-w-spong-seth-hutchinson-and-m-vidyasagar
    url: https://catalogimages.wiley.com/images/db/pdf/9781119523994.excerpt.pdf
    page: Ch. 1 §1.1.4
    quote: "The reachable workspace is the entire set of points reachable by the manipulator, whereas the dexterous workspace consists of those points that the manipulator can reach with an arbitrary orientation of the end effector."
    flag: publisher sample chapter
deeper: "Next level: reachable versus dexterous workspace, payload curves, joint limits and collision margins."
---
