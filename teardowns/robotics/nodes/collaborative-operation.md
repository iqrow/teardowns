---
term: Collaborative operation
aka: [cobot safety]
kind: concept
plain: Collaborative operation is a deliberately designed state in which a robot and a person can work in a shared workspace.
does: Sets which monitored stop, guiding, separation, or force-limiting functions the application needs.
ask: Which collaborative mode and contact assumptions did the application risk assessment justify?
children: [contact-force-limit]
at: [0.62, 0.37, 0.12]
links:
  - {to: interaction-control, rel: see also}
variants:
  - label: Collaborative mode
    items:
      - id: collab-sms
        name: Safety-rated monitored stop
        plain: Safety-rated monitored stop is one of the four collaborative operation types described by FANUC America.
        why: It counts here because the collaborative function is a safety-rated monitored stop; the shared workspace is not the defining feature.
        sources:
          - work: fanuc-collaborative-robot-options-safety
            page: Collaborative robot operations
            quote: "there are four different types of collaborative robot operation: Safety rated monitored stop Hand guiding Speed and separation monitoring Power and force limiting by inherent design."
      - id: collab-hand
        name: Hand guiding
        plain: Hand guiding is one of the four collaborative operation types described by FANUC America.
        why: It counts here because the collaborative function lets a person hand-guide the robot; the shared workspace is not the defining feature.
        sources:
          - work: fanuc-collaborative-robot-options-safety
            page: Collaborative robot operations
            quote: "there are four different types of collaborative robot operation: Safety rated monitored stop Hand guiding Speed and separation monitoring Power and force limiting by inherent design."
      - id: collab-ssm
        name: Speed and separation monitoring
        plain: Speed and separation monitoring is one of the four collaborative operation types described by FANUC America.
        why: It counts here because the function monitors speed and separation; the shared workspace is not the defining feature.
        sources:
          - work: fanuc-collaborative-robot-options-safety
            page: Collaborative robot operations
            quote: "there are four different types of collaborative robot operation: Safety rated monitored stop Hand guiding Speed and separation monitoring Power and force limiting by inherent design."
      - id: collab-pfl
        name: Power and force limiting
        plain: Power and force limiting is one of the four collaborative operation types described by FANUC America.
        why: It counts here because the function limits power and force; the shared workspace is not the defining feature.
        sources:
          - work: fanuc-collaborative-robot-options-safety
            page: Collaborative robot operations
            quote: "there are four different types of collaborative robot operation: Safety rated monitored stop Hand guiding Speed and separation monitoring Power and force limiting by inherent design."
sources:
  - work: fanuc-collaborative-robot-options-safety
    page: Collaborative robot operations
    quote: "there are four different types of collaborative robot operation"
---
