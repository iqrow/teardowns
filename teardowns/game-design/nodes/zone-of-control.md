---
term: Zone of control
aka: [ZOC, ZoC, control zone, area of influence]
kind: concept
plain: "A zone of control (ZoC) is the area around a unit or position where its presence changes how opponents may move, pass, disengage or resolve contact."
does: "Turns contact into spatial pressure: screening and line holding, stopping infiltration, making flanks matter, and adding friction to movement through threatened space."
ask: "What does this presence control, when is the zone checked, and what lets an opponent enter, cross or leave it?"
cues:
  - A translucent ring or highlighted adjacent cells around a unit
  - A route overlay changes colour or shows a movement-cost number at contact
  - A lock, blocked arrow or attack marker on a departure or crossing
  - A replay or impulse report showing when contact changed
range: "entry stop; semi-rigid crossing restriction; fluid or elastic cost; locking; staged WEGO; opt-in projection; no universal ZoC; destination standoff"
trouble: "A cheap screen freezes a larger force; a lock removes disengagement; an unshown tax makes route planning wrong; simultaneous turns leave unclear whose position counts."
at: [0.18, 0, 0.08]
variants:
  - label: ZoC model
    items:
      - id: rigid-entry-stop
        name: Rigid (entry stop)
        plain: Civilization VI and many hex wargames stop a unit's remaining movement when it enters an enemy zone.
        why: The defining feature is the entry stop; a visible ring, hex grid or cavalry exception is not what makes a model rigid.
        sources:
          - work: firaxis-games-civilization-vi-manual
            page: "p. 72: Zones of Control"
            quote: "Combat units exert a ‘zone of control’ (ZOC) over the tiles around them. When a unit moves into a tile within an enemy’s ZOC it expends all of its MPs."
          - work: james-f-dunnigan-complete-wargames-handbook
            page: "p. 84: Zone of Control"
            quote: "Rigid (often called ‘Locking’ ZOC); units must stop upon entering an enemy-controlled hex"
      - id: semi-rigid-crossing
        name: Semi-rigid
        plain: CAOS lets units enter and leave enemy zones but forbids moving directly from one enemy Zone of Control hex to another.
        why: Semi-rigid is the crossing exception, not merely a smaller movement tax or a softer-coloured overlay.
        sources:
          - work: combined-arms-operations-series-caos-manual
            page: "pp. 9–10: Impulses and Zone of Control"
            quote: "Both sides issue orders and units then move and fight simultaneously."
          - work: combined-arms-operations-series-caos-manual
            page: "p. 10: Zone of Control"
            quote: "Under normal circumstances, units can move into and out of enemy Zone of Control hexes, but units cannot move between enemy Zone of Control hexes."
      - id: fluid-elastic-cost
        name: Fluid or elastic
        plain: "WEGO WW2: Stalingrad adds a movement cost for entering an enemy zone while leaving remains possible."
        why: The defining feature is a movement cost or penalty rather than a hard stop; the overlay colour is not the rule.
        sources:
          - work: matrix-games-wego-world-war-ii-stalingrad
            page: "pp. 65–66: Zones of Control and movement point costs"
            quote: "It costs no Move Points to leave an enemy ZOC, but it does cost to enter one."
          - work: james-f-dunnigan-complete-wargames-handbook
            page: "p. 84: Zone of Control"
            quote: "Elastic (often called \"Fluid\" ZOC);"
      - id: locking-zoc
        name: Locking
        plain: Old World and Battle Brothers use contact that can prevent ordinary departure, keeping units engaged until a release or successful escape.
        why: Locking controls departure; it is stronger than making entry costly and is not defined by a melee setting or one-tile radius.
        sources:
          - work: old-world-official-user-manual
            page: "p. 80: Flanking and ZOC-Lock"
            quote: "A unit that has been ZOC-Locked cannot move. It’s pinned down and you can kill it at your leisure."
          - work: battle-brothers-tactical-combat-mechanics
            page: "Zone of Control"
            quote: "If the attack connects, the character is prevented from leaving the hex but still pays action points and fatigue for the movement attempt."
      - id: impulse-slice-wego
        name: Impulse or slice resolution in WEGO
        plain: "CAOS and WEGO World War II: Overlord recompute movement, collisions and contact as a simultaneous plan resolves in impulses or movement slices."
        why: This model answers when the zone is checked; it is a resolution schedule, not by itself a rigid or fluid movement effect.
        sources:
          - work: combined-arms-operations-series-caos-manual
            page: "p. 9: Impulses"
            quote: "Both sides issue orders and units then move and fight simultaneously."
          - work: matrix-games-wego-world-war-ii-overlord-dev
            page: "movement slices and reconnaissance withdrawal"
            quote: "This check repeats every slice, since the enemy’s position changes constantly."
      - id: opt-in-stance-trait
        name: Opt-in stance or trait
        plain: Battle Brothers, Duelyst, Old World, Polytopia and Total War make projection or stronger control belong to a weapon, skill, stance or unit trait.
        why: The projection is opt-in; a unit being melee, on a front line or shown inside a ring does not by itself make every unit project.
        sources:
          - work: battle-brothers-tactical-combat-mechanics
            page: "Zone of Control and Spearwall"
            quote: "The ‘Spearwall’ skill, once enabled, has the Battle Brother using it attempt to strike any opponent attempting to enter his Zone of Control and prevent them from doing so"
          - work: old-world-official-user-manual
            page: "p. 79: Zone of Control"
            quote: "Cavalry units (and some unique units) can ignore ZOC, so while it’s a powerful tool in your arsenal, there are counters to it."
      - id: no-universal-zoc
        name: "No universal ZoC: telegraphing and body blocking"
        plain: "Into the Breach, Atlas Reactor, Frozen Synapse and Advance Wars carry prediction and screening through telegraphed attacks, occupied spaces, body blocking, cover, traps or phase order instead of a universal adjacency rule. The opened pages verify those substitutes; the absence of a conventional ZoC is unverified."
        why: No universal ZoC means another spatial or information tool does the work; telegraphing, terrain or body blocking alone does not secretly make a zone.
        sources:
          - work: nintendo-into-the-breach-switch
            page: "product description"
            quote: "All enemy attacks are telegraphed in minimalistic, turn-based combat. Analyze your opponent's attack and come up with the perfect counter every turn."
          - work: atlas-reactor-guide
            page: "pp. 7–8, 17–18: phases, movement lines and body blocking"
            quote: "In Atlas Reactor, players coordinate tactics with teammates and lock in actions during the same timed ‘Decision Mode.’ Then, they watch their actions resolve on screen together during ‘Resolution Mode.’"
            flag: "unverified absence of a conventional ZoC"
          - work: slitherine-frozen-synapse
            page: "product description"
            quote: "Plan your moves, test them out, then hit the ‘Execute’ button: both you and your enemy’s turns are executed simultaneously."
            flag: "unverified absence of a conventional ZoC"
          - work: nintendo-advance-wars-dual-strike-manual
            page: "p. 6: Unit Movement"
            quote: "When you touch a unit, its range of movement will appear highlighted on the map."
            flag: "unverified absence of a conventional ZoC"
      - id: diplomacy-standoff
        name: Standoff resolution (Diplomacy)
        plain: Diplomacy reveals simultaneous orders, compares support strength and leaves equal-strength units in place when they claim the same province.
        why: A standoff resolves a destination conflict; it does not model continuous pressure from every adjacent unit.
        sources:
          - work: avalon-hill-the-rules-of-diplomacy
            page: "p. 8: Standoffs"
            quote: "Units of equal strength trying to occupy the same province cause all those units to remain in their original provinces."
sources:
  - work: james-f-dunnigan-complete-wargames-handbook
    page: "p. 84: Zone of Control"
    quote: "Zone of Control represents the six hexes surrounding a unit that the unit controls. This allows some units to spread out as they would to cover more territory while concentrating others for a crucial attack."
  - work: lauri-teppo-operational-tactical-wargames
    page: "pp. 51–52: area of influence"
    quote: "This element is often used in wargaming as a zone of control, i.e., an enemy unit cannot move through a friendly zone of control without slowing down or engaging in combat"
  - work: old-world-official-user-manual
    page: "p. 79: Zone of Control"
    quote: "A whole line of units, however, can exert ZOC over a massive area and really shut down an enemy’s options."
  - work: matrix-games-wego-world-war-ii-stalingrad
    page: "p. 66: ZOC value display and movement point costs"
    quote: "A hex’s ZOC value is the cost in additional Move Points that an enemy unit must expend to enter that hex"
  - work: matrix-games-wego-world-war-ii-overlord-dev
    page: "movement slices and reconnaissance withdrawal"
    quote: "This check repeats every slice, since the enemy’s position changes constantly."
---
