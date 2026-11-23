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
videos: []
related: []
controls:
  - governs: "Whether the branded footer shows on the Copilot Chat screen, and its label"
    scope: "tenant"
    ui:
      surface: "Microsoft 365 admin center"
      path: "Settings > Org Settings > Organization profile > Custom themes > Default Theme > Copilot Chat > Add your brand to Copilot Chat footer area"
      docs: "https://learn.microsoft.com/microsoft-365/admin/setup/customize-your-organization-theme"
    api: null
    note: "Default theme only. Footer style options: No label, Approved by, Provided by, Managed by. Global admin role per Learn; global readers are read-only."
  - governs: "Which logo the footer displays"
    scope: "tenant"
    ui:
      surface: "Microsoft 365 admin center"
      path: "Settings > Org Settings > Organization profile > Custom themes > Default Theme > Logos"
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
version: 1
verification:
  status: "held"
  date: "2026-11-23"
  version: 1
  model: "gpt-6.1-sol"
  engine: "copilot"
  claims: 49
  confirmed: 42
  unconfirmed: 4
  contradicted: 3
  attempts: 1
  hash: "407e06e47b86ffcea4063285f631d98c"
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
- The footer reads a logo, not user or tenant data. Learn says the logo must be an HTTPS image URL that allows anonymous access and does not require authentication, so anything hosted for this purpose is publicly retrievable. Use a logo you already publish openly.

**Security & identity**
- Treat the footer as a visual cue, not a security control. The branded footer is a logo and label; it does not change who can sign in or what Copilot can reach. Do not tell users that the footer proves a response is safe.
- Only global admins can customise company themes, and global readers have read-only access, per the theme page. Changes to the default theme logo reach the footer as well as the navigation bar.

**Autonomy & actions**
- No change: the footer displays an image and a label and takes no action.

**Change & support**
- One setting reaches all users of the Chat screen and cannot currently be targeted by group, so a wrong logo or an unwanted "Approved by" label is visible to everyone until it is changed.
- Expect questions from users about what "Approved by", "Provided by" or "Managed by" means. **No label** shows the logo alone.

## Cost and licensing

Microsoft's Copilot requirements page says Microsoft Copilot Chat is available to users with an eligible Microsoft 365 subscription, and that a Microsoft Copilot licence is required only for licensed Copilot capabilities. The theme page that documents the footer lists no licence for it. No meter, price or credit rate for the footer is published on that page.

The indirect cost is admin time: someone with the global admin role must set up or review the default theme logo, choose the footer style and agree the wording. Logo hosting is your own cost if you use an Azure Blob Storage or Office 365 Content Delivery Network location, as the theme page suggests for logo URLs.

## Scope

**Who sees it:** all users of the Chat screen in the Microsoft 365 Copilot app, once the footer is on. Learn says it uses the default theme and applies to all users, and that you can't currently target different logos to specific user groups.

**Who configures it:** Learn says only global admins can customise company themes, and global readers have read-only access.

**Prerequisite:** a default theme with a logo set on its **Logos** page. Learn says to confirm the logo is configured before enabling the footer.

**Rollout, from the roadmap record:** Launched, target August CY2026, General Availability and Targeted Release, Worldwide (Standard Multi-Tenant) cloud only, on Android, Desktop, iOS, Mac and Web. Learn's description of the footer does not break it down by platform.

## Governance guidance

### Before rollout
- Decide whether the footer is wanted at all, and who owns the wording. Pick one of **No label**, **Approved by**, **Provided by** or **Managed by**, with security and communications.
- Check that the default theme has a logo on its **Logos** page; the footer shows that logo and no other (first control row).
- Confirm the logo is an HTTPS image URL with anonymous access, as the Logos page requires, and that you are happy for it to be publicly retrievable (second control row).
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
<tr><td data-label="Control"><strong>Whether the branded footer shows on the Copilot Chat screen, and its label</strong><br><small>Tenant</small><br><small class="controls__note">Default theme only. Footer style options: No label, Approved by, Provided by, Managed by. Global admin role per Learn; global readers are read-only.</small></td><td data-label="Admin UI"><strong>Microsoft 365 admin center</strong><br>Settings › Org Settings › Organization profile › Custom themes › Default Theme › Copilot Chat › Add your brand to Copilot Chat footer area <a href="https://learn.microsoft.com/microsoft-365/admin/setup/customize-your-organization-theme" rel="noopener" class="controls__docs">Learn</a></td><td data-label="API and automation"><em class="controls__gap">Not yet documented</em></td></tr>
<tr><td data-label="Control"><strong>Which logo the footer displays</strong><br><small>Tenant</small><br><small class="controls__note">The footer uses the logo configured on the Logos page of the default theme. The same logo setting feeds the theme's navigation bar.</small></td><td data-label="Admin UI"><strong>Microsoft 365 admin center</strong><br>Settings › Org Settings › Organization profile › Custom themes › Default Theme › Logos <a href="https://learn.microsoft.com/microsoft-365/admin/setup/customize-your-organization-theme" rel="noopener" class="controls__docs">Learn</a></td><td data-label="API and automation"><em class="controls__gap">Not yet documented</em></td></tr>
</tbody>
</table>

