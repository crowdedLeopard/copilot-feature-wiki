---
title: "Microsoft Edge: contextual nudges on the Microsoft 365 Copilot Chat toolbar icon"
slug: "microsoft-edge-adding-contextual-nudges-to-the-m365-copilot-chat-icon"
roadmapId: 537284
topic: "m365-copilot"
products: ["Microsoft Edge","Microsoft Copilot (Microsoft 365)"]
summary: "Edge for Business plans to attach contextual nudges to the Copilot icon in the toolbar, offering actions on the open page. No nudge-specific policy is documented; the existing icon and page-content policies are the controls to review."
status: "in-development"
releasePhase: ["General Availability"]
clouds: ["Worldwide (Standard Multi-Tenant)"]
platforms: ["Web"]
targetDate: "November CY2026"
previewDate: null
risk: "low"
cost: "low"
impact: "medium"
defaultState: "unknown"
action: "prepare"
licensing:
  model: "included"
  notes: "Copilot Chat in Edge is one of the ways to reach Copilot Chat (Basic), which Microsoft's Copilot overview describes as included with eligible Microsoft 365 licences. No licensing specific to the nudges is published."
audiences: ["m365-admin","service-owner","change-adoption"]
tags: ["microsoft-edge","edge-for-business","copilot-chat","m365-copilot","admin-controls","user-experience"]
sources:
  - title: "Microsoft 365 Roadmap 537284"
    url: "https://www.microsoft.com/microsoft-365/roadmap?id=537284"
    kind: "roadmap"
  - title: "Microsoft365CopilotChatIconEnabled"
    url: "https://learn.microsoft.com/deployedge/microsoft-edge-policies/microsoft365copilotchaticonenabled"
    kind: "learn"
  - title: "EdgeEntraCopilotPageContext"
    url: "https://learn.microsoft.com/deployedge/microsoft-edge-policies/edgeentracopilotpagecontext"
    kind: "learn"
  - title: "Configuring Copilot Features"
    url: "https://learn.microsoft.com/deployedge/microsoft-edge-management-service-copilot-features"
    kind: "learn"
  - title: "Get started with configuration policies"
    url: "https://learn.microsoft.com/deployedge/microsoft-edge-management-service"
    kind: "learn"
  - title: "Microsoft Edge - Policies"
    url: "https://learn.microsoft.com/deployedge/microsoft-edge-policies"
    kind: "learn"
  - title: "Microsoft Copilot overview"
    url: "https://learn.microsoft.com/copilot/plan/copilot-overview"
    kind: "learn"
  - title: "Archived release notes for Microsoft Edge Stable Channel"
    url: "https://learn.microsoft.com/deployedge/microsoft-edge-relnote-archive-stable-channel"
    kind: "learn"
  - title: "Microsoft 365 Copilot release notes"
    url: "https://learn.microsoft.com/microsoft-365/copilot/release-notes"
    kind: "learn"
videos: []
related: ["microsoft-edge-v-149-unifying-copilot-chat-policy-controls","microsoft-edge-ask-copilot-about-an-image","microsoft-edge-auto-open-copilot-side-pane-for-outlook-links","endpoint-dlp"]
controls:
  - governs: "Whether the Copilot icon, which the nudges attach to, shows in the Edge for Business toolbar"
    scope: "user"
    ui:
      surface: "Microsoft 365 admin center"
      path: "Settings > Microsoft Edge > Copilot > Copilot icon in the toolbar"
      docs: "https://learn.microsoft.com/deployedge/microsoft-edge-management-service-copilot-features"
    api:
      kind: "other"
      call: "Registry value Microsoft365CopilotChatIconEnabled (REG_DWORD) under SOFTWARE\\Policies\\Microsoft\\Edge"
      docs: "https://learn.microsoft.com/deployedge/microsoft-edge-policies/microsoft365copilotchaticonenabled"
    note: "Existing control. Entra ID profiles only. Whether nudges appear with the icon hidden is not documented. Management service needs Microsoft Edge Administrator."
  - governs: "Whether Copilot in Edge can read page content, browsing history and video transcripts"
    scope: "user"
    ui:
      surface: "Microsoft 365 admin center"
      path: "Settings > Microsoft Edge > Copilot > Access to browser context"
      docs: "https://learn.microsoft.com/deployedge/microsoft-edge-management-service-copilot-features"
    api:
      kind: "other"
      call: "Registry value EdgeEntraCopilotPageContext (REG_DWORD) under SOFTWARE\\Policies\\Microsoft\\Edge"
      docs: "https://learn.microsoft.com/deployedge/microsoft-edge-policies/edgeentracopilotpagecontext"
    note: "Existing control. Unconfigured: on outside the EU, off in the EU. Pages protected by DLP policies are excluded. Effect on the nudges is not documented."
  - governs: "Whether contextual nudges on the Copilot icon are shown"
    scope: "user"
    ui: null
    api: null
    note: "No setting or Edge policy for the nudges is documented at the time of writing (November 2026)."
