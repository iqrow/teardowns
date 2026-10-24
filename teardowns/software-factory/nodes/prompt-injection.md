---
term: Prompt injection
aka: [hostile ticket text, indirect instruction, untrusted content attack]
kind: concept
plain: An attacker places instructions in a ticket, PR, document, web page, or tool result that the model may treat as factory instructions. The attack uses the run's authority rather than changing the model itself.
does: Turns ordinary input into a path toward data disclosure, unauthorized tool use, or unwanted changes.
ask: What untrusted text can this run read, and what action could that text cause?
cues:
  - "A ticket or PR body containing instructions aimed at the agent"
  - "A tool result that asks the agent to ignore its task"
  - "A run that reads private data and has an outbound channel"
range: "Direct injection arrives in the user request. Indirect injection arrives through external content such as a web page, file, ticket, or pull request."
trouble: "The run follows content as a command, exposes a secret, changes unrelated files, or sends data to an attacker-controlled destination."
at: [-0.75, 0.35, 0.17]
links:
  - {to: network-egress, rel: see also}
  - {to: secrets, rel: see also}
sources:
  - work: simon-willison-lethal-trifecta
    page: The problem is that LLMs follow instructions in content
    quote: "The problem is that they don’t just follow *our* instructions. They will happily follow *any* instructions that make it to the model, whether or not they came from their operator or from some other source."
  - work: simon-willison-lethal-trifecta
    page: The lethal trifecta
    quote: "If your agent combines these three features, an attacker can **easily trick it** into accessing your private data and sending it to that attacker."
  - work: owasp-llm01-prompt-injection
    page: Indirect Prompt Injections
    quote: "Indirect prompt injections occur when an LLM accepts input from external sources, such as websites or files."
  - work: owasp-llm01-prompt-injection
    page: Prevention and Mitigation Strategies
    quote: "Separate and clearly denote untrusted content to limit its influence on user prompts."
  - work: owasp-llm-top10
    page: "LLM01:2025 Prompt Injection"
    url: https://genai.owasp.org/llmrisk/llm01-prompt-injection/
    quote: "A Prompt Injection Vulnerability occurs when user prompts alter the LLM’s behavior or output in unintended ways."
---
