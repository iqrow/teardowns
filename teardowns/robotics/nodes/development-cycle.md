---
term: Development cycle
aka: [iteration loop]
kind: loop
plain: The development cycle changes software, tests it in simulation, runs a hardware shakeout, deploys, logs failures and feeds the evidence into the next change.
does: It converts field failures into controlled iterations rather than one-off fixes.
ask: How long is one iteration, and what evidence gates the next field deployment?
at: [-0.4773, 0.2641, 0.02]
loop:
  type: cycle
  through: [simulation, field-testing, logging-and-replay]
sources:
  - work: marco-tranzatto-mihir-dharmadhikari-lukas
    page: Sec. 4.1.1, weekly shakeouts, integration tests, version pinning and deployments
    quote: "Simulation can help in stress testing the methods, debugging minor errors, and tuning parameters of the algorithms."
    flag: arXiv preprint
  - work: nvidia-what-is-isaac-sim
    page: Simulation development loop and software-in-the-loop testing
    quote: "Simulation Development Loop Bring assets in, configure the robot and scene, simulate behavior, then connect external stacks."
---
