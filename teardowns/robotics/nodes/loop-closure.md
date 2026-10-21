---
term: Loop closure
aka: [recognising a revisited place]
kind: process
plain: Loop closure recognizes a previously visited place and adds a constraint that can correct the trajectory and map.
does: Removes accumulated drift when a route returns to known evidence.
ask: How are perceptual aliases rejected before a false closure distorts the map?
cues:
  - Previously visited place recognized
  - Trajectory and map corrected
  - Drift reduced on a return route
  - Inconsistent map after a false closure
trouble: A false loop closure can impose a wrong global constraint and bend the map into an inconsistent shape.
at: [-0.3564, -0.2545, 0.02]
links:
  - {to: drift, rel: lowers}
sources:
  - work: cesar-cadena-et-al-past-present-and-future-of
    page: Survey of robustness and loop closure
    quote: "By finding loop closures, the robot understands the real topology of the environment, and is able to find shortcuts between locations (e.g., point B and C in the map)."
    flag: open PDF
  - work: jurgen-sturm-et-al-evaluating-egomotion-and
    page: Sec. III, sequences with loop closures
    quote: "Except otherwise noted, we ensured that each sequence contains several loop closures to allow SLAM systems to recognize previously visited areas and use this to reduce camera drift."
    flag: open PDF
deeper: The next level would hold place recognition, geometric verification, pose-graph constraints, and robust optimization.
---
