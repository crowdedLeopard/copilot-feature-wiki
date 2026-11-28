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
action: "act-now"
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
  - title: "Add assignedGroup"
    url: "https://learn.microsoft.com/microsoft-365/copilot/extensibility/api/admin-settings/cost-management/selectedgroupsspendingpolicy-post-assignedgroups"
    kind: "learn"
  - title: "Update costManagementAlertSetting"
    url: "https://learn.microsoft.com/microsoft-365/copilot/extensibility/api/admin-settings/cost-management/costmanagementalertsetting-update"
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
    note: "Specific users are added through security groups. Beta API. The request body sets @odata.id to the group reference URL."
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
  - governs: "Policy usage alerts"
    scope: "group"
    ui:
      surface: "Microsoft 365 admin center"
      path: "Copilot > Cost Management > Configuration > spending policy > Alerts, and Email alert settings"
      docs: "https://learn.microsoft.com/copilot/implement/usage-based-billing-manage-copilot-credits"
    api:
      kind: "graph"
      call: "PATCH /beta/copilot/costManagement/spendingPolicies/{id}/emailThresholdSettings"
      docs: "https://learn.microsoft.com/microsoft-365/copilot/extensibility/api/admin-settings/cost-management/overview"
    note: "Alerts notify only; they do not stop use. Beta API. The request body sets isEnabled and thresholds. This call configures alerts, not recipients; use the admin UI to manage recipients."
  - governs: "Whether a spending policy picks up newly supported services automatically"
    scope: "group"
    ui:
      surface: "Microsoft 365 admin center"
      path: "Copilot > Cost Management > Configuration > + Add spending policy > Define the policy scope > Identity > Select agents and services > Auto-apply new services"
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
  - date: "2026-11-28"
    note: "Corrected the auto-apply path to include the Identity scope step, narrowed the alerts row to alert settings (recipients are managed separately), removed an unsupported sign-in statement and the Consumption checklist step, and raised the action to act-now."
  - date: "2026-11-28"
    note: "Checked against Microsoft Learn by gpt-6.1-sol: passed with 0 of 108 statements not yet confirmed"
version: 2
verification:
  status: "verified-with-gaps"
  date: "2026-11-28"
  version: 2
  model: "gpt-6.1-sol"
  engine: "copilot"
  claims: 108
  confirmed: 108
  unconfirmed: 0
  contradicted: 0
  attempts: 0
  hash: "a827ed7572f61d6847a6e4c4987748f8"
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
- The organiser's Copilot licence and spending policy membership decide who can activate it.

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
- Handle credit requests from organisers who reach their per-user limit, and adjust the limit or group membership.

## Governance controls

<p class="controls__lead">Where each control lives. The left column says what the setting decides and how far it reaches; the middle gives the admin centre and the exact path; the right gives the script, API or command that does the same. <em>Not yet documented</em> means Microsoft has not published a control for that surface, so there is nothing to configure yet.</p>

