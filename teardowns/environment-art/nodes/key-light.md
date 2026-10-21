---
term: Key light
aka:
  - sun
  - main light
  - directional light
kind: knob
plain: "The key light is the dominant source that establishes direction, elevation, colour and intensity. A directional key is a distant source such as the sun."
does: "Describes the large forms and gives ground, foliage and structures a common direction of light."
ask: "Where is the key relative to the camera and ground, and what colour and elevation does it carry?"
cues:
  - "A consistent highlight side on the house and hill"
  - "Long or short cast shadows reveal the key elevation"
  - "A warm sun disc or directional beam defines the scene's light direction"
range: "Direction choices are front, side or three-quarter, back or rim, and overhead. Set elevation, colour and intensity with the chosen direction."
trouble: "A front key makes the scene flat. A low key can bury the play space in long shadows. A direction that fights the camera makes silhouettes and entrances hard to read."
at: [-0.8, 0.85, 0.35]
links:
  - {to: roughness, rel: controls}
  - {to: shadows, rel: controls}
  - {to: fill-light, rel: see also}
variants:
  - label: Light direction
    items:
      - id: front
        name: Front
        plain: "The key points from the camera side. It exposes faces evenly and gives short readable shadows behind forms."
        why: "It counts as front light because the dominant direction comes from the camera side, whatever the scene's genre or time of day."
        unverified: "The opened pages did not directly define a front key direction."
      - id: side-three-quarter
        name: Side or three-quarter
        plain: "The key crosses the view from the side. It gives planes and relief a clear value break."
        why: "It counts as side or three-quarter light because the key direction crosses the camera view, whatever the subject or style."
        sources:
          - work: robert-yang-the-level-design-book
            page: "Three point lighting"
            url: https://book.leveldesignbook.com/process/lighting/three-point
            quote: "Notice how the key light and fill light in this example are roughly perpendicular to each other"
      - id: back-rim
        name: Back or rim
        plain: "The key sits behind the subject. It separates silhouettes and can leave front planes dependent on fill."
        why: "It counts as back or rim light because the dominant direction is behind the subject, whatever the camera or world setting."
        sources:
          - work: robert-yang-the-level-design-book
            page: "Three point lighting"
            url: https://book.leveldesignbook.com/process/lighting/three-point
            quote: "Notice how the key light and fill light in this example are roughly perpendicular to each other, while the rim/back light is behind the subject."
      - id: overhead
        name: Overhead
        plain: "The key descends from high above. It gives roofs and ground planes light while deepening eaves and recesses."
        why: "It counts as overhead light because the dominant direction is above the subject, whatever the scene's mood or platform."
        sources:
          - work: robert-yang-the-level-design-book
            page: "Lighting, Core light source types"
            url: https://book.leveldesignbook.com/process/lighting
            quote: "Directional light casts constant light from a direction, like sunlight downwards from the sky."
sources:
  - work: unity-light-components
    page: "Directional Lights"
    quote: "A Directional Light doesn’t have any identifiable source position and so the light object can be placed anywhere in the scene."
---
