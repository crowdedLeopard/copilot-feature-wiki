---
title: "Microsoft 365 Copilot: generative-AI skills in Create for GCC and GCC High"
slug: "m365-copilot-generative-ai-skills-for-create-in-m365-copilot-app-for-government-clouds"
roadmapId: 498548
topic: "m365-copilot"
products: ["Microsoft Copilot (Microsoft 365)"]
summary: "Create in the Microsoft 365 Copilot app, with image, poster, banner, infographic, draft and form skills and brand kits, is launched for GCC and GCC High. Brand kit policies and licences are the controls."
status: "launched"
releasePhase: ["General Availability"]
clouds: ["GCC","GCC High"]
platforms: ["Web"]
targetDate: "March CY2026"
previewDate: null
risk: "low"
cost: "medium"
impact: "medium"
defaultState: "user-opt-in"
action: "review"
licensing:
  model: "add-on"
  notes: "Microsoft's service description says AI-powered features in the Search and Create modules are only available with a Microsoft 365 Copilot licence, an add-on plan. Official brand kits need a Microsoft Copilot Premium licence. The Create article names no separate Create meter."
audiences: ["m365-admin","service-owner","change-adoption"]
tags: ["m365-copilot","copilot","copilot-create","brand-kits","cloud-policy","licensing","gcc","gcc-high"]
sources:
  - title: "Microsoft 365 Roadmap 498548"
    url: "https://www.microsoft.com/microsoft-365/roadmap?id=498548"
    kind: "roadmap"
  - title: "Microsoft Copilot (service description)"
    url: "https://learn.microsoft.com/office365/servicedescriptions/office-365-platform-service-description/microsoft-365-copilot"
    kind: "learn"
  - title: "Get started with Create in the Microsoft Copilot app"
    url: "https://support.microsoft.com/Microsoft-365-Copilot/get-started-with-create-in-the-microsoft-365-copilot-app"
    kind: "docs"
  - title: "Configure brand kit governance and organizational assets"
    url: "https://learn.microsoft.com/copilot/implement/configure-brand-kit-governance-organizational-assets"
    kind: "learn"
  - title: "Configure Microsoft Copilot settings in the Microsoft 365 admin center"
    url: "https://learn.microsoft.com/copilot/implement/configure-copilot-admin-center"
    kind: "learn"
  - title: "Overview of Cloud Policy service for Microsoft 365"
    url: "https://learn.microsoft.com/microsoft-365-apps/admin-center/overview-cloud-policy"
    kind: "learn"
  - title: "Understand Microsoft U.S. government cloud environments for Microsoft 365 and Microsoft Copilot"
    url: "https://learn.microsoft.com/copilot/plan/gov-overview"
    kind: "learn"
  - title: "Assign licenses to users"
    url: "https://learn.microsoft.com/microsoft-365/admin/manage/assign-licenses-to-users"
    kind: "learn"
  - title: "Set-MgUserLicense"
    url: "https://learn.microsoft.com/powershell/module/microsoft.graph.users.actions/set-mguserlicense"
    kind: "learn"
