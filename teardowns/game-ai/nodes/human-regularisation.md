---
term: "Human regularisation"
aka: [human regularization, KL regularisation, KL-regularized search, piKL, anchor policy]
kind: knob
plain: "A setting that penalises search for moving too far from a policy learned from human play, while still allowing a higher-value order mix."
does: "Controls the trade between human-compatible behaviour and raw game value, so the AI can be strong without becoming alien or impossible to read."
ask: "How much expected value may search gain before it is no longer worth departing from the human anchor?"
cues: ["A slider or lambda value labelled human-like to strongest", "Search choices stay near anchor probabilities at high regularisation", "The chosen order differs from the anchor when its value gain clears the penalty"]
range: "Large anchor strength stays close to human play; small anchor strength gives reward more control; intermediate settings trade between them."
trouble: "An anchor that is too weak produces strong but alien play, while an anchor that is too strong preserves imitation errors and prevents useful search improvement."
at: [0.53, 0.45, 0.08]
sources:
  - work: jacob-kl-regularized-search
    page: "Abstract, p. 1"
    quote: "We then introduce a novel regret minimization algorithm that is regularized based on the KL divergence from an imitation-learned policy, and show that using this algorithm for search in no-press Diplomacy yields a policy that matches the human prediction accuracy of imitation learning while being substantially stronger."
  - work: jacob-kl-regularized-search
    page: "Section 4.1, p. 5"
    quote: "When λ is large, the utility function is dominated by the KL-divergence term … and so the agent will naturally tend to play a policy … close to the anchor policy"
  - work: jacob-kl-regularized-search
    page: "Section 4.1, p. 5"
    quote: "When λi is small, the dominating term is the rewards … and so the agent will tend to maximize reward without as closely matching the anchor policy"
  - work: bakhtin-human-regularized-diplomacy
    page: "Abstract"
    quote: "a planning algorithm we call DiL-piKL that regularizes a reward-maximizing policy toward a human imitation-learned policy."
---
