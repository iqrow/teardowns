---
term: Arm bring-up
aka: [commissioning sequence, first power-up, bench checkout]
kind: process
plain: "Arm bring-up progresses from an unpowered mockup to one restrained axis and then a small complete arm. Check geometry first, enable one actuator, add one link at a time, then test slow unloaded motion before applying the intended payload."
does: It catches wrong zero, wiring, polarity, limits, brownout, thermal, binding, pinch and fall/backdrive problems before a complete arm can amplify them.
ask: What is the next smallest powered test, what can move or fall if power disappears, who is outside the envelope, and what observation makes us stop?
range: |-
  1. Record the gesture, reach, payload, joint limits and torque budget. Complete the risk assessment; mark pinch points and a no-entry powered-test envelope. Fit mechanical travel limits, a fixed base, guards and a catch/support for links that could sag, fall or backdrive when torque is disabled. Keep children and bystanders outside the powered-test envelope.
  2. With power removed, move the mockup through the intended range. Check horn zero marks, bracket/bearing alignment, screw clearance, cable strain relief and that the end effector cannot trap fingers.
  3. Connect one joint only, at the maker's documented voltage and interface, with a restrained low-energy setup and a normal shutdown plus the appropriate emergency-stop path. Command a tiny motion. Record commanded/measured angle, supply voltage, current, input power, temperature, duration, noise, vibration and supply sag.
  4. Remove power using the planned shutdown and observe only from outside the guarded envelope whether the link sags or backdrives; on an analog hobby servo, lost control pulses may remove holding effort, while some digital servos keep holding and others turn off, so the catch must prevent a strike. Stop for unexpected motion, loss of communication, pinch, rapid heating, smoke, odour or a current spike.
  5. Add one downstream link or actuator at a time. Recheck the torque budget and repeat the single-step observation before increasing range, speed, acceleration or payload. Finish with a small complete arm, slow and unloaded first, then known loads that remain inside the documented design envelope. Log every failure and change before field testing.
trouble: The arm moves at boot, starts from an unsafe pose, runs in the wrong direction, loses a bus device, browns out, heats while holding, oscillates, pinches a cable or finger, drops a link at power-off, or reaches a pose that the unpowered mockup did not predict.
at: [0.66, 0.45, 0]
links:
  - {to: field-testing, rel: see also}
  - {to: safety, rel: see also}
  - {to: risk-assessment, rel: see also}
  - {to: emergency-stop, rel: see also}
  - {to: workspace, rel: see also}
  - {to: actuation, rel: see also}
sources:
  - work: arm-build-openmanipulator-basic
    page: Launch Controller warning
    quote: "Please check each joint position before running OpenMANIPULATOR-X. If joints are set inappropriately, OpenMANIPULATOR-X might not start operating."
  - work: arm-build-lerobot-so100
    page: Set the motors IDs and baudrates
    quote: "Each motor is identified by a unique id on the bus."
  - work: arm-build-lerobot-so100
    page: Motor configuration tip
    quote: "Check your cabling at each step before pressing Enter."
  - work: arm-build-robotis-xl430
    page: Safety warnings
    quote: "Keep product out of reach of children."
  - work: arm-build-robotis-xl430
    page: Safety warnings
    quote: "Check input polarity before installing or energizing wiring or cables."
  - work: arm-build-pololu-servo-control
    page: Analog servo behavior
    quote: "if you stop sending pulses, the servos will stop trying to hold a position and effectively turn off"
  - work: arm-build-pololu-servo-control
    page: Digital servo behavior
    quote: "some digital servos continue holding the most recent position even if the control signal goes away, and other digital servos turn off."
unverified: The exact guarding, catch design, current limit, shutdown sequence and test envelope are procedural advice, not certification; set them through the risk assessment, emergency-stop design and component manuals. No universal safe force or safe distance is claimed.
deeper: The next level would hold commissioning checklists, firmware and bus-ID records, limit/zero calibration, test logs, stop criteria, fault injection, rollback and field-test acceptance evidence.
---
