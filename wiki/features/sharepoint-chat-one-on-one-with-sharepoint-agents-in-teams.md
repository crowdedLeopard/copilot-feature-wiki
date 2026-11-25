---
title: "SharePoint: chat one-on-one with SharePoint agents in Teams"
slug: "sharepoint-chat-one-on-one-with-sharepoint-agents-in-teams"
roadmapId: 481825
topic: "m365-copilot"
products: ["Microsoft Teams","Microsoft Copilot (Microsoft 365)","SharePoint"]
summary: "Users can chat one-on-one with a SharePoint agent inside Teams chat. Rolling out on the web; Microsoft states no default, and blocking a SharePoint-created agent does not reach Teams. Review who holds licences."
status: "rolling-out"
releasePhase: ["General Availability"]
clouds: ["Worldwide (Standard Multi-Tenant)"]
platforms: ["Web"]
targetDate: "May CY2026"
previewDate: null
risk: "medium"
cost: "variable"
impact: "medium"
defaultState: "unknown"
action: "review"
licensing:
  model: "mixed"
  notes: "Microsoft's SharePoint agents page says users with a Microsoft Copilot licence can use agents, and users without one can be covered by pay-as-you-go billing. A licence or rate specific to chatting in Teams is not yet published."
audiences: ["m365-admin","service-owner","change-adoption"]
tags: ["sharepoint-agents","sharepoint","teams","m365-copilot","agents","pay-as-you-go","restricted-content-discovery"]
sources:
  - title: "Microsoft 365 Roadmap: SharePoint: Chat one-on-one with SharePoint agents in Teams"
    url: "https://www.microsoft.com/microsoft-365/roadmap?id=481825"
    kind: "roadmap"
  - title: "Manage access to agents in SharePoint"
    url: "https://learn.microsoft.com/sharepoint/manage-access-agents-in-sharepoint"
    kind: "learn"
  - title: "Set up SharePoint agents for pay-as-you-go billing"
    url: "https://learn.microsoft.com/sharepoint/sharepoint-agents-azure-billing"
    kind: "learn"
  - title: "Upgrade agents in SharePoint and OneDrive"
    url: "https://learn.microsoft.com/sharepoint/upgrade-sharepoint-agents"
    kind: "learn"
  - title: "Monitor agent usage in SharePoint"
    url: "https://learn.microsoft.com/sharepoint/monitor-agent-usage"
    kind: "learn"
  - title: "Governance and lifecycle actions for agents available in Microsoft 365 admin center"
    url: "https://learn.microsoft.com/microsoft-agent-365/admin/agent-actions"
    kind: "learn"
  - title: "Restrict discovery of SharePoint sites and content"
    url: "https://learn.microsoft.com/sharepoint/restricted-content-discovery"
    kind: "learn"
  - title: "copilotPackage: block"
    url: "https://learn.microsoft.com/microsoft-365/copilot/extensibility/api/admin-settings/package/copilotpackage-block"
    kind: "learn"
videos: []
related: ["microsoft-teams-adaptive-card-based-app-and-copilot-agent-link-unfurling-in-teams","sharepoint-sharepoint-agents-in-teams-mobile","sharepoint-agent-chat-web-part","restricted-content-discovery","m365-copilot-access-sharepoint-agents-in-the-m365-copilot-app"]
controls:
  - governs: "Whether an agent is blocked for the whole organisation"
    scope: "agent"
    ui:
      surface: "Microsoft 365 admin center"
      path: "Agents > All agents > agent > Block"
      docs: "https://learn.microsoft.com/microsoft-agent-365/admin/agent-actions"
    api:
      kind: "graph"
      call: "POST /beta/copilot/admin/catalog/packages/{id}/block"
      docs: "https://learn.microsoft.com/microsoft-365/copilot/extensibility/api/admin-settings/package/copilotpackage-block"
    note: "Learn says blocking an agent created by using SharePoint only impacts its availability in Microsoft Copilot Chat. The Graph API is beta and needs a Microsoft Agent 365 licence."
  - governs: "Whether a SharePoint site's content is discoverable by Microsoft Copilot and its agent features show"
    scope: "site"
    ui:
      surface: "SharePoint admin center"
      path: "Sites > Active sites > site > Settings > Restrict content from Microsoft Copilot"
      docs: "https://learn.microsoft.com/sharepoint/restricted-content-discovery"
    api:
      kind: "powershell"
      call: "Set-SPOSite -Identity <site-url> -RestrictContentOrgWideSearch $true"
      docs: "https://learn.microsoft.com/sharepoint/restricted-content-discovery"
    note: "Learn says the Agent icon is hidden on the site's global header and the site's content is not surfaced in Microsoft Copilot. The page does not describe Teams chat. Needs Copilot licensing and SharePoint Advanced Management."
