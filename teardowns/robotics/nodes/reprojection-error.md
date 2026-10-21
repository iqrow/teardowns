---
term: Reprojection error
aka: [calibration error]
kind: measure
plain: Reprojection error is the image-space distance between an observed calibration point and the point predicted by the calibrated camera model.
does: It measures how well the estimated camera model explains the calibration observations.
ask: Is the error low and consistent across views, image regions and target poses?
range: OpenCV reports reprojection error in pixels; lower is better, and per-view errors help expose a bad image or target pose. There is no universal pixel threshold independent of camera, resolution and data quality.
at: [0.25, 0.8, 0.05]
sources:
  - work: opencv-camera-calibration
    page: Re-projection Error
    quote: "Re-projection error gives a good estimation of just how exact is the found parameters. This should be as close to zero as possible."
deeper: "Next level: residual vectors, RMS versus mean error, per-view diagnostics, outlier rejection and model selection."
---
