---
title: "Microsoft Purview Communication Compliance: policy alert improvements"
slug: "microsoft-purview-compliance-portal-communication-compliance-alert-improvements"
roadmapId: 181825
topic: "governance"
products: ["Microsoft Purview"]
summary: "Communication Compliance is adding per-policy alert frequency and email alert frequency and recipients on a new alerts page in the policy wizard. It is on by default; compliance admins should brief reviewers before General Availability."
status: "in-development"
releasePhase: ["General Availability","Preview"]
clouds: ["Worldwide (Standard Multi-Tenant)"]
platforms: ["Web"]
targetDate: "May CY2027"
previewDate: "July CY2025"
risk: "low"
cost: "low"
impact: "low"
defaultState: "on"
action: "prepare"
licensing:
  model: "included"
  notes: "Communication Compliance is included in Microsoft 365 E5/A5/G5, Office 365 E5/A5/G5 and the other plans in the Microsoft Purview service description. No licence specific to these alert improvements is published at the time of writing (November 2026)."
audiences: ["compliance","security","m365-admin"]
tags: ["purview","communication-compliance","admin-controls","monitoring","role-groups"]
sources:
  - title: "Microsoft 365 Roadmap 181825"
    url: "https://www.microsoft.com/microsoft-365/roadmap?id=181825"
    kind: "roadmap"
  - title: "MC920304: (Updated) Microsoft Purview | Communication Compliance: Policy alerts improvements"
    url: "https://admin.microsoft.com/Adminportal/Home#/MessageCenter/:/messages/MC920304"
    kind: "message-center"
  - title: "Create and manage Communication Compliance policies"
    url: "https://learn.microsoft.com/purview/communication-compliance-policies"
    kind: "learn"
  - title: "Get started with Communication Compliance"
    url: "https://learn.microsoft.com/purview/communication-compliance-configure"
    kind: "learn"
  - title: "Plan for Communication Compliance"
    url: "https://learn.microsoft.com/purview/communication-compliance-plan"
    kind: "learn"
  - title: "Assign permissions in Communication Compliance"
    url: "https://learn.microsoft.com/purview/communication-compliance-permissions"
    kind: "learn"
  - title: "Microsoft Purview service description"
    url: "https://learn.microsoft.com/office365/servicedescriptions/microsoft-365-service-descriptions/microsoft-365-tenantlevel-services-licensing-guidance/microsoft-purview-service-description"
    kind: "learn"
  - title: "Set-ProtectionAlert"
    url: "https://learn.microsoft.com/powershell/module/exchangepowershell/set-protectionalert"
    kind: "learn"
  - title: "Which people can configure Communication Compliance policies and settings, including the policy wizard (PowerShell)"
    url: "https://learn.microsoft.com/powershell/module/exchangepowershell/add-rolegroupmember"
    kind: "learn"
videos: []
related: ["microsoft-purview-communication-compliance-alert-improvements","microsoft-purview-compliance-portal-communication-compliance-enhanced-policy-conditions","microsoft-purview-compliance-portal-communication-compliance-ability-to-set-a-retention-pe"]
controls:
  - governs: "Which people can configure Communication Compliance policies and settings, including the policy wizard"
    scope: "tenant"
    ui:
      surface: "Microsoft Purview portal"
      path: "Settings > Roles and groups > Role groups > Communication Compliance > Edit > Choose users"
      docs: "https://learn.microsoft.com/purview/communication-compliance-permissions"
    api:
      kind: "powershell"
      call: "Add-RoleGroupMember -Identity \"Communication Compliance\" -Member \"<user-UPN>\""
      docs: "https://learn.microsoft.com/powershell/module/exchangepowershell/add-rolegroupmember"
    note: "The Communication Compliance and Communication Compliance Admins role groups can configure policies and settings. Run in Security & Compliance PowerShell."
  - governs: "Alert policy triggers for a Communication Compliance policy: number of activities, period and specific users"
    scope: "other"
    ui:
      surface: "Microsoft Purview portal"
      path: "Alert policies"
      docs: "https://learn.microsoft.com/purview/communication-compliance-policies"
    api: null
    note: "Existing control, not the new alerts page. Learn names the Alert policies page but gives no route to it."
  - governs: "Tenant-wide switch for the new alert frequency and recipient settings"
    scope: "tenant"
    ui: null
    api: null
    note: "MC920304 says the feature is available by default and describes no switch."
