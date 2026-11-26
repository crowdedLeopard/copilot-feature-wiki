---
title: "Microsoft 365 Copilot Chat on Android: choose style and format, and apply a brand kit, for visual creations"
slug: "m365-copilot-copilot-chat-apply-your-brand-kit-and-style-to-visual-creations"
roadmapId: 506756
topic: "m365-copilot"
products: ["Microsoft Copilot (Microsoft 365)"]
summary: "Copilot Chat on Android is to gain style and format choices for posters, infographics and images, and brand kits for Microsoft 365 Copilot licence holders. No admin step is documented; brand kit policies decide who creates and publishes kits."
status: "in-development"
releasePhase: ["General Availability"]
clouds: ["Worldwide (Standard Multi-Tenant)"]
platforms: ["Android"]
targetDate: "January CY2026"
previewDate: null
risk: "low"
cost: "low"
impact: "medium"
defaultState: "unknown"
action: "review"
licensing:
  model: "per-user"
  notes: "The roadmap item and the July 2026 release notes say applying a brand kit needs a Microsoft 365 Copilot licence. Neither says which licence the style and format choices need on their own."
audiences: ["m365-admin","service-owner","change-adoption"]
tags: ["copilot-chat","m365-copilot","brand-kits","cloud-policy","mobile","licensing"]
sources:
  - title: "Microsoft 365 Roadmap 506756"
    url: "https://www.microsoft.com/microsoft-365/roadmap?id=506756"
    kind: "roadmap"
  - title: "Microsoft 365 Copilot release notes"
    url: "https://learn.microsoft.com/microsoft-365/copilot/release-notes"
    kind: "learn"
  - title: "Configure brand kit governance and organizational assets"
    url: "https://learn.microsoft.com/copilot/implement/configure-brand-kit-governance-organizational-assets"
    kind: "learn"
  - title: "Configure Microsoft Copilot settings in the Microsoft 365 admin center"
    url: "https://learn.microsoft.com/copilot/implement/configure-copilot-admin-center"
    kind: "learn"
  - title: "copilotPolicySetting resource type"
    url: "https://learn.microsoft.com/microsoft-365/copilot/extensibility/api/admin-settings/resources/copilotpolicysetting"
    kind: "learn"
  - title: "Supported Copilot resources for Tenant Configuration Management (preview)"
    url: "https://learn.microsoft.com/graph/utcm-copilot-resources"
    kind: "learn"
  - title: "Overview of Cloud Policy service for Microsoft 365"
    url: "https://learn.microsoft.com/microsoft-365-apps/admin-center/overview-cloud-policy"
    kind: "learn"
  - title: "Whether supported image-generation experiences in Copilot are allowed (Microsoft Graph)"
    url: "https://learn.microsoft.com/microsoft-365/copilot/extensibility/api/admin-settings/copilotpolicysetting-update"
    kind: "learn"
  - title: "Which users hold the Microsoft 365 Copilot licence that applying a brand kit needs (Microsoft 365 admin center)"
    url: "https://learn.microsoft.com/microsoft-365/admin/manage/assign-licenses-to-users"
    kind: "learn"
  - title: "Which users hold the Microsoft 365 Copilot licence that applying a brand kit needs (PowerShell)"
    url: "https://learn.microsoft.com/microsoft-365/enterprise/assign-licenses-to-user-accounts-with-microsoft-365-powershell"
    kind: "learn"
