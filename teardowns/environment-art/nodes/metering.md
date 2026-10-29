---
term: Exposure metering
aka:
  - luminance metering
  - exposure meter
kind: measure
plain: "Exposure metering reduces the frame's luminance to a target exposure, by averaging it or selecting a controlled part of its histogram."
does: "Chooses which pixels are allowed to steer exposure so important forms stay readable."
ask: "Should the meter treat the whole frame, a histogram band, or a masked region as the scene's representative brightness?"
cues:
  - "An HDR eye-adaptation view shows a luminance histogram and a target line"
  - "A bright sky at the frame edge does not yank the meter away from the subject"
  - "A center-weighted or masked region follows the playable subject"
range: "Basic averages log luminance; Histogram uses bins and low/high percentiles; a metering mask weights chosen pixels."
trouble: "A sky, window, emissive, or deep corner dominates the target, causing visible pumping or a subject that is too dark or too bright."
variants:
  - label: Metering method
    items:
      - id: histogram
        name: Histogram
        plain: "Builds a luminance histogram and selects a controlled range of values."
        why: "It counts as histogram metering because exposure is chosen from a distribution of luminance values, not one reduction."
        sources:
          - work: epic-games-auto-exposure
            page: "Exposure Metering Modes"
            quote: "Auto Exposure Histogram mode provides finer control over auto exposure with advanced settings constructed from a 64-bin histogram."
      - id: basic
        name: Basic average
        plain: "Uses a fast downsampled or average log-luminance value."
        why: "It counts as basic metering because one reduced luminance value drives the target."
        sources:
          - work: epic-games-auto-exposure
            page: "Histogram and Basic Algorithm"
            quote: "The Auto Exposure Basic algorithm uses the average of the log luminance of the scene to determine the target exposure value."
      - id: manual
        name: Manual
        plain: "Uses a fixed exposure value instead of scene luminance."
        why: "It counts as manual metering because the artist or camera supplies the exposure rather than a luminance calculation."
        sources:
          - work: epic-games-auto-exposure
            page: "Manual Algorithm"
            quote: "The Manual metering mode allows the user to select a single, fixed exposure value that is unaffected by the luminance in the scene."
sources:
  - work: epic-games-auto-exposure
    page: "Histogram and Basic Algorithm"
    quote: "Auto Exposure Basic and Auto Exposure Histogram metering modes both calculate the overall luminance of the scene, and brighten or darken the scene to an expected value, but they differ in how they calculate scene luminance."
  - work: epic-games-auto-exposure
    page: "Exposure Metering Mask"
    quote: "By weighting pixels in the mask toward the center of the screen, bright objects appearing along the edges of the screen have less potential to cause abrupt changes in the expected exposure."
---
