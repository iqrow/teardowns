---
term: Control
aka: [feedback control]
kind: process
plain: A controller reads a target and measured robot state, computes a correction, and updates actuator commands.
does: Feedback makes the robot follow a motion or force objective while reducing disturbance and model error.
ask: Is the loop stable, how quickly does it respond, and how large is the tracking error?
cues:
  - Target and measured robot state
  - Motion or force objective followed
range: A representative robot controller evaluates its law about 1,000 times per second; exact rates depend on the drive and robot.
children: [control-loop, robot-dynamics, interaction-control, model-predictive-control]
at: [0.62, 0.82, 0.05]
sources:
  - work: kevin-m-lynch-and-frank-c-park-modern-robotics
    url: https://hades.mech.northwestern.edu/images/7/7f/MR.pdf
    page: Ch. 11, robot control
    quote: "We can combine the advantages of feedforward control, which commands motion even when there is no error, with the advantages of feedback control, which limits the accumulation of error."
    flag: author preprint
---
