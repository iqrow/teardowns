---
term: Eye adaptation
aka:
  - auto exposure
  - automatic exposure
kind: loop
plain: "Eye adaptation is the time-varying exposure response that lets a frame settle after its luminance changes, imitating the visual system's changing sensitivity."
does: "Smooths transitions between dark and bright spaces without letting the camera stay incorrectly exposed."
ask: "How quickly should exposure move toward the target when the camera goes from dark to bright, or bright to dark?"
cues:
  - "A dark interior becomes readable over a short transition after leaving bright outdoors"
  - "A bright doorway settles instead of snapping or oscillating"
  - "A debug view shows actual exposure moving toward a target exposure"
range: "Tune separate speed-up and speed-down rates in stops per second, plus min/max exposure limits and a transition distance."
trouble: "Fast response flickers with small luminance changes; slow response leaves the next room washed out or black for too long."
loop:
  type: balancing
  through:
    - metering
    - exposure-value
    - tone-mapping
    - value-structure
sources:
  - work: erik-reinhard-high-dynamic-range-imaging
    page: "ch. 6, §6.2 Human Visual Adaptation, p. 191"
    url: https://www.cs.ucf.edu/courses/hdri/REINHARD06.pdf
    quote: "The visual system functions in this range by adapting to the prevailing conditions of illumination."
  - work: epic-games-auto-exposure
    page: "Exposure Change Speed and Movement"
    quote: "The rate at which exposure compensation adapts to the current scene is done in logarithmic steps that perceptually move up and down the curve at the same rate of speed."
  - work: epic-games-auto-exposure
    page: "Using Speed Up and Speed Down Parameters"
    quote: "The Speed Up parameter should use higher values when mimicking eye adaptation behavior."
---
