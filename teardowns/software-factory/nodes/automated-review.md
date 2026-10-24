---
term: Automated review
aka:
  - agent review
  - second opinion
kind: process
plain: A separate run checks a proposed change with fresh context and reports findings before human review.
does: Adds a second, independent judgement, so the run that wrote the change is not the only one that checks it.
ask: Is the reviewer separate enough to catch what the author missed, and does it report evidence for each finding?
cues:
  - A review check authored by a different bot or run
  - Findings linked to changed lines with severity and evidence
  - A second review status beside deterministic checks
at: [-0.58, 0.74, 0.12]
links:
  - {to: human-review, rel: see also}
  - {to: review-rework-loop, rel: see also}
sources:
  - work: anthropic-claude-code-best-practices
    page: Give Claude a way to verify its work
    quote: "a verification subagent or a dynamic workflow that checks its own findings has a fresh model try to refute the result"
  - work: addy-osmani-agentic-code-review
    page: The tools are good, but not always for the reason they advertise
    quote: "A second model with different priors genuinely catches real bugs, and it catches a lot of them"
  - work: software-engineering-google
    page: Critique
    url: https://abseil.io/resources/swe-book/html/ch19.html
    quote: "Uploading a snapshot of the change triggers code analyzers"
  - work: anthropic-building-effective-agents
    page: Agents in practice
    quote: "However, whereas automated testing helps verify functionality, human review remains crucial for ensuring solutions align with broader system requirements."
  - work: gene-kim-steve-yegge-vibe-coding
    url: https://itrevolution.com/articles/from-line-cookto-head-chef-orchestrating-ai-teams/
    page: "From Line Cook to Head Chef: Orchestrating AI Teams (book excerpt)"
    quote: "Generators and verifiers: Separate concerns by creating dedicated agents for implementation versus testing."
  - work: lauren-tan-pstack
    page: When the night holds a queue, not a task
    url: https://raw.githubusercontent.com/cursor/plugins/9580c23696ac8d7abed0c166f2f9918800afb819/pstack/docs/guide/07-overnight.md
    quote: "Each PR gets one owner agent that carries it from build through merge, and no owner merges on its own verdict. A swarm of fresh verifiers checks the owner's code-ready head."
  - work: lauren-tan-pstack
    page: Land the stack with Shipping
    url: https://raw.githubusercontent.com/cursor/plugins/9580c23696ac8d7abed0c166f2f9918800afb819/pstack/docs/guide/06-verify-and-ship.md
    quote: "the agent that judges a change is never the one that wrote it."
  - work: matt-pocock-software-factory-skill
    page: Start slow
    quote: "a separate run that reads the diff cold against the codebase's standards and the ticket, when there is one."
---
