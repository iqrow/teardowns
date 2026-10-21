---
term: Cost curves
aka: [how much more power costs]
kind: concept
plain: A cost curve maps rising benefits or power to the resources, limits and opportunity costs required to obtain them.
does: Balances transitive upgrades without assuming that twice the power should always cost twice as much.
ask: What curve makes the extra capability worth its complete cost?
at: [0, 0.28, 0.16]
variants:
  - label: Cost shape
    items:
      - id: cost-linear
        name: Linear
        plain: "C(P)=P: each extra power point has the same cost."
        sources:
          - work: schreiber-game-balance-concepts
            quote: "The two might scale linearly: +1 cost means +1 benefit."
            flag: linear cost relationships discussed
          - work: ian-schreiber-level-2-numeric-relationships
            page: Identity and Linear Relationships
            quote: If a healing spell always costs 5 MP and heals exactly 50 HP, then there is a 1-to-10 linear relationship between MP and HP.
      - id: cost-quadratic
        name: Increasing / quadratic
        plain: "C(P)=P^2: later power costs progressively more."
        sources:
          - work: ian-schreiber-level-3-transitive-mechanics-and
            quote: Costs might be on an increasing curve, where each additional benefit costs more than the last, so incremental gains get more and more expensive as you get more powerful.
      - id: cost-threshold
        name: Thresholded
        plain: "C(P)=P below power 4, then C(P)=2P: a capability gate creates a new phase."
        why: "It counts by the new cost phase after a capability gate, not because the illustrative break is at power 4."
        sources:
          - work: schreiber-game-balance-concepts
            quote: we might expect to see a shift in the cost curve at or around five mana
            flag: custom curves and thresholds discussed
          - work: ian-schreiber-level-3-transitive-mechanics-and
            page: Creating a Cost Curve; custom curves and thresholds
            quote: we might expect to see a shift in the cost curve at or around five mana
sources:
  - work: schreiber-game-balance-concepts
    quote: How do you know how much each resource is worth? That is what we call a cost curve.
  - work: ian-schreiber-level-3-transitive-mechanics-and
    page: linear, curved and diminishing/increasing cost relationships
    quote: How do you know how much each resource is worth? That is what we call a cost curve.
    flag: author course post
  - work: ian-schreiber-level-3-transitive-mechanics-and
    page: Costs and Benefits; Cost Curves; Creating a Cost Curve
    quote: How do you know how much each resource is worth? That is what we call a cost curve.
  - work: ian-schreiber-level-2-numeric-relationships
    page: Identity and Linear Relationships; Exponential and Triangular Relationships; Other Numeric Relationships
    quote: You may have a relationship where there are either increasing or diminishing returns
  - work: ian-schreiber-game-design-concepts-level-16-game
    page: "Three Ways to Balance Game Objects: transitive relationships and cost curves"
    quote: This is the most direct way to balance objects. The general idea is to find some desired proportion of costs to benefits.
---