confidence: "medium"
created: "2026-11-27"
updated: "2026-11-27"
roadmapModified: "2026-10-07T23:01:35"
changes:
  - date: "2026-11-27"
    note: "New briefing: contextual nudges planned for the Copilot icon in Edge for Business, with the existing icon and page-content policies as today's controls."
  - date: "2026-11-27"
    note: "Checked against Microsoft Learn by gpt-6.1-sol: passed with 1 of 49 statements not yet confirmed"
version: 1
verification:
  status: "verified-with-gaps"
  date: "2026-11-27"
  version: 1
  model: "gpt-6.1-sol"
  engine: "copilot"
  claims: 49
  confirmed: 47
  unconfirmed: 1
  contradicted: 1
  attempts: 0
  hash: "a9caa8ff06cf49fe6f9944d7e88fea89"
---

## What's changing

Microsoft plans to add contextual nudges to the Microsoft 365 Copilot Chat icon in the Microsoft Edge for Business toolbar. The roadmap item states that Edge for Business "will soon help users quickly take contextual action on their open pages using contextual nudges attached to the Copilot icon in the toolbar".

Microsoft Learn does not describe this feature yet (November 2026), so what follows about its behaviour is the roadmap's description. Microsoft has not said which actions the nudges offer, when they appear, or whether they are on by default.

Two related changes are already documented. Edge 144 Stable (January 2026) added "Contextual nudges on address bar offering help summarizing webpages", and the Microsoft 365 Copilot release notes for 5 May 2026 describe a separate roadmap item, 515167, in which "Edge for Business introduces contextual nudges attached to the Copilot entry point" for actions such as summarising an open page. Neither page says it describes this item.

The roadmap record lists the item as In development, targeted for November CY2026, for General Availability on the Web platform in the Worldwide (Standard Multi-Tenant) cloud.

## Why it matters

The nudges put a Copilot prompt in front of users on whatever page they have open, so expect more people to send page content to Copilot Chat in Edge, including people who have never opened it. For service owners, that turns the existing page-content setting (EdgeEntraCopilotPageContext) from a background choice into one users meet daily. Its unconfigured default differs by region: on outside the EU, off in the EU.

Microsoft has not stated what happens on arrival. No source says the nudges can be switched off on their own. The levers that exist are hiding the Copilot icon and limiting what Copilot can read from the page; decide on both before the target month passes.

## Risk assessment

**Data exposure**
- A nudge that leads to a page action relies on Copilot reading page content. EdgeEntraCopilotPageContext controls whether Copilot in the side pane can read page content, browsing history and video transcripts, and Copilot cannot read pages protected by DLP policies even when the policy allows access. Whether the nudge itself evaluates the page before the user selects it is not documented.

**Security & identity**
- No change documented. The Copilot icon policy applies to Microsoft Entra ID profiles in Edge for Business, not to profiles signed in with a Microsoft account.

**Autonomy & actions**
- The roadmap describes nudges that help users "take contextual action". It does not say Copilot acts without the user selecting the nudge; confirm this once Microsoft documents the feature.

**Change & support**
- A new prompt on a toolbar icon users already have is likely to raise help-desk questions, such as how to dismiss it. Users can hide the icon themselves unless Microsoft365CopilotChatIconEnabled is set.

## Cost and licensing

