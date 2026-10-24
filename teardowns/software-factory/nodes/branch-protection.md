---
term: Branch protection
aka: [merge gate, protected branch, ruleset, required checks]
kind: knob
plain: Rules that constrain updates to important branches and require selected checks, reviews, or other conditions before merge.
does: Stops a passing-looking run or actor from changing the shared branch without the required evidence.
ask: Which branch is protected, which checks and approvals are required, and who can bypass them?
cues:
  - A protected-branch or ruleset settings page
  - Required checks and approval counts in a merge box
  - A blocked merge message
range: Required checks, required approvals, code-owner review, signed commits, linear history, merge queue, deployment gates, and bypass lists.
trouble: A check name is ambiguous, rules overlap, approvals go stale, or an administrator can bypass a gate without a recorded reason.
at: [0.32, 0.42, 0.06]
links:
  - {to: pull-request, rel: controls}
  - {to: bot-identity, rel: see also}
sources:
  - work: github-protected-branches
    page: About branch protection rules
    quote: You can protect important branches by setting branch protection rules, which define whether collaborators can delete or force push to the branch and set requirements for any pushes to the branch, such as passing status checks or a linear commit history.
  - work: github-protected-branches
    page: Require status checks before merging
    quote: Required status checks must have a `successful`, `skipped`, or `neutral` status before collaborators can make changes to a protected branch.
  - work: github-protected-branches
    page: About branch protection rules
    quote: Only a single branch protection rule can apply at a time, which means it can be difficult to know which rule will apply when multiple versions of a rule target the same branch. This restriction does not apply to rulesets
---
