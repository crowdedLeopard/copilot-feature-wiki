---
title: "Copilot Studio: labelled and encrypted file uploads for agents on the Microsoft 365 channel"
slug: "copilot-studio-purview-information-protection-labelled-files"
roadmapId: 571305
topic: "copilot-studio"
products: ["Microsoft Copilot Studio"]
summary: "Microsoft plans to let users upload Purview-labelled files to Copilot Studio agents on the Microsoft 365 channel, which Learn lists as unsupported today. Status is In development; upload-specific licensing and default are not stated."
status: "in-development"
releasePhase: ["General Availability","Preview"]
clouds: ["Worldwide (Standard Multi-Tenant)"]
platforms: ["Web"]
targetDate: "October CY2026"
previewDate: "October CY2026"
risk: "medium"
cost: "variable"
impact: "medium"
defaultState: "unknown"
action: "review"
licensing:
  model: "mixed"
  notes: "Existing Copilot Studio licensing and Copilot Credits rules apply to agent usage. Microsoft 365 Copilot-licensed users' classic answers, generative answers and Microsoft Graph tenant grounding in Copilot Chat, Teams or SharePoint are not charged when the agent runs with their authenticated identity. Any additional licence specific to the planned labelled-upload support is not yet published."
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
  - title: "Create and configure sensitivity labels and their policies"
    url: "https://learn.microsoft.com/purview/create-sensitivity-labels"
    kind: "learn"
  - title: "Set-Label"
    url: "https://learn.microsoft.com/powershell/module/exchangepowershell/set-label?view=exchange-ps"
    kind: "learn"
  - title: "Export-ActivityExplorerData"
    url: "https://learn.microsoft.com/powershell/module/exchangepowershell/export-activityexplorerdata?view=exchange-ps"
    kind: "learn"
  - title: "Enable sensitivity labels for files in SharePoint and OneDrive"
    url: "https://learn.microsoft.com/purview/sensitivity-labels-sharepoint-onedrive-files"
    kind: "learn"
  - title: "Licensing for agents powered by the standard harness"
    url: "https://learn.microsoft.com/microsoft-copilot-studio/billing-licensing"
    kind: "learn"
  - title: "Billing rates and management"
    url: "https://learn.microsoft.com/microsoft-copilot-studio/requirements-messages-management"
    kind: "learn"
  - title: "Microsoft Purview service description"
    url: "https://learn.microsoft.com/office365/servicedescriptions/microsoft-365-service-descriptions/microsoft-365-tenantlevel-services-licensing-guidance/microsoft-purview-service-description"
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
      path: "Solutions > Information Protection > Sensitivity labels > label > Edit label > Define the scope for this label > Files & other data assets > Choose protection settings for the types of items you selected > Control access > Access control"
      docs: "https://learn.microsoft.com/purview/encryption-sensitivity-labels"
    api:
      kind: "powershell"
      call: "Set-Label -Identity <label> -EncryptionEnabled $true -EncryptionProtectionType Template -EncryptionRightsDefinitions <rights>"
      docs: "https://learn.microsoft.com/powershell/module/exchangepowershell/set-label?view=exchange-ps"
    note: "On Access control, select Configure access control settings, then Assign permissions now. EXTRACT shows as Copy and extract content(EXTRACT); the applier of the encryption keeps it. The call sets template-based encryption."
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
  - governs: "Copilot experiences & agents summary report in DSPM for AI (classic)"
    scope: "tenant"
    ui:
      surface: "Microsoft Purview portal"
      path: "Solutions > DSPM for AI (classic) > Reports > Copilot experiences & agents"
      docs: "https://learn.microsoft.com/purview/ai-copilot-studio"
    api: null
    note: "Portal summary reporting only; underlying activity events can be exported with Export-ActivityExplorerData. Wait at least a day for policy data."
