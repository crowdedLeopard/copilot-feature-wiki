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
verification:
  status: "needs-correction"
  date: "2026-11-16"
  version: 2
  model: "gpt-6.1-sol"
  engine: "copilot"
  claims: 51
  confirmed: 35
  unconfirmed: 6
  contradicted: 10
  attempts: 1
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

<!-- verifier-findings (2026-11-16, needs-correction; checked by gpt-6.1-sol)
The independent check found these statements unsupported or contradicted. Fix every one in the next rewrite:
- [supported, minor] title; summary; What's changing; Scope / availability: Copilot Studio's Microsoft 365 and Teams channel configuration makes agents available in Microsoft Copilot and Teams. | Found: After you publish your agent at least once, you can connect it to the Microsoft 365 and Microsoft Teams channels so users can chat with it in both Teams and Microsoft Copilot. | Fix: Add https://learn.microsoft.com/microsoft-copilot-studio/publication-add-bot-to-microsoft-teams to sources for the channel-to-client mapping. | Source: https://learn.microsoft.com/microsoft-copilot-studio/publication-add-bot-to-microsoft-teams
- [supported, minor] What's changing: existing upload block / behaviour: Existing Copilot Studio file input blocks encrypted files. | Found: Files with encryption, such as sensitivity labels or password protection, aren't supported. | Fix: Cite https://learn.microsoft.com/microsoft-copilot-studio/image-input-analysis for the existing encrypted-file limitation and distinguish that documentation from the roadmap's planned support. | Source: https://learn.microsoft.com/microsoft-copilot-studio/image-input-analysis
- [unsupported, blocker] What's changing: follows the model; controls[2].note; Governance guidance / applicability: The new conversational-upload feature follows the existing SharePoint knowledge-source protection model in all the detailed ways described. | Found: Searched: Copilot Studio support sensitive documents protected MPIP labelled encrypted upload roadmap 571305; Copilot Studio sensitivity file protection API. Opened ai-copilot-studio, ai-m365-copilot-considerations and image-input-analysis. | Fix: Label the EXTRACT, response-label and inheritance discussion as existing Copilot/SharePoint knowledge-source behaviour. Say Microsoft has not yet documented whether every detail carries over to the planned conversational uploads; do not present that transfer as confirmed.
- [contradicted, blocker] Why it matters; Governance guidance: Before rollout / applicability: Configuring a label without EXTRACT is sufficient to stop agents from accessing that label's content for every user. | Found: The person applying the encryption always has the EXTRACT usage right, because they are the Rights Management owner. | Fix: Say the user's effective rights determine access, not merely the label template: the person applying encryption is the Rights Management owner and retains EXTRACT, and Full control also includes EXTRACT. Do not promise that omitting EXTRACT in label configuration blocks every user. | Source: https://learn.microsoft.com/purview/ai-m365-copilot-considerations
- [contradicted, blocker] Why it matters / behaviour: Labels that apply markings but no encryption do not restrict processing at all. | Found: You can further prevent Copilot and agents from summarizing labeled files and emails (whether encrypted or not) that are identified by a Microsoft Purview Data Loss Protection policy. | Fix: Replace with: 'Markings alone do not impose encryption usage rights; however, label-based DLP can restrict processing of labelled content even when it is not encrypted, within its documented coverage.' Keep the direct-upload coverage limitation explicit. | Source: https://learn.microsoft.com/purview/ai-m365-copilot-considerations
- [unsupported, major] Risk assessment: Data exposure / behaviour: Uploaded labelled content reaches whatever knowledge sources and tools the agent uses in that turn. | Found: Searched: Copilot Studio sensitivity labelled content external tools maker credentials. Opened ai-copilot-studio and guidance/pass-files-to-connectors; the latter documents explicitly configured file inputs, not automatic transmission to every source and tool. | Fix: Remove the assertion of automatic propagation. Replace it with advice to inspect which configured tool inputs receive uploaded files or extracted text; Microsoft's file-passing guidance requires explicit configuration and does not say knowledge sources receive the upload.
- [supported, minor] Risk assessment: Data exposure and Autonomy & actions; Governance guidance: At rollout / behaviour: Configured agent tools and flows can pass user-uploaded file data to downstream services. | Found: Optionally, you can add logic in your flow to send this file to SharePoint, ServiceNow, Dynamics 365 Customer Service, and similar services. | Fix: Cite https://learn.microsoft.com/microsoft-copilot-studio/guidance/pass-files-to-connectors for the general tool-egress risk and retain it as analysis, not a confirmed description of label-encrypted upload handling. | Source: https://learn.microsoft.com/microsoft-copilot-studio/guidance/pass-files-to-connectors
- [contradicted, blocker] Risk assessment: Data exposure / behaviour: Labels configured with user-defined permissions always block agent access to unopened files. | Found: There are two exceptions: the label is a default sensitivity label that extends SharePoint permissions to downloaded documents, or the user references the document directly by typing "/". | Fix: Limit this statement to labelled and encrypted unopened SharePoint/OneDrive documents, and include both documented exceptions: default labels extending SharePoint permissions and direct '/' references, each requiring EXTRACT. Do not apply this at-rest limitation indiscriminately to uploaded files. | Source: https://learn.microsoft.com/copilot/plan/architecture-data-protection-auditing
- [supported, minor] Risk assessment: Security & identity / behaviour: Agents can use maker-provided tool credentials, introducing access beyond the end user's permissions. | Found: When someone uses the agent, the agent uses the maker's credentials, not the end user's credentials, to authenticate with connected services. | Fix: Add https://learn.microsoft.com/microsoft-copilot-studio/configure-no-maker-authentication to sources for the maker-credential risk and governance recommendation. | Source: https://learn.microsoft.com/microsoft-copilot-studio/configure-no-maker-authentication
- [contradicted, blocker] controls[1].governs; Risk assessment: Change & support; Governance guidance: Before rollout; Governance controls / applicability: A DLP policy at the Copilot location is a confirmed control over the labelled conversational uploads covered by this feature. | Found: DLP can't scan the contents of files that you upload directly into prompts, so evaluation of the uploaded file for sensitive data doesn't occur. DLP only checks the text you type into the prompt itself. | Fix: Qualify this as an existing SharePoint knowledge-source control, not confirmed protection for the new uploads. The cited ai-copilot-studio page limits agent label-based DLP coverage to SharePoint knowledge sources; the DLP page separately states the direct-upload limitation. State that coverage of the planned upload feature is not yet documented. | Source: https://learn.microsoft.com/purview/dlp-microsoft365-copilot-location-learn-about
- [unsupported, blocker] front matter: licensing.model and notes; Cost and licensing; rationale: cost / licensing: The new labelled-file upload capability is included in licences already held and requires no additional licence. | Found: Searched: Copilot Studio sensitivity upload license; Copilot Studio sensitivity labelled files no additional license billing consumption. Read ai-copilot-studio, Purview service description and billing-licensing/faq-billing-licensing excerpts; no feature-specific inclusion statement. | Fix: Set licensing.model to 'unknown' and replace 'No new licence' and 'No additional licence for the feature' with 'Feature-specific licensing has not yet been published.' Separate general Purview prerequisites and Copilot Studio billing from any incremental price or licence for this roadmap item.
- [supported, minor] front matter: licensing.notes; Cost and licensing / licensing: Microsoft 365 E3 includes manual sensitivity labelling. | Found: Microsoft 365 E5/A5/G5/E3/A3/G3/F1/F3/Business Premium
| Manual Sensitivity Labeling | Included | Included | Included | Included | Included | | Fix: Cite the Microsoft Purview service description's sensitivity-labelling feature matrix for the E3 manual-labelling statement. Do not use this general entitlement as proof that the new upload feature is included. | Source: https://learn.microsoft.com/office365/servicedescriptions/microsoft-365-service-descriptions/microsoft-365-tenantlevel-services-licensing-guidance/microsoft-purview-service-description
- [supported, minor] Cost and licensing / licensing: Microsoft 365 E5 includes automatic sensitivity labelling. | Found: You have E3 or Business Premium. Auto-labeling of files and emails isn't included at this SKU. Sensitivity labels and manual labeling are — auto-labeling requires an E5 / P2-tier add-on. | Fix: Cite https://learn.microsoft.com/purview/apply-sensitivity-label-automatically and the Purview service-description feature matrix. Make clear that auto-labelling entitlements are background licensing information, not a prerequisite established for this upload feature. | Source: https://learn.microsoft.com/purview/apply-sensitivity-label-automatically
- [contradicted, blocker] front matter: cost; rationale: cost / consistency: A cost rating of none is justified because the feature uses existing Purview entitlements. | Found: Briefing: 'cost: "none"' and 'None. Uses existing Purview entitlements.' Standard: 'none: included in licences already held, and the record or a Microsoft page says so.' No verified source states this feature is included. | Fix: Change cost to 'low' for the known review and communication effort, and change the rationale to 'Low. Label and DLP review takes administrator time; feature-specific licensing has not yet been published.' Do not infer free use or a new meter from general product licensing.
- [unsupported, blocker] front matter: defaultState / default: The labelled-file upload change is on by default. | Found: Searched: Copilot Studio sensitivity upload default; Copilot Studio upload sensitivity labeled encrypted files M365 channel enable default license additional cost. Read ai-copilot-studio and image-input-analysis; no statement of this change's default. | Fix: Set defaultState to 'unknown' and say the feature's rollout default is not stated. Do not substitute the existing maker File uploads setting or general sensitivity-label behaviour for evidence about this change's default.
- [contradicted, blocker] controls[1].ui; Governance controls table / admin-path: The DLP creation path goes directly from Custom to the Microsoft Copilot, Copilot Chat, and Copilot Cowork location. | Found: Select the Custom template, then Custom policy.
4. On the Locations page, set the Microsoft Copilot, Copilot Chat, and Copilot Cowork location to on. | Fix: Replace the path with 'Data Loss Prevention > Policies > + Create policy > Custom > Custom policy > Locations > Microsoft Copilot, Copilot Chat, and Copilot Cowork'. Add the documented sensitivity-label condition and processing action in accompanying guidance; qualify the row's coverage as described in the applicability finding. | Source: https://learn.microsoft.com/purview/dlp-microsoft365-copilot-location-learn-about
- [contradicted, blocker] controls[1].api; Governance controls table / command: The displayed New-DlpCompliancePolicy call followed by New-DlpComplianceRule -RestrictAccess creates the equivalent label-based Copilot restriction. | Found: New-DLPComplianceRule -Name "Copilot Rule" -Policy "Copilot Policy" -AdvancedRule $advrule -RestrictAccess @(@{setting="ExcludeContentProcessing";value="Block"}) | Fix: Use the complete Example 4 pattern: define the Copilot Locations JSON and a label-GUID AdvancedRule, create the named policy, then call New-DlpComplianceRule -Name <rule-name> -Policy <policy-name> -AdvancedRule $advRule -RestrictAccess @(@{setting='ExcludeContentProcessing';value='Block'}). RestrictAccess takes a hashtable array, not a bare switch; Name and Policy are required by the rule reference. Explain the required variables rather than displaying an incomplete runnable-looking equivalent. | Source: https://learn.microsoft.com/powershell/module/exchangepowershell/new-dlpcompliancepolicy?view=exchange-ps
- [unsupported, blocker] controls[2].note; Governance controls table / default: The planned labelled-file support honours labels automatically, with nothing additional for a maker or administrator to turn on. | Found: Searched: Copilot Studio labelled file uploads sensitivity labels enforcement Purview Copilot Studio switch automatic. Read ai-copilot-studio and image-input-analysis; neither states the planned change is automatic or needs no additional configuration. | Fix: Replace the note with 'No separate switch for this planned labelled-file support is documented. Existing standard-harness file uploads have a maker setting under Settings > Generative AI > File processing capabilities > File uploads; Microsoft has not stated how the new support interacts with it.' Cite the file-input page and avoid claiming that absence of a special switch establishes automatic enablement.
- [unsupported, blocker] Governance controls: Enforcement happens in Purview, not in Copilot Studio / applicability: Enforcement for this planned upload feature happens exclusively in Purview rather than Copilot Studio. | Found: Searched: Copilot Studio labelled file uploads sensitivity labels enforcement Purview Copilot Studio switch automatic. Read ai-copilot-studio, architecture-data-protection-auditing and image-input-analysis; no exclusive enforcement boundary is stated. | Fix: Replace with 'Purview configures the documented label and DLP policies; feature-specific enforcement details for the planned labelled uploads have not yet been published.' Remove the assertion that Copilot Studio has no enforcement role.
- [contradicted, blocker] Governance controls: role requirement / role: Purview Data Security AI Administrator is a documented role name for creating the Copilot DLP policy. | Found: Purview Data Security AI Admin - Role for editing Data Loss Prevention policies related to Copilot and viewing AI content in Data Security Posture Management. | Fix: Use the documented role name 'Purview Data Security AI Admin', or another role or role group listed in the cited Permissions section; do not rename it to 'Purview Data Security AI Administrator'. | Source: https://learn.microsoft.com/purview/dlp-microsoft365-copilot-location-learn-about
- [supported, minor] What's changing; Scope: existing SharePoint knowledge-source model / behaviour: Copilot Studio SharePoint knowledge sources already support sensitivity-label protections and label-based encryption. | Found: Encryption is supported only with sensitivity labels, and only for the SharePoint knowledge source. | Fix: Report the documentation disagreement: https://learn.microsoft.com/troubleshoot/power-platform/copilot-studio/knowledge/sharepoint-no-response says the agent-level SharePoint source cannot extract or ground on files encrypted by sensitivity labels. Retain the cited Purview statement with this qualification rather than implying universal existing support. | Source: https://learn.microsoft.com/purview/ai-copilot-studio
- [contradicted, minor] Governance guidance: Before rollout; Governance controls table / consistency: The controls table includes the label-encryption and EXTRACT configuration that the checklist tells administrators to review. | Found: Checklist: 'record, per label, whether encryption is applied and whether EXTRACT is granted.' Table: only SharePoint/OneDrive enablement, Copilot DLP, and the absent Studio-specific switch. | Fix: Add a row for sensitivity-label encryption permissions, including effective EXTRACT rights, using the documented Purview configuration and its automation reference. Distinguish this existing control from unconfirmed applicability details of the new uploads.
- [contradicted, minor] Governance guidance: After rollout; Governance controls table / consistency: The controls table includes the DSPM for AI monitoring surface that the checklist tells administrators to use. | Found: Checklist: 'Monitor Purview DSPM for AI activity for labelled content flowing through agents.' No monitoring or activity-explorer row appears in controls. | Fix: Add a Copilot Studio interaction-monitoring row sourced to https://learn.microsoft.com/purview/ai-copilot-studio, whose getting-started instructions lead through DSPM for AI (classic) reports to activity explorer. Record an API side only after checking its own documentation.
-->
