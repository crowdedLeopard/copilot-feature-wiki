---
title: "Microsoft Teams: onboarding workflow connects new team members to channels"
slug: "microsoft-teams-onboarding-workflow-for-new-team-members"
roadmapId: 573452
topic: "modern-work"
products: ["Microsoft Teams"]
summary: "Team owners will be able to connect new members to relevant channels automatically when they join a team. Microsoft's notice MC1518033 says no admin action is required; no admin setting is documented yet."
status: "in-development"
releasePhase: ["General Availability","Targeted Release"]
clouds: ["Worldwide (Standard Multi-Tenant)"]
platforms: ["Android","Desktop","iOS","Mac"]
targetDate: "March CY2027"
previewDate: "November CY2026"
risk: "low"
cost: "low"
impact: "medium"
defaultState: "unknown"
action: "review"
licensing:
  model: "included"
  notes: "The Teams service description says Teams can be licensed as part of qualifying Microsoft 365 offerings or as a standalone SKU. A licence or charge specific to the onboarding workflow is not yet published."
audiences: ["m365-admin","service-owner","change-adoption"]
tags: ["teams","channels","adoption","onboarding"]
sources:
  - title: "Microsoft 365 Roadmap 573452"
    url: "https://www.microsoft.com/microsoft-365/roadmap?id=573452"
    kind: "roadmap"
  - title: "MC1518033: (Updated) Microsoft Teams: Onboarding workflow for new team members"
    url: "https://admin.microsoft.com/Adminportal/Home#/MessageCenter/:/messages/MC1518033"
    kind: "message-center"
  - title: "Microsoft Teams service description"
    url: "https://learn.microsoft.com/office365/servicedescriptions/teams-service-description"
    kind: "learn"
  - title: "Overview of standard channels in Microsoft Teams"
    url: "https://learn.microsoft.com/microsoftteams/standard-channels"
    kind: "learn"
  - title: "Assign team owners and members in Microsoft Teams admin center"
    url: "https://learn.microsoft.com/microsoftteams/assign-roles-permissions"
    kind: "learn"
  - title: "Add-TeamUser"
    url: "https://learn.microsoft.com/powershell/module/microsoftteams/add-teamuser?view=teams-ps"
    kind: "learn"
  - title: "Set-CsTeamsChannelsPolicy"
    url: "https://learn.microsoft.com/powershell/module/microsoftteams/set-csteamschannelspolicy?view=teams-ps"
    kind: "learn"
videos: []
related: ["microsoft-teams-granular-channel-notification-controls"]
controls:
  - governs: "Tenant or team switch for the onboarding workflow"
    scope: "tenant"
    ui: null
    api: null
    note: "Microsoft Learn documents no such control at the time of writing (November 2026)."
  - governs: "Who is a member of a team (today's way to add people)"
    scope: "group"
    ui:
      surface: "Teams admin center"
      path: "Teams > Manage teams > team > Members"
      docs: "https://learn.microsoft.com/microsoftteams/assign-roles-permissions"
    api:
      kind: "powershell"
      call: "Add-TeamUser -GroupId <team GroupId> -User <user principal name>"
      docs: "https://learn.microsoft.com/powershell/module/microsoftteams/add-teamuser?view=teams-ps"
    note: "Existing control, not a control over the new workflow: it adds a member to a team, and Microsoft has not said whether it starts the workflow."
confidence: "medium"
created: "2026-11-19"
updated: "2026-11-19"
roadmapModified: "2026-11-19T00:53:06"
changes:
  - date: "2026-11-19"
    note: "First briefing for roadmap item 573452, using the 18 November 2026 update to MC1518033 that moved General Availability to mid-March 2027."
  - date: "2026-11-19"
    note: "Checked against Microsoft Learn by gpt-6.1-sol: passed: all 36 statements confirmed"
