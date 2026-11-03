---
term: Agreement enforcement
aka: [cheap talk, binding promises, formal offer, chat versus action]
kind: concept
plain: Whether an agreement constrains legal actions or leaves each participant free to break it.
does: Determines which promises the rules enforce and which depend on trust or retaliation.
ask: Can a player choose a legal action that violates this agreement, and does the interface make that clear?
trouble: Players mistake conversational assent for a rules-enforced treaty, or an AI promises a restriction its planner does not obey.
at: [0, -0.26, 0.02]
links:
  - {to: deal-table, rel: see also}
variants:
  - label: Enforcement
    items:
      - id: non-binding
        name: Non-binding agreement
        plain: Participants can agree during negotiation and still choose contrary legal actions later.
        sources:
          - work: kramar-negotiation-honesty
            page: Introduction
            quote: "When agreements are non-binding, an agent may agree on one course of action in a turn but choose an action violating this agreement in the next turn."
      - id: binding
        name: Binding contract
        plain: An accepted agreement restricts the future actions available to its participants.
        sources:
          - work: kramar-negotiation-honesty
            page: Negotiating with binding agreements
            quote: "We view a contract as a restriction over the actions each of the agents may take in the future."
sources:
  - work: kramar-negotiation-honesty
    page: Negotiating with binding agreements
    quote: "We first consider binding agreements, where agents who agree on a joint plan cannot deviate from it later."
  - work: kramar-negotiation-honesty
    page: Introduction
    quote: "When agreements are non-binding, an agent may agree on one course of action in a turn but choose an action violating this agreement in the next turn."
---
