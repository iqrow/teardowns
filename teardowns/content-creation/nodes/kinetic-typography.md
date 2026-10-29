---
term: Kinetic typography
aka:
  - animated text
  - moving type
  - text animation
  - type on screen
kind: part
plain: Kinetic typography animates letterforms and words over time so text becomes a visual element as well as language.
does: Lets moving letterforms carry visual emphasis or tone in addition to the word's linguistic meaning.
ask: Can the viewer read it in the time it holds, and does its motion express what the words mean?
cues:
  - "Letters or words building on screen in a deliberate order"
  - "A key word scaling, changing colour or changing form at the spoken beat"
  - "Type sliding, revealing or transforming between phrases"
trouble: Effects make the words harder to read, every word moves with the same emphasis, or the type rhythm fights the voice and edit.
range: "Letter, word or phrase builds; text may enter, reveal, scale, slide or transform."
links:
  - {to: "captions", rel: "see also"}
  - {to: "read-time", rel: "measured by"}
  - {to: "pacing", rel: "controls"}
  - {to: "transition", rel: "see also"}
  - {to: "pattern-interrupt", rel: "raises"}
at: [-0.425, 0.18, 0.02]
children:
  - read-time
variants:
  - label: Build
    items:
      - id: type-build-on
        name: Type-on
        plain: Characters appear in sequence until the line is complete.
        why: The defining feature is sequential revelation of the text, not the font, colour or subject.
        sources:
          - work: apple-motion-type-on
            page: Use the Type On behavior in Motion
            quote: "The Type On behavior creates a typewriter effect, with text appearing character by character."
      - id: type-word-pop
        name: Word pop
        plain: Text animates word by word, with each word as the unit of animation.
        why: A word pop is a word-level text animation, whatever scale, colour or spoken topic it uses.
        sources:
          - work: adobe-after-effects-animating-text
            page: Common selector properties
            quote: "You can use either the percentage or index units and base the selection on the characters, characters excluding spaces, words, or lines."
      - id: type-transform
        name: Letterform transform
        plain: The characters themselves change over time, or take on different character or paragraph formats.
        why: Transformation changes the text characters or formats themselves, rather than only moving an unchanged glyph.
        sources:
          - work: adobe-after-effects-animating-text
            page: Animating text
            quote: "Animate the source text of the layer, so that the characters themselves change to different characters or use different character or paragraph formats over time."
      - id: type-spatial
        name: Spatial type
        plain: Characters move, scale or rotate in 3D space as part of text animation.
        why: Spatial type is defined by the letterforms' relationship to 3D space, not by a software label.
        sources:
          - work: adobe-after-effects-animating-text
            page: Per-character 3D text properties
            quote: "You can move, scale, and rotate individual characters in three dimensions using 3D animator properties."
sources:
  - work: adobe-motion-graphics-definition
    page: What are motion graphics?
    quote: "When talking about motion graphic design, creatives are referring to the combination of text and design elements set to motion."
  - work: adobe-after-effects-animating-text
    page: Animating text
    quote: "Animating text layers is useful for many purposes, including animated titles, lower thirds, credit rolls, and dynamic typography."
  - work: barbara-brownie-transforming-type
    url: https://books.google.co.uk/books?jscmd=SearchWithinVolume2&q=letterforms&vid=OQ2dBQAAQBAJ
    page: PA4
    quote: "Letterforms that jump and dance can convey joy, those that slump can convey sorrow, and those that vibrate can convey frustration"
---
