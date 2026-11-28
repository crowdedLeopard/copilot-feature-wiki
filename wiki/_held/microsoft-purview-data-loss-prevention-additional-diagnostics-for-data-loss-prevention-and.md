---
title: "Microsoft Purview: diagnostics that explain DLP and auto-labeling results for SharePoint, OneDrive and Exchange"
slug: "microsoft-purview-data-loss-prevention-additional-diagnostics-for-data-loss-prevention-and"
roadmapId: 547833
topic: "governance"
products: ["Microsoft Purview"]
summary: "Purview portal diagnostics show which sensitive information types a SharePoint or OneDrive file contains and which DLP or auto-labeling policies matched, plus a DLP check for Exchange email. Nothing to switch on; review who holds the roles that run them."
status: "launched"
releasePhase: ["General Availability","Preview"]
clouds: ["Worldwide (Standard Multi-Tenant)"]
platforms: ["Web"]
targetDate: "February CY2026"
previewDate: "January CY2026"
risk: "low"
cost: "low"
impact: "low"
defaultState: "user-opt-in"
action: "review"
licensing:
  model: "included"
  notes: "Comes with Purview DLP for Exchange Online, SharePoint and OneDrive (for example Microsoft 365 E3/E5, Office 365 E3/E5, Business Premium) per the Microsoft Purview service description. No licence specific to the diagnostics is published."
audiences: ["compliance","security","m365-admin"]
tags: ["purview","dlp","diagnostics","auto-labeling","sensitivity-labels","sensitive-information-types","sharepoint","onedrive","exchange","role-groups"]
sources:
  - title: "Microsoft 365 Roadmap 547833"
    url: "https://www.microsoft.com/microsoft-365/roadmap?id=547833"
    kind: "roadmap"
  - title: "Self-help diagnostics for Microsoft Purview"
    url: "https://learn.microsoft.com/troubleshoot/microsoft-365/purview/diagnostics/purview-compliance-diagnostics"
    kind: "learn"
  - title: "Test your Data Loss Prevention policies"
    url: "https://learn.microsoft.com/purview/dlp-test-dlp-policies"
    kind: "learn"
  - title: "Microsoft Purview service description"
    url: "https://learn.microsoft.com/office365/servicedescriptions/microsoft-365-service-descriptions/microsoft-365-tenantlevel-services-licensing-guidance/microsoft-purview-service-description"
    kind: "learn"
  - title: "Automatically apply a sensitivity label to Microsoft 365 data"
    url: "https://learn.microsoft.com/purview/apply-sensitivity-label-automatically"
    kind: "learn"
  - title: "Resolve auto-labeling failures in SharePoint and OneDrive files"
    url: "https://learn.microsoft.com/troubleshoot/microsoft-365/purview/sensitivity-labels/auto-labeling-failures-sharepoint-onedrive"
    kind: "learn"
  - title: "Permissions in the Microsoft Purview portal"
    url: "https://learn.microsoft.com/purview/purview-permissions"
    kind: "learn"
  - title: "Data processed by diagnostics that run in the Microsoft 365 admin center"
    url: "https://learn.microsoft.com/troubleshoot/microsoft-365/admin/miscellaneous/data-used-by-self-help-diagnostics"
    kind: "learn"
  - title: "Who holds the Purview roles that open the DLP and Information Protection diagnostics (PowerShell)"
    url: "https://learn.microsoft.com/powershell/module/exchangepowershell/add-rolegroupmember"
    kind: "learn"
  - title: "Labelling progress and failures for an auto-labeling policy (PowerShell)"
    url: "https://learn.microsoft.com/powershell/module/exchangepowershell/get-autosensitivitylabelpolicy"
    kind: "learn"
