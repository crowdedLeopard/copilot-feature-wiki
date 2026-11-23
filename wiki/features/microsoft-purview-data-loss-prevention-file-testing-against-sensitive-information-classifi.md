---
title: "Microsoft Purview DLP: test files against all classifiers (GCC, GCC High, DoD)"
slug: "microsoft-purview-data-loss-prevention-file-testing-against-sensitive-information-classifi"
roadmapId: 566323
topic: "governance"
products: ["Microsoft Purview"]
summary: "Purview is adding a file test against one or all classifiers. This item covers GCC, GCC High and DoD. No source names an admin action; review who can reach it."
status: "launched"
releasePhase: ["General Availability"]
clouds: ["GCC","GCC High","DoD"]
platforms: ["Web"]
targetDate: "August CY2026"
previewDate: null
risk: "low"
cost: "low"
impact: "low"
defaultState: "unknown"
action: "review"
licensing:
  model: "unknown"
  notes: "Not yet published for the all-classifier test: no Microsoft page read names a licence for it. For the existing per-type Test option, Learn says at least one Exchange Online licence must be in the tenant, otherwise Test is greyed out."
audiences: ["security","compliance"]
tags: ["purview","classifiers","sensitive-information-types","dlp","information-protection","gcc","gcc-high","dod"]
sources:
  - title: "Microsoft 365 Roadmap 566323"
    url: "https://www.microsoft.com/microsoft-365/roadmap?id=566323"
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
  - title: "Test-DataClassification"
    url: "https://learn.microsoft.com/powershell/module/exchangepowershell/test-dataclassification"
    kind: "learn"
  - title: "Add-RoleGroupMember"
    url: "https://learn.microsoft.com/powershell/module/exchangepowershell/add-rolegroupmember"
    kind: "learn"
  - title: "Assign permissions in eDiscovery"
    url: "https://learn.microsoft.com/purview/edisc-permissions"
    kind: "learn"
videos: []
related: ["microsoft-purview-unified-classification-management-experience","sensitive-information-types","microsoft-purview-purview-information-protection-classifier-simulation-mode-health-monitor"]
controls:
  - governs: "Testing one uploaded file against one sensitive information type (today's per-type test)"
    scope: "other"
    ui:
      surface: "Microsoft Purview portal"
      path: "Information Protection > Classifiers > Sensitive info types > sensitive information type > Test"
      docs: "https://learn.microsoft.com/purview/sit-test-a-sit"
    api:
      kind: "powershell"
      call: "Test-DataClassification -ClassificationNames <names> -TextToClassify <text>"
      docs: "https://learn.microsoft.com/powershell/module/exchangepowershell/test-dataclassification"
    note: "Existing test, not a control over the new all-classifier test. The cmdlet tests a text string, not an uploaded file; the portal test takes one unencrypted file at a time."
  - governs: "Who can reach the Classifiers page (Purview role-group membership)"
    scope: "user"
    ui:
      surface: "Microsoft Purview portal"
      path: "Settings > Roles and scopes > Role groups > role group > Edit > Edit members of the role group > Choose users"
      docs: "https://learn.microsoft.com/purview/purview-permissions"
    api:
      kind: "powershell"
      call: "Add-RoleGroupMember -Identity \"<role-group>\" -Member \"<user>\""
      docs: "https://learn.microsoft.com/powershell/module/exchangepowershell/add-rolegroupmember"
    note: "To view role groups, be a global administrator or have the Role Management role (assigned only to the Organization Management role group). Entra roles can also give access. Learn does not say which role runs the new test."
confidence: "medium"
created: "2026-11-22"
updated: "2026-11-23"
roadmapModified: "2026-10-05T23:03:05"
changes:
  - date: "2026-11-22"
    note: "First briefing for the GCC, GCC High and DoD item; Learn does not yet describe the all-classifier test, so the page rests on the roadmap and the per-type test documentation."
  - date: "2026-11-22"
    note: "Checked against Microsoft Learn by gpt-6.1-sol: held: 1 of 57 statements contradicted, 4 unconfirmed; taken offline until corrected"
  - date: "2026-11-23"
    note: "Corrected after the independent check: the Role Management role statement, the role-group path, and unsupported claims about who can submit files, result volume, uploaded input and policy independence."
  - date: "2026-11-23"
    note: "Checked against Microsoft Learn by gpt-6.1-sol: passed: all 60 statements confirmed"
