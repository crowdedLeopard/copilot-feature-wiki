---
title: "Viva Engage: enhanced Microsoft Copilot with Engage tools, work context and agents"
slug: "microsoft-viva-enhanced-microsoft-copilot-in-viva-engage"
roadmapId: 576709
topic: "modern-work"
products: ["Microsoft Viva"]
summary: "Copilot in Viva Engage gains deeper conversation analysis, work context and Microsoft 365 agents. Learn says it is on by default for users with a Microsoft Copilot licence; licence removal is the documented off switch. Target: November CY2026."
status: "in-development"
releasePhase: ["General Availability"]
clouds: ["Worldwide (Standard Multi-Tenant)"]
platforms: ["Desktop","Web"]
targetDate: "November CY2026"
previewDate: null
risk: "medium"
cost: "variable"
impact: "medium"
defaultState: "on"
action: "act-now"
licensing:
  model: "included"
  notes: "Microsoft Learn says users need a Microsoft Copilot licence and that setup only requires the right licence to be assigned. Microsoft 365 agents used in Engage follow the billing of Microsoft Copilot."
audiences: ["m365-admin","service-owner","security","change-adoption"]
tags: ["viva-engage","m365-copilot","cowork","work-iq","mcp","agents","licensing"]
sources:
  - title: "Microsoft 365 Roadmap 576709"
    url: "https://www.microsoft.com/microsoft-365/roadmap?id=576709"
    kind: "roadmap"
  - title: "Set up enhanced Microsoft Copilot in Viva Engage"
    url: "https://learn.microsoft.com/viva/engage/configure-microsoft-365-copilot-in-viva-engage"
    kind: "learn"
  - title: "Viva Engage setup requirements"
    url: "https://learn.microsoft.com/viva/engage/setup"
    kind: "learn"
  - title: "Use Viva Engage in Microsoft 365 Copilot Cowork"
    url: "https://learn.microsoft.com/viva/engage/integrate-viva-engage-with-other-apps/use-viva-engage-microsoft-365-copilot-cowork"
    kind: "learn"
  - title: "Manage plugins for Copilot Cowork"
    url: "https://learn.microsoft.com/copilot/cowork/cowork-manage-plugins"
    kind: "learn"
  - title: "License options for Microsoft Copilot"
    url: "https://learn.microsoft.com/copilot/plan/copilot-license-options"
    kind: "learn"
  - title: "Assign or unassign licenses for users in the Microsoft 365 admin center"
    url: "https://learn.microsoft.com/microsoft-365/admin/manage/assign-licenses-to-users"
    kind: "learn"
  - title: "user: assignLicense"
    url: "https://learn.microsoft.com/graph/api/user-assignlicense"
    kind: "learn"
  - title: "copilotPackage: block"
    url: "https://learn.microsoft.com/microsoft-365/copilot/extensibility/api/admin-settings/package/copilotpackage-block"
    kind: "learn"
  - title: "Manage Copilot Cowork for your organization"
    url: "https://learn.microsoft.com/copilot/cowork/cowork-admin-governance"
    kind: "learn"
  - title: "Understand usage-based billing and cost management for Copilot Credits"
    url: "https://learn.microsoft.com/copilot/plan/usage-based-billing-overview-copilot-credits"
    kind: "learn"
  - title: "Viva Engage content and Microsoft Copilot"
    url: "https://learn.microsoft.com/viva/engage/viva-engage-content-copilot"
    kind: "learn"
  - title: "Required configuration for Copilot guidance for Sensitive and Regulated customers"
    url: "https://learn.microsoft.com/compliance/anz/blueprint-copilot-reqconfig"
    kind: "learn"
  - title: "Agent 365 Package Management API overview"
    url: "https://learn.microsoft.com/microsoft-365/copilot/extensibility/api/admin-settings/package/overview"
    kind: "learn"
