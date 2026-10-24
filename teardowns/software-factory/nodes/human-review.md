---
term: Human review
aka:
  - approval
  - owner review
  - code review
kind: process
plain: A person reads the diff or the changed files before the change merges. Reading the agent's account of what it did does not count. Human review is the slowest gate, so a factory starts with it on every pull request and, as checks and verification earn trust, keeps it for high-risk changes, one-way doors and changes to the gates. For the rest, the person checks the outcome and the evidence.
does: Supplies accountability and judgement for requirements and consequences that automated gates may miss, and teaches the factory what to check next.
ask: Who owns the change, what did they actually read, and what can only a person decide here?
cues:
  - A named reviewer and approval state on a pull request
  - A review comment or resolved conversation
  - A merge control blocked until required approval exists
at: [-0.58, 0.58, 0.12]
links:
  - {to: pull-request, rel: controls}
  - {to: autonomy-level, rel: see also}
variants:
  - label: Checkpoint
    items:
      - id: review-every-pr
        name: Every pull request
        plain: A person reads every diff before it merges. A factory starts here, and what the reviewer catches becomes new checks.
        sources:
          - work: matt-pocock-software-factory-skill
            page: Start slow
            quote: "Add one automated trigger at a time, throttled at first (one bug report in ten, a clock once a day), with human review on every PR."
          - work: github-protected-branches
            page: Require pull request reviews before merging
            quote: "If you enable required reviews, collaborators can only push changes to a protected branch via a pull request that is approved by the required number of reviewers"
      - id: review-plan
        name: Plan before work
        plain: A person reads the spec or plan before the run starts, while a change of direction costs minutes.
        sources:
          - work: matt-pocock-ai-coding-dictionary
            page: Human review
            url: https://www.aihero.dev/ai-coding-dictionary/human-review
            quote: "Review is also cheaper earlier. Reading a plan before work starts, or a small diff mid-flight, takes minutes"
          - work: dan-shapiro-five-levels
            page: Level 4
            quote: "You plan schedules. You review plans."
      - id: review-high-risk
        name: High-risk changes only
        plain: Low- and medium-risk changes merge on checks and evidence. A person reads the diff of high-risk changes, one-way doors and changes to the gates.
        sources:
          - work: kent-c-dodds-you-own-the-outcome
            page: Design the playground
            quote: "Well-structured PRs, tests, and AI reviewers let a lot of changes ship without you in the middle. Save your attention for the high-risk, one-way-door stuff."
          - work: matt-pocock-ai-coding-dictionary
            page: Human review
            url: https://www.aihero.dev/ai-coding-dictionary/human-review
            quote: "human review is reserved for what only you can judge"
      - id: review-none
        name: None (dark factory)
        plain: No person reads the factory's code. Automated checks and automated review are the only gates, and people judge the software by scenarios and outcomes. This is credible only where agents cannot game that evidence, as with holdout scenarios run against twins of outside services.
        sources:
          - work: matt-pocock-ai-coding-dictionary
            page: Dark factory
            url: https://www.aihero.dev/ai-coding-dictionary/dark-factory
            quote: "A codebase, or part of one, where a software factory writes the code and no human reads it."
          - work: matt-pocock-ai-coding-dictionary
            page: Dark factory
            url: https://www.aihero.dev/ai-coding-dictionary/dark-factory
            quote: "Automated checks and automated review are the only gates."
          - work: strongdm-software-factory
            page: Software Factories And The Agentic Moment
            quote: "Code must not be reviewed by humans"
          - work: strongdm-software-factory
            page: Software Factories And The Agentic Moment
            quote: "Tests can be reward hacked - we needed validation that was less vulnerable to the model cheating"
          - work: matt-pocock-ai-coding-dictionary
            page: Vibe coding
            url: https://www.aihero.dev/ai-coding-dictionary/vibe-coding
            quote: "With human review gone, whatever automated verification still runs — tests, types, automated review — is the only gate the code passes through."
sources:
  - work: matt-pocock-ai-coding-dictionary
    page: Human review
    url: https://www.aihero.dev/ai-coding-dictionary/human-review
    quote: "Reading the diff or the changed files counts; reading the agent's description of what it did does not"
  - work: matt-pocock-ai-coding-dictionary
    page: Human review
    url: https://www.aihero.dev/ai-coding-dictionary/human-review
    quote: "Agents raise the volume of code produced, so review becomes the bottleneck."
  - work: matt-pocock-ai-coding-dictionary
    page: Human review
    url: https://www.aihero.dev/ai-coding-dictionary/human-review
    quote: "Where you place the review checkpoint is a human-in-the-loop decision"
  - work: matt-pocock-software-factory-skill
    page: Start slow
    quote: "a human reads the PR before it merges; what it catches becomes new automated checks and sharper automated review."
  - work: addy-osmani-beyond-vibe-coding
    page: Human oversight (author's book site)
    url: https://beyond.addy.ie/
    quote: "Always maintain human oversight as the final reviewer and approver of all agent work"
  - work: github-protected-branches
    page: Require pull request reviews before merging
    quote: "If you enable required reviews, collaborators can only push changes to a protected branch via a pull request that is approved by the required number of reviewers"
  - work: birgitta-bockeler-to-vibe
    page: A sliding scale of review effort
    quote: "High probability + high impact + low detectability High level of review is advisable. Assume the AI might be wrong and cover for it."
  - work: software-engineering-google
    page: Code Review
    url: https://abseil.io/resources/swe-book/html/ch09.html
    quote: "Code review is a process in which code is reviewed by someone other than the author, often before the introduction of that code into a codebase."
  - work: kent-c-dodds-you-own-the-outcome
    page: Shipping a feature without writing it
    quote: "I didn't read that diff line by line. I read the outcome: does it do what we decided it should do, and did the gates I trust pass?"
---
