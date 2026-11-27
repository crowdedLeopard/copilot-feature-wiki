---
title: "Microsoft Defender for Office 365: localised default result email for user reported messages"
slug: "microsoft-defender-for-office-365-localized-default-mark-and-notify-email-template"
roadmapId: 557558
topic: "governance"
products: ["Microsoft Defender for Office 365"]
summary: "The default Mark as and notify result email sent to people who report messages is now localised to their Outlook language. No action is required; custom templates are unchanged. Plan to tell users and the helpdesk."
status: "rolling-out"
releasePhase: ["General Availability"]
clouds: ["Worldwide (Standard Multi-Tenant)","GCC","GCC High","DoD"]
platforms: ["Web"]
targetDate: "June CY2026"
previewDate: null
risk: "low"
cost: "low"
impact: "medium"
defaultState: "on"
action: "prepare"
licensing:
  model: "included"
  notes: "Microsoft Learn describes admin review result emails for organisations with Exchange Online mailboxes and Microsoft Defender for Office 365. Automatic emails of investigation results are documented as Plan 2 only. No price specific to localisation is published."
audiences: ["security","m365-admin","change-adoption"]
tags: ["defender-for-office-365","defender-xdr","exchange","outlook","user-reported-messages","gcc","gcc-high","dod"]
sources:
  - title: "MC1387578: (Updated) Microsoft Defender for Office 365: Localized default mark and notify email template"
    url: "https://admin.microsoft.com/Adminportal/Home#/MessageCenter/:/messages/MC1387578"
    kind: "message-center"
  - title: "Admin review for user reported messages"
    url: "https://learn.microsoft.com/defender-office-365/submissions-admin-review-user-reported-messages"
    kind: "learn"
  - title: "User reported settings"
    url: "https://learn.microsoft.com/defender-office-365/submissions-user-reported-messages-custom-mailbox"
    kind: "learn"
  - title: "Automatic user notifications for user reported phishing results in AIR"
    url: "https://learn.microsoft.com/defender-office-365/air-user-automatic-feedback-response"
    kind: "learn"
  - title: "Set-ReportSubmissionPolicy"
    url: "https://learn.microsoft.com/powershell/module/exchangepowershell/set-reportsubmissionpolicy"
    kind: "learn"
  - title: "Microsoft 365 Roadmap item 557558"
    url: "https://www.microsoft.com/microsoft-365/roadmap?id=557558"
    kind: "roadmap"
videos: []
related: []
controls:
  - governs: "Custom result email text that replaces the localised default template"
    scope: "tenant"
    ui:
      surface: "Microsoft Defender portal"
      path: "Settings > Email & collaboration > User reported settings > Email notifications > Results email > Customize results email"
      docs: "https://learn.microsoft.com/defender-office-365/submissions-admin-review-user-reported-messages"
    api:
      kind: "powershell"
      call: "Set-ReportSubmissionPolicy -Identity DefaultReportSubmissionPolicy -PhishingReviewResultMessage <text>"
      docs: "https://learn.microsoft.com/powershell/module/exchangepowershell/set-reportsubmissionpolicy"
    note: "Learn: customised body or footer text is sent instead of the localised default. The parameter shown sets the phishing text only. Role groups per the user reported settings page."
  - governs: "Automatic result emails to users from automated investigation (Plan 2)"
    scope: "tenant"
    ui:
      surface: "Microsoft Defender portal"
      path: "Settings > Email & collaboration > User reported settings > Email notifications > Results email > Automatically email users the results of the investigation"
      docs: "https://learn.microsoft.com/defender-office-365/air-user-automatic-feedback-response"
    api: null
    note: "Available only in Defender for Office 365 Plan 2 organisations with AIR, per Learn."
  - governs: "Separate switch to turn localisation of the default template on or off"
    scope: "tenant"
    ui: null
    api: null
    note: "Learn describes localisation as enabled automatically when automatic notifications are on."
confidence: "high"
created: "2026-11-20"
updated: "2026-11-20"
roadmapModified: "2026-08-04T22:45:42"
changes:
  - date: "2026-11-20"
    note: "First briefing: default Mark as and notify result email is localised to the user's Outlook language; rollout schedule per MC1387578 updated 12 November 2026."
  - date: "2026-11-20"
    note: "Checked against Microsoft Learn by gpt-6.1-sol: passed with 1 of 54 statements not yet confirmed"
  - date: "2026-11-27"
    note: "Checked against Microsoft Learn by gpt-6.1-sol: passed with 1 of 58 statements not yet confirmed"
