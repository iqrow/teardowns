---
term: Forward kinematics
aka: [FK]
kind: process
plain: Forward kinematics computes the tool pose from the joint coordinates by composing one transform per joint.
does: It predicts where the tool is for sensing, visualization and control.
ask: Which frame and parameter convention defines each joint transform?
at: [0.4136, 0.0318, 0.02]
variants:
  - label: Convention
    items:
      - id: fk-dh
        name: Denavit–Hartenberg (DH)
        plain: "Denavit–Hartenberg assigns four parameters to each link-to-link transform: a, alpha, d and theta."
        sources:
          - work: kevin-m-lynch-and-frank-c-park-modern-robotics
            url: https://hades.mech.northwestern.edu/images/7/7f/MR.pdf
            page: Appendix C, Denavit–Hartenberg parameters
            quote: "One widely used representation for the forward kinematics of open chains relies on the Denavit–Hartenberg parameters."
            flag: author preprint
      - id: fk-poe
        name: Product of exponentials (PoE)
        plain: Product of exponentials uses one screw axis per joint and multiplies joint exponentials with a home configuration.
        sources:
          - work: kevin-m-lynch-and-frank-c-park-modern-robotics
            url: https://hades.mech.northwestern.edu/images/7/7f/MR.pdf
            page: Ch. 4 §4.1
            quote: "The forward kinematics of open chains can be expressed as the product of matrix exponentials."
            flag: author preprint
sources:
  - work: kevin-m-lynch-and-frank-c-park-modern-robotics
    url: https://hades.mech.northwestern.edu/images/7/7f/MR.pdf
    page: Ch. 4 §§4.1–4.3
    quote: "For an open chain, the position and orientation of the end-effector are uniquely determined from the joint positions. The forward kinematics problem is to find the position and orientation of the reference frame attached to the end-effector given the set of joint positions."
    flag: author preprint
deeper: "Next level: transform products, joint screw axes, DH parameters and numerical validation against measured poses."
---
