---
title: "Microsoft Teams: consecutive interpretation in Interpreter, billed in Copilot Credits"
slug: "microsoft-teams-consecutive-interpretation-in-interpreter"
roadmapId: 557180
topic: "m365-copilot"
products: ["Microsoft Teams","Microsoft Copilot (Microsoft 365)"]
summary: "Meeting organisers with a Copilot licence can turn on turn-by-turn spoken interpretation for everyone in a Teams meeting, billed in Copilot Credits. Admins must cover it in a spending policy before anyone can use it."
status: "rolling-out"
releasePhase: ["General Availability","Targeted Release"]
clouds: ["Worldwide (Standard Multi-Tenant)"]
platforms: ["Android","Desktop","iOS","Mac"]
targetDate: "May CY2026"
previewDate: null
risk: "medium"
cost: "variable"
impact: "medium"
defaultState: "admin-opt-in"
action: "prepare"
licensing:
  model: "mixed"
  notes: "The organiser needs a Microsoft 365 base licence, a Teams licence and a Microsoft Copilot licence, and usage is billed in Copilot Credits through the organiser's spending policy. Participants need no Copilot licence to hear it."
audiences: ["m365-admin","finops","service-owner","end-user"]
tags: ["teams","interpreter-agent","copilot-credits","spending-policies","usage-based-billing","cost-management","meeting-policy","m365-copilot","powershell"]
sources:
  - title: "Microsoft 365 Roadmap: Microsoft Teams: Consecutive interpretation in Interpreter"
    url: "https://www.microsoft.com/microsoft-365/roadmap?id=557180"
    kind: "roadmap"
  - title: "MC1239927: (Updated) Microsoft Teams: Consecutive interpretation in Interpreter agent will be generally available"
    url: "https://admin.microsoft.com/Adminportal/Home#/MessageCenter/:/messages/MC1239927"
    kind: "message-center"
  - title: "Manage Interpreter agent for your organization"
    url: "https://learn.microsoft.com/microsoftteams/interpreter-agent-teams"
    kind: "learn"
  - title: "Understand usage-based billing and cost management for Copilot Credits"
    url: "https://learn.microsoft.com/copilot/plan/usage-based-billing-overview-copilot-credits"
    kind: "learn"
  - title: "Set up usage-based billing for Copilot Credits"
    url: "https://learn.microsoft.com/copilot/implement/usage-based-billing-copilot-credits-setup"
    kind: "learn"
  - title: "Managing AI experiences enabled by usage-based billing"
    url: "https://learn.microsoft.com/copilot/implement/usage-based-billing-manage-copilot-credits"
    kind: "learn"
  - title: "Copilot Credits Licensing Guidance"
    url: "https://www.microsoft.com/licensing/guidance/CopilotCreditsGuide"
    kind: "docs"
  - title: "Set-CsTeamsMeetingPolicy"
    url: "https://learn.microsoft.com/powershell/module/microsoftteams/set-csteamsmeetingpolicy"
    kind: "learn"
  - title: "spendingPolicy resource type"
    url: "https://learn.microsoft.com/microsoft-365/copilot/extensibility/api/admin-settings/cost-management/resources/spendingpolicy"
    kind: "learn"
  - title: "spendingPolicyServiceSetting resource type"
    url: "https://learn.microsoft.com/microsoft-365/copilot/extensibility/api/admin-settings/cost-management/resources/spendingpolicyservicesetting"
    kind: "learn"
  - title: "Whether a spending policy covers Teams: Consecutive interpretation (Microsoft Graph)"
    url: "https://learn.microsoft.com/microsoft-365/copilot/extensibility/api/admin-settings/cost-management/spendingpolicyservicesetting-create"
    kind: "learn"
  - title: "Which users and groups a spending policy applies to (Microsoft Graph)"
    url: "https://learn.microsoft.com/microsoft-365/copilot/extensibility/api/admin-settings/cost-management/overview"
    kind: "learn"
  - title: "Monthly credit limit for the policy and for each user (Microsoft Graph)"
    url: "https://learn.microsoft.com/microsoft-365/copilot/extensibility/api/admin-settings/cost-management/spendingpolicy-update"
    kind: "learn"
