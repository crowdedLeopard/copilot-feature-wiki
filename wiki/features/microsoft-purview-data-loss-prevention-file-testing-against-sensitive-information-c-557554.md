---
title: "Microsoft Purview DLP: test files against one or all classifiers (Worldwide)"
slug: "microsoft-purview-data-loss-prevention-file-testing-against-sensitive-information-c-557554"
roadmapId: 557554
topic: "governance"
products: ["Microsoft Purview"]
summary: "Purview adds a file test on the Classification page that checks one or all classifiers for sensitive content. This item covers Worldwide. No source names an admin action; review who can reach the Classifiers page."
status: "launched"
releasePhase: ["General Availability","Preview"]
clouds: ["Worldwide (Standard Multi-Tenant)"]
platforms: ["Web"]
targetDate: "March CY2026"
previewDate: "February CY2026"
risk: "low"
cost: "low"
impact: "low"
defaultState: "unknown"
action: "review"
licensing:
  model: "unknown"
  notes: "Not yet published for the classifier file test. For the existing per-type Test option, Learn says at least one Exchange Online licence must be added to the tenant, otherwise the option is greyed out."
audiences: ["security","compliance"]
tags: ["purview","dlp","classifiers","sensitive-information-types","information-protection"]
sources:
  - title: "Microsoft 365 Roadmap 557554"
    url: "https://www.microsoft.com/microsoft-365/roadmap?id=557554"
    kind: "roadmap"
  - title: "Microsoft Purview classifiers overview"
    url: "https://learn.microsoft.com/purview/data-classification-overview"
    kind: "learn"
  - title: "Test sensitive information types"
    url: "https://learn.microsoft.com/purview/sit-test-a-sit"
    kind: "learn"
  - title: "Learn about sensitive information types"
    url: "https://learn.microsoft.com/purview/sit-sensitive-information-type-learn-about"
    kind: "learn"
  - title: "Permissions in the Microsoft Purview portal"
    url: "https://learn.microsoft.com/purview/purview-permissions"
    kind: "learn"
  - title: "Testing one uploaded file against one sensitive information type (today's per-type test) (PowerShell)"
    url: "https://learn.microsoft.com/powershell/module/exchangepowershell/test-dataclassification"
    kind: "learn"
  - title: "Who can reach the Classifiers page (Purview role-group membership) (PowerShell)"
    url: "https://learn.microsoft.com/powershell/module/exchangepowershell/add-rolegroupmember"
    kind: "learn"
videos: []
related: ["microsoft-purview-data-loss-prevention-file-testing-against-sensitive-information-classifi","microsoft-purview-unified-classification-management-experience","classifiers","sensitive-information-types","role-groups"]
controls:
  - governs: "Testing one uploaded file against one sensitive information type (today's per-type test)"
    scope: "other"
    ui:
      surface: "Microsoft Purview portal"
      path: "Information Protection > Classifiers > Sensitive info types > sensitive information type > Test"
      docs: "https://learn.microsoft.com/purview/sit-test-a-sit"
    api:
      kind: "powershell"
      call: "Test-DataClassification -ClassificationNames <Name> -TextToClassify <String>"
      docs: "https://learn.microsoft.com/powershell/module/exchangepowershell/test-dataclassification"
    note: "Existing test, not a control over the new classifier file test. The portal test takes one unencrypted file at a time; the cmdlet tests a text string."
  - governs: "Who can reach the Classifiers page (Purview role-group membership)"
    scope: "user"
    ui:
      surface: "Microsoft Purview portal"
      path: "Settings > Roles and scopes > Role groups > Role groups for Microsoft Purview solutions > role group > Edit > Edit members of the role group > Choose users"
      docs: "https://learn.microsoft.com/purview/purview-permissions"
    api:
      kind: "powershell"
      call: "Add-RoleGroupMember -Identity \"<role-group>\" -Member \"<user-UPN>\""
      docs: "https://learn.microsoft.com/powershell/module/exchangepowershell/add-rolegroupmember"
    note: "Portal steps need an admin account with the Role management role. Entra roles also give access to the Classifiers page. Learn does not say which roles run the new test."
  - governs: "Whether the classifier file test is available in the tenant"
    scope: "tenant"
    ui: null
    api: null
    note: "Microsoft Learn documents no tenant setting for this test at the time of writing (November 2026)."
