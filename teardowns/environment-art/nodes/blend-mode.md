---
term: Blend mode
aka:
  - additive opacity
  - additive blending
  - transparency mode
  - layer blending
kind: knob
plain: "A blend mode says how a translucent layer, such as a decal, overlay or effect card, combines with the surface below at its opacity."
does: "Decides whether a mark lightens, darkens or covers the ground, and so the value it ends at over each ground."
ask: "At this opacity, should the mark lighten, darken or cover the ground?"
cues:
  - "A translucent mark leaves the ground visible through its edge"
  - "Additive marks lift the value and clip at white"
  - "Multiply marks lower the value and read as shadows"
  - "Normal alpha settles between the layer and the ground"
range: "The plot uses a linear-light mid-grey ground G = 0.184 (L* = 49.98) and a linear-light light-grey layer S = 0.5 (L* = 76.07). For opacity a, Alpha is (1-a)G+aS, Additive is clamp(G+aS, 0, 1), and Multiply is (1-a)G+a(GS). Each result is converted to L* with the CIE formula."
trouble: "Two overlays at close opacities can end at nearly the same lightness. Additive layers wash out on a light ground, while multiply marks can read as shadows instead of material marks."
unverified: "The visual threshold at which close-opacity overlays appear indistinguishable depends on display and context; the opened standard defines equations, not a perceptual threshold."
at: [0.18, 0.07, 0.22]
links:
  - {to: gameplay-readability, rel: see also}
  - {to: value-structure, rel: see also}
variants:
  - label: Blend mode
    items:
      - id: alpha-normal
        name: Alpha (normal)
        plain: "The source-over alpha equation mixes the layer colour toward the ground as opacity falls."
        sources:
          - work: w3c-compositing-and-blending
            url: https://drafts.fxtf.org/compositing-1/
            page: "9.1.4 Source Over"
            quote: "Source is placed over the destination. Fa = 1; Fb = 1 − αs co = αs x Cs + αb x Cb x (1 − αs)"
      - id: additive
        name: Additive
        plain: "The Lighter or plus operation adds the source and destination colours, so it can only lift the result."
        sources:
          - work: w3c-compositing-and-blending
            url: https://drafts.fxtf.org/compositing-1/
            page: "9.1.13 Lighter"
            quote: "Display the sum of the source image and destination image. It is defined in the Porter Duff paper as the plus operator"
          - work: w3c-compositing-and-blending
            url: https://drafts.fxtf.org/compositing-1/
            page: "9.1.13 Lighter"
            quote: "Fa = 1; Fb = 1 co = αs x Cs + αb x Cb"
      - id: multiply
        name: Multiply
        plain: "Multiply multiplies source and destination colours, so the result is never lighter than either one."
        sources:
          - work: w3c-compositing-and-blending
            url: https://drafts.fxtf.org/compositing-1/
            page: "10.1.2 multiply blend mode"
            quote: "The source color is multiplied by the destination color and replaces the destination. The resultant color is always at least as dark as either the source or destination color."
          - work: w3c-compositing-and-blending
            url: https://drafts.fxtf.org/compositing-1/
            page: "10.1.2 multiply blend mode"
            quote: "B(Cb, Cs) = Cb x Cs"
sources:
  - work: w3c-compositing-and-blending
    url: https://drafts.fxtf.org/compositing-1/
    page: "10 Blending"
    quote: "Blending is the aspect of compositing that calculates the mixing of colors where the source element and backdrop overlap."
  - work: w3c-compositing-and-blending
    url: https://drafts.fxtf.org/compositing-1/
    page: "10 Blending"
    quote: "The result of the mixing formula must be clamped to the minimum and maximum values of the color range."
---
