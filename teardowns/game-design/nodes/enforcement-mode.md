---
term: Enforcement mode
aka: [how a breach matters, commitment model]
kind: knob
plain: "Enforcement mode determines why a player keeps a treaty: nothing but choice, future relationship history, a theoretical escrow account or an automatic rule. Each mode trades expressive freedom for credibility and legibility."
does: Sets the cost and visibility of deviation rather than assuming that signing itself enforces a promise.
ask: What makes breach unattractive or impossible after the other player relies on the deal?
range: Nonbinding; relationship history; theoretical escrow account; automatic
trouble: A punishment that is not observable or not credible is only a threat label; an automatic punishment can make harmless experimentation too expensive. [INFERENCE]
links:
  - {to: commitment-device, rel: see also}
  - {to: reputation-update, rel: controls}
  - {to: deviation-test, rel: measured by}
variants:
  - label: Commitment model
    items:
      - id: enforcement-nonbinding
        name: Nonbinding talk
        plain: A promise changes expectations only through the listener's judgment of the speaker.
        sources:
          - work: avalon-hill-the-rules-of-diplomacy
            page: printed p. 6, Diplomatic Phase
            quote: These discussions and written agreements, however, do not bind a player to anything he or she may say.
      - id: enforcement-reputation
        name: Relationship history
        plain: "Observed conduct changes a particular leader's attitude and future trade willingness; public reputation, alliance access or persistent-type belief requires separate evidence. [MODEL DISTINCTION]"
        sources:
          - work: firaxis-games-civilization-iv-manual
            page: p. 99, Leader Attitudes
            quote: The more a leader likes you, the more likely he or she is to be willing to trade with you, and the better deal he or she will give you.
      - id: enforcement-escrow
        name: Theoretical escrow account
        plain: "The source names an escrow account as a possible credibility device; custody, release and forfeiture rules are separate design decisions. [MODEL ASSUMPTION]"
        sources:
          - work: avinish-dixit-strategic-moves
            page: p. 4, Promise
            quote: Making good on promise is costly to promisor So credibility problematic; must be acquired by some other device like reputation, escrow account.
      - id: enforcement-automatic
        name: Automatic rule
        plain: The resolver applies a consequence when the trigger is met, without requiring another player's discretion.
        sources:
          - work: firaxis-games-civilization-iv-manual
            page: p. 103, Defensive Pact
            quote: If either of your civilizations is attacked by a third party, the other civilization automatically declares war on the attacker.
sources:
  - work: branislav-slantchev-bargaining-dynamic-commitment
    page: p. 9, Dynamic commitment problem
    quote: A commitment is not credible if it will not be in the interest of the committing party to carry out its promises should it have to do so.
---
