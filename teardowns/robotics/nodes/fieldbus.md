---
term: Fieldbus
aka: [robot network, bus]
kind: part
plain: A fieldbus is the wired control network between computers, motor drives and sensors.
does: It carries commands and measurements with a chosen bandwidth, latency and timing guarantee.
ask: Is the bus cycle short, synchronized and deterministic enough for the control loop?
cues:
  - Wired links between computers, drives and sensors
  - Commands and measurements on the bus
at: [0.05, 0.1, 0.9]
variants:
  - label: Bus
    items:
      - id: bus-can
        name: CAN / CANopen
        plain: Classic CANopen is robust and low cost; CiA publishes bit-timing and network-length guidance.
        sources:
          - work: can-in-automation-canopen-lower-layers
            page: CANopen CC bit timing table
            quote: "The table below illustrates the CANopen CC bit timing, the resulting maximum network length, and the maximum unterminated cable drop lengths."
      - id: bus-ethercat
        name: EtherCAT
        plain: EtherCAT processes frames on the fly for real-time control; ETG states a design focus of short cycle times and low synchronization jitter.
        sources:
          - work: ethercat-technology-group-ethercat-the-ethernet
            page: Introduction; Functional Principle; Distributed Clocks
            quote: "The main focus during the development of EtherCAT was on short cycle times"
      - id: bus-ethernet
        name: Ethernet / USB
        plain: Ethernet or USB is useful for high-bandwidth cameras, lidar and computers; its timing depends on transport and topology.
        sources:
          - work: clearpath-robotics-jackal-user-manual
            page: "System Specifications: Ethernet and USB 3.0"
            quote: "Connect to the network port labeled STATIC with a standard ethernet cable."
sources:
  - work: ethercat-technology-group-ethercat-the-ethernet
    page: Introduction and Features 1.1–1.2
    quote: "EtherCAT is a real-time Industrial Ethernet technology originally developed by Beckhoff Automation."
deeper: "Next level: frames, process data, synchronization, topology, error handling, device profiles and safety traffic."
---
