---
title: "Microsoft Purview: unified Classifiers page for sensitive information types and trainable classifiers"
slug: "microsoft-purview-unified-classification-management-experience"
roadmapId: 570844
topic: "governance"
products: ["Microsoft Purview"]
summary: "Purview is bringing sensitive information types, exact data match, trainable classifiers and document fingerprinting into one Classifiers page. It is an admin management experience; Microsoft asks admins to plan to review it."
status: "in-development"
releasePhase: ["General Availability","Preview"]
clouds: ["Worldwide (Standard Multi-Tenant)"]
platforms: ["Web"]
targetDate: "March CY2027"
previewDate: "October CY2026"
risk: "low"
cost: "low"
impact: "low"
defaultState: "unknown"
action: "review"
licensing:
  model: "unknown"
  notes: "Not yet published for the new Classifiers experience: its Learn page lists permissions and names no licence. Separately, the sensitive information types page says an E5 licence is required for credential scanning sensitive information types."
audiences: ["security","compliance","m365-admin"]
tags: ["purview","sensitive-information-types","information-protection","dlp","dspm","classifiers"]
sources:
  - title: "Microsoft 365 Roadmap item 570844"
    url: "https://www.microsoft.com/microsoft-365/roadmap?id=570844"
    kind: "roadmap"
  - title: "MC1486289: Microsoft Purview |Unified Classification Management Experience"
    url: "https://admin.microsoft.com/Adminportal/Home#/MessageCenter/:/messages/MC1486289"
    kind: "message-center"
  - title: "MC1481315: Microsoft Purview: Retirement of Data Security Posture Management (DSPM) classic and DSPM for AI classic experiences"
    url: "https://admin.microsoft.com/Adminportal/Home#/MessageCenter/:/messages/MC1481315"
    kind: "message-center"
  - title: "Microsoft Purview classifiers overview"
    url: "https://learn.microsoft.com/purview/data-classification-overview"
    kind: "learn"
  - title: "Learn about sensitive information types"
    url: "https://learn.microsoft.com/purview/sit-sensitive-information-type-learn-about"
    kind: "learn"
  - title: "Permissions in the Microsoft Purview portal"
    url: "https://learn.microsoft.com/purview/purview-permissions"
    kind: "learn"
  - title: "Get-DlpSensitiveInformationType"
    url: "https://learn.microsoft.com/powershell/module/exchangepowershell/get-dlpsensitiveinformationtype?view=exchange-ps"
    kind: "learn"
  - title: "Add-RoleGroupMember"
    url: "https://learn.microsoft.com/powershell/module/exchangepowershell/add-rolegroupmember?view=exchange-ps"
    kind: "learn"
videos: []
related: ["microsoft-purview-dspm-copilot-readiness-and-data-explorer"]
controls:
  - governs: "Which admins and role groups can open the Classifiers page"
    scope: "tenant"
    ui:
      surface: "Microsoft Purview portal"
      path: "Settings > Roles and scopes > Role groups > role group > Edit > Choose users"
      docs: "https://learn.microsoft.com/purview/purview-permissions"
    api:
      kind: "powershell"
      call: "Add-RoleGroupMember -Identity \"<role-group>\" -Member \"<user-UPN>\""
      docs: "https://learn.microsoft.com/powershell/module/exchangepowershell/add-rolegroupmember?view=exchange-ps"
    note: "Entra roles listed on the overview page also grant access. The Role management role is needed to change role groups. Security & Compliance PowerShell; manages Purview role-group membership, not Microsoft Entra role assignments."
  - governs: "Review and baseline of sensitive information types"
    scope: "tenant"
    ui:
      surface: "Microsoft Purview portal"
      path: "Information Protection > Classifiers"
      docs: "https://learn.microsoft.com/purview/data-classification-overview"
    api:
      kind: "powershell"
      call: "Get-DlpSensitiveInformationType -IncludeDetails"
      docs: "https://learn.microsoft.com/powershell/module/exchangepowershell/get-dlpsensitiveinformationtype?view=exchange-ps"
    note: "Security & Compliance PowerShell; lists sensitive information types only. An existing control, not a switch for the new experience."
  - governs: "Tenant-wide switch to turn the new Classifiers experience on or off"
    scope: "tenant"
    ui: null
    api: null
    note: "Microsoft Learn documents no such switch at the time of writing (November 2026)."
