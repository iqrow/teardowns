---
term: Calibration
aka: [sensor calibration]
kind: process
plain: Calibration estimates sensor parameters and relative poses so measurements agree with a robot and object frame.
does: It removes systematic camera and sensor errors and makes multi-sensor data geometrically consistent.
ask: Which parameters are being estimated, with what motions or target, and what residual error remains?
cues:
  - Known target and robot motions
  - Point clouds lining up
  - Tool placement missing from stale calibration
trouble: A poor target, wrong dimensions, weak pose coverage or stale extrinsic transform makes point clouds misalign and tool placement miss.
children: [reprojection-error]
at: [0.3, 0.2, 0.27]
links:
  - {to: coordinate-frames, rel: see also}
variants:
  - label: Calibration
    items:
      - id: cal-intrinsic
        name: Intrinsic
        plain: Intrinsic calibration estimates focal lengths, principal point and lens-distortion coefficients from known 3D points and image points.
        sources:
          - work: opencv-camera-calibration
            page: Basics and calibration
            quote: "Intrinsic parameters are specific to a camera. It includes information like focal length"
      - id: cal-extrinsic
        name: Extrinsic
        plain: Extrinsic calibration estimates rotation and translation between a sensor frame and a robot, target or world frame.
        sources:
          - work: moveit-hand-eye-calibration
            page: Geometric Context
            quote: "The robot base frame is the frame in which the calibration target is stationary."
      - id: cal-hand-eye
        name: Hand-eye
        plain: Hand-eye calibration estimates the camera-to-gripper or camera-to-base transform from several robot and target poses.
        sources:
          - work: moveit-hand-eye-calibration
            page: Hand-Eye Calibration
            quote: "Calibrations can be performed for cameras rigidly mounted in the robot base frame (eye-to-hand) and for cameras mounted to the end effector (eye-in-hand)."
sources:
  - work: opencv-camera-calibration
    page: Intrinsic/extrinsic calibration and chessboard procedure
    quote: "To find all these parameters, what we have to do is to provide some sample images of a well defined pattern (eg, chess board)."
  - work: moveit-hand-eye-calibration
    page: Collect Dataset
    quote: "Each sample in our calibration dataset, then, comprises a pair of poses: the end-effector's pose in the robot base frame paired with the calibration target's pose in the camera frame."
  - work: peter-corke-robotics-vision-and-control
    url: https://link.springer.com/chapter/10.1007/978-3-642-20144-8_11
    page: Ch. 11 §11.2, Camera calibration
    quote: "Section 11.2 introduces the topic of camera calibration, the estimation of the parameters of the perspective transformation."
    flag: publisher chapter preview
---
