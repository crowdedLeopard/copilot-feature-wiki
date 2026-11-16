---
title: "Copilot Studio: agents on the Microsoft 365 channel accept files protected by Purview Information Protection labels"
slug: "copilot-studio-purview-information-protection-labelled-files"
roadmapId: 571305
topic: "copilot-studio"
products: ["Microsoft Copilot Studio"]
summary: "Users can upload sensitivity-labelled files to Copilot Studio agents in Copilot and Teams. Agents process the content according to the user's and agent's permissions, with label protections enforced end to end."
status: "in-development"
releasePhase: ["General Availability","Preview"]
clouds: ["Worldwide (Standard Multi-Tenant)"]
platforms: ["Web"]
targetDate: "October CY2026"
previewDate: "October CY2026"
risk: "medium"
cost: "none"
impact: "medium"
defaultState: "on"
action: "review"
licensing:
  model: "included"
  notes: "No new licence. Sensitivity labels with encryption require Microsoft Purview Information Protection entitlements the organisation already holds (Microsoft 365 E3/E5 or equivalent)."
audiences: ["compliance","security","power-platform-admin","maker"]
tags: ["copilot-studio","sensitivity-labels","purview","information-protection","file-upload","encryption","extract-usage-right"]
sources:
  - title: "Microsoft 365 Roadmap 571305"
    url: "https://www.microsoft.com/microsoft-365/roadmap?id=571305"
    kind: "roadmap"
  - title: "Use Microsoft Purview to manage data security and compliance for Microsoft Copilot Studio"
    url: "https://learn.microsoft.com/purview/ai-copilot-studio"
    kind: "learn"
  - title: "Considerations to manage Microsoft 365 Copilot for security and compliance (EXTRACT usage right)"
    url: "https://learn.microsoft.com/purview/ai-m365-copilot-considerations"
    kind: "learn"
  - title: "How data is protected and audited in Microsoft 365 and Microsoft Copilot"
    url: "https://learn.microsoft.com/copilot/plan/architecture-data-protection-auditing"
    kind: "learn"
  - title: "Sensitivity labels on SharePoint and OneDrive files (prerequisite) (Microsoft Purview portal)"
    url: "https://learn.microsoft.com/purview/sensitivity-labels-sharepoint-onedrive-files#how-to-enable-sensitivity-labels-for-sharepoint-and-onedrive-opt-in"
    kind: "learn"
  - title: "Which labelled content Copilot and agents may process (Microsoft Purview portal)"
    url: "https://learn.microsoft.com/purview/dlp-microsoft365-copilot-location-learn-about"
    kind: "learn"
  - title: "Which labelled content Copilot and agents may process (PowerShell)"
    url: "https://learn.microsoft.com/powershell/module/exchangepowershell/new-dlpcompliancepolicy?view=exchange-ps"
    kind: "learn"
videos: []
related: ["copilot-studio-mcp-tools-in-agents","purview-dlp-block-sensitive-data-in-copilot-web-search","data-policies"]
controls:
  - governs: "Sensitivity labels on SharePoint and OneDrive files (prerequisite)"
    scope: "tenant"
    ui:
      surface: "Microsoft Purview portal"
      path: "Solutions > Information Protection > Sensitivity labels > Turn on now"
      docs: "https://learn.microsoft.com/purview/sensitivity-labels-sharepoint-onedrive-files#how-to-enable-sensitivity-labels-for-sharepoint-and-onedrive-opt-in"
    api:
      kind: "powershell"
      call: "Set-SPOTenant -EnableAIPIntegration $true"
      docs: "https://learn.microsoft.com/purview/sensitivity-labels-sharepoint-onedrive-files#how-to-enable-sensitivity-labels-for-sharepoint-and-onedrive-opt-in"
  - governs: "Which labelled content Copilot and agents may process"
    scope: "tenant"
    ui:
      surface: "Microsoft Purview portal"
      path: "Data Loss Prevention > Policies > + Create policy > Custom > location Microsoft Copilot, Copilot Chat, and Copilot Cowork"
      docs: "https://learn.microsoft.com/purview/dlp-microsoft365-copilot-location-learn-about"
    api:
      kind: "powershell"
      call: "New-DlpCompliancePolicy -Name <name> -Locations <location> -EnforcementPlanes @('CopilotExperiences'); New-DlpComplianceRule -RestrictAccess"
      docs: "https://learn.microsoft.com/powershell/module/exchangepowershell/new-dlpcompliancepolicy?view=exchange-ps"
  - governs: "Copilot Studio-side switch for labelled files"
    scope: "agent"
    ui: null
    api: null
    note: "Labels are honoured automatically according to the label's EXTRACT right; there is nothing for a maker or admin to turn on."
