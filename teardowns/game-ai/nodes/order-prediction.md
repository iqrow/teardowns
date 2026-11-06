---
term: "Order prediction"
aka: [opponent-order prediction, move prediction, policy prediction]
kind: process
plain: "A probability distribution over the opponent's candidate orders for this simultaneous turn, inferred from the board and shared dialogue or learned from human play data."
does: "Turns predictions of the opponent's current-turn policy into weighted scenarios that search can score before choosing an action."
ask: "Which orders are likely, what evidence supports them, and how much probability remains on coordinated alternatives?"
cues: ["A ranked list of opponent orders with probabilities", "Ghost arrows or order cards fade from likely to unlikely", "The distribution updates after a message, observation or resolved turn"]
range: "One predicted order, a ranked shortlist, or a probability distribution over candidate orders."
trouble: "The model treats an old habit as certain, misses a coordinated order set, or overreacts to a perceived weakness and is deceived by a decoy."
links:
  - {to: opponent-modelling, rel: see also}
at: [-0.53, 0.865, 0.08]
sources:
  - work: meta-cicero
    page: "p. 1"
    quote: "At each point in the game, Cicero models how the other players are likely to act on the basis of the game state and their conversations."
  - work: meta-cicero
    page: "p. 5"
    quote: "a strategic reasoning module that predicts other players’ policies (a probability distribution over actions) for the current turn according to the state of the board and the shared dialogue"
  - work: gray-no-press-diplomacy
    page: "p. 4, Section 3.1"
    url: "https://arxiv.org/pdf/2010.02923"
    quote: "A blueprint policy and value function estimated from human play is ideal for performing search in a general-sum game, because it is likely to realistically approximate state values and other players’ actions when playing with humans."
  - work: billings-roshambo-competition
    page: "Dummy Bot: De Bruijn"
    quote: "If the opponent is over-zealous in its exploitation of any perceived weakness, it will be continuously deceived and punished!"
---
