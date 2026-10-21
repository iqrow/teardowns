---
term: Order commitment
aka: [lock-in, commit, ready]
kind: knob
plain: The point at which a player's private orders stop being revisable for a resolution.
does: Sets whether players can keep drafting while waiting, whether early readiness advances the turn, and which order set is authoritative.
ask: When does an order become immutable, and can the player uncommit before resolution?
cues:
  - Orders no longer revisable
  - Ready-up or hard lock before resolution
  - Resolution using the final order set
range: revisable until deadline; ready-up; hard lock at phase end
trouble: If locking is hidden or reversible without clear feedback, players cannot tell which plan the engine will execute.
at: [0, 0.07, 0.1]
links:
  - {to: action-resolution, rel: controls}
sources:
  - work: avalon-hill-the-rules-of-diplomacy
    page: "pp. 6–7: secret order writing and simultaneous reveal"
    quote: Each player secretly writes “orders” for each of his or her units on a slip of paper. All players then reveal orders at the same time.
  - work: battlefront-com-combat-mission-afrika-korps-game
    page: "p. 7: GO starts the Action Phase; orders cannot be changed during it"
    quote: After giving orders to their units, players click the GO! button.
  - work: matrix-games-wego-world-war-ii-overlord-game
    page: "p. 17: Next Phase ends planning and cannot be undone"
    quote: Next Phase . This button concludes the Planning Phase for a player’s side
---
