---
term: Simultaneous conflict adjudication
aka: [WEGO conflict resolution, collision rules, order reconciliation]
kind: process
plain: The resolver combines all committed orders against a common starting state and applies explicit priority rules when actions collide.
does: Turns crossings, mutual attacks, move collisions, retreats and chain reactions into one deterministic result or an intentionally stated random result.
ask: What happens when two orders claim the same space, kill each other, or change the conditions for a later order?
cues:
  - Orders claiming the same space
  - Crossings, mutual attacks or retreats
  - A replay of resolved moves
range: priority phases, initiative, standoff, mutual destruction, retreats
trouble: Order-dependent outcomes, hidden priority, or a replay that cannot explain why a move failed.
at: [0.21, 0.22, 0.08]
links:
  - {to: action-resolution, rel: see also}
  - {to: rules-evaluation, rel: see also}
sources:
  - work: avalon-hill-the-rules-of-diplomacy
    page: "pp. 8–14: standoffs, dislodgments, retreats and order interactions"
    quote: Units of equal strength trying to occupy the same province cause all those units to remain in their original provinces. If two or more units are ordered to the same province, none of them can move.
  - work: matrix-games-wego-world-war-ii-overlord-dev
    page: collisions, chain reactions, ad-hoc battles, timing and priority
    quote: Once both players have locked in their orders, the game records two full sets of Commands — every move, every attack, every recon mission, the lot.
  - work: matrix-games-wego-world-war-ii-overlord-game
    page: "pp. 10, 76–85: reconciliation and combat resolution"
    quote: Each player’s moves and attacks are compared and resolved as necessary.
  - work: battlefront-com-combat-mission-afrika-korps-game
    page: "p. 7: simultaneous action replay and no mid-resolution input"
    quote: Players have no influence at this stage on the results of the orders they have given
---
