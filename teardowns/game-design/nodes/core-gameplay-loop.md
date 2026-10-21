---
term: Core gameplay loop
aka: [the repeatable play cycle]
kind: loop
plain: The core loop is a repeatable chain in which the player reads a state, chooses an action, sees the system's result and updates their mental model before acting again.
does: Defines the game's immediate rhythm and the decisions players spend most of their time making.
ask: What does the player do again and again, and why does the next repetition matter?
cues:
  - State read before an action
  - Result shown after the action
  - A changed state before the next repetition
children: [goal-state, choice-point, action-resolution-step, feedback-step, state-change]
at: [0, -0.1, 0.06]
loop:
  type: cycle
  through: [goal-state, choice-point, action-resolution-step, feedback-step, state-change]
sources:
  - work: michael-sellers-advanced-game-design-a-systems
    url: https://books.google.com/books?id=gLg7DwAAQBAJ
    page: ch. 7, p. 226
    quote: In a core loop, the player forms an intention and carries it out within the game, causing some change to occur in the game’s internal model. This change is presented as feedback to the player, often with an increase in ability or information.
    copy: true
  - work: daniel-cook-loops-and-arcs
    page: "Loops section: model → action → system → feedback → updated model"
    quote: The player starts with a mental model that prompts them to… Apply an action to… The game system and in return… Receives feedback that… Updates their mental model and starts the loop all over again.
    flag: author blog
  - work: steve-swink-game-feel-the-secret-ingredient
    page: opening; Response; Rules
    quote: Control, intent, and instructions flow from me into the game as quickly as I can think.
  - work: ian-schreiber-game-design-concepts-level-5
    page: The Process of Play; Feedback Loops; Homeplay
    quote: Designers start with the Mechanics and follow them as they grow outward into the Aesthetics.
  - work: tynan-sylvester-decision-based-gameplay-design
    page: Decisions; Difficult Decisions; Tangible and Obvious Results
    quote: The ace that gaming has up its sleeve is that it gives the player opportunities to make decisions and then observe the results of those choices in a consequence-free zone.
  - work: robert-nystrom-game-programming-patterns
    url: https://gameprogrammingpatterns.com/game-loop.html
    quote: A game loop runs continuously during gameplay.
---
