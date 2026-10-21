---
term: Detail and noise review
aka:
  - noise loop
  - readability review
kind: loop
pattern: pattern-braking-engine
plain: A balancing review cycle for detail. Adding detail raises visual noise, noise lowers readability, and the review removes, groups or quiets detail until the scene reads again.
does: Balances visual detail against scene clarity through repeated review.
ask: Which detail improved the scene, which detail became noise, and what does the next readability check say?
at: [0, 0.12, 0.04]
loop:
  type: balancing
  through:
    - set-dressing
    - detail-hierarchy
    - greyscale-check
    - gameplay-readability
sources:
  - work: robert-yang-the-level-design-book
    page: Environment Art
    url: https://book.leveldesignbook.com/process/env-art
    quote: "as we add additional visual details to the world, the level geometry becomes less distinct and more noisy."
  - work: robert-yang-the-level-design-book
    page: Environment Art
    url: https://book.leveldesignbook.com/process/env-art
    quote: "As you art pass a level and apply set dressing, the accumulation of these details can impact the player's understanding of the space."
---
