---
title: "Microsoft Purview Communication Compliance: insights on matching users left out of a policy's scope"
slug: "microsoft-purview-compliance-portal-communication-compliance-recommended-policy-scope"
roadmapId: 168843
topic: "governance"
products: ["Microsoft Purview"]
summary: "Communication Compliance policies scoped to selected users can show aggregated insights and a recommendation when users outside the scope send matching messages. Compliance admins should decide per policy whether to keep it on."
status: "launched"
releasePhase: ["General Availability"]
clouds: ["GCC","GCC High","DoD"]
platforms: ["Mac"]
targetDate: "December CY2025"
previewDate: null
risk: "low"
cost: "low"
impact: "low"
defaultState: "unknown"
action: "review"
licensing:
  model: "included"
  notes: "The Microsoft Purview service description lists Communication Compliance as Included in Microsoft 365 E5/A5/G5, Office 365 E5/A5/G5, Microsoft Purview Suite and related plans. No licence or charge specific to policy scope insights is published."
audiences: ["compliance","security","m365-admin"]
tags: ["communication-compliance","purview","role-groups","adaptive-scopes","privacy","gcc","gcc-high","dod"]
sources:
  - title: "Microsoft 365 Roadmap 168843"
    url: "https://www.microsoft.com/microsoft-365/roadmap?id=168843"
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
  - title: "Microsoft Purview service description"
    url: "https://learn.microsoft.com/office365/servicedescriptions/microsoft-365-service-descriptions/microsoft-365-tenantlevel-services-licensing-guidance/microsoft-purview-service-description"
    kind: "learn"
  - title: "Set-SupervisoryReviewPolicyV2"
    url: "https://learn.microsoft.com/powershell/module/exchangepowershell/set-supervisoryreviewpolicyv2"
    kind: "learn"
  - title: "Who can configure Communication Compliance policies and act on policy recommendations (PowerShell)"
    url: "https://learn.microsoft.com/powershell/module/exchangepowershell/add-rolegroupmember"
    kind: "learn"
videos: []
related: ["microsoft-purview-compliance-portal-communication-compliance-adaptive-policy-scope","microsoft-purview-communication-compliance-support-for-adaptive-policy-scopes","microsoft-purview-compliance-portal-communication-compliance-policy-insights","microsoft-purview-compliance-portal-communication-compliance-enhanced-policy-conditions","role-groups"]
controls:
  - governs: "Whether a selected-users policy shows insights and recommendations for matching users outside its scope"
    scope: "other"
    ui:
      surface: "Microsoft Purview portal"
      path: "Communication Compliance > Policies > Create policy > Custom policy > Choose users and reviewers > Choose users and groups > Select users"
      docs: "https://learn.microsoft.com/purview/communication-compliance-configure"
    api: null
    note: "The control is the checkbox Show insights and recommendations for users who match this policy's conditions but weren't included in the policy, which appears under Select users. Set per policy."
  - governs: "Who can configure Communication Compliance policies and act on policy recommendations"
    scope: "tenant"
    ui:
      surface: "Microsoft Purview portal"
      path: "Settings > Roles and groups > Role groups > role group > Edit > Choose users"
      docs: "https://learn.microsoft.com/purview/communication-compliance-permissions"
    api:
      kind: "powershell"
      call: "Add-RoleGroupMember -Identity \"<role-group>\" -Member \"<user-UPN>\""
      docs: "https://learn.microsoft.com/powershell/module/exchangepowershell/add-rolegroupmember"
    note: "Communication Compliance and Communication Compliance Admins can act on recommendations; Analysts and Investigators can only see them. Changes can take up to 30 minutes."
confidence: "medium"
created: "2026-11-28"
updated: "2026-11-28"
roadmapModified: "2026-04-29T23:15:48"
changes:
  - date: "2026-11-28"
    note: "New briefing: per-policy insights on matching users outside a selected-users scope, with the checkbox and role group controls."
  - date: "2026-11-28"
    note: "Checked against Microsoft Learn by gpt-6.1-sol: held: 5 of 48 statements contradicted, 1 unconfirmed; taken offline until corrected"
version: 1
verification:
  status: "held"
  date: "2026-11-28"
  version: 1
  model: "gpt-6.1-sol"
  engine: "copilot"
  claims: 48
  confirmed: 42
  unconfirmed: 1
  contradicted: 5
  attempts: 1
  hash: "872f7fc315fe4750e403864ffdfc98b4"
---

## What's changing

Communication Compliance policies that cover a chosen list of users can now tell administrators when people outside that list send messages that match the policy's conditions. The control is a checkbox in the policy settings: **Show insights and recommendations for users who match this policy's conditions but weren't included in the policy**. It appears when the policy uses the **Select users** option, and Microsoft Learn says it isn't available with **All users** or **Select adaptive scopes**.

