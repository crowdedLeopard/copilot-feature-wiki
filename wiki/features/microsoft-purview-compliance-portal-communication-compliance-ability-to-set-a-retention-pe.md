---
title: "Microsoft Purview Communication Compliance: set how long policy matches are retained"
slug: "microsoft-purview-compliance-portal-communication-compliance-ability-to-set-a-retention-pe"
roadmapId: 68688
topic: "governance"
products: ["Microsoft Purview"]
summary: "The roadmap plans a retention period for content a Communication Compliance policy captures. Learn already documents a Policy Match Preservation setting with a 1-year default. Compliance admins should check it against their records rules."
status: "in-development"
releasePhase: ["General Availability"]
clouds: ["Worldwide (Standard Multi-Tenant)"]
platforms: ["Web"]
targetDate: "January CY2027"
previewDate: "December CY2026"
risk: "medium"
cost: "low"
impact: "low"
defaultState: "unknown"
action: "review"
licensing:
  model: "included"
  notes: "The Microsoft Purview service description lists Communication Compliance as Included for Microsoft 365 E5/A5/G5, Microsoft Purview Suite and Office 365 E5/A5/G5. Pay-as-you-go billing is needed for non-Microsoft 365 AI data. No licence specific to the retention setting is published."
audiences: ["compliance","security","m365-admin"]
tags: ["purview","communication-compliance","retention","admin-controls"]
sources:
  - title: "Microsoft 365 Roadmap 68688"
    url: "https://www.microsoft.com/microsoft-365/roadmap?id=68688"
    kind: "roadmap"
  - title: "Investigate and remediate Communication Compliance alerts"
    url: "https://learn.microsoft.com/purview/communication-compliance-investigate-remediate"
    kind: "learn"
  - title: "Create and manage Communication Compliance policies"
    url: "https://learn.microsoft.com/purview/communication-compliance-policies"
    kind: "learn"
  - title: "Assign permissions in Communication Compliance"
    url: "https://learn.microsoft.com/purview/communication-compliance-permissions"
    kind: "learn"
  - title: "Get started with Communication Compliance"
    url: "https://learn.microsoft.com/purview/communication-compliance-configure"
    kind: "learn"
  - title: "Plan for Communication Compliance"
    url: "https://learn.microsoft.com/purview/communication-compliance-plan"
    kind: "learn"
  - title: "Use Communication Compliance reports and audits"
    url: "https://learn.microsoft.com/purview/communication-compliance-reports-audits"
    kind: "learn"
  - title: "Audit log activities"
    url: "https://learn.microsoft.com/purview/audit-log-activities"
    kind: "learn"
  - title: "Detect channel signals with Communication Compliance"
    url: "https://learn.microsoft.com/purview/communication-compliance-channels"
    kind: "learn"
  - title: "Set-SupervisoryReviewPolicyV2"
    url: "https://learn.microsoft.com/powershell/module/exchangepowershell/set-supervisoryreviewpolicyv2"
    kind: "learn"
  - title: "Add-RoleGroupMember"
    url: "https://learn.microsoft.com/powershell/module/exchangepowershell/add-rolegroupmember"
    kind: "learn"
  - title: "Microsoft Purview service description"
    url: "https://learn.microsoft.com/office365/servicedescriptions/microsoft-365-service-descriptions/microsoft-365-tenantlevel-services-licensing-guidance/microsoft-purview-service-description"
    kind: "learn"
videos: []
related: ["microsoft-purview-compliance-portal-communication-compliance-alert-improvements","microsoft-purview-compliance-portal-communication-compliance-enhanced-policy-conditions","auditing"]
controls:
  - governs: "Global time period for preserving Communication Compliance policy matches"
    scope: "tenant"
    ui:
      surface: "Microsoft Purview portal"
      path: "Settings > Communication Compliance > Policy Match Preservation"
      docs: "https://learn.microsoft.com/purview/communication-compliance-investigate-remediate"
    api: null
    note: "Options are 1 month, 6 months, 1 year or 7 years; the default is 1 year. Roadmap item 68688 is not confirmed to be this setting."
  - governs: "Preservation period for the policy matches of one policy"
    scope: "other"
    ui:
      surface: "Microsoft Purview portal"
      path: "Communication Compliance > Policies > policy > More actions > Edit > Name and describe your policy > Preserve policy matches"
      docs: "https://learn.microsoft.com/purview/communication-compliance-investigate-remediate"
    api: null
    note: "The Set-SupervisoryReviewPolicyV2 reference lists -PreservationPeriodInDays without describing what it sets; Learn says PowerShell is not supported for managing Communication Compliance policies."
  - governs: "Who can configure Communication Compliance policies and settings"
    scope: "tenant"
    ui:
      surface: "Microsoft Purview portal"
      path: "Settings > Roles and groups > Role groups > role group > Edit > Choose users"
      docs: "https://learn.microsoft.com/purview/communication-compliance-permissions"
    api:
      kind: "powershell"
      call: "Add-RoleGroupMember -Identity <role group> -Member <user>"
      docs: "https://learn.microsoft.com/powershell/module/exchangepowershell/add-rolegroupmember"
    note: "Members scoped by administrative units can configure policies only within their assigned scope and cannot configure global settings. Use an unrestricted administrator for the global period."
