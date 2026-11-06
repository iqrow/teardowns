---
term: "In-game adaptation"
aka: [online adaptation, dynamic scripting, mid-match adjustment]
kind: process
plain: "The process of changing choices during a match when observations show that the current plan is failing or a new opportunity has appeared."
does: "Keeps the opponent responsive without requiring a new build or a reset between matches."
ask: "What signal is strong enough to switch now, and how do we preserve a sensible fallback while the new policy is still uncertain?"
cues: ["A rule weight or plan priority changes after an encounter", "The AI switches from a losing pattern to a counter", "The transition keeps a readable fallback instead of thrashing"]
trouble: "The AI changes after noise, learns an inferior rule or flips between counters faster than the player can read."
deeper: "Online observations, credit assignment, rule weights, fallback policies, update cadence, variety and bounded change."
sources:
  - work: spronck-dynamic-scripting
    page: "Section 3.1, p. 6"
    quote: "The goal of dynamic scripting is to adapt the weights in the rulebases so that the expected fitness of the behaviour defined by its generated scripts is increased rapidly, even in changing environments."
  - work: spronck-dynamic-scripting
    page: "Section 3.1, p. 7"
    quote: "Rules that lead to success are rewarded with a weight increase, whereas rules that lead to failure are punished with a weight decrease."
at: [0.48, 0.30, 0.03]
---