videos: []
related: ["m365-copilot-copilot-in-forms-us-government-clouds"]
controls:
  - governs: "Which users hold the Microsoft 365 Copilot licence the AI-powered features in Create need"
    scope: "user"
    ui:
      surface: "Microsoft 365 admin center"
      path: "Users > Active users > user > Licenses and Apps > Licenses"
      docs: "https://learn.microsoft.com/microsoft-365/admin/manage/assign-licenses-to-users"
    api:
      kind: "powershell"
      call: "Set-MgUserLicense -UserId <user-id> -AddLicenses $addLicenses -RemoveLicenses @()"
      docs: "https://learn.microsoft.com/powershell/module/microsoft.graph.users.actions/set-mguserlicense"
    note: "Work or school accounts without a Copilot licence can still use Create; this controls the AI-powered features."
  - governs: "Who can create and edit personal brand kits"
    scope: "tenant"
    ui:
      surface: "Microsoft 365 Apps admin center"
      path: "Customization > Policy Management > policy > Start with the basics > Choose the scope > Configure Settings > Restrict brand kit creation"
      docs: "https://learn.microsoft.com/copilot/implement/configure-brand-kit-governance-organizational-assets"
    api: null
    note: "Cloud Policy setting; set Configuration setting to Enabled and give a mail-enabled security group address. GCC High uses config.office365.us."
  - governs: "Who can publish, edit and manage official brand kits"
    scope: "tenant"
    ui:
      surface: "Microsoft 365 Apps admin center"
      path: "Customization > Policy Management > policy > Policies > Elevated role for Brand Managers"
      docs: "https://learn.microsoft.com/copilot/implement/configure-brand-kit-governance-organizational-assets"
    api: null
    note: "Not configured by default. The page requires tenant scope and priority 0; changes can take up to 24 hours."
  - governs: "Tenant switch for individual Create features"
    scope: "tenant"
    ui: null
    api: null
    note: "Microsoft's admin page says built-in Create features aren't configured individually."
confidence: "medium"
created: "2026-11-25"
updated: "2026-11-25"
roadmapModified: "2026-04-13T23:15:13"
changes:
  - date: "2026-11-25"
    note: "First briefing for roadmap item 498548: Create generative-AI skills for GCC and GCC High, with brand kit policies and licensing."
  - date: "2026-11-25"
    note: "Checked against Microsoft Learn by gpt-6.1-sol: held: 3 of 62 statements contradicted, 1 unconfirmed; taken offline until corrected"
  - date: "2026-11-25"
    note: "Corrected after the independent check: removed the claim that admins need no action, and aligned the organisation assets library statements with the brand kit governance page."
  - date: "2026-11-25"
    note: "Checked against Microsoft Learn by gpt-6.1-sol: held: 2 of 68 statements contradicted, 0 unconfirmed; taken offline until corrected"
  - date: "2026-11-25"
    note: "Corrected after the independent check: cost rating raised to medium for the Microsoft 365 Copilot add-on licence, and two setup steps without controls-table rows removed from Before rollout."
  - date: "2026-11-25"
    note: "Checked against Microsoft Learn by gpt-6.1-sol: passed: all 65 statements confirmed"
version: 3
verification:
  status: "verified"
  date: "2026-11-25"
  version: 3
  model: "gpt-6.1-sol"
  engine: "copilot"
  claims: 65
  confirmed: 65
  unconfirmed: 0
  contradicted: 0
  attempts: 0
  hash: "9ab57dfdffc4883e0ea7a3fa52994513"
---

## What's changing

The roadmap item adds generative-AI skills for Create in the Microsoft 365 Copilot app to the GCC and GCC High clouds. Its description says users can design and edit images, posters, banners, infographics, text drafts and forms with Copilot, and align them to the brand using kits built by them or their team. The record shows status Launched, a target of March CY2026, release phase General Availability and the Web platform.

Microsoft's Create article describes the product in general terms. For work or school accounts it lists image creation, poster design, banner design, drafts, image editing, infographics, stories and creating from a template, and says forms need a Microsoft Copilot licence. It also lists video, available if the admin turns on Clipchamp, which the roadmap description does not mention. The article does not mention government clouds, so the roadmap description is the record of what this item brings to GCC and GCC High.

Microsoft's service description lists Create as available in GCC and GCC High and as not currently available in DoD. Brand kits hold logos, colour palettes, fonts, images and templates. Two independent Cloud Policy settings decide who creates personal brand kits and who publishes official ones.

## Why it matters

For a government tenant this is mainly a brand-governance and licensing question, not a data one. Users open Create themselves; Microsoft's admin page says built-in Create features are not configured individually, so the levers are the Copilot licence and the brand kit policies. No source says existing behaviour changes for users who do not open Create.

Expect the most noise from brand kits. The brand kit governance page documents the Elevated role for Brand Managers policy as Not configured by default, so plan who will own official kits. Decide before users start publishing kits who owns the official brand.

## Risk assessment

