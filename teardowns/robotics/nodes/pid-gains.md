---
term: PID gains
aka: [tuning, Kp Ki Kd]
kind: knob
plain: The three weights Kp, Ki and Kd set the proportional, integral and derivative contributions.
does: They trade response speed, steady-state error and transient overshoot or settling.
ask: After a step, what are the steady-state error, rise time, overshoot and settling time?
cues:
  - Step response reaching the target
  - Overshoot or ringing
  - Settling and steady-state error
trouble: Excessive gain can cause overshoot or oscillation; insufficient gain can leave a slow or inaccurate response.
links:
  - {to: tracking-error, rel: lowers}
variants:
  - label: Tuning
    items:
      - id: tune-low
        name: Soft (overdamped)
        plain: This tuning choice is evaluated by its settling time, overshoot and steady-state error.
        sources:
          - work: kevin-m-lynch-and-frank-c-park-modern-robotics
            url: https://modernrobotics.northwestern.edu/nu-gm-book-resource/11-2-1-error-response/
            page: "§11.2.1 Error Response: Transient response and settling time"
            quote: "This video introduces the error response for a controlled system and characterizes the error response in terms of its steady-state error and its transient response (overshoot and settling time)."
            flag: book resource page
      - id: tune-good
        name: Well tuned (near critical damping)
        plain: A well-tuned response reaches the target quickly with small overshoot and short settling time.
        sources:
          - work: kevin-m-lynch-and-frank-c-park-modern-robotics
            url: https://modernrobotics.northwestern.edu/nu-gm-book-resource/11-2-1-error-response/
            page: "§11.2.1 Error Response: Good controller response"
            quote: "A better response would have no steady-state error, no overshoot, and a faster settling time."
            flag: book resource page
      - id: tune-high
        name: Aggressive (underdamped)
        plain: Aggressive gains can shorten rise time but may increase overshoot, ringing and settling time.
        sources:
          - work: kevin-m-lynch-and-frank-c-park-modern-robotics
            url: https://modernrobotics.northwestern.edu/nu-gm-book-resource/11-2-1-error-response/
            page: "§11.2.1 Error Response: Overshoot, oscillation and settling time"
            quote: "We can also see that the error response overshoots its steady-state value before settling."
            flag: book resource page
sources:
  - work: karl-j-astrom-and-richard-m-murray-feedback
    url: https://web.archive.org/web/20251008125640id_/https://fbswiki.org/wiki/index.php/PID_Control
    page: Ch. 11, PID tuning, integral windup and implementation
    quote: "Proportional-integral-derivative (PID) control is by far the most common way of using feedback in engineering systems."
  - work: kevin-m-lynch-and-frank-c-park-modern-robotics
    url: https://modernrobotics.northwestern.edu/nu-gm-book-resource/11-2-1-error-response/
    page: "§11.2.1 Error Response"
    quote: "In summary, the error response can be characterized by its steady-state response, which refers to the final error achieved, and its transient response, which consists of the overshoot and settling time."
    flag: book resource page
deeper: The next level would hold plant models, sample time, gain units, anti-windup and derivative filtering.
---
