---
term: Lidar
aka: [laser scanner]
kind: part
plain: Lidar measures distance with laser returns and assembles those samples into a scan or point cloud.
does: It supplies geometry for mapping, localization and obstacle detection, often with less dependence on visible colour than a camera.
ask: What range, angular resolution, field of view, point rate, reflectivity and weather limits are acceptable?
cues:
  - Laser-return scan
  - 2D plane or 3D spinning samples
  - Point cloud from distance measurements
at: [0.6, 0.22, 0.18]
variants:
  - label: Lidar
    items:
      - id: lidar-2d
        name: 2D scanning
        plain: A 2D scanner samples one plane. SICK TiM571 provides a 270° scanning angle.
        why: Sampling one plane defines it; SICK TiM571 is one example.
        sources:
          - work: sick-tim571-2050101-data-sheet
            page: p. 2
            quote: "Aperture angle Horizontal 270° Scanning frequency 15 Hz Angular resolution Horizontal 0.33° Working range 0.05 m ... 25 m"
      - id: lidar-3d
        name: 3D spinning
        plain: A 3D spinning lidar samples many vertical channels while rotating; Ouster OS0 offers configurable channel and horizontal resolutions.
        why: Sampling many vertical channels while rotating defines it; Ouster OS0 is one example.
        sources:
          - work: ouster-os0-rev8-0-datasheet
            page: p. 1
            quote: "Vertical Resolution 32, 64, or 128 channels Horizontal Resolution 512, 1024, 2048, or 4096"
      - id: lidar-solid
        name: Solid-state
        plain: A solid-state lidar uses electronic scanning with no internal moving parts.
        sources:
          - work: robosense-e2-fully-solid-state-digital-lidar
            page: E2 specifications and fully solid-state scanning
            quote: "Fully Solid-State Scanning The minimalistic electronic scanning architecture with no internal moving parts"
sources:
  - work: ouster-os0-rev8-0-datasheet
    page: pp. 1 and 3
    quote: "The Rev8 OS0 lidar sensor features 35 m range"
  - work: sick-tim571-2050101-data-sheet
    page: pp. 2–3
    quote: "Measurement principle HDDM Light source Infrared (850 nm) Laser class 1 (IEC 60825-1:2014, EN 60825-1:2014+A11:2021) Aperture angle Horizontal 270° Scanning frequency 15 Hz Angular resolution Horizontal 0.33° Working range 0.05 m ... 25 m"
deeper: "Next level: ranging, beam pattern, scan timing, returns, reflectivity, point-cloud frames, synchronization and filtering."
---
