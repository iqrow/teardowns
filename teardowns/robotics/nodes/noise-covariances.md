---
term: Noise covariances (Q and R)
aka: [filter tuning]
kind: knob
plain: Q models uncertainty in the motion or process model. R models uncertainty in a sensor measurement.
does: Controls how much prediction and measurement compete in the filter.
ask: Do residuals and state errors agree with the stated covariance?
trouble: If R is too small, noisy measurements cause jumps. If Q is too small, real motion is ignored and the estimate becomes overconfident.
sources:
  - work: timothy-d-barfoot-state-estimation-for-robotics
    url: https://asrl.utias.utoronto.ca/~tdb/bib/barfoot_ser24.pdf
    page: Chs. 6–7
    quote: "There are Jacobians embedded in the Q k and R k covariances for the noise."
    flag: author PDF
deeper: The next level would hold covariance calibration, innovation tests, cross-correlation, and adaptive noise models.
---
