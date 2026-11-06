---
term: "Prediction layers"
aka: [yomi, level-k thinking, Sicilian reasoning, double bluff, mind games]
kind: concept
plain: "A ladder of beliefs in which each side predicts the other's move, then predicts that prediction, and counters the next layer."
does: "Explains why a direct read can be defeated by a counter-read, and why the ladder should stop after a few plausible steps instead of becoming endless recursion. One way to choose a layer is to score every layer by how it would have done in past turns and play the best so far."
ask: "Which level of reasoning is plausible here, and when should the ladder stop and return to the base move?"
trouble: "The AI spends compute on imaginary layers, assumes the opponent reasons like it does, chooses a counter with no payoff, or trusts past scores after the opponent changes level."
sources:
  - work: sirlin-playing-to-win
    page: "ch. 7, Yomi Layers"
    quote: "You knew what he would do (yomi), but he knew that you knew (yomi layer 2)."
  - work: sirlin-playing-to-win
    page: "ch. 7, Yomi Layers"
    quote: "there need only be support up to yomi layer 3, as yomi layer 4 loops back around to layer 0."
  - work: egnor-iocaine-powder
    page: "Meta-Strategy"
    quote: "P.1: defeat second-guessing Assume the opponent thinks you will use P.0."
  - work: egnor-iocaine-powder
    page: "Meta-Strategy"
    quote: "Iocaine Powder's basic meta-strategy is simple: Use past performance to judge future results."
  - work: egnor-iocaine-powder
    page: "Meta-Strategy"
    quote: "Then, to actually choose a move, Iocaine Powder simply picks the strategy variant with the highest score to date."
  - work: egnor-iocaine-powder
    page: "Meta-Strategy"
    quote: "The basic assumption made by this meta-strategy is that an opponent will not quickly vary their strategy."
---