videos: []
related: ["cloud-policy"]
controls:
  - governs: "Who can publish, edit and manage official brand kits"
    scope: "tenant"
    ui:
      surface: "Microsoft 365 Apps admin center"
      path: "Customization > Policy Management > policy > Policies > Elevated role for Brand Managers"
      docs: "https://learn.microsoft.com/copilot/implement/configure-brand-kit-governance-organizational-assets"
    api: null
    note: "Set to Enabled with the brand manager group's email address; default is Not configured. Tenant-level policy, priority 0. Changes can take up to 24 hours."
  - governs: "Who can create and edit personal brand kits"
    scope: "tenant"
    ui:
      surface: "Microsoft 365 Apps admin center"
      path: "Customization > Policy Management > policy > Start with the basics > Choose the scope > Configure Settings > Restrict brand kit creation"
      docs: "https://learn.microsoft.com/copilot/implement/configure-brand-kit-governance-organizational-assets"
    api: null
    note: "Set Configuration setting to Enabled and give a security group email address; users outside the group don't see the option to create a brand kit."
  - governs: "Whether supported image-generation experiences in Copilot are allowed"
    scope: "tenant"
    ui:
      surface: "Microsoft 365 admin center"
      path: "Copilot > Settings > Copilot actions > Copilot image generation"
      docs: "https://learn.microsoft.com/copilot/implement/configure-copilot-admin-center"
    api:
      kind: "graph"
      call: "PATCH /beta/copilot/admin/policySettings/{id}"
      docs: "https://learn.microsoft.com/microsoft-365/copilot/extensibility/api/admin-settings/copilotpolicysetting-update"
    note: "{id} is microsoft.copilot.imagegeneration; the request body sets value. Beta, tenant-level policies only. Not stated whether it covers this feature's style and format choices."
  - governs: "Which users hold the Microsoft 365 Copilot licence that applying a brand kit needs"
    scope: "user"
    ui:
      surface: "Microsoft 365 admin center"
      path: "Users > Active users > user > Licenses and Apps > Licenses"
      docs: "https://learn.microsoft.com/microsoft-365/admin/manage/assign-licenses-to-users"
    api:
      kind: "powershell"
      call: "Set-MgUserLicense -UserId $userUPN -AddLicenses @{SkuId = \"<SkuId>\"} -RemoveLicenses @()"
      docs: "https://learn.microsoft.com/microsoft-365/enterprise/assign-licenses-to-user-accounts-with-microsoft-365-powershell"
    note: "Existing licence assignment. The roadmap item ties applying a brand kit to this licence; it is not a switch for the feature itself."
confidence: "medium"
created: "2026-11-26"
updated: "2026-11-26"
roadmapModified: "2025-11-05T00:00:26"
changes:
  - date: "2026-11-26"
    note: "New briefing for the Android roadmap item, covering the brand kit policies, the image generation setting and the licence gate."
  - date: "2026-11-26"
    note: "Checked against Microsoft Learn by gpt-6.1-sol: held: 2 of 60 statements contradicted, 0 unconfirmed; taken offline until corrected"
  - date: "2026-11-26"
    note: "Corrected: official brand kits are described as available to users with a Microsoft 365 Copilot licence, not every user; added the Start with the basics step to the brand kit creation path; removed the audit log checklist item."
  - date: "2026-11-26"
    note: "Checked against Microsoft Learn by gpt-6.1-sol: passed with 0 of 66 statements not yet confirmed"
version: 2
verification:
  status: "verified-with-gaps"
  date: "2026-11-26"
  version: 2
  model: "gpt-6.1-sol"
  engine: "copilot"
  claims: 66
  confirmed: 66
  unconfirmed: 0
  contradicted: 0
  attempts: 0
  hash: "b05ff7bf9af9c1a0f825c3892bbaccb3"
---

## What's changing

Copilot Chat in the Android app is to let users pick a visual style and a format (poster, infographic or image) when they ask for a visual, and, for users with a Microsoft 365 Copilot licence, apply a brand kit. A brand kit is a set of approved assets; Microsoft's governance page says brand kits can include logos, colour palettes, fonts, images and templates.

Microsoft Learn does not describe the Android version yet. The Microsoft 365 Copilot release notes of July 1, 2026 describe the same feature for Windows, Mac and web: users add the image generation capability from the **+** menu, choose a style, then apply the organisation's brand kit and select a format before Copilot generates the output. What follows about Android is the roadmap's description, read alongside that entry.