Copilot Chat in Edge, reached by selecting the Copilot icon in the upper-right corner of the browser, is one entry point to Copilot Chat (Basic). Microsoft's [Copilot overview](https://learn.microsoft.com/copilot/plan/copilot-overview) describes Copilot Chat (Basic) as "included with eligible Microsoft 365 licenses". The Microsoft365CopilotChatIconEnabled policy page says the icon is shown for both Microsoft 365 Copilot licensed and unlicensed users.

No meter, price or licence specific to the nudges is published. The indirect costs are admin time to decide the two Edge policies and a short note to users.

## Scope

- **Users:** Edge for Business users signed in with a Microsoft Entra ID profile. The icon and page-content policies do not apply to profiles signed in with a Microsoft account.
- **Platforms:** the roadmap lists Web. The icon policy supports Windows and macOS from version 139 and does not support Android or iOS.
- **Clouds:** Worldwide (Standard Multi-Tenant), as the roadmap lists it.
- **Roles:** the Microsoft Edge management service in the Microsoft 365 admin center requires the Microsoft Edge Administrator role.
- **Rollout:** In development, targeted for November CY2026. The Edge version that brings the nudges is not yet published.

## Governance guidance

### Before rollout
- Decide whether Copilot should show in the Edge toolbar for each group, and set Microsoft365CopilotChatIconEnabled through the Edge management service, Group Policy or registry.
- Check the current value of EdgeEntraCopilotPageContext, remembering that when it is not configured, access is on outside the EU and off in the EU.
- Confirm that sites holding sensitive content are covered by the DLP policies that block Copilot's page-content access in Edge.
- Brief the help desk that a Copilot nudge on the toolbar icon is expected, and that users can hide the icon if policy leaves it to them.
### At rollout
- Watch the Edge Stable release notes for the version that ships the nudges and for any new policy that controls them.
- Test on a managed device with the icon policy disabled to see whether nudges still appear anywhere in Edge.
### After rollout
- Review help-desk tickets about the Copilot icon and adjust the icon policy for groups that find the nudges disruptive.
- Re-check the Copilot tab in the Edge management service for a nudge setting once Microsoft documents the feature.

## Governance controls

<p class="controls__lead">Where each control lives. The left column says what the setting decides and how far it reaches; the middle gives the admin centre and the exact path; the right gives the script, API or command that does the same. <em>Not yet documented</em> means Microsoft has not published a control for that surface, so there is nothing to configure yet.</p>

<table class="controls">
<thead><tr><th>Control</th><th>Admin UI</th><th>API and automation</th></tr></thead>
<tbody>
<tr><td data-label="Control"><strong>Whether the Copilot icon, which the nudges attach to, shows in the Edge for Business toolbar</strong><br><small>User</small><br><small class="controls__note">Existing control. Entra ID profiles only. Whether nudges appear with the icon hidden is not documented. Management service needs Microsoft Edge Administrator.</small></td><td data-label="Admin UI"><strong>Microsoft 365 admin center</strong><br>Settings › Microsoft Edge › Copilot › Copilot icon in the toolbar <a href="https://learn.microsoft.com/deployedge/microsoft-edge-management-service-copilot-features" rel="noopener" class="controls__docs">Learn</a></td><td data-label="API and automation"><strong>API</strong><br><code>Registry value Microsoft365CopilotChatIconEnabled (REG_DWORD) under SOFTWARE\Policies\Microsoft\Edge</code> <a href="https://learn.microsoft.com/deployedge/microsoft-edge-policies/microsoft365copilotchaticonenabled" rel="noopener" class="controls__docs">Learn</a></td></tr>
<tr><td data-label="Control"><strong>Whether Copilot in Edge can read page content, browsing history and video transcripts</strong><br><small>User</small><br><small class="controls__note">Existing control. Unconfigured: on outside the EU, off in the EU. Pages protected by DLP policies are excluded. Effect on the nudges is not documented.</small></td><td data-label="Admin UI"><strong>Microsoft 365 admin center</strong><br>Settings › Microsoft Edge › Copilot › Access to browser context <a href="https://learn.microsoft.com/deployedge/microsoft-edge-management-service-copilot-features" rel="noopener" class="controls__docs">Learn</a></td><td data-label="API and automation"><strong>API</strong><br><code>Registry value EdgeEntraCopilotPageContext (REG_DWORD) under SOFTWARE\Policies\Microsoft\Edge</code> <a href="https://learn.microsoft.com/deployedge/microsoft-edge-policies/edgeentracopilotpagecontext" rel="noopener" class="controls__docs">Learn</a></td></tr>
<tr><td data-label="Control"><strong>Whether contextual nudges on the Copilot icon are shown</strong><br><small>User</small><br><small class="controls__note">No setting or Edge policy for the nudges is documented at the time of writing (November 2026).</small></td><td data-label="Admin UI"><em class="controls__gap">Not yet documented</em></td><td data-label="API and automation"><em class="controls__gap">Not yet documented</em></td></tr>
</tbody>
</table>

