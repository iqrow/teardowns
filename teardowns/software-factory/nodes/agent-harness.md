---
term: Agent harness
aka:
  - headless agent loop
  - coding-agent runner
  - harness
kind: part
plain: The program around a model that drives an agent loop in a run. It supplies tools, a system prompt, context-window management, permissions, and hooks, executes the model's tool calls, and returns results in a non-interactive run.
does: Makes an agent loop repeatable inside a non-interactive run.
ask: Which tools can the agent call, what can it change, and how does the harness know the run is finished?
cues:
  - A headless command with an explicit prompt and allowed tools
  - Tool calls and their results in a run log
  - A non-zero exit or structured result when the run fails
at: [0, 0.62, 0.1]
links:
  - {to: model-choice, rel: controls}
  - {to: instructions, rel: see also}
  - {to: security-boundary, rel: see also}
sources:
  - work: anthropic-claude-code-headless
    page: Run Claude Code programmatically
    quote: "To run Claude Code in non-interactive mode, pass `-p` with your prompt and the CLI options you need:"
  - work: anthropic-claude-code-best-practices
    page: Give Claude a way to verify its work
    quote: "Claude does the work, runs the check, reads the result, and iterates until the check passes."
  - work: theo-browne-what-is-a-harness
    page: LLMs use harnesses
    quote: "A system that parses the message to identify that syntax and run the code … A method to give the response from the tool back to the LLM"
  - work: theo-browne-what-is-a-harness
    page: Isn't Claude Code a harness?
    quote: "Claude Code has 2 parts: the interface and the harness"
  - work: matt-pocock-ai-coding-dictionary
    page: Harness
    url: https://www.aihero.dev/ai-coding-dictionary/harness
    quote: "Everything around the model that turns it into an agent: tools, system prompt, context-window management, permissions, hooks."
---
