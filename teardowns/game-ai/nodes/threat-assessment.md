---
term: "Threat assessment"
aka: [danger estimate, threat map, force risk]
kind: measure
plain: "An estimate of how much danger each known enemy force poses to the opponent's assets, routes and future plan."
does: "Turns scattered enemy observations into a ranked risk that can redirect production, positioning or attack timing."
ask: "Which threat can cause the most irreversible loss before the next decision point?"
cues: ["A danger gauge rises near a base or route", "Enemy forces carry a projected reach or threat radius", "The strategic plan changes when a high-risk force is detected"]
range: "Relative risk can be represented as a signed or normalised value over space, time and asset importance."
trouble: "The measure ignores reach, timing or target value, so a distant army receives the wrong response."
deeper: "Threat sources, reach and timing, target value, uncertainty, aggregation and confidence decay; base defence can size defenders per enemy in each owned region while discounting one likely worker scout."
sources:
  - work: mark-modular-influence-maps
    page: "Section 30.1, p. 2"
    quote: "Determining the relative threat that an agent was under at a given moment"
  - work: mark-modular-influence-maps
    page: "Section 30.4.2, p. 8"
    quote: "This differs from the location map in that it represents not where an agent could go, but what it could potentially threaten."
  - work: ualbertabot-source
    page: "CombatCommander.cpp, updateDefenseSquads()"
    url: "https://raw.githubusercontent.com/davechurchill/ualbertabot/master/UAlbertaBot/Source/CombatCommander.cpp"
    quote: "// start off assuming all enemy units in region are just workers int numDefendersPerEnemyUnit = 2;"
  - work: ualbertabot-source
    page: "CombatCommander.cpp, updateDefenseSquads()"
    url: "https://raw.githubusercontent.com/davechurchill/ualbertabot/master/UAlbertaBot/Source/CombatCommander.cpp"
    quote: "// we can ignore the first enemy worker in our region since we assume it is a scout"
at: [0.15, -0.25, 0.03]
---
