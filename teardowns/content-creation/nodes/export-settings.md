---
term: Export settings
aka:
  - render settings
  - codec
  - bitrate
kind: knob
plain: "The file format the editor writes: container, codec, frame size, frame
  rate, bitrate and audio. Keep the frame rate you recorded. Each platform
  publishes its own limits and re-encodes the upload."
does: Gives the platform a clean source so its re-encode looks as good as possible.
ask: Does the file match the platform’s recommended settings?
trouble: Blocky video after upload, wrong frame size, or audio out of sync.
at:
  - 0.9142
  - -0.5427
  - 0.1739
variants:
  - label: Platform
    items:
      - id: youtube-export
        name: YouTube
        plain: "Container: MP4; Video codec: H.264 High, closed GOP; Frame size:
          1920×1080; Frame rate: as recorded; Bitrate: 8 Mbps (12 at high fps);
          Audio / limits: AAC-LC or Opus, 48 kHz."
        sources:
          - work: youtube-help-recommended-upload-encoding
            page: Encoding settings and SDR bitrate table
            quote: Content should be encoded and uploaded in the same frame rate it was
              recorded.
      - id: tiktok-export
        name: TikTok (ad spec)
        plain: "Frame size: ≥ 540×960 at 9:16; Bitrate: ≥ 516 kbps; Audio / limits: ≤
          500 MB, ≤ 10 min. Other fields are not on the opened spec page."
        sources:
          - work: tiktok-ads-manager-tiktok-auction-in-feed-ads
            page: Non-Spark Ads dimensions, format, duration, size and bitrate
            quote: "Vertical (recommended): 9:16, more than or equal to 540*960px."
      - id: instagram-reels-export
        name: Instagram Reels
        plain: "Frame size: 9:16 (1080×1920 usual); Audio / limits: with sound. Other
          fields are not on the opened spec page."
        unverified: "No source opened for this platform."
      - id: linkedin-export
        name: LinkedIn
        plain: "Frame size: 256×144 to 4096×2304; Frame rate: 10–60 fps; Audio / limits:
          ≤ 5 GB, ≤ 15 min. Other fields are not on the opened spec page."
        sources:
          - work: linkedin-help-share-videos-on-linkedin
            page: Organic video requirements
            quote: "Maximum file size: 5 GB Minimum file size: 75 KB"
      - id: x-export
        name: X (web)
        plain: "Frame size: ≤ 1920×1200; tall ≤ 1200×1900; Frame rate: ≤ 40 fps;
          Bitrate: ≤ 25 Mbps. Other fields are not on the opened spec page."
        unverified: "No source opened for this platform."
sources:
  - work: youtube-help-recommended-upload-encoding
    page: Container, codec, bitrate and audio settings
    quote: Content should be encoded and uploaded in the same frame rate it was
      recorded.
  - work: tiktok-ads-manager-tiktok-auction-in-feed-ads
    page: Non-Spark in-feed ad specifications
    quote: "Vertical (recommended): 9:16, more than or equal to 540*960px."
  - work: x-help-center-how-to-share-and-watch-videos-on-x
    page: Web video upload requirements
    quote: If you aren't subscribed to X Premium, you can still upload videos up to
      140 seconds long with a maximum file size of 512MB.
    flag: X Help Center returned HTTP 403 to the checker; page opened manually.
---
