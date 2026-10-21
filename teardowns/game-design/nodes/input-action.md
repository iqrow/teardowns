---
term: Input action
aka: ["press, move or select"]
kind: part
plain: A player input is mapped to an intentional action such as moving, aiming, building or choosing.
does: Provides the controllable cause in the action-to-feedback chain.
ask: Does the input express the intended decision without friction?
cues:
  - A press, move or select
  - Movement, aiming, building or choosing
  - Input followed by an effect
children: [decision-window]
at: [-0.6, 0, 0]
sources:
  - work: robin-hunicke-marc-leblanc-and-robert-zubek-mda
    page: pp. 2–4
    quote: Dynamics describes the run-time behavior of the mechanics acting on player inputs and each othersí outputs over time.
  - work: jesper-juul-design-mit-cms-608-lecture-2008
    page: "MIT OCW lecture slide 8: discernible relation between action and outcome"
    quote: "Meaningful play: When relation between action and outcome is discernable and integrated"
  - work: daniel-cook-what-are-game-mechanics
    page: "Feedback loops: player action and simulated effect"
    quote: Player performs an action
    flag: author blog
  - work: steve-swink-game-feel-the-secret-ingredient
    page: "The Garden’s Ecosystem; Input: natural mapping and input sensitivity"
    quote: A natural mapping is a clear, intuitive relationship between possible actions and their effect on the system.
  - work: robert-nystrom-game-programming-patterns
    url: https://gameprogrammingpatterns.com/game-loop.html
    page: "Game Loop: Event loops; Pattern"
    quote: |-
      processes user input, but
      doesn’t wait for it
---
