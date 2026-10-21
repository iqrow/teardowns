---
term: Sim-to-real transfer
aka: [reality gap]
kind: process
plain: Sim-to-real transfer makes simulated behavior work on hardware despite differences in friction, masses, delays, contacts and sensor noise.
does: It determines whether a simulator-trained controller or policy survives physical mismatch.
ask: Which parameters should be identified, randomized or measured, and over what ranges?
cues:
  - Simulated behaviour running on hardware
  - Friction, mass, delay, contact or noise mismatch
  - Controller or policy surviving physical mismatch
range: Domain-randomization studies vary visual and dynamics parameters before transfer to a real robot.
at: [0.3023, -0.1591, 0.02]
links:
  - {to: learned-policy, rel: see also}
sources:
  - work: josh-tobin-rachel-fong-alex-ray-jonas-schneider
    page: Abstract
    quote: "This paper explores domain randomization, a simple technique for training models on simulated images that transfer to real images by randomizing rendering in the simulator."
    flag: arXiv preprint
  - work: xue-bin-peng-marcin-andrychowicz-wojciech
    page: Secs. IV.C and V, randomized dynamics and real-robot transfer
    quote: "Simulations are attractive environments for training agents as they provide an abundant source of data and alleviate certain safety concerns."
    flag: arXiv preprint
deeper: The next level would hold system identification, domain randomization, latency and noise models, calibration and staged hardware tests.
---
