---
term: Sensors
aka: [sensing]
kind: part
plain: Sensors measure the robot's own state and the world around it. Controllers use those measurements to close motion, contact and navigation loops.
does: They provide the evidence used to estimate state and correct errors.
ask: What is measured, with what noise, rate, delay, frame and calibration?
cues:
  - Measurements of robot state and world
  - Motion, contact and navigation feedback
  - Noise, rate, delay and frame in readings
children: [proprioceptive-sensors, exteroceptive-sensors, calibration]
at: [0, 1.1, -0.12]
sources:
  - work: david-v-gealy-et-al-quasi-direct-drive-for-low
    page: p. 4, motor drivers and sensors
    quote: "Each driver board is equipped with the following sensors: 14-bit absolute on-axis magnetic encoding for motor commutation and robot position sensing; 12-bit current sensing for closed-loop current (and thus torque) control."
    flag: arXiv preprint
  - work: mark-w-spong-seth-hutchinson-and-m-vidyasagar
    url: https://catalogimages.wiley.com/images/db/pdf/9781119523994.excerpt.pdf
    page: Ch. 1 §§1.2.2–1.2.3
    quote: "Unlike joint sensors, which give information about the internal configuration of the robot, cameras can be used not only to measure the position of the robot but also to locate objects in the robot's workspace."
    flag: publisher sample chapter
---
