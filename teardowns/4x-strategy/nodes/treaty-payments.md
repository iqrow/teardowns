---
term: Treaty payments
aka: [deal consideration, diplomatic price]
kind: part
plain: Payment terms decide whether value changes hands immediately or over time, and whether future payment is automatically enforced or left non-binding.
does: Lets a treaty price match the timing and risk of its benefit instead of treating every exchange as a flat trade.
ask: Who bears default risk, and does the payment survive war or expiry?
cues: [A payment row with upfront and recurring columns, An enforcement badge beside a voluntary-promise badge]
range: Upfront; recurring; automatically enforced; non-binding future promise.
trouble: A delayed benefit funded by an irreversible upfront payment invites opportunistic breach; an unpaid promise can be free leverage.
children: [upfront-payment, recurring-payment, escrow-and-default]
variants:
  - label: Payment timing
    items:
      - id: upfront-value
        name: Upfront
        plain: Transfer all consideration when the deal resolves.
        why: The payment is complete before later turns can change the treaty's value.
        sources:
          - work: 2k-civ6-manual
            page: 138
            quote: "A “Flat Fee” exchange is just that. You give or receive a one-time lump sum of gold, and then you’re done."
      - id: recurring-value
        name: Recurring
        plain: Transfer a fixed amount each turn for a stated minimum term.
        why: The payment remains exposed to treasury health, expiry, and war escape.
        sources:
          - work: 2k-civ4-manual
            page: 102
            quote: "Annual trades last for a minimum of 10 turns."
      - id: automatic-enforcement-value
        name: Automatically enforced
        plain: Automatically enforce a recurring obligation even from an empty treasury by disbanding units as necessary.
        why: The rule preserves the payment obligation without holding the consideration in advance.
        sources:
          - work: 2k-civ4-manual
            page: 102
            quote: "Your treasurer will automatically disband units as necessary to fulfill your obligations."
sources:
  - work: 2k-civ4-manual
    page: 102
    quote: "Immediate items can only be traded for other immediate items, and annuals only for other annuals."
at: [-0.04, -0.31, 0.04]
---