videos: []
related: ["microsoft-purview-data-loss-prevention-new-guided-experience-to-diagnose-and-resolve-dlp-i","role-groups","microsoft-purview-data-loss-prevention-file-testing-against-sensitive-information-classifi","classifiers","microsoft-purview-compliance-portal-endpoint-data-loss-prevention-always-on-diagnostics-fo"]
controls:
  - governs: "Who holds the Purview roles that open the DLP and Information Protection diagnostics"
    scope: "tenant"
    ui:
      surface: "Microsoft Purview portal"
      path: "Settings > Roles and scopes > Role groups > Role groups for Microsoft Purview solutions > role group > Edit > Edit members of the role group > Choose users"
      docs: "https://learn.microsoft.com/purview/purview-permissions"
    api:
      kind: "powershell"
      call: "Add-RoleGroupMember -Identity \"<role-group>\" -Member \"<user-UPN>\""
      docs: "https://learn.microsoft.com/powershell/module/exchangepowershell/add-rolegroupmember"
    note: "Needs the Role Management role. The diagnostics Learn page lists the roles that run each set."
  - governs: "Which DLP policies and rules match a SharePoint or OneDrive file"
    scope: "other"
    ui:
      surface: "Microsoft Purview portal"
      path: "Solutions > Data Loss Prevention > Diagnostics"
      docs: "https://learn.microsoft.com/troubleshoot/microsoft-365/purview/diagnostics/purview-compliance-diagnostics"
    api:
      kind: "powershell"
      call: "Test-DlpPolicies -workload <workload> -Fileurl <path/direct link> -SendReportTo <smtpaddress>"
      docs: "https://learn.microsoft.com/purview/dlp-test-dlp-policies"
    note: "Read-only check. The Exchange Online message trace check is on the same portal page. The cmdlet reports only on policies scoped to SharePoint, OneDrive or both."
  - governs: "Whether a SharePoint or OneDrive file met auto-labeling conditions"
    scope: "other"
    ui:
      surface: "Microsoft Purview portal"
      path: "Solutions > Information Protection > Diagnostics"
      docs: "https://learn.microsoft.com/troubleshoot/microsoft-365/purview/diagnostics/purview-compliance-diagnostics"
    api:
      kind: "powershell"
      call: "Test-DlpPolicies -workload <workload> -Fileurl <path/direct link> -SendReportTo <smtpaddress>"
      docs: "https://learn.microsoft.com/purview/dlp-test-dlp-policies"
    note: "Needs Compliance Administrator or Security Administrator. Learn names this cmdlet for the auto-labeling check; the cmdlet's own page describes DLP policy results."
  - governs: "Labelling progress and failures for an auto-labeling policy"
    scope: "other"
    ui:
      surface: "Microsoft Purview portal"
      path: "Solutions > Information Protection > Policies > Auto-labeling policies > policy > View details"
      docs: "https://learn.microsoft.com/troubleshoot/microsoft-365/purview/sensitivity-labels/auto-labeling-failures-sharepoint-onedrive"
    api:
      kind: "powershell"
      call: "Get-AutoSensitivityLabelPolicy -Identity \"<policy name>\" -IncludeProgressFeedback"
      docs: "https://learn.microsoft.com/powershell/module/exchangepowershell/get-autosensitivitylabelpolicy"
    note: "Existing policy-level view that complements the new file diagnostic. Cmdlet is in Security & Compliance PowerShell."
confidence: "high"
created: "2026-11-28"
updated: "2026-11-28"
roadmapModified: "2026-05-15T22:00:42"
changes:
  - date: "2026-11-28"
    note: "New briefing: Purview portal diagnostics for DLP in SharePoint, OneDrive and Exchange and for auto-labeling, with the roles that run them and the Test-DlpPolicies equivalent."
  - date: "2026-11-28"
    note: "Checked against Microsoft Learn by gpt-6.1-sol: held: 1 of 69 statements contradicted, 1 unconfirmed; taken offline until corrected"
version: 1
verification:
  status: "held"
  date: "2026-11-28"
  version: 1
  model: "gpt-6.1-sol"
  engine: "copilot"
  claims: 69
  confirmed: 67
  unconfirmed: 1
  contradicted: 1
  attempts: 1
  hash: "75ff17ce190a7c33ce00245a001e53b8"
---

## What's changing

Microsoft Purview adds self-help diagnostics that tell an administrator why a data loss prevention (DLP) policy or an auto-labeling policy did, or did not, act on a specific file or email. The roadmap item names three: a DLP diagnostic for SharePoint, a DLP diagnostic for Exchange Online, and an auto-labeling diagnostic for SharePoint and OneDrive. Its description says they help users understand which sensitive information exists in a document, which labels were applied and which policies were triggered.

Microsoft Learn documents these as diagnostics on the **Solutions** pages of the Microsoft Purview portal, under **Solutions > Information Protection > Diagnostics** and **Solutions > Data Loss Prevention > Diagnostics**. The SharePoint and OneDrive checks take the full path of a file (not a sharing link) and check its properties and classification to show whether a DLP rule or the auto-labeling conditions matched. The Exchange Online check takes an uploaded message trace log (.csv) and reviews the DLP rules applied to the email messages. Each Solutions-page diagnostic first runs the `Check-PurviewConfig` cmdlet, then the cmdlet for the issue; for the file checks Learn names `Test-DlpPolices`. Microsoft states that although the diagnostics can fix some configuration issues, they don't make changes to the tenant without the administrator's consent.

