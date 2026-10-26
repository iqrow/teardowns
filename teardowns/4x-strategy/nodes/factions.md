---
term: Factions
aka: [civilizations, races, leaders]
kind: part
plain: The empires a player can choose from, each with its own bonuses, units or rules.
does: Makes each game start from a different plan by changing units, rules or play style.
ask: Does each faction change how the player plays, or only by a few percent?
cues: [A faction or leader picker before the game, Unique units and buildings in the build menu]
children: [faction-traits, dominant-strategy, faction-win-rate]
variants:
  - label: Asymmetry
    items:
      - id: asym-bonuses
        name: Unique bonuses
        plain: Each faction shares the core rules but gets distinct units, buildings or abilities.
        sources:
          - work: 2k-civ5-manual
            page: The Setup Game Screen
            quote: 'The Select Civilization screen displays all of the leaders/civilizations available. It also displays the leader’s “trait” (special ability) and the civilization’s unique units and buildings.'
      - id: asym-mechanics
        name: Unique mechanics
        plain: Each faction changes a core rule or resource, so it plays very differently.
        sources:
          - work: endless-legend-manual
            page: Faction selection
            quote: "Others, such as the Broken Lords who consume Dust instead of Food, will require you to play very differently."
      - id: asym-custom
        name: Custom faction
        plain: The player builds a faction from a list of traits with point costs.
        sources:
          - work: master-of-orion-ii-manual
            page: Custom
            quote: "You have 10 picks that you can use to develop your race. To the right of every option is that option’s Pick Modifier."
sources:
  - work: 2k-civ5-manual
    page: The Setup Game Screen
    quote: 'The Select Civilization screen displays all of the leaders/civilizations available. It also displays the leader’s “trait” (special ability) and the civilization’s unique units and buildings.'
  - work: endless-legend-manual
    page: Faction selection
    quote: "Each faction has a different background, main quest arc, set of units, and play style."
at: [-0.85, 1.315, 0.05]
---
