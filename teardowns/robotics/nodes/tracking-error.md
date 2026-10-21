---
term: Tracking error
aka: [following error]
kind: measure
plain: Tracking error is the difference between the desired motion and the measured motion over time.
does: It exposes steady-state accuracy and transient response during tuning.
ask: What are the peak and RMS errors, and does the error settle?
cues:
  - Desired and measured motion traces
  - Peak and RMS error
  - Overshoot and settling
range: Feedback Systems defines rise time, overshoot and settling time from a chosen final-value tolerance; state the tolerance used.
links:
  - {to: encoder, rel: measured by}
sources:
  - work: karl-j-astrom-and-richard-m-murray-feedback
    url: http://www.cds.caltech.edu/~murray/books/AM08/pdf/fbs-principles_24Jul2020.pdf
    page: Ch. 2 §2.4
    quote: "There are situations where only the error signal e = r − y can be measured; typical examples are DVD players, optical memories, and atomic force microscopes."
  - work: kevin-m-lynch-and-frank-c-park-modern-robotics
    url: https://modernrobotics.northwestern.edu/nu-gm-book-resource/11-2-1-error-response/
    page: "§11.2.1 Error Response"
    quote: "The error response can be characterized by its steady-state response, which refers to the final error achieved, and its transient response, which consists of the overshoot and settling time."
    flag: book resource page
deeper: The next level would hold error norms, steady-state and transient decompositions, step tests and disturbance tests.
---
