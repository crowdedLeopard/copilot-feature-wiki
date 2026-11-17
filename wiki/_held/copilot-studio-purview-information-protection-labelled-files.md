---
title: "Copilot Studio: labelled and encrypted file uploads for agents on the Microsoft 365 channel"
slug: "copilot-studio-purview-information-protection-labelled-files"
roadmapId: 571305
topic: "copilot-studio"
products: ["Microsoft Copilot Studio"]
summary: "Microsoft plans to let users upload Purview-labelled files to Copilot Studio agents on the Microsoft 365 channel, which Learn lists as unsupported today. Status is In development; licensing and default are not stated."
status: "in-development"
releasePhase: ["General Availability","Preview"]
clouds: ["Worldwide (Standard Multi-Tenant)"]
platforms: ["Web"]
targetDate: "October CY2026"
previewDate: "October CY2026"
risk: "medium"
cost: "low"
impact: "medium"
defaultState: "unknown"
action: "review"
licensing:
  model: "unknown"
  notes: "Not yet published. The roadmap item and the Learn pages read for this briefing state no licence or meter for labelled-file uploads."
audiences: ["compliance","security","power-platform-admin","maker"]
tags: ["copilot-studio","sensitivity-labels","purview","information-protection","file-upload","encryption","extract-usage-right","dlp","channels"]
sources:
  - title: "Microsoft 365 Roadmap 571305"
    url: "https://www.microsoft.com/microsoft-365/roadmap?id=571305"
    kind: "roadmap"
  - title: "Allow file input from users"
    url: "https://learn.microsoft.com/microsoft-copilot-studio/image-input-analysis"
    kind: "learn"
  - title: "Use Microsoft Purview to manage data security & compliance for Microsoft Copilot Studio"
    url: "https://learn.microsoft.com/purview/ai-copilot-studio"
    kind: "learn"
  - title: "Considerations to manage Microsoft 365 Copilot and Channel Agent in Teams for security and compliance"
    url: "https://learn.microsoft.com/purview/ai-m365-copilot-considerations"
    kind: "learn"
  - title: "SharePoint knowledge sources don't return results in Copilot Studio"
    url: "https://learn.microsoft.com/troubleshoot/power-platform/copilot-studio/knowledge/sharepoint-no-response"
    kind: "learn"
  - title: "Connect and configure an agent for Teams and Microsoft 365"
    url: "https://learn.microsoft.com/microsoft-copilot-studio/publication-add-bot-to-microsoft-teams"
    kind: "learn"
  - title: "Pass files to agent flows, connectors, and tools"
    url: "https://learn.microsoft.com/microsoft-copilot-studio/guidance/pass-files-to-connectors"
    kind: "learn"
  - title: "Learn about using Microsoft Purview Data Loss Prevention to protect interactions with Microsoft 365 Copilot, Copilot Chat, and Cowork"
    url: "https://learn.microsoft.com/purview/dlp-microsoft365-copilot-location-learn-about"
    kind: "learn"
  - title: "New-DlpCompliancePolicy"
    url: "https://learn.microsoft.com/powershell/module/exchangepowershell/new-dlpcompliancepolicy?view=exchange-ps"
    kind: "learn"
  - title: "Restrict access to content by using sensitivity labels to apply encryption"
    url: "https://learn.microsoft.com/purview/encryption-sensitivity-labels"
    kind: "learn"
  - title: "Set-Label"
    url: "https://learn.microsoft.com/powershell/module/exchangepowershell/set-label?view=exchange-ps"
    kind: "learn"
  - title: "Enable sensitivity labels for files in SharePoint and OneDrive"
    url: "https://learn.microsoft.com/purview/sensitivity-labels-sharepoint-onedrive-files"
    kind: "learn"
