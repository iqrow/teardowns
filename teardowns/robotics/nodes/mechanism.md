---
term: Mechanism
aka: [the body, arm and base, kinematic chain, flexible arm, tentacle arm, trunk arm]
kind: part
plain: A mechanism is a connected set of links and joints. In most robots the links are rigid; a continuum arm bends along a flexible backbone instead. Its geometry limits reach, dexterity, payload and stiffness before software begins.
does: It defines the robot's possible configurations and motions.
ask: Can the mechanism reach every required pose while carrying the load?
cues:
  - Connected links and joints
  - Rigid links or a flexible backbone
  - Reach, dexterity, payload and stiffness set by geometry
children: [links-and-joints, degrees-of-freedom, workspace, kinematics, end-effector, drive-base]
at: [0.36, 0.95, 0.05]
variants:
  - label: Body
    items:
      - id: body-rigid
        name: Rigid link chain
        plain: Rigid links joined by joints, each joint adding a known motion. Most arms, from industrial robots to hobby servo arms, are built this way.
        sources:
          - work: kevin-m-lynch-and-frank-c-park-modern-robotics
            url: https://hades.mech.northwestern.edu/images/7/7f/MR.pdf
            page: Ch. 2 §§2.1–2.2
            quote: "Basically, a mechanism is constructed by connecting rigid bodies, called links, together by means of joints, so that relative motion between adjacent links becomes possible."
            flag: author preprint
      - id: body-continuum
        name: Continuum arm (snake arm)
        plain: A continuum arm bends along its whole length, like a trunk or a tentacle. In a tendon-driven continuum robot (TDCR), tendons run through discs on a flexible backbone; pulling one tendon while releasing the opposite one bends the segment. The simple constant-curvature model treats each segment as one arc and ignores the backbone's elasticity, loads and gravity.
        sources:
          - work: jessica-burgner-kahrs-constant-curvature-model-of
            page: Planar Bending Segment
            quote: "Pulling on one tendon requires releasing the other tendon in order to achieve bending."
          - work: jessica-burgner-kahrs-constant-curvature-model-of
            page: Remarks
            quote: "The kinematic formulation cannot account for the elastic properties of the backbone. It cannot account for any external forces or moments or gravity"
          - work: wikipedia-snake-arm-robot
            page: Definition
            quote: "Snake-arm robots are also described as continuum robots and elephant's trunk robots"
sources:
  - work: kevin-m-lynch-and-frank-c-park-modern-robotics
    url: https://hades.mech.northwestern.edu/images/7/7f/MR.pdf
    page: Ch. 2 §§2.1–2.5; Ch. 4
    quote: "Basically, a mechanism is constructed by connecting rigid bodies, called links, together by means of joints, so that relative motion between adjacent links becomes possible."
    flag: author preprint
---
