---
term: Reaction time
aka: [response delay, action-rate limit, APM cap]
kind: knob
plain: "The delay before the AI can respond to new information and the limit on how many actions it can issue in a time window."
does: "Keeps a fast computer from winning by raw speed and makes quick responses part of the intended challenge."
ask: "How soon may the AI notice, decide and act, and is that timing comparable with the player's interface?"
cues: ["A visible response-delay or actions-per-minute setting", "A unit that waits briefly after a new threat appears", "A monitoring graph showing actions over time"]
range: "Use a delay, an observation interval, an action-rate cap, or all three. AlphaStar's interface used a requested delay and an actions-per-minute limit."
trouble: "The AI reacts before the player could perceive the event, or a slow setting makes it look broken rather than fallible."
at: [0.34, -0.24, 0.08]
sources:
  - work: vinyals-alphastar
    page: "p. 1"
    quote: "Humans play StarCraft under physical constraints that limit their reaction time and the rate of their actions."
  - work: vinyals-alphastar
    page: "Methods, APM limits"
    quote: "Agents are limited to executing at most 22 non-duplicate actions per 5-s window."
---