videos: []
related: ["agent-identity","purview-dlp-block-sensitive-data-in-copilot-web-search","microsoft-purview-dspm-copilot-readiness-and-data-explorer"]
controls:
  - governs: "Separate tenant or agent switch for labelled-file uploads"
    scope: "agent"
    ui: null
    api: null
    note: "Microsoft Learn documents no such switch at the time of writing (November 2026). Existing file input is the File uploads setting below."
  - governs: "Whether users can upload files to an agent (existing file-input setting)"
    scope: "agent"
    ui:
      surface: "Copilot Studio (maker)"
      path: "Settings > Generative AI > File processing capabilities > File uploads"
      docs: "https://learn.microsoft.com/microsoft-copilot-studio/image-input-analysis"
    api: null
    note: "Maker-side; documented for file input today. Microsoft has not said how labelled-file support interacts with it."
  - governs: "Which labelled content Copilot and agents may process (label-based DLP)"
    scope: "tenant"
    ui:
      surface: "Microsoft Purview portal"
      path: "Data Loss Prevention > Policies > + Create policy > Custom > Custom policy > Locations > Microsoft Copilot, Copilot Chat, and Copilot Cowork"
      docs: "https://learn.microsoft.com/purview/dlp-microsoft365-copilot-location-learn-about"
    api:
      kind: "powershell"
      call: "New-DLPCompliancePolicy -Name <name> -Locations $loc -EnforcementPlanes @('CopilotExperiences'); New-DLPComplianceRule -Name <rule> -Policy <name> -AdvancedRule $advrule -RestrictAccess @(@{setting='ExcludeContentProcessing';value='Block'})"
      docs: "https://learn.microsoft.com/powershell/module/exchangepowershell/new-dlpcompliancepolicy?view=exchange-ps"
    note: "General control: documented for agents only with a SharePoint knowledge source; coverage of uploads not confirmed. Define $loc and $advrule first, as in the Learn Copilot example. Rule condition: Content contains > Sensitivity labels."
  - governs: "Encryption permissions, including EXTRACT, that each sensitivity label grants"
    scope: "tenant"
    ui:
      surface: "Microsoft Purview portal"
      path: "create or edit a sensitivity label > Access control > Configure access control settings > Assign permissions now"
      docs: "https://learn.microsoft.com/purview/encryption-sensitivity-labels"
    api:
      kind: "powershell"
      call: "Set-Label -Identity <label> -EncryptionRightsDefinitions <rights>"
      docs: "https://learn.microsoft.com/powershell/module/exchangepowershell/set-label?view=exchange-ps"
    note: "Existing control. EXTRACT shows as Copy and extract content(EXTRACT); the person who applied the encryption always keeps it."
  - governs: "Sensitivity labels for SharePoint and OneDrive files (prerequisite for labelled content there)"
    scope: "tenant"
    ui:
      surface: "Microsoft Purview portal"
      path: "Solutions > Information Protection > Sensitivity labels > Turn on now"
      docs: "https://learn.microsoft.com/purview/sensitivity-labels-sharepoint-onedrive-files"
    api:
      kind: "powershell"
      call: "Set-SPOTenant -EnableAIPIntegration $true"
      docs: "https://learn.microsoft.com/purview/sensitivity-labels-sharepoint-onedrive-files"
    note: "Portal route needs a global administrator; Multi-Geo tenants must use PowerShell. Applies to files stored in SharePoint and OneDrive, not confirmed for uploads."
  - governs: "Monitoring of Copilot Studio agent interactions involving sensitive content"
    scope: "tenant"
    ui:
      surface: "Microsoft Purview portal"
      path: "Solutions > DSPM for AI (classic) > Reports > Copilot experiences & agents"
      docs: "https://learn.microsoft.com/purview/ai-copilot-studio"
    api: null
    note: "Reporting only, not enforcement. Results appear at least a day after the policy is created."
