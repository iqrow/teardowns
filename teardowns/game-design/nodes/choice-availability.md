---
term: Action availability
aka: [can I do it right now?]
kind: knob
plain: "Availability rules decide which actions the current state permits: required resource, target, position, cooldown or prerequisite. Set those conditions explicitly; a disabled action is not a viable alternative at this moment."
does: Controls the live option set without confusing it with every action the game contains.
ask: What exact condition enables each action, and can the player see why it is unavailable?
cues:
  - Actions enabled by a required resource
  - A target in range
  - A cooldown or prerequisite blocking an action
range: Author a per-action condition such as ammo > 0, cooldown = 0, target in range or resource >= cost.
trouble: The player plans around an action that is silently illegal, or all interesting alternatives are gated out together.
links:
  - {to: rule, rel: made by}
  - {to: choice-space, rel: controls}
sources:
  - work: katie-salen-and-eric-zimmerman-rules-of-play
    url: https://www.creativegames.org.uk/modules/Intro_Game_Studies/Salen_Zimmerman-Rules_of_Play_Chapter3_2003.pdf
    page: "ch. 3, excerpt PDF p. 3: choices within a game-system"
    quote: All of this activity occurs within a game-system designed to support meaningful kinds of choice-making.
unverified: The ammo predicates are an authored illustration, not rules quoted from the book.
deeper: State-dependent predicates, disabled-action explanations, affordability and target legality.
---
