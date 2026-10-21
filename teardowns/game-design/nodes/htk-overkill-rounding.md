---
term: Overkill and rounding
aka: [overkill, wasted damage, damage waste, final-hit waste]
kind: measure
plain: Overkill is the final hit’s post-mitigation damage minus the target’s remaining health. The rounding policy—floor, ceil, nearest, hidden fractions or rounding only for display—decides whether that waste and the next breakpoint are real.
does: Separates weapons with the same HTK, exposes wasted final-hit damage and makes the damage pipeline testable instead of assuming that displayed integers are the simulation’s integers.
ask: How much final-hit damage is wasted, and exactly where does this implementation round?
range: record pre-round damage, post-round damage, remaining health and final-hit overkill; specify whether rounding happens once or on every event
trouble: Per-hit flooring silently accumulates loss, hidden fractional damage moves breakpoints, or a large final hit wastes ammo and cooldown time despite matching another weapon’s HTK.
at: [-0.58, -0.35, 0.12]
links:
  - {to: time-to-kill, rel: see also}
  - {to: interaction-formulas, rel: see also}
  - {to: htk-breakpoints, rel: see also}
sources:
  - work: calc-time-to-kill-ttk-calculator
    page: "Formula; Frequently asked: overkill and discrete TTK"
    quote: overkill = hits to kill × damage per hit − target HP · Hits to kill is rounded up, because the last shot only needs to finish the remaining HP — there is no half shot.
  - work: calc-hits-to-kill-calculator
    page: "Formula; Frequently asked: hit counts round up"
    quote: "Hit counts round up (ceil): the final hit only needs to remove the leftover HP to count as a kill."
  - work: statgarden-time-to-kill-ttk-calculator-for
    page: "Formula; Term definitions; Worked examples: Overkill on the last shot"
    quote: Overkill Damage on the final shot that was not needed.
  - work: kernel-r-ds-manual-to-m1000-classic-haz-5
    page: Important thresholds; target table with Waste and Kill Time
    quote: "Measures overkill inefficiency: how much damage is wasted beyond what is required to kill the target. Higher values indicate poorer ammo efficiency, especially relevant for breakpoint-sensitive builds."
unverified: No universal rounding order applies across games; verify whether the implementation stores fractional damage, rounds each event or rounds only the displayed number.
deeper: A next level would hold test vectors for floor, ceil, nearest and hidden-fraction implementations, plus overkill and ammo-efficiency comparisons for each roster matchup.
---
