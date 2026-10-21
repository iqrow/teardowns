---
term: Task planning and execution
aka: [behaviour logic, mission]
kind: process
plain: Task planning and execution sequences skills such as navigation, detection, grasping, and placement, and handles their outcomes.
does: Decides what the robot should do next and what recovery to try after failure.
ask: What is the recovery path when a skill fails or the world no longer matches the plan?
cues:
  - Navigation, detection, grasping and placement sequence
  - Recovery after a skill failure
  - Next skill selected for the robot
at: [-0.2227, 0.3182, 0.02]
variants:
  - label: Executive
    items:
      - id: exec-fsm
        name: Finite state machine
        plain: An explicit set of states and transitions; it is easy to inspect but can become tangled as cases grow.
        sources:
          - work: nav2-behavior-trees
            page: Behavior Trees
            quote: "This is opposed to a finite state machine (FSM) which may have dozens of states and hundreds of transitions."
      - id: exec-bt
        name: Behavior tree
        plain: A tree of sequences, fallbacks, and actions is ticked from the root, allowing modular and reactive execution.
        sources:
          - work: nav2-behavior-trees
            page: Behavior Trees
            quote: "Behavior trees (BT) are becoming increasingly common in complex robotics tasks. They are a tree structure of tasks to be completed."
      - id: exec-pddl
        name: Symbolic planner (PDDL)
        plain: A symbolic planner searches action models with preconditions and effects for a sequence that reaches a goal state.
        sources:
          - work: steven-m-lavalle-planning-algorithms
            url: https://msl.cs.illinois.edu/~lavalle/planning/node58.html
            page: Sec. 2.4, logic-based planning
            quote: "Using Logic to Formulate Discrete Planning"
sources:
  - work: nav2-behavior-trees
    page: Behavior Trees
    quote: "It creates a more scalable and human-understandable framework for defining multi-step or many state applications."
  - work: michele-colledanchise-and-petter-ogren-behavior
    page: Introduction
    quote: "A Behavior Tree (BT) is a way to structure the switching between different tasks in an autonomous agent."
    flag: arXiv book text
  - work: steven-m-lavalle-planning-algorithms
    url: https://msl.cs.illinois.edu/~lavalle/planning/node58.html
    page: Ch. 2 §2.4, logic-based planning
    quote: "For many discrete planning problems that we would like a computer to solve, the state space is enormous."
deeper: The next level would hold states, transitions, behavior-tree control nodes, action models, preconditions, effects, and recovery policies.
---
