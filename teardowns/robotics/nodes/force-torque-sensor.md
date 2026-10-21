---
term: Force-torque sensor
aka: [F/T sensor, wrist sensor]
kind: part
plain: A six-axis force-torque sensor measures three forces and three moments, usually between the wrist and tool.
does: It enables contact detection, insertion, polishing, hand guiding and force control.
ask: What six-axis range, resolution, overload and zero drift remain after mounting the tool?
cues:
  - Three force readings and three moment readings
  - Sensor between wrist and tool
  - Six-axis range and zero drift
  - False wrench from offset or temperature drift
range: ATI Mini45 SI-580-20 lists Fx/Fy ±580 N, Fz ±1,160 N, Tx/Ty/Tz ±20 N·m, 0.25 N force resolution, less than 1 ms latency and 40 kHz sample rate.
trouble: A tool offset, overload, cable force or temperature drift appears as a false wrench unless the sensor is calibrated and zeroed in the loaded setup.
at: [0.8, 0.45, 0.05]
sources:
  - work: ati-industrial-automation-mini45-force-torque
    page: Specifications and SI-580-20 calibration
    quote: "6-Axis Force/Torque Sensing – Measures force and torque in all six degrees of freedom (Fx, Fy, Fz, Tx, Ty, Tz)"
  - work: kevin-m-lynch-and-frank-c-park-modern-robotics
    url: https://hades.mech.northwestern.edu/images/7/7f/MR.pdf
    page: Chs. 3–5, wrenches and statics
    quote: "Forces and torques at the joints or at the end-effector of the robot can be measured using various types of force–torque sensors."
    flag: author preprint
deeper: "Next level: strain-gauge bridges, calibration matrices, tool-frame transforms, bias/temperature compensation and contact controllers."
---
