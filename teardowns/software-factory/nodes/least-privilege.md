---
term: Least privilege
aka: [minimum permissions, narrow token scope, permissions block]
kind: knob
plain: The smallest set of identities, API scopes, files, and actions a run needs to finish its task. Every omitted permission is a deliberate barrier.
does: Shrinks the blast radius when a tool, dependency, or model decision is wrong or compromised.
ask: Which exact read, write, publish, and cloud actions does this task require?
cues:
  - "A permissions block with read and write scopes named"
  - "A token that expires with the job"
  - "A denied API call for an omitted scope"
range: "Start with no permissions or contents: read, then add one job-level scope at a time. Keep publish, deploy, and identity-token access separate."
trouble: "A read-only task can push code, a token reaches unrelated repositories, or a broad permission is inherited by every job."
at: [0.75, 0.35, 0.17]
links:
  - {to: bot-identity, rel: controls}
  - {to: secrets, rel: see also}
sources:
  - work: github-actions-token
    page: Using the GITHUB_TOKEN in a workflow
    quote: "As a good security practice, you should always make sure that actions only have the minimum access they require by limiting the permissions granted to the `GITHUB_TOKEN`."
  - work: github-actions-token
    page: Modifying the permissions for the GITHUB_TOKEN
    quote: "As a good security practice, you should grant the `GITHUB_TOKEN` the least required access."
  - work: owasp-llm01-prompt-injection
    page: Prevention and Mitigation Strategies
    quote: "Restrict the model’s access privileges to the minimum necessary for its intended operations."
  - work: building-secure-reliable-systems
    page: Design for Least Privilege
    url: https://google.github.io/building-secure-and-reliable-systems/raw/ch05.html
    quote: "The objective of least privilege should extend through all authentication and authorization layers of the system."
---
