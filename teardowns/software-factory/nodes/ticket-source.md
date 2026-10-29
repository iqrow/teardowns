---
term: Ticket source
aka: [intake, feedback button, monitor, error tracker]
kind: part
plain: Something outside the tracker that supplies a request or observation. It can create a ticket directly or send evidence for a human or task to file.
does: Converts outside signals into durable work while preserving enough context to trace the signal back.
ask: What creates this signal, and what prevents the same signal from filing the same ticket twice?
cues:
  - An incoming event, alert, or form entry
  - A source URL or external event id on the ticket
  - An intake rule that maps signals to a project or label
range: Feedback button, monitor, error tracker, scanner, inbox, or another webhook producer. Deduplicate by external event id or fingerprint grouping before opening another ticket.
trouble: A noisy source floods the tracker, loses context, or creates duplicate tickets.
at: [-0.34, 0.72, 0.05]
links:
  - {to: ticket, rel: raises}
  - {to: webhook, rel: see also}
variants:
  - label: Source kind
    items:
      - id: source-feedback
        name: Feedback button
        plain: A user submits a short report from the product or a support surface.
        sources:
          - work: github-issue-forms
            page: Syntax for issue forms
            quote: You can define different input types, validations, default assignees, and default labels for your issue forms.
          - work: linear-asks
            page: Asks
            quote: Asks turns requests like bug reports, questions, and IT needs into actionable issues in Linear.
          - work: atlassian-jsm-help-center
            page: Customer requests
            quote: Customers can raise a request online through help centers on your site.
      - id: source-monitor
        name: Monitor alert
        plain: A service-health monitor emits an alert when a measured condition crosses a rule.
        sources:
          - work: datadog-jira
            page: Jira integration
            quote: Issues are created when the monitor triggers.
          - work: grafana-jira-alerting
            page: Jira alerting integration
            quote: Use the Jira integration in a contact point to create issues in your Jira instance when alerts fire.
      - id: source-error-tracker
        name: Error tracker
        plain: An error collection service groups failures and sends a report for investigation.
        sources:
          - work: sentry-event-fingerprinting
            page: Event fingerprinting
            quote: All events have a fingerprint. Events with the same fingerprint are grouped together into an issue.
          - work: sentry-alerts
            page: Create an alert for an organization
            quote: |
              **Create a Jira ticket**

              * `integrationId`: The stringified ID of the integration.
              * `data` - A list of any fields you want to include in the ticket as objects.
          - work: sentry-alerts
            page: Create an alert for an organization
            quote: |
              **Create a GitHub issue**

              * `integrationId`: The stringified ID of the integration.
              * `data` - A list of any fields you want to include in the ticket as objects.
      - id: source-scanner
        name: Scanner
        plain: A security, dependency, or quality scanner reports a finding that needs work.
        sources:
          - work: github-code-scanning-alerts
            page: Code scanning alerts
            quote: Each alert highlights a problem with the code and the name of the tool that identified it.
          - work: github-dependabot-alerts
            page: Dependabot alerts
            quote: Dependabot alerts help you find and fix vulnerable dependencies before they become security risks.
          - work: snyk-partner-integrations
            page: Partner integrations
            quote: Snyk Jira integration allows you to manually raise Jira issues in the Snyk UI for vulnerabilities or license issues.
      - id: source-inbox
        name: Inbox
        plain: Email or a message queue collects requests until an intake task files them.
        sources:
          - work: linear-asks
            page: Asks
            quote: Once enabled, asks can be submitted through Slack, email, or web forms.
          - work: atlassian-jsm-customer-requests
            page: Requests by email
            quote: A customer emails a request to your service space email address. The request becomes a work item in your service space and is added to a queue.
          - work: gitlab-service-desk
            page: Service Desk
            quote: Service Desk emails are created in your GitLab project as new tickets.
sources:
  - work: github-webhooks-about
    page: About webhooks
    quote: Webhooks let you subscribe to events happening in a software system and automatically receive a delivery of data to your server whenever those events occur.
  - work: sentry-event-fingerprinting
    page: Event fingerprinting
    quote: All events have a fingerprint. Events with the same fingerprint are grouped together into an issue.
---
