---
term: Camera settings
aka:
  - frame rate
  - shutter speed
  - exposure
kind: knob
plain: "Frame rate, shutter speed, aperture and ISO. The 180-degree rule sets
  the shutter to 1 / (2 × frame rate): 1/50 s at 25 fps."
does: Controls motion blur, exposure and noise, and how motion looks.
ask: What frame rate am I delivering, and does the shutter match it?
cues:
  - "Motion blur matching the movement"
  - "Exposure and noise in the image"
  - "Flicker under mains lighting"
range: 24, 25, 30 or 60 fps; shutter ≈ 1/(2 × fps)
trouble: Jerky motion from a too-fast shutter, flicker under mains lighting, or
  noise from high ISO.
at:
  - 0.2443
  - 0.3487
  - 0.1261
variants:
  - label: Frame rate
    items:
      - id: fps-25
        name: 25 fps
        plain: Shutter about 1/50 s. PAL regions (50 Hz mains).
        sources:
          - work: arri-alexa-35-user-manual
            page: §8.4 shutter-angle formula
            quote: "Shutter angle and sensor frame rate determine exposure time of the sensor in seconds by the following equation: exposure time = shutter angle / (360 x FPS)."
      - id: fps-24
        name: 24 fps
        plain: Shutter about 1/50 s. Cinema look.
        sources:
          - work: arri-alexa-35-user-manual
            page: §8.4 shutter-angle formula
            quote: "Shutter angle and sensor frame rate determine exposure time of the sensor in seconds by the following equation: exposure time = shutter angle / (360 x FPS)."
      - id: fps-30
        name: 30 fps
        plain: Shutter about 1/60 s. NTSC regions (60 Hz mains).
        sources:
          - work: arri-alexa-35-user-manual
            page: §8.4 shutter-angle formula
            quote: "Shutter angle and sensor frame rate determine exposure time of the sensor in seconds by the following equation: exposure time = shutter angle / (360 x FPS)."
      - id: fps-60
        name: 60 fps
        plain: Shutter about 1/120 s. Smooth motion, slow-mo.
        sources:
          - work: arri-alexa-35-user-manual
            page: §8.4 shutter-angle formula
            quote: "Shutter angle and sensor frame rate determine exposure time of the sensor in seconds by the following equation: exposure time = shutter angle / (360 x FPS)."
sources:
  - work: youtube-help-recommended-upload-encoding
    page: Frame-rate recommendations
    quote: Content should be encoded and uploaded in the same frame rate it was
      recorded.
  - work: arri-alexa-35-user-manual
    page: §8.4 Shutter, p. 43
    quote: "Shutter angle and sensor frame rate determine exposure time of the sensor in seconds by the following equation: exposure time = shutter angle / (360 x FPS)."
---
