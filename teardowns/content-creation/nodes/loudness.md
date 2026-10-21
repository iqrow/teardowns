---
term: Loudness
aka:
  - LUFS
  - volume
  - loudness normalisation
kind: measure
plain: Average perceived loudness over the whole video, measured in LUFS. Many
  players turn louder videos down to a reference level, so a level near it keeps
  your dynamics. YouTube’s −14 LUFS is a playback reference, not an upload rule.
does: Keeps your video as loud as the next one in the feed, without distortion.
ask: What is the integrated loudness, and is the true peak below −1 dBTP?
cues:
  - "An integrated loudness reading in LUFS"
  - "Playback level matching the next video"
  - "Distortion in loud parts"
range: YouTube and Spotify play back near −14 LUFS; Apple Podcasts −16 ±1;
  streaming targets vary; broadcast −23 (EBU R 128) or −24 (ATSC A/85)
trouble: Your video sounds quieter than the one before it, or loud parts distort.
at:
  - 0.823
  - 0.19
  - -0.338
variants:
  - label: Target
    items:
      - id: youtube
        name: YouTube
        plain: YouTube turns louder videos down to about −14 LUFS on playback. A
          reference, not an upload rule.
        sources:
          - work: ian-shepherd-youtube-changes-loudness-reference
            page: 2019 playback normalization
            quote: YouTube quietly changed their playback reference level to -14 LUFS.
      - id: spotify
        name: Spotify
        plain: Spotify’s Normal setting plays at −14 LUFS (Loud −11, Quiet −19); true
          peak at most −1 dBTP.
        sources:
          - work: spotify-for-artists-loudness-normalization
            page: Normal, Loud and Quiet levels
            quote: "We adjust tracks to -14 dB LUFS, according to the ITU 1770 standard."
      - id: apple-podcasts
        name: Apple Podcasts
        plain: Apple Podcasts asks for −16 LKFS ±1 dB integrated, true peak at most −1
          dBFS.
        sources:
          - work: apple-podcasts-for-creators-audio-requirements
            page: Loudness and true peak
            quote: "To prevent such content-driven volume adjustments, we recommend that the audio signals are preconditioned so the overall loudness remains around -16 dB LKFS, with a +/- 1 dB tolerance, and that the true-peak value doesn’t exceed -1 dB FS."
      - id: aes-streaming
        name: Streaming
        plain: Streaming delivery targets vary by service; use the platform’s current
          specification.
        sources:
          - work: atsc-a-85-2026-07-loudness-and-true-peak-quick
            page: Streaming delivery target
            quote: For Streaming delivery services only , a single Target Loudness between
              –23 to –27 LKFS is recommended
      - id: ebu-r128
        name: EBU R 128
        plain: "European broadcast: −23 LUFS (±0.5 LU for fixed programmes), true peak
          at most −1 dBTP."
        sources:
          - work: ebu-r-128-loudness-normalisation-and-permitted
            page: p. 4
            quote: "The Programme Loudness Level shall be normalised to a Target Level of -23.0 LUFS."
      - id: atsc-a85
        name: ATSC A/85
        plain: "US broadcast: −24 LKFS, true peak at most −2 dBTP. Not a target for
          social uploads."
        sources:
          - work: atsc-a-85-2026-07-loudness-and-true-peak-quick
            page: Annex M quick reference
            quote: "For delivery or exchange of Content without metadata (and where there is no prior arrangement by the parties regarding Target Loudness), the Target Loudness should be –24 LKFS*."
sources:
  - work: ian-shepherd-youtube-changes-loudness-reference
    page: 2019 playback reference
    quote: YouTube quietly changed their playback reference level to -14 LUFS.
  - work: ebu-r-128-loudness-normalisation-and-permitted
    page: p. 4
    quote: "The EBU uses ‘LUFS’ which is compliant with international naming conventions."
---
