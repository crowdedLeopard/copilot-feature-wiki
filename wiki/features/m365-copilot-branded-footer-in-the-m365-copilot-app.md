---
title: "Microsoft 365 Copilot app: admin-approved branded footer on the Chat screen"
slug: "m365-copilot-branded-footer-in-the-m365-copilot-app"
roadmapId: 555852
topic: "m365-copilot"
products: ["Microsoft 365","Microsoft 365 app","Microsoft Copilot (Microsoft 365)"]
summary: "Admins can show the organisation's theme logo and an optional label at the bottom of the Chat screen in the Microsoft 365 Copilot app. Learn documents it as off by default; nothing changes until an admin turns it on."
status: "launched"
releasePhase: ["General Availability","Targeted Release"]
clouds: ["Worldwide (Standard Multi-Tenant)"]
platforms: ["Android","Desktop","iOS","Mac","Web"]
targetDate: "August CY2026"
previewDate: null
risk: "low"
cost: "low"
impact: "low"
defaultState: "admin-opt-in"
action: "review"
licensing:
  model: "included"
  notes: "Microsoft's requirements page says Microsoft Copilot Chat is available to users with an eligible Microsoft 365 subscription. The theme page that documents the footer names no licence or price specific to it."
audiences: ["m365-admin","change-adoption"]
tags: ["m365-copilot","copilot-chat","m365-admin-center","organisation-theme"]
sources:
  - title: "Microsoft 365 Roadmap 555852"
    url: "https://www.microsoft.com/microsoft-365/roadmap?id=555852"
    kind: "roadmap"
  - title: "Customize the Microsoft 365 theme for your organization"
    url: "https://learn.microsoft.com/microsoft-365/admin/setup/customize-your-organization-theme"
    kind: "learn"
  - title: "Microsoft Copilot requirements"
    url: "https://learn.microsoft.com/copilot/plan/microsoft-copilot-requirements"
    kind: "learn"
  - title: "Use the Office 365 Content Delivery Network (CDN) with SharePoint Online"
    url: "https://learn.microsoft.com/microsoft-365/enterprise/use-microsoft-365-cdn-with-spo"
    kind: "learn"
  - title: "Estimate the cost of using Azure Blob Storage"
    url: "https://learn.microsoft.com/azure/storage/blobs/blob-storage-estimate-costs"
    kind: "learn"
  - title: "organizationalBranding resource type"
    url: "https://learn.microsoft.com/graph/api/resources/organizationalbranding?view=graph-rest-1.0"
    kind: "learn"
videos: []
related: []
controls:
  - governs: "Whether the branded footer shows on the Copilot Chat screen, and its label"
    scope: "tenant"
    ui:
      surface: "Microsoft 365 admin center"
      path: "Settings > Org Settings > Organization profile > Custom themes > Default Theme > Copilot Chat > Add your brand to Copilot Chat footer area > Footer style"
      docs: "https://learn.microsoft.com/microsoft-365/admin/setup/customize-your-organization-theme"
    api: null
    note: "Default theme only. Footer style options: No label, Approved by, Provided by, Managed by. Global admin role per Learn; global readers are read-only."
  - governs: "Which logo the footer displays"
    scope: "tenant"
    ui:
      surface: "Microsoft 365 admin center"
      path: "Settings > Org Settings > Organization profile > Custom themes > Default Theme > Logos > Default logo"
      docs: "https://learn.microsoft.com/microsoft-365/admin/setup/customize-your-organization-theme"
    api: null
    note: "The footer uses the logo configured on the Logos page of the default theme. The same logo setting feeds the theme's navigation bar."
confidence: "high"
created: "2026-11-23"
updated: "2026-11-23"
roadmapModified: "2026-10-05T23:03:05"
changes:
  - date: "2026-11-23"
    note: "First briefing: Learn documents the Chat footer as off by default, set from the default theme in the Microsoft 365 admin center."
  - date: "2026-11-23"
    note: "Checked against Microsoft Learn by gpt-6.1-sol: held: 3 of 49 statements contradicted, 4 unconfirmed; taken offline until corrected"
  - date: "2026-11-23"
    note: "Corrected after the independent check: logo URL requirement narrowed, hosting-cost and risk statements reworded, cost rationale updated."
  - date: "2026-11-23"
    note: "Checked against Microsoft Learn by gpt-6.1-sol: passed: all 48 statements confirmed"
version: 2
verification:
  status: "verified"
  date: "2026-11-23"
  version: 2
  model: "gpt-6.1-sol"
  engine: "copilot"
  claims: 48
  confirmed: 48
  unconfirmed: 0
  contradicted: 0
  attempts: 0
  hash: "5758f4d122b355aa2ac7187262d0263f"
