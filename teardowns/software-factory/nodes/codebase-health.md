---
term: Codebase health
aka:
  - code health
  - deep modules
  - architecture hygiene
kind: concept
plain: How easy the code is to find and change. A healthy codebase has a predictable layout, much of its behaviour behind small interfaces, and names that say what things do. Agents write code fast, so a codebase can also decay fast, and its health needs regular work.
does: Lets an agent find and change the right code without reading everything, which keeps its changes small enough to verify.
ask: Can an agent find where this change belongs and make it behind one small interface?
cues:
  - Large modules with small public interfaces
  - Folder and file names that say what the code does
  - A regular architecture sweep that proposes deepening work
at: [-0.27, 0.5, 0.08]
links:
  - {to: merge-rate, rel: raises}
sources:
  - work: matt-pocock-ai-coding-dictionary
    page: AX
    url: https://www.aihero.dev/ai-coding-dictionary/ax
    quote: "A codebase the agent can navigate without reading everything: predictable structure, a lot of behaviour behind small interfaces, names that say what things do"
  - work: matt-pocock-skills
    page: "#4: We Built A Ball Of Mud"
    quote: "Because agents can radically speed up coding, they also accelerate software entropy. Codebases get more complex at an unprecedented rate."
  - work: matt-pocock-skills
    page: "#4: We Built A Ball Of Mud"
    quote: "surveys a codebase for deepening opportunities and hands you the candidates. I recommend running it on your codebase once every few days."
  - work: code-complete-steve-mcconnell
    page: "Chapter 5, Design in Construction (publisher's sample chapter PDF)"
    url: https://ptgmedia.pearsoncmg.com/images/9780735619678/samplepages/9780735619678.pdf
    quote: "Managing complexity is the most important technical topic in software development"
---
