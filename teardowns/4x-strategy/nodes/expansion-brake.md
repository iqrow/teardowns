---
term: Expansion brake
aka: [empire size penalty, city maintenance, sprawl, unhappiness from cities]
kind: knob
plain: "A cost that grows with the number or spread of cities: upkeep, unhappiness or an empire-size penalty."
does: Stops "more cities is always better", so the player must weigh each new city.
ask: At what empire size does one more city stop paying for itself?
trouble: "No brake: many small cities win every game. Too strong: one large city is the only good play."
pattern: pattern-braking-engine
sources:
  - work: soren-johnson-water-finds-a-crack
    page: Water Finds a Crack
    quote: "Thus, building too many cities too early crippled a player’s economy, killing ICS at long last."
variants:
  - label: Brake
    items:
      - id: brake-maintenance
        name: City maintenance
        plain: Each city costs gold per turn, and the cost scales with the total number of cities.
        sources:
          - work: soren-johnson-water-finds-a-crack
            page: Water Finds a Crack
            quote: "by adding a per-city maintenance cost that scaled with the total number of cities."
      - id: brake-happiness
        name: Empire-wide unhappiness
        plain: More cities add unhappiness to one empire-wide pool, which slows growth when it goes negative.
        sources:
          - work: 2k-civ5-manual
            page: Happiness
            quote: "As the number of cities in your civ grows, so does your unhappiness."
          - work: 2k-civ5-manual
            page: Happiness
            quote: "An unhappy population’s growth rate is significantly slowed, but there are no other ill effects."
      - id: brake-sprawl
        name: Empire size
        plain: An empire-size score; empire size above 100 raises the cost of technology and traditions.
        sources:
          - work: stellaris-paradoxwikis-beginners-guide
            page: Expansion
            quote: "empire size above 100 adds increasing costs to technology and traditions, which represents the difficulty of spreading new ideas across a larger empire."
      - id: brake-disapproval
        name: Expansion disapproval
        plain: Each additional city creates expansion disapproval, so approval limits how many cities the empire can control efficiently.
        sources:
          - work: endless-legend-approval
            page: Expansion Disapproval
            quote: "Managing approval is thus a top priority for most empires, since it effectively limits how many cities the empire can efficiently control."
            flag: "site refuses automated fetch; checked by hand"
at: [0.61, 0.3, 0.02]
---
