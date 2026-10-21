---
term: Trajectory error (ATE / RPE)
aka: [SLAM accuracy]
kind: measure
plain: Absolute trajectory error (ATE) compares an aligned estimated path with ground truth. Relative pose error (RPE) measures local motion error and drift over an interval.
does: Provides reproducible measures for comparing SLAM and odometry systems.
ask: Which alignment, interval, RMSE, and ground-truth source were used?
range: The TUM RGB-D benchmark defines ATE after trajectory alignment and RPE as relative motion error; RPE is useful for odometry drift.
at: [0.2545, 0.105, 0.02]
links:
  - {to: drift, rel: see also}
sources:
  - work: jurgen-sturm-et-al-evaluating-egomotion-and
    page: Sec. V, Relative Pose Error and Absolute Trajectory Error
    quote: "Two frequently employed methods are the relative pose error (RPE) and the absolute trajectory error (ATE)."
    flag: open PDF
deeper: The next level would hold trajectory alignment, time association, interval length, translational and rotational RMSE, and benchmark splits.
---