The roadmap item is **Launched**, with a preview date of January CY2026 and general availability targeted for February CY2026, and lists both General Availability and Preview as release phases. The Learn page says the Solutions-page diagnostics are being rolled out gradually and might not yet be available in every organisation.

## Why it matters

The usual questions behind a DLP or auto-labeling ticket are "why was this file blocked?" and "why is this file not labelled?". For SharePoint and OneDrive files, Learn also documents the `Test-DlpPolicies` cmdlet in Exchange Online PowerShell, which emails its report to an address you supply. Portal diagnostics put the same kind of answer in front of compliance staff who do not script, which should shorten triage and reduce escalations.

The diagnostics are on-demand: an administrator with one of the listed roles chooses to run one against a file path or a message trace log. The thing to plan for is who can run them. The DLP diagnostics accept several read-only roles, so people who cannot edit policies can still see which sensitive information types a named file contains and which policies matched it.

## Risk assessment

**Data exposure**
- The file checks report classification results and matching policies for whatever file path the operator enters. Holders of read-only roles on the DLP list, such as **Security Reader** or **View-Only DLP Compliance Management**, get this view. Role group membership (first row of the controls table) decides who that is.
- The Exchange Online check needs a message trace export, and the Outlook on the web policy-tip check needs a HAR file exported from the browser's Developer Tools. Treat both files as sensitive while they are handled.

**Security & identity**
- Access rests on roles: Information Protection diagnostics need Compliance Administrator or Security Administrator, while DLP diagnostics accept any of twelve roles listed on the Learn page.

**Autonomy & actions**
- A diagnostic runs only when an administrator starts it, and Microsoft states the diagnostics don't make changes to the tenant without consent.

**Change & support**
- The `Test-DlpPolicies` page says the cmdlet works only with simple conditions, not complex, grouped or nested ones. Confirm whether the portal check that Learn ties to it has the same limit before trusting a "no match" result.

## Cost and licensing

The diagnostics Learn page names roles and no licence, and Microsoft publishes no licence specific to these diagnostics. They are pages inside Purview DLP and Information Protection. The Microsoft Purview service description lists the licences that give rights to DLP for Exchange Online, SharePoint Online and OneDrive for Business: Microsoft 365 E5/A5/G5/E3/A3/G3, Microsoft 365 Business Premium, SharePoint Online Plan 2, OneDrive for Business (Plan 2), Exchange Online Plan 2, Office 365 E5/A5/G5/E3/A3/G3, and Microsoft Purview Suite/EDU/GOV/FLW with Microsoft Defender + Purview Suite FLW. Service-side auto-labeling for SharePoint, OneDrive and Exchange is licensed under its own **Client and service-side automatic sensitivity labeling** entry in that service description, and Microsoft notes that client-only entitlements don't establish service-side entitlement.

No meter or charge for running a diagnostic is documented at the time of writing (November 2026). The cost the sources show is admin time.

## Scope

- **Who runs them:** Information Protection diagnostics need Compliance Administrator or Security Administrator. DLP diagnostics accept Compliance Administrator, Security Administrator, Organization Configuration, View-Only Configuration, Security Reader, DLP Compliance Management, View-Only DLP Compliance Management, Insider Risk Management Administrator, Information Protection Administrator, Information Protection Analyst, Information Protection Investigator or Data Security AI Administrator.
- **Content covered:** files in SharePoint and OneDrive, and Exchange Online email through a message trace log.
- **Clouds:** the roadmap item lists Worldwide (Standard Multi-Tenant) only.
- **Platform:** web, in the Microsoft Purview portal.
- **Rollout:** gradual, per the Learn page. Separate diagnostics in the **Help** pane, such as **DLP policy and rule configuration** (minimum role Global admin), already exist and aren't available in GCC High, DoD or Microsoft 365 operated by 21Vianet.

## Governance guidance

### Before rollout
- Review membership of the Purview role groups that carry the DLP diagnostic roles, read-only ones included, under Settings > Roles and scopes > Role groups.
- Give the staff who triage DLP and labelling tickets the narrowest role on the diagnostics list.
- Agree where message trace exports and HAR files are kept during a diagnostic and when they are deleted.

### At rollout
- Check that **Diagnostics** appears under Solutions > Data Loss Prevention and Solutions > Information Protection, since the rollout is gradual.
- Run the SharePoint or OneDrive DLP check against a known test file and compare it with a `Test-DlpPolicies` report for the same file.

### After rollout
- Use the auto-labeling diagnostic alongside the policy's **View details** failure list when a file is not labelled.
- Update the DLP support runbook to start with the portal diagnostic and keep `Test-DlpPolicies` for scripted checks.