confidence: "medium"
created: "2026-11-28"
updated: "2026-11-28"
roadmapModified: "2026-05-11T23:15:11"
changes:
  - date: "2026-11-28"
    note: "First briefing for the Worldwide item; Learn does not yet describe the classifier file test, so the page rests on the roadmap and the per-type test documentation."
  - date: "2026-11-28"
    note: "Checked against Microsoft Learn by gpt-6.1-sol: passed with 1 of 64 statements not yet confirmed"
version: 1
verification:
  status: "verified-with-gaps"
  date: "2026-11-28"
  version: 1
  model: "gpt-6.1-sol"
  engine: "copilot"
  claims: 64
  confirmed: 62
  unconfirmed: 1
  contradicted: 1
  attempts: 0
  hash: "75cdfcf2f43dbb2c0fa98bdaf90cbbb5"
---

## What's changing

The roadmap item says Microsoft Purview adds a test to the main Classification page that checks files against the available classifiers for sensitive information. Users can select a single classifier or run the test across all classifiers. The roadmap gives the purpose as helping users find sensitive content in files and troubleshoot classification issues more efficiently.

Microsoft Learn does not describe this file test at the time of writing (November 2026), so what this page says about its behaviour is the roadmap's description. Learn describes a Classifiers page that can be reached under **Information Protection**, **Data Loss Prevention** or **DSPM** in the Microsoft Purview portal, and says the new Classifiers experience is in preview, available alongside the existing classification experiences. The roadmap does not say whether that page is the "main Classification page". Learn does document a related test for one sensitive information type: open the type under Information Protection > Classifiers > Sensitive info types, choose **Test** and upload a file. That page says only one file can be uploaded and tested at a time, and that the procedure is supported only for unencrypted files. No source says the new test has the same limits.

The roadmap record lists this item as Launched, with a preview date of February CY2026, a target of March CY2026, release phases General Availability and Preview, platform Web, and cloud Worldwide (Standard Multi-Tenant). Microsoft lists the feature under a second roadmap item, 566323, for GCC, GCC High and DoD (Launched, target August CY2026). This page covers Worldwide only.

## Why it matters

For teams that troubleshoot missed or unexpected DLP matches, a test that runs one file against every classifier should shorten the work of finding which classifier fires, provided its results match what policies see. Learn warns that the same sensitive information type can produce different results depending on where content is evaluated (email in transit, files at rest, files on managed devices), and that the existing uploaded-file test does not refresh classification for existing SharePoint or OneDrive files. Treat a test result as evidence about one file, not a guarantee about a policy.

Microsoft has not stated what happens on arrival, and no source says existing behaviour changes, so treat this as an optional capability to check rather than a change that lands on users.

## Risk assessment

**Data exposure**
- Testing means uploading a file to the portal. Agree whether testers may use files with real personal or customer data, and prefer sample or redacted files. Access to the Classifiers page comes from Entra administrator roles or Purview role groups (see the controls table).
- Learn says the existing per-type test checks the uploaded file and does not refresh classification for existing SharePoint or OneDrive files, so running a test does not by itself reclassify stored content.

**Security & identity**
- For the existing per-type test, Learn requires one of a list of Purview role groups and one of a list of Exchange roles or role groups. The roles for the new test are not documented at the time of writing; confirm in a test account who can run it.

**Autonomy & actions**
- No change: the roadmap describes a test that reports whether a file contains sensitive information, and no source says it labels, blocks, moves or deletes anything.

