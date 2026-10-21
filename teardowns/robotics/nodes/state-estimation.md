---
term: State estimation
aka: [localization, where am I]
kind: process
plain: State estimation combines a motion model with noisy sensor measurements to infer pose, velocity, and uncertainty.
does: Gives planners and controllers their best current belief about the robot.
ask: How uncertain is the estimate, and does that uncertainty match observed errors?
cues:
  - Pose, velocity and uncertainty estimate
  - Estimate checked against observed errors
children: [bayes-filter, odometry, slam]
at: [0, 0.39, 0.25]
sources:
  - work: timothy-d-barfoot-state-estimation-for-robotics
    url: https://asrl.utias.utoronto.ca/~tdb/bib/barfoot_ser24.pdf
    page: Chs. 3, 6–8
    quote: "This classic technique for linear systems (whose measurements are corrupted by Gaussian noise) is famously known as the Kalman filter, and has been the workhorse of estimation for the more than 60 years since its inception."
    flag: author PDF
---
