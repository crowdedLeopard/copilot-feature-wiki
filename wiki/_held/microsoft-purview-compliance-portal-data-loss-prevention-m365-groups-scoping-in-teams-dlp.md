---
title: "Microsoft Purview: Teams DLP policies scoped to Microsoft 365 Groups extend to 1:1 and group chats"
slug: "microsoft-purview-compliance-portal-data-loss-prevention-m365-groups-scoping-in-teams-dlp"
roadmapId: 401127
topic: "governance"
products: ["Microsoft Purview"]
summary: "The roadmap says Teams DLP policies scoped to Microsoft 365 Groups will automatically cover chats in other groups and 1:1/n chats. Check which policies are group-scoped and whether OCR in Teams chat is on."
status: "in-development"
releasePhase: ["General Availability"]
clouds: ["GCC","GCC High","DoD"]
platforms: ["Web"]
targetDate: "November CY2026"
previewDate: null
risk: "medium"
cost: "low"
impact: "medium"
defaultState: "on"
action: "act-now"
licensing:
  model: "included"
  notes: "Microsoft Learn says DLP for Teams chat and channel messages is included for Office 365 E5/A5/G5, Microsoft 365 E5/A5/G5 and related compliance plans, and that Teams chat support requires an E5 licence. A separate price for this change is not published."
audiences: ["compliance","security","m365-admin"]
tags: ["dlp","purview","teams","microsoft-365-groups","ocr","policy","gcc","gcc-high","dod"]
sources:
  - title: "Microsoft 365 Roadmap 401127"
    url: "https://www.microsoft.com/microsoft-365/roadmap?id=401127"
    kind: "roadmap"
  - title: "Data loss prevention and Microsoft Teams"
    url: "https://learn.microsoft.com/purview/dlp-microsoft-teams"
    kind: "learn"
  - title: "Learn about optical character recognition in Microsoft Purview"
    url: "https://learn.microsoft.com/purview/ocr-learn-about"
    kind: "learn"
  - title: "Set-DlpCompliancePolicy"
    url: "https://learn.microsoft.com/powershell/module/exchangepowershell/set-dlpcompliancepolicy"
    kind: "learn"
videos: []
related: []
controls:
  - governs: "Whether a DLP policy applies to Teams chat and channel messages"
    scope: "tenant"
    ui:
      surface: "Microsoft Purview portal"
      path: "Microsoft Purview portal > Data loss prevention > Policies > Edit policy > Choose locations to apply the policy > Teams chat and channel messages"
      docs: "https://learn.microsoft.com/purview/dlp-microsoft-teams"
    api:
      kind: "powershell"
      call: "Set-DlpCompliancePolicy -Identity <policy> -AddTeamsLocation <value>"
      docs: "https://learn.microsoft.com/powershell/module/exchangepowershell/set-dlpcompliancepolicy"
    note: "Needs a role with permission to edit DLP policies; run the cmdlet in Security & Compliance PowerShell."
confidence: "medium"
created: "2026-11-24"
updated: "2026-11-24"
roadmapModified: "2025-10-27T23:15:26"
changes:
  - date: "2026-11-24"
    note: "First briefing for roadmap item 401127: Teams DLP scoping to Microsoft 365 Groups extends to 1:1/n chats, with the OCR exception."
  - date: "2026-11-24"
    note: "Checked against Microsoft Learn by gpt-6.1-sol: held: 2 of 47 statements contradicted, 0 unconfirmed; taken offline until corrected"
version: 1
verification:
  status: "held"
  date: "2026-11-24"
  version: 1
  model: "gpt-6.1-sol"
  engine: "copilot"
  claims: 47
  confirmed: 45
  unconfirmed: 0
  contradicted: 2
  attempts: 1
  hash: "b4b6c4ef03d3c4641db950d6092c69a1"
---

## What's changing

Microsoft plans to widen what a Teams data loss prevention (DLP) policy protects when the policy is scoped to Microsoft 365 Groups. The roadmap item says that members of Teams standard and shared channel chats associated with the scoped groups are protected today, and that the change will automatically extend protection to standard and shared channel chats in other Microsoft 365 Groups and to 1:1/n (non-channel) chats.

The roadmap item adds that administrators will no longer need to add users, security groups or other Microsoft 365 groups to protect these chats. The exception is customers who have enabled optical character recognition (OCR) in Teams chat, who still need to add them.

