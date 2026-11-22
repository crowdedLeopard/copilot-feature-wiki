---
title: "Microsoft 365 admin center: access policies for Organizational Data custom attributes"
slug: "m365-admin-center-organizational-data-granular-access-policy-controls-for-custom-attribute"
roadmapId: 564805
topic: "governance"
products: ["Microsoft 365 admin center"]
summary: "Admins can release custom attributes in Organizational Data to chosen users or groups, with Staging as the default policy, and choose whether delegates inherit a manager's access. Launched; review before you share attributes."
status: "launched"
releasePhase: ["General Availability","Preview"]
clouds: ["Worldwide (Standard Multi-Tenant)"]
platforms: ["Web"]
targetDate: "July CY2026"
previewDate: "June CY2026"
risk: "low"
cost: "low"
impact: "medium"
defaultState: "on"
action: "prepare"
licensing:
  model: "included"
  notes: "Microsoft 365 Organizational Data Service licensing depends on the consuming app; Workforce Insights is available to users with paid Microsoft Copilot licences, and delegates need one too. No separate price for access policies is published."
audiences: ["m365-admin","security","compliance"]
tags: ["organizational-data-service","m365-admin-center","data-governance","delegation","least-privilege","m365-copilot"]
sources:
  - title: "Microsoft 365 Roadmap 564805"
    url: "https://www.microsoft.com/microsoft-365/roadmap?id=564805"
    kind: "roadmap"
  - title: "Set access policies for data in Microsoft 365"
    url: "https://learn.microsoft.com/microsoft-365-apps/org-data-service/distribute/set-access-policies"
    kind: "learn"
  - title: "How to get started with Microsoft 365 Organizational Data Service"
    url: "https://learn.microsoft.com/microsoft-365-apps/org-data-service/get-started"
    kind: "learn"
  - title: "Configure Workforce Insights Agent (Frontier)"
    url: "https://learn.microsoft.com/copilot/manage/configure-workforce-insights-agent"
    kind: "learn"
  - title: "Workforce Insights agent"
    url: "https://learn.microsoft.com/copilot/manage/workforce-insights-agent"
    kind: "learn"
videos: []
related: ["m365-copilot-workforce-insights-agent","m365-admin-center-data-quality-report-for-profile-data"]
controls:
  - governs: "Which users see each custom attribute, whose data they see, and whether delegates inherit access"
    scope: "tenant"
    ui:
      surface: "Microsoft 365 admin center"
      path: "Settings > Setup > Migration and Imports > Microsoft 365 Organizational Data Service > Settings > Organization-wide access policy > Edit access policies"
      docs: "https://learn.microsoft.com/microsoft-365-apps/org-data-service/distribute/set-access-policies"
    api: null
    note: "Global Administrator or Organizational Data Source Administrator. Policies are applied to each custom attribute in the wizard's next step; the delegation option is set in the policy."
confidence: "high"
created: "2026-11-22"
updated: "2026-11-22"
roadmapModified: "2026-08-17T22:52:47"
changes:
  - date: "2026-11-22"
    note: "New briefing: Organizational Data access policies for custom attributes (Staging default) and delegate access, from the roadmap record and Learn."
  - date: "2026-11-22"
    note: "Checked against Microsoft Learn by gpt-6.1-sol: passed with 1 of 56 statements not yet confirmed"
version: 1
verification:
  status: "verified-with-gaps"
  date: "2026-11-22"
  version: 1
  model: "gpt-6.1-sol"
  engine: "copilot"
  claims: 56
  confirmed: 54
  unconfirmed: 1
  contradicted: 1
  attempts: 0
  hash: "c2537ea9be7f5decb621977d576d185f"
---

## What's changing

Microsoft 365 Organizational Data Service now lets admins release custom attributes to specific users or groups, rather than broadly to all employees or all managers. The roadmap item also says admins can configure whether leaders and managers may share non-public data with Workforce Insights delegates.

Microsoft Learn describes the access policies behind this. Access policies define who can access which organizational data attributes, for what population. Learn lists four: Public (internal), Limited access - Selected internal, Limited access - Manager level and Limited access - Staging. Staging is described as intended for controlled release to a small number of users, with no additional users by default. Staging is the default policy for custom attributes, and Learn says that until it is configured no users can access data for custom attributes. For the configurable policies, an admin sets the **Users** (who can access the data) and the **Population group** (whose data is available), and can filter the population by reporting hierarchy or by user attributes.

A separate **Allow users to delegate access** option decides what a delegate gets. When it is enabled and a user has assigned a delegate in Workforce Insights, the delegate has access to the same population as the user under the policy. When it is disabled, the user can still assign a delegate, but the delegate does not get the user's population scope for attributes where delegation is not enabled in the policy.

