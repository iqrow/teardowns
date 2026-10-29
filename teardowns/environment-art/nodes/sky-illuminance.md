---
term: Sky illuminance
aka:
  - sky brightness
  - sky-light reading
kind: measure
plain: "Sky illuminance is the light delivered by the sun-and-sky system, read in physical units or an engine's luminance/illuminance meter."
does: "Checks that the sky and sun provide a plausible ambient level before exposure and grading hide the mismatch."
ask: "What does open ground read under this sky, and how much of that reading is sky contribution rather than direct sun?"
cues:
  - "A luminance or illuminance meter reports a stable reading on a white diffuse patch"
  - "The debug view separates sun and sky contribution while the scene is ungraded"
range: "Use lux or cd/m² where the renderer supports physical units; compare open and sheltered samples with ambient occlusion disabled while measuring."
trouble: "The sky looks right but open ground is too dark or too bright, so exposure compensates for an incorrect light field."
at: [0.38, 0.52, 0.4]
links:
  - {to: exposure, rel: measured by}
  - {to: sky-light, rel: measured by}
sources:
  - work: epic-games-sky-atmosphere
    page: "Additional Notes, Setting up Physically-Based Sky Lighting"
    quote: "When the sun is at its zenith, it should be set to 120000 lux (or cd:sr*m^2) for an angular diameter of 0.545 degrees."
  - work: epic-games-sky-atmosphere
    page: "Additional Notes, Setting up Physically-Based Sky Lighting"
    quote: "The total Lux on a white diffuse surface with a perpendicular sun at its zenith should be around 150000 Lux. Sky contribution would be 20% of that total. Disable Ambient Occlusion when measuring this value in the Engine using the luminance/illuminance meter that is available in the HDR (Eye Adaptation) Visualization tool (Show > Visualize)."
---
