---
term: Coding agent
aka:
  - agent
  - AI coding agent
  - model plus harness
kind: part
plain: A model harnessed with tools, a system prompt, and a context window, configured to carry one coding task through a run.
does: Turns a task into model decisions, tool calls, and a result by letting the harness repeat the agent loop.
ask: What model and harness should drive this task, and what must the run leave behind?
cues:
  - A run page names the model and harness
  - A tool trace shows model turns and tool results alternating
  - A final result links to changed files or verification evidence
at: [0, 0.62, 0.12]
children: [agent-harness, model-choice, effort, context-window, permission-mode]
links:
  - {to: instructions, rel: see also}
  - {to: tool-access, rel: see also}
  - {to: security-boundary, rel: see also}
sources:
  - work: matt-pocock-ai-coding-dictionary
    page: Agent
    url: https://www.aihero.dev/ai-coding-dictionary/agent
    quote: "A model harnessed with tools, a system prompt, and a context window, that takes turns with a user. The model in motion."
  - work: matt-pocock-ai-coding-dictionary
    page: Model
    url: https://www.aihero.dev/ai-coding-dictionary/model
    quote: "The parameters. Stateless — does next-token prediction and nothing else. Cannot do anything agentic on its own."
  - work: matt-pocock-ai-coding-dictionary
    page: Model
    url: https://www.aihero.dev/ai-coding-dictionary/model
    quote: "Everything that feels like an agent working — choosing tools, reading results, looping until the task is done — is the harness orchestrating many of those predictions in a row."
  - work: anthropic-building-effective-agents
    page: Agents
    quote: "Once the task is clear, agents plan and operate independently, potentially returning to the human for further information or judgement."
  - work: anthropic-building-effective-agents
    page: Agents
    quote: "During execution, it's crucial for the agents to gain “ground truth” from the environment at each step (such as tool call results or code execution) to assess its progress."
---
