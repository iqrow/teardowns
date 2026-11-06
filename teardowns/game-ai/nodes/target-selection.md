---
term: "Target selection"
aka: [targeting, threat prioritisation, focus fire]
kind: process
plain: "The process of choosing which enemy, point or objective a unit should affect next."
does: "Concentrates limited attacks where their timing, safety and expected value support the current tactical goal."
ask: "Which target changes the fight most, and what rule makes that choice stable enough for the group to coordinate?"
cues: ["A target marker moves between visible enemies", "Several units converge on one marked target", "The marker changes when threat, distance or vulnerability changes"]
trouble: "Units split damage, chase a low-value target or select a target that cannot be reached before the fight changes."
deeper: "Candidate sets, reachability, value, threat, focus-fire coordination, tie-breaking and target memory."
variants:
  - label: "Rule"
    items:
      - id: target-closest
        name: "Closest"
        plain: "Choose the nearest valid enemy when distance and immediate contact are the main concern."
        why: "The shared feature is a distance-first rule, not a particular unit type or map."
        sources:
          - work: jack-tactical-position-selection
            page: "Section 26.5.2, p. 10"
            quote: "An obvious basis for our query would be a weight based on inverse distance to the goal."
      - id: target-weakest
        name: "Weakest"
        plain: "Choose the vulnerable enemy whose removal can be secured quickly."
        why: "The shared feature is prioritisation by vulnerability, not by the target's visual identity."
        sources:
          - work: robertson-watson-rts-review
            page: "Section 1.1, p. 2"
            quote: "individual units can be controlled to attack a weak enemy unit or avoid an incoming attack."
      - id: target-threat
        name: "Threat"
        plain: "Choose the enemy whose current or projected danger to the force is greatest."
        why: "The shared feature is danger-first selection, whether danger comes from range, damage or a special ability."
        sources:
          - work: mark-modular-influence-maps
            page: "Section 30.1, p. 2"
            quote: "Determining the relative threat that an agent was under at a given moment"
      - id: target-focus
        name: "Focus"
        plain: "Choose a shared target so several units combine their damage or control."
        why: "The shared feature is deliberate concentration of multiple agents, not merely choosing the nearest enemy."
        sources:
          - work: mark-modular-influence-maps
            page: "Section 30.7.2, p. 15"
            quote: "By finding the highest point on the working map, we know that it is the center of concentration of the forces of the faction we are checking."
sources:
  - work: jack-tactical-position-selection
    page: "Section 26.4.8, p. 10"
    quote: "Regarding results as objects in the world, rather than just points, allows us to consider reusing the architecture for a host of other AI and gameplay applications: from choosing which of our squad mates to signal for assistance, to prioritizing between opponents in target selection, to finding nearby objects to interact with."
at: [0.36, 0.31, 0.03]
---