version: 2
verification:
  status: "verified"
  date: "2026-11-23"
  version: 2
  model: "gpt-6.1-sol"
  engine: "copilot"
  claims: 60
  confirmed: 60
  unconfirmed: 0
  contradicted: 0
  attempts: 0
  hash: "c61e20804c5a915f4b92c9c5bdb1641e"
---

## What's changing

The roadmap item says Microsoft Purview will add a test function to the main Classification page. Users will be able to test files against all available classifiers to see whether they contain sensitive information, or select a single classifier and test against that one. The roadmap gives the purpose as helping users find sensitive content in files and troubleshoot classification issues more efficiently.

Microsoft Learn does not yet describe the all-classifier test at the time of writing (November 2026), so what this page says about its behaviour is the roadmap's description. Learn describes a Classifiers page under Information Protection, Data Loss Prevention and DSPM; the roadmap does not say whether that is the "main Classification page". Learn does document a related test for one sensitive information type: open the type under Information Protection > Classifiers > Sensitive info types, choose Test, and upload a file. That page says only one file can be uploaded at a time and that the procedure is supported only for unencrypted files. Nothing read says the new test has the same limits.

The roadmap record lists this item as Launched, with a target of August CY2026, release phase General Availability, platform Web, and clouds GCC, GCC High and DoD. Microsoft lists the feature under a second roadmap item, 557554, which covers Worldwide (Standard Multi-Tenant): Launched, target March CY2026, preview February CY2026. This page covers the US Government clouds only. Separately, the Learn overview of the Classifiers page says the new Classifiers experience is in preview, while this roadmap item says General Availability; the two are reported as Microsoft gives them.

## Why it matters

The roadmap describes the new test as a way to find sensitive content and troubleshoot classification issues. If you troubleshoot missed or unexpected DLP matches, expect this to shorten that work, provided its results match what your policies see.

Microsoft has not stated what happens on arrival, and no source says existing behaviour changes, so treat this as an optional capability to check rather than a change that lands on users. Keep one caution in view: Learn says the same sensitive information type can produce different results depending on where content is evaluated (email in transit, files at rest, files on managed devices), and that an uploaded-file test does not refresh classification for existing SharePoint or OneDrive files. A test result is evidence about one file, not a guarantee about a policy.

## Risk assessment

**Data exposure**
- Confirm who can submit files to the new test before widening access. Use sample or redacted files where you can, because a test of real contracts or customer records puts that content in front of the person running it. Access to the Classifiers page comes from Entra administrator or Microsoft Purview role-group membership (see the controls table).
- Learn says the existing per-type test shows match results for the file you upload and does not refresh classification for existing SharePoint or OneDrive files, so testing a file does not by itself reclassify stored content.

**Security & identity**
- For the existing per-type test, Learn requires one of a list of Microsoft Purview role groups and one of a list of Exchange roles or role groups. The roles for the new all-classifier test are not documented at the time of writing, so confirm in a test account who can run it before widening access.

**Autonomy & actions**
- No change found: the roadmap describes a test that reports whether a file contains sensitive information, and no source says it labels, blocks, moves or deletes anything.

**Change & support**
- Test results can differ from live policy results, as Learn notes for different workloads. Tell help desk and compliance staff that a clean test is not proof that a SharePoint, Exchange or endpoint policy will not match.
- Check how the new test presents results when all classifiers are selected. Agree who interprets them and what happens to files that match.

## Cost and licensing

No licence or meter for the all-classifier test is published at the time of writing. The Learn page for the Classifiers page names no licence.

For the existing per-type Test option, the Learn page on sensitive information types says that to test any custom or default sensitive information type, at least one Exchange Online licence must be added to the tenant, otherwise the Test option is greyed out. Whether the new test carries the same condition is not stated.

Plan for administrator and analyst time to run tests and read results. A price or rate specific to this feature is not yet published.

## Scope

The roadmap record lists GCC, GCC High and DoD, the Web platform and General Availability for this item. It does not name a licence, a role or a prerequisite. The Worldwide version is tracked separately as roadmap item 557554.

Learn's Classifiers overview says access to the Classifiers page can come from a Microsoft Entra administrator role or a Microsoft Purview role group. The Entra roles it lists are Global administrator, Compliance administrator, Security administrator and Compliance data administrator. The Purview roles are Information Protection Admin, Analyst, Investigator and Reader, and it lists the matching Information Protection role groups. Which of these can run the new test is not stated.

Learn does not say whether its Classifiers and sensitive information type test pages apply as written in GCC, GCC High and DoD. Check the pages and the portal in your own cloud.

## Governance guidance