confidence: "medium"
created: "2026-11-13"
updated: "2026-11-16"
roadmapModified: "2026-10-19T23:15:15"
changes:
  - date: "2026-11-13"
    note: "Initial briefing"
  - date: "2026-11-16"
    note: "Added governance controls: admin UI paths and API equivalents, sourced to Microsoft Learn"
version: 2
---

## What's changing

Today a user who drags a file carrying a Microsoft Purview Information Protection sensitivity label into a Copilot Studio agent deployed on the Microsoft 365 channel (Copilot Chat, Teams) is blocked. This feature removes the block: labelled and encrypted files can be uploaded, and the agent processes the content according to the permissions of the user and the agent's account, with label protections enforced end to end.

The behaviour follows the model Microsoft already uses for Copilot and for Copilot Studio knowledge sources in SharePoint. When a label applies encryption, the user needs both the **VIEW** and **EXTRACT** usage rights for the content to be returned or summarised. Content the user cannot extract is not processed. Responses display the highest-priority label of the content used, and content created from labelled sources inherits that label where supported.

The roadmap lists both preview and General Availability for October 2026 and the item still reads "In development", so timing may move.

## Why it matters

Blocking labelled uploads was safe but blunt: it pushed users to strip labels or use unlabelled copies to get work done, which is worse for the organisation than a correctly enforced label. Allowing labelled files while honouring usage rights means the information protection investment carries through to agents.

The caveat for compliance teams is that "enforced end to end" depends on how your labels are configured. A label that applies encryption with the Editor permission level includes EXTRACT, so agents can read it; a label configured without EXTRACT stops the agent. Labels that apply markings but no encryption do not restrict processing at all. If your label taxonomy was designed before Copilot, this is the moment to check what each label actually permits.

## Risk assessment

**Data exposure**
- Labelled content now enters agent conversations. Exposure is bounded by the user's usage rights, but the content also reaches whatever knowledge and tools the agent uses in that turn; a tool that writes to an external system could carry extracted text with it.
- Labels configured with user-defined permissions block agent access to unopened files, which may surprise users.

**Security & identity**
- Processing happens under the user's and the agent's account permissions. Agents using maker-provided credentials complicate the picture; pair with credential controls.

**Autonomy & actions**
- Not autonomous in itself. Risk arises when labelled content is combined with write-capable tools.

**Change & support**
- Users will see labelled files accepted where they used to be refused; expect questions about why some labelled files still fail (missing EXTRACT).
- DLP policies scoped to the Microsoft 365 Copilot location can still prevent agents processing content with specific labels; make sure those policies reflect intent.

## Cost and licensing

- No additional licence for the feature.
- Sensitivity labels with encryption and auto-labelling require Microsoft Purview Information Protection entitlements (Microsoft 365 E3 for manual labelling, E5 for auto-labelling and some advanced scenarios). Check the Purview licensing guidance for your plan.
- Indirect: compliance time to review label permissions and DLP scope.

## Scope

- Copilot Studio agents published to the Microsoft 365 channel (Copilot Chat and Teams). Other channels not stated.
- Files uploaded by users in the conversation; knowledge sources already follow the existing SharePoint label model.
- Worldwide (standard multi-tenant). Government cloud dates not published.
- Depends on sensitivity labels being enabled for Office files in SharePoint and OneDrive for the broadest coverage.

## Governance guidance

**Before rollout**
- Export your sensitivity label configuration and record, per label, whether encryption is applied and whether EXTRACT is granted.
- Decide which labels should remain inaccessible to agents and confirm they omit EXTRACT or are covered by a DLP policy at the Microsoft 365 Copilot location.
- Confirm sensitivity labels are enabled for SharePoint and OneDrive files.

