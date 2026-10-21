---
term: Precision and recall
aka: [mAP, detection accuracy]
kind: measure
plain: Precision is the share of detections that are correct. Recall is the share of real objects that were found; average precision summarizes the precision–recall curve.
does: Exposes false alarms and missed objects so a score threshold can be chosen for the task.
ask: Which IoU and score thresholds make a false alarm or a miss more costly?
range: COCO reports AP at IoU 0.50, AP at IoU 0.75, and a primary AP averaged from 0.50 to 0.95.
at: [0.4836, 0.35, 0.02]
sources:
  - work: coco-consortium-coco-detection-evaluation
    page: Metrics
    quote: "Each plot is a series of precision recall curves where each PR curve is guaranteed to be strictly higher than the previous as the evaluation setting becomes more permissive."
deeper: The next level would hold IoU matching, score thresholds, precision–recall curves, and AP aggregation.
---
