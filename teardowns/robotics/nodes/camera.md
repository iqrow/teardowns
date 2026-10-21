---
term: Camera
aka: [vision sensor, depth camera]
kind: part
plain: A camera measures image intensity and colour; stereo or active depth cameras add a distance value for each pixel or point.
does: It supports object recognition, pose estimation, tracking, mapping and visual servoing.
ask: Do we need colour, depth or both, and what resolution, frame rate, range and light robustness are required?
cues:
  - Colour image
  - Distance value per pixel or point
  - Blur, glare or occlusion
  - Missing or wrong depth
range: RealSense D455/D450-series specifications list an ideal depth range, field of view and RGB/depth modes; exact performance depends on the camera and conditions.
trouble: Blur, glare, occlusion, textureless surfaces, sunlight and an incorrect camera model create missing or wrong depth and pose measurements.
at: [-0.45, 0.4, 0.13]
variants:
  - label: Camera
    items:
      - id: cam-rgb
        name: Monocular RGB
        plain: A monocular RGB camera gives one colour image; it has no direct depth unless another model or cue supplies it.
        sources:
          - work: realsense-d450-series
            page: Matched global-shutter RGB
            quote: "Color and depth therefore describe the same scene more consistently during motion."
      - id: cam-stereo
        name: Stereo
        plain: A stereo camera estimates depth from disparity between two views.
        sources:
          - work: realsense-the-basics-of-stereo-depth-vision
            page: Stereoscopic Vision
            quote: "Depth from Stereo is a classic computer vision algorithm inspired by the human binocular vision system."
      - id: cam-tof
        name: Time-of-flight depth
        plain: A time-of-flight camera measures light travel time; Basler blaze-101 outputs depth, intensity and confidence maps.
        why: Measuring light travel time defines it; Basler blaze-101 is one example.
        sources:
          - work: basler-blaze-101-product-documentation
            page: Specifications
            quote: "Depth Map: Coord3D_C16, Mono16, Coord3D_ABC32f Intensity Image: Mono16 Confidence Map: Mono16"
      - id: cam-structured
        name: Structured light
        plain: Structured light projects a known pattern and infers depth from its observed deformation.
        sources:
          - work: realsense-the-basics-of-stereo-depth-vision
            page: Structured-Light Approach
            quote: "Structured-Light is an alternative approach to depth from stereo. It relies on recognizing a specific projected pattern in a single image."
sources:
  - work: realsense-d450-series
    page: D455 technical specifications
    quote: "Color and depth therefore describe the same scene more consistently during motion, supporting object recognition, mapping, scanning, teleoperation and AI perception pipelines."
  - work: opencv-camera-calibration
    page: Camera model and calibration
    quote: "To find all these parameters, what we have to do is to provide some sample images of a well defined pattern (eg, chess board)."
  - work: peter-corke-robotics-vision-and-control
    url: https://link.springer.com/chapter/10.1007/978-3-642-20144-8_11
    page: Ch. 11, Image Formation
    quote: "Section 11.2 introduces the topic of camera calibration, the estimation of the parameters of the perspective transformation."
    flag: publisher chapter preview
deeper: "Next level: image formation, intrinsics, distortion, stereo disparity, depth sensing, exposure, synchronization and camera mounting."
---