confidence: "medium"
created: "2026-11-23"
updated: "2026-11-24"
roadmapModified: "2026-06-25T23:15:45"
changes:
  - date: "2026-11-23"
    note: "First briefing on Communication Compliance policy retention, based on roadmap item 68688 and Learn's documentation of the Policy Match Preservation setting."
  - date: "2026-11-23"
    note: "Checked against Microsoft Learn by gpt-6.1-sol: held: 4 of 61 statements contradicted, 1 unconfirmed; taken offline until corrected"
  - date: "2026-11-24"
    note: "Correction: global period changes apply going forward; roles qualified for administrative-unit scoping; per-policy PowerShell call removed as undocumented; two checklist bullets removed."
  - date: "2026-11-24"
    note: "Checked against Microsoft Learn by gpt-6.1-sol: passed with 1 of 62 statements not yet confirmed"
version: 2
verification:
  status: "verified-with-gaps"
  date: "2026-11-24"
  version: 2
  model: "gpt-6.1-sol"
  engine: "copilot"
  claims: 62
  confirmed: 61
  unconfirmed: 1
  contradicted: 0
  attempts: 0
  hash: "8b47b10999449d192b4d07f399cff81a"
---

## What's changing

The roadmap item (68688) says Microsoft is "introducing the ability to define how long content captured by a Communication Compliance policy is retained". The record gives the status as In development, with a preview date of December CY2026 and a target date of January CY2027. It lists release phase General Availability, the Worldwide (Standard Multi-Tenant) cloud and the Web platform. These dates are Microsoft's targets, not commitments.

Microsoft Learn already documents a setting of this kind, called **Policy Match Preservation**. When a Communication Compliance policy finds a matching message, the solution stores a copy of the message, not the original. Learn says that starting June 1, 2025, you can use the setting to specify how long to save policy matches, with a choice of 1 month, 6 months, 1 year or 7 years, and a default of 1 year. A preservation period chosen in a policy takes precedence over the global setting. The system automatically deletes policy matches older than the selected period. Only the copies in Communication Compliance are deleted; Learn says original messages in user shards are not, and points to Microsoft Purview Data Lifecycle Management for a retention policy on the originals. The Learn channel-signals page still says Communication Compliance policies retain copies of messages used for analysis and investigation for as long as a policy is in place, which differs from the preservation-period behaviour documented on the investigate and remediate page.

The roadmap says In development while Learn describes the setting as available since 2025. Neither source says whether item 68688 is that setting or a further change to it, so this briefing treats Learn's description of Policy Match Preservation as background, not as a confirmed description of the roadmap item. Learn's own page gives both April 1, 2025 and June 1, 2025 as the date the global setting takes effect.

## Why it matters

Policy matches are the copies that reviewers read and that investigators escalate, so how long they last is a records decision for the compliance owner. The roadmap description names SEC and FINRA as examples of the regulations Communication Compliance helps detect violations of. Learn documents a default of 1 year for the global setting, with automatic deletion after that. If your obligations need matches kept longer, the default may not meet them, and the options Learn lists run to 7 years.

Microsoft has not stated what item 68688 does on arrival, so no source says existing behaviour changes. Do not wait for the January CY2027 target: the Learn-documented setting can be checked in the portal now. Changes to the global period apply going forward; earlier matches keep their previously stamped period.

## Risk assessment

**Data exposure**

- Longer preservation keeps copies of flagged messages, which can contain sensitive or confidential information, in Communication Compliance for up to 7 years per Learn. A shorter period means those copies are permanently deleted sooner. Set the period deliberately for each policy and for the global setting (rows 1 and 2 of the table).
- Learn says deletion applies to the copies, not to originals in user shards. Keeping the originals is a separate decision under Data Lifecycle Management retention.

