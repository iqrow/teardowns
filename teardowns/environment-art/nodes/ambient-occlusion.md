---
term: Ambient occlusion
aka:
  - AO
  - contact darkening
  - cavity
kind: part
plain: "Ambient occlusion darkens a point when nearby geometry blocks broad ambient light. It is a scale-dependent cue for creases, contacts and small cavities."
does: "Adds local grounding where a wall meets ground, foliage meets soil or a prop meets a surface."
ask: "Is this darkening a real occluded crevice at the chosen scale, or an effect painted over the scene?"
cues:
  - "Dark creases where walls meet the ground"
  - "A soft contact patch beneath a prop"
  - "A dark halo around an object reveals screen-space AO that overestimates occluder thickness"
  - "Dirt stains and AO can be compared in a material debug view"
range: "Keep AO subtle, on top of the main lighting. Set its radius to the scale of the creases and contacts it should darken."
trouble: "Dark halos appear around objects when screen-space AO, which knows only the depth buffer, treats a thin object as a thick occluder or its thickness or distance setting is too high. Strong AO darkens the whole scene instead of its creases."
at: [0.35, 0.15, 0]
pattern: pattern-accumulation
links:
  - {to: grounding, rel: made from}
  - {to: shadows, rel: see also}
variants:
  - label: AO method
    items:
      - id: baked-ao
        name: Baked AO
        plain: "A cavity term supplies shadowing from geometry smaller than the run-time shadowing system can handle."
        sources:
          - work: brian-karis-real-shading-in-unreal-engine-4
            page: "Material Model, p. 9"
            quote: "Cavity is used to specify shadowing from geometry smaller than our run-time shadowing system can handle"
      - id: screen-space-ao
        name: Screen-space AO (SSAO)
        plain: "A frame-local estimate from screen depth and normals. It reacts to nearby visible geometry and can disappear when the geometry leaves the screen."
        sources:
          - work: unity-ssao
            page: "Introduction to screen space ambient occlusion in URP"
            quote: "The Screen Space Ambient Occlusion effect darkens creases, holes, intersections and surfaces that are close to each other in real-time."
      - id: ground-truth-ao
        name: Ground-truth AO (GTAO or HBAO)
        plain: "A horizon or ray-based estimate that samples more of the surrounding geometry for a broader result."
        unverified: "The opened pages did not provide a direct GTAO or HBAO definition."
      - id: contact-shadows
        name: Contact shadows
        plain: "A short-range shadow trace that closes the gap at a contact or crease."
        unverified: "The opened pages did not provide a direct contact-shadow definition."
sources:
  - work: unity-ssao
    page: "Introduction to screen space ambient occlusion in URP"
    quote: "In the real world, such areas tend to block out or occlude ambient light, so they appear darker."
  - work: brian-karis-real-shading-in-unreal-engine-4
    page: "Material Model, p. 9"
    quote: "Cavity is used to specify shadowing from geometry smaller than our run-time shadowing system can handle"
  - work: epic-games-ambient-occlusion-ue4
    page: Ambient Occlusion
    quote: "This is generally best used as a subtle effect, in addition to standard global illumination, that darkens corners, crevices, or other features to create a more natural, realistic look."
  - work: epic-games-ambient-occlusion-ue4
    page: "Ambient Occlusion: Distance"
    quote: "A tweak parameter that is needed to avoid dark halos around objects. As the SSAO technique only has the zbuffer, it cannot know about the thickness of objects."
  - work: unity-post-processing-ambient-occlusion
    page: "Multi-scale Volumetric Occlusion: Properties"
    quote: "Modify the thickness of occluders. This increases dark areas but can introduce dark halos around objects."
  - work: unity-post-processing-ambient-occlusion
    page: "Scalable Ambient Obscurance: Properties"
    quote: "Set the radius of sample points, which controls the extent of darkened areas."
---
