---
term: "Build order"
aka: [opening, production order, opening book]
kind: part
plain: "A timed sequence of workers, structures, research and units that establishes an opening plan."
does: "Reaches a chosen economic or military state quickly, while leaving enough flexibility to respond when scouting contradicts the opening."
ask: "What should be started next so prerequisites, income and timing reach the intended state before the opponent can answer?"
cues: ["A visible queue follows a repeatable opening sequence", "Prerequisite structures appear before advanced units", "A first force or expansion arrives at a deliberate time"]
trouble: "A fixed opening reaches the wrong technology or army when the opponent takes a different line."
deeper: "Goal states, prerequisite graphs, concurrent actions, makespan, replanning windows and safe deviations; a supply deadlock check queues a supply provider first when the next item lacks supply and none is in progress."
sources:
  - work: churchill-build-order-optimization
    page: "Introduction, p. 1"
    quote: "The order in which units and structures are produced is called a build order."
  - work: churchill-build-order-optimization
    page: "Abstract, p. 1"
    quote: "We consider the build order problem in RTS games in which we need to find concurrent action sequences that, constrained by unit dependencies and resource availability, create a certain number of units and structures in the shortest possible time span."
  - work: ontanon-rts-survey
    page: "Section III-A, p. 5"
    quote: "The build-order is the specific sequence in which buildings of different types will be constructed at the beginning of a game, and completely determines the long-term strategy of a player."
  - work: ualbertabot-source
    page: "ProductionManager.cpp, update() and detectBuildOrderDeadlock()"
    url: "https://raw.githubusercontent.com/davechurchill/ualbertabot/master/UAlbertaBot/Source/ProductionManager.cpp"
    quote: "if (Config::Debug::DrawBuildOrderSearchInfo) { BWAPI::Broodwar->printf(\"Supply deadlock detected, building supply!\"); } m_queue.queueAsHighestPriority(MetaType(BWAPI::Broodwar->self()->getRace().getSupplyProvider()), true);"
  - work: ualbertabot-source
    page: "ProductionManager.cpp, detectBuildOrderDeadlock()"
    url: "https://raw.githubusercontent.com/davechurchill/ualbertabot/master/UAlbertaBot/Source/ProductionManager.cpp"
    quote: "if ((supplyAvailable < supplyCost) && !supplyInProgress)"
at: [-0.15, 0.52, 0.03]
---
