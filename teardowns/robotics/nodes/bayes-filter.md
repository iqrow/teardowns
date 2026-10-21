---
term: Bayes filter
aka: [Kalman filter, sensor fusion]
kind: loop
plain: A Bayes filter predicts a belief through a motion model and then conditions it on a new measurement.
does: Fuses sensors into one state estimate with an explicit belief or covariance.
ask: Which filter matches the motion, measurement, and uncertainty distributions?
children: [prediction-step, update-step, noise-covariances]
at: [0.2545, 0, 0.02]
pattern: pattern-predict-correct
loop:
  type: cycle
  through: [prediction-step, update-step]
variants:
  - label: Filter
    items:
      - id: filter-ekf
        name: Extended Kalman filter
        plain: Linearizes nonlinear motion and measurement models near the current estimate and propagates a Gaussian mean and covariance.
        sources:
          - work: timothy-d-barfoot-state-estimation-for-robotics
            url: https://asrl.utias.utoronto.ca/~tdb/bib/barfoot_ser24.pdf
            page: Ch. 6
            quote: "The EKF is still the mainstay of estimation and data fusion in many circles, and can often be effective for mildly nonlinear, non-Gaussian systems."
            flag: author PDF
      - id: filter-ukf
        name: Unscented Kalman filter
        plain: The unscented Kalman filter is a nonlinear Gaussian filtering method in the state-estimation family.
        sources:
          - work: timothy-d-barfoot-state-estimation-for-robotics
            url: https://asrl.utias.utoronto.ca/~tdb/bib/barfoot_ser24.pdf
            page: Sec. 6.3.1
            quote: "The result is the sigmapoint Kalman filter"
            flag: author PDF
      - id: filter-particle
        name: Particle filter
        plain: A particle filter represents a belief with weighted samples.
        sources:
          - work: timothy-d-barfoot-state-estimation-for-robotics
            url: https://asrl.utias.utoronto.ca/~tdb/bib/barfoot_ser24.pdf
            page: Ch. 6, particle filter
            quote: "The particle filter is one of the only practical techniques able to handle non-Gaussian noise"
            flag: open PDF
      - id: filter-factor-graph
        name: Factor graph smoother
        plain: Represents states and measurements as factors and optimizes a window or history together; this is common in SLAM back ends.
        sources:
          - work: timothy-d-barfoot-state-estimation-for-robotics
            url: https://asrl.utias.utoronto.ca/~tdb/bib/barfoot_ser24.pdf
            page: Chs. 8–9
            quote: "The fixed-interval smoother is usually presented in a recursive formulation."
            flag: author PDF
          - work: cesar-cadena-et-al-past-present-and-future-of
            page: Survey of SLAM back ends
            quote: "The variables correspond to nodes in the factor graph. The terms p ( z k |X k ) and the prior p ( X ) are called factors, and they encode probabilistic constraints over a subset of nodes."
            flag: open PDF
sources:
  - work: timothy-d-barfoot-state-estimation-for-robotics
    url: https://asrl.utias.utoronto.ca/~tdb/bib/barfoot_ser24.pdf
    page: Chs. 6–8
    quote: "The Bayes filter seeks to come up with an entire PDF to represent the likelihood of the state"
    flag: author PDF
---
