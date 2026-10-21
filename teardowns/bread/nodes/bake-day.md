---
term: Bake day
aka: [the bread-making steps, baking process]
kind: loop
plain: "The sequence every loaf goes through: build the leaven, mix, bulk ferment, shape, proof, bake, cool."
does: Repeats with each batch; each stage hands the next a dough in a known state.
ask: Which stage am I in, and is the dough ready for the next?
at: [0, 0.75, 0.05]
loop:
  type: cycle
  through: [preferment, mixing, bulk-fermentation, shaping, final-proof, baking, cooling]
sources:
  - work: maurizio-leo-the-perfect-loaf-the-craft-and
    page: "Introduction"
    quote: "It can be as simple as mixing that handful of ingredients in a bowl, letting it ferment, and then baking it when ready."
    url: https://penguinrandomhouselibrary.com/book/?isbn=9780593138410
  - {work: jessica-battilana-sourdough-schedule-how-to-plan, page: article, quote: "Feed starter six to eight hours before mixing your dough Bulk ferment the dough (typically eight to 12 hours, but consult your recipe for specific timing) Shaping the dough into loaves Proof your loaves (typically eight to 12 hours refrigerated or roughly two hours at room temperature) Score and bake"}
  - work: jeffrey-hamelman-bread-a-bakers-book-of
    page: "ch. 1, p. 25"
    url: https://catalogimages.wiley.com/images/db/pdf/9781119577515.excerpt.pdf
    quote: "As the baked bread begins to cool, the starch begins to revert to its former crystalline structure and the crumb of the bread hardens."
---
