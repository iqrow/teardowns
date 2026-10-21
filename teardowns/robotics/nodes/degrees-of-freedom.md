---
term: Degrees of freedom
aka: [DoF, axes]
kind: measure
plain: Degrees of freedom (DoF) are the independent coordinates needed to describe a configuration.
does: DoF tells whether the robot can command the task variables and whether redundant motion is available.
ask: Does the task need six pose DoF, or is extra redundancy useful?
range: A free spatial rigid body has 6 DoF. Revolute and prismatic joints each have 1; a spherical joint has 3. A planar mobile base has x, y and heading, and Grübler's formula counts mechanism mobility when constraints are independent.
trouble: Too few DoF makes a pose impossible; extra DoF creates choices that still need limits, collision checks and a selection rule.
at: [0.17, 0.58, 0.05]
sources:
  - work: kevin-m-lynch-and-frank-c-park-modern-robotics
    url: https://hades.mech.northwestern.edu/images/7/7f/MR.pdf
    page: Ch. 2 §§2.1–2.3
    quote: "Degrees of freedom = (number of variables) − (number of independent equations)."
    flag: author preprint
  - work: kevin-m-lynch-and-frank-c-park-modern-robotics
    url: https://modernrobotics.northwestern.edu/nu-gm-book-resource/2-2-degrees-of-freedom-of-a-robot/
    page: "§2.2 Degrees of Freedom of a Robot: Joint types"
    quote: "The spherical joint, also called a ball-and-socket joint, has three degrees of freedom."
    flag: book resource page
deeper: "Next level: configuration space, independent constraints, redundancy and mobility formulas."
---
