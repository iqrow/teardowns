---
term: Randomness
aka: [nondeterminism, weighted choice, stochastic selection]
kind: knob
plain: "A controlled chance of choosing among several reasonable options instead of always taking the same top choice."
does: "Adds variety and makes behaviour harder to exploit without granting the AI permission to choose nonsense."
ask: "Where may chance enter, and what stops a low-scoring or unsafe action from winning?"
cues: ["Two good options chosen in different runs", "A weighted-choice trace showing the candidate set", "The same situation producing varied but plausible actions"]
range: "Deterministic top choice, weighted choice among the best few options, or stochastic search with a bounded random seed."
trouble: "The opponent repeats a solved script, or randomness selects an action that the player can see is wrong."
at: [-0.68, 0.3, 0.08]
sources:
  - work: graham-utility-theory
    page: "Section 9.6"
    quote: "You can get the best of both worlds by taking a subset of the highest scoring actions and choosing one of those with a weighted random."
  - work: dill-what-is-game-ai
    page: "p. 4"
    quote: "we need to ensure that our random choices are all still reasonable."
  - work: rabin-game-ai-pro
    page: "ch. 3, §3.1 Introduction"
    url: "https://www.gameaipro.com/GameAIPro/GameAIPro_Chapter03_Advanced_Randomness_Techniques_for_Game_AI.pdf"
    quote: "We depend on it for variation in our games, using it to keep our gameplay fresh and our NPCs from becoming predictable"
  - work: rabin-game-ai-pro
    page: "ch. 3, §3.3.2 Randomness Doesn’t Look Random: The Fix"
    url: "https://www.gameaipro.com/GameAIPro/GameAIPro_Chapter03_Advanced_Randomness_Techniques_for_Game_AI.pdf"
    quote: "When generating a random sequence of numbers, if the next number will hurt the appearance of randomness, pretend that you never saw it and generate a new number"
  - work: rabin-game-ai-pro
    page: "ch. 3, §3.4 Perlin Noise for Game AI"
    url: "https://www.gameaipro.com/GameAIPro/GameAIPro_Chapter03_Advanced_Randomness_Techniques_for_Game_AI.pdf"
    quote: "This “smooth” nature of randomness means that we don’t get wild jumps from one random number to another, which can be a very desirable trait."
---
