---
term: Motion graphics template
aka:
  - MOGRT
  - title template
  - Essential Graphics template
  - preset
kind: part
plain: A motion graphics template packages an animated composition with editable controls, source media and pre-compositions so an editor can reuse it without rebuilding the motion.
does: Protects the design logic while exposing only the text, colours, sizes, timing or media that a safe handoff needs.
ask: Which controls can another editor change, and what must stay protected so the motion still works?
cues:
  - "A template card with editable text, colour or numeric controls"
  - "The same entry, exit and layout behaviour surviving different words"
  - "A title, lower third or generator dropped into an editor's timeline"
range: "MOGRTs expose only the controls the author publishes; a Final Cut Generator can be static or animated."
trouble: A field is not exposed, a long name breaks the layout, or too many controls let the template drift away from the package.
at: [-0.36, 0.18, 0.02]
variants:
  - label: Published form
    items:
      - id: template-mogrt
        name: MOGRT
        plain: An After Effects composition exported as a .mogrt file and edited in Premiere.
        why: A MOGRT is defined by its packaged composition and exposed controls, not by a particular title, colour or software version.
        sources:
          - work: adobe-after-effects-motion-graphics-templates
            page: Export Motion Graphics templates (.mogrt)
            quote: "Export your Motion Graphics template so it can be edited directly in Premiere. All the source images, videos, and pre compositions necessary to maintain your design are packaged in the template. Only the controls you expose are available for customization in Premiere, which allows you to retain creative control of your design."
      - id: template-final-cut
        name: Final Cut Pro template
        plain: A Motion project published as a Final Cut effect, transition, title or generator.
        why: It is a Final Cut template because a published Motion project appears in a Final Cut browser, not because it uses one particular browser category.
        sources:
          - work: apple-motion-final-cut-templates
            page: Intro to Final Cut Pro templates in Motion
            quote: "When you save a Final Cut Pro template in Motion, the resulting effect, transition, title, or generator automatically becomes available in one of the Final Cut Pro browsers."
      - id: template-packaged-media
        name: Packaged media template
        plain: A reusable composition that carries the source images, videos and nested compositions it needs.
        why: The shared feature is a self-contained handoff that keeps the design assets with the animation, whatever editor opens it.
        sources:
          - work: adobe-after-effects-motion-graphics-templates
            page: Work with Motion Graphics templates
            quote: "Motion Graphics templates can include various motion graphics elements packaged as templates with easy-to-use controls along with the source images, videos, and pre-comps necessary to maintain consistent design across your projects."
sources:
  - work: adobe-after-effects-motion-graphics-templates
    page: Work with Motion Graphics templates
    quote: "Motion Graphics templates can include various motion graphics elements packaged as templates with easy-to-use controls along with the source images, videos, and pre-comps necessary to maintain consistent design across your projects."
  - work: adobe-after-effects-motion-graphics-templates
    page: Export Motion Graphics templates (.mogrt)
    quote: "Only the controls you expose are available for customization in Premiere, which allows you to retain creative control of your design."
  - work: apple-motion-final-cut-templates
    page: Intro to Final Cut Pro templates in Motion
    quote: "A Final Cut Generator is nearly identical to any other Motion project—it can include text, shapes, replicators, camera moves and lighting, generators, and so on. It can be static or animated."
---