confidence: "medium"
created: "2026-11-13"
updated: "2026-11-25"
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
  - date: "2026-11-17"
    note: "Corrected after verification: licensing now mixed and cost variable, with Copilot Credits billing and the Microsoft 365 Copilot inclusion cited; label encryption path and Set-Label call corrected; autonomy bullet narrowed."
  - date: "2026-11-17"
    note: "Checked against Microsoft Learn by gpt-6.1-sol: passed with 0 of 69 statements not yet confirmed"
  - date: "2026-11-20"
    note: "Checked against Microsoft Learn by gpt-6.1-sol: held: 2 of 67 statements contradicted, 0 unconfirmed; taken offline until corrected"
  - date: "2026-11-20"
    note: "Corrected after verification: label encryption path now starts at the Purview portal and includes the label scope step; the DSPM report row is narrowed to the summary report and names Export-ActivityExplorerData for activity events."
  - date: "2026-11-20"
    note: "Checked against Microsoft Learn by gpt-6.1-sol: passed with 0 of 67 statements not yet confirmed"
  - date: "2026-11-24"
    note: "Checked against Microsoft Learn by gpt-6.1-sol: passed with 0 of 71 statements not yet confirmed"
  - date: "2026-11-25"
    note: "Checked against Microsoft Learn by gpt-6.1-sol: held: 1 of 72 statements contradicted, 0 unconfirmed; taken offline until corrected"
  - date: "2026-11-25"
    note: "Corrected after verification: the generative answer cost now gives the 2 Copilot Credit base feature rate and the separate 10 Copilot Credits per 1,000 tokens premium meter for reasoning models."
  - date: "2026-11-25"
    note: "Checked against Microsoft Learn by gpt-6.1-sol: held: 1 of 74 statements contradicted, 0 unconfirmed; taken offline until corrected"
version: 7
verification:
  status: "held"
  date: "2026-11-25"
  version: 7
  model: "gpt-6.1-sol"
  engine: "copilot"
  claims: 74
  confirmed: 73
  unconfirmed: 0
  contradicted: 1
  attempts: 2
  hash: "2c7a0900ab6a762c06c8e2f632ef108d"
---

## What's changing

The roadmap item states that Microsoft plans to let users upload files protected by Microsoft Purview Information Protection (MPIP) sensitivity labels to Copilot Studio agents deployed on the Microsoft 365 channel. It says agents can process content "based on the user's/agents account permissions, with label protections enforced end-to-end". Microsoft Learn has no page for this feature at the time of writing (November 2026), so everything about how it behaves, beyond the roadmap text, is not yet documented.

Today's documented behaviour is the opposite. The Copilot Studio file-input page says "Files with encryption, such as sensitivity labels or password protection, aren't supported", and that the agent tells the user the file is encrypted or returns a generic error. That page describes agents on the standard harness and points users to Microsoft Copilot Chat for labelled files. The Microsoft 365 and Microsoft Teams channels are how an agent reaches users in Teams and Microsoft Copilot.

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
- Review write-capable tools on agents that accept uploads, especially tools and flows that receive the uploaded file.

**Change & support**
- Users may expect every labelled file to work. Labels with user-defined permissions have documented limits for unopened SharePoint and OneDrive files, with two exceptions (default labels that extend SharePoint permissions, and files referenced by typing "/", both needing EXTRACT).
- Purview label-based DLP at the Microsoft 365 Copilot location is documented for agents only when the knowledge source is SharePoint. The DLP page says files uploaded directly into prompts for Microsoft 365 Copilot are not scanned. Coverage of agent uploads is not yet documented.

## Cost and licensing

Ordinary agent usage follows Copilot Credits billing, which measures the time and effort an agent needs to retrieve information, respond to prompts and use actions. The base feature rate for a generative answer is 2 Copilot Credits. With a reasoning model, the Text and generative AI tools (premium) meter adds 10 Copilot Credits per 1,000 billed tokens, subject to the documented Microsoft 365 Copilot-licensed, authenticated employee-facing usage inclusion. Any additional upload-specific charge is not yet published (Learn: Licensing for agents powered by the standard harness; Billing rates and management).

Using agents in Copilot Chat, Microsoft Teams or SharePoint for classic answers, generative answers or Microsoft Graph tenant grounding is not charged when the agent runs with the authenticated identity of a user who holds a Microsoft 365 Copilot licence. The Copilot Studio file-input page lists no licence for file input; whether labelled-upload support adds a licence is not yet published.

