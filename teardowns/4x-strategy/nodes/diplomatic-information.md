---
term: Diplomatic information
aka: [visibility, treaty record, negotiation channel]
kind: part
plain: "Diplomacy needs an information policy: what is shown to everyone, what is shown only to signatories, and what remains a spoken or hidden signal."
does: Makes information itself a treaty capability and lets players evaluate whether a deal can be audited.
ask: Can an outsider see the terms, the trigger, the payments, and the breach history?
cues: [A public treaty ledger beside private message panels, Visibility badges on each clause]
range: Fully public; signatories only; public terms with private signals.
trouble: Hidden treaties can make coalition math impossible; fully public negotiation can remove bluffing and outside options.
children: [public-private-information, treaty-enforcement]
variants:
  - label: Information policy
    items:
      - id: public-treaty-record
        name: Public treaty record
        plain: Publish the coalition members or signed terms so every player can plan around them.
        why: The commitment is visible to outsiders rather than discoverable only through rumor.
        sources:
          - work: dune-rulebook-2019
            page: 12
            quote: "The members of the Alliance must be revealed to all. Alliances cannot be secret."
      - id: private-negotiation
        name: Private negotiation
        plain: Allow side conversations and hidden proposals while leaving the signed result to the chosen enforcement rule.
        why: The negotiation channel is private even if the final treaty is not.
        sources:
          - work: hasbro-diplomacy-2021-rules
            page: 4
            quote: "Some players usually go to another room or organize private groups of two or three."
      - id: mixed-information
        name: Mixed information
        plain: Publish outcomes or documents while allowing secret talks, signals, or unrevealed holdings.
        why: Public coordination and private bargaining coexist as separate channels.
        sources:
          - work: hasbro-diplomacy-2021-rules
            page: 4
            quote: "Public announcements may be made and documents may be written, made public, or kept secret, as the players see fit."
sources:
  - work: 2k-civ6-manual
    page: 140
    quote: "The leader will appear, displaying possible diplomatic options, information about your current relationship, diplomatic visibility level, their agendas, gossip, and more."
at: [0.36, 0.1, 0.04]
---