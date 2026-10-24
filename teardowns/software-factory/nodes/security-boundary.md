---
term: Security boundary
aka: [trust boundary, agent containment, blast-radius control]
kind: part
plain: The set of gates around a run that separate trusted factory services from task input, tools, data, and side effects. It combines isolation, identity, least privilege, and outbound controls.
does: Limits what hostile text or a compromised task can read, change, or transmit.
ask: If the task follows an attacker instruction, which layer stops the next harmful action?
cues:
  - "Isolation, token-scope and network settings in the runner configuration"
  - "Separate permission scopes for read, write, and publish actions"
  - "Blocked actions and approval gates on the run page"
range: "Use several independent gates: disposable environment, egress policy, scoped secrets, least-privilege identity, and human approval for high-risk actions."
trouble: "A ticket or PR can steer a run into private data, a powerful token, and an external channel in one path."
at: [0, 1.62, 0.85]
children: [prompt-injection, least-privilege]
links:
  - {to: network-egress, rel: see also}
  - {to: secrets, rel: see also}
  - {to: bot-identity, rel: see also}
pattern: pattern-defense-in-depth
sources:
  - work: simon-willison-lethal-trifecta
    page: The lethal trifecta
    quote: "If your agent combines these three features, an attacker can **easily trick it** into accessing your private data and sending it to that attacker."
  - work: owasp-llm01-prompt-injection
    page: Prevention and Mitigation Strategies
    quote: "Restrict the model’s access privileges to the minimum necessary for its intended operations."
  - work: owasp-llm01-prompt-injection
    page: Prevention and Mitigation Strategies
    quote: "Implement human-in-the-loop controls for privileged operations to prevent unauthorized actions."
  - work: building-secure-reliable-systems
    page: Design for Resilience
    url: https://google.github.io/building-secure-and-reliable-systems/raw/ch08.html
    quote: "When you use compartmentalization, however, a security breach or traffic overload in one compartment does not jeopardize all of the compartments."
  - work: matt-pocock-ai-coding-dictionary
    page: Sandbox
    url: https://www.aihero.dev/ai-coding-dictionary/sandbox
    quote: "Limits the blast radius of agent actions"
  - work: matt-pocock-ai-coding-dictionary
    page: Sandbox
    url: https://www.aihero.dev/ai-coding-dictionary/sandbox
    quote: "The safety substrate that makes AFK practical."
---
