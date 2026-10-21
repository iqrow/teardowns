---
term: Proprioceptive sensors
aka: [internal sensors, body sense]
kind: part
plain: "Proprioceptive sensors measure the robot itself: joint position, motor current, acceleration, angular rate, force and temperature."
does: They feed joint control, body-state estimation, odometry and collision detection.
ask: Are the internal readings accurate and fast enough for the control loop?
cues:
  - Joint position and motor current readings
  - Acceleration and angular rate readings
  - Force and temperature readings
children: [encoder, imu, force-torque-sensor]
at: [-0.5, 0.2, 0.1]
sources:
  - work: david-v-gealy-et-al-quasi-direct-drive-for-low
    page: p. 4, 14-bit encoder, current, accelerometer and temperature sensors
    quote: "14-bit absolute on-axis magnetic encoding for motor commutation and robot position sensing; 12-bit current sensing for closed-loop current (and thus torque) control of each servomotor; a 3-axis accelerometer for state estimation, collision detection and control."
    flag: arXiv preprint
  - work: bosch-sensortec-bmi088-high-performance-inertial
    page: Technical specifications
    quote: "BMI088 is offering a wide acceleration measurement range (up to 24 g), high vibration suppression ratio and vibration robustness."
---
