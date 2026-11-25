---
title: "Microsoft Purview: legacy Teams retention policies will stop covering Copilot interactions"
slug: "microsoft-purview-data-lifecycle-management-legacy-teams-retention-policies-covering-copil"
roadmapId: 571306
topic: "governance"
products: ["Microsoft Purview"]
summary: "Microsoft plans to begin treating Teams retention policies that also covered Microsoft 365 Copilot as Teams-only from mid-January 2027. Compliance admins who rely on them for Copilot must create a Copilot retention policy."
status: "in-development"
releasePhase: ["General Availability"]
clouds: ["Worldwide (Standard Multi-Tenant)"]
platforms: ["Web"]
targetDate: "January CY2027"
previewDate: null
risk: "medium"
cost: "low"
impact: "low"
defaultState: "on"
action: "act-now"
licensing:
  model: "mixed"
  notes: "The Purview service description lists Microsoft 365 E3/E5 + Microsoft 365 Copilot; Microsoft 365 E3 + Microsoft Purview Suite + Microsoft 365 Copilot; or Microsoft 365 E3 + Microsoft E5 Information Protection and Governance + Microsoft 365 Copilot as providing user rights for Copilot interaction retention. Pay-as-you-go setup is required, but Microsoft 365 Copilot interactions are not charged."
audiences: ["compliance","m365-admin","service-owner"]
tags: ["purview","data-lifecycle-management","retention","m365-copilot","teams","powershell"]
sources:
  - title: "Microsoft 365 Roadmap 571306"
    url: "https://www.microsoft.com/microsoft-365/roadmap?id=571306"
    kind: "roadmap"
  - title: "MC1481313: (Updated) Microsoft Purview | DLM: Legacy Teams retention policies that cover Copilot will be treated as Teams-only"
    url: "https://admin.microsoft.com/Adminportal/Home#/MessageCenter/:/messages/MC1481313"
    kind: "message-center"
  - title: "Create and configure retention policies"
    url: "https://learn.microsoft.com/purview/create-retention-policies"
    kind: "learn"
  - title: "Learn about retention for Copilot & AI apps"
    url: "https://learn.microsoft.com/purview/retention-policies-copilot"
    kind: "learn"
  - title: "Get started with data lifecycle management"
    url: "https://learn.microsoft.com/purview/get-started-with-data-lifecycle-management"
    kind: "learn"
  - title: "Learn about Microsoft Purview billing models"
    url: "https://learn.microsoft.com/purview/purview-billing-models"
    kind: "learn"
  - title: "Get-RetentionCompliancePolicy"
    url: "https://learn.microsoft.com/powershell/module/exchangepowershell/get-retentioncompliancepolicy"
    kind: "learn"
  - title: "Set-AppRetentionCompliancePolicy"
    url: "https://learn.microsoft.com/powershell/module/exchangepowershell/set-appretentioncompliancepolicy#-applications"
    kind: "learn"
  - title: "Microsoft Purview service description"
    url: "https://learn.microsoft.com/office365/servicedescriptions/microsoft-365-service-descriptions/microsoft-365-tenantlevel-services-licensing-guidance/microsoft-purview-service-description"
    kind: "learn"
videos: []
related: ["purview-retention-last-accessed-sharepoint-onedrive","microsoft-purview-adaptive-scope-evaluation-control-with-recipient-and-site-owner-lifecycl"]
controls:
  - governs: "Which retention policies exist and what locations they cover"
    scope: "tenant"
    ui:
      surface: "Microsoft Purview portal"
      path: "Solutions > Data Lifecycle Management > Policies > Retention policies"
      docs: "https://learn.microsoft.com/purview/create-retention-policies"
    api:
      kind: "powershell"
      call: "Get-RetentionCompliancePolicy -Identity \"<policy name>\" -DistributionDetail | Format-List"
      docs: "https://learn.microsoft.com/powershell/module/exchangepowershell/get-retentioncompliancepolicy"
    note: "Inventory tool, not a control over this change. Learn says Get still shows legacy policies as MicrosoftTeams after the change."
  - governs: "Retention or deletion of Microsoft 365 Copilot interactions"
    scope: "tenant"
    ui:
      surface: "Microsoft Purview portal"
      path: "Solutions > Data Lifecycle Management > Policies > Retention policies > New retention policy > Choose the type of retention policy to create > Static > Choose locations to apply the policy > Microsoft Copilot experiences"
      docs: "https://learn.microsoft.com/purview/create-retention-policies"
    api:
      kind: "powershell"
      call: "Set-AppRetentionCompliancePolicy -Identity \"<policy name>\" -Applications \"User:M365Copilot\""
      docs: "https://learn.microsoft.com/purview/create-retention-policies"
    note: "PowerShell adds Copilot to an existing policy for newer locations. Pay-as-you-go billing must be set up first. The cmdlet reference marks this location as preview and requires more values; see the notes below."
