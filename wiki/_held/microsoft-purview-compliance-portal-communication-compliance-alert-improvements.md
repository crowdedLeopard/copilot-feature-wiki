---
title: "Microsoft Purview Communication Compliance: policy alert improvements"
slug: "microsoft-purview-compliance-portal-communication-compliance-alert-improvements"
roadmapId: 181825
topic: "governance"
products: ["Microsoft Purview"]
summary: "Communication Compliance is adding per-policy alert frequency and email alert recipients on a new alerts page. Compliance admins who run policies should review it once it reaches the tenant; no action is required today."
status: "in-development"
releasePhase: ["General Availability","Preview"]
clouds: ["Worldwide (Standard Multi-Tenant)"]
platforms: ["Web"]
targetDate: "January CY2027"
previewDate: "July CY2025"
risk: "low"
cost: "low"
impact: "low"
defaultState: "on"
action: "review"
licensing:
  model: "included"
  notes: "Communication Compliance is included in eligible subscriptions, including Microsoft 365 E5/A5/G5 and Office 365 E5/A5/G5. No separate additional licensing requirement for these alert improvements is documented as of November 2026."
audiences: ["compliance","security","m365-admin"]
tags: ["purview","communication-compliance","admin-controls","monitoring"]
sources:
  - title: "Microsoft 365 Roadmap item 181825"
    url: "https://www.microsoft.com/microsoft-365/roadmap?id=181825"
    kind: "roadmap"
  - title: "MC920304"
    url: "https://admin.microsoft.com/Adminportal/Home#/MessageCenter/:/messages/MC920304"
    kind: "message-center"
  - title: "Create and manage Communication Compliance policies"
    url: "https://learn.microsoft.com/purview/communication-compliance-policies"
    kind: "learn"
  - title: "Get started with Communication Compliance"
    url: "https://learn.microsoft.com/purview/communication-compliance-configure"
    kind: "learn"
  - title: "Microsoft Purview service description"
    url: "https://learn.microsoft.com/office365/servicedescriptions/microsoft-365-service-descriptions/microsoft-365-tenantlevel-services-licensing-guidance/microsoft-purview-service-description"
    kind: "learn"
videos: []
related: []
controls:
  - governs: "Alert policy triggers for a Communication Compliance policy: number of activities, period and specific users"
    scope: "other"
    ui:
      surface: "Microsoft Purview portal"
      path: "Alert policies"
      docs: "https://learn.microsoft.com/purview/communication-compliance-policies"
    api: null
    note: "Existing control, not the new alerts page. Learn documents no PowerShell for managing Communication Compliance policies."
  - governs: "Tenant-wide switch for the new alert frequency and recipient settings"
    scope: "tenant"
    ui: null
    api: null
    note: "MC920304 says the feature is available by default and describes no switch."
confidence: "medium"
created: "2026-11-17"
updated: "2026-11-18"
roadmapModified: "2026-10-22T22:58:40"
changes:
  - date: "2026-11-17"
    note: "First briefing on Communication Compliance alert improvements, based on roadmap item 181825, MC920304 and the current Learn pages."
  - date: "2026-11-17"
    note: "Checked against Microsoft Learn by gpt-6.1-sol: held: 3 of 57 statements contradicted, 2 unconfirmed; taken offline until corrected"
  - date: "2026-11-18"
    note: "Corrected after verification: default state is on per MC920304, licensing is included in eligible subscriptions, and the existing-policies prerequisite and employee-impact claim were removed."
  - date: "2026-11-18"
    note: "Checked against Microsoft Learn by gpt-6.1-sol: passed with 0 of 48 statements not yet confirmed"
  - date: "2026-11-20"
    note: "Checked against Microsoft Learn by gpt-6.1-sol: held: 2 of 50 statements contradicted, 0 unconfirmed; taken offline until corrected"
version: 2
verification:
  status: "held"
  date: "2026-11-20"
  version: 2
  model: "gpt-6.1-sol"
  engine: "copilot"
  claims: 50
  confirmed: 48
  unconfirmed: 0
  contradicted: 2
  attempts: 1
  hash: "c50950130a62bcc34f9d032631aa15a3"
---

## What's changing

Microsoft Purview Communication Compliance is improving the capabilities and customisation of policy alerts. The roadmap item describes this only as "improving the alerting capabilities and customization in Communication Compliance". Message Center post MC920304 gives the detail: admins will be able to customise the alert frequency per policy, and adjust the email alert frequency and recipients, in the policy creation wizard by going to a new alerts page.

Microsoft Learn does not describe the new alerts page yet, so what follows about its behaviour is the roadmap and Message Center description. What Learn does document is today's behaviour. Communication Compliance creates an alert policy for each policy, and a single email notification is sent once every 24 hours for any alerts, however many messages matched. By default the alert policy uses simple aggregation with a threshold of 4 activities and a window of 60 minutes.

