---
term: Hits-to-kill matrix
aka: [HTK matrix, shots-to-kill table, matchup matrix]
kind: measure
plain: A hits-to-kill matrix puts attacker types across one axis and defender types down the other; each cell is the number of landed hits after the game’s damage formula, minimum-damage rule and rounding.
does: Exposes roster-wide lethality and survivability under every tested condition instead of hiding balance in isolated duels.
ask: Which attacker defeats which defender in open ground, cover and flanked states, and where do cells jump?
range: attacker × defender × condition; include open ground, cover, flanked, and any armour or terrain modifiers
trouble: Blank or extreme cells, one unit dominating every condition, or a terrain modifier that changes a cell without a meaningful tactical reason.
at: [-0.72, 0.23, 0.12]
links:
  - {to: interaction-formulas, rel: see also}
  - {to: interaction-observation, rel: see also}
  - {to: counter-cycle, rel: see also}
sources:
  - work: joshue-labs-time-to-kill-calculator
    quote: Estimate hits to kill and time to kill from target health, hit damage, attack rate, hit chance, mitigation and target regeneration.
    flag: anonymous calculator
  - work: alex-sulman-improving-the-battlefield-1-weapon
    quote: All SMGs now require a maximum of 4 bullets to kill any target within 12 meters.
deeper: A next level would hold the row and column schema, condition snapshots, and a reproducible sheet or script that regenerates every cell from roster stats.
---
