---
term: Holdout set
aka:
  - test set
  - held-out data
  - hidden test
kind: pattern
plain: Keep part of the evidence away from whatever is being tuned, and judge the result only on that hidden part. A score on examples the learner has already seen says little about how it will do on new ones.
ask: What evidence has the learner never seen, and who holds it?
sources:
  - work: scikit-learn-cross-validation
    page: "3.1. Cross-validation: evaluating estimator performance"
    quote: "Learning the parameters of a prediction function and testing it on the same data is a methodological mistake"
  - work: scikit-learn-cross-validation
    page: "3.1. Cross-validation: evaluating estimator performance"
    quote: "it is common practice when performing a (supervised) machine learning experiment to hold out part of the available data as a test set"
  - work: simon-willison-software-factory
    quote: "That idea of treating scenarios as holdout sets … used to evaluate the software but not stored where the coding agents can see them … is fascinating."
---