**Data exposure**
- Microsoft's government cloud overview says that for Microsoft Copilot, prompts, responses and generated content stay in the government cloud. Treat that as the baseline for Create and confirm it for your tenant.
- Connecting an organisational asset library to Copilot and configuring it as searchable makes its approved assets available to users in Create (the Visuals pane) and in Copilot Chat in PowerPoint and Word. Review the library's contents before you connect it.

**Security & identity**
- Brand manager group membership is what grants publish and edit rights on official kits; group ownership alone does not. Keep the mail-enabled security group's membership under change control.
- A user in the brand manager group but not the creation group cannot create or edit brand kits, so add brand managers to both groups.

**Autonomy & actions**
- The Create article describes users starting from a text description or a template; it describes no agent acting on its own.

**Change & support**
- Brand kit policy changes can take up to 24 hours to take effect. Expect help desk questions before then.
- Users outside the permitted group who open a shared kit with edit rights see the message "Your admin has restricted the rights for brand kit creation and editing. Please contact your admin for permission."
- Work or school accounts without a Microsoft Copilot licence can still use Create, but Microsoft says quality and performance might vary, so output can differ between licensed and unlicensed users.

## Cost and licensing

**Licence.** Microsoft's service description says AI-powered features in the Search and Create modules are only available with a Microsoft 365 Copilot licence, and describes Microsoft 365 Copilot as an add-on plan with specific licensing prerequisites. The Create article adds that work or school accounts without a Microsoft Copilot licence can still use Create, with variable quality, that forms need a Microsoft Copilot licence, and that creating an official brand kit needs a Microsoft Copilot Premium licence plus brand manager access.

**Meter.** The Create article names no separate meter or charge for Create at the time of writing (November 2026).

**Indirect costs.** Admin time to create the two mail-enabled security groups, configure the Cloud Policy settings and create an organisation assets library to connect to Copilot, which the brand kit governance page lists as a prerequisite before users create and publish kits.

## Scope

**Clouds and platform.** The roadmap record lists GCC and GCC High and the Web platform. Microsoft's service description lists Create as available in GCC and GCC High and not currently available in DoD.

**Users and licences.** Users with a Microsoft 365 Copilot licence get the AI-powered features. Official brand kits need a Microsoft Copilot Premium licence and brand manager access.

**Admin roles.** The brand kit governance page asks for an administrator with the privileges required to manage groups and policy configurations.

**Rollout.** The roadmap target is March CY2026 and the status is Launched. The roadmap record does not state a default.

**Video.** The Create article says video needs the organisation to turn on Clipchamp for work or school accounts. The roadmap description does not list video.

## Governance guidance

### Before rollout
- Decide which licensed users should hold Microsoft 365 Copilot, since the AI-powered features in Create need it.

### At rollout
- Set the Elevated role for Brand Managers policy to Enabled with the brand manager group's address, and confirm the policy scope is Tenant and its priority is 0.
- Set Restrict brand kit creation to Enabled with the creation group's address if you want to limit who can create personal brand kits.
- Assign Microsoft 365 Copilot licences through the Microsoft 365 admin center or PowerShell.

### After rollout
- Test with one user for each combination of creation group and brand manager group the page tabulates, allowing up to 24 hours for policy changes.
- Tell brand managers that the publish button appears in their own brand kits once the policy applies.
- Check the Message center and the Create article for any government-cloud differences Microsoft adds.

## Governance controls

<p class="controls__lead">Where each control lives. The left column says what the setting decides and how far it reaches; the middle gives the admin centre and the exact path; the right gives the script, API or command that does the same. <em>Not yet documented</em> means Microsoft has not published a control for that surface, so there is nothing to configure yet.</p>

