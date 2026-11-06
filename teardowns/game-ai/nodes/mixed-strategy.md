---
term: Mixed strategy
aka: [randomised policy, probability mix, behavioural strategy, stochastic policy]
kind: knob
plain: "A probability distribution over candidate plans. The AI samples one plan from it instead of always showing the same pure choice."
does: "Protects a good plan from being countered in advance while keeping the sampled plans inside the set the resolver can execute."
ask: "Which candidate plans get probability, and how much variation is safe before the AI starts choosing implausible orders?"
cues: ["Probability bars sit beside candidate plan names", "A rolled or sampled plan is highlighted before the reveal", "Repeated equivalent states produce varied but legal plans"]
range: "A pure plan with probability one, a sparse mix over a few strong plans, a broader distribution over plausible plans, a pool of plans where a different plan may be used each time the scenario is played, or a fallback to random play once the AI's own reads start losing."
trouble: "The policy always reveals its strongest line, its low-probability tail selects an order that is visibly unsafe or out of character, or it plays an even random mix that only draws, even against weak opponents it could beat."
at: [0.0, 0.45, 0.08]
links:
  - {to: randomness, rel: see also}
  - {to: predictability, rel: see also}
sources:
  - work: bosansky-simultaneous-move-games
    page: "Section 2, p. 8"
    quote: "Any pure strategy of one player can be exploited by the opponent."
  - work: gray-no-press-diplomacy
    page: "Section 2.1, p. 2"
    quote: "This makes Diplomacy an imperfect-information game in which an optimal policy may need to be stochastic in order to prevent predictability."
    url: "https://arxiv.org/pdf/2010.02923"
  - work: battlefront-combat-mission-normandy-manual
    page: "AI Editor, p. 135"
    quote: "The Computer Player only ever uses one AI Plan for a scenario, however it can use different Plans (if they exist) each time the scenario is played."
  - work: shoham-leyton-brown-multiagent-systems
    page: "Section 3.2.4, p. 59"
    url: "http://www.masfoundations.org/mas.pdf"
    quote: "Players could also follow another, less obvious type of strategy: randomizing over the set of available actions according to some probability distribution. Such a strategy is called a mixed strategy."
  - work: billings-roshambo-competition
    page: "Algorithms and Ideas: Dummy bots"
    quote: "This ensures that programs try to win matches and maximize their winning margin, since it is not enough to simply avoid losing (as with the Random (Optimal) strategy)."
  - work: billings-roshambo-competition
    page: "Dummy Bot: Random (Optimal)"
    quote: "It finished in the middle of the pack (27th), drawing every match, as expected."
  - work: egnor-iocaine-powder
    page: "Strategies: Random guess"
    quote: "if someone is actually able to predict and defeat Iocaine Powder with any regularity, before long the random predictor will be ranked with the highest score (since nobody can defeat random!). At that point, the meta-strategy will ensure that the program \"cuts its losses\" and starts playing randomly to avoid a devastating loss."
---