confidence: "medium"
created: "2026-11-17"
updated: "2026-11-17"
roadmapModified: "2026-10-30T22:08:34"
changes:
  - date: "2026-11-17"
    note: "First briefing: Learn documents a preview Classifiers page; MC1486289 and the roadmap record give different general availability timing."
  - date: "2026-11-17"
    note: "Checked against Microsoft Learn by gpt-6.1-sol: held: 1 of 59 statements contradicted, 0 unconfirmed; taken offline until corrected"
  - date: "2026-11-17"
    note: "Correction: the role-group access control now lists the Add-RoleGroupMember cmdlet as its automation, replacing the claim that none is documented."
  - date: "2026-11-17"
    note: "Checked against Microsoft Learn by gpt-6.1-sol: passed: all 64 statements confirmed"
version: 2
verification:
  status: "verified"
  date: "2026-11-17"
  version: 2
  model: "gpt-6.1-sol"
  engine: "copilot"
  claims: 64
  confirmed: 64
  unconfirmed: 0
  contradicted: 0
  attempts: 0
  hash: "6609319c2ef7763c18ae9f1ee48bc5c9"
---

## What's changing

Microsoft Purview is bringing its classification types into one **Classifiers** page in the Microsoft Purview portal. The roadmap item describes it as unifying sensitive information types (SITs), Exact Data Match (EDM), fingerprint SITs and trainable classifiers in one place to discover, create, validate and manage classifiers.

The Microsoft Learn page "Microsoft Purview classifiers overview" describes the page: search and filtering to find classifiers, a view of how each classifier type works when you create one, a **Classified items** count, and the number of policies that use a classifier so you can inspect those dependencies before changing it. Learn marks the new experience as preview, says it is available alongside the existing classification experiences, and says classifiers created, edited or deleted in either experience are reflected in the other. Learn also says features might change before general availability.

Microsoft's notice MC1486289 gives a different schedule from the roadmap record. It says Public Preview (Worldwide) begins rolling out in early October 2026 and completes by mid October 2026, and General Availability (Worldwide) begins in mid November 2026 and completes by late November 2026. The roadmap record shows the status as In development, with a preview date of October CY2026 and a target date of March CY2027. Treat the roadmap dates as targets and confirm what your tenant shows. The record lists Worldwide (Standard Multi-Tenant) only.

## Why it matters

Classifiers sit underneath policies: the SIT page lists DLP policies, sensitivity labels, retention labels, insider risk management, communication compliance and auto-labeling among the places SITs are used. A single page for managing them changes where administrators edit those definitions, and who is likely to edit them, so the change matters to the people who own classification accuracy more than to end users.

Microsoft has not stated what happens on arrival if an administrator does nothing, or whether an admin has to switch the experience on. MC1486289 asks administrators to plan to review the experience when it becomes available. Because the old and new experiences run side by side, no source says existing classifiers change; the practical exposure is a classifier edited in the new page that policies already rely on.

## Risk assessment

**Data exposure**

- The Classifiers page shows a **Classified items** count per classifier. Learn says access to item lists and item contents requires the appropriate Data Explorer permissions, which are set separately from access to the Classifiers page.
- Learn does not say which roles can see the counts. Check what each role in the access list sees before you widen access.

**Security & identity**

- Access to the Classifiers page comes from four Microsoft Entra roles (Global administrator, Compliance administrator, Security administrator, Compliance data administrator) or from Microsoft Purview roles and role groups beginning "Information Protection". Learn says the role group permissions differ and recommends the role with least privilege.

