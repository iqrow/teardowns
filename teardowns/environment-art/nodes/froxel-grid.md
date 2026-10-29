---
term: Froxel grid
aka:
  - camera-frustum volume
  - froxel volume
kind: knob
plain: "A froxel grid is a low-resolution volume texture aligned to the camera frustum, with screen-space cells and depth slices for integrating participating media."
does: "Makes volumetric lighting tractable by trading volume resolution against detail, stability and GPU cost."
ask: "How many cells and depth slices does this view need before shafts and density boundaries stop banding?"
cues:
  - "A debug view shows stepped depth slices or a camera-aligned volume"
  - "Fine shaft edges soften when the volume resolution is lowered"
  - "The effect follows the camera rather than a world-aligned cube"
range: "Set screen-space grid size, depth-slice count and view distance; higher Z resolution improves quality but costs more."
trouble: "Too few slices cause banding and undersampling; temporal reprojection can leave trails behind fast lights or moving media."
at: [-0.72, 0.48, 0.2]
links:
  - {to: volumetric-fog, rel: controls}
  - {to: performance-budget, rel: controls}
sources:
  - work: epic-games-volumetric-fog
    page: "Temporal Reprojection"
    quote: "The volume textures (voxels) used by Volumetric Fog are relatively low-resolution and aligned to the camera frustum."
  - work: epic-games-volumetric-fog
    page: "Volumetric Fog Controls, Exponential Height Fog"
    quote: "In the created volume texture for the fog there are a limited number of Z slices depending on this distance. Increasing the distance will result in under-sampling that can cause artifacts to appear."
  - work: sebastien-hillaire-physically-based-and-scalable-atmospheres
    page: "Aerial perspective, slide 17"
    quote: "Froxel volume texture mapped onto camera frustum"
---
