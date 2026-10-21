---
term: Damage breakpoints
aka: [damage breakpoint, HP breakpoint, shots-to-kill breakpoint, threshold]
kind: measure
plain: A damage breakpoint is the minimum effective damage, attack, penetration or armour value that changes the required whole-hit count by one. For target health H and desired n hits, the post-mitigation damage must reach at least H/n before the game’s integer rounding is applied.
does: "Turns a smooth damage formula into explicit lethal thresholds and explains why small integer stats tune coarsely: ceil(H / damage) stays flat between thresholds, then jumps."
ask: What is the smallest attack, armour, health or condition change that removes or adds one hit?
range: for H health and n hits, minimum applied damage = ceil(H / n); solve the divisive formula backward, then verify the actual min-1 and rounding pipeline
trouble: A +1 stat has no effect for many cells and then suddenly changes HTK; cover or flanking can move the same roster across several thresholds at once.
at: [0.63, 0.23, 0.12]
links:
  - {to: interaction-formulas, rel: see also}
  - {to: time-to-kill, rel: see also}
  - {to: htk-matrix, rel: see also}
sources:
  - work: gamedesign-gg-weapon-design-the-feel-math-and
    page: "The Core Numbers: Damage, Fire Rate, and Time-to-Kill; Damage Falloff and the Range Curve"
    quote: This discontinuity is the single most important fact in weapon tuning. Damage does not scale smoothly; it scales in steps at every breakpoint where the shots-to-kill count flips.
  - work: statgarden-time-to-kill-ttk-calculator-for
    page: What this calculator does; Working out whether a damage buff matters; Worked examples
    quote: The extra two damage per shot buys nothing at all until it crosses the threshold into five shots.
  - work: kernel-r-ds-manual-to-m1000-classic-haz-5
    page: Introduction; Important thresholds; Vanilla Baseline
    quote: Determines how many shots are required to kill a target, factoring in effective HP with damage reduction taken into account (and separately armor). The ceiling function forces discretization.
deeper: A next level would hold inverse breakpoint equations for attack, armour, health and penetration, with one-stat-at-a-time tables for every encounter condition.
---
