---
title: "Viva Engage: tenant-wide custom branding from a Brand center in the Engage admin center"
slug: "microsoft-viva-rolling-out-custom-branding-in-engage"
roadmapId: 568364
topic: "modern-work"
products: ["Microsoft Viva"]
summary: "Engage administrators can publish one brand name, logo set and theme colour for Viva Engage on web, Teams and mobile. Nothing changes for users until an admin publishes it; personal user themes are being retired alongside it."
status: "launched"
releasePhase: ["General Availability"]
clouds: ["Worldwide (Standard Multi-Tenant)"]
platforms: ["Android","iOS","Web"]
targetDate: "August CY2026"
previewDate: null
risk: "low"
cost: "none"
impact: "medium"
defaultState: "admin-opt-in"
action: "review"
licensing:
  model: "included"
  notes: "Microsoft's announcement says Custom Branding is available to all Engage customers and does not require premium Viva Suite or Viva Employee Communications and Communities licences. Engage administrators need no Viva Engage licence to use the Engage admin center."
audiences: ["m365-admin","service-owner","change-adoption"]
tags: ["viva-engage","organisation-theme","admin-controls","user-experience","mobile"]
sources:
  - title: "Make Viva Engage feel more like your organization: Custom Branding available now"
    url: "https://techcommunity.microsoft.com/blog/Viva_Engage_Blog/make-viva-engage-feel-more-like-your-organization-custom-branding-available-now/4547595"
    kind: "blog"
  - title: "Viva Engage setup requirements"
    url: "https://learn.microsoft.com/viva/engage/setup"
    kind: "learn"
  - title: "Configure the Viva Engage tenant"
    url: "https://learn.microsoft.com/viva/engage/configure-your-viva-engage-network/configure-viva-engage"
    kind: "learn"
  - title: "Manage administrator roles in Viva Engage"
    url: "https://learn.microsoft.com/viva/engage/eac-key-admin-roles-permissions"
    kind: "learn"
  - title: "Use the Microsoft Graph API to work with Viva Engage"
    url: "https://learn.microsoft.com/graph/api/resources/engagement-api-overview?view=graph-rest-beta"
    kind: "learn"
  - title: "Customize the Microsoft 365 theme for your organization"
    url: "https://learn.microsoft.com/microsoft-365/admin/setup/customize-your-organization-theme"
    kind: "learn"
  - title: "Microsoft 365 Roadmap item 568364"
    url: "https://www.microsoft.com/microsoft-365/roadmap?id=568364"
    kind: "roadmap"
  - title: "Who holds the Yammer Administrator (Engage administrator) role that can set up branding (Microsoft Entra admin center)"
    url: "https://learn.microsoft.com/entra/identity/role-based-access-control/manage-roles-portal"
    kind: "learn"
videos: []
related: []
controls:
  - governs: "The tenant-wide Engage brand name, logos and theme colour, and when they are published"
    scope: "tenant"
    ui:
      surface: "Viva Engage admin center"
      path: "Brand center"
      docs: "https://techcommunity.microsoft.com/blog/Viva_Engage_Blog/make-viva-engage-feel-more-like-your-organization-custom-branding-available-now/4547595"
    api: null
    note: "Microsoft's announcement names the Brand center but gives no navigation steps to it. Changes reach users only when published."
  - governs: "Who holds the Yammer Administrator (Engage administrator) role that can set up branding"
    scope: "tenant"
    ui:
      surface: "Microsoft Entra admin center"
      path: "Identity > Roles & admins > role > Add assignments"
      docs: "https://learn.microsoft.com/entra/identity/role-based-access-control/manage-roles-portal"
    api:
      kind: "graph"
      call: "POST /v1.0/roleManagement/directory/roleAssignments"
      docs: "https://learn.microsoft.com/entra/identity/role-based-access-control/manage-roles-portal"
    note: "Choose the Yammer Administrator role. Assigning needs at least Privileged Role Administrator."
  - governs: "The Microsoft 365 organisation theme that colours Engage web until branding is published"
    scope: "tenant"
    ui:
      surface: "Microsoft 365 admin center"
      path: "Settings > Org Settings > Organization profile > Custom themes"
      docs: "https://learn.microsoft.com/microsoft-365/admin/setup/customize-your-organization-theme"
    api: null
    note: "Existing control, not a control over Engage branding: published Engage branding takes precedence inside Engage. Only Global Administrators can customise themes."
confidence: "medium"
created: "2026-11-28"
updated: "2026-11-28"
roadmapModified: "2026-10-12T23:01:05"
changes:
  - date: "2026-11-28"
    note: "New briefing: tenant-wide Engage branding from the Brand center, its precedence over the Microsoft 365 organisation theme, and the retirement of user themes."
  - date: "2026-11-28"
    note: "Checked against Microsoft Learn by gpt-6.1-sol: passed with 0 of 54 statements not yet confirmed"