confidence: "medium"
created: "2026-11-24"
updated: "2026-11-25"
roadmapModified: "2026-05-21T23:15:57"
changes:
  - date: "2026-11-24"
    note: "First briefing for this item: roadmap description, Learn's SharePoint agent licensing, block and Restricted Content Discovery controls, and the March 2027 .agent file end date."
  - date: "2026-11-24"
    note: "Checked against Microsoft Learn by gpt-6.1-sol: held: 4 of 64 statements contradicted, 0 unconfirmed; taken offline until corrected"
  - date: "2026-11-25"
    note: "Corrected after the independent check: cost is now variable (pay-as-you-go messages for .agent files), a data-exposure bullet now follows Learn's permissions wording, and the pay-as-you-go open question now states what Learn documents."
  - date: "2026-11-25"
    note: "Checked against Microsoft Learn by gpt-6.1-sol: passed with 0 of 63 statements not yet confirmed"
version: 2
verification:
  status: "verified-with-gaps"
  date: "2026-11-25"
  version: 2
  model: "gpt-6.1-sol"
  engine: "copilot"
  claims: 63
  confirmed: 59
  unconfirmed: 0
  contradicted: 4
  attempts: 0
  hash: "f820c211d32cc0f1d3199d98fc7bf89f"
---

## What's changing

Users can chat one-on-one with a SharePoint agent directly within Teams chat. That is the whole of the roadmap description; Microsoft Learn has no page for this Teams feature at the time of writing (November 2026), so what follows about behaviour is the roadmap's description plus what Learn says about agents in SharePoint in general.

The roadmap item lists Microsoft Teams, Microsoft Copilot (Microsoft 365) and SharePoint as products, Worldwide (Standard Multi-Tenant) as the cloud, General Availability as the release phase and Web as the platform. Its status is Rolling out with a target of May CY2026. The roadmap does not say whether the feature is on by default or needs an administrator to enable it.

Learn describes agents in SharePoint as agents that access organisational data the same way Copilot in other Microsoft 365 apps does, responding to users based on their access permissions to the data. Learn also says the .agent file format used by agents in SharePoint is being retired: existing .agent files keep working across SharePoint, Microsoft Teams and the Copilot app until the end of March 2027, and .agent files added to a Teams chat or channel then stop responding. The roadmap item does not say which agent type the Teams chat uses.

## Why it matters

This adds a Teams entry point to agents that Learn describes as grounded in SharePoint sites, pages and document libraries. Service owners should expect Teams users to start asking SharePoint agents questions in chat, so site permissions, licensing and support guidance matter before the agents get wider use. Microsoft has not stated what happens on arrival if nobody acts, so base plans on no source saying existing behaviour changes.

The controls differ by surface. Learn says blocking an agent created by using SharePoint only affects its availability in Microsoft Copilot Chat, so the Microsoft 365 admin center block is not a Teams switch for these agents. The March 2027 end date for .agent files is the nearer planning date for any team that already puts SharePoint agents into Teams chats.

## Risk assessment

