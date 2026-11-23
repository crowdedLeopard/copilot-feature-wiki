---
title: "Microsoft Purview: apply a retention policy to Microsoft Planner content"
slug: "microsoft-purview-compliance-portal-data-lifecycle-management-apply-a-retention-policy-to"
roadmapId: 486828
topic: "governance"
products: ["Microsoft Purview"]
summary: "The roadmap says compliance admins can create a retention policy for Planner tasks in plans tied to a Microsoft 365 Group. Nothing starts until an admin creates one, and Learn's Planner page still says retention isn't supported."
status: "launched"
releasePhase: ["General Availability","Preview"]
clouds: ["Worldwide (Standard Multi-Tenant)"]
platforms: ["Web"]
targetDate: "July CY2026"
previewDate: null
risk: "low"
cost: "low"
impact: "low"
defaultState: "admin-opt-in"
action: "review"
licensing:
  model: "included"
  notes: "Purview's service description lists Microsoft 365 E5/A5/G5/E3/A3/G3 and Business Premium among the licences that provide user rights for location-wide retention policies. It lists nothing specific to Planner."
audiences: ["compliance","m365-admin","service-owner"]
tags: ["data-lifecycle-management","retention","planner","purview","microsoft-365-groups"]
sources:
  - title: "Microsoft 365 Roadmap 486828"
    url: "https://www.microsoft.com/microsoft-365/roadmap?id=486828"
    kind: "roadmap"
  - title: "Security, privacy, and compliance in Microsoft Planner"
    url: "https://learn.microsoft.com/planner/planner-security-privacy-compliance"
    kind: "learn"
  - title: "Microsoft Planner support in Microsoft Purview"
    url: "https://learn.microsoft.com/planner/planner-in-purview"
    kind: "learn"
  - title: "Create and configure retention policies"
    url: "https://learn.microsoft.com/purview/create-retention-policies"
    kind: "learn"
  - title: "Learn about retention policies and retention labels"
    url: "https://learn.microsoft.com/purview/retention"
    kind: "learn"
  - title: "Get started with data lifecycle management"
    url: "https://learn.microsoft.com/purview/get-started-with-data-lifecycle-management"
    kind: "learn"
  - title: "Microsoft Purview service description"
    url: "https://learn.microsoft.com/office365/servicedescriptions/microsoft-365-service-descriptions/microsoft-365-tenantlevel-services-licensing-guidance/microsoft-purview-service-description"
    kind: "learn"
  - title: "New-RetentionCompliancePolicy"
    url: "https://learn.microsoft.com/powershell/module/exchangepowershell/new-retentioncompliancepolicy"
    kind: "learn"
videos: []
related: ["ediscovery"]
controls:
  - governs: "Creating a retention policy, the route for any Planner retention (no Planner location is named on the pages read)"
    scope: "tenant"
    ui:
      surface: "Microsoft Purview portal"
      path: "Solutions > Data Lifecycle Management > Policies > Retention policies > New retention policy"
      docs: "https://learn.microsoft.com/purview/create-retention-policies"
    api:
      kind: "powershell"
      call: "New-RetentionCompliancePolicy -Name <policy name>"
      docs: "https://learn.microsoft.com/powershell/module/exchangepowershell/new-retentioncompliancepolicy"
    note: "Security & Compliance PowerShell. The reference lists no Planner-specific location parameter; -ModernGroupLocation covers Microsoft 365 Groups. Needs the Compliance Administrator or Retention Management role."
confidence: "medium"
created: "2026-11-23"
updated: "2026-11-23"
roadmapModified: "2026-09-09T22:36:54"
changes:
  - date: "2026-11-23"
    note: "New briefing: the roadmap says Planner retention policies launched, while Learn's Planner page still says retention policy isn't currently supported."
  - date: "2026-11-23"
    note: "Checked against Microsoft Learn by gpt-6.1-sol: held: 1 of 58 statements contradicted, 2 unconfirmed; taken offline until corrected"
