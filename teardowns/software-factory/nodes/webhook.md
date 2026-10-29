---
term: Webhook
aka: [event delivery, callback, signed HTTP event]
kind: part
plain: An HTTP delivery that carries an event from one service to another so the receiver can act without polling.
does: Carries ticket, repository, check, review, or run events into the orchestrator or another service.
ask: Is this delivery authentic, acknowledged quickly, and safe to process more than once?
cues:
  - An endpoint URL and subscribed event list
  - Delivery id, event header, and response status
  - X-Hub-Signature-256 or another signature header
range: One-way event delivery, signed payload, retrying delivery, or a queue-backed receiver.
trouble: The receiver accepts forged payloads, times out, drops events, or repeats side effects on redelivery.
at: [0.34, 0.82, 0.06]
links:
  - {to: trigger, rel: raises}
  - {to: bot-identity, rel: see also}
sources:
  - work: github-webhooks-about
    page: About webhooks
    quote: Webhooks provide a way for notifications to be delivered to an external web server whenever certain events occur on GitHub.
  - work: github-webhooks-validating
    page: Validating webhook deliveries
    quote: The hash signature will appear in each delivery as the value of the X-Hub-Signature-256 header.
---
