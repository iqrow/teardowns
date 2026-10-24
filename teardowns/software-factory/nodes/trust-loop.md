---
term: Trust loop
aka:
  - earned autonomy
  - opening the throttle
kind: loop
plain: What human review catches becomes new checks, sharper instructions and stronger verification. Fewer bad pull requests reach a person and more merge on evidence, so the team widens the merge policy to the next risk class and the human review queue shrinks. Growth levels off at the work that stays high-risk, where a person still reads the diff.
does: Explains how a factory moves from human review on every pull request to level 4, where evidence carries low-risk work and people review only what needs them.
ask: Which evidence earned the last widening of the merge policy, and what signal would narrow it again?
trouble: The merge policy widens on hope instead of evidence, and defects reach production that a person would have caught.
loop:
  type: s-curve
  through:
    - human-review
    - automated-checks
    - merge-rate
    - merge-policy
    - review-queue
sources:
  - work: donella-meadows-leverage-points
    page: 8. The strength of negative feedback loops
    quote: "Negative feedback loops are ubiquitous in systems. Nature evolves them and humans invent them as controls to keep important system states within safe bounds."
  - work: addy-osmani-agentic-code-review
    page: Should we just let AI review more of it?
    quote: "How much human you keep is a dial, and you set it by blast radius, not by guilt."
  - work: github-copilot-task-practices
    page: Adding custom instructions to your repository
    quote: "If Copilot is able to build, test and validate its changes in its own development environment, it is more likely to produce good pull requests which can be merged quickly."
  - work: anthropic-building-effective-agents
    page: Combining and customizing these patterns
    quote: "the key to success, as with any LLM features, is measuring performance and iterating on implementations."
  - work: lauren-tan-pstack
    page: pstack
    url: https://raw.githubusercontent.com/cursor/plugins/9580c23696ac8d7abed0c166f2f9918800afb819/pstack/README.md
    quote: "when you can go deep on one agent and trust it to write good, verifiable code, you can truly parallelize with confidence."
  - work: lauren-tan-pstack
    page: Earn the trust before the loop
    url: https://raw.githubusercontent.com/cursor/plugins/9580c23696ac8d7abed0c166f2f9918800afb819/pstack/docs/guide/07-overnight.md
    quote: "A loop you don't trust just produces unchecked work faster, and the mess compounds with every iteration."
  - work: matt-pocock-software-factory-skill
    page: Start slow
    quote: "a human reads the PR before it merges; what it catches becomes new automated checks and sharper automated review."
  - work: matt-pocock-software-factory-skill
    page: Start slow
    quote: "Open the throttle as the brakes earn trust, and cap every loop of runs at a few tries before a human."
  - work: lauren-tan-noodle
    page: docs/concepts/modes.md
    url: https://raw.githubusercontent.com/poteto/noodle/82d2921c52370f23f29086de81ccfb600939c037/docs/concepts/modes.md
    quote: "A mature project with good tests can run in auto. A new project starts in supervised. Critical infrastructure stays in manual. Move the dial as trust builds."
---