**Data exposure**
- Learn says agents in SharePoint respond to users based on their access permissions to the data, so overshared content can be returned to users who already have permission to that content. Site permissions are the control, as the Learn page on managing access to agents describes.
- Learn says Restricted Content Discovery on a site removes the Agent icon from the site's global header and prevents the site's content from being surfaced in Microsoft Copilot or organisation-wide search. The page does not describe its effect on Teams chat, so test before relying on it for this feature.

**Security & identity**
- Learn says file permissions on a .agent file determine who can access or edit the agent. For agents shared into Teams chat, confirm who holds access to the underlying file before wider use.

**Autonomy & actions**
- The roadmap describes one-on-one chat only. Learn's billing page mentions agent actions as part of interactive Copilot use, but nothing read describes actions for this Teams feature.

**Change & support**
- Learn says the .agent format stops responding after March 2027, and that a Teams chat with several .agent agents must have them all upgraded at the same time. Chats built now on .agent files will need rework.
- The block control in the Microsoft 365 admin center does not cover Teams for agents created by using SharePoint, so help desks need a different answer to "how do I stop this agent in Teams".

## Cost and licensing

Learn's page on managing access to agents in SharePoint says: "Currently, users with a Microsoft Copilot license can use the agents." It adds that agents in SharePoint don't require activation, and that users without a Microsoft Copilot licence can be given access through pay-as-you-go billing assigned to a security group.

The pay-as-you-go page lists a billing rate of 12 messages for each interaction with a SharePoint agent (10 messages for tenant graph grounding and 2 for generative answers), with charges shown under the Copilot Studio meter on the invoice. Its footnote says interactive use by authenticated Microsoft Copilot users in Microsoft 365 apps and services is included at no extra cost. That page is about SharePoint agents in general and about .agent files; a rate or licence specific to chatting in Teams is not yet published.

Indirect costs are admin time, user guidance and, for chats that use .agent files, the upgrade work Learn describes ahead of March 2027.

## Scope

The roadmap item lists Microsoft Teams, Microsoft Copilot (Microsoft 365) and SharePoint, with Worldwide (Standard Multi-Tenant) as the only cloud and Web as the only platform. Release phase is General Availability, status Rolling out, target May CY2026. The record does not list GCC, GCC High or DoD.

Users need a Microsoft Copilot licence or coverage by a pay-as-you-go billing policy, per Learn's SharePoint agents pages. An agent's answers depend on each user's permissions to the data sources it uses. Learn names the SharePoint administrator role for setting up pay-as-you-go billing, together with Owner or Contributor Azure roles during setup.

## Governance guidance

### Before rollout
- Inventory which SharePoint agents your teams already use in Teams chats and which sites they draw on; Learn says .agent files can be found by searching for `*.agent`.
- Check permissions on the sites those agents use, because Learn says responses follow each user's access to the data.
- Decide whether pilot users hold a Microsoft Copilot licence or will rely on pay-as-you-go billing, and whether a billing policy exists.
- Plan for the March 2027 end of .agent file responses described on Learn's upgrade page.

### At rollout
- Test a one-on-one chat with a SharePoint agent from a pilot account that has no access to the agent's source site, and confirm the answers leave out that content.
- Apply Restricted Content Discovery to any site that is not ready for Copilot, and confirm in a test chat what the agent does with that site's content.
- Tell help desk staff that blocking a SharePoint-created agent in the Microsoft 365 admin center is documented to affect Copilot Chat only.

### After rollout
- Review Microsoft Cost Management for SharePoint agent charges if a pay-as-you-go policy is connected.
- Check the roadmap item and Message center for a Learn page describing the Teams experience and its default state.

## Governance controls

<p class="controls__lead">Where each control lives. The left column says what the setting decides and how far it reaches; the middle gives the admin centre and the exact path; the right gives the script, API or command that does the same. <em>Not yet documented</em> means Microsoft has not published a control for that surface, so there is nothing to configure yet.</p>

