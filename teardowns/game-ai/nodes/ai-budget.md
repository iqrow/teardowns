---
term: AI budget
aka: [think budget, CPU budget, time slice, level of detail, compute load]
kind: knob
plain: "The time and computation allowed for sensing, scoring, planning and search in each update or turn."
does: "Keeps the opponent inside its performance envelope by spending more effort where it matters and degrading gracefully elsewhere."
ask: "What work fits this slice, and what approximation or deferred work is used when it does not?"
cues: ["A profiler bar for AI time", "Search depth or rollout count changing with load", "Several agents thinking on staggered slices"]
range: "A per-frame or per-turn slice, with time-sliced search and simpler fallbacks when the slice is exhausted."
trouble: "The AI stalls the game, makes every agent think at once, or runs out of time and returns an unfinished plan."
at: [0.68, 0.3, 0.08]
sources:
  - work: dawe-behavior-selection-algorithms
    page: "Section 4.1"
    quote: "smaller games for mobile platforms have burst onto the scene, making it important for an AI programmer to know how to get the best behavior out of a short frame time."
  - work: yannakakis-togelius-ai-and-games
    page: "ch. 2, p. 46"
    quote: "When MCTS is used for real-time decision making a number of challenges become critical. First, the algorithm has limited rollout computational budget which increases the importance of heuristic knowledge."
  - work: millington-ai-for-games
    page: "ch. 2, p. 29"
    url: "https://api.pageplace.de/preview/DT0400.9781351053297_A36789489/preview-9781351053297_A36789489.pdf"
    quote: "Complex AI that does work in games needs to be split into bite-size components that … can be distributed over multiple frames. The chapter on resource management shows how to accomplish this."
---
