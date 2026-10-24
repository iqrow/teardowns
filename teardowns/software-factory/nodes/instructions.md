---
term: Instructions
aka:
  - repository guidance
  - agent context
kind: part
plain: The durable guidance an agent receives about the repository, task boundaries, checks, style, and safety. It may live in AGENTS.md, CLAUDE.md, repository prompts, or equivalent configuration. Keep the root file a short map that points to deeper docs, and write down the "no" decisions so agents stop proposing them again.
does: Supplies context the agent cannot infer reliably from the ticket or source tree alone.
ask: Which instructions are always needed, which are local to a path, and which can the agent verify?
cues:
  - An AGENTS.md or CLAUDE.md file near the repository root
  - A run log showing loaded instruction files
  - A pull request that reports the checks and conventions it followed
at: [-0.7, 1.25, 0.08]
links:
  - {to: agent-harness, rel: see also}
  - {to: improvement-loop, rel: see also}
sources:
  - work: agentsmd-agents-md
    page: Why AGENTS.md?
    quote: "Think of AGENTS.md as a README for agents: a dedicated, predictable place to provide the context and instructions to help AI coding agents work on your project."
  - work: github-copilot-custom-instructions
    page: Introduction
    quote: "Repository custom instructions let you provide Copilot with repository-specific guidance and preferences on GitHub."
  - work: anthropic-claude-code-best-practices
    page: Write an effective CLAUDE.md
    quote: "CLAUDE.md is a special file that Claude reads at the start of every conversation."
  - work: kent-c-dodds-kcd-skills
    page: autopilot skill
    url: https://github.com/kentcdodds/kcd-skills/blob/ffa3faf9911210b89b1d9953e025d52247632070/skills/autopilot/SKILL.md
    quote: "Write down the \"no\": decisions agents would otherwise re-propose."
  - work: kody-repository
    page: docs/contributing/harness-engineering.md
    url: https://github.com/kody-hq/kody/blob/51c3a853c43e67600ab1bde6eb08a2965371b050/docs/contributing/harness-engineering.md
    quote: "Prefer small, enforceable rules over long, fragile instructions."
  - work: matt-pocock-ai-coding-dictionary
    page: AX
    url: https://www.aihero.dev/ai-coding-dictionary/ax
    quote: "AGENTS.md, skills, and tools kept lean, so most of the context window is available for the task"
---
