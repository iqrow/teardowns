---
term: Grasp quality
aka: [force closure]
kind: measure
plain: Grasp quality measures how well contacts resist external forces and torques. Force closure means the contact set can resist an arbitrary object wrench under the contact model.
does: It lets a grasp planner rank candidate contacts before execution.
ask: Is this grasp in force closure, and how much margin remains?
at: [-0.09, 0.16, 0.08]
sources:
  - work: kevin-m-lynch-and-frank-c-park-modern-robotics
    url: https://hades.mech.northwestern.edu/images/7/7f/MR.pdf
    page: Ch. 12 §§12.1.7 and 12.2.3
    quote: "We say the contacts result in force closure if the composite wrench cone contains the entire wrench space"
    flag: author preprint
  - work: richard-m-murray-zexiang-li-and-s-shankar-sastry
    url: http://www.cds.caltech.edu/~murray/mlswiki/images/mlswiki/0/02/Mls94-complete.pdf
    page: Ch. 5 §§2–3
    quote: "One is to assign a quality measure to a grasp and choose the grasp which maximizes this quality measure and is also force-closure."
    flag: electronic edition
deeper: "Next level: grasp maps, friction cones, wrench-space convex hulls, force-closure tests and quality metrics."
---
