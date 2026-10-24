---
term: Disposable environment
aka: [ephemeral runner, clean workspace, one-shot worker]
kind: concept
plain: A fresh environment is created for one run and then wiped or discarded. The run carries its durable state through the ticket tracker, git host, and orchestrator.
does: Limits cross-run contamination and gives each task a repeatable starting point.
ask: What evidence shows that this workspace began clean and will be removed?
cues:
  - "A new runner identifier on every run"
  - "A workspace creation and teardown event"
  - "No previous run files in the checkout"
range: "One job per ephemeral runner is the usual boundary. A cache or artifact store may outlive the workspace by explicit policy."
trouble: "Credentials, untracked files, or processes from an earlier run appear in a later run."
at: [0, 1.2, 0.6]
pattern: pattern-stateless-worker
sources:
  - work: github-actions-runner
    page: Choosing GitHub-hosted runners
    quote: "If you use a GitHub-hosted runner, each job runs in a fresh instance of a runner image specified by `runs-on`."
  - work: github-self-hosted-runners
    page: Ephemeral runners for autoscaling
    quote: "This approach allows you to manage your runners as ephemeral systems, since you can use automation to provide a clean environment for each job."
  - work: e2b-security
    page: Isolation and tenancy
    quote: "Sandboxes are destroyed on timeout or shutdown. Filesystem and memory state can be preserved across a pause and restored on resume."
---