videos: []
related: ["work-iq","mcp","m365-copilot-viva-engage-community-agent","copilot-credits"]
controls:
  - governs: "Which users have Microsoft Copilot in Viva Engage, through Microsoft Copilot licence assignment"
    scope: "user"
    ui:
      surface: "Microsoft 365 admin center"
      path: "Billing > Licenses > product > Assign licenses"
      docs: "https://learn.microsoft.com/microsoft-365/admin/manage/assign-licenses-to-users"
    api:
      kind: "graph"
      call: "POST /v1.0/users/{id | userPrincipalName}/assignLicense"
      docs: "https://learn.microsoft.com/graph/api/user-assignlicense"
    note: "The Copilot in Engage page says to remove a user's Microsoft Copilot licence to turn the experience off. The request body's removeLicenses removes it. Needs License or User Administrator."
  - governs: "An Engage-specific switch for the Copilot pane in Engage"
    scope: "tenant"
    ui: null
    api: null
    note: "Learn says access is controlled by licence assignment and there is no separate Engage setting."
  - governs: "Availability of the Engage plugin for Cowork tasks that act in Engage"
    scope: "tenant"
    ui:
      surface: "Microsoft 365 admin center"
      path: "Agents > Tools > plugin > Users > Available to specific users or groups"
      docs: "https://learn.microsoft.com/copilot/cowork/cowork-manage-plugins"
    api:
      kind: "graph"
      call: "POST /beta/copilot/admin/catalog/packages/{id}/block"
      docs: "https://learn.microsoft.com/microsoft-365/copilot/extensibility/api/admin-settings/package/copilotpackage-block"
    note: "Cowork only; the Copilot pane in Engage is unaffected. Block is the alternative action on the same Users tab. Needs tenant admin or Copilot administrator. The API is beta and Learn says it requires an Agent 365 licence."
confidence: "high"
created: "2026-11-22"
updated: "2026-11-22"
roadmapModified: "2026-10-19T23:15:15"
changes:
  - date: "2026-11-22"
    note: "New briefing: Learn already documents the enhanced Copilot in Viva Engage as on by default with a Copilot licence, while the roadmap shows In development, target November CY2026."
  - date: "2026-11-22"
    note: "Checked against Microsoft Learn by gpt-6.1-sol: held: 2 of 65 statements contradicted, 0 unconfirmed; taken offline until corrected"
  - date: "2026-11-22"
    note: "Correction: cost rating changed to variable because Cowork tasks use usage-based billing in Copilot Credits; plugin path, package API wording and sources updated; two checklist steps without matching controls removed."
  - date: "2026-11-22"
    note: "Checked against Microsoft Learn by gpt-6.1-sol: passed with 0 of 77 statements not yet confirmed"
  - date: "2026-11-26"
    note: "Checked against Microsoft Learn by gpt-6.1-sol: passed with 0 of 73 statements not yet confirmed"
version: 2
verification:
  status: "verified-with-gaps"
  date: "2026-11-26"
  version: 2
  model: "gpt-6.1-sol"
  engine: "copilot"
  claims: 73
  confirmed: 73
  unconfirmed: 0
  contradicted: 0
  attempts: 0
  hash: "c50fa10d68bd9d2fc3f7135577a59633"
---

## What's changing

Microsoft is enhancing Microsoft Copilot in Viva Engage so that it goes beyond catch-ups and summaries. The roadmap item describes an experience "powered by Engage MCP" that helps users explore conversations more deeply, synthesise discussions and find insights, with Work IQ integration that connects Engage conversations to a user's wider Microsoft 365 work and with Microsoft 365 agents available inside Copilot in Engage.

Microsoft Learn already documents this experience on its setup page for the enhanced Copilot in Viva Engage. It describes the same Microsoft Copilot opened in a pane in Engage that uses the current page as context, a set of Engage tools for exploring conversations, communities and storylines, awareness of the user's work context, Microsoft 365 agents, and the option to open Cowork from the Copilot pane. The page states that existing users get the new experience automatically.

The page also sets out what it can and cannot do. Copilot in Engage can search, summarise and analyse content the user can access and can draft posts and replies for the user to review and post, but it cannot post, reply, react or take other actions in Engage on the user's behalf. For those actions the user switches to Cowork, which needs the Engage plugin set up first.

The roadmap record lists the item as In development with a target of November CY2026, for Worldwide (Standard Multi-Tenant), Desktop and Web, with a General Availability release phase. The Learn page describes the experience in present tense while the roadmap status is still In development, so treat the November CY2026 date as a target and confirm in your tenant when users see the change.

## Why it matters

