---
term: Point cloud processing
aka: [3D processing]
kind: process
plain: Point-cloud processing filters, downsamples, segments, and registers 3D points into a common frame.
does: Produces surfaces, obstacles, and object geometry for mapping and planning.
ask: What voxel size, outlier rule, and registration error fit this sensor and scene?
cues:
  - Filtered and downsampled 3D points
  - Segments registered into a common frame
  - Surfaces, obstacles and object geometry
range: Choose voxel and neighbourhood scales from sensor noise and the smallest geometry that matters; Open3D exposes voxel, outlier, and registration operations rather than one universal size.
at: [0.2, -0.6, 0.5]
links:
  - {to: camera, rel: made from}
  - {to: lidar, rel: made from}
sources:
  - work: point-cloud-library-the-pcl-registration-api
    page: Registration API
    quote: "For every set of point cloud datasets acquired from different views, we therefore need a system that is able to align them together into a single point cloud model, so that subsequent processing steps such as segmentation and object reconstruction can be applied."
  - work: open3d-point-cloud-tutorial
    page: Voxel downsampling, outlier removal and bounding volumes
    quote: "It is often used as a pre-processing step for many point cloud processing tasks."
deeper: The next level would hold filtering, normals, segmentation, feature correspondence, ICP, and surface reconstruction.
---
