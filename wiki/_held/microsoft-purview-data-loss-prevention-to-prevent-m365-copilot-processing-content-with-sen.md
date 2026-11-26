---
title: "Microsoft Purview DLP: Copilot label restrictions in Word, Excel and PowerPoint apply wherever the file is stored"
slug: "microsoft-purview-data-loss-prevention-to-prevent-m365-copilot-processing-content-with-sen"
roadmapId: 557255
topic: "governance"
products: ["Excel","Microsoft 365","PowerPoint","Word","Microsoft Copilot (Microsoft 365)","Microsoft Purview"]
summary: "A Purview DLP policy that stops Copilot processing files with chosen sensitivity labels now applies in Word, Excel and PowerPoint whatever the file's storage location. Tenants with such a policy should tell affected users."
status: "launched"
releasePhase: ["Current Channel","General Availability"]
clouds: ["Worldwide (Standard Multi-Tenant)","GCC"]
platforms: ["Android","Desktop","iOS","Mac"]
targetDate: "April CY2026"
previewDate: null
risk: "low"
cost: "low"
impact: "medium"
defaultState: "admin-opt-in"
action: "prepare"
licensing:
  model: "included"
  notes: "The Microsoft Purview service description lists DLP to restrict Copilot from processing files and emails as included in Microsoft 365 E5/A5, Microsoft Purview Suite, Microsoft 365 E5/A5/F5 Information Protection and Governance, and Office 365 E5/A5, and not included in Business, E3 or E1 plans."
audiences: ["compliance","security","m365-admin","change-adoption"]
tags: ["purview","dlp","m365-copilot","sensitivity-labels","word","excel","powerpoint","information-protection","gcc"]
sources:
  - title: "Learn about using Microsoft Purview Data Loss Prevention to protect interactions with Microsoft 365 Copilot, Copilot Chat, and Cowork"
    url: "https://learn.microsoft.com/purview/dlp-microsoft365-copilot-location-learn-about"
    kind: "learn"
  - title: "New-DlpCompliancePolicy"
    url: "https://learn.microsoft.com/powershell/module/exchangepowershell/new-dlpcompliancepolicy"
    kind: "learn"
  - title: "Microsoft Purview service description"
    url: "https://learn.microsoft.com/office365/servicedescriptions/microsoft-365-service-descriptions/microsoft-365-tenantlevel-services-licensing-guidance/microsoft-purview-service-description"
    kind: "learn"
  - title: "Data protection and auditing for Microsoft Copilot"
    url: "https://learn.microsoft.com/copilot/plan/architecture-data-protection-auditing"
    kind: "learn"
  - title: "Microsoft 365 Roadmap item 557255"
    url: "https://www.microsoft.com/microsoft-365/roadmap?id=557255"
    kind: "roadmap"
videos: []
related: ["sensitivity-labels","microsoft-purview-use-sensitivity-labels-to-block-all-connected-experiences-that-analyze-c","microsoft-purview-data-loss-prevention-to-restrict-processing-external-emails-in-m365-copi","microsoft-purview-data-loss-prevention-admin-units-support-for-copilot-and-cowork-dlp"]
controls:
  - governs: "Copilot DLP policy on the Copilot location, and which users and groups it covers"
    scope: "user"
    ui:
      surface: "Microsoft Purview portal"
      path: "Data Loss Prevention > Policies > + Create policy > Custom > Custom policy > Locations > Microsoft Copilot, Copilot Chat, and Copilot Cowork"
      docs: "https://learn.microsoft.com/purview/dlp-microsoft365-copilot-location-learn-about"
    api:
      kind: "powershell"
      call: "New-DlpCompliancePolicy -Name \"<policy-name>\" -Locations $loc -EnforcementPlanes @(\"CopilotExperiences\")"
      docs: "https://learn.microsoft.com/powershell/module/exchangepowershell/new-dlpcompliancepolicy"
    note: "$loc names the Microsoft 365 Copilot location 470f2276-e011-4e9d-a6ec-20768be3a4b0 with Inclusions and Exclusions. Security & Compliance PowerShell."
  - governs: "Which sensitivity labels Copilot is prevented from processing"
    scope: "tenant"
    ui:
      surface: "Microsoft Purview portal"
      path: "Data Loss Prevention > Policies > + Create policy > Custom > Custom policy > Locations > Microsoft Copilot, Copilot Chat, and Copilot Cowork"
      docs: "https://learn.microsoft.com/purview/dlp-microsoft365-copilot-location-learn-about"
    api:
      kind: "powershell"
      call: "New-DlpComplianceRule -Policy \"<policy-name>\" -AdvancedRule $advRule -RestrictAccess @(@{setting=\"ExcludeContentProcessing\";value=\"Block\"})"
      docs: "https://learn.microsoft.com/powershell/module/exchangepowershell/new-dlpcompliancepolicy"
    note: "In the rule, set Content contains > Sensitivity labels and Prevent Copilot and Cowork from processing content. $advRule names the label GUIDs. Learn gives no step-by-step navigation inside the rule."
