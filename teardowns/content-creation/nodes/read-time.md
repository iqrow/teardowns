---
term: Reading time
aka:
  - hold time
  - time on screen
  - how long text stays up
  - reading speed
kind: measure
plain: Reading time is the hold a viewer gets to read on-screen words before they move or leave, checked against a reading rate in words per minute or characters per second.
does: Tells you whether a viewer can finish the line before the graphic changes and whether the timing leaves room for the picture.
ask: Can a slower reader finish it before it leaves, without missing the shot or the next line?
cues:
  - "A visible hold between a text build and its exit"
  - "A timecode or CPS/WPM readout beside the text"
  - "Line breaks and holds that leave room for the frame's main action"
range: "BBC subtitle guidance: 160-180 words per minute, or 0.33 to 0.375 seconds per word, with a minimum of about 0.3 seconds per word. Netflix: up to 20 characters per second for adult programmes and 17 for children's programmes."
trouble: Words disappear before they can be read, a long hold stalls the edit, or a text build leaves less time than the finished line needs.
at: [-0.02, 0.08, 0.04]
links:
  - {to: "captions", rel: "see also"}
  - {to: "pacing", rel: "measured by"}
variants:
  - label: Timing standard
    items:
      - id: read-bbc
        name: BBC subtitle rate
        plain: A target of 160-180 words per minute, or 0.33 to 0.375 seconds per word, with a minimum of about 0.3 seconds per word.
        why: The item is a reading-rate target, not a promise that every sentence, shot or graphic should use the same hold.
        sources:
          - work: bbc-subtitle-guidelines
            page: 4 Timing, Recommended subtitle speed
            quote: "The recommended subtitle speed is 160-180 words-per-minute (WPM) or 0.33 to 0.375 second per word."
          - work: bbc-subtitle-guidelines
            page: 4.1 Target minimum timing
            quote: "Based on the recommended rate of 160-180 words per minute, you should aim to leave a subtitle on screen for a minimum period of around 0.3 seconds per word"
      - id: read-netflix-adult
        name: Netflix adult limit
        plain: Adult programmes allow up to 20 characters per second.
        why: The item is a maximum reading rate for adult timed text, not a target to force on every viewer or graphic.
        sources:
          - work: netflix-english-timed-text
            page: I.14 Reading Speed Limits
            quote: "Adult programs: Up to 20 characters per second"
      - id: read-netflix-children
        name: Netflix children's limit
        plain: Children's programmes allow up to 17 characters per second.
        why: This is a lower maximum for children's timed text, not a claim that children read every graphic at one fixed speed.
        sources:
          - work: netflix-english-timed-text
            page: I.14 Reading Speed Limits
            quote: "Children’s programs: Up to 17 characters per second"
      - id: read-two-lines
        name: Two-line hold
        plain: Timed text runs to two lines at most, and usually one unless it exceeds the character limit.
        why: Two lines are a layout limit for timed text, not a reason to add words or shrink type until it fits.
        sources:
          - work: netflix-english-timed-text
            page: I.10 Line Treatment
            quote: "Maximum two lines. Text should usually be kept to one line, unless it exceeds the character limitation."
sources:
  - work: bbc-subtitle-guidelines
    page: 4 Timing, Recommended subtitle speed
    quote: "The recommended subtitle speed is 160-180 words-per-minute (WPM) or 0.33 to 0.375 second per word."
  - work: bbc-subtitle-guidelines
    page: 4.1 Target minimum timing
    quote: "However, timings are ultimately an editorial decision that depends on other considerations, such as the speed of speech, text editing and shot synchronisation."
  - work: netflix-english-timed-text
    page: I.14 Reading Speed Limits
    quote: "Adult programs: Up to 20 characters per second"
---
