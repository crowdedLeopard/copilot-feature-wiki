---
title: "Microsoft Purview Communication Compliance: alert frequency and email recipients per policy (GCC, GCC High, DoD)"
slug: "microsoft-purview-communication-compliance-alert-improvements"
roadmapId: 529852
topic: "governance"
products: ["Microsoft Purview"]
summary: "Communication Compliance is planned to let admins set alert frequency per policy and email alert recipients in the policy wizard. Compliance admins in US Government clouds should review it when it arrives; Learn does not describe it yet."
status: "in-development"
releasePhase: ["General Availability"]
clouds: ["GCC","GCC High","DoD"]
platforms: ["Web"]
targetDate: "August CY2027"
previewDate: null
risk: "low"
cost: "low"
impact: "low"
defaultState: "unknown"
action: "review"
licensing:
  model: "included"
  notes: "The Microsoft Purview service description lists Communication Compliance as Included for Microsoft 365 E5/A5/G5 and Office 365 E5/A5/G5, among other plans. No licence or meter specific to these alert settings is published."
audiences: ["compliance","security","m365-admin"]
tags: ["purview","communication-compliance","admin-controls","monitoring","gcc","gcc-high","dod"]
sources:
  - title: "Microsoft 365 Roadmap item 529852"
    url: "https://www.microsoft.com/microsoft-365/roadmap?id=529852"
    kind: "roadmap"
  - title: "Create and manage Communication Compliance policies"
    url: "https://learn.microsoft.com/purview/communication-compliance-policies"
    kind: "learn"
  - title: "Get started with Communication Compliance"
    url: "https://learn.microsoft.com/purview/communication-compliance-configure"
    kind: "learn"
  - title: "Assign permissions in Communication Compliance"
    url: "https://learn.microsoft.com/purview/communication-compliance-permissions"
    kind: "learn"
  - title: "Microsoft Purview service description"
    url: "https://learn.microsoft.com/office365/servicedescriptions/microsoft-365-service-descriptions/microsoft-365-tenantlevel-services-licensing-guidance/microsoft-purview-service-description"
    kind: "learn"
  - title: "Plan for Microsoft Purview compliance and risk management solutions – GCC High deployments"
    url: "https://learn.microsoft.com/office365/servicedescriptions/microsoft-365-service-descriptions/microsoft-365-tenantlevel-services-licensing-guidance/plan-for-microsoft-purview-gcc-high-deployments"
    kind: "learn"
  - title: "Alert policies in the Microsoft Defender portal"
    url: "https://learn.microsoft.com/defender-xdr/alert-policies"
    kind: "learn"
  - title: "Investigate and remediate Communication Compliance alerts"
    url: "https://learn.microsoft.com/purview/communication-compliance-investigate-remediate"
    kind: "learn"
videos: []
related: ["microsoft-purview-compliance-portal-communication-compliance-alert-improvements","microsoft-purview-compliance-portal-communication-compliance-enhanced-policy-conditions","microsoft-purview-compliance-portal-communication-compliance-ability-to-set-a-retention-pe","insider-risk-management"]
controls:
  - governs: "Alert policy triggers for a Communication Compliance policy: number of activities, period and specific users"
    scope: "other"
    ui:
      surface: "Microsoft Defender portal"
      path: "Email & collaboration > Policies & rules > Alert policy > policy > Actions > Edit > Edit Policy > Trigger settings"
      docs: "https://learn.microsoft.com/defender-xdr/alert-policies"
    api: null
    note: "The linked Defender guidance permits modifying Trigger settings if applicable; the Communication Compliance page still refers to Alert policies in Microsoft Purview."
  - governs: "Alert frequency and email alert recipients per policy (the planned settings)"
    scope: "other"
    ui: null
    api: null
    note: "Roadmap only; Learn documents no path or API for these settings at the time of writing (November 2026)."
confidence: "medium"
created: "2026-11-24"
updated: "2026-11-26"
roadmapModified: "2026-11-26T00:16:54"
changes:
  - date: "2026-11-24"
    note: "First briefing on the GCC, GCC High and DoD roadmap item for Communication Compliance alert improvements; Learn does not yet describe the new settings."
  - date: "2026-11-24"
    note: "Checked against Microsoft Learn by gpt-6.1-sol: held: 1 of 44 statements contradicted, 1 unconfirmed; taken offline until corrected"
  - date: "2026-11-24"
    note: "Corrected the alert policy trigger control to the Microsoft Defender portal route Learn gives, and stated that the Communication Compliance and Communication Compliance Admins role groups can configure policies and settings."
  - date: "2026-11-24"
    note: "Checked against Microsoft Learn by gpt-6.1-sol: passed with 0 of 50 statements not yet confirmed"
  - date: "2026-11-26"
    note: "Added the Actions column step to the Defender portal path for alert policy triggers, and updated the roadmap target in the text to August CY2027 as the record now gives it."
  - date: "2026-11-26"
    note: "Checked against Microsoft Learn by gpt-6.1-sol: passed with 0 of 50 statements not yet confirmed"
