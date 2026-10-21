---
term: Perception
aka: [computer vision, seeing]
kind: process
plain: A software pipeline that turns sensor measurements such as images and depth into scene structure, objects, and poses.
does: Supplies state estimation and planning with observations rather than certainty.
ask: What scenes, lighting, latency, and failure cases were tested?
cues:
  - Images or depth becoming scene structure
  - Objects and poses in the output
  - Observations passed to estimation and planning
children: [object-detection, pose-estimation, point-cloud-processing]
at: [0.075, 1.1, -0.1]
sources:
  - work: bruno-siciliano-and-oussama-khatib-eds-springer
    url: https://link.springer.com/chapter/10.1007/978-3-319-32552-1_5
    page: Ch. 5, Robot Perception
    quote: "Perception, which is defined here to be task-oriented interpretation of sensor data, allows the integration of sensor information across space and time to facilitate planning."
---
