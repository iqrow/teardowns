---
term: Transposition table
aka: [transposition cache, memo table]
kind: part
plain: "A hash-keyed cache of results for game states or rules queries reached during search. It lets search reuse a prior result instead of simulating or scoring the same state again."
does: "Trades memory for time by avoiding repeated search work and by supplying stored bounds or moves to guide later search."
ask: "Does each key include every rule-relevant fact, and can this entry be reused safely at the current search depth and bound?"
cues: ["A hash key, depth and score beside a search node", "Cache-hit and collision counters in a search profile", "A repeated state marked as reused instead of expanded again"]
range: "A bounded table sized for available memory, with entries carrying a key, search depth, score or bound, best move and age."
trouble: "A stale entry is returned after the relevant rules or search context changed, a collision returns another state's result, or the table is too small and repeated states are expanded again."
deeper: "Hashing, key validation, entry bounds, replacement schemes, ageing, collision handling and table sizing."
links:
  - {to: forward-model, rel: see also}
  - {to: ai-budget, rel: see also}
at: [-0.53, 0.82, 0.08]
sources:
  - work: chess-programming-wiki-transposition-table
    page: "How it works"
    quote: "When the search encounters a transposition, it is beneficial to 'remember' what was determined the last time the position was examined, rather than redoing the entire search again."
  - work: chess-programming-wiki-transposition-table
    page: "Hash functions"
    quote: "Hash functions convert chess positions into an almost unique, scalar signature, allowing fast index calculation as well as space-saving verification of stored positions."
  - work: plaat-best-first-fixed-depth-minimax
    page: "Section 3.1, p. 13"
    quote: "A transposition table is a hash table in which searched nodes (barring collisions, the search tree) are stored. The tree-search algorithm is modified to look in this table before it searches a node and, if it finds the node, uses the value instead of searching."
  - work: chess-programming-wiki-transposition-table
    page: "Aging"
    quote: "Aging is used to likely replace those entries by new ones, even if their draft and flags would otherwise protect them."
---
