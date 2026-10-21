---
term: Asynchronous turn deadline
aka: [turn cadence, phase deadline, correspondence tempo]
kind: knob
plain: The real-world cutoff and repeat interval for submitting the latest legal orders when players are not online together.
does: Sets how much planning time asynchronous players have and when the server locks, resolves, reports, and opens the next turn.
ask: What clock is authoritative, what happens to an unsubmitted or late order, and how often does a new turn open?
cues:
  - A clock before the order cutoff
  - The next turn after a repeat interval
range: seconds to minutes for live play; hours to days for correspondence play
trouble: Unclear time zones, silent late-order behavior, or a cadence so short that players cannot inspect the replay and plan again.
at: [0.21, -0.22, 0.08]
links:
  - {to: core-gameplay-loop, rel: controls}
  - {to: decision-window, rel: see also}
sources:
  - work: playdiplomacy-game-options
    page: deadlines, optional finalizing, fixed deadlines, early processing and 12-hour/3-day cadence examples
    quote: |-
      The length of deadlines can be set
      individually for each type of phase.
---
