---
term: Planning information
aka: [fog of war, order preview, what you can know]
kind: concept
plain: "The visibility and prediction tools exposed while orders are still private: observed enemies, legal-move overlays, estimated paths and test replays."
does: Lets a player reason about an uncertain future without leaking hidden orders or promising a forecast the resolver cannot guarantee.
ask: What can each player see, test or infer before committing, and what remains hidden?
cues:
  - Observed enemies on the planning map
  - Legal-move overlays
  - Estimated paths
  - Test replays before commitment
range: full information; fog of war; partial scouting; preview with uncertainty
trouble: A preview that looks certain, or information revealed before resolution, erases hidden-information play and makes commitment bookkeeping rather than judgment.
at: [-0.21, -0.22, 0.08]
links:
  - {to: screen-presentation, rel: see also}
  - {to: choice-space, rel: see also}
sources:
  - work: battlefront-com-combat-mission-afrika-korps-game
    page: "pp. 7, 12, 16–19: replay, Fog of War and planning overlays"
    quote: Fog Of War None - enemy units are visible all the time and detailed information is available for all of them.
  - work: matrix-games-wego-world-war-ii-overlord-game
    page: "pp. 10, 13, 17–19, 87–90: fog, planning map and information controls"
    quote: The following icons are used on the game map during the Planning Phase to assist the player in seeing/understanding his current plan
variants:
  - label: Route preview
    items:
      - id: route-reach-bands
        name: Reach bands
        plain: Outlines or colours show how far the unit gets on each budget, such as one action against a dash, or this turn against later turns.
        sources:
          - work: firaxis-games-xcom-2-manual
            page: "p. 7: Movement"
            quote: a Blue outline displays the movement range for a single Action point
          - work: new-world-computing-heroes-of-might-and-magic-iii
            page: "p. 15: Moving Your Hero"
            quote: brown arrows indicate the length that must be traveled in the next or subsequent turns
      - id: route-arrival-markers
        name: Arrival markers
        plain: Numbers along a long route show the turn in which the unit reaches each point.
        sources:
          - work: battle-for-wesnoth-source-code
            url: https://raw.githubusercontent.com/wesnoth/wesnoth/master/src/game_display.cpp
            page: "src/game_display.cpp: game_display::draw_movement_info"
            quote: we display turn info only if different from a simple last
      - id: route-path-marks
        name: Path marks
        plain: An icon on the route step where something happens on the way, such as breaking concealment, crossing a hazard or entering enemy control, so the cost shows where it is paid.
        why: It marks one step of the route, not the destination or the whole move; the arrival and the total stay separate readouts.
        sources:
          - work: firaxis-games-xcom-2-manual
            page: "p. 7: Movement"
            quote: Areas marked with a red eye icon break concealment when entered.
          - work: battle-for-wesnoth-source-code
            url: https://raw.githubusercontent.com/wesnoth/wesnoth/master/src/pathfind/pathfind.hpp
            page: "src/pathfind/pathfind.hpp: marked_route"
            quote: Structure which holds a single route and marks for special events.
      - id: route-waypoints
        name: Waypoints
        plain: The player pins the exact route tile by tile instead of taking the shortest one, and the preview follows that route.
        sources:
          - work: firaxis-games-xcom-2-manual
            page: "p. 7: Movement"
            quote: "use Waypoint Movement by holding [CTRL] while selecting tiles to specifically set a unit’s path"
---