confidence: "medium"
created: "2026-11-13"
updated: "2026-11-17"
roadmapModified: "2026-10-19T23:15:15"
changes:
  - date: "2026-11-13"
    note: "Initial briefing"
  - date: "2026-11-16"
    note: "Added governance controls: admin UI paths and API equivalents, sourced to Microsoft Learn"
  - date: "2026-11-16"
    note: "Corrected after verification: default and licensing now Not stated/Not yet published, cost rated low, DLP and EXTRACT claims qualified, and controls rebuilt from Learn."
  - date: "2026-11-17"
    note: "Corrected after verification: DLP PowerShell call now includes the required -Name parameters, harness wording and rollout-default sentence narrowed, EXTRACT checklist item aligned with the risk section, action set to review."
  - date: "2026-11-17"
    note: "Checked against Microsoft Learn by gpt-6.1-sol: held: 5 of 62 statements contradicted, 1 unconfirmed; taken offline until corrected"
version: 4
verification:
  status: "held"
  date: "2026-11-17"
  version: 4
  model: "gpt-6.1-sol"
  engine: "copilot"
  claims: 62
  confirmed: 56
  unconfirmed: 1
  contradicted: 5
  attempts: 3
  hash: "baeb275c46bfa26e6f0781cde81520f4"
---

## What's changing

The roadmap item states that Microsoft plans to let users upload files protected by Microsoft Purview Information Protection (MPIP) sensitivity labels to Copilot Studio agents deployed on the Microsoft 365 channel. It says agents can process content "based on the user's/agents account permissions, with label protections enforced end-to-end". Microsoft Learn has no page for this feature at the time of writing (November 2026), so everything about how it behaves, beyond the roadmap text, is not yet documented.

Today's documented behaviour is the opposite. The Copilot Studio file-input page says "Files with encryption, such as sensitivity labels or password protection, aren't supported", and that the agent tells the user the file is encrypted or returns a generic error. That page describes agents on the standard harness (a Copilot Studio agent runtime) and points users to Microsoft Copilot Chat for labelled files. The Microsoft 365 and Microsoft Teams channels are how an agent reaches users in Teams and Microsoft Copilot.

Related Purview behaviour for Microsoft 365 Copilot and agents is documented, but Microsoft has not said it carries over to uploads. When a label applies encryption, users need the EXTRACT usage right as well as VIEW for the AI apps to return the data. Two Microsoft pages differ on Copilot Studio knowledge sources: the Purview page says encryption is supported "only for the SharePoint knowledge source", while the SharePoint knowledge-source troubleshooting page says the agent "can't extract or ground on content whose protection encrypts the file".

The roadmap record lists the status as In development, with both Preview and General Availability targeted for October CY2026, Worldwide (Standard Multi-Tenant), Web. That month has passed and the status has not moved, so treat the date as a target that may slip.

## Why it matters

If this ships as described, labelled content that users cannot bring to an agent today becomes usable, so the protection you set on a label now has to hold inside an agent conversation. If labelled-file support becomes available without an additional opt-in, administrators relying on the current block could lose it; Microsoft has not stated the rollout default.

Plan on label design, not on a switch. Microsoft's Copilot guidance ties access to the user's effective EXTRACT right, which is not always the label template: the person who applied encryption is the Rights Management owner and always has EXTRACT. Decide now which labels should stay out of agents, and which Purview control you would use to enforce that, because Microsoft has not documented one for uploads.

## Risk assessment

**Data exposure**
- Labelled and encrypted content would reach the agent's model under the user's permissions. Microsoft has not documented whether uploads are checked for EXTRACT; for Copilot generally, EXTRACT decides whether text can be shown from encrypted content.
- Omitting EXTRACT from a label does not block everyone: the user who applied the encryption keeps it as Rights Management owner, and Full control (OWNER) includes it.
- Maker-built flows and tools can pass an uploaded file to downstream services such as SharePoint or ServiceNow. Check which tool inputs on your agents receive uploaded files, because Microsoft documents no label check at that hand-off.

**Security & identity**
- The roadmap says processing follows "the user's/agents account permissions". The identity model for uploads is not yet documented; see the agent identity concept at /concepts/agent-identity/.

**Autonomy & actions**
- The feature itself takes no action; the risk comes from write-capable tools on the same agent, covered in the first group.

