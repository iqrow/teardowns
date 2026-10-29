---
term: Yields
aka: [resources per turn, "food, production, gold and science"]
kind: part
plain: The amount of each type of output that a tile or city makes each turn.
does: "Are the empire's currencies: each type buys a different kind of progress."
ask: Which yield is short, and which is piling up unused?
cues: [Yield icons with numbers on each tile, Per-turn totals in the top bar]
sources:
  - work: 2k-civ5-manual
    page: City Screen
    quote: "This panel shows how much food, production, gold, science and culture the city is producing."
variants:
  - label: Yield
    items:
      - id: yield-food
        name: Food
        plain: Grows city population, and each new citizen can work one more tile.
        sources:
          - work: 2k-civ5-manual
            page: City Growth
            quote: "When the quantity of food reaches a specific amount, the city’s population (citizens) will increase by 1"
          - work: 2k-civ5-manual
            page: City Screen
            quote: "As your city grows, it automatically assigns its citizens to work the lands around it."
      - id: yield-production
        name: Production
        plain: Builds units, buildings and wonders in the city that makes it.
        sources:
          - work: 2k-civ4-manual
            page: City Production
            quote: "The city production display tells you what is currently being produced in the city and the number of turns until completion."
      - id: yield-gold
        name: Gold
        plain: Pays upkeep and buys items or deals; it can move anywhere in the empire.
        sources:
          - work: 2k-civ4-manual
            page: City Commerce
            quote: "You expend your income in a variety of ways: to support military units, to hurry production of units (under certain civics), to purchase items from other civilizations and so forth"
      - id: yield-science
        name: Science
        plain: Pays for research in the technology tree.
        sources:
          - work: 2k-civ5-manual
            page: Research
            quote: "Every turn your civilization gets a number of beakers added to its science pool."
      - id: yield-culture
        name: Culture
        plain: Grows borders and buys social policies or civics.
        sources:
          - work: 2k-civ5-manual
            page: Culture
            quote: "In the game culture has two main effects: it increases the size of your cities’ territories (and therefore your overall borders) and it allows you to purchase new “Social Policies.”"
at: [-0.65, 0.1, 0.02]
---
