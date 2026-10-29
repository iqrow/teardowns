---
term: Graphics package
aka:
  - graphics pack
  - template pack
  - toolkit
  - lower thirds and title cards
  - on-air look
kind: part
plain: A graphics package is a reusable set of motion-graphics elements that keeps one design consistent across projects.
does: Makes separate videos read as one visual system.
ask: Which elements recur, what rules join them, and can each one be reused without losing the system?
cues:
  - "Title card, lower third, callout and end screen sharing type, colour and spacing"
  - "A logo sting or bug appearing at the same point in the package"
  - "Long and short names fitting the same lower-third layout"
trouble: Each graphic looks like a different project, important information has no matching element, or a reused template breaks when the content changes.
range: "Title card, lower third, callout, chart, logo sting and end screen are common package elements."
at: [-0.4, -0.3, 0.02]
children:
  - motion-template
variants:
  - label: Element
    items:
      - id: gfx-element-title-card
        name: Title card
        plain: A title graphic presents a title or names in a visual frame.
        why: It is a title graphic because it presents the primary title or names, not because it uses a particular colour or animation.
        sources:
          - work: jon-krasner-motion-graphic-design
            url: https://api.pageplace.de/preview/DT0400.9781136146626_A23813368/preview-9781136146626_A23813368.pdf
            page: A Historical Overview
            quote: "Hand-drawn white lettering superimposed on a black background typically provided the title, the names of individuals involved (i.e., directors, technicians, cast), dialogue, and action for the scenes."
      - id: gfx-element-lower-third
        name: Lower third
        plain: A graphic overlay in the lower part of the frame that identifies a speaker, place or subject.
        why: Its defining feature is identifying information held in the lower part of the picture, not a particular bar shape or entrance effect.
        sources:
          - work: adobe-lower-third-graphics
            page: What is a lower third graphic?
            quote: "In the simplest form, a lower third is a text title or graphic overlay placed in the lower region of the screen."
      - id: gfx-element-callout
        name: Callout
        plain: A callout is a graphic shape with a pointer.
        why: Its defining feature is a callout shape with a pointer, not a particular app or subject.
        sources:
          - work: remotion-callout
            page: <Callout />
            quote: "Renders an SVG element containing a callout shape."
          - work: remotion-callout
            url: https://www.remotion.dev/docs/shapes/make-callout
            page: makeCallout()
            quote: "The pointer is not included in the calculation."
      - id: gfx-element-chart
        name: Chart
        plain: An animated infographic uses motion to bring data and charts to life.
        why: It counts as a chart when it uses motion to bring data and charts to life, whatever the subject, palette or chart shape.
        sources:
          - work: adobe-motion-graphics-definition
            page: Using motion graphics to inform the world
            quote: "Many designers began to animate their flat infographics to tell more engaging stories that used motion to bring data and charts to life."
      - id: gfx-element-logo-sting
        name: Logo sting
        plain: An animated logo mark that brings a brand's logo to life.
        why: The element is animated logo artwork, not simply any static logo.
        sources:
          - work: adobe-after-effects-logo-animation
            page: Animate a logo
            quote: "Bring your brand’s logo to life with these 4 animation tips."
      - id: gfx-element-end-screen
        name: End screen
        plain: A closing end-screen element shown in the final seconds to promote a next video, subscription or destination.
        why: It is an end screen because it closes the piece with a next action, not because it uses a particular call to action.
        sources:
          - work: youtube-end-screens
            page: Add end screens to videos
            quote: "End screens can be added to the last 5–20 seconds of a video. You can use them to promote other videos, encourage viewers to subscribe, and more."
sources:
  - work: adobe-after-effects-motion-graphics-templates
    page: Work with Motion Graphics templates
    quote: "Motion Graphics templates can include various motion graphics elements packaged as templates with easy-to-use controls along with the source images, videos, and pre-comps necessary to maintain consistent design across your projects."
  - work: adobe-premiere-essential-graphics
    page: Create title graphics
    quote: "Easily create titles directly on your video using the Type tool in the Essential Graphics panel in Adobe Premiere Pro."
  - work: blackmagic-fusion-motion-graphics
    page: The Fastest Way to Create Effects
    quote: "Fusion lets you quickly design lower thirds, animate 3D infographics or pull perfectly clean keys on a green screen shot."
  - work: youtube-end-screens
    page: Add end screens to videos
    quote: "End screens can be added to the last 5–20 seconds of a video. You can use them to promote other videos, encourage viewers to subscribe, and more."
  - work: adobe-premiere-mogrt-overview
    page: Motion Graphics templates in Premiere
    quote: "Use Motion Graphics templates to create various animated elements, such as titles, lower thirds, and buttons."
---
