---
term: Actuators
aka: [motors, drives, muscles]
kind: part
plain: Actuation is the chain that converts electrical or fluid power into controlled joint motion. A common electric unit combines a motor, transmission and driver.
does: It supplies joint torque and speed while setting heat, mass, compliance and backdrivability.
ask: Is there enough continuous and peak torque at the required speed without overheating?
cues:
  - Controlled joint motion
  - Joint torque and speed
  - Heat, compliance or backdrivability changes
children: [electric-motor, gearbox, motor-driver]
at: [0.17, 0.58, 0.05]
variants:
  - label: Actuator design
    items:
      - id: act-geared
        name: High-ratio geared servo
        plain: A high-ratio geared servo uses a fast motor and reducer to obtain larger joint torque at lower output speed; UR5 is described with 100:1 harmonic gearing.
        why: A fast motor and reducer producing larger joint torque at lower output speed defines it; UR5 is one example.
        sources:
          - work: kevin-m-lynch-and-frank-c-park-modern-robotics
            url: https://hades.mech.northwestern.edu/images/7/7f/MR.pdf
            page: Ch. 4 Example 4.5; Ch. 8 §8.9
            quote: "Each joint is directly driven by a brushless motor combined with 100:1 zero-backlash harmonic drive gearing, which greatly increases the torque available at the joint while reducing its maximum speed."
            flag: author preprint
          - work: harmonic-drive-llc-csg-csf-component-sets
            page: p. 6, ratios and zero backlash
            quote: "The high-performance attributes of this gearing technology including, zero-backlash, high-torque-to-weight ratio, compact size, and excellent positional accuracy."
      - id: act-qdd
        name: Quasi-direct drive
        plain: Quasi-direct drive couples a high-torque-density motor to a transmission below 10:1; Blue uses a 7.125:1 belt reduction and emphasizes backdrivability.
        why: A high-torque-density motor coupled to a transmission below 10:1 defines it; Blue is one example.
        sources:
          - work: david-v-gealy-et-al-quasi-direct-drive-for-low
            page: pp. 3–4
            quote: "Quasi-Direct Drive (QDD) actuators (transmission ratios < 1:10) have been used for legged locomotion and have the desirable properties of low friction, high backdrivability."
            flag: arXiv preprint
      - id: act-sea
        name: Series elastic
        plain: A series elastic actuator places a compliant element between the transmission and load; measured deflection gives force through F = kx.
        sources:
          - work: kevin-m-lynch-and-frank-c-park-modern-robotics
            url: https://hades.mech.northwestern.edu/images/7/7f/MR.pdf
            page: Ch. 8 §8.9
            quote: "A series elastic actuator (SEA) consists of an electric motor with a gearhead (often a harmonic drive gearhead) and a torsional spring attaching the output of the gearhead to the output of the actuator."
            flag: author preprint
      - id: act-hydraulic
        name: Hydraulic
        plain: Hydraulic actuation is a high-power architecture used in Boston Dynamics' research Hydraulic Atlas; the current Atlas product page is all-electric.
        sources:
          - work: boston-dynamics-history-and-legacy
            page: Hydraulic Atlas
            quote: "The hydraulic Atlas pushed the limits of dynamic motion and manipulation."
sources:
  - work: kevin-m-lynch-and-frank-c-park-modern-robotics
    url: https://hades.mech.northwestern.edu/images/7/7f/MR.pdf
    page: Ch. 8 §8.9
    quote: "Most robots are driven by actuators that apply a force or torque to each joint."
    flag: author preprint
---
