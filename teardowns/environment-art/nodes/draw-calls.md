---
term: Draw calls
aka:
  - draw call count
  - batches
  - SetPass calls
kind: measure
plain: "A draw call is one request from the CPU to the GPU to draw a batch of geometry. Batching can combine meshes that share a material, and each call adds CPU submission overhead, so its count is read from a profiler."
does: "Makes submission cost visible so batching, instancing, culling and material grouping can be budgeted."
ask: "How many batches does this view submit, and which state changes keep them apart?"
cues:
  - "A profiler counter lists draw calls beside GPU or frame milliseconds"
  - "Many small batches collapse into fewer bars after batching"
  - "A shared material or atlas groups several meshes"
range: "Approximate draw-call budgets: modern mobile phones 100–400; low spec desktop and VR desktop 500–1000."
trouble: "A high count or a sudden batch split shows submission overhead or a broken batching path."
at: [0.3, 0.84, 0]
sources:
  - work: robert-yang-the-level-design-book
    url: https://book.leveldesignbook.com/process/env-art/optimization
    page: Draw calls
    quote: "When profiling GPU performance, the main stat to watch is the draw call, a rendering command sent to the GPU."
  - work: robert-yang-the-level-design-book
    url: https://book.leveldesignbook.com/process/env-art/optimization
    page: Draw calls
    quote: "Batching is when the CPU combines multiple draw calls into a single draw call."
  - work: robert-yang-the-level-design-book
    url: https://book.leveldesignbook.com/process/env-art/optimization
    page: Draw calls
    quote: "More draw calls is usually worse. You want this number smaller."
  - work: robert-yang-the-level-design-book
    url: https://book.leveldesignbook.com/process/env-art/optimization
    page: Draw calls (table of approximate draw call budgets)
    quote: "Modern mobile phones 100-400 Low spec desktop, VR desktop 500-1000"
  - work: unity-static-batching
    page: Introduction to static batching
    quote: "Static batching is a draw call optimization method that combines meshes that use the same material, so that Unity can render them using fewer updates to the render state."
  - work: unity-static-batching
    page: Introduction to static batching
    quote: "Static batching can improve performance, memory efficiency, and reduce CPU overhead, leading to a smoother frame rate and better player experience."
  - work: randima-fernando-gpu-gems
    url: https://developer.nvidia.com/gpugems/gpugems/part-v-performance-and-practicalities/chapter-28-graphics-pipeline-performance
    page: Chapter 28, Graphics Pipeline Performance
    quote: "Every API function call to draw geometry has an associated CPU cost, so maximizing the number of triangles submitted with every draw call will minimize the CPU work done for a given number of triangles rendered."
unverified: "The opened documentation does not establish that CPU overhead is fixed across hardware, drivers, materials or render states."
deeper: "Batching and instancing; culling; merged materials and atlases."
---
