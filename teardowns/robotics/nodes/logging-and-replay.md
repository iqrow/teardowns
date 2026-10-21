---
term: Logging and replay
aka: [rosbag, data recording]
kind: process
plain: Logging records timestamped messages and other state so a run can be inspected or replayed after the robot stops.
does: It turns a one-off failure into evidence that can be reproduced and compared after a code change.
ask: Did we record the topics, timestamps, transforms, commands and environment needed to reproduce the failure?
cues:
  - Timestamped messages and robot state
  - Topics, transforms and commands in a record
  - Replay after the robot stops
at: [0.5091, -0.2132, 0.02]
sources:
  - work: jason-m-okane-a-gentle-introduction-to-ros
    url: https://jokane.net/agitr/agitr-letter-bag.pdf
    page: Ch. 9, Recording and replaying messages
    quote: "We can run the robot itself only a few times, recording the topics we care about, and then replay the messages on those topics many times."
    flag: author PDF
  - work: mcap-introduction
    page: Heterogeneous timestamped data, append-only writing, indexed seeking and self-contained schemas
    quote: "It is ideal for robotics applications, as it can record multiple streams of structured and unstructured data (e.g. ROS, Protobuf, JSON Schema, etc.) in a single file."
deeper: The next level would hold topic selection, timestamps, serialization, storage indexes, playback clocks and failure triage.
---
