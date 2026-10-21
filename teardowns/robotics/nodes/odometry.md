---
term: Odometry
aka: [dead reckoning]
kind: process
plain: Odometry estimates incremental motion by accumulating wheel, image, inertial, or scan-matching measurements.
does: Provides smooth, high-rate motion between absolute fixes.
ask: How quickly does each odometry source drift on this floor, scene, or route?
cues:
  - Wheel, image, inertial or scan-matching measurements
  - Incremental path between absolute fixes
  - Drift along a floor, scene or route
children: [drift]
at: [-0.3182, -0.1909, 0.02]
links:
  - {to: encoder, rel: made from}
  - {to: imu, rel: made from}
variants:
  - label: Odometry
    items:
      - id: odom-wheel
        name: Wheel
        plain: Integrates encoder increments with the wheel geometry; slip and calibration error create drift.
        sources:
          - work: timothy-d-barfoot-state-estimation-for-robotics
            url: https://asrl.utias.utoronto.ca/~tdb/bib/barfoot_ser24.pdf
            page: Ch. 3
            quote: "Measurements of this type can arise from a lower-level dead-reckoning method such as wheel odometry, visual odometry, or inertial sensing."
            flag: author PDF
      - id: odom-visual
        name: Visual
        plain: Tracks image motion or features across frames to estimate camera motion.
        sources:
          - work: timothy-d-barfoot-state-estimation-for-robotics
            url: https://asrl.utias.utoronto.ca/~tdb/bib/barfoot_ser24.pdf
            page: Ch. 3
            quote: "Measurements of this type can arise from a lower-level dead-reckoning method such as wheel odometry, visual odometry, or inertial sensing."
            flag: author PDF
      - id: odom-vio
        name: Visual-inertial
        plain: Combines camera motion with inertial measurements so each sensor constrains the other's weaknesses.
        sources:
          - work: timothy-d-barfoot-state-estimation-for-robotics
            url: https://asrl.utias.utoronto.ca/~tdb/bib/barfoot_ser24.pdf
            page: Chs. 6–8
            quote: "An inertial measurement unit has three linear accelerometers and three rate gyros that measure quantities in the sensor frame."
            flag: author PDF
      - id: odom-lidar
        name: Lidar
        plain: Registers consecutive lidar scans to estimate their relative transform.
        sources:
          - work: point-cloud-library-the-pcl-registration-api
            page: Registration API
            quote: "Estimate a (rigid) transformation between camera poses (motion estimate) and minimize error metric."
sources:
  - work: timothy-d-barfoot-state-estimation-for-robotics
    url: https://asrl.utias.utoronto.ca/~tdb/bib/barfoot_ser24.pdf
    page: Chs. 3 and 6
    quote: "Measurements of this type can arise from a lower-level dead-reckoning method such as wheel odometry, visual odometry, or inertial sensing."
    flag: author PDF
  - work: point-cloud-library-the-pcl-registration-api
    page: Registration API
    quote: "The last step is to actually compute the transformation."
---
