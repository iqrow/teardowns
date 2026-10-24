---
term: Kitchen brigade
aka:
  - brigade de cuisine
  - brigade system
  - kitchen brigade model
kind: pattern
plain: A head chef designs the dishes and holds the standard, each cook works one station from ingredients prepared before service, and the chef checks plates at the pass and sends back any that fall short. Agent tools reuse the roles, with a scheduler that writes orders and agents that cook as line cooks, each in its own worktree.
ask: Who designs the dishes, which station does each cook own, what is ready before service starts, and who checks each plate before it leaves?
trouble: Service starts before mise en place is done, and cooks keep running back to the walk-in. The chef trusts no station and would rather cook every plate alone. Run as a strict line, the brigade keeps quality consistent but leaves little room to experiment.
sources:
  - work: cia-library-escoffier
    page: French Brigade
    quote: "The French Brigade system, inspired by Escoffier’s military experience in the Franco-Prussian War of 1870, became the organizational standard in professional kitchens."
  - work: cia-library-escoffier
    page: French Brigade
    quote: "The Sous Chef assists the Chef de Cuisine, and the Chefs de Partie manage specific stations based on a cooking method, such as grill or sauté."
  - work: cia-library-escoffier
    page: French Brigade
    quote: "What separated Auguste Escoffier from the other French Chefs of the 20th century was his standard for culinary excellence."
  - work: poppendieck-lean-software-development
    page: "Introduction, p. xxvi (publisher's sample chapter)"
    url: https://ptgmedia.pearsoncmg.com/images/0321150783/samplechapter/poppendieckch.pdf
    quote: "Recipes are designed by experienced chefs who have developed an instinct for what works and the capability to adapt available ingredients to suit the occasion."
  - work: samuel-ashworth-super-sad-true-chef-story
    quote: "a system in which each cook is assigned a specific station within a hierarchy, with the head chef at the top"
  - work: samuel-ashworth-super-sad-true-chef-story
    quote: "mise en place was never quite done by the time service began and we would continually have to sprint back to the walk-in"
  - work: samuel-ashworth-super-sad-true-chef-story
    quote: "two rack of lambs hit the pass so underdone that she noticed from 8 feet away"
  - work: samuel-ashworth-super-sad-true-chef-story
    quote: "The solution to an undercooked fish wasn’t shouting or threatening; it was to cook it a little more."
  - work: samuel-ashworth-super-sad-true-chef-story
    quote: "she was obliged to entrust any of her food to them at all. If she could have done it solo, she would have."
  - work: samuel-ashworth-super-sad-true-chef-story
    quote: "This system made French cuisine a bastion of quality control and consistency, but it left little space for innovation or experimentation"
  - work: lauren-tan-noodle
    page: INSTALL.md
    url: https://raw.githubusercontent.com/poteto/noodle/82d2921c52370f23f29086de81ccfb600939c037/INSTALL.md
    quote: "Think kitchen brigade: a head chef (the scheduler) reads the backlog, writes orders, and dispatches line cooks (agents) to do the work in isolated worktrees."
  - work: lauren-tan-noodle
    page: docs/concepts/scheduling.md
    url: https://raw.githubusercontent.com/poteto/noodle/82d2921c52370f23f29086de81ccfb600939c037/docs/concepts/scheduling.md
    quote: "Before each scheduling decision, Noodle builds a mise (a snapshot of everything the scheduler needs)."
  - work: gene-kim-steve-yegge-vibe-coding
    url: https://itrevolution.com/articles/from-line-cookto-head-chef-orchestrating-ai-teams/
    page: "From Line Cook to Head Chef: Orchestrating AI Teams (book excerpt)"
    quote: "Much like early-days chefs figuring out how to run a multi-station kitchen, we’re often improvising"
---
