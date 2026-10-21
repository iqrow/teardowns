---
term: Battery
aka: [power pack]
kind: part
plain: A robot battery stores electrical energy and includes protection and monitoring. Lithium packs are common in mobile robots.
does: It sets available runtime, current and peak power.
ask: How much usable energy remains at the real duty cycle, temperature and aging state?
cues:
  - Battery pack with protection and monitoring
  - Usable energy or charge reading
  - Voltage sag or reduced motor torque
  - Brownout or shutdown
range: Clearpath Jackal uses a 270 Wh lithium battery and states operating times for basic and heavy use. Runtime is approximately usable Wh divided by average W, after conversion and reserve losses.
trouble: Voltage sag, low state of charge, thermal derating or a tripped protection circuit causes brownouts, reduced motor torque or shutdown.
at: [-0.7, 0.3, 0.26]
sources:
  - work: clearpath-robotics-jackal-user-manual
    page: Shipment Contents and System Specifications
    quote: "Battery Chemistry Lithium, 270 Wh Operating Time 8 hours (basic usage), 2 hours (heavy usage)"
  - work: dji-matrice-350-rtk-specifications
    page: TB65 battery and flight-time specifications
    quote: "Charging Type: Use the battery station or USB-C fast charger with a max power of 65 W"
deeper: "Next level: cell chemistry, pack voltage, BMS, state-of-charge estimation, current limits, thermal management and energy budgeting."
---
