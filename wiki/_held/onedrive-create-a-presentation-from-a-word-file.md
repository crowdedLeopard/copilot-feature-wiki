---
title: "OneDrive on the web: Copilot creates a presentation from a Word file"
slug: "onedrive-create-a-presentation-from-a-word-file"
roadmapId: 469501
topic: "m365-copilot"
products: ["OneDrive","Microsoft Copilot (Microsoft 365)"]
summary: "Microsoft plans a Copilot action in OneDrive on the web that drafts a presentation from a Word file, for users with a Copilot licence. Still in development past its April CY2025 target; no admin action is needed yet beyond knowing who is licensed."
status: "in-development"
releasePhase: ["General Availability"]
clouds: ["Worldwide (Standard Multi-Tenant)"]
platforms: ["Web"]
targetDate: "April CY2025"
previewDate: null
risk: "low"
cost: "medium"
impact: "medium"
defaultState: "unknown"
action: "review"
licensing:
  model: "add-on"
  notes: "The roadmap item states the feature requires a Microsoft Copilot for Microsoft 365 licence. Microsoft Learn says Microsoft Copilot is available with Microsoft 365 E7 or as an add-on for eligible plans. No pricing specific to this feature is published."
audiences: ["m365-admin","service-owner","end-user"]
tags: ["onedrive","m365-copilot","powerpoint","word","licensing"]
sources:
  - title: "License options for Microsoft Copilot"
    url: "https://learn.microsoft.com/copilot/plan/copilot-license-options"
    kind: "learn"
  - title: "Assign or unassign licenses for users in the Microsoft 365 admin center"
    url: "https://learn.microsoft.com/microsoft-365/admin/manage/assign-licenses-to-users"
    kind: "learn"
  - title: "Assign Microsoft 365 licenses to user accounts with PowerShell"
    url: "https://learn.microsoft.com/microsoft-365/enterprise/assign-licenses-to-user-accounts-with-microsoft-365-powershell"
    kind: "learn"
  - title: "Archived Microsoft 365 Copilot release notes"
    url: "https://learn.microsoft.com/microsoft-365/copilot/release-notes-archive"
    kind: "learn"
  - title: "Microsoft 365 Roadmap item 469501"
    url: "https://www.microsoft.com/microsoft-365/roadmap?id=469501"
    kind: "roadmap"
videos: []
related: ["onedrive-improved-capabilities-for-files-with-copilot-in-onedrive-web","m365-copilot-reference-the-content-of-a-powerpoint-file-when-creating-a-presentation-with"]
controls:
  - governs: "Which users hold the Copilot licence the roadmap says this feature requires"
    scope: "user"
    ui:
      surface: "Microsoft 365 admin center"
      path: "Users > Active users > user > Licenses and Apps > Licenses"
      docs: "https://learn.microsoft.com/microsoft-365/admin/manage/assign-licenses-to-users"
    api:
      kind: "powershell"
      call: "Set-MgUserLicense -UserId $userUPN -AddLicenses @{SkuId = \"<SkuId>\"} -RemoveLicenses @()"
      docs: "https://learn.microsoft.com/microsoft-365/enterprise/assign-licenses-to-user-accounts-with-microsoft-365-powershell"
    note: "Needs at least License Administrator or User Administrator. Governs all Copilot features the licence brings, not this action alone."
  - governs: "Switch for the OneDrive create-presentation action separate from the Copilot licence"
    scope: "tenant"
    ui: null
    api: null
    note: "Microsoft Learn documents no such setting at the time of writing (November 2026)."
confidence: "low"
created: "2026-11-26"
updated: "2026-11-26"
roadmapModified: "2024-11-20T00:15:49"
changes:
  - date: "2026-11-26"
    note: "New briefing: roadmap-only OneDrive web Copilot action, still In development past its April CY2025 target; licence control and gaps documented."
  - date: "2026-11-26"
    note: "Checked against Microsoft Learn by gpt-6.1-sol: held: 1 of 42 statements contradicted, 2 unconfirmed; taken offline until corrected"
version: 1
verification:
  status: "held"
  date: "2026-11-26"
  version: 1
  model: "gpt-6.1-sol"
  engine: "copilot"
  claims: 42
  confirmed: 39
  unconfirmed: 2
  contradicted: 1
  attempts: 1
  hash: "4ec755b21d4b6feaeef7ef61672a2599"
---

## What's changing

Microsoft plans to let users create the first draft of a presentation from a Word file with Copilot, in a single click, from OneDrive on the web. The roadmap item states that the feature requires a Microsoft Copilot for Microsoft 365 licence and will be available to commercial customers on OneDrive Web.

Microsoft Learn does not describe this OneDrive feature yet at the time of writing (November 2026), so what follows about its behaviour is the roadmap's description. Microsoft has not stated whether it is on by default, where the new presentation is saved, or how it treats a labelled Word file. Microsoft's archived Copilot release notes for November 2023 list a related capability in PowerPoint itself, **Convert Word documents into presentations**, for Windows, iOS and Mac; the roadmap item does not say whether the OneDrive action uses it.

