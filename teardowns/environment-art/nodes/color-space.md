---
term: Colour space (linear and sRGB)
aka:
  - linear and sRGB
  - linear workflow
  - gamma correction
  - sRGB texture
kind: knob
plain: "A colour space says how RGB numbers map to light and display. This knob chooses sRGB encoding for display colours or linear RGB for calculations."
does: "Keeps lighting, blends and value readings in the space their equations expect."
ask: "Which inputs are display colours, and which inputs are data that must stay linear?"
cues:
  - "An sRGB texture setting sits beside a colour texture"
  - "Encoded and linear swatch ramps show different numbers for the same displayed colour"
  - "Normal, roughness, metalness and mask maps bypass colour conversion"
range: "Colour textures and hex colours use sRGB-encoded values for display. Lighting, blending and measurement use linear values. Normal, roughness, metalness and mask maps stay linear."
trouble: "Using encoded values as if they were linear makes shading too dark or washed out, creates dark fringes in blends and skews value readings."
at: [-0.55, 0.28, -0.5]
links:
  - {to: albedo, rel: see also}
  - {to: tone-mapping, rel: see also}
  - {to: lightness, rel: see also}
unverified: "The opened references name masks and normal maps as linear data, but do not name roughness and metalness explicitly or use the exact symptom words 'washed out' and 'dark fringes'."
sources:
  - work: hubert-nguyen-gpu-gems-3
    url: https://developer.nvidia.com/gpugems/gpugems3/part-iv-image-effects/chapter-24-importance-being-linear
    page: "24.2.3 Monitors Are Nonlinear, Renderers Are Linear"
    quote: "Renderers, shaders, and compositors like to operate with linear data."
  - work: hubert-nguyen-gpu-gems-3
    url: https://developer.nvidia.com/gpugems/gpugems3/part-iv-image-effects/chapter-24-importance-being-linear
    page: "24.4.1 Input Images"
    quote: "Any input textures that are already gamma-corrected need to be brought back to a linear color space before they can be used for shading or compositing."
  - work: hubert-nguyen-gpu-gems-3
    url: https://developer.nvidia.com/gpugems/gpugems3/part-iv-image-effects/chapter-24-importance-being-linear
    page: "24.4.1 Input Images"
    quote: "Alpha channels, normal maps, displacement values (and so on) are almost certainly already linear and should not be corrected further, nor should any textures that you were careful to paint or capture in a linear fashion."
  - work: unity-linear-textures
    page: "Linear authored Textures"
    quote: "lookup Textures, masks, and other textures with RGB values that mean something specific and have no gamma correction applied to them bypass sRGB sampling."
  - work: w3c-css-color-4
    page: "Specifying sRGB colors"
    quote: "CSS provides several methods of directly specifying an sRGB color: hex colors, rgb()/rgba() color functions"
  - work: w3c-css-color-4
    page: "Mixing colors"
    quote: "the CIE XYZ, display-p3-linear or srgb-linear color spaces are appropriate, because they are linear in light intensity."
  - work: w3c-css-color-4
    page: "Predefined sRGB Color Space"
    quote: "c is the gamma-encoded red, green or blue component. cl is the corresponding linear-light component."
---