---

## What's changing

Admins can now display their organisation's logo, with an optional label, in a footer at the bottom of the Chat screen in the Microsoft 365 Copilot app. Microsoft Learn says the branded footer helps users identify their organisation's trusted, work-managed Copilot experience. The footer reuses the logo already set on the **Logos** page of the default theme in the Microsoft 365 admin center; Learn says other theme settings do not apply to it.

Learn documents the footer as turned off by default. An admin turns it on from the **Copilot Chat** page of the default theme, then picks a **Footer style**: **No label**, **Approved by**, **Provided by** or **Managed by**. The roadmap description mentions only a fixed label, "Approved by", so the Learn page gives more label choices than the roadmap describes. The footer applies to all users, and Learn says you can't currently target different logos to specific user groups. Only the default theme supports it.

The roadmap record lists the item as Launched, with a target of August CY2026, release phases General Availability and Targeted Release, the Worldwide (Standard Multi-Tenant) cloud, and the platforms Android, Desktop, iOS, Mac and Web. Microsoft Learn now names the app "Microsoft Copilot" rather than "Microsoft 365 Copilot"; this briefing keeps the roadmap's name.

## Why it matters

This is a cosmetic setting, but it puts your organisation's name on the screen where people type prompts. Used well, it tells users they are in the organisation's managed Copilot Chat and not a consumer one. That is the purpose Learn gives for it, and it is a useful cue where staff also sign in to Copilot with personal accounts.

The wording matters more than the logo. If nobody acts, nothing changes: Learn documents the footer as off by default. If you turn it on, "Approved by" reads as the organisation endorsing the experience, and users may take that as endorsing every answer. Choose the label deliberately, and agree it with whoever owns your Copilot acceptable-use message.

## Risk assessment

**Data exposure**
- The footer displays the logo configured on the default theme's Logos page. If you configure the logo by URL, Learn says it must use HTTPS and allow anonymous access without authentication, so an image hosted for this purpose is publicly retrievable. For the default theme, Microsoft also permits uploading a logo image smaller than 10kb. Use a logo you already publish openly.

**Security & identity**
- Treat the footer as a visual cue, not a security control. The branded footer is a logo and label. Do not tell users that the footer proves a response is safe.
- Only global admins can customise company themes, and global readers have read-only access, per the theme page. Changes to the default theme logo reach the footer as well as the navigation bar.

**Autonomy & actions**
- Microsoft describes the footer as displaying the organisation's logo and an optional label.

**Change & support**
- One setting reaches all users of the Chat screen and cannot currently be targeted by group, so a wrong logo or an unwanted "Approved by" label is visible to everyone until it is changed.
- Expect questions from users about what "Approved by", "Provided by" or "Managed by" means. **No label** shows the logo alone.

## Cost and licensing

Microsoft's Copilot requirements page says Microsoft Copilot Chat is available to users with an eligible Microsoft 365 subscription, and that a Microsoft Copilot licence is required only for licensed Copilot capabilities. The theme page that documents the footer lists no licence for it. No meter, price or credit rate for the footer is published on that page.

