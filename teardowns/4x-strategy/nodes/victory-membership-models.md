---
term: Victory membership models
aka: [coalition win structures, team victory catalogue]
kind: knob
plain: A victory model sets the relation between alliance membership and the finish line; choose the model explicitly instead of letting a treaty decide it accidentally.
does: Gives a designer a measurable answer to whether diplomacy creates cooperation, co-winners, or only temporary leverage.
ask: Does a member retain a solo path, and is the shared threshold harder than the solo threshold?
cues: [Five model cards on a turntable, A score or threshold diagram that changes with the selected model]
range: Solo; pregame teams; capped winners; scaled shared objective; permissive allied victory.
trouble: If co-wins are valued equally and another member adds no required contribution or cost, recruiting that member may be a free improvement; fixed teams remove mid-game membership bargaining.
variants:
  - label: Victory membership
    items:
      - id: solo-competition
        name: Solo competition
        plain: Alliances may coordinate temporarily, but only one player wins and the first qualifying player ends the game.
        why: The win condition remains individual even when deals are allowed.
        sources:
          - work: 2k-civ6-manual
            page: 146
            quote: "Whichever civilization achieves a set of victory conditions first, wins."
      - id: pregame-teams
        name: Pregame teams
        plain: Teams are fixed before play and share specified information, technologies, and victory or defeat from the start.
        why: Team membership is a setup choice, not a mid-game bargain.
        sources:
          - work: 2k-civ4-manual
            page: 172
            quote: "Team-members share line of sight, wonder effects, and technology research. They also share victory and defeat."
          - work: 2k-civ4-manual
            page: 172
            quote: "This allows you to “lock” several civilizations into permanent alliances."
      - id: capped-winners
        name: Capped winners
        plain: Alliances can form, but a coalition has a membership cap and a higher threshold than a solo player.
        why: The alliance is constrained by an explicit player cap and a changed win threshold.
        sources:
          - work: dune-rulebook-2019
            page: 12
            quote: "No more than two players may be in an Alliance and the win condition is now 4 instead of 3 strongholds."
      - id: scaled-shared-objective
        name: Scaled shared objective
        plain: Some victory requirements depend on alliance size; a qualifying member's win is shared by the alliance.
        why: The requirement adapts to alliance scale instead of using an unchanged solo threshold.
        sources:
          - work: amplitude-es2-manual-2018
            page: "58; January 2018 rules, no current scaling formula asserted"
            quote: "If part of an Alliance, some conditions might vary to adapt to the alliance’s scale. If a faction that wins one of these victories is the member of an alliance, all the factions in the alliance will also win."
      - id: permissive-allied-victory
        name: Permissive allied victory
        plain: In the launch-era Age of Wonders 4 rules, enabling Allied Victory lets allies share a member's victory; conquest excludes allies from the required opponents.
        why: Shared victory is a realm setting that explicitly changes who must be defeated.
        sources:
          - work: minh-aow4-victory-2023
            page: "Allied Victory; Steam News event API syndication, 27 April 2023"
            quote: "When Allied Victory is turned on, you achieve victory if anyone you are allied with achieves victory. For the conquest victory this means that any allies are excluded in the victory condition and you both win if you and your allies are the only ones left standing."
sources:
  - work: amplitude-es2-manual-2018
    page: "58; January 2018 rules"
    quote: "If part of an Alliance, some conditions might vary to adapt to the alliance’s scale. If a faction that wins one of these victories is the member of an alliance, all the factions in the alliance will also win."
at: [0.16, 0.43, 0.03]
---