The roadmap record gives the status as Launched, with a July CY2026 target, a June CY2026 preview date and release phases General Availability and Preview, for the Worldwide (Standard Multi-Tenant) cloud on the web. Learn marks the Workforce Insights agent as part of the Microsoft Frontier program and subject to change.

## Why it matters

Custom attributes can hold sensitive HR data, so the question is who can see them through Microsoft 365 Copilot and Workforce Insights. The documented Staging default means a newly shared custom attribute starts with no users able to access it, and an admin has to choose an audience. That is a stricter starting point than releasing to all employees or all managers, and it supports a staged rollout of a new attribute.

If nobody acts, custom attributes that use the default Staging policy stay unavailable to users, which can look like missing data in Workforce Insights. If you widen a policy, Learn says changes to access policies apply to data from any Microsoft 365 Organizational Data Service connector, so check which attributes carry which policy before you save.

## Risk assessment

**Data exposure**

- Staging, the documented default for custom attributes, releases the data to no users until an admin configures it, so a new sensitive attribute is not exposed by default.
- Choosing Selected internal with All users, or Manager level with Managers, releases the attribute more widely. Learn's advice is to use the strictest policy that meets your needs and to use Staging to test with a small group first.
- The Population group setting limits whose data a user can see; leaving it at the default makes all user data available to those users.

**Security & identity**

- Turning on **Allow users to delegate access** gives a delegate the same population as the user for attributes with that policy, so a delegate gets the same population as the user. Delegates need a paid Microsoft Copilot licence.
- Users can see data that describes themselves, such as performance ratings, in addition to any permissions a policy grants.
- Reserved attributes have fixed policies that cannot be edited, so the new controls do not change them.

**Autonomy & actions**

- No change to what the agent can do: the policies decide which attributes and groups Workforce Insights and Copilot organisational queries can return to a signed-in user.

**Change & support**

- Expect support questions about attributes that return no data while they sit on Staging with no audience configured.
- Access policies apply to custom attributes shared with Workforce Insights. Insights and Viva Glint are not subject to the same policies; admins grant access to specific users there instead.

## Cost and licensing

Learn's getting-started page says licensing requirements for Microsoft 365 Organizational Data Service vary by the app that consumes the data: Microsoft 365 Profile needs at least one Exchange Online licence in the tenant, Insights needs a Microsoft Viva Insights licence or a Microsoft 365 licence that includes it, and People Skills needs Microsoft 365 Copilot or Viva.

For Workforce Insights, Learn says the agent is available to users with paid Microsoft Copilot licences, and delegates need one as well. The configuration page adds that the tenant has to enrol in the Microsoft Frontier program. The Learn pages read publish no separate price or meter for access policies. Indirect cost is admin time to review each custom attribute's policy.

## Scope

The policies affect user access to data in Microsoft 365 Copilot and agents including Workforce Insights, in People Skills services such as People Search, People Card and Org Explorer, and in Microsoft 365 apps including Teams and Office. Access policies for custom attributes apply only to custom attributes that are shared with Workforce Insights.

The Microsoft 365 Global Administrator or the Organizational Data Source Administrator creates and manages the policies. The record lists the Worldwide (Standard Multi-Tenant) cloud and the web platform only.

## Governance guidance

### Before rollout

- List every custom attribute shared with Workforce Insights and note which access policy each carries; the default for custom attributes is Staging.
- Decide, with the HR data owner, which users or groups each sensitive attribute should reach, and choose the strictest policy that meets that need.
- Decide whether leaders and managers may share non-public data with delegates before you enable **Allow users to delegate access**.
- Confirm that the people who will query the attributes, and their delegates, hold paid Microsoft Copilot licences.

### At rollout

- Edit the Staging policy to a small pilot audience first, then check what those users can see in Workforce Insights.
- Apply the chosen policy to each custom attribute through the Edit access policies wizard, then review and confirm.
- Set the Population group filter where a user should see only part of the workforce, such as their reporting hierarchy.

### After rollout

- Review policies when attributes, managers or business needs change.
- Re-test delegate access with a test manager and delegate after any change to the delegation option.
- Record who holds the Global Administrator and Organizational Data Source Administrator roles that can change policies.

## Governance controls

<p class="controls__lead">Where each control lives. The left column says what the setting decides and how far it reaches; the middle gives the admin centre and the exact path; the right gives the script, API or command that does the same. <em>Not yet documented</em> means Microsoft has not published a control for that surface, so there is nothing to configure yet.</p>

