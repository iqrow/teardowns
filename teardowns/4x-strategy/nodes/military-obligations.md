---
term: Military obligations
aka: [war clauses, security treaties]
kind: part
plain: Military clauses specify what a signatory must not do, when it must defend, which enemy it must fight, or whether one signatory's offensive automatically becomes the other's war.
does: Keeps a friendly relationship from being mistaken for a military commitment.
ask: What event triggers the obligation, and can either player refuse the next war?
cues: [A treaty panel with trigger arrows, "Separate rows for peace, defense, joint war, and automatic war"]
range: Nonaggression only; defense trigger; specific joint war; automatic entanglement.
trouble: A vague alliance lets players claim help was promised while the rules never define an attack, target, or exit.
children: [nonaggression-pact, defense-trigger, joint-war, automatic-war-entanglement]
variants:
  - label: War commitment
    items:
      - id: no-attack-commitment
        name: Nonaggression
        plain: Forbid attacks between the signatories for a minimum term.
        why: The clause constrains the signatories' own actions without promising a third-party war.
        sources:
          - work: 2k-civ4-manual
            page: 104
            quote: "Peace lasts for a minimum of 10 turns."
      - id: defense-commitment
        name: Defense trigger
        plain: Enter a war automatically when the partner is attacked by a third party.
        why: The obligation is triggered by defense, not by the signatory's own offensive.
        sources:
          - work: 2k-civ6-manual
            page: 144
            quote: "If a signatory to a Defensive Pact is attacked, the other partner is automatically at war with the attacker."
      - id: joint-war-commitment
        name: Joint war
        plain: Declare war together against one named common enemy.
        why: The target is explicit and does not create a blank cheque for future wars.
        sources:
          - work: 2k-civ6-manual
            page: 142
            quote: "If they accept, both the player and accepting civilization will declare war against a common enemy."
      - id: entangled-war-commitment
        name: Automatic entanglement
        plain: Propagate one signatory's war declaration and treaty commitments to the other.
        why: The clause joins the two diplomatic states instead of merely adding a response trigger.
        sources:
          - work: 2k-civ4-manual
            page: 103
            quote: "If one declares war, the other automatically does so as well."
sources:
  - work: 2k-civ6-manual
    page: 142
    quote: "Once an alliance is achieved, you will unlock the ability to propose Defensive Pacts, and Joint Wars."
at: [-0.34, -0.06, 0.04]
---