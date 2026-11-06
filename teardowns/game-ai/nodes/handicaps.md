---
term: AI bonuses and handicaps
aka: [AI advantage, computer bonuses, AI cheats]
kind: knob
plain: "Extra resources, starting assets or information granted to the AI instead of changing its decision code."
does: "Moves the expected match-up without making every level require a separate behaviour system."
ask: "Which advantage is visible, bounded and explainable enough that a win still feels earned?"
cues: ["A setup panel listing AI advantages", "Extra starting pieces or resources visible at match start", "A rule that exposes an information exception"]
trouble: "The AI wins through an invisible economy or information gift, so the player cannot learn a counter."
links:
  - {to: information-access, rel: see also}
at: [0.15, 0.04, 0.08]
variants:
  - label: Advantage
    items:
      - id: bonus-economy
        name: Economy bonus
        plain: "The AI receives more income, cheaper actions or faster production."
        why: "It counts as an economy bonus when the advantage changes material flow rather than the AI's chosen actions."
        sources:
          - work: 2k-civ6-manual
            page: "p. 19, Effects of Difficulty"
            quote: "On levels higher than Prince, the AIs receive increasing bonuses including bonuses in all yields, unit combat strength and technology."
      - id: bonus-head-start
        name: Head start
        plain: "The AI begins with extra units, technology or another early asset."
        why: "It counts as a head start when the advantage is present before normal play produces it."
        sources:
          - work: 2k-civ6-manual
            page: "p. 19, Effects of Difficulty"
            quote: "They may get additional starting units and techs and also play more aggressively than on lower levels."
      - id: bonus-information
        name: Information advantage
        plain: "The AI receives facts that a player would need to sense, remember or infer."
        why: "It counts as information advantage when hidden state is available without the corresponding player-facing observation."
        sources:
          - work: dill-what-is-game-ai
            page: "p. 6"
            quote: "Another type of cheating is purely informational. That is, does the AI have to sense a unit in order to know that it exists and where it is located?"
      - id: bonus-none
        name: Behaviour only
        plain: "The level changes the AI's tactics as the game is played rather than only changing its strength."
        why: "It counts as behaviour-only when the AI's tactics change rather than only its strength."
        sources:
          - work: spronck-dynamic-scripting
            page: "p. 28, Difficulty Scaling"
            quote: "the setting has a limited scope … only affecting the computer-controlled agents’ strength, and not their tactics … Dynamic scripting changes the computer’s tactics to the way a game is played"
sources:
  - work: 2k-civ6-manual
    page: "p. 19, Effects of Difficulty"
    quote: "On levels higher than Prince, the AIs receive increasing bonuses including bonuses in all yields, unit combat strength and technology."
---