<table class="controls">
<thead><tr><th>Control</th><th>Admin UI</th><th>API and automation</th></tr></thead>
<tbody>
<tr><td data-label="Control"><strong>Which users see each custom attribute, whose data they see, and whether delegates inherit access</strong><br><small>Tenant</small><br><small class="controls__note">Global Administrator or Organizational Data Source Administrator. Policies are applied to each custom attribute in the wizard's next step; the delegation option is set in the policy.</small></td><td data-label="Admin UI"><strong>Microsoft 365 admin center</strong><br>Settings › Setup › Migration and Imports › Microsoft 365 Organizational Data Service › Settings › Organization-wide access policy › Edit access policies <a href="https://learn.microsoft.com/microsoft-365-apps/org-data-service/distribute/set-access-policies" rel="noopener" class="controls__docs">Learn</a></td><td data-label="API and automation"><em class="controls__gap">Not yet documented</em></td></tr>
</tbody>
</table>

One policy editor governs the audience, the population group and delegate access, and it is where custom attributes are assigned a policy. Only the Microsoft 365 Global Administrator or the Organizational Data Source Administrator can manage the policies. Reserved attributes keep fixed policies, and Public (internal) is a system policy that cannot be changed. At the time of writing (November 2026) Microsoft Learn documents no API or PowerShell operation for access policies, so changes are made in the admin centre.

## Open questions

- What happens to custom attributes already shared with Workforce Insights before this change: do they move to Staging, or keep their existing audience? Watch the Set access policies page on Learn and Message center.
- Is **Allow users to delegate access** on or off by default? The Learn page describes both states but does not state a default.
- When will the Workforce Insights agent leave the Microsoft Frontier program, given that the roadmap item lists General Availability and Preview?
- Will an API or PowerShell route for access policies be documented, so that policies can be audited in a script?

<!-- rationale
risk: Low. Learn documents Staging as the default policy for custom attributes, and it releases nothing until an admin configures it, so exposure only grows when an admin widens a policy.
cost: Low. The only cost the sources show is admin time; the Learn pages publish no separate price or meter for access policies, and Workforce Insights needs a paid Microsoft 365 Copilot licence.
impact: Medium. Admins who manage Organizational Data and the leaders, managers and delegates who query custom attributes in Workforce Insights notice it; most users do not.
-->

<!-- verifier-findings (2026-11-22, verified-with-gaps; checked by gpt-6.1-sol)
The independent check found fault only with the statements below. This is a correction: change what they name and carry the rest of the page over unchanged.
Correct each of these with the smallest change that removes the fault: delete the statement, narrow it, or put the finding's own "Found" text or worded replacement in its place. Where a fix asks for more than that (a new row, an explanation, further references), do only the part that removes the fault. A correction adds no control rows.
- [unsupported, major] Risk assessment: Autonomy & actions / behaviour: There is no change to what the agent can do. | Found: Searched: "Workforce Insights" "access policies" "no change" actions. Read set-access-policies, configure-workforce-insights-agent, workforce-insights-agent and manage-access-wfi-agent; they describe data scope, not an unchanged action capability. | Fix: Remove 'No change to what the agent can do:' and retain the supported statement that access policies decide which attributes and employee groups queries can return.
These are minor and do not hold the page. Where removing the statement, or rewording it in the words the fix gives, settles one, do that; otherwise leave it as it is. A minor finding may also add a source link it names for a statement already on the page. It adds no row and nothing that needs research.
- [supported, minor] controls[0].ui; Governance controls: table / admin-path: The printed Microsoft 365 admin center route reaches Edit access policies, where audiences, population and delegation are configured. | Found: Under the Organization-wide access policy section, select Edit access policies. ... To edit one of the configurable access policies, select the access policy from the list, then select Edit access policy. | Fix: Use 'Settings > Setup > Migration and Imports > tools to migrate or import data > Microsoft 365 Organizational Data Service > Settings > Organization-wide access policy > Edit access policies > Configure access policies > policy > Edit access policy'. Note that Users, Population group and Allow users to delegate access are configured there. Also note that the cited get-started page gives a different migration route: 'Setup > Migration resources > Migrate to the cloud with confidence > Explore migration & import tools > Microsoft 365 Organizational Data Service' (https://learn.microsoft.com/microsoft-365-apps/org-data-service/get-started#step-3-access-microsoft-365-organizational-data-service). | Source: https://learn.microsoft.com/microsoft-365-apps/org-data-service/distribute/set-access-policies
- [contradicted, minor] front matter: action / consistency: The prepare action rating fits this low-risk, low-cost new control. | Found: action: "prepare"; risk: "low"; cost: "low"; summary: "Launched; review before you share attributes." The standard defines review for a new control and reserves prepare for a new control closing high exposure. | Fix: Set action to 'review': this is a launched new control rated low in risk and cost, with review needed before an administrator chooses to share attributes.
-->
