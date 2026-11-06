---
term: Simultaneous-move search
aka: [equilibrium search, joint-action search, sealed-order search]
kind: process
plain: "A search process that evaluates joint order choices and chooses a policy that is safe against plausible replies, rather than pretending the turn is sequential."
does: "Trades exact strategic safety against time by selecting a solver, a sampler or a best-response approximation that fits the action space and the forward-model budget."
ask: "Which search method respects hidden replies here, and what error or exploitability can the remaining budget tolerate?"
cues: ["A debug panel names the search method and iteration count", "A value or exploitability trace settles as candidate orders are added", "The selected order comes from a distribution or an explicit opponent mix"]
trouble: "A solver is theoretically elegant but too slow, a sampler never settles, or serialisation makes the AI defend against an information advantage it will not have in play."
at: [-0.53, 0.45, 0.08]
links:
  - {to: forward-model, rel: see also}
variants:
  - label: Method
    items:
      - id: sm-serialised
        name: Serialised alpha-beta (ABCD)
        plain: "Turn each joint decision into alternating plies and run alpha-beta, alternating or randomising who moves first to reduce first-player bias, and use the serialised values as bounds. Some RTS searchers found the remaining bias cost them little in practice."
        why: "It is serialised because the search tree has alternating plies. The reason to use it is that alpha-beta can provide fast bounds, not that either player truly sees the other's sealed order."
        sources:
          - work: churchill-rts-combat-search
            page: "Section 3.2, p. 3"
            quote: "The idea is to replace simultaneous move states by two-level subtrees in which players move in turn, maximizing respectively minimizing their utilities (Figure 1: Minmax and Maxmin)."
          - work: bosansky-simultaneous-move-games
            page: "Section 4.2, p. 15"
            quote: "The second player to move has an advantage of knowing what action the first player chose."
          - work: ontanon-combinatorial-bandits
            page: "Naïve Monte Carlo Tree Search in RTS Games, p. 61"
            quote: "Algorithms like minimax might result in under or overestimating the value of positions, and several solutions have been proposed … However, we noticed that this had a very small effect on the practical performance of our algorithm in RTS games, so we have not incorporated any of these techniques"
      - id: sm-matrix-solve
        name: Matrix solve (SMAB / double-oracle)
        plain: "Build the payoff matrix at each state, solve its zero-sum game by linear programming, and propagate the value backwards; SMAB and double-oracle variants prune work."
        why: "It is matrix solving because the equilibrium comes from the joint-outcome table, not because the table has a fixed size or resembles a spreadsheet."
        sources:
          - work: bosansky-simultaneous-move-games
            page: "Section 4.1, p. 14"
            quote: "At each state of the game, it creates a matrix game for the current state using child subgame values, solves the matrix game, and propagates back the value of the matrix game."
          - work: bosansky-simultaneous-move-games
            page: "Section 4.1, p. 14"
            quote: "A linear programming algorithm computes both the value … of the matrix game … as well as the optimal strategy to play in this matrix game"
          - work: bosansky-simultaneous-move-games
            page: "Section 3.2, p. 10"
            quote: "The main idea of the algorithm is to reduce the number of the recursive calls of the backward induction algorithm by removing dominated actions in every state of the game."
          - work: bosansky-simultaneous-move-games
            page: "Section 4.3, p. 19"
            quote: "The computational complexity of solving a matrix game by linear programming can be reduced by their incremental construction using the iterative double-oracle algorithm."
      - id: sm-mcts
        name: Simultaneous-move MCTS
        plain: "Grow sampled joint-action states and use a simultaneous-move selection policy such as decoupled UCT, Exp3 or regret matching."
        why: "It is not ordinary UCT merely because it grows a tree. The selection and update policy must account for both actions being chosen without observing the other."
        sources:
          - work: tak-mcts-simultaneous-move
            page: "Abstract, p. 1"
            quote: "We use several possible variants, Decoupled UCT, Sequential UCT, Exp3, and Regret Matching."
          - work: tak-mcts-simultaneous-move
            page: "Abstract, p. 1"
            quote: "The results indicate that the relative performance of each variant depends strongly on the game and the opponent."
      - id: sm-regret-matching
        name: One-turn regret matching
        plain: "Sample candidate orders, update each order's cumulative regret, and use the resulting policy for the current turn."
        why: "It is one-turn regret matching because the algorithm solves a sampled subgame for this phase, then returns to the main game instead of promising a full-game equilibrium."
        sources:
          - work: gray-no-press-diplomacy
            page: "Section 3.2, p. 5"
            quote: "We compute a policy for each agent by running the sampled regret matching algorithm."
            url: "https://arxiv.org/pdf/2010.02923"
          - work: gray-no-press-diplomacy
            page: "Section 2, p. 2"
            quote: "We sample a limited number of actions from the blueprint policy rather than search over all possible actions, which would be intractable."
            url: "https://arxiv.org/pdf/2010.02923"
      - id: sm-best-response
        name: Best response
        plain: "Choose the candidate plan with the greatest expected outcome against a fixed or predicted distribution of opponent plans."
        why: "It is a best response because the opponent distribution is held fixed. It is not an equilibrium until both sides' policies answer each other."
        sources:
          - work: gray-no-press-diplomacy
            page: "Section 4.2, p. 7"
            quote: "BRBot is an agent that computes a best response to the blueprint policy in the subgame."
            url: "https://arxiv.org/pdf/2010.02923"
          - work: bosansky-simultaneous-move-games
            page: "Definition 2.2, p. 7"
            quote: "Note that a best response can be a mixed strategy, but a pure best response always exists [9] and it is often easier to compute."
sources:
  - work: bosansky-simultaneous-move-games
    page: "Abstract, p. 1"
    quote: "In this paper, we describe both novel and existing algorithms that compute strategies for the class of two-player zero-sum simultaneous move games."
  - work: lisy-convergence-sm-mcts
    page: "Abstract"
    quote: "We confirm the formal result and show that additional MCTS variants also converge to approximate NE on the evaluated games."
  - work: lisy-convergence-sm-mcts
    page: "Section 3, p. 3"
    url: "https://arxiv.org/pdf/1310.8613"
    quote: "In Simultaneous Move MCTS (SM-MCTS), the main difference is that a joint action of both players is selected."
---