**Autonomy & actions**

- The page can create, edit and delete classifiers, and Learn says changes in either experience are reflected in the other. An edit or deletion can therefore reach every policy that uses the classifier. Learn gives a policy count and dependencies to inspect before you change one.
- Analysis: an easier creation flow can increase the number of custom SITs. Learn's SIT page says Endpoint DLP classifies files against all SITs available in the tenant, including custom ones not used in any DLP policy, and that poorly tuned SITs can cause excessive classification traffic.

**Change & support**

- Two experiences run in parallel while the new one is in preview, and Learn says its features might change before general availability. Expect admins to follow different instructions for the same task.
- The roadmap target (March CY2027) and MC1486289 (General Availability from mid November 2026) differ, so help desk guidance written from either date may be wrong.

## Cost and licensing

No licence is published for the new Classifiers experience. The Learn page "Microsoft Purview classifiers overview" lists permissions (Microsoft Entra roles and Microsoft Purview role groups) and names no licence, and neither the roadmap record nor MC1486289 states one or any meter. Licensing is Not yet published.

One existing licence condition applies to a classifier type the page covers: the SIT page says an E5 licence is required to use credential scanning SITs. The overview page lists **Credentials** among the classification types, and the **All credentials** SIT groups the individual credential types; check the licence of the people who rely on it.

The cost the sources show is indirect: admin time to learn the page and to check policy dependencies before editing classifiers.

## Scope

**Who and where.** The roadmap record lists the Worldwide (Standard Multi-Tenant) cloud and the Web platform. It lists no other clouds. MC1486289 gives rollout dates for Worldwide only.

**Who can open it.** Learn lists the Microsoft Entra roles Global administrator, Compliance administrator, Security administrator and Compliance data administrator, and the Microsoft Purview roles Information Protection Admin, Information Protection Analyst, Information Protection Investigator and Information Protection Reader. It also lists role groups: Information Protection, Information Protection Admins, Information Protection Analysts, Information Protection Investigators and Information Protection Readers.

**Where it appears.** Learn says you can reach **Classifiers** in the Microsoft Purview portal under **Information Protection**, **Data Loss Prevention** or **DSPM** (Data Security Posture Management). MC1481315 says the DSPM classic and DSPM for AI classic experiences retire from mid-March 2027; it does not mention the Classifiers page.

**Release phase.** The roadmap record lists General Availability and Preview. Learn describes the new experience as preview.

## Governance guidance

### Before rollout

- Identify who holds the Entra roles and Purview role groups that give access to the Classifiers page, and remove access that is not needed (controls table, first row).
- Record a baseline of your sensitive information types with the SIT listing cmdlet in the controls table, so you can see what changes once admins start editing in either experience.
- Tell the admins who author classifiers that Microsoft's notice MC1486289 asks them to use the product tour and teaching bubbles, and to use the guidance in the creation experience to choose between SITs, EDM, trainable classifiers and document fingerprinting.

### At rollout

- Open Information Protection > Classifiers in the Microsoft Purview portal and confirm the preview or general availability experience appears for the roles you expect.
- Check a classifier's policy count and dependencies before anyone edits or deletes it.
- Keep the existing classification experience available to admins until the new page is generally available, because Learn says the two run alongside each other.

### After rollout

- Compare the SIT listing against your baseline to confirm that changes made in the new page appear in the existing experience, as Learn says they should.
- Review the custom SITs created since rollout and remove those no policy uses, given that Endpoint DLP classifies files against all SITs in the tenant.
- Re-read the Learn page when general availability is announced, because it says features might change before then.

## Governance controls

<p class="controls__lead">Where each control lives. The left column says what the setting decides and how far it reaches; the middle gives the admin centre and the exact path; the right gives the script, API or command that does the same. <em>Not yet documented</em> means Microsoft has not published a control for that surface, so there is nothing to configure yet.</p>

