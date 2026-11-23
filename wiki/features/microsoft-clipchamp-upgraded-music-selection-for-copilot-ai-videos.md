---
title: "Microsoft Clipchamp: improved audio for Copilot AI-generated videos"
slug: "microsoft-clipchamp-upgraded-music-selection-for-copilot-ai-videos"
roadmapId: 550513
topic: "m365-copilot"
products: ["Microsoft Clipchamp","Microsoft Copilot (Microsoft 365)"]
summary: "Clipchamp's Copilot AI-generated videos get AI voiceover, sound effects and audio mixing; the roadmap lists it as Launched. Learn lists the service under Copilot Credits billing, so check your spending policies."
status: "launched"
releasePhase: ["General Availability"]
clouds: ["Worldwide (Standard Multi-Tenant)"]
platforms: ["Mac","Web"]
targetDate: "June CY2026"
previewDate: null
risk: "low"
cost: "variable"
impact: "low"
defaultState: "unknown"
action: "prepare"
licensing:
  model: "mixed"
  notes: "The roadmap item says the improved audio comes with a Microsoft 365 Copilot licence. Learn lists Clipchamp: Copilot video creation among services managed by usage-based billing in Copilot Credits. A credit rate for this feature is not yet published."
audiences: ["m365-admin","finops","end-user"]
tags: ["clipchamp","m365-copilot","copilot-credits","cost-management","licensing"]
sources:
  - title: "Understand usage-based billing and cost management for Copilot Credits"
    url: "https://learn.microsoft.com/copilot/plan/usage-based-billing-overview-copilot-credits"
    kind: "learn"
  - title: "Managing AI experiences enabled by usage-based billing"
    url: "https://learn.microsoft.com/copilot/implement/usage-based-billing-manage-copilot-credits"
    kind: "learn"
  - title: "Set up usage-based billing for Copilot Credits"
    url: "https://learn.microsoft.com/copilot/implement/usage-based-billing-copilot-credits-setup"
    kind: "learn"
  - title: "Assign or unassign licenses for users in the Microsoft 365 admin center"
    url: "https://learn.microsoft.com/microsoft-365/admin/manage/assign-licenses-to-users"
    kind: "learn"
  - title: "Assign Microsoft 365 licenses to user accounts with PowerShell"
    url: "https://learn.microsoft.com/microsoft-365/enterprise/assign-licenses-to-user-accounts-with-microsoft-365-powershell"
    kind: "learn"
  - title: "Update spendingPolicy"
    url: "https://learn.microsoft.com/microsoft-365/copilot/extensibility/api/admin-settings/cost-management/spendingpolicy-update"
    kind: "learn"
  - title: "Create spendingPolicyServiceSetting"
    url: "https://learn.microsoft.com/microsoft-365/copilot/extensibility/api/admin-settings/cost-management/spendingpolicyservicesetting-create"
    kind: "learn"
  - title: "2025 Microsoft 365 Copilot release notes"
    url: "https://learn.microsoft.com/microsoft-365/copilot/previous-year-release-notes"
    kind: "learn"
  - title: "Microsoft Clipchamp service description"
    url: "https://learn.microsoft.com/office365/servicedescriptions/windows-365-service-description/microsoft-clipchamp-service-description"
    kind: "learn"
  - title: "Microsoft 365 Roadmap item 550513"
    url: "https://www.microsoft.com/microsoft-365/roadmap?id=550513"
    kind: "roadmap"
videos: []
related: ["microsoft-clipchamp-copilot-video-creation-updates"]
controls:
  - governs: "Which users hold the Microsoft 365 Copilot licence the roadmap item names"
    scope: "user"
    ui:
      surface: "Microsoft 365 admin center"
      path: "Users > Active users > user > Licenses and Apps > Licenses"
      docs: "https://learn.microsoft.com/microsoft-365/admin/manage/assign-licenses-to-users"
    api:
      kind: "powershell"
      call: "Set-MgUserLicense -UserId $userUPN -AddLicenses @{SkuId = \"<SkuId>\"} -RemoveLicenses @()"
      docs: "https://learn.microsoft.com/microsoft-365/enterprise/assign-licenses-to-user-accounts-with-microsoft-365-powershell"
    note: "Generic licence assignment; the roadmap names the Copilot licence for this feature. License or User Administrator role."
  - governs: "Which services a spending policy covers"
    scope: "group"
    ui:
      surface: "Microsoft 365 admin center"
      path: "Copilot > Cost Management > Configuration > spending policy > Agents and services"
      docs: "https://learn.microsoft.com/copilot/implement/usage-based-billing-manage-copilot-credits"
    api:
      kind: "graph"
      call: "POST /beta/copilot/costManagement/spendingPolicies/{id}/serviceSettings"
      docs: "https://learn.microsoft.com/microsoft-365/copilot/extensibility/api/admin-settings/cost-management/spendingpolicyservicesetting-create"
    note: "Beta API. Required body properties are serviceId and state. Policy scope is users or groups."
  - governs: "Monthly spending limit for a spending policy and per user"
    scope: "group"
    ui:
      surface: "Microsoft 365 admin center"
      path: "Copilot > Cost Management > Configuration > spending policy > Spending limits"
      docs: "https://learn.microsoft.com/copilot/implement/usage-based-billing-manage-copilot-credits"
    api:
      kind: "graph"
      call: "PATCH /beta/copilot/costManagement/spendingPolicies/{id}"
      docs: "https://learn.microsoft.com/microsoft-365/copilot/extensibility/api/admin-settings/cost-management/spendingpolicy-update"
    note: "Beta API. The request body sets periodLimit or perUserLimit. The billing method is a separate setting."
