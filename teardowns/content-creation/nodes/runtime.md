---
term: Runtime
aka:
  - video length
  - duration
kind: knob
plain: "How long the video runs. Platform limits constrain delivery; for YouTube
  mid-roll placement, the guidance points to natural pauses, scene changes or
  breaks."
does: Sets how much room the story has and which feed the video lands in.
ask: What is the shortest version that still delivers everything?
cues:
  - "Duration visible on the player"
  - "Natural pauses, scene changes or breaks"
  - "Different lengths landing in different platform feeds"
trouble: Padding for a monetisation threshold can make the story drag.
at:
  - 0.72
  - -0.27
  - 0.012
variants:
  - label: Platform
    items:
      - id: youtube-shorts
        name: YouTube Short
        plain: Up to 3 minutes for square or vertical uploads since 15 October 2024.
        sources:
          - work: youtube-blog-tall-updates-shorts
            page: Shorts up to 3 minutes from October 15, 2024
            quote: Starting on October 15, you can upload Shorts up to 3 minutes long.
      - id: instagram-reels
        name: Instagram Reel
        plain: Up to 3 minutes in the app since January 2025 (was 90 seconds).
        sources:
          - work: social-media-today-instagram-officially-expands
            page: January 18, 2025
            quote: Today, Instagram has officially announced that users can now create
              3-minute Reels in the app
      - id: tiktok-standard
        name: TikTok in-app
        plain: TikTok’s documented in-app creation limit is 3 minutes; upload limits
          vary by account and region.
        sources:
          - work: tiktok-newsroom-more-tok-on-the-clock
            page: July 1, 2021; up to three minutes
            quote: giving our global community the flexibility to film, upload, and edit
              videos up to three minutes in length directly within TikTok.
      - id: x-standard
        name: X standard
        plain: Up to 140 seconds without X Premium.
        sources:
          - work: x-help-center-how-to-share-and-watch-videos-on-x
            page: Standard upload duration
            flag: X Help Center returned HTTP 403 to the checker; page opened manually.
            quote: If you aren't subscribed to X Premium, you can still upload videos up to
              140 seconds long with a maximum file size of 512MB.
      - id: x-premium
        name: X Premium
        plain: Premium accounts can upload videos shorter than 4 hours at up to
          1080p, with a maximum file size of 16GB.
        sources:
          - work: x-help-center-how-to-share-and-watch-videos-on-x
            page: Premium upload duration and size
            flag: X Help Center returned HTTP 403 to the checker; page opened manually.
            quote: Premium subscribers can upload videos shorter than 4 hours at up to
              1080p, with a maximum file size of 16 GB.
      - id: youtube-long-form
        name: YT mid-rolls
        plain: YouTube's mid-roll guidance favours natural pauses, scene changes or
          breaks rather than padding to a clock.
        sources:
          - work: youtube-blog-mid-roll-ads-updates
            page: Mid-roll ad slots and natural breaks
            quote: Instead, aim for natural pauses, scene changes, or breaks in the content.
      - id: linkedin
        name: LinkedIn
        plain: Up to 15 minutes for a standard video post.
        sources:
          - work: linkedin-help-share-videos-on-linkedin
            page: Video requirements
            quote: "Maximum video duration: 15 minutes Minimum video duration: 3 seconds when uploading from desktop and 2 seconds when uploading from the LinkedIn mobile app."
      - id: tiktok-series
        name: TikTok Series
        plain: Paid Series collections allow up to 20 minutes per video.
        sources:
          - work: tiktok-newsroom-introducing-a-new-way-for
            page: March 7, 2023
            quote: One Series can include up to 80 videos, each up to 20 minutes long, giving people a new, longer format to watch their favorite creators and content.
sources:
  - work: youtube-blog-mid-roll-ads-updates
    page: Mid-roll ads and viewing experience
    quote: Instead, aim for natural pauses, scene changes, or breaks in the content.
  - work: youtube-blog-tall-updates-shorts
    page: Shorts up to 3 minutes
    quote: Starting on October 15, you can upload Shorts up to 3 minutes long.
  - work: tiktok-newsroom-introducing-a-new-way-for
    page: March 7, 2023; 20-minute Series videos
    quote: One Series can include up to 80 videos, each up to 20 minutes long, giving people a new, longer format to watch their favorite creators and content.
  - work: social-media-today-instagram-officially-expands
    page: January 18, 2025
    quote: Today, Instagram has officially announced that users can now create
      3-minute Reels in the app
  - work: linkedin-help-share-videos-on-linkedin
    page: Video requirements
    quote: "Maximum video duration: 15 minutes Minimum video duration: 3 seconds when uploading from desktop and 2 seconds when uploading from the LinkedIn mobile app."
---