The roadmap item is **In development**, targeted for **April CY2025**, for General Availability in the Worldwide (Standard Multi-Tenant) cloud on the Web platform. That target passed some 19 months ago and the record has not been modified since 20 November 2024, so treat the date as stale.

## Why it matters

For a service owner this is a new entry point to an existing Copilot capability rather than a new exposure: the roadmap ties it to the Copilot licence, so the people who could use it are the people already licensed for Copilot. The practical questions are support ones: users will ask why the option appears for some colleagues and not others, and drafts generated from a Word file need checking before they are shared.

Microsoft has not stated what happens on arrival. No source says existing OneDrive behaviour changes for unlicensed users. Because the item has sat in development well past its target, plan on hearing about it through Message center before it reaches users rather than from this date.

## Risk assessment

**Data exposure**
- The draft is built from a Word file the user opens; the roadmap describes no other data source. Microsoft has not documented where the new presentation is saved or whether the Word file's sensitivity label carries over, so test this before relying on it for labelled content.

**Security & identity**
- No change described: the roadmap ties use to the Copilot licence, which is assigned per user in the Microsoft 365 admin center (see the controls table).

**Autonomy & actions**
- The roadmap describes a user-initiated, one-click draft. It describes nothing that runs without the user starting it.

**Change & support**
- A new Copilot option in OneDrive on the web will appear only to licensed users, if it ships as the roadmap describes. Expect helpdesk questions about why it is missing for some users, and about draft quality.

## Cost and licensing

**Licence.** The roadmap item states the feature requires a Microsoft Copilot for Microsoft 365 licence. Microsoft Learn's [License options for Microsoft Copilot](https://learn.microsoft.com/copilot/plan/copilot-license-options) page says Microsoft Copilot is available with Microsoft 365 E7 or as an add-on for eligible commercial, US Government and education plans, and lists the eligible prerequisite plans (for example Microsoft 365 E3 and E5). The same page describes Microsoft Copilot Business as an add-on for organisations with up to 300 users that have eligible Microsoft 365 Business licences.

**Meter.** The roadmap item describes no meter, and Microsoft publishes no separate price for this OneDrive action.

**Indirect costs.** Admin time to confirm licence assignment, and support time for users who see the option inconsistently across licensed and unlicensed colleagues.

## Scope

- **Users:** those with a Microsoft Copilot for Microsoft 365 licence, per the roadmap item.
- **Customers:** commercial customers, per the roadmap item.
- **Clouds:** Worldwide (Standard Multi-Tenant) as listed on the record; no US Government cloud is listed.
- **Platforms:** Web (OneDrive on the web).
- **Roles:** assigning the licence needs at least the License Administrator or User Administrator role.
- **Rollout:** In development; target April CY2025; release phase General Availability. Rollout mechanics are not yet published.

## Governance guidance

### Before rollout
- Check which users hold the Copilot licence in the Microsoft 365 admin center under Users > Active users, since the roadmap ties this feature to that licence.
- Watch Message center and the roadmap item for a post giving the default state and rollout window, as the item is still In development past its April CY2025 target.
- Prepare a short helpdesk note explaining that the OneDrive option appears only for Copilot-licensed users.

### At rollout
- Test with a licensed pilot account: create a presentation from a labelled and an unlabelled Word file, and record where the file is saved and which label it carries.
- Remove the Copilot licence from any user who should not have Copilot features, using the licence assignment control in the table.

### After rollout
- Revisit this page once Microsoft publishes Learn or support documentation for the OneDrive action, and compare it with what the pilot showed.

## Governance controls

<p class="controls__lead">Where each control lives. The left column says what the setting decides and how far it reaches; the middle gives the admin centre and the exact path; the right gives the script, API or command that does the same. <em>Not yet documented</em> means Microsoft has not published a control for that surface, so there is nothing to configure yet.</p>

<table class="controls">
<thead><tr><th>Control</th><th>Admin UI</th><th>API and automation</th></tr></thead>
<tbody>
<tr><td data-label="Control"><strong>Which users hold the Copilot licence the roadmap says this feature requires</strong><br><small>User</small><br><small class="controls__note">Needs at least License Administrator or User Administrator. Governs all Copilot features the licence brings, not this action alone.</small></td><td data-label="Admin UI"><strong>Microsoft 365 admin center</strong><br>Users › Active users › user › Licenses and Apps › Licenses <a href="https://learn.microsoft.com/microsoft-365/admin/manage/assign-licenses-to-users" rel="noopener" class="controls__docs">Learn</a></td><td data-label="API and automation"><strong>PowerShell</strong><br><code>Set-MgUserLicense -UserId $userUPN -AddLicenses @{SkuId = &quot;&lt;SkuId&gt;&quot;} -RemoveLicenses @()</code> <a href="https://learn.microsoft.com/microsoft-365/enterprise/assign-licenses-to-user-accounts-with-microsoft-365-powershell" rel="noopener" class="controls__docs">Learn</a></td></tr>
<tr><td data-label="Control"><strong>Switch for the OneDrive create-presentation action separate from the Copilot licence</strong><br><small>Tenant</small><br><small class="controls__note">Microsoft Learn documents no such setting at the time of writing (November 2026).</small></td><td data-label="Admin UI"><em class="controls__gap">Not yet documented</em></td><td data-label="API and automation"><em class="controls__gap">Not yet documented</em></td></tr>
</tbody>
</table>