Copilot in Engage now draws on more than the Engage page a user is looking at. Microsoft Learn says Copilot grounds each prompt with the user's work data such as email, meetings, chats and files the user can access, and calls Engage tools to search, read and analyse conversations, communities and storylines the user can access. For a service owner this means a single prompt can combine Engage conversations, including private communities the user belongs to, with other work content.

Learn says the experience is on by default once a user has a Microsoft Copilot licence, and that there is no separate Engage setting. If nobody acts, licensed users get it. The decisions that remain are who holds the licence, whether to deploy the Engage plugin for Cowork, and what to tell users about reviewing drafts before they post.

## Risk assessment

**Data exposure**

- Copilot grounds prompts in the user's email, meetings, chats and files as well as Engage content, so an answer can combine private-community conversations with other work content. Learn says authorisation is based on the user's existing Microsoft 365 role-based access controls and that Copilot cannot access information the user lacks permission to see. Tighten the underlying permissions rather than expecting Copilot to filter.
- In a multitenant organisation, Learn says Copilot can only access data in the tenant the user belongs to.
- Drafts can carry private context into a public post. The Cowork page says information a user can access in a private community, meeting, chat or document might not be appropriate to publish more widely, and asks users to review before sharing.

**Security & identity**

- The Engage plugin in Cowork uses the signed-in user's account and Learn says application-only permissions are not supported, so Engage actions run under the user's own permissions.
- Learn says Copilot follows the data compliance rules that apply to Viva Engage today.

**Autonomy & actions**

- Learn says Copilot in Engage cannot post, reply, react or take other actions on the user's behalf; it drafts for the user to review and post.
- Cowork, opened from the Copilot pane, can post and reply in communities where the user has permission once the Engage plugin is set up. Treat the Engage plugin as the point where drafting becomes acting, and govern it in **Agents > Tools** in the Microsoft 365 admin center.

**Change & support**

- Learn says existing users get the new experience automatically and that the only way to turn it off for a user is to remove their Microsoft Copilot licence. Expect the Copilot pane to appear without a change ticket, and expect licence removal to affect more than Engage.
- The roadmap shows In development while Learn already documents the experience, so support teams may see it before the roadmap status changes.

## Cost and licensing

**Licence.** Microsoft Learn says users need a Microsoft Copilot licence, and that setup only requires the right licence to be assigned to each user. The licence options page says Microsoft Copilot is available with Microsoft 365 E7 or as an add-on for eligible commercial, US Government and education subscription plans. The page that sets up Copilot in Engage names no separate Engage licence for this experience.

**Agents.** Learn says Microsoft 365 agents in Engage follow the same availability and billing as in Microsoft Copilot, and links to its Copilot Credits billing overview. See [Copilot Credits](/concepts/copilot-credits/) for the shared meter. What a Microsoft 365 agent costs when run from the Engage pane follows that billing, not a separate Engage price.

**Cowork.** The Engage plugin page says licensing, access and usage-based billing for Cowork are covered in its Cowork administration guidance, and the Cowork plugin management page says users who use Cowork plugins must have Microsoft 365 Copilot licences assigned. Cowork tasks consume Copilot Credits; model responses and tool and skill calls count toward consumption.

**Indirect cost.** Admin time to review who holds Copilot licences, communications to Engage users, and review of private-community permissions.

## Scope

**Who gets it.** Users who hold a Microsoft Copilot licence and use Viva Engage. Learn says Microsoft Copilot in Viva Engage runs in the Viva Engage web experience; the roadmap record lists Desktop and Web as platforms.

**Clouds.** The roadmap record lists Worldwide (Standard Multi-Tenant) only.

**Roles.** Assigning licences needs at least the License Administrator or User Administrator role. Managing Cowork plugins needs a tenant administrator or the Copilot administrator role.

**Rollout.** Roadmap status In development, target November CY2026, release phase General Availability. Learn says the experience is on by default and that no further setup is needed once the licence is assigned.

**Cowork.** Using Engage from Cowork needs the Engage plugin, and Learn says Cowork users need permission from their organisation to install or use it.

## Governance guidance

### Before rollout

- List the users who hold a Microsoft Copilot licence and use Viva Engage, using **Billing > Licenses** in the Microsoft 365 admin center, so you know who will see the Copilot pane.
- Decide whether the Engage plugin for Cowork should be available, and to whom, in **Agents > Tools** before users install it themselves.
- Confirm with your Copilot billing owner how Microsoft 365 agents used from the Engage pane are billed, using the Copilot Credits billing page Learn links.