Microsoft has not stated what happens on arrival on Android. The release notes list no admin step to switch the feature on for Windows, Mac or web.

The roadmap record shows status In development, release phase General Availability, Worldwide (Standard Multi-Tenant) only, and a target of January CY2026, which has passed with the status unchanged. Microsoft lists the same feature for iOS under roadmap item 506755; this page covers the Android item, 506756.

## Why it matters

The useful part for a service owner is the brand kit. Once a brand manager publishes an official kit, users with a Microsoft 365 Copilot licence can apply it, so the quality of what Copilot Chat produces on phones depends on what was published and who was allowed to publish it. Microsoft's governance page puts both decisions in Cloud Policy, in the Microsoft 365 Apps admin center, not in the Copilot settings page, so they are easy to miss.

Microsoft has not stated the Android default. No source says existing behaviour changes for users who do not open the new choices, so treat this as something to fit to your brand governance before it ships, not as a deadline.

## Risk assessment

**Data exposure**
- The brand kit policies allow users outside both policy groups to use published official kits, subject to the feature's licence requirement: Microsoft's table shows a user in neither policy group "can use published official brand kits". Published official kits can make approved assets available to eligible users across the organisation. The **Elevated role for Brand Managers** setting decides who can publish.
- Microsoft lists the Create experience and Copilot Chat in PowerPoint and Word as the places assets from a connected organisational asset library appear. It does not list Copilot Chat visual creation on Android.

**Security & identity**
- Publishing rights come from membership of a mail-enabled security group named in the policy. Microsoft's page says group ownership alone does not grant the right to publish or edit official kits, so review members, not owners.
- The two brand kit policies are independent: a brand manager who is not also in the creation group cannot create or edit kits.

**Autonomy & actions**
- No change: the feature makes a visual when a user asks for one. The release notes describe nothing it does beyond that.

**Change & support**
- Where **Restrict brand kit creation** is enabled, users outside its group do not see the option to create a brand kit, and a user who receives a shared kit with edit rights sees the message "Your admin has restricted the rights for brand kit creation and editing." Expect help-desk questions.
- Users without a Microsoft 365 Copilot licence will not be able to apply a brand kit, per the roadmap item.

## Cost and licensing

- **Licence:** the roadmap item and the July 2026 release notes say users with a Microsoft 365 Copilot licence can apply a brand kit. Microsoft has not published which licence the style and format choices need without a brand kit.
- **Meter:** Microsoft publishes no meter, credit rate or price for this feature at the time of writing (November 2026).
- **Indirect costs:** admin time to create the security groups and configure the two Cloud Policy settings, and brand managers' time to build and maintain official kits. Microsoft's prerequisites include creating an organisation assets library in SharePoint.

## Scope

- **Users:** Copilot Chat users on Android. Applying a brand kit is limited to users with a Microsoft 365 Copilot licence, per the roadmap item.
- **Roles:** Microsoft's Copilot settings page says creating Cloud Policy settings for Microsoft 365 apps requires the **Office Apps admin** role, and names **AI Administrator** as an appropriate role for Copilot settings in the Microsoft 365 admin center.
- **Clouds:** Worldwide (Standard Multi-Tenant), as the record lists.
- **Platforms:** Android. The iOS version is roadmap item 506755; the release notes describe Windows, Mac and web.
- **Prerequisites for brand kits:** an organisation assets library, a mail-enabled security group for brand managers and one for users who may create personal kits.

## Governance guidance

### Before rollout
- Decide who may publish official brand kits, put them in a mail-enabled security group, and set **Elevated role for Brand Managers** in the Microsoft 365 Apps admin center (Office Apps admin).
- Decide whether to limit personal brand kits, and if so set **Restrict brand kit creation** to a second mail-enabled security group.
- Check which Android users hold a Microsoft 365 Copilot licence, since only they will apply brand kits.
- Confirm whether the **Copilot image generation** setting in the Microsoft 365 admin center is allowed or prevented for your tenant, and that this matches your intent for visuals in Copilot Chat.