confidence: "medium"
created: "2026-11-17"
updated: "2026-11-26"
roadmapModified: "2026-11-26T00:16:54"
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
  - date: "2026-11-20"
    note: "Corrected the roles statement: Learn lists the Communication Compliance and Communication Compliance Admins role groups as able to configure policies and settings."
  - date: "2026-11-20"
    note: "Checked against Microsoft Learn by gpt-6.1-sol: passed with 0 of 53 statements not yet confirmed"
  - date: "2026-11-25"
    note: "Action set to prepare because MC920304 says the feature is available by default; removed two checklist items without control rows; timeline updated to MC920304's 25 November 2026 revision (General Availability late May to mid-August 2027)."
  - date: "2026-11-25"
    note: "Checked against Microsoft Learn by gpt-6.1-sol: passed: all 57 statements confirmed"
  - date: "2026-11-26"
    note: "Roadmap target moved from January CY2027 to May CY2027, now matching MC920304's General Availability window; added the role group control with its Add-RoleGroupMember call and the licence requirement for covered users."
  - date: "2026-11-26"
    note: "Checked against Microsoft Learn by gpt-6.1-sol: passed with 1 of 66 statements not yet confirmed"
version: 5
verification:
  status: "verified-with-gaps"
  date: "2026-11-26"
  version: 5
  model: "gpt-6.1-sol"
  engine: "copilot"
  claims: 66
  confirmed: 65
  unconfirmed: 1
  contradicted: 0
  attempts: 0
  hash: "d6b32d1d849167f831e4ea01ef5c1c56"
---

## What's changing

Microsoft Purview Communication Compliance is improving the capabilities and customisation of policy alerts. The roadmap item describes this only as "improving the alerting capabilities and customization in Communication Compliance". Microsoft's notice MC920304 gives the detail: admins will be able to customise the alert frequency per policy, and adjust the email alert frequency and recipients, in the policy creation wizard by going to a new alerts page. The post says the new feature is available by default.

Microsoft Learn does not describe the new alerts page yet, so what follows about its behaviour is the Message Center description. Learn does document today's behaviour. Communication Compliance automatically creates an alert policy for each policy, and a single email notification is sent once every 24 hours for any alerts, regardless of how many messages matched. By default the alert policy uses simple aggregation, a threshold of 4 activities and a window of 60 minutes.

On timing, the roadmap item is In development with a target of May CY2027, a preview date of July CY2025, and release phases General Availability and Preview. MC920304, last updated 25 November 2026, gives a public preview rollout beginning October 2026 (previously late July 2025) and expected to complete by the end of October 2026 (previously mid-August 2025), and a General Availability (Worldwide) rollout beginning late May 2027 and expected to complete by mid-August 2027. The post sets no act-by date. The roadmap lists Worldwide (Standard Multi-Tenant) and the Web platform.

## Why it matters

Alert email is how reviewers learn that a policy has matched. Today Learn documents one email every 24 hours, so letting each policy set how often alerts and alert emails go out, and to whom, changes how quickly flagged messages are triaged and how much reviewer time they take. For regulated teams, a policy that emails too rarely can delay a review; one that emails too often adds noise.

MC920304 says the feature is available by default, so the alerts page will appear in the policy wizard without an admin turning it on. Neither the post nor the roadmap says whether existing policies keep today's alert behaviour on arrival, so the decision worth making now is who owns alert frequency and recipients for each policy.

## Risk assessment

**Data exposure**

- No new data source is described. Adding email alert recipients is the one point to check: confirm that each recipient is entitled to know a policy has matched, because MC920304 does not say what an alert email contains or whether recipients must hold a Communication Compliance role.

**Security & identity**

