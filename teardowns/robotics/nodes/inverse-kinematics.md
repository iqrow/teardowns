---
term: Inverse kinematics
aka: [IK]
kind: process
plain: Inverse kinematics finds joint coordinates that produce a desired tool pose.
does: It turns a grasp or placement pose into joint commands.
ask: Are there zero, one or many solutions, and which solution respects limits and avoids collisions?
trouble: Targets can be unreachable, solutions can switch between branches, or an iterative solver can stop in a poor local solution.
at: [0.4136, -0.1273, 0.02]
links:
  - {to: jacobian, rel: made from}
variants:
  - label: Solver
    items:
      - id: ik-analytic
        name: Analytic (closed form)
        plain: An analytic solver uses geometry-specific formulas and can enumerate all solutions for that robot family.
        sources:
          - work: kevin-m-lynch-and-frank-c-park-modern-robotics
            url: https://hades.mech.northwestern.edu/images/7/7f/MR.pdf
            page: Ch. 6 §6.1
            quote: "We first examine a popular class of six-dof open-chain structures whose inverse kinematics admits a closed-form analytic solution."
            flag: author preprint
      - id: ik-numerical
        name: Numerical (iterative)
        plain: A numerical solver iterates a velocity or Jacobian update from an initial guess; damping improves behavior near singularities.
        sources:
          - work: kevin-m-lynch-and-frank-c-park-modern-robotics
            url: https://hades.mech.northwestern.edu/images/7/7f/MR.pdf
            page: Ch. 6 §§6.2–6.3
            quote: "The result is an iterative numerical algorithm which, provided that an initial guess of the joint variables is sufficiently close to a true solution, converges quickly to that solution."
            flag: author preprint
sources:
  - work: kevin-m-lynch-and-frank-c-park-modern-robotics
    url: https://hades.mech.northwestern.edu/images/7/7f/MR.pdf
    page: Ch. 6 §§6.1–6.3
    quote: "The inverse kinematics problem is to determine the set of joint positions that achieves a desired end-effector configuration."
    flag: author preprint
deeper: "Next level: analytic subproblems, Newton iterations, damping, redundancy objectives and constraint handling."
---