version: 1
verification:
  status: "verified"
  date: "2026-11-19"
  version: 1
  model: "gpt-6.1-sol"
  engine: "copilot"
  claims: 36
  confirmed: 36
  unconfirmed: 0
  contradicted: 0
  attempts: 0
  hash: "841d3662b439e0ad224ffecc3cb13636"
---

## What's changing

Microsoft Teams is adding an onboarding workflow that connects new team members to relevant channels when they join a team. In Microsoft's notice MC1518033, the change is that team owners can automatically add new members to relevant channels through the workflow when members are added to a team.

Microsoft Learn does not describe this workflow yet, so what follows is the roadmap item's and the notice's description. Neither says which channel types the workflow supports, how an owner sets it up, or whether it is on for every team on arrival. MC1518033 was updated on 18 November 2026 and says it clarifies the supported channel types, but the post as supplied does not list them.

The roadmap item is In development, with a preview target of November CY2026 and a General Availability target of March CY2027. It lists Worldwide (Standard Multi-Tenant), the Android, Desktop, iOS and Mac platforms, and the General Availability and Targeted Release phases.

MC1518033 gives the rollout as follows: Targeted Release (R3.6) proceeds gradually from November 2026 through January 2027. General Availability (Worldwide) begins in mid-March 2027 (previously early December 2026) and is expected to complete by end of March 2027 (previously mid-December 2026).

## Why it matters

For a service owner this is mainly an adoption and communication change. People who join a team could be connected to the right channels without hunting for them, which changes what new members see on day one and what team owners are expected to set up.

The notice says no admin action is required and suggests telling team owners. Microsoft has not stated what happens on arrival for a team whose owner does nothing, so plan on the basis that no source says existing behaviour changes, and watch Message center because the General Availability dates have already moved once.

## Risk assessment

**Data exposure**

- Standard channels are visible and accessible to all members of a team, according to Microsoft Learn, so connecting a member to a standard channel does not by itself widen who can read it. Private channels are limited to team members and guests specifically added to them. Microsoft has not said whether the workflow can add people to private or shared channels, so ask before assuming it cannot.

**Security & identity**

- No change documented: the roadmap item and notice describe no new permission, identity or external-sharing behaviour, and name no guest or external-user handling.

**Autonomy & actions**

- The roadmap item and MC1518033 describe people being connected to channels automatically when they join a team. Microsoft has not described how the workflow is configured or what a member can change afterwards, so confirm both before telling owners to rely on it.

**Change & support**

- Expect questions from new members about channels they did not choose, and from owners about how to set the workflow up. Microsoft documents no admin switch for the workflow at the time of writing (November 2026), so the response is communication to team owners, not central configuration.
- The General Availability date moved from early December 2026 to mid-March 2027 in the 18 November 2026 update to MC1518033, so internal guidance written to the earlier date needs revising.

## Cost and licensing

No licence or charge specific to the onboarding workflow is published. The roadmap item and MC1518033 name none, and the Teams service description lists feature availability by plan without an entry for this workflow.

The Teams service description says Microsoft Teams can be licensed as part of qualifying Microsoft 365 offerings or as a standalone SKU, so the workflow, which sits inside Teams, would rest on the Teams licence your users already hold. Whether Microsoft attaches any further condition is not yet published.

The indirect cost is admin and owner time: briefing team owners and answering membership questions.

## Scope

**Who it affects:** team owners who use the workflow, and people added to a team. MC1518033 says team owners can add new members to relevant channels through the workflow.

**Clouds and platforms:** the roadmap item lists Worldwide (Standard Multi-Tenant) and the Android, Desktop, iOS and Mac platforms. Other clouds are not listed on the roadmap item.

**Rollout:** Targeted Release (R3.6) from November 2026 through January 2027; General Availability (Worldwide) from mid-March 2027, expected to finish by end of March 2027, per MC1518033.

**Channel types:** the notice says it clarifies the supported channel types; which types are supported is not stated in the post as supplied or on Microsoft Learn.