version: 1
verification:
  status: "verified-with-gaps"
  date: "2026-11-28"
  version: 1
  model: "gpt-6.1-sol"
  engine: "copilot"
  claims: 54
  confirmed: 52
  unconfirmed: 0
  contradicted: 2
  attempts: 0
  hash: "a109349cf68e5d39c7538dd8e69a3434"
---

## What's changing

Viva Engage now lets an administrator set one tenant-wide visual identity for Engage: a brand name, large and small logos, and a theme colour. It is managed from a new **Brand center** in the Viva Engage admin center. Microsoft Learn has no page for the feature yet; the details below come from the roadmap item and Microsoft's Viva Engage blog announcement, which the Engage setup page links to.

According to the announcement, branding applies across Viva Engage on the web, the Engage app in Teams, and the iOS and Android mobile apps. Administrators pick a colour from the existing theme palette or add their own hex value, preview the result on each platform, and then publish it or discard changes to return to the last published version. Nothing changes for users until an admin publishes. Branding is tenant-wide in this release: one brand name, logo set and theme colour for the whole network.

Published branding takes precedence over the Microsoft 365 organisation theme inside Engage. Until it is published, an organisation theme set in the Microsoft 365 admin center keeps colouring the Engage web header (navigation bar colour) and buttons and links (accent colour). The announcement also says personal user themes in Engage are being retired with this rollout, announced separately in MC1162958.

The roadmap item is **Launched** (General Availability), targeted for August CY2026, for Worldwide (Standard Multi-Tenant) on Web, iOS and Android. The announcement gives the rollout as beginning at the end of August 2026 and expected to complete by mid-September 2026, with admin details in Message center post MC1447681.

## Why it matters

This is a communications decision more than a technical one. Branding is optional and publishes nothing on its own, so a tenant that does nothing keeps its current Engage look: the Microsoft 365 organisation theme where one exists, or default Engage styling. The change users will notice regardless is the retirement of personal user themes, which the announcement suggests telling users about.

When branding is published, it overrides the Microsoft 365 organisation theme inside Engage and, unlike that theme, also reaches the mobile apps. A single administrator can change what every Engage user sees on every platform, so treat the brand name and logos as owned assets: agree them with whoever owns the brand and with accessibility reviewers before publishing.

## Risk assessment

**Data exposure**
- No change: the feature sets a name, logos and a colour shown in Engage.

**Security & identity**
- A tenant brand name and logo inside Engage help users recognise the genuine service. Branding is set up by Viva Engage administrators (Engage administrators hold the Yammer Administrator role in Microsoft Entra ID), so keep that role assignment small.

**Autonomy & actions**
- No change: nothing acts on its own. Branding changes reach users only when an administrator publishes.

**Change & support**
- Publishing changes the Engage look for the whole network at once, including mobile, and replaces the Microsoft 365 organisation theme inside Engage. Expect questions where Engage then differs from the suite header in other Microsoft 365 apps.
- Personal user themes are being retired with this rollout (MC1162958), so users who set one will see it disappear whether or not branding is published.
- Branding is one design per tenant in this release, so divisions or subsidiaries sharing a tenant cannot have their own.

## Cost and licensing

Microsoft's Viva Engage blog announcement says Custom Branding is available to all Engage customers and does not require premium Viva Suite or Viva Employee Communications and Communities licences. No Engage licence is needed by the administrator who configures it: the Manage administrator roles page says Global administrators and Engage administrators do not need a Viva Engage Core or premium licence to reach the Engage admin center.

Beyond licensing, plan for people's time: agreeing the brand assets, testing the preview on each platform, and telling users that personal themes are going.

## Scope

- **Who sees it:** every user in the Engage network, once branding is published; it is tenant-wide in this release.
- **Who configures it:** the announcement says only a Viva Engage administrator with access to the Engage admin center can set up branding. The roadmap item calls them Engage-level admins. Engage administrators are the Yammer Administrator role in Microsoft Entra ID.
- **Platforms:** Engage on the web, the Engage app in Teams, and the Engage iOS and Android apps. The roadmap lists Web, iOS and Android.
- **Clouds:** Worldwide (Standard Multi-Tenant), as listed on the roadmap item.
- **Separate setting:** the Teams app store can rename and recolour the Engage app tile; the Engage setup page says those customisations do not affect branding inside Engage.

## Governance guidance

