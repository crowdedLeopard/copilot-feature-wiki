---
title: "Microsoft Purview Communication Compliance: external address conditions, OR logic and condition testing"
slug: "microsoft-purview-compliance-portal-communication-compliance-enhanced-policy-conditions"
roadmapId: 336046
topic: "governance"
products: ["Microsoft Purview"]
summary: "Communication Compliance policies gain external sender and recipient conditions, OR logic and a test pane. The roadmap lists GCC, GCC High and DoD for December CY2026. Microsoft has not stated what happens on arrival; authors should plan to review."
status: "in-development"
releasePhase: ["General Availability"]
clouds: ["GCC","GCC High","DoD"]
platforms: ["Web"]
targetDate: "December CY2026"
previewDate: null
risk: "low"
cost: "low"
impact: "low"
defaultState: "unknown"
action: "review"
licensing:
  model: "included"
  notes: "Learn's planning page says users covered by Communication Compliance policies need a Microsoft Purview Suite licence, an Office 365 Enterprise E3 licence with the Advanced Compliance add-on, or an Office 365 Enterprise E5 subscription. A licence or meter specific to these conditions is not yet published."
audiences: ["compliance","security","m365-admin"]
tags: ["communication-compliance","data-governance","gcc","gcc-high","dod"]
sources:
  - title: "Microsoft 365 Roadmap 336046"
    url: "https://www.microsoft.com/microsoft-365/roadmap?id=336046"
    kind: "roadmap"
  - title: "Create and manage Communication Compliance policies"
    url: "https://learn.microsoft.com/purview/communication-compliance-policies"
    kind: "learn"
  - title: "Get started with Communication Compliance"
    url: "https://learn.microsoft.com/purview/communication-compliance-configure"
    kind: "learn"
  - title: "Assign permissions in Communication Compliance"
    url: "https://learn.microsoft.com/purview/communication-compliance-permissions"
    kind: "learn"
  - title: "Plan for Communication Compliance"
    url: "https://learn.microsoft.com/purview/communication-compliance-plan"
    kind: "learn"
  - title: "Supported Microsoft Security and Compliance resources for Tenant Configuration Management"
    url: "https://learn.microsoft.com/graph/utcm-securityandcompliance-resources"
    kind: "learn"
  - title: "Use the Tenant Configuration Management APIs in Microsoft Graph"
    url: "https://learn.microsoft.com/graph/api/resources/unified-tenant-configuration-management-api-overview"
    kind: "learn"
  - title: "Plan for Microsoft Purview compliance and risk management solutions – GCC High deployments"
    url: "https://learn.microsoft.com/office365/servicedescriptions/microsoft-365-service-descriptions/microsoft-365-tenantlevel-services-licensing-guidance/plan-for-microsoft-purview-gcc-high-deployments"
    kind: "learn"
videos: []
related: ["microsoft-purview-compliance-portal-communication-compliance-alert-improvements"]
controls:
  - governs: "Whether a policy uses the condition builder (OR logic and external sender or recipient conditions)"
    scope: "other"
    ui:
      surface: "Microsoft Purview portal"
      path: "Communication Compliance > Policies > Create policy > Custom policy > Choose conditions and review percentage > Conditions > Condition builder"
      docs: "https://learn.microsoft.com/purview/communication-compliance-policies"
    api: null
    note: "Per policy, not tenant-wide. Template-based new policies use the condition builder automatically. The Communication Compliance and Communication Compliance Admins role groups can configure policies."
  - governs: "Testing policy conditions with sample messages before saving a policy"
    scope: "other"
    ui:
      surface: "Microsoft Purview portal"
      path: "Communication Compliance > Policies > Create policy > Custom policy > Conditions and percentage > Test your conditions"
      docs: "https://learn.microsoft.com/purview/communication-compliance-configure"
    api: null
    note: "Preview on Learn. Tests only the classifier and sensitive info type conditions. Needs the Communication Compliance or Communication Compliance Admins role group."