videos: []
related: ["copilot-credits","spending-policies","meeting-policy","microsoft-teams-ai-interpreter-for-teams-events","microsoft-teams-interpreter-agent-support-in-teams-rooms-on-android"]
controls:
  - governs: "Whether users can use Interpreter, in both simultaneous and consecutive modes, in meetings"
    scope: "user"
    ui: null
    api:
      kind: "powershell"
      call: "Set-CsTeamsMeetingPolicy -Identity <policy name> -AIInterpreter Disabled"
      docs: "https://learn.microsoft.com/microsoftteams/interpreter-agent-teams"
    note: "Enabled by default. Does not replace the licence and spending policy prerequisites. Turning it off also removes simultaneous interpretation."
  - governs: "Whether a spending policy covers Teams: Consecutive interpretation"
    scope: "group"
    ui:
      surface: "Microsoft 365 admin center"
      path: "Copilot > Cost Management > Configuration > spending policy > Agents and services"
      docs: "https://learn.microsoft.com/copilot/implement/usage-based-billing-manage-copilot-credits"
    api:
      kind: "graph"
      call: "POST /beta/copilot/costManagement/spendingPolicies/{id}/serviceSettings"
      docs: "https://learn.microsoft.com/microsoft-365/copilot/extensibility/api/admin-settings/cost-management/spendingpolicyservicesetting-create"
    note: "The request body sets serviceId and state. The serviceId for consecutive interpretation is not given in the reference. Beta API."
  - governs: "Which users and groups a spending policy applies to"
    scope: "group"
    ui:
      surface: "Microsoft 365 admin center"
      path: "Copilot > Cost Management > Configuration > spending policy > Scope"
      docs: "https://learn.microsoft.com/copilot/implement/usage-based-billing-manage-copilot-credits"
    api:
      kind: "graph"
      call: "POST /beta/copilot/costManagement/spendingPolicies/{id}/microsoft.graph.selectedGroupsSpendingPolicy/assignedGroups/$ref"
      docs: "https://learn.microsoft.com/microsoft-365/copilot/extensibility/api/admin-settings/cost-management/overview"
    note: "Specific users are added through security groups. Beta API."
  - governs: "Monthly credit limit for the policy and for each user"
    scope: "group"
    ui:
      surface: "Microsoft 365 admin center"
      path: "Copilot > Cost Management > Configuration > spending policy > Spending limits"
      docs: "https://learn.microsoft.com/copilot/implement/usage-based-billing-manage-copilot-credits"
    api:
      kind: "graph"
      call: "PATCH /beta/copilot/costManagement/spendingPolicies/{id}"
      docs: "https://learn.microsoft.com/microsoft-365/copilot/extensibility/api/admin-settings/cost-management/spendingpolicy-update"
    note: "The request body sets periodLimit and perUserLimit. Users who hit the limit lose access until credits reset on the first of the month."
  - governs: "Policy usage alerts and who receives them"
    scope: "group"
    ui:
      surface: "Microsoft 365 admin center"
      path: "Copilot > Cost Management > Configuration > spending policy > Alerts, and Email alert settings"
      docs: "https://learn.microsoft.com/copilot/implement/usage-based-billing-manage-copilot-credits"
    api:
      kind: "graph"
      call: "PATCH /beta/copilot/costManagement/spendingPolicies/{id}/emailThresholdSettings"
      docs: "https://learn.microsoft.com/microsoft-365/copilot/extensibility/api/admin-settings/cost-management/overview"
    note: "Alerts notify only; they do not stop use. Beta API."
  - governs: "Whether a spending policy picks up newly supported services automatically"
    scope: "group"
    ui:
      surface: "Microsoft 365 admin center"
      path: "Copilot > Cost Management > Configuration > + Add spending policy > Select agents and services > Auto-apply new services"
      docs: "https://learn.microsoft.com/copilot/implement/usage-based-billing-manage-copilot-credits"
    api: null
    note: "On by default for spending policies."
  - governs: "Turning off consecutive interpretation while keeping simultaneous interpretation"
    scope: "tenant"
    ui: null
    api: null
    note: "The meeting policy switch covers both modes. Use spending policy coverage to decide who can use consecutive interpretation."
