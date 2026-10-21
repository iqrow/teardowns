---
term: Arm shell
aka: [ribbed arm, bellows sleeve, robot jacket, cosmetic skin, outer sleeve, gooseneck cover]
kind: part
plain: "A shell is the arm's outer cover: a ribbed sleeve or bellows can protect and style a mechanism while the internal structure carries the load. A passive poseable gooseneck holds a manually set pose through friction or locks; an actively driven arm changes pose through actuators."
does: It protects or hides the mechanism, makes a snake-like silhouette readable and clears joint travel without becoming an unplanned structural member.
ask: "Is this cover carrying load or only covering it, and does it clear the full bend and cable path?"
range: "Straight link: sleeve. Moving joint: accordion bellows. Whole body: jacket. Passive display/tool holder: poseable gooseneck. Actuated body: keep the load path explicit instead of relying on the cover."
trouble: "A shell that wrinkles, binds, snags a tendon, transfers torque into a joint, or is mistaken for the load-bearing backbone is the wrong shell even if it looks convincing."
at: [0.604, 0.803, 0]
links:
  - {to: links-and-joints, rel: see also}
  - {to: tendon-drive, rel: see also}
  - {to: safety, rel: see also}
variants:
  - label: Outer treatment
    items:
      - id: shell-cosmetic-bellows
        name: Cosmetic / protective ribbed bellows
        plain: A folded cover follows a bending joint while a sleeve covers a straighter link; keep collars and clearances separate from the actuator and structural backbone.
        sources:
          - work: morphology-rcc-sleeves
            page: "Robot Sleeves, Bellows and Jackets: summary"
            quote: "A bellows is a folded element that absorbs the travel of a joint or a linear axis without loading it. A sleeve, the third piece, is a tubular protection fitted on a section that rotates."
      - id: shell-exposed-mechanism
        name: Exposed segmented mechanism
        plain: Leave links, tendons and guide tubes visible so a newcomer can inspect the actual load path instead of mistaking spacers for joints.
        sources:
          - work: morphology-ytec-animatronic-tentacle
            page: "How it works"
            quote: "The tentacle consists of 3 sections each being able to bend in 2 directions. Each section has 4 cables."
          - work: morphology-ytec-animatronic-tentacle
            page: "Mechanism design"
            quote: "Luckily the cable carriers most of the load together with compressing the tentacle itself. The gears only carry the forces required to synchronize the tentacle."
      - id: shell-passive-gooseneck
        name: Passive poseable gooseneck
        plain: A ball-and-socket or segmented hose arm is positioned by hand and held by joint resistance or a lock; it is not an actively driven robot arm merely because it looks articulated.
        sources:
          - work: morphology-hackaday-gooseneck
            page: "Description and project logs"
            quote: "They hold! Without a doubt, these arms stay exactly where they are aimed until you intentionally move them."
          - work: morphology-hackaday-gooseneck
            page: "Description"
            quote: "3D printable ball and socket system, upgraded with a quarter turn twist lock on each ball joint. This completely eliminates disengagement of the ball."
sources:
  - work: morphology-rcc-sleeves
    page: "Robot Sleeves, Bellows and Jackets: outer protection"
    quote: "Sleeves, bellows and jackets protect the outer surface of the arm."
  - work: morphology-rcc-sleeves
    page: "Robot Sleeves, Bellows and Jackets: sleeve vs bellow"
    quote: "A sleeve covers a straight, largely static section of the arm, while a bellow is accordion-folded to move with a rotating or bending joint without restricting its travel."
  - work: morphology-hackaday-gooseneck
    page: "Project logs: Loc-Line comparison"
    quote: "No spring back - unlike the metal coil goosenecks, the ball and socket joints have no spring back."
unverified: "No opened maker or lab source in this pass establishes a universal home-built sleeve material, thickness or load rating. Treat a cosmetic shell as non-load-bearing until the specific build proves its clearance, wear and load path."
deeper: "Next level: make a removable collar, choose sleeve versus bellows from the joint travel, leave a separate tendon/wire service path, and cycle the bare mechanism before fitting the cover."
---
