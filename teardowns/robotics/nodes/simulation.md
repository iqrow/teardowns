---
term: Simulation
aka: [sim, digital twin]
kind: process
plain: A simulator advances a virtual robot and environment with a physics model, sensors and the robot's software interfaces.
does: It tests and trains software before hardware is exposed to the task.
ask: Which dynamics, contacts, sensors and timing behaviors does this simulator get wrong?
children: [sim-to-real]
at: [0.5091, -0.0859, 0.02]
links:
  - {to: robot-description, rel: made from}
variants:
  - label: Simulator
    items:
      - id: sim-gazebo
        name: Gazebo
        plain: Gazebo Sim runs 3D worlds from SDF and connects to ROS or Gazebo Transport; it supports headless server operation.
        sources:
          - work: gazebo-getting-started-with-gazebo
            page: Users, SDF worlds, ROS integration and headless operation
            quote: "After installing Gazebo in Step 1, you can launch Gazebo Sim, a 3D robotics simulator, from a terminal."
      - id: sim-mujoco
        name: MuJoCo
        plain: MuJoCo is an articulated-body physics engine with contact dynamics, sensors and actuators.
        sources:
          - work: deepmind-mujoco-overview
            page: Introduction, contact dynamics, actuation and model formats
            quote: "mj_step which runs the entire forward dynamics and advances the state of the simulation."
      - id: sim-isaac
        name: NVIDIA Isaac Sim / Lab
        plain: Isaac Sim imports robot assets, simulates physics and sensors, generates synthetic data and validates ROS 2 stacks.
        sources:
          - work: nvidia-what-is-isaac-sim
            page: What Is Isaac Sim and simulation development loop
            quote: "Import robots and scenes from URDF, MJCF, Onshape CAD, or USD. Simulate with PhysX or Newton, add RTX and physics-based sensors, generate synthetic data, prepare robots for Isaac Lab, and validate robot stacks with ROS 2."
      - id: sim-drake
        name: Drake
        plain: Drake is a model-based toolbox for multibody dynamics, simulation, optimization and control-system analysis.
        sources:
          - work: drake-development-team-drake-model-based-design
            page: Overview and core library
            quote: "Drake aims to simulate even very complex dynamics of robots."
sources:
  - work: gazebo-getting-started-with-gazebo
    page: Gazebo Sim, SDF worlds and ROS integration
    quote: "After installing Gazebo in Step 1, you can launch Gazebo Sim, a 3D robotics simulator, from a terminal."
  - work: deepmind-mujoco-overview
    page: Articulated dynamics, contact, sensors and model-based computation
    quote: "forward dynamics and advances the state of the simulation"
  - work: nvidia-what-is-isaac-sim
    page: Robot import, physics, sensors, synthetic data and ROS 2 validation
    quote: "Import robots and scenes from URDF, MJCF, Onshape CAD, or USD. Simulate with PhysX or Newton, add RTX and physics-based sensors, generate synthetic data, prepare robots for Isaac Lab, and validate robot stacks with ROS 2."
  - work: drake-development-team-drake-model-based-design
    page: Modeling dynamical systems, multibody dynamics, optimization and simulation
    quote: "It is a collection of tools for analyzing the dynamics of our robots and building control systems for them, with a heavy emphasis on optimization-based design/analysis."
---
