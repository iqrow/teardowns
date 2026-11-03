---
term: Treaty lifecycle
aka: [exchange, operate, renew, lapse, war lockout]
kind: loop
plain: "A treaty can move through distinct rule states: immediate exchange or annual term, active benefits, renewal or lapse, and war or peace lockout."
does: Makes the diplomacy system measurable over time instead of treating a signed deal as a permanent UI flag.
ask: What is the next state after each turn, expiry, renewal, or war declaration?
cues: [A treaty card with a state badge, A circular timeline from proposal to renewal or expiry]
range: Immediate exchange; active fixed term; renewed or lapsed; war or peace lockout.
trouble: If expiry, renewal, and war lockout have no distinct states, players cannot tell whether a benefit ended, was renegotiated, or was never active.
children: [duration-renewal, notice-war-escape]
loop:
  type: cycle
  through: [diplomatic-information, relation-modifiers, deal-table, treaty-payments, treaty-benefits, military-obligations, treaty-enforcement, duration-renewal, notice-war-escape]
sources:
  - work: 2k-civ4-manual
    page: 102
    quote: "Immediate items can only be traded for other immediate items, and annuals only for other annuals."
  - work: 2k-civ6-manual
    page: 144
    quote: "An Open Borders agreement lasts for 30 turns. When 30 turns have passed, the agreement must be renegotiated or it lapses."
  - work: 2k-civ6-manual
    page: 144
    quote: "A Defensive pact lasts for 30 turns. When that time has elapsed, the pact lapses unless it is renegotiated."
  - work: 2k-civ6-manual
    page: 145
    quote: "You cannot offer peace until 10 turns after a war was started. Also, once you make peace, you cannot declare war with the same Civ for an additional 10 turns."
at: [0.02, -0.04, 0.05]
---