confidence: "medium"
created: "2026-11-26"
updated: "2026-11-26"
roadmapModified: "2026-07-17T22:12:56"
changes:
  - date: "2026-11-26"
    note: "New briefing: the Copilot DLP sensitivity label restriction in Word, Excel and PowerPoint now applies wherever the file is stored."
  - date: "2026-11-26"
    note: "Checked against Microsoft Learn by gpt-6.1-sol: held: 1 of 57 statements contradicted, 0 unconfirmed; taken offline until corrected"
version: 1
verification:
  status: "held"
  date: "2026-11-26"
  version: 1
  model: "gpt-6.1-sol"
  engine: "copilot"
  claims: 57
  confirmed: 56
  unconfirmed: 0
  contradicted: 1
  attempts: 1
  hash: "88a95136835da0140b87cac9dd01f43a"
---

## What's changing

The Microsoft Purview Data Loss Prevention (DLP) policy that stops Microsoft 365 Copilot processing files with chosen sensitivity labels in Word, Excel and PowerPoint now applies regardless of where the file is stored, according to the roadmap item.

The policy itself is documented on Microsoft Learn. An administrator creates a DLP policy on the **Microsoft Copilot, Copilot Chat, and Copilot Cowork** location with the **Content contains** > **Sensitivity labels** condition. Matching items can still appear in the citations of a response, but Copilot does not use their content. When a file with a covered label is open in Word, Excel or PowerPoint, the Copilot skills in those apps are disabled. The policy is evaluated when the file is opened, so a label applied mid-session takes effect the next time the file is opened.

Microsoft Learn does not describe the storage-location change itself at the time of writing (November 2026), so what this page says about which storage is newly covered is the roadmap's description.

The roadmap item is **Launched** and is listed for General Availability and Current Channel, with a target of April CY2026, for the Worldwide and GCC clouds.

## Why it matters

For tenants that already run a Copilot DLP policy on sensitivity labels, the restriction now reaches labelled files that users open from local drives, network shares or other cloud storage in Word, Excel and PowerPoint, according to the roadmap. This means the label decision follows the file rather than the storage, and that users who keep labelled files outside SharePoint and OneDrive may meet disabled Copilot features on them. Microsoft documents a related behaviour for label encryption: when a labelled or encrypted file stored outside Microsoft 365 is open in an Office app, Copilot honours the same protection settings.

If nobody acts, tenants with no such DLP policy see no restriction, because the policy has to be created. Tenants with one should expect help-desk questions from users of labelled files kept outside SharePoint and OneDrive.

## Risk assessment

**Data exposure**
- The change reduces exposure: Copilot stops using the content of labelled files that a policy covers, wherever they are stored (roadmap). Items can still appear in response citations, so the file's name and existence remain visible to users who have access to it.
- Files uploaded directly into a prompt are not scanned: the Learn page states DLP only checks the text typed into the prompt.

**Security & identity**
- No change: Copilot prompts run in the security context of the user who submits them, and the policy scope follows that user, not the file owner.

**Autonomy & actions**
- No change: the feature adds no action Copilot takes on its own.

**Change & support**
- Copilot skills in Word, Excel and PowerPoint are disabled on covered files wherever they are stored, which users may read as a fault.
- Learn notes that some experiences that do not reference file content, or do not use large language models, are not currently blocked in the user interface, so the visible result can look inconsistent.
- Policy updates can take up to four hours to reach the Copilot experiences.

## Cost and licensing

The Microsoft Purview service description lists **Purview Data Loss Prevention (DLP) to restrict Copilot from processing files and emails** as included in Microsoft 365 E5/A5, Microsoft Purview Suite/EDU/FLW, Microsoft Defender + Purview Suite FLW, Microsoft 365 E5/A5/F5 Information Protection and Governance, and Office 365 E5/A5. It is listed as not included in Microsoft 365 Business Basic/Standard/Premium, Microsoft 365 E3/A3/A1/G3/F3/F1 and Office 365 E3/E1/A3/A1/G3/G1/F3.

No meter is documented for this capability. The roadmap item names no new licence for the storage-location extension. Indirect costs are admin time to review existing policies and communication to users who keep labelled files outside SharePoint and OneDrive.

## Scope

