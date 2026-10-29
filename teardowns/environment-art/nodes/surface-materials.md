---
term: Materials
aka:
  - textures
  - shaders
  - PBR
kind: part
plain: "A material describes how a surface responds to light. A real-time physically based material model uses a small shared set of inputs such as base colour, metalness and roughness."
does: "Gives the environment a consistent response to direct light, bounced light and reflections."
ask: "Do the material inputs describe the same substance under several lights and at several distances?"
cues:
  - "Ground colour stays recognisable as the light moves"
  - "Highlights broaden on rough soil and tighten on wet patches"
  - "Fine relief catches light without changing the silhouette"
  - "Texture detail remains at a deliberate scale beside nearby assets"
children:
  - albedo
  - color-space
  - roughness
  - metalness
  - normal-map
  - texel-density
  - specular-aliasing
at: [1.15, 0.36, -0.44]
links:
  - {to: key-light, rel: see also}
  - {to: color-palette, rel: controls}
sources:
  - work: brian-karis-real-shading-in-unreal-engine-4
    page: "Material Model, p. 9"
    quote: "Limiting the number of parameters is extremely important for optimizing G-Buffer space, reducing texture storage and access, and minimizing the cost of blending material layers in the pixel shader."
  - work: epic-games-physically-based-materials
    page: "PBR Material Attributes"
    quote: "Physically based Materials work equally well in all lighting environments."
---
