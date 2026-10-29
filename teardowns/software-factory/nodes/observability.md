---
term: Observability platform
aka: [run telemetry, execution visibility, tracing backend, logs, monitoring, dashboard]
kind: part
plain: The optional place where a factory records run status, logs, traces, token use and cost, and shows the factory's metrics. The orchestrator's run page may be enough for a small factory. Software reads the signals first, and a person is called only when they need to act.
does: Makes failures, slow steps, tool calls, and spend visible across many runs.
ask: What must a human learn from one failed run, and what must they compare across runs?
cues:
  - "A run page with status, logs, artifacts, and timestamps"
  - "A trace tree linking model calls and tool calls"
  - "A dashboard for token use, cost, latency, or error rate"
range: "Choose no extra platform, LLM or agent tracing, general APM, or an LLM gateway with usage accounting."
trouble: "A run fails without a useful log, spans cannot join to the run, sensitive prompts leak into telemetry, or spend cannot be assigned to a task."
at: [1.55, 1.65, -0.5]
children: [run-log, agent-trace, token-cost, factory-metrics]
variants:
  - label: Platform type
    items:
      - id: none
        name: None
        plain: The orchestrator's own run records serve as the telemetry. A person can view each run and its logs, and re-run or cancel it, with no other platform.
        why: The run records answer the factory's operational questions without a separate telemetry platform.
        sources:
          - work: github-actions-workflow-runs
            page: About workflow runs in GitHub Actions
            quote: You can use the REST API to view, re-run, cancel, and view logs for workflow runs in GitHub Actions.
      - id: llm-agent-tracing
        name: LLM or agent tracing
        plain: A tracing product records LLM calls, tool calls, retrieval steps, and other observations.
        why: It shows the tool path inside an LLM run.
        sources:
          - work: langfuse-data-model
            page: Observations and Traces
            quote: "Observations are the individual steps of your application: LLM calls, tool calls, retrieval steps, and so on."
      - id: general-apm
        name: General APM
        plain: A telemetry backend collects signals such as traces, metrics, and logs for the runner and its services.
        why: It covers signal types beyond model-specific events.
        sources:
          - work: opentelemetry-signals
            page: Signals
            quote: Signals are system outputs that describe the underlying activity of the operating system and applications running on a platform.
      - id: llm-gateway
        name: LLM gateway
        plain: A model gateway records usage and spend for requests.
        why: It attributes usage centrally on the model request path.
        sources:
          - work: litellm-spend-tracking
            page: Spend Tracking
            quote: Track spend for keys, users, and teams across 100+ LLMs.
sources:
  - work: claude-code-monitoring
    page: Monitoring
    quote: "Track Claude Code usage, costs, and tool activity across your organization by exporting telemetry data through OpenTelemetry (OTel)."
  - work: opentelemetry-signals
    page: Signals
    quote: "The purpose of OpenTelemetry is to collect, process, and export signals."
  - work: phoenix-llm-tracing
    page: "Overview: Tracing"
    quote: "LLM tracing records the paths taken by requests as they propagate through multiple steps or components of an LLM application."
  - work: site-reliability-engineering
    page: Chapter 1, Introduction
    url: https://sre.google/sre-book/introduction/
    quote: "Monitoring is one of the primary means by which service owners keep track of a system’s health and availability."
  - work: site-reliability-engineering
    page: Chapter 1, Introduction
    url: https://sre.google/sre-book/introduction/
    quote: "Monitoring should never require a human to interpret any part of the alerting domain. Instead, software should do the interpreting, and humans should be notified only when they need to take action."
  - work: matt-pocock-software-factory-skill
    page: Services
    quote: "Where runners send logs, traces and status, so a human can see what happened inside each run."
---