With the checkbox on, the policy shows insights and recommends adding those users to the policy's scope. Admins can add specific users or extend the policy to all users. The insights are aggregated, and Learn says the messages of those users cannot be seen until they are added to the policy. If an admin does not act, the recommendation keeps coming back; turning the checkbox off stops it. The recommendation, named **Reduce user scoping blind spots**, is part of the **Policy health** view on the **Policies** page, which Learn marks as preview. Ignoring it does not stop the policy from working.

The policy creation steps tell admins to leave the checkbox selected to receive these recommendations. Microsoft has not stated whether the checkbox is on for policies that existed before the feature arrived.

The roadmap item (168843) lists the feature as Launched, General Availability, with a December CY2025 target, for GCC, GCC High and DoD, and lists Mac as the platform. Microsoft Learn still labels the Policy health view as preview.

## Why it matters

A policy scoped to selected users can miss people who send the content it is meant to catch, such as staff who join a regulated team after the policy was set up. This feature shows how big that gap is without exposing anyone's messages, so compliance teams can find out whether a scope is out of date.

The decision it leads to is sensitive. Each recommendation suggests bringing more people under message review, and in some organisations that needs agreement from legal, HR or employee representatives first. Microsoft has not stated whether existing policies show these insights without anyone acting. Expect the recommendation to keep appearing for policies where the checkbox is on and nobody accepts it.

## Risk assessment

**Data exposure**
- Insights about users outside the policy are aggregated. Learn says their messages cannot be seen until they are added to the policy's scope, so no message content is exposed before that.
- Accepting a recommendation, or extending the policy to all users, brings those users' messages into review by the policy's reviewers. Treat that as a scope change, not a tuning step.

**Security & identity**
- Members of the Communication Compliance and Communication Compliance Admins role groups can act on the recommendation. Analysts and Investigators can see it but not act on it. Review who is in those groups (row 2).

**Autonomy & actions**
- Nothing changes automatically. A policy's scope changes only when a permitted admin accepts a recommendation.

**Change & support**
- The recommendation sits in the Policy health view, which is in preview, so its wording and behaviour may change.
- Recommendations that nobody accepts keep coming back, which adds noise for admins until the checkbox is turned off for that policy.

## Cost and licensing

- **Licence.** The Microsoft Purview service description lists Communication Compliance as **Included** in Microsoft 365 E5/A5/G5, Microsoft Purview Suite/EDU/GOV/FLW, Microsoft 365 E5/A5/F5/G5 Insider Risk Management, Office 365 E5/A5/G5, and the Microsoft 365 E5 and Purview Suite plans with Microsoft Copilot. These insights are part of the Communication Compliance policy settings.
- **Meter.** The Get started page says Communication Compliance uses pay-as-you-go billing, per-user licensing or both. Pay-as-you-go is needed to detect risky interactions in AI data from outside Microsoft 365. Usage is shown in the **Usage center** in the Microsoft Purview portal.
- **Not yet published.** Microsoft publishes no separate charge or meter for policy scope insights.
- **Indirect cost.** Expect admin time to review recommendations. If a policy's scope is widened, reviewers will also have more messages to handle.

## Scope

- **Policies:** those that use the **Select users** option. Learn says the checkbox isn't available with **All users** or **Select adaptive scopes**.
- **Roles:** Communication Compliance and Communication Compliance Admins can act on recommendations. Communication Compliance Analysts and Communication Compliance Investigators can see them.
- **Admin units:** if a policy is scoped by admin units, Learn says only users in those admin units can be selected.
- **Clouds:** GCC, GCC High and DoD, as listed on the roadmap item. **Platform:** Mac, as listed on the roadmap item.
- **Status:** Launched, General Availability, December CY2025 target. Learn marks the Policy health view as preview.

## Governance guidance

### Before rollout
- List the Communication Compliance policies that use **Select users**, since only those can show these insights.
- Agree with legal, HR and, where needed, employee representatives who may approve adding users to a policy's scope after a recommendation.
- Check the membership of the Communication Compliance and Communication Compliance Admins role groups, which can act on recommendations (row 2).

### At rollout
- Open each selected-users policy and set the **Show insights and recommendations for users who match this policy's conditions but weren't included in the policy** checkbox to match the agreed approach (row 1).
- Review the **Policy health** column on the **Policies** page for **Reduce user scoping blind spots** recommendations.

### After rollout
- Record each decision to add users or extend a policy to all users, together with who approved it.
- Turn off the checkbox for policies whose scope is deliberately narrow, so the recommendation stops coming back.
- Recheck the Policy health view while it is in preview, in case its recommendations change.

## Governance controls

<p class="controls__lead">Where each control lives. The left column says what the setting decides and how far it reaches; the middle gives the admin centre and the exact path; the right gives the script, API or command that does the same. <em>Not yet documented</em> means Microsoft has not published a control for that surface, so there is nothing to configure yet.</p>

