---
term: City growth
aka: [population growth, food surplus]
kind: process
plain: A city stores its surplus food until it gains a citizen, and each citizen works one more tile.
does: "Is the city-level growth engine: more citizens work more tiles and make more yields."
ask: How many turns until the next citizen, and which tile will that citizen work?
cues: [Turns-to-grow on the city banner, A food bar filling toward the next citizen]
pattern: pattern-boosting-engine
sources:
  - work: 2k-civ5-manual
    page: City Growth
    quote: "Any food left over is put into the poetically-named “City Growth Bucket.”"
  - work: 2k-civ5-manual
    page: City Growth
    quote: "When the quantity of food reaches a specific amount, the city’s population (citizens) will increase by 1"
at: [-0.65, -0.06, 0.02]
---
