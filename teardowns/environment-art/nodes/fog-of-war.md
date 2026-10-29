---
term: Fog of war
aka:
  - fog of war rendering
  - shroud
  - vision boundary
  - line of sight darkness
kind: part
plain: "The darkening that hides the parts of a strategy map a team cannot currently see, until its units or tools light them. Its edge marks where vision ends."
does: "Tells each player at a glance where their vision ends, while the visible play area keeps the colour and value the artists set."
ask: "Can the player see exactly where vision ends, and does the fog leave the visible area at its intended value?"
at: [0, -0.36, 0.04]
cues:
  - "A lit area around each unit inside one dark blanket"
  - "A narrow, soft edge where vision ends"
  - "No jagged steps or grey bands at the edge"
trouble: "Jagged or stepped edges pull the eye from play; a wide blur hides where vision ends; the fog pass dims areas that are fully visible, so every surface renders darker than the artists intended."
links:
  - {to: gameplay-readability, rel: see also}
  - {to: value-structure, rel: see also}
sources:
  - work: riot-games-a-story-of-fog-and-war
    page: A Story of Fog and War
    quote: "Among them was the fog of war—the blanket of darkness that hides areas of the map until a team illuminates them with champions, abilities, or wards."
  - work: riot-games-a-story-of-fog-and-war
    page: A Story of Fog and War
    quote: "The game designers wanted the transition between the visible area and the fog of war to be as defined as possible for the sake of gameplay clarity, so I needed a smooth and visually pleasing transition limited to a narrow band of gradation."
  - work: riot-games-a-story-of-fog-and-war
    page: A Story of Fog and War
    quote: "Notice the jaggies formed at the edges of poor Ahri’s vision and the discrete levels of gradation. Both are visually distracting from the gameplay experience."
  - work: riot-games-a-story-of-fog-and-war
    page: A Story of Fog and War
    quote: "The old code was actually darkening areas of the map that were totally clear of the fog of war. This means that every texture created by artists was being rendered ever-so-slightly darker than intended. And nobody had noticed!"
  - work: blizzard-starcraft-2-map-elements
    page: "Game Guide: Map Elements"
    quote: "Dark areas have not yet been explored, while the grayed-out areas have (they simply are not within sight range of friendly units or structures)."
deeper: "Vision states (visible, seen earlier, never seen), edge treatment (blur width, upscaling, antialiasing) and how fog colour and value sit inside the art direction."
---