<table class="controls">
<thead><tr><th>Control</th><th>Admin UI</th><th>API and automation</th></tr></thead>
<tbody>
<tr><td data-label="Control"><strong>Whether a selected-users policy shows insights and recommendations for matching users outside its scope</strong><br><small class="controls__note">The control is the checkbox Show insights and recommendations for users who match this policy's conditions but weren't included in the policy, which appears under Select users. Set per policy.</small></td><td data-label="Admin UI"><strong>Microsoft Purview portal</strong><br>Communication Compliance › Policies › Create policy › Custom policy › Choose users and reviewers › Choose users and groups › Select users <a href="https://learn.microsoft.com/purview/communication-compliance-configure" rel="noopener" class="controls__docs">Learn</a></td><td data-label="API and automation"><em class="controls__gap">Not yet documented</em></td></tr>
<tr><td data-label="Control"><strong>Who can configure Communication Compliance policies and act on policy recommendations</strong><br><small>Tenant</small><br><small class="controls__note">Communication Compliance and Communication Compliance Admins can act on recommendations; Analysts and Investigators can only see them. Changes can take up to 30 minutes.</small></td><td data-label="Admin UI"><strong>Microsoft Purview portal</strong><br>Settings › Roles and groups › Role groups › role group › Edit › Choose users <a href="https://learn.microsoft.com/purview/communication-compliance-permissions" rel="noopener" class="controls__docs">Learn</a></td><td data-label="API and automation"><strong>PowerShell</strong><br><code>Add-RoleGroupMember -Identity &quot;&lt;role-group&gt;&quot; -Member &quot;&lt;user-UPN&gt;&quot;</code> <a href="https://learn.microsoft.com/powershell/module/exchangepowershell/add-rolegroupmember" rel="noopener" class="controls__docs">Learn</a></td></tr>
</tbody>
</table>

The checkbox is set separately for each policy and only for policies scoped with **Select users**. Learn says PowerShell isn't supported for creating and managing Communication Compliance policies. Set-SupervisoryReviewPolicyV2 in Security & Compliance PowerShell has no parameter for this checkbox at the time of writing (November 2026). Role group changes can take up to 30 minutes to apply. Keep at least one user in the Communication Compliance or Communication Compliance Admins role group, as Learn advises.

## Open questions

- Is the insights checkbox on or off for selected-users policies created before the feature arrived? Watch the Create and manage Communication Compliance policies page.
- When will the Policy health view and its **Reduce user scoping blind spots** recommendation leave preview, given that the roadmap lists the feature as General Availability?
- Can admins restricted by admin units see insights about matching users outside their admin units?
- Will a Security & Compliance PowerShell parameter for the checkbox be added, so it can be set across many policies?

<!-- rationale
risk: Low. Insights on users outside the policy are aggregated, and Microsoft Learn says their messages cannot be seen until an admin adds them to the policy's scope.
cost: Low. Communication Compliance is listed as included in Microsoft 365 E5/A5/G5, Office 365 E5/A5/G5 and the Purview suites; no separate charge for these insights is published, so the cost is admin review time.
impact: Low. Only members of the Communication Compliance role groups see the insights; monitored users notice nothing unless an admin widens a policy's scope.
-->

