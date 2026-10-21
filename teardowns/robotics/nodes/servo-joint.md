---
term: Servo joint
aka: [actuated hinge, servo axis, motorized joint, hobby servo, smart servo, bus servo]
kind: part
plain: A servo joint combines an actuator with a horn or hub, link bracket, supported pivot and fasteners so a commanded axis can hold a known angle. The servo output transmits torque; a bearing or through-axle should carry the link's radial and overturning loads when the design needs that support.
does: It converts an actuator choice into a repeatable, serviceable joint while exposing the interfaces that usually cause wobble, binding, overload or wrong zero.
ask: Is this axis best served by a simple hobby servo and pulse command, or by a smart serial/bus servo with address, feedback and limits; are the horn, bracket, bearing, voltage and controller compatible?
range: |-
  Conventional hobby servo: start from the maker's pulse interface and calibrated neutral/limits; select torque at the actual supply voltage and leave room for the link and downstream mass. Smart serial/bus servo: match bus type, voltage, unique IDs, controller/interface and the documented position, load, voltage and temperature feedback; configure the chosen limits before motion. Neither label makes a joint safe by itself.

  With power removed, fit the servo in a bracket, support the opposite pivot with a compatible bearing or through-axle when needed, centre the actuator at its documented neutral, install the matching horn/hub and attach the link without side-loading the output. Check full unpowered travel, screw clearance, horn orientation, cable strain relief and pinch points. On first power, command a tiny range on a restrained, guarded joint; compare measured angle and current with the budget before adding a link. Treat quoted stall torque as a momentary specification, not a continuous holding promise.
trouble: The horn slips or is the wrong spline, the bearing is missing or clamped incorrectly, the bracket twists, the joint has backlash or binds, a hobby servo buzzes at its endpoint, a bus servo has duplicate IDs or wrong voltage, the output heats while holding, or power removal lets the link fall/backdrive.
at: [0.02, 0.36, 0.11]
links:
  - {to: links-and-joints, rel: see also}
  - {to: actuation, rel: see also}
  - {to: electric-motor, rel: see also}
  - {to: gearbox, rel: see also}
  - {to: motor-driver, rel: see also}
  - {to: emergency-stop, rel: see also}
  - {to: safety, rel: see also}
variants:
  - label: Servo interface
    items:
      - id: pulse-command-hobby
        name: Pulse-command hobby servo
        plain: A conventional hobby/PWM servo receives timed pulses; the REV SRS V2 is an example of a configurable pulse servo, not an addressed bus device. Its neutral and pulse-to-angle mapping are component-specific, so calibrate neutral and limits before relying on a joint angle.
        sources:
          - work: arm-build-pololu-servo-control
            page: Pulse width and calibration
            quote: "The pulse width is generally the most important part of the interface, and that is what we intentionally vary to change the command to the servo."
          - work: arm-build-pololu-servo-control
            page: Pulse width and calibration
            quote: "There is no standard correspondence between the pulse width and the servo position."
          - work: arm-build-rev-smart-servo
            page: Default operation
            quote: "The default range for the SRS V2 is 270°. This range is mapped to an input pulse range of 500μs to 2500μs with 1500μs as the center point."
      - id: addressed-serial-bus
        name: Addressed serial bus servo
        plain: An addressed serial/bus servo uses a compatible interface and per-motor identity; read the chosen actuator's documented feedback and operating limits before motion.
        sources:
          - work: arm-build-robotis-selection
            page: Communication
            quote: "To communicate with DYNAMIXELs using a controller, the same communication interface(TTL or RS-485) must be used."
          - work: arm-build-lerobot-so100
            page: Set the motors IDs and baudrates
            quote: "Each motor is identified by a unique id on the bus."
          - work: arm-build-robotis-xm430
            page: Supported feedback
            quote: "real-time data on position, speed, load, voltage, and temperature"
sources:
  - work: arm-build-pololu-servo-control
    page: Pulse width and calibration
    quote: "The pulse width is generally the most important part of the interface, and that is what we intentionally vary to change the command to the servo."
  - work: arm-build-pololu-servo-control
    page: Pulse width and calibration
    quote: "There is no standard correspondence between the pulse width and the servo position."
  - work: arm-build-rev-smart-servo
    page: Smart Robot Servo V2 overview
    quote: "One SRS V2 can be used as a standard angular servo, a custom angular servo, and a continuous rotation servo by simply changing its settings with the SRS Programmer."
  - work: arm-build-rev-smart-servo
    page: Angular limits
    quote: "The SRS V2 can be easily configured with the SRS Programmer to limit right and left motion at two user-defined angles."
  - work: arm-build-rev-smart-servo
    page: Smart Robot Servo V2 Basics
    quote: "Splines are like keys, so only matched types will fit together."
  - work: arm-build-shutter-arm
    page: Steps 4–5, bearing mounts and pan plate
    quote: "Attach both Bearing Mounts to the horn and idler of Servo 2 using 2 Servo Washers and 16 M2.5 x 5mm screws"
  - work: arm-build-robotis-selection
    page: Communication
    quote: "To communicate with DYNAMIXELs using a controller, the same communication interface(TTL or RS-485) must be used."
  - work: arm-build-lerobot-so100
    page: Set the motors IDs and baudrates
    quote: "Each motor is identified by a unique id on the bus."
  - work: arm-build-robotis-xm430
    page: Supported feedback
    quote: "real-time data on position, speed, load, voltage, and temperature"
  - work: arm-build-robotis-xm430
    page: Torque and feedback specifications
    quote: "Estimated rated torque disclosure : This is an estimated value for continuous torque, calculated at 20% of stall torque."
unverified: Exact bracket thickness, bearing life, fastener preload, horn spline fit, allowable duty cycle and the safe restrained-test force depend on the chosen components; use their manuals and the risk assessment.
deeper: The next level would hold joint drawings, bearing/shaft fits, horn standards, cable routing, hard stops, compliance, backlash, calibration, bus topology and service procedures.
---
