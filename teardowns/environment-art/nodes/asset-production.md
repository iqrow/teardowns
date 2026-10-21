---
term: Asset production
aka:
  - making the assets
  - modelling and texturing
  - proxies
  - final assets
  - asset list
kind: process
plain: "Making the models and textures a scene needs, from an asset list: rough proxies first, then final assets. Each asset comes from one of a few workflows: sculpted and baked, scanned, built from a procedural graph, or painted by hand."
does: "Turns the plan (blockout, paintover, look development) into the pieces that build and dress the world, at a cost the budget allows."
ask: "Which assets does this scene need, at what quality, and which workflow gives that look for the least work?"
trouble: "Days spent on an asset the player never looks at; modular sets that bloat with near-duplicate pieces."
links:
  - {to: modular-kit, rel: see also}
  - {to: hero-asset, rel: see also}
  - {to: performance-budget, rel: measured by}
variants:
  - label: Asset workflow
    items:
      - id: sculpt-and-bake
        name: Sculpt and bake
        plain: "Transfer detail from a high-resolution model onto a lighter game model."
        why: "The fine detail lives in textures transferred from a heavier model, whatever tool made the sculpt."
        sources:
          - work: polycount-wiki
            url: http://wiki.polycount.com/wiki/Texture_Baking
            page: Texture Baking
            quote: "Texture baking is the process of transferring details from one model to another."
          - work: polycount-wiki
            url: http://wiki.polycount.com/wiki/Texture_Baking
            page: Texture Baking
            quote: "casts rays inwards towards another model (usually a high-resolution sculpt)"
      - id: photogrammetry
        name: Photogrammetry (scan)
        plain: "Author a digital asset from many photos of a real object or surface, then remove the light the photos caught from generated textures."
        why: "Shape and colour come from photos of a real thing, whatever the subject."
        sources:
          - work: sebastien-lachambre-unity-photogrammetry-workflow
            page: "1.1 Introduction: What is photogrammetry?"
            quote: "Photogrammetry is the process of authoring a digital asset using multiple photos of the original real-world object."
          - work: sebastien-lachambre-unity-photogrammetry-workflow
            page: "1.2 Game photogrammetry workflow overview: Processing"
            quote: "To be able to have an asset work in any lighting condition, it is required to remove the lighting (light removal step, a step also know as de-lighting) information baked into generated textures."
      - id: procedural-material
        name: Procedural material
        plain: "Build textures and materials from a parameterised node graph. Connected outputs recalculate when a mask or slider changes."
        why: "The texture is computed from rules and parameters, whatever it depicts."
        sources:
          - work: adobe-substance-3d-designer-user-guide
            url: https://experienceleague.adobe.com/en/docs/substance-3d-designer/using/getting-started/overview/overview
            page: Overview
            quote: "Substance 3D Designer is an application intended for creating 2D textures, materials and filters in a node-based interface, with a heavy focus on procedural generation, parameterization and non-destructive workflows."
          - work: adobe-substance-3d-designer-user-guide
            url: https://experienceleague.adobe.com/en/docs/substance-3d-designer/using/getting-started/overview/overview
            page: "Overview: Workflow"
            quote: "Edit one mask or slider, and automatically any connected output is re-calculated. No more need to separately author maps such as base color, roughness, normal, etc."
      - id: hand-painted
        name: Hand-painted
        plain: "Paint the texture by hand, often as a colour map only, with shading, highlights and material cues painted in for one light direction."
        why: "Light and material response are painted into the colour map, whatever the art style or subject."
        sources:
          - work: jonathan-cuevas-hand-painted-texturing-workflow
            page: Hand-Painted Textures
            quote: "This implies that one has to fake all the texture maps usually present in a PBR environment using only one texture map"
          - work: jonathan-cuevas-hand-painted-texturing-workflow
            page: Hand-Painted Textures
            quote: "The next step is to start painting the texture, giving gradients to the flat colors and details, always keeping in mind where the light is coming from."
sources:
  - work: robert-yang-the-level-design-book
    url: https://book.leveldesignbook.com/process/env-art
    page: Asset list
    quote: "Before making environment art, you may need to make an asset list, a list of all the art assets needed for a particular scene or level."
  - work: daniel-mcgowan-stages-environment-art
    page: Proxy Phase
    quote: "A good proxy focuses on silhouette, accurate proportions and clear material groupings."
  - work: daniel-mcgowan-stages-environment-art
    page: Proxy Phase
    quote: "doing proxies allows the team to start tracking how many assets they will need to take to final and stop modular sets from bloating up too big."
  - work: daniel-mcgowan-stages-environment-art
    page: Final Assets
    quote: "Spending 3 days on a barrel that the players will never interact with or look at just isn't practical in a production environment."
deeper: "Each workflow's own steps: retopology, UV layout, baking, de-lighting, trim sheets, texture sets and import settings."
---
