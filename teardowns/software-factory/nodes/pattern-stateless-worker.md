---
term: Stateless worker with external memory
aka:
  - share-nothing worker
kind: pattern
plain: A fresh worker performs one bounded job, then stores any state needed later in durable services. A replacement worker can continue from those services. A coding-agent loop does this with a progress file and commits that the next run reads first.
ask: What survives this worker, where is it stored, and can the next worker resume without local files?
sources:
  - work: twelve-factor-processes
    page: VI. Processes
    quote: "Twelve-factor processes are stateless and share-nothing. Any data that needs to persist must be stored in a stateful backing service, typically a database."
  - work: matt-pocock-ralph-tips
    page: 4. Track Ralph's Progress
    quote: "AI agents are like super-smart experts who forget everything between tasks. Each new context window starts fresh. Without a progress file, Ralph must explore the entire repo to understand the current state."
---