## Governance controls

<p class="controls__lead">Where each control lives. The left column says what the setting decides and how far it reaches; the middle gives the admin centre and the exact path; the right gives the script, API or command that does the same. <em>Not yet documented</em> means Microsoft has not published a control for that surface, so there is nothing to configure yet.</p>

<table class="controls">
<thead><tr><th>Control</th><th>Admin UI</th><th>API and automation</th></tr></thead>
<tbody>
<tr><td data-label="Control"><strong>Who holds the Purview roles that open the DLP and Information Protection diagnostics</strong><br><small>Tenant</small><br><small class="controls__note">Needs the Role Management role. The diagnostics Learn page lists the roles that run each set.</small></td><td data-label="Admin UI"><strong>Microsoft Purview portal</strong><br>Settings › Roles and scopes › Role groups › Role groups for Microsoft Purview solutions › role group › Edit › Edit members of the role group › Choose users <a href="https://learn.microsoft.com/purview/purview-permissions" rel="noopener" class="controls__docs">Learn</a></td><td data-label="API and automation"><strong>PowerShell</strong><br><code>Add-RoleGroupMember -Identity &quot;&lt;role-group&gt;&quot; -Member &quot;&lt;user-UPN&gt;&quot;</code> <a href="https://learn.microsoft.com/powershell/module/exchangepowershell/add-rolegroupmember" rel="noopener" class="controls__docs">Learn</a></td></tr>
<tr><td data-label="Control"><strong>Which DLP policies and rules match a SharePoint or OneDrive file</strong><br><small class="controls__note">Read-only check. The Exchange Online message trace check is on the same portal page. The cmdlet reports only on policies scoped to SharePoint, OneDrive or both.</small></td><td data-label="Admin UI"><strong>Microsoft Purview portal</strong><br>Solutions › Data Loss Prevention › Diagnostics <a href="https://learn.microsoft.com/troubleshoot/microsoft-365/purview/diagnostics/purview-compliance-diagnostics" rel="noopener" class="controls__docs">Learn</a></td><td data-label="API and automation"><strong>PowerShell</strong><br><code>Test-DlpPolicies -workload &lt;workload&gt; -Fileurl &lt;path/direct link&gt; -SendReportTo &lt;smtpaddress&gt;</code> <a href="https://learn.microsoft.com/purview/dlp-test-dlp-policies" rel="noopener" class="controls__docs">Learn</a></td></tr>
<tr><td data-label="Control"><strong>Whether a SharePoint or OneDrive file met auto-labeling conditions</strong><br><small class="controls__note">Needs Compliance Administrator or Security Administrator. Learn names this cmdlet for the auto-labeling check; the cmdlet's own page describes DLP policy results.</small></td><td data-label="Admin UI"><strong>Microsoft Purview portal</strong><br>Solutions › Information Protection › Diagnostics <a href="https://learn.microsoft.com/troubleshoot/microsoft-365/purview/diagnostics/purview-compliance-diagnostics" rel="noopener" class="controls__docs">Learn</a></td><td data-label="API and automation"><strong>PowerShell</strong><br><code>Test-DlpPolicies -workload &lt;workload&gt; -Fileurl &lt;path/direct link&gt; -SendReportTo &lt;smtpaddress&gt;</code> <a href="https://learn.microsoft.com/purview/dlp-test-dlp-policies" rel="noopener" class="controls__docs">Learn</a></td></tr>
<tr><td data-label="Control"><strong>Labelling progress and failures for an auto-labeling policy</strong><br><small class="controls__note">Existing policy-level view that complements the new file diagnostic. Cmdlet is in Security &amp; Compliance PowerShell.</small></td><td data-label="Admin UI"><strong>Microsoft Purview portal</strong><br>Solutions › Information Protection › Policies › Auto-labeling policies › policy › View details <a href="https://learn.microsoft.com/troubleshoot/microsoft-365/purview/sensitivity-labels/auto-labeling-failures-sharepoint-onedrive" rel="noopener" class="controls__docs">Learn</a></td><td data-label="API and automation"><strong>PowerShell</strong><br><code>Get-AutoSensitivityLabelPolicy -Identity &quot;&lt;policy name&gt;&quot; -IncludeProgressFeedback</code> <a href="https://learn.microsoft.com/powershell/module/exchangepowershell/get-autosensitivitylabelpolicy" rel="noopener" class="controls__docs">Learn</a></td></tr>
</tbody>
</table>