**Change & support**
- Users may expect every labelled file to work. Labels with user-defined permissions have documented limits for unopened SharePoint and OneDrive files, with two exceptions (default labels that extend SharePoint permissions, and files referenced by typing "/", both needing EXTRACT).
- Purview label-based DLP at the Microsoft 365 Copilot location is documented for agents only when the knowledge source is SharePoint. The DLP page says files uploaded directly into prompts for Microsoft 365 Copilot are not scanned. Coverage of agent uploads is not yet documented.

## Cost and licensing

Licensing for labelled-file uploads is not yet published. The roadmap item names no licence or meter, and the Copilot Studio file-input page lists no licence for file input. Do not budget on an assumption that uploads are free or metered until Microsoft says.

The known costs are indirect: compliance time to review label encryption settings and DLP scope, and maker time to retest agents that accept uploads. Label encryption and Purview DLP carry their own Microsoft 365 licensing, which the Purview pages direct you to the Microsoft 365 service descriptions for; whether this feature adds to it is not stated.

## Scope

- **Agents:** Copilot Studio agents deployed on the Microsoft 365 channel, per the roadmap. Other channels are not mentioned in the roadmap text.
- **Clouds and platforms:** Worldwide (Standard Multi-Tenant) and Web, per the roadmap record. No government cloud is listed on the item.
- **Rollout:** In development; Preview and General Availability both targeted for October CY2026. No Message Center post was supplied for this item.
- **Prerequisites:** Not yet documented. For labelled SharePoint and OneDrive content, Purview advises enabling sensitivity labels for those services; without that, the encrypted files Copilot and agents can access are limited to data in use from Office apps on Windows.
- **Existing file-input setting:** makers turn on file uploads per agent. Microsoft has not said how this feature interacts with it.

## Governance guidance

### Before rollout
- Record, for each sensitivity label, whether it applies encryption and whether the permissions include EXTRACT, and note labels that use user-defined permissions.
- Decide which labels must never be processed by agents, and build or review a label-based Copilot DLP policy for them, knowing its documented coverage is SharePoint knowledge sources.
- Confirm sensitivity labels are enabled for SharePoint and OneDrive, run by a global administrator.
- List agents on the Microsoft 365 channel with File uploads turned on, and which tools or flows receive uploaded files.

### At rollout
- Tell makers and users which labelled files agents may accept and which effective permissions determine the result, once Microsoft documents the upload-specific checks.
- Test a labelled upload with an agent in a non-production environment and record what the agent returns before widening use.

### After rollout
- Review Copilot experiences and agents reports in DSPM for AI (classic) for sensitive interactions.
- Recheck the Learn pages and Message center for documentation of this feature and revisit the DLP scope when it appears.

## Governance controls

<p class="controls__lead">Where each control lives. The left column says what the setting decides and how far it reaches; the middle gives the admin centre and the exact path; the right gives the script, API or command that does the same. <em>Not yet documented</em> means Microsoft has not published a control for that surface, so there is nothing to configure yet.</p>

