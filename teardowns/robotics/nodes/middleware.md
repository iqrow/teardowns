---
term: Middleware
aka: [ROS 2, message passing]
kind: part
plain: Middleware lets independent programs exchange typed messages and invoke services or actions over named interfaces.
does: It separates components so teams can replace, inspect and deploy them independently.
ask: What message type, QoS, latency and update rate does each interface need?
at: [0, -0.2132, 0.02]
variants:
  - label: Middleware
    items:
      - id: mw-ros2
        name: ROS 2
        plain: ROS 2 uses nodes and typed topics, services and actions; DDS-backed QoS can tune reliability, durability and deadlines.
        sources:
          - work: morgan-quigley-brian-gerkey-and-william-d-smart
            url: https://api.pageplace.de/preview/DT0400.9781449325510_A26119999/preview-9781449325510_A26119999.pdf
            page: Preface, ROS computational infrastructure
            quote: "ROS systems consist of numerous small computer programs that connect to one another and continuously exchange messages."
            flag: publisher sample chapter
      - id: mw-ros1
        name: ROS 1
        plain: ROS 1 Noetic was marked end-of-life on 31 May 2025.
        sources:
          - work: open-robotics-upcoming-ros-1-end-of-life
            page: ROS Noetic end-of-life announcement
            quote: "ROS Noetic End-of-Life: May 31, 2025"
      - id: mw-custom
        name: In-house framework
        plain: A project-owned framework can use a custom in-house binary format instead of ROS.
        sources:
          - work: mcap-introduction
            page: Before MCAP
            quote: "Companies that don’t use ROS often employed a custom in-house binary format."
sources:
  - work: morgan-quigley-brian-gerkey-and-william-d-smart
    url: https://api.pageplace.de/preview/DT0400.9781449325510_A26119999/preview-9781449325510_A26119999.pdf
    page: Preface, distributed messages
    quote: "connect to one another and continuously exchange messages"
    flag: publisher sample chapter
deeper: The next level would hold discovery, message types, topics, services, actions, QoS profiles and executors.
---
