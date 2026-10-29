---
term: Stress test scene
aka:
  - worst-case scene
  - busy board
  - busiest view
kind: measure
plain: "A fixed, repeatable camera view used to test a stressful expected on-screen load, captured through the game camera at the target screen size."
does: "Gives a reproducible performance case at target resolution and a visual clarity check for chaotic load."
ask: "In a reproducible stressful scenario at target resolution, does the play remain clear and does performance stay within budget?"
cues:
  - "The camera frame shows a dense, stressful scenario"
  - "The same camera view repeats at the target screen size"
  - "Routes, objects and threats remain distinct amid the crowded view"
  - "A profiler trace records the same stressful run"
range: "Use the game camera, target screen size and a repeatable capture of a stressful real-world scenario."
at: [0.62, 0.05, 0.03]
links:
  - {to: greyscale-check, rel: see also}
  - {to: performance-budget, rel: see also}
sources:
  - work: epic-games-ue-performance-overview
    page: General Tips
    quote: "For good profiling, it is best to setup a reproducible case isolated from things that can add noise to the results."
  - work: nvidia-frameview-user-guide
    page: Overlay Mode Tags
    quote: "Running the game at full screen will ensure that accurate performance results are measured at the resolution specified in the game."
  - work: nvidia-frameview-user-guide
    page: Introduction
    quote: "FrameView is a software tool designed to capture and measure performance and power utilization of PC-based graphics hardware. It’s especially useful for measuring frame rates and GPU power usage when running stressful “real world” PC gaming scenarios."
  - work: riot-games-clarity-in-league
    page: Clarity in League
    quote: "In the end, our goal is to release skins that feel great with abilities that are clear even during the most chaotic teamfights."
---
