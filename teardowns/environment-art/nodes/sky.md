---
term: Sky
aka:
  - sky and atmosphere
  - skybox
  - skydome
kind: part
plain: "The sky is the distant radiance and atmosphere above the playable space: a visible background that also supplies a light field."
does: "Sets the horizon, sun or moon context, weather mood and broad ambient colour that the ground and structures sit inside."
ask: "Which sky representation gives this world the right horizon and radiance, and does its ambient light agree with the sun?"
cues:
  - "A continuous horizon gradient meets the ground without a visible seam"
  - "The sun disk and cast-shadow direction agree"
  - "Open ground receives a broad sky fill while sheltered ground stays darker"
  - "Distant forms pick up the sky's atmospheric colour"
range: "Choose a sky method, then align its sun, atmosphere density, capture or map rotation, and sky-light intensity."
trouble: "A stale capture, a rotated panorama, or a sun that disagrees with the sky makes shadows, reflections and ambient colour contradict the horizon."
children:
  - sky-method
  - sky-light
  - sun-sky-relationship
  - sky-illuminance
at: [0.75, 0.95, 0.2]
links:
  - {to: key-light, rel: controls}
  - {to: global-illumination, rel: raises}
  - {to: exposure, rel: controls}
sources:
  - work: sebastien-hillaire-physically-based-and-scalable-atmospheres
    page: "What are we talking about?, slide 2"
    quote: "The sky is the result of complex light scattering in particles within the atmosphere."
  - work: siggraph-2016-sky-atmosphere-frostbite
    page: "Course summary, Abstracts, Physically Based Sky, Atmosphere and Cloud Rendering in Frostbite, p. 9"
    url: https://blog.selfshadow.com/publications/s2016-shading-course/s2016_pbs_course_summary_v2.pdf
    quote: "Sky, atmosphere and clouds are the three main components we need to simulate in order to achieve dynamic time of day and weather conditions."
  - work: epic-games-sky-lights
    page: "Scene Capture"
    quote: "The Sky Light captures the distant parts of your level and applies that to the scene as a light."
---