Access to the diagnostics follows from the roles each set requires, so role group membership is the deciding control. Managing role group members in the Purview portal needs an account with the *Role Management* role. `Test-DlpPolicies` needs a connection to Exchange Online PowerShell and sends its report by email to the address given in `-SendReportTo`, so choose a monitored compliance mailbox.

## Open questions

- Do the Purview Solutions-page diagnostics process data the way Microsoft describes for Microsoft 365 admin center diagnostics, where configuration information is processed and stored temporarily outside the compliance boundary? Watch the self-help diagnostics Learn page.
- Does the SharePoint and OneDrive check share the `Test-DlpPolicies` limit to simple conditions, or can it explain grouped and nested rules?
- When will the gradual rollout of the Solutions-page diagnostics finish, given the roadmap already shows the item as Launched? Watch Message center.
- Will the diagnostics reach the US Government clouds, which the roadmap item does not list?

<!-- rationale
risk: Low. The diagnostics are read-only checks an administrator starts on demand, and Microsoft states they don't change the tenant without consent; the exposure is that read-only DLP roles can see a named file's classification results.
cost: Low. No licence or meter specific to the diagnostics is published; they sit inside Purview DLP and Information Protection, which the Microsoft Purview service description licenses, so the visible cost is admin time.
impact: Low. Only administrators holding the listed Purview roles see and run the diagnostics; end users notice nothing.
-->

<!-- verifier-findings (2026-11-28, held; checked by gpt-6.1-sol)
The independent check found fault only with the statements below. This is a correction: change what they name and carry the rest of the page over unchanged.
Correct each of these with the smallest change that removes the fault: delete the statement, narrow it, or put the finding's own "Found" text or worded replacement in its place. Where a fix asks for more than that (a new row, an explanation, further references), do only the part that removes the fault. A correction adds no control rows.
- [unsupported, blocker] controls[3].api; controls[3].governs; Governance controls table / command: Get-AutoSensitivityLabelPolicy -Identity "<policy name>" -IncludeProgressFeedback provides labeling failure results for the policy. | Found: Searched: Get-AutoSensitivityLabelPolicy IncludeProgressFeedback labeling failures report. Opened get-autosensitivitylabelpolicy, apply-sensitivity-label-automatically, and auto-labeling-failures-sharepoint-onedrive. The command reference documents progress counts, not file-failure results. | Fix: Keep the command, but qualify controls[3].note and its rendered table note: 'The portal shows file failures. The cmdlet reports labeling progress only: files to be labeled, files labeled in the last 7 days, and total files labeled for enabled policies; file-failure details are not documented for this switch. Cmdlet is in Security & Compliance PowerShell.' See https://learn.microsoft.com/powershell/module/exchangepowershell/get-autosensitivitylabelpolicy.
- [contradicted, blocker] Risk assessment: Data exposure; Governance controls / applicability: Purview role group membership is the deciding control for who holds the roles that allow diagnostic access. | Found: If you assign both an Entra role and a scoped Microsoft Purview role group assignment to a user or group ... the Entra role takes precedence at runtime. As a result, the user's effective permissions are unscoped | Fix: Replace 'Role group membership (first row of the controls table) decides who that is' with 'Purview role group membership is one route to these permissions; Microsoft Entra assignments of the listed roles also grant access.' Replace 'Access to the diagnostics follows from the roles each set requires, so role group membership is the deciding control' with 'Access to the diagnostics follows from the roles each set requires; review both Purview role group membership and Microsoft Entra assignments of those roles.' The existing cited permissions page documents the Entra mappings and precedence. | Source: https://learn.microsoft.com/purview/purview-permissions
These are minor and do not hold the page. Where removing the statement, or rewording it in the words the fix gives, settles one, do that; otherwise leave it as it is. A minor finding may also add a source link it names for a statement already on the page. It adds no row and nothing that needs research.
- [supported, minor] controls[3].ui; Governance controls table; Governance guidance: After rollout / admin-path: Solutions > Information Protection > Policies > Auto-labeling policies > policy > View details reaches the auto-labeling failure view. | Found: Select Solutions > Information Protection > Policies > Auto-labeling policies. ... select View details in the policy details panel. ... Select Labeling failures to see failed label applications, or Label removal failures for a policy that removes labels. | Fix: For label-application failures, extend controls[3].ui.path to 'Solutions > Information Protection > Policies > Auto-labeling policies > policy > View details > Labeling failures'. In the After rollout bullet, replace 'the policy's View details failure list' with 'the policy's View details > Labeling failures list'. The cited page also documents Label removal failures for removal policies. | Source: https://learn.microsoft.com/troubleshoot/microsoft-365/purview/sensitivity-labels/auto-labeling-failures-sharepoint-onedrive
-->
