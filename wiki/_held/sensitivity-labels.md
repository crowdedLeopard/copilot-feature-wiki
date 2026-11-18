---
kind: "concept"
title: "Sensitivity labels: what they classify, protect and tell Copilot to leave alone"
slug: "sensitivity-labels"
summary: "Sensitivity labels are Microsoft Purview classifications that stay with files, emails and sites and can encrypt them. Administrators use them to decide who can read content and what Copilot may use."
created: "2026-11-18"
updated: "2026-11-18"
version: 1
tags: ["sensitivity-labels","information-protection","purview","auto-labeling","encryption","dlp","m365-copilot","data-governance"]
covers: []
sources:
  - title: "Learn about sensitivity labels"
    url: "https://learn.microsoft.com/purview/sensitivity-labels"
    kind: "learn"
  - title: "Get started with sensitivity labels"
    url: "https://learn.microsoft.com/purview/get-started-with-sensitivity-labels"
    kind: "learn"
  - title: "Create and configure sensitivity labels and their policies"
    url: "https://learn.microsoft.com/purview/create-sensitivity-labels"
    kind: "learn"
  - title: "Use Microsoft Purview to manage data security & compliance for Microsoft 365 Copilot & Microsoft 365 Copilot Chat"
    url: "https://learn.microsoft.com/purview/ai-m365-copilot"
    kind: "learn"
  - title: "Automatically apply a sensitivity label to Microsoft 365 data"
    url: "https://learn.microsoft.com/purview/apply-sensitivity-label-automatically"
    kind: "learn"
  - title: "Enable sensitivity labels for files in SharePoint and OneDrive"
    url: "https://learn.microsoft.com/purview/sensitivity-labels-sharepoint-onedrive-files"
    kind: "learn"
  - title: "Use sensitivity labels to protect collaborative workspaces (groups and sites)"
    url: "https://learn.microsoft.com/purview/sensitivity-labels-teams-groups-sites"
    kind: "learn"
  - title: "Learn about using Microsoft Purview Data Loss Prevention to protect interactions with Microsoft 365 Copilot, Copilot Chat, and Cowork"
    url: "https://learn.microsoft.com/purview/dlp-microsoft365-copilot-location-learn-about"
    kind: "learn"
  - title: "Assign sensitivity labels to Microsoft 365 groups in Microsoft Entra ID"
    url: "https://learn.microsoft.com/entra/identity/users/groups-assign-sensitivity-labels"
    kind: "learn"
  - title: "Microsoft Purview service description"
    url: "https://learn.microsoft.com/office365/servicedescriptions/microsoft-365-service-descriptions/microsoft-365-tenantlevel-services-licensing-guidance/microsoft-purview-service-description"
    kind: "learn"
  - title: "Audit log activities"
    url: "https://learn.microsoft.com/purview/audit-log-activities"
    kind: "learn"
  - title: "New-Label"
    url: "https://learn.microsoft.com/powershell/module/exchangepowershell/new-label?view=exchange-ps"
    kind: "learn"
  - title: "New-LabelPolicy"
    url: "https://learn.microsoft.com/powershell/module/exchangepowershell/new-labelpolicy?view=exchange-ps"
    kind: "learn"
  - title: "New-DlpCompliancePolicy"
    url: "https://learn.microsoft.com/powershell/module/exchangepowershell/new-dlpcompliancepolicy?view=exchange-ps"
    kind: "learn"
