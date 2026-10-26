---
term: Interface layout
aka: [where the signals sit, game-y or UI-y]
kind: part
plain: The arrangement of scene, controls and readouts, and whether each readout sits over the picture, in the scene or in the game world, determines what the player can notice without searching.
does: Preserves attention for decisions rather than navigation of the interface.
ask: What must be glanceable during the core decision?
cues:
  - Scene, controls and readouts arranged together
  - HUD information visible at a glance
  - Signals that need no searching
  - Marks drawn into the scene rather than over it
range: An overlay HUD at the screen edges, marks drawn in the scene, or readouts built into the world. Competitive, skill-focused games lean on overlay and spatial marks because they carry unambiguous information.
at: [0.7, -0.3, 0.04]
sources:
  - work: ernest-adams-fundamentals-of-game-design
    url: https://ptgmedia.pearsoncmg.com/images/9780321929679/samplepages/0321929675.pdf
    page: ch. 4, p. 90
    quote: keep the user interfaces in games for children sim- ple and focused
  - work: celia-hodent-cognitive-psychology-applied-to
    page: Perception; Signs and feedback; HUD grouping and clarity
    quote: Cognitive psychology is a discipline dedicated to understanding the human mind via mental processes such as problem solving, language, perception, attention, and memory.
    flag: author article
  - work: celia-hodent-developing-ux-practices-at-epic
    page: "slides 14–19: signs, feedback, clarity and HUD organization"
    quote: "Everything is important: from the text font, size, color, contrast, to all other information in your HUD: organization, hierarchy, context, iconography…"
    flag: author talk notes
  - work: erik-fagerholt-and-magnus-lorentzon-beyond-the-hud
    page: "§7.2, p. 53: a design space of diegesis and spatiality"
    quote: "divide it into two dimensions: diegesis (is the UI element diegetic or not?) and spatiality (does the UI element exist within the 3D game space or not?)"
  - work: erik-fagerholt-and-magnus-lorentzon-beyond-the-hud
    page: "§10.2, p. 83: level of competition"
    quote: non-diegetic and geometric elements are tools that can be used in order to provide clear unambiguous information to the player
variants:
  - label: Placement
    items:
      - id: ui-non-diegetic
        name: Non-diegetic
        plain: Readouts drawn over the picture, outside both the scene and the fiction, such as a health bar in a screen corner.
        sources:
          - work: erik-fagerholt-and-magnus-lorentzon-beyond-the-hud
            page: "§7.3, p. 57: non-diegetic elements"
            quote: These are elements presented in an overlay manner
      - id: ui-spatial
        name: Spatial
        plain: Marks drawn in the 3D scene that no character could see, such as an outline through a wall or a move range on the ground. Fagerholt and Lorentzon call them geometric elements.
        sources:
          - work: erik-fagerholt-and-magnus-lorentzon-beyond-the-hud
            page: "§7.3, p. 58: geometric elements"
            quote: UI elements presented in the 3D geometry without being an entity of the fictional game world
          - work: erik-fagerholt-and-magnus-lorentzon-beyond-the-hud
            page: "§10.1, p. 80: geometric elements"
            quote: they are especially suited for conveying environmental information, navigational information, and other information with spatial content
      - id: ui-diegetic
        name: Diegetic
        plain: Information carried by things in the game world that the characters could see too, such as a health gauge built into a suit. A signifier is the indirect kind, like smoke that warns of fire, and sits apart from the thing it tells about.
        why: A readout styled as a real object still counts as non-diegetic when it floats over the picture; it must exist in the world.
        sources:
          - work: erik-fagerholt-and-magnus-lorentzon-beyond-the-hud
            page: "§7.3, p. 58: diegetic elements"
            quote: entities that exist in the game world, and are presented as they were viewed by the player character
          - work: erik-fagerholt-and-magnus-lorentzon-beyond-the-hud
            page: "§7.3, p. 58: signifiers"
            quote: A signifier is separated from the object that it provides information about
      - id: ui-meta
        name: Meta
        plain: Information that belongs to the fiction but is shown outside the 3D scene, such as the avatar's phone filling the screen.
        sources:
          - work: erik-fagerholt-and-magnus-lorentzon-beyond-the-hud
            page: "§7.3, p. 58: meta-representations"
            quote: information carrying entities existing in the fictional game world, but visualized in a manner not spatial regarding the game world
---
