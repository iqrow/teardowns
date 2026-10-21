---
term: Power and compute
aka: [electronics, battery and computer]
kind: part
plain: Power and compute includes the battery, real-time controllers, application computer and communication links.
does: It supplies energy and executes the software and data movement needed by every loop.
ask: Can the power system support peak loads and can each computation and message meet its deadline?
cues:
  - Battery, controller, computer and links
  - Energy and data moving through the robot
  - Peak load or computation deadline status
children: [battery, onboard-computer, fieldbus]
at: [-0.17, 0.39, -0.06]
sources:
  - work: clearpath-robotics-jackal-user-manual
    page: System architecture and interior features
    quote: "Jackal is built around a computer running Ubuntu (Intel-based computer or Jetson developer kit), paired with a 32-bit microcontroller MCU."
---
