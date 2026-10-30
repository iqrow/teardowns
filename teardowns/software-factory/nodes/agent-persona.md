---
term: Agent persona
aka:
  - character
  - personality
  - agent character
  - avatar
  - mascot
  - bot personality
  - believable agent
kind: concept
plain: "The consistent character people perceive in an agent: its name, look, status-line voice and reactions to events. Every agent that writes or speaks projects one, designed or not."
does: Lets people tell agents apart and read each one's state at a glance, making behaviour legible.
ask: If you hid the name, would you know which agent wrote this status line, and what it is doing?
cues:
  - A name and avatar per agent
  - Status lines in a recognisable voice
  - A distinct reaction on success versus failure
trouble: "The persona costs a person's attention: it interrupts, distracts from the work, or plays for engagement. Without a designed persona, status lines could be any agent's."
at: [0.75, 0.45, 0.12]
children: [silhouette]
links:
  - {to: bot-identity, rel: see also}
  - {to: human-re-entry, rel: see also}
variants:
  - label: Channel
    items:
      - id: persona-name
        name: Name
        plain: A stable name for each agent. A unique name alone can make people care about a character.
        sources:
          - work: natalie-mikkelson-companions-creating-player-bonds
            page: Introduction
            quote: "The guys literally only gave us their name and their allegiance but, hell, that's all they needed for 8-year-old me to care dearly for every damned one of them."
      - id: persona-look
        name: Look
        plain: An avatar, sprite or animated character that stands for the agent on screen.
        sources:
          - work: wikipedia-office-assistant
            page: Description
            quote: "It assisted users by way of an interactive animated character which interfaced with the Office help content."
      - id: persona-voice
        name: Voice
        plain: The wording of the agent's status lines and messages. A style of communication alone gives a computer a personality people recognise.
        sources:
          - work: clifford-nass-can-computer-personalities
            page: Manipulation
            quote: "Only the style of communication was manipulated."
          - work: clifford-nass-can-computer-personalities
            page: Abstract
            quote: "When a computer was endowed with the properties associated with dominance or submissiveness, subjects recognized the computer's personality type along only that dimension."
      - id: persona-reactions
        name: Reactions
        plain: Barks on state change let the agent show what it noticed, intends or just completed.
        sources:
          - work: jeff-orkin-combat-dialogue-in-fear
            page: 2.2 From Barks to Dialogues
            quote: "Rather than having an individual character react with a bark, multiple characters carry on a short dialogue that broadcasts mental state and intentions to the player."
      - id: persona-sound
        name: Sound
        plain: Spoken cues and other sounds tied to the agent. A spoken voice projects a persona whether or not anyone designed one.
        sources:
          - work: james-giangola-speaking-the-same-language-vui
            page: 1. Give your VUI a personality
            quote: "All voices project a persona whether you plan for one or not."
sources:
  - work: james-giangola-speaking-the-same-language-vui
    page: 1. Give your VUI a personality
    quote: "All voices project a persona whether you plan for one or not."
  - work: james-giangola-speaking-the-same-language-vui
    page: The Takeaway
    quote: "Don't leave your VUI persona to chance."
  - work: james-giangola-speaking-the-same-language-vui
    page: The Takeaway
    quote: "Use this persona as an anchor to ground your user experience and give it a familiar consistency."
  - work: clifford-nass-can-computer-personalities
    page: Abstract
    quote: "computer personalities can be easily created using a minimal set of cues"
  - work: clifford-nass-can-computer-personalities
    page: Abstract
    quote: "personality does not require richly defined agents, sophisticated pictorial representations, natural language processing, or artificial intelligence. Rather, even the most superficial manipulations are sufficient to produce personality, with powerful effects."
  - work: michael-mateas-oz-centric-review-interactive-drama
    page: Taking character seriously
    quote: "A believable character is one who seems lifelike, whose actions make sense, who allows you to suspend disbelief. This is not the same thing as realism."
  - work: michael-mateas-oz-centric-review-interactive-drama
    page: Taking character seriously
    quote: "Personality is about the unique and specific, not the general."
  - work: jeff-orkin-combat-dialogue-in-fear
    page: 2.1 Introduction
    quote: "If the AI didn't say it, it didn't happen."
  - work: jeff-orkin-combat-dialogue-in-fear
    page: 2.2 From Barks to Dialogues
    quote: "Rather than having an individual character react with a bark, multiple characters carry on a short dialogue that broadcasts mental state and intentions to the player."
  - work: wikipedia-office-assistant
    page: Criticism
    quote: "the Office Assistant feature was criticized for interrupting users and not providing advice that was fully adapted to the situation."
  - work: wikipedia-office-assistant
    page: History
    quote: "As people already related to computers directly as they do with humans, the added human-like face emerged as an annoying interloper distracting the user from the primary conversation."
  - work: anthropic-claudes-character
    page: The future of Claude’s character
    quote: "Models with better characters may be more engaging, but being more engaging isn’t the same thing as having a good character. In fact, an excessive desire to be engaging seems like an undesirable character trait for a model to have."
---