### At rollout
- Verify that the Brand Manager policy scope is **Tenant** and its priority is **0**, as Microsoft's page requires.
- Ask brand managers to publish one official kit and test it from Copilot Chat on Android before announcing the feature.
- Tell Android users where the style, format and brand kit choices sit, and that brand kits need a Microsoft 365 Copilot licence.

### After rollout
- Allow up to 24 hours after any brand kit policy change before reporting a fault.
- Review the membership of the brand manager group each quarter.

## Governance controls

<p class="controls__lead">Where each control lives. The left column says what the setting decides and how far it reaches; the middle gives the admin centre and the exact path; the right gives the script, API or command that does the same. <em>Not yet documented</em> means Microsoft has not published a control for that surface, so there is nothing to configure yet.</p>

<table class="controls">
<thead><tr><th>Control</th><th>Admin UI</th><th>API and automation</th></tr></thead>
<tbody>
<tr><td data-label="Control"><strong>Who can publish, edit and manage official brand kits</strong><br><small>Tenant</small><br><small class="controls__note">Set to Enabled with the brand manager group's email address; default is Not configured. Tenant-level policy, priority 0. Changes can take up to 24 hours.</small></td><td data-label="Admin UI"><strong>Microsoft 365 Apps admin center</strong><br>Customization › Policy Management › policy › Policies › Elevated role for Brand Managers <a href="https://learn.microsoft.com/copilot/implement/configure-brand-kit-governance-organizational-assets" rel="noopener" class="controls__docs">Learn</a></td><td data-label="API and automation"><em class="controls__gap">Not yet documented</em></td></tr>
<tr><td data-label="Control"><strong>Who can create and edit personal brand kits</strong><br><small>Tenant</small><br><small class="controls__note">Set Configuration setting to Enabled and give a security group email address; users outside the group don't see the option to create a brand kit.</small></td><td data-label="Admin UI"><strong>Microsoft 365 Apps admin center</strong><br>Customization › Policy Management › policy › Start with the basics › Choose the scope › Configure Settings › Restrict brand kit creation <a href="https://learn.microsoft.com/copilot/implement/configure-brand-kit-governance-organizational-assets" rel="noopener" class="controls__docs">Learn</a></td><td data-label="API and automation"><em class="controls__gap">Not yet documented</em></td></tr>
<tr><td data-label="Control"><strong>Whether supported image-generation experiences in Copilot are allowed</strong><br><small>Tenant</small><br><small class="controls__note">{id} is microsoft.copilot.imagegeneration; the request body sets value. Beta, tenant-level policies only. Not stated whether it covers this feature's style and format choices.</small></td><td data-label="Admin UI"><strong>Microsoft 365 admin center</strong><br>Copilot › Settings › Copilot actions › Copilot image generation <a href="https://learn.microsoft.com/copilot/implement/configure-copilot-admin-center" rel="noopener" class="controls__docs">Learn</a></td><td data-label="API and automation"><strong>Microsoft Graph</strong><br><code>PATCH /beta/copilot/admin/policySettings/{id}</code> <a href="https://learn.microsoft.com/microsoft-365/copilot/extensibility/api/admin-settings/copilotpolicysetting-update" rel="noopener" class="controls__docs">Learn</a></td></tr>
<tr><td data-label="Control"><strong>Which users hold the Microsoft 365 Copilot licence that applying a brand kit needs</strong><br><small>User</small><br><small class="controls__note">Existing licence assignment. The roadmap item ties applying a brand kit to this licence; it is not a switch for the feature itself.</small></td><td data-label="Admin UI"><strong>Microsoft 365 admin center</strong><br>Users › Active users › user › Licenses and Apps › Licenses <a href="https://learn.microsoft.com/microsoft-365/admin/manage/assign-licenses-to-users" rel="noopener" class="controls__docs">Learn</a></td><td data-label="API and automation"><strong>PowerShell</strong><br><code>Set-MgUserLicense -UserId $userUPN -AddLicenses @{SkuId = &quot;&lt;SkuId&gt;&quot;} -RemoveLicenses @()</code> <a href="https://learn.microsoft.com/microsoft-365/enterprise/assign-licenses-to-user-accounts-with-microsoft-365-powershell" rel="noopener" class="controls__docs">Learn</a></td></tr>
</tbody>
</table>