### At rollout

- Check with a licensed pilot group that the Copilot pane appears in Engage on web and desktop, and compare what you see with the roadmap's November CY2026 target.
- Tell users that Copilot in Engage drafts posts and replies for them to review and post, and that Cowork can act in Engage if the plugin is installed.
- Restrict the Engage plugin to specific users or groups, or block it, in **Agents > Tools** if Cowork actions in Engage are not wanted yet.

### After rollout

- Remove the Microsoft Copilot licence from users who should not have the experience, accepting that this is not Engage-specific.
- Re-read the Learn setup page and the roadmap item for status changes, since the roadmap shows In development while Learn already describes the experience.

## Governance controls

<p class="controls__lead">Where each control lives. The left column says what the setting decides and how far it reaches; the middle gives the admin centre and the exact path; the right gives the script, API or command that does the same. <em>Not yet documented</em> means Microsoft has not published a control for that surface, so there is nothing to configure yet.</p>

<table class="controls">
<thead><tr><th>Control</th><th>Admin UI</th><th>API and automation</th></tr></thead>
<tbody>
<tr><td data-label="Control"><strong>Which users have Microsoft Copilot in Viva Engage, through Microsoft Copilot licence assignment</strong><br><small>User</small><br><small class="controls__note">The Copilot in Engage page says to remove a user's Microsoft Copilot licence to turn the experience off. The request body's removeLicenses removes it. Needs License or User Administrator.</small></td><td data-label="Admin UI"><strong>Microsoft 365 admin center</strong><br>Billing › Licenses › product › Assign licenses <a href="https://learn.microsoft.com/microsoft-365/admin/manage/assign-licenses-to-users" rel="noopener" class="controls__docs">Learn</a></td><td data-label="API and automation"><strong>Microsoft Graph</strong><br><code>POST /v1.0/users/{id | userPrincipalName}/assignLicense</code> <a href="https://learn.microsoft.com/graph/api/user-assignlicense" rel="noopener" class="controls__docs">Learn</a></td></tr>
<tr><td data-label="Control"><strong>An Engage-specific switch for the Copilot pane in Engage</strong><br><small>Tenant</small><br><small class="controls__note">Learn says access is controlled by licence assignment and there is no separate Engage setting.</small></td><td data-label="Admin UI"><em class="controls__gap">Not yet documented</em></td><td data-label="API and automation"><em class="controls__gap">Not yet documented</em></td></tr>
<tr><td data-label="Control"><strong>Availability of the Engage plugin for Cowork tasks that act in Engage</strong><br><small>Tenant</small><br><small class="controls__note">Cowork only; the Copilot pane in Engage is unaffected. Block is the alternative action on the same Users tab. Needs tenant admin or Copilot administrator. The API is beta and Learn says it requires an Agent 365 licence.</small></td><td data-label="Admin UI"><strong>Microsoft 365 admin center</strong><br>Agents › Tools › plugin › Users › Available to specific users or groups <a href="https://learn.microsoft.com/copilot/cowork/cowork-manage-plugins" rel="noopener" class="controls__docs">Learn</a></td><td data-label="API and automation"><strong>Microsoft Graph</strong><br><code>POST /beta/copilot/admin/catalog/packages/{id}/block</code> <a href="https://learn.microsoft.com/microsoft-365/copilot/extensibility/api/admin-settings/package/copilotpackage-block" rel="noopener" class="controls__docs">Learn</a></td></tr>
</tbody>
</table>

Licence assignment is the only documented way to switch the Copilot pane in Engage on or off for a user; Learn says there is no separate Engage setting. Removing the licence is not scoped to Engage, so expect it to affect where else that user has Microsoft Copilot.

The Cowork plugin row governs only the route by which Cowork can act in Engage. It does not turn off the Copilot pane inside Engage. The Package Management API call is a Microsoft Graph beta operation that Learn says requires a Microsoft Agent 365 licence; the Cowork plugin page says plugins use the same app package format as Teams apps, Copilot agents and Office add-ins, and the Package Management API covers agents and tools, including plugins, in the organization catalog.

## Open questions