### Before rollout
- Decide with the brand owner which name, large and small logos and theme colour Engage should carry, and check the colour against the 4.5:1 contrast ratio that Microsoft 365 themes recommend.
- Check whether a Microsoft 365 organisation theme exists (Microsoft 365 admin center > Settings > Org Settings > Organization profile > Custom themes), since it colours Engage web until branding is published.
- Review who holds the Yammer Administrator role in Microsoft Entra ID, because that group can publish a new look to the whole network.
- Tell users that personal Engage themes are being retired (MC1162958).

### At rollout
- Configure the brand in the Viva Engage admin center Brand center and preview it on web, the Engage app in Teams and mobile before publishing.
- Publish once the preview is agreed, and use discard changes to drop an unpublished draft.

### After rollout
- Check the published brand in light and dark mode on the mobile apps.
- Record who may change the brand and how changes are approved, since Engage administrators can republish it.

## Governance controls

<p class="controls__lead">Where each control lives. The left column says what the setting decides and how far it reaches; the middle gives the admin centre and the exact path; the right gives the script, API or command that does the same. <em>Not yet documented</em> means Microsoft has not published a control for that surface, so there is nothing to configure yet.</p>

<table class="controls">
<thead><tr><th>Control</th><th>Admin UI</th><th>API and automation</th></tr></thead>
<tbody>
<tr><td data-label="Control"><strong>The tenant-wide Engage brand name, logos and theme colour, and when they are published</strong><br><small>Tenant</small><br><small class="controls__note">Microsoft's announcement names the Brand center but gives no navigation steps to it. Changes reach users only when published.</small></td><td data-label="Admin UI"><strong>Viva Engage admin center</strong><br>Brand center <a href="https://techcommunity.microsoft.com/blog/Viva_Engage_Blog/make-viva-engage-feel-more-like-your-organization-custom-branding-available-now/4547595" rel="noopener" class="controls__docs">Learn</a></td><td data-label="API and automation"><em class="controls__gap">Not yet documented</em></td></tr>
<tr><td data-label="Control"><strong>Who holds the Yammer Administrator (Engage administrator) role that can set up branding</strong><br><small>Tenant</small><br><small class="controls__note">Choose the Yammer Administrator role. Assigning needs at least Privileged Role Administrator.</small></td><td data-label="Admin UI"><strong>Microsoft Entra admin center</strong><br>Identity › Roles &amp; admins › role › Add assignments <a href="https://learn.microsoft.com/entra/identity/role-based-access-control/manage-roles-portal" rel="noopener" class="controls__docs">Learn</a></td><td data-label="API and automation"><strong>Microsoft Graph</strong><br><code>POST /v1.0/roleManagement/directory/roleAssignments</code> <a href="https://learn.microsoft.com/entra/identity/role-based-access-control/manage-roles-portal" rel="noopener" class="controls__docs">Learn</a></td></tr>
<tr><td data-label="Control"><strong>The Microsoft 365 organisation theme that colours Engage web until branding is published</strong><br><small>Tenant</small><br><small class="controls__note">Existing control, not a control over Engage branding: published Engage branding takes precedence inside Engage. Only Global Administrators can customise themes.</small></td><td data-label="Admin UI"><strong>Microsoft 365 admin center</strong><br>Settings › Org Settings › Organization profile › Custom themes <a href="https://learn.microsoft.com/microsoft-365/admin/setup/customize-your-organization-theme" rel="noopener" class="controls__docs">Learn</a></td><td data-label="API and automation"><em class="controls__gap">Not yet documented</em></td></tr>
</tbody>
</table>

- Branding is published from the Brand center; Microsoft's announcement gives the location as the Viva Engage admin center but not the navigation steps inside it. The Engage admin center is reached from Viva Engage via **Settings > Admin center**.
- Microsoft Graph's Viva Engage API covers communities, roles and user following, and documents no operation for branding at the time of writing (November 2026).
- The Microsoft 365 organisation theme is the fallback, not a competing setting: published Engage branding wins inside Engage. Only Global Administrators can customise organisation themes.
- Assigning the Yammer Administrator role needs at least the Privileged Role Administrator role in Microsoft Entra ID. Whether other Engage roles, such as network or verified admins, can publish branding is not stated.

## Open questions

- Can Engage network administrators or verified administrators publish branding, or only Engage administrators (Yammer Administrator)? Watch MC1447681 and the Engage admin role documentation.
- How does published branding relate to the existing **Tenant logo** in Engage tenant settings, which appears on home feeds and the Leadership corner header?
- Is publishing or discarding branding recorded in the Microsoft Purview audit log, so changes can be traced to an administrator?
- Will a Microsoft Learn page document the Brand center's navigation path, logo file limits and any Microsoft Graph support?
- Will a later release allow branding by group or division rather than one design per tenant?