related: ["retention","auditing","microsoft-purview-data-loss-prevention-for-microsoft-cowork","microsoft-purview-auto-labeling-scalability-policy-management-and-reporting-enhancements","copilot-studio-purview-information-protection-labelled-files","microsoft-purview-information-protection-sensitivity-labels-for-microsoft-entra-security-g"]
controls:
  - governs: "Which sensitivity labels exist, their scope and protection settings"
    scope: "tenant"
    ui:
      surface: "Microsoft Purview portal"
      path: "Solutions > Information Protection > Sensitivity labels > + Create a label"
      docs: "https://learn.microsoft.com/purview/create-sensitivity-labels"
    api:
      kind: "powershell"
      call: "New-Label -Name <label name> -DisplayName <display name> -Tooltip <tooltip>"
      docs: "https://learn.microsoft.com/powershell/module/exchangepowershell/new-label?view=exchange-ps"
    note: "Security & Compliance PowerShell. In the modern label scheme, select + Create and then Label. Set-Label changes an existing label."
  - governs: "Which users and groups see the labels, and label policy settings"
    scope: "tenant"
    ui:
      surface: "Microsoft Purview portal"
      path: "Solutions > Information Protection > Publishing policies > Publish label"
      docs: "https://learn.microsoft.com/purview/create-sensitivity-labels"
    api:
      kind: "powershell"
      call: "New-LabelPolicy -Name <policy name> -Labels <label names>"
      docs: "https://learn.microsoft.com/powershell/module/exchangepowershell/new-labelpolicy?view=exchange-ps"
    note: "Security & Compliance PowerShell. The reference lists location parameters such as -ExchangeLocation; Set-LabelPolicy changes a published policy."
  - governs: "Whether SharePoint and OneDrive support labels and encrypted files"
    scope: "tenant"
    ui:
      surface: "Microsoft Purview portal"
      path: "Solutions > Information Protection > Sensitivity labels > Turn on now"
      docs: "https://learn.microsoft.com/purview/sensitivity-labels-sharepoint-onedrive-files"
    api:
      kind: "powershell"
      call: "Set-SPOTenant -EnableAIPIntegration $true"
      docs: "https://learn.microsoft.com/purview/sensitivity-labels-sharepoint-onedrive-files"
    note: "The portal option needs a global administrator. Microsoft 365 Multi-Geo tenants must use PowerShell for every geo-location. OneNote needs a further Set-SPOTenant parameter."
  - governs: "Whether labels can be applied to Microsoft 365 groups, teams and sites"
    scope: "tenant"
    ui: null
    api:
      kind: "powershell"
      call: "Update-MgBetaDirectorySetting -DirectorySettingId <setting id> -BodyParameter <params>"
      docs: "https://learn.microsoft.com/entra/identity/users/groups-assign-sensitivity-labels"
    note: "The parameters set EnableMIPLabels to True. Then run Execute-AzureAdLabelSync in Security & Compliance PowerShell. Needs an active Microsoft Entra ID P1 licence."
  - governs: "Service-side auto-labeling of SharePoint, OneDrive and Exchange content"
    scope: "tenant"
    ui:
      surface: "Microsoft Purview portal"
      path: "Solutions > Information Protection > Policies > Auto-labeling policies > + Create auto-labeling policy"
      docs: "https://learn.microsoft.com/purview/apply-sensitivity-label-automatically"
    api:
      kind: "powershell"
      call: "New-AutoSensitivityLabelPolicy -Name <AutoLabelingPolicyName> -SharePointLocation <SharePointSiteLocation> -ApplySensitivityLabel <Label> -Mode TestWithoutNotifications"
      docs: "https://learn.microsoft.com/purview/apply-sensitivity-label-automatically"
    note: "Needs an E5 or P2-tier licence. Mode TestWithoutNotifications runs the policy in simulation."
  - governs: "Which labelled files and emails Copilot and Cowork may not process"
    scope: "tenant"
    ui:
      surface: "Microsoft Purview portal"
      path: "Data Loss Prevention > Policies > + Create policy > Custom > Custom policy > Locations > Microsoft Copilot, Copilot Chat, and Copilot Cowork"
      docs: "https://learn.microsoft.com/purview/dlp-microsoft365-copilot-location-learn-about"
    api:
      kind: "powershell"
      call: "New-DlpComplianceRule -Name <rule name> -Policy <policy name> -AdvancedRule <advanced rule> -RestrictAccess <settings>"
      docs: "https://learn.microsoft.com/powershell/module/exchangepowershell/new-dlpcompliancepolicy?view=exchange-ps"
    note: "Rule uses Content contains > Sensitivity labels, action Prevent Copilot and Cowork from processing content. The example sets RestrictAccess to ExcludeContentProcessing = Block, on a policy with -EnforcementPlanes CopilotExperiences."
confidence: "medium"
dependents: 17
changes:
  - date: "2026-11-18"
    note: "New concept page: what sensitivity labels classify and protect, how Copilot treats them, their licensing and where each control lives."
  - date: "2026-11-18"
    note: "Checked against Microsoft Learn by gpt-6.1-sol: held: 3 of 100 statements contradicted, 0 unconfirmed; taken offline until corrected"
