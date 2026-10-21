---
term: State value
aka: [the value right now]
kind: measure
plain: A state value is one current reading of an attribute, such as hit points, position, level or resource count.
does: Lets the resolver and the player detect change.
ask: What is the value before and after the action?
cues:
  - Hit points shown at their current value
  - Position changing after an action
  - Level or resource count updating
at: [0, 0, 0.1]
sources:
  - work: ernest-adams-and-joris-dormans-game-mechanics
    url: https://ptgmedia.pearsoncmg.com/imprint_downloads/peachpit/peachpit/samplechapters/0321820274/0321820274_gamemechanics_ch05section.pdf
    page: ch. 5, p. 89
    quote: The state of a Machinations diagram refers to the current distribution of resources among its nodes.
  - work: ian-schreiber-game-design-concepts-level-16-game
    page: "Balance Between Game Objects; More Game Balance Techniques: stats, costs, benefits and changing values"
    quote: Spreadsheets help you to see causes and effects of changes in the game.
  - work: tynan-sylvester-the-simulation-dream
    page: "Eclipse Colony design case study: yield, growth timer and health as state variables"
    quote: When the plant is harvested, the amount of food that appears is based on yield.
  - work: robert-nystrom-game-programming-patterns
    url: https://gameprogrammingpatterns.com/state.html
    page: "State: current state and transitions"
    quote: "This maps directly to a state machine: Each room is a state. The room you’re in is the current state. Each room’s exits are its transitions. The navigation commands are the inputs."
---
