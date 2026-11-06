---
term: Knowledge
aka: [perception and knowledge, world model, what the AI knows]
kind: part
plain: "The AI's working picture of the game world: current observations, remembered facts, and useful map summaries."
does: "Gives decisions evidence without giving the AI information the player could not reasonably infer."
ask: "What does the AI know now, what has it forgotten, and where did each fact come from?"
cues: ["A visible sight cone or hearing radius", "Last-known markers that remain after a target leaves view", "Map overlays for danger, cover or reachable ground"]
trouble: "The opponent tracks hidden units perfectly, or it forgets obvious events and appears blind."
children: [sensing, memory, blackboard, terrain-analysis, information-access]
at: [0.18, 0.98, 0.04]
sources:
  - work: dill-what-is-game-ai
    page: "p. 1"
    quote: "a system that perceives its environment and takes actions that maximize its chances of success"
  - work: epic-unreal-ai-perception
    page: "Perception Function Calls"
    quote: "Returns any Actors that have been perceived (and not yet forgotten) based on a given Sense."
---
