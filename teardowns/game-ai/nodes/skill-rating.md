---
term: Skill rating
aka: [Elo, Glicko, TrueSkill, strength estimate]
kind: measure
plain: "A statistical estimate of an agent's playing strength inferred from its match results against a changing pool of opponents."
does: "Orders versions or players on one comparable scale and shows whether a change improved strength, while uncertainty says how much to trust the order."
ask: "What population, result model and uncertainty does this rating represent?"
cues: ["A rating ladder with confidence or deviation bands", "An opponent-versus-opponent matrix", "A rating trend after each evaluation batch"]
trouble: "Ratings drift when the pool changes, uncertainty is ignored, or a high number is mistaken for robust play against every style."
at: [0.0, 0.22, 0.08]
variants:
  - label: System
    items:
      - id: rating-elo
        name: Elo
        plain: "A pairwise rating updated by actual score minus expected score."
        why: "It counts as Elo when rating difference maps to expected score and results update a single strength number."
        sources:
          - work: elo-rating-chessplayers
            page: "Section 1.6, p. 13"
            quote: 'Rn is the new rating after the event … W is the actual game score … We is the expected game score based on Ro … This equation performs the arithmetical operation of averaging the latest performance into the prior rating'
      - id: rating-glicko
        name: Glicko
        plain: "An Elo-like rating that also tracks rating deviation, and in Glicko-2 volatility."
        why: "It counts as Glicko when the estimate includes an explicit uncertainty that changes with evidence and inactivity."
        sources:
          - work: glickman-glicko-system
            page: "p. 2"
            quote: "but also a ratings deviation RD or, in statistical terminology, a standard deviation, which measures the uncertainty in a rating"
      - id: rating-trueskill
        name: TrueSkill
        plain: "A Bayesian skill model that supports uncertainty, draws, teams and more than two competitors."
        why: "It counts as TrueSkill when a factor-graph model infers individual skill from team or multiplayer results."
        sources:
          - work: herbrich-trueskill
            page: "Abstract"
            quote: "The new system tracks the uncertainty about player skills, explicitly models draws, can deal with any number of competing entities and can infer individual skills from team results."
sources:
  - work: elo-rating-chessplayers
    page: "Section 1.15, p. 4"
    quote: "Simply stated, the Elo Rating System is a numerical system in which differences in rating may be converted into scoring or winning probabilities."
---
