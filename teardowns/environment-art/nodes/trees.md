---
term: Trees
aka:
  - shrubs
  - canopy
  - woody vegetation
kind: part
plain: "Trees and shrubs combine a trunk or primary branches with leaf masses that keep their volume across distance. Their shape, canopy gaps and LODs carry the vegetation silhouette above the ground cover."
does: "Sets the horizon scale and provides shade, landmarks and larger masses that make a field feel like a place."
ask: "What must remain in the silhouette at this distance, and when can branches or leaves become a simpler representation?"
cues:
  - "Trunks and primary branches keep a stable structural silhouette"
  - "Canopy gaps vary instead of forming a solid green ball"
  - "Distant trees preserve volume with fewer leaf shapes"
  - "Shrubs and exposed roots meet the ground cover"
trouble: "Trees pop between LODs, canopies become flat cards from the wrong angle, or every tree has the same crown and spacing."
at: [0.82, 0.62, -0.62]
links:
  - {to: scatter, rel: made by}
  - {to: foliage-shading, rel: controls}
  - {to: wind, rel: controls}
sources:
  - work: david-whatley-virtual-botany
    page: 1.4, The Tree and Shrub Layers
    quote: "The trunk and primary branches of a tree should be modeled as 3D meshes. Secondary branches can be simulated with billboards to add visual complexity."
  - work: david-whatley-virtual-botany
    page: 1.4, The Tree and Shrub Layers
    quote: "As a tree recedes into the distance, larger but fewer leaf clump billboards can be used."
---
