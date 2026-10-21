---
term: Sense–plan–act loop
aka: [autonomy loop, perception-action loop]
kind: loop
plain: The conventional autonomy cycle senses the world, estimates or perceives state, plans an action, commands actuators and senses the result.
does: It connects perception, planning and control into one repeated behavior loop.
ask: How long from a change in the world to the robot's reaction, and where can stale data enter?
cues:
  - Sensor measurements
  - Perceived state and planned action
  - Actuator command
  - Sensed result after motion
at: [0, 0.1368, 0.02]
pattern: pattern-cascade
loop:
  type: cycle
  through: [sensing, perception, state-estimation, planning, control, actuation]
sources:
  - work: kevin-m-lynch-and-frank-c-park-modern-robotics
    url: https://modernrobotics.northwestern.edu/nu-gm-book-resource/11-1-control-system-overview/
    page: "§11.1 Control System Overview"
    quote: "The controller takes as input a desired motion from the user and sensor feedback from the robot."
    flag: book resource page
deeper: The next level would hold sensor drivers, perception and state estimation, planners, controllers, actuators and their timing contracts.
---
