---
term: Transition
aka:
  - wipe
  - shape transition
  - match transition
  - morph
  - whip pan
kind: part
plain: A transition is the designed change from one shot, scene or graphic to the next, from an immediate cut to a dissolve or moving boundary.
does: Connects ideas, controls the viewer's sense of continuity and gives a change of place, time or emphasis a visible shape.
ask: Does this transition carry meaning, or is it only movement between clips?
cues:
  - "A hard cut, blend or visible boundary at the edit point"
  - "A wipe, push or zoom carrying one frame over the next"
  - "A morph or match that makes a visual relationship between shots"
trouble: A decorative transition delays the idea, a wipe hides important action, or every cut gets the same conspicuous effect.
range: "Cut, dissolve, wipe, push or slide, zoom, morph cut and container transform."
links:
  - {to: "pacing", rel: "controls"}
  - {to: "pattern-interrupt", rel: "raises"}
  - {to: "jump-cut", rel: "see also"}
at: [0.7, 0, 0.02]
variants:
  - label: Transition
    items:
      - id: transition-cut
        name: Cut
        plain: The outgoing frame is followed immediately by the incoming frame.
        why: A cut is defined by immediate adjacency with no blended transition effect, whatever the shot content.
        sources:
          - work: adobe-premiere-transitions
            page: Transitions overview
            quote: "By default, placing one clip next to another in the Timeline panel results in a cut, where the last frame of one clip is followed by the first frame of the next."
      - id: transition-dissolve
        name: Dissolve
        plain: The outgoing image blends into the incoming image over a span of time.
        why: The defining feature is a blend between images, not whether the images show a person, place or graphic.
        sources:
          - work: adobe-premiere-transition-basics
            page: Dissolve
            quote: "In a dissolve, one entire scene gradually blends into another."
      - id: transition-wipe
        name: Wipe
        plain: A moving edge reveals the incoming image across the outgoing image.
        why: A wipe uses a moving boundary to reveal the next image, whatever direction, angle or subject it has.
        sources:
          - work: adobe-premiere-transition-basics
            page: Wipe
            quote: "In a wipe, one shot replaces another by traveling from one side of the frame to another, moving the preceding shot out of the way."
      - id: transition-push
        name: Push
        plain: The incoming image moves into the frame as the outgoing image moves away.
        why: A push is defined by the two images travelling past the edit, not by a camera move in the source footage.
        sources:
          - work: adobe-premiere-transition-basics
            page: Slide
            quote: "This example shows the Push transition, where one scene pushes the previous scene over to one side in order to replace it."
      - id: transition-zoom
        name: Zoom
        plain: A scale change carries the viewer into or out of the next image.
        why: A zoom transition changes scale around the edit, whatever lens or subject the clips use.
        sources:
          - work: adobe-premiere-transition-basics
            page: Zoom
            quote: "A zoom transition scales a scene in or out in proportion from one scene to another."
      - id: transition-morph-cut
        name: Morph cut
        plain: The transition uses generated interpolation to create a smooth change between nearby clips.
        why: A morph cut is defined by generated continuity across the edit, not by calling every dissolve a morph.
        sources:
          - work: adobe-premiere-morph-cut
            page: Morph Cut overview
            quote: "Morph Cut uses an advanced combination of face tracking and optical flow interpolation to create a smooth transition between clips."
      - id: transition-container-transform
        name: Container transform
        plain: One container grows or shrinks into the shape of the next state, and its contents swap while it changes.
        why: A container transform is defined by one bounding shape carrying the viewer from one state to the next, whatever it contains.
        sources:
          - work: material-components-android-motion
            url: https://github.com/material-components/material-components-android/blob/master/docs/theming/Motion.md
            page: Container transform
            quote: "The container transform pattern is designed for transitions between UI elements that include a container. This pattern creates a visible connection between two UI elements."
          - work: material-components-android-motion
            url: https://github.com/material-components/material-components-android/blob/master/docs/theming/Motion.md
            page: Container transform
            quote: "While these containers are being transformed, their contents are swapped to create the transition."
sources:
  - work: adobe-premiere-transitions
    page: Transitions overview
    quote: "Transitions are usually placed on a cut line between shots."
  - work: adobe-premiere-transition-list
    page: Explore video transition effects in Premiere
    quote: "Explore video transition effects in Premiere, including dissolves, wipes, slides, and more to create smooth scene changes."
  - work: toon-boom-animatic
    page: Adding Transitions
    quote: "Transitions are animated effects that can be added between two scenes to move from one scene to the next gradually, such as a dissolve or an edge wipe."
---
