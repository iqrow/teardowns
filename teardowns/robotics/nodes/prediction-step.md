---
term: Prediction step
aka: [motion update, propagate]
kind: process
plain: The prediction step propagates the prior belief through the motion model and adds process uncertainty.
does: Keeps the estimate current between measurement updates.
ask: Is the motion model valid over the time and control gap?
sources:
  - work: timothy-d-barfoot-state-estimation-for-robotics
    url: https://asrl.utias.utoronto.ca/~tdb/bib/barfoot_ser24.pdf
    page: Ch. 6
    quote: "This is the prediction step and incorporates the latest input"
    flag: author PDF
deeper: The next level would hold process models, control inputs, Jacobians, and process-noise propagation.
---
