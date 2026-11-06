---
term: "Position evaluation"
aka: [tactical position selection, cover query, spatial scoring]
kind: process
plain: "A process that generates candidate locations, rejects invalid ones and scores the survivors for the current behaviour."
does: "Gives movement a reasoned destination instead of a brittle waypoint, while keeping criteria legible and tunable."
ask: "Which candidates are valid here, and which score best once reachability, cover, exposure, distance and group needs are combined?"
cues: ["Candidate points appear around a unit or squad", "Invalid points are filtered before scores are shown", "The chosen point is highlighted with its score breakdown"]
trouble: "The best score is unreachable, exposed, duplicated by a squadmate or inexplicable to the player."
deeper: "Candidate generation, filters, weights, contexts, query libraries, fallbacks and debug views."
sources:
  - work: jack-tactical-position-selection
    page: "Section 26.3, p. 2"
    quote: "Evaluation will first filter out unsuitable points based on criteria such as the minimum distance from a threat and the direction(s) from which they provide cover. It will then score the remaining points based on desirability criteria such as how close they are to a goal point or how exposed they are to a number of threats."
  - work: jack-tactical-position-selection
    page: "Section 26.4, p. 3"
    quote: "Evaluation itself begins with generation, where points are collected from the database or generated on the fly, as required by the query specification, to form the set of candidate points for each query."
at: [-0.08, 0.42, 0.03]
---
