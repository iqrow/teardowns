---
term: Model predictive control
aka: [MPC, receding horizon control]
kind: process
plain: At each update, model predictive control optimizes a future command sequence, applies the first command, then repeats with a fresh state estimate.
does: It plans ahead while enforcing model, input and contact constraints.
ask: Can the optimization finish before the next control update?
range: The MIT Cheetah 3 implementation is a convex model-predictive-control study; timing and horizon are implementation details.
at: [-0.1094, 0, 0.02]
links:
  - {to: robot-dynamics, rel: made from}
pattern: pattern-predict-correct
sources:
  - work: jared-di-carlo-patrick-m-wensing-benjamin-katz
    page: Abstract
    quote: "This paper presents an implementation of model predictive control (MPC) to determine ground reaction forces for a torque-controlled quadruped robot."
    flag: repository abstract; accepted-version record
  - work: russ-tedrake-underactuated-robotics
    url: https://underactuated.mit.edu/trajopt.html#section5
    page: Ch. 10, Receding-horizon MPC
    quote: "(1) measure the current state, (2) optimize a trajectory from the current state, (3) execute the first action from the optimized trajectory, (4) let the dynamics evolve for one step and repeat. This recipe is known as model-predictive control (MPC)."
    flag: open online notes
deeper: The next level would hold the prediction model, cost weights, horizon, state and input constraints, solver and warm-start strategy.
---
