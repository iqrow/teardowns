---
term: Agent trace
aka: [span tree, model trace, tool trace]
kind: measure
plain: A trace links one run's model requests, tool calls, and hooks into a parent-child timeline. It keeps the agent's internal path attached to the run.
does: Shows where the model waited, which tool acted, and which child operation caused a failure or cost.
ask: Which model call or tool span changed the run's outcome?
cues:
  - "A root interaction span with nested model and tool spans"
  - "Span duration, status, model, tool name, and run identifier"
  - "A trace link from the run page to the telemetry backend"
range: Record a root interaction span with child model, tool, and hook spans. Keep prompts, tool arguments, and results opt-in and redacted by default.
trouble: "Spans start new traces, tool calls are missing, retries are invisible, or sensitive content is recorded without a policy."
at: [0, 0.34, 0.2]
links:
  - {to: run-log, rel: see also}
  - {to: token-cost, rel: see also}
sources:
  - work: claude-code-monitoring
    page: Span hierarchy
    quote: "Each user prompt starts a `claude_code.interaction` root span. API calls, tool calls, and hook executions are recorded as its children."
  - work: langfuse-data-model
    page: Observations and Traces
    quote: "A `trace` represents a single request or operation, for example one chatbot interaction from the user's question to the final response."
  - work: matt-pocock-ai-coding-dictionary
    page: Tool call
    url: https://www.aihero.dev/ai-coding-dictionary/tool-call
    quote: "The model's output naming a tool and its arguments — just structured text. The harness has to read it and execute."
  - work: matt-pocock-ai-coding-dictionary
    page: Model provider request
    url: https://www.aihero.dev/ai-coding-dictionary/model-provider-request
    quote: "One round-trip from the harness to the model provider. The harness sends the current context; the provider returns one response (a tool call or a final answer)."
---
