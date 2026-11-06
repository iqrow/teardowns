---
term: Telegraphing
aka: [intent signal, attack warning, anticipation cue]
kind: process
plain: "Showing an action's target, timing or shape before the action resolves, so the player has time to respond."
does: "Moves difficulty from surprise toward interpretation and counterplay."
ask: "What information must be visible, when does it appear, and can the player act on it before impact?"
cues: ["A marker from an enemy to its target", "A wind-up animation or countdown", "A clear attack type icon or path"]
trouble: "The signal arrives too late, is too subtle to notice, or reveals a threat without leaving a meaningful response."
at: [0.0, 0.24, 0.08]
variants:
  - label: Signal
    items:
      - id: signal-intent-marker
        name: Intent marker
        plain: "A persistent symbol or line showing who or what the AI has selected."
        why: "It counts as an intent marker when the target is visible before the action, not only at impact."
        sources:
          - work: davis-into-the-breach-postmortem
            page: "p. 31, UI Guided Design"
            quote: "Show the target for each enemy"
      - id: signal-wind-up
        name: Wind-up
        plain: "An animation, timing bar or staged pose that makes the impending action legible."
        why: "It counts as a wind-up when the action's timing is exposed before its result."
        sources:
          - work: butcher-griesemer-illusion-intelligence
            page: "p. 11, Making the AI Intelligible"
            quote: "Inform the Player: Language, Posture, Gesture; Focus of Attention"
      - id: signal-callout
        name: Callout
        plain: "A spoken or textual signal that names an action, target or change of plan."
        why: "It counts as a callout when language tells the player about intent rather than merely decorating the action."
        sources:
          - work: butcher-griesemer-illusion-intelligence
            page: "p. 11, Making the AI Intelligible"
            quote: "Making the AI Intelligible … React to the Player: Dialogue, Animation; Communication of Intent"
sources:
  - work: davis-into-the-breach-postmortem
    page: "p. 14, Telegraphed Attacks"
    quote: "All enemy attacks shown; No hit / miss chance; Completely deterministic (during player turn)"
  - work: davis-into-the-breach-postmortem
    page: "p. 31, UI Guided Design"
    quote: "Show the target for each enemy; Show the attack type for each enemy"
---
