---
term: Motor driver
aka: [servo drive, ESC, amplifier]
kind: part
plain: A motor driver switches power into motor phases and closes current, velocity or position loops. With sinusoidal commutation or FOC, current is the fast inner torque-related loop.
does: It turns commands into bounded phase current and protects the motor and power stage.
ask: What current limits, loop rates, bus timing and fault protections are provided?
cues:
  - Power switched into motor phases
  - Current, velocity or position loop
  - Bounded phase current
  - Drive fault after over-current
range: A motor amplifier uses current sensing and a local feedback loop to achieve a requested current.
trouble: Current saturation, bus jitter, over-temperature, over-current or lost feedback causes tracking error or a drive fault.
at: [-0.42, 0.3, 0]
links:
  - {to: electric-motor, rel: controls}
sources:
  - work: kevin-m-lynch-and-frank-c-park-modern-robotics
    url: https://hades.mech.northwestern.edu/images/7/7f/MR.pdf
    page: Ch. 8 §8.9
    quote: "The amplifier uses a local feedback control loop to adjust the time-averaged voltage across the motor to achieve the desired current."
    flag: author preprint
  - work: david-v-gealy-et-al-quasi-direct-drive-for-low
    page: p. 4, motor drivers and sensors
    quote: "12-bit current sensing for closed-loop current (and thus torque) control of each servomotor"
    flag: arXiv preprint
deeper: "Next level: PWM, commutation/FOC, current sensing, cascaded loops, protection and safety-rated disable."
---