confidence: "medium"
created: "2026-11-23"
updated: "2026-11-23"
roadmapModified: "2026-09-08T22:57:21"
changes:
  - date: "2026-11-23"
    note: "New briefing: Clipchamp Copilot AI video audio upgrade, with its Copilot Credits listing and the licence and spending-policy controls."
  - date: "2026-11-23"
    note: "Checked against Microsoft Learn by gpt-6.1-sol: held: 4 of 76 statements contradicted, 0 unconfirmed; taken offline until corrected"
  - date: "2026-11-23"
    note: "Corrected after verification: replaced the 'no prerequisites' statement, used the full licence-assignment path, qualified the License administrator role, and removed checklist items that had no control row."
  - date: "2026-11-23"
    note: "Checked against Microsoft Learn by gpt-6.1-sol: passed with 0 of 86 statements not yet confirmed"
version: 2
verification:
  status: "verified-with-gaps"
  date: "2026-11-23"
  version: 2
  model: "gpt-6.1-sol"
  engine: "copilot"
  claims: 86
  confirmed: 86
  unconfirmed: 0
  contradicted: 0
  attempts: 0
  hash: "efea0113ac34117c776e52654e15a758"
---

## What's changing

The roadmap item says that, with a Microsoft 365 Copilot licence, Copilot AI-generated video projects in Microsoft Clipchamp have improved audio: realistic AI voiceover, professional sound effects and enhanced audio mixing. The item's title refers to upgraded music selection; its description does not mention music.

The base feature predates this item. Microsoft Learn's release notes for June 24, 2025 describe Clipchamp creating a video draft from a prompt, with a generated script, stock footage and music, AI voice-over, text overlays and transitions, as a project that can be exported to OneDrive. Microsoft Learn has no page on this audio upgrade itself, so what follows about its behaviour is the roadmap's description.

The roadmap record gives the status as Launched, the target as June CY2026 and the release phase as General Availability. It lists Worldwide (Standard Multi-Tenant) as the cloud and Mac and Web as the platforms. The record has no preview date and no more-info link.

## Why it matters

For a service owner the audio is the smaller part of this change; the larger part is how the feature is paid for. Learn's usage-based billing page lists Clipchamp: Copilot video creation among the services billed in Copilot Credits, while the roadmap item names a Microsoft 365 Copilot licence. Until Microsoft says which applies, finance and licensing owners should expect some Copilot Credit consumption from users who make AI videos and check it in the Cost management dashboard.

Microsoft has not stated what happens on arrival for this audio upgrade, and no source says existing behaviour is removed. Users who already create Copilot AI videos may simply get better audio. Expect more videos with synthetic voices to circulate internally, so decide whether your communications guidance asks authors to review the voiceover before sharing.

## Risk assessment

**Data exposure**

- The roadmap item names no new data source for the audio features. The 2025 release notes describe the generated project as exportable to OneDrive, so the output is a file in the author's own storage; Microsoft Learn does not describe what the audio features send or retain.

**Security & identity**

- The roadmap item describes audio output only and names no new permission, connector or sign-in. Access follows the Microsoft 365 Copilot licence it names, which you assign under Users > Active users > user > Licenses and Apps > Licenses in the Microsoft 365 admin center.

**Autonomy & actions**

- The feature drafts a script and audio from a prompt. With a realistic AI voiceover, a draft shared without review can carry wording the author never listened to; this is a communications risk, and no admin control for it is documented here.

**Change & support**

- Spend is the main support issue. A spending policy that sets a limited monthly budget removes access to agents and services for users who reach it for the rest of the month, according to Learn, so expect helpdesk questions if Clipchamp video creation is one of the services the policy covers.
- The roadmap shows the item as Launched, so licensed users may already see the change. Learn states no default for the audio upgrade.

