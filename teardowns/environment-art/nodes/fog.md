---
term: Fog
aka:
  - aerial perspective
  - distance haze
  - volumetric fog
kind: knob
plain: "Fog blends an object's colour with the colour of the air as distance grows. Aerial perspective also lowers contrast and can shift distant ground towards the sky colour."
does: "Separates near and far space, hides hard transitions and gives the scene a scale and weather cue."
ask: "At what distance does object colour fall away, and does the ground still keep its value structure?"
cues:
  - "Distant objects become lighter, bluer or closer to the fog colour"
  - "A foreground start distance keeps nearby ground clear"
  - "A smooth density change replaces a hard horizon cut"
  - "Fog lit by the sun shows a directional inscattering tint"
range: "The plot uses x = eye distance and y = share of the object's colour left. Linear uses f=(end-x)/(end-start), exponential uses f=exp(-density*x), and exponential squared uses f=exp(-(density*x)^2)."
trouble: "Fog and grading can wash out value structure. A hard start distance, excessive density or a mismatched fog colour makes the world look flat and removes navigation cues."
at: [-0.9, 0.22, 0]
links:
  - {to: value-structure, rel: lowers}
  - {to: tone-mapping, rel: see also}
variants:
  - label: Fog falloff
    items:
      - id: linear
        name: Linear
        plain: "Object colour falls at a fixed rate between start and end distances."
        sources:
          - work: docs-gl-glfog
            page: "Description"
            quote: "The equation for GL_LINEAR fog is f = end - c end - start"
      - id: exponential
        name: Exponential
        plain: "Object colour falls by uniform attenuation with distance."
        sources:
          - work: docs-gl-glfog
            page: "Description"
            quote: "The equation for GL_EXP fog is f = e - density · c"
      - id: exponential-squared
        name: Exponential squared
        plain: "Object colour falls more sharply at distance as the density-distance term is squared."
        sources:
          - work: docs-gl-glfog
            page: "Description"
            quote: "The equation for GL_EXP2 fog is f = e - density · c 2"
sources:
  - work: docs-gl-glfog
    page: "Description"
    quote: "Fog blends a fog color with each rasterized pixel fragment's post-texturing color using a blending factor f."
  - work: opengl-other-atmospheric-effects
    page: "17.8 Other Atmospheric Effects"
    quote: "The exponential fog equation has some physical basis. It is the result of integrating a uniform attenuation between the object and the viewer."
  - work: epic-games-exponential-height-fog
    page: "Exponential Height Fog"
    quote: "Exponential Height Fog creates more density in low places of a map and less density in high places."
  - work: sebastien-hillaire-physically-based-and-scalable-atmospheres
    page: "What are we talking about?, slide 2"
    quote: "When light scattering happens between objects and your eyes, this physical interaction is called aerial perspective. Those objects then look like they are in a fog."
---
