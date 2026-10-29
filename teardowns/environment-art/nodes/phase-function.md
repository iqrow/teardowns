---
term: Scattering phase function
aka:
  - anisotropy
  - scattering distribution
kind: knob
plain: "A phase function controls how much participating-media light scatters toward each viewing direction."
does: "Shapes whether fog glows evenly, favours forward light, or reveals side-on shafts and halos."
ask: "Should this medium scatter broadly toward the viewer, or concentrate light along its incoming direction?"
cues:
  - "A side-on beam appears broad or disappears as angular scattering changes"
  - "A halo tightens around the sun when forward scattering increases"
  - "The same fog density produces a different read around the light direction"
range: "Use an isotropic value near 0 for equal directions; positive distributions favour scattering toward the light direction."
trouble: "A phase setting that is too forward-facing hides side-on shafts; one that is too broad can flatten direction and over-light the air."
at: [0.0, 0.72, 0.3]
links:
  - {to: light-shafts, rel: controls}
  - {to: volumetric-fog, rel: controls}
sources:
  - work: epic-games-volumetric-fog
    page: "Volumetric Fog Controls, Scattering Distribution"
    quote: "This determines how directional the volumetric scattering is; a value of 0, means light scatters equally in all directions, while a value close to 1 causes scattering, predominantly in the direction of the light (you have to be looking at the light to see its scattering)."
---
