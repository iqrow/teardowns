---
term: Permission mode
aka:
  - approval mode
  - tool approval setting
  - auto-approve policy
kind: knob
plain: The setting that decides which tool calls run automatically and which stop for a permission request.
does: An AFK run has nobody to answer a permission request, so pre-approve safe tools and let the sandbox contain what those tools can reach.
ask: Which tool calls may run unattended, and which must wait for a person?
cues:
  - A mode selector such as read-only, default, auto-edit, or full-auto
  - An allowed-tools list in a headless command
  - A paused run showing a permission request
range: "Read-only / plan: reads auto, writes and shell blocked; Default: reads auto, writes ask; Auto-edit: edits auto, shell asks; Full-auto: reads, writes and shell auto."
trouble: "A run waits on a person who is away, or a loose mode lets an agent edit files and run commands you meant to review first."
at: [0.55, 0.86, 0.14]
links:
  - {to: security-boundary, rel: see also}
  - {to: least-privilege, rel: see also}
sources:
  - work: matt-pocock-ai-coding-dictionary
    page: Permission mode
    url: https://www.aihero.dev/ai-coding-dictionary/permission-mode
    quote: "The permission-gating slice of an agent mode — which tool calls trigger a permission request and which run automatically."
  - work: matt-pocock-ai-coding-dictionary
    page: Permission mode
    url: https://www.aihero.dev/ai-coding-dictionary/permission-mode
    quote: "Read-only / plan | Auto | Blocked | Research, planning, reviewing"
  - work: matt-pocock-ai-coding-dictionary
    page: Permission mode
    url: https://www.aihero.dev/ai-coding-dictionary/permission-mode
    quote: "Default | Auto | Ask | Day-to-day supervised work"
  - work: matt-pocock-ai-coding-dictionary
    page: Permission mode
    url: https://www.aihero.dev/ai-coding-dictionary/permission-mode
    quote: "Auto-edit | Auto | Edits auto, shell asks | Trusted repos, mechanical changes"
  - work: matt-pocock-ai-coding-dictionary
    page: Permission mode
    url: https://www.aihero.dev/ai-coding-dictionary/permission-mode
    quote: "\"Yolo\" / full-auto | Auto | Auto | Sandboxes, AFK runs"
  - work: matt-pocock-ai-coding-dictionary
    page: Permission request
    url: https://www.aihero.dev/ai-coding-dictionary/permission-request
    quote: "The model produces a tool call; instead of running it immediately, the harness pauses and asks."
  - work: matt-pocock-ai-coding-dictionary
    page: AFK
    url: https://www.aihero.dev/ai-coding-dictionary/afk
    quote: "Usually requires a permissive permission mode plus sandboxing to be safe."
  - work: matt-pocock-ai-coding-dictionary
    page: Sandbox
    url: https://www.aihero.dev/ai-coding-dictionary/sandbox
    quote: "The safety substrate that makes AFK practical."
  - work: matt-pocock-ai-coding-dictionary
    page: Sandbox
    url: https://www.aihero.dev/ai-coding-dictionary/sandbox
    quote: "Permissions ask before an action runs; a sandbox limits what the action can reach if it does run."
  - work: matt-pocock-ai-coding-dictionary
    page: Permission mode
    url: https://www.aihero.dev/ai-coding-dictionary/permission-mode
    quote: "Too loose, and the agent edits files and runs commands you'd have wanted to see first."
  - work: matt-pocock-ai-coding-dictionary
    page: Permission request
    url: https://www.aihero.dev/ai-coding-dictionary/permission-request
    quote: "The agent sits blocked until you answer, which is fine while you're watching and a problem when you're not."
  - work: anthropic-claude-code-headless
    page: Start faster with bare mode
    quote: "This example runs a one-off summarize task in bare mode and pre-approves the Read tool so the call completes without a permission prompt:"
---
