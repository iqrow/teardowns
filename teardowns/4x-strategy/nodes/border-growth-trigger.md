---
term: Border growth trigger
aka: [border growth, border expansion, city radius growth, build radius, domain growth, tile acquisition]
kind: process
plain: The rule that decides when a city claims another tile and which eligible tile it takes.
does: A passive clock can disconnect territory growth from player decisions. A player-steered trigger turns each new tile into a planning tool.
ask: What event adds the next tile, and who chooses its location?
cues: [Culture threshold or turns-to-next-tile readout, Population gain opening a province or tile choice, Purchase prompt or improvement extending the border]
variants:
  - label: Driver
    items:
      - id: border-growth-culture
        name: Accumulated culture
        plain: Culture accrues until a threshold, then the city claims a tile automatically. In the later Civilization pattern, the game selects the tile for the player.
        why: The trigger is stored culture, regardless of the game's setting or franchise.
        sources:
          - work: 2k-civ5-manual
            page: Culture and Borders
            quote: "As a city gains culture, it will acquire additional tiles in the surrounding unclaimed territory."
          - work: soren-johnson-old-world-city-sites
            page: Old World Designer Notes #2: City Sites
            quote: "The range-based culture growth of Civs 3–4 and the random tiles of Civs 5–6 got the job done but generally were disconnected from the player’s actions."
          - work: civilization-fandom-civ6-borders
            page: By cultural influence
            quote: "Each time the city generates a certain amount of Culture, it claims a tile adjacent to one it currently owns and incorporates that tile into its territory."
      - id: border-growth-population
        name: Population
        plain: Each new citizen or population point opens another province or expands a city's claim.
        why: The trigger is population gain, regardless of whether it opens a province or expands a radius.
        sources:
          - work: freeciv-borders
            page: Rules of claiming for a tile
            quote: "squared border radius for a single city staying in midland equals to a constant plus city population"
          - work: triumph-aow4-cities-expansion
            page: City Domain
            quote: "you will gain a new province every time you gain a new population."
            url: "https://www.gamebanshee.com/news/127416-age-of-wonders-4-developer-diary-8-cities-and-expansion.html"
      - id: border-growth-improvements
        name: Player-built improvements
        plain: Building an urban improvement or producing a specialist on a tile extends the city's borders from that decision.
        why: The trigger is a completed player-built improvement or specialist, regardless of the game's building set.
        sources:
          - work: soren-johnson-old-world-city-sites
            page: Old World Designer Notes #2: City Sites
            quote: "Namely, building an urban improvement and producing a specialist on any tile extend the city borders in all six directions."
      - id: border-growth-purchase
        name: Purchase with a rising price
        plain: The player spends a resource to claim a chosen tile, while the price rises with territory or game progress.
        why: The trigger is a player payment, with price and available tiles set by the game.
        sources:
          - work: northgard-colonization
            page: Colonizing Tiles
            quote: "The price in resources scales according to the number of currently controlled territories."
          - work: civilization-fandom-civ6-borders
            page: By purchasing
            quote: "You may spend Gold to purchase any tile bordering the current boundaries of a city."
          - work: civilization-fandom-civ6-borders
            page: By purchasing
            quote: "The price increases as you discover more civics and research more technologies, so you are advised to buy tiles you want as early as possible."
  
sources:
  - work: soren-johnson-old-world-city-sites
    page: Old World Designer Notes #2: City Sites
    quote: "The range-based culture growth of Civs 3–4 and the random tiles of Civs 5–6 got the job done but generally were disconnected from the player’s actions."
  - work: soren-johnson-old-world-city-sites
    page: Old World Designer Notes #2: City Sites
    quote: "The core hook of a 4X is long-term planning, and putting border growth in the player’s hands is a perfect fit."
at: [0.3, 0.05, 0.03]
---
