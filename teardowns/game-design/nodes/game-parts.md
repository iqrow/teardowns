---
term: Game parts
aka: [the things in the model]
kind: part
plain: Game parts are the physical or non-physical objects represented in the game's model, such as units, cards, spaces, resources or goals.
does: Give the system objects that can hold state and take part in interactions.
ask: What object or system is the player actually manipulating?
cues:
  - Units, cards or spaces on the playfield
  - Resources and goals represented in the game
children: [token, rule]
at: [-0.55, 0.25, 0.08]
sources:
  - work: ernest-adams-and-joris-dormans-game-mechanics
    url: https://ptgmedia.pearsoncmg.com/imprint_downloads/peachpit/peachpit/samplechapters/0321820274/0321820274_gamemechanics_ch05section.pdf
    page: ch. 5, p. 83
    quote: Pools are used to model entities. For example, if you have a resource called money and an entity called the player’s bank account, you would use a pool to model the bank account.
  - work: daniel-cook-what-are-game-mechanics
    page: "feedback loop: simulated game world, tokens and causal rules"
    quote: The simulation contains public and private tokens and the causal rules that affect the states of the tokens.
    flag: author blog
  - work: ian-schreiber-game-design-concepts-level-16-game
    page: Balance Between Game Objects; Three Ways to Balance Game Objects
    quote: Cards in a trading-card game. Players build a deck with a set number of cards from their collections.
  - work: tynan-sylvester-the-simulation-dream
    page: "Eclipse Colony design case study: plants, farmers, yield, growth and health"
    quote: Game Model we create is just a pathway through which we create the Player Model in the player’s mind
  - work: robert-nystrom-game-programming-patterns
    url: https://gameprogrammingpatterns.com/component.html
    page: "Component: game entities and their responsibilities"
    quote: |-
      A decoration is simply a
       GameObject with a GraphicsComponent but no PhysicsComponent
---
