---
term: Wear
aka:
  - dirt and wear
  - use marks
  - weathering
kind: part
plain: "Wear is a local change caused by use, weather or accumulation: compacted dirt, scuffs, mud, burn marks, exposed soil or a worn path. It changes the surface response as well as its colour."
does: "Tells the player where people, water and weather have acted, and grounds paths, props and structures in the same history."
ask: "What caused this mark, where would it gather, and does it change material properties rather than only darken the image?"
cues:
  - "A footpath exposes or compacts a different ground material"
  - "Dirt gathers at a contact edge with varied width and colour"
  - "Scuffs change roughness or relief as well as albedo"
trouble: "A uniform dark ring around every object, with no change of material, looks like the dark halo of a screen-space AO artefact, so it reads as a bad shadow instead of wear. One noise layer covering the whole map has no cause."
at: [0.32, 0.095, 0.82]
pattern: pattern-accumulation
links:
  - {to: decals, rel: made from}
  - {to: ambient-occlusion, rel: see also}
  - {to: grounding, rel: see also}
sources:
  - work: johan-andersson-terrain-rendering-frostbite
    page: ch. 5.2.5, Destruction Mask
    quote: "We would like to, at the same time, be able to change the texture compositing and make other terrain materials visible for that specific area to show for example burnt dirt"
  - work: daniel-mcgowan-stages-environment-art
    page: Final Assets
    quote: "the assets need to have some wear and tear and tell a story. The scene would feel too fake if everything was perfectly clean and looked brand new."
  - work: epic-games-ambient-occlusion-ue4
    page: "Ambient Occlusion: Distance"
    quote: "A tweak parameter that is needed to avoid dark halos around objects. As the SSAO technique only has the zbuffer, it cannot know about the thickness of objects."
---