**Security & identity**

- Learn lists the Communication Compliance and Communication Compliance Admins role groups as able to "Configure policies and settings". Unrestricted members decide how long copies of flagged messages exist, and can give one policy a period that overrides the global value. Members scoped by administrative units can configure policies only within their assigned scope and cannot configure global settings. Use an unrestricted administrator for the global period.

**Autonomy & actions**

- Deletion is automatic: Learn says the system permanently deletes policy matches older than the selected period, and no reviewer approves it. A period that is too short removes matches that an open investigation may still need.

**Change & support**

- The roadmap and Learn disagree on status, and Learn's page gives more than one start date for the global setting, so reviewers and the compliance owner may have different expectations about what is already enforced.
- Learn says a change to the global time period applies going forward. Matches already stamped with an earlier period keep it.

## Cost and licensing

**Licence.** The Microsoft Purview service description lists Communication Compliance as Included for Microsoft 365 E5/A5/G5, Microsoft Purview Suite and Office 365 E5/A5/G5. The Communication Compliance planning page says users covered by policies need a Microsoft Purview Suite licence, an Office 365 Enterprise E3 licence with the Advanced Compliance add-on, or inclusion in an Office 365 Enterprise E5 subscription.

**Meter.** The Get started page says pay-as-you-go billing must be enabled to detect inappropriate or risky interactions for non-Microsoft 365 AI data, and that there are no pay-as-you-go billing requirements or charges for Microsoft 365 Copilot data. The pages describing Policy Match Preservation publish no separate licence or meter for the setting at the time of writing (November 2026).

**Indirect cost.** Admin time to review each policy. Learn says policy matches are stored in a scoped mailbox for each policy, with a current 100-GB storage size and 1 million message limit, and that the system stops capturing matches if the limit is reached. Keeping matches for longer gives them longer to approach that limit.

## Scope

**Who and where.** Communication Compliance in the Microsoft Purview portal. The roadmap record lists Worldwide (Standard Multi-Tenant) only, on the Web platform. Learn says the setting applies to the policy matches of Communication Compliance policies.

**Roles.** Learn's permissions page marks "Configure policies and settings" as available to the Communication Compliance and Communication Compliance Admins role groups. It says the Microsoft Entra Global Administrator and Compliance Administrator roles, and the Microsoft Purview portal Organization Management and Compliance Administrator role groups, have the same solution permissions as the Communication Compliance Admins role group. Members scoped by administrative units can configure policies only within their assigned scope and cannot configure global settings. Use an unrestricted administrator for the global period.

**Rollout.** Not stated for item 68688. The roadmap gives a preview date of December CY2026 and a target of January CY2027.

## Governance guidance

### Before rollout

- Record the global Policy Match Preservation value and each policy's **Preserve policy matches** selection. An unrestricted administrator in the Communication Compliance Admins role group does this in the Microsoft Purview portal.
- Compare each period with your records-retention obligations for monitored communications, and agree the answer with your compliance or legal owner.
- Confirm who is in the Communication Compliance and Communication Compliance Admins role groups, and whether any member is scoped by an administrative unit, since scoped members cannot change the global setting.

### At rollout

- Set the global period to the one most policies need, then give the exceptions their own period in the policy workflow, remembering that a policy-level choice takes precedence over the global one.

### After rollout

- Watch Message center and the Learn Investigate and remediate page for any change to the period options or the default.

## Governance controls

<p class="controls__lead">Where each control lives. The left column says what the setting decides and how far it reaches; the middle gives the admin centre and the exact path; the right gives the script, API or command that does the same. <em>Not yet documented</em> means Microsoft has not published a control for that surface, so there is nothing to configure yet.</p>

