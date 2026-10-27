---
title: Game
prompt: I want to make a game
root: game-on-screen
assembly:
  - title: List the parts
    text: Name tokens, rules, attributes and behaviours, then keep them in a parts register.
    adds: [token, rule, part-attributes, part-behaviours, parts-register]
    makes: parts-list
  - title: Keep real alternatives
    text: Set action availability, then compare alternatives across reachable states and goals so each has a reason to be chosen.
    adds: [choice-availability, choice-dominance-check]
    makes: choice-options
  - title: Price the sacrifice
    text: Set shared time and resource demands, the forgone alternative, and the gains and losses exposed to uncertainty.
    adds: [choice-opportunity-cost, choice-risk-stakes]
    makes: choice-tradeoffs
  - title: Expose enough evidence
    text: Choose what is explicit, clued or concealed; set prediction depth and previews without removing the intended reasoning challenge.
    adds: [choice-visibility, choice-prediction-depth]
    makes: choice-information
  - title: Pace the decisions
    text: Set deliberation time and annotate a play trace for fresh dilemmas, empty stretches and overload; do not count button presses as decisions.
    adds: [choice-time-pressure, choice-decision-density]
    makes: choice-timing
  - title: Make outcomes matter
    text: Check whether players attribute the visible result to their action, set its effect on future play, and replay varied situations to test the choice.
    adds: [choice-result-readability, choice-future-state, choice-context-test]
    makes: choice-consequences
  - title: Assemble a choice point
    text: Join viable options, competing benefits, decision information, pacing and consequential outcomes. In the reload example, compare present firepower with future ammunition under an uncertain threat.
    adds: [choice-options, choice-tradeoffs, choice-information, choice-timing, choice-consequences]
    makes: choice-point
  - title: Make the core loop
    text: Join goal, choice, action resolution, feedback and the changed state into the repeatable play cycle.
    adds: [goal-state, choice-point, action-resolution-step, feedback-step, state-change]
    makes: core-gameplay-loop
  - title: Add engines, economy and ecology
    text: Layer investment, brakes, resource exchanges and counter-pressure over the core loop.
    adds: [boosting-engine-instance, braking-engine-instance, economy-instance, ecology-instance, reinforcing-loop, balancing-loop]
    makes: system-dynamics
  - title: Shape progression
    text: Choose a curve, place gates and add capabilities at moments the player can understand.
    adds: [progression-curves, unlock-gates, capability-progression, level-measure]
    makes: progression-system
  - title: Build the HTK ledger
    text: For every attacker × defender pair, run open-ground, cover and flanked conditions through the damage formula; mark breakpoints, final-hit overkill and effective health before comparing the roster.
    adds: [htk-matrix, htk-breakpoints, htk-overkill-rounding, htk-effective-health]
    makes: hits-to-kill
  - title: Test the counter cycle
    text: Define each unit's job, label counter strength, fill the matchup matrix and test mirror matches before retuning stats.
    adds: [counter-strength-scale, counter-unit-role, counter-matchup-matrix, counter-mirror-match]
    makes: counter-cycle
  - title: Balance interactions
    text: Choose interaction formulas, compare costs and counters, then measure hits-to-kill and time-to-kill.
    adds: [part-interactions, cost-curves, transitive-balance, intransitive-balance, hits-to-kill, time-to-kill]
    makes: balance-system
  - title: Aim at an experience
    text: Connect mechanics, dynamics and aesthetics to the player's mental model and felt target.
    adds: [mental-model, mda-framework, felt-experience]
    makes: player-experience
  - title: Close the designer loop
    text: State intent, playtest, observe the gap and iterate one change at a time.
    adds: [design-intent, playtest, observed-experience, iterate]
    makes: designer-loop
  - title: Put the system on screen
    text: Render state and feedback in a readable layout on the selected device.
    adds: [screen-surface, feedback-signals, interface-layout]
    makes: screen-presentation
  - title: Assemble the simultaneous-turn window
    text: Join the WEGO plan–commit–resolve cycle, the commitment rule, conflict adjudication, planning information and asynchronous deadline into one decision window.
    adds: [wego-plan-resolve-cycle, order-commitment, simultaneous-conflict-adjudication, planning-information, async-turn-deadline]
    makes: decision-window
  - title: Build the level-design branch
    text: Set the experience goal, sketch and block out the space, tune flow and pacing, then test readability along the critical path.
    adds: [level-experience-goal, level-layout, level-blockout, level-flow, level-critical-path, level-pacing, level-readability]
    makes: level-design
  - title: Build the narrative-design branch
    text: Choose structure, choices, state, world, delivery, barks and agency, then inspect the story–mechanics fit.
    adds: [narrative-structure, narrative-choice, narrative-state, narrative-worldbuilding, narrative-delivery, barks, narrative-agency, ludonarrative-dissonance]
    makes: narrative-design
  - title: Ship the whole game
    text: Join what the player sees and does to the parts, loops, systems, progression, balance, experience and designer practice.
    adds: [screen-presentation, player-actions, parts-list, core-gameplay-loop, system-dynamics, progression-system, balance-system, player-experience, designer-loop]
    makes: game-on-screen
---

A game is a system of parts that lets a player act, see the result and choose again. Its genre and device change the surface, while loops, resources, progression and balance remain underneath. The designer turns those parts into a core loop, tests the resulting experience and iterates. This view starts at a game being played on a screen and opens down to rules and measures.