confidence: "high"
created: "2026-11-17"
updated: "2026-11-25"
roadmapModified: "2026-10-28T23:04:31"
changes:
  - date: "2026-11-17"
    note: "New briefing: legacy Teams retention policies stop covering Copilot interactions from mid-January 2027."
  - date: "2026-11-17"
    note: "Checked against Microsoft Learn by gpt-6.1-sol: held: 2 of 56 statements contradicted, 1 unconfirmed; taken offline until corrected"
  - date: "2026-11-17"
    note: "Corrected after verification: removed the unsupported agent-behaviour and Copilot billing-gap statements, reworded the summary as Microsoft's plan, and dropped the optional Teams-only command paragraph."
  - date: "2026-11-17"
    note: "Checked against Microsoft Learn by gpt-6.1-sol: passed with 0 of 55 statements not yet confirmed"
  - date: "2026-11-24"
    note: "Checked against Microsoft Learn by gpt-6.1-sol: passed with 0 of 54 statements not yet confirmed"
  - date: "2026-11-25"
    note: "Corrected after verification: completed the Copilot policy portal path, noted the cmdlet reference's preview syntax, named the licences in the service description, set impact to low, reworded the billing checklist item and updated the MC1481313 date."
  - date: "2026-11-25"
    note: "Checked against Microsoft Learn by gpt-6.1-sol: passed with 0 of 54 statements not yet confirmed"
version: 3
verification:
  status: "verified-with-gaps"
  date: "2026-11-25"
  version: 3
  model: "gpt-6.1-sol"
  engine: "copilot"
  claims: 54
  confirmed: 54
  unconfirmed: 0
  contradicted: 0
  attempts: 0
  hash: "fd55e507932c018ec7b852172e9d1892"
---

## What's changing

Microsoft Purview will treat legacy retention policies that cover both Microsoft Teams and Microsoft 365 Copilot as Teams-only policies. The roadmap item says some existing Teams-scoped retention policies currently also apply to Microsoft 365 Copilot interactions and that they will no longer implicitly govern Copilot workloads.

Microsoft Learn describes the affected location as **Teams chats and Copilot interactions** and states that, beginning 15 January 2027, Purview will treat these policies as Teams-only. After the change, Microsoft 365 Copilot interactions will no longer be retained or deleted through these legacy Teams policies. The change applies to both previously retained Copilot interactions and new ones, and Teams retention behaviour will remain unchanged. Learn's retention-for-Copilot page notes that Copilot messages were previously included in that location automatically, so users did not have to be using Teams for the policy to apply to Copilot.

The roadmap item is In development, with a target of January CY2027, release phase General Availability, for Worldwide (Standard Multi-Tenant) on Web. These are Microsoft's targets. Message Center notice MC1481313 (updated 25 November 2026) gives the rollout as beginning in mid-January 2027 (previously late October 2026) and expected to complete by end of January 2027 (previously mid-November). It sets no act-by date, but says action is required if you currently rely on Teams retention policies to govern Copilot interactions.

## Why it matters

If nobody acts, the change still arrives: Microsoft's notice describes it as a rollout, not an opt-in. A policy that your organisation built for Teams, and that has also been keeping or deleting Copilot prompts and responses, will quietly stop doing the Copilot part. A deletion rule no longer removes Copilot interactions through that policy, and a retention rule no longer keeps them.

This is a compliance gap rather than a user-visible change. The wiki's view is that tenants with regulated retention periods should treat mid-January 2027 as the date by which a Copilot-specific policy must already be distributing, because Learn says a new policy can take up to seven days to apply.

## Risk assessment

**Data exposure**
- Learn says Copilot interaction data is stored in a hidden folder in the mailbox of the user who runs the AI app. After the change, a legacy Teams policy no longer retains or deletes it, so interactions that a delete rule would have removed are no longer removed through that policy.
- Learn states that previously retained Copilot interactions will also not be covered by the legacy policies. Microsoft has not said what that means for items already held (see Open questions).

**Security & identity**
- No change to identity or permissions is described. Configuring the replacement needs Purview retention roles (see Governance controls).

**Autonomy & actions**
- Microsoft describes a change to retention-policy coverage. Purview applies the conversion itself: the default is on, and no administrator action triggers it.

