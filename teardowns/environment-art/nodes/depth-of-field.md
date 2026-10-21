---
term: Depth of field
aka:
  - DoF
  - focus blur
  - tilt-shift
kind: knob
plain: "Depth of field blurs objects away from a chosen focus plane. The blur radius grows with distance from focus and can be shaped into a tilt-shift miniature cue."
does: "Directs attention, separates layers and can make a full-size environment read as a small diorama."
ask: "Where is focus, how quickly does blur grow, and does gameplay remain readable?"
cues:
  - "The focal house stays sharp while foreground grass softens"
  - "Near and far blur grow gradually from the focus plane"
  - "A narrow diagonal focus band gives a tilt-shift miniature impression"
trouble: "A hard sharp-to-blurred seam, excessive blur on gameplay cues or a focus plane that fights the camera makes the scene look artificial."
range: "Set a focus distance and near and far blur ranges. A tilt-shift grade uses a narrow focus band and a blur gradient."
at: [-0.6, 0.7, 0.2]
links:
  - {to: scale-cues, rel: controls}
  - {to: composition-and-readability, rel: see also}
sources:
  - work: bart-wronski-designing-next-generation-post-effects
    page: "Motivation"
    quote: "Proper handling of near and far depth of field and no visible lerp blend between sharp and blurred image - so gradual increase/decrease of CoC."
  - work: held-using-blur-perceived-distance-size
    page: "Abstract"
    quote: "The model and algorithm allow one to manipulate blur precisely and to achieve the desired perceived scale efficiently."
  - work: held-using-blur-perceived-distance-size
    page: "Introduction"
    quote: "The opposite effect is created in a photographic manipulation known as the tilt-shift effect: A full-size scene is made to look smaller by adding blur"
---
