---
term: AI opponent
aka: [computer opponent, CPU player, computer player, AI player, enemy AI, bot, skirmish AI, artificial opponent, game AI]
kind: product
plain: "A player run by the computer that competes against a person in a game. Over and over, it reads what it knows of the game, decides and acts, until the match ends."
ask: "Does it give this player a fight that is hard to win, fair to lose and readable enough to learn from, with no blind spot that beats it every time?"
cues: ["Rival armies, racers or soldiers that act with nobody at the controls", "A difficulty setting chosen before the match", "A rival leader's name and portrait in the HUD", "Enemy forces arriving out of the fog of war"]
children: [knowledge, decision-core, strategic-layer, tactical-layer, movement, difficulty, personality, legibility, adaptation, evaluation, sense-think-act]
variants:
  - label: Genre
    items:
      - id: genre-rts
        name: Real-time strategy
        plain: "Armies and economies on an overhead map, with no turns. The AI commands many units at once and sees only near its own units, so it must scout."
        sources:
          - work: robertson-watson-rts-review
            page: "Section 1.1, RTS Games"
            quote: "The real-time aspect comes from the fact that players do not take turns, but instead may perform as many actions as they are physically able to make"
          - work: robertson-watson-rts-review
            page: "Section 1.1, RTS Games"
            quote: "Visibility is usually limited to a small area around player-owned units, limiting information and forcing players to conduct reconnaissance in order to respond effectively to their opponents."
      - id: genre-turn-based
        name: Turn-based strategy
        plain: "Players take turns, so the AI can think between moves. One turn can hold orders for dozens of units, so the choices multiply fast."
        why: "Taking turns is the shared feature, whatever the setting: the AI gets time to think, and one turn can hold a very large number of possible orders."
        sources:
          - work: churchill-hierarchical-portfolio-search
            page: "Section 30.3, Prismata Gameplay Overview"
            quote: "Players take turns building resources, using unit abilities, purchasing new units, and attempting to destroy the units of their opponents."
          - work: churchill-hierarchical-portfolio-search
            page: "Section 30.1, Introduction"
            quote: "Players can control groups of tens or even hundreds of units, each with their own unique properties and strategies, making for a gigantic number of possible actions to consider at any given state of the game."
      - id: genre-shooter
        name: Shooter
        plain: "An opponent in a first-person shooter whose AI must react quickly to player actions."
        why: "The genre is the surface: an FPS opponent still senses, decides and moves, but its decisions must come faster."
        sources:
          - work: jakatdar-reactive-fps-architecture
            page: "Section 10.1, Introduction"
            quote: "Many of the general AI principles and techniques are applicable for FPS AI, but they need to be modified to cater to the needs of fast-paced action."
      - id: genre-racing
        name: Racing
        plain: "Rival drivers on the same track as the player. The AI drives near the limit of grip, and a persona sets each driver's skill."
        why: "A racing rival is an AI opponent because it competes for the same win under the same rules. The car is only the body it acts through."
        sources:
          - work: tomlinson-racing-ai-architecture
            page: "Section 38.1, Introduction"
            quote: "it is important to push for accuracy and detail with the objective of convincing the user that his AI opponents are as expert on the track as he is."
          - work: tomlinson-racing-ai-architecture
            page: "Section 38.3, The Architecture"
            quote: "This layer works on a fairly long timescale and is responsible for the individual driver’s skill levels which affect the performance of the AI."
      - id: genre-board
        name: Board game
        plain: "A program across a board, as in chess. Nothing is hidden and nothing is left to chance, so it can search ahead through both sides' moves."
        sources:
          - work: shannon-programming-computer-chess
            page: "Section 2, General Considerations"
            quote: "In chess there is no chance element apart from the original choice of which player has the first move. This is in contrast with card games, backgammon, etc. Furthermore, in chess each of the two opponents has \"perfect information\" at each move as to all previous moves (in contrast with Kriegspiel, for example)."
      - id: genre-simultaneous
        name: Simultaneous turns
        plain: "Every side writes its orders in secret at the same time, then the game reveals and resolves them all together. The AI must commit before it sees the player's orders, just as the player must."
        why: "It counts as simultaneous when every side commits hidden orders before any are revealed and one resolution applies them all. How the turn ends (a timer, everyone ready, a deadline days away) and the setting do not decide it."
        sources:
          - work: avalon-hill-the-rules-of-diplomacy
            page: "p. 6, How to Play: Overview"
            quote: "Immediately following this period of “diplomacy,” each player secretly writes an order for each of his or her units on a slip of paper. When all players have written their orders, the orders are simultaneously revealed, and then the orders are all resolved."
          - work: matrix-games-wego-world-war-ii-overlord-dev
            page: "Dev Diary #1"
            quote: "in a WEGO system both players issue their orders during the planning phase, and then the game executes them simultaneously in a resolution phase"
  - label: Platform
    items:
      - id: platform-computer
        name: Computer program
        plain: "Code that takes the current game state and returns the AI's next actions. It runs on the player's machine or on a server."
        sources:
          - work: churchill-hierarchical-portfolio-search
            page: "Section 30.3, Prismata Gameplay Overview"
            quote: "Due to these properties, the Prismata AI was designed as a module that is separate from the rest of the game engine, accepts a current game state as input, and as output produces an ordered sequence of actions for the current player to perform."
          - work: churchill-hierarchical-portfolio-search
            page: "Section 30.3, Prismata Gameplay Overview"
            quote: "a game state could be sent over a network to be calculated (if the game is being run on a platform with limited computational power), or run locally on a user’s hardware"
      - id: platform-automa
        name: Board-game automa
        plain: "A rival made of printed rules and a deck of cards, so one person can play a multiplayer board game alone. The player carries out what the cards say."
        why: "An automa is an AI opponent with no computer: its decision rules are printed, and the human runs them without making its choices."
        sources:
          - work: automa-factory-approach
            page: "The Automa Approach, principle 1"
            quote: "An artificial opponent, the Automa, takes the place of a human player in a multiplayer game."
          - work: automa-factory-approach
            page: "The Automa Approach, principle 5"
            quote: "The player must not make choices on behalf of the Automa except in rare cases where it makes sense because of a cooperative element or for thematic reasons."
          - work: stonemaier-scythe-automa-deck
            page: "Product description"
            quote: "1 full deck of Automa cards to simulate an AI opponent."
sources:
  - work: dill-what-is-game-ai
    page: "Section 1.1, Introduction"
    quote: "Game AI should be about one thing and one thing only: enabling the developers to create a compelling experience for the player."
  - work: soren-johnson-playing-to-lose
    page: "Talk introduction"
    quote: "I highlighted the difference between “good” AI and “fun” AI and how writing AI for Civ is tricky because it fits somewhere between those two extremes."
  - work: robertson-watson-rts-review
    page: "Section 1, Introduction"
    quote: "Video games often have real-time constraints which prevent players from thinking extensively about each action, randomness which prevents players from completely planning future events, and hidden information which prevents players from knowing exactly what the other players are doing."
  - work: churchill-hierarchical-portfolio-search
    page: "Section 30.2, AI Design Goals"
    quote: "This required the creation of several different difficulty settings so that players could continue to be challenged from beginner all the way up to expert play."
  - work: churchill-hierarchical-portfolio-search
    page: "Section 30.2, AI Design Goals"
    quote: "which can become quite boring if the AI does the same thing every time it encounters similar situations."
---
