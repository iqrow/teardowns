---
term: Field testing
aka: [hardware testing, deployment]
kind: process
plain: Field testing runs the robot on real tasks in the real setting while logging outcomes, interventions and failures.
does: It exposes gaps in models, calibration, communications, terrain and operator workflows that simulation misses.
ask: What task success, autonomy time and distance, and intervention rate were achieved?
cues:
  - Robot running a real task
  - Robot in the real setting
  - Logged outcomes, interventions and failures
range: A field study can use logged autonomous distance and time to define intervention metrics.
at: [0.4773, 0.2641, 0.02]
sources:
  - work: matias-mattamala-nived-chebrolu-jonas-frey
    page: Secs. IV–V, deployment method and autonomy results
    quote: "These scans are used for online forest inventory to determine attributes such as the DBH of the surrounding forests, and reported in real-time to the operator, providing live feedback on the mission."
    flag: arXiv preprint
  - work: marco-tranzatto-mihir-dharmadhikari-lukas
    page: Sec. 4.1, field-deployment preparation and testing
    quote: "Simulation can help in stress testing the methods, debugging minor errors, and tuning parameters of the algorithms which is not feasible during a field test."
    flag: arXiv preprint
deeper: The next level would hold test scenarios, safety envelopes, intervention definitions, success criteria, logs, rollback rules and postmortems.
---