Label review and agent retesting also take time: compliance time to review label encryption settings and DLP scope, and maker time to retest agents that accept uploads. Label encryption and Purview DLP carry their own Microsoft 365 licensing, which the Purview pages direct you to the Microsoft 365 service descriptions for; whether this feature adds to it is not stated.

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
<tr><td data-label="Control"><strong>Encryption permissions, including EXTRACT, that each sensitivity label grants</strong><br><small>Tenant</small><br><small class="controls__note">On Access control, select Configure access control settings, then Assign permissions now. EXTRACT shows as Copy and extract content(EXTRACT); the applier of the encryption keeps it. The call sets template-based encryption.</small></td><td data-label="Admin UI"><strong>Microsoft Purview portal</strong><br>Solutions › Information Protection › Sensitivity labels › label › Edit label › Define the scope for this label › Files &amp; other data assets › Choose protection settings for the types of items you selected › Control access › Access control <a href="https://learn.microsoft.com/purview/encryption-sensitivity-labels" rel="noopener" class="controls__docs">Learn</a></td><td data-label="API and automation"><strong>PowerShell</strong><br><code>Set-Label -Identity &lt;label&gt; -EncryptionEnabled $true -EncryptionProtectionType Template -EncryptionRightsDefinitions &lt;rights&gt;</code> <a href="https://learn.microsoft.com/powershell/module/exchangepowershell/set-label?view=exchange-ps" rel="noopener" class="controls__docs">Learn</a></td></tr>
<tr><td data-label="Control"><strong>Sensitivity labels for SharePoint and OneDrive files (prerequisite for labelled content there)</strong><br><small>Tenant</small><br><small class="controls__note">Portal route needs a global administrator; Multi-Geo tenants must use PowerShell. Applies to files stored in SharePoint and OneDrive, not confirmed for uploads.</small></td><td data-label="Admin UI"><strong>Microsoft Purview portal</strong><br>Solutions › Information Protection › Sensitivity labels › Turn on now <a href="https://learn.microsoft.com/purview/sensitivity-labels-sharepoint-onedrive-files" rel="noopener" class="controls__docs">Learn</a></td><td data-label="API and automation"><strong>PowerShell</strong><br><code>Set-SPOTenant -EnableAIPIntegration $true</code> <a href="https://learn.microsoft.com/purview/sensitivity-labels-sharepoint-onedrive-files" rel="noopener" class="controls__docs">Learn</a></td></tr>
<tr><td data-label="Control"><strong>Copilot experiences &amp; agents summary report in DSPM for AI (classic)</strong><br><small>Tenant</small><br><small class="controls__note">Portal summary reporting only; underlying activity events can be exported with Export-ActivityExplorerData. Wait at least a day for policy data.</small></td><td data-label="Admin UI"><strong>Microsoft Purview portal</strong><br>Solutions › DSPM for AI (classic) › Reports › Copilot experiences &amp; agents <a href="https://learn.microsoft.com/purview/ai-copilot-studio" rel="noopener" class="controls__docs">Learn</a></td><td data-label="API and automation"><em class="controls__gap">Not yet documented</em></td></tr>
</tbody>
</table>

Everything in the table except the two gap rows is an existing Purview or Copilot Studio control. Microsoft has not confirmed that any of them governs the planned labelled uploads; the DLP page states that DLP does not scan the contents of files uploaded directly into prompts for Microsoft 365 Copilot, and Copilot Studio agent DLP coverage is documented only for SharePoint knowledge sources.

The Learn page for the DLP location lists the Purview Data Security AI Admin role, among others, as able to create or edit these policies. Enabling sensitivity labels for SharePoint and OneDrive needs a global administrator when done in the portal. The maker setting File uploads is per agent and governs existing file input only.

## Open questions

