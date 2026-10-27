---
term: "Easing"
aka:
  - "ease in"
  - "ease out"
  - "easy ease"
  - "slow in and slow out"
  - "animation curve"
  - "spring"
kind: "knob"
plain: "How a move speeds up and slows down between two keyframes, drawn as a curve of progress against time."
does: "Shapes how a move starts, stops, and feels."
ask: "Where should this move be fastest, and how hard should it stop?"
cues:
  - "Curve shape in the graph editor"
  - "A move that starts or stops smoothly"
  - "An overshoot past the target before settling"
range: "From linear at one end to curves that pass the target and settle back at the other: about 10% past for a back-out curve and about 16% for Android's default spring. Material's emphasized curve has a sharp rise followed by a long, soft finish."
trouble: "Linear everywhere, so every move has no acceleration or deceleration."
links:
  - {to: "graph-editor", rel: "measured by"}
at:
  - 0.16
  - 0.205
  - 0.02
variants:
  - label: "Curve"
    items:
      - id: linear
        name: "Linear"
        plain: "Progress matches time exactly: constant speed from start to stop."
        sources:
          - work: mdn-easing-function
            page: linear
            quote: "Specifies a constant rate of interpolation, with no change in the rate of progress throughout the duration (that is, no acceleration or deceleration)."
      - id: ease-in
        name: "Ease in (slow in)"
        plain: "Starts slowly and accelerates to the end, where it stops abruptly."
        sources:
          - work: mdn-easing-function
            page: ease-in
            quote: "Represents the easing function cubic-bezier(0.42, 0, 1, 1). It indicates that the interpolation starts slowly, then progressively speeds up until the end, at which point it stops abruptly."
      - id: ease-out
        name: "Ease out (slow out)"
        plain: "Starts abruptly and then progressively slows down towards the end."
        sources:
          - work: mdn-easing-function
            page: ease-out
            quote: "Represents the easing function cubic-bezier(0, 0, 0.58, 1). It indicates that the interpolation starts abruptly and then progressively slows down towards the end."
      - id: ease-in-out
        name: "Ease in and out (Easy Ease)"
        plain: "Starts slowly, speeds up, and then slows down towards the end."
        sources:
          - work: mdn-easing-function
            page: ease-in-out
            quote: "Represents the easing function cubic-bezier(0.42, 0, 0.58, 1). It indicates that the interpolation starts slowly, speeds up, and then slows down towards the end."
      - id: overshoot
        name: "Overshoot (back out)"
        plain: "Overshoots the target, then settles back."
        sources:
          - work: easings-net-easings
            page: easeOutBack
            quote: "easeOutBack css: cubic-bezier(0.34, 1.56, 0.64, 1)"
          - work: mdn-easing-function
            url: https://developer.mozilla.org/en-US/docs/Web/CSS/Reference/Values/easing-function/cubic-bezier
            page: cubic-bezier()
            quote: "Cubic Bézier curves with the P1 or P2 ordinate outside the [0, 1] range can cause the value to go farther than the final state and then return. In animations, this creates a kind of \"bouncing\" effect."
      - id: emphasized
        name: "Emphasized (Material)"
        plain: "Material's emphasized curve starts slowly, rises sharply, then settles into a long, soft finish."
        sources:
          - work: material-components-android-motion
            page: Curves (easing and duration)
            quote: "path: M 0,0 C 0.05, 0, 0.133333, 0.06, 0.166666, 0.4 C 0.208333, 0.82, 0.25, 1, 1, 1"
      - id: spring
        name: "Spring"
        plain: "A spring model sets the curve: stiffness sets how fast it moves, and damping sets how far it overshoots and wobbles before it settles. It has no fixed duration and runs until it comes to rest. The plot shows Android's default spring over its first quarter second."
        sources:
          - work: androidx-springanimation-source
            page: SpringAnimation class documentation
            quote: "on each frame the spring force will update the animation's value and velocity. … The animation will continue to run until the spring force reaches equilibrium."
          - work: androidx-springforce-source
            page: SpringForce class documentation
            quote: "When damping ratio is less than 1 … the mass tends to overshoot, and return, and overshoot again."
          - work: androidx-springforce-source
            page: DAMPING_RATIO_MEDIUM_BOUNCY
            quote: "Damping ratio for a medium bouncy spring. This is also the default damping ratio for spring"
          - work: androidx-springforce-source
            page: DAMPING_RATIO_MEDIUM_BOUNCY
            quote: "public static final float DAMPING_RATIO_MEDIUM_BOUNCY = 0.5f"
          - work: androidx-springforce-source
            page: STIFFNESS_MEDIUM
            quote: "Stiffness constant for medium stiff spring. This is the default stiffness for spring force."
          - work: androidx-springforce-source
            page: STIFFNESS_MEDIUM
            quote: "public static final float STIFFNESS_MEDIUM = 1500f"
          - work: material-components-android-motion
            page: Springs
            quote: "The damping ratio describes how rapidly spring oscillations decay. Stiffness defines the strength of the spring."
sources:
  - work: adobe-after-effects-speed-between-keyframes
    page: Control speed between keyframes without using the speed graph
    quote: "Apply the Easy Ease keyframe assistant, which automatically adjusts the speed of change as motion advances toward and retreats from a keyframe."
  - work: material-components-android-motion
    page: Curves (easing and duration)
    quote: "Easing is a curve which determines how long it takes an object to start and stop moving. Duration determines the overall time of the animation. These are paired together to define how motion moves and feels."
  - work: wikipedia-twelve-basic-principles-of-animation
    page: Slow in and slow out
    quote: "more pictures are drawn near the beginning and end of an action, creating a slow in and slow out effect in order to achieve more realistic movements"
  - work: mdn-easing-function
    page: linear
    quote: "Specifies a constant rate of interpolation, with no change in the rate of progress throughout the duration (that is, no acceleration or deceleration)."
---