Microsoft Learn documents no Edge policy or management-service setting for the nudges themselves at the time of writing (November 2026). The two rows above it are existing controls, not nudge controls: hiding the icon removes the surface the roadmap says the nudges attach to, but Microsoft has not stated whether nudges appear when the icon is hidden. The icon policy applies only when users access Copilot in the side pane. Edge management service settings are assigned through a configuration policy to Microsoft Entra groups, need the Microsoft Edge Administrator role, and take effect when Edge restarts.

## Open questions

- Are the nudges on by default for Edge for Business users, and in which Edge version do they ship? Watch the Edge Stable release notes and Message center.
- Will a dedicated policy turn the nudges off while keeping the Copilot icon in the toolbar?
- Does Edge read page content to choose a nudge before the user selects it, and does disabling EdgeEntraCopilotPageContext suppress the nudges?
- Do the nudges appear when Microsoft365CopilotChatIconEnabled is disabled?
- Which actions do the nudges offer beyond summarising a page?

<!-- rationale
risk: Low. The nudges are a prompt on the existing Copilot Chat icon; Copilot's access to page content is already governed by the EdgeEntraCopilotPageContext policy and by DLP-protected pages being excluded.
cost: Low. Copilot Chat in Edge is part of Copilot Chat (Basic), which Microsoft includes with eligible Microsoft 365 licences; the known cost is admin time and user communication. Nothing nudge-specific is published.
impact: Medium. Edge for Business users who have the Copilot icon in their toolbar would see the nudges; Microsoft has not stated whether they are on by default.
-->

<!-- verifier-findings (2026-11-27, verified-with-gaps; checked by gpt-6.1-sol)
The independent check found fault only with the statements below. This is a correction: change what they name and carry the rest of the page over unchanged.
Correct each of these with the smallest change that removes the fault: delete the statement, narrow it, or put the finding's own "Found" text or worded replacement in its place. Where a fix asks for more than that (a new row, an explanation, further references), do only the part that removes the fault. A correction adds no control rows.
- [unsupported, major] Risk assessment: Data exposure / behaviour: A nudge that leads to a page action relies on Copilot reading page content. | Found: Searched: '"Edge" "nudges" "page content"' and 'Edge "contextual nudges" "before" "content"'; read EdgeEntraCopilotPageContext and related release-note excerpts. They describe contextual queries and summarization, not how this item's unspecified page actions operate. | Fix: Remove 'A nudge that leads to a page action relies on Copilot reading page content.' Keep the following documented description of EdgeEntraCopilotPageContext and the explicit uncertainty about nudge evaluation.
These are minor and do not hold the page. Where removing the statement, or rewording it in the words the fix gives, settles one, do that; otherwise leave it as it is. A minor finding may also add a source link it names for a statement already on the page. It adds no row and nothing that needs research.
- [contradicted, minor] Governance guidance: Before rollout; Governance controls / consistency: The checklist tells administrators to check DLP coverage, but the controls table has no DLP row. | Found: Confirm that sites holding sensitive content are covered by the DLP policies that block Copilot's page-content access in Edge. | Fix: Remove the checklist bullet 'Confirm that sites holding sensitive content are covered by the DLP policies that block Copilot's page-content access in Edge.' It names a control with no table row; retain the documented DLP limitation elsewhere.
-->
