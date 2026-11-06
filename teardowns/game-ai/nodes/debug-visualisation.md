---
term: Debug visualisation
aka: [AI debugger, reasoning overlay, visual logger]
kind: part
plain: "A developer-facing view that draws the AI's current knowledge, active decision, candidates, scores and selected action in the running game."
does: "Makes a hidden failure inspectable at the moment it occurs instead of forcing inference from the final outcome."
ask: "Can a developer see what the AI knew, which options it scored and why it chose this one?"
cues: ["A live overlay with the active behaviour branch", "Candidate positions coloured by score", "Perception rays, last-known locations or blackboard values"]
trouble: "The overlay lies about stale state, hides the decisive score, or is too expensive to leave on during reproduction."
at: [0.34, -0.22, 0.08]
sources:
  - work: epic-unreal-ai-debugging
    page: "AI Debugging"
    quote: "Once you've created an AI entity you can diagnose problems or simply view what an AI is doing at any given moment using the AI Debugging Tools."
  - work: epic-unreal-ai-debugging
    page: "EQS"
    quote: "Each sphere is weighted with a numerical value, and our highest weighted value is designated as the \"winner\" and location that the AI chooses to move to."
---
