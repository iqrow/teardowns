---
term: Frame time
aka:
  - p95 frame time
  - frame rate
  - milliseconds per frame
  - fps
kind: measure
plain: "The time to make one frame, measured in milliseconds."
does: "Shows whether the renderer fits its frame budget and exposes slow-tail hitches that an average can hide."
ask: "What does a high-percentile frame cost, and does it stay inside the target budget?"
cues:
  - "A frame-time trace rises above a horizontal budget line"
  - "The graph's tail shows occasional tall spikes"
  - "CPU and GPU timing bars share a millisecond scale"
range: "A 16.7 ms frame holds 60 fps; a 33.3 ms frame holds 30 fps. Read a high percentile such as the 95th or 99th so slow frames count, not only the average."
trouble: "A long tail or spikes above the budget show hitches even when average frame time looks acceptable."
at: [-0.05, 0.39, 0]
sources:
  - work: epic-games-ue-performance-overview
    page: General Tips
    quote: "Accurate profiling should be done in milliseconds (ms), not frames per second (fps)."
  - work: microsoft-optimize-input-latency-directx-games
    page: Additional ways to reduce input latency, Use waitable swap chains
    quote: "On a 60 Hz display, the screen refreshes every 16.7 ms (1 second/60 frames)."
  - work: epic-games-ue-performance-overview
    page: General Tips
    quote: "If you see a limit on 30 fps (~33.3ms) or 60 fps (~16.6ms), you likely have VSync enabled."
  - work: nvidia-frameview-user-guide
    page: Introduction
    quote: "Percentile FPS data is valuable for illustrating the severity and frequency of stutters that can interrupt gameplay."
  - work: nvidia-frameview-user-guide
    page: Charting Percentile Data
    quote: "A 95th percentile frametime is the value below which 95% of the frametimes are found. Example: if the dataset has a rendered frametime 95th percentile of 16.67ms, then 95% of the frames were rendered faster than 16.67ms."
  - work: nvidia-frameview-user-guide
    page: Percentile FPS displayed in overlay
    quote: "Selecting these will show the 90th, 95th, and 99th frame time percentile calculations in the overlay."
deeper: "CPU and GPU time split; frame pacing."
---
