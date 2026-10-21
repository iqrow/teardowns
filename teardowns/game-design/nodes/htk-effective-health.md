---
term: Effective health
aka: [EHP, effective HP, effective health pool, physical EHP]
kind: measure
plain: Effective health is the unmitigated damage required to defeat a target after mitigation. For damage = attack × K/(K + armour), EHP = health × (1 + armour/K) before discrete minimum-damage and rounding caveats.
does: Puts health and armour on one survivability scale for comparing defenders and checking whether the armour curve gives the intended durability.
ask: How much raw damage does this defender survive, and does that prediction still match discrete HTK against each attacker?
range: EHP = H/(K/(K + A)) = H(1 + A/K) for nonnegative divisive armour; recalculate per damage type and condition
trouble: Treating EHP as universal despite flat reduction, minimum damage, rounding, shields, cover, flanking, penetration or mixed damage; EHP may not predict exact HTK.
at: [0.65, -0.35, 0.12]
links:
  - {to: interaction-formulas, rel: see also}
  - {to: time-to-kill, rel: see also}
  - {to: htk-matrix, rel: see also}
sources:
  - work: league-of-legends-wiki-armor
    page: Armor formula; effective health; Stacking armor
    quote: The second formula proves that armor increases nominal health by a percentage against physical damage; this is called effective health.
  - work: statgarden-effective-hp-calculator-from-armour
    page: What this calculator does; Formula; Worked examples; Questions
    quote: Formula damage reduction = armour ÷ (armour + K); effective HP = health ÷ (1 − damage reduction) = health × (1 + armour ÷ K)
  - work: blizzard-warcraft-iii-armor-and-weapon-types
    page: Damage Reduction or Increases for Armor
    quote: A unit with 20 armor basically has 55% extra hitpoints -- 100 would become effectively 155.
  - work: calc-hits-to-kill-calculator
    page: Formula; Effective HP; Frequently asked
    quote: Effective HP = HP ÷ (1 − reduction%); 50% reduction doubles the hits required.
  - work: gamedesign-gg-weapon-design-the-feel-math-and
    page: "The Core Numbers: Damage, Fire Rate, and Time-to-Kill"
    quote: Shots to kill is the enemy’s effective health divided by damage per shot, rounded up.
unverified: The linear EHP expression is exact for this divisive ratio before minimum-damage and rounding; flat mitigation, shields and mixed damage require a specified incoming profile.
deeper: A next level would compare EHP by damage type, shield layer and penetration order, then reconcile each EHP prediction with the discrete matrix cell.
---
