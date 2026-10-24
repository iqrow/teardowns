---
term: Runner
aka: [worker, execution environment, build machine, server, box, sandbox]
kind: part
plain: The disposable machine or container that executes one run. It supplies the filesystem, tools, network path, and credentials that the task can reach.
does: Turns a queued run into an isolated working copy and returns its files, status, and evidence.
ask: What can this run reach, and what survives when it ends?
cues:
  - "The runner image, machine size, and status appear on the run page"
  - "A fresh workspace path and a run timer"
  - "Runner labels or a sandbox provider on the run page"
range: "One runner per run is the safe default. Choose a CI worker, a sandbox API, a bundled agent platform, a worker you operate, your own container cluster, or a local worktree for a few runs on one machine."
trouble: "Two runs share files or credentials, a worker stays alive after failure, or a task depends on state from an earlier run."
children: [disposable-environment, run-timeout, cache, network-egress, secrets, security-boundary]
at: [0, 0.6, 0.3]
variants:
  - label: Runner type
    items:
      - id: ci-runner
        name: CI runner
        plain: A hosted CI service runs each job on a fresh instance of a runner image.
        why: The CI provider hosts the worker and starts a new one for every job.
        sources:
          - work: github-actions-runner
            page: Choosing GitHub-hosted runners
            quote: "If you use a GitHub-hosted runner, each job runs in a fresh instance of a runner image specified by `runs-on`."
      - id: microvm-sandbox-api
        name: MicroVM sandbox API
        plain: An API creates a strong isolation boundary for code, then destroys or pauses the sandbox by policy.
        why: The service exposes a sandbox boundary as an API call.
        sources:
          - work: e2b-security
            page: Isolation and tenancy
            quote: "Every E2B sandbox runs in its own Firecracker microVM with its own kernel. Isolation is at the hypervisor boundary, not the container or process boundary"
      - id: bundled-agent-platform
        name: Bundled agent platform
        plain: The agent service provisions a Linux workspace, runs the task, and returns its artifacts through one product surface.
        why: Agent execution and environment provisioning arrive as one managed service.
        sources:
          - work: openai-hosted-sandboxes
            page: OpenAI-hosted sandboxes
            quote: "An OpenAI-hosted sandbox gives your agent a Linux workspace with Python, Node.js, and command-line tools. OpenAI provisions and connects it; your application supplies the task and retrieves the results."
      - id: bring-your-own-worker
        name: Bring-your-own worker
        plain: You register a machine you operate as a self-hosted runner and choose its labels, image, and cleanup.
        why: The operator supplies the host while the orchestrator still assigns jobs.
        sources:
          - work: github-self-hosted-runners
            page: Requirements for self-hosted runner machines
            quote: "You can use a machine as a self-hosted runner as long as it meets these requirements"
      - id: own-vps-containers
        name: Own container cluster
        plain: You run ephemeral runners on a container cluster you operate. A controller such as Actions Runner Controller creates a runner for each job and cleans it up afterwards.
        why: The operator owns the cluster that hosts the runners, and automation gives each job a clean environment.
        sources:
          - work: github-self-hosted-runners
            page: Actions Runner Controller
            quote: "ARC handles the full lifecycle of runners within your cluster, from provisioning to job execution to cleanup."
          - work: github-self-hosted-runners
            page: Ephemeral runners for autoscaling
            quote: "This approach allows you to manage your runners as ephemeral systems, since you can use automation to provide a clean environment for each job."
      - id: local-worktree
        name: Local worktree
        plain: The run works in its own git worktree on a developer's machine, with its own files and branch. Files are isolated, while the machine, its ports and its credentials stay shared, so a laptop holds only a few runs at once.
        why: The worktree isolates the working copy, and nothing else.
        sources:
          - work: claude-code-worktrees
            page: Run parallel sessions with worktrees
            quote: "A git worktree is a separate working directory with its own files and branch"
          - work: lauren-tan-pstack
            page: Give parallel work its own machine
            url: https://raw.githubusercontent.com/cursor/plugins/9580c23696ac8d7abed0c166f2f9918800afb819/pstack/docs/guide/02-poteto-mode.md
            quote: "Worktrees cost disk and machine resources, so a laptop runs only a handful at once."
sources:
  - work: github-actions-runner
    page: Choosing GitHub-hosted runners
    quote: "If you use a GitHub-hosted runner, each job runs in a fresh instance of a runner image specified by `runs-on`."
  - work: github-self-hosted-runners
    page: Ephemeral runners for autoscaling
    quote: "With ephemeral runners, this can be guaranteed because GitHub only assigns one job to a runner."
  - work: e2b-security
    page: Isolation and tenancy
    quote: "Sandboxes are destroyed on timeout or shutdown. Filesystem and memory state can be preserved across a pause and restored on resume."
  - work: daytona-isolation
    page: Isolation
    quote: "Daytona sandboxes are isolated by default. Code running in a sandbox cannot read another sandbox’s filesystem or memory, is not on a shared network with other sandboxes, and its credentials and API access are scoped to its own organization."
  - work: modal-sandboxes
    page: Sandboxes
    quote: "Sandboxes have a default maximum lifetime of 5 minutes. You can change this by passing a `timeout` of up to 24 hours to the `Sandbox.create(...)` function."
  - work: vercel-sandbox
    page: Run agent-generated code in isolation
    quote: "Run untrusted or agent-generated code in isolated Linux microVMs. Use Vercel Sandbox for agent workflows, debugging, and one-off commands."
  - work: matt-pocock-ralph-tips
    page: 9. Use Docker Sandboxes
    quote: "This runs Claude Code inside a container. Your current directory is mounted, but nothing else."
---
