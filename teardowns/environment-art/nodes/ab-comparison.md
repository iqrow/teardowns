---
term: A/B comparison
aka:
  - before and after
  - before/after toggle
  - compare view
  - version compare
  - reveal slider
kind: measure
plain: "A review view that shows two versions of the same frame: the last approved version beside a candidate change, or a candidate beside the target. The compare mode shows them in the same place one after the other, on either side of a seam, or next to each other."
does: "Shows whether a change can be seen, where it landed and whether it moved the scene toward the target, before anyone approves it."
ask: "Can I see the change when the two versions swap in place, where did it land, and is the candidate closer to the target or only different from the last round?"
cues:
  - "A key that swaps the whole frame between two versions"
  - "A seam dragged across the frame between the two versions"
  - "Two copies of the same frame next to each other"
  - "Only the changed pixels shown or highlighted"
trouble: "A brief blank or a gradual fade between the versions can hide the change, and so can brief, high-contrast shapes flashed over the frame at the moment of the change. Copies scaled down to fit side by side are hard to compare. The eye adapts to the adjusted version, so the original is forgotten unless the view can return to it."
links:
  - {to: pattern-set-point, rel: see also}
  - {to: paintover, rel: see also}
  - {to: greyscale-check, rel: see also}
variants:
  - label: Compare mode
    items:
      - id: flip
        name: Flip
        plain: "The whole frame swaps between the two versions in place, on a key or a toggle, with no blank or fade between them."
        why: "The change shows up as a jump at the spot that changed, which draws the eye there."
        sources:
          - work: daria-fissoun-colorist-guide-davinci-resolve-20
            page: "Bypassing grades"
            quote: "Press Shift-D to bypass the entire node tree and compare your work to the source footage."
          - work: daria-fissoun-colorist-guide-davinci-resolve-20
            page: "Image wipe"
            quote: "Some colorists move the wipe to the edge of the viewer in order for the reference to fill up the whole screen and toggle the wipe continuously as they match the grade in the active clip."
          - work: adobe-lightroom-classic-develop-module-tools
            page: "View before and after"
            quote: "To switch the Before and After views one at a time in Loupe view, press the backslash"
          - work: blender-manual-image-editor
            page: "Render slots"
            quote: "Afterwards, you compare them by pressing J and Alt-J to cycle forwards and backwards."
          - work: chromatic-diff-inspector
            page: "Diff strobing"
            quote: "Diff strobing, a.k.a, party mode, emphasizes the highlight even more by quickly toggling between the baseline and the new snapshot."
          - work: ronald-rensink-to-see-or-not-to-see
            page: "Experiment 1"
            quote: "To confirm that the changes in the pictures were indeed easy to see when flicker was absent, the experiment was repeated with the blanks in the displays removed. A completely different pattern of results now emerged: identification required only 1.4 alternations (0.9 s) on average, showing that observers quickly noticed the changes."
          - work: daniel-simons-change-blindness
            page: "Abstract"
            quote: "unless a change to a visual scene produces a localizable change or transient at a specific position on the retina, generally, people will not detect it."
      - id: wipe
        name: Wipe
        plain: "One version on each side of a seam that the reviewer drags across the same frame."
        why: "The seam shows the matching parts of the two versions side by side, and the reviewer moves it over the area in question."
        sources:
          - work: github-docs-working-with-non-code-files
            page: "Swipe"
            quote: "Not sure if colors shifted between different versions? Drag the swipe slider over the area in question and compare the pixels for yourself."
          - work: foundry-nuke-online-help
            page: "Viewer wipe"
            quote: "The wipe control provides an option for displaying a split-screen of two images, which can help you compare before and after versions for color correction, filtering, and other image manipulation."
          - work: daria-fissoun-colorist-guide-davinci-resolve-20
            page: "Image wipe"
            quote: "Image wipe enables you to wipe between a still, a clip in the timeline, or a reference movie frame for visual comparison and matching."
          - work: openrv-user-manual
            page: "Wipes"
            quote: "Wipes allow you to compare two or more images or sequences when viewing a stack."
          - work: unity-manual-look-dev-view
            page: "Using the manipulation Gizmo"
            quote: "To move the separator, click on the narrow part of the Gizmo and drag and drop it to the location you want."
      - id: side-by-side
        name: Side by side
        plain: "Two whole copies of the frame next to each other, used to match a reference or to see two looks in context."
        sources:
          - work: adobe-lightroom-classic-develop-module-tools
            page: "Reference View"
            quote: "Reference View in the Develop module provides a dedicated 2-Up view which lets you place a Reference (static) photo next to an Active (editable) photo. This view is useful when you want to edit a photo to make it look like a different, reference photo."
          - work: daria-fissoun-colorist-guide-davinci-resolve-20
            page: "Split screen"
            quote: "This comparison method is especially effective when you already have a collection of clips that are similar in appearance and you need a wider visual reference of a scene or environment."
          - work: daria-fissoun-colorist-guide-davinci-resolve-20
            page: "Split screen"
            quote: "Comparing the versions might be difficult now because they have been scaled down to fit the small viewer window."
          - work: github-docs-working-with-non-code-files
            page: "2-up"
            quote: "2-up is the default mode; it gives you a quick glimpse of both images."
      - id: onion-skin
        name: Onion skin
        plain: "One version laid over the other at partial opacity, to find shapes that moved."
        why: "It is made for spotting small shifts in position."
        sources:
          - work: github-docs-working-with-non-code-files
            page: "Onion skin"
            quote: "Onion Skin really comes in handy when elements move around by small, hard to notice amounts."
          - work: browserstack-percy-visual-analysis
            page: "Review a build"
            quote: "Spot a shift by stacking the new snapshot over the baseline."
          - work: foundry-nuke-online-help
            url: https://learn.foundry.com/nuke/14.1/content/timeline_environment/usingviewer/playback_tools.html
            page: "Viewer output"
            quote: "You can also use the center drop down to set the blend mode between images in the Viewer, for example Onion Skin or Difference"
      - id: difference
        name: Difference
        plain: "Only the pixels that changed are shown or highlighted."
        sources:
          - work: browserstack-percy-visual-analysis
            page: "Review a build"
            quote: "See only the pixels that changed."
          - work: openrv-user-manual
            url: https://openrv.readthedocs.io/en/latest/rv-manuals/rv-user-manual/rv-user-manual-chapter-five.html
            page: "Stack view"
            quote: "At the moment, you can choose from Over, Replace, Add, Difference, and Inverted Difference."
          - work: chromatic-diff-inspector
            page: "Diff"
            quote: "Changed areas are automatically highlighted in neon green for immediate visibility."
      - id: wedge
        name: Wedge
        plain: "The same frame rendered at several steps of one setting, to choose the best value from the range."
        sources:
          - work: sidefx-houdini-wedge-top
            page: "Wedge TOP"
            quote: "A wedge render generates multiple versions of an image or piece of geometry, with different settings, to help you choose the best looking option from a range of possible settings."
          - work: peter-bargh-colour-darkroom-ringaround-chart
            page: "Ringaround chart"
            quote: "This simple visual aid is a series of prints of the same photograph each made with a slight shift in colour."