The two brand kit settings are Cloud Policy settings in the Microsoft 365 Apps admin center and need the Office Apps admin role; the image generation setting sits in the Microsoft 365 admin center. The Graph `policySettings` API covers image generation but lists no brand kit setting among its supported identifiers at the time of writing (November 2026). The policies are independent: to publish a personal kit as official, a user must be in both groups. Microsoft describes the image generation setting as covering "supported image-generation experiences"; it has not said whether that includes style and format choices in Copilot Chat on Android. Licence assignment is today's route for deciding who can apply a brand kit, not a control over the feature itself.

## Open questions

- When will the Android version ship, now that the January CY2026 target has passed? Watch the roadmap item and Message center.
- Does the **Copilot image generation** setting also turn off style and format choices for visual creations in Copilot Chat on Android? Watch the Copilot settings page on Microsoft Learn.
- Can Android users without a Microsoft 365 Copilot licence use the style and format choices without a brand kit?
- Do assets from a connected organisational asset library appear when applying a brand kit in Copilot Chat on Android?
- Will Microsoft add the brand kit policies to the Graph `policySettings` API so they can be scripted?

<!-- rationale
risk: Low. The feature restyles visuals a user asks Copilot Chat to make. Brand kits hold logos, colours and fonts, and two Cloud Policy settings decide who may create personal kits and who may publish official ones.
cost: Low. The roadmap item ties applying a brand kit to a Microsoft 365 Copilot licence, which users either already hold or go without the brand kit. Microsoft publishes no meter or price for this feature; the known cost is admin time.
impact: Medium. Android users who make posters, infographics or images in Copilot Chat see new choices, and the people your organisation names as brand managers gain a publishing role.
-->

<!-- verifier-findings (2026-11-26, verified-with-gaps; checked by gpt-6.1-sol)
The independent check found fault only with the statements below. This is a correction: change what they name and carry the rest of the page over unchanged.
These are minor and do not hold the page. Where removing the statement, or rewording it in the words the fix gives, settles one, do that; otherwise leave it as it is. A minor finding may also add a source link it names for a statement already on the page. It adds no row and nothing that needs research.
- [supported, minor] What's changing; Scope / record: Roadmap item 506755 covers the corresponding iOS capability. | Found: 506755: "title": "Microsoft Copilot (Microsoft 365): [Copilot Chat] Apply your brand kit and style to visual creations"; "platforms": [ "iOS" ] | Fix: Add https://www.microsoft.com/microsoft-365/roadmap?id=506755 to sources for the iOS comparison.
- [supported, minor] Scope: Roles; Governance controls; Governance guidance: Before rollout / role: The Copilot settings page says creating Cloud Policy settings requires the Office Apps admin role. | Found: creating Cloud Policy settings for Microsoft 365 apps requires the Office Apps admin role. | Fix: Replace the unqualified statement that these settings need the Office Apps admin role with 'Use the Office Apps admin role for Cloud Policy configuration; the Cloud Policy overview also lists Security Administrator and Global Administrator as supported roles.' Cite https://learn.microsoft.com/microsoft-365-apps/admin-center/overview-cloud-policy. | Source: https://learn.microsoft.com/copilot/implement/configure-copilot-admin-center
-->
