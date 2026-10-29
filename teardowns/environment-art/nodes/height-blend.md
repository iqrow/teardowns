---
term: Height blend
aka:
  - height-based blending
  - height-aware transition
kind: knob
plain: "Height blend uses the height maps of two terrain materials to place their transition. A raised grain can stay on top while a lower material fills gaps."
does: "Makes a material boundary read as two surfaces meeting, instead of a broad colour wash."
ask: "Which material should sit proud, which should fill the gaps, and how narrow should the transition be?"
cues:
  - "Rock grains break the edge of a dirt patch"
  - "The transition has small occlusion pockets instead of a soft halo"
  - "A raised layer keeps its relief while the lower layer appears between it"
range: "Height maps and blend weights set the transition."
trouble: "The edge looks soft or airbrushed, relief disappears at the boundary, or a dark ring forms where the masks overlap."
at: [0.28, 0.095, 0.42]
links:
  - {to: terrain-layers, rel: controls}
  - {to: roughness, rel: see also}
sources:
  - work: epic-games-landscape-materials
    page: Landscape Layer Blend Types
    quote: "This is the same as LB Weight Blend, but also adds detail to the transition between layers based on a height map."
  - work: epic-games-landscape-materials
    page: Landscape Layer Blend Types
    quote: "For example, you can have dirt appear in the gaps between rocks at the layer transition point, instead of just smoothly blending between rock and dirt."
---