- When will the enhanced Copilot in Engage reach all licensed users, given the roadmap target of November CY2026 and the roadmap status In development? Watch the roadmap item and Message center.
- Will Microsoft add an Engage-specific control, for example in the Engage admin center or Viva feature access management, so the pane can be scoped separately from the Copilot licence? Watch the Learn setup page.
- What does a Microsoft 365 agent cost when users run it from the Copilot pane in Engage, and does Engage usage appear separately in Copilot Credits reporting? Watch the Copilot Credits billing overview.
- How do the roadmap's terms Engage MCP and Work IQ integration map to the Engage tools and work context that the Learn setup page describes, and is there an admin setting for either?

<!-- rationale
risk: Medium. Learn says the experience is on by default for users with a Microsoft Copilot licence, it reads Engage content and work data each user can already access, and the only documented off switch is licence removal.
cost: Variable. The Copilot pane requires a Microsoft Copilot licence; Cowork tasks accessed from it use usage-based billing measured in Copilot Credits. Allow for admin time and communications.
impact: Medium. Licensed Copilot users who open Viva Engage on the web or desktop see the Copilot pane change; users without a Copilot licence and admins configuring Engage are not affected.
-->

<!-- verifier-findings (2026-11-26, verified-with-gaps; checked by gpt-6.1-sol)
The independent check found fault only with the statements below. This is a correction: change what they name and carry the rest of the page over unchanged.
These are minor and do not hold the page. Where removing the statement, or rewording it in the words the fix gives, settles one, do that; otherwise leave it as it is. A minor finding may also add a source link it names for a statement already on the page. It adds no row and nothing that needs research.
- [supported, minor] controls[1].ui; controls[1].api; Why it matters; Governance controls; Open questions / absence: There is no separate documented Engage-specific UI or API switch for the enhanced Copilot pane. | Found: Searched: Viva Engage enhanced Copilot disable separate setting admin feature access management PowerShell Graph license. Opened Learn's enhanced Engage Copilot setup, Engage setup and feature-access-management. Setup says 'There is no separate Engage setting'; VFAM lists AI Summarization. | Fix: Keep the null row and the feature setup page's statement. Add: 'The feature-access-management table still lists Engage AI Summarization and links to this setup page, although the enhanced Copilot setup page says there is no separate Engage setting.' Cite https://learn.microsoft.com/viva/feature-access-management.
- [supported, minor] controls[2].note; Governance guidance: At rollout; Governance controls / applicability: Block on the plugin's Users tab is an alternative to restricting availability when Cowork actions in Engage are not wanted. | Found: Select Block: No users in your tenant can access the plugin. Blocking takes effect for new conversations. Conversations already in progress that use the plugin continue until they end. | Fix: Add to controls[2].note and the At rollout blocking advice: 'Blocking takes effect for new conversations. Conversations already in progress that use the plugin continue until they end.' This qualifies the existing control without changing the documented path. | Source: https://learn.microsoft.com/copilot/cowork/cowork-manage-plugins
- [supported, minor] Governance guidance: Before rollout, licence-holder checklist / admin-path: Billing > Licenses is where administrators review Microsoft Copilot licence holders. | Found: In the admin center, go to the Billing > Licenses page. Select a product. Group-based assignments: If a license is assigned to a group, the group name appears in the list instead of individual users. | Fix: Use 'Billing > Licenses > product' in the checklist. Add: 'For group-based assignments, view the assigned group's members under Teams & groups > Active teams & groups.' Both routes are documented at https://learn.microsoft.com/microsoft-365/admin/manage/assign-licenses-to-users. | Source: https://learn.microsoft.com/microsoft-365/admin/manage/assign-licenses-to-users
- [supported, minor] Governance guidance: Before rollout and At rollout; Risk assessment: Autonomy & actions / admin-path: Agents > Tools is the location for making the Engage Cowork plugin available, restricting it or blocking it. | Found: select Agents > Tools. Find the plugin you want to manage and go to the Users tab. Available to specific users or groups Select Block | Fix: Expand the checklist and risk-section routes to 'Agents > Tools > plugin > Users > Available to specific users or groups' for restriction and 'Agents > Tools > plugin > Users > Block' for blocking, matching https://learn.microsoft.com/copilot/cowork/cowork-manage-plugins. | Source: https://learn.microsoft.com/copilot/cowork/cowork-manage-plugins
-->
