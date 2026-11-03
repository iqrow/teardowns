---
term: Strategy-grounded dialogue
aka: [AI chat, talking AI, planner grounded conversation]
kind: process
plain: An AI's strategic planner chooses a plan or intent, which conditions the language used to discuss it.
does: Connects an opponent's conversation to what its decision system is considering.
ask: Which planner-approved intent supports this sentence, and what happens if the plan changes?
cues: [A reply referring to an actual proposal or plan, A revised statement when the plan changes]
range: Authored statements tied to game events, or free-form language conditioned on structured plans.
trouble: Fluent language promises an action that the planner never selected, or reveals a plan to the wrong recipient.
at: [-0.13, 0.13, 0.02]
links:
  - {to: ai-opponent, rel: see also}
  - {to: agreement-enforcement, rel: see also}
  - {to: conversation-memory, rel: see also}
sources:
  - work: meta-cicero
    page: "p. 2, Dialogue"
    quote: "the dialogue model was trained to be controllable through intents, which we here define to be a set of planned actions for the agent and its speaking partner."
  - work: meta-cicero
    page: "p. 2, Strategic reasoning"
    quote: "During each negotiation period, intents are recomputed every time Cicero sends or receives a message."
---
