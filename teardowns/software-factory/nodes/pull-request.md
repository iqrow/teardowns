---
term: Pull request
aka: [PR, merge request, MR, change proposal]
kind: part
plain: A proposed change from one branch or repository into another, with a diff, discussion, checks, and a merge decision.
does: Gives automated and human reviewers one stable object to inspect before code reaches the protected branch.
ask: What changed, which checks and reviews passed, and who may merge it?
cues:
  - Source and target branch names
  - A file diff with review comments
  - Check results and a Merge button
range: Draft or ready, one commit or many, same repository or fork, mergeable or blocked.
trouble: The diff changes after approval, checks are stale, review comments are lost, or the request has no clear base branch.
at: [-0.3, 0.55, 0.06]
links:
  - {to: branch-protection, rel: controls}
  - {to: bot-identity, rel: see also}
  - {to: comment-thread, rel: see also}
sources:
  - work: github-pull-requests-rest
    page: About pull requests
    quote: You can list, view, edit, create, and merge pull requests using the REST API.
  - work: github-protected-branches
    page: Require status checks before merging
    quote: After enabling required status checks, all required status checks must pass before collaborators can merge changes into the protected branch.
---
