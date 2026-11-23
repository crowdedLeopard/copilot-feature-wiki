---
title: "Viva Glint: announcement icon in the product header for service administrators"
slug: "microsoft-viva-viva-glint-in-product-access-to-feature-announcements"
roadmapId: 569435
topic: "modern-work"
products: ["Microsoft Viva"]
summary: "Viva Glint service administrators are due to get an announcement icon in the product header that links to the Viva Glint Tech Community blog. Awareness only: no setting or action is documented."
status: "in-development"
releasePhase: ["General Availability"]
clouds: ["Worldwide (Standard Multi-Tenant)"]
platforms: ["Web"]
targetDate: "September CY2026"
previewDate: null
risk: "low"
cost: "low"
impact: "low"
defaultState: "on"
action: "none"
licensing:
  model: "included"
  notes: "Microsoft's Viva Glint licensing page says a Viva Suite or Viva Glint subscription plan is required to use Viva Glint. No licence or charge specific to the header icon is published."
audiences: ["service-owner","change-adoption"]
tags: ["viva-glint","m365-admin-center"]
sources:
  - title: "Microsoft 365 Roadmap 569435"
    url: "https://www.microsoft.com/microsoft-365/roadmap?id=569435"
    kind: "roadmap"
  - title: "Viva Glint newsletter"
    url: "https://learn.microsoft.com/viva/glint/setup/newsletter-register"
    kind: "learn"
  - title: "Viva Glint licensing"
    url: "https://learn.microsoft.com/viva/glint/setup/glint-order-teams"
    kind: "learn"
  - title: "Assign Viva Glint Service and Tenant Administrators"
    url: "https://learn.microsoft.com/viva/glint/setup/post-provisioning-next-steps"
    kind: "learn"
videos: []
related: ["microsoft-viva-glint-teams-notification-customization"]
controls:
  - governs: "Who holds the Viva Glint Service Administrator role, the audience for the icon"
    scope: "user"
    ui:
      surface: "Microsoft 365 admin center"
      path: "Settings > Viva > Viva Glint > Assign Glint service admin > Add users"
      docs: "https://learn.microsoft.com/viva/glint/setup/post-provisioning-next-steps"
    api: null
    note: "Role assignment only; it does not switch the icon on or off. Done by a Microsoft 365 Global Administrator or Viva Glint Tenant Administrator."
  - governs: "Switch to hide the announcement icon in the Viva Glint header"
    scope: "tenant"
    ui: null
    api: null
    note: "No setting documented at the time of writing (November 2026)."
confidence: "medium"
created: "2026-11-23"
updated: "2026-11-23"
roadmapModified: "2026-08-20T22:38:45"
changes:
  - date: "2026-11-23"
    note: "First briefing: a roadmap-described header icon for Viva Glint service administrators; no setting or separate licence is documented yet."
  - date: "2026-11-23"
    note: "Checked against Microsoft Learn by gpt-6.1-sol: passed with 1 of 39 statements not yet confirmed"
version: 1
verification:
  status: "verified-with-gaps"
  date: "2026-11-23"
  version: 1
  model: "gpt-6.1-sol"
  engine: "copilot"
  claims: 39
  confirmed: 36
  unconfirmed: 1
  contradicted: 2
  attempts: 0
  hash: "48406d8d597124e032d4d9dd2a026189"
---

## What's changing

The roadmap item states that Viva Glint service administrators will see a new announcement icon in the product header, and that the icon links directly to the Viva Glint Tech Community blog. Microsoft's stated aim is to make product news, feature announcements and best practices easier to find.

The roadmap item describes no setting, no data the icon reads and no change for survey takers, managers or other roles. It names the Web platform and the Worldwide (Standard Multi-Tenant) cloud, with release phase General Availability.

The roadmap lists the item as In development with a target of September CY2026. That month has passed at the time of writing (November 2026) and the status has not moved, so treat the date as a missed target rather than a ship date.

Microsoft Learn already tells service administrators that they can open the Viva Glint newsletter from a link in the product header (page: Viva Glint newsletter). That page says "newsletter link", not "announcement icon", and Learn does not say whether the two are the same control. The rest of this briefing follows the roadmap's description.

