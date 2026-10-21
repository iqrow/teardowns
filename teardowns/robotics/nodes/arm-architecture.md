---
term: Arm architecture
aka: [serial articulated arm, snake arm, snake-like arm, tentacle arm, segmented arm, continuum arm, flexible arm]
kind: part
plain: "Arm architecture describes where an arm bends. Serial articulated arms have rigid links and distinct joints; hyper-redundant arms repeat many short links and joints; continuum arms bend along a continuous backbone. Soft robotics concerns compliant bodies and actuators, which can overlap with continuum construction."
does: Determines whether shape is described by joint angles or distributed bending, and which parts must carry the load.
ask: "Is each visible bend an actuated joint, a passive spacer or compliant section, or a continuum curve?"
range: "Catalogue: serial articulated; hyper-redundant/snake-like; continuum; soft-continuum overlap. Count independently actuated coordinates rather than counting ribs or cosmetic rings."
trouble: "Calling a ribbed exterior continuum, or calling a long segmented arm soft, can hide the load path and the model you actually need."
at: [0, 0.33, 0]
links:
  - {to: links-and-joints, rel: see also}
  - {to: degrees-of-freedom, rel: see also}
  - {to: tendon-drive, rel: see also}
variants:
  - label: Architecture
    items:
      - id: architecture-serial
        name: Serial articulated
        plain: A finite chain of rigid links and identifiable revolute or prismatic joints; this is the baseline arm topology taught in conventional manipulator kinematics.
        sources:
          - work: morphology-cr-intro
            page: "Continuum Robotics 101: serial and rigid-link robots"
            quote: "Those robots are inspired by the human anatomy as they resemble a similar structure in terms of rigid-links and joints."
      - id: architecture-hyperredundant
        name: Hyper-redundant / snake-like
        plain: A serial arm with many short links and joints can approximate a smooth snake or tentacle silhouette; it remains a finite-joint mechanism rather than a strict continuum.
        sources:
          - work: morphology-cr-intro
            page: "Continuum Robotics 101: hyper-redundant robots"
            quote: "The more joints one adds and the shorter the link length in between these joints becomes, the robot structure becomes hyperredundant"
          - work: morphology-walker-review
            page: "p. 2, Design Principles"
            quote: "While not truly continuum, with enough modules, the form resembles a continuous backbone."
      - id: architecture-continuum
        name: Continuum manipulator
        plain: An actuated flexible structure is represented as a curve with continuously varying tangent; the continuum label describes the shape model, not an infinite set of motors.
        sources:
          - work: morphology-cr-intro
            page: "Continuum Robotics 101: formal definition"
            quote: "A continuum robot is an actuatable structure, whose constitutive material forms curves with continuous tangent vectors."
          - work: morphology-walker-review
            page: "p. 2, Design Principles"
            quote: "The defining feature of a continuum robot is a continuously curving core structure, or backbone, whose shape can be actuated in some way."
          - work: morphology-tdcr-intro
            page: "Tendon-driven Continuum Robots: remarks"
            quote: "However, any increase of the number of segments requires an additional set of motors to actuate it, resulting in a bulky actuator system."
      - id: architecture-soft-overlap
        name: Soft robotics overlap
        plain: "Soft robotics concerns compliant or deformable bodies and actuators. It overlaps with continuum robotics when the body bends continuously; the labels describe different properties of the construction."
        sources:
          - work: morphology-adafruit-soft-tentacle
            page: "A little background"
            quote: "Soft robots can potentially do a lot of jobs a hard robot made of steel and servos just can't do. Something composed of soft, flexible structures and actuators might be able to burrow through the dirt like an earthworm, conform to complex objects like a human hand"
          - work: morphology-cr-intro
            page: "Continuum Robotics 101: hybrid boundary"
            quote: "While these robots may not technically be classified as continuum robots according to the definitions, they are referred to as pseudo-continuum robots or hybrid serial/continuum robots"
sources:
  - work: morphology-cr-intro
    page: "Continuum Robotics 101: hyper-redundant and continuum definitions"
    quote: "To overcome these limitation, there has been a paradigm shift away from rigid-link, discrete structures to continuously bending ones. These are commonly referred to as continuum robots."
  - work: morphology-cr-intro
    page: "Continuum Robotics 101: boundary cases"
    quote: "The boundary that separates continuum robots from other snake-like or hyper-redundant manipulators is sometimes obscured by manipulator designs that use continuously bending elastic elements along with conventional discrete joints in the same structure."
  - work: morphology-walker-review
    page: "p. 2, Design Principles"
    quote: "These are sometimes termed “continuum-style” robots."
deeper: "Next level: choose link lengths and joint axes, or backbone material, section count, tendon termination points, passive spacers, curvature model and collision envelope."
---