<table class="controls">
<thead><tr><th>Control</th><th>Admin UI</th><th>API and automation</th></tr></thead>
<tbody>
<tr><td data-label="Control"><strong>Which admins and role groups can open the Classifiers page</strong><br><small>Tenant</small><br><small class="controls__note">Entra roles listed on the overview page also grant access. The Role management role is needed to change role groups. Security &amp; Compliance PowerShell; manages Purview role-group membership, not Microsoft Entra role assignments.</small></td><td data-label="Admin UI"><strong>Microsoft Purview portal</strong><br>Settings › Roles and scopes › Role groups › role group › Edit › Choose users <a href="https://learn.microsoft.com/purview/purview-permissions" rel="noopener" class="controls__docs">Learn</a></td><td data-label="API and automation"><strong>PowerShell</strong><br><code>Add-RoleGroupMember -Identity &quot;&lt;role-group&gt;&quot; -Member &quot;&lt;user-UPN&gt;&quot;</code> <a href="https://learn.microsoft.com/powershell/module/exchangepowershell/add-rolegroupmember?view=exchange-ps" rel="noopener" class="controls__docs">Learn</a></td></tr>
<tr><td data-label="Control"><strong>Review and baseline of sensitive information types</strong><br><small>Tenant</small><br><small class="controls__note">Security &amp; Compliance PowerShell; lists sensitive information types only. An existing control, not a switch for the new experience.</small></td><td data-label="Admin UI"><strong>Microsoft Purview portal</strong><br>Information Protection › Classifiers <a href="https://learn.microsoft.com/purview/data-classification-overview" rel="noopener" class="controls__docs">Learn</a></td><td data-label="API and automation"><strong>PowerShell</strong><br><code>Get-DlpSensitiveInformationType -IncludeDetails</code> <a href="https://learn.microsoft.com/powershell/module/exchangepowershell/get-dlpsensitiveinformationtype?view=exchange-ps" rel="noopener" class="controls__docs">Learn</a></td></tr>
<tr><td data-label="Control"><strong>Tenant-wide switch to turn the new Classifiers experience on or off</strong><br><small>Tenant</small><br><small class="controls__note">Microsoft Learn documents no such switch at the time of writing (November 2026).</small></td><td data-label="Admin UI"><em class="controls__gap">Not yet documented</em></td><td data-label="API and automation"><em class="controls__gap">Not yet documented</em></td></tr>
</tbody>
</table>

The roadmap and MC1486289 mention no separate admin switch for the new experience. MC1486289 answers the group-membership question in its compliance table by saying the feature includes or affects admin controls, and tells admins to review the linked documentation for group-based configuration; it does not name a setting.

Access to the page is decided by the roles in the first row. The SIT listing cmdlet in the second row covers sensitive information types only and is an existing control, not a switch for the new experience.

## Open questions

- Is the new Classifiers experience on for every tenant when it rolls out, or does an administrator switch it on? Watch MC1486289 and the Learn page "Microsoft Purview classifiers overview".
- Which licence do users need for the new experience, and does any meter apply? Licensing is Not yet published.
- Is General Availability mid-to-late November 2026, as MC1486289 states, or March CY2027, as the roadmap record targets?
- Which commands manage exact data match, trainable classifiers and fingerprinting from the new page's perspective, and does the page have its own audit trail? Watch the Learn page "Microsoft Purview classifiers overview".
- Does the retirement of the DSPM classic experiences in March 2027 (MC1481315) change where the Classifiers page can be reached?

<!-- rationale
risk: Low. Learn describes a page for managing classifiers that already exist, available alongside the existing experiences; the exposure is an edit to a classifier that policies depend on.
cost: Low. Licensing for the new experience is not yet published and the Learn page names no licence; the cost the sources show is admin time to learn the page and check classifier changes.
impact: Low. The audience is administrators with access to the Classifiers page through the Microsoft Entra roles or Microsoft Purview role groups that Learn lists.
-->
