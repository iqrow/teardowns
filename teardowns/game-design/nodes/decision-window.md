---
term: Decision window
aka: [when a choice matters, WEGO turn window]
kind: knob
plain: The time and information available before an action becomes committed.
does: Sets how a player plans, locks an order, sees a simultaneous result and returns to the next turn.
ask: What can each player revise, when do orders lock, and what cadence lets asynchronous players meet?
cues:
  - Time before an action commits
  - Private planning before a shared result
  - A next turn after resolution
range: milliseconds for a reflex action to hours or days for an asynchronous turn
children: [wego-plan-resolve-cycle, order-commitment, simultaneous-conflict-adjudication, planning-information, async-turn-deadline]
at: [0, 0, 0.14]
sources:
  - work: avalon-hill-the-rules-of-diplomacy
    page: p. 6
    quote: Immediately following this period of “diplomacy,” each player secretly writes an order for each of his or her units on a slip of paper. When all players have written their orders, the orders are simultaneously revealed, and then the orders are all resolved.
  - work: battlefront-com-combat-mission-afrika-korps-game
    page: pp. 7–8, 12, 14
    quote: Both players issue their orders in the Orders Phase. The game is paused and players can take as much time as they like to plan their actions and issue orders.
  - work: matrix-games-wego-world-war-ii-overlord-game
    page: pp. 10–11, 13, 17–19
    quote: WEGO by its nature is about the Player’s ability to plan for and manage chaos
  - work: matrix-games-wego-world-war-ii-overlord-dev
    page: planning lock, order reconciliation, collisions and movement slices
    quote: both players issue their orders during the planning phase, and then the game executes them simultaneously in a resolution phase—like watching a film of the turn play out.
  - work: playdiplomacy-game-options
    page: deadlines and finalizing; Fog of War; game-length examples
    quote: |-
      By default, if all players with orders for
      a phase finalize, the deadline expires early and the phase is resolved
      immediately.
  - work: daniel-cook-building-tight-game-systems-of-cause
    page: Pacing and Time Pressure
    quote: Short time lapses between cause and effect.
    flag: author blog
  - work: tynan-sylvester-decision-based-gameplay-design
    page: "Difficult Decisions: decision frequency and decisions made within seconds"
    quote: Decisions like whether to reload a weapon or instead wait another one second to re-evaluate the situation are what should concern game designers.
---
