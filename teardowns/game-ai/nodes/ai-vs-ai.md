---
term: AI versus AI
aka: [self-play, autoplay, simulation tournament]
kind: process
plain: "Batches of matches between AI versions, settings or populations, run without a human in the loop."
does: "Makes regressions, matchup bias and strategy cycles visible at a scale manual play cannot provide."
ask: "Which opponents, seeds and versions should meet, and what signal will decide whether a change helped?"
cues: ["A match matrix between versions", "A batch counter and seed list", "Replays or summaries generated without human input", "An unchanged build is paired with an identical build as a null control"]
trouble: "The test population is too weak, the agents exploit a simulator quirk, or self-play selects for a narrow cycle; an A/A match that reports a difference despite identical builds points to harness or measurement bias."
at: [-0.34, 0.22, 0.08]
sources:
  - work: vinyals-alphastar
    page: "p. 8, Multi-agent learning"
    quote: "League training is a multi-agent reinforcement learning algorithm that is designed both to address the cycles commonly encountered during self-play training and to integrate a diverse range of strategies."
  - work: spronck-dynamic-scripting
    page: "p. 13, Simulation Environment"
    quote: "The static team is controlled by unchanging scripts, that represent strong tactics."
  - work: kohavi-longbotham-unexpected-results
    page: "Section 1, p. 31"
    quote: "An A/A test is similar to an A/B test in that the software exercises the user split, but both populations are shown the same experience. Observations are collected, metrics are computed, and the A/A test should show no statistically significant difference 95% of the time (if 95% confidence intervals are used)."
---