**Change & support**
- Learn says a Get command on a 'Teams chats and Copilot interactions' policy will still show MicrosoftTeams, not TeamsChatUserInteractions, even though after the change the policy covers only Teams interactions. Do not treat the cmdlet output as proof that Copilot coverage has gone or stayed.
- Policies take up to seven days to apply once created, so a replacement created close to the rollout may not be in force when the change lands.

## Cost and licensing

Learn's get-started page says that you must set up pay-as-you-go billing to create retention policies that include the locations Microsoft Copilot experiences, Enterprise AI apps and Other AI apps, and that there is no charge for Microsoft 365 Copilot interactions. The Purview billing models page says Microsoft 365 Copilot experiences aren't charged, and that the Data Lifecycle Management meter counts non-Microsoft 365 Copilot or AI app interactions (prompts and responses) under a retention policy.

The same Learn page points to the Purview service description for feature-level licence requirements. That description lists Microsoft 365 E3/E5 + Microsoft 365 Copilot; Microsoft 365 E3 + Microsoft Purview Suite + Microsoft 365 Copilot; or Microsoft 365 E3 + Microsoft E5 Information Protection and Governance + Microsoft 365 Copilot as providing user rights when a retention policy applies to Microsoft Copilot interactions. Beyond admin time to review policies and create the Copilot policy, no other cost is stated for this change.

## Scope

**Who is affected:** organisations with Purview retention policies historically configured for Teams that rely on them to retain or delete Microsoft 365 Copilot interactions, as MC1481313 describes. Compliance administrators and records management administrators who maintain retention policy configuration are the named audience.

**Cloud and platform:** the roadmap record lists Worldwide (Standard Multi-Tenant) and the Web platform. Other clouds are not listed on the record.

**Rollout:** MC1481313 gives mid-January 2027 to end of January 2027 for Worldwide; Learn gives 15 January 2027 as the start.

**Roles:** Learn recommends adding people who manage retention policies to the Compliance Administrator role group, or creating a role group that has the Retention Management role. View-Only Retention Management is the read-only role.

## Governance guidance

### Before rollout
- Inventory existing retention policies in the Microsoft Purview portal and with PowerShell (first controls row), looking for policies on the 'Teams chats and Copilot interactions' location. Compliance administrators do this.
- Decide, with records management and legal, whether Copilot interactions need retention or deletion controls, and for how long.
- Note that pay-as-you-go billing is a prerequisite for creating policies that include the Microsoft Copilot experiences location; see Cost and licensing.
- Create a retention policy that selects the Microsoft Copilot experiences location (second controls row) well before mid-January 2027, allowing for the up to seven days Learn says a policy takes to apply.

### At rollout
- Watch Message center for MC1481313 for further timeline changes, as the rollout dates have already moved once.
- Check the distribution status of the new Copilot policy in the Retention policies page of the Purview portal; Learn says the flyout pane shows it.
- Confirm that Teams retention outcomes are unchanged, as Learn states they should be.

### After rollout
- Re-run the policy inventory and confirm that each former Teams-and-Copilot policy now governs Teams only, bearing in mind that Get may still show MicrosoftTeams.
- Update internal compliance documentation and administrator guidance, and tell compliance and records management stakeholders, as MC1481313 recommends.

## Governance controls

<p class="controls__lead">Where each control lives. The left column says what the setting decides and how far it reaches; the middle gives the admin centre and the exact path; the right gives the script, API or command that does the same. <em>Not yet documented</em> means Microsoft has not published a control for that surface, so there is nothing to configure yet.</p>