## Governance guidance

### Before rollout

- Tell team owners about the workflow, as MC1518033 suggests, so they know new members can be connected to relevant channels when they are added to a team.
- Identify teams that use private or shared channels, because Microsoft has not said which channel types the workflow covers.
- Record that no admin setting for the workflow is documented, so owner communication is the available lever.

### At rollout

- Read MC1518033 again when the Targeted Release wave reaches your tenant; its dates have already been revised once.
- Test with a small team by adding a test user through Teams admin center > Teams > Manage teams > team > Members, and note whether the workflow runs for members added that way.
- Check which channels the test member is connected to against what the owner intended.

### After rollout

- Ask the service desk to log reports of members appearing in, or missing from, channels, and compare them with the owner's setup.
- Re-read Microsoft Learn at General Availability for a documented admin setting, API or audit record for the workflow.

## Governance controls

<p class="controls__lead">Where each control lives. The left column says what the setting decides and how far it reaches; the middle gives the admin centre and the exact path; the right gives the script, API or command that does the same. <em>Not yet documented</em> means Microsoft has not published a control for that surface, so there is nothing to configure yet.</p>

<table class="controls">
<thead><tr><th>Control</th><th>Admin UI</th><th>API and automation</th></tr></thead>
<tbody>
<tr><td data-label="Control"><strong>Tenant or team switch for the onboarding workflow</strong><br><small>Tenant</small><br><small class="controls__note">Microsoft Learn documents no such control at the time of writing (November 2026).</small></td><td data-label="Admin UI"><em class="controls__gap">Not yet documented</em></td><td data-label="API and automation"><em class="controls__gap">Not yet documented</em></td></tr>
<tr><td data-label="Control"><strong>Who is a member of a team (today's way to add people)</strong><br><small>Group</small><br><small class="controls__note">Existing control, not a control over the new workflow: it adds a member to a team, and Microsoft has not said whether it starts the workflow.</small></td><td data-label="Admin UI"><strong>Teams admin center</strong><br>Teams › Manage teams › team › Members <a href="https://learn.microsoft.com/microsoftteams/assign-roles-permissions" rel="noopener" class="controls__docs">Learn</a></td><td data-label="API and automation"><strong>PowerShell</strong><br><code>Add-TeamUser -GroupId &lt;team GroupId&gt; -User &lt;user principal name&gt;</code> <a href="https://learn.microsoft.com/powershell/module/microsoftteams/add-teamuser?view=teams-ps" rel="noopener" class="controls__docs">Learn</a></td></tr>
</tbody>
</table>

Microsoft Learn documents no setting for turning the onboarding workflow on or off for a tenant or a team at the time of writing (November 2026), so the first row states that gap.

The second row is today's way to add people to a team. It adds members to a team and does not configure channels. Whether adding members through the admin centre or PowerShell starts the workflow is not stated.

## Open questions

- Which channel types (standard, private, shared) can the workflow connect new members to, following the 18 November 2026 clarification in MC1518033?
- Is the workflow on by default for every team, or does each team owner set it up? Watch MC1518033 and the roadmap item for the answer.
- Is there an admin setting, policy or API to limit or monitor the workflow, and is its activity recorded in an audit log?
- Does adding a member through the Teams admin center, PowerShell or Microsoft Entra group sync start the workflow, or only adding a member in the Teams client?

<!-- rationale
risk: Low. The roadmap and MC1518033 describe connecting people to channels when they join a team, and Microsoft has not said which channel types are covered, so the rating assumes team access boundaries are unchanged.
cost: Low. Microsoft's notice and the roadmap item name no licence, meter or charge for the workflow, so the only cost the sources show is the admin time to brief team owners.
impact: Medium. Team owners and anyone newly added to a team would notice it; MC1518033 describes a team-owner workflow, not a change to every user's default experience.
-->
