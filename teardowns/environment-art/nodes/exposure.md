---
term: Exposure
aka:
  - scene exposure
  - display exposure
kind: part
plain: "Exposure is the scale applied to scene-referred HDR before tone mapping; it decides how much of the scene reaches the display."
does: "Places middle values while retaining readable highlight and shadow detail."
ask: "Which luminance statistic is the meter targeting, and what range and response should exposure follow?"
cues:
  - "A doorway transition settles from a bright exterior to a readable interior instead of flashing white or black"
  - "The sky and ground retain detail together after tone mapping"
  - "A meter target moves as the camera enters a new light level"
range: "Use fixed EV or auto exposure; set a target range, compensation and separate response speeds before judging the grade."
trouble: "Exposure pumps when a bright sky or effect enters frame, clips highlights, or leaves interiors crushed; slow adaptation can keep the wrong brightness after a transition."
children:
  - metering
  - exposure-value
  - exposure-compensation
  - eye-adaptation
at: [0.85, 0.75, 0.05]
links:
  - {to: tone-mapping, rel: controls}
  - {to: value-structure, rel: raises}
sources:
  - work: epic-games-auto-exposure
    page: "Manual Algorithm"
    quote: "Exposure in the following formula defines the relationship between the scene surface luminance (L, which is measured in cd/m2) and pixel brightness (B) before the tonemapper and exposure compensation are applied."
---
