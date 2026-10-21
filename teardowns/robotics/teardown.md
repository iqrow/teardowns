---
title: Robotics
prompt: I want to understand robotics
root: robot
assembly:
  - title: Model the geometry
    text: Give every link a frame. Write forward kinematics, an inverse kinematics solver and the Jacobian so software can move between joint angles and tool poses.
    adds: [coordinate-frames, forward-kinematics, inverse-kinematics, jacobian]
    makes: kinematics
  - title: Choose the hand
    text: Pick the end effector for the objects in the task, then set grip force and check grasp quality.
    adds: [grip-force, grasp-quality]
    makes: end-effector
  - title: Lay out the body
    text: Choose joints and links for the degrees of freedom the task needs, check the workspace and payload, and put the arm on a drive base.
    adds: [links-and-joints, degrees-of-freedom, workspace, kinematics, end-effector, drive-base]
    makes: mechanism
  - title: Size the gearbox
    text: Pick the gear ratio that puts the joint’s torque and speed inside the motor’s curve.
    adds: [gear-ratio]
    makes: gearbox
  - title: Build the actuators
    text: Pair each joint’s motor with its gearbox and a motor driver that closes the current loop.
    adds: [electric-motor, gearbox, motor-driver]
    makes: actuation
  - title: Power and wire it
    text: Fit the battery, the real-time controllers and the main computer, and connect the drives on a fieldbus.
    adds: [battery, onboard-computer, fieldbus]
    makes: electronics
  - title: Give it body sense
    text: Fit joint encoders, an IMU and, where contact matters, a force-torque sensor.
    adds: [encoder, imu, force-torque-sensor]
    makes: proprioceptive-sensors
  - title: Give it eyes
    text: Mount cameras and lidar where they see the workspace and the path ahead.
    adds: [camera, lidar]
    makes: exteroceptive-sensors
  - title: Calibrate
    text: Calibrate each camera, then find every sensor’s pose on the robot; check the residual error.
    adds: [reprojection-error]
    makes: calibration
  - title: Fit the sensors
    text: The robot can now measure itself and the world in one frame.
    adds: [proprioceptive-sensors, exteroceptive-sensors, calibration]
    makes: sensing
  - title: Tune the joint controller
    text: Set PID gains on each joint while watching a step response.
    adds: [pid-gains]
    makes: pid-controller
  - title: Close the servo loop
    text: Run the controller at a fixed rate and read the tracking error.
    adds: [pid-controller, control-rate, tracking-error]
    makes: control-loop
  - title: Set contact behaviour
    text: Choose a virtual stiffness for tasks that touch the world.
    adds: [stiffness]
    makes: interaction-control
  - title: Control the whole body
    text: Add a dynamics model for feedforward torque, interaction control and, where needed, model predictive control.
    adds: [control-loop, robot-dynamics, interaction-control, model-predictive-control]
    makes: control
  - title: Build the filter
    text: Write the prediction and update steps and tune the noise covariances.
    adds: [prediction-step, update-step, noise-covariances]
    makes: bayes-filter
  - title: Add odometry
    text: Integrate wheel, visual or inertial motion and measure its drift.
    adds: [drift]
    makes: odometry
  - title: Map the place
    text: Choose a map type, add loop closure and measure trajectory error against ground truth.
    adds: [map-representation, loop-closure, trajectory-error]
    makes: slam
  - title: Know where it is
    text: Fuse odometry and SLAM in the filter to estimate the robot’s pose.
    adds: [bayes-filter, odometry, slam]
    makes: state-estimation
  - title: Detect objects
    text: Train or pick a detector and measure precision and recall on the robot’s own images.
    adds: [precision-recall]
    makes: object-detection
  - title: See the scene
    text: Add object pose estimation and point cloud processing.
    adds: [object-detection, pose-estimation, point-cloud-processing]
    makes: perception
  - title: Plan paths
    text: Plan in configuration space with collision checking.
    adds: [configuration-space, collision-checking]
    makes: motion-planning
  - title: Teach a policy
    text: Collect demonstrations, train a policy and feed field failures back into the data.
    adds: [demonstrations, data-flywheel]
    makes: learned-policy
  - title: Decide what to do
    text: Sequence skills in a task executive, plan motions, time them, and use a learned policy where hand-written skills fail.
    adds: [task-planning, motion-planning, trajectory-generation, learned-policy]
    makes: planning
  - title: Make it safe
    text: "Risk assessment starts on day one; here its outcome is built in: emergency stop, collaborative mode with contact limits, and safety functions at the required performance level."
    adds: [contact-force-limit]
    makes: collaborative-operation
  - title: Validate safety
    text: Check every safety function against the risk assessment.
    adds: [risk-assessment, emergency-stop, collaborative-operation, performance-level]
    makes: safety
  - title: Bridge sim and reality
    text: Randomise the simulator so behaviour transfers to hardware.
    adds: [sim-to-real]
    makes: simulation
  - title: Integrate and test
    text: Connect everything over middleware from one robot description, run the sense–plan–act loop, test in simulation and in the field, log every run and iterate.
    adds: [middleware, robot-description, sense-plan-act, simulation, field-testing, logging-and-replay, development-cycle]
    makes: software-stack
  - title: Ship the robot
    text: Body, actuators, sensors, power, perception, estimation, planning, control, software and safety now work as one machine.
    adds: [mechanism, actuation, sensing, electronics, perception, state-estimation, planning, control, software-stack, safety]
    makes: robot
---

A robot is a machine that senses, decides and acts in the physical world, in a loop. Its body is a chain of links and joints moved by actuators and watched by sensors. Software turns sensor data into an estimate of where the robot and the objects around it are, plans a motion, and a controller drives the motors to follow that motion while sensors report the result. The same parts and loops sit under every form: an arm in a factory cell, a warehouse robot, a quadruped, a humanoid, a drone. Practitioners spend most of their time on the gaps between model and reality: calibration, noise, delay, contact and safety.