On timing, the roadmap item is In development with a target of January CY2027, a preview date of July CY2025, and release phases General Availability and Preview. MC920304, updated 9 March 2026 and last updated 22 October 2026, moved public preview to a rollout beginning October 2026 (previously late July 2025), expected to complete by the end of October 2026 (previously mid-August 2025). It says the General Availability timeline for Worldwide will be announced in a future update, and it states an end date of 26 February 2027. The post sets no act-by date. The roadmap lists Worldwide (Standard Multi-Tenant) only, and the platform is Web.

## Why it matters

Alert email is how reviewers learn that a policy has matched. Today Learn documents one email every 24 hours per policy set-up, so changing how often reviewers are told, and who is told, directly affects how quickly flagged messages are triaged and how much reviewer time they take. This is a service-owner decision about reviewer workload and response time, not a data change.

MC920304 says the new feature is available by default, but neither it nor the roadmap says whether existing policies keep their current alert behaviour on arrival. Treat that as unconfirmed. Plan on no source saying existing alert behaviour changes, and check a pilot policy once the alerts page appears in your tenant.

## Risk assessment

**Data exposure**

- No new data source is described. MC920304 repeats Microsoft's standing statement that usernames are pseudonymised by default and role-based access controls are built in. Sending alert emails to additional recipients is the one place to check: confirm that anyone added as a recipient is entitled to know that alerts exist, since the post does not say what an email contains.

**Security & identity**

- Policy set-up belongs to the Communication Compliance Admins role. Learn documents that role as the one that can set up policies; confirm who holds it before the alerts page arrives, because the post does not say whether any other role can change alert settings.

**Autonomy & actions**

- No autonomous action is described. Alerts feed reviewers, who decide what to do. A lower alert frequency delays notification, and a higher one raises volume; neither remediates anything by itself.

**Change & support**

- Microsoft has moved the preview date from July 2025 to October 2026 and has not announced the General Availability date, so internal guidance written now may need revising.
- The roadmap target (January CY2027) and the Message Center end date (26 February 2027) differ in form; use the Message Center post for rollout timing and watch for the General Availability announcement.

## Cost and licensing

Licence: Communication Compliance is included in eligible subscriptions, including Microsoft 365 E5/A5/G5 and Office 365 E5/A5/G5, according to the Microsoft Purview service description. No separate additional licensing requirement for these alert improvements is documented as of November 2026. Learn's Communication Compliance getting-started page also says administrators need to verify that the organisation has a supported subscription and that users have the appropriate licences assigned, and points to the subscription requirements for the detail.

Meter: the same page says detecting inappropriate or risky interactions for non-Microsoft 365 AI data needs pay-as-you-go billing, and that there are no pay-as-you-go requirements or charges for detecting such interactions for Microsoft 365 Copilot data. Neither Microsoft source ties a meter to the alert improvements, so none is documented for them at the time of writing (November 2026).

Indirect cost is reviewer and admin time: changing alert frequency changes how many emails reviewers receive and how often they look at the Alerts queue.

## Scope

**Who and where.** Communication Compliance in the Microsoft Purview portal, Worldwide (Standard Multi-Tenant) on the roadmap record, on the web.

**Roles.** Learn says users assigned the Communication Compliance Admins role can set up policies. The roles that will be able to change the new alert settings are not stated.

**Rollout.** MC920304 gives a public preview rollout beginning October 2026 and expected to complete by the end of October 2026, with General Availability for Worldwide to be announced. The roadmap item remains In development with a January CY2027 target. The post says the feature is available by default.

**Prerequisites.** The Learn page for policies says PowerShell isn't supported for creating and managing Communication Compliance policies.

## Governance guidance

### Before rollout

- Record the alert behaviour of each current Communication Compliance policy: who receives alert emails and how often, using today's single email every 24 hours as the baseline.
- Confirm who is in the Communication Compliance Admins role group, since that role sets up policies.
- Tell reviewers that alert email frequency and recipients may change, and name the person who will own those choices per policy.
- Pick one pilot policy to test the new alerts page on first.

### At rollout

- Check in the policy creation wizard whether the new alerts page is present in your tenant; Learn does not yet describe it.
- Compare a pilot policy's alert emails before and after to see whether existing policies keep today's behaviour, since Microsoft has not stated it.
- Set frequency and recipients per policy only after the pilot, and record each choice.

### After rollout

- Review alert volumes and reviewer response times against the baseline recorded earlier.
- Review the alert policy triggers (number of activities, period, specific users) on the Alert policies page, which Learn documents as the place to change those defaults today.
- Watch Message Center for the General Availability announcement under MC920304.

## Governance controls

