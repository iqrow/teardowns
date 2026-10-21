---
term: PID controller
aka: [proportional-integral-derivative]
kind: process
plain: A PID law combines proportional error, accumulated error and error-rate terms into a command.
does: It gives a joint or drive loop a compact, tunable feedback law.
ask: Are the gains, sample time and derivative filtering matched to this plant and payload?
children: [pid-gains]
sources:
  - work: kevin-m-lynch-and-frank-c-park-modern-robotics
    url: https://hades.mech.northwestern.edu/images/7/7f/MR.pdf
    page: Ch. 11 §11.4.1.1
    quote: "A common feedback controller is linear proportional-integral-derivative control, or PID control."
    flag: author preprint
  - work: karl-j-astrom-and-richard-m-murray-feedback
    url: https://web.archive.org/web/20251008125640id_/https://fbswiki.org/wiki/index.php/PID_Control
    page: PID control
    quote: "Proportional-integral-derivative (PID) control is by far the most common way of using feedback in engineering systems."
---