version: 1
verification:
  status: "verified-with-gaps"
  date: "2026-11-27"
  version: 1
  model: "gpt-6.1-sol"
  engine: "copilot"
  claims: 58
  confirmed: 57
  unconfirmed: 1
  contradicted: 0
  attempts: 0
  hash: "1048d19bdd747844115821eed6386153"
---

## What's changing

The default result email that Microsoft Defender for Office 365 sends to a user after an admin reviews a message they reported is now localised. When automatic notifications use the default template, Microsoft Learn says users receive the email in their preferred language, based on their Outlook language settings, and that localised default templates are enabled automatically when automatic notifications are turned on. The Learn page lists the supported languages, which include English, Japanese, Spanish, French and German.

The default template is used for manual **Mark as and notify** actions on the **Submissions** page and for automatic investigation result notifications. Learn says the feature does not affect custom notification templates that admins have configured, and that if you customise the email body or footer, recipients get your text instead of the localised default. Microsoft's notice MC1387578 adds that the default safe-message template gets softer wording, still advising users to handle suspicious email with caution.

The roadmap item is **Rolling out** with a target of June CY2026, for General Availability on Web. Microsoft's notice MC1387578, last updated on 12 November 2026, gives the schedule: Worldwide rollout begins in June 2026 and is expected to complete by the end of September 2026 (previously late July); GCC, GCC High and DoD rollout begins in late November 2026 (previously mid-July) and is expected to complete by the end of December 2026 (previously the end of October). The notice sets no act-by date and says no action is required.

## Why it matters

Result emails are how reporting users learn what happened to the message they flagged. A reply in the user's own language is more likely to be read and understood, which supports continued reporting. Microsoft's notice says this is the aim.

Microsoft's notice says the localised template is enabled by default when automatic notification is on, so users may see emails in a different language or wording from what they received before. Helpdesk and security teams that quote the old English text in guides or training should expect to update them. Where you rely on a custom template, nothing changes for those emails.

## Risk assessment

**Data exposure**

- No change in data access: Learn describes a change to the language of the notification, and says verdicts, classification logic and automated investigation behaviour are unchanged.

**Security & identity**

- Users may meet the safe-message wording for the first time in another language. MC1387578 says the default safe template reads "This email doesn't appear harmful. But you should always handle suspicious emails with caution." and advises contacting the sender through another channel and avoiding links and attachments in unsolicited email from unfamiliar senders. Check that this matches your own guidance.

**Autonomy & actions**

- Notification emails go out without further admin action when automatic notifications are turned on, because Learn says localised default templates are enabled automatically in that case. The change is to the content of those emails, not to what triggers them.

**Change & support**

- Existing training and helpdesk material that reproduces the English default email will no longer match what localised recipients see.
- Custom templates are not localised by this feature, so a tenant with a custom template and a default one can have users receiving a mix of languages.

## Cost and licensing

Microsoft Learn's admin review page describes result emails for "Microsoft 365 organizations with Exchange Online mailboxes and Microsoft Defender for Office 365". The separate option to email users automatically with investigation results is documented as available only in Defender for Office 365 Plan 2 organizations with automated investigation and response (AIR).

The Learn pages read publish no separate licence, price or meter for the localised template, and the roadmap item names none. The cost the sources support is admin and helpdesk time to brief users and update documents.

## Scope

The change applies to the default notification template used when an admin reviews a user reported message, and to automatic investigation result notifications that use the default template. MC1387578 says it affects organisations using Defender for Office 365, admins and users in user reported message workflows, and applies only when the default template is used.

