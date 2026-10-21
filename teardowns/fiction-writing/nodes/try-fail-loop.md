---
term: Try-fail cycle
aka: ["yes-but, no-and", complications]
kind: loop
plain: "The character tries to solve a problem and fails; the failure creates the next problem. Two variants: “yes, but” and “no, and”."
does: "Drives the middle of the book: each failure raises the stakes for the next try."
ask: How does this failure make things worse?
cues:
  - "A try that ends in failure"
  - "The failure creates the next problem"
  - "Each attempt raises the stakes"
trouble: Each problem is solved cleanly, so the middle sags.
at: [0.2375, 0.15, 0.012]
pattern: pattern-boosting-engine
loop:
  type: reinforcing
  through: [scene-goal, scene-conflict, scene-disaster, stakes]
sources:
  - {work: mary-robinette-kowal-et-al-middles-and-conflicts, page: transcript, quote: "Try-fail cycles start when the character tries something to solve a problem, and fails"}
---
