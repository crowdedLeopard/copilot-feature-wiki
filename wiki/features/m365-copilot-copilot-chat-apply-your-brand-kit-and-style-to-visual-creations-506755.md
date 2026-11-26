---
title: "Microsoft 365 Copilot Chat on iOS: choose style and format, and apply a brand kit, for visual creations"
slug: "m365-copilot-copilot-chat-apply-your-brand-kit-and-style-to-visual-creations-506755"
roadmapId: 506755
topic: "m365-copilot"
products: ["Microsoft Copilot (Microsoft 365)"]
summary: "Copilot Chat on iOS is to gain style and format choices for posters, infographics and images, and brand kits for Microsoft 365 Copilot licence holders. No admin step is documented; brand kit policies decide who creates and publishes kits."
status: "in-development"
releasePhase: ["General Availability"]
clouds: ["Worldwide (Standard Multi-Tenant)"]
platforms: ["iOS"]
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
tags: ["copilot-chat","m365-copilot","brand-kits","cloud-policy","mobile","ios","licensing"]
sources:
  - title: "Microsoft 365 Roadmap 506755"
    url: "https://www.microsoft.com/microsoft-365/roadmap?id=506755"
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
  - title: "Microsoft Copilot overview"
    url: "https://learn.microsoft.com/copilot/plan/copilot-overview"
    kind: "learn"
  - title: "copilotPolicySetting resource type"
    url: "https://learn.microsoft.com/microsoft-365/copilot/extensibility/api/admin-settings/resources/copilotpolicysetting"
    kind: "learn"
  - title: "Supported Copilot resources for Tenant Configuration Management (preview)"
    url: "https://learn.microsoft.com/graph/utcm-copilot-resources"
    kind: "learn"
  - title: "Microsoft Copilot requirements"
    url: "https://learn.microsoft.com/copilot/plan/microsoft-copilot-requirements"
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
related: ["m365-copilot-copilot-chat-apply-your-brand-kit-and-style-to-visual-creations","cloud-policy"]
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
    note: "{id} is microsoft.copilot.imagegeneration; the request body sets value. Beta, tenant-level policies only."
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
    note: "New briefing for the iOS roadmap item, covering the brand kit policies, the image generation setting and the licence gate."
  - date: "2026-11-26"
    note: "Checked against Microsoft Learn by gpt-6.1-sol: held: 2 of 56 statements contradicted, 0 unconfirmed; taken offline until corrected"
  - date: "2026-11-26"
    note: "Corrected the governance checklist: removed the claim that brand manager group membership alone grants publishing rights and the group-membership steps; cited the Copilot requirements page for iPhone and iPad."
  - date: "2026-11-26"
    note: "Checked against Microsoft Learn by gpt-6.1-sol: passed with 0 of 65 statements not yet confirmed"
version: 2
verification:
  status: "verified-with-gaps"
  date: "2026-11-26"
  version: 2
  model: "gpt-6.1-sol"
  engine: "copilot"
  claims: 65
  confirmed: 65
  unconfirmed: 0
  contradicted: 0
  attempts: 0
  hash: "f440ea93d0abacd5214eec50f0205a63"
---

## What's changing

Copilot Chat on iOS is to let users pick a visual style and a format (poster, infographic or image) when they ask for a visual, and, for users with a Microsoft 365 Copilot licence, apply their organisation's brand kit. A brand kit is a set of approved assets; Microsoft's governance page says brand kits can include logos, colour palettes, fonts, images and templates.

Microsoft Learn does not describe the iOS version yet. The Microsoft 365 Copilot release notes of July 1, 2026 describe the same feature for Windows, Mac and web: users add the image generation capability from the **+** menu to choose a style, then apply the organisation's brand kit and select a format before Copilot generates the output. What follows about iOS is the roadmap's description, read alongside that entry.

Microsoft has not stated what happens on arrival on iOS. The release notes entry for Windows, Mac and web lists no admin step to switch the feature on.

The roadmap record shows status In development, release phase General Availability, Worldwide (Standard Multi-Tenant) only, and a target of January CY2026, which has passed with the status unchanged. Microsoft lists the same feature for Android under roadmap item 506756; this page covers the iOS item, 506755.

## Why it matters

The part that needs a service owner is the brand kit. Once a brand manager publishes an official kit, users with a Microsoft 365 Copilot licence can apply it, so what Copilot Chat produces on iPhones and iPads depends on what was published and who was allowed to publish it. Microsoft's governance page puts both decisions in Cloud Policy, in the Microsoft 365 Apps admin center, not on the Copilot settings page, so they are easy to miss.

Microsoft has not stated the iOS default. No source says existing behaviour changes for users who do not open the new choices, so treat this as something to fit to your brand governance before it ships, not as a deadline.

## Risk assessment