**Change & support**
- Tell compliance staff and the help desk that a clean test is not proof that a SharePoint, Exchange or endpoint policy will not match, because Learn notes results can differ by workload.

## Cost and licensing

No licence or meter for the classifier file test is published at the time of writing, and the Learn page for the Classifiers page names no licence.

For the existing per-type Test option, *Learn about sensitive information types* says that to test any custom or default sensitive information type there must be at least one Exchange Online licence added to the tenant; otherwise the Test option is greyed out. Whether the new test carries the same condition is not stated.

The indirect cost is administrator and analyst time to run tests and interpret results.

## Scope

- **Cloud:** Worldwide (Standard Multi-Tenant), as the roadmap record lists it. GCC, GCC High and DoD are tracked under roadmap item 566323.
- **Platform:** Web (Microsoft Purview portal).
- **Who can reach the Classifiers page:** Learn lists the Entra roles Global administrator, Compliance administrator, Security administrator and Compliance data administrator, and the Purview role groups Information Protection, Information Protection Admins, Information Protection Analysts, Information Protection Investigators and Information Protection Readers. Which of these can run the new test is not stated.
- **Prerequisites:** none stated in the roadmap record.

## Governance guidance

### Before rollout
- Check who holds the Entra roles and Purview role groups that open the Classifiers page, using the role-group row in the controls table, and remove access testers do not need.
- Decide which files may be used for testing and whether testers may upload files with real personal or customer data.
- Confirm the tenant has at least one Exchange Online licence, because Learn ties the existing Test option to it.

### At rollout
- Open Classifiers under Information Protection or Data Loss Prevention in a test account and check whether the file test is offered, and whether it offers one classifier or all of them.
- Run a known-positive and a known-negative file through the existing per-type test (first row of the controls table) and record the results as a baseline.

### After rollout
- Compare test results with what DLP and auto-labeling policies actually matched, and record differences in a runbook for the compliance team.
- Review role-group membership after the first month and remove testers who no longer need it.

## Governance controls

<p class="controls__lead">Where each control lives. The left column says what the setting decides and how far it reaches; the middle gives the admin centre and the exact path; the right gives the script, API or command that does the same. <em>Not yet documented</em> means Microsoft has not published a control for that surface, so there is nothing to configure yet.</p>

