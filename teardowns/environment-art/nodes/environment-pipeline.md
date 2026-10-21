---
term: Environment art pipeline
aka:
  - art pass
  - production pipeline
  - greybox to final
  - how a level gets made
  - iteration
kind: loop
plain: "The stages an environment goes through: reference, a grey blockout, a paintover, look development, asset production, set dressing and lighting. Teams repeat the stages as art passes, and each pass builds on a review of the last."
does: "Lets the team change the cheap things (layout, big shapes, palette, mood) before it pays for the expensive things (final assets and polish)."
ask: "Which pass is this scene in, and what should stay rough until the next one?"
trouble: "One asset polished to final while the scene around it still does not work; finished art thrown away because the layout changed under it."
children: [blockout, paintover, look-development, asset-production, performance-budget]
loop:
  type: cycle
  through: [reference, blockout, paintover, look-development, asset-production, set-dressing, lighting]
sources:
  - work: daniel-mcgowan-stages-environment-art
    page: Environment Production Pipeline
    quote: "Although there is a huge variety of genres and engines, there are usually a few steps in the process that are similar to most projects."
  - work: daniel-mcgowan-stages-environment-art
    page: Lighting
    quote: "The lighting artists are typically doing passes throughout the entire process, reacting to feedback, or refining and adjusting based on textures and materials as they come online."
  - work: robert-yang-the-level-design-book
    url: https://book.leveldesignbook.com/process/env-art
    page: How to art pass
    quote: "WORK ITERATIVELY in stages, don't try to make the 100% final version of every asset."
  - work: robert-yang-the-level-design-book
    url: https://book.leveldesignbook.com/process/blockout
    page: Why build a blockout?
    quote: 'It is "cheap" to delete or rebuild some rough blockout geometry, but throwing away finalized art passed work is "expensive" and wasteful.'
---
