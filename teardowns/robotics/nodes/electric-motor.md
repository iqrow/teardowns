---
term: Electric motor
aka: [motor]
kind: part
plain: An electric motor converts current into torque. In the linear motor model, torque is proportional to current through the torque constant until saturation and thermal limits matter.
does: It provides the raw speed and torque that the transmission and controller use.
ask: What continuous and peak torque are available at the required speed and temperature?
cues:
  - Current entering a motor
  - Torque and speed at the output
  - Winding heat or current limiting
range: The linear model uses torque proportional to current; winding heat grows with current squared.
trouble: Winding temperature, current limiting, saturation or demagnetization reduce torque; a driver can trip before the task is complete.
at: [-0.42, 0, 0]
variants:
  - label: Motor
    items:
      - id: motor-bldc
        name: Brushless DC (BLDC/PMSM)
        plain: A BLDC/PMSM motor uses electronic commutation and is common in robot servos.
        sources:
          - work: kevin-m-lynch-and-frank-c-park-modern-robotics
            url: https://hades.mech.northwestern.edu/images/7/7f/MR.pdf
            page: Ch. 8 §8.9
            quote: "This commutation of the windings occurs mechanically using brushes (brushed motors) or electrically using control circuitry (brushless motors)."
            flag: author preprint
      - id: motor-brushed
        name: Brushed DC
        plain: A brushed DC motor commutates through brushes and a commutator.
        sources:
          - work: kevin-m-lynch-and-frank-c-park-modern-robotics
            url: https://hades.mech.northwestern.edu/images/7/7f/MR.pdf
            page: Ch. 8 §8.9
            quote: "Figure 8.9 shows a brushed DC motor with an encoder and a gearhead."
            flag: author preprint
      - id: motor-stepper
        name: Stepper
        plain: A stepper motor advances in commanded steps from input pulses; in open loop it can lose synchronism under excess load.
        sources:
          - work: kevin-m-lynch-and-frank-c-park-modern-robotics
            url: https://hades.mech.northwestern.edu/images/7/7f/MR.pdf
            page: Ch. 11, velocity control
            quote: "The links are moved by actuators, which typically are electrically driven (e.g., by DC or AC motors, stepper motors, or shape memory alloys) but can also be driven by pneumatic or hydraulic cylinders."
            flag: author preprint
sources:
  - work: kevin-m-lynch-and-frank-c-park-modern-robotics
    url: https://hades.mech.northwestern.edu/images/7/7f/MR.pdf
    page: Ch. 8 §§8.9.1–8.9.2
    quote: "Since DC electric motors nominally provide a torque proportional to the current through the motor, this torque command is equivalent to a current command."
    flag: author preprint
deeper: "Next level: torque-speed curves, winding resistance, thermal time constants, commutation, current limits and motor sizing."
---
