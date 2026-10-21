---
term: Onboard computer
aka: [the brain, controller]
kind: part
plain: An onboard computer usually combines a microcontroller for deterministic I/O and motor work with a CPU or GPU computer for perception, planning and high-level control.
does: It runs the robot software stack and schedules data between sensors, controllers and actuators.
ask: Which functions need hard real-time timing, and which need CPU, GPU or accelerator throughput?
cues:
  - Microcontroller beside CPU or GPU computer
  - Deterministic I/O and motor work
  - Perception, planning and high-level control running
at: [0.45, 0.25, 0.1]
variants:
  - label: Compute
    items:
      - id: cpu-mcu
        name: Microcontroller
        plain: A microcontroller runs deterministic I/O, power monitoring and motor-control work; Jackal uses a 32-bit MCU for these tasks.
        why: Running deterministic I/O, power monitoring and motor-control work defines it; Jackal's MCU is one example.
        sources:
          - work: clearpath-robotics-jackal-user-manual
            page: System Architecture
            quote: "The MCU handles IO, power supply monitoring and motor control."
      - id: cpu-pc
        name: CPU computer
        plain: A CPU computer runs the operating system and general application code; Jackal documents an Intel-based computer option.
        why: Running the operating system and general application code defines it; Jackal's Intel-based computer is one example.
        sources:
          - work: clearpath-robotics-jackal-user-manual
            page: System Architecture
            quote: "Jackal is built around a computer running Ubuntu (Intel-based computer or Jetson developer kit)."
      - id: cpu-gpu
        name: GPU module
        plain: A GPU module accelerates parallel perception and neural-network work for autonomous machines.
        sources:
          - work: nvidia-jetson-modules
            page: Jetson Orin NX Series
            quote: "The world's most powerful AI computer for energy-efficient autonomous machines, with up to 275 TOPS."
sources:
  - work: clearpath-robotics-jackal-user-manual
    page: System Architecture
    quote: "The communication channel between the MCU and PC is a Full Speed USB connection."
  - work: nvidia-jetson-modules
    page: Jetson Orin NX and AI performance
    quote: "It can run multiple modern neural networks in parallel and process data from multiple high-resolution sensors."
deeper: "Next level: real-time scheduling, operating systems, ROS nodes, memory/bandwidth, accelerator deployment and thermal limits."
---
