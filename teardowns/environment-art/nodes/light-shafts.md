---
term: Light shafts
aka:
  - god rays
  - volumetric rays
kind: part
plain: "Light shafts are visible streaks of in-scattered light revealed by a participating medium and an occluding shape."
does: "Turns a light direction and an opening, canopy or obstruction into a readable atmospheric cue."
ask: "Is there enough medium and occlusion for the shaft to read, and is its bloom helping the scene rather than washing it out?"
cues:
  - "Parallel bright rays fan from a sunlit opening or canopy"
  - "An occluder produces dark gaps inside the illuminated medium"
  - "Shaft bloom follows the source colour and fades with distance"
range: "Tune scattering distribution, volumetric scattering intensity, shaft occlusion, bloom threshold, bloom scale and tint."
trouble: "Without a medium or an occluder the effect disappears; too much bloom or scattering overwhelms the playable read."
at: [-0.5, 0.65, -0.15]
links:
  - {to: key-light, rel: controls}
  - {to: volumetric-fog, rel: controls}
  - {to: volumetric-shadowing, rel: see also}
sources:
  - work: epic-games-exponential-height-fog
    page: "Exponential Height Fog Properties, Volumetric Fog"
    quote: "In order to have visible volumetric fog light shafts from the side, the distribution will need to be closer to a value of 0."
  - work: epic-games-directional-lights
    page: "Light Shafts"
    quote: "Whether to occlude fog and atmosphere inter scattering with the screen space blurred occlusion from this light."
  - work: epic-games-directional-lights
    page: "Light Shafts"
    quote: "Whether to render light shaft bloom for this light."
---