<table class="controls">
<thead><tr><th>Control</th><th>Admin UI</th><th>API and automation</th></tr></thead>
<tbody>
<tr><td data-label="Control"><strong>Separate tenant or agent switch for labelled-file uploads</strong><br><small>Agent</small><br><small class="controls__note">Microsoft Learn documents no such switch at the time of writing (November 2026). Existing file input is the File uploads setting below.</small></td><td data-label="Admin UI"><em class="controls__gap">Not yet documented</em></td><td data-label="API and automation"><em class="controls__gap">Not yet documented</em></td></tr>
<tr><td data-label="Control"><strong>Whether users can upload files to an agent (existing file-input setting)</strong><br><small>Agent</small><br><small class="controls__note">Maker-side; documented for file input today. Microsoft has not said how labelled-file support interacts with it.</small></td><td data-label="Admin UI"><strong>Copilot Studio (maker)</strong><br>Settings › Generative AI › File processing capabilities › File uploads <a href="https://learn.microsoft.com/microsoft-copilot-studio/image-input-analysis" rel="noopener" class="controls__docs">Learn</a></td><td data-label="API and automation"><em class="controls__gap">Not yet documented</em></td></tr>
<tr><td data-label="Control"><strong>Which labelled content Copilot and agents may process (label-based DLP)</strong><br><small>Tenant</small><br><small class="controls__note">General control: documented for agents only with a SharePoint knowledge source; coverage of uploads not confirmed. Define $loc and $advrule first, as in the Learn Copilot example. Rule condition: Content contains &gt; Sensitivity labels.</small></td><td data-label="Admin UI"><strong>Microsoft Purview portal</strong><br>Data Loss Prevention › Policies › + Create policy › Custom › Custom policy › Locations › Microsoft Copilot, Copilot Chat, and Copilot Cowork <a href="https://learn.microsoft.com/purview/dlp-microsoft365-copilot-location-learn-about" rel="noopener" class="controls__docs">Learn</a></td><td data-label="API and automation"><strong>PowerShell</strong><br><code>New-DLPCompliancePolicy -Name &lt;name&gt; -Locations $loc -EnforcementPlanes @('CopilotExperiences'); New-DLPComplianceRule -Name &lt;rule&gt; -Policy &lt;name&gt; -AdvancedRule $advrule -RestrictAccess @(@{setting='ExcludeContentProcessing';value='Block'})</code> <a href="https://learn.microsoft.com/powershell/module/exchangepowershell/new-dlpcompliancepolicy?view=exchange-ps" rel="noopener" class="controls__docs">Learn</a></td></tr>
<tr><td data-label="Control"><strong>Encryption permissions, including EXTRACT, that each sensitivity label grants</strong><br><small>Tenant</small><br><small class="controls__note">Existing control. EXTRACT shows as Copy and extract content(EXTRACT); the person who applied the encryption always keeps it.</small></td><td data-label="Admin UI"><strong>Microsoft Purview portal</strong><br>create or edit a sensitivity label › Access control › Configure access control settings › Assign permissions now <a href="https://learn.microsoft.com/purview/encryption-sensitivity-labels" rel="noopener" class="controls__docs">Learn</a></td><td data-label="API and automation"><strong>PowerShell</strong><br><code>Set-Label -Identity &lt;label&gt; -EncryptionRightsDefinitions &lt;rights&gt;</code> <a href="https://learn.microsoft.com/powershell/module/exchangepowershell/set-label?view=exchange-ps" rel="noopener" class="controls__docs">Learn</a></td></tr>
<tr><td data-label="Control"><strong>Sensitivity labels for SharePoint and OneDrive files (prerequisite for labelled content there)</strong><br><small>Tenant</small><br><small class="controls__note">Portal route needs a global administrator; Multi-Geo tenants must use PowerShell. Applies to files stored in SharePoint and OneDrive, not confirmed for uploads.</small></td><td data-label="Admin UI"><strong>Microsoft Purview portal</strong><br>Solutions › Information Protection › Sensitivity labels › Turn on now <a href="https://learn.microsoft.com/purview/sensitivity-labels-sharepoint-onedrive-files" rel="noopener" class="controls__docs">Learn</a></td><td data-label="API and automation"><strong>PowerShell</strong><br><code>Set-SPOTenant -EnableAIPIntegration $true</code> <a href="https://learn.microsoft.com/purview/sensitivity-labels-sharepoint-onedrive-files" rel="noopener" class="controls__docs">Learn</a></td></tr>
<tr><td data-label="Control"><strong>Monitoring of Copilot Studio agent interactions involving sensitive content</strong><br><small>Tenant</small><br><small class="controls__note">Reporting only, not enforcement. Results appear at least a day after the policy is created.</small></td><td data-label="Admin UI"><strong>Microsoft Purview portal</strong><br>Solutions › DSPM for AI (classic) › Reports › Copilot experiences &amp; agents <a href="https://learn.microsoft.com/purview/ai-copilot-studio" rel="noopener" class="controls__docs">Learn</a></td><td data-label="API and automation"><em class="controls__gap">Not yet documented</em></td></tr>
</tbody>
</table>

