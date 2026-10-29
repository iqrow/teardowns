---
term: Lightness (L*)
aka:
  - L*
  - CIE lightness
  - perceptual lightness
  - value number
kind: measure
plain: "CIE L* is a perceptual lightness measure. It puts black, middle grey and white on a scale intended to space visible steps evenly."
does: "Gives value structure a scale that can be compared across colours without mistaking hue for lightness."
ask: "How many L* apart are the layers that must read as different?"
cues:
  - "A neutral greyscale ramp runs from black at 0 to white at 100"
  - "A marker sits at a measured L* position on the ramp"
  - "A colour-picker readout shows L* beside a* and b*"
range: "CIE L* runs from 0 (black) to 100 (white). Use relative luminance Y normalised to the reference white. For sRGB, Y = 0.2126 R + 0.7152 G + 0.0722 B after linearising each channel. Above (6/29)^3, L* = 116 Y^(1/3) - 16; below it, L* = 116((841/108)Y + 4/29) - 16."
trouble: "Layers that differ in hue can sit within a few L* and merge in a greyscale check. Reading L* from encoded values without linearising gives the wrong measure."
at: [0, 0, 0]
links:
  - {to: greyscale-check, rel: see also}
  - {to: color-space, rel: see also}
unverified: "The practical L* gap at which layers merge in a greyscale check depends on display, size and context; the opened references do not set a universal gap."
sources:
  - work: cie-eilv-cielab
    page: "e-ILV entry 17-23-076"
    quote: "three-dimensional, approximately uniform colour space produced by plotting in rectangular coordinates L*, a*, b*, quantities defined by the equations"
  - work: cie-eilv-cielab
    page: "CIE 1976 lightness"
    quote: "CIE 1976 lightness L* = 116 f (Y/Yn) − 16 where f (Y/Yn) = (Y/Yn)1/3 if (Y/Yn) > (6/29)3"
  - work: cie-eilv-cielab
    page: "CIE 1976 lightness"
    quote: "f (Y/Yn) = (841/108) (Y/Yn) + 4/29 if (Y/Yn) ≤ (6/29)3"
  - work: w3c-css-color-4
    page: "CIE Lab and LCH"
    quote: "100% means an L value of 100, not 1.0. L=0% or 0 is deep black (no light at all) while L=100% or 100 is a diffuse white."
  - work: w3c-css-color-4
    page: "CIE Lab and LCH"
    quote: "Usefully, L=50% or 50 is mid gray, by design, and equal increments in L are evenly spaced visually: the Lab color space is intended to be perceptually uniform."
  - work: w3c-css-color-4
    page: "CIE Lab and LCH"
    quote: "The a and b axes convey hue"
  - work: w3c-wcag-relative-luminance
    page: "Relative luminance definition"
    quote: "For the sRGB colorspace, the relative luminance of a color is defined as L = 0.2126 × R + 0.7152 × G + 0.0722 × B where R, G and B are defined as:"
  - work: w3c-css-color-4
    page: "Converting Predefined Color Spaces to Lab or Oklab"
    quote: "Convert from gamma-encoded RGB to linear-light RGB (undo gamma encoding)"
---