verification:
  status: "held"
  date: "2026-11-18"
  version: 1
  model: "gpt-6.1-sol"
  engine: "copilot"
  claims: 100
  confirmed: 97
  unconfirmed: 0
  contradicted: 3
  attempts: 1
  hash: "ea473c25ef733a0dd20e934152780a96"
---

## What it is

A sensitivity label is a classification from Microsoft Purview Information Protection that is stamped on content and can also protect it. The label is stored in the metadata of files and emails, so it stays with the content wherever it is saved. It can enforce encryption and content markings and, for sites and groups, privacy and sharing settings.

Admins create labels and publish them in label policies. Users, or auto-labeling, apply them, and Office, SharePoint and other services enforce what each label specifies.

### Parts of the mechanism

| Part | What it decides |
| --- | --- |
| Scope | Whether a label is for files and other data assets, emails, meetings, or groups and sites. A groups-and-sites label protects the container and does not label the items in it. |
| Priority | The order of the label list. Microsoft's guidance is to put the most restrictive label at the bottom. An item carries one label from your organisation. |
| Label policy | Which users or groups see which labels, plus settings such as the default label, justification for lowering a label and mandatory labelling. |
| Auto-labeling | Rules that apply or recommend a label, either in Office apps or in service-side policies for SharePoint, OneDrive and Exchange. |

### Copilot and labels

Microsoft 365 Copilot, Copilot Chat and Copilot agents recognise labels. Copilot Chat shows the label with the highest priority among the data used. Where a label applies encryption, Copilot and agents return data from an item only if the user has the EXTRACT usage right (permission to copy) on it. Copilot in Word, PowerPoint and Outlook passes the source file's label to new content built from it. A sensitivity label can sit alongside a retention label on the same item; see [Microsoft Purview retention](/concepts/retention/).

## Why it matters

Labels are the classification that other Purview controls act on. Microsoft documents DLP policies, eDiscovery search conditions, Copilot and site settings that read a label, so a label-based rule can only act on items that carry it. How much of your content is labelled decides how far those controls reach.

For Copilot, the label is where an organisation decides what the assistant may read. Encrypted labels bring the EXTRACT check, and a Purview DLP policy on the Copilot location can exclude items by label. Microsoft's service description says Information Protection features are enabled at the tenant level for all users by default, but administrators and users need the right licences (see Cost and licensing).

## Cost and licensing

For Microsoft 365 content, Microsoft Learn describes per-user licences for labels. The labels page says several per-user subscriptions support them, that user licensing depends on the features used, and that admins also need a licence to manage them.

- **Manual labelling:** the Microsoft Purview service description's table lists it as included for Microsoft 365 E5/A5/G5/E3/A3/G3/F1/F3 and Business Premium, among other plans. The same page's introduction says sensitivity labeling, including automatic or policy-based labeling, requires Microsoft 365 E5 or Information Protection and Governance, which does not match that table row. Check the per-feature matrix before budgeting.
- **Auto-labeling:** the auto-labeling page says E3 and Business Premium do not include auto-labeling of files and emails and that it needs an E5 or P2-tier add-on.
- **Groups and sites:** applying labels to Microsoft 365 groups needs at least one active Microsoft Entra ID P1 licence.
- **Non-Microsoft 365 data:** labelling in the Data Map and using protection policies need pay-as-you-go billing.

## Risks and limits

