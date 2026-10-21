---
term: Robot
aka: [robot at work, mobile manipulator]
kind: product
plain: "A robot is a machine that senses, computes and acts on the physical world through actuators. Its body may use rigid links and joints, continuously bending structures, or both. This map uses a mobile manipulator: a wheeled base carrying an arm, a gripper and sensors."
ask: What task must it do, where, and with what safety and reliability margin?
cues:
  - Rigid bodies linked by actuated joints
  - Wheeled base carrying an arm and gripper
  - Sensors on the body
  - Motion in the physical world
children: [mechanism, actuation, sensing, electronics, perception, state-estimation, planning, control, software-stack, safety]
variants:
  - label: Form
    items:
      - id: form-mobile-manipulator
        name: Mobile manipulator
        plain: Stretch 3 combines a differential-drive base, a 7-DoF manipulator, a gripper, cameras, lidar and an onboard computer.
        why: A wheeled base carrying an arm and gripper defines it; Stretch 3 is one example.
        sources:
          - work: hello-robot-stretch-3-mobile-manipulator
            page: Product Specification
            quote: "Manipulator Degrees of Freedom (DOF) 7 total"
      - id: form-industrial-arm
        name: Industrial arm
        plain: The Universal Robots UR10e is a fixed six-joint arm with 1.3 m reach and a 10 or 12.5 kg maximum payload.
        why: A fixed arm with six joints defines it; the UR10e is one example.
        sources:
          - work: universal-robots-technical-specifications-ur10e
            page: Technical Specifications UR10e
            quote: "Maximum payload 10 kg / 22 lb or 12.5 kg / 27.5 lb"
      - id: form-quadruped
        name: Quadruped
        plain: Boston Dynamics Spot is a mobile robot for dynamic sensing and industrial inspection.
        sources:
          - work: boston-dynamics-spot
            page: Payload Mounting and Locomotion
            quote: "Spot Our agile mobile robot for dynamic sensing and industrial inspection"
      - id: form-humanoid
        name: Humanoid
        plain: Boston Dynamics Atlas is an industrial humanoid with a 50 kg instantaneous weight capacity.
        sources:
          - work: boston-dynamics-atlas
            page: High Power; Dynamic; Human-Scale
            quote: "Weight Capacity (Instant) 50 kg (110 lbs)"
      - id: form-drone
        name: Drone (multirotor)
        plain: DJI Matrice 350 RTK is a multirotor aircraft; its stated maximum flight time is 55 minutes without payload in windless conditions.
        sources:
          - work: dji-matrice-350-rtk-specifications
            page: Aircraft specifications
            quote: "Max Flight Time 55 minutes Measured with Matrice 350 RTK flying at approximately 8 m/s without payloads in a windless environment"
      - id: form-robot-vacuum
        name: Robot vacuum
        plain: Roomba is iRobot's robotic vacuum line.
        sources:
          - work: irobot-roomba-robotic-vacuums
            page: iRobot Roomba Robotic Vacuums
            quote: "Shop for official iRobot&reg; Roomba robotic vacuum series"
sources:
  - work: kevin-m-lynch-and-frank-c-park-modern-robotics
    url: https://hades.mech.northwestern.edu/images/7/7f/MR.pdf
    page: Ch. 1 Preview
    quote: "At its most basic level a robot consists of rigid bodies connected by joints, with the joints driven by actuators."
    flag: author preprint
  - work: mark-w-spong-seth-hutchinson-and-m-vidyasagar
    url: https://catalogimages.wiley.com/images/db/pdf/9781119523994.excerpt.pdf
    page: Ch. 1 Introduction
    quote: "The figure on the right shows the mobile robot base with an attached manipulator arm."
    flag: publisher sample chapter
  - work: morphology-cr-intro
    page: Definition
    quote: "The boundary that separates continuum robots from other snake-like or hyper-redundant manipulators is sometimes obscured by manipulator designs that use continuously bending elastic elements along with conventional discrete joints in the same structure."
---
