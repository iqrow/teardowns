---
title: Game environment art
prompt: I want my game's world to look right
root: game-environment
assembly:
  - title: Set the target
    text: Gather reference, write a few pillars, pick a palette and a shape language, and agree how far every asset is stylised.
    adds: [reference, visual-pillars, color-palette, shape-language, cohesion]
    makes: art-direction
  - title: Plan the passes
    text: Block the space out in simple shapes, finish one small area to the target look, then plan asset production, paintovers, the performance budget and the view each pass is compared in, against the last approved version and against the target.
    adds: [blockout, look-development, asset-production, paintover, performance-budget, ab-comparison]
    makes: environment-pipeline
  - title: Make the materials
    text: Author each surface's albedo, roughness, metalness and normal detail at one texel density, and check them under neutral light.
    adds: [albedo, roughness, metalness, normal-map, texel-density]
    makes: surface-materials
  - title: Shape and paint the ground
    text: Shape the landform, paint the material layers, blend them by height, break up tiling with macro variation and decals, and add wear where use and weather would put it.
    adds: [landform, terrain-layers, height-blend, macro-variation, tiling-breakup, decals, wear]
    makes: terrain
  - title: Build and place structures
    text: Assemble modular kits and hero assets, ground each one where it meets the terrain, and dress the scene with props that tell what happened there.
    adds: [modular-kit, hero-asset, grounding, set-dressing, environmental-storytelling]
    makes: props-and-structures
  - title: Grow the foliage
    text: Design the grass clumps and trees, colour them to match the ground, shade and animate them, and scatter them by rules at a density the budget allows.
    adds: [grass-clump, trees, foliage-color, foliage-shading, wind, scatter, scatter-density]
    makes: foliage
  - title: Light the scene
    text: Set the sky and key light, then fill, shadows, bounce, occlusion and volumetric light so the scene shares one light field.
    adds: [key-light, sky, fill-light, shadows, global-illumination, ambient-occlusion, volumetric-light]
    makes: lighting
  - title: Add atmosphere and grade
    text: Add fog and exposure for depth and range, then choose a tone mapper, grade the colour and, where the style wants it, set depth of field.
    adds: [fog, exposure, tone-mapping, color-grading, depth-of-field]
    makes: atmosphere-and-post
  - title: Check the read
    text: Look from the game camera and in greyscale. Group the values, keep detail where the eye should go, keep scale cues consistent, keep the playable layer clear and give the edge of each team's vision a narrow, soft line.
    adds: [value-structure, greyscale-check, detail-hierarchy, focal-point, scale-cues, gameplay-readability, fog-of-war]
    makes: composition-and-readability
  - title: Ship the environment
    text: Join the layers under one art direction, and repeat the passes until the scene matches the target from every camera the game uses.
    adds: [art-direction, environment-pipeline, surface-materials, terrain, props-and-structures, foliage, lighting, atmosphere-and-post, composition-and-readability]
    makes: game-environment
---
An environment artist sees a game world as layers that all answer to one art direction: the shape and materials of the ground, the transitions and wear where materials meet, the plants and props placed on it, and the light and atmosphere over everything. Each surface is described by how it responds to light (its base colour, roughness and fine relief), so one material looks right under any lighting. Detail is planned at three scales, from the large shapes read at a glance to the texture seen up close, and it goes where the eye and the player need it, with quiet areas between. The work runs as repeated passes (blockout, look development, asset production, dressing, lighting, paintover), each checked from the game's own camera, in greyscale and against reference. Style and camera change how far each layer is simplified, not which layers there are.