- **Labels not enabled for SharePoint and OneDrive files.** Until you enable them, those services cannot process encrypted files, so coauthoring, eDiscovery, DLP and search do not work on them, and the encrypted files Copilot and agents can reach are limited to data in use from Office apps on Windows.
- **Auto-labeling saved without a check.** A saved policy runs in simulation mode, and nothing checks that labels are enabled for SharePoint and OneDrive, a prerequisite. Documented limits: a 500,000 files/day throughput ceiling, 100 policies, 1,000 explicitly selected SharePoint sites and 20,000,000 matched files per simulation.
- **Deleting a label does not remove it from content.** Protection settings keep being enforced. An encrypting label leaves an archived protection template, so you cannot reuse its name.
- **An encrypting default label breaks external sharing.** Microsoft says it is usually not a good idea to use one as the default for documents, because recipients may lack apps or accounts that can open them.
- **A policy scope is not an access list.** Azure Rights Management does not support non-email-enabled security groups or exclusions for protection, so users outside the policy's scope may still be granted or denied access by the encryption settings.
- **Container labels do not reach items.** Documents in a labelled site do not inherit its label. A site owner can change external sharing options by changing the site's label, and edits to a published label's group settings are not applied to groups already labelled.
- **Changes take time.** Allow 24 hours for label and policy changes, and 24 to 48 hours where group membership is involved.
- **Copilot DLP gaps.** DLP does not scan files uploaded directly into prompts, evaluates Word, Excel and PowerPoint at file open, covers emails sent on or after 1 January 2025 and does not support calendar invites. Excluded items can still appear in citations.
- **Encryption cap.** At most 500 labels per tenant can apply encryption that specifies users and permissions.

## Governance controls

<p class="controls__lead">Where each control lives. The left column says what the setting decides and how far it reaches; the middle gives the admin centre and the exact path; the right gives the script, API or command that does the same. <em>Not yet documented</em> means Microsoft has not published a control for that surface, so there is nothing to configure yet.</p>

