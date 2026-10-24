---
term: Context window
aka:
  - context budget
  - working context
kind: concept
plain: Everything the model sees on each model provider request. It is finite and is the only surface through which the model perceives.
does: Carries a run's working state from turn to turn. A fresh run can start with an empty window, so sizing a task to one session keeps it in the sharpest part of the session.
ask: What must this run see now, and what can it leave behind?
cues:
  - A context meter fills as messages, model responses, and tool results accumulate
  - A compaction or autocompact event replaces history with a summary
  - A new session opens with an empty context window
trouble: Quality drops as the window fills. Attention degrades, and compaction or autocompact can lose detail; clearing discards the working state.
at: [0, 0.16, 0.12]
links:
  - {to: instructions, rel: see also}
  - {to: tool-access, rel: see also}
sources:
  - work: matt-pocock-ai-coding-dictionary
    page: Context window
    url: https://www.aihero.dev/ai-coding-dictionary/context-window
    quote: "Everything the model sees on each model provider request. Finite, model-specific, and the only surface through which the model perceives anything."
  - work: matt-pocock-ai-coding-dictionary
    page: Context window
    url: https://www.aihero.dev/ai-coding-dictionary/context-window
    quote: "Finite means it fills up. Every turn appends more — your messages, the model's responses, tool results — and a long session will eventually hit the limit, forcing compaction or clearing."
  - work: matt-pocock-ai-coding-dictionary
    page: Clearing
    url: https://www.aihero.dev/ai-coding-dictionary/clearing
    quote: "The next message begins with an empty session and an empty context window."
  - work: matt-pocock-ai-coding-dictionary
    page: Smart zone
    url: https://www.aihero.dev/ai-coding-dictionary/smart-zone
    quote: "Doing one task per session gives each task the sharpest part of the session."
  - work: matt-pocock-ai-coding-dictionary
    page: Smart zone
    url: https://www.aihero.dev/ai-coding-dictionary/smart-zone
    quote: "Early in a session the agent is sharp and focused. As the session grows it drifts into a dumb zone: sloppier, forgetful, more mistakes."
  - work: matt-pocock-ai-coding-dictionary
    page: Attention degradation
    url: https://www.aihero.dev/ai-coding-dictionary/attention-degradation
    quote: "As a session grows, each token's attention budget is spread across more competitors. The signal on any one meaningful relationship shrinks; noise from irrelevant context crowds in."
  - work: matt-pocock-ai-coding-dictionary
    page: Compaction
    url: https://www.aihero.dev/ai-coding-dictionary/compaction
    quote: "Whatever didn't make it into the summary is gone from the context."
  - work: matt-pocock-ai-coding-dictionary
    page: Autocompact
    url: https://www.aihero.dev/ai-coding-dictionary/autocompact
    quote: "Compaction is lossy, and autocompact is lossy at a moment you didn't choose."
  - work: matt-pocock-ai-coding-dictionary
    page: Clearing
    url: https://www.aihero.dev/ai-coding-dictionary/clearing
    quote: "What's gone is the agent's working state: the model is stateless, so the new session knows nothing the old one knew."
---
