---
term: Strategy variety
aka: [opening variety, diverse policies, exploration]
kind: knob
plain: "The controlled chance of selecting among several viable plans rather than replaying the same opening every match."
does: "Stops the player from solving the opponent with one script while keeping every selected plan coherent."
ask: "How many viable plans can this opponent use, and how do we avoid choosing a novelty that is simply weak?"
cues: ["Different opening cards selected across matches", "A match history with several strategic shapes", "A small random seed or variety control in the setup"]
trouble: "Every match repeats exactly, or variety becomes noise that hides a stable style and weakens learning."
pattern: pattern-explore-exploit
at: [0.32, -0.2, 0.08]
sources:
  - work: spronck-dynamic-scripting
    page: "p. 4, Requirements"
    quote: "Adaptive game AI must produce a variety of different behaviours, because agents that exhibit predictable behaviour are less entertaining than agents that exhibit unpredictable behaviour."
  - work: vinyals-alphastar
    page: "p. 1"
    quote: "a diverse league of continually adapting strategies and counter-strategies"
---