confidence: "medium"
created: "2026-11-20"
updated: "2026-11-20"
roadmapModified: "2026-10-28T23:04:31"
changes:
  - date: "2026-11-20"
    note: "New briefing: roadmap item in development for GCC, GCC High and DoD, with the condition builder, external address conditions and condition testing as Learn describes them."
  - date: "2026-11-20"
    note: "Checked against Microsoft Learn by gpt-6.1-sol: held: 2 of 59 statements contradicted, 1 unconfirmed; taken offline until corrected"
  - date: "2026-11-20"
    note: "Correction: removed the claim that nothing is required of administrators, restated who can configure policies, reworded the pilot advice and dropped three checklist items with no controls row."
  - date: "2026-11-20"
    note: "Checked against Microsoft Learn by gpt-6.1-sol: passed with 0 of 58 statements not yet confirmed"
version: 2
verification:
  status: "verified-with-gaps"
  date: "2026-11-20"
  version: 2
  model: "gpt-6.1-sol"
  engine: "copilot"
  claims: 58
  confirmed: 58
  unconfirmed: 0
  contradicted: 0
  attempts: 0
  hash: "4811cd322ae90779af4e88f9910060e5"
---

## What's changing

Microsoft plans three improvements to the conditions in Microsoft Purview Communication Compliance policies. The roadmap item describes conditions that detect messages sent to and received from external email addresses, an OR capability for combining conditions in one policy, and a way to test conditions with sample messages before a policy is saved.

Microsoft Learn already describes this behaviour in its Communication Compliance pages, without naming the clouds it applies to. For new policies, Learn recommends the condition builder, which "supports the OR operator" and combines conditions with AND, OR and NOT. For external addresses, the condition builder offers **Sender is** and **Recipient is** conditions; for existing policies the equivalents are **Message is received from any of these external email addresses** and **Message is sent to any of these external email addresses**. Learn marks the test feature, **Test your conditions**, as a preview and says it can currently test only the **Content matches any of these classifiers** and **Content contains any of these sensitive info types** conditions.

The roadmap record lists the clouds as GCC, GCC High and DoD, the platform as Web, and the release phase as General Availability. Its status is In development with a target of December CY2026, which is a plan and not a rollout date. The roadmap description says the test ability has been "introduced", while Learn labels it a preview; the page reports both and does not choose between them.

## Why it matters

This change affects how precisely a compliance team can write policies, which in turn decides how many alerts reviewers receive. External-address conditions let a policy target communications that cross the organisation boundary, and OR logic lets one policy replace several near-duplicate policies. Testing lets authors check classifier and sensitive information type conditions before the policy reaches reviewers.

Microsoft has not stated what happens on arrival in the government clouds. No source says existing policies change; policy authors in GCC, GCC High and DoD tenants should learn the condition builder and the test pane before the target month, because a badly built OR group can widen a policy's reach and flood reviewers.

## Risk assessment

**Data exposure**

- External sender and recipient conditions select messages that cross the organisation boundary for review. Learn says the sent-to condition detects "only messages that are sent outside the organization"; the conditions are read as inputs to reviewer alerts, so check who holds the reviewer roles.
- Learn says usernames in Communication Compliance are pseudonymised by default and that reviewers are assigned in each policy, so reviewer assignment is the main exposure control for what the new conditions surface.

**Security & identity**

- Learn limits testing of conditions to members of the Communication Compliance Admins and Communication Compliance role groups. Membership of those groups is the control that decides who can use the test pane.
- Test messages are typed into the **Test policy conditions** pane or uploaded as a .txt file. Use invented sample text, not real employee messages.

**Autonomy & actions**

- No change: the conditions choose which communications reach reviewers, and Learn describes policies as identifying communications "for analysis by internal or external reviewers". The sources describe no automatic remediation tied to these conditions.

**Change & support**

- Existing and new policies use different condition names. Learn says that in the condition builder all exceptions are replaced with a NOT condition that must sit in a nested group, so converting an existing exception-based policy needs care.
- A policy that mixes AND and OR needs a separate group for each operator, and the **Quick Summary** option shows the built condition in simplified form. Expect support questions when authors mis-nest groups.
- Learn says email messages can take about 24 hours to fully process in a policy, so a corrected condition does not show results immediately.

## Cost and licensing

Learn's planning page says users covered by Communication Compliance policies must have a Microsoft Purview Suite (formerly known as Microsoft 365 E5 Compliance) licence, an Office 365 Enterprise E3 licence with the Advanced Compliance add-on, or be included in an Office 365 Enterprise E5 subscription. These conditions are part of Communication Compliance policies, so that is the licence Learn states for the product. The page that describes the Communication Compliance subscription and billing requirements does not mention these conditions, and a licence or meter specific to them is not yet published.