<!-- verifier-findings (2026-11-28, held; checked by gpt-6.1-sol)
The independent check found fault only with the statements below. This is a correction: change what they name and carry the rest of the page over unchanged.
Correct each of these with the smallest change that removes the fault: delete the statement, narrow it, or put the finding's own "Found" text or worded replacement in its place. Where a fix asks for more than that (a new row, an explanation, further references), do only the part that removes the fault. A correction adds no control rows.
- [contradicted, blocker] controls[1].note; Risk assessment: Security & identity; Scope; Governance guidance / role: Communication Compliance and Communication Compliance Admins members can act on recommendations without a policy-state qualification. | Found: If you're a member of the Communication Compliance or Communication Compliance Admins group, you can act on a recommendation as long as the policy is active and if it's not updating. | Fix: Qualify each statement that these groups can act on recommendations with 'when the policy is active and not updating', including controls[1].note and its rendered table note, Risk assessment, Scope and the Before rollout membership-check bullet. Source: https://learn.microsoft.com/purview/communication-compliance-policies#policy-health-preview. | Source: https://learn.microsoft.com/purview/communication-compliance-policies
- [contradicted, blocker] Risk assessment: Autonomy & actions / consistency: Nothing changes automatically on arrival. | Found: defaultState: "unknown"; "Microsoft has not stated whether existing policies show these insights without anyone acting." versus "Nothing changes automatically." | Fix: Replace 'Nothing changes automatically.' with 'Microsoft has not stated whether existing policies show these insights without anyone acting.' Keep defaultState as unknown; the search and the cited guides do not establish the arrival state for existing policies.
- [contradicted, blocker] Risk assessment: Autonomy & actions / behaviour: A policy's scope changes only when a permitted administrator accepts a recommendation. | Found: Run the following PowerShell script on a recurring schedule to add users to the Communication Compliance policy: | Fix: Replace this sentence with 'Communication Compliance recommends including matching out-of-scope users; administrators can select specific users to add or extend the policy to all users.' This is the documented recommendation behaviour at https://learn.microsoft.com/purview/communication-compliance-policies#reduce-user-scoping-blind-spots and does not falsely exclude other scope-management routes. | Source: https://learn.microsoft.com/purview/communication-compliance-configure
These are minor and do not hold the page. Where removing the statement, or rewording it in the words the fix gives, settles one, do that; otherwise leave it as it is. A minor finding may also add a source link it names for a statement already on the page. It adds no row and nothing that needs research.
- [supported, minor] What's changing; Governance guidance: At rollout / behaviour: Policy health includes a recommendation named Reduce user scoping blind spots. | Found: Reduce user scoping blind spots: This recommendation prompts you to reduce blind spots by turning on the Show insights and recommendations for users who match this policy's conditions but weren't included in the policy checkbox | Fix: Replace the sentence beginning 'The recommendation, named' with 'The Policy health view on the Policies page, which Learn marks as preview, includes a Reduce user scoping blind spots recommendation that prompts administrators to turn on the insights checkbox.' The cited page distinguishes this enablement recommendation from the subsequent recommendations to add users. | Source: https://learn.microsoft.com/purview/communication-compliance-policies
- [supported, minor] controls[0].ui; Governance controls table / admin-path: The Purview path is Communication Compliance > Policies > Create policy > Custom policy > Choose users and reviewers > Choose users and groups > Select users. | Found: Select Create policy, then select Custom policy. ... On the Choose users and reviewers page: ... In the Choose users and groups section ... Select users | Fix: Use 'Communication Compliance > Policies > Create policy > Custom policy > Name and describe your policy > Choose users and reviewers > Choose users and groups > Select users > Show insights and recommendations for users who match this policy's conditions but weren't included in the policy'. In the note, add 'If the organisation has admin units, the Admin units (preview) page appears between Name and describe your policy and Choose users and reviewers.' The present path reaches the right page but omits the wizard's name page and stops before the checkbox. | Source: https://learn.microsoft.com/purview/communication-compliance-configure
- [supported, minor] Governance controls / behaviour: Learn says PowerShell is not supported for creating and managing Communication Compliance policies. | Found: PowerShell isn't supported for creating and managing Communication Compliance policies. To create and manage these policies, use the policy management controls in the Communication Compliance solution. | Fix: After this sentence, add 'The Set-SupervisoryReviewPolicyV2 reference nevertheless documents a cmdlet for modifying supervisory review policies, but does not document a parameter for this insights checkbox.' Both pages are already cited: https://learn.microsoft.com/purview/communication-compliance-policies and https://learn.microsoft.com/powershell/module/exchangepowershell/set-supervisoryreviewpolicyv2. | Source: https://learn.microsoft.com/purview/communication-compliance-policies
- [contradicted, minor] rationale: impact / role: Only members of Communication Compliance role groups can see the insights. | Found: Members of the following roles have the same solution permissions included with the Communication Compliance Admins role group: ... Microsoft Entra ID Global Administrator ... Microsoft Purview portal Organization Management | Fix: Replace 'Only members of the Communication Compliance role groups see the insights' with 'The Policy health view presents insights and recommendations to compliance administrators'. This avoids excluding other roles that the cited permissions page gives the same solution permissions. | Source: https://learn.microsoft.com/purview/communication-compliance-permissions
- [unsupported, minor] rationale: impact / behaviour: Monitored users notice nothing unless an administrator widens a policy's scope. | Found: Searched: Communication Compliance policy insights only role groups see recommendations no automatic scope changes. Read the policy guide, Get started guide and permissions page; aggregation and reviewer access are documented, but none states this complete absence of user-visible effects. | Fix: Remove the clause 'monitored users notice nothing unless an admin widens a policy's scope'. Retain the Low impact judgement, based on the documented administrator-facing Policy health view.
- [contradicted, minor] Governance guidance: At rollout and After rollout / consistency: The checklist tells readers to review Policy health, but neither control row represents that view. | Found: "Review the Policy health column on the Policies page"; "Recheck the Policy health view while it is in preview"; controls cover only the insights checkbox and role membership. | Fix: Remove the At rollout bullet beginning 'Review the Policy health column' and the After rollout bullet beginning 'Recheck the Policy health view'. The existing What's changing section can retain its verified description of the view; do not add a control row.
-->
