---
term: Planning
aka: [deciding what to do]
kind: process
plain: Planning chooses tasks and collision-free motions that can carry them out.
does: Turns a goal into actions and trajectories that a controller can execute.
ask: Is the plan feasible, safe, and fast enough to compute when the world changes?
cues:
  - Tasks and collision-free motions
  - Actions and trajectories from a goal
  - Plan changing when the world changes
children: [task-planning, motion-planning, trajectory-generation, learned-policy]
at: [-0.25, 0.42, -0.1]
sources:
  - work: kevin-m-lynch-and-frank-c-park-modern-robotics
    url: https://hades.mech.northwestern.edu/images/7/7f/MR.pdf
    page: Chs. 9–10
    quote: "The path planning problem is a subproblem of the general motion planning problem that is concerned with finding a collision-free path between a start and goal configuration."
    flag: author preprint
---
