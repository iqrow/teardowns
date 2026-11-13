---
term: Palette type
aka: [what the scale means]
kind: concept
plain: "Palette type follows the data's semantic structure: categorical identity, ordered magnitude, or a meaningful midpoint with two directions."
does: Keeps colour differences from implying an order or opposition that the rule does not have.
ask: Does this mark name a category, show a low-to-high value, or show departure from a meaningful middle?
range: Qualitative for nominal categories; sequential for ordered values; diverging for two directions around a meaningful midpoint.
trouble: A hue sequence makes categories look ranked, an ordered value looks like separate teams, or a midpoint has no rule behind it.
cues:
  - A categorical legend uses separated swatches without a low-to-high direction
  - An ordered legend grows lighter or darker along one axis
  - A two-sided legend centres a marked critical value
at: [-0.14, 0.25, 0.06]
variants:
  - label: Palette type
    items:
      - id: palette-qualitative
        name: Qualitative
        plain: Categorical markers where classes have no magnitude order.
        why: The categories are nominal, not ordered by their surface or display.
        sources:
          - work: cynthia-brewer-color-scheme-types
            page: Qualitative schemes
            quote: "Qualitative schemes are best suited to representing nominal or categorical data."
      - id: palette-sequential
        name: Sequential
        plain: An ordered scale that progresses from low to high.
        why: A meaningful low-to-high order exists, not merely a set of attractive hues.
        sources:
          - work: cynthia-brewer-color-scheme-types
            page: Sequential schemes
            quote: "Sequential schemes are suited to ordered data that progress from low to high."
      - id: palette-diverging
        name: Diverging
        plain: A scale with a meaningful midpoint and two directions toward extremes.
        why: The meaning has two directions from a critical middle, not simply two opposing groups.
        sources:
          - work: cynthia-brewer-color-scheme-types
            page: Diverging schemes
            quote: "Diverging schemes put equal emphasis on mid-range critical values and extremes at both ends of the data range."
sources:
  - work: paul-tol-colour-schemes-and-templates
    page: Introduction to colour schemes
    quote: "A colour scheme should reflect the type of data shown."
  - work: cynthia-brewer-color-scheme-types
    page: Color scheme types
    quote: "Qualitative schemes do not imply magnitude differences between legend classes, and hues are used to create the primary visual differences between classes."
---
