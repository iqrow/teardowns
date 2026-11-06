---
term: Information access
aka: [fog of war, omniscience, AI cheating]
kind: knob
plain: "The boundary between what the AI may sense or remember and what it is allowed to know by exception."
does: "Sets the fairness and difficulty of the opponent's knowledge, from player-like uncertainty to carefully chosen help."
ask: "Which facts must be sensed, which can be remembered, and which exceptions can the player discover?"
cues: ["Enemy units hidden behind fog are absent from AI decisions", "Searches near a last-known location instead of exact tracking", "A difficulty setting that changes information rather than behaviour"]
trouble: "The AI appears to see through fog, or its exceptions are so visible that every victory feels scripted."
links:
  - {to: handicaps, rel: see also}
variants:
  - label: Access
    items:
      - id: access-omniscient
        name: Omniscient
        plain: "The AI receives world facts without having to sense them or keep a plausible memory."
        why: "It counts as omniscient when hidden state is available directly, whatever the game genre or interface."
        sources:
          - work: dill-what-is-game-ai
            page: "p. 6"
            quote: "Another type of cheating is purely informational. That is, does the AI have to sense a unit in order to know that it exists and where it is located?"
      - id: access-honest
        name: Fog-honest
        plain: "The AI can use only current senses and memories that could have been formed from them."
        why: "It counts as honest when the AI's information boundary follows its declared senses, not whether its strategy is strong."
        sources:
          - work: dill-what-is-game-ai
            page: "p. 6"
            quote: "if I see a unit but then it goes out of sight, how do I remember that it exists? How do I guess its location?"
      - id: access-selective
        name: Selective exception
        plain: "The AI is mostly fog-honest but receives a narrow, tuned exception to protect the experience."
        why: "It counts as selective when the exception is limited to a purpose or trigger, not a permanent view of the world."
        sources:
          - work: dill-what-is-game-ai
            page: "p. 6"
            quote: "when exploring, we gave the AI a random chance every 30 seconds or so to cheat and explore an area where we knew there was something good to find."
sources:
  - work: dill-what-is-game-ai
    page: "p. 6"
    quote: "You should make the AI cheat if and only if it will improve the player’s experience"
---
