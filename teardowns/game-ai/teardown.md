---
title: Game AI
prompt: I want to build a computer opponent that is hard to beat and fun to play against.
root: ai-opponent
assembly:
  - title: Give it senses
    text: "Decide what the AI may know: what it sees and hears now, what it remembers after contact is lost, and what the map means. Put the facts where every decision can read them."
    adds: [sensing, memory, blackboard, terrain-analysis, information-access]
    makes: knowledge
  - title: Lay the paths
    text: Build a navigation graph of the map, find routes with A*, price routes by distance, terrain and danger, and steer single units and groups along them.
    adds: [navigation-graph, pathfinding, path-cost, steering, group-movement]
    makes: movement
  - title: Choose how it decides
    text: Pick a decision architecture and write the scores and curves it chooses with. Then set how often it decides again, how long it sticks with a choice, how much chance it uses, how far it looks ahead and how much time it may spend.
    adds: [evaluation-function, response-curves, decision-frequency, commitment, randomness, planning-horizon, ai-budget]
    makes: decision-core
  - title: Fight the battles
    text: Map where each side is strong, score places to stand, choose targets, give squads roles, and set when they pull back.
    adds: [influence-map, position-evaluation, target-selection, squad-coordination, retreat]
    makes: tactical-layer
  - title: Plan the war
    text: Choose goals and an opening, split income between economy and army, build an army that counters what scouts have seen, judge each threat, and pick the moment to attack.
    adds: [goal-selection, build-order, resource-allocation, army-composition, scouting, threat-assessment, attack-timing]
    makes: strategic-layer
  - title: Give it a character
    text: Write styles of play, bias the shared decision code toward each one, and vary the strategy from match to match so the player can plan against it but not script a win.
    adds: [archetypes, behaviour-weights, strategy-variety, predictability]
    makes: personality
  - title: Let it learn the player
    text: Infer the opponent's plan and habits, switch strategy when the evidence says the plan is failing, and keep records across matches. Watch for exploits.
    adds: [opponent-modelling, player-modelling, in-game-adaptation, cross-game-learning, exploit]
    makes: adaptation
  - title: Show its intent
    text: Telegraph attacks before they land, let agents call out what they are doing, and check that players read the AI as smart and fair.
    adds: [telegraphing, barks, illusion-of-intelligence, perceived-fairness]
    makes: legibility
  - title: Set the difficulty
    text: Build a ladder of levels from better or worse play, bonuses and handicaps, and reaction limits. Decide whether the game adjusts during play, and read the win rate at each level.
    adds: [difficulty-levels, handicaps, reaction-time, dynamic-difficulty, deliberate-mistakes, win-rate, rubber-band-loop]
    makes: difficulty
  - title: Test and tune
    text: Draw the AI's reasoning on screen, run batches of AI-versus-AI matches, rate the versions, hunt for exploits, tune the numbers and watch people play.
    adds: [debug-visualisation, ai-vs-ai, skill-rating, exploit-search, parameter-tuning, playtesting, tuning-loop]
    makes: evaluation
  - title: Seat the opponent
    text: Run the sense, think and act loop through every layer, and put the finished opponent across the table from the player.
    adds: [knowledge, movement, decision-core, sense-think-act, tactical-layer, strategic-layer, personality, adaptation, legibility, difficulty, evaluation]
    makes: ai-opponent
---

An AI opponent is a program that plays a game against a person. It runs one loop many times a second or once a turn: it reads what it knows of the game, decides, and acts through units that must move and fight. Its decisions sit in layers. A strategic layer picks goals, the army to field and the economy to pay for it, a tactical layer runs each fight, and movement carries out the orders. The goal is the player's experience, not the win, so difficulty, personality and legibility make the AI a rival people can read, beat and want to face again, and testing against other AIs and against people finds the blind spots a player could exploit every game.