<p class="controls__lead">Where each control lives. The left column says what the setting decides and how far it reaches; the middle gives the admin centre and the exact path; the right gives the script, API or command that does the same. <em>Not yet documented</em> means Microsoft has not published a control for that surface, so there is nothing to configure yet.</p>

<table class="controls">
<thead><tr><th>Control</th><th>Admin UI</th><th>API and automation</th></tr></thead>
<tbody>
<tr><td data-label="Control"><strong>Alert policy triggers for a Communication Compliance policy: number of activities, period and specific users</strong><br><small class="controls__note">Existing control, not the new alerts page. Learn documents no PowerShell for managing Communication Compliance policies.</small></td><td data-label="Admin UI"><strong>Microsoft Purview portal</strong><br>Alert policies <a href="https://learn.microsoft.com/purview/communication-compliance-policies" rel="noopener" class="controls__docs">Learn</a></td><td data-label="API and automation"><em class="controls__gap">Not yet documented</em></td></tr>
<tr><td data-label="Control"><strong>Tenant-wide switch for the new alert frequency and recipient settings</strong><br><small>Tenant</small><br><small class="controls__note">MC920304 says the feature is available by default and describes no switch.</small></td><td data-label="Admin UI"><em class="controls__gap">Not yet documented</em></td><td data-label="API and automation"><em class="controls__gap">Not yet documented</em></td></tr>
</tbody>
</table>

The row for alert policy triggers is an existing control that applies today; it is not the new alerts page, and Learn does not say that the page replaces it. Learn documents a minimum threshold of 3 activities for Communication Compliance policies. Microsoft Learn documents no PowerShell for creating and managing Communication Compliance policies, and it documents no API for the alert settings at the time of writing (November 2026). Role needed to set up policies: Communication Compliance Admins.

## Open questions

- Do existing policies keep today's single email every 24 hours when the new alerts page arrives, or does the default change? Watch MC920304 and the Learn page for Communication Compliance policies.
- When will General Availability for Worldwide be announced, and does the roadmap's January CY2027 target still hold?
- Which roles can change alert frequency and email recipients, and can recipients be people outside the Communication Compliance role groups?
- Does the new alerts page change the existing alert policy triggers (activities, window, users) or sit alongside them?
- Is any licence or meter specific to the alert improvements, beyond the Communication Compliance subscription requirements?

<!-- rationale
risk: Low. The change adjusts how and when alerts and alert emails are produced per policy; Microsoft describes no new data access, and the default for existing policies is not stated.
cost: Low. The only cost the sources show is admin and reviewer time; Communication Compliance is included in eligible subscriptions, and no separate licence for these alert improvements is documented as of November 2026.
impact: Low. The people who notice are Communication Compliance admins and the reviewers who receive alert emails.
-->

<!-- verifier-findings (2026-11-20, held; checked by gpt-6.1-sol)
The independent check found fault only with the statements below. This is a correction: change what they name and carry the rest of the page over unchanged.
Correct each of these with the smallest change that removes the fault: delete the statement, narrow it, or put the finding's own "Found" text or worded replacement in its place. Where a fix asks for more than that (a new row, an explanation, further references), do only the part that removes the fault. A correction adds no control rows.
- [contradicted, blocker] Scope: Roles; Open questions / absence: The roles able to change the new per-policy alert settings are not stated. | Found: | Actions | Communication Compliance | Communication Compliance Admins | Communication Compliance Analysts | Communication Compliance Investigators | Communication Compliance Viewers | | Configure policies and settings | Yes | Yes | No | No | No | | Fix: Replace 'The roles that will be able to change the new alert settings are not stated' with 'Learn lists the Communication Compliance and Communication Compliance Admins role groups as able to configure policies and settings; MC920304 names no separate role for the new page.' Cite https://learn.microsoft.com/purview/communication-compliance-permissions. Remove 'Which roles can change alert frequency and email recipients, and' from the Open questions bullet, retaining the recipient-eligibility question. | Source: https://learn.microsoft.com/purview/communication-compliance-permissions
These are minor and do not hold the page. Where removing the statement, or rewording it in the words the fix gives, settles one, do that; otherwise leave it as it is. A minor finding may also add a source link it names for a statement already on the page. It adds no row and nothing that needs research.
- [contradicted, minor] Governance guidance; Governance controls / consistency: The governance checklist names controls that are not represented in the controls table. | Found: Checklist: 'Confirm who is in the Communication Compliance Admins role group' and 'Set frequency and recipients per policy'. Table: existing alert policy triggers and a tenant-wide switch only. | Fix: The Before rollout role-group membership check and At rollout per-policy frequency/recipient configuration step have no corresponding controls-table rows; neither is represented by the existing-trigger or tenant-switch row.
-->
