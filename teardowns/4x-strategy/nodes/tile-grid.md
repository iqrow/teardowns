---
term: Tile grid
aka: [hexes or squares, map grid]
kind: knob
plain: How the map is cut into spaces where units stand and cities work land.
does: Sets movement, adjacency and distance, so it shapes combat and the spacing of cities.
ask: How many neighbours does each space have, and is each neighbour the same distance away?
cues: ["Square, hexagon or region outlines on the map", Lanes drawn between star systems]
range: Squares and hexes; irregular regions; star lanes.
trouble: A lane map with few links turns some systems into chokepoints that every fleet must cross, so a few spaces decide where wars are fought.
sources:
  - work: 2k-civ5-manual
    page: The World
    quote: "the world is made up of hexagonally-shaped “tiles” (also occasionally referred to as hexes and spaces)."
  - work: stellaris-paradoxwikis-ftl
    page: Hyperlanes
    quote: "Star systems are connected to one another by hyperlanes, safe passages across interstellar space."
variants:
  - label: Grid
    items:
      - id: grid-square
        name: Squares
        plain: Square spaces that units and cities use on the map.
        sources:
          - work: 2k-civ4-manual
            page: Cultural Borders
            quote: "At first these borders will be small, encompassing only the eight squares surrounding the city."
      - id: grid-hex
        name: Hexes
        plain: Hexagon-shaped tiles used for terrain and movement.
        sources:
          - work: 2k-civ5-manual
            page: The World
            quote: "the world is made up of hexagonally-shaped “tiles” (also occasionally referred to as hexes and spaces)."
      - id: grid-region
        name: Regions
        plain: Irregular geographical areas that divide a larger map into convenient subdivisions.
        sources:
          - work: hegemony-manual
            page: Map Regions
            quote: "The game map is divided into 132 geographical regions."
      - id: grid-lanes
        name: Star lanes
        plain: Star systems joined by fixed routes; ships move only along the lanes, so chokepoints form.
        sources:
          - work: stellaris-paradoxwikis-ftl
            page: Hyperlanes
            quote: "a system which must be traversed to access the systems on its other side."
at: [-0.08, 0.005, 0.02]
---
