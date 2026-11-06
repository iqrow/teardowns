---
term: AI versus AI
aka: [self-play, autoplay, simulation tournament]
kind: process
plain: "Batches of matches between AI versions, settings or populations, run without a human in the loop."
does: "Makes regressions, matchup bias and strategy cycles visible at a scale manual play cannot provide."
ask: "Which opponents, seeds and versions should meet, and what signal will decide whether a change helped?"
cues: ["A match matrix between versions", "A batch counter and seed list", "Replays or summaries generated without human input"]
trouble: "The test population is too weak, the agents exploit a simulator quirk, or self-play selects for a narrow cycle."
at: [-0.34, 0.22, 0.08]
sources:
  - work: vinyals-alphastar
    page: "p. 8, Multi-agent learning"
    quote: "League training is a multi-agent reinforcement learning algorithm that is designed both to address the cycles commonly encountered during self-play training and to integrate a diverse range of strategies."
  - work: spronck-dynamic-scripting
    page: "p. 13, Simulation Environment"
    quote: "The static team is controlled by unchanging scripts, that represent strong tactics."
---