- **Users**: those included in a DLP policy on the Microsoft Copilot, Copilot Chat, and Copilot Cowork location; scoping is based on the user who submits the prompt.
- **Apps**: Copilot in Word, Excel and PowerPoint (roadmap). The Learn page also lists Microsoft 365 Copilot, Copilot Chat and Cowork for the label restriction.
- **Platforms**: Android, Desktop, iOS and Mac, as the roadmap record lists them.
- **Clouds**: Worldwide (Standard Multi-Tenant) and GCC, as the roadmap record lists them.
- **Roles**: the Learn page lists, among others, Purview Data Security AI Admin, Purview Compliance Administrator, Purview Information Protection Admin, Microsoft Entra AI Admin and Microsoft Entra Global Admin as able to create or edit a DLP policy for this location.
- **Prerequisites**: sensitivity labels applied to the files; the location is available only in the **Custom** policy template, and selecting it disables all other locations for that policy.

## Governance guidance

### Before rollout
- List the DLP policies that use the Microsoft Copilot, Copilot Chat, and Copilot Cowork location with a sensitivity label condition, and confirm the labels they cover should also be restricted for files stored outside Microsoft 365.
- Confirm the users in each policy's scope hold a licence the Purview service description lists as including this capability.
- Identify teams that keep labelled Word, Excel or PowerPoint files on local drives, network shares or non-Microsoft cloud storage.

### At rollout
- Tell those teams that Copilot skills are disabled in Word, Excel and PowerPoint on files with the covered labels, wherever the file is saved.
- Brief the help desk that the policy is evaluated at file open, so a newly applied label takes effect the next time the file is opened.

### After rollout
- Test by opening a covered labelled file from local storage in Word and checking that Copilot skills are disabled.
- Allow up to four hours after changing a policy before testing it.
- Adjust the users and groups in the policy's scope where a team needs a different label restriction.

## Governance controls

<p class="controls__lead">Where each control lives. The left column says what the setting decides and how far it reaches; the middle gives the admin centre and the exact path; the right gives the script, API or command that does the same. <em>Not yet documented</em> means Microsoft has not published a control for that surface, so there is nothing to configure yet.</p>

<table class="controls">
<thead><tr><th>Control</th><th>Admin UI</th><th>API and automation</th></tr></thead>
<tbody>
<tr><td data-label="Control"><strong>Copilot DLP policy on the Copilot location, and which users and groups it covers</strong><br><small>User</small><br><small class="controls__note">$loc names the Microsoft 365 Copilot location 470f2276-e011-4e9d-a6ec-20768be3a4b0 with Inclusions and Exclusions. Security &amp; Compliance PowerShell.</small></td><td data-label="Admin UI"><strong>Microsoft Purview portal</strong><br>Data Loss Prevention › Policies › + Create policy › Custom › Custom policy › Locations › Microsoft Copilot, Copilot Chat, and Copilot Cowork <a href="https://learn.microsoft.com/purview/dlp-microsoft365-copilot-location-learn-about" rel="noopener" class="controls__docs">Learn</a></td><td data-label="API and automation"><strong>PowerShell</strong><br><code>New-DlpCompliancePolicy -Name &quot;&lt;policy-name&gt;&quot; -Locations $loc -EnforcementPlanes @(&quot;CopilotExperiences&quot;)</code> <a href="https://learn.microsoft.com/powershell/module/exchangepowershell/new-dlpcompliancepolicy" rel="noopener" class="controls__docs">Learn</a></td></tr>
<tr><td data-label="Control"><strong>Which sensitivity labels Copilot is prevented from processing</strong><br><small>Tenant</small><br><small class="controls__note">In the rule, set Content contains &gt; Sensitivity labels and Prevent Copilot and Cowork from processing content. $advRule names the label GUIDs. Learn gives no step-by-step navigation inside the rule.</small></td><td data-label="Admin UI"><strong>Microsoft Purview portal</strong><br>Data Loss Prevention › Policies › + Create policy › Custom › Custom policy › Locations › Microsoft Copilot, Copilot Chat, and Copilot Cowork <a href="https://learn.microsoft.com/purview/dlp-microsoft365-copilot-location-learn-about" rel="noopener" class="controls__docs">Learn</a></td><td data-label="API and automation"><strong>PowerShell</strong><br><code>New-DlpComplianceRule -Policy &quot;&lt;policy-name&gt;&quot; -AdvancedRule $advRule -RestrictAccess @(@{setting=&quot;ExcludeContentProcessing&quot;;value=&quot;Block&quot;})</code> <a href="https://learn.microsoft.com/powershell/module/exchangepowershell/new-dlpcompliancepolicy" rel="noopener" class="controls__docs">Learn</a></td></tr>
</tbody>
</table>

