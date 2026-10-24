---
term: Lead time
aka:
  - change lead time
  - delivery time
kind: measure
plain: The elapsed time from a code commit to a successful production deployment. For a ticket flow, pair it with the ticket-to-commit interval so the waiting point stays visible.
does: Shows how long a change takes to travel from implementation to usable production software.
ask: When did the measured change start, when did it run successfully in production, and where did it wait?
cues:
  - A duration from commit to production on a delivery dashboard
  - Percentiles or bands rather than one average
  - A breakdown of coding, checks, review, queue, and deployment time
at: [0, 0.8, 0.12]
sources:
  - work: dora-metrics-history
    page: From four keys to five (2024)
    quote: "Change lead time: Time from code commit to successful production deployment."
  - work: accelerate-nicole-forsgren
    page: "Chapter 2: Measuring Performance, p. 15"
    url: https://itrevolution.com/wp-content/uploads/2022/06/ACC_excerpt.pdf
    quote: "We measured product delivery lead time as the time it takes to go from code committed to code successfully running in production"
---
