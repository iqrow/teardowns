---
term: Exteroceptive sensors
aka: [external sensors, eyes]
kind: part
plain: "Exteroceptive sensors measure the external scene: images, depth, laser ranges and point clouds."
does: They feed perception, mapping, localization, obstacle avoidance and object placement.
ask: What range, field of view, resolution, rate and lighting or material limits does the task have?
cues:
  - Images and depth of the external scene
  - Laser ranges and point clouds
  - Geometry for mapping and obstacle avoidance
children: [camera, lidar]
at: [0.35, 0.55, 0.13]
sources:
  - work: realsense-d450-series
    page: D455 depth and RGB specifications
    quote: "Color and depth therefore describe the same scene more consistently during motion, supporting object recognition, mapping, scanning, teleoperation and AI perception pipelines."
  - work: ouster-os0-rev8-0-datasheet
    page: p. 1, optical performance
    quote: "Vertical Resolution 32, 64, or 128 channels Horizontal Resolution 512, 1024, 2048, or 4096"
  - work: sick-tim571-2050101-data-sheet
    page: p. 2, detailed technical data
    quote: "Measurement principle HDDM Light source Infrared (850 nm) Laser class 1 (IEC 60825-1:2014, EN 60825-1:2014+A11:2021) Aperture angle Horizontal 270° Scanning frequency 15 Hz Angular resolution Horizontal 0.33° Working range 0.05 m ... 25 m"
---