<table class="controls">
<thead><tr><th>Control</th><th>Admin UI</th><th>API and automation</th></tr></thead>
<tbody>
<tr><td data-label="Control"><strong>Which users hold the Microsoft 365 Copilot licence the AI-powered features in Create need</strong><br><small>User</small><br><small class="controls__note">Work or school accounts without a Copilot licence can still use Create; this controls the AI-powered features.</small></td><td data-label="Admin UI"><strong>Microsoft 365 admin center</strong><br>Users › Active users › user › Licenses and Apps › Licenses <a href="https://learn.microsoft.com/microsoft-365/admin/manage/assign-licenses-to-users" rel="noopener" class="controls__docs">Learn</a></td><td data-label="API and automation"><strong>PowerShell</strong><br><code>Set-MgUserLicense -UserId &lt;user-id&gt; -AddLicenses $addLicenses -RemoveLicenses @()</code> <a href="https://learn.microsoft.com/powershell/module/microsoft.graph.users.actions/set-mguserlicense" rel="noopener" class="controls__docs">Learn</a></td></tr>
<tr><td data-label="Control"><strong>Who can create and edit personal brand kits</strong><br><small>Tenant</small><br><small class="controls__note">Cloud Policy setting; set Configuration setting to Enabled and give a mail-enabled security group address. GCC High uses config.office365.us.</small></td><td data-label="Admin UI"><strong>Microsoft 365 Apps admin center</strong><br>Customization › Policy Management › policy › Start with the basics › Choose the scope › Configure Settings › Restrict brand kit creation <a href="https://learn.microsoft.com/copilot/implement/configure-brand-kit-governance-organizational-assets" rel="noopener" class="controls__docs">Learn</a></td><td data-label="API and automation"><em class="controls__gap">Not yet documented</em></td></tr>
<tr><td data-label="Control"><strong>Who can publish, edit and manage official brand kits</strong><br><small>Tenant</small><br><small class="controls__note">Not configured by default. The page requires tenant scope and priority 0; changes can take up to 24 hours.</small></td><td data-label="Admin UI"><strong>Microsoft 365 Apps admin center</strong><br>Customization › Policy Management › policy › Policies › Elevated role for Brand Managers <a href="https://learn.microsoft.com/copilot/implement/configure-brand-kit-governance-organizational-assets" rel="noopener" class="controls__docs">Learn</a></td><td data-label="API and automation"><em class="controls__gap">Not yet documented</em></td></tr>
<tr><td data-label="Control"><strong>Tenant switch for individual Create features</strong><br><small>Tenant</small><br><small class="controls__note">Microsoft's admin page says built-in Create features aren't configured individually.</small></td><td data-label="Admin UI"><em class="controls__gap">Not yet documented</em></td><td data-label="API and automation"><em class="controls__gap">Not yet documented</em></td></tr>
</tbody>
</table>

The two brand kit policies are independent. To publish a personal brand kit as official, a user must satisfy both; a user only in the brand manager group cannot create or edit kits. Both are Cloud Policy settings in the Microsoft 365 Apps admin center. Commercial and US Government customers use https://config.office.com, and GCC High customers use https://config.office365.us.

Microsoft Learn documents no API for these two policies at the time of writing (November 2026), and it documents no admin setting that turns individual Create features on or off. The admin page for Copilot settings says built-in Create features aren't configured individually. The Copilot licence is the nearest control over the AI-powered features. Video in Create depends on the organisation turning on Clipchamp, as the Create article states.

## Open questions

- Which Create capabilities, image models and templates are included in GCC and GCC High, and do they match the commercial list in the Create article? Watch the Create article and the roadmap item.
- Does the brand kit governance page, including both policies, apply to GCC and GCC High tenants? The page does not mention government clouds; watch that page.
- Is there a Create-specific credit rate or meter for government clouds? Watch the Microsoft 365 Copilot licensing pages.
- Is Create video with Clipchamp available in GCC and GCC High?

<!-- rationale
risk: Low. Microsoft says Copilot prompts, responses and generated content stay in the government cloud, and users choose to open Create. What remains is branded content made without review; brand kit policies and licensing are the levers.
cost: Medium. AI-powered features in Create require the Microsoft 365 Copilot add-on licence for the users who need them; the Create article names no separate meter. Admin setup adds indirect cost.
impact: Medium. Staff who produce communications, newsletters and posters notice it first; users without a Copilot licence may see different quality or feature coverage.
-->
