---
term: Evaluation function
aka: [heuristic, state score, value function, utility function]
kind: part
plain: "A function that turns a state, action or outcome into a comparable score."
does: "Gives search and utility selection a practical estimate of goodness when exact outcomes are too expensive or unknown."
ask: "Which outcomes does this score reward, which does it ignore, and can its scale be compared across options?"
cues: ["A score breakdown beside candidate actions", "A heuristic value at the leaves of a search tree", "A debug overlay that explains why one option scored higher"]
trouble: "The AI optimises a proxy while losing the match, or a small score error makes it choose visibly absurd actions."
children: []
at: [-0.78, 0.82, 0.08]
sources:
  - work: yannakakis-togelius-ai-and-games
    page: "ch. 2, pp. 43-44"
    quote: "The utility function estimates how good the current game configuration is for a player."
  - work: graham-utility-theory
    page: "Section 9.2.1"
    quote: "Because utility scores are compared to each other to come up with a final decision, they must all be on the same scale across the entire system."
---
