---
term: Volumetric fog
aka:
  - 3D fog
  - participating medium
kind: knob
plain: "Volumetric fog stores density and lighting through a three-dimensional medium instead of only blending distant pixels by depth."
does: "Adds local, height-varying haze that can receive lights and shadows throughout the view volume."
ask: "What density, extinction, albedo and view distance make the air legible without flattening the world?"
cues:
  - "Fog fills a doorway, valley or shaft rather than only tinting distant silhouettes"
  - "A local particle volume has a visible three-dimensional boundary"
  - "Directional light and skylight colour the fog differently"
range: "Set density or extinction, albedo, emission, start and view distance, near fade, and each light's volumetric scattering intensity."
trouble: "High extinction hides navigation and material value; a long view distance spreads too few depth slices over the scene and reveals undersampling artifacts."
at: [-0.9, 0.3, 0.1]
links:
  - {to: fog, rel: see also}
  - {to: volumetric-shadowing, rel: controls}
sources:
  - work: epic-games-volumetric-fog
    page: "Volumetric Fog Controls, Exponential Height Fog"
    quote: "Volumetric Fog computes participating media density and lighting at every point in the camera frustum to support varying densities and any number of lights that affect the fog."
  - work: epic-games-volumetric-fog
    page: "Volumetric Fog Controls, Exponential Height Fog"
    quote: "Increasing the distance will result in under-sampling that can cause artifacts to appear."
---