<table class="controls">
<thead><tr><th>Control</th><th>Admin UI</th><th>API and automation</th></tr></thead>
<tbody>
<tr><td data-label="Control"><strong>Which retention policies exist and what locations they cover</strong><br><small>Tenant</small><br><small class="controls__note">Inventory tool, not a control over this change. Learn says Get still shows legacy policies as MicrosoftTeams after the change.</small></td><td data-label="Admin UI"><strong>Microsoft Purview portal</strong><br>Solutions › Data Lifecycle Management › Policies › Retention policies <a href="https://learn.microsoft.com/purview/create-retention-policies" rel="noopener" class="controls__docs">Learn</a></td><td data-label="API and automation"><strong>PowerShell</strong><br><code>Get-RetentionCompliancePolicy -Identity &quot;&lt;policy name&gt;&quot; -DistributionDetail | Format-List</code> <a href="https://learn.microsoft.com/powershell/module/exchangepowershell/get-retentioncompliancepolicy" rel="noopener" class="controls__docs">Learn</a></td></tr>
<tr><td data-label="Control"><strong>Retention or deletion of Microsoft 365 Copilot interactions</strong><br><small>Tenant</small><br><small class="controls__note">PowerShell adds Copilot to an existing policy for newer locations. Pay-as-you-go billing must be set up first. The cmdlet reference marks this location as preview and requires more values; see the notes below.</small></td><td data-label="Admin UI"><strong>Microsoft Purview portal</strong><br>Solutions › Data Lifecycle Management › Policies › Retention policies › New retention policy › Choose the type of retention policy to create › Static › Choose locations to apply the policy › Microsoft Copilot experiences <a href="https://learn.microsoft.com/purview/create-retention-policies" rel="noopener" class="controls__docs">Learn</a></td><td data-label="API and automation"><strong>PowerShell</strong><br><code>Set-AppRetentionCompliancePolicy -Identity &quot;&lt;policy name&gt;&quot; -Applications &quot;User:M365Copilot&quot;</code> <a href="https://learn.microsoft.com/purview/create-retention-policies" rel="noopener" class="controls__docs">Learn</a></td></tr>
</tbody>
</table>

Both rows are Security & Compliance PowerShell and Microsoft Purview portal controls for retention generally. Learn documents them for this change on the Create and configure retention policies page.

The configuration guide shows User:M365Copilot alone, but the [Set-AppRetentionCompliancePolicy reference](https://learn.microsoft.com/powershell/module/exchangepowershell/set-appretentioncompliancepolicy#-applications) marks Microsoft Copilot experiences as preview and requires all these values together: User:M365Copilot,CopilotForSecurity,CopilotinFabricPowerBI,CopilotStudio,CopilotinBusinessApplicationplatformsSales,SQLCopilot. Confirm the supported syntax before running this example.

Roles: creating and managing retention policies needs permissions to the Purview portal. Learn recommends the Compliance Administrator role group, or a custom role group with the Retention Management role. Learn's retention-policy instructions say that selecting the Teams locations when you create a static retention policy automatically excludes the other locations, so plan a separate policy for Copilot.

## Open questions

- What happens to Copilot interactions that a legacy Teams policy already holds once the change applies? Learn says previously retained interactions will not be covered, but does not say whether they are released or become eligible for deletion. Watch the Create and configure retention policies page and MC1481313.
- How can an administrator reliably identify a legacy 'Teams chats and Copilot interactions' policy in the portal and in PowerShell, given that Get still shows MicrosoftTeams? Watch the Create and configure retention policies page.
- Will tenants be told when the conversion has been applied to them, given the rollout runs from mid-January to end of January 2027? Watch Message center.

<!-- rationale
risk: Medium. Legacy 'Teams chats and Copilot interactions' policies stop retaining or deleting Copilot interactions, so a retention or deletion obligation can lapse unless a Copilot policy exists. Existing Purview controls cover the fix.
cost: Low. The main cost is admin time to create a Copilot policy. Learn says there is no charge for Microsoft 365 Copilot interactions, but pay-as-you-go billing must be set up to create policies with the Microsoft Copilot experiences location.
impact: Low. Compliance and records management administrators must maintain Copilot retention coverage; Teams retention behaviour remains unchanged.
-->

<!-- verifier-findings (2026-11-25, verified-with-gaps; checked by gpt-6.1-sol)
The independent check found fault only with the statements below. This is a correction: change what they name and carry the rest of the page over unchanged.
These are minor and do not hold the page. Where removing the statement, or rewording it in the words the fix gives, settles one, do that; otherwise leave it as it is. A minor finding may also add a source link it names for a statement already on the page. It adds no row and nothing that needs research.
- [supported, minor] controls[1].ui; Governance controls table / admin-path: The printed portal route opens a new static retention policy and selects Microsoft Copilot experiences. | Found: For the Assign admin units page, keep the default of Full directory. ... For the Choose the type of retention policy to create page, select Adaptive or Static ... On the Choose locations to apply the policy page ... Microsoft Copilot experiences | Fix: Set controls[1].ui.path and its rendered copy to 'Solutions > Data Lifecycle Management > Policies > Retention policies > New retention policy > Assign admin units > Full directory > Choose the type of retention policy to create > Static > Choose locations to apply the policy > Microsoft Copilot experiences'. The omitted wizard page keeps its default and does not invalidate the route. | Source: https://learn.microsoft.com/purview/create-retention-policies
-->