sources:
  - work: unity-manual-look-dev-view
    page: "Look Dev view"
    quote: "Compare two different versions of the same Asset using the same lighting conditions to see which changes improve the Asset’s quality."
  - work: autodesk-flow-production-tracking-create-reviewers
    page: "Compare versions"
    quote: "While in the Task View, you can use the Compare tools to compare and annotate two versions of a task using various modes."
  - work: browserstack-percy-visual-analysis
    page: "Visual analysis"
    quote: "A visual test captures a snapshot of your page or screen and compares it against the last approved version of that snapshot."
  - work: alexis-van-hurkman-color-correction-handbook
    page: "Sample pages"
    quote: "it’s easy for you (and the client) to forget what the original ‘problem’ image looked like, since the eye is constantly adapting to the updated state of the image."
  - work: alexis-van-hurkman-color-correction-handbook
    page: "Sample pages"
    quote: "This is the reason why most color correction applications have some sort of ‘disable grade’ command, so you can get a ‘before and after’ look at the image."
  - work: daniel-simons-change-blindness
    page: "Abstract"
    quote: "unless a change to a visual scene produces a localizable change or transient at a specific position on the retina, generally, people will not detect it."
  - work: ronald-rensink-to-see-or-not-to-see
    page: "Abstract"
    quote: "When brief blank fields are placed between alternating displays of an original and a modified scene, a striking failure of perception is induced: identification of changes becomes extremely difficult, even when changes are large and made repeatedly."
  - work: daniel-simons-change-blindness-without-disruption
    page: "Abstract"
    quote: "When changes are sufficiently gradual, the visible change signal does not seem to draw attention, and large changes can go undetected."
  - work: kevin-oregan-mudsplashes
    page: "Letter"
    quote: "When a few small, high-contrast shapes are briefly spattered over a picture, like mudsplashes on a car windscreen, large changes can be made simultaneously in the scene without being noticed."
---