<!-- rationale
risk: Low. The change is cosmetic and, according to Microsoft's announcement, nothing changes for users until an Engage administrator publishes branding.
cost: None. Microsoft's announcement says Custom Branding is available to all Engage customers and does not need the premium Viva Suite or Employee Communications and Communities licences.
impact: Medium. Once published, every Engage user sees the brand on web, Teams and mobile, and users who chose a personal theme lose it as user themes are retired.
-->

<!-- verifier-findings (2026-11-28, verified-with-gaps; checked by gpt-6.1-sol)
The independent check found fault only with the statements below. This is a correction: change what they name and carry the rest of the page over unchanged.
These are minor and do not hold the page. Where removing the statement, or rewording it in the words the fix gives, settles one, do that; otherwise leave it as it is. A minor finding may also add a source link it names for a statement already on the page. It adds no row and nothing that needs research.
- [supported, minor] What's changing; Open questions / absence: Microsoft Learn has no dedicated page documenting the Brand center feature yet. | Found: Searched: Viva Engage custom branding Brand center Microsoft Learn navigation publish network verified administrator; Viva Engage Brand center navigation. Read setup, role and tenant pages; results link to the announcement, not a dedicated Brand center guide. | Fix: Replace 'Microsoft Learn has no page for the feature yet' with 'The Microsoft Learn setup page links to the announcement rather than documenting the Brand center configuration steps.'
- [supported, minor] controls[1].api; Governance controls table / command: POST /v1.0/roleManagement/directory/roleAssignments assigns an Entra directory role. | Found: POST https://graph.microsoft.com/v1.0/roleManagement/directory/roleAssignments { "@odata.type": "#microsoft.graph.unifiedRoleAssignment", "principalId": "<Object ID of user or group>", "roleDefinitionId": "<ID of role definition>", "directoryScopeId": "/" } | Fix: Keep the call unchanged. Add to controls[1].note: 'The request body sets roleDefinitionId to the Yammer Administrator role definition, principalId to the assignee, and directoryScopeId to / for tenant scope.' The cited Entra role-assignment page documents these properties. | Source: https://learn.microsoft.com/entra/identity/role-based-access-control/manage-roles-portal
- [supported, minor] controls[1].note; Governance controls / role: Assigning the Yammer Administrator role requires at least Privileged Role Administrator. | Found: Sign in to the Microsoft Entra admin center as at least a Privileged Role Administrator. | Fix: Keep the Entra requirement, but add: 'The Engage administrator-role page lists a Microsoft 365 Global administrator under Who can assign, whereas the Entra tenant-role assignment guide requires at least Privileged Role Administrator.' Cite https://learn.microsoft.com/viva/engage/eac-key-admin-roles-permissions and https://learn.microsoft.com/entra/identity/role-based-access-control/manage-roles-portal. | Source: https://learn.microsoft.com/entra/identity/role-based-access-control/manage-roles-portal
- [supported, minor] controls[2].ui; Governance guidance; Governance controls table / admin-path: Microsoft 365 organisation themes are reached through Settings > Org Settings > Organization profile > Custom themes. | Found: In the admin center, go to the Settings > Org Settings page, and then choose the Organization profile tab. On the Organization profile tab, select Custom themes. | Fix: The printed path correctly reaches the theme list. For the colour-setting control, extend controls[2].ui.path to 'Settings > Org Settings > Organization profile > Custom themes > Default Theme > Colors'. The cited page says to select Default Theme and documents Navigation bar color and Accent color on Colors. The checklist's inspection path can remain unchanged. | Source: https://learn.microsoft.com/microsoft-365/admin/setup/customize-your-organization-theme
- [contradicted, minor] front matter: action; Why it matters / consistency: The action rating review treats the entire described change as optional despite automatic personal-theme retirement. | Found: action: "review" The change users will notice regardless is the retirement of personal user themes, which the announcement suggests telling users about. | Fix: Set action to 'prepare': the briefing includes a user-theme retirement that arrives without administrator publishing and calls for communications. Keep defaultState as 'admin-opt-in' for the custom-branding control.
- [contradicted, minor] front matter: impact; rationale: impact / consistency: Impact is medium even though the rationale describes a tenant-wide change visible to every Engage user. | Found: impact: "medium" impact: Medium. Once published, every Engage user sees the brand on web, Teams and mobile, and users who chose a personal theme lose it as user themes are retired. | Fix: Set impact to 'high' and replace the rationale with 'High. Once published, every Engage user sees the brand on web, Teams and mobile; personal user themes are also retired with the rollout.' This matches the scale's most-users definition.
-->
