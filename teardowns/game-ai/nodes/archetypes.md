---
term: Playstyle archetypes
aka: [AI styles, strategy personalities, opponent types]
kind: concept
plain: "Named, recognisable play patterns such as early pressure, defensive patience or economic growth."
does: "Gives a style a short name that players can learn, compare and anticipate."
ask: "Which repeated preference makes this style distinct from a merely different faction or costume?"
cues: ["A style label beside the opponent portrait", "A first move that signals the style", "A match history showing different strategic shapes"]
at: [0.0, 0.28, 0.08]
variants:
  - label: Style
    items:
      - id: style-rush
        name: Rush
        plain: "Prioritises an early attack before the opponent has built a stable position."
        why: "It counts as a rush when early pressure is repeatedly preferred over delayed development."
        sources:
          - work: ontanon-rts-survey
            page: "p. 5, Strategy"
            quote: "after starting a game, a player might decide to use a rushing strategy (which involves quickly building an army and sending it to attack as early as possible in the game)"
      - id: style-turtle
        name: Turtle
        plain: "Prioritises defensive structures before taking offensive risks."
        why: "It counts as a turtle when defensive safety repeatedly outranks immediate attack."
        sources:
          - work: aoe2-cpsb-guide
            page: "p. 66, Level of Difficulty-Random Map Game"
            quote: "Walls and towers|Never|Sometimes defensive towers|Yes|Yes|Yes; may build offensive towers|"
      - id: style-boom
        name: Boom
        plain: "Prioritises expansion and resource gathering over immediate pressure."
        why: "It counts as a boom when growth and resource gathering are recurring priorities."
        sources:
          - work: aoe2-cpsb-guide
            page: "p. 66, Level of Difficulty-Random Map Game"
            quote: "Expansion and resource gathering|Slowly selects nearby resources; abandons contested resources|Slowly|Fast|Aggressively defends resources|Aggressively defends resources, destroys enemy resources|"
sources:
  - work: 2k-civ4-manual
    page: "Leaders"
    quote: "You’ll get clues to their intentions as the game progresses – the more warlike leaders will usually not trade anything of military value, the knowledge-focused leaders will seek advanced technologies, and so forth."
---
