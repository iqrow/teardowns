---
term: Joint torque budget
aka: [load table, moment budget, torque sizing]
kind: measure
plain: A joint torque budget lists every force that one axis must resist or create at each important configuration. It includes downstream links, servos, gearboxes, brackets, cables, tool and payload, not only the payload at the tip.
does: It turns gesture, reach and mass measurements into a torque and power requirement that can be compared with an actuator's applicable torque-speed and thermal data.
ask: At the worst pose, what are each mass, centre of mass, perpendicular lever arm, acceleration, friction assumption, supply voltage, current and duty cycle?
range: |-
  Start with a free-body sketch for each joint and its unit axis a_j at each pose. For gravity, the signed scalar torque about that axis is τg,j(q) = a_j · Σ_i ((r_i − r_j) × m_i g), where r_i is each mass centre, r_j is the joint position, and g is the gravity-acceleration vector; include the end effector, payload, downstream actuators and links. In a planar arm with a horizontal joint axis, the signed gravity torque is Σ_i m_i g ℓ_i with signed horizontal lever arms ℓ_i, and its magnitude is |Σ_i m_i g ℓ_i|; opposite-sign terms reduce the net magnitude, while a vertical yaw axis gets zero gravity torque. At static hold, the commanded motor torque must oppose the applied gravity and external torque, with sign set by the chosen axis. A force at angle θ uses |τ| = rF sin θ = r⊥F only in the chosen axis/plane, so an arm's length alone is not enough. For an end-effector wrench F expressed in the frame used by J, use the Jacobian-transpose map τ_F = J(q)ᵀF; if F is a disturbance applied to the robot, the holding motor command has the opposite sign. Add acceleration/inertia, friction and transmission losses only when they are modelled or measured and record the assumptions.

  For each candidate actuator record the manufacturer's stall/maximum figure, rated or continuous figure or torque-speed curve, voltage, current, speed, mass, output spline/horn, thermal limits and bus or PWM interface. Do not treat stall torque as continuous capacity. Measure a restrained joint with a known perpendicular force or load cell and log angle, supply V, current I, input P = V I, temperature, duration and supply sag; stop on unexpected motion, pinch, smoke, odour or rapid heating.
trouble: The shoulder passes a payload-only calculation but stalls after the elbow servo is installed; torque changes sharply with pose; the quoted stall number has no duty-cycle meaning; current spikes collapse the supply; temperature rises while holding; or the physical joint flexes before the actuator reaches its quoted limit.
at: [-0.62, 0.3, -0.18]
links:
  - {to: workspace, rel: see also}
  - {to: robot-dynamics, rel: see also}
  - {to: actuation, rel: see also}
  - {to: electric-motor, rel: see also}
  - {to: motor-driver, rel: see also}
  - {to: safety, rel: see also}
  - {to: risk-assessment, rel: see also}
sources:
  - work: arm-build-openstax-torque
    page: §10.6, Torque
    quote: "The SI unit of torque is newtons times meters, usually written as N·m."
  - work: arm-build-openstax-torque
    page: §10.6, Torque
    quote: "The first point implies that the farther the force is applied from the axis of rotation, the greater the angular acceleration; the second implies that the effectiveness depends on the angle at which the force is applied."
  - work: arm-build-springer-robot-arm
    url: https://link.springer.com/chapter/10.1007/978-1-4302-6838-3_11
    page: Chapter 11, pp. 509–577, torque sizing discussion
    quote: "The formula that defines torque can be expressed as follows: T = F × L"
  - work: arm-build-springer-robot-arm
    url: https://link.springer.com/chapter/10.1007/978-1-4302-6838-3_11
    page: Chapter 11, pp. 509–577, several actuators
    quote: "each servo will have a different torque due to its location along the arm."
  - work: arm-build-modern-robotics-statics
    page: §5.2, Statics of Open Chains
    quote: "To resist a wrench minus F applied to the end-effector at a configuration theta, the joint torques and forces tau must be J of theta transposed times F."
  - work: arm-build-modern-robotics-statics
    page: §5.2, Statics of Open Chains
    quote: "This result holds no matter what frame the Jacobian and wrench are expressed in."
  - work: arm-build-robotis-xl430
    page: Torque specification note
    quote: "The given Stall torque rating for a servo is different from it’s continuous output rating, and may also differ from it’s expected real world performance."
  - work: arm-build-pololu-servo-control
    page: Power and current observations
    quote: "multiple servos can quickly become a very demanding load for a power supply."
unverified: The measurement recipe and the choice of any design margin, test duration or current limit are procedural advice; no universal safe-force, safety-factor or continuous-torque value is asserted here.
deeper: The next level would hold free-body diagrams, centre-of-mass measurements, configuration sweeps, torque-speed curves, RMS/thermal duty cycles, bearing loads, structural deflection and recorded V/I/temperature traces.
---
