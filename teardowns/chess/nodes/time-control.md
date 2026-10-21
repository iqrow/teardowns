---
term: Time control
aka:
  - time setting
  - base time and increment
kind: knob
plain: A time control specifies how much time a player has for a move quota or period, including any increment added with each move.
does: Sets the clock budget, the phases of a timed game, and when a flag can decide the result.
ask: How much base time, how many moves, and what increment or next period apply?
cues:
  - Base time on the clock
  - Move quota or period
  - Increment after a move
  - Flag condition
range: [rapid, blitz, bullet]
at: [-0.28, -0.06, 0.03]
sources:
  - work: fide-laws-of-chess
    page: Article 6.3.1
    quote: "When using a chessclock, each player must complete a minimum number of moves or all moves in an allotted period of time including any additional amount of time added with each move. All these must be specified in advance."
  - work: fide-laws-of-chess
    page: Appendix A.1
    quote: "A ‘Rapid chess’ game is one where either all the moves must be completed in a fixed time of more than 10 minutes but less than 60 minutes for each player; or the time allotted plus 60 times any increment is of more than 10 minutes but less than 60 minutes for each player."
  - work: fide-laws-of-chess
    page: Appendix B.1
    quote: "A ‘blitz’ game is one where all the moves must be completed in a fixed time of 10 minutes or less for each player; or the allotted time plus 60 times any increment is 10 minutes or less for each player."
  - work: chesscom-chess-clocks
    page: What is a time control?
    quote: "It's how much time a player has to make all the moves in a game."
  - work: chesscom-chess-clocks
    page: Bullet
    quote: "Bullet games are the fastest! We define bullet games as those where each player gets less than three minutes total time in a 40-move game."
  - work: chesscom-chess-clocks
    page: What is a time control?
    quote: "This is usually written as [base time] | [increment]."
---