## Cost and licensing

**Licence.** The roadmap item says the improved audio comes with a Microsoft 365 Copilot licence. Assign it per user under Users > Active users > user > Licenses and Apps > Licenses in the Microsoft 365 admin center; Learn says you must be at least a License or User Administrator to assign licenses.

**Meter.** Learn's usage-based billing overview lists Clipchamp: Copilot video creation among the services managed by usage-based billing in the admin center. It describes Copilot Credits as the common currency for such services, and says organisations can use fixed licensing, the Copilot Credit Pre-purchase Plan (P3), pay-as-you-go billing, prepaid capacity packs or combinations, depending on the service. Charges and consumption are managed in the Cost management dashboard (Copilot > Cost management). The same page marks several other rows "(Copilot license required)" and gives the Clipchamp row no such note, so it does not settle whether the licence alone covers use or credits are consumed as well.

**Caps.** A spending policy with a limited monthly budget limits the credits that policy can spend each month, and Learn says users who hit the limit lose access to agents and services until credits reset on the first of the month. Separately, Learn says that when credits run out for the subscription chosen as the billing method, usage continues on a pay-as-you-go basis, so the policy limit and the billing method are two different settings.

**Not yet published.** A credit rate for Clipchamp: Copilot video creation, and whether the audio upgrade changes consumption, are not yet published (November 2026).

## Scope

Users: those holding the Microsoft 365 Copilot licence the roadmap item names. Roles: a License or User Administrator assigns licences; per Learn, Global and Billing administrators create spending policies and set billing methods. The setup page says AI administrators and License administrators can edit policies but not create them, but it also lists License Administrator among read-only roles that cannot change policies, so its role guidance is inconsistent.

Cloud and platforms: the record lists Worldwide (Standard Multi-Tenant) and the platforms Mac and Web. Rollout: the record's status is Launched. Beyond the Microsoft 365 Copilot licence named in the roadmap, no upgrade-specific prerequisites or rollout mechanics are stated.

## Governance guidance

### Before rollout

- Open Copilot > Cost management in the Microsoft 365 admin center and list the spending policies and the services each one covers; a Global or Billing administrator creates policies, and an AI administrator can edit them.
- Check which users hold the Microsoft 365 Copilot licence, and decide who should be creating Copilot AI videos in Clipchamp.

### At rollout

- Test with one licensed pilot user: create a Copilot AI video in Clipchamp.
- Set a limited monthly budget on the policy that covers the pilot group if you want a ceiling.
- Tell authors to listen to the AI voiceover and sound effects before they share a video.

### After rollout

- Watch the roadmap item and Message center for a published credit rate and any admin setting for this feature.

## Governance controls

<p class="controls__lead">Where each control lives. The left column says what the setting decides and how far it reaches; the middle gives the admin centre and the exact path; the right gives the script, API or command that does the same. <em>Not yet documented</em> means Microsoft has not published a control for that surface, so there is nothing to configure yet.</p>

<table class="controls">
<thead><tr><th>Control</th><th>Admin UI</th><th>API and automation</th></tr></thead>
<tbody>
<tr><td data-label="Control"><strong>Which users hold the Microsoft 365 Copilot licence the roadmap item names</strong><br><small>User</small><br><small class="controls__note">Generic licence assignment; the roadmap names the Copilot licence for this feature. License or User Administrator role.</small></td><td data-label="Admin UI"><strong>Microsoft 365 admin center</strong><br>Users › Active users › user › Licenses and Apps › Licenses <a href="https://learn.microsoft.com/microsoft-365/admin/manage/assign-licenses-to-users" rel="noopener" class="controls__docs">Learn</a></td><td data-label="API and automation"><strong>PowerShell</strong><br><code>Set-MgUserLicense -UserId $userUPN -AddLicenses @{SkuId = &quot;&lt;SkuId&gt;&quot;} -RemoveLicenses @()</code> <a href="https://learn.microsoft.com/microsoft-365/enterprise/assign-licenses-to-user-accounts-with-microsoft-365-powershell" rel="noopener" class="controls__docs">Learn</a></td></tr>
<tr><td data-label="Control"><strong>Which services a spending policy covers</strong><br><small>Group</small><br><small class="controls__note">Beta API. Required body properties are serviceId and state. Policy scope is users or groups.</small></td><td data-label="Admin UI"><strong>Microsoft 365 admin center</strong><br>Copilot › Cost Management › Configuration › spending policy › Agents and services <a href="https://learn.microsoft.com/copilot/implement/usage-based-billing-manage-copilot-credits" rel="noopener" class="controls__docs">Learn</a></td><td data-label="API and automation"><strong>Microsoft Graph</strong><br><code>POST /beta/copilot/costManagement/spendingPolicies/{id}/serviceSettings</code> <a href="https://learn.microsoft.com/microsoft-365/copilot/extensibility/api/admin-settings/cost-management/spendingpolicyservicesetting-create" rel="noopener" class="controls__docs">Learn</a></td></tr>
<tr><td data-label="Control"><strong>Monthly spending limit for a spending policy and per user</strong><br><small>Group</small><br><small class="controls__note">Beta API. The request body sets periodLimit or perUserLimit. The billing method is a separate setting.</small></td><td data-label="Admin UI"><strong>Microsoft 365 admin center</strong><br>Copilot › Cost Management › Configuration › spending policy › Spending limits <a href="https://learn.microsoft.com/copilot/implement/usage-based-billing-manage-copilot-credits" rel="noopener" class="controls__docs">Learn</a></td><td data-label="API and automation"><strong>Microsoft Graph</strong><br><code>PATCH /beta/copilot/costManagement/spendingPolicies/{id}</code> <a href="https://learn.microsoft.com/microsoft-365/copilot/extensibility/api/admin-settings/cost-management/spendingpolicy-update" rel="noopener" class="controls__docs">Learn</a></td></tr>
</tbody>
</table>

