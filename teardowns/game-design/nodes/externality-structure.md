---
term: Externality structure
aka: [who gets the spillover, benefit topology]
kind: knob
plain: "Externality structure sets who receives a benefit or cost created by an action: the actor, a defined partner, a whole group, an opponent or an unchosen third party. The topology determines whether contribution, protection or harm is privately priced."
does: Lets a designer decide whether help is selective, public, rival, non-rival or harmful beyond its target.
ask: Which players receive this action's consequence, and can the actor exclude noncontributors?
range: Private; partner-shared; public good; targeted harm; diffuse spillover
trouble: A public benefit with a private cost invites free riding; a diffuse harm can make retaliation hit players who did not cause it. [INFERENCE]
links:
  - {to: generation-conversion, rel: see also}
  - {to: free-riding, rel: raises}
  - {to: balance-of-power, rel: raises}
variants:
  - label: Benefit and cost topology
    items:
      - id: externality-public-good
        name: Public good
        plain: Once provided, the benefit reaches members who can consume it without each paying the full contribution cost.
        why: It counts when provision is shared and exclusion is difficult, not merely because multiple players happen to see the same effect.
        sources:
          - work: stanford-encyclopedia-free-rider-problem
            page: Public Goods
            quote: Some goods, once they are made available to one person, can be consumed by others at no additional marginal cost.
      - id: externality-negative-spillover
        name: Negative spillover
        plain: "An action imposes a cost on players outside the actor's immediate payoff calculation. [INFERENCE]"
        why: "This is an inverse reading of the source's pollution example: the source directly states the shared benefit of reducing harmful gases, while the harmful action is the design-side inference. [INFERENCE]"
        sources:
          - work: stanford-encyclopedia-free-rider-problem
            page: opening paragraphs
            quote: If each of us pollutes less by paying a bit extra for our cars, we all benefit from the reduction of harmful gases in the air we breathe.
sources:
  - work: stanford-encyclopedia-free-rider-problem
    page: The Logic of Collective Action
    quote: If we all attempt to freeride, however, there is no provision and no ‘ride.’
---