## Why it matters

This is a low-stakes awareness change. Service administrators own the Viva Glint app, so a direct route from the header to the Viva Glint blog may change where they pick up news, and your internal Viva Glint communications may start to refer to it.

The roadmap says administrators "will see" the icon and names no step that an administrator takes first, so the briefing rates the default as on. Microsoft Learn documents no setting that hides the icon, so expect it to appear for service administrators once it rolls out.

## Risk assessment

**Data exposure**
- No change described: the roadmap says the icon links to the Viva Glint Tech Community blog and mentions no survey, employee or attribute data.
- The blog is on Microsoft Tech Community, outside the Viva Glint app. Learn's steps for following the blog start with "Sign in to Microsoft Tech Community", so anyone who follows the blog does so with a Tech Community sign-in.

**Security & identity**
- No change described: the roadmap names no new permission or role. Service administrators already have the role that the roadmap names as the audience.
- If your organisation filters email, Learn lists notifications@communityhub.microsoft.com as the sender of Viva Glint blog notifications; add it to your allow list if administrators subscribe by email.

**Autonomy & actions**
- No change: the roadmap describes a link, not an agent or automated action.

**Change & support**
- Administrators may ask where the new icon came from, or why it differs from the newsletter link Learn describes. The Viva Glint admin team is the group to brief; nothing needs configuring first.
- No setting to hide the icon is documented, so a request to remove it cannot be met with a documented control.

## Cost and licensing

Microsoft's Viva Glint licensing page says that "the purchase of a Viva Suite or Viva Glint subscription plan is required for using Microsoft Viva Glint". The icon is a header element inside Viva Glint, so that subscription is the licence the product already needs.

The same page says individual user licence assignment is not required for using Viva Glint. The roadmap item and Learn publish no separate licence, meter or price for the icon, so the only cost the sources show is administrators' time to read the blog and brief colleagues.

## Scope

The roadmap names Viva Glint service administrators as the audience. Learn describes the Viva Glint Service Administrator as the person assigned by a Microsoft 365 Global Administrator or Viva Glint Tenant Administrator to take responsibility for administrative tasks in the Viva Glint app. Learn also says users can only be added to or removed from that role from the Microsoft 365 admin center, by a Microsoft 365 Global Administrator or a Viva Glint Tenant Administrator.

The roadmap record lists the Worldwide (Standard Multi-Tenant) cloud, the Web platform and General Availability. It lists no other clouds; that is a record fact, not a statement that the icon is unavailable elsewhere. The record gives no rollout mechanics, release channel or prerequisites.

## Governance guidance

### Before rollout
- Tell your Viva Glint service administrators that a header icon linking to the Viva Glint blog is planned, and that the roadmap item is still In development.
- Check who holds the Viva Glint Service Administrator role (Microsoft 365 admin center, Assign Glint service admin) so the right people hear about it.

### At rollout
- Confirm with one service administrator whether the icon, or the newsletter link that Learn describes, appears in the product header.
- Point administrators who want email alerts to the steps on the Viva Glint newsletter page: follow the blog and turn on Get Email Notifications.

### After rollout
- Add notifications@communityhub.microsoft.com to your approved sender list if administrators report that blog emails do not arrive.
- Record whether any administrator asks to hide the icon; Microsoft Learn documents no switch for it, so raise any such request with Microsoft support.

## Governance controls

<p class="controls__lead">Where each control lives. The left column says what the setting decides and how far it reaches; the middle gives the admin centre and the exact path; the right gives the script, API or command that does the same. <em>Not yet documented</em> means Microsoft has not published a control for that surface, so there is nothing to configure yet.</p>

