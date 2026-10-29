---
term: "Timing"
aka:
  - "duration"
  - "speed"
  - "frames"
  - "holds"
  - "how long a move takes"
kind: "knob"
plain: "How many frames each move takes, and how long things hold still between moves."
does: "Sets the weight and pace of the graphics and gives the viewer time to read."
ask: "How many frames does this move need to read as intended?"
cues:
  - "Bar lengths and frame counts in the timeline"
  - "Holds that read as pauses"
  - "A logo that enters and settles in about half a second"
range: "Design-system durations run 50-1000 ms (Material tokens); at 25 fps that is 1.25-25 frames, at 30 fps 1.5-30 frames."
trouble: "Everything timed the same, so the graphics feel machine-made; or holds so long the viewer has already left."
links:
  - {to: "pacing", rel: "see also"}
at:
  - -0.2
  - -0.016
  - 0.02
sources:
  - work: harold-whitaker-john-halas-timing-for-animation
    page: Introduction, General Principles of Timing
    quote: "If too much time is spent on any one of these things, the timing will be too slow and the audience's attention will wander. If too little time is spent, the movement may be finished before the audience noticed it, and so the idea is wasted."
  - work: wikipedia-twelve-basic-principles-of-animation
    page: Timing
    quote: "Timing refers to the number of drawings or frames for a given action, which translates to the speed of the action on film."
  - work: material-components-android-motion
    page: Curves (easing and duration)
    quote: "Material's curve system also includes 16 duration attributes to be paired with an easing."
  - work: material-components-android-motion
    page: Duration attributes
    quote: "In general, duration should increase as the area/traversal of an animation increases."
---
