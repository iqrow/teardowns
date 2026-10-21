---
term: Update step
aka: [measurement update, correct]
kind: process
plain: The update step combines a predicted belief with a measurement likelihood; in the Gaussian linear case, the Kalman gain sets the correction.
does: Pulls the estimate toward sensor evidence and normally reduces its uncertainty.
ask: Are outliers rejected before a measurement can corrupt the estimate?
sources:
  - work: timothy-d-barfoot-state-estimation-for-robotics
    url: https://asrl.utias.utoronto.ca/~tdb/bib/barfoot_ser24.pdf
    page: Ch. 3 §3.3.3
    quote: "Next, for the correction step, we express the joint density of our state and latest measurement, at time k, as a Gaussian."
    flag: author PDF
deeper: The next level would hold residuals, innovation covariance, measurement Jacobians, and robust gating.
---
