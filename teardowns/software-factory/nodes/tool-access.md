---
term: Tool access
aka:
  - MCP servers
  - skills
  - agent tools
kind: part
plain: The tools and skills an agent may call during a run. MCP servers let it query or act on outside systems, and skill folders hold repeatable procedures it loads only when a task needs them. Keep the set small, so most of the context window stays free for the task.
does: Lets an agent reach systems and procedures it cannot rebuild from the source code alone.
ask: Which tools does this task need, and which ones only fill the context window or widen what a run can reach?
cues:
  - An MCP server list in the agent's configuration
  - A skills folder with one SKILL.md file per skill
  - Tool calls in the run's trace
at: [0.8, 0.5, 0.14]
links:
  - {to: least-privilege, rel: see also}
  - {to: agent-trace, rel: measured by}
sources:
  - work: mcp-tools-specification
    page: Tools
    quote: "The Model Context Protocol (MCP) allows servers to expose tools that can be invoked by language models."
  - work: mcp-tools-specification
    page: Tools
    quote: "Tools enable models to interact with external systems, such as querying databases, calling APIs, or performing computations."
  - work: agent-skills-specification
    page: Specification
    quote: "A skill is a directory containing, at minimum, a SKILL.md file"
  - work: agent-skills-specification
    page: Specification
    quote: "Agents load skills progressively, pulling in more detail only as a task calls for it."
  - work: matt-pocock-ai-coding-dictionary
    page: AX
    url: https://www.aihero.dev/ai-coding-dictionary/ax
    quote: "AGENTS.md, skills, and tools kept lean, so most of the context window is available for the task"
---
