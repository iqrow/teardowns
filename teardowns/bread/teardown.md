---
title: Bread
prompt: I want to bake bread
root: loaf
assembly:
  - title: Plan the bake
    text: "Work back from the time the bread must be cool: when to build the leaven, mix, retard and bake. Decide which variable this bake will test."
    adds: [bake-day, cold-retard, evaluate-adjust]
    makes: schedule
  - title: Choose the flour
    text: "Pick a flour for the bread: its protein sets gluten strength, its extraction sets bran and flavour, its enzyme activity sets fermentation and crust colour."
    adds: [gluten, protein-content, extraction-rate, falling-number]
    makes: flour
  - title: Keep the starter
    text: Feed the culture on a ratio that brings it to peak when the dough needs it.
    adds: [feeding-ratio, starter-peak, starter-cycle]
    makes: sourdough-starter
  - title: Build the leaven
    text: Choose baker's yeast, a sourdough starter or both, and mix any preferment hours ahead.
    adds: [commercial-yeast, sourdough-starter, preferment]
    makes: leaven
  - title: Write the formula
    text: "Set every ingredient as a percentage of the flour: hydration, salt, leaven and any enrichment. Soak whole grains or seeds ahead so they do not take water from the dough."
    adds: [bakers-percentage, hydration, salt, enrichment, soaker]
    makes: formula
  - title: Mix
    text: Rest flour and water, set the water temperature for the target dough temperature, then mix until the gluten is as developed as the bread needs.
    adds: [autolyse, desired-dough-temperature, windowpane-test, dough-strength]
    makes: mixing
  - title: Bulk ferment
    text: Let the whole batch rise, folding it to build strength, and judge the end by volume and feel.
    adds: [stretch-and-fold, volume-rise]
    makes: bulk-fermentation
  - title: Shape
    text: Divide by weight, pre-shape, rest, then shape with tension and set the loaves in baskets or pans.
    adds: [divide-preshape, bench-rest, final-shape, surface-tension, banneton]
    makes: shaping
  - title: Proof
    text: Let the shaped loaves rise until a poke springs back slowly.
    adds: [poke-test]
    makes: final-proof
  - title: Ferment
    text: "Bulk and proof together are the fermentation: dough temperature sets its pace, acidity and volume show its progress."
    adds: [bulk-fermentation, dough-temperature, final-proof, dough-acidity, fermentation-curve]
    makes: fermentation
  - title: Bake
    text: Load into a hot oven or vessel, score, steam the first minutes, and bake to colour and internal temperature.
    adds: [oven-temperature, steam, scoring, oven-spring, baking-vessel, internal-temperature]
    makes: baking
  - title: Brown the crust
    text: Once the surface dries, browning reactions colour the crust and lift the ear.
    adds: [maillard-browning, crust-colour, ear]
    makes: crust
  - title: Set and cool the crumb
    text: Starch sets the crumb in the oven; cool before slicing, then read the crumb.
    adds: [gelatinization, crumb-structure, cooling, staling]
    makes: crumb
  - title: The loaf
    text: Flour, leaven and formula, worked by mixing, fermentation, shaping and baking, make a crust around a crumb.
    adds: [schedule, flour, leaven, formula, mixing, fermentation, shaping, baking, crust, crumb]
    makes: loaf
---

A baker sees a loaf as flour, water, salt and leaven, fixed by a formula in baker's percentages, then turned into bread by time and temperature. Mixing builds gluten, fermentation fills it with gas and flavour, shaping gives it tension, and the oven sets the crumb and browns the crust. Most decisions trade dough strength against extensibility, and fermentation speed against flavour, and dough temperature and time control both. Bakers read the dough, not the clock: its volume, its feel, the poke test, then the crust colour and the crumb. Style (baguette, sandwich loaf, sourdough, rye, brioche) changes the percentages and the vessel; the stages stay the same.
