---
term: Paintover
aka:
  - paint-over
  - painting over a screenshot
  - overpaint
  - concept over the blockout
  - target image
kind: process
pattern: pattern-set-point
plain: "A painting made on top of a screenshot of the game scene to show what the next version should look like. Artists often paint over a blockout to plan an art pass."
does: "Helps plan the art pass in the real layout and camera. It also carries feedback: suggested edits, corrections and notes."
ask: "What does this exact view need to look right, and what can stay simple?"
links:
  - {to: blockout, rel: made from}
  - {to: reference, rel: see also}
variants:
  - label: Paintover method
    items:
      - id: painted-by-hand
        name: Painted by hand
        plain: An artist paints directly over a game capture, changing the scene while keeping its perspective.
        sources:
          - work: robert-yang-the-level-design-book
            url: https://book.leveldesignbook.com/process/env-art
            page: Paintovers
            quote: 'A paintover is a type of concept art that starts with a 3D screenshot and then an artist literally "paints over" the underlying screenshot to visualize the next version.'
      - id: photobash
        name: Photobash
        plain: A paintover method that uses photographs as source material, modifying them to fit the composition.
        sources:
          - work: gaelle-seguillon-creating-imaginary-world
            page: "04. Deciding on your tools"
            quote: "To get going here, I modified the photos that I had to hand to match the initial composition sketch I’d made."
      - id: structure-conditioned-generation
        name: Structure-conditioned generation
        plain: "A diffusion model can be conditioned on an edge or depth map, preserving input detail while changing the image's surface style."
        sources:
          - work: lllyasviel-controlnet
            page: README
            quote: "ControlNet is a neural network structure to control diffusion models by adding extra conditions."
          - work: lllyasviel-controlnet
            page: README
            quote: "The soft HED Boundary will preserve many details in input images, making this app suitable for recoloring and stylizing."
          - work: lllyasviel-controlnet
            page: README
            quote: "In this mode, the ControlNet encoder will try best to recognize the content of the input control map, like depth map, edge map, scribbles, etc, even if you remove all prompts."
sources:
  - work: robert-yang-the-level-design-book
    url: https://book.leveldesignbook.com/process/env-art
    page: Paintovers
    quote: 'A paintover is a type of concept art that starts with a 3D screenshot and then an artist literally "paints over" the underlying screenshot to visualize the next version.'
  - work: robert-yang-the-level-design-book
    url: https://book.leveldesignbook.com/process/env-art
    page: Paintovers
    quote: "It is very common to paintover a blockout screenshot to plan an art pass. This workflow saves a lot of time because the artist doesn't have to manually draft the perspective calculations for basic shapes."
  - work: robert-yang-the-level-design-book
    url: https://book.leveldesignbook.com/process/env-art
    page: Paintovers
    quote: "usually the paintover is about providing direct feedback between artists: suggested edits, corrections, and notes"
deeper: "Colour and lighting keys painted over the same view, and paintover sets for each biome or time of day."
---
