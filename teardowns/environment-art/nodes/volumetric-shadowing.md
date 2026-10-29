---
term: Volumetric shadowing
aka:
  - fog shadows
  - shadowed shafts
kind: part
plain: "Volumetric shadowing attenuates light through the medium, so occluders carve dark paths through fog and shafts."
does: "Connects opaque geometry and shadow maps to the light that the participating medium receives."
ask: "Which lights and occluders shadow the volume, and is the extra sampling cost worth the read?"
cues:
  - "A wall or canopy cuts a dark wedge through a lit fog volume"
  - "A shaft fades where the light path is blocked"
  - "Shadowed fog retains a soft transition rather than a surface-only shadow"
range: "Enable cast-volumetric-shadow per light and choose shadow-map, resolution and temporal quality settings."
trouble: "Unshadowed fog glows through interiors; shadowed point or spot lights cost more and can trail when temporal history cannot keep up."
at: [0.55, 0.45, -0.1]
links:
  - {to: shadows, rel: controls}
  - {to: light-shafts, rel: raises}
  - {to: froxel-grid, rel: controls}
sources:
  - work: epic-games-volumetric-fog
    page: "Volumetric Fog Controls, Lights"
    quote: "Toggles whether or not to cast a volumetric shadow for lights contributing to Volumetric Fog."
  - work: epic-games-volumetric-fog
    page: "Volumetric Fog Controls, Lights"
    quote: "When shadow casting is enabled, Point and Spot Lights are approximately three times more expensive because they contribute to the volume textures shadowing, where as non-shadow casting lights only contribute to the fog but do not shadow."
---
