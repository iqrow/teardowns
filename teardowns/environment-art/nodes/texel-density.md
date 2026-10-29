---
term: Texel density
aka:
  - pixels per metre
  - texture resolution per unit
  - texture scale
kind: measure
plain: "Texel density is the amount of texture resolution covering a unit of world surface. Artists compare it across assets so detail scale stays deliberate."
does: "Keeps a path, wall, rock and foliage asset at a coherent texture scale for the camera and platform."
ask: "How many texels cover one world unit here, and does that match nearby surfaces and the current camera?"
cues:
  - "A ruler beside a tiled surface"
  - "Texture grain stays similar in size across adjoining assets"
  - "A density check catches blurred gravel or over-sharp paving"
range: "Choose one pixels-per-metre target per asset group, so that at the closest camera distance a texel is about the size of a screen pixel. Lower it for groups the player never approaches, such as backdrops."
trouble: "Gravel becomes a blurry smear beside crisp paving, or nearby assets have visibly different detail scale."
at: [0.8, 0.3, 0.55]
links:
  - {to: game-environment, rel: see also}
  - {to: normal-map, rel: see also}
sources:
  - work: leonardo-iezzi-texel-density
    page: "Texel density / pixel ratio"
    quote: "TEXEL DENSITY IS THE AMOUNT OF TEXTURE RESOLUTION ON A MESH"
  - work: leonardo-iezzi-texel-density
    page: "Why is TD so important"
    quote: "CHOOSING A TD AVOID ARTISTS PRODUCE OVER-DETAILED ASSETS IN AN ENVIRONMENT WHERE THE OTHER ASSETS ARE NOT THE SAME SCALE AND/OR QUALITY."
  - work: leonardo-iezzi-texel-density
    page: "Choose the right texel density"
    quote: "IDEALLY YOU WANT THE TEXELS (PIXELS ON THE MODEL ITSELF) TO BE ABOUT THE SAME SIZE AS YOUR SCREEN PIXELS"
  - work: leonardo-iezzi-texel-density
    page: "Exceptions"
    quote: "ALSO IN THE ENVIRONMENT IT'S OKAY TO SET A LOWER TD FOR THINGS THAT THE PLAYER USUALLY WILL NOT GET CLOSE OR SEE"
  - work: sidefx-labs-texel-density
    page: Labs Texel Density geometry node
    quote: "Ensuring correct texeldensity of an asset makes sure your scene has a uniform level of detail in the materials, and helps optimizing a project by finding assets with textures that are too high resolution."
---
