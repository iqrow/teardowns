---
term: Arm prototyping
aka: [prototype arm, bench arm, proof-of-motion build]
kind: process
plain: Arm prototyping turns a desired gesture, payload and reach into a sequence of mockups and guarded hardware tests. Start with an unpowered geometry model; add power only after checking masses, lever arms, stops, wiring and hazards.
does: It replaces guesses about reach, downstream link mass, torque and power with a measured build that can be changed before a full arm is assembled.
ask: What is the smallest guarded experiment that can prove the gesture, payload, reach and joint load?
range: >-
  Route: write the gesture and tool/payload requirement; place shoulder, elbow and wrist points in a scale drawing; weigh every proposed downstream part; make a freely movable cardboard, dowel or printed mockup with no power; build one joint with its chosen bracket, bearing, horn and actuator; restrain travel and measure force, voltage, current, temperature and supply sag at known poses; then add one link at a time until the complete small arm repeats the requirement. Keep pinch points guarded, provide a catch or support for an arm that could fall or backdrive on power removal, and keep children and bystanders outside the powered-test envelope.
trouble: The mockup cannot reach the gesture, the shoulder sags when the elbow or payload is added, the joint binds or twists, the actuator overheats or browns out, the arm falls when torque is removed, cables enter a pinch point, or the measured envelope differs from the drawing.
at: [-0.45, 0.05, 0.22]
children: [joint-torque-budget, servo-joint, arm-bring-up]
links:
  - {to: workspace, rel: see also}
  - {to: actuation, rel: see also}
  - {to: robot-dynamics, rel: see also}
  - {to: safety, rel: see also}
  - {to: risk-assessment, rel: see also}
  - {to: emergency-stop, rel: see also}
  - {to: field-testing, rel: see also}
variants:
  - label: Build route
    items:
      - id: route-bench-joint
        name: Bench joint first
        plain: "Make a cardboard or dowel geometry mockup, then test one conventional hobby servo in a bracketed, bearing-supported joint before building the rest of the arm."
        sources:
          - work: arm-build-pololu-servo-control
            page: Pulse width and calibration
            quote: "There is no standard correspondence between the pulse width and the servo position."
          - work: arm-build-shutter-arm
            page: Steps 4–5, bearing mounts and pan plate
            quote: "Attach both Bearing Mounts to the horn and idler of Servo 2 using 2 Servo Washers and 16 M2.5 x 5mm screws"
      - id: route-so100
        name: SO-100 / SO-101-style open build
        plain: "An open SO-100 / SO-101-style arm route documented by TheRobotStudio and Hugging Face, with parts, 3D-printing and bus-motor configuration instructions. Treat its files and motor versions as version-specific; it is not a child-safety endorsement."
        sources:
          - work: arm-build-so-arm100
            page: Opening and sourcing parts
            quote: "The SO-100 arm is the original robot arm designed by the [RobotStudio](https://www.therobotstudio.com) in collaboration with [Hugging Face](https://huggingface.co/lerobot)."
          - work: arm-build-lerobot-so100
            page: Source the parts
            quote: "It contains the bill of materials, with a link to source the parts, as well as the instructions to 3D print the parts."
          - work: arm-build-lerobot-so100
            page: Set the motors IDs and baudrates
            quote: "Each motor is identified by a unique id on the bus."
      - id: route-openmanipulator-x
        name: ROBOTIS OpenMANIPULATOR-X route
        plain: "A documented OpenMANIPULATOR-X reference route: the official instructions distinguish the official package from a home-made one and require each DYNAMIXEL to be configured before operation. Use it as a reference build, not a universal payload or safety guarantee."
        sources:
          - work: arm-build-openmanipulator-basic
            page: Opening and configuration
            quote: "Please note that this instruction is written for the **ROBOTIS official OpenMANIPULATOR-X package**. If you are operating a home made OpenMANIPULATOR-X, make sure to configure each DYNAMIXEL as below before operating."
sources:
  - work: arm-build-springer-mechanisms-actuation
    url: https://link.springer.com/rwe/10.1007/978-3-540-30301-5_4
    page: Chapter 4, pp. 67–86, abstract
    quote: "The tasks a robot is to perform and the associated precision of its movement determine detailed features such as mechanical structure, transmission, and actuator selection."
  - work: arm-build-springer-robot-arm
    url: https://link.springer.com/chapter/10.1007/978-1-4302-6838-3_11
    page: Chapter 11, pp. 509–577, introduction
    quote: "There are several factors you must consider when constructing a robot arm, including the maximum load weight, the stall torques of each one of the servos, how much weight each servo must support related to its position in the arm, and the weight each frame that constitutes the arm."
  - work: arm-build-robotis-xl430
    page: Safety warnings
    quote: "Never place fingers, arms, toes, and other body parts near product during operation."
unverified: The staged mockup-to-joint-to-arm recipe, exact guards, current limits and test durations are conservative procedural advice rather than a certification or universal safe-force rule; adapt them through the risk assessment and each component manual.
---
