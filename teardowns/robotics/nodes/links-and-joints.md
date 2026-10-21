---
term: Links and joints
aka: [arm segments, hinges]
kind: part
plain: Links are rigid bodies. A joint constrains the relative motion between neighbouring links; a serial chain is one path of links and joints from base to tool.
does: Each joint contributes a known number of independent motions.
ask: Which joint type is needed, and where are its axes?
cues:
  - Rigid bodies joined by constrained joints
  - Hinges or sliders between neighbouring links
  - One serial path from base to tool
at: [0.36, 0.95, 0.05]
variants:
  - label: Joint
    items:
      - id: joint-revolute
        name: Revolute (R)
        plain: "A revolute joint is a hinge: one angle describes rotation about one axis."
        sources:
          - work: kevin-m-lynch-and-frank-c-park-modern-robotics
            url: https://modernrobotics.northwestern.edu/nu-gm-book-resource/2-2-degrees-of-freedom-of-a-robot/
            page: "§2.2 Degrees of Freedom of a Robot: Revolute joint"
            quote: "The most common type of joint is the revolute joint. It places 5 constraints on the motion of the second spatial rigid body relative to the first, and therefore the second body has only one degree of freedom relative to the first body, given by the angle of the revolute joint."
            flag: book resource page
      - id: joint-prismatic
        name: Prismatic (P)
        plain: "A prismatic joint is a slider: one displacement describes translation along one axis."
        sources:
          - work: kevin-m-lynch-and-frank-c-park-modern-robotics
            url: https://modernrobotics.northwestern.edu/nu-gm-book-resource/2-2-degrees-of-freedom-of-a-robot/
            page: "§2.2 Degrees of Freedom of a Robot: Prismatic joint"
            quote: "Another common joint with one degree of freedom is the prismatic joint, also called a linear joint."
            flag: book resource page
      - id: joint-spherical
        name: Spherical (S)
        plain: A spherical joint is a ball-and-socket joint with three rotational DoF; robot wrists often build it from three revolute joints.
        sources:
          - work: kevin-m-lynch-and-frank-c-park-modern-robotics
            url: https://modernrobotics.northwestern.edu/nu-gm-book-resource/2-2-degrees-of-freedom-of-a-robot/
            page: "§2.2 Degrees of Freedom of a Robot: Spherical joint"
            quote: "The spherical joint, also called a ball-and-socket joint, has three degrees of freedom."
            flag: book resource page
sources:
  - work: kevin-m-lynch-and-frank-c-park-modern-robotics
    url: https://hades.mech.northwestern.edu/images/7/7f/MR.pdf
    page: Ch. 2 §§2.1–2.2
    quote: "Basically, a mechanism is constructed by connecting rigid bodies, called links, together by means of joints, so that relative motion between adjacent links becomes possible."
    flag: author preprint
deeper: "Next level: link dimensions, joint axes, limits, friction, compliance and collision shapes."
---