The Learn page [Data loss prevention and Microsoft Teams](https://learn.microsoft.com/purview/dlp-microsoft-teams) already lists Microsoft 365 groups as a policy scope that protects both 1:1/n chats and standard, private and shared channel messages. The roadmap's description and that table do not read the same way, so it is unclear which behaviour the change alters; treat the roadmap's wording as the plan.

The roadmap record gives the status as In development, with a target of November CY2026, for General Availability on the web in GCC, GCC High and DoD. The target is Microsoft's plan, not a shipped date.

## Why it matters

If you scope Teams DLP policies to Microsoft 365 Groups, the set of conversations those policies evaluate is planned to grow without any change on your side. A rule that blocks or flags messages containing sensitive information could therefore start acting on 1:1 and group chats, and on channel chats in groups you did not list, where users did not meet it before.

The roadmap states the extension is automatic, so the sensible view is that doing nothing means accepting the wider coverage. Review group-scoped Teams policies and their actions before the target month, and tell service desk staff what a blocked chat message looks like.

## Risk assessment

**Data exposure**

- Wider coverage is the point of the change: chats that a group-scoped policy did not evaluate before are planned to be evaluated, which narrows the gap for sensitive information shared in 1:1/n chats.
- Customers who have enabled OCR in Teams chat are the stated exception: the roadmap says they still need to add users, security groups or other Microsoft 365 groups, so images in some chats could stay outside a group-scoped policy until they do.

**Security & identity**

- DLP evaluation in cross-tenant chats follows the hosting tenant, per the Learn page, so the extension does not by itself bring another tenant's users under your policies when they are in a chat hosted elsewhere.
- Policy scope still depends on group membership; changes to Microsoft 365 Groups membership change who is covered.

**Autonomy & actions**

- Policy actions in the Teams location, such as blocking a message, apply automatically once a chat is in scope. The Learn page describes flagged and blocked messages and a "Your message has been blocked" activity entry for the sender.

**Change & support**

- Expect questions from users whose chats are blocked or flagged for the first time. The Learn page says policy tips in Teams can offer an override or a notification to an admin where the policy allows it.
- Policy edits take about an hour to sync, according to the Learn page, which affects how quickly a fix reaches users.

## Cost and licensing

Microsoft Learn says DLP capabilities for Teams chat and channel messages are included for Office 365 E5/A5/G5, Microsoft 365 E5/A5/G5, Microsoft 365 E5/A5/G5 Information Protection and Governance, and Microsoft 365 E5/A5/G5/F5 Compliance and F5 Security & Compliance, and that support for DLP protection in Teams chat requires an E5 licence ([Data loss prevention and Microsoft Teams](https://learn.microsoft.com/purview/dlp-microsoft-teams)). Users who are newly covered by a group-scoped policy fall under that same requirement; the page does not say how the licence is assessed for them.

The roadmap item names no meter. Where OCR is enabled in Teams chat, the OCR page says OCR scanning is optional, must be enabled at the tenant level and needs an Azure pay-as-you-go subscription, with charges estimated through the OCR cost estimator ([Learn about optical character recognition in Microsoft Purview](https://learn.microsoft.com/purview/ocr-learn-about)). A rate for this change is not published.

## Scope

The roadmap record lists GCC, GCC High and DoD, the Web platform and General Availability as the release phase. It lists the product as Microsoft Purview and the status as In development, targeted for November CY2026.

The change concerns Teams DLP policies scoped to Microsoft 365 Groups. Policies scoped to individual users or to security groups are not mentioned in the roadmap description. To edit DLP policies you must be assigned a role that has permission to edit them, per the Learn page; see [Permissions in the Microsoft Purview portal](https://learn.microsoft.com/purview/purview-permissions). OCR configuration needs membership of one of the role groups the OCR page lists, such as Compliance administrator.

## Governance guidance

### Before rollout

- Inventory the Teams DLP policies whose scope uses Microsoft 365 Groups (Microsoft Purview portal > Data loss prevention > Policies), and record each policy's Teams actions.
- Check whether OCR is enabled for Teams chat, because the roadmap says those customers still need to add users, groups or Microsoft 365 groups to protect these chats.
- Test the rules that block or notify on Teams messages in simulation or with a pilot group before the target month, using the Teams location row in the controls table.
- Brief the service desk on the sender's blocked-message activity entry and the override option, where a policy allows one.

### At rollout

- Watch for the change in Message center and on the roadmap item, which currently reads In development with a November CY2026 target.
- Confirm group-scoped policies still list the groups you intend, using the Teams location row.
- Allow about an hour after any policy edit for it to reach user accounts, per the Learn page.

### After rollout

- Review DLP alerts and Activity explorer for Teams chats that now match, and tune rules that produce false positives.
- Re-check the OCR exception: add users or groups to affected policies if OCR in Teams chat is on and coverage is incomplete.

## Governance controls

<p class="controls__lead">Where each control lives. The left column says what the setting decides and how far it reaches; the middle gives the admin centre and the exact path; the right gives the script, API or command that does the same. <em>Not yet documented</em> means Microsoft has not published a control for that surface, so there is nothing to configure yet.</p>

<table class="controls">
<thead><tr><th>Control</th><th>Admin UI</th><th>API and automation</th></tr></thead>
<tbody>
<tr><td data-label="Control"><strong>Whether a DLP policy applies to Teams chat and channel messages</strong><br><small>Tenant</small><br><small class="controls__note">Needs a role with permission to edit DLP policies; run the cmdlet in Security &amp; Compliance PowerShell.</small></td><td data-label="Admin UI"><strong>Microsoft Purview portal</strong><br>Microsoft Purview portal › Data loss prevention › Policies › Edit policy › Choose locations to apply the policy › Teams chat and channel messages <a href="https://learn.microsoft.com/purview/dlp-microsoft-teams" rel="noopener" class="controls__docs">Learn</a></td><td data-label="API and automation"><strong>PowerShell</strong><br><code>Set-DlpCompliancePolicy -Identity &lt;policy&gt; -AddTeamsLocation &lt;value&gt;</code> <a href="https://learn.microsoft.com/powershell/module/exchangepowershell/set-dlpcompliancepolicy" rel="noopener" class="controls__docs">Learn</a></td></tr>
</tbody>
</table>

Both rows govern which Teams conversations a DLP policy evaluates; neither is documented as a switch for the planned extension itself. The Learn page says you must hold a role with permission to edit DLP policies to change the Teams location. Where OCR is on, the roadmap says to keep users, security groups or Microsoft 365 groups listed explicitly.

## Open questions

- Which behaviour does this change alter, given that the Learn page already lists Microsoft 365 groups as protecting 1:1/n chats? Watch the roadmap item and the Learn page for an update.
- Will group-scoped policies that were deliberately narrow need a way to keep that narrower scope, and will an exclusion setting be offered? Watch Message center.
- Does the OCR exception apply per policy or tenant-wide, and how will coverage for images in chats be shown in the portal?
- Will Microsoft send a Message center post with a rollout window for GCC, GCC High and DoD before the November CY2026 target?

<!-- rationale
risk: Medium. Group-scoped Teams DLP policies are planned to start covering more chats automatically, so rules that block or flag messages can reach people they were not aimed at.
cost: Low. The roadmap item names no new meter or licence; the Learn page says Teams chat DLP requires an E5 licence, so the cost is admin time to review policies, plus OCR billing where OCR is on.
impact: Medium. Users in tenants with group-scoped Teams DLP policies are the ones who may notice blocked or flagged messages in chats; tenants without such policies see no change.
-->

<!-- verifier-findings (2026-11-24, held; checked by gpt-6.1-sol)
The independent check found fault only with the statements below. This is a correction: change what they name and carry the rest of the page over unchanged.
Correct each of these with the smallest change that removes the fault: delete the statement, narrow it, or put the finding's own "Found" text or worded replacement in its place. Where a fix asks for more than that (a new row, an explanation, further references), do only the part that removes the fault. A correction adds no control rows.
- [contradicted, blocker] controls[0].api; Governance controls / command: Set-DlpCompliancePolicy -Identity <policy> -AddTeamsLocation <value> performs the same Teams-location selection as the UI side without further qualification. | Found: The AddTeamsLocation parameter specifies the accounts, distribution groups, or mail-enabled security groups to add to the list of included Teams chat and channel messages if you used the value All for the TeamsLocation parameter. | Fix: Retain the existing call only with this qualification in the row note: '-AddTeamsLocation adds accounts, distribution groups or mail-enabled security groups to the Teams inclusion list when TeamsLocation is All; it is not the operation that selects the Teams location in the wizard.' Remove the prose implication that both surfaces perform the same location-enabling operation. The reference is https://learn.microsoft.com/powershell/module/exchangepowershell/set-dlpcompliancepolicy. | Source: https://learn.microsoft.com/powershell/module/exchangepowershell/set-dlpcompliancepolicy
These are minor and do not hold the page. Where removing the statement, or rewording it in the words the fix gives, settles one, do that; otherwise leave it as it is. A minor finding may also add a source link it names for a statement already on the page. It adds no row and nothing that needs research.
- [supported, minor] Risk assessment: Security & identity / behaviour: Group-scoped Teams DLP depends on Microsoft 365 group membership. | Found: Teams chat and channel messages | Yes | - Distribution groups - Security groups - Mail-enabled security groups - Microsoft 365 groups (Group members only, not the group as an entity) | Fix: Cite https://learn.microsoft.com/purview/dlp-policy-reference#policy-scoping for the group-membership statement. | Source: https://learn.microsoft.com/purview/dlp-policy-reference#policy-scoping
- [supported, minor] Cost and licensing / licensing: Users newly covered by Teams DLP must satisfy the licensing requirement. | Found: Teams chats, and devices are associated with a user account, so the user must have the required license assigned when a Purview policy or feature is used in these locations. | Fix: Cite https://learn.microsoft.com/office365/servicedescriptions/microsoft-365-service-descriptions/microsoft-365-tenantlevel-services-licensing-guidance/microsoft-purview-service-description#which-users-need-a-license for the requirement on newly covered users. | Source: https://learn.microsoft.com/office365/servicedescriptions/microsoft-365-service-descriptions/microsoft-365-tenantlevel-services-licensing-guidance/microsoft-purview-service-description#which-users-need-a-license
- [supported, minor] controls[0].ui / admin-path: The printed Purview route reaches the Teams chat and channel messages location in an existing DLP policy. | Found: Sign in to the Microsoft Purview portal > Data loss prevention > Policies. Select a policy, and then choose Edit policy (the pencil icon). Navigate through the tool until you arrive at the Choose locations to apply the policy page. Select Teams chat and channel messages. | Fix: Use 'Data loss prevention > Policies > policy > Edit policy > Choose locations to apply the policy > Teams chat and channel messages' in ui.path, starting after the surface name and including the selected policy. Apply the same route to the rendered table. | Source: https://learn.microsoft.com/purview/dlp-microsoft-teams
- [supported, minor] Governance guidance: Before rollout / applicability: Teams DLP policies can be tested in simulation mode. | Found: For Exchange, Teams, Devices locations only items that are new during simulation are evaluated. | Fix: Cite https://learn.microsoft.com/purview/dlp-simulation-mode-learn for the advice to test Teams rules in simulation. | Source: https://learn.microsoft.com/purview/dlp-simulation-mode-learn
- [supported, minor] Governance guidance: After rollout / applicability: The DLP alerts dashboard supports Teams chat and channel policy violations. | Found: Microsoft Purview portal shows alerts for DLP policies that are enforced on the following workloads: 1. Exchange email 2. SharePoint sites 3. OneDrive accounts 4. Teams chat and channel messages | Fix: Cite https://learn.microsoft.com/purview/dlp-alerts-dashboard-get-started for reviewing Teams DLP alerts. | Source: https://learn.microsoft.com/purview/dlp-alerts-dashboard-get-started
- [supported, minor] Governance guidance: After rollout / applicability: Activity explorer includes Teams chat and channel DLP policy matches. | Found: Additionally, Activity Explorer gathers DLP policy match events from Microsoft 365 workloads such as Exchange, SharePoint, OneDrive, Teams chat and channels, and on-premises SharePoint folders, libraries, and file shares. | Fix: Cite https://learn.microsoft.com/purview/data-classification-activity-explorer#activity-types for the Teams Activity explorer recommendation. | Source: https://learn.microsoft.com/purview/data-classification-activity-explorer#activity-types
- [contradicted, minor] Governance guidance; Governance controls / consistency: The governance checklist names controls to check or monitor that are not represented in the controls table. | Found: Check whether OCR is enabled for Teams chat; Test the rules ... in simulation; Review DLP alerts and Activity explorer ... The table contains only 'Whether a DLP policy applies to Teams chat and channel messages'. | Fix: The OCR-setting check, simulation-mode recommendation, and DLP alerts/Activity explorer monitoring steps have no corresponding controls-table rows. Do not add rows as part of this correction.
-->
