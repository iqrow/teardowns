---
term: Treaty benefits
aka: [what a pact grants, deal effects]
kind: part
plain: "The capabilities a treaty grants are separate modules rather than one undifferentiated friendship score: information, knowledge, movement, or a military promise."
does: Lets a player price, test, and revoke one benefit without silently granting the others.
ask: Which benefit is being purchased, and what does it reveal or obligate?
cues: [A treaty card with separate benefit rows, "Individual toggles for map, research, passage, or war"]
range: One benefit; a bundle of benefits; a staged bundle.
trouble: A broad alliance hands out vision, technology, access, and war support together, so the player cannot tell which clause caused the strategic swing.
children: [map-sharing, knowledge-sharing, passage-rights]
variants:
  - label: Benefit family
    items:
      - id: information-benefit
        name: Information
        plain: Exchange a map snapshot or a live sight feed without granting knowledge or military access.
        why: The benefit changes what a player knows, not what units can research or where they can move.
        sources:
          - work: 2k-civ4-manual
            page: 102
            quote: "All of the territory explored by your partner is now visible on your main map and vice versa."
          - work: neptunes-pride-triton-alliances
            page: "Formal Alliances"
            quote: "Players in a formal alliance share scanning data. Your ally will be able to see what you can see, and you will be able to see what they can."
      - id: knowledge-benefit
        name: Knowledge
        plain: Transfer a completed technology or grant a time-bounded research bonus.
        why: The benefit changes research capability, not map state or unit movement.
        sources:
          - work: 2k-civ4-manual
            page: 103
            quote: "You immediately learn the technology that has been traded to you."
          - work: 2k-civ6-manual
            page: 144
            quote: "For the duration of the Agreement, each civ gets a bonus to its research."
      - id: passage-benefit
        name: Passage
        plain: Let units cross another empire's territory with one-way or reciprocal permission for a stated term.
        why: The benefit changes movement permission, not what the units see or know.
        sources:
          - work: 2k-civ4-manual
            page: 102
            quote: "Your units can now move freely through your partner’s territory, and vice versa."
          - work: 2k-civ6-manual
            page: 144
            quote: "one civ can grant another Open Borders without automatically receiving it in return."
          - work: 2k-civ6-manual
            page: 144
            quote: "An Open Borders agreement lasts for 30 turns."
sources:
  - work: 2k-civ4-manual
    page: 99
    quote: "You can trade technologies, resources, maps, gold, and even cities. You can form mutual protection pacts; you can declare war; you can negotiate peace settlements."
at: [-0.32, 0.2, 0.02]
---