<table class="controls">
<thead><tr><th>Control</th><th>Admin UI</th><th>API and automation</th></tr></thead>
<tbody>
<tr><td data-label="Control"><strong>Whether an agent is blocked for the whole organisation</strong><br><small>Agent</small><br><small class="controls__note">Learn says blocking an agent created by using SharePoint only impacts its availability in Microsoft Copilot Chat. The Graph API is beta and needs a Microsoft Agent 365 licence.</small></td><td data-label="Admin UI"><strong>Microsoft 365 admin center</strong><br>Agents › All agents › agent › Block <a href="https://learn.microsoft.com/microsoft-agent-365/admin/agent-actions" rel="noopener" class="controls__docs">Learn</a></td><td data-label="API and automation"><strong>Microsoft Graph</strong><br><code>POST /beta/copilot/admin/catalog/packages/{id}/block</code> <a href="https://learn.microsoft.com/microsoft-365/copilot/extensibility/api/admin-settings/package/copilotpackage-block" rel="noopener" class="controls__docs">Learn</a></td></tr>
<tr><td data-label="Control"><strong>Whether a SharePoint site's content is discoverable by Microsoft Copilot and its agent features show</strong><br><small>Site</small><br><small class="controls__note">Learn says the Agent icon is hidden on the site's global header and the site's content is not surfaced in Microsoft Copilot. The page does not describe Teams chat. Needs Copilot licensing and SharePoint Advanced Management.</small></td><td data-label="Admin UI"><strong>SharePoint admin center</strong><br>Sites › Active sites › site › Settings › Restrict content from Microsoft Copilot <a href="https://learn.microsoft.com/sharepoint/restricted-content-discovery" rel="noopener" class="controls__docs">Learn</a></td><td data-label="API and automation"><strong>PowerShell</strong><br><code>Set-SPOSite -Identity &lt;site-url&gt; -RestrictContentOrgWideSearch $true</code> <a href="https://learn.microsoft.com/sharepoint/restricted-content-discovery" rel="noopener" class="controls__docs">Learn</a></td></tr>
</tbody>
</table>

The Microsoft 365 admin center block applies to the selected agent across the organisation, but Learn limits it for agents created by using SharePoint to Microsoft Copilot Chat. Treat it as a Copilot Chat control for these agents, not as a Teams control. Its Graph call is in beta and Learn says the Package Management API needs a Microsoft Agent 365 licence.

Restricted Content Discovery is a site-level setting managed by SharePoint administrators by default; Learn says delegation to site administrators is a separate tenant setting. Its page lists Microsoft Copilot licensing and SharePoint Advanced Management as prerequisites. Site permissions and file permissions on .agent files remain the controls over what an agent can return to a user.

## Open questions

- Is chatting with a SharePoint agent in Teams on by default, or does an administrator or user have to turn it on? Watch the roadmap item and Message center.
- Which agent type does the Teams chat use: .agent files, or agents created in Microsoft Copilot Agent Builder? This decides whether the March 2027 end date applies.
- Does the Teams admin center's app management cover these agents, and is there a Teams-specific block for SharePoint-created agents?
- For .agent files, SharePoint agents pay-as-you-go uses the Azure resource whenever a user without a Microsoft Copilot licence uses a SharePoint agent.

<!-- rationale
risk: Medium. Learn says blocking an agent created by using SharePoint only affects Microsoft Copilot Chat, so the main block control does not cover Teams; agent answers follow each user's data permissions.
cost: Variable. Unlicensed users of .agent files consume pay-as-you-go messages billed under the Copilot Studio meter; interactive use by authenticated Microsoft Copilot users in Microsoft 365 apps and services is included at no extra cost.
impact: Medium. Teams users who hold a Copilot licence, or are covered by a pay-as-you-go policy, get a new way to reach SharePoint agents; the roadmap does not say how many tenants or users see it first.
-->