### Before rollout
- Check who holds the roles and role groups that give access to the Classifiers page, using the role-group row in the controls table, and remove access that analysts do not need.
- Decide which files may be used for testing and whether testers may upload files that contain real personal or customer data.
- Confirm that the tenant has at least one Exchange Online licence, because Learn ties the existing Test option to it.

### At rollout
- Open Information Protection > Classifiers in a test account in your cloud and check whether the file test is offered, and whether it offers one classifier or all of them.
- Run a known-positive and a known-negative file through the existing per-type test (first row of the controls table) and record the results as a baseline for the new test.

### After rollout
- Compare test results with what your DLP and auto-labeling policies actually matched, and note any difference in a short runbook for the compliance team.
- Review role-group membership after the first month, using the role-group row, and remove testers who no longer need it.

## Governance controls

<p class="controls__lead">Where each control lives. The left column says what the setting decides and how far it reaches; the middle gives the admin centre and the exact path; the right gives the script, API or command that does the same. <em>Not yet documented</em> means Microsoft has not published a control for that surface, so there is nothing to configure yet.</p>

<table class="controls">
<thead><tr><th>Control</th><th>Admin UI</th><th>API and automation</th></tr></thead>
<tbody>
<tr><td data-label="Control"><strong>Testing one uploaded file against one sensitive information type (today's per-type test)</strong><br><small class="controls__note">Existing test, not a control over the new all-classifier test. The cmdlet tests a text string, not an uploaded file; the portal test takes one unencrypted file at a time.</small></td><td data-label="Admin UI"><strong>Microsoft Purview portal</strong><br>Information Protection › Classifiers › Sensitive info types › sensitive information type › Test <a href="https://learn.microsoft.com/purview/sit-test-a-sit" rel="noopener" class="controls__docs">Learn</a></td><td data-label="API and automation"><strong>PowerShell</strong><br><code>Test-DataClassification -ClassificationNames &lt;names&gt; -TextToClassify &lt;text&gt;</code> <a href="https://learn.microsoft.com/powershell/module/exchangepowershell/test-dataclassification" rel="noopener" class="controls__docs">Learn</a></td></tr>
<tr><td data-label="Control"><strong>Who can reach the Classifiers page (Purview role-group membership)</strong><br><small>User</small><br><small class="controls__note">To view role groups, be a global administrator or have the Role Management role (assigned only to the Organization Management role group). Entra roles can also give access. Learn does not say which role runs the new test.</small></td><td data-label="Admin UI"><strong>Microsoft Purview portal</strong><br>Settings › Roles and scopes › Role groups › role group › Edit › Edit members of the role group › Choose users <a href="https://learn.microsoft.com/purview/purview-permissions" rel="noopener" class="controls__docs">Learn</a></td><td data-label="API and automation"><strong>PowerShell</strong><br><code>Add-RoleGroupMember -Identity &quot;&lt;role-group&gt;&quot; -Member &quot;&lt;user&gt;&quot;</code> <a href="https://learn.microsoft.com/powershell/module/exchangepowershell/add-rolegroupmember" rel="noopener" class="controls__docs">Learn</a></td></tr>
</tbody>
</table>

Both rows are existing controls that surround the new test. Neither is documented as a switch for the all-classifier test, and Microsoft Learn describes no tenant setting for it at the time of writing (November 2026).

The per-type Test option and the Test-DataClassification cmdlet are today's alternatives. The cmdlet's reference describes it as testing a specified text string, so it is not a file test. The role-group row governs who can reach the Classifiers page; the Learn page for the per-type test additionally lists Exchange roles or role groups that the account needs, which this table does not cover.

## Open questions

- Which licence, if any, does the all-classifier file test need, and does the Exchange Online licence condition that applies to the per-type Test option also apply? Watch the Learn pages for the Classifiers page and sensitive information type testing.
- Which roles and role groups can run the test, and does Microsoft's list for the per-type test apply unchanged?
- Is the test on by default, and can an administrator switch it off? Microsoft has not stated either; watch the roadmap item and Message center.
- Which file types, file sizes and encryption states does the test support, and does it still handle one file at a time?
- Does the GCC, GCC High and DoD version differ in features or timing from the Worldwide item 557554?

<!-- rationale
risk: Low. The roadmap describes a test of a file for sensitive information, and no source says it changes labels, policies or existing files; its default state is not stated.
cost: Low. No price or meter is published for the new test; Learn requires an Exchange Online licence in the tenant for the existing per-type Test option; plan for admin time to run tests.
impact: Low. Administrators and analysts who can open the Classifiers page are the people who would use it; the roadmap describes no change for end users.
-->
