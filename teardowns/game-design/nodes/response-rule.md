---
term: Response rule
aka: [reciprocity strategy, what follows a breach]
kind: knob
plain: A response rule maps remembered conduct to the next cooperation, offer, sanction or refusal. It sets whether one breach is forgiven, answered once, or treated as a permanent change in relationship.
does: Defines how observed history changes later cooperation, refusal or punishment.
ask: What response follows cooperation, defection, uncertainty and repair?
range: Fixed baseline; reciprocal response; trigger and punishment; forgiving response
trouble: A permanent punishment can deter one betrayal but also punish errors and make cooperation unable to recover. [INFERENCE]
links:
  - {to: enforcement-mode, rel: controls}
  - {to: reputation-update, rel: controls}
  - {to: choice-risk-stakes, rel: see also}
variants:
  - label: Reciprocity model
    items:
      - id: response-stage-equilibrium
        name: Fixed stage response
        plain: Repeat a selected one-shot equilibrium regardless of prior conduct.
        why: It counts when history does not change the next response, even though the interaction repeats.
        sources:
          - work: vincent-conitzer-repeated-games
            page: p. 2, Repeated games
            quote: "One subgame-perfect equilibrium: keep repeating some Nash equilibrium of the stage game."
      - id: response-tit-for-tat
        name: Tit for tat
        plain: Cooperate initially, then copy the other player's previous action.
        why: It counts when the next move directly mirrors the immediately preceding move.
        sources:
          - work: vincent-conitzer-repeated-games
            page: p. 7, Infinitely repeated Prisoner's Dilemma
            quote: "Tit-for-tat strategy: Cooperate the first round, In every later round, do the same thing as the other player did in the previous round."
      - id: response-trigger
        name: Trigger punishment
        plain: Cooperate until a breach, then switch permanently to a punishment response.
        why: It counts when one observed breach changes every later response in the modeled horizon.
        sources:
          - work: vincent-conitzer-repeated-games
            page: p. 7, Infinitely repeated Prisoner's Dilemma
            quote: "Trigger strategy: Cooperate as long as everyone cooperates – Once a player defects, defect forever."
sources:
  - work: vincent-conitzer-repeated-games
    page: p. 8, Folk theorem(s)
    quote: "They must also be enforceable: deviation should lead to punishment that outweighs the benefits of deviation."
---
