---
term: Audience retention
aka:
  - retention graph
  - drop-off
  - watch curve
kind: measure
plain: "A graph of the share of viewers still watching at each moment. YouTube
  names four shapes: flat parts, gradual declines, spikes (rewatching or
  sharing) and dips (skipping or leaving). The lines here are sketches of those
  shapes, not benchmarks."
does: Points to the exact second a problem starts.
ask: Where is the steepest drop, and what is on screen there?
cues:
  - "A line showing viewers still watching by moment"
  - "Flat parts, gradual declines, spikes and dips"
  - "A steep drop with its exact second"
trouble: A cliff at the start (hook), a dip in the middle (a dull section) or an
  early fall before the end screen.
at:
  - -0.285
  - -0.21
  - 0.012
variants:
  - label: Shape
    items:
      - id: flat
        name: Flat
        plain: Viewers watched this part from start to finish.
        sources:
          - work: youtube-blog-master-these-4-metrics
            page: Viewer Retention
            quote: This metric shows you at what points viewers are watching (and dropping
              off) from your video. You'll see a graph illustrating the percentage of
              your audience still watching at each moment of your video.
      - id: intro-drop
        name: Intro drop
        plain: "Many leave in the first seconds: the opening does not match the title
          and thumbnail. YouTube compares the share left at 30 seconds."
        sources:
          - work: youtube-blog-master-these-4-metrics
            page: Viewer Retention; intros and drop-offs
            quote: This metric shows you at what points viewers are watching (and dropping
              off) from your video. You'll see a graph illustrating the percentage of
              your audience still watching at each moment of your video.
      - id: decline
        name: Gradual decline
        plain: "Viewers lose interest over time: no open question pulls them on."
        sources:
          - work: youtube-blog-your-video-second-by-second
            page: Hot Spots graph and viewers leaving
            quote: "What if you could know exactly when viewers tend to leave your videos, or which scenes within a video they watch again and again?"
      - id: spike
        name: Spike
        plain: Viewers rewatched or shared this moment, or found it unclear and played
          it again.
        sources:
          - work: youtube-blog-your-video-second-by-second
            page: Hot Spots and rewinds
            quote: "What if you could know exactly when viewers tend to leave your videos, or which scenes within a video they watch again and again?"
      - id: dip
        name: Dip
        plain: Viewers skipped this part or stopped watching.
        sources:
          - work: youtube-blog-your-video-second-by-second
            page: Hot Spots and cold spots
            quote: "Now that Insight shows what parts of videos viewers are watching and skipping, you’ll no longer have to guess why people watch your work – you’ll know."
sources:
  - work: youtube-blog-master-these-4-metrics
    page: Viewer Retention graph
    quote: This metric shows you at what points viewers are watching (and dropping off)
      from your video. You'll see a graph illustrating the percentage of your audience
      still watching at each moment of your video.
  - work: youtube-blog-your-video-second-by-second
    page: Hot Spots graph
    quote: The Hot Spots tab in Insight plays your video alongside a graph that
      shows the ups-and-downs of viewership at different moments within the
      video.
---
