---
term: Game environment
aka:
  - game world
  - level environment
kind: product
plain: A real time game world where ground, structures, props, foliage, light and atmosphere work together on screen. Its art must carry a chosen visual style while keeping play and place clear.
ask: What does the player need to read here, and what visual decisions make the world feel like one place?
children:
  - art-direction
  - environment-pipeline
  - surface-materials
  - terrain
  - props-and-structures
  - foliage
  - lighting
  - atmosphere-and-post
  - composition-and-readability
cues:
  - Ground, paths, terrain, structures and foliage form one continuous scene
  - Light, shadow and haze separate near and far forms
  - Walkable space remains legible among visual detail
variants:
  - label: Style
    items:
      - id: photoreal
        name: Photoreal
        plain: Materials, colour and form aim to resemble photographed reality.
        why: The shared feature is a realistic environment appearance; the subject or setting is not the reason it is photoreal.
        tint:
          ground: '#6f7b55'
          path: '#9f8f70'
          hill: '#526d45'
          house: '#b9b5a6'
          roof: '#605b58'
          grass: '#72865b'
          sun: '#fff0bd'
          haze: '#c5d3dc'
        sources:
          - work: andrzej-poznanski-visual-revolution-vanishing-ethan-carter
            page: Photogrammetry
            quote: "In The Vanishing of Ethan Carter, you’ll see some of the most realistic environment pieces ever created for a video game."
      - id: stylised-pbr
        name: Stylised PBR
        plain: Physically based light response is kept while forms, colour and detail are deliberately designed.
        why: Every asset shares physically accurate material values and lighting with simplified forms and textures; the genre or camera is not the reason it is stylised PBR.
        tint:
          ground: '#668b48'
          path: '#c2a36f'
          hill: '#547c3a'
          house: '#dfcda6'
          roof: '#a55d42'
          grass: '#8eaf50'
          sun: '#ffd37a'
          haze: '#c9e0e5'
        sources:
          - work: brandon-hope-physically-based-rendering-and-stylization
            page: Stylization
            quote: "Even if the textures and models are simplified and styled, they look even better with physically accurate material values and lighting."
      - id: hand-painted
        name: Hand-painted
        plain: Colour and material variation are authored as visible painted shapes rather than derived only from photo capture.
        why: Every asset shares designed colour planes and brush shaped variation; the subject or brush motif is not the reason it is hand-painted.
        tint:
          ground: '#758d4a'
          path: '#b99262'
          hill: '#5f8040'
          house: '#d8c19a'
          roof: '#a85a43'
          grass: '#9db653'
          sun: '#f7c86d'
          haze: '#d3e2df'
        sources:
          - work: jonathan-cuevas-hand-painted-texturing-workflow
            page: Hand-Painted Textures
            quote: "I usually don't do high poly, though, because I prefer to paint directly on the low poly mesh using a combination of Substance Painter and Photoshop."
          - work: jonathan-cuevas-hand-painted-texturing-workflow
            page: Hand-Painted Textures
            quote: "The next step is to start painting the texture, giving gradients to the flat colors and details, always keeping in mind where the light is coming from."
      - id: miniature-diorama
        name: Miniature or diorama
        plain: The world is a small, compact model seen from above, where the player can see everything at once. Blur that varies with depth can add to the impression of a model.
        why: Every instance shares a compact world seen whole, as a model is seen; a toy subject is not the reason.
        tint:
          ground: '#78945a'
          path: '#c2a37a'
          hill: '#6d8d53'
          house: '#e0cda8'
          roof: '#b96b4b'
          grass: '#9ab66c'
          sun: '#ffe09b'
          haze: '#d7e6e3'
        sources:
          - work: oskar-stalberg-bad-north-interview
            page: Postman cat
            quote: "Small diorama-like environments have been a thread throughout all my art for quite some time"
          - work: oskar-stalberg-bad-north-interview
            page: Postman cat
            quote: "So I have always been attracted to these little compact little worlds where you can see everything at once."
          - work: held-using-blur-perceived-distance-size
            page: 1. Introduction
            quote: "The opposite effect is created in a photographic manipulation known as the tilt-shift effect: A full-size scene is made to look smaller by adding blur with either a special lens or postprocessing software tools."
      - id: toon-cel
        name: Toon or cel
        plain: The scene uses designed silhouettes and discrete light bands instead of continuous shading.
        why: Every asset shares a flat silhouette and stepped tonal bands; a character or cartoon subject is not the reason it is toon or cel.
        tint:
          ground: '#6b9346'
          path: '#c7a76f'
          hill: '#50763b'
          house: '#e7d1a1'
          roof: '#a4483e'
          grass: '#91b853'
          sun: '#ffe08b'
          haze: '#c7e4e8'
        sources:
          - work: unity-technologies-unity-toon-shader-getting-started
            page: Creating a new material and applying Unity Toon Shader
            quote: "Once assigned, the model will render as a flat silhouette until you provide the texture maps that define the cel-shaded look."
          - work: unity-technologies-unity-toon-shader-getting-started
            page: Setting up three basic colors
            quote: "Lower values create graphic, posterized shading, while higher values blend the regions."
      - id: low-poly-flat
        name: Low poly or flat
        plain: Flat-shaded planes and simple materials carry the form at the chosen viewing distance.
        why: Every asset shares flat shading and simple material blocks; polygon count alone is not the reason it is low poly or flat.
        tint:
          ground: '#6f8c49'
          path: '#b9a06e'
          hill: '#587f41'
          house: '#d9c8a5'
          roof: '#9c5d45'
          grass: '#86a848'
          sun: '#f8ce78'
          haze: '#c5dce3'
        sources:
          - work: pontus-albrecht-how-to-make-low-poly-look-good
            page: What is low poly?
            quote: "In this article however, we will be focusing on the \"flat shaded\" unsmoothed, minimalistic look, which has gotten a lot of traction lately, especially within the indie gamedev scene."
          - work: pontus-albrecht-how-to-make-low-poly-look-good
            page: Materials
            quote: "I try to keep textures to a very minimum. In fact, I prefer to only use flat colors, and create the complexity with lighting."
  - label: Camera
    items:
      - id: ground-level
        name: Ground level
        plain: A first or third person view close to the player.
        why: The closer the camera is to an asset, the higher its texel density should be.
        sources:
          - work: maxon-texel-density
            page: Texel density
            quote: "In general, the closer the camera is to the asset, the higher the Texel Density should be."
      - id: top-down
        name: Top-down
        plain: A high view that looks down on the action, used for strategy, tactics and city building.
        why: A top-down camera is farther from assets, so it can use lower texel density than a close camera.
        sources:
          - work: maxon-texel-density
            page: Texel density
            quote: "In general, the closer the camera is to the asset, the higher the Texel Density should be."
          - work: maxon-texel-density
            page: Texel density
            quote: "Top Down (games from which you look at the action from above): e.g. 2.56 or smaller."
      - id: fixed-isometric
        name: Fixed isometric
        plain: A locked oblique view that keeps a stable relationship between top, front and side planes.
        why: Detail can look simple in a zoomed-out blockout, but a close in-game isometric camera needs more detail.
        sources:
          - work: paul-fish-how-isometric-environments-are-made
            page: Isometric scenes
            quote: "With these isometric scenes it is sometimes easy to look at a zoomed-out design blockout or concept art and see things in simplified terms, but once you see how close the camera is in-game, you start to realize how much detail will be needed."
sources:
  - work: riot-games-environment-art
    page: "Episode 4: Environment Art"
    quote: "Usually working directly with the game designers, environment artists dedicate huge amounts of thought and planning to creating environments that clearly communicate gameplay."
  - work: robert-yang-the-level-design-book
    page: Environment Art
    url: https://book.leveldesignbook.com/process/env-art
    quote: "Environment art (or \"env art\") is the cosmetic decoration of a level or game world, while preserving its core functionality and gameplay."
---
