---
term: Configuration space
aka: [C-space, joint space]
kind: concept
plain: Configuration space is the space of all robot configurations; one point represents one complete set of joint or base coordinates.
does: Turns motion among bodies into motion of a point through free and forbidden regions.
ask: What is the dimension of this space, and where are its narrow passages?
at: [-0.3182, -0.0318, 0.02]
sources:
  - work: howie-choset-et-al-principles-of-robot-motion
    url: http://www.cs.cmu.edu/~motionplanning/lecture/Chap3-Config-Space_howie.pdf
    page: Lecture 3, Configuration Space
    quote: "A key concept for motion planning is a configuration: a complete specification of the position of every point in the system."
    flag: author lecture notes
  - work: mark-w-spong-seth-hutchinson-and-m-vidyasagar
    url: https://catalogimages.wiley.com/images/db/pdf/9781119523994.excerpt.pdf
    page: Ch. 1 §1.1.2
    quote: "A configuration of a manipulator is a complete specification of the location of every point on the manipulator."
    flag: publisher sample chapter
deeper: The next level would hold configuration coordinates, obstacle transforms, free-space topology, and sampling measures.
---
