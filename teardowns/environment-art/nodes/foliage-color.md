---
term: Foliage colour
aka:
  - leaf colour variation
  - vegetation tint
  - green variation
  - grass colour
kind: knob
plain: "Foliage colour is the controlled range of hue, value and saturation across grass, leaves and stems. It includes broad health or season changes and small per-instance shifts."
does: "Keeps foliage varied and tied to the ground while separating species, age, shade and dry edges."
ask: "Which colour family belongs to this ground and light, and how much can a neighbour shift before the population looks noisy?"
cues:
  - "Healthy and dry plants share a family with distinct values"
  - "Near and far foliage does not form one flat green sheet"
  - "Root zones and undersides darken into the ground rather than glow"
trouble: "Every clump is one green, colour variation looks like random confetti, or the roots keep a bright cutout edge against brown soil."
range: "Base tint; per-instance shift; species palette; height or health gradient; root darkening."
at: [-0.28, 0.23, -0.34]
pattern: pattern-breakup
links:
  - {to: albedo, rel: see also}
  - {to: grass-clump, rel: controls}
  - {to: macro-variation, rel: see also}
sources:
  - work: david-whatley-virtual-botany
    page: 1.2.2, Variation
    quote: "This is very useful for tinting a grayscale texture or doing subtle color shifting in the vertex shader"
  - work: david-whatley-virtual-botany
    page: 1.2.2, Variation
    quote: "We have found that Perlin noise works here as well. It is easy, for example, to tint grass from a healthy green to a dying brown to impart broad color variations and break up the repetitiveness of the grass."
---
