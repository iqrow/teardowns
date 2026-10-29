---
term: Exposure compensation
aka:
  - exposure bias
  - ExpComp
kind: knob
plain: "Exposure compensation adds or removes stops from the metered target without changing which pixels the meter reads."
does: "Lets an artist bias the frame brighter or darker while keeping the metering and adaptation policy intact."
ask: "Is the meter's middle-grey target too bright or too dark for this scene's intended read?"
cues:
  - "A plus/minus stop control moves the whole frame without changing the histogram shape"
  - "The same bright sky stays in the same meter region while the ground shifts in value"
range: "A compensation of +1 makes the result twice as bright; -1 makes it twice as dark."
trouble: "Compensation hides a bad meter or tone curve, so the scene alternates between clipped highlights and muddy shadows as the camera moves."
sources:
  - work: epic-games-auto-exposure
    page: "Manual Algorithm"
    quote: "The Exposure Compensation (also called ExpComp for short) defines an additional scale of 2^ExpComp on top of the exposure computed from the current metering mode."
  - work: epic-games-auto-exposure
    page: "Auto Exposure Histogram Settings"
    quote: "When set to 0, there will be no adjustment, -1 is two times darker, -2 is four times darker, 1 is two times brighter, and 2 is four times brighter."
---