The licence is the only documented route to who can use this feature, and it governs it only because the roadmap item states the feature requires a Copilot licence. Removing the licence removes every Copilot feature the licence brings, not this action alone. Assigning or removing licences needs at least the License Administrator or User Administrator role. Microsoft Learn documents no setting that turns this OneDrive action on or off separately at the time of writing (November 2026).

## Open questions

- Is the OneDrive action on by default for every Copilot-licensed user, or does an admin or user turn it on? Watch Message center.
- Where is the generated presentation saved, and does it inherit the Word file's sensitivity label?
- Is there a setting to turn off this OneDrive action without removing the Copilot licence?
- Does the roadmap's "Microsoft Copilot for Microsoft 365 licence" include Microsoft Copilot Business, and does Copilot Chat (without the licence) get any form of it?
- With the April CY2025 target long passed, what is the new target date? Watch the roadmap item.

<!-- rationale
risk: Low. The roadmap describes a one-click draft built from a Word file the user opens, limited to users with a Copilot licence; it describes no new data source or automatic action.
cost: Medium. The roadmap item says the feature requires a Copilot licence, which Microsoft sells with Microsoft 365 E7 or as an add-on; no separate charge for this feature is published.
impact: Medium. Copilot-licensed users who work in OneDrive on the web would notice it; unlicensed users are outside the roadmap's stated scope.
-->

<!-- verifier-findings (2026-11-26, held; checked by gpt-6.1-sol)
The independent check found fault only with the statements below. This is a correction: change what they name and carry the rest of the page over unchanged.
Correct each of these with the smallest change that removes the fault: delete the statement, narrow it, or put the finding's own "Found" text or worded replacement in its place. Where a fix asks for more than that (a new row, an explanation, further references), do only the part that removes the fault. A correction adds no control rows.
- [contradicted, blocker] What's changing: how it treats a labelled Word file / absence: Microsoft has not stated how Copilot treats a labelled Word file used by this action. | Found: Copilot and agents honor the EXTRACT usage right for a user, however it was applied to the content. | Fix: Replace 'or how it treats a labelled Word file' with 'or whether this OneDrive action inherits the Word file's sensitivity label'. General Copilot protections for labelled content are documented at https://learn.microsoft.com/purview/ai-m365-copilot-considerations; the narrower OneDrive-action inheritance question remains unconfirmed. | Source: https://learn.microsoft.com/purview/ai-m365-copilot-considerations
- [unsupported, major] Risk assessment: Data exposure; rationale: risk / behaviour: The Word file used for the draft is a file the user opens. | Found: Searched: 'Copilot in OneDrive presentation file selection open Word file saved'. Read roadmap and Get started with Copilot in OneDrive. The record says 'using a Word file'; neither source specifies that this action requires the user to open that file. | Fix: Replace 'a Word file the user opens' with 'a Word file' in Data exposure and the risk rationale. The roadmap does not specify opening the source file.
- [unsupported, blocker] Risk assessment: Change & support; Governance guidance: Before rollout / availability: The OneDrive option will appear only for Copilot-licensed users. | Found: Searched: '"Copilot in OneDrive" "button" "license"'; '"OneDrive" "presentation" "licensed users" "option"'. Read roadmap and Get started with Copilot in OneDrive. These require a licence for use but do not state who can see the specific option. | Fix: Replace the appearance-only claims in Change & support and the proposed helpdesk note with: 'The roadmap states that using the feature requires a Microsoft Copilot for Microsoft 365 licence; it does not specify who sees the option.' Keep licence eligibility separate from UI visibility.
These are minor and do not hold the page. Where removing the statement, or rewording it in the words the fix gives, settles one, do that; otherwise leave it as it is. A minor finding may also add a source link it names for a statement already on the page. It adds no row and nothing that needs research.
- [supported, minor] What's changing: Microsoft Learn does not describe this OneDrive feature yet / absence: No Microsoft Learn description of the specific roadmap action was found in November 2026. | Found: Searched: '"469501"'; '"OneDrive" "create a presentation" "Copilot"'. Read Learn release notes and Microsoft Support's Get started with Copilot in OneDrive; Support describes presentation creation, but does not identify the specific one-click roadmap action. | Fix: Narrow the paragraph to: 'Microsoft Learn does not describe the specific one-click Word-to-presentation action at the time of writing (November 2026). Microsoft Support describes creating presentations from files in Copilot in OneDrive, without identifying that capability as this roadmap item.' Cite https://support.microsoft.com/office/get-started-with-copilot-in-onedrive-7fc81e10-e0cf-4da8-af2e-9876a2770e5d.
-->
