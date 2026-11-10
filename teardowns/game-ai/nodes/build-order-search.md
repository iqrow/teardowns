---
term: "Build-order search and continuous optimisation"
aka: [BOSS, build-order optimization, continuous build-order planning]
kind: process
plain: "A planner searches concurrent production actions against a goal or objective instead of replaying a fixed queue."
does: "Turns prerequisites, resources and producer capacity into a short-makespan plan; continuous objective versions keep re-optimising composition toward a strategic score as the state changes."
ask: "What goal or objective should the search optimise now, and which concurrent actions make it attainable soon without overcommitting?"
cues: ["A search trace branches from the current production state", "A timeline shows several producer lanes running concurrently", "The objective or army-value curve is refreshed while the game state changes"]
trouble: "A fixed unit goal or single end-time plan can delay immediate force, overfit hand-written composition rules or lose value when the opponent changes."
sources:
  - work: churchill-build-order-optimization
    page: "Abstract, p. 1"
    quote: "we need to find concurrent action sequences that, constrained by unit dependencies and resource availability, create a certain number of units and structures in the shortest possible time span."
  - work: churchill-build-order-optimization
    page: "Introduction, p. 1"
    quote: "This process is called build order optimization."
  - work: churchill-build-order-optimization
    page: "Algorithm, p. 3"
    quote: "We use a depth-first branch and bound algorithm to perform build order search."
  - work: churchill-build-order-optimization
    page: "Fast Forwarding and State Transition, p. 3"
    quote: "we have implemented a fast-forwarding simulation technique which eliminates the need for null actions."
  - work: churchill-robust-continuous-build-order
    page: "Abstract, p. 1"
    quote: "Existing AI systems for such games often contain build-order planning systems that attempt to minimize makespans for constructing specific sets of units, which are typically decided by hand-coded human expert knowledge rules."
  - work: churchill-robust-continuous-build-order
    page: "Abstract, p. 1"
    quote: "Drawbacks of this approach include the human expert effort involved in constructing these rules, as well as a lack of online adaptability to unforeseen circumstances, which can lead to brittle behavior that can be exploited by more advanced opponents."
  - work: churchill-robust-continuous-build-order
    page: "Abstract, p. 1"
    quote: "automatically produces build-orders which optimize unit compositions toward strategic game concepts (such as total unit firepower), without the need for specific unit goals."
at: [0.30, 0.13, 0.03]
---
