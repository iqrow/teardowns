---
term: Exposure value (EV100)
aka:
  - EV
  - stops
kind: measure
plain: "EV100 is a logarithmic camera-exposure measure that combines aperture, shutter speed and ISO into one stop-based scale."
does: "Gives fixed exposure, limits and compensation a common language where each stop is a multiplicative brightness step."
ask: "What EV100 should the camera hold here, and what luminance range may automatic exposure reach?"
cues:
  - "An exposure readout shows a signed EV100 value beside the scene histogram"
  - "A one-stop dial move visibly doubles or halves the scene brightness"
range: "EV100 = log2(Aperture² / Shutter Speed × 100 / ISO); use min and max EV100 to bound automatic adaptation."
trouble: "A linear brightness slider makes equal knob moves look unequal, or a fixed EV100 disagrees with the physical light units used by the scene."
sources:
  - work: epic-games-auto-exposure
    page: "Manual Algorithm"
    quote: "EV100 = log2(Aperture^2 / Shutter Speed * 100/ISO)"
  - work: epic-games-auto-exposure
    page: "Extend Default Luminance Range for EV100"
    quote: "This means that you can use correct lux values for lights in your scene and have them respected by auto exposure without causing the image to be blown out."
---
