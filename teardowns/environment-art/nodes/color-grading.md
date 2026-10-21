---
term: Colour grading
aka:
  - color grading
  - LUT
  - colour correction
kind: knob
plain: "Colour grading is a controlled transform of hue, saturation and value after lighting and tone mapping. A grade can make shots share a palette while keeping material values believable."
does: "Sets mood and shot cohesion, then protects the value and saturation hierarchy needed for play."
ask: "Does the grade preserve material colour and value hierarchy while setting the intended mood?"
cues:
  - "A shared tint connects sky, ground and foliage"
  - "Neutral surfaces stay neutral enough to read as material"
  - "A LUT shifts mood without erasing the dark and light groups"
trouble: "An over-strong grade washes out value structure, pushes foliage into neon colour or makes all shadows the same hue."
at: [0.8, 0.35, 0]
links:
  - {to: tone-mapping, rel: controls}
  - {to: color-palette, rel: see also}
sources:
  - work: bart-wronski-designing-next-generation-post-effects
    page: "Whole pipeline overview"
    quote: "It combined not only bloom, half-resolution blurs and sharp image, but also performed tone-mapping operator, 3D texture color correction and other ALU texture operations"
  - work: epic-games-post-process-materials
    page: "Post Processing Graph"
    quote: "Whenever possible, such as for color correction or adjustments, bloom, depth of field, and various other effects, you should use the settings inherent to the Post Process Volume"
---
