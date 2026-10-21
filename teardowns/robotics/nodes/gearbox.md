---
term: Gearbox
aka: [reducer, transmission]
kind: part
plain: A gearbox trades motor speed for output torque. An ideal reduction N multiplies torque by N and divides speed by N; real efficiency, backlash and compliance reduce the result.
does: It lets a small fast motor drive a slower, higher-torque joint.
ask: What ratio, efficiency, backlash, stiffness and backdrivability fit the joint?
cues:
  - Fast motor driving a slower joint
  - Output torque increased by reduction
  - Backlash or elastic wind-up
trouble: Backlash, elastic wind-up, friction, wear and shock loads appear as position error, heat or noise.
children: [gear-ratio]
at: [0.18, 0, 0]
variants:
  - label: Reducer
    items:
      - id: gear-strain-wave
        name: Strain wave (harmonic drive)
        plain: A strain-wave or harmonic reducer uses a wave generator, flexspline and circular spline; Harmonic Drive lists zero backlash and high torque-to-weight ratio.
        why: A reducer with a wave generator, flexspline and circular spline defines it; Harmonic Drive CSG/CSF is one example.
        sources:
          - work: harmonic-drive-llc-csg-csf-component-sets
            page: pp. 3 and 6–7
            quote: "The high-performance attributes of this gearing technology including, zero-backlash, high-torque-to-weight ratio, compact size, and excellent positional accuracy."
      - id: gear-planetary
        name: Planetary
        plain: Modern Robotics shows a planetary gearhead in a brushed-DC motor assembly.
        sources:
          - work: kevin-m-lynch-and-frank-c-park-modern-robotics
            url: https://hades.mech.northwestern.edu/images/7/7f/MR.pdf
            page: Ch. 8 Fig. 8.9
            quote: "Planetary gearhead Motor output pinion (input to gearhead)"
            flag: author preprint
      - id: gear-cycloidal
        name: Cycloidal
        plain: A cycloidal or RV reducer uses eccentric lobed gears and pins; Nabtesco lists a range of speed ratios for its robot-joint reducer family.
        why: A reducer with eccentric lobed gears and pins defines it; Nabtesco RV is one example.
        sources:
          - work: nabtesco-precision-reduction-gear-rv-product
            page: pp. 15–16 and 21
            quote: "Precision reduction gear RV TM is a reduction gear for precise motion control"
sources:
  - work: kevin-m-lynch-and-frank-c-park-modern-robotics
    url: https://hades.mech.northwestern.edu/images/7/7f/MR.pdf
    page: Ch. 8 §8.9
    quote: "An ideal gearhead (one that is 100% efficient) with a gear ratio G multiplies the torque at the output of a motor by a factor G and divides the speed by the factor G, leaving the mechanical power unchanged."
    flag: author preprint
  - work: harmonic-drive-llc-csg-csf-component-sets
    page: pp. 3, 6–9
    quote: "The high-performance attributes of this gearing technology including, zero-backlash, high-torque-to-weight ratio, compact size, and excellent positional accuracy."
---
