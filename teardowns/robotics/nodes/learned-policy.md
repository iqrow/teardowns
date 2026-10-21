---
term: Learned policy
aka: [robot learning, AI model for the robot]
kind: process
plain: A learned policy maps observations to actions from demonstrations, reinforcement learning, or both.
does: Can represent task behavior that is difficult to specify with hand-built models.
ask: How does it behave outside the data and state distribution used for training?
cues:
  - Observations mapped to robot actions
  - Behaviour outside the training state distribution
children: [demonstrations, data-flywheel]
at: [-0.5091, -0.3182, 0.02]
variants:
  - label: Learning
    items:
      - id: learn-imitation
        name: Imitation learning
        plain: Imitation learning fits behaviour to recorded demonstrations; Diffusion Policy and ACT are examples for robot manipulation.
        why: Fitting behaviour to recorded demonstrations defines it; Diffusion Policy is one example.
        sources:
          - work: cheng-chi-et-al-diffusion-policy-visuomotor
            page: Abstract
            quote: "This paper introduces Diffusion Policy, a new way of generating robot behavior by representing a robot's visuomotor policy as a conditional denoising diffusion process."
            flag: arXiv preprint
          - work: tony-z-zhao-et-al-learning-fine-grained-bimanual
            page: Abstract
            quote: "Imitation learning, however, presents its own challenges, particularly in high-precision domains."
            flag: arXiv preprint
      - id: learn-rl
        name: Reinforcement learning
        plain: Reinforcement learning improves behaviour through trial-and-error interaction and a reward signal.
        sources:
          - work: richard-s-sutton-and-andrew-g-barto
            url: https://web.stanford.edu/class/psych209/Readings/SuttonBartoIPRLBook2ndEd.pdf
            page: Ch. 1
            quote: "Reinforcement learning problems involve learning what to do—how to map situations to actions—so as to maximize a numerical reward signal."
            flag: university-hosted author draft
      - id: learn-vla
        name: Vision-language-action model
        plain: A vision-language-action model combines visual input and a language instruction to produce robot actions.
        sources:
          - work: anthony-brohan-et-al-rt-2-vision-language-action
            page: Abstract
            quote: "We refer to such category of models as vision-language-action models (VLA) and instantiate an example of such a model, which we call RT-2."
            flag: arXiv preprint
          - work: kevin-black-et-al-0-a-vision-language-action
            page: Abstract
            quote: "We propose a novel flow matching architecture built on top of a pre-trained vision-language model (VLM) to inherit Internet-scale semantic knowledge."
            flag: arXiv preprint
sources:
  - work: cheng-chi-et-al-diffusion-policy-visuomotor
    page: Abstract
    quote: "To fully unlock the potential of diffusion models for visuomotor policy learning on physical robots, this paper presents a set of key technical contributions."
    flag: arXiv preprint
  - work: richard-s-sutton-and-andrew-g-barto
    url: https://web.stanford.edu/class/psych209/Readings/SuttonBartoIPRLBook2ndEd.pdf
    page: Ch. 1
    quote: "Reinforcement learning problems involve learning what to do—how to map situations to actions—so as to maximize a numerical reward signal."
    flag: university-hosted author draft
---
