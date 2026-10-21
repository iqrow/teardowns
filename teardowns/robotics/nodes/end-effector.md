---
term: End effector
aka: [gripper, hand, tool, claw]
kind: part
plain: An end effector is the tool at the end of the arm that contacts the world, such as a gripper, suction tool or process tool.
does: It makes the task-specific contact; the arm places and orients it.
ask: Can the tool contact and hold the task objects without slip or damage?
cues:
  - Tool at the end of the arm
  - Gripper, suction tool or process tool
  - Contact with the world
children: [grip-force, grasp-quality]
at: [0.66, 0.68, 0.05]
variants:
  - label: Gripper
    items:
      - id: grip-parallel
        name: Parallel-jaw
        plain: Two opposing jaws close on an object. Parallel jaws are predictable and easy to model.
        sources:
          - work: david-v-gealy-et-al-quasi-direct-drive-for-low
            page: p. 4, Base and Gripper
            quote: "We chose parallel jaws for their predictability, robustness, simplicity (low cost), and ease of simulation."
            flag: arXiv preprint
      - id: grip-suction
        name: Suction cup
        plain: A vacuum cup holds a sealed surface by pressure difference; the OnRobot VG10 uses configurable cups and two independent vacuum channels.
        why: Holding a sealed surface by pressure difference defines it; OnRobot VG10 is one example.
        sources:
          - work: onrobot-vg10-flexible-electric-vacuum-gripper
            page: Product features and specifications
            quote: "Adjustable arms, configurable suction cups and two independent vacuum channels help the VG10 handle changing products."
      - id: grip-hand
        name: Multi-fingered hand
        plain: A multi-fingered hand uses several jointed fingers to make more contacts and manipulate objects dexterously.
        sources:
          - work: richard-m-murray-zexiang-li-and-s-shankar-sastry
            url: http://www.cds.caltech.edu/~murray/mlswiki/images/mlswiki/0/02/Mls94-complete.pdf
            page: Ch. 5, Multifingered Hand Kinematics
            quote: "A multifingered hand is a set of robots which is attached to the end of a larger robot arm for the purpose of manipulation."
            flag: electronic edition
      - id: grip-soft
        name: Soft gripper
        plain: A soft gripper uses compliant fingers or silicone tools to conform to irregular or delicate objects.
        sources:
          - work: onrobot-one-stop-shop-for-collaborative-robots
            page: Soft Gripper for Delicate Handling
            quote: "The OnRobot Soft Gripper uses interchangeable silicone tools to handle delicate and irregular items."
sources:
  - work: kevin-m-lynch-and-frank-c-park-modern-robotics
    url: https://hades.mech.northwestern.edu/images/7/7f/MR.pdf
    page: Chs. 4 and 12
    quote: "A robot arm is typically equipped with a hand or gripper, more generally called an end-effector, which interacts with objects in the surrounding world."
    flag: author preprint
deeper: "Next level: jaw geometry, contact friction, suction seal, compliance, tooling and changeover."
---