version: 1
verification:
  status: "held"
  date: "2026-11-23"
  version: 1
  model: "gpt-6.1-sol"
  engine: "copilot"
  claims: 58
  confirmed: 55
  unconfirmed: 2
  contradicted: 1
  attempts: 1
  hash: "53ea1f987b8553092826b7278e36264c"
---

## What's changing

The roadmap item says Microsoft Purview Data Lifecycle Management (the Purview solution that retains or deletes content on a schedule) now reaches Microsoft Planner: compliance admins can create a retention policy to manage Planner content, such as tasks for plans associated with a Microsoft 365 Group.

The roadmap record gives status Launched, a target of July CY2026, release phases General Availability and Preview, Worldwide (Standard Multi-Tenant) as the only cloud, and Web as the platform. It carries no more-info link and says nothing more about how the policy works.

Microsoft Learn does not yet agree with the roadmap. At the time of writing (November 2026), the Planner page "Security, privacy, and compliance in Microsoft Planner" states "Retention policy isn't currently supported." The Purview page "Create and configure retention policies" lists the locations a policy can cover, from Exchange mailboxes to Viva Engage user messages, and Planner is not among them. This briefing reports both and does not pick a side.

Because no Learn page describes Planner retention itself, how an admin selects Planner content, which plan types are covered and what a delete action does to tasks, comments and attachments are not documented. What follows about behaviour is the roadmap's description plus Learn's general retention rules.

## Why it matters

A Planner plan lives in a container. Where the container is a Microsoft 365 Group, group members see the plan. Planner's page says the data of a basic plan is stored in Azure, with file attachments in SharePoint and conversations in Exchange. A retention obligation that mentions tasks therefore touches more than one store, so confirm what a Planner policy actually reaches before you rely on it.

If nobody acts, the roadmap describes no change to existing plans: it says admins can create a policy, not that one applies by default. Treat this as a capability to evaluate. Do not tell auditors that Planner is covered by retention until the Planner and Purview pages agree and a test in your tenant confirms it.

## Risk assessment

**Data exposure**

- Learn describes retention policies as able to retain only, delete only, or retain then delete, and states "Delete-only: Permanently delete content after a specified period of time." Whether the Planner policy offers every option is not documented, so a delete setting scoped to group plans should be piloted on a small set of plans first.
- Setting up the policy does not widen who can read plan content: Learn says the person configuring retention policies "doesn't require access to the content".

**Security & identity**

- Learn recommends the Compliance Administrator role group, or a custom role group holding the Retention Management role, for creating retention policies. Planner's own page says there are no special administrative roles for Planner, so retention is governed from Purview, not from Planner.

**Autonomy & actions**

- No change from the roadmap text: it describes a policy an admin creates and mentions no agent or automated decision.

**Change & support**

- Two Learn pages disagree, so the help desk may be told retention for Planner is unsupported while compliance staff are told it launched. Agree one internal position and review it when Microsoft updates either page.
- The roadmap limits scope to plans associated with a Microsoft 365 Group. Planner's Purview page lists personal (roster) plans, plans in Loop components, premium plans and shared and private channel plans as unsupported for the Purview capabilities it describes (eDiscovery). Whether the same list applies to retention is not documented.

## Cost and licensing

**Licence.** The Microsoft Purview service description says that for organisation-wide, location-wide or include/exclude retention policies, licences that provide user rights include Microsoft 365 E5/A5/G5/E3/A3/G3 and Business Premium, the Microsoft Purview Suite, and Office 365 E5/A5/G5/E3/A3/G3. It adds licences for the Exchange, SharePoint or OneDrive and Teams locations, and none of its retention policy licensing text names Planner. Planner's page says only that "Purview integration depends on an appropriate license for Purview (like the E5 license)."

**Meter.** Learn's data lifecycle management page requires pay-as-you-go billing for the Microsoft Copilot experiences, Enterprise AI apps and Other AI apps locations. It names no meter for a Planner location at the time of writing (November 2026).