<table class="controls">
<thead><tr><th>Control</th><th>Admin UI</th><th>API and automation</th></tr></thead>
<tbody>
<tr><td data-label="Control"><strong>Whether users can use Interpreter, in both simultaneous and consecutive modes, in meetings</strong><br><small>User</small><br><small class="controls__note">Enabled by default. Does not replace the licence and spending policy prerequisites. Turning it off also removes simultaneous interpretation.</small></td><td data-label="Admin UI"><em class="controls__gap">Not yet documented</em></td><td data-label="API and automation"><strong>PowerShell</strong><br><code>Set-CsTeamsMeetingPolicy -Identity &lt;policy name&gt; -AIInterpreter Disabled</code> <a href="https://learn.microsoft.com/microsoftteams/interpreter-agent-teams" rel="noopener" class="controls__docs">Learn</a></td></tr>
<tr><td data-label="Control"><strong>Whether a spending policy covers Teams: Consecutive interpretation</strong><br><small>Group</small><br><small class="controls__note">The request body sets serviceId and state. The serviceId for consecutive interpretation is not given in the reference. Beta API.</small></td><td data-label="Admin UI"><strong>Microsoft 365 admin center</strong><br>Copilot › Cost Management › Configuration › spending policy › Agents and services <a href="https://learn.microsoft.com/copilot/implement/usage-based-billing-manage-copilot-credits" rel="noopener" class="controls__docs">Learn</a></td><td data-label="API and automation"><strong>Microsoft Graph</strong><br><code>POST /beta/copilot/costManagement/spendingPolicies/{id}/serviceSettings</code> <a href="https://learn.microsoft.com/microsoft-365/copilot/extensibility/api/admin-settings/cost-management/spendingpolicyservicesetting-create" rel="noopener" class="controls__docs">Learn</a></td></tr>
<tr><td data-label="Control"><strong>Which users and groups a spending policy applies to</strong><br><small>Group</small><br><small class="controls__note">Specific users are added through security groups. Beta API. The request body sets @odata.id to the group reference URL.</small></td><td data-label="Admin UI"><strong>Microsoft 365 admin center</strong><br>Copilot › Cost Management › Configuration › spending policy › Scope <a href="https://learn.microsoft.com/copilot/implement/usage-based-billing-manage-copilot-credits" rel="noopener" class="controls__docs">Learn</a></td><td data-label="API and automation"><strong>Microsoft Graph</strong><br><code>POST /beta/copilot/costManagement/spendingPolicies/{id}/microsoft.graph.selectedGroupsSpendingPolicy/assignedGroups/$ref</code> <a href="https://learn.microsoft.com/microsoft-365/copilot/extensibility/api/admin-settings/cost-management/overview" rel="noopener" class="controls__docs">Learn</a></td></tr>
<tr><td data-label="Control"><strong>Monthly credit limit for the policy and for each user</strong><br><small>Group</small><br><small class="controls__note">The request body sets periodLimit and perUserLimit. Users who hit the limit lose access until credits reset on the first of the month.</small></td><td data-label="Admin UI"><strong>Microsoft 365 admin center</strong><br>Copilot › Cost Management › Configuration › spending policy › Spending limits <a href="https://learn.microsoft.com/copilot/implement/usage-based-billing-manage-copilot-credits" rel="noopener" class="controls__docs">Learn</a></td><td data-label="API and automation"><strong>Microsoft Graph</strong><br><code>PATCH /beta/copilot/costManagement/spendingPolicies/{id}</code> <a href="https://learn.microsoft.com/microsoft-365/copilot/extensibility/api/admin-settings/cost-management/spendingpolicy-update" rel="noopener" class="controls__docs">Learn</a></td></tr>
<tr><td data-label="Control"><strong>Policy usage alerts</strong><br><small>Group</small><br><small class="controls__note">Alerts notify only; they do not stop use. Beta API. The request body sets isEnabled and thresholds. This call configures alerts, not recipients; use the admin UI to manage recipients.</small></td><td data-label="Admin UI"><strong>Microsoft 365 admin center</strong><br>Copilot › Cost Management › Configuration › spending policy › Alerts, and Email alert settings <a href="https://learn.microsoft.com/copilot/implement/usage-based-billing-manage-copilot-credits" rel="noopener" class="controls__docs">Learn</a></td><td data-label="API and automation"><strong>Microsoft Graph</strong><br><code>PATCH /beta/copilot/costManagement/spendingPolicies/{id}/emailThresholdSettings</code> <a href="https://learn.microsoft.com/microsoft-365/copilot/extensibility/api/admin-settings/cost-management/overview" rel="noopener" class="controls__docs">Learn</a></td></tr>
<tr><td data-label="Control"><strong>Whether a spending policy picks up newly supported services automatically</strong><br><small>Group</small><br><small class="controls__note">On by default for spending policies.</small></td><td data-label="Admin UI"><strong>Microsoft 365 admin center</strong><br>Copilot › Cost Management › Configuration › + Add spending policy › Define the policy scope › Identity › Select agents and services › Auto-apply new services <a href="https://learn.microsoft.com/copilot/implement/usage-based-billing-manage-copilot-credits" rel="noopener" class="controls__docs">Learn</a></td><td data-label="API and automation"><em class="controls__gap">Not yet documented</em></td></tr>
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

<!-- verifier-findings (2026-11-28, verified-with-gaps; checked by gpt-6.1-sol)
The independent check found fault only with the statements below. This is a correction: change what they name and carry the rest of the page over unchanged.
These are minor and do not hold the page. Where removing the statement, or rewording it in the words the fix gives, settles one, do that; otherwise leave it as it is. A minor finding may also add a source link it names for a statement already on the page. It adds no row and nothing that needs research.
- [supported, minor] Scope: Admin roles; Governance controls / role: License administrators can edit spending policies, limits and alerts. | Found: AI administrator and License administrator roles can edit spending policies, manage limits and alerts, and billing methods. ... AI Reader, Global Reader, License Administrator, and other supported reader-based roles ... provide read-only access | Fix: Qualify the License administrator edit-permission statement in Scope and Governance controls with: 'The setup page also lists License Administrator among read-only roles that cannot change spending policies; confirm effective permissions before relying on this role to edit them.' Source: https://learn.microsoft.com/copilot/implement/usage-based-billing-copilot-credits-setup#roles-and-requirements. | Source: https://learn.microsoft.com/copilot/implement/usage-based-billing-copilot-credits-setup
- [supported, minor] controls[6]; Governance controls; Open questions / absence: A separate meeting-policy switch that disables consecutive interpretation while preserving simultaneous interpretation is not documented. | Found: Searched: Teams consecutive interpretation disable separately simultaneous AIInterpreter admin center PowerShell; "consecutive interpretation" disable simultaneous spending policy. Opened interpreter-agent-teams, Set-CsTeamsMeetingPolicy and spending-policy docs; no separate meeting-policy switch. | Fix: Change controls[6].governs, including its rendered table label, to 'Separate meeting-policy switch for consecutive interpretation'. Keep both sides null and the existing note about spending-policy coverage; that note and the prose already explain the documented alternative.
- [supported, minor] What's changing: General Availability rollout / record: Consecutive interpretation is transitioning to General Availability in the notice's rollout window. | Found: Consecutive interpretation in Interpreter for Teams meetings, currently in public preview, is planned to begin rolling out to general availability. | Fix: Add to the rollout paragraph: 'MC1239927 describes consecutive interpretation as currently in public preview ahead of its General Availability rollout.' This preserves the notice's qualification without asserting that preview has ended.
-->