The restriction is a DLP rule inside a policy on the Copilot location: the rule's condition is **Content contains** > **Sensitivity labels** and its action is **Prevent Copilot and Cowork from processing content**. A rule cannot combine the sensitivity labels condition with the sensitive information types condition; use separate rules in the same policy. Policy simulation mode is available for this location. The New-DlpCompliancePolicy reference gives the PowerShell example for both the policy and its rule, in Security & Compliance PowerShell. Microsoft Learn documents no separate setting for the storage-location behaviour at the time of writing (November 2026); it follows from the policy. See also [sensitivity labels](/concepts/sensitivity-labels/).

## Open questions

- Which storage locations did the policy not cover before this change, and which exactly are now covered (local drives, network shares, non-Microsoft cloud services)? Watch the Learn page for DLP and Microsoft 365 Copilot.
- Does the extension apply equally on every platform the roadmap lists (Android, Desktop, iOS, Mac), including Copilot in the mobile apps?
- Is there any way to exclude particular storage locations from the restriction, or does it follow the label alone?
- Do DLP alerts and Activity explorer record events for blocked Copilot use on files stored outside Microsoft 365?

<!-- rationale
risk: Low. The change narrows what Copilot may process: it extends an existing DLP restriction to labelled files wherever they are stored, and restricts nothing until an administrator has created such a policy.
cost: Low. The Microsoft Purview service description lists DLP to restrict Copilot from processing files and emails as included in Microsoft 365 E5/A5, Office 365 E5/A5 and Purview Suite plans; the cost of this change is admin time and user communication.
impact: Medium. Users who open labelled files from local drives, network shares or other storage in Word, Excel or PowerPoint will find Copilot skills disabled where a policy covers that label.
-->

<!-- verifier-findings (2026-11-26, held; checked by gpt-6.1-sol)
The independent check found fault only with the statements below. This is a correction: change what they name and carry the rest of the page over unchanged.
Correct each of these with the smallest change that removes the fault: delete the statement, narrow it, or put the finding's own "Found" text or worded replacement in its place. Where a fix asks for more than that (a new row, an explanation, further references), do only the part that removes the fault. A correction adds no control rows.
- [contradicted, blocker] controls[1].note / absence: Learn gives no step-by-step navigation inside the sensitivity-label rule. | Found: 1. Add another rule. 2. Set the condition to Content contains > Sensitivity labels. 3. Select the labels the district wants excluded from Copilot processing. 4. Set the action to Prevent Copilot from processing content. 5. Save the rule and policy. | Fix: Remove 'Learn gives no step-by-step navigation inside the rule.' Microsoft provides rule-level steps under 'Protection pattern C — Exclude labeled files and emails from Copilot processing' at https://learn.microsoft.com/microsoft-365/education/guide/1-reference/purview-data-security-posture-management-education. Keep the existing condition and action names supported by the cited feature page. | Source: https://learn.microsoft.com/microsoft-365/education/guide/1-reference/purview-data-security-posture-management-education
These are minor and do not hold the page. Where removing the statement, or rewording it in the words the fix gives, settles one, do that; otherwise leave it as it is. A minor finding may also add a source link it names for a statement already on the page. It adds no row and nothing that needs research.
- [supported, minor] controls[0].ui / admin-path: The printed Purview route reaches the Copilot DLP location used to create the policy and scope it to users and groups. | Found: Go to Data Loss Prevention > Policies and select + Create policy. Select the Custom template, then Custom policy. On the Locations page, set the Microsoft Copilot, Copilot Chat, and Copilot Cowork location to on. | Fix: Keep the documented location path, and add to the note: 'At the Copilot location, choose the users and groups to include or exclude.' This is the scope-selection step described at https://learn.microsoft.com/purview/dlp-microsoft365-copilot-location-learn-about#admin-units; the printed path stops at the location. | Source: https://learn.microsoft.com/purview/dlp-microsoft365-copilot-location-learn-about
- [supported, minor] controls[1].ui / admin-path: The printed Purview route is the entry route for configuring the sensitivity-label restriction. | Found: Go to Data Loss Prevention > Policies and select + Create policy. Select the Custom template, then Custom policy. On the Locations page, set the Microsoft Copilot, Copilot Chat, and Copilot Cowork location to on. | Fix: Keep the supported route ending at the Copilot location, but clarify the note with: 'The path reaches the policy location. In the policy, add a rule with Content contains > Sensitivity labels, choose the labels, and set Prevent Copilot and Cowork from processing content.' The condition and action are given at https://learn.microsoft.com/purview/dlp-microsoft365-copilot-location-learn-about#supported-conditions-and-actions. Remove the separate assertion that Learn gives no rule-level steps. | Source: https://learn.microsoft.com/purview/dlp-microsoft365-copilot-location-learn-about
-->