**Indirect cost.** Admin time to scope, pilot and review a policy. A licence or rate specific to Planner retention is not yet published.

## Scope

- **Plans:** the roadmap names tasks for plans associated with a Microsoft 365 Group. Which other plan types are covered is not documented (see Open questions).
- **Users and licences:** see Cost and licensing; the roadmap names no licence of its own.
- **Roles:** the Compliance Administrator role group, or a custom role group with the Retention Management role. View-Only Retention Management is the read-only role.
- **Cloud and platform:** the roadmap lists Worldwide (Standard Multi-Tenant) and Web. It lists no US Government cloud, which is a record fact and not a statement that the feature is unavailable there.
- **Rollout:** status Launched with a July CY2026 target; the record lists both General Availability and Preview release phases without saying which part is which.

## Governance guidance

### Before rollout

- Confirm whether your tenant offers a Planner location by opening New retention policy in the Microsoft Purview portal (see the controls table); the Purview page read for this briefing names none.
- Assign the Compliance Administrator role group, or a custom role group with the Retention Management role, only to the staff who will own Planner retention.
- List which Planner plans sit in Microsoft 365 Groups and which are personal, premium or channel plans, so you know what the roadmap's wording leaves out.
- Check the licences held by users in scope against the Purview service description's retention policy licensing.

### At rollout

- Pilot a retain-only policy on a small set of group plans before any policy that deletes.
- Record the policy name, scope and retention period in your change log.
- Tell the help desk that Planner's compliance page still says retention policy isn't currently supported, and who to ask when plan owners report missing tasks.

### After rollout

- Delete a task in a pilot plan and check what happens to the task, its comments and its attachments, since Learn does not describe this.
- Re-read the Planner compliance page and the Purview retention policy page each month until they agree.
- Watch Message center for a post about Planner retention.

## Governance controls

<p class="controls__lead">Where each control lives. The left column says what the setting decides and how far it reaches; the middle gives the admin centre and the exact path; the right gives the script, API or command that does the same. <em>Not yet documented</em> means Microsoft has not published a control for that surface, so there is nothing to configure yet.</p>

<table class="controls">
<thead><tr><th>Control</th><th>Admin UI</th><th>API and automation</th></tr></thead>
<tbody>
<tr><td data-label="Control"><strong>Creating a retention policy, the route for any Planner retention (no Planner location is named on the pages read)</strong><br><small>Tenant</small><br><small class="controls__note">Security &amp; Compliance PowerShell. The reference lists no Planner-specific location parameter; -ModernGroupLocation covers Microsoft 365 Groups. Needs the Compliance Administrator or Retention Management role.</small></td><td data-label="Admin UI"><strong>Microsoft Purview portal</strong><br>Solutions › Data Lifecycle Management › Policies › Retention policies › New retention policy <a href="https://learn.microsoft.com/purview/create-retention-policies" rel="noopener" class="controls__docs">Learn</a></td><td data-label="API and automation"><strong>PowerShell</strong><br><code>New-RetentionCompliancePolicy -Name &lt;policy name&gt;</code> <a href="https://learn.microsoft.com/powershell/module/exchangepowershell/new-retentioncompliancepolicy" rel="noopener" class="controls__docs">Learn</a></td></tr>
</tbody>
</table>

The row covers the portal route and the cmdlet that create a retention policy. Neither page read names a Planner location: the portal page lists other locations, and the cmdlet reference has -ModernGroupLocation for Microsoft 365 Groups but no Planner-specific parameter. Whether Planner content is selected through the Microsoft 365 Groups location is not documented, so confirm in the wizard.

Roles: Learn recommends the Compliance Administrator role group, or a role group with the Retention Management role, and says the person configuring retention does not need access to the content.

Today's alternative: Planner's Purview page documents eDiscovery holds on Planner plans. Learn says that when a hold is applied the task isn't deleted and is copied to the SharePoint site's Preservation Hold Library. A hold is not a retention policy and has no retention period.

## Open questions

