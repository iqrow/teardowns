---
term: Tendon drive
aka: [cable drive, wire drive, tendon actuation, cable-actuated arm, pull-pull drive, Bowden cable]
kind: part
plain: A tendon drive sends tension members from motors or winches, often mounted at the base, through guides to anchors along a link chain or compliant backbone. Pulling a tendon changes its length and creates a bending moment; because a tendon pulls rather than pushes, bidirectional bending normally uses an antagonistic pair or another return force.
does: "It moves distal shape while keeping actuator mass away from the moving arm, at the cost of guide friction, elastic stretch, slack recovery and backlash."
ask: "Where is each tendon anchored, how is it guided, what pretension keeps it taut, and how will tension or slack be noticed?"
range: "One tendon actively bends a planar section in one direction; an antagonistic pair controls both planar directions; three tendons or two antagonistic pairs can provide spatial bending. A continuous backbone still uses a finite set of tendon and actuator channels; adding sections can require more motors."
trouble: "A slack cable gives dead travel and backlash; curved guides consume force, and elastic stretch makes commanded spool motion differ from backbone shape."
at: [0.053, 0.607, 0.13]
links:
  - {to: electric-motor, rel: see also}
  - {to: gearbox, rel: see also}
  - {to: motor-driver, rel: see also}
  - {to: robot-dynamics, rel: see also}
  - {to: stiffness, rel: see also}
variants:
  - label: Tendon routing
    items:
      - id: routing-spacer-disks
        name: Spacer-disk guides
        plain: A slender flexible backbone carries a finite stack of disks; holes in each disk guide tendons through straight subsegments and the termination locations define sections.
        sources:
          - work: morphology-tdcr-intro
            page: "Tendon-driven Continuum Robots: Structure of TDCR"
            quote: "The first design consists of a primary flexible, slender backbone. A finite number of spacer disks is equally distributed along the whole length of the TDCR. Guiding holes within the spacer disks are used to route the tendons along the robot backbone."
          - work: morphology-tdcr-intro
            page: "Tendon-driven Continuum Robots: introduction"
            quote: "each segment end is deﬁned by the termination of one or multiple tendons."
      - id: routing-continuous-lumen
        name: Continuous-lumen backbone
        plain: A larger backbone contains internal lumens that guide tendons continuously, removing separate spacer disks while making the continuous tendon path part of the backbone.
        sources:
          - work: morphology-tdcr-intro
            page: "Tendon-driven Continuum Robots: Structure of TDCR"
            quote: "The second design uses a backbone which usually has a larger diameter and features inner lumens to guide the tendons without the need of separate spacer disks."
      - id: routing-sheathed-cable
        name: Sheathed / Bowden routing
        plain: A flexible outer housing routes a cable from a remote winch to the moving mechanism; it can simplify packaging, but bends and liner friction consume force before the tendon reaches its anchor.
        sources:
          - work: morphology-ytec-animatronic-tentacle
            page: "Making the final tentacle: winch and guide tubes"
            quote: "I ultimately settled on bicycle gear outer cable. It is a hollow tube with a steel sleeve and a teflon liner. It is a bit stiff, but it can handle tremendous compression forces and is relatively cheap."
          - work: morphology-ytec-animatronic-tentacle
            page: "Improvements left: cable guide tubes"
            quote: "At each revolution the cable encounters more friction."
sources:
  - work: morphology-tdcr-intro
    page: "Tendon-driven Continuum Robots: introduction"
    quote: "In so called tendon-driven continuum robots (TDCR) several tendons are routed alongside the robot’s flexible backbone and fixed at different locations."
  - work: morphology-crl-tdcr
    page: "Tendon Driven Continuum Robots: general structure"
    quote: "Tendon actuation is an extrinsic actuation principle, as no actuators are located within the robot’s structure."
  - work: morphology-tdcr-intro
    page: "Tendon-driven Continuum Robots: motion capabilities"
    quote: "Since tendons cannot be pushed, using one tendon results in a bending degree of freedom which can only be controller actively in one direction. A pair of antagonistic tendons, i.e., located on opposite sides of the backbone, is required for control of both directions for in-plane bending."
  - work: morphology-tdcr-intro
    page: "Tendon-driven Continuum Robots: remarks"
    quote: "Another property of tendons is that they can only support tension and tend to get slack in the presence of compression. When additional forces are applied, a portion of these forces are used to recover from the state of slack. This recovery leads to what is known as actuator backlash"
  - work: morphology-tdcr-intro
    page: "Tendon-driven Continuum Robots: remarks"
    quote: "However, any increase of the number of segments requires an additional set of motors to actuate it, resulting in a bulky actuator system."
  - work: morphology-ytec-animatronic-tentacle
    page: "How it works"
    quote: "Each section has 4 cables. When 1 cable contracts, and the opposite cable expands, the section bends evenly. In the base are 6 winches that contract and expand each set of cables."
  - work: morphology-ytec-animatronic-tentacle
    page: "Improvements left: cable guide tubes"
    quote: "I have found that every degree you bend takes force away from the mechanism. This problem worsens with the square of the angle."
deeper: "Next level: measure tendon tension, choose anchor radii and guide spacing, set a safe pretension, calibrate spool-to-length conversion, then identify friction, stretch and slack under load."
---
