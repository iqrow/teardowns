---
term: Bot identity
aka: [bot account, GitHub App, service account, automation token]
kind: part
plain: The app, bot account, or token under which a run reads, writes, comments, and opens changes.
does: Makes actions attributable and gives the host a place to apply permissions and event-recursion rules.
ask: Which actor made this change, which permissions does it have, and can its events start another run?
cues:
  - An author avatar or bot badge
  - An app name in an event or check
  - Token permission settings or an installation record
range: Repository token, app installation token, service account, or personal token used for automation.
trouble: The actor has broad write access, actions are anonymous, or a token silently suppresses or causes recursive events.
at: [0.24, 1.02, 0.06]
links:
  - {to: least-privilege, rel: see also}
  - {to: webhook, rel: see also}
sources:
  - work: github-actions-triggering-workflow
    page: Triggering a workflow from a workflow
    quote: When you use the repository's GITHUB_TOKEN to perform tasks, events triggered by the GITHUB_TOKEN will not create a new workflow run, with the following exceptions.
  - work: github-actions-token
    page: Modifying the permissions for the GITHUB_TOKEN
    quote: As a good security practice, you should grant the GITHUB_TOKEN the least required access.
---
