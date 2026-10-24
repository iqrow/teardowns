---
term: Try cap
aka: [retry budget, max attempts, max turns, loop stop]
kind: knob
plain: The maximum number of attempts a task may make in one automated loop before it stops and asks for human attention.
does: Converts repeated failure into a visible handoff instead of an endless chain of runs.
ask: What counts as an attempt, what evidence is carried forward, and where does a person re-enter after the cap?
cues:
  - An attempt counter on a run or ticket
  - A retry button with a remaining budget
  - A stopped loop and a human-review label
range: A few attempts for a code or review loop, with a separate policy for transient infrastructure failures.
trouble: Each failure starts another run forever, retries hide a deterministic defect, or the cap is reached with no useful diagnosis.
at: [0.31, 0.92, 0.06]
links:
  - {to: review-rework-loop, rel: see also}
  - {to: run-state, rel: see also}
pattern: pattern-accelerator-brake
sources:
  - work: anthropic-building-effective-agents
    page: Agents
    quote: It’s also common to include stopping conditions (such as a maximum number of iterations) to maintain control.
  - work: openai-agents-sdk-running-agents
    page: Running agents
    quote: If we exceed the `max_turns` passed, we raise a `MaxTurnsExceeded` exception.
  - work: matt-pocock-ralph-tips
    page: 2. Start With HITL, Then Go AFK
    quote: "For AFK Ralph, always cap your iterations. Infinite loops are dangerous with stochastic systems."
---
