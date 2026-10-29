---
term: Global illumination
aka:
  - GI
  - bounced light
  - indirect light
kind: part
plain: "Global illumination is light that reaches a surface after bouncing from other surfaces or through the sky. It carries colour bleed and softens the gap between direct light and shadow."
does: "Makes the environment sit in one light field, so walls, ground and foliage receive related indirect colour."
ask: "Which bounce method supplies indirect light here, and where does it fail or leak?"
cues:
  - "Warm soil colour bleeds into the underside of a wall"
  - "An enclosed space is darker than its open surroundings"
  - "Dynamic objects receive a probe or real-time approximation of the baked environment"
range: "Choose baked lightmaps, light probes, real-time GI or a flat ambient term according to motion, platform and lighting change."
trouble: "Light leaks, black interiors, missing bounce colour and stale bakes reveal a mismatch between the GI method and the scene."
at: [0, 0.4, -0.4]
links:
  - {to: fill-light, rel: controls}
  - {to: ambient-occlusion, rel: see also}
variants:
  - label: GI method
    items:
      - id: baked-lightmaps
        name: Baked lightmaps
        plain: "Indirect lighting for contributing static objects is included during baking or precomputing."
        sources:
          - work: unity-lightmapping
            page: "Static versus Dynamic"
            quote: "Unity will only consider objects that are marked as ‘Contribute GI’ during the baking/precomputing of the lighting."
      - id: light-probes
        name: Light probes
        plain: "Baked samples in empty space that approximate indirect light on moving objects and LOD scenery."
        sources:
          - work: unity-light-probes
            page: "Light Probes"
            quote: "At runtime, the indirect light that hits dynamic GameObjects is approximated using the values from the nearest Light Probes to that object."
      - id: real-time-gi
        name: Real-time GI
        plain: "A runtime solution that updates indirect light as sources and geometry change."
        sources:
          - work: epic-games-lumen-global-illumination
            page: "Lumen Global Illumination"
            quote: "Lumen is Unreal Engine's fully dynamic global illumination and reflections system"
      - id: flat-ambient
        name: Flat ambient
        plain: "A constant ambient-light term: one colour for all ambient light in the scene, useful for lifting overall brightness without adjusting individual lights."
        sources:
          - work: unity-ambient-light
            page: Lighting window, Environment Lighting
            url: https://docs.unity3d.com/ru/2020.1/Manual/lighting-window.html
            quote: "Color: Use a flat color for all ambient light."
          - work: unity-ambient-light
            page: Ambient light
            quote: "Ambient light, also known as diffuse environmental light, is light that is present all around the Scene and doesn’t come from any specific source object."
          - work: unity-ambient-light
            page: Ambient light
            quote: "Ambient light can also be useful if you need to increase the overall brightness of a scene without adjusting individual lights."
sources:
  - work: epic-games-lumen-global-illumination
    page: "Lumen Global Illumination"
    quote: "Light bouncing diffusely off a surface picks up the color of that surface and reflects the colored light onto other nearby surfaces, creating an effect called color bleed."
  - work: unity-lightmapping
    page: "Static versus Dynamic"
    quote: "Dynamic (i.e. non-static) objects have to rely on the Light Probes you placed throughout the scene to receive indirect lighting."
---