Both controls sit in the default theme of the Microsoft 365 admin center. The footer is available only for the default theme, and Learn says other theme settings do not apply to it. Enabling it needs a global admin, per the theme page.

There is no separate tenant switch for the footer apart from the toggle on the **Copilot Chat** page, and no per-group setting: Learn says the footer applies to all users. At the time of writing (November 2026), Microsoft Learn documents no PowerShell, Graph or other API for Microsoft 365 organisation themes, so both controls are portal-only. Microsoft Graph's organizationalBranding resource covers Microsoft Entra sign-in branding, a different feature, and is not a control for this footer.

## Open questions

- Does the footer use the alternate logo built for dark themes when a user's app is in a dark theme, or only the default logo? Learn says it uses the logo configured on the **Logos** page and does not say which. Watch the theme page.
- The roadmap describes a fixed "Approved by" label, while Learn offers four footer styles. Which is the intended long-term design? Watch the roadmap item and the theme page.
- Will Microsoft add group-level targeting? Learn says you can't currently target different logos to specific user groups.
- How does the footer behave in the mobile and Mac clients the roadmap lists? Learn does not describe it platform by platform.

<!-- rationale
risk: Low. The footer is a display setting that Learn documents as off by default, and it reuses a logo the admin has already set on the default theme.
cost: Low. The only cost the sources show is admin time to configure the default theme; the theme page names no licence or meter for the footer.
impact: Low. Nobody sees a change until an admin enables the footer; once enabled, every user of the Chat screen sees the same logo and label.
-->