- Learn lists the Communication Compliance and Communication Compliance Admins role groups as able to configure policies and settings, so the people in those groups will control the new alert settings in the policy wizard. Membership is the control (see the table).

**Autonomy & actions**

- No change: alerts inform reviewers, who decide what to do. A lower alert frequency delays notice and a higher one raises email volume; neither remediates anything.

**Change & support**

- MC920304 moved the public preview from late July 2025 to October 2026, and gives General Availability as late May to mid-August 2027. Expect reviewer questions when the alerts page appears in the wizard.

## Cost and licensing

**Licence.** The Microsoft Purview service description lists Communication Compliance as included in Microsoft 365 E5/A5/G5, Office 365 E5/A5/G5, Microsoft Purview Suite and the other plans in its table. The Communication Compliance planning page says users covered by policies must have a Microsoft Purview Suite (formerly Microsoft 365 E5 Compliance) licence, an Office 365 Enterprise E3 licence with the Advanced Compliance add-on, or be included in an Office 365 Enterprise E5 subscription. Nothing specific to the alert improvements is published.

**Meter.** The getting-started page says pay-as-you-go billing is needed to detect inappropriate or risky interactions for non-Microsoft 365 AI data, and that there are no pay-as-you-go requirements or charges for Microsoft 365 Copilot data. Microsoft publishes no meter for the alert improvements at the time of writing (November 2026).

**Indirect cost.** Admin time to set alert frequency and recipients per policy, and reviewer time that rises or falls with alert email volume.

## Scope

**Who and where.** Communication Compliance in the Microsoft Purview portal; Worldwide (Standard Multi-Tenant) on the roadmap record; Web.

**Roles.** The Communication Compliance and Communication Compliance Admins role groups can configure policies and settings, according to Learn's permissions page. Microsoft Entra Global Administrator and Compliance Administrator, and the Purview Organization Management and Compliance Administrator role groups, have the same solution permissions as Communication Compliance Admins.

**Rollout.** Public preview from October 2026, General Availability from late May 2027 to mid-August 2027 (MC920304); available by default.

**Automation.** Learn says PowerShell isn't supported for creating and managing Communication Compliance policies.

## Governance guidance

### Before rollout

- Record, for each Communication Compliance policy, who receives alert emails today and the alert policy triggers set on the Alert policies page, as the baseline.
- Check who holds the Communication Compliance and Communication Compliance Admins role groups, since they will set alert frequency and recipients in the policy wizard.
- Tell reviewers that alert email frequency and recipients may change per policy, and name who decides them.

### At rollout

- Open the policy creation wizard and confirm whether the new alerts page is present in your tenant.
- Compare one pilot policy's alert emails with the baseline to see whether existing policies kept today's behaviour.

### After rollout

- Review the alert policy triggers (number of activities, period, specific users) on the Alert policies page against the new per-policy settings.
- Review role group membership after any change of alert recipients.
- Watch MC920304 in Message center for changes to the General Availability window.

## Governance controls

<p class="controls__lead">Where each control lives. The left column says what the setting decides and how far it reaches; the middle gives the admin centre and the exact path; the right gives the script, API or command that does the same. <em>Not yet documented</em> means Microsoft has not published a control for that surface, so there is nothing to configure yet.</p>

