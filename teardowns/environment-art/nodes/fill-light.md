---
term: Fill light
aka:
  - sky fill
  - ambient light
  - shadow lift
kind: knob
plain: "Fill light is the broad or secondary illumination that reaches areas the key misses. Sky colour, ambient terms and bounce can all act as fill."
does: "Sets the brightness and colour floor in shadows so forms remain readable without erasing the key direction."
ask: "How much of the shadow is lifted, and is its colour carrying sky or bounce?"
cues:
  - "Cool blue ambient colour in the key's shadow side"
  - "Shadow planes retain a little value instead of becoming black"
  - "A softer second glow sits below the main key"
range: "A common starting relationship is a softer, lower-intensity fill with a cool sky tint against a warmer key."
trouble: "A front fill flattens the scene. A colourless or absent fill leaves shadows dead black and removes material colour."
at: [0.7, 0.6, 0.3]
links:
  - {to: key-light, rel: lowers}
  - {to: shadows, rel: controls}
  - {to: global-illumination, rel: see also}
sources:
  - work: robert-yang-the-level-design-book
    page: "Lighting, Three point lighting"
    url: https://book.leveldesignbook.com/process/lighting
    quote: "Fill light: softer secondary light source to brighten up shadows"
  - work: robert-yang-the-level-design-book
    page: "Three point lighting"
    url: https://book.leveldesignbook.com/process/lighting/three-point
    quote: "Fill light brightens darker areas to avoid plunging everything into shadow."
---
