---
term: Defense in depth
aka:
  - layered gates
  - Swiss cheese barriers
kind: pattern
plain: Several independent layers reduce the chance that one failure reaches the final outcome. Each layer has gaps, so safety comes from their combination and from learning when gaps align.
ask: Which independent layers stand between an unsafe change and merge, and how do they fail differently?
sources:
  - work: james-reason-human-error
    page: The Swiss cheese model of system accidents
    quote: "Usually, this can happen only when the holes in many layers momentarily line up to permit a trajectory of accident opportunity"
  - work: james-reason-human-error
    page: System approach
    quote: "The system approach concentrates on the conditions under which individuals work and tries to build defences to avert errors or mitigate their effects"
  - work: building-secure-reliable-systems
    page: Design for Resilience
    url: https://google.github.io/building-secure-and-reliable-systems/raw/ch08.html
    quote: "Defense in depth protects systems by establishing multiple layers of defense perimeters."
---
