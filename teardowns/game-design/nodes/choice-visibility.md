---
term: Information visibility
aka: ["shown, hinted or hidden"]
kind: knob
plain: Visibility rules determine which relevant facts are public, privately known, hinted at or hidden. A deterministic game can still have uncertainty because the opponent's state or intentions are unknown.
does: Sets what kind of inference, scouting or bluffing the choice requires.
ask: Which fact am I hiding, and what playable way does the player have to reduce that uncertainty?
cues:
  - Current ammunition or legal moves shown directly
  - Footsteps hinting at an unseen enemy
  - An opponent's intended action withheld
range: Choose visibility per fact, not one visibility setting for the whole game.
trouble: A computer adaptation silently hides rules players could inspect on the tabletop, or an exact preview destroys the intended deduction.
links:
  - {to: rendered-state, rel: see also}
  - {to: planning-information, rel: see also}
variants:
  - label: Visibility policy
    items:
      - id: choice-visible-fact
        name: Explicit
        plain: Show the fact directly, such as current ammunition or legal moves.
        sources:
          - work: daniel-cook-building-tight-game-systems-of-cause
            page: "Hidden information: visible sequences and Triple Town movement opportunities"
            quote: A clear signal of effect that is related to the cause.
      - id: choice-clued-fact
        name: Clued
        plain: Give indirect evidence, such as footsteps suggesting an unseen enemy's position.
        sources:
          - work: daniel-cook-building-tight-game-systems-of-cause
            page: "Strength of Feedback: multiplayer FPS footsteps"
            quote: A game like Mastermind is entirely about a hidden code
      - id: choice-hidden-fact
        name: Concealed
        plain: Withhold a fact such as an opponent's intended action; let prediction, discovery or bluffing matter.
        sources:
          - work: daniel-cook-building-tight-game-systems-of-cause
            page: Hidden information; Social Complexity
            quote: Hidden information or off screen information.
sources:
  - work: daniel-cook-building-tight-game-systems-of-cause
    page: Hidden information; Social Complexity
    quote: Visible sequences that are readily apparent.
deeper: Perfect versus imperfect information, asymmetric knowledge, stale observations and the cost of scouting.
---
