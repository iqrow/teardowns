---
term: Emergency stop
aka: [e-stop, red button]
kind: part
plain: An emergency-stop device requests a safety stop through the safety-related control system; it is a complementary protective measure, not routine shutdown.
does: Stops hazardous motion as quickly as practicable without creating another hazard.
ask: Which stop category does the risk assessment require, and is reset prevented from restarting motion?
cues:
  - Red stop button
  - Hazardous motion stopping
  - Actuator power removed or controlled
at: [0, 0.4, 0.05]
links:
  - {to: performance-level, rel: see also}
variants:
  - label: Stop category
    items:
      - id: stop-0
        name: Category 0
        plain: Stop category 0 removes power from the machine actuators immediately; the stop is uncontrolled.
        sources:
          - work: idec-group-safety-standard-iec-60204-1-2016
            page: Stop categories, 9.2.3.3
            quote: "Stopping by immediate removal of power to the machine actuators"
      - id: stop-1
        name: Category 1
        plain: Stop category 1 uses controlled stopping with actuator power available, then removes power when stopped.
        sources:
          - work: idec-group-safety-standard-iec-60204-1-2016
            page: Stop categories, 9.2.3.3
            quote: "1 Controlled stop A controlled stop with power available to the machine actuators to achieve the stop, and then removal of power when the stop is achieved"
      - id: stop-2
        name: Category 2
        plain: Stop category 2 is a controlled stop that leaves actuator power available after the stop.
        sources:
          - work: idec-group-safety-standard-iec-60204-1-2016
            page: Stop categories, 9.2.3.3
            quote: "2 At-rest state Controlled stop with power remaining available to the machine actuators even after the stop is completed"
sources:
  - work: universal-robots-emergency-stop
    page: Emergency Stop
    quote: "Do not use the emergency stop for routine stopping or as a substitute for normal shutdown or power-off procedures."
  - work: idec-group-safety-standard-iec-60204-1-2016
    page: Stop categories and emergency stop, 9.2.3.3–9.2.3.4.2
    quote: "An emergency stop function shall stop the hazardous motion as quickly as practicable without creating other hazards."
deeper: The next level would hold button layout, stop-category selection, safe outputs, latching and reset, diagnostics, and validation tests.
---
