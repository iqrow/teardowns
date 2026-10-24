---
term: Combat model
aka: [stacks or one unit per tile, tactical battles]
kind: concept
plain: "The rules for how a fight resolves: multiple units in a tile, one unit per tile, a separate tactical map, or automatic fleet combat."
does: Sets whether war is about army composition, map position or tactical play.
ask: Where does the player's skill show in a fight?
variants:
  - label: Model
    items:
      - id: combat-stacks
        name: Stacks
        plain: Multiple units share a tile, and a fight resolves against defenders until the surviving stack is gone.
        sources:
          - work: 2k-civ4-manual
            page: Multiple Unit Combat
            quote: "If a unit is attacking a space containing more than one defender, the computer figures out which defending unit has the best odds of defeating the attacker, and then those two units fight it out."
          - work: 2k-civ4-manual
            page: Multiple Unit Combat Results
            quote: "All defenders must be destroyed before the attacker can occupy the space."
      - id: combat-1upt
        name: One unit per tile
        plain: Only one military unit may stand on a tile, so armies spread out into lines and fronts.
        sources:
          - work: pcgamer-jon-shafer-civ-v-history
            page: Civilization V
            quote: "No more could conquerors cram armies into a single tile. Instead, each unit needed its own tile, pushing things like unit placement and logistics to the forefront."
      - id: combat-tactical
        name: Tactical battle
        plain: Contact opens a separate battle map where the player moves and orders each unit.
        sources:
          - work: age-of-wonders-quick-guide
            page: Tactical Mode
            quote: "Tactical Mode Fighting a battle in Tactical mode brings up a special Battle Map. This map reflects the terrain of the global map where the fight began. Tactical battles are turn-based."
      - id: combat-auto
        name: Auto-resolved battle
        plain: Fleets fight in real time while the game controls individual ships; the player gives only broad fleet orders.
        sources:
          - work: stellaris-paradoxwikis-space-warfare
            quote: "Combat in Stellaris takes place in real-time, out of the player's control save for the emergency FTL order. Though the player can direct a fleet toward or away from enemies, there is no control over individual ships"
sources:
  - work: master-of-orion-ii-manual
    page: Strategic Combat
    quote: "Once circumstances or your decision determines the players for a battle, the rest is automatic. The combat takes place without requiring your input or attention, and the result is announced immediately thereafter."
at: [0, 0.1, 0.3]
---
