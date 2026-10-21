---
term: Aspect ratio
aka:
  - vertical or horizontal
  - frame shape
  - 9:16
kind: knob
plain: The frame’s width to height. 16:9 for YouTube long-form and TV; 9:16 for
  Shorts, Reels and TikTok; 4:5 and 1:1 fill more of a scrolling feed.
does: Decides how much of the phone screen the video fills.
ask: Which screen will most viewers see this on?
cues:
  - "A vertical or horizontal frame filling the screen"
  - "Black bars after a crop"
  - "A face cut off when 16:9 becomes vertical"
trouble: Black bars, or a face cut off when a 16:9 shot is cropped to vertical.
at:
  - -0.7467
  - 0.1907
  - -0.0927
variants:
  - label: Ratio
    items:
      - id: ar-9-16
        name: 9:16 (1080×1920)
        plain: "Vertical. Fills a phone held upright: Shorts, Reels, TikTok."
        sources:
          - work: tiktok-ads-manager-tiktok-auction-in-feed-ads
            page: Vertical 9:16 minimum
            quote: "Vertical (recommended) : 9:16, more than or equal to 540*960px."
      - id: ar-16-9
        name: 16:9 (1920×1080)
        plain: "Horizontal widescreen: YouTube long-form, desktop and TV."
        sources:
          - work: youtube-help-recommended-upload-encoding
            page: SDR 1080p bitrate table and 16:9 player
            quote: The standard aspect ratio for YouTube on a computer is 16:9.
      - id: ar-4-5
        name: 4:5 (1080×1350)
        plain: "Slightly tall. Takes more of a scrolling feed than 16:9: Instagram and
          LinkedIn feeds."
        sources:
          - work: linkedin-help-video-ads-advertising
            page: 4:5 video ads
            quote: "Videos must meet height and width specifications, as well as aspect ratio specifications. You can calculate an aspect ratio by dividing the video width by height."
      - id: ar-1-1
        name: 1:1 (1080×1080)
        plain: Square. A safe middle for feeds that crop.
        sources:
          - work: tiktok-ads-manager-tiktok-auction-in-feed-ads
            page: Square 1:1 minimum
            quote: "Square : 1:1, more than or equal to 640*640px"
sources:
  - work: youtube-help-recommended-upload-encoding
    page: Video and aspect-ratio recommendations
    quote: The standard aspect ratio for YouTube on a computer is 16:9.
  - work: tiktok-ads-manager-tiktok-auction-in-feed-ads
    page: Non-Spark Ads dimensions
    quote: "Vertical (recommended) : 9:16, more than or equal to 540*960px."
  - work: linkedin-help-video-ads-advertising
    page: Video specifications by aspect ratio
    quote: "Videos must meet height and width specifications, as well as aspect ratio specifications. You can calculate an aspect ratio by dividing the video width by height."
---
