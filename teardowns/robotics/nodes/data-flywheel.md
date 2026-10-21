---
term: Data flywheel
aka: [fleet learning]
kind: loop
plain: A deployment loop collects new physical trajectories, failures, and human interventions, uses them to improve a policy, and redeploys the result.
does: Can compound capability when the new data targets the policy's remaining failures.
ask: Does each deployment collect informative failures and interventions, or only more easy successes?
cues:
  - Physical trajectories, failures and interventions
  - Redeployed behaviour
at: [0, -0.0318, 0.02]
loop:
  type: reinforcing
  through: [field-testing, demonstrations, learned-policy]
sources:
  - work: yi-wang-et-al-learning-while-deploying-fleet
    page: Abstract
    quote: "LWD closes the loop between deployment, shared physical experience, policy improvement, and redeployment by using autonomous rollouts and human interventions collected across a robot fleet."
    flag: arXiv preprint
deeper: The next level would hold fleet logging, failure mining, labeling, replay or offline training, evaluation gates, and staged redeployment.
---
