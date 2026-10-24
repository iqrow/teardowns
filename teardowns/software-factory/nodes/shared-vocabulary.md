---
term: Shared vocabulary
aka:
  - glossary
  - ubiquitous language
  - domain language
  - primitives catalog
kind: part
plain: A short file of the project's terms, each with one meaning, that agents and people both use. It can also list the building blocks of the code and the words to avoid.
does: Saves each agent from guessing the jargon, so tickets, prompts, code and reviews use the same short names.
ask: Does each important concept have one written name, and does the code use it?
cues:
  - A glossary or primitives file in the repository
  - Entries with a term, a one-line meaning and words to avoid
  - Code, tickets and review comments that use the glossary's terms
at: [0, 1.25, 0.12]
links:
  - {to: instructions, rel: see also}
sources:
  - work: matt-pocock-skills
    page: "#2: The Agent Is Way Too Verbose"
    quote: "Agents are usually dropped into a project and asked to figure out the jargon as they go. So they use 20 words where 1 will do."
  - work: matt-pocock-skills
    page: "#2: The Agent Is Way Too Verbose"
    quote: "The Fix for this is a shared language. It's a document that helps agents decode the jargon used in the project."
  - work: kent-c-dodds-kcd-skills
    page: autopilot skill
    url: https://github.com/kentcdodds/kcd-skills/blob/ffa3faf9911210b89b1d9953e025d52247632070/skills/autopilot/SKILL.md
    quote: "Primitives catalog: building blocks and code roots, kept short."
  - work: kody-repository
    page: docs/contributing/architecture/primitives.yaml
    url: https://github.com/kody-hq/kody/blob/51c3a853c43e67600ab1bde6eb08a2965371b050/docs/contributing/architecture/primitives.yaml
    quote: "Stable vocabulary for the visual-recap skill"
---
