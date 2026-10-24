---
term: Autonomy level
aka:
  - levels of AI coding
  - delegation level
  - trust dial
kind: knob
plain: How much of the work agents do with no person in the loop. Practitioners borrow the levels of driving automation, from a human who approves every character to a factory that turns specs into software with no human review. A software factory starts at level 3, with a person reading every diff, and aims at level 4. There, people write specs and check outcomes, while verification and the merge policy let low-risk work merge without a person reading the diff.
does: Sets the human's job at each step (writer, reviewer, spec writer) and so sets how strong the brakes and the verification must be.
ask: At this level, who starts the run, who reads the diff, and who can merge?
cues:
  - Whether a human or an event starts each agent session
  - Whether every pull request waits for a human approval
  - Work that continues while the team is away
range: The scale runs from manual level 0 to level 5, where no human reviews the code. Levels 3 and 4 separate human diff review from spec-and-outcome oversight.
trouble: The team claims a higher level than its brakes support, and defects reach production unreviewed.
at: [-0.05, 0.68, 0.12]
variants:
  - label: Level
    items:
      - id: level-0
        name: "Level 0: manual"
        plain: The human writes the code. AI is at most a search engine or an occasional accepted suggestion.
        sources:
          - work: dan-shapiro-five-levels
            page: Level Zero
            quote: "Whether it’s vi or Visual Studio, not a character hits the disk without your approval."
      - id: level-1
        name: "Level 1: discrete tasks"
        plain: The human hands small, separate jobs to the AI, such as a unit test or a docstring, and still writes the important code.
        sources:
          - work: dan-shapiro-five-levels
            page: Level 1
            quote: "You’re writing the important stuff, but you offload specific, discrete tasks to your AI intern."
      - id: level-2
        name: "Level 2: pairing"
        plain: The human pairs with an AI coding tool like a colleague, in a flow state, and still drives every session.
        sources:
          - work: dan-shapiro-five-levels
            page: Level 2
            quote: "You are pairing with the AI like a colleague. You get into a flow state; you’re more productive than you’ve ever been."
      - id: level-3
        name: "Level 3: human in the loop"
        plain: Agents write the code in several sessions at once, and the human's day is reviewing their diffs. A software factory starts here, with human review on every pull request.
        why: Review of every diff makes it level 3, however many agents run.
        sources:
          - work: dan-shapiro-five-levels
            page: Level 3
            quote: "You are the human in the loop. Your coding agent is always running multiple tabs. You spend your days reviewing code."
      - id: level-4
        name: "Level 4: spec and schedule"
        plain: The human writes specs and plans, sets schedules, and leaves the agents to work for hours, then checks the results. A mature factory runs here. Evidence carries low-risk work to merge, and people read the diffs only of high-risk changes.
        why: The human checks outcomes such as passing tests and scenarios instead of reading each step.
        sources:
          - work: dan-shapiro-five-levels
            page: Level 4
            quote: "You write a spec. You argue with it about the spec. You craft skills (for Claude Code, because most folks at level 4 seem to find their way to Claude Code). You plan schedules. You review plans. Then you leave for 12 hours, and check to see if the tests pass."
      - id: level-5
        name: "Level 5: dark factory"
        plain: Specs go in and software comes out, with no human writing or reviewing the code. It is credible only where agents cannot game the evidence, such as holdout scenarios run against twins of outside services. It may cover only part of a codebase, and only a handful of small teams work this way.
        why: '"Dark" means no human is needed on the floor, as in a robot-staffed factory.'
        sources:
          - work: dan-shapiro-five-levels
            page: Level 5
            quote: "It’s a black box that turns specs into software."
          - work: dan-shapiro-five-levels
            page: Why Dark?
            quote: "It’s dark, because it’s a place where humans are neither needed nor welcome."
          - work: dan-shapiro-five-levels
            page: Why Dark?
            quote: "I know a handful of people who are doing this. They’re small teams, less than five people."
          - work: matt-pocock-ai-coding-dictionary
            page: Dark factory
            url: https://www.aihero.dev/ai-coding-dictionary/dark-factory
            quote: "A codebase, or part of one, where a software factory writes the code and no human reads it."
          - work: strongdm-software-factory
            page: Software Factories And The Agentic Moment
            quote: "Tests can be reward hacked - we needed validation that was less vulnerable to the model cheating"
sources:
  - work: dan-shapiro-five-levels
    page: Introduction
    quote: "I’ve now seen dozens of companies struggling to put AI to work writing code, and each one has moved through five clear tiers of automation."
---
