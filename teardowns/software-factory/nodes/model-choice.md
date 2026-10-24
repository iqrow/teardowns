---
term: Model choice
aka:
  - model routing
  - capability tier
kind: knob
plain: The policy that routes tasks to different model categories or tiers by difficulty and cost. Work that has become routine can run as plain code with no model.
does: Matches model capability and spend to the task and its risk.
ask: Which model can finish this task reliably, and what evidence justifies the cost?
cues:
  - A model name or tier in the run record
  - A routing rule that sends easy and hard tasks to different models
  - Cost and latency split by model choice
range: Smaller, cost-efficient models for easy or common work; more capable models for hard or unusual work; no model for work already turned into code.
trouble: A poor route sends distinct task categories to one model, wasting cost or reducing performance.
at: [-0.5, 0.28, 0.15]
links:
  - {to: token-cost, rel: measured by}
  - {to: automated-review, rel: see also}
sources:
  - work: anthropic-building-effective-agents
    page: "Workflow: Routing"
    quote: "Routing easy/common questions to smaller, cost-efficient models like Claude Haiku 4.5 and hard/unusual questions to more capable models like Claude Sonnet 4.5 to optimize for best performance."
  - work: kody-docs
    page: About Kody
    url: https://kody.codes/about
    quote: "Your connected agent does the thinking; Kody holds the durable result so the work can run again without another model in the loop."
---
