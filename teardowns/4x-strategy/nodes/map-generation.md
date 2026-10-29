---
term: Procedural map generation
aka: [random map, map script, map seed]
kind: process
plain: "A map template generates a different world each game from a chosen type."
does: Makes each game a new map problem.
ask: Are the maps new each time and still fair and playable?
cues: [A map type and size picker before the game, A seed number in the setup screen]
trouble: A player is stranded on a small island, or every map looks the same after a few games.
sources:
  - work: 2k-civ4-manual
    page: Starting a Game
    quote: "each individual world created will be different from game to game."
variants:
  - label: Map type
    items:
      - id: map-continents
        name: Continents
        plain: A few large land masses split by ocean, so contact between some players waits for ships.
        sources:
          - work: 2k-civ5-manual
            page: Map Type
            quote: "This creates an Earth-like world with several big continents and some smaller islands."
      - id: map-pangaea
        name: Pangaea
        plain: "One large land mass: every empire can reach every other by land, so contact comes early."
        sources:
          - work: 2k-civ5-manual
            page: Map Type
            quote: "This creates a world with one huge continent and possibly some smaller islands."
      - id: map-archipelago
        name: Archipelago
        plain: "Many small islands: expansion and war both depend on ships."
        sources:
          - work: 2k-civ5-manual
            page: Map Type
            quote: "This creates a world with many large and small islands, but no full continents."
      - id: map-galaxy
        name: Galaxy
        plain: A space map of star systems joined by hyperlanes, the main routes between stars. Lane density is set before the game and decides how many chokepoints the map has.
        sources:
          - work: stellaris-paradoxwikis-ftl
            page: Hyperlanes
            quote: "Star systems are connected to one another by hyperlanes, safe passages across interstellar space."
          - work: stellaris-paradoxwikis-ftl
            page: Hyperlanes
            quote: "Hyperlane density, how interconnected star systems are, can be adjusted at game start, from 0.5× to 2.75× or Full. Higher density reduces the number of chokepoint systems and vice versa"
at: [-0.62, 0.4, 0.02]
---