Everything in the table except the two gap rows is an existing Purview or Copilot Studio control. Microsoft has not confirmed that any of them governs the planned labelled uploads; the DLP page states that DLP does not scan the contents of files uploaded directly into prompts for Microsoft 365 Copilot, and Copilot Studio agent DLP coverage is documented only for SharePoint knowledge sources.

The Learn page for the DLP location lists the Purview Data Security AI Admin role, among others, as able to create or edit these policies. Enabling sensitivity labels for SharePoint and OneDrive needs a global administrator when done in the portal. The maker setting File uploads is per agent and governs existing file input only.

## Open questions

- Will labelled uploads be checked for the EXTRACT right, and does Learn's SharePoint knowledge-source model carry over to uploaded files? Watch the Copilot Studio file-input page.
- Does label-based Copilot DLP cover files uploaded to agents on the Microsoft 365 channel? Watch the Purview DLP location page.
- Is the feature on by default, or does it depend on the maker's File uploads setting? Watch Message center.
- Is any licence, Copilot Credits charge or other meter attached? Watch the Copilot Studio licensing pages.

<!-- rationale
risk: Medium. Labelled and encrypted content would enter agent conversations, and the Purview DLP control documented for agents covers SharePoint knowledge sources, not direct uploads; the feature's own enforcement details are not yet documented.
cost: Low. The only cost the sources show is administrator and maker time to review labels, DLP and agent settings; licensing for this feature is not yet published and no meter is documented.
impact: Medium. Makers of agents on the Microsoft 365 channel, their users and the compliance team that owns the label taxonomy would notice; users without agents on that channel would not.
-->