version: 3
verification:
  status: "verified-with-gaps"
  date: "2026-11-26"
  version: 3
  model: "gpt-6.1-sol"
  engine: "copilot"
  claims: 50
  confirmed: 50
  unconfirmed: 0
  contradicted: 0
  attempts: 0
  hash: "9b58f2f9a505d0881a76eda6a6d6531e"
---

## What's changing

Microsoft Purview Communication Compliance is getting more customisable policy alerts. The roadmap item says admins will be able to customise the alert frequency per policy, and adjust the email alert frequency and recipients, within the policy creation wizard.

Microsoft Learn does not describe these settings yet, so what follows about them is the roadmap's description. What Learn does document is today's behaviour: Communication Compliance creates an alert policy for each policy, and a single email notification is sent once every 24 hours for any alerts, however many messages matched. The default alert policy values are simple aggregation, a threshold of 4 activities and a window of 60 minutes, and the Learn page says the triggers can be changed on the Alert policies page in Microsoft Purview.

On timing, the roadmap item is In development with a target of August CY2027, no preview date, and release phase General Availability. The record lists GCC, GCC High and DoD, and the platform is Web. Microsoft's GCC High planning page lists "Access alerts; notice templates; communication policy dashboard" as Available, which is the existing alerting capability and not these new settings. A separate briefing covers the Worldwide roadmap item: [policy alert improvements](/features/microsoft-purview-compliance-portal-communication-compliance-alert-improvements/).

## Why it matters

Alert email is how reviewers learn that a policy has matched. Learn documents one email every 24 hours today, so changing how often, and to whom, alert emails go affects how quickly flagged messages are triaged and how much reviewer time they take. This is a decision about reviewer workload and response time, not a data change.

Microsoft has not stated what happens to existing policies when the settings arrive. No source says existing alert behaviour changes, so plan on today's behaviour continuing and check a pilot policy once the settings appear in your tenant.

## Risk assessment

**Data exposure**

- No new data source is described. The roadmap repeats Microsoft's standing statement that usernames are pseudonymised by default and role-based access controls are built in. Adding alert email recipients is the point to check: confirm that each new recipient is entitled to know that alerts exist, because Learn does not say what the new emails contain.

**Security & identity**

- Learn lists six roles or role groups for managing Communication Compliance features, including the Communication Compliance and Communication Compliance Admins role groups. Learn gives the Communication Compliance and Communication Compliance Admins role groups permission to configure policies and settings.

**Autonomy & actions**

- No autonomous action is described. Alerts go to reviewers, who decide what to do. A lower alert frequency would delay notification and a higher one would raise email volume; neither remediates anything by itself.

**Change & support**

- The roadmap target is August CY2027 with the item still In development, so internal guidance written now may need revising when the settings appear.

## Cost and licensing

Licence: the Microsoft Purview service description lists Communication Compliance as Included for Microsoft 365 E5/A5/G5, Microsoft Purview Suite and Office 365 E5/A5/G5 (see the table on that page for the full plan list). Learn's getting-started page says administrators need to verify that the organisation has a supported subscription and that users have the appropriate licences assigned.

Meter: the same getting-started page says that detecting inappropriate or risky interactions for non-Microsoft 365 AI data needs pay-as-you-go billing, and that there are no pay-as-you-go requirements or charges for Microsoft 365 Copilot data. No licence or meter specific to the alert settings is published at the time of writing (November 2026).

Indirect cost is reviewer and admin time: changing alert frequency changes how many emails reviewers receive.

## Scope

**Who and where.** Communication Compliance in the Microsoft Purview portal. The roadmap record lists GCC, GCC High and DoD, and the platform is Web.

**Roles.** Learn's permissions page lists six roles or role groups for managing Communication Compliance features, including the Communication Compliance and Communication Compliance Admins role groups. The roadmap names no role for the new settings.

**Rollout.** The roadmap gives an August CY2027 target and no preview date. Rollout mechanics, release channel and the default for existing policies are not stated.

**Prerequisites.** Learn says PowerShell isn't supported for creating and managing Communication Compliance policies, so these policies are managed in the solution itself.

## Governance guidance

### Before rollout