**At rollout**
- Communicate to users that labelled files can be used with agents and what to expect when a label blocks processing.
- Update maker guidance: agents that handle labelled content should not combine it with external write tools without approval gating.

**After rollout**
- Monitor Purview DSPM for AI activity for labelled content flowing through agents.
- Review label inheritance on agent-generated content (Word, PowerPoint outputs).
- Revisit the label taxonomy annually against agent usage patterns.

## Governance controls

<p class="controls__lead">Where each control lives. The left column says what the setting decides and how far it reaches; the middle gives the admin centre and the exact path; the right gives the script, API or command that does the same. <em>Not yet documented</em> means Microsoft has not published a control for that surface, so there is nothing to configure yet.</p>

<table class="controls">
<thead><tr><th>Control</th><th>Admin UI</th><th>API and automation</th></tr></thead>
<tbody>
<tr><td data-label="Control"><strong>Sensitivity labels on SharePoint and OneDrive files (prerequisite)</strong><br><small>Tenant</small></td><td data-label="Admin UI"><strong>Microsoft Purview portal</strong><br>Solutions › Information Protection › Sensitivity labels › Turn on now <a href="https://learn.microsoft.com/purview/sensitivity-labels-sharepoint-onedrive-files#how-to-enable-sensitivity-labels-for-sharepoint-and-onedrive-opt-in" rel="noopener" class="controls__docs">Learn</a></td><td data-label="API and automation"><strong>PowerShell</strong><br><code>Set-SPOTenant -EnableAIPIntegration $true</code> <a href="https://learn.microsoft.com/purview/sensitivity-labels-sharepoint-onedrive-files#how-to-enable-sensitivity-labels-for-sharepoint-and-onedrive-opt-in" rel="noopener" class="controls__docs">Learn</a></td></tr>
<tr><td data-label="Control"><strong>Which labelled content Copilot and agents may process</strong><br><small>Tenant</small></td><td data-label="Admin UI"><strong>Microsoft Purview portal</strong><br>Data Loss Prevention › Policies › + Create policy › Custom › location Microsoft Copilot, Copilot Chat, and Copilot Cowork <a href="https://learn.microsoft.com/purview/dlp-microsoft365-copilot-location-learn-about" rel="noopener" class="controls__docs">Learn</a></td><td data-label="API and automation"><strong>PowerShell</strong><br><code>New-DlpCompliancePolicy -Name &lt;name&gt; -Locations &lt;location&gt; -EnforcementPlanes @('CopilotExperiences'); New-DlpComplianceRule -RestrictAccess</code> <a href="https://learn.microsoft.com/powershell/module/exchangepowershell/new-dlpcompliancepolicy?view=exchange-ps" rel="noopener" class="controls__docs">Learn</a></td></tr>
<tr><td data-label="Control"><strong>Copilot Studio-side switch for labelled files</strong><br><small>Agent</small><br><small class="controls__note">Labels are honoured automatically according to the label's EXTRACT right; there is nothing for a maker or admin to turn on.</small></td><td data-label="Admin UI"><em class="controls__gap">Not yet documented</em></td><td data-label="API and automation"><em class="controls__gap">Not yet documented</em></td></tr>
</tbody>
</table>

Enforcement happens in Purview, not in Copilot Studio. The DLP policy restricts agents by label at the Copilot location; the Purview [Copilot Studio coverage page](https://learn.microsoft.com/purview/ai-copilot-studio#capabilities-supported) lists which channels and knowledge sources this applies to. Creating DLP policies needs a Purview compliance role such as Purview Data Security AI Administrator. DSPM for AI records the interactions but is a reporting surface, not a control.

## Open questions

- Whether the feature extends to other Copilot Studio channels (web, custom) and to file types beyond Office documents and PDF.
- How label inheritance applies to agent outputs delivered through tools rather than as documents.
- Government cloud timelines.

<!-- rationale
risk: Medium. Labelled content enters agent conversations; protection is only as good as each label's usage rights and the DLP scope.
cost: None. Uses existing Purview entitlements.
impact: Medium. Users of agents on the Microsoft 365 channel notice; compliance teams need to re-check label configuration.
-->
