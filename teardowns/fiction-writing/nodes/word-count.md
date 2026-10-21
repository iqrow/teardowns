---
term: Word count
aka: [length, how long is a novel]
kind: measure
plain: The length of the manuscript in words, the unit agents and publishers use. The expected length depends on the category.
does: Checks the book against what its market expects.
ask: Is this length normal for my category?
range: Literary, mystery and thriller 80,000–89,999 words; SF and fantasy 100,000–115,000
trouble: A 150,000-word debut thriller, or a 50,000-word epic fantasy.
at: [0.25, 0.1315, -0.1781]
variants:
  - label: Category norm
    items:
      - id: norm-adult
        name: "Adult: literary, mystery, thriller"
        plain: 80,000–89,999 words in Writer’s Digest’s guide.
        sources:
          - work: chuck-sambuchino-word-count-for-novels-and
            page: literary-fiction row
            flag: limited page extraction
            quote: "Between 80,000 and 89,999 words is a good range you should be aiming for."
          - work: chuck-sambuchino-word-count-for-novels-and
            page: mystery and thriller/suspense rows
            flag: limited page extraction
            quote: "Between 80,000 and 89,999 words is a good range you should be aiming for."
      - id: norm-sff
        name: Science fiction and fantasy
        plain: 100,000–115,000 words in Writer’s Digest’s guide.
        sources:
          - work: chuck-sambuchino-word-count-for-novels-and
            page: science-fiction and fantasy rows
            flag: limited page extraction
            quote: "With these genres, I would say 100,000-115,000 is an excellent range."
      - id: norm-ya
        name: Young adult
        plain: 55,000–79,999 words in Writer’s Digest’s guide.
        sources:
          - work: chuck-sambuchino-word-count-for-novels-and
            page: young-adult row
            flag: limited page extraction
            quote: "For starters, 55,000-79,999 is a great range."
      - id: norm-middle-grade
        name: Middle grade
        plain: 20,000–55,000 words in Writer’s Digest’s guide.
        sources:
          - work: chuck-sambuchino-word-count-for-novels-and
            page: middle-grade row
            flag: limited page extraction
            quote: "Middle grade is from 20,000-55,000, depending on the subject matter and age range, and the word count of these books has been trending up in recent years."
  - label: Length class (SFWA)
    items:
      - id: length-short-story
        name: Short story
        plain: Under 7,500 words.
        sources:
          - {work: sfwa-nebula-awards-rules, page: Sec. 8.1, quote: "Short Story: fewer than 7,500 words Novelette: at least 7,500 words but fewer than 17,500 words Novella: at least 17,500 words but fewer than 40,000 words Novel: 40,000 words or more."}
      - id: length-novelette
        name: Novelette
        plain: 7,500 to 17,499 words.
        sources:
          - {work: sfwa-nebula-awards-rules, page: Sec. 8.2, quote: "Short Story: fewer than 7,500 words Novelette: at least 7,500 words but fewer than 17,500 words Novella: at least 17,500 words but fewer than 40,000 words Novel: 40,000 words or more."}
      - id: length-novella
        name: Novella
        plain: 17,500 to 39,999 words.
        sources:
          - {work: sfwa-nebula-awards-rules, page: Sec. 8.3, quote: "Short Story: fewer than 7,500 words Novelette: at least 7,500 words but fewer than 17,500 words Novella: at least 17,500 words but fewer than 40,000 words Novel: 40,000 words or more."}
      - id: length-novel
        name: Novel
        plain: 40,000 words or more.
        sources:
          - {work: sfwa-nebula-awards-rules, page: Sec. 8.4, quote: "Short Story: fewer than 7,500 words Novelette: at least 7,500 words but fewer than 17,500 words Novella: at least 17,500 words but fewer than 40,000 words Novel: 40,000 words or more."}
sources:
  - work: chuck-sambuchino-word-count-for-novels-and
    page: recommended word-count table
    quote: "Between 80,000 and 89,999 words is a good range you should be aiming for."
    flag: limited page extraction
---
