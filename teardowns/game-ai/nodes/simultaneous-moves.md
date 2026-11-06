---
term: Simultaneous-move decisions
aka: [simultaneous turns, WEGO, we-go, simultaneous action selection, sealed orders, simultaneous move games]
kind: part
plain: "A decision step in which each side commits a complete order set before any side sees the other's reply. The resolver then applies the joint orders to produce the next state."
does: "Preserves the game's uncertainty and counterplay instead of silently giving one side a reaction move."
ask: "What must each side commit before the reveal, and how are conflicting orders resolved?"
cues: ["Two order panels stay hidden until both sides are ready", "A reveal or resolution step combines two complete order sets", "A debug view labels rows and columns as each side's plans"]
trouble: "A sequential search gives one side an information advantage, or a fixed order is easy to read and counter before the reveal."
children: [candidate-orders, order-prediction, payoff-matrix, equilibrium-search, mixed-strategy, prediction-layers, human-regularisation]
sources:
  - work: bosansky-simultaneous-move-games
    page: "Abstract, p. 1"
    quote: "Simultaneous move games model discrete, multistage interactions where at each stage players simultaneously choose their actions."
  - work: tak-mcts-simultaneous-move
    page: "Abstract, p. 1"
    quote: "The extension to simultaneous move games, where all players choose moves simultaneously each turn, is non-trivial due to the complexity of this class of games."
  - work: lanctot-tron-simultaneous-mcts
    page: "Section 2.1, p. 2"
    quote: "In practice, this worked well in Tron … except it clearly favours one player which is especially problematic when players are close to each other."
  - work: gray-no-press-diplomacy
    page: "Section 2.1, p. 2"
    url: "https://arxiv.org/pdf/2010.02923"
    quote: "Importantly, all actions occur simultaneously. In live games, players write down their orders and then reveal them at the same time."
---
