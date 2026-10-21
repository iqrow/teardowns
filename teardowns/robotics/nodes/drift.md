---
term: Drift
aka: [accumulated error]
kind: measure
plain: Drift is accumulated trajectory error from integrating imperfect incremental motion.
does: Indicates how often the robot needs an absolute reference or loop closure.
ask: What translational drift percentage occurs per 100 m on this robot and route?
cues:
  - Accumulated trajectory error
  - Estimated path diverging from a reference
  - Error growing along a route
range: KITTI reports average translational error in percent over all 100–800 m subsequences.
at: [0.5409, 0.2291, 0.02]
sources:
  - work: jurgen-sturm-et-al-evaluating-egomotion-and
    page: Sec. V, Relative Pose Error
    quote: "The relative pose error measures the local accuracy of the trajectory over a fixed time interval Δ."
    flag: open PDF
  - work: johann-borenstein-and-liqiang-feng-umbmark-a
    page: Secs. 3.2, 4.1; Table I; 4×4 m path
    quote: "Systematic errors are a property of the robot itself, and they stay almost constant over prolonged periods of time, while non-systematic errors are a function of the properties of the floor."
    flag: open PDF
deeper: The next level would hold error definitions, alignment choices, trajectory segments, and benchmark protocols.
---
