---
term: Hits-to-kill
aka: [HTK, shots to kill]
kind: measure
plain: Hits-to-kill (HTK) is the number of successful damage events needed to remove a target’s health after mitigation. Apply the game’s damage formula, minimum-damage rule and rounding policy, then take ceil(health / damage); compare it per encounter condition.
does: Turns a damage pipeline into a discrete pacing and survivability measure for a roster.
ask: How many meaningful hits does this attacker need against this defender in each condition, and is the exchange playable?
range: whole hits; attacker × defender × condition, including open ground, cover and flanked states
children: [htk-matrix, htk-breakpoints, htk-overkill-rounding, htk-effective-health]
at: [0, -0.48, 0.16]
sources:
  - work: gamedesign-gg-weapon-design-the-feel-math-and
    page: "The Core Numbers: Damage, Fire Rate, and Time-to-Kill; Tuning Weapons in a Live Game"
    quote: Shots to kill is the enemy’s effective health divided by damage per shot, rounded up.
  - work: calc-hits-to-kill-calculator
    page: Formula; Frequently asked
    quote: "Effective HP = HP ÷ (1 − reduction); avg damage = damage × (1 + crit × (critMult − 1)); hits = ⌈effective HP ÷ avg damage⌉ · Hit counts round up (ceil): the final hit only needs to remove the leftover HP to count as a kill."
  - work: statgarden-time-to-kill-ttk-calculator-for
    page: What this calculator does; Formula; Working out whether a damage buff matters
    quote: Formula shots to kill = ceil(effective health ÷ damage per shot); time to kill = (shots − 1) ÷ (rounds per minute ÷ 60)
  - work: ian-schreiber-level-6-situational-balance
    page: What’s the central resource?; Using the central resource to derive balance; Situational Balance
    quote: how many hit points you had (that is, how many times could you survive being hit, and how many times would you have to hit something else to kill it).
---
