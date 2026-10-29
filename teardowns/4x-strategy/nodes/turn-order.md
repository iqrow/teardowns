---
term: Turn order
aka: [simultaneous turns, IGOUGO, real time with pause]
kind: knob
plain: Whether players move one after another, all at once, or in continuous time that the player can pause.
does: Sets how long players wait and how they react to each other.
ask: How long does each player wait for the others?
sources:
  - work: 2k-civ4-manual
    page: Multiplayer games
    quote: "For LAN and Internet games, you also have the choice of traditional turns or simultaneous movement."
  - work: stellaris-paradoxwikis-space-warfare
    page: Combat
    quote: "Combat in Stellaris takes place in real-time, out of the player's control save for the emergency FTL order."
variants:
  - label: Order
    items:
      - id: turn-sequential
        name: Sequential turns
        plain: Each empire takes its whole turn in order while the others wait.
        sources:
          - work: age-of-wonders-quick-guide
            page: Turns
            quote: "Classic The widely used turn-based model: Players move their units and perform other actions while the other players have to wait for the player to end his turn."
      - id: turn-simultaneous
        name: Simultaneous turns
        plain: All players give orders in the same turn, which shortens waiting in multiplayer.
        sources:
          - work: age-of-wonders-quick-guide
            page: Turns
            quote: "Simultaneous Using this mode players can take turns at the same time. When all players have clicked \"end turn\", the turns is ended. Games played with this setting go a lot faster."
      - id: turn-realtime
        name: Real time with pause
        plain: Time runs on a clock; the player can pause to give orders.
        sources:
          - work: stellaris-paradoxwikis-space-warfare
            page: Combat
            quote: "Combat in Stellaris takes place in real-time, out of the player's control save for the emergency FTL order."
          - work: stellaris-paradoxwikis-beginners-guide
            page: Basic plan for entry
            quote: "Once in-game, keep the game paused and invest some time into exploring the user interface"
at: [0.25, 0.42, 0.1]
---
