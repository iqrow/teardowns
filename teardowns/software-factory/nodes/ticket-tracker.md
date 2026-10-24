---
term: Ticket tracker
aka: [issue tracker, work board, backlog, project board]
kind: part
plain: A service that records work items and their state. It is the factory's durable queue and its human-facing record.
does: Holds the task request, ownership, routing state, and links to discussion so runs can return to the same work.
ask: Can a run find one clear task, update its state, and leave a useful record for the next run?
cues:
  - Board columns or status pills
  - A ticket detail page with title and body
  - Assignee, labels, and activity controls
range: Built into a git host, a dedicated tracker, a self-hosted tracker, a general work tool, files in a repository, or a custom service.
trouble: Tickets are duplicated, stale, unowned, or routed to a task that cannot act on them.
children: [ticket, ticket-source, routing-label, comment-thread]
at: [-2.75, 0.95, -0.15]
links:
  - {to: git-host, rel: see also}
  - {to: comment-thread, rel: see also}
variants:
  - label: Tracker type
    items:
      - id: tracker-git-host-built-in
        name: Git-host built-in
        plain: Issues live beside the repository, pull requests, labels, and checks on one host.
        why: The tracker shares the code host's identity and event stream.
        sources:
          - work: github-pull-requests-rest
            page: About pull requests
            quote: Pull requests are a type of issue. Any actions that are available in both pull requests and issues, like managing assignees, labels, and milestones, are handled by the REST API to manage issues.
          - work: github-webhooks-about
            page: About webhooks on GitHub
            quote: When an event that your webhook is subscribed to occurs, GitHub will send an HTTP request with data about the event to the URL that you specified.
      - id: tracker-agent-api
        name: Developer tracker with agent API
        plain: A dedicated development tracker exposes agents as workspace actors that can be assigned issues and write comments.
        why: The tracker gives an agent a first-class identity and delegation path.
        sources:
          - work: linear-agents
            page: Overview
            quote: Agents behave similar to other users in a workspace. They can be @mentioned, delegated issues through assignment, create and reply to comments, collaborate on projects and documents, etc.
      - id: tracker-self-hosted
        name: Self-hosted open source
        plain: A tracker is run and operated by the team that owns the factory.
        why: The team controls its deployment, storage, and integrations.
        sources:
          - work: forgejo-installation-docker
            page: Installation with Docker
            quote: Forgejo provides container images for use with Docker or other containerization tools.
      - id: tracker-general-work-tool
        name: General work tool
        plain: A broad work-management product stores work items and can react to their changes.
        why: The product exposes task events that automation can consume.
        sources:
          - work: jira-automation-triggers
            page: Jira automation triggers
            quote: Triggers will listen for events in Jira, such as when a work item is created or when a field value is changed.
      - id: tracker-repo-files
        name: Tickets as files in the repository
        plain: Each request is a versioned file or record next to the code.
        why: The repository itself becomes the durable task store.
        sources:
          - work: backlog-md-readme
            page: README
            quote: Backlog.md turns any folder into a self-contained project board powered by plain Markdown files and a zero-config CLI.
      - id: tracker-build-your-own
        name: Build your own
        plain: A small service owns its records and emits change events.
        why: Its records can emit events that downstream automation consumes.
        sources:
          - work: airtable-webhooks
            page: Webhooks API overview
            quote: The Webhooks API allows developers to be notified in real-time about changes in their base that they care about, from newly created records to a field being updated in an existing record.
sources:
  - work: gitlab-issues
    page: Issues
    quote: Issues help you collaborate with your team to plan, track, and deliver work in GitLab.
  - work: linear-agents
    page: Agent session lifecycle
    quote: Session state is visible to users, and updated automatically based on the agent's emitted activities.
---
