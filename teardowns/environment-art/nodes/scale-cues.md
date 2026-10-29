---
term: Scale cues
aka:
  - sense of scale
  - metrics
  - familiar size
  - miniature effect
  - depth cues
kind: concept
plain: Things whose size the viewer already knows, such as figures, doors, props and grass, tell the eye how big everything else is. Blur and depth cues change apparent size too, which is how a full-size scene can be made to look like a model.
does: Sets how big the world feels, so every asset has to agree about one scale.
ask: Do the figures, props, plants and surface detail all agree about how big the world is, seen from the game's camera?
at: [-0.62, -0.38, 0.04]
cues:
  - "Props and figures of known size sit near large structures"
  - "Plants and surface detail are sized for the same world as the figures"
  - "Surfaces carry some detail; flat solid colour loses scale and depth cues"
  - "Blur that varies with depth makes a full-size scene look small"
range: "Pick one reference size, such as the player figure, and size props, plants and surface detail against it. A stylised world may exaggerate sizes, but the set must stay internally consistent. From a high, top-down camera, small things are often enlarged and large things reduced so that everything stays readable."
trouble: "Large structures with nothing smaller near them read bigger than intended, and props or plants sized for a different world make the scale feel inconsistent."
sources:
  - work: robert-yang-the-level-design-book
    page: Metrics
    url: https://book.leveldesignbook.com/process/blockout/metrics
    quote: "Metrics help you establish scale, the general sense of how big the game world feels."
  - work: robert-yang-the-level-design-book
    page: "Metrics: What if the level is stylized / isn't realistic?"
    url: https://book.leveldesignbook.com/process/blockout/metrics
    quote: "Even with stylized non-realistic art styles, metrics still need to feel internally consistent to the game world / design norms."
  - work: robert-yang-the-level-design-book
    page: "Metrics: Use world-aligned grid textures"
    url: https://book.leveldesignbook.com/process/blockout/metrics
    quote: "Do not use flat solid colors, these lose visual scale and depth cues while prototyping."
  - work: daniel-mcgowan-stages-environment-art
    page: Polish/Set Dressing
    quote: "Props can help bring the scale of the world down if all of the structures are very big."
  - work: andy-leaning-static-grass-beginners
    page: What length of static grass for your scale
    quote: "For OO/HO gauge track, you’ll want grass between 2 and 6mm depending on the length of the real grass you’re modelling."
  - work: daren-bader-sunderfolk-visual-design
    page: Interview
    quote: "We found that there was a sweet spot, though, where we really had to bring down the big stuff and bring up the little stuff, just so there was a little more overarching visibility of what we were doing."
  - work: held-using-blur-perceived-distance-size
    page: Abstract
    quote: "Our model explains how the pattern of blur in an image together with relative depth cues indicates the apparent scale of the image's contents."
  - work: held-using-blur-perceived-distance-size
    page: 1. Introduction
    quote: "The opposite effect is created in a photographic manipulation known as the tilt-shift effect: A full-size scene is made to look smaller by adding blur with either a special lens or postprocessing software tools."
---
