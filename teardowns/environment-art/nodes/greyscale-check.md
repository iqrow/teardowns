---
term: Greyscale check
aka:
  - value pass
  - black and white check
  - desaturated view
kind: measure
plain: A review view for judging whether light and dark grouping stays clear as detail is added. It exposes flat scenes and noisy value breakup.
does: Measures whether added detail has weakened tonal hierarchy or made geometry noisy.
ask: Can I still identify the main masses and hierarchy after detail is added?
range: "A clear light-dark hierarchy with smooth, non-noisy transitions."
trouble: "Added detail makes geometry indistinct or noisy, or the scene loses hierarchy."
at: [0, 0.12, 0.04]
cues:
  - "Gradients stay smooth rather than noisy"
  - "Added detail does not erase the main geometry"
  - "Light and dark hierarchy remains visible"
links:
  - {to: value-structure, rel: measured by}
unverified: The opened sources do not specify the hue-removal step of a greyscale view.
sources:
  - work: robert-yang-the-level-design-book
    page: Environment Art
    url: https://book.leveldesignbook.com/process/env-art
    quote: "Gradients are smooth (not noisy) but still avoid flatness (there is hierarchy)."
  - work: robert-yang-the-level-design-book
    page: Environment Art
    url: https://book.leveldesignbook.com/process/env-art
    quote: "as we add additional visual details to the world, the level geometry becomes less distinct and more noisy."
---