- Record the alert behaviour of each current Communication Compliance policy: who receives alert emails and how often, using today's single email every 24 hours as the baseline.
- Note the alert policy triggers (number of activities, period, specific users) set for each policy on the Alert policies page.
- Tell reviewers that alert email frequency and recipients may change, and name who will own those choices per policy.

### At rollout

- Check whether the policy creation wizard in your tenant shows alert frequency and email recipient settings; Learn does not describe them yet.
- Compare a pilot policy's alert emails before and after to see whether existing policies keep today's behaviour, since Microsoft has not stated it.

### After rollout

- Review alert volumes and reviewer response times against the baseline recorded earlier.
- Review the alert policy triggers on the Alert policies page, which Learn documents as the place to change those defaults today.
- Watch Message center and the roadmap record for a new target date or a status change.

## Governance controls

<p class="controls__lead">Where each control lives. The left column says what the setting decides and how far it reaches; the middle gives the admin centre and the exact path; the right gives the script, API or command that does the same. <em>Not yet documented</em> means Microsoft has not published a control for that surface, so there is nothing to configure yet.</p>

<table class="controls">
<thead><tr><th>Control</th><th>Admin UI</th><th>API and automation</th></tr></thead>
<tbody>
<tr><td data-label="Control"><strong>Alert policy triggers for a Communication Compliance policy: number of activities, period and specific users</strong><br><small class="controls__note">The linked Defender guidance permits modifying Trigger settings if applicable; the Communication Compliance page still refers to Alert policies in Microsoft Purview.</small></td><td data-label="Admin UI"><strong>Microsoft Defender portal</strong><br>Email &amp; collaboration › Policies &amp; rules › Alert policy › policy › Actions › Edit › Edit Policy › Trigger settings <a href="https://learn.microsoft.com/defender-xdr/alert-policies" rel="noopener" class="controls__docs">Learn</a></td><td data-label="API and automation"><em class="controls__gap">Not yet documented</em></td></tr>
<tr><td data-label="Control"><strong>Alert frequency and email alert recipients per policy (the planned settings)</strong><br><small class="controls__note">Roadmap only; Learn documents no path or API for these settings at the time of writing (November 2026).</small></td><td data-label="Admin UI"><em class="controls__gap">Not yet documented</em></td><td data-label="API and automation"><em class="controls__gap">Not yet documented</em></td></tr>
</tbody>
</table>

The first row is an existing control that applies today. It is not the planned per-policy alert settings, and Learn does not say the new settings replace it. Learn documents a minimum threshold of 3 activities for Communication Compliance policies.

The second row states that Learn describes no admin path or API for the planned settings at the time of writing (November 2026). Learn says PowerShell isn't supported for creating and managing Communication Compliance policies.

## Open questions

- Do existing policies keep today's single email every 24 hours when the new settings arrive, or does the default change? Watch Message center and the Communication Compliance policies page on Learn.
- Will the roadmap's August CY2027 target hold, and does it differ for GCC, GCC High and DoD?
- Can recipients sit outside the Communication Compliance role groups?
- Do the new settings change the existing alert policy triggers (activities, window, users) or sit alongside them?
- Is any licence or meter specific to the alert settings published beyond the Communication Compliance subscription requirements?

<!-- rationale
risk: Low. The roadmap describes only per-policy alert frequency and email recipients, with no new data source; the default for existing policies is not stated, so this is rated on today's alert behaviour continuing.
cost: Low. The only cost the sources show is admin and reviewer time; Communication Compliance is listed as included in several plans, and nothing specific to these alert settings is published.
impact: Low. Communication Compliance admins and the reviewers who receive alert emails are the people who would notice a change.
-->

<!-- verifier-findings (2026-11-26, verified-with-gaps; checked by gpt-6.1-sol)
The independent check found fault only with the statements below. This is a correction: change what they name and carry the rest of the page over unchanged.
These are minor and do not hold the page. Where removing the statement, or rewording it in the words the fix gives, settles one, do that; otherwise leave it as it is. A minor finding may also add a source link it names for a statement already on the page. It adds no row and nothing that needs research.
- [supported, minor] controls[0].ui; Governance controls: first table row / admin-path: The Defender route is Email & collaboration > Policies & rules > Alert policy > policy > Actions > Edit > Edit Policy > Trigger settings. | Found: In the Actions column, select the three dots then select Edit. In the Edit Policy pane, select the dropdown menu to adjust the Severity level. If applicable, you can also modify the Trigger settings for the policy. | Fix: Keep the documented route and add to controls[0].note: 'In the Actions column, select the three dots, then Edit.' Apply the same clarification to the rendered row. The omitted unlabelled menu does not change the destination. | Source: https://learn.microsoft.com/defender-xdr/alert-policies
-->
