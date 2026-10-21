---
term: Map representation
aka: [map type]
kind: concept
plain: A map representation is the data structure used to store the world for localization, mapping, and planning.
does: Sets which spatial questions the planner can ask and how much memory and computation the map needs.
ask: Does the planner need occupancy, landmarks, raw geometry, or a surface?
cues:
  - Occupation probabilities assigned to cells
  - Distinctive landmarks across observations
  - Registered 3D samples from scans
  - Smooth surfaces from a depth volume
at: [-0.3182, 0, 0.02]
variants:
  - label: Map
    items:
      - id: map-grid
        name: Occupancy grid
        plain: An occupancy grid discretizes the environment into cells and assigns a probability of occupation to each cell.
        sources:
          - work: cesar-cadena-et-al-past-present-and-future-of
            page: Map representations
            quote: "The latter discretizes the environment in cells and assigns a probability of occupation to each cell."
            flag: open PDF
      - id: map-landmarks
        name: Landmark / feature map
        plain: A landmark map stores positions of distinctive features and their associations across observations.
        sources:
          - work: cesar-cadena-et-al-past-present-and-future-of
            page: Map representations
            quote: "The former models the environment as a sparse set of landmarks, the latter discretizes the environment in cells and assigns a probability of occupation to each cell."
            flag: open PDF
          - work: timothy-d-barfoot-state-estimation-for-robotics
            url: https://asrl.utias.utoronto.ca/~tdb/bib/barfoot_ser24.pdf
            page: Ch. 3, SLAM example
            quote: "It is an example of simultaneous localization and mapping (SLAM) since we are going to estimate the robot and landmark positions."
            flag: author PDF
      - id: map-pointcloud
        name: Point cloud
        plain: A point-cloud map stores registered 3D samples from one or more scans.
        sources:
          - work: point-cloud-library-the-pcl-registration-api
            page: Registration API
            quote: "For every set of point cloud datasets acquired from different views, we therefore need a system that is able to align them together into a single point cloud model, so that subsequent processing steps such as segmentation and object reconstruction can be applied."
      - id: map-tsdf
        name: Voxel / TSDF / mesh
        plain: A TSDF integrates depth into a voxel volume and can generate smooth surfaces.
        sources:
          - work: open3d-tsdf-integration-tutorial
            page: TSDF integration and surface extraction
            quote: "Truncated Signed Distance Function (TSDF) integration is the key of dense volumetric scene reconstruction."
sources:
  - work: cesar-cadena-et-al-past-present-and-future-of
    page: Map representations
    quote: "The former models the environment as a sparse set of landmarks, the latter discretizes the environment in cells and assigns a probability of occupation to each cell."
    flag: open PDF
  - work: open3d-tsdf-integration-tutorial
    page: TSDF integration and surface extraction
    quote: "TSDF integration reduces noise and generates smooth surfaces."
  - work: timothy-d-barfoot-state-estimation-for-robotics
    url: https://asrl.utias.utoronto.ca/~tdb/bib/barfoot_ser24.pdf
    page: Chs. 8–9
    quote: "It is an example of simultaneous localization and mapping (SLAM) since we are going to estimate the robot and landmark positions."
    flag: author PDF
deeper: The next level would hold occupancy updates, landmark associations, point registration, and volumetric surface integration.
---
