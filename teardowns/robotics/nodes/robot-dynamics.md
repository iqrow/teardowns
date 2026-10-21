---
term: Robot dynamics
aka: [equations of motion, M(q)q̈ + C + g = τ]
kind: concept
plain: Robot dynamics describe how joint forces and torques produce acceleration from link mass, inertia, Coriolis effects, gravity and friction.
does: They let a controller predict required torque and add feedforward such as gravity compensation.
ask: Are the masses, inertias and friction parameters identified, or only guessed?
range: For an open chain, Modern Robotics writes the equations as M(q)q̈ + h(q,q̇) = τ, with h collecting centripetal, Coriolis, gravity and friction terms.
at: [0.3594, 0, 0.02]
sources:
  - work: kevin-m-lynch-and-frank-c-park-modern-robotics
    url: https://hades.mech.northwestern.edu/images/7/7f/MR.pdf
    page: Ch. 8, Dynamics of Open Chains §§8.1 and 8.9
    quote: "forces that lump together centripetal, Coriolis, gravity, and friction terms"
    flag: author preprint
  - work: russ-tedrake-underactuated-robotics
    url: https://underactuated.mit.edu/multibody.html
    page: Ch. 23, Multi-Body Dynamics
    quote: "The equations of motions for our machines get complicated quickly."
    flag: open online notes
deeper: The next level would hold the mass matrix, Coriolis/gravity/friction terms, forward and inverse solvers, gearing and parameter identification.
---
