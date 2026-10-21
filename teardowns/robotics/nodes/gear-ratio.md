---
term: Gear ratio
aka: [reduction]
kind: knob
plain: Gear ratio is motor turns per output turn. Increasing it raises ideal output torque and lowers ideal output speed, while increasing reflected inertia and usually reducing backdrivability.
does: It places the task operating point on the motor's torque-speed curve.
ask: Which ratio keeps output torque, speed, heat and backdrivability inside their limits?
range: Quasi-direct drives use ratios below about 10:1; Harmonic Drive CSG component sets offer reduction ratios from 50:1 to 160:1.
at: [0.3, 0.3, 0.02]
links:
  - {to: electric-motor, rel: see also}
variants:
  - label: Ratio
    items:
      - id: ratio-1
        name: 1:1 (direct drive)
        plain: Direct drive is the most backdrivable option in the QDD comparison.
        sources:
          - work: david-v-gealy-et-al-quasi-direct-drive-for-low
            page: p. 3, direct-drive comparison
            quote: "Direct-drive is the most backdrivable, but high motor masses in the arm make high-DoF systems impractical."
            flag: arXiv preprint
      - id: ratio-10
        name: 10:1
        plain: A 10:1 ratio is at the boundary of the QDD example range; it trades some backdrivability for torque multiplication.
        sources:
          - work: david-v-gealy-et-al-quasi-direct-drive-for-low
            page: p. 3, QDD transmission ratios <1:10
            quote: "QDD actuators (transmission ratios < 1:10)"
            flag: arXiv preprint
      - id: ratio-50
        name: 50:1
        plain: A 50:1 reducer is a high-reduction joint choice; Harmonic Drive lists 50:1 CSG options.
        why: A reducer where the motor makes fifty turns per output turn defines it; Harmonic Drive CSG is one example.
        sources:
          - work: harmonic-drive-llc-csg-2a-component-set
            page: Product overview
            quote: "Ideal for high torque applications, CSG 2A is available in 10 sizes with gear reduction ratios from 50:1 to 160:1."
      - id: ratio-100
        name: 100:1
        plain: A 100:1 reducer is a high-ratio arm-joint example; Modern Robotics describes the UR5 with 100:1 harmonic gearing.
        why: A reducer where the motor makes one hundred turns per output turn defines it; UR5 is one example.
        sources:
          - work: kevin-m-lynch-and-frank-c-park-modern-robotics
            url: https://hades.mech.northwestern.edu/images/7/7f/MR.pdf
            page: Ch. 4 Example 4.5
            quote: "Each joint is directly driven by a brushless motor combined with 100:1 zero-backlash harmonic drive gearing."
            flag: author preprint
sources:
  - work: kevin-m-lynch-and-frank-c-park-modern-robotics
    url: https://hades.mech.northwestern.edu/images/7/7f/MR.pdf
    page: Ch. 8 §§8.9.1–8.9.2
    quote: "For a gear ratio G, the output speed of the gearhead is w gear = w motor G."
    flag: author preprint
  - work: harmonic-drive-llc-csg-2a-component-set
    page: Product overview
    quote: "Ideal for high torque applications, CSG 2A is available in 10 sizes with gear reduction ratios from 50:1 to 160:1."
deeper: "Next level: efficiency, reflected inertia, backlash, thermal duty cycle and selecting a ratio from a motor-load curve."
---