Learn also says detecting interactions with non-Microsoft 365 AI data needs pay-as-you-go billing, and that Microsoft 365 Copilot data has no such requirement. Nothing read links that billing to the conditions in this item. The remaining cost is admin time to design, test and tune conditions, and reviewer time spent on any extra alerts.

## Scope

**Clouds and platform.** The roadmap record lists GCC, GCC High and DoD, the Web platform and General Availability. Learn's Communication Compliance pages describe the same conditions without naming clouds, and the Communication Compliance rows in the Microsoft Purview GCC High planning table do not name them.

**Who configures.** The permissions page lists the Communication Compliance and Communication Compliance Admins role groups as able to configure policies and settings. Learn says only members of those two groups can use the condition test.

**Which policies.** Learn says new policies should use the condition builder, which must be switched on in the **Conditions** section unless the policy is created from a template. Existing policies keep the condition names in the first column of Learn's table.

**Prerequisites.** Learn says Communication Compliance requires the audit log to be enabled, and that reviewers must have Exchange Online mailboxes and be assigned in each policy.

## Governance guidance

### Before rollout

- List your existing Communication Compliance policies and note which use external-address conditions or exceptions, so you know which would need rebuilding in the condition builder.
- Prepare invented sample messages for testing, and a .txt file of them if you want to upload a list.
- Agree who approves a pilot policy and which small group of scoped users it covers.

### At rollout

- Check, once the capability reaches your cloud, that the **Condition builder** option and **Test your conditions** appear on the policy conditions page.
- Build new policies in the condition builder and start with a pilot policy scoped to a small group. Learn describes testing a pilot for several days before wider rollout.
- Use **Test your conditions** only for classifier and sensitive information type conditions, because Learn says those are the only conditions it tests.

### After rollout

- Compare alert volume for each OR group with the pilot and tighten any group that widens the policy.
- Re-check Learn and Message center for when the test feature leaves preview and which clouds it covers.

## Governance controls

<p class="controls__lead">Where each control lives. The left column says what the setting decides and how far it reaches; the middle gives the admin centre and the exact path; the right gives the script, API or command that does the same. <em>Not yet documented</em> means Microsoft has not published a control for that surface, so there is nothing to configure yet.</p>

<table class="controls">
<thead><tr><th>Control</th><th>Admin UI</th><th>API and automation</th></tr></thead>
<tbody>
<tr><td data-label="Control"><strong>Whether a policy uses the condition builder (OR logic and external sender or recipient conditions)</strong><br><small class="controls__note">Per policy, not tenant-wide. Template-based new policies use the condition builder automatically. The Communication Compliance and Communication Compliance Admins role groups can configure policies.</small></td><td data-label="Admin UI"><strong>Microsoft Purview portal</strong><br>Communication Compliance › Policies › Create policy › Custom policy › Choose conditions and review percentage › Conditions › Condition builder <a href="https://learn.microsoft.com/purview/communication-compliance-policies" rel="noopener" class="controls__docs">Learn</a></td><td data-label="API and automation"><em class="controls__gap">Not yet documented</em></td></tr>
<tr><td data-label="Control"><strong>Testing policy conditions with sample messages before saving a policy</strong><br><small class="controls__note">Preview on Learn. Tests only the classifier and sensitive info type conditions. Needs the Communication Compliance or Communication Compliance Admins role group.</small></td><td data-label="Admin UI"><strong>Microsoft Purview portal</strong><br>Communication Compliance › Policies › Create policy › Custom policy › Conditions and percentage › Test your conditions <a href="https://learn.microsoft.com/purview/communication-compliance-configure" rel="noopener" class="controls__docs">Learn</a></td><td data-label="API and automation"><em class="controls__gap">Not yet documented</em></td></tr>
</tbody>
</table>

Learn says policies cannot be created or managed with PowerShell; the Communication Compliance solution in the Microsoft Purview portal is the route. Microsoft Learn documents no Graph operation that edits the conditions of a Communication Compliance policy at the time of writing (November 2026). The Tenant Configuration Management reference lists a supervisoryReviewRule resource with a Condition parameter, but the page describes baselines, snapshots and drift monitoring and does not say whether it handles condition builder conditions.

