---
title: "Microsoft Edge: share tenant-approved work browsing history with Microsoft 365 Copilot Search"
slug: "microsoft-edge-microsoft-edge-can-now-send-work-related-browsing-history-to-copilot-for-mo"
roadmapId: 537283
topic: "m365-copilot"
products: ["Microsoft Edge","Microsoft Copilot (Microsoft 365)"]
summary: "Edge shares tenant-approved, work-related browsing history with Microsoft 365 Copilot Search for Copilot-licensed users, on unless the Edge policy is disabled. Decide now whether to keep, or disable, it."
status: "launched"
releasePhase: ["General Availability"]
clouds: ["Worldwide (Standard Multi-Tenant)"]
platforms: ["Web"]
targetDate: "May CY2026"
previewDate: null
risk: "medium"
cost: "low"
impact: "medium"
defaultState: "on"
action: "act-now"
licensing:
  model: "included"
  notes: "The Edge policy page says the feature is available only to users signed in to Edge with an Entra ID account who have an eligible Microsoft 365 Copilot licence. Which Copilot licences count as eligible is not stated."
audiences: ["m365-admin","security","change-adoption"]
tags: ["microsoft-edge","edge-for-business","copilot-search","m365-copilot","group-policy","privacy"]
sources:
  - title: "ShareBrowsingHistoryWithCopilotSearchAllowed"
    url: "https://learn.microsoft.com/deployedge/microsoft-edge-policies/sharebrowsinghistorywithcopilotsearchallowed"
    kind: "learn"
  - title: "Archived release notes for Microsoft Edge Stable Channel"
    url: "https://learn.microsoft.com/deployedge/microsoft-edge-relnote-archive-stable-channel"
    kind: "learn"
  - title: "Release notes for Microsoft Edge Beta Channel"
    url: "https://learn.microsoft.com/deployedge/microsoft-edge-relnote-beta-channel"
    kind: "learn"
  - title: "Extension for Copilot connectors"
    url: "https://learn.microsoft.com/microsoftsearch/crossover-browser"
    kind: "learn"
  - title: "Microsoft 365 Roadmap item 537283"
    url: "https://www.microsoft.com/microsoft-365/roadmap?id=537283"
    kind: "roadmap"
videos: []
related: ["microsoft-edge-ground-m365-copilot-chat-in-edge-for-business","microsoft-edge-m365-copilot-chat-access-to-page-content-will-soon-extend-to-work-across-mu","m365-admin-center-authoritative-content-management-for-m365-copilot-search"]
controls:
  - governs: "Whether Edge shares tenant-approved browsing history with Microsoft 365 Copilot Search"
    scope: "user"
    ui:
      surface: "Group Policy (ADMX)"
      path: "Administrative Templates > Microsoft Edge > Allow sharing tenant-approved browsing history with Microsoft 365 Copilot Search"
      docs: "https://learn.microsoft.com/deployedge/microsoft-edge-policies/sharebrowsinghistorywithcopilotsearchallowed"
    api:
      kind: "other"
      call: "Registry value ShareBrowsingHistoryWithCopilotSearchAllowed (REG_DWORD) under SOFTWARE\\Policies\\Microsoft\\Edge"
      docs: "https://learn.microsoft.com/deployedge/microsoft-edge-policies/sharebrowsinghistorywithcopilotsearchallowed"
    note: "Mandatory only, per profile. Enabled or not configured shares history and leaves a user toggle; disabled stops sharing. Same key name on macOS."
  - governs: "Which sites count as tenant-approved, work-related sites for sharing"
    scope: "tenant"
    ui: null
    api: null
    note: "The policy page says only tenant-approved, work-related sites are shared but does not say where they are approved."
confidence: "high"
created: "2026-11-28"
updated: "2026-11-28"
roadmapModified: "2026-05-11T23:15:11"
changes:
  - date: "2026-11-28"
    note: "New briefing: launched Edge sharing of tenant-approved browsing history with Microsoft 365 Copilot Search, on by default, with its Edge policy."
  - date: "2026-11-28"
    note: "Checked against Microsoft Learn by gpt-6.1-sol: held: 0 of 45 statements contradicted, 2 unconfirmed; taken offline until corrected"
version: 1
verification:
  status: "held"
  date: "2026-11-28"
  version: 1
  model: "gpt-6.1-sol"
  engine: "copilot"
  claims: 45
  confirmed: 43
  unconfirmed: 2
  contradicted: 0
  attempts: 1
  hash: "b4870efe50561d9eb8bfc54130e46174"
---

## What's changing

Microsoft Edge can send work-related browsing history to Microsoft 365 Copilot Search, so that a search there can also return pages the user recently visited. The roadmap item describes this as "IT admin selected work related browsing history", and the Edge policy that governs it, **ShareBrowsingHistoryWithCopilotSearchAllowed**, says "Only tenant-approved, work-related sites are shared." The Edge release notes describe it as work-related browsing history "from third-party apps", sent "with admin approval".

