---
term: Sky light
aka:
  - skylight
  - ambient sky light
kind: part
plain: "A sky light turns the distant sky or a specified cubemap into broad ambient illumination and reflections."
does: "Fills surfaces the key misses while keeping the environment's ambient colour tied to the visible sky."
ask: "What does the sky light capture, how often does it update, and does it shadow enclosed spaces?"
cues:
  - "Shadowed faces receive a broad colour lift from the sky"
  - "The ambient reflection matches the visible horizon"
  - "An indoor recess remains darker than the open sky"
range: "Choose a captured scene or specified cubemap, set static/stationary/movable mobility, capture or recapture timing, intensity, lower-hemisphere treatment and cubemap resolution."
trouble: "A changed skybox is not recaptured, or an unshadowed ambient term leaks into interiors and erases contact and occlusion."
at: [0.55, 0.68, 0.15]
links:
  - {to: fill-light, rel: see also}
  - {to: global-illumination, rel: controls}
sources:
  - work: epic-games-sky-lights
    page: "Scene Capture"
    quote: "The Sky Light captures the distant parts of your level and applies that to the scene as a light. That means the sky's appearance and its lighting/reflections will match."
  - work: epic-games-sky-lights
    page: "Scene Capture"
    quote: "A Sky Light should be used instead of the Ambient Cubemap to represent the sky's light because Sky Lights support local shadowing, which prevents indoor areas from getting lit by the sky."
---
