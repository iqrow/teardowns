---
term: Parallel runs
aka:
  - parallel agents
  - background agents
  - ambient agents
  - fan-out
  - coordinator and subagents
kind: concept
plain: Several runs work at once, each in its own worktree or runner, so they do not fight over files, ports or build output. A coordinator run can split a job, hand the parts to subagents and write no code itself. Each subagent works in its own context window and reports back one result. Merges still happen one at a time. Each extra run adds a pull request to the review queue, so parallel runs pay off only once verification carries most of the review.
does: Multiplies how much work the factory attempts at once, while each attempt stays isolated.
ask: Does each run get its own worktree or runner, and who will review everything they produce?
cues:
  - Several runs in progress at once on the run page
  - One worktree and branch per run
  - A coordinator run that hands out briefs and opens no pull request of its own
at: [-0.05, 0.95, 0.06]
links:
  - {to: review-queue, rel: raises}
  - {to: concurrency-limit, rel: controls}
pattern: pattern-kitchen-brigade
sources:
  - work: langchain-ambient-agents
    page: What is an ambient agent?
    quote: "Ambient agents listen to an event stream and act on it accordingly, potentially acting on multiple events at a time"
  - work: claude-code-worktrees
    page: Run parallel sessions with worktrees
    quote: "A git worktree is a separate working directory with its own files and branch"
  - work: claude-code-worktrees
    page: Run parallel sessions with worktrees
    quote: "Subagents can run in their own worktrees so parallel edits don't conflict."
  - work: lauren-tan-pstack
    page: Give parallel work its own machine
    url: https://raw.githubusercontent.com/cursor/plugins/9580c23696ac8d7abed0c166f2f9918800afb819/pstack/docs/guide/02-poteto-mode.md
    quote: "If you run several agents against one repository on one computer, they will fight over the working tree, the ports, and the build output."
  - work: lauren-tan-pstack
    page: Steer with principle names
    url: https://raw.githubusercontent.com/cursor/plugins/9580c23696ac8d7abed0c166f2f9918800afb819/pstack/docs/guide/08-principles.md
    quote: "separate before serializing shared state. give each attempt its own worktree, no locks."
  - work: lauren-tan-pstack
    page: Run many projects in parallel
    url: https://raw.githubusercontent.com/cursor/plugins/9580c23696ac8d7abed0c166f2f9918800afb819/pstack/docs/guide/07-overnight.md
    quote: "The coordinator doesn’t write code. It directs subagents, which run in the cloud by default"
  - work: lauren-tan-noodle
    page: docs/concepts/scheduling.md
    url: https://raw.githubusercontent.com/poteto/noodle/82d2921c52370f23f29086de81ccfb600939c037/docs/concepts/scheduling.md
    quote: "Multiple agents run in parallel, each in its own git worktree."
  - work: lauren-tan-noodle
    page: docs/concepts/scheduling.md
    url: https://raw.githubusercontent.com/poteto/noodle/82d2921c52370f23f29086de81ccfb600939c037/docs/concepts/scheduling.md
    quote: "Merges are serialized, one at a time, to keep the main branch clean."
  - work: lauren-tan-noodle
    page: INSTALL.md
    url: https://raw.githubusercontent.com/poteto/noodle/82d2921c52370f23f29086de81ccfb600939c037/INSTALL.md
    quote: "a head chef (the scheduler) reads the backlog, writes orders, and dispatches line cooks (agents) to do the work in isolated worktrees."
  - work: matt-pocock-ai-coding-dictionary
    page: Subagent
    url: https://www.aihero.dev/ai-coding-dictionary/subagent
    quote: "Runs in its own session with its own context window, and reports a single tool result back."
  - work: matt-pocock-ai-coding-dictionary
    page: Subagent
    url: https://www.aihero.dev/ai-coding-dictionary/subagent
    quote: "a parent can fan several out at once over independent pieces of work."
  - work: anthropic-multi-agent-research
    page: How we built our multi-agent research system
    quote: "Our Research system uses a multi-agent architecture with an orchestrator-worker pattern, where a lead agent coordinates the process while delegating to specialized subagents that operate in parallel."
  - work: aws-scaling-agentic-coding
    page: Scaling agentic coding past the human bottleneck
    quote: "each agent you add makes one review queue longer."
---
