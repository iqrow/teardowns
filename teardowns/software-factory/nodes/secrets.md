---
term: Secrets
aka: [scoped credentials, runtime tokens, protected variables]
kind: part
plain: Credentials made available to a run through a controlled scope. The runner receives only the values and permissions the task needs.
does: Lets a run authenticate to required services while reducing the value of a stolen workspace or log.
ask: Which credential reaches this run, for how long, and can its value or authority leave the boundary?
cues:
  - "A named secret reference in the run configuration"
  - "A masked value in logs and a permissions scope"
  - "An OIDC or short-lived token exchange"
range: "Use repository, environment, or organization scopes. Prefer short-lived tokens and OIDC where the target supports it. A proxy can add the value to outgoing requests, so the agent uses the credential without seeing it."
trouble: "A secret is available to an untrusted change, appears in output, persists on disk, or grants more API access than the task needs."
at: [-0.95, 0.85, 0.65]
links:
  - {to: prompt-injection, rel: see also}
  - {to: network-egress, rel: see also}
sources:
  - work: github-actions-secrets
    page: Using secrets in a workflow
    quote: "With the exception of `GITHUB_TOKEN`, secrets are not passed to the runner when a workflow is triggered from a forked repository."
  - work: github-actions-secrets
    page: Using secrets in a workflow
    quote: "To provide an action with a secret as an input or environment variable, you can use the `secrets` context to access secrets you've created in your repository."
  - work: openai-hosted-sandboxes
    page: Set environment variables
    quote: "For secrets, use vault credentials to keep the real values outside the sandbox."
  - work: kody-docs
    page: Credentials
    url: https://kody.codes/docs/credentials
    quote: "Code names a credential. Kody puts the value into the outgoing request at the network boundary, only for the hosts that credential allows, and only over HTTPS. Agents, packages, logs, and tool output never see it."
  - work: kent-c-dodds-you-own-the-outcome
    page: Design the playground
    quote: "Agents should be able to use credentials without ever seeing them. This is non-negotiable once agents are acting on your behalf."
---