<table class="controls">
<thead><tr><th>Control</th><th>Admin UI</th><th>API and automation</th></tr></thead>
<tbody>
<tr><td data-label="Control"><strong>Testing one uploaded file against one sensitive information type (today's per-type test)</strong><br><small class="controls__note">Existing test, not a control over the new classifier file test. The portal test takes one unencrypted file at a time; the cmdlet tests a text string.</small></td><td data-label="Admin UI"><strong>Microsoft Purview portal</strong><br>Information Protection › Classifiers › Sensitive info types › sensitive information type › Test <a href="https://learn.microsoft.com/purview/sit-test-a-sit" rel="noopener" class="controls__docs">Learn</a></td><td data-label="API and automation"><strong>PowerShell</strong><br><code>Test-DataClassification -ClassificationNames &lt;Name&gt; -TextToClassify &lt;String&gt;</code> <a href="https://learn.microsoft.com/powershell/module/exchangepowershell/test-dataclassification" rel="noopener" class="controls__docs">Learn</a></td></tr>
<tr><td data-label="Control"><strong>Who can reach the Classifiers page (Purview role-group membership)</strong><br><small>User</small><br><small class="controls__note">Portal steps need an admin account with the Role management role. Entra roles also give access to the Classifiers page. Learn does not say which roles run the new test.</small></td><td data-label="Admin UI"><strong>Microsoft Purview portal</strong><br>Settings › Roles and scopes › Role groups › Role groups for Microsoft Purview solutions › role group › Edit › Edit members of the role group › Choose users <a href="https://learn.microsoft.com/purview/purview-permissions" rel="noopener" class="controls__docs">Learn</a></td><td data-label="API and automation"><strong>PowerShell</strong><br><code>Add-RoleGroupMember -Identity &quot;&lt;role-group&gt;&quot; -Member &quot;&lt;user-UPN&gt;&quot;</code> <a href="https://learn.microsoft.com/powershell/module/exchangepowershell/add-rolegroupmember" rel="noopener" class="controls__docs">Learn</a></td></tr>
<tr><td data-label="Control"><strong>Whether the classifier file test is available in the tenant</strong><br><small>Tenant</small><br><small class="controls__note">Microsoft Learn documents no tenant setting for this test at the time of writing (November 2026).</small></td><td data-label="Admin UI"><em class="controls__gap">Not yet documented</em></td><td data-label="API and automation"><em class="controls__gap">Not yet documented</em></td></tr>
</tbody>
</table>

The first two rows are existing controls around the new test; neither is documented as a switch for it. Microsoft Learn documents no tenant setting for the classifier file test at the time of writing (November 2026).

The Test-DataClassification cmdlet tests a text string, not an uploaded file. Adding users to role groups in the portal needs an admin account with the *Role management* role. The per-type test page also lists Exchange roles or role groups the account needs, which the role-group row does not cover.

## Open questions

- Which licence, if any, does the classifier file test need, and does the Exchange Online licence condition of the per-type Test option apply? Watch the Learn page for the Classifiers page.
- Which roles and role groups can run the test, and does the list for the per-type test apply unchanged?
- Is the test available to every account that can open the Classifiers page, and can an administrator switch it off?
- Which file types, sizes and encryption states does the test support, and does it still take one file at a time?
- The record lists both Preview and General Availability, and Learn marks the new Classifiers experience as preview: which parts are generally available in Worldwide tenants?

<!-- rationale
risk: Low. The roadmap describes a test that reports whether a file contains sensitive information, and no source says it changes labels, policies or stored files; its default state is not stated.
cost: Low. No licence or meter is published for the new test; Learn requires an Exchange Online licence in the tenant for the existing per-type Test option. Plan for admin time to run tests.
impact: Low. Administrators and analysts who can open the Classifiers page are the people who would use it; the roadmap describes no change for end users.
-->

<!-- verifier-findings (2026-11-28, verified-with-gaps; checked by gpt-6.1-sol)
The independent check found fault only with the statements below. This is a correction: change what they name and carry the rest of the page over unchanged.
Correct each of these with the smallest change that removes the fault: delete the statement, narrow it, or put the finding's own "Found" text or worded replacement in its place. Where a fix asks for more than that (a new row, an explanation, further references), do only the part that removes the fault. A correction adds no control rows.
- [unsupported, major] Risk assessment: Data exposure / behaviour: Testing with the new feature means uploading a file to the portal. | Found: Searched: '"Purview" "test" "all classifiers" upload'; 'Microsoft Purview Classifiers file testing all classifiers upload file roles default availability tenant setting'. Read classifiers overview and SIT test; only the existing test documents upload. | Fix: Replace 'Testing means uploading a file to the portal.' with 'The existing per-type test uploads a file to the portal.' The latter is documented at https://learn.microsoft.com/purview/sit-test-a-sit.
These are minor and do not hold the page. Where removing the statement, or rewording it in the words the fix gives, settles one, do that; otherwise leave it as it is. A minor finding may also add a source link it names for a statement already on the page. It adds no row and nothing that needs research.
- [contradicted, minor] Governance guidance: Before rollout, first bullet / consistency: The checklist asks readers to review Entra role membership, but the table provides only Purview role-group membership. | Found: Checklist: 'Check who holds the Entra roles and Purview role groups ... using the role-group row'. Table: 'Who can reach the Classifiers page (Purview role-group membership)'; its path and cmdlet manage Purview role groups, not Entra roles. | Fix: Replace the first Before rollout bullet with 'Check who holds the Purview role groups that open the Classifiers page, using the role-group row in the controls table, and remove access testers do not need.'
-->
