---
term: Stop the line
aka:
  - jidoka
  - andon
kind: pattern
plain: Detect an abnormal condition, stop propagation, show the signal, and call a person who can correct the cause. Work resumes after the abnormality is understood.
ask: What signal stops the flow, who is called, and what evidence allows the line to resume?
sources:
  - work: toyota-production-system
    page: The Two Pillars of TPS
    quote: "jidoka―which can be loosely translated as \"automation with a human touch\"―based on the concepts of stopping immediately when abnormalities are detected"
  - work: toyota-production-system
    page: Jidoka
    quote: "when an abnormality occurs, such as a machine or equipment abnormality, quality abnormality, or a work delay, the machine or equipment can detect the abnormality and stop automatically"
  - work: lauren-tan-pstack
    page: Let loops start themselves
    url: https://raw.githubusercontent.com/cursor/plugins/9580c23696ac8d7abed0c166f2f9918800afb819/pstack/docs/guide/07-overnight.md
    quote: "Every stage can stop the line. Triage can decide the report is expected behavior, repro can fail to reproduce it, and the fixer can judge the change too risky."
  - work: taiichi-ohno-toyota-production-system
    page: "Chapter 1, Starting from Need (Taylor & Francis preview PDF)"
    url: "https://api.taylorfrancis.com/content/books/mono/download?identifierName=doi&identifierValue=10.4324/9780429273018&type=googlepdf"
    quote: "At Toyota, a machine automated with a human touch is one that is attached to an automatic stopping device"
  - work: taiichi-ohno-toyota-production-system
    page: "Chapter 1, Starting from Need (Taylor & Francis preview PDF)"
    url: "https://api.taylorfrancis.com/content/books/mono/download?identifierName=doi&identifierValue=10.4324/9780429273018&type=googlepdf"
    quote: "the workers themselves should push the stop button to halt production if any abnormality appears."
---