<table class="controls">
<thead><tr><th>Control</th><th>Admin UI</th><th>API and automation</th></tr></thead>
<tbody>
<tr><td data-label="Control"><strong>Global time period for preserving Communication Compliance policy matches</strong><br><small>Tenant</small><br><small class="controls__note">Options are 1 month, 6 months, 1 year or 7 years; the default is 1 year. Roadmap item 68688 is not confirmed to be this setting.</small></td><td data-label="Admin UI"><strong>Microsoft Purview portal</strong><br>Settings › Communication Compliance › Policy Match Preservation <a href="https://learn.microsoft.com/purview/communication-compliance-investigate-remediate" rel="noopener" class="controls__docs">Learn</a></td><td data-label="API and automation"><em class="controls__gap">Not yet documented</em></td></tr>
<tr><td data-label="Control"><strong>Preservation period for the policy matches of one policy</strong><br><small class="controls__note">The Set-SupervisoryReviewPolicyV2 reference lists -PreservationPeriodInDays without describing what it sets; Learn says PowerShell is not supported for managing Communication Compliance policies.</small></td><td data-label="Admin UI"><strong>Microsoft Purview portal</strong><br>Communication Compliance › Policies › policy › More actions › Edit › Name and describe your policy › Preserve policy matches <a href="https://learn.microsoft.com/purview/communication-compliance-investigate-remediate" rel="noopener" class="controls__docs">Learn</a></td><td data-label="API and automation"><em class="controls__gap">Not yet documented</em></td></tr>
<tr><td data-label="Control"><strong>Who can configure Communication Compliance policies and settings</strong><br><small>Tenant</small><br><small class="controls__note">Members scoped by administrative units can configure policies only within their assigned scope and cannot configure global settings. Use an unrestricted administrator for the global period.</small></td><td data-label="Admin UI"><strong>Microsoft Purview portal</strong><br>Settings › Roles and groups › Role groups › role group › Edit › Choose users <a href="https://learn.microsoft.com/purview/communication-compliance-permissions" rel="noopener" class="controls__docs">Learn</a></td><td data-label="API and automation"><strong>PowerShell</strong><br><code>Add-RoleGroupMember -Identity &lt;role group&gt; -Member &lt;user&gt;</code> <a href="https://learn.microsoft.com/powershell/module/exchangepowershell/add-rolegroupmember" rel="noopener" class="controls__docs">Learn</a></td></tr>
</tbody>
</table>

Learn documents the global setting and the per-policy option as portal controls. The Learn policies page says PowerShell isn't supported for creating and managing Communication Compliance policies, while the Set-SupervisoryReviewPolicyV2 reference lists -PreservationPeriodInDays without describing what it sets, so the table gives no API for the per-policy control.

A period set in a policy takes precedence over the global setting, and a policy left on **Global Setting** follows it. Learn says a change to the global time period applies going forward.

The audit log records policy creation, update and deletion as SupervisionPolicyCreated, SupervisionPolicyUpdated and SupervisionPolicyDeleted, visible through Search-UnifiedAuditLog. Learn's list of Communication Compliance audit activities names no operation for the global Policy Match Preservation setting.

## Open questions

- Is roadmap item 68688 the Policy Match Preservation setting that Learn already documents, or a further change such as new period options? Watch the roadmap record and the Learn Investigate and remediate page.
- What happens to existing policies on arrival, and does the 1-year default that Learn documents for the global setting stay the same? Microsoft has not stated either for this item.
- Which dates does Learn intend for the global setting, given that its page gives both April 1, 2025 and June 1, 2025?
- What does the -PreservationPeriodInDays parameter of Set-SupervisoryReviewPolicyV2 set, and is any API documented for the global setting? Watch the cmdlet reference.
- Does the audit log record a change to the global Policy Match Preservation setting? Watch the Audit log activities page.

<!-- rationale
risk: Medium. Learn says the system automatically and permanently deletes Communication Compliance policy matches older than the chosen period, and the global default is 1 year. Whether this roadmap item changes that is not stated.
cost: Low. Communication Compliance is listed as included in Microsoft 365 E5/A5/G5 and Office 365 E5/A5/G5, and no licence or meter specific to this setting is published, so the cost is admin time.
impact: Low. Communication Compliance administrators configure it, and it decides how long the stored copies of matched messages that reviewers work from remain available.
-->

<!-- verifier-findings (2026-11-24, verified-with-gaps; checked by gpt-6.1-sol)
The independent check found fault only with the statements below. This is a correction: change what they name and carry the rest of the page over unchanged.
Correct each of these with the smallest change that removes the fault: delete the statement, narrow it, or put the finding's own "Found" text or worded replacement in its place. Where a fix asks for more than that (a new row, an explanation, further references), do only the part that removes the fault. A correction adds no control rows.
- [unsupported, major] Risk assessment: Autonomy & actions / behaviour: No reviewer approves deletion of expired policy matches. | Found: Searched: Policy Match Preservation approval reviewer deletion. Read the investigate/remediate page, including preservation and remediation instructions; it states automatic deletion, but does not explicitly state that no reviewer approves it. | Fix: Remove ', and no reviewer approves it' from the Autonomy & actions bullet; retain the supported statement that deletion is automatic.
-->