The condition builder is chosen per policy and is automatic for template-based new policies. Who may configure policies is set by role group membership under Settings > Roles and groups > Role groups > role group > Edit > Choose users on the Learn permissions page; that page also says role group changes can take up to 30 minutes to apply. The test pane is available to the Communication Compliance and Communication Compliance Admins role groups. The two paths use different page names in Learn (**Choose conditions and review percentage** and **Conditions and percentage**).

## Open questions

- Which of the three changes, if any, are already available in GCC, GCC High and DoD tenants, and which depend on the December CY2026 target? Watch the roadmap item and the Learn Communication Compliance pages.
- Does **Test your conditions** extend beyond the two classifier and sensitive information type conditions, and when does it leave preview? Watch the Learn page for getting started with Communication Compliance.
- Will the condition builder be on by default for custom policies in the government clouds, or stay an opt-in switch? Microsoft has not stated this for those clouds.
- Is there an API or PowerShell route to create or edit conditions? Learn says PowerShell cannot manage these policies; watch the Tenant Configuration Management reference for supervisoryReviewRule coverage.

<!-- rationale
risk: Low. The roadmap item adds ways to write policy conditions, not a new data source. Microsoft has not stated what happens on arrival, so this rates on today's policies continuing unchanged.
cost: Low. Communication Compliance already needs a qualifying licence, and no separate licence or meter for these conditions is published. The known cost is admin time to build, test and tune policies.
impact: Low. Policy authors and reviewers in Communication Compliance are the people who notice. The roadmap and Learn describe no change that scoped users would see.
-->

<!-- verifier-findings (2026-11-20, verified-with-gaps; checked by gpt-6.1-sol)
The independent check found fault only with the statements below. This is a correction: change what they name and carry the rest of the page over unchanged.
These are minor and do not hold the page. Where removing the statement, or rewording it in the words the fix gives, settles one, do that; otherwise leave it as it is. A minor finding may also add a source link it names for a statement already on the page. It adds no row and nothing that needs research.
- [supported, minor] controls[0].ui; Governance controls table / admin-path: The condition builder is reached through Communication Compliance > Policies > Create policy > Custom policy > Choose conditions and review percentage > Conditions > Condition builder. | Found: in the Conditions section, above the existing condition builder, turn the Condition builder option on. | Fix: Expand the path to 'Communication Compliance > Policies > Create policy > Custom policy > Name and describe your policy > Choose users and reviewers > Choose locations to detect communications > Choose conditions and review percentage > Conditions > Condition builder'. Note that 'Admin units (preview)' appears before 'Choose users and reviewers' if admin units exist. The intervening wizard pages are documented at https://learn.microsoft.com/purview/communication-compliance-configure, already cited; the current docs link correctly documents the final control. | Source: https://learn.microsoft.com/purview/communication-compliance-policies
- [supported, minor] controls[1].ui; Governance controls table / admin-path: Condition testing is reached through Communication Compliance > Policies > Create policy > Custom policy > Conditions and percentage > Test your conditions. | Found: Select Create policy, then select Custom policy. ... On the Conditions and percentage page, after entering your conditions, select Test your conditions. | Fix: Expand the path to 'Communication Compliance > Policies > Create policy > Custom policy > Name and describe your policy > Choose users and reviewers > Choose locations to detect communications > Conditions and percentage > Test your conditions'. Note that 'Admin units (preview)' appears before 'Choose users and reviewers' if admin units exist. Retain the existing note explaining Learn's differing conditions-page labels. | Source: https://learn.microsoft.com/purview/communication-compliance-configure
- [supported, minor] Governance controls; Open questions / behaviour: Learn says PowerShell cannot create or manage Communication Compliance policies. | Found: PowerShell isn't supported for creating and managing Communication Compliance policies. To create and manage these policies, use the policy management controls in the Communication Compliance solution. | Fix: Add after the PowerShell statement: 'Microsoft documentation is not fully consistent: the Security & Compliance PowerShell reference documents Set-SupervisoryReviewRule with -Condition for modifying supervisory review rules, but does not document selecting the new condition builder or running its sample-message tests.' Cite https://learn.microsoft.com/powershell/module/exchangepowershell/set-supervisoryreviewrule?view=exchange-ps. Retain the portal guidance and the narrowly scoped null automation sides; do not infer new-builder support from the older rule reference. | Source: https://learn.microsoft.com/purview/communication-compliance-policies
-->
