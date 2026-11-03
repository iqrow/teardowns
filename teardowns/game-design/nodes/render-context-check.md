---
term: Render-context check
aka: [test it where it plays]
kind: measure
plain: A render-context check reads an encoding in the conditions where a player sees it instead of trusting a palette, mock-up or large design file.
does: Reveals marks that work in isolation but disappear at actual render size, under gameplay lighting or on a different surface.
ask: Does each essential mark remain distinguishable in the render context players use?
cues:
  - The same marker is compared at gameplay size and in a close-up
  - Board, minimap and interface copies remain recognisable under their own lighting and backgrounds
  - A dim or bright scene still leaves the label, outline or pattern visible
range: Actual render size; gameplay lighting; minimaps, boards and interface surfaces; motion and overlays.
trouble: A colour pair passes in a palette tool but merges on the minimap, board or HUD, or vanishes in the scene's lighting.
at: [0.56, -0.28, 0.06]
links:
  - {to: screen-surface, rel: see also}
  - {to: interface-layout, rel: see also}
  - {to: level-readability, rel: see also}
sources:
  - work: masataka-okabe-and-kei-ito-color-universal-design
    page: 3(+1) principles of Color Universal Design
    quote: "Choose color schemes that can be easily identified by people with all types of color vision, in consideration with the actual lighting conditions and usage environment."
  - work: paul-tol-colour-schemes-and-templates
    page: Qualitative colour schemes, diagnostic maps
    quote: "This indicates how well the colours within a scheme are identifiable when all of them are used."
  - work: masataka-okabe-and-kei-ito-color-universal-design
    page: Note when using colorblind proofing systems
    quote: "To achieve optimal Color Universal Design, it is also important not to rely completely on the colorblind proof but also to ask colorblind people to examine your design and give advises."
---