<!-- verifier-findings (2026-11-23, held; checked by gpt-6.1-sol)
The independent check found fault only with the statements below. This is a correction: change what they name and carry the rest of the page over unchanged.
Correct each of these with the smallest change that removes the fault: delete the statement, narrow it, or put the finding's own "Found" text or worded replacement in its place. Where a fix asks for more than that (a new row, an explanation, further references), do only the part that removes the fault. A correction adds no control rows.
- [contradicted, blocker] Risk assessment: Data exposure; Governance guidance: Before rollout / admin-path: The logo must be an anonymously accessible HTTPS image URL. | Found: Add an HTTPS image url that allows anonymous access and doesn't require authentication. For default theme, you also have an option to upload a logo image that is less than 10kb. | Fix: Replace the mandatory-URL statement with 'If you configure the logo by URL, it must use HTTPS and allow anonymous access without authentication. For the default theme, Microsoft also permits uploading a logo image smaller than 10kb.' Change the checklist to 'If the logo is configured by URL, confirm it uses HTTPS and allows anonymous access, and that you are happy for that hosted image to be publicly retrievable.' | Source: https://learn.microsoft.com/microsoft-365/admin/setup/customize-your-organization-theme
- [contradicted, blocker] Cost and licensing / cost: Using Office 365 Content Delivery Network for the logo adds a hosting cost borne by the organisation. | Found: The Office 365 CDN service is included as part of your SharePoint Online subscription. | Fix: Remove 'or Office 365 Content Delivery Network' from the claim that hosting is an additional cost. If retaining a statement about its cost, use 'The Office 365 CDN service is included as part of your SharePoint Online subscription' and cite https://learn.microsoft.com/microsoft-365/enterprise/use-microsoft-365-cdn-with-spo. | Source: https://learn.microsoft.com/microsoft-365/enterprise/use-microsoft-365-cdn-with-spo?view=o365-worldwide
- [unsupported, major] Risk assessment: Data exposure / behaviour: The footer reads a logo but reads no user or tenant data. | Found: Searched: Microsoft 365 Copilot branded footer logo data access permissions sign-in autonomous actions security change; Copilot footer data sign in branding. Read theme page and Copilot privacy/security search excerpts; none specifies the footer's complete data reads. | Fix: Replace 'The footer reads a logo, not user or tenant data' with 'The footer displays the logo configured on the default theme's Logos page'.
- [unsupported, major] Risk assessment: Security & identity / behaviour: The branded footer does not change who can sign in. | Found: Searched: Microsoft 365 Copilot branded footer logo data access permissions sign-in autonomous actions security change; Copilot footer data sign in branding. Read theme page, Copilot requirements and security excerpts; no passage states this footer-specific sign-in effect. | Fix: Remove 'it does not change who can sign in' from the sentence. Retain the advice to treat the footer as a visual cue.
- [unsupported, major] Risk assessment: Security & identity / behaviour: The branded footer does not change what Copilot can reach. | Found: Searched: Microsoft 365 Copilot branded footer logo data access permissions sign-in autonomous actions security change. Read theme page and Copilot privacy/security excerpts; general permission boundaries are stated, but no passage states the footer's effect on data reach. | Fix: Remove 'or what Copilot can reach' from the sentence. Keep 'The branded footer is a logo and label' and the advice not to treat it as proof that a response is safe.
- [unsupported, major] Risk assessment: Autonomy & actions / behaviour: The footer takes no action. | Found: Searched: Microsoft 365 Copilot branded footer logo data access permissions sign-in autonomous actions security change. Read theme page and Copilot privacy/security excerpts; no passage specifies that the footer takes no action. | Fix: Replace 'No change: the footer displays an image and a label and takes no action' with 'Microsoft describes the footer as displaying the organisation's logo and an optional label'.
- [contradicted, blocker] rationale: cost; Cost and licensing / consistency: The cost rationale says admin time is the only cost shown, while the body also identifies logo-hosting costs. | Found: The only cost the sources show is admin time to configure the default theme ... Logo hosting is your own cost if you use an Azure Blob Storage or Office 365 Content Delivery Network location | Fix: Replace the cost rationale with 'Low. Admin time is needed to configure the default theme; optional Azure Blob Storage logo hosting can also incur costs. The theme page names no licence or meter for the footer.' Apply the separate hosting correction so the body does not imply an additional Office 365 CDN service charge.
These are minor and do not hold the page. Where removing the statement, or rewording it in the words the fix gives, settles one, do that; otherwise leave it as it is. A minor finding may also add a source link it names for a statement already on the page. It adds no row and nothing that needs research.
- [supported, minor] controls[0].ui; Governance controls table; Governance guidance: At rollout / admin-path: The Microsoft 365 admin center path through Settings, Org Settings, Organization profile, Custom themes, Default Theme and Copilot Chat reaches Add your brand to Copilot Chat footer area. | Found: Settings > Org Settings ... Organization profile ... Custom themes ... Select your Default Theme. ... Open the Copilot Chat page. ... Select Add your brand to Copilot Chat footer area. ... In the Footer style dropdown | Fix: For the label-setting part of this row, extend the path to 'Settings > Org Settings > Organization profile > Custom themes > Default Theme > Copilot Chat > Add your brand to Copilot Chat footer area > Footer style'. The current path correctly reaches the enabling toggle. | Source: https://learn.microsoft.com/microsoft-365/admin/setup/customize-your-organization-theme
- [supported, minor] controls[1].ui; Governance controls table; Governance guidance: Before rollout / admin-path: Settings > Org Settings > Organization profile > Custom themes > Default Theme > Logos in the Microsoft 365 admin center reaches the page holding the footer's logo setting. | Found: Settings > Org Settings ... Organization profile ... Custom themes ... select Default Theme ... On the Logos page, you can add your logos ... Default logo: Add a URL location that points to your logo. | Fix: Extend controls[1].ui.path to 'Settings > Org Settings > Organization profile > Custom themes > Default Theme > Logos > Default logo'. The present path stops on the correct page. | Source: https://learn.microsoft.com/microsoft-365/admin/setup/customize-your-organization-theme
- [supported, minor] Governance controls / absence: At the time of writing Microsoft Learn documents no PowerShell, Graph or other API for Microsoft 365 organisation themes, so the two controls are described as portal-only. | Found: Searched: Microsoft 365 organization custom themes Copilot Chat branded footer PowerShell Microsoft Graph API logo automation; Microsoft 365 theme PowerShell logo Set theme. Read the theme page and Graph organizationalBranding reference; no matching theme API documented. | Fix: Replace 'so both controls are portal-only' with 'so no automation is documented for either control'. A documentation search establishes what is documented, not that other implementations are impossible.
- [supported, minor] Cost and licensing / cost: Using Azure Blob Storage to host the logo can incur storage and access costs. | Found: This article helps you estimate the cost to store, upload, download, and work with data in Azure Blob Storage. | Fix: Narrow the Azure part of the hosting sentence to 'Hosting a logo in Azure Blob Storage can incur storage and access costs' and cite https://learn.microsoft.com/azure/storage/blobs/blob-storage-estimate-costs. Do not add the illustrative prices from that article. | Source: https://learn.microsoft.com/azure/storage/blobs/blob-storage-estimate-costs
- [supported, minor] Governance controls / applicability: Microsoft Graph organizationalBranding documents Microsoft Entra sign-in branding rather than this Microsoft 365 theme footer. | Found: Organizations can customize their Microsoft Entra sign-in pages which appear when users sign in to their organization's tenant-specific apps, or when Microsoft Entra ID identifies the user's tenant from their username. | Fix: Cite https://learn.microsoft.com/graph/api/resources/organizationalbranding?view=graph-rest-1.0 for the distinction between Graph sign-in branding and the theme footer. | Source: https://learn.microsoft.com/graph/api/resources/organizationalbranding?view=graph-rest-1.0
-->
