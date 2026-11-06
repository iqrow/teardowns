---
term: AI evaluation and tuning
aka: [AI QA, balance testing, tuning]
kind: part
plain: "The evidence loop around an opponent: run matches, measure outcomes, observe people, expose reasoning and change parameters."
does: "Turns vague reports such as dumb or unfair into repeatable failures, comparisons and controlled changes."
ask: "Which test would distinguish a weak decision from a bad presentation or an exploit in the rules?"
cues: ["A dashboard of matches and rating movement", "A debug overlay showing the active decision", "A playtest note beside a parameter revision"]
trouble: "Only win rate is measured, test opponents are too narrow, or tuning fixes one matchup while creating another blind spot."
children: [ai-vs-ai, skill-rating, playtesting, exploit-search, exploitability, debug-visualisation, parameter-tuning, tuning-loop]
sources:
  - work: dill-what-is-game-ai
    page: "p. 4, Simplicity and Scalability"
    quote: "it is necessary to repeatedly test the AI, find the worst problems, correct them, and then test again."
  - work: yannakakis-player-modeling
    page: "Section 5.3, Playtesting Analysis and Game Authoring"
    quote: "Player modeling provides a multifaceted improvement to game development as it does not only advance the study of human play and the enhancement of human experience."
---
