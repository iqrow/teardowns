---
term: Specular aliasing
aka:
  - sparkle
  - shimmer
  - glitter
  - fireflies
  - noisy shine
kind: concept
plain: "Specular aliasing is the sparkle or shimmer that appears when one screen pixel covers more fine relief than the shader samples. Tiny bright highlights flash on and off as the camera or light moves."
does: "Explains why relief that looks good up close turns into glitter or a noisy sheen at play distance, and points to filtering the highlight rather than repainting the texture."
ask: "Does the highlight hold still when the camera moves, or do single pixels flash on and off?"
cues:
  - "Single bright pixels flash on bumpy ground or foliage as the camera moves"
  - "The sparkle is worst where relief is finer than a pixel, usually at distance"
  - "Smooth, curved, dense meshes shimmer along their highlights"
range: "Fixes widen the highlight where normals disagree inside a pixel: the Toksvig factor for normal maps, geometric specular anti-aliasing for curved meshes."
trouble: "Every fix trades sparkle for blur: a stronger filter gives a duller, softer highlight. Turning relief down everywhere also flattens the surface up close."
at: [0, 0.16, 0.6]
pattern: pattern-detail-scales
links:
  - {to: normal-map, rel: see also}
  - {to: roughness, rel: see also}
sources:
  - work: michael-toksvig-mipmapping-normal-maps
    page: Abstract
    quote: "this paper explores how the shortening can be used as a measure of normal variation to eliminate the common problem of strobing/sparkling noise due to aliasing of specular highlights."
  - work: michael-toksvig-mipmapping-normal-maps
    page: Eliminating Aliasing of Specular Highlights
    quote: "For convenience, we introduce a “Toksvig factor”, the factor by which the original shininess exponent, s, is to be scaled down."
  - work: unity-hdrp-geometric-specular-aa
    page: Geometric Specular Anti-aliasing
    quote: "This modifies the smoothness values on surfaces of curved geometry in order to remove specular artifacts."
  - work: unity-hdrp-geometric-specular-aa
    page: Properties, Screen Space Variance
    quote: "Higher values produce a blurrier result with less aliasing."
---
