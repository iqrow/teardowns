---
term: Behaviour rule
aka: [condition → response]
kind: process
plain: A behaviour rule maps a condition and an input to an effect on one or more parts.
does: Produces the repeatable interactions from which dynamics emerge.
ask: What input, condition and effect should be written down?
at: [0, 0, 0.1]
sources:
  - work: ernest-adams-and-joris-dormans-game-mechanics
    url: https://ptgmedia.pearsoncmg.com/imprint_downloads/peachpit/peachpit/samplechapters/0321820274/0321820274_gamemechanics_ch05section.pdf
    page: ch. 5, p. 92
    quote: If the state of the origin node meets this condition, then the target node is activated (it can fire). When the condition is not met, the target node is inhibited (it cannot fire).
  - work: daniel-cook-what-are-game-mechanics
    page: feedback loops and causal rules
    quote: The action causes an effect within the simulated game world
    flag: author blog
  - work: ian-schreiber-game-design-concepts-level-5
    page: Now, About That MDA Framework Thing…; Mechanics, Dynamics and Complexity
    quote: simple mechanics create extreme complexity
  - work: tynan-sylvester-the-simulation-dream
    page: "Eclipse Colony design case study: rules for crop growth, tending, damage and health"
    quote: Each tending operation speeds the plants towards finishing growth.
  - work: robert-nystrom-game-programming-patterns
    url: https://gameprogrammingpatterns.com/state.html
    page: "State: finite state machines and behavior selected by state"
    quote: Each state has a set of transitions, each associated with an input and pointing to a state. When an input comes in, if it matches a transition for the current state, the machine changes to the state that transition points to.
---
