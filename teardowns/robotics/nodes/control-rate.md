---
term: Control rate
aka: [loop frequency, servo rate]
kind: knob
plain: Control rate is the number of control updates made each second.
does: It limits reaction speed and the bandwidth that a loop can achieve.
ask: Is the loop fast enough for the dynamics, with enough time left to compute each update?
range: Modern Robotics gives about 1 kHz for a robot controller; exact rates are drive-dependent.
links:
  - {to: fieldbus, rel: see also}
  - {to: onboard-computer, rel: see also}
pattern: pattern-cascade
sources:
  - work: kevin-m-lynch-and-frank-c-park-modern-robotics
    url: https://modernrobotics.northwestern.edu/nu-gm-book-resource/11-1-control-system-overview/
    page: "§11.1 Control System Overview: Representative controller and current-loop rates"
    quote: "At a rate of perhaps a thousand times per second, the controller evaluates a control law and requests joint torques from each motor amplifier."
    flag: book resource page
deeper: The next level would hold scheduler jitter, sample-and-hold effects, computation deadlines and rate ratios between nested loops.
---
