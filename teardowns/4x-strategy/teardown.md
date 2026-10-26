---
title: 4X strategy games
prompt: What makes a great 4X strategy game?
root: four-x-game
assembly:
  - title: Lay out the map
    text: Choose the grid, the map size and the generator, then hide it under fog. Place starts fairly and scatter rewards for scouts.
    adds: [tile-grid, map-size, map-generation, fog-of-war, start-position, exploration-rewards]
    makes: map
  - title: Price expansion
    text: Make a settler that costs something real, rules for city sites and borders, and a brake that grows with empire size.
    adds: [settler, city-site, territory, expansion-brake, tall-vs-wide, empire-size-loop]
    makes: expansion
  - title: Wire the economy
    text: Give tiles yields, let cities grow and build, add improvements, scarce resources and upkeep, and check how fast the snowball rolls.
    adds: [yields, city-growth, tile-improvement, build-queue, strategic-resources, upkeep, snowball]
    makes: economy
  - title: Draw the tech tree
    text: Lay out technologies in eras, attach unlocks, set costs and choose how research is offered.
    adds: [tech-cost, research-model, eras, unlocks, beeline]
    makes: tech-tree
  - title: Add war
    text: Define units, the combat model and its preview, then movement, supply and war weariness.
    adds: [units, combat-model, combat-odds, supply, war-weariness]
    makes: military
  - title: Build an AI opponent
    text: Give each AI leader a personality, then set the bonuses each difficulty level adds.
    adds: [ai-personality, ai-difficulty]
    makes: ai-opponent
  - title: Open diplomacy
    text: Add a trade screen and show the reasons each rival likes or dislikes the player.
    adds: [relation-modifiers, deal-table]
    makes: diplomacy
  - title: Seat the rivals
    text: Put AI and human rivals on the map with diplomacy between them.
    adds: [ai-opponent, diplomacy]
    makes: rivals
  - title: Make factions differ
    text: Give each faction traits, then hunt for dominant strategies and read the win rates.
    adds: [faction-traits, dominant-strategy, faction-win-rate]
    makes: factions
  - title: Stagger the goals
    text: Give projects different lengths so something always finishes soon.
    adds: [overlapping-goals]
    makes: one-more-turn
  - title: Shape the turn
    text: Fill each turn with interesting decisions, choose the turn order, add events and cut the busywork.
    adds: [interesting-decisions, turn-order, micromanagement, events, one-more-turn]
    makes: turn
  - title: Show the empire
    text: Add notifications, tooltips, an overview screen and map overlays.
    adds: [notifications, tooltips, empire-overview, map-overlays]
    makes: interface
  - title: Close the game
    text: "Set the victory conditions, then test the last third: catch-up rules, a crisis, and the game's length."
    adds: [victory-conditions, late-game, catch-up, endgame-crisis, game-length]
    makes: victory
  - title: Play the whole game
    text: Explore, expand, exploit and exterminate, turn by turn, until one empire wins.
    adds: [map, expansion, economy, tech-tree, military, rivals, factions, turn, interface, victory, four-x-arc]
    makes: four-x-game
---

A 4X game hands the player an empire of one city and a hidden map, then asks them to explore, expand, exploit and exterminate against rival empires, one turn at a time. Underneath, it is a growth engine: land becomes yields, yields buy more land, research and armies, and the lead compounds. A designer's work is mostly brakes and choices. Expansion costs, upkeep, war weariness and catch-up rules stop the snowball from deciding the game early, and the tech tree, map and rivals keep each turn full of decisions without an obvious best answer. The genre's known faults show up late in the game: too many orders per turn and a winner who is clear long before the end.
