---
term: Landform
aka:
  - terrain shape
  - heightfield
  - slopes and erosion
kind: part
plain: "The large and medium shape of the ground: heightfields, slopes, banks, ridges and eroded cuts. It is the geometry that materials and plants must follow."
unverified: "The opened pages support heightfields, slope parameters and procedural mountains, but do not directly cover erosion or drainage forms."
does: "Sets elevation, traversal shape and the normals used by terrain shading and placement rules."
ask: "Where does height change, how steep is the surface, and does the form support the path and the view?"
cues:
  - "A rising ridge or shallow hollow changes the ground silhouette"
  - "Slope direction changes the light and material response"
  - "Eroded cuts, banks or ledges interrupt a smooth heightfield"
range: "Heightfield or sculpted mesh; slope masks; procedural mountain forms."
trouble: "Heightmap steps, a table-flat horizon, slopes too steep for the intended traversal, or erosion lines that look stamped on."
at: [-0.85, 0.32, -0.35]
pattern: pattern-detail-scales
links:
  - {to: scatter, rel: controls}
  - {to: terrain-layers, rel: controls}
sources:
  - work: johan-andersson-terrain-rendering-frostbite
    page: ch. 5.2.2, Procedural parameters
    quote: "The height is a bilinear sample of a normalized 16-bit heightfield texture and then scaled by the maximum height of the terrain."
  - work: patricio-gonzalez-vivo-the-book-of-shaders
    url: https://thebookofshaders.com/13/
    page: Fractal Brownian Motion
    quote: "This technique is commonly used to construct procedural landscapes. The self-similarity of the fBM is perfect for mountains"
---