The roadmap record lists Worldwide (Standard Multi-Tenant), GCC, GCC High and DoD, with the Web platform. The notice gives different rollout windows for Worldwide and for GCC, GCC High and DoD (see What's changing). Learn says admins can mark messages and notify users only where the user reported the message as a false positive or a false negative.

Learn lists Security Administrator or Hygiene Management role group membership, or the Entra roles Global Administrator or Security Administrator, among the permissions for the user reported settings page.

## Governance guidance

### Before rollout

- Tell the people who report messages that result emails may arrive in their Outlook language; for GCC, GCC High and DoD tenants the notice gives late November 2026 as the start.
- Check whether your tenant uses the default template or a custom one under **User reported settings**, since MC1387578 says custom templates are unchanged.
- Update helpdesk and awareness material that quotes the English default result email.

### At rollout

- Send yourself or a pilot user a test report in a non-English Outlook profile and confirm the result email arrives in that language.
- Review the safe-message wording against your own guidance on unsolicited email.

### After rollout

- Ask helpdesk to log questions about result emails in the weeks after your cloud's rollout window.
- Decide whether to keep the default template or customise the body and footer text, remembering that custom text replaces the localised default.

## Governance controls

<p class="controls__lead">Where each control lives. The left column says what the setting decides and how far it reaches; the middle gives the admin centre and the exact path; the right gives the script, API or command that does the same. <em>Not yet documented</em> means Microsoft has not published a control for that surface, so there is nothing to configure yet.</p>

<table class="controls">
<thead><tr><th>Control</th><th>Admin UI</th><th>API and automation</th></tr></thead>
<tbody>
<tr><td data-label="Control"><strong>Custom result email text that replaces the localised default template</strong><br><small>Tenant</small><br><small class="controls__note">Learn: customised body or footer text is sent instead of the localised default. The parameter shown sets the phishing text only. Role groups per the user reported settings page.</small></td><td data-label="Admin UI"><strong>Microsoft Defender portal</strong><br>Settings › Email &amp; collaboration › User reported settings › Email notifications › Results email › Customize results email <a href="https://learn.microsoft.com/defender-office-365/submissions-admin-review-user-reported-messages" rel="noopener" class="controls__docs">Learn</a></td><td data-label="API and automation"><strong>PowerShell</strong><br><code>Set-ReportSubmissionPolicy -Identity DefaultReportSubmissionPolicy -PhishingReviewResultMessage &lt;text&gt;</code> <a href="https://learn.microsoft.com/powershell/module/exchangepowershell/set-reportsubmissionpolicy" rel="noopener" class="controls__docs">Learn</a></td></tr>
<tr><td data-label="Control"><strong>Automatic result emails to users from automated investigation (Plan 2)</strong><br><small>Tenant</small><br><small class="controls__note">Available only in Defender for Office 365 Plan 2 organisations with AIR, per Learn.</small></td><td data-label="Admin UI"><strong>Microsoft Defender portal</strong><br>Settings › Email &amp; collaboration › User reported settings › Email notifications › Results email › Automatically email users the results of the investigation <a href="https://learn.microsoft.com/defender-office-365/air-user-automatic-feedback-response" rel="noopener" class="controls__docs">Learn</a></td><td data-label="API and automation"><em class="controls__gap">Not yet documented</em></td></tr>
<tr><td data-label="Control"><strong>Separate switch to turn localisation of the default template on or off</strong><br><small>Tenant</small><br><small class="controls__note">Learn describes localisation as enabled automatically when automatic notifications are on.</small></td><td data-label="Admin UI"><em class="controls__gap">Not yet documented</em></td><td data-label="API and automation"><em class="controls__gap">Not yet documented</em></td></tr>
</tbody>
</table>

Learn documents no separate switch for localisation: the localised default is enabled with automatic notifications, and custom body or footer text replaces it. Customising the text is therefore the route that stops localised default text being sent, and it applies to every recipient of that verdict.

The cmdlet reference describes PhishingReviewResultMessage for phishing result text; the body text for the other verdicts is set with separate parameters on the same cmdlet. The automatic investigation result option is Plan 2 only and has no documented PowerShell parameter in the pages read.

## Open questions

- Is there any way to keep the English default template for a tenant that wants it, other than writing custom text? Watch the User reported settings Learn page and Message center.
- When Microsoft's end date of 1 February 2027 in MC1387578 passes, will the roadmap item move to Launched? Watch the roadmap item and the notice.
- Which language is used when a user's Outlook language is not in the supported list? Learn lists the supported languages but does not say what happens otherwise.

<!-- rationale
risk: Low. Only the language and wording of the notification email changes; Microsoft Learn says localised templates do not change message verdicts, classification logic or automated investigation behaviour.
cost: Low. The only cost the sources show is admin time to brief users and the helpdesk; the pages read publish no separate licence, price or meter for the localised template.
impact: Medium. People who report messages and receive the default result email notice the change, and the helpdesk may see questions; administrators who use the default template also see it.
-->

<!-- verifier-findings (2026-11-27, verified-with-gaps; checked by gpt-6.1-sol)
The independent check found fault only with the statements below. This is a correction: change what they name and carry the rest of the page over unchanged.
Correct each of these with the smallest change that removes the fault: delete the statement, narrow it, or put the finding's own "Found" text or worded replacement in its place. Where a fix asks for more than that (a new row, an explanation, further references), do only the part that removes the fault. A correction adds no control rows.
- [unsupported, major] Risk assessment: Data exposure / behaviour: The change makes no change in data access. | Found: Searched: Defender localized default mark notify email template data access; read Admin review for user reported messages, User reported settings, AIR automatic feedback and What's new excerpts. None establishes that data access is unchanged. | Fix: Remove 'No change in data access:' and retain the documented statement that localised templates do not change message verdicts, classification logic or automated investigation behaviour.
-->