<table class="controls">
<thead><tr><th>Control</th><th>Admin UI</th><th>API and automation</th></tr></thead>
<tbody>
<tr><td data-label="Control"><strong>Which sensitivity labels exist, their scope and protection settings</strong><br><small>Tenant</small><br><small class="controls__note">Security &amp; Compliance PowerShell. In the modern label scheme, select + Create and then Label. Set-Label changes an existing label.</small></td><td data-label="Admin UI"><strong>Microsoft Purview portal</strong><br>Solutions › Information Protection › Sensitivity labels › + Create a label <a href="https://learn.microsoft.com/purview/create-sensitivity-labels" rel="noopener" class="controls__docs">Learn</a></td><td data-label="API and automation"><strong>PowerShell</strong><br><code>New-Label -Name &lt;label name&gt; -DisplayName &lt;display name&gt; -Tooltip &lt;tooltip&gt;</code> <a href="https://learn.microsoft.com/powershell/module/exchangepowershell/new-label?view=exchange-ps" rel="noopener" class="controls__docs">Learn</a></td></tr>
<tr><td data-label="Control"><strong>Which users and groups see the labels, and label policy settings</strong><br><small>Tenant</small><br><small class="controls__note">Security &amp; Compliance PowerShell. The reference lists location parameters such as -ExchangeLocation; Set-LabelPolicy changes a published policy.</small></td><td data-label="Admin UI"><strong>Microsoft Purview portal</strong><br>Solutions › Information Protection › Publishing policies › Publish label <a href="https://learn.microsoft.com/purview/create-sensitivity-labels" rel="noopener" class="controls__docs">Learn</a></td><td data-label="API and automation"><strong>PowerShell</strong><br><code>New-LabelPolicy -Name &lt;policy name&gt; -Labels &lt;label names&gt;</code> <a href="https://learn.microsoft.com/powershell/module/exchangepowershell/new-labelpolicy?view=exchange-ps" rel="noopener" class="controls__docs">Learn</a></td></tr>
<tr><td data-label="Control"><strong>Whether SharePoint and OneDrive support labels and encrypted files</strong><br><small>Tenant</small><br><small class="controls__note">The portal option needs a global administrator. Microsoft 365 Multi-Geo tenants must use PowerShell for every geo-location. OneNote needs a further Set-SPOTenant parameter.</small></td><td data-label="Admin UI"><strong>Microsoft Purview portal</strong><br>Solutions › Information Protection › Sensitivity labels › Turn on now <a href="https://learn.microsoft.com/purview/sensitivity-labels-sharepoint-onedrive-files" rel="noopener" class="controls__docs">Learn</a></td><td data-label="API and automation"><strong>PowerShell</strong><br><code>Set-SPOTenant -EnableAIPIntegration $true</code> <a href="https://learn.microsoft.com/purview/sensitivity-labels-sharepoint-onedrive-files" rel="noopener" class="controls__docs">Learn</a></td></tr>
<tr><td data-label="Control"><strong>Whether labels can be applied to Microsoft 365 groups, teams and sites</strong><br><small>Tenant</small><br><small class="controls__note">The parameters set EnableMIPLabels to True. Then run Execute-AzureAdLabelSync in Security &amp; Compliance PowerShell. Needs an active Microsoft Entra ID P1 licence.</small></td><td data-label="Admin UI"><em class="controls__gap">Not yet documented</em></td><td data-label="API and automation"><strong>PowerShell</strong><br><code>Update-MgBetaDirectorySetting -DirectorySettingId &lt;setting id&gt; -BodyParameter &lt;params&gt;</code> <a href="https://learn.microsoft.com/entra/identity/users/groups-assign-sensitivity-labels" rel="noopener" class="controls__docs">Learn</a></td></tr>
<tr><td data-label="Control"><strong>Service-side auto-labeling of SharePoint, OneDrive and Exchange content</strong><br><small>Tenant</small><br><small class="controls__note">Needs an E5 or P2-tier licence. Mode TestWithoutNotifications runs the policy in simulation.</small></td><td data-label="Admin UI"><strong>Microsoft Purview portal</strong><br>Solutions › Information Protection › Policies › Auto-labeling policies › + Create auto-labeling policy <a href="https://learn.microsoft.com/purview/apply-sensitivity-label-automatically" rel="noopener" class="controls__docs">Learn</a></td><td data-label="API and automation"><strong>PowerShell</strong><br><code>New-AutoSensitivityLabelPolicy -Name &lt;AutoLabelingPolicyName&gt; -SharePointLocation &lt;SharePointSiteLocation&gt; -ApplySensitivityLabel &lt;Label&gt; -Mode TestWithoutNotifications</code> <a href="https://learn.microsoft.com/purview/apply-sensitivity-label-automatically" rel="noopener" class="controls__docs">Learn</a></td></tr>
<tr><td data-label="Control"><strong>Which labelled files and emails Copilot and Cowork may not process</strong><br><small>Tenant</small><br><small class="controls__note">Rule uses Content contains &gt; Sensitivity labels, action Prevent Copilot and Cowork from processing content. The example sets RestrictAccess to ExcludeContentProcessing = Block, on a policy with -EnforcementPlanes CopilotExperiences.</small></td><td data-label="Admin UI"><strong>Microsoft Purview portal</strong><br>Data Loss Prevention › Policies › + Create policy › Custom › Custom policy › Locations › Microsoft Copilot, Copilot Chat, and Copilot Cowork <a href="https://learn.microsoft.com/purview/dlp-microsoft365-copilot-location-learn-about" rel="noopener" class="controls__docs">Learn</a></td><td data-label="API and automation"><strong>PowerShell</strong><br><code>New-DlpComplianceRule -Name &lt;rule name&gt; -Policy &lt;policy name&gt; -AdvancedRule &lt;advanced rule&gt; -RestrictAccess &lt;settings&gt;</code> <a href="https://learn.microsoft.com/powershell/module/exchangepowershell/new-dlpcompliancepolicy?view=exchange-ps" rel="noopener" class="controls__docs">Learn</a></td></tr>
</tbody>
</table>

Creating and managing labels needs permissions in the Microsoft Purview portal: the Information Protection role groups, a custom role group with the Sensitivity Label Administrator role (Sensitivity Label Reader for read-only), or the Compliance Data Administrator, Compliance Administrator or Security Administrator role groups. These permissions are not needed to apply labels. Turning on SharePoint and OneDrive support from the portal needs a global administrator. Assigning a label to an existing group in the Microsoft Entra admin center needs at least the Groups Administrator role, or group ownership.

A label policy decides who sees a label, not who can open protected content. For both labelling and the Copilot DLP policy, the scope is the user. Label events (applied, changed, removed, failed) are recorded in the audit log; see [Microsoft Purview Audit](/concepts/auditing/). Label usage reports are in the Microsoft Purview portal under Information Protection.

## What to check

