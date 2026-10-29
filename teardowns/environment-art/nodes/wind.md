---
term: Wind
aka:
  - vegetation motion
  - foliage bending
  - wind field
kind: knob
plain: "Wind is the directional and local motion applied to stems, blades, branches and leaves. Main bending moves the plant mass while detail bending gives leaves their separate phases and stiffness."
does: "Adds life and a shared environmental force without unplanting the roots or turning the whole population into one rigid wave."
ask: "Which force bends this plant, where is it stiff, and how much motion can the silhouette take before it looks comic?"
cues:
  - "Roots stay planted while upper blades and leaves move"
  - "Nearby plants share a wind direction with different phase and stiffness"
  - "Large branches move slowly while leaf edges add finer motion"
trouble: "Plants slide at the root, every clump moves in lockstep, wind bends cards too far, or the motion reads as a shader wobble."
range: "Wind direction; speed; main amplitude; detail frequency; stiffness; per-instance phase."
at: [-0.58, 0.52, 0.78]
links:
  - {to: grass-clump, rel: controls}
  - {to: foliage-shading, rel: controls}
  - {to: trees, rel: controls}
sources:
  - work: tiago-sousa-crysis-vegetation
    page: 16.1, Procedural Animation
    quote: "A wind vector is computed per-instance, in world space, by summing up the wind forces affecting the instance. A wind area can be a directional or an omnidirectional wind source. In our case, we compute this sum in a very similar way to light sources affecting a single point, taking direction and attenuation into account. Also, each instance has its own stiffness"
  - work: randima-fernando-gpu-gems
    url: https://developer.nvidia.com/gpugems/gpugems2/part-i-geometric-complexity/chapter-1-toward-photorealism-virtual-botany
    page: 1.2.4, Wind
    quote: "The trick to this is to carry a blend weight in the vertex definition, where the top two vertices of the grass quad are set to 1 and the bottom two to 0."
---
