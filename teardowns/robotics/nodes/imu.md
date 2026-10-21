---
term: IMU
aka: [inertial measurement unit, accelerometer and gyro]
kind: part
plain: An IMU combines accelerometers and gyroscopes to measure specific force and angular rate on three axes each.
does: It provides fast motion information for orientation, balance, odometry and state estimation.
ask: How large are bias, noise, scale and temperature errors over the required time?
cues:
  - Three-axis acceleration readings
  - Three-axis angular-rate readings
  - Heading drift from gyro bias
range: Bosch BMI088 provides 16-bit accelerometer and gyroscope outputs, selectable accelerometer range up to ±24 g and gyro range up to ±2,000°/s.
trouble: A constant gyro bias integrates into heading drift; accelerometer bias and gravity separation make position drift rapidly after double integration.
at: [0, 0.5, 0.03]
sources:
  - work: bosch-sensortec-bmi088-high-performance-inertial
    page: Technical specifications
    quote: "BMI088 is offering a wide acceleration measurement range (up to 24 g), high vibration suppression ratio and vibration robustness, as well as high bias and temperature stability."
  - work: timothy-d-barfoot-state-estimation-for-robotics
    url: https://asrl.utias.utoronto.ca/~tdb/bib/barfoot_ser24.pdf
    page: Chs. 6–8, inertial and visual-inertial state estimation
    quote: "An inertial measurement unit has three linear accelerometers and three rate gyros that measure quantities in the sensor frame."
    flag: author PDF
deeper: "Next level: bias estimation, Allan variance, temperature compensation, synchronization, gravity alignment and inertial integration."
---