<table class="controls">
<thead><tr><th>Control</th><th>Admin UI</th><th>API and automation</th></tr></thead>
<tbody>
<tr><td data-label="Control"><strong>Which people can configure Communication Compliance policies and settings, including the policy wizard</strong><br><small>Tenant</small><br><small class="controls__note">The Communication Compliance and Communication Compliance Admins role groups can configure policies and settings. Run in Security &amp; Compliance PowerShell.</small></td><td data-label="Admin UI"><strong>Microsoft Purview portal</strong><br>Settings › Roles and groups › Role groups › Communication Compliance › Edit › Choose users <a href="https://learn.microsoft.com/purview/communication-compliance-permissions" rel="noopener" class="controls__docs">Learn</a></td><td data-label="API and automation"><strong>PowerShell</strong><br><code>Add-RoleGroupMember -Identity &quot;Communication Compliance&quot; -Member &quot;&lt;user-UPN&gt;&quot;</code> <a href="https://learn.microsoft.com/powershell/module/exchangepowershell/add-rolegroupmember" rel="noopener" class="controls__docs">Learn</a></td></tr>
<tr><td data-label="Control"><strong>Alert policy triggers for a Communication Compliance policy: number of activities, period and specific users</strong><br><small class="controls__note">Existing control, not the new alerts page. Learn names the Alert policies page but gives no route to it.</small></td><td data-label="Admin UI"><strong>Microsoft Purview portal</strong><br>Alert policies <a href="https://learn.microsoft.com/purview/communication-compliance-policies" rel="noopener" class="controls__docs">Learn</a></td><td data-label="API and automation"><em class="controls__gap">Not yet documented</em></td></tr>
<tr><td data-label="Control"><strong>Tenant-wide switch for the new alert frequency and recipient settings</strong><br><small>Tenant</small><br><small class="controls__note">MC920304 says the feature is available by default and describes no switch.</small></td><td data-label="Admin UI"><em class="controls__gap">Not yet documented</em></td><td data-label="API and automation"><em class="controls__gap">Not yet documented</em></td></tr>
</tbody>
</table>

The alert policy triggers row is an existing control that applies today; it is not the new alerts page, and Learn does not say whether the page replaces it. Learn gives a minimum threshold of 3 activities for Communication Compliance alert policies. Set-ProtectionAlert in Security & Compliance PowerShell modifies only alert policies created with New-ProtectionAlert, and Communication Compliance creates its alert policies automatically, so Microsoft Learn documents no cmdlet for these triggers at the time of writing (November 2026). Role group changes can take up to 30 minutes to apply. MC920304 describes the new alert settings as part of each policy's creation wizard and describes no tenant-wide switch.

## Open questions

- Do existing policies keep the single email every 24 hours when the alerts page arrives, or does their default change? Watch MC920304 and the Learn page on Communication Compliance policies.
- Can email alert recipients be people outside the Communication Compliance role groups, and what does an alert email contain?
- Does the new alerts page replace the triggers on the Alert policies page or sit alongside them?
- Will Learn document the alerts page and its options while the public preview runs?

<!-- rationale
risk: Low. The change adjusts when alerts and alert emails are produced for each policy; Microsoft describes no new data access, and alerts still go to people working inside Communication Compliance.
cost: Low. Communication Compliance is included in the subscriptions the Microsoft Purview service description lists; the only cost the sources show for this change is admin and reviewer time, and no separate licence for it is published.
impact: Low. Communication Compliance admins and the reviewers who receive alert emails notice the change; Microsoft describes nothing new for the users whose messages are checked.
-->

<!-- verifier-findings (2026-11-26, verified-with-gaps; checked by gpt-6.1-sol)
The independent check found fault only with the statements below. This is a correction: change what they name and carry the rest of the page over unchanged.
These are minor and do not hold the page. Where removing the statement, or rewording it in the words the fix gives, settles one, do that; otherwise leave it as it is. A minor finding may also add a source link it names for a statement already on the page. It adds no row and nothing that needs research.
- [supported, minor] Why it matters / behaviour: Alert email notifies recipients that policy matches have generated an alert. | Found: After the required number of policy matches is met for a particular alert, the alert is created and email is sent to the alert recipient. | Fix: Add https://learn.microsoft.com/purview/communication-compliance-investigate-remediate to sources for the explanation of alert email notifications. | Source: https://learn.microsoft.com/purview/communication-compliance-investigate-remediate
- [unsupported, minor] rationale: risk / behaviour: Following the change, alerts still go to people working inside Communication Compliance. | Found: Searched: "Communication Compliance" "email" "alert recipients" "role". Read MC920304, communication-compliance-plan, communication-compliance-permissions and communication-compliance-policies. Reviewer access is documented, but the new email recipients' relationship to reviewers is not. | Fix: Remove ', and alerts still go to people working inside Communication Compliance' from the risk rationale. Keep the existing advice to confirm each recipient's entitlement; the notice does not specify who the new email recipients can be.
-->
