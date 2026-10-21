---
term: WEGO plan–resolve cycle
aka: [simultaneous turns, "plan, commit, resolve"]
kind: loop
plain: A WEGO turn alternates a private planning phase with a shared resolution phase; unlike IGOUGO, both sides prepare before either side sees the outcome.
does: Makes planning, commitment, resolution and review the repeatable unit of asynchronous strategy play.
ask: Does the phase boundary preserve simultaneous choice without making the result unreadable?
cues:
  - Private planning phase
  - Shared resolution phase
  - Orders revealed before resolution
  - Review before the next turn
range: plan → commit → resolve → review, repeated each turn
trouble: If planning and resolution blur together, players can react after seeing outcomes and the game becomes IGOUGO by accident.
at: [-0.21, 0.22, 0.08]
links:
  - {to: action-resolution, rel: see also}
  - {to: core-gameplay-loop, rel: see also}
loop:
  type: cycle
  through: [planning-information, order-commitment, simultaneous-conflict-adjudication, async-turn-deadline]
sources:
  - work: avalon-hill-the-rules-of-diplomacy
    page: p. 6
    quote: Immediately following this period of “diplomacy,” each player secretly writes an order for each of his or her units on a slip of paper. When all players have written their orders, the orders are simultaneously revealed, and then the orders are all resolved.
  - work: battlefront-com-combat-mission-afrika-korps-game
    page: "pp. 7–8: Orders Phase, Action Phase and Action Replay"
    quote: The computer calculates the Action Phase, 60 seconds of real-time combat, based on both players’ orders.
  - work: matrix-games-wego-world-war-ii-overlord-game
    page: "p. 10: WEGO versus IGOUGO and the reconcile/replay cycle"
    quote: In many board and computer wargames, one side will move its units and resolve combat, followed by the other side repeating the process. This game mechanic is known as IGOUGO
---
