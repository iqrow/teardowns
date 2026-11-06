---
term: Planning horizon
aka: [lookahead, search depth, foresight]
kind: knob
plain: "How far into future actions and consequences the AI reasons before acting."
does: "Sets whether the opponent reacts to the next moment, commits to a short plan, or searches a deeper future."
ask: "How far ahead is useful before prediction becomes too slow, too uncertain or visibly inhuman?"
cues: ["A one-step choice beside a multi-step plan trace", "A search tree cut off at a marked depth", "A plan that replans when the next fact invalidates it"]
range: "Immediate reaction, a bounded action sequence, or a deeper tree search with a cutoff and evaluation function."
trouble: "The AI misses an obvious consequence, suffers a horizon effect, or spends its budget planning a future that changes immediately."
at: [-0.68, 0.3, 0.08]
sources:
  - work: yannakakis-togelius-ai-and-games
    page: "ch. 2, pp. 43-44"
    quote: "almost all actual applications of the Minimax algorithm cut off search at a given depth, and use a state evaluation function to evaluate the desirability of each game state at that depth."
  - work: dawe-behavior-selection-algorithms
    page: "Section 4.6"
    quote: "The plan tells you what to do, but not necessarily how to do it."
---
