---
term: Object pose estimation
aka: [6D pose]
kind: process
plain: 6D pose estimation finds an object's 3D position and orientation from image or depth data, often using a known object model.
does: Provides the object frame that a grasp or placement planner uses.
ask: What position and angle error is acceptable, and how are symmetric objects scored?
cues:
  - Object 3D position and orientation
  - Pose from image or depth data
  - Object frame for grasping or placement
  - Position and angle error
range: BOP evaluates 6D pose methods on multiple datasets with pose-error functions and separate evaluation of ambiguity.
at: [-0.3818, -0.0636, 0.02]
sources:
  - work: tomas-hodan-et-al-bop-benchmark-for-6d-object
    page: Abstract and benchmark description
    quote: "We propose a benchmark for 6D pose estimation of a rigid object from a single RGB-D input image."
    flag: arXiv preprint
  - work: peter-corke-robotics-vision-and-control
    url: https://link.springer.com/chapter/10.1007/978-3-642-20144-8_14
    page: Ch. 14, Using Multiple Images
    quote: "This allowed us to estimate the object's 3-dimensional pose from the 2-dimensional image data."
    flag: publisher chapter preview
deeper: The next level would hold correspondences, template or feature matching, PnP, refinement, and symmetry handling.
---