**Data exposure**
- Microsoft's policy table shows that a user in neither brand kit policy group "can use published official brand kits", subject to the feature's licence requirement. Publishing a kit as official therefore makes its assets available to eligible users across the organisation; the **Elevated role for Brand Managers** setting decides who can publish.

**Security & identity**
- Publishing rights come from membership of a mail-enabled security group named in the policy. Microsoft's page says group ownership alone does not grant permission to publish or edit official brand kits, so review members, not owners.
- The two brand kit policies are independent: a brand manager who is not also in the creation group cannot create or edit kits, per Microsoft's table.

**Autonomy & actions**
- No change: the feature makes a visual when a user asks for one. The release notes describe nothing it does beyond that.

**Change & support**
- Where **Restrict brand kit creation** is enabled, users outside its group do not see the option to create a brand kit, and a user who receives a shared kit with edit rights sees "Your admin has restricted the rights for brand kit creation and editing." Expect help-desk questions.
- Per the roadmap item, applying a brand kit is for users with a Microsoft 365 Copilot licence, so unlicensed Copilot Chat users on iOS should not expect it.

## Cost and licensing

- **Licence:** the roadmap item and the July 2026 release notes say users with a Microsoft 365 Copilot licence can apply a brand kit. A licence for the style and format choices without a brand kit is not yet published.
- **Meter:** Microsoft publishes no separate meter, credit rate or price for this feature at the time of writing (November 2026).
- **Indirect costs:** admin time to create two mail-enabled security groups and configure the two Cloud Policy settings, an organisation assets library in SharePoint (a prerequisite on Microsoft's brand kit governance page), and brand managers' time to build and maintain official kits.

## Scope

- **Users:** Copilot Chat users on iPhone and iPad. Applying a brand kit is for users with a Microsoft 365 Copilot licence, per the roadmap item.
- **Roles:** Microsoft's Copilot settings page says creating Cloud Policy settings for Microsoft 365 apps requires the **Office Apps admin** role, and names **AI Administrator** as an appropriate role for Copilot settings in the Microsoft 365 admin center.
- **Clouds:** Worldwide (Standard Multi-Tenant), as the record lists.
- **Platforms:** iOS. The Android version is roadmap item 506756; the release notes describe Windows, Mac and web.
- **Prerequisites for brand kits:** an organisation assets library, a mail-enabled security group for brand managers and one for users who may create personal kits.

## Governance guidance

### Before rollout
- Decide who may publish official brand kits and set **Elevated role for Brand Managers** in the Microsoft 365 Apps admin center (Office Apps admin).
- Decide whether to limit personal brand kits, and if so set **Restrict brand kit creation** to a second mail-enabled security group.
- Check which iOS users hold a Microsoft 365 Copilot licence, since the roadmap item ties applying a brand kit to it.
- Confirm whether the **Copilot image generation** setting in the Microsoft 365 admin center allows or prevents image generation for your tenant, and that this matches your intent for visuals in Copilot Chat.

### At rollout
- Verify that the Brand Manager policy scope is **Tenant** and its priority is **0**, as Microsoft's page requires.
- Ask a brand manager to publish one official kit and test it from Copilot Chat on an iPhone before announcing the feature.
- Tell iOS users where the style, format and brand kit choices sit, and that brand kits need a Microsoft 365 Copilot licence.

### After rollout
- Allow up to 24 hours after any brand kit policy change before reporting a fault.

## Governance controls

<p class="controls__lead">Where each control lives. The left column says what the setting decides and how far it reaches; the middle gives the admin centre and the exact path; the right gives the script, API or command that does the same. <em>Not yet documented</em> means Microsoft has not published a control for that surface, so there is nothing to configure yet.</p>

<table class="controls">
<thead><tr><th>Control</th><th>Admin UI</th><th>API and automation</th></tr></thead>
<tbody>
<tr><td data-label="Control"><strong>Who can publish, edit and manage official brand kits</strong><br><small>Tenant</small><br><small class="controls__note">Set to Enabled with the brand manager group's email address; default is Not configured. Tenant-level policy, priority 0. Changes can take up to 24 hours.</small></td><td data-label="Admin UI"><strong>Microsoft 365 Apps admin center</strong><br>Customization › Policy Management › policy › Policies › Elevated role for Brand Managers <a href="https://learn.microsoft.com/copilot/implement/configure-brand-kit-governance-organizational-assets" rel="noopener" class="controls__docs">Learn</a></td><td data-label="API and automation"><em class="controls__gap">Not yet documented</em></td></tr>
<tr><td data-label="Control"><strong>Who can create and edit personal brand kits</strong><br><small>Tenant</small><br><small class="controls__note">Set Configuration setting to Enabled and give a security group email address; users outside the group don't see the option to create a brand kit.</small></td><td data-label="Admin UI"><strong>Microsoft 365 Apps admin center</strong><br>Customization › Policy Management › policy › Start with the basics › Choose the scope › Configure Settings › Restrict brand kit creation <a href="https://learn.microsoft.com/copilot/implement/configure-brand-kit-governance-organizational-assets" rel="noopener" class="controls__docs">Learn</a></td><td data-label="API and automation"><em class="controls__gap">Not yet documented</em></td></tr>
<tr><td data-label="Control"><strong>Whether supported image-generation experiences in Copilot are allowed</strong><br><small>Tenant</small><br><small class="controls__note">{id} is microsoft.copilot.imagegeneration; the request body sets value. Beta, tenant-level policies only.</small></td><td data-label="Admin UI"><strong>Microsoft 365 admin center</strong><br>Copilot › Settings › Copilot actions › Copilot image generation <a href="https://learn.microsoft.com/copilot/implement/configure-copilot-admin-center" rel="noopener" class="controls__docs">Learn</a></td><td data-label="API and automation"><strong>Microsoft Graph</strong><br><code>PATCH /beta/copilot/admin/policySettings/{id}</code> <a href="https://learn.microsoft.com/microsoft-365/copilot/extensibility/api/admin-settings/copilotpolicysetting-update" rel="noopener" class="controls__docs">Learn</a></td></tr>
<tr><td data-label="Control"><strong>Which users hold the Microsoft 365 Copilot licence that applying a brand kit needs</strong><br><small>User</small><br><small class="controls__note">Existing licence assignment. The roadmap item ties applying a brand kit to this licence; it is not a switch for the feature itself.</small></td><td data-label="Admin UI"><strong>Microsoft 365 admin center</strong><br>Users › Active users › user › Licenses and Apps › Licenses <a href="https://learn.microsoft.com/microsoft-365/admin/manage/assign-licenses-to-users" rel="noopener" class="controls__docs">Learn</a></td><td data-label="API and automation"><strong>PowerShell</strong><br><code>Set-MgUserLicense -UserId $userUPN -AddLicenses @{SkuId = &quot;&lt;SkuId&gt;&quot;} -RemoveLicenses @()</code> <a href="https://learn.microsoft.com/microsoft-365/enterprise/assign-licenses-to-user-accounts-with-microsoft-365-powershell" rel="noopener" class="controls__docs">Learn</a></td></tr>
</tbody>
</table>

The two brand kit settings are Cloud Policy settings in the Microsoft 365 Apps admin center and need the Office Apps admin role; the image generation setting sits in the Microsoft 365 admin center. The Graph `policySettings` API covers image generation but lists no brand kit setting among its supported identifiers at the time of writing (November 2026). The policies are independent: to publish a personal kit as official, a user must satisfy both. Microsoft's overview says the image generation setting manages whether users can generate images in Copilot Chat, and the release notes reach the style choices through the image generation capability. Licence assignment is today's route for deciding who can apply a brand kit, not a switch for the feature itself.

## Open questions

- When will the iOS version ship, now that the January CY2026 target has passed? Watch the roadmap item and Message center.
- Does preventing **Copilot image generation** also hide the style and format choices for posters and infographics in Copilot Chat on iOS? Watch the Copilot settings page on Microsoft Learn.
- Can iOS users without a Microsoft 365 Copilot licence use the style and format choices without a brand kit?
- Will Microsoft add the brand kit policies to the Graph `policySettings` API so they can be scripted?

<!-- rationale
risk: Low. The feature restyles visuals a user asks Copilot Chat to make. Brand kits hold logos, colours and fonts, and two Cloud Policy settings decide who may create personal kits and who may publish official ones.
cost: Low. The roadmap item ties applying a brand kit to a Microsoft 365 Copilot licence, which users either already hold or go without the brand kit. Microsoft publishes no separate meter or price for this feature; the known cost is admin time.
impact: Medium. iPhone and iPad users who make posters, infographics or images in Copilot Chat see new choices, and the people your organisation names as brand managers gain a publishing role.
-->

<!-- verifier-findings (2026-11-26, verified-with-gaps; checked by gpt-6.1-sol)
The independent check found fault only with the statements below. This is a correction: change what they name and carry the rest of the page over unchanged.
These are minor and do not hold the page. Where removing the statement, or rewording it in the words the fix gives, settles one, do that; otherwise leave it as it is. A minor finding may also add a source link it names for a statement already on the page. It adds no row and nothing that needs research.
- [supported, minor] Risk assessment: Autonomy & actions / behaviour: Generating a visual in response to a user request is existing mobile Copilot Chat behaviour, not newly autonomous behaviour introduced here. | Found: Image generation in mobile Copilot chat [Android, iOS] ... Create images using natural language to visualize concepts and ideas within the flow of work, directly in Copilot on Microsoft 365, Teams, and Outlook mobile apps. | Fix: Add https://learn.microsoft.com/microsoft-365/copilot/previous-year-release-notes to sources and cite its May 13, 2025 mobile image-generation entry after the sentence beginning 'No change:'. | Source: https://learn.microsoft.com/microsoft-365/copilot/previous-year-release-notes
-->