The indirect cost is admin time: someone with the global admin role must set up or review the default theme logo, choose the footer style and agree the wording. Hosting a logo in Azure Blob Storage can incur storage and access costs, as Microsoft's [Azure Blob Storage cost estimate page](https://learn.microsoft.com/azure/storage/blobs/blob-storage-estimate-costs) describes; the theme page suggests Azure Blob Storage or the Office 365 Content Delivery Network for logo URLs. Microsoft's [Office 365 CDN page](https://learn.microsoft.com/microsoft-365/enterprise/use-microsoft-365-cdn-with-spo) says the Office 365 CDN service is included as part of your SharePoint Online subscription.

## Scope

**Who sees it:** all users of the Chat screen in the Microsoft 365 Copilot app, once the footer is on. Learn says it uses the default theme and applies to all users, and that you can't currently target different logos to specific user groups.

**Who configures it:** Learn says only global admins can customise company themes, and global readers have read-only access.

**Prerequisite:** a default theme with a logo set on its **Logos** page. Learn says to confirm the logo is configured before enabling the footer.

**Rollout, from the roadmap record:** Launched, target August CY2026, General Availability and Targeted Release, Worldwide (Standard Multi-Tenant) cloud only, on Android, Desktop, iOS, Mac and Web. Learn's description of the footer does not break it down by platform.

## Governance guidance

### Before rollout
- Decide whether the footer is wanted at all, and who owns the wording. Pick one of **No label**, **Approved by**, **Provided by** or **Managed by**, with security and communications.
- Check that the default theme has a logo on its **Logos** page; the footer shows that logo and no other (first control row).
- If the logo is configured by URL, confirm it uses HTTPS and allows anonymous access, and that you are happy for that hosted image to be publicly retrievable (second control row).
- Arrange for a global admin to make the change, because Learn says only global admins can customise company themes.

### At rollout
- Open the default theme, go to its **Copilot Chat** page, select **Add your brand to Copilot Chat footer area** and choose the **Footer style** (first control row).
- Open the Chat screen in the Microsoft 365 Copilot app on the web and at least one desktop or mobile client, and check that the logo and label display as intended.
- Tell users and the service desk what the label means, in the organisation's own words.

### After rollout
- Review the footer whenever the default theme logo changes, because the footer reads the logo from the same **Logos** page.
- Re-read the theme page and the roadmap item for changes, for example group targeting, which Learn says is not currently supported.

## Governance controls

<p class="controls__lead">Where each control lives. The left column says what the setting decides and how far it reaches; the middle gives the admin centre and the exact path; the right gives the script, API or command that does the same. <em>Not yet documented</em> means Microsoft has not published a control for that surface, so there is nothing to configure yet.</p>

<table class="controls">
<thead><tr><th>Control</th><th>Admin UI</th><th>API and automation</th></tr></thead>
<tbody>
<tr><td data-label="Control"><strong>Whether the branded footer shows on the Copilot Chat screen, and its label</strong><br><small>Tenant</small><br><small class="controls__note">Default theme only. Footer style options: No label, Approved by, Provided by, Managed by. Global admin role per Learn; global readers are read-only.</small></td><td data-label="Admin UI"><strong>Microsoft 365 admin center</strong><br>Settings › Org Settings › Organization profile › Custom themes › Default Theme › Copilot Chat › Add your brand to Copilot Chat footer area › Footer style <a href="https://learn.microsoft.com/microsoft-365/admin/setup/customize-your-organization-theme" rel="noopener" class="controls__docs">Learn</a></td><td data-label="API and automation"><em class="controls__gap">Not yet documented</em></td></tr>
<tr><td data-label="Control"><strong>Which logo the footer displays</strong><br><small>Tenant</small><br><small class="controls__note">The footer uses the logo configured on the Logos page of the default theme. The same logo setting feeds the theme's navigation bar.</small></td><td data-label="Admin UI"><strong>Microsoft 365 admin center</strong><br>Settings › Org Settings › Organization profile › Custom themes › Default Theme › Logos › Default logo <a href="https://learn.microsoft.com/microsoft-365/admin/setup/customize-your-organization-theme" rel="noopener" class="controls__docs">Learn</a></td><td data-label="API and automation"><em class="controls__gap">Not yet documented</em></td></tr>
</tbody>
</table>

Both controls sit in the default theme of the Microsoft 365 admin center. The footer is available only for the default theme, and Learn says other theme settings do not apply to it. Enabling it needs a global admin, per the theme page.

There is no separate tenant switch for the footer apart from the toggle on the **Copilot Chat** page, and no per-group setting: Learn says the footer applies to all users. At the time of writing (November 2026), Microsoft Learn documents no PowerShell, Graph or other API for Microsoft 365 organisation themes, so no automation is documented for either control. Microsoft Graph's [organizationalBranding resource](https://learn.microsoft.com/graph/api/resources/organizationalbranding?view=graph-rest-1.0) covers Microsoft Entra sign-in branding, a different feature, and is not a control for this footer.

## Open questions

- Does the footer use the alternate logo built for dark themes when a user's app is in a dark theme, or only the default logo? Learn says it uses the logo configured on the **Logos** page and does not say which. Watch the theme page.
- The roadmap describes a fixed "Approved by" label, while Learn offers four footer styles. Which is the intended long-term design? Watch the roadmap item and the theme page.
- Will Microsoft add group-level targeting? Learn says you can't currently target different logos to specific user groups.
- How does the footer behave in the mobile and Mac clients the roadmap lists? Learn does not describe it platform by platform.

<!-- rationale
risk: Low. The footer is a display setting that Learn documents as off by default, and it reuses a logo the admin has already set on the default theme.
cost: Low. Admin time is needed to configure the default theme; optional Azure Blob Storage logo hosting can also incur costs. The theme page names no licence or meter for the footer.
impact: Low. Nobody sees a change until an admin enables the footer; once enabled, every user of the Chat screen sees the same logo and label.
-->
