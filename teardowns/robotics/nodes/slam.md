---
term: SLAM
aka: [simultaneous localisation and mapping]
kind: process
plain: SLAM estimates a robot trajectory and a map together from observations, so the map and pose constrain one another.
does: Builds a reusable spatial reference when no prior map or reliable absolute position exists.
ask: What representation, loop-closure evidence and uncertainty are acceptable for this environment?
cues:
  - Robot trajectory and map together
  - Pose constrained by the map
  - Reusable spatial reference
children: [map-representation, loop-closure, trajectory-error]
sources:
  - work: cesar-cadena-et-al-past-present-and-future-of
    page: Survey of SLAM
    quote: "Topological mapping drops the metric information and only leverages place recognition to build a graph in which the nodes represent distinguishable places."
    flag: open PDF
  - work: timothy-d-barfoot-state-estimation-for-robotics
    url: https://asrl.utias.utoronto.ca/~tdb/bib/barfoot_ser24.pdf
    page: Ch. 3, SLAM example
    quote: "It is an example of simultaneous localization and mapping (SLAM) since we are going to estimate the robot and landmark positions."
    flag: author PDF
---
