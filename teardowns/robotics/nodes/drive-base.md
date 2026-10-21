---
term: Drive base
aka: [wheels, mobile base, locomotion]
kind: part
plain: A drive base produces the robot's gross motion with wheels, legs or rotors.
does: It moves the arm and tool to the work area and determines which body motions are direct.
ask: Which body velocities can the base command without a manoeuvre?
cues:
  - Wheels, legs or rotors under the robot
  - Gross motion toward the work area
at: [0.34, 0.1, 0.04]
variants:
  - label: Drive
    items:
      - id: drive-differential
        name: Differential drive
        plain: Two driven wheels give forward motion and turning, but no instantaneous sideways motion; Stretch 3 uses this base type.
        why: A base with two driven wheels that gives forward motion and turning without instantaneous sideways motion defines it; Stretch 3 is one example.
        sources:
          - work: kevin-m-lynch-and-frank-c-park-modern-robotics
            url: https://hades.mech.northwestern.edu/images/7/7f/MR.pdf
            page: Ch. 13 §13.1
            quote: "Many mobile bases, however, such as cars and differential-drive robots, use more typical wheels, which do not slip sideways."
            flag: author preprint
          - work: hello-robot-stretch-3-mobile-manipulator
            url: https://docs-arch.hello-robot.com/0.3/hardware/hardware_guide_stretch_3/
            page: Base
            quote: "The base is a two wheel differential drive with a passive omniwheel for a caster."
      - id: drive-mecanum
        name: Mecanum / omni wheels
        plain: Mecanum or omni wheels use angled rollers to create planar motion in more directions than a conventional wheel.
        sources:
          - work: kevin-m-lynch-and-frank-c-park-modern-robotics
            url: https://hades.mech.northwestern.edu/images/7/7f/MR.pdf
            page: Ch. 13 §§13.1–13.2
            quote: "Mecanum wheels are similar, except that the spin axes of the circumferential rollers are not in the plane of the wheel."
            flag: author preprint
      - id: drive-ackermann
        name: Ackermann (car-like)
        plain: "Ackermann steering is car-like: steering geometry constrains the instantaneous turn and normally prevents turning in place."
        sources:
          - work: kevin-m-lynch-and-frank-c-park-modern-robotics
            url: https://hades.mech.northwestern.edu/images/7/7f/MR.pdf
            page: Ch. 13 §13.1
            quote: "To prevent slipping of the front wheels, they are steered using Ackermann steering."
            flag: author preprint
      - id: drive-legged
        name: Legs
        plain: Legged bases place feet and shift body balance to cross terrain that wheels may not traverse; Spot is a four-legged example.
        why: A base that places feet and shifts body balance across terrain wheels may not traverse defines it; Spot is one example.
        sources:
          - work: boston-dynamics-spot
            page: Locomotion and terrain sensing
            quote: "Our agile mobile robot for dynamic sensing and industrial inspection"
sources:
  - work: kevin-m-lynch-and-frank-c-park-modern-robotics
    url: https://hades.mech.northwestern.edu/images/7/7f/MR.pdf
    page: Ch. 13 §§13.1–13.2
    quote: "Mecanum wheels are similar, except that the spin axes of the circumferential rollers are not in the plane of the wheel."
    flag: author preprint
deeper: "Next level: wheel geometry, nonholonomic constraints, odometry, traction, gait or flight dynamics and safety limits."
---
