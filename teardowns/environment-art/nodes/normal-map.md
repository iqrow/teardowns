---
term: Normal map
aka:
  - bump map
  - fine relief
  - surface normals
kind: part
plain: "A normal map stores direction changes for fine surface relief. The shader uses those directions to change how light reflects without adding the same detail as geometry."
does: "Adds cracks, grain, stones and blades of relief at the micro scale while the mesh carries the larger form."
ask: "Is this relief strong enough to read at the intended distance, and stable under changing light?"
cues:
  - "Fine grooves catch the key light on an otherwise simple surface"
  - "A blue-purple normal texture sits beside the albedo and roughness maps"
  - "Over-strong relief produces embossed ground and glittering highlights"
range: "A lower-resolution polygonal surface can carry fine detail in a normal map instead of modelling it as geometry."
trouble: "Strong normals make ground look embossed. Fine normals can cause specular aliasing or sparkle at distance."
at: [-0.8, 0.3, 0.55]
pattern: pattern-detail-scales
links:
  - {to: roughness, rel: see also}
  - {to: texel-density, rel: controls}
  - {to: specular-aliasing, rel: see also}
sources:
  - work: unity-standard-shader
    url: https://docs.unity3d.com/2022.3/Documentation/Manual/StandardShaderMaterialParameterNormalMap.html
    page: "Normal map (Bump mapping)"
    quote: "Normal maps are a type of Bump Map. They are a special kind of texture that allow you to add surface detail such as bumps, grooves, and scratches to a model which catch the light as if they are represented by real geometry."
  - work: brian-karis-real-shading-in-unreal-engine-4
    page: "Material Model, p. 10"
    quote: "Cavity is used to specify shadowing from geometry smaller than our run-time shadowing system can handle, often due to the geometry only being present in the normal map."
  - work: michael-toksvig-mipmapping-normal-maps
    page: Abstract
    quote: "this paper explores how the shortening can be used as a measure of normal variation to eliminate the common problem of strobing/sparkling noise due to aliasing of specular highlights."
---
