---
term: Message audience
aka: [private chat, public chat, group chat, full press, public press, gunboat]
kind: knob
plain: The people allowed to receive each message, or a rule that disables direct communication.
does: Sets which coordination can be secret and which must happen in public.
ask: Does the sender know exactly who can read this message?
cues: [A named recipient list above the composer, A public-channel label, A no-messaging game setting]
trouble: A private plan is sent globally, or an implicit team channel includes someone the sender did not expect.
at: [-0.48, 0.36, 0.02]
variants:
  - label: Press mode
    items:
      - id: full-press
        name: Full Press
        plain: Players may send private messages to one another.
        sources:
          - work: vdiplomacy-press
            page: Full Press
            quote: "In Full Press games, all players can send each other private messages."
      - id: public-press
        name: Public Press
        plain: All permitted messages are visible to every player.
        sources:
          - work: vdiplomacy-press
            page: Public Press
            quote: "The only type of messages that are possible are so-called global messages, which are messages that every player can see."
      - id: no-press
        name: Gunboat
        plain: Players must coordinate through their actions without sending messages.
        sources:
          - work: vdiplomacy-press
            page: Gunboat
            quote: "Gunboat is the game mode in which no messages are allowed at all."
sources:
  - work: vdiplomacy-press
    page: Full Press
    quote: "In Full Press games, all players can send each other private messages."
  - work: vdiplomacy-press
    page: Public Press
    quote: "The only type of messages that are possible are so-called global messages, which are messages that every player can see."
---
