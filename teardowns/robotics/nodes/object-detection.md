---
term: Object detection and segmentation
aka: [recognising objects]
kind: process
plain: An image model predicts object classes and locations; segmentation predicts the pixels belonging to each object.
does: Provides targets for grasping and obstacles for avoidance.
ask: What are precision, recall, and AP on images from this robot and lighting?
cues:
  - Object classes and locations on an image
  - Pixels belonging to each object
  - Grasp targets and avoidance obstacles
range: COCO's primary AP averages detections over IoU thresholds from 0.50 through 0.95.
children: [precision-recall]
at: [0.0955, 0.0954, 0.02]
sources:
  - work: coco-consortium-coco-detection-evaluation
    page: Detection Evaluation
    quote: "FiftyOne provides COCO-style object detection evaluation to not only compute AP but also easily visualize individual sample- and object-level results."
  - work: russ-tedrake-robotic-manipulation
    url: https://manipulation.mit.edu/segmentation.html
    page: Ch. 10, Object Detection and Segmentation
    quote: "Object detection and segmentation There is a lot to know about modern object detection and segmentation pipelines."
    flag: open online notes
---
