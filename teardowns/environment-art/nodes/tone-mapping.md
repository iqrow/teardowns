---
term: Tone mapping
aka:
  - HDR to display
  - tone curve
  - display transform
kind: knob
plain: "Tone mapping maps scene-referred HDR values into a display range. It decides how much highlight headroom, midtone contrast and colour saturation the screen retains."
does: "Keeps bright sky and speculars from clipping while protecting the ground's values and material colour."
ask: "Where does the curve place middle grey, and how does it handle bright ground, sky and speculars?"
cues:
  - "A bright sun rolls into a highlight instead of a square white clip"
  - "Ground midtones remain separated after HDR compression"
  - "Over-bright colours move towards white on a filmic curve"
range: "The plot uses x = scalar linear scene value and y = scalar linear display value. Reinhard uses y=x/(1+x), from Reinhard et al. Equation 3. ACES fitted uses y=saturate((x(2.51x+0.03))/(x(2.43x+0.59)+0.14)), from Narkowicz. PBR Neutral applies the Khronos shader to [x,x,x]."
trouble: "Clipped highlights, grey paper-white ground, over-saturated fire or washed-out value structure show a curve or exposure mismatch."
at: [0, 0.35, 0]
links:
  - {to: color-grading, rel: controls}
  - {to: value-structure, rel: controls}
variants:
  - label: Tone curve
    items:
      - id: reinhard
        name: Reinhard
        plain: "A simple global curve y=x/(1+x) that approaches display white smoothly."
        sources:
          - work: erik-reinhard-photographic-tone-reproduction
            page: "Section 3.1, Equation 3, p. 3"
            quote: "A simple tone mapping operator with these characteristics is given by: L d ( x, y ) = L ( x, y ) 1 + L ( x, y ) . (3) Note that high luminances are scaled by approximately 1 /L , while low luminances are scaled by 1 ."
      - id: aces-fitted
        name: ACES fitted
        plain: "A fitted filmic curve with a shoulder that compresses bright scene values."
        sources:
          - work: krzysztof-narkowicz-aces-filmic-tone-mapping
            page: "Introduction"
            quote: "It also features a carefully crafted filmic curve for displaying HDR images on LDR output devices."
      - id: khronos-pbr-neutral
        name: Khronos PBR Neutral
        plain: "A neutral curve that preserves moderate base colours and compresses bright highlights towards white."
        sources:
          - work: khronos-pbr-neutral-tone-mapper
            url: https://modelviewer.dev/examples/tone-mapping
            page: "PBR Neutral shader"
            quote: "The Khronos PBR Neutral tone mapper is designed to be simple to implement, fast to run, and faithfully reproduce color as much as possible while eliminating HDR artifacts around highlights."
sources:
  - work: erik-reinhard-photographic-tone-reproduction
    page: "Abstract, p. 1"
    quote: "The tone reproduction problem: how should we map measured/simulated scene luminances to display luminances and produce a satisfactory image?"
  - work: krzysztof-narkowicz-aces-filmic-tone-mapping
    page: "Introduction"
    quote: "Careful mapping of HDR values to LDR is an important part of a modern game rendering pipeline."
---
