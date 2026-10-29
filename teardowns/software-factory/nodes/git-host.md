---
term: Git host
aka: [code host, repository host, forge, GitHub]
kind: part
plain: A service that stores Git repositories and hosts their review objects, such as pull requests, checks and merge controls.
does: Turns workspace changes into a reviewable change and records the events and gates that govern merging.
ask: Where are the branch, diff, checks, review, identity, and merge decision recorded?
cues:
  - Repository, branch, and commit pages
  - A pull request with a diff and checks
  - A merge control beside required gates
range: All-in-one platform, suite module, self-hosted forge, review-first system, agent-native host, or Git storage used by a separate run service.
trouble: Runs cannot push, reviews are detached from the diff, checks are missing, or an identity can bypass merge controls.
children: [pull-request, bot-identity, branch-protection, webhook]
at: [2.75, 0.9, -0.15]
links:
  - {to: ticket-tracker, rel: see also}
  - {to: orchestrator, rel: see also}
variants:
  - label: Git host type
    items:
      - id: git-host-all-in-one
        name: All-in-one platform
        plain: Repository storage, code review, checks, and merge controls share one product surface.
        why: Pull requests and issues share the host's repository resources and controls.
        sources:
          - work: github-pull-requests-rest
            page: About pull requests
            quote: Pull requests are a type of issue. Any actions that are available in both pull requests and issues, like managing assignees, labels, and milestones, are handled by the REST API to manage issues.
          - work: github-protected-branches
            page: Require status checks before merging
            quote: After enabling required status checks, all required status checks must pass before collaborators can merge changes into the protected branch.
      - id: git-host-suite-module
        name: Suite module
        plain: Git hosting is one module in a larger development or work-management suite.
        why: The project surface combines files and tasks in one project.
        sources:
          - work: gitlab-projects
            page: Get started organizing work with projects
            quote: Projects in GitLab organize all the data for a specific development project. A project is where you work with your team, store your files, and manage your tasks.
      - id: git-host-self-hosted
        name: Self-hosted forge
        plain: The organization runs the repository and review service on its own infrastructure.
        why: Hosting, storage, and network policy stay under the organization's control.
        sources:
          - work: forgejo-installation-docker
            page: Installation with Docker
            quote: Forgejo provides container images for use with Docker or other containerization tools.
      - id: git-host-review-first
        name: Review-first host
        plain: Review records organize changes through patch sets, labels, and approvals.
        why: The host makes review state central to contribution.
        sources:
          - work: gerrit-patch-sets
            page: Patch Sets
            quote: When a change is approved, only the latest version of a commit is submitted to the repository.
          - work: gerrit-review-labels
            page: Review labels
            quote: Gerrit comes pre-configured with the Code-Review label that can be granted to groups within projects.
      - id: git-host-agent-native
        name: Agent-native host
        plain: The host gives automated actors bot identities, event triggers, and native review operations.
        why: Agents can act in the same review and merge surfaces as people.
        sources:
          - work: gitea-enterprise-agents
            page: Agents
            quote: Each agent is bound to its own bot account, and the agent name is the username of that bot. The bot can therefore be mentioned (@name), assigned to an issue or pull request, or requested as a reviewer like any other user.
          - work: gitea-enterprise-agents
            page: How agents work
            quote: The runner changes the code and pushes the branch to the target repository, while Gitea records the result and performs the follow-up actions, such as creating or updating pull requests, commenting, reviewing and merging.
          - work: gitea-enterprise-agents
            page: Agents
            quote: You create an agent once, pick the action it performs and the events that trigger it, and it then analyzes issues and pull requests, writes code, opens and maintains pull requests, reviews changes, or scans repositories for security problems.
      - id: git-host-run-storage
        name: Git storage for runs
        plain: Git repositories hold workflow definitions while another service executes their jobs.
        why: The host remains the source of code and workflow history.
        sources:
          - work: github-actions-workflow-syntax
            page: About YAML syntax for workflows
            quote: You must store workflow files in the `.github/workflows` directory of your repository.
sources:
  - work: github-pull-requests-rest
    page: About pull requests
    quote: Pull requests are a type of issue. Any actions that are available in both pull requests and issues, like managing assignees, labels, and milestones, are handled by the REST API to manage issues.
  - work: github-webhooks-about
    page: About webhooks on GitHub
    quote: When an event that your webhook is subscribed to occurs, GitHub will send an HTTP request with data about the event to the URL that you specified.
  - work: github-protected-branches
    page: Require status checks before merging
    quote: After enabling required status checks, all required status checks must pass before collaborators can merge changes into the protected branch.
---
