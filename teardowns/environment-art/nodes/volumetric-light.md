---
term: Volumetric light
aka:
  - participating-media lighting
  - volumetric lighting
kind: part
plain: "Volumetric light is in-scattered light carried through participating media such as fog, dust, mist or clouds."
does: "Makes the air itself visible, so light can form shafts, depth bands and soft shadows between the source and the camera."
ask: "Which medium, lights and shadow paths should be integrated, and can the chosen volume stay stable at the target frame time?"
cues:
  - "A beam becomes visible only where light crosses haze or dust"
  - "Occluders cut dark gaps through a bright shaft"
  - "Fog receives colour and shadow from the same lights that illuminate nearby surfaces"
  - "The effect settles without obvious bands or trails as the camera moves"
range: "Choose density, albedo, extinction, phase direction, froxel resolution and volumetric shadow quality for the target view."
trouble: "No medium means no shaft; too much density erases the scene, while low volume resolution or temporal history leaves banding and trails."
children:
  - volumetric-fog
  - light-shafts
  - froxel-grid
  - phase-function
  - volumetric-shadowing
at: [-0.7, 0.72, -0.15]
links:
  - {to: key-light, rel: controls}
  - {to: fog, rel: see also}
  - {to: shadows, rel: controls}
sources:
  - work: sebastien-hillaire-physically-based-and-scalable-atmospheres
    page: "What are we talking about?, slide 2"
    quote: "When light scattering happens between objects and your eyes, this physical interaction is called aerial perspective. Those objects then look like they are in a fog."
  - work: siggraph-2015-volumetric-lighting-frostbite
    page: "Course description, Towards Unified and Physically-Based Volumetric Lighting in Frostbite"
    quote: "The authors propose a way to unify these different volumetric representations using physically based parameters: a cascaded volume representing extinction, voxelization method to project particles into that extinction volume, a simple volumetric shadow map that can then be used to cast shadow from any light"
  - work: epic-games-volumetric-fog
    page: "Volumetric Fog"
    quote: "Volumetric Fog computes participating media density and lighting at every point in the camera frustum to support varying densities and any number of lights that affect the fog."
---
