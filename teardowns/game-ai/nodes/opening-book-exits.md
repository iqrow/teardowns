---
term: "Opening-book exits"
aka: [leaving the opening book, opening disruption, build-order recovery]
kind: process
plain: "The process that decides when a fixed opening queue has become stale and either patches a small disruption or replaces the plan."
does: "Keeps the useful opening intact when a worker loss is local, but hands a broken or stale plan to search when a building, deadlock, critical unit or cloaked threat changes its assumptions."
ask: "Which event invalidated the queue, and can it be repaired locally without delaying the first response?"
cues: ["The opening queue continues after a minor loss but a replacement worker or emergency unit jumps to high priority", "A new search trace appears after queue exhaustion, a supply deadlock or a critical loss", "The first combat unit is protected from repeated production replans"]
trouble: "Replanning every small loss rebuilds production instead of fielding the first combat unit; patching a lost building keeps an impossible plan."
sources:
  - work: ualbertabot-build-orders
    page: "Build Order Goals & Planning"
    quote: "These opening book build orders will occur in entirety until an event happens which triggers a new build order to be searched"
  - work: ualbertabot-build-orders
    page: "Build Order Goals & Planning"
    quote: "If the current `BuildOrderQueue` is empty ... If a supply deadlock is detected (we have too little supply to build a unit) ... If a critical unit (building or worker) has died ... If an enemy cloaked unit is detected"
  - work: steamhammer-build-order-disruptions
    page: "reacting to build order disruptions"
    quote: "But if a worker is lost in the opening, we can replace it, and try to stay as close as possible to the original opening."
  - work: steamhammer-build-order-disruptions
    page: "reacting to build order disruptions"
    quote: "because that might genuinely break the build."
  - work: steamhammer-build-order-disruptions
    page: "reacting to build order disruptions"
    quote: "Steamhammer protoss beats Stone reliably because its probes fight well, but it often ends up with several extra gateways before it can get a zealot out and turn the tide."
at: [0.30, -0.20, 0.03]
---
