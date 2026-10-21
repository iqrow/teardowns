---
term: Feedback control loop
aka: [servo loop, closed loop]
kind: loop
plain: A closed loop measures the robot, compares the measurement with a target, computes a correction, commands an actuator, and measures again.
does: It rejects errors and disturbances by feeding the measured result back to the controller.
ask: What bandwidth, delay and stability margin remain?
cues:
  - Target compared with measurement
  - Repeated measurement after the command
children: [pid-controller, control-rate, tracking-error]
at: [0.0625, -0.25, 0.02]
pattern: pattern-negative-feedback
loop:
  type: balancing
  through: [pid-controller, motor-driver, electric-motor, encoder, tracking-error]
sources:
  - work: kevin-m-lynch-and-frank-c-park-modern-robotics
    url: https://hades.mech.northwestern.edu/images/7/7f/MR.pdf
    page: Ch. 8 §8.9
    quote: "The amplifier uses a local feedback control loop to adjust the time-averaged voltage across the motor to achieve the desired current."
    flag: author preprint
---
