---
term: Grip force
aka: [how hard it squeezes]
kind: knob
plain: Grip force is the normal force a contact applies to the object.
does: It must resist gravity and acceleration through friction, without damaging the object.
ask: What is the lowest force that holds with a measured friction and safety margin?
cues:
  - Object held without slip
  - Slip from too little force
  - Deformation or crushing from too much force
range: Robotiq lists 20–235 N grip force for its 2F-85 parallel gripper. A simple two-contact estimate is total normal force F_n ≈ load/(friction coefficient × number of contacts), then add margin.
trouble: Too little force causes slip; too much force can deform or crush the object, and uneven fingertips can create a twist.
at: [0.12, 0.2, 0.06]
links:
  - {to: force-torque-sensor, rel: measured by}
sources:
  - work: kevin-m-lynch-and-frank-c-park-modern-robotics
    url: https://hades.mech.northwestern.edu/images/7/7f/MR.pdf
    page: Ch. 12 §§12.2.1–12.2.3
    quote: "If the finger slides to the right, the force it applies lies on the right-hand edge of the friction cone, with magnitude determined by the normal force."
    flag: author preprint
  - work: robotiq-adaptive-grippers
    page: "2F-85 specification"
    quote: "20 TO 235 N GRIP FORCE"
---
