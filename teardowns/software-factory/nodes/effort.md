---
term: Effort
aka:
  - reasoning effort
  - thinking budget
kind: knob
plain: A dial for how much reasoning the model does before it answers.
does: More effort spends more output tokens and time for a better shot at hard problems. Set it per task or subagent so each job gets the reasoning it needs.
ask: How much reasoning should this task or subagent spend before it answers?
cues:
  - An effort level beside the model in a run record
  - Higher effort with more output tokens and longer latency
  - Different subagents carrying different effort settings
range: "Low for mechanical edits and lookups; Medium for everyday coding; High for tricky bugs and multi-step plans; Max for the hardest problems."
trouble: "Low effort on a hard problem produces a confident, shallow answer; max effort on a one-line rename spends time and cost without useful gain."
at: [0.64, 0.21, 0.17]
links:
  - {to: model-choice, rel: see also}
  - {to: token-cost, rel: raises}
sources:
  - work: matt-pocock-ai-coding-dictionary
    page: Effort
    url: https://www.aihero.dev/ai-coding-dictionary/effort
    quote: "A dial for how much reasoning the model does before it answers. More effort spends more output tokens for a better shot at hard problems."
  - work: matt-pocock-ai-coding-dictionary
    page: Effort
    url: https://www.aihero.dev/ai-coding-dictionary/effort
    quote: "Higher effort costs more and runs slower. The reasoning is emitted as tokens, billed as output tokens even when you never see them, and produced one token at a time — so turning effort up lengthens the wait before the answer arrives and adds to the bill."
  - work: matt-pocock-ai-coding-dictionary
    page: Effort
    url: https://www.aihero.dev/ai-coding-dictionary/effort
    quote: "Low | Mechanical edits, lookups, well-specified changes with one clear path."
  - work: matt-pocock-ai-coding-dictionary
    page: Effort
    url: https://www.aihero.dev/ai-coding-dictionary/effort
    quote: "Medium | Everyday coding — the usual default."
  - work: matt-pocock-ai-coding-dictionary
    page: Effort
    url: https://www.aihero.dev/ai-coding-dictionary/effort
    quote: "High | Tricky bugs, design decisions, multi-step plans."
  - work: matt-pocock-ai-coding-dictionary
    page: Effort
    url: https://www.aihero.dev/ai-coding-dictionary/effort
    quote: "Max | The hardest problems, where a wrong answer is expensive to unwind."
  - work: matt-pocock-ai-coding-dictionary
    page: Effort
    url: https://www.aihero.dev/ai-coding-dictionary/effort
    quote: "Set effort too low on a hard problem and you get a confident, shallow answer that skipped the reasoning the problem needed — it reads fine and is wrong in a way that costs you later. Set it to max for a one-line rename and you sit through a long think that produces nothing the lowest setting wouldn't have."
  - work: lauren-tan-pstack
    page: "Phase A: Frame"
    url: https://raw.githubusercontent.com/cursor/plugins/9580c23696ac8d7abed0c166f2f9918800afb819/pstack/skills/swarm/SKILL.md
    quote: "Pick each subagent's reasoning level and fast or standard speed for the job, per the Subagents section of the poteto-mode skill."
---
