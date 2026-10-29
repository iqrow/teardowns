---
term: Sky method
aka:
  - sky representation
  - sky rendering method
kind: knob
plain: "A sky method is the representation used to draw the distant sky: an image, a parameterized atmosphere, or an authored dome."
does: "Trades physical response, authoring freedom, memory and runtime cost while keeping the sky's role as background and light source."
ask: "Does this method need a changing sun and weather, or only a stable authored panorama and ambient capture?"
cues:
  - "A panorama has image detail that stays fixed as the view pans"
  - "A physical model changes horizon and sky colour as the sun moves"
  - "An authored dome carries painted shapes, stars or a deliberately simple gradient"
range: "HDRI skyboxes suit measured lighting; physical models include Preetham, Hosek-Wilkie and Bruneton; painted domes and gradients are authored surface choices."
trouble: "The chosen method cannot represent the required view range or time of day, and the sky background no longer agrees with its lighting capture."
variants:
  - label: Sky method
    items:
      - id: hdri-skybox
        name: HDRI skybox
        plain: "A high-dynamic-range panorama or cubemap surrounds the level and supplies image-based sky detail."
        why: "It counts as an HDRI skybox because the distant appearance is stored as an HDR environment image, whatever its photographed subject."
        sources:
          - work: unity-hdrp-hdri-sky
            page: "HDRI Sky"
            quote: "A High-dynamic-range imaging (HDRI) Sky is a simple sky representation that uses a cubemap texture."
      - id: physical-sky-model
        name: Physical sky model
        plain: "A parameterized atmosphere computes sky radiance from the sun and scattering; examples include Preetham, Hosek-Wilkie and Bruneton."
        why: "It counts as a physical sky model because sky radiance changes from atmospheric parameters and light direction rather than a fixed panorama."
        sources:
          - work: sebastien-hillaire-physically-based-and-scalable-atmospheres
            page: "Sky rendering methods, slide 8"
            quote: "Model fit [Perez 93] [CIE 03] [Preetham 99] [Hosek & Wilkie 12]"
          - work: sebastien-hillaire-physically-based-and-scalable-atmospheres
            page: "Sky rendering methods, slide 8"
            quote: "LUT-Based [Bruneton 08]"
      - id: painted-skydome
        name: Painted skydome
        plain: "An authored dome mesh or unlit sky material carries designed clouds, stars, silhouettes or graphic colour."
        why: "It counts as a painted skydome because an authored dome supplies the visible sky surface, whatever its art style."
        sources:
          - work: epic-games-sky-atmosphere
            page: "Rendering the Sky using a Skydome Mesh"
            quote: "For some projects, you will want to position the skydome mesh around the world, enabling artists to control the way the sky is composited with clouds, stars, sun and any other celestial bodies."
      - id: gradient-sky
        name: Gradient
        plain: "A simple procedural or authored colour gradient fills the sky with minimal geometry and shading."
        why: "It counts as a gradient because the sky's visible variation is a designed colour ramp rather than stored image detail or atmospheric transport."
        sources:
          - work: unity-hdrp-gradient-sky
            page: "Gradient Sky"
            quote: "HDRP interpolates between these colors to create a gradient sky."
sources:
  - work: sebastien-hillaire-physically-based-and-scalable-atmospheres
    page: "Sky rendering methods, slide 8"
    quote: "For instance, it is possible to ray march the atmosphere or fit a mathematical model on sky color itself."
  - work: epic-games-sky-atmosphere
    page: "Rendering the Sky using a Skydome Mesh"
    quote: "The sky material is rendered as the last opaque mesh during the base pass."
---
