---
term: Grass clump
aka:
  - tuft
  - grass card cluster
  - blade clump
kind: part
plain: "A grass clump is a designed unit of blades or cards with a readable silhouette, root area, height and lean. Variation between clumps makes a population feel like plants rather than repeated stickers."
does: "Provides the close and middle-distance shape that makes ground cover legible while keeping each instance cheap enough to repeat."
ask: "Does the clump have a believable root, silhouette and lean, and does it vary from its neighbours at this scale?"
cues:
  - "The silhouette has several blade heights and lean directions"
  - "The base is wider or darker where blades meet the ground"
  - "Nearby clumps vary in width, colour and height"
  - "The clump keeps a readable shape as the camera moves"
trouble: "Clumps look stuck on, have identical silhouettes, are too sparse to join, or their roots do not match the ground colour."
at: [-0.9, 0.31, 0.82]
pattern: pattern-detail-scales
links:
  - {to: cohesion, rel: see also}
  - {to: foliage-color, rel: controls}
  - {to: wind, rel: controls}
sources:
  - work: randima-fernando-gpu-gems
    url: https://developer.nvidia.com/gpugems/gpugems2/part-i-geometric-complexity/chapter-1-toward-photorealism-virtual-botany
    page: 1.2, The Grass Layer
    quote: "Obviously, drawing each grass blade is out of the question. But we can create such an illusion with clumps of grass, which are best represented by camera-facing quads with a suitable grass texture."
  - work: unity-terrain-grass-details
    page: Add Detail Mesh
    quote: "The Min Width, Max Width, Min Height, and Max Height values specify the upper and lower scalings along the X and Y axes with which the meshes are randomly generated."
  - work: andy-leaning-static-grass
    page: A master class in static grass
    quote: "To start with, a basic greening from mainly short fibres is laid. He uses a length of predominantly 2mm but is interspersed with fibres with a length of 1 and 4.5 mm to vary the look."
variants:
  - label: Grass technique
    items:
      - id: grass-alpha-cards
        name: Alpha cards
        plain: "Camera-facing textured quads or small card clusters carry the blade silhouette in an alpha texture."
        why: "The technique is a textured card representation. A painterly or realistic style can use the same card technique."
        sources:
          - work: david-whatley-virtual-botany
            page: 1.2, The Grass Layer
            quote: "we can create such an illusion with clumps of grass, which are best represented by camera-facing quads with a suitable grass texture."
      - id: grass-blade-geometry
        name: Blade geometry
        plain: "Grass mesh geometry carries the blade form and can move in the vertex stage."
        why: "The technique uses geometry for the blade shape. A dense field is a placement choice, not the technique name."
        sources:
          - work: randima-fernando-gpu-gems
            url: https://developer.nvidia.com/gpugems/gpugems2/part-i-geometric-complexity/chapter-1-toward-photorealism-virtual-botany
            page: 1.2, The Grass Layer
            quote: "For each clump of grass (or billboard) we plant, we write its positions into the vertex buffer and update the index buffer accordingly."
          - work: unity-terrain-grass-details
            page: Grass and other details
            quote: "Unity treats these meshes as grass so they always have up-facing normals and move in the wind."
      - id: grass-sculpted-clump-meshes
        name: Sculpted clump meshes
        plain: "A complete tuft is modelled as a small mesh with a designed mass and root shape."
        why: "The technique is a purpose-built clump mesh. The number of blades visible in the final frame is not the defining feature."
        sources:
          - work: unity-terrain-grass-details
            page: Grass and other details
            quote: "Unity renders these objects using textured quads or full meshes, depending on the level of detail and performance you require."
          - work: epic-games-grass-quick-start
            page: Grass Tool Actor Creation and Setup
            quote: "With the Static Mesh added we need to set the following properties to ensure that we are spawning enough grass mesh and that those meshes are randomly rotated and aligned to the Landscape terrain."
      - id: grass-shell-texturing
        name: Shell texturing
        plain: "Several offset layers around the ground surface build a volumetric grass shell from repeated depth slices."
        why: "The technique is stacked surface shells. The colour or species of grass does not define shell texturing."
        sources:
          - work: lengyel-real-time-fur-shells
            page: Abstract
            quote: "At runtime, the patches of volume textures are rendered as a series of concentric shells of semi-transparent medium."
  - label: Model-scenery grass
    items:
      - id: model-static-grass
        name: Static grass
        plain: "Grass fibres are applied into glue spots on a miniature ground surface."
        why: "The method is upright loose fibre applied to a glued base. A digital grass card is a different technique even if it has the same colour."
        sources:
          - work: andy-leaning-static-grass
            page: A master class in static grass
            quote: "To this, PVA is dabbed around using a size 1 or 0 brush. Slopes tend to be dry and rarely mown so a mix of beige and brown fibres with a length of up to 6 mm is then placed into these glue spots."
      - id: model-grass-tufts
        name: Grass tufts
        plain: "Small pre-made tufts are placed as separate clumps with varied height and direction."
        why: "The method is a discrete tuft unit. A continuous flocked field has a different placement and silhouette."
        sources:
          - work: the-mini-primer-grass-tufts
            page: At a Glance
            quote: "Tufts are pre-formed clumps you glue on directly."
      - id: model-flock-foam
        name: Flock or foam
        plain: "Fine coloured particles or foam supply low, broad ground cover and texture."
        why: "The method is a loose particle cover. A tall fibre stand is static grass even when both sit on glue."
        sources:
          - work: kathy-millatt-starting-scenery
            page: Materials, Ground foam
            quote: "Ground foam - this is exactly what it says - finely ground foam - but comes in a range of colours from earth to green. I use it in all my scenery to add texture or vegetation."
      - id: model-field-grass
        name: Field grass
        plain: "A layered miniature field mixes short base cover with longer fibres and varied heights."
        why: "The method is a layered field treatment. The particular crop or season changes the surface colour, not the method."
        sources:
          - work: andy-leaning-static-grass
            page: A master class in static grass
            quote: "To start with, a basic greening from mainly short fibres is laid. He uses a length of predominantly 2mm but is interspersed with fibres with a length of 1 and 4.5 mm to vary the look."
---
