---
term: Motion planning
aka: [path planning]
kind: process
plain: Motion planning searches for a robot path from start to goal while avoiding collisions and respecting constraints.
does: Gives an arm or mobile base a geometric route for trajectory generation.
ask: Does it find a valid path within the time budget, and how good is that path?
cues:
  - Path from start to goal
  - Collision-free route
  - Constraints shown on the planned path
children: [configuration-space, collision-checking]
at: [-0.0636, 0.0954, 0.02]
variants:
  - label: Planner
    items:
      - id: plan-sampling
        name: Sampling-based (RRT, PRM)
        plain: Samples configurations and connects feasible ones into a tree or roadmap; OMPL documents PRM and RRT as sampling-based examples.
        sources:
          - work: ompl-planner-and-state-validation-documentation
            page: Available planners
            quote: "Probabilistic Roadmap Method (PRM) This is the sampling-based algorithm. Our implementation uses one thread to construct a roadmap while a second thread checks whether a path exists in the roadmap between a start and goal state."
          - work: ompl-planner-and-state-validation-documentation
            page: Available planners
            quote: "Many different parallelization schemes have been proposed for sampling-based planners, including RRT."
      - id: plan-search
        name: Grid search (A*, D*)
        plain: Searches a discretized graph with methods such as A* or D*; its guarantees apply to the chosen grid or graph.
        sources:
          - work: steven-m-lavalle-planning-algorithms
            url: https://msl.cs.illinois.edu/~lavalle/planning/node35.html
            page: Ch. 2, Discrete Planning
            quote: "The planning problems considered here are the simplest to describe because the state space will be finite in most cases."
      - id: plan-optimization
        name: Trajectory optimisation (CHOMP, TrajOpt)
        plain: Optimizes a path or trajectory by reducing a cost such as length, smoothness, or collision proximity.
        sources:
          - work: moveit-trajectory-processing
            page: Trajectory processing
            quote: "MoveIt includes several trajectory processing algorithms that can work on these paths and generate trajectories that are properly time-parameterized."
sources:
  - work: kevin-m-lynch-and-frank-c-park-modern-robotics
    url: https://hades.mech.northwestern.edu/images/7/7f/MR.pdf
    page: Chs. 9–10
    quote: "The path planning problem is a subproblem of the general motion planning problem that is concerned with finding a collision-free path between a start and goal configuration."
    flag: author preprint
  - work: moveit-developer-concepts
    page: Motion planning pipeline
    quote: "The complete motion planning pipeline chains together a motion planner with other components called planning request adapters."
---
