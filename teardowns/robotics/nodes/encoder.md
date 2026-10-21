---
term: Encoder
aka: [joint angle sensor]
kind: measure
plain: An encoder reports shaft angle or position from pulses or an absolute coded scale. It may be mounted on the motor side or directly on the joint output.
does: It closes the position and velocity feedback path for a joint.
ask: What resolution, latency and accuracy are available at the load after gearing and backlash?
cues:
  - Phase-shifted pulses or coded angle
  - Shaft or joint-output position reading
  - Reference needed after incremental startup
range: Renishaw RESOLUTE angle encoders offer absolute position immediately at switch-on and high-resolution rotary versions; Blue used a 14-bit absolute magnetic encoder.
trouble: Low resolution produces quantization and velocity noise; a motor-side encoder cannot see gearbox backlash or elastic error at the load.
at: [-0.8, 0.5, 0.03]
variants:
  - label: Encoder
    items:
      - id: enc-incremental
        name: Incremental
        plain: An incremental encoder emits phase-shifted pulses; the controller counts edges and normally needs a known reference after startup.
        sources:
          - work: kevin-m-lynch-and-frank-c-park-modern-robotics
            url: https://hades.mech.northwestern.edu/images/7/7f/MR.pdf
            page: Ch. 1, sensors
            quote: "For both revolute and prismatic joints, encoders, potentiometers, or resolvers measure the displacement and sometimes tachometers are used to measure velocity."
            flag: author preprint
      - id: enc-absolute
        name: Absolute
        plain: An absolute encoder reports a coded angle immediately at switch-on; Renishaw RESOLUTE needs no battery backup.
        sources:
          - work: renishaw-resolute-absolute-optical-encoder
            page: pp. 1–2 and 8
            quote: "Absolute position is determined immediately upon switch-on"
sources:
  - work: kevin-m-lynch-and-frank-c-park-modern-robotics
    url: https://hades.mech.northwestern.edu/images/7/7f/MR.pdf
    page: Ch. 1, sensors
    quote: "For both revolute and prismatic joints, encoders, potentiometers, or resolvers measure the displacement and sometimes tachometers are used to measure velocity."
    flag: author preprint
  - work: renishaw-resolute-absolute-optical-encoder
    page: pp. 1–2 and 8, system features
    quote: "Patented RESOLUTE encoder technology combines 1 nm resolution with exceptionally high speed, reading from a range of high-accuracy linear tape and spar scales or angle encoder rings."
  - work: david-v-gealy-et-al-quasi-direct-drive-for-low
    page: p. 4, 14-bit absolute magnetic encoder
    quote: "14-bit absolute on-axis magnetic encoding for motor commutation and robot position sensing"
    flag: arXiv preprint
deeper: "Next level: incremental quadrature, absolute single-turn/multi-turn, motor-side versus load-side sensing, accuracy and calibration."
---
