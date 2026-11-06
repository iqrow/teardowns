---
term: Decision-making architecture
aka: [AI architecture, behaviour selection, behaviour system, behavior system]
kind: part
plain: "The structure that turns the AI's knowledge and goals into a next action."
does: "Balances reactivity, authorial control, adaptability, clarity and computational cost instead of treating one algorithm as universally best."
ask: "What structure selects actions here, and what does it make easy or difficult to tune?"
cues: ["A graph, tree, score table, plan chain, rule list or learned network in a debug view", "A visible decision trace that names the selected action", "Different actions selected when the same evidence changes"]
trouble: "The structure is hard to inspect, cannot express a needed choice, or produces valid actions that look foolish to the player."
children: [evaluation-function, forward-model, transposition-table, response-curves, decision-frequency, commitment, randomness, planning-horizon, ai-budget, simultaneous-moves]
variants:
  - label: Architecture
    items:
      - id: arch-fsm
        name: Finite-state machine
        plain: "A graph of discrete states with conditional transitions between them, optionally nested as a hierarchical state machine."
        why: "It counts as an FSM when one current state and its transition conditions organise the behaviour."
        sources:
          - work: yannakakis-togelius-ai-and-games
            page: "ch. 2, pp. 33-34"
            quote: "The FSM can only be in one state at a time; the current state can change to another if the condition in the corresponding transition is fulfilled."
      - id: arch-behaviour-tree
        name: Behaviour tree
        plain: "A tree of behaviours whose sequences, selectors and decorators choose or compose tasks."
        why: "It counts as a behaviour tree when traversal through behaviour nodes determines the active task rather than a state graph."
        sources:
          - work: yannakakis-togelius-ai-and-games
            page: "ch. 2, pp. 34-35"
            quote: "The strength of BTs compared to FSMs is their modularity: if designed well, they can yield complex behaviors composed of simple tasks."
      - id: arch-utility
        name: Utility system
        plain: "A scorer that rates available options against several considerations and selects a high-utility action."
        why: "It counts as utility when comparable scores rank options, even if the considerations are authored rules or learned values."
        sources:
          - work: yannakakis-togelius-ai-and-games
            page: "ch. 2, p. 37"
            quote: "utility-based AI architectures examine all available options, assign a utility to them and select the option that is most appropriate (highest utility)."
      - id: arch-goap
        name: Goal-oriented action planning
        plain: "A planner that searches actions with preconditions and effects to reach a chosen goal."
        why: "It counts as GOAP when a goal and symbolic action model produce a sequence rather than a hand-written path through behaviours."
        sources:
          - work: dawe-behavior-selection-algorithms
            page: "Section 4.6"
            quote: "GOAP allows an AI system … to create its own approaches to solving problems by being provided with a description of how the game world works—that is, a list of the actions that are possible, the requirements before each action can be used (called “preconditions”), and the effects of the action."
      - id: arch-htn
        name: Hierarchical task network
        plain: "A planner that decomposes a high-level task into methods and primitive actions."
        why: "It counts as HTN when compound tasks are repeatedly decomposed according to methods and world-state conditions."
        sources:
          - work: dawe-behavior-selection-algorithms
            page: "Section 4.7"
            quote: "HTN works by starting with the initial world state and a root task representing the problem we are looking to solve. This high-level task is then decomposed into smaller and smaller tasks until we end up with a plan of tasks we can execute to solve our problem."
      - id: arch-rules
        name: Rule-based script
        plain: "A set of authored if-then rules that maps conditions to actions or priorities."
        why: "It counts as rule-based when explicit conditions and responses are the primary representation, whatever language or editor stores them."
        sources:
          - work: yannakakis-togelius-ai-and-games
            page: "ch. 1, p. 11"
            quote: "NPC behaviors were scripted or relied on simple rules, partly because of the primitive state of AI research, but perhaps even more because of the primitive hardware of the time."
          - work: bourg-ai-game-developers
            page: "Book excerpt, Fighting Game Strike Prediction"
            url: "https://www.gamedeveloper.com/programming/book-excerpt-ai-for-game-developers"
            quote: "To achieve this, we're going to implement a rule-based system with a learning capability. We will achieve this learning by weighting each rule to reinforce some while suppressing others."
      - id: arch-search
        name: Game-tree search
        plain: "A search through possible future game states, including minimax with alpha-beta pruning, Monte Carlo tree search, and variants that branch on both sides' orders at once."
        why: "It counts as game-tree search when the controller explores future action branches rather than only evaluating the current state."
        sources:
          - work: yannakakis-togelius-ai-and-games
            page: "ch. 2, pp. 42-46"
            quote: "The core loop of the Minimax algorithm alternates between player 1 and player 2—such as the white and black player in Chess—named the min and the max player. For each player, all possible moves are explored."
          - work: yannakakis-togelius-ai-and-games
            page: "ch. 2, p. 45"
            quote: "The core loop of the MCTS algorithm can be divided into four steps: Selection, Expansion (the first two steps are also known as tree policy), Simulation and Back-propagation. The steps are also depicted in Fig. 2.7."
          - work: tak-mcts-simultaneous-move
            page: "Abstract, p. 1"
            quote: "The extension to simultaneous move games, where all players choose moves simultaneously each turn, is non-trivial due to the complexity of this class of games."
      - id: arch-learned
        name: Learned policy
        plain: "A policy learned from examples, rewards or demonstrations that maps state information to actions."
        why: "It counts as learned when the policy parameters come from training data or interaction rather than only hand-authored decision rules."
        sources:
          - work: yannakakis-togelius-ai-and-games
            page: "ch. 2, pp. 71-72"
            quote: "In reinforcement learning, samples of good behavior are usually not available (as in supervised learning); instead, similarly to evolutionary (reinforcement) learning, the training signal of the algorithm is provided by the environment based on how an agent is interacting with it."
sources:
  - work: dawe-behavior-selection-algorithms
    page: "Section 4.1"
    quote: "While each of these example AIs may follow the Sense–Think–Act cycle, the “think” part of that cycle is ill-defined. There are a variety of algorithms to choose from, and each is appropriate for different uses."
  - work: yannakakis-togelius-ai-and-games
    page: "ch. 2, p. 32"
    quote: "Finite state machines, behavior trees and utility-based AI are ad-hoc behavior authoring methods that have traditionally dominated the control of non-player characters in games."
---
