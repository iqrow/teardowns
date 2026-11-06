---
term: "Tactical layer"
aka: [tactical AI, battle AI, squad AI, micro]
kind: part
plain: "The middle-horizon part that turns strategic intent into positions, targets and coordinated actions for groups in contact."
does: "Makes a plan work in the current terrain and fight, while feeding new evidence back to the strategic layer."
ask: "Where should this group stand and act so the current plan gains advantage without throwing away the force?"
cues: ["Groups form fronts or roles instead of moving as loose individuals", "Targets and positions change as the fight develops", "A retreat or flank order propagates across several units"]
children: [influence-map, position-evaluation, target-selection, squad-coordination, retreat]
pattern: pattern-hierarchical-control
at: [0.0, 0.83, 0.04]
sources:
  - work: ontanon-rts-survey
    page: "Section III, p. 4"
    quote: "We consider tactics to be everything related to confrontations between groups of units. Tactical reasoning involves both spatial (exploiting the terrain) and temporal (army movements) reasoning, constrained on the possible types of attacks by the army composition of the player and their opponent."
  - work: robertson-watson-rts-review
    page: "Section 1.1, p. 2"
    quote: "Groups of units can be manoeuvred into advantageous positions on the map to surround or escape the enemy, and individual units can be controlled to attack a weak enemy unit or avoid an incoming attack."
---