The feature is on unless an administrator disables the policy. The policy page says that if the policy is enabled or not configured, browsing history is shared with Microsoft 365 Copilot Search by default and users can turn sharing off with a toggle in Edge settings; if the policy is disabled, nothing is shared. It applies only to users signed in to Edge with an Entra ID account who hold an eligible Microsoft 365 Copilot licence, and not to profiles signed in with a Microsoft account.

The roadmap item is **Launched**, General Availability, with a target of May CY2026, for the Worldwide (Standard Multi-Tenant) cloud on the Web platform. The feature appears in the Edge Beta release notes for version 148.0.3967.34 (April 27, 2026) and the Stable release notes for version 148.0.3967.54 (May 07, 2026). The policy page lists support from version 143 on Windows and macOS, and marks Android and iOS as not supported.

## Why it matters

This is a new flow of browsing data from the endpoint into a Microsoft 365 service, and it starts without an administrator choosing it. In a tenant that has not configured the policy, every Copilot-licensed user signed in to Edge with a work account has sharing switched on unless they turn it off with the toggle in Edge settings. Organisations that treat browsing history as sensitive, or that have works council or privacy commitments about it, need to decide on the policy rather than inherit the default.

The weak point is scope. The policy page promises that only tenant-approved, work-related sites are shared, but Microsoft Learn does not document where or how a tenant approves those sites at the time of writing (November 2026). Until that is clear, administrators cannot check from their own configuration which sites are in scope, so the safe options are to disable the policy or to accept the default knowingly.

## Risk assessment

**Data exposure**
- Browsing history from tenant-approved, work-related sites is sent to Microsoft 365 Copilot Search and can surface in a user's search results. Microsoft Learn does not document which sites count as approved or how that list is set, so the reach cannot be checked locally. Disabling **ShareBrowsingHistoryWithCopilotSearchAllowed** stops the sharing.
- Where the shared history is stored, for how long and whether it can be deleted are not described on the policy page.

**Security & identity**
- Sharing is tied to an Entra ID sign-in in Edge and a Microsoft 365 Copilot licence; the policy page says it does not apply to profiles signed in with a Microsoft account. Profiles signed in with a Microsoft account are outside it.

**Autonomy & actions**
- No change: the feature affects which results Copilot Search shows. Nothing in the sources describes it taking actions.

**Change & support**
- Users who notice their browsing history in search results may raise privacy questions with the service desk. The policy page lists Dynamic Policy Refresh as supported and the policy as per profile.
- Users can switch sharing off in Edge settings while the policy is enabled or not configured; with the policy disabled, browsing history is not shared.

## Cost and licensing

**Licence.** The ShareBrowsingHistoryWithCopilotSearchAllowed policy page states the feature is available only to users signed in to Edge with an Entra ID account who have an eligible Microsoft 365 Copilot licence. It does not list which Copilot licences are eligible.

**Meter.** The policy page and release notes describe no meter or charge for this feature.

**Indirect costs.** Admin time to decide on the policy, deploy it through Group Policy or the registry on Windows or the preference key on macOS, and brief users and privacy stakeholders.

## Scope

- **Users:** signed in to Microsoft Edge with an Entra ID account and holding an eligible Microsoft 365 Copilot licence. Not profiles signed in with a Microsoft account.
- **Platforms:** the roadmap item lists Web. The policy page lists Windows and macOS from version 143; Android and iOS are not supported.
- **Clouds:** Worldwide (Standard Multi-Tenant), as the roadmap item lists it.
- **Rollout:** in the Edge Stable channel from version 148.0.3967.54 (May 07, 2026), according to the release notes.
- **Configuration:** the Edge policy is mandatory-only (it cannot be set as recommended) and applies per profile.

## Governance guidance

### Before rollout
- Decide with the privacy or data protection lead whether Copilot-licensed users should share work browsing history with Microsoft 365 Copilot Search.
- Ask Microsoft, through a support case or your account team, how sites become tenant-approved for this feature and how to review that list.
- Check which Edge version your managed devices run; the policy page lists support from version 143 on Windows and macOS.

### At rollout
- Set **Allow sharing tenant-approved browsing history with Microsoft 365 Copilot Search** to Disabled in Group Policy if the decision is not to share; leaving it unconfigured keeps sharing on.
- Push the ShareBrowsingHistoryWithCopilotSearchAllowed preference key to macOS devices to match the Windows setting.
- Tell Copilot-licensed users that Copilot Search may show recently visited work pages, and where they can switch it off if the policy is left on.

### After rollout
- Check on a sample device that the policy appears as applied in Edge and that sharing matches the decision.
- Watch the Edge release notes and the policy page for documentation of how tenant-approved sites are chosen.

## Governance controls

<p class="controls__lead">Where each control lives. The left column says what the setting decides and how far it reaches; the middle gives the admin centre and the exact path; the right gives the script, API or command that does the same. <em>Not yet documented</em> means Microsoft has not published a control for that surface, so there is nothing to configure yet.</p>