- Will labelled uploads be checked for the EXTRACT right, and does Learn's SharePoint knowledge-source model carry over to uploaded files? Watch the Copilot Studio file-input page.
- Does label-based Copilot DLP cover files uploaded to agents on the Microsoft 365 channel? Watch the Purview DLP location page.
- Is the feature on by default, or does it depend on the maker's File uploads setting? Watch Message center.
- Will labelled-file support carry any licence or charge beyond existing Copilot Credits billing? Watch the Copilot Studio billing and licensing page.

<!-- rationale
risk: Medium. Labelled and encrypted content would enter agent conversations, and the Purview DLP control documented for agents covers SharePoint knowledge sources, not direct uploads; the feature's own enforcement details are not yet documented.
cost: Variable. Existing agent usage is measured in Copilot Credits; qualifying Microsoft 365 Copilot-licensed usage is included. Additional licensing or charges specific to labelled-file support are not yet published. Label review and agent retesting also take administrator and maker time.
impact: Medium. Makers of agents on the Microsoft 365 channel, their users and the compliance team that owns the label taxonomy would notice; users without agents on that channel would not.
-->

<!-- verifier-findings (2026-11-25, held; checked by gpt-6.1-sol)
The independent check found fault only with the statements below. This is a correction: change what they name and carry the rest of the page over unchanged.
Correct each of these with the smallest change that removes the fault: delete the statement, narrow it, or put the finding's own "Found" text or worded replacement in its place. Where a fix asks for more than that (a new row, an explanation, further references), do only the part that removes the fault. A correction adds no control rows.
- [contradicted, blocker] Governance controls: paragraph following table / absence: Microsoft has not confirmed that any of the listed controls governs the planned labelled uploads. | Found: Use the following sections to identify the Microsoft Purview capabilities that are supported for AI interactions with agents built in Microsoft Copilot Studio | Fix: Replace 'Microsoft has not confirmed that any of them governs the planned labelled uploads' with 'Microsoft documents DSPM for AI (classic) reporting for AI interactions with agents built in Copilot Studio; upload-specific label enforcement and label-based DLP coverage are not yet documented.' The report row is within that documented agent-interaction reach, not an unconfirmed control. Keep the subsequent DLP limitations. Source: https://learn.microsoft.com/purview/ai-copilot-studio. | Source: https://learn.microsoft.com/purview/ai-copilot-studio
These are minor and do not hold the page. Where removing the statement, or rewording it in the words the fix gives, settles one, do that; otherwise leave it as it is. A minor finding may also add a source link it names for a statement already on the page. It adds no row and nothing that needs research.
- [supported, minor] controls[2].ui; Governance controls / admin-path: The printed Purview route correctly reaches the Copilot DLP policy location, but stops before configuring the sensitivity-label rule. | Found: Go to Data Loss Prevention > Policies and select + Create policy. Select the Custom template, then Custom policy. On the Locations page, set the Microsoft Copilot, Copilot Chat, and Copilot Cowork location to on. | Fix: Keep the printed route to the location and append to controls[2].note: 'After selecting the location, add a rule with Content contains > Sensitivity labels and set the action to Prevent Copilot and Cowork from processing content.' This completes the documented route to the rule without inventing intervening wizard labels; see https://learn.microsoft.com/purview/dlp-microsoft365-copilot-location-learn-about. | Source: https://learn.microsoft.com/purview/dlp-microsoft365-copilot-location-learn-about
- [supported, minor] controls[3].ui; Governance controls / admin-path: The printed label-edit route correctly reaches Access control but stops before selecting the permission settings. | Found: Follow the general instructions to create or edit a sensitivity label and make sure the Files & other data assets option is selected for the label's scope | Fix: Extend controls[3].ui.path to 'Solutions > Information Protection > Sensitivity labels > label > Edit label > Define the scope for this label > Files & other data assets > Choose protection settings for the types of items you selected > Control access > Access control > Configure access control settings > Assign permissions now > Assign permissions > Choose permissions'. The existing note can identify Copy and extract content(EXTRACT). The opening route is documented at the already-cited https://learn.microsoft.com/purview/create-sensitivity-labels and the remaining steps at https://learn.microsoft.com/purview/encryption-sensitivity-labels; selecting the users or groups is the scope choice. | Source: https://learn.microsoft.com/purview/encryption-sensitivity-labels
-->
