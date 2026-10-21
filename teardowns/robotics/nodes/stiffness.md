---
term: Virtual stiffness and damping
aka: [impedance gains]
kind: knob
plain: Virtual stiffness K maps displacement from an equilibrium to a restoring force; damping D adds a velocity-dependent term.
does: It sets how compliant the robot feels and how quickly contact force grows with displacement.
ask: What force will the robot apply if the target is 1 cm inside the surface?
cues:
  - Displacement from equilibrium
  - Restoring force
  - Contact force growing with displacement
  - Push response at a stiffness setting
range: libfranka documents Cartesian stiffness/compliance and gives an impedance example with 150 N/m translational stiffness and 10 Nm/rad rotational stiffness.
at: [-0.25, 0.6, 0.14]
links:
  - {to: force-torque-sensor, rel: measured by}
variants:
  - label: Stiffness
    items:
      - id: k-soft
        name: Soft
        plain: 200 N/m is a low translational stiffness example; a 1 cm displacement gives about 2 N before other terms.
        sources:
          - work: franka-robotics-libfranka-cartesian-impedance
            page: Example introduction
            quote: "After starting the controller try to push the robot around and try different stiffness levels."
      - id: k-medium
        name: Medium
        plain: 1000 N/m is a middle-of-range translational stiffness example; a 1 cm displacement gives about 10 N before damping.
        sources:
          - work: franka-robotics-libfranka-franka-robot-class
            page: Stiffness frame
            quote: "This frame allows to modify the compliance behavior of the robot (e.g. to have a low stiffness around a specific point which is not the end effector)."
      - id: k-stiff
        name: Stiff
        plain: 3000 N/m is an upper translational stiffness example; a 1 cm displacement gives about 30 N before damping.
        sources:
          - work: franka-robotics-libfranka-franka-robot-class
            page: setCartesianImpedance parameter bounds
            quote: "Sets the Cartesian stiffness/compliance (for x, y, z, roll, pitch, yaw) in the internal controller."
sources:
  - work: franka-robotics-libfranka-cartesian-impedance
    page: Example introduction
    quote: "After starting the controller try to push the robot around and try different stiffness levels."
  - work: franka-robotics-libfranka-franka-robot-class
    page: setCartesianImpedance parameter bounds
    quote: "Sets the Cartesian stiffness/compliance (for x, y, z, roll, pitch, yaw) in the internal controller."
---
