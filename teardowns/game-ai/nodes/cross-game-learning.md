---
term: "Cross-game learning"
aka: [inter-game learning, persistent adaptation, match history]
kind: process
plain: "The process of carrying evidence from completed matches into the next match, such as strategy payoffs, counters or player-specific history."
does: "Lets the opponent select and refine policies across encounters instead of rediscovering the same lesson every time."
ask: "What should be remembered between matches, how stable is that evidence, and when should a known best response be explored again?"
cues: ["A match ledger records outcomes by opponent or strategy", "The next opening distribution changes after prior results", "Old policies remain available as alternatives instead of being forgotten"]
trouble: "The record overfits one opponent, becomes stale when the opponent adapts or collapses variety into one predictable answer."
pattern: pattern-explore-exploit
deeper: "Experience records, payoff matrices, opponent identity, recency, decay, portfolio choice and exploration schedules."
sources:
  - work: ontanon-rts-survey
    page: "Section II-B, p. 3"
    quote: "Inter-game learning: What can be learned from one game that can be used to increase the chances of victory in the next game?"
  - work: tavares-strategy-selection
    page: "Section 3.2, p. 3"
    quote: "A metagame player can adopt a Nash Equilibrium strategy so that it has theoretical guarantees in its expected payoff over a sequence of matches."
at: [-0.35, -0.20, 0.03]
---