- Review each label's scope and the order of the list under Sensitivity labels, with the most restrictive label at the bottom.
- Check which users and groups each label policy publishes to, and the policy order where settings conflict.
- Confirm label support is turned on for SharePoint and OneDrive; the Turn on now banner means it is not.
- Run auto-labeling policies in simulation and review the results against the documented limits before turning them on.
- Verify that EnableMIPLabels is True and that labels are synchronised with Execute-AzureAdLabelSync if you label sites or groups.
- Test a Copilot-location DLP rule with a sensitivity label condition, and reopen a file after labelling it.

## Open questions

- Which licence does the Copilot-location DLP label condition need? The DLP page refers readers to Microsoft's licensing guidance rather than naming one.
- Does anything besides a DLP policy limit Copilot's use of items whose label has no encryption? The pages read describe the EXTRACT check for encrypting labels and the DLP exclusion, and do not say.

<!-- verifier-findings (2026-11-18, held; checked by gpt-6.1-sol)
The independent check found fault only with the statements below. This is a correction: change what they name and carry the rest of the page over unchanged.
Correct each of these with the smallest change that removes the fault: delete the statement, narrow it, or put the finding's own "Found" text or worded replacement in its place. Where a fix asks for more than that (a new row, an explanation, further references), do only the part that removes the fault. A correction adds no control rows.
- [contradicted, blocker] summary / applicability: Sensitivity labels can encrypt the files, emails and sites named in the summary. | Found: Items in these containers however, do not inherit the labels and therefore don't apply any item-level label settings, such as content markings and encryption. | Fix: Replace the first summary sentence with: 'Sensitivity labels are Microsoft Purview classifications that can encrypt files and emails and control privacy and sharing for sites.' Site labels protect the container, not its individual items, as documented at https://learn.microsoft.com/purview/sensitivity-labels-teams-groups-sites. | Source: https://learn.microsoft.com/purview/sensitivity-labels-teams-groups-sites
- [contradicted, blocker] Risks and limits: Auto-labeling saved without a check / default: A saved auto-labeling policy runs in simulation mode. | Found: Select Run policy in simulation mode if you're ready to run the auto-labeling policy now, in simulation mode. ... If you're not ready to run simulation, select Leave policy turned off. | Fix: Replace 'A saved policy runs in simulation mode' with 'An auto-labeling policy automatically created from a label configuration runs in simulation mode when saved'. The source's simulation-on-save statement is under automatic creation, not the general policy-creation workflow: https://learn.microsoft.com/purview/apply-sensitivity-label-automatically. | Source: https://learn.microsoft.com/purview/apply-sensitivity-label-automatically
- [contradicted, blocker] Open questions: non-encrypting labels and Copilot / absence: The documentation does not identify a label-based restriction on Copilot use of non-encrypted items besides DLP. | Found: BlockContentAnalysisServices: Specifies a privacy setting to allow or prevent content in Word, Excel, PowerPoint, and Outlook from being sent to Microsoft for content analysis. ... This setting affects ... Microsoft Copilot for Microsoft 365. | Fix: Replace this open question with: 'The BlockContentAnalysisServices advanced label setting can exclude labeled content from Microsoft 365 Copilot in supported Office apps without requiring label encryption. It does not exclude the content from Copilot in other scenarios, such as Teams and Copilot Chat.' Cite https://learn.microsoft.com/purview/sensitivity-labels-office-apps#prevent-connected-experiences-that-analyze-content and add that URL to sources together with https://learn.microsoft.com/purview/ai-m365-copilot-considerations. No new control row is requested. | Source: https://learn.microsoft.com/powershell/module/exchangepowershell/new-label?view=exchange-ps
These are minor and do not hold the page. Where removing the statement, or rewording it in the words the fix gives, settles one, do that; otherwise leave it as it is. A minor finding may also add a source link it names for a statement already on the page. It adds no row and nothing that needs research.
- [supported, minor] What it is: Copilot and labels; Why it matters / behaviour: For label-encrypted items, Copilot and agents return data only when the user has EXTRACT, the permission to copy. | Found: Copilot and agents return data from an item only if the user is granted permissions to copy (the EXTRACT usage right) from that item. | Fix: Retain the general EXTRACT rule but add: 'Microsoft documents an exception for Copilot in Edge and Windows: without DLP in Edge, it can reference encrypted content in the active Edge tab even without EXTRACT.' Cite https://learn.microsoft.com/purview/ai-m365-copilot-considerations#information-protection-considerations-for-microsoft-365-copilot, whose app-specific exceptions qualify the overview. | Source: https://learn.microsoft.com/purview/sensitivity-labels
- [supported, minor] What it is: Copilot and labels / behaviour: Copilot in Word, PowerPoint and Outlook inherits the source file's label when creating new content from it. | Found: the sensitivity label from the source file is automatically inherited, with the label's protection settings. | Fix: Add: 'Label inheritance is not supported when the source is encrypted with user-defined permissions; in that case, the user cannot send the data to the destination item.' Cite https://learn.microsoft.com/purview/ai-m365-copilot-considerations#information-protection-considerations-for-microsoft-365-copilot. Add that URL to sources together with the Office-apps URL specified in the Open questions correction. | Source: https://learn.microsoft.com/purview/ai-m365-copilot
- [supported, minor] Cost and licensing: Non-Microsoft 365 data / licensing: Applying labels in Data Map and using protection policies for non-Microsoft 365 data requires pay-as-you-go billing. | Found: Specific to non-Microsoft 365 data sources, applying sensitivity labels in the Data Map and using protection policies requires you to set up pay-as-you-go billing in your organization. | Fix: Replace the bullet with: '**Non-Microsoft 365 data:** applying labels in the Data Map and using protection policies need pay-as-you-go billing; the cited documentation marks these capabilities as preview.' The preview qualifications appear at https://learn.microsoft.com/purview/sensitivity-labels and https://learn.microsoft.com/purview/create-sensitivity-labels#create-and-configure-protection-policies. | Source: https://learn.microsoft.com/purview/get-started-with-sensitivity-labels
- [supported, minor] Risks and limits: Deleting a label / behaviour: Deleting a sensitivity label does not remove it from content. | Found: If you delete a sensitivity label from the Microsoft Purview portal, the label isn't automatically removed from content | Fix: Acknowledge the cited pages' disagreement instead of giving a universal rule. Replace the first two sentences of this bullet with: 'The labels overview says deletion does not automatically remove labels or protection from content. The detailed deletion guide says container labels are removed and their settings stop being enforced; it also documents encryption removal for processable documents in enabled SharePoint and OneDrive services.' Cite https://learn.microsoft.com/purview/create-sensitivity-labels#removing-and-deleting-labels. | Source: https://learn.microsoft.com/purview/sensitivity-labels
- [supported, minor] Risks and limits: Deleting a label / behaviour: Protection settings continue to be enforced after a sensitivity label is deleted. | Found: any protection settings continue to be enforced on content that had that label applied. | Fix: Apply the shared deletion-bullet replacement: 'The labels overview says deletion does not automatically remove labels or protection from content. The detailed deletion guide says container labels are removed and their settings stop being enforced; it also documents encryption removal for processable documents in enabled SharePoint and OneDrive services.' Cite https://learn.microsoft.com/purview/create-sensitivity-labels#removing-and-deleting-labels. | Source: https://learn.microsoft.com/purview/sensitivity-labels
- [supported, minor] Open questions: Copilot-location DLP licensing / licensing: The Copilot DLP feature page points to licensing guidance instead of naming a license. | Found: For information on licensing, see - Microsoft 365 Enterprise Plans - Microsoft 365 Service Descriptions | Fix: Remove this open question: the already-cited service description answers it. Replace it in Cost and licensing with: '**Copilot DLP:** the service description lists restricting Copilot processing of files and emails as included with Microsoft 365 E5/A5, Microsoft Purview Suite/EDU/FLW, Microsoft Defender + Purview Suite FLW, Microsoft 365 E5/A5/F5 Information Protection and Governance, and Office 365 E5/A5; it is not included with the listed Business, Microsoft 365 E3-tier or Office 365 E3-tier plans.' Cite https://learn.microsoft.com/office365/servicedescriptions/microsoft-365-service-descriptions/microsoft-365-tenantlevel-services-licensing-guidance/microsoft-purview-service-description#microsoft-purview-data-loss-prevention-dlp-for-microsoft-copilot. | Source: https://learn.microsoft.com/purview/dlp-microsoft365-copilot-location-learn-about
-->
