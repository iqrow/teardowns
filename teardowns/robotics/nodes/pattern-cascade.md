---
term: Cascade of loops
aka: [nested loops, fast inside slow]
kind: pattern
plain: Nest a fast inner loop inside a slower outer loop; the inner loop regulates a smaller variable while the outer loop sets its target.
ask: Is each inner loop sufficiently faster, and are units, saturation and handoff behavior clear?
sources:
  - work: kevin-m-lynch-and-frank-c-park-modern-robotics
    url: https://modernrobotics.northwestern.edu/nu-gm-book-resource/11-1-control-system-overview/
    page: "§11.1 Control System Overview: Inner current and outer robot-control loops"
    quote: "These inner control loops can run tens of thousands of times per second."
    flag: book resource page
deeper: The next level would hold inner and outer setpoints, rate ratios, saturation, anti-windup and loop interaction tests.
---
