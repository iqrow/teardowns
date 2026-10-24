---
term: Token cost
aka: [run spend, model cost, usage cost]
kind: measure
plain: The money spent by one run on model input, model output, cached tokens, and related calls. It is attributed to a run, task, repository, or team.
does: Shows whether a task's value justifies its model usage and reveals runaway retries or oversized context.
ask: What did this run spend, and which model call or retry caused the bill?
cues:
  - "Input, output, and cached token counts beside a model call"
  - "A currency total attached to a run or task"
  - "A spend header, budget meter, or cost report"
range: "Report input and output tokens separately, then apply the provider's current rates. Aggregate by run, task, model, repository, and team."
trouble: "A run has tokens but no price, retries inflate spend, cost is assigned to the wrong task, or prompt content is logged to measure usage."
at: [0.75, 0.34, 0.2]
links:
  - {to: agent-trace, rel: measured by}
  - {to: run-log, rel: see also}
sources:
  - work: claude-code-monitoring
    page: Span attributes
    quote: "`input_tokens` | Input token count from the API usage block."
  - work: opentelemetry-genai-agent-spans
    page: Invoke agent client span attributes
    quote: "The number of tokens used in the GenAI input (prompt)."
  - work: opentelemetry-genai-agent-spans
    page: Invoke agent client span attributes
    quote: "The number of tokens used in the GenAI response (completion)."
  - work: litellm-spend-tracking
    page: How to Track Spend with LiteLLM
    quote: "Expect to see `x-litellm-response-cost` in the response headers with calculated cost"
  - work: litellm-spend-tracking
    page: How to Track Spend with LiteLLM
    quote: "LiteLLM automatically tracks spend for all known models."
---
