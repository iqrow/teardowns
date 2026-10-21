---
term: Fermentation growth curve
aka: [yeast growth, how fast the dough rises]
kind: loop
plain: Fermentation moves through acceleration, a period of maximum gas production, and then slowing with weak gassing.
does: Explains why the rise speeds up, peaks and then slows as fermentation conditions change.
ask: "Where on the curve is this dough: still accelerating, near its peak, or past it?"
cues: ["Dough barely moves at first, then rises fast, then levels off", "Growth slows as the dough smells and tastes more sour"]
at: [0, 0.5, 0]
pattern: pattern-engine-brake
loop:
  type: s-curve
  through: [dough-temperature, bulk-fermentation, volume-rise, dough-acidity]
sources:
  - {work: j-l-gelinas-bakers-yeast-sampling-and-frozen, page: "p. 609", quote: "three steps could be observed during fermentation: 1) an acceleration period corresponding both to initiation of the yeast metabolism and to equilibration of the dough temperature with the 28°C of the water bath; 2) a period with constant and maximum fermentation rate; 3) a slowing down period of gas production"}
  - {work: aslankoohi-dynamics-of-the-saccharomyces-during, page: article, quote: "Together, these data indicate a shift from respiration to fermentation between 0 and 30 min and active fermentation and cell growth between 30 and 60 min, followed by increased stress and nutrient depletion toward the end of fermentation (180 min)."}
---
