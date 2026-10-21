---
term: Interaction control
aka: [compliance, force control]
kind: process
plain: Interaction control shapes the relation between robot motion and contact force when the robot touches an object or environment.
does: It supports contact tasks such as insertion and wiping and lets the robot yield when contact is expected.
ask: Should the robot behave stiff or compliant in each direction?
cues:
  - Robot touching an object or environment
  - Insertion or wiping contact
  - Stiff or compliant motion
  - Robot yielding on expected contact
children: [stiffness]
at: [0.625, 0, 0.02]
variants:
  - label: Mode
    items:
      - id: ic-position
        name: Position control
        plain: Position control tracks a motion target; contact force is a consequence unless another loop limits it.
        sources:
          - work: kevin-m-lynch-and-frank-c-park-modern-robotics
            url: https://hades.mech.northwestern.edu/images/7/7f/MR.pdf
            page: Ch. 1 Preview
            quote: "If the robot imposes a motion then the environment determines the force, and vice versa."
            flag: author preprint
      - id: ic-impedance
        name: Impedance control
        plain: Impedance control is a robot control objective involving a chosen motion–force relationship.
        sources:
          - work: kevin-m-lynch-and-frank-c-park-modern-robotics
            url: https://modernrobotics.northwestern.edu/nu-gm-book-resource/11-1-control-system-overview/
            page: "§11.1 Control System Overview"
            quote: "This video introduces different robot control objectives (motion control, force control, hybrid motion-force control, and impedance control)."
            flag: book resource page
      - id: ic-admittance
        name: Admittance control
        plain: Admittance control is a force-to-motion control mode.
        sources:
          - work: kevin-m-lynch-and-frank-c-park-modern-robotics
            url: https://hades.mech.northwestern.edu/images/7/7f/MR.pdf
            page: Ch. 11 §11.7.2
            quote: "In an admittance-control algorithm the force f ext applied by the user is sensed by the wrist load cell, and the robot responds with an end-effector acceleration satisfying Equation (11.64)."
            flag: author preprint
      - id: ic-force
        name: Direct force control
        plain: Direct force control regulates contact force toward a setpoint along selected task directions.
        sources:
          - work: kevin-m-lynch-and-frank-c-park-modern-robotics
            url: https://modernrobotics.northwestern.edu/nu-gm-book-resource/11-1-control-system-overview/
            page: "§11.1 Control System Overview: Force-control objective"
            quote: "This video introduces different robot control objectives (motion control, force control, hybrid motion-force control, and impedance control)."
            flag: book resource page
sources:
  - work: kevin-m-lynch-and-frank-c-park-modern-robotics
    url: https://hades.mech.northwestern.edu/images/7/7f/MR.pdf
    page: Ch. 11 §§11.5–11.7, force, hybrid and impedance control
    quote: "A force-control goal makes sense when the end-effector is in contact with something, but not when it is moving in free space."
    flag: author preprint
  - work: bruno-siciliano-and-oussama-khatib-eds-springer
    url: https://link.springer.com/chapter/10.1007/978-3-319-32552-1_9
    page: Ch. 9, Force Control
    quote: "Pure motion control turns out to be inadequate because the unavoidable modeling errors and uncertainties may cause a rise of the contact force."
---