<table class="controls">
<thead><tr><th>Control</th><th>Admin UI</th><th>API and automation</th></tr></thead>
<tbody>
<tr><td data-label="Control"><strong>Whether Edge shares tenant-approved browsing history with Microsoft 365 Copilot Search</strong><br><small>User</small><br><small class="controls__note">Mandatory only, per profile. Enabled or not configured shares history and leaves a user toggle; disabled stops sharing. Same key name on macOS.</small></td><td data-label="Admin UI"><strong>Group Policy (ADMX)</strong><br>Administrative Templates › Microsoft Edge › Allow sharing tenant-approved browsing history with Microsoft 365 Copilot Search <a href="https://learn.microsoft.com/deployedge/microsoft-edge-policies/sharebrowsinghistorywithcopilotsearchallowed" rel="noopener" class="controls__docs">Learn</a></td><td data-label="API and automation"><strong>API</strong><br><code>Registry value ShareBrowsingHistoryWithCopilotSearchAllowed (REG_DWORD) under SOFTWARE\Policies\Microsoft\Edge</code> <a href="https://learn.microsoft.com/deployedge/microsoft-edge-policies/sharebrowsinghistorywithcopilotsearchallowed" rel="noopener" class="controls__docs">Learn</a></td></tr>
<tr><td data-label="Control"><strong>Which sites count as tenant-approved, work-related sites for sharing</strong><br><small>Tenant</small><br><small class="controls__note">The policy page says only tenant-approved, work-related sites are shared but does not say where they are approved.</small></td><td data-label="Admin UI"><em class="controls__gap">Not yet documented</em></td><td data-label="API and automation"><em class="controls__gap">Not yet documented</em></td></tr>
</tbody>
</table>

The Edge policy is the administrator control Microsoft Learn documents for this feature at the time of writing (November 2026). It is mandatory-only, Boolean and per profile, and applies only to Entra ID-signed-in profiles. On macOS the policy page gives the preference key ShareBrowsingHistoryWithCopilotSearchAllowed with an example value of true. When the policy is enabled or not configured, each user can still turn sharing off in Edge settings; disabling the policy stops sharing for every profile it applies to.

The Microsoft 365 Copilot extension for Copilot connectors captures activity from administrator-approved applications through connector activity settings, but its page describes the browser extension and does not say those settings select the sites Edge shares under this policy.

## Open questions

- Where does a tenant approve the work-related sites that Edge shares, and can an administrator see or edit that list? Watch the ShareBrowsingHistoryWithCopilotSearchAllowed policy page.
- Does Edge use the activity settings of Microsoft 365 Copilot connectors, as the Microsoft 365 Copilot extension does, to decide which third-party sites are shared?
- Where is shared browsing history stored, how long is it kept, and can a user or administrator delete it?
- Which Microsoft 365 Copilot licences count as eligible for this feature?

<!-- rationale
risk: Medium. Browsing history leaves the browser for Copilot Search by default, limited by the policy page to tenant-approved, work-related sites; one Edge policy turns it off, but Learn does not say how sites are approved.
cost: Low. The policy page makes the feature available to users who already hold an eligible Microsoft 365 Copilot licence; the cost the sources show is admin time to decide and deploy the Edge policy.
impact: Medium. Users signed in to Edge with an Entra ID account and holding a Microsoft 365 Copilot licence see browsing-history results in Copilot Search without anyone acting.
-->

<!-- verifier-findings (2026-11-28, held; checked by gpt-6.1-sol)
The independent check found fault only with the statements below. This is a correction: change what they name and carry the rest of the page over unchanged.
Correct each of these with the smallest change that removes the fault: delete the statement, narrow it, or put the finding's own "Found" text or worded replacement in its place. Where a fix asks for more than that (a new row, an explanation, further references), do only the part that removes the fault. A correction adds no control rows.
- [unsupported, blocker] Why it matters; Risk assessment: Data exposure / absence: Administrators cannot check from their own configuration which sites are in scope, and the reach cannot be checked locally. | Found: Searched: 'Edge Copilot Search approve sites administrator UI API Graph tenant browsing history' and 'ShareBrowsingHistoryWithCopilotSearchAllowed sites configure'; read policy, release notes and connector-extension page. None states that local scope inspection is impossible. | Fix: Remove 'administrators cannot check from their own configuration which sites are in scope' from Why it matters and 'so the reach cannot be checked locally' from Risk assessment. Keep the narrower statement that Microsoft Learn does not document how sites are approved at the time of writing (November 2026).
- [unsupported, blocker] Why it matters; rationale: impact / licensing: Every Copilot-licensed user signed in to Edge with a work account has sharing switched on unless they use the toggle. | Found: Searched: 'Edge Copilot Search eligible licenses browsing history'; read policy and Copilot Search eligibility/licensing excerpts. They require an eligible licence; none states that every Copilot licence is eligible for this Edge feature. | Fix: Replace the second sentence of Why it matters with 'When the policy is not configured, users signed in to Edge with an Entra ID account and holding an eligible Microsoft 365 Copilot licence have sharing on by default, but can turn it off in Edge settings.' In the impact rationale, replace 'holding a Microsoft 365 Copilot licence' with 'holding an eligible Microsoft 365 Copilot licence'. Source: https://learn.microsoft.com/deployedge/microsoft-edge-policies/sharebrowsinghistorywithcopilotsearchallowed.
-->
