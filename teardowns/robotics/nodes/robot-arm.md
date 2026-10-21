---
term: Robot arm (manipulator)
aka: [robot arms, robotic arm, manipulator arm, articulated arm, snake-like arm]
kind: part
plain: A robot arm positions a tool or hand through a moving structure. It can bend at discrete joints, along a continuous backbone, or through a hybrid of both.
does: Moves the end effector within its workspace, the set of end-effector configurations it can reach regardless of a particular task.
ask: Does the task need a few elbow-like joints, a many-jointed snake, or a continuously bending arm?
trouble: A ribbed silhouette alone does not identify the mechanism inside. Choose the movement and load requirements before copying the outer shape.
children: [arm-architecture, tendon-drive, arm-shell, arm-prototyping]
at: [0.36, 0.95, 0.05]
links:
  - {to: end-effector, rel: see also}
  - {to: workspace, rel: see also}
  - {to: degrees-of-freedom, rel: see also}
  - {to: kinematics, rel: see also}
  - {to: actuation, rel: see also}
  - {to: safety, rel: see also}
sources:
  - work: morphology-cr-intro
    page: Introduction; Definition
    quote: "The boundary that separates continuum robots from other snake-like or hyper-redundant manipulators is sometimes obscured by manipulator designs that use continuously bending elastic elements along with conventional discrete joints in the same structure."
  - work: arm-task-workspace
    page: Video transcript
    quote: "The workspace is a specification of the configurations that the end-effector of the robot can reach, and has nothing to do with a particular task."
---
