---
term: Albedo
aka:
  - base colour
  - base colour map
  - local colour
kind: knob
plain: "Albedo is the surface colour authored without lighting in the texture. It describes the material's colour response rather than painted highlights or shadows."
does: "Sets the colour that direct and bounced light reveal across ground, foliage and structures."
ask: "Is this base colour plausible for the substance, and free of baked shadows or highlights?"
cues:
  - "A row of ground swatches from charcoal through soil and grass to snow"
  - "Value stays in the material instead of a painted light patch"
  - "Bright saturated ground leaves less room for lighting contrast"
  - "A strong, bright yellow-green cast is a long-known problem colour in landscape pictures"
range: "Measured non-metal intensity examples include charcoal and fresh asphalt 0.02, bare soil 0.13, green grass 0.21, desert sand 0.36 and fresh snow 0.81."
trouble: "Albedo that is too bright or saturated leaves less room for lighting to shape it. Grass that tends toward a bright yellow-green is a common case."
at: [-0.9, 0.3, -0.5]
links:
  - {to: color-palette, rel: controls}
  - {to: foliage-color, rel: see also}
variants:
  - label: Ground albedo
    items:
      - id: fresh-snow
        name: Fresh snow
        plain: "A cool near-white swatch. Unreal's measured BaseColor intensity for fresh snow is 0.81."
        sources:
          - work: epic-games-physically-based-materials
            page: "Base Color"
            quote: "Measured BaseColor values for nonmetals (intensity only): ... Fresh snow | 0.81"
      - id: dry-grass
        name: Dry grass
        plain: "An autumnal colour swatch for grass."
        sources:
          - work: andy-leaning-static-grass-beginners
            page: "What is static grass?"
            quote: "These manufacturers and others offer it in a variety of lengths and colours, from bright green to autumnal hues."
      - id: green-grass
        name: Green grass
        plain: "A mid green swatch. Unreal's measured BaseColor intensity for green grass is 0.21."
        sources:
          - work: epic-games-physically-based-materials
            page: "Base Color"
            quote: "Measured BaseColor values for nonmetals (intensity only): ... Green grass | 0.21"
      - id: dry-soil
        name: Dry soil
        plain: "A warm earth swatch. Unreal lists bare soil at BaseColor intensity 0.13."
        sources:
          - work: epic-games-physically-based-materials
            page: "Base Color"
            quote: "Measured BaseColor values for nonmetals (intensity only): ... Bare soil | 0.13"
      - id: wet-soil
        name: Wet soil
        plain: "A darker earth swatch for recently wet soil."
        sources:
          - work: unity-believable-visuals
            page: Smoothness value
            quote: "a water puddle on soil usually has a ring of absorbed water that has darkened the albedo, instead of just a direct smoothness blend."
      - id: asphalt
        name: Asphalt
        plain: "A dark neutral swatch. Unreal lists fresh asphalt at 0.02 intensity."
        sources:
          - work: epic-games-physically-based-materials
            page: "Base Color"
            quote: "Measured BaseColor values for nonmetals (intensity only): ... Fresh asphalt | 0.02"
      - id: charcoal
        name: Charcoal
        plain: "A very dark neutral swatch. Unreal's measured BaseColor intensity for charcoal is 0.02."
        sources:
          - work: epic-games-physically-based-materials
            page: "Base Color"
            quote: "Measured BaseColor values for nonmetals (intensity only): ... Charcoal | 0.02"
sources:
  - work: epic-games-physically-based-materials
    page: "Base Color"
    quote: "Base Color defines the overall color of the Material. The Base Color input accepts a Vector3 (RGB) value where each channel is automatically clamped between 0 and 1."
  - work: robert-yang-the-level-design-book
    page: "Color and value"
    url: https://book.leveldesignbook.com/process/env-art
    quote: "Avoid deeply saturated colors, give space for lighting"
  - work: epic-games-physically-based-materials
    page: "Base Color"
    quote: "Measured BaseColor values for nonmetals (intensity only): ... Desert sand | 0.36"
  - work: unity-standard-shader
    url: https://docs.unity3d.com/2022.3/Documentation/Manual/StandardShaderMaterialParameterNormalMap.html
    page: "Normal map (Bump mapping)"
    quote: "when actually using a bump map, you need to make sure that your Albedo texture does not have lighting from any particular direction in the image - ideally it should represent the colours of the surface with no lighting at all"
  - work: james-gurney-the-green-problem
    page: The Green Problem
    url: https://gurneyjourney.blogspot.com/feeds/posts/default/2580032824980990555?alt=json
    quote: "Gallery directors have reported that clients aren’t attracted to paintings with a strong greenish cast, especially if the color tends toward a bright yellow-green."
---
