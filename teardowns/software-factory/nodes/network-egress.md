---
term: Network egress
aka: [outbound access, network allowlist, exit policy]
kind: knob
plain: The destinations and protocols a runner may reach outside its boundary. A policy can block all traffic, allow a short list, or route requests through a controlled proxy.
does: Reduces the paths a compromised task can use to fetch payloads or send data away.
ask: Which exact hosts must this task reach, and what happens to every other destination?
cues:
  - "An allowlist of hostnames in the runner or proxy settings"
  - "A proxy or firewall decision in the run log"
  - "A blocked outbound request with its host named"
range: "Prefer deny-all or a narrow domain or CIDR allowlist. Add package registries and source hosts only when the task needs them."
trouble: "The task cannot fetch a required dependency, reaches an unexpected host, or uses a broad route to exfiltrate data."
at: [0.95, 0.85, 0.65]
links:
  - {to: prompt-injection, rel: see also}
  - {to: secrets, rel: see also}
sources:
  - work: claude-code-sandboxing
    page: What the sandbox restricts
    quote: "Network | No direct route out. Connections go through a proxy on your machine that checks each host against your allowed domains, which start empty."
  - work: openai-hosted-sandboxes
    page: Control network access
    quote: "restricted | Allow only the hosts listed in `allowed_domains`."
  - work: daytona-isolation
    page: Network isolation
    quote: "each sandbox can be locked down further with one of three mutually exclusive settings: block all traffic, allow specific CIDR ranges, or allow specific domains."
---
