---
term: Run chain
aka:
  - ticket to merge
  - the pipeline
kind: loop
plain: A trigger starts a run. The run's change to the tracker or git host triggers the next run, through checks, automated review and human review, until a pull request merges. Each run hands its evidence to the next, such as screenshots of the bug or proof that the fix works. A new ticket starts the cycle again. The simplest chain is a loop in which each run picks the next task from a plan and commits it.
does: Joins short, stateless runs into one flow from ticket to merged code, with a gate or a human at each handoff.
ask: Which change does each run make that starts the next one, and where can the chain stop?
trouble: The chain stops silently between two runs, or one run's change starts two runs at once.
loop:
  type: cycle
  through:
    - trigger
    - run
    - automated-checks
    - automated-review
    - human-review
    - pull-request
sources:
  - work: anthropic-building-effective-agents
    page: "Workflow: Prompt chaining"
    quote: "Prompt chaining decomposes a task into a sequence of steps, where each LLM call processes the output of the previous one."
  - work: github-actions-events
    page: About events that trigger workflows
    quote: "Workflow triggers are events that cause a workflow to run."
  - work: martin-fowler-continuous-integration
    page: Every Push to Mainline Should Trigger a Build
    quote: "Every time the mainline receives a commit, the CI service checks out the head of the mainline into an integration environment and performs a full build."
  - work: martin-fowler-continuous-delivery-article
    page: Continuous Delivery
    quote: "You achieve continuous delivery by continuously integrating the software done by the development team, building executables, and running automated tests on those executables to detect problems."
  - work: martin-fowler-continuous-delivery
    page: Anatomy of the Deployment Pipeline
    url: https://www.informit.com/articles/article.aspx?p=1621865
    quote: "The deployment pipeline is the key pattern that enables continuous delivery."
  - work: github-protected-branches
    page: Require pull request reviews before merging
    quote: "If you enable required reviews, collaborators can only push changes to a protected branch via a pull request that is approved by the required number of reviewers"
  - work: lauren-tan-pstack
    page: Let loops start themselves
    url: https://raw.githubusercontent.com/cursor/plugins/9580c23696ac8d7abed0c166f2f9918800afb819/pstack/docs/guide/07-overnight.md
    quote: "Every stage hands over evidence. Repro attaches screenshots and video of the broken state, and the fix attaches before-and-after proof."
  - work: matt-pocock-getting-started-with-ralph
    page: Getting Started With Ralph
    quote: "Ralph is a technique for running AI coding agents in a loop. You run the same prompt repeatedly. The AI picks its own tasks from a PRD. It commits after each feature."
---