<!-- verifier-findings (2026-11-25, verified-with-gaps; checked by gpt-6.1-sol)
The independent check found fault only with the statements below. This is a correction: change what they name and carry the rest of the page over unchanged.
These are minor and do not hold the page. Where removing the statement, or rewording it in the words the fix gives, settles one, do that; otherwise leave it as it is. A minor finding may also add a source link it names for a statement already on the page. It adds no row and nothing that needs research.
- [supported, minor] Risk assessment: Change & support / behaviour: All .agent agents in a single Teams chat must be upgraded at the same time. | Found: you need to upgrade all agents used in the chat at the same time or else one upgraded agent will render all other (.agent file) agents unusable. | Fix: Keep the upgrade guidance, but add: 'Microsoft's Teams-sharing training instead says only one agent can be added at a time; the training and upgrade guidance differ on multiple agents in a chat.' Cite https://learn.microsoft.com/training/modules/use-no-code-agents-sharepoint/3-share-agent-microsoft-teams. | Source: https://learn.microsoft.com/sharepoint/upgrade-sharepoint-agents
- [supported, minor] controls[1].note; Risk assessment: Data exposure; Governance controls table / applicability: Restricted Content Discovery prevents the site's content from being surfaced in Microsoft Copilot or organisation-wide search. | Found: The restricted content discovery policy leaves site access unchanged but prevents the site's content from being surfaced in Microsoft Copilot or organization-wide search for all users. | Fix: Qualify the statement everywhere it appears: 'Restricted Content Discovery limits organisation-wide search and Microsoft Copilot discovery scenarios, but does not affect experiences operating on content already in use, such as summarising an open document.' The latter qualification is in the already-cited https://learn.microsoft.com/sharepoint/restricted-content-discovery FAQ and narrows the access-management page's broader wording. | Source: https://learn.microsoft.com/sharepoint/manage-access-agents-in-sharepoint
- [contradicted, minor] Governance guidance: Before rollout; controls / consistency: The checklist tells readers to check site permissions, but the controls table has no site-permissions row. | Found: Check permissions on the sites those agents use ... Controls table: organisation-wide agent blocking; site Restricted Content Discovery. | Fix: Remove the 'Check permissions on the sites those agents use' checklist bullet, leaving the existing permissions explanation in Risk assessment. The checklist currently names a control absent from the table; do not add a row in this correction.
- [contradicted, minor] Governance guidance: Before rollout; controls / consistency: The checklist tells readers to take stock of pilot users' licence assignments, but the controls table has no licensing row. | Found: Decide whether pilot users hold a Microsoft Copilot licence ... Controls table: organisation-wide agent blocking; site Restricted Content Discovery. | Fix: Remove the 'Decide whether pilot users hold a Microsoft Copilot licence or will rely on pay-as-you-go billing, and whether a billing policy exists' checklist bullet. Keep its supported licensing information in Cost and licensing; do not add a row in this correction.
- [contradicted, minor] Governance guidance: Before rollout; controls / consistency: The checklist asks readers to check whether a billing policy exists, but the controls table has no billing-policy row. | Found: Decide ... whether a billing policy exists. ... Controls table: organisation-wide agent blocking; site Restricted Content Discovery. | Fix: Remove the same 'Decide whether pilot users hold a Microsoft Copilot licence or will rely on pay-as-you-go billing, and whether a billing policy exists' checklist bullet. This is the same edit as the licence-checklist correction, not an additional edit.
- [contradicted, minor] Governance guidance: After rollout; controls / consistency: The checklist asks readers to review Microsoft Cost Management charges, but the controls table has no consumption-monitoring row. | Found: Review Microsoft Cost Management for SharePoint agent charges if a pay-as-you-go policy is connected. ... Controls table: organisation-wide agent blocking; site Restricted Content Discovery. | Fix: Remove the Microsoft Cost Management checklist bullet because its monitoring control has no table row. Do not add a row in this correction.
-->
