---
term: Progression curves
aka: [the shape of growth]
kind: concept
plain: A progression curve relates a measure such as level or time to cumulative progress, capability or cost; distinguish total progress from the marginal cost of the next step.
does: Controls early accessibility, late-game distance and the rhythm of new understanding.
ask: Should growth be steady, accelerating, bounded or deliberately uneven?
at: [-0.55, 0.34, 0.14]
variants:
  - label: Curve family
    items:
      - id: curve-linear
        name: Linear
        plain: "Each level adds the same amount: E(n)=100(n−1)."
        sources:
          - work: schreiber-game-balance-concepts
            quote: "The two might scale linearly: +1 cost means +1 benefit."
          - work: ian-schreiber-level-3-transitive-mechanics-and
            page: “Cost Curves”; “Creating a Cost Curve”
            quote: "The two might scale linearly: +1 cost means +1 benefit."
      - id: curve-polynomial
        name: Polynomial
        plain: A power such as E(n)=10(n−1)^2 makes later steps grow faster than early steps.
        sources:
          - work: openstax-algebra-1
            page: 7.4.2
            quote: This is a quadratic function. The growth rate changes between each step.
      - id: curve-exponential
        name: Exponential
        plain: E(n)=2^(n−1)−1 doubles the increment repeatedly, so late growth quickly dominates.
        sources:
          - work: openstax-algebra-1
            url: https://openstax.org/books/algebra-1/pages/5-4-3-exponential-change-the-growth-factor
            page: 5.4.3
            quote: In an exponential function, the output is multiplied by the same factor every time the input increases by one. The multiplier is called the growth factor.
      - id: curve-logistic
        name: Logistic / S-curve
        plain: E(n)=1000/(1+e^(−(n−5))) starts gently, accelerates in the middle and approaches a cap.
        sources:
          - work: eric-w-weisstein-logistic-equation-mathworld
            quote: where r is the Malthusian parameter (rate of maximum population growth) and K is the so-called carrying capacity (i.e., the maximum sustainable population). … The function x(t) is sometimes known as the sigmoid function.
      - id: curve-pokemon-fast
        name: Pokémon Fast
        plain: "A shipped cubic group: EXP=4n^3/5, reaching 800,000 at level 100."
        why: "The cubic formula defines it; Pokémon is where it shipped."
        sources:
          - work: bulbapedia-experience
            quote: EXP=4n35 The Fast experience group is one of the four experience groups introduced in Generation I, with 800,000 experience points making for a level 100 Pokémon.
          - work: bulbapedia-experience
            page: “Fast” section; “Experience table”
            quote: EXP=4n35 The Fast experience group is one of the four experience groups introduced in Generation I, with 800,000 experience points making for a level 100 Pokémon.
      - id: curve-pokemon-medium-slow
        name: Pokémon Medium Slow
        plain: "A shipped cubic group: EXP=6n^3/5−15n^2+100n−140, reaching 1,059,860 at level 100."
        why: "The cubic formula defines it; Pokémon is where it shipped."
        sources:
          - work: bulbapedia-experience
            quote: EXP=65n3−15n2+100n−140 The Medium Slow experience group, like the Medium Fast group, accounts for many Pokémon. Requiring 1,059,860 experience points for a Pokémon to reach level 100
          - work: bulbapedia-experience
            page: “Medium Slow” section; “Experience table”
            quote: EXP=65n3−15n2+100n−140 The Medium Slow experience group, like the Medium Fast group, accounts for many Pokémon. Requiring 1,059,860 experience points for a Pokémon to reach level 100
sources:
  - work: bulbapedia-experience
    quote: The amount of experience points a Pokémon has is tied directly to its level.
  - work: schreiber-game-balance-concepts
    quote: you need to figure out a relationship between increasing resource costs and increasing benefits.
    flag: curve families discussed
  - work: ian-schreiber-level-3-transitive-mechanics-and
    page: linear, curved and diminishing/increasing cost relationships
    quote: you need to figure out a relationship between increasing resource costs and increasing benefits.
    flag: author course post
  - work: ian-schreiber-level-3-transitive-mechanics-and
    page: “Cost Curves”; “Creating a Cost Curve”; “Rules of Thumb”
    quote: you need to figure out a relationship between increasing resource costs and increasing benefits.
  - work: raph-koster-game-design-is-simple-actually
    page: “Variation and escalation”; “Pacing and balance”
    quote: "There’s an optimal pacing shape. It looks just like what you see in your literature textbooks when they diagram tension, or whatever: sort of like a rising sine wave."
---
