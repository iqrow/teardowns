---
term: Oven spring
aka: [rise in the oven]
kind: loop
plain: The rapid rise at the beginning of baking, when heat makes yeast give off carbon dioxide and the dough expands.
does: Gives the loaf its final volume before the crust dries and limits expansion.
ask: Did the loaf grow well in the oven before the crust set?
cues: ["The loaf swells quickly before the crust firms", "Scores open and the ear lifts as the oven heats"]
at: [0, 0.8, 0.05]
pattern: pattern-engine-brake
loop:
  type: s-curve
  through: [oven-temperature, steam, scoring, ear]
sources:
  - work: jeffrey-hamelman-bread-a-bakers-book-of
    page: "ch. 1, p. 20"
    url: https://catalogimages.wiley.com/images/db/pdf/9781119577515.excerpt.pdf
    quote: "A more pronounced phase of oven spring occurs as the carbon dioxide, which has been dissolved in the liquid portion of the dough, converts to a gaseous state and expands as the dough continues to heat."
  - {work: maurizio-leo-the-ultimate-guide-to-baking-bread, page: article, quote: "Oven spring is the rise that occurs in your bread dough during the beginning part of baking as gasses expand and fermentation accelerates."}
  - {work: maurizio-leo-the-ultimate-guide-to-baking-bread, page: article, quote: "Steam delays the drying of the dough’s surface, allowing longer oven spring and resulting in a higher volume loaf."}
---
