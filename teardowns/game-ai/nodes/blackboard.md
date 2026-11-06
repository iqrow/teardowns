---
term: Blackboard
aka: [shared knowledge store, fact store, AI memory board]
kind: part
plain: "A named store of facts that sensors, decision code and cooperating agents can read and write."
does: "Separates the evidence from the behaviours that use it, so several branches can share the same current facts."
ask: "Which facts are authoritative, who may write them, and which decisions react when they change?"
cues: ["Named keys for targets, locations, booleans and numbers", "Several behaviour branches reading the same target key", "A debugger showing key values changing during play"]
trouble: "Branches disagree about the same fact, stale keys never clear, or any writer can silently corrupt a decision."
children: []
at: [0.45, 0.85, 0.08]
sources:
  - work: epic-unreal-behavior-trees
    page: "Behavior Trees"
    quote: "The Blackboard contains several user-defined Keys that hold information used by the Behavior Tree to make decisions."
  - work: epic-unreal-behavior-trees
    page: "Behavior Trees"
    quote: "the Behavior Tree relies on another asset called a Blackboard which serves as the \"brain\" for a Behavior Tree"
  - work: bourg-ai-game-developers
    page: "Book excerpt, Fighting Game Strike Prediction, Working Memory"
    url: "https://www.gamedeveloper.com/programming/book-excerpt-ai-for-game-developers"
    quote: "We can add more facts or assertions to the working memory if desired."
---
