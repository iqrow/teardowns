---
term: Coordinate frames and transforms
aka: [frames, tf, poses]
kind: concept
plain: A coordinate frame is an origin and three axes attached to a link, sensor or object. A rigid transform combines rotation and translation to express one frame or point in another.
does: Frames let a camera measurement become a gripper, base or map measurement by chaining transforms.
ask: In which frame, at what timestamp, is this number expressed?
trouble: A wrong axis, transform direction or timestamp makes the same point appear in the wrong place.
at: [0.1909, 0.1273, 0.02]
sources:
  - work: kevin-m-lynch-and-frank-c-park-modern-robotics
    url: https://hades.mech.northwestern.edu/images/7/7f/MR.pdf
    page: Ch. 3 §3.3
    quote: "One convenient way is to attach a reference frame to the rigid body and to develop a way to quantitatively describe the frame’s position and orientation as it moves."
    flag: author preprint
  - work: richard-hartley-and-andrew-zisserman-multiple
    url: https://www.robots.ox.ac.uk/~vgg/hzbook/hzbook2/HZintroduction.pdf
    page: Ch. 1 §§1.1–1.2
    quote: "A point in Euclidean 2-space is represented by an ordered pair of real numbers, (x, y)."
    flag: author sample chapter
deeper: "Next level: homogeneous matrices, rotation representations, transform inversion, chaining and time-stamped frame trees."
---
