---
term: Tuning loop
aka: [evaluation cycle, test-and-adjust cycle]
kind: loop
plain: "A repeating cycle that runs automated matches, reads strength, changes parameters and checks the result with people."
does: "Closes the gap between a plausible AI design and behaviour that survives both statistics and human judgement."
ask: "What evidence justifies the next change, and did the change improve the whole experience rather than one score?"
loop:
  type: cycle
  through: [ai-vs-ai, skill-rating, parameter-tuning, playtesting]
at: [0.0, -0.34, 0.08]
sources:
  - work: dill-what-is-game-ai
    page: "p. 4, Simplicity and Scalability"
    quote: "it is necessary to repeatedly test the AI, find the worst problems, correct them, and then test again."
---