<table class="controls">
<thead><tr><th>Control</th><th>Admin UI</th><th>API and automation</th></tr></thead>
<tbody>
<tr><td data-label="Control"><strong>Who holds the Viva Glint Service Administrator role, the audience for the icon</strong><br><small>User</small><br><small class="controls__note">Role assignment only; it does not switch the icon on or off. Done by a Microsoft 365 Global Administrator or Viva Glint Tenant Administrator.</small></td><td data-label="Admin UI"><strong>Microsoft 365 admin center</strong><br>Settings › Viva › Viva Glint › Assign Glint service admin › Add users <a href="https://learn.microsoft.com/viva/glint/setup/post-provisioning-next-steps" rel="noopener" class="controls__docs">Learn</a></td><td data-label="API and automation"><em class="controls__gap">Not yet documented</em></td></tr>
<tr><td data-label="Control"><strong>Switch to hide the announcement icon in the Viva Glint header</strong><br><small>Tenant</small><br><small class="controls__note">No setting documented at the time of writing (November 2026).</small></td><td data-label="Admin UI"><em class="controls__gap">Not yet documented</em></td><td data-label="API and automation"><em class="controls__gap">Not yet documented</em></td></tr>
</tbody>
</table>

Viva Glint Service Administrators can only be added or removed in the Microsoft 365 admin center, by a Microsoft 365 Global Administrator or a Viva Glint Tenant Administrator, so that role assignment decides who sees an icon aimed at service administrators. It does not switch the icon on or off.

Microsoft Learn documents no setting for the icon itself at the time of writing (November 2026), which the second row records. The assignment row has no scripted equivalent documented on Learn for the Service Administrator role.

## Open questions

- Is the announcement icon the same control as the "newsletter link" in the product header that Learn's Viva Glint newsletter page already describes? Watch the roadmap item and that Learn page.
- Does the icon arrive for every service administrator without any setting, as the roadmap's wording implies? Watch the roadmap item and Message center.
- Will Microsoft document a way for a tenant to hide the icon? Watch the Viva Glint documentation on Learn.
- When will the item move from In development, given that its September CY2026 target has passed?

<!-- rationale
risk: Low. The change is a header link for service administrators to the Viva Glint blog; the roadmap describes no new data access, permission or automated action.
cost: Low. Viva Glint already needs a Viva Suite or Viva Glint subscription; the roadmap item names no separate charge, and the only cost shown is administrators' time.
impact: Low. Only Viva Glint service administrators, who are the owners of the app and typically no more than five people, are named as seeing the icon.
-->

<!-- verifier-findings (2026-11-23, verified-with-gaps; checked by gpt-6.1-sol)
The independent check found fault only with the statements below. This is a correction: change what they name and carry the rest of the page over unchanged.
These are minor and do not hold the page. Where removing the statement, or rewording it in the words the fix gives, settles one, do that; otherwise leave it as it is. A minor finding may also add a source link it names for a statement already on the page. It adds no row and nothing that needs research.
- [unsupported, minor] rationale: impact / behaviour: Viva Glint service administrators are typically no more than five people. | Found: Searched: Viva Glint Service Administrator role assign Microsoft Graph PowerShell API; "Viva Glint" "Service Administrator" "Graph". Opened post-provisioning-next-steps and read role-definitions excerpts. They recommend no more than five admins, not an observed typical population. | Fix: Remove ', who are the owners of the app and typically no more than five people' from the impact rationale. The remaining sentence is: 'Low. Only Viva Glint service administrators are named as seeing the icon.'
- [contradicted, minor] Governance guidance: At rollout; Governance controls table / consistency: The checklist directs readers to configure blog email notifications, but the controls table has no row for that control. | Found: At rollout: 'follow the blog and turn on Get Email Notifications.' The table contains only Service Administrator assignment and the absent announcement-icon hiding switch. | Fix: The At rollout notification-setting step has no control row. Narrow it to reference-only advice: 'Point administrators who want email alerts to the Viva Glint newsletter page.'
- [contradicted, minor] Governance guidance: After rollout; Governance controls table / consistency: The checklist directs readers to change an approved sender list, but the controls table has no allowlisting row. | Found: After rollout: 'Add notifications@communityhub.microsoft.com to your approved sender list if administrators report that blog emails do not arrive.' Neither table row covers an approved sender list. | Fix: The After rollout approved-sender-list step has no control row. Replace it with: 'Refer administrators whose blog emails do not arrive to the Not receiving notifications? section of the Viva Glint newsletter page.'
-->