The three rows govern the licence, which services a spending policy covers and the policy's spending limit. They are the general controls for Copilot Credit services; Learn's billing page lists Clipchamp: Copilot video creation as such a service, but the pages read do not show how that service is labelled in the policy's service list.

Creating a policy needs the Global administrator or Billing administrator role. The setup page says the AI administrator and License administrator roles can edit existing policies but not create them, and also lists License Administrator among read-only roles, so its role guidance is inconsistent. Both Graph operations are beta and delegated-only; the service-selection call needs the parent policy's ETag in an If-Match header.

## Open questions

- What is the credit rate for Clipchamp: Copilot video creation, and does the improved audio change the credits a video consumes? Watch the usage-based billing overview on Microsoft Learn.
- Does use require the Microsoft 365 Copilot licence, Copilot Credits, or both? The roadmap names the licence; Learn lists the service under usage-based billing without a licence note.
- What happens on arrival for tenants: does the audio upgrade need any administrator step? Microsoft has not stated a default; watch Message center.
- Which admin settings, beyond the licence and spending-policy controls, govern Copilot video creation in Clipchamp? Watch the Clipchamp service description on Microsoft Learn.
- Does the upgrade change music selection, as the title says? The description names voiceover, sound effects and audio mixing.

<!-- rationale
risk: Low. The roadmap item describes audio output inside Clipchamp video projects and names no new data source, permission or connector; the exposure that remains is AI voiceover shared without review.
cost: Variable. Learn lists Clipchamp: Copilot video creation as a service managed by usage-based billing in Copilot Credits, and the roadmap names a Microsoft 365 Copilot licence. A credit rate for this feature is not yet published.
impact: Low. People who create Copilot AI videos in Clipchamp (Web and Mac, per the roadmap) notice the audio change; the roadmap describes no change for other users.
-->

<!-- verifier-findings (2026-11-23, verified-with-gaps; checked by gpt-6.1-sol)
The independent check found fault only with the statements below. This is a correction: change what they name and carry the rest of the page over unchanged.
These are minor and do not hold the page. Where removing the statement, or rewording it in the words the fix gives, settles one, do that; otherwise leave it as it is. A minor finding may also add a source link it names for a statement already on the page. It adds no row and nothing that needs research.
- [supported, minor] Risk assessment: Data exposure / behaviour: The generated output is a file in the author's own storage. | Found: Any videos generated by the video creator feature will be saved to the user's corporate OneDrive in a folder called Clipchamp. | Fix: Cite https://support.microsoft.com/clipchamp/how-to-create-video-with-copilot for 'the output is a file in the author's own storage'; the cited release note establishes exportability but not the user's storage location. | Source: https://support.microsoft.com/clipchamp/how-to-create-video-with-copilot
- [supported, minor] Risk assessment: Security & identity; Scope: Users / licensing: Access follows the Microsoft 365 Copilot licence the roadmap names. | Found: With a Microsoft365 Copilot license, Copilot AI-generated video projects have improved audio | Fix: Replace 'Access follows the Microsoft 365 Copilot licence it names' with 'The roadmap names a Microsoft 365 Copilot licence for the improved audio. Microsoft's general video-creation support page describes access for commercial users with a Microsoft 365 plan and access to Copilot Chat, and requires Clipchamp to be enabled for the organisation.' Cite https://support.microsoft.com/clipchamp/how-to-create-video-with-copilot; distinguish the general creation requirements from this upgrade's roadmap requirement.
-->
