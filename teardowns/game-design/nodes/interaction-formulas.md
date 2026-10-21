---
term: Interaction formula catalogue
aka: [ways to combine attack and armour]
kind: concept
plain: "A catalogue of mitigation formulas compares how armour changes damage taken: subtractive, divisive, percentage and threshold models."
does: Makes a hidden balance choice explicit before numbers are tuned.
ask: Which response curve keeps every relevant interaction playable?
at: [0.28, 0, 0.08]
variants:
  - label: Mitigation model
    items:
      - id: subtract
        name: Subtract
        plain: Damage = max(0, raw damage − armour); a high armour value can reach immunity.
        sources:
          - work: bethesda-softworks-fallout-new-vegas-game-manual
            page: p. 8
            quote: Damage is calculated by subtracting the DAM rating of the weapon you are firing against the Damage Threshold of your target’s armor.
          - work: runarcana-rpg-objects
            quote: An object with a damage threshold is immune to all types of damage unless it suffers an amount of damage from a single attack or effect that equals or exceeds the damage threshold, in which case it receives normal damage.
      - id: league-ratio
        name: Divide / ratio (League of Legends)
        plain: Damage taken = raw × 100/(100 + armour), so armour reduces damage without reaching zero.
        why: "Damage taken = raw × 100/(100 + armour) defines it; League of Legends is where it ships."
        sources:
          - work: league-of-legends-wiki-armor
            quote: Armor determines by how much incoming physical damage is reduced before it applies to the target's health.
      - id: warcraft-ratio
        name: Divide / ratio (Warcraft III)
        plain: Damage taken = raw/(1 + 0.06 × armour), equivalent to raw × 16.6667/(16.6667 + armour).
        why: "Damage taken = raw/(1 + 0.06 × armour) defines it; Warcraft III is where it ships."
        sources:
          - work: blizzard-warcraft-iii-armor-and-weapon-types
            quote: For positive Armor, damage reduction =((armor)*0.06)/(1+0.06*(armor))
      - id: percentage
        name: Percentage
        plain: Damage taken = raw × max(0, 1 − 0.02 × armour); the 2% per point rate is an illustrative setting, not a universal rule.
        sources:
          - work: bethesda-softworks-fallout-3-game-manual
            page: p. 11
            quote: DR – The percentage of damage resistance the item offers
      - id: threshold
        name: Threshold
        plain: Damage is 100% below armour 20 and 0% at or above armour 20; this is a hard breakpoint model.
        sources:
          - work: runarcana-rpg-objects
            quote: An object with a damage threshold is immune to all types of damage unless it suffers an amount of damage from a single attack or effect that equals or exceeds the damage threshold, in which case it receives normal damage.
sources:
  - work: ian-schreiber-level-3-transitive-mechanics-and
    quote: in a transitive mechanic, everything has a set of costs and a set of benefits, and all in-game effects can be put in terms of one or the other.
  - work: bethesda-softworks-fallout-new-vegas-game-manual
    page: p. 8
    quote: Damage is calculated by subtracting the DAM rating of the weapon you are firing against the Damage Threshold of your target’s armor.
  - work: bethesda-softworks-fallout-3-game-manual
    page: p. 11
    quote: DR – The percentage of damage resistance the item offers
  - work: runarcana-rpg-objects
    quote: An object with a damage threshold is immune to all types of damage unless it suffers an amount of damage from a single attack or effect that equals or exceeds the damage threshold, in which case it receives normal damage.
---