- Which location or option selects Planner content in the retention policy wizard and in PowerShell, and when will the Planner compliance page, which says "Retention policy isn't currently supported", change? Watch that page and Create and configure retention policies.
- Which plan types and which parts of a plan (tasks, comments in Exchange, attachments in SharePoint) does a Planner retention policy cover? Watch Microsoft Planner support in Microsoft Purview.
- Does the policy support retain-only, delete-only and retain-then-delete, and what do plan members see when a task is deleted?
- Is any licence or meter specific to Planner retention published? Watch the Microsoft Purview service description.
- Which part of the roadmap item is in Preview and which is General Availability? Watch the roadmap item and Message center.

<!-- rationale
risk: Low. The roadmap describes an admin-created retention policy, so nothing is retained or deleted until a compliance admin sets one up; the exposure is a mis-scoped policy, not new behaviour that arrives on its own.
cost: Low. The only cost the sources show is admin time and the Purview licences that already cover retention policies; no licence or meter specific to Planner is published at the time of writing.
impact: Low. Compliance admins configure it; plan members would notice only if a policy they never saw removes or keeps tasks.
-->

<!-- verifier-findings (2026-11-23, held; checked by gpt-6.1-sol)
The independent check found fault only with the statements below. This is a correction: change what they name and carry the rest of the page over unchanged.
Correct each of these with the smallest change that removes the fault: delete the statement, narrow it, or put the finding's own "Found" text or worded replacement in its place. Where a fix asks for more than that (a new row, an explanation, further references), do only the part that removes the fault. A correction adds no control rows.
- [unsupported, blocker] front matter: defaultState; summary; Why it matters; rationale: risk / default: The default is admin-opt-in: nothing is retained or deleted and existing plans do not change until an admin creates a policy. | Found: Searched: Planner retention default admin policy enabled. Read the roadmap, Planner security/privacy/compliance, create-retention-policies and get-started-with-data-lifecycle-management. They describe policy creation, not Planner's arrival default or treatment by existing policies. | Fix: Set defaultState to "unknown". Replace "Nothing starts until an admin creates one" in the summary with "Microsoft has not stated what happens on arrival". Replace the first two sentences of the second Why it matters paragraph with "Microsoft has not stated what happens on arrival; no source says existing plans will change." Replace the risk rationale's assertion that nothing is retained or deleted until setup with "The arrival default is not stated, so this rating assumes today's behaviour continues."
- [unsupported, major] Risk assessment: Data exposure / behaviour: Setting up a retention policy does not widen who can read plan content. | Found: Searched: retention policies do not change permissions access content Planner. Read get-started-with-data-lifecycle-management, Planner compliance and planner-in-purview. Not requiring content access to configure a policy does not establish its effect on readership. | Fix: Replace the bullet with "Learn says the person configuring retention policies doesn't require access to the content." Remove the inference about whether configuring a Planner policy changes who can read the content.
- [contradicted, blocker] Risk assessment: Change & support / record: The roadmap limits scope to plans associated with a Microsoft 365 Group. | Found: manage content located in Microsoft Planner such as tasks for plans associated with an Microsoft 365 Group. | Fix: Replace "The roadmap limits scope to plans associated with a Microsoft 365 Group" with "The roadmap names tasks for plans associated with a Microsoft 365 Group as an example; it does not state an exclusive scope."
These are minor and do not hold the page. Where removing the statement, or rewording it in the words the fix gives, settles one, do that; otherwise leave it as it is. A minor finding may also add a source link it names for a statement already on the page. It adds no row and nothing that needs research.
- [supported, minor] Risk assessment: Change & support / behaviour: Conflicting Microsoft information can leave help-desk and compliance staff with different positions on Planner retention. | Found: Retention policy isn't currently supported. | Fix: Replace "Two Learn pages disagree" with "The roadmap and Planner's compliance page disagree". The other cited Learn page omits Planner rather than stating that Planner retention launched. | Source: https://learn.microsoft.com/planner/planner-security-privacy-compliance
-->