confidence: "high"
created: "2026-11-28"
updated: "2026-11-28"
roadmapModified: "2026-05-01T21:45:13"
changes:
  - date: "2026-11-28"
    note: "New briefing: consecutive interpretation in Teams Interpreter, its Copilot Credits billing and the spending policy and meeting policy controls."
  - date: "2026-11-28"
    note: "Checked against Microsoft Learn by gpt-6.1-sol: held: 4 of 113 statements contradicted, 2 unconfirmed; taken offline until corrected"
version: 1
verification:
  status: "held"
  date: "2026-11-28"
  version: 1
  model: "gpt-6.1-sol"
  engine: "copilot"
  claims: 113
  confirmed: 107
  unconfirmed: 2
  contradicted: 4
  attempts: 1
  hash: "a7da72a9c775ae2b17231fb2fe553c9b"
---

## What's changing

Interpreter in Teams meetings gains a second mode, consecutive interpretation. Where the existing simultaneous mode is a personal listening experience, consecutive interpretation waits for each speaker to finish, then plays AI-generated interpreted speech so that all participants hear the same interpretation across two languages. The organiser turns it on in the meeting (**More > Interpreter > Consecutive interpretation (uses credits)**, per Microsoft's notice MC1239927) and chooses the two spoken languages.

Unlike simultaneous interpretation, this mode is billed in Copilot Credits. Microsoft Learn says it is a distinct mode, billed separately, charged to the eligible meeting organiser's applicable billing policy, and that once activated it gives interpreted audio to all participants whether or not they have a Microsoft Copilot licence. MC1239927 says administrators will need to set up spending policies to enable it, and that usage charges can begin after an administrator configures a spending policy and an eligible organiser turns it on. Simultaneous interpretation is unchanged.

The roadmap item is **Rolling out**, with a target of May CY2026, for Targeted Release and General Availability in the Worldwide cloud. MC1239927, updated in November 2026, gives the later dates: Targeted Release rollout began in early May 2026 and was expected to complete by late May 2026; General Availability (Worldwide) rollout begins in mid-November 2026 and is expected to complete by early December 2026. The post sets no act-by date.

## Why it matters

This is a new consumption meter inside a meeting feature many users already know. The main decision is financial: who may spend credits on it, and how much. The Learn page describes the meeting policy switch that turns Interpreter on or off as enabled by default and covering both modes, and says it does not replace the licensing and spending policy prerequisites, so the spending policy is the real gate. The cost management pages say a spending policy with **Auto-apply new services** turned on adds newly supported services automatically, and Teams: Consecutive interpretation is on Microsoft's list of supported services. A tenant that has already activated a default spending policy for all users should therefore check whether that policy now covers this mode for every Copilot-licensed organiser.

There is also a meeting-experience change: everyone in the meeting, including external or unlicensed participants, hears AI-generated speech in place of a human interpreter. MC1239927 says interpretation quality may vary with audio quality, speech patterns, network conditions and language pair, which matters for meetings where wording carries weight.

## Risk assessment

**Data exposure**
- Learn says Interpreter performs speech-to-speech translation using Azure Cognitive Services, with a bot transmitting meeting audio for cloud-based processing; this applies to both modes. Voice simulation is available only with simultaneous interpretation, so consecutive mode does not use participants' own voices.
- Interpreted audio reaches every participant, including those without a Copilot licence. Meetings with external guests hear the interpretation too.

**Security & identity**
- No change to sign-in or identity. The organiser's Copilot licence and spending policy membership decide who can activate it.

**Autonomy & actions**
- The feature acts only after an organiser turns it on for a meeting, and then speaks AI-generated interpretation to the whole meeting. MC1239927 says quality may vary; brief organisers of meetings where exact wording matters.

**Change & support**
- MC1239927 says spending policies must be set up to enable the mode, and the manage page says users who hit a policy limit lose access to agents and services for the rest of the month. Expect helpdesk questions from organisers who are not covered or have used their allowance.
- Microsoft's sources disagree on who can turn it on (organiser only, or organisers and co-organisers) and on platforms; see Scope.

## Cost and licensing

**Licence.** The Learn page ([Manage Interpreter agent for your organization](https://learn.microsoft.com/microsoftteams/interpreter-agent-teams)) lists, for organisers who activate consecutive interpretation, an eligible Microsoft 365 base licence, an eligible Teams licence and a Microsoft Copilot licence, with Copilot Credits usage-based billing enabled through the applicable spending policy. The 20 hours a month included with a Copilot licence belong to simultaneous interpretation; consecutive interpretation is billed separately.

**Meter.** Copilot Credits, charged to the organiser's applicable billing policy; the Copilot Credits Guide says attendees are not billed and that credits are consumed while consecutive interpretation is active, primarily based on the duration of the interpreted meeting. Its planning estimates: 160 to 260 credits for a 30-minute meeting, 190 to 320 for 45 minutes and 300 to 400 for 60 minutes, which it calls rough estimates. For how credits are bought and priced, see [/concepts/copilot-credits/](/concepts/copilot-credits/).

**Limits.** Spending policies set a monthly limit for the policy and an optional monthly limit per user (controls table). The manage page asks for a per-user limit of at least 2,000 credits a month. As an example built from the guide's estimates, 2,000 credits covers roughly five to six 60-minute interpreted meetings for one organiser, if nothing else in the policy draws on that user's limit. Policies use prepaid credits first and then pay-as-you-go on the policy's billing method.

**Indirect costs.** Admin time to scope policies, and communication to organisers about what the option costs.

## Scope

- **Who can activate it:** Learn says only the meeting organiser can turn it on, using Teams desktop. The Copilot Credits Guide says the organiser or co-organisers can. Both sources require the person who activates it to have a Microsoft Copilot licence and Copilot Credits usage-based billing.
- **Meetings:** Teams meetings only, not calls. MC1239927 says it is not currently supported in Teams Events, calls or Teams Rooms. Learn says it is designed for small-group discussions with a maximum of 50 participants, ideally 10 to 15.
- **Platforms:** the roadmap lists Android, Desktop, iOS and Mac. MC1239927 says Windows, Mac and web. Learn says participants can listen on Teams desktop or mobile, and mobile participants cannot turn it on.
- **Languages:** Learn lists nine Interpreter languages, including Chinese (Mandarin); the Copilot Credits Guide lists ten for consecutive interpretation, with Simplified and Traditional Chinese.
- **Clouds:** Worldwide (Standard Multi-Tenant) on the roadmap item.
- **Admin roles:** Global administrator or Billing administrator to activate usage-based billing; AI administrator and License administrator can edit spending policies, limits and alerts but cannot create them.

## Governance guidance

### Before rollout
- Check each spending policy under **Copilot > Cost Management > Configuration** for **Teams: Consecutive interpretation** in its agents and services, and note which policies have **Auto-apply new services** on.
- Decide which organisers should use the mode, put them in a security group, and scope a spending policy to that group with the service selected.
- Set the policy's monthly limit and a per-user monthly limit sized from the guide's per-meeting estimates.
- Decide whether Interpreter belongs in meetings at all; if not, set `-AIInterpreter Disabled` in the Teams meeting policy, knowing this also removes simultaneous interpretation.

### At rollout
- Add finance or service-owner recipients to the policy's usage alerts so spending is seen before the limit is reached.
- Tell eligible organisers that the option is labelled **Consecutive interpretation (uses credits)**, that it bills their policy, and that it suits meetings of up to 50 people.
- Brief organisers of sensitive or external meetings that interpretation is AI-generated and its quality may vary.

### After rollout
- Review the **Consumption** tab in **Copilot > Cost management** by service to see what consecutive interpretation is spending and who is using it.
- Handle credit requests from organisers who reach their per-user limit, and adjust the limit or group membership.

## Governance controls

<p class="controls__lead">Where each control lives. The left column says what the setting decides and how far it reaches; the middle gives the admin centre and the exact path; the right gives the script, API or command that does the same. <em>Not yet documented</em> means Microsoft has not published a control for that surface, so there is nothing to configure yet.</p>

<table class="controls">
<thead><tr><th>Control</th><th>Admin UI</th><th>API and automation</th></tr></thead>
<tbody>
<tr><td data-label="Control"><strong>Whether users can use Interpreter, in both simultaneous and consecutive modes, in meetings</strong><br><small>User</small><br><small class="controls__note">Enabled by default. Does not replace the licence and spending policy prerequisites. Turning it off also removes simultaneous interpretation.</small></td><td data-label="Admin UI"><em class="controls__gap">Not yet documented</em></td><td data-label="API and automation"><strong>PowerShell</strong><br><code>Set-CsTeamsMeetingPolicy -Identity &lt;policy name&gt; -AIInterpreter Disabled</code> <a href="https://learn.microsoft.com/microsoftteams/interpreter-agent-teams" rel="noopener" class="controls__docs">Learn</a></td></tr>
<tr><td data-label="Control"><strong>Whether a spending policy covers Teams: Consecutive interpretation</strong><br><small>Group</small><br><small class="controls__note">The request body sets serviceId and state. The serviceId for consecutive interpretation is not given in the reference. Beta API.</small></td><td data-label="Admin UI"><strong>Microsoft 365 admin center</strong><br>Copilot › Cost Management › Configuration › spending policy › Agents and services <a href="https://learn.microsoft.com/copilot/implement/usage-based-billing-manage-copilot-credits" rel="noopener" class="controls__docs">Learn</a></td><td data-label="API and automation"><strong>Microsoft Graph</strong><br><code>POST /beta/copilot/costManagement/spendingPolicies/{id}/serviceSettings</code> <a href="https://learn.microsoft.com/microsoft-365/copilot/extensibility/api/admin-settings/cost-management/spendingpolicyservicesetting-create" rel="noopener" class="controls__docs">Learn</a></td></tr>
<tr><td data-label="Control"><strong>Which users and groups a spending policy applies to</strong><br><small>Group</small><br><small class="controls__note">Specific users are added through security groups. Beta API.</small></td><td data-label="Admin UI"><strong>Microsoft 365 admin center</strong><br>Copilot › Cost Management › Configuration › spending policy › Scope <a href="https://learn.microsoft.com/copilot/implement/usage-based-billing-manage-copilot-credits" rel="noopener" class="controls__docs">Learn</a></td><td data-label="API and automation"><strong>Microsoft Graph</strong><br><code>POST /beta/copilot/costManagement/spendingPolicies/{id}/microsoft.graph.selectedGroupsSpendingPolicy/assignedGroups/$ref</code> <a href="https://learn.microsoft.com/microsoft-365/copilot/extensibility/api/admin-settings/cost-management/overview" rel="noopener" class="controls__docs">Learn</a></td></tr>
<tr><td data-label="Control"><strong>Monthly credit limit for the policy and for each user</strong><br><small>Group</small><br><small class="controls__note">The request body sets periodLimit and perUserLimit. Users who hit the limit lose access until credits reset on the first of the month.</small></td><td data-label="Admin UI"><strong>Microsoft 365 admin center</strong><br>Copilot › Cost Management › Configuration › spending policy › Spending limits <a href="https://learn.microsoft.com/copilot/implement/usage-based-billing-manage-copilot-credits" rel="noopener" class="controls__docs">Learn</a></td><td data-label="API and automation"><strong>Microsoft Graph</strong><br><code>PATCH /beta/copilot/costManagement/spendingPolicies/{id}</code> <a href="https://learn.microsoft.com/microsoft-365/copilot/extensibility/api/admin-settings/cost-management/spendingpolicy-update" rel="noopener" class="controls__docs">Learn</a></td></tr>
<tr><td data-label="Control"><strong>Policy usage alerts and who receives them</strong><br><small>Group</small><br><small class="controls__note">Alerts notify only; they do not stop use. Beta API.</small></td><td data-label="Admin UI"><strong>Microsoft 365 admin center</strong><br>Copilot › Cost Management › Configuration › spending policy › Alerts, and Email alert settings <a href="https://learn.microsoft.com/copilot/implement/usage-based-billing-manage-copilot-credits" rel="noopener" class="controls__docs">Learn</a></td><td data-label="API and automation"><strong>Microsoft Graph</strong><br><code>PATCH /beta/copilot/costManagement/spendingPolicies/{id}/emailThresholdSettings</code> <a href="https://learn.microsoft.com/microsoft-365/copilot/extensibility/api/admin-settings/cost-management/overview" rel="noopener" class="controls__docs">Learn</a></td></tr>
<tr><td data-label="Control"><strong>Whether a spending policy picks up newly supported services automatically</strong><br><small>Group</small><br><small class="controls__note">On by default for spending policies.</small></td><td data-label="Admin UI"><strong>Microsoft 365 admin center</strong><br>Copilot › Cost Management › Configuration › + Add spending policy › Select agents and services › Auto-apply new services <a href="https://learn.microsoft.com/copilot/implement/usage-based-billing-manage-copilot-credits" rel="noopener" class="controls__docs">Learn</a></td><td data-label="API and automation"><em class="controls__gap">Not yet documented</em></td></tr>
<tr><td data-label="Control"><strong>Turning off consecutive interpretation while keeping simultaneous interpretation</strong><br><small>Tenant</small><br><small class="controls__note">The meeting policy switch covers both modes. Use spending policy coverage to decide who can use consecutive interpretation.</small></td><td data-label="Admin UI"><em class="controls__gap">Not yet documented</em></td><td data-label="API and automation"><em class="controls__gap">Not yet documented</em></td></tr>
</tbody>
</table>

The spending policy is the gate: the Learn page says turning Interpreter on through the meeting policy does not replace the licensing and spending policy prerequisites. The `-AIInterpreter` meeting policy setting is the switch the page documents for turning Interpreter on or off in meetings; it covers both modes, and the page says PowerShell must be used to manage Interpreter for the organisation. Microsoft Learn documents no setting that disables consecutive interpretation while leaving simultaneous interpretation on (November 2026).

A user in more than one policy for the same service is assigned one policy (highest per-user limit first), and that policy applies in full. Creating a spending policy needs Global administrator or Billing administrator; AI administrator and License administrator can edit existing policies. The Cost Management API is in beta, and its service settings take a `serviceId`; the reference names `cowork` and `workIQ` as examples but not the value for consecutive interpretation.

## Open questions

- Can co-organisers activate consecutive interpretation, as the Copilot Credits Guide says, and if so, whose spending policy pays? Watch the Learn page.
- Will a separate meeting policy setting be published to turn off consecutive interpretation while keeping simultaneous interpretation? Watch Message center and the Learn page.
- Which `serviceId` does the Cost Management API use for consecutive interpretation? Watch the spendingPolicyServiceSetting reference.
- Does a default spending policy with Auto-apply new services on already cover this mode in your tenant, or does it need adding? Check the policy's agents and services in the admin centre.

<!-- rationale
risk: Medium. Meeting audio is sent for cloud processing and every participant hears AI-generated interpretation, but use is gated by a spending policy whose limits end access for the month.
cost: Variable. Each interpreted meeting consumes Copilot Credits, charged to the organiser's spending policy; Microsoft estimates 160 to 260 credits for a 30-minute meeting.
impact: Medium. Organisers with a Copilot licence in a spending policy can turn it on, and everyone in those meetings hears the interpreted speech.
-->

<!-- verifier-findings (2026-11-28, held; checked by gpt-6.1-sol)
The independent check found fault only with the statements below. This is a correction: change what they name and carry the rest of the page over unchanged.
Correct each of these with the smallest change that removes the fault: delete the statement, narrow it, or put the finding's own "Found" text or worded replacement in its place. Where a fix asks for more than that (a new row, an explanation, further references), do only the part that removes the fault. A correction adds no control rows.
- [contradicted, blocker] controls[4].api: recipient part of governs; Governance controls table / command: The displayed emailThresholdSettings PATCH also configures who receives policy usage alerts. | Found: Recipients can't be sent inline. Manage them through the recipient $ref endpoints (Add recipient and Remove recipient). | Fix: Narrow controls[4].governs and the corresponding table label to 'Policy usage alerts', retaining the existing PATCH. Add to the note: 'This call configures alerts, not recipients; use the admin UI to manage recipients.' The existing UI and recipient advice can remain. | Source: https://learn.microsoft.com/microsoft-365/copilot/extensibility/api/admin-settings/cost-management/costmanagementalertsetting-update
- [contradicted, blocker] controls[5].ui; Governance controls table / admin-path: The add-policy route reaches Auto-apply new services without a policy-scope choice between + Add spending policy and Select agents and services. | Found: complete the following sections ... Define the policy scope ... Select agents and services ... Create and name the policy and then choose Identity as the scope. | Fix: Replace controls[5].ui.path and its rendered table path with 'Copilot > Cost Management > Configuration > + Add spending policy > Define the policy scope > Identity > Select agents and services > Auto-apply new services'. The Identity choice determines the applicable policy workflow. | Source: https://learn.microsoft.com/copilot/implement/usage-based-billing-manage-copilot-credits
- [unsupported, major] Risk assessment: Security & identity / behaviour: Consecutive interpretation makes no change to sign-in. | Found: Searched: Teams consecutive interpretation sign-in identity authentication changes. Read Interpreter management and the sign-in-teams search excerpts; neither states that consecutive interpretation leaves sign-in and identity unchanged. | Fix: Remove 'No change to sign-in or identity.' Retain the following sentence about the organiser's licence and spending policy membership.
- [unsupported, major] Risk assessment: Security & identity / behaviour: Consecutive interpretation makes no change to identity. | Found: Searched: Teams consecutive interpretation sign-in identity authentication changes. Read Interpreter management and sign-in-teams search excerpts; neither documents unchanged identity behaviour for consecutive interpretation. | Fix: Remove 'No change to sign-in or identity.' Retain the documented licence and spending policy prerequisites.
These are minor and do not hold the page. Where removing the statement, or rewording it in the words the fix gives, settles one, do that; otherwise leave it as it is. A minor finding may also add a source link it names for a statement already on the page. It adds no row and nothing that needs research.
- [supported, minor] controls[2].api; Governance controls table / command: POST /beta/copilot/costManagement/spendingPolicies/{id}/microsoft.graph.selectedGroupsSpendingPolicy/assignedGroups/$ref assigns a group to a policy. | Found: Add assignedGroup | POST /copilot/costManagement/spendingPolicies/{id}/microsoft.graph.selectedGroupsSpendingPolicy/assignedGroups/$ref | Add a group reference to a policy. | Fix: Keep the call. Add to controls[2].note: 'The request body sets @odata.id to the group reference URL.' This is stated at https://learn.microsoft.com/microsoft-365/copilot/extensibility/api/admin-settings/cost-management/selectedgroupsspendingpolicy-post-assignedgroups; cite that page. | Source: https://learn.microsoft.com/microsoft-365/copilot/extensibility/api/admin-settings/cost-management/overview
- [supported, minor] controls[4].api; Governance controls table / command: PATCH /beta/copilot/costManagement/spendingPolicies/{id}/emailThresholdSettings configures policy usage alerts. | Found: Update costManagementAlertSetting | PATCH /copilot/costManagement/spendingPolicies/{id}/emailThresholdSettings | Create or update the alert configuration. | Fix: Keep the call and add to controls[4].note: 'The request body sets isEnabled and thresholds.' Cite https://learn.microsoft.com/microsoft-365/copilot/extensibility/api/admin-settings/cost-management/costmanagementalertsetting-update, whose example supplies those properties. | Source: https://learn.microsoft.com/microsoft-365/copilot/extensibility/api/admin-settings/cost-management/overview
- [contradicted, minor] front matter: action; Why it matters / consistency: The prepare action rating understates the immediate decision for tenants whose existing policies automatically add new services during rollout. | Found: action: "prepare"; "A tenant that has already activated a default spending policy for all users should therefore check whether that policy now covers this mode for every Copilot-licensed organiser." | Fix: Set action to 'act-now': rollout is under way on the run date, and existing policies with Auto-apply new services can expose new metered use without another administrator action.
- [contradicted, minor] Governance guidance: After rollout; Governance controls table / consistency: The checklist tells administrators to review Consumption reporting, but the controls table has no corresponding row. | Found: "Review the Consumption tab in Copilot > Cost management by service"; the seven controls rows cover Interpreter, policy services, scope, limits, alerts, automatic services and the missing separate-mode switch. | Fix: The After rollout step to review the Consumption tab has no controls-table row. Remove that checklist bullet to align the checklist with the existing table; do not add a control row.
-->