<!-- verifier-findings (2026-11-17, held; checked by gpt-6.1-sol)
The independent check found fault only with the statements below. This is a correction: change what they name and carry the rest of the page over unchanged.
Correct each of these with the smallest change that removes the fault: delete the statement, narrow it, or put the finding's own "Found" text or worded replacement in its place. Where a fix asks for more than that (a new row, an explanation, further references), do only the part that removes the fault. A correction adds no control rows.
- [contradicted, blocker] front matter: licensing.model and notes; summary; Cost and licensing / licensing: Licensing for using labelled-file uploads is wholly unpublished, so the licensing model is unknown. | Found: Copilot Credits are the common currency across Copilot Studio capabilities. You can get them through pay-as-you-go meters, prepurchase plans, and Copilot Credit prepaid pack subscriptions. | Fix: Set licensing.model to mixed. Replace the notes and unqualified licensing-gap sentences with: 'Existing Copilot Studio licensing and Copilot Credits rules apply to agent usage. Microsoft 365 Copilot-licensed users' classic answers, generative answers and Microsoft Graph tenant grounding in Copilot Chat, Teams or SharePoint are not charged when the agent runs with their authenticated identity. Any additional licence specific to the planned labelled-upload support is not yet published.' Cite https://learn.microsoft.com/microsoft-copilot-studio/billing-licensing. | Source: https://learn.microsoft.com/microsoft-copilot-studio/billing-licensing
- [contradicted, blocker] front matter: licensing.notes; Cost and licensing; Open questions; rationale: cost / cost: No applicable meter is documented and administrators cannot yet budget on metered usage. | Found: Generative answer | 2 Copilot Credits | No charge | Fix: Replace the broad meter gap, including the open question, with: 'Ordinary agent usage follows Copilot Credits billing. A generative answer costs 2 Copilot Credits, subject to the documented Microsoft 365 Copilot-licensed, authenticated employee-facing usage inclusion. Any additional upload-specific charge is not yet published.' Cite https://learn.microsoft.com/microsoft-copilot-studio/requirements-messages-management and https://learn.microsoft.com/microsoft-copilot-studio/billing-licensing. | Source: https://learn.microsoft.com/microsoft-copilot-studio/requirements-messages-management
- [contradicted, blocker] front matter: cost; Cost and licensing; rationale: cost / consistency: Cost is low because the only known costs are administrator and maker time. | Found: Page: 'The only cost the sources show is administrator and maker time'. Learn: 'Copilot Credits measure the time and effort your agent needs to retrieve information, respond to prompts, and use any actions or custom Azure Bot Service skills.' | Fix: Set cost to variable. Replace the cost rationale with: 'Variable. Existing agent usage is measured in Copilot Credits; qualifying Microsoft 365 Copilot-licensed usage is included. Additional licensing or charges specific to labelled-file support are not yet published. Label review and agent retesting also take administrator and maker time.' Cite https://learn.microsoft.com/microsoft-copilot-studio/billing-licensing. | Source: https://learn.microsoft.com/microsoft-copilot-studio/billing-licensing
- [contradicted, blocker] controls[3].ui / admin-path: The label-encryption wizard path is create or edit a sensitivity label > Access control > Configure access control settings > Assign permissions now. | Found: Then, on the Choose protection settings for the types of items you selected page, make sure you select Control access. ... On the Access control page, select one of the following options | Fix: Replace the path in front matter and the rendered table with 'create or edit a sensitivity label > Choose protection settings for the types of items you selected > Control access > Access control > Configure access control settings > Assign permissions now'. Retain https://learn.microsoft.com/purview/encryption-sensitivity-labels. | Source: https://learn.microsoft.com/purview/encryption-sensitivity-labels
- [contradicted, blocker] controls[3].api / command: Set-Label -Identity <label> -EncryptionRightsDefinitions <rights> configures label encryption permissions without specifying the encryption mode. | Found: This parameter is meaningful only when the EncryptionEnabled parameter value is either $true or $false and the EncryptionProtectionType parameter value is Template. | Fix: For the documented admin-defined encryption configuration, replace the call in both places with 'Set-Label -Identity <label> -EncryptionEnabled $true -EncryptionProtectionType Template -EncryptionRightsDefinitions <rights>'. Add to the note: 'This call enables template-based encryption with admin-defined rights; it is not the user-defined-permissions configuration.' Retain the Set-Label reference. | Source: https://learn.microsoft.com/powershell/module/exchangepowershell/set-label?view=exchange-ps
- [unsupported, major] Risk assessment: Autonomy & actions / behaviour: The feature itself takes no action and all action risk comes from write-capable tools on the same agent. | Found: Searched: Copilot Studio labelled file uploads automatic actions autonomy. Read the roadmap, image-input-analysis and guidance/pass-files-to-connectors. They describe processing and optional downstream flows, not a complete guarantee that this planned feature takes no action. | Fix: Replace the sentence with advice that does not assert an undocumented guarantee: 'Review write-capable tools on agents that accept uploads, especially tools and flows that receive the uploaded file.'
These are minor and do not hold the page. Where removing the statement, or rewording it in the words the fix gives, settles one, do that; otherwise leave it as it is. A minor finding may also add a source link it names for a statement already on the page. It adds no row and nothing that needs research.
- [supported, minor] Cost and licensing / licensing: Purview label protection has its own licensing requirements, documented through the Microsoft 365 service descriptions linked by the Purview articles. | Found: the administrator creating and managing Information Protection features must have the appropriate licenses ... Similarly, end users also need the appropriate licenses to use the functionality in their respective client applications. | Fix: Add the Microsoft Purview service description to sources: https://learn.microsoft.com/office365/servicedescriptions/microsoft-365-service-descriptions/microsoft-365-tenantlevel-services-licensing-guidance/microsoft-purview-service-description. | Source: https://learn.microsoft.com/office365/servicedescriptions/microsoft-365-service-descriptions/microsoft-365-tenantlevel-services-licensing-guidance/microsoft-purview-service-description
-->
