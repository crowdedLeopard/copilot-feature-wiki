---
title: "Microsoft Teams: add SharePoint agents to chats from the in-context store"
slug: "microsoft-teams-adaptive-card-based-app-and-copilot-agent-link-unfurling-in-teams"
roadmapId: 515465
topic: "modern-work"
products: ["Microsoft Teams"]
summary: "Teams users on Desktop and Mac can add SharePoint agents to chats from the roster dropdown. Microsoft says it is on by default and needs no admin action, but access follows Copilot licences or pay-as-you-go billing."
status: "launched"
releasePhase: ["General Availability","Targeted Release"]
clouds: ["Worldwide (Standard Multi-Tenant)"]
platforms: ["Desktop","Mac"]
targetDate: "October CY2026"
previewDate: null
risk: "medium"
cost: "variable"
impact: "high"
defaultState: "on"
action: "act-now"
licensing:
  model: "mixed"
  notes: "Microsoft's notice names E3 or E5 (with Teams) plus either a Microsoft 365 Copilot licence or pay-as-you-go set up for SharePoint agents on Mac. Learn lists a Copilot licence or pay-as-you-go billing as the two routes to SharePoint agents."
audiences: ["m365-admin","finops","service-owner","change-adoption"]
tags: ["teams","sharepoint-agents","sharepoint","agents","m365-copilot","pay-as-you-go","licensing","admin-controls"]
sources:
  - title: "Microsoft 365 Roadmap 515465"
    url: "https://www.microsoft.com/microsoft-365/roadmap?id=515465"
    kind: "roadmap"
  - title: "MC1193415: (Updated) Microsoft Teams: Find SharePoint agents in Teams chats and Teams Store"
    url: "https://admin.microsoft.com/Adminportal/Home#/MessageCenter/:/messages/MC1193415"
    kind: "message-center"
  - title: "Manage access to agents in SharePoint"
    url: "https://learn.microsoft.com/sharepoint/manage-access-agents-in-sharepoint"
    kind: "learn"
  - title: "Use agents with pay-as-you-go billing"
    url: "https://learn.microsoft.com/sharepoint/sharepoint-agents-azure-billing"
    kind: "learn"
  - title: "Microsoft 365 Pay-as-you-go services pricing with Azure subscription"
    url: "https://learn.microsoft.com/sharepoint/microsoft-365-pay-as-you-go-pricing"
    kind: "learn"
  - title: "Set up and manage pay-as-you-go billing in the Copilot node of the Microsoft 365 admin center"
    url: "https://learn.microsoft.com/microsoft-365/services/pay-as-you-go-setup-copilot"
    kind: "learn"
  - title: "Overview of agent and app management and governance in Teams admin center"
    url: "https://learn.microsoft.com/microsoftteams/manage-apps"
    kind: "learn"
  - title: "Update-M365TeamsApp"
    url: "https://learn.microsoft.com/powershell/module/microsoftteams/update-m365teamsapp"
    kind: "learn"
videos: []
related: ["microsoft-teams-enable-agents-for-existing-applications-in-your-organization","copilot-credits"]
controls:
  - governs: "Whether a Teams agent or app is allowed or blocked for the organisation"
    scope: "tenant"
    ui:
      surface: "Teams admin center"
      path: "Teams apps > Manage apps > app > Allow or Block"
      docs: "https://learn.microsoft.com/microsoftteams/manage-apps"
    api:
      kind: "powershell"
      call: "Update-M365TeamsApp -Id <app-id> -IsBlocked <Boolean>"
      docs: "https://learn.microsoft.com/powershell/module/microsoftteams/update-m365teamsapp"
    note: "General control: not confirmed for SharePoint agents in the in-context store. The Update-M365TeamsApp reference describes its -IsBlocked $true example as unblocking, so it is not reliable guidance for a blocking command."
confidence: "medium"
created: "2026-11-17"
updated: "2026-11-18"
roadmapModified: "2026-10-01T23:00:07"
changes:
  - date: "2026-11-17"
    note: "First briefing for this item: SharePoint agents can be added to Teams chats on Desktop and Mac, on by default, with the rollout timeline from MC1193415."
  - date: "2026-11-17"
    note: "Checked against Microsoft Learn by gpt-6.1-sol: held: 4 of 59 statements contradicted, 0 unconfirmed; taken offline until corrected"
  - date: "2026-11-18"
    note: "Corrected after verification: pay-as-you-go billing now states the $0.01 per message price and that the billing resource applies to users without a Copilot licence; the blocking call is no longer shown as verified."
  - date: "2026-11-18"
    note: "Checked against Microsoft Learn by gpt-6.1-sol: held: 2 of 55 statements contradicted, 0 unconfirmed; taken offline until corrected"
version: 2
verification:
  status: "held"
  date: "2026-11-18"
  version: 2
  model: "gpt-6.1-sol"
  engine: "copilot"
  claims: 55
  confirmed: 53
  unconfirmed: 0
  contradicted: 2
  attempts: 1
  hash: "e53efa850e7776e7c7b4dd54442a7117"
---

## What's changing

Teams users on Desktop and Mac can discover SharePoint agents and add them to a chat from within Teams. Per Microsoft's notice MC1193415, users choose **Add Agents and Bots** in the chat roster dropdown, which opens an in-context store for finding and selecting agents. The notice also says SharePoint agents appear in the Teams Store under the Agents category.

Microsoft's notice says no admin action is required, the feature is enabled by default, and existing policies are respected. Microsoft Learn has no page for this Teams capability itself, so what follows about how it behaves comes from the notice and the roadmap description. The Learn pages on SharePoint agents cover licensing, billing and access.

The roadmap record shows status Launched with a target of October CY2026, for General Availability and Targeted Release, Worldwide (Standard Multi-Tenant) only. The roadmap description carries a January 29, 2026 note that rollout was paused until March. The notice, last updated 2026-06-12, gives a later timeline: Targeted Release rolling out in mid-October 2026 and completing in late October 2026, and General Availability rolling out in late October 2026 and completing by late November 2026. Its end date is 2026-12-28, and it sets no act-by date.

The roadmap title refers to adaptive card-based link unfurling for apps and Copilot agents, but the roadmap description and the notice describe SharePoint agents in chats. This briefing follows the description and the notice.

## Why it matters

Nothing needs switching on for this to reach users: Microsoft's notice says it is enabled by default, and the General Availability rollout is due to complete by late November 2026. Users will see an entry point for agents in chats, so expect questions from people without a licence who try it, and from teams who want to share agents.

The decision for a service owner is who pays. Access depends on a Microsoft 365 Copilot licence or on pay-as-you-go billing for SharePoint agents, and pay-as-you-go usage is metered. Settle the licence or billing position, and what helpdesk should tell users, before the rollout finishes.

## Risk assessment

**Data exposure**
- Agents in SharePoint answer according to each user's permissions on the agent's data sources, so a user without access to a site does not get its content in responses (Learn, Manage access to agents in SharePoint). Whether that holds the same way when an agent is added to a shared chat is not described for this feature; see Open questions.
- Site-level exclusion exists: a site flagged with restricted content discovery hides the Agent icon on the site and stops its content being added to other agents.

**Security & identity**
- Learn says the permissions on an agent's .agent file decide who can access or edit it. Check those permissions on agents that people may now find and add to chats.

**Autonomy & actions**
- Microsoft's notice describes users adding agents to conversations to support collaboration. It does not describe agent actions beyond answering, and Microsoft has not said what an agent in a chat can do for this feature.

**Change & support**
- The feature is on by default, so users may meet it before helpdesk knows. Users without a Copilot licence or a pay-as-you-go billing policy may be unable to use agents they find; Microsoft's notice suggests briefing helpdesk.
- Blocking an agent in the Microsoft 365 admin center currently affects only Copilot Chat, not Teams, according to the Learn page.

## Cost and licensing

Microsoft's notice asks administrators to ensure intended users have E3 or E5 (with Teams) licensing, and either a Microsoft 365 Copilot licence or pay-as-you-go set up separately for SharePoint agents on Mac. Learn's page on managing access to agents says you manage who can use agents through Copilot licence assignment or, for pay-as-you-go, through the security groups assigned to the billing policy.

For pay-as-you-go, Learn's page on using agents with pay-as-you-go billing says each SharePoint agent interaction uses 12 messages (10 for tenant graph grounding and 2 for generative answers) to respond to a single complex prompt, and charges appear under the Copilot Studio meter on the invoice. It says interactive use by authenticated Microsoft Copilot users in Microsoft 365 apps and services is included at no extra cost. A budget can be created in Microsoft Cost Management under Monitoring > Budgets.

The SharePoint-agent billing resource is used whenever a user without a Microsoft Copilot licence uses a SharePoint agent; Microsoft documents 12 messages for a single complex-prompt interaction. Microsoft publishes a pay-as-you-go price of USD $0.01 per message for agents in SharePoint (Learn, Microsoft 365 Pay-as-you-go services pricing with Azure subscription).

## Scope

Microsoft's notice says all users of Microsoft Teams on Desktop and Mac are affected. The roadmap record lists the Desktop and Mac platforms and the Worldwide (Standard Multi-Tenant) cloud only; it does not list GCC, GCC High or DoD. That is a record fact, not a statement that the feature is unavailable there.

The record lists General Availability and Targeted Release. The notice gives the rollout windows above. The roadmap description mentions chats and channels, while the notice describes chats. Prerequisites in the notice are E3 or E5 (with Teams) and a Copilot licence or pay-as-you-go. Learn says SharePoint admins set up pay-as-you-go with a SharePoint administrator role and Owner or Contributor Azure roles on the subscription and resource group during setup.

## Governance guidance

### Before rollout
- Confirm which users hold a Microsoft 365 Copilot licence and whether pay-as-you-go billing for SharePoint agents is connected, using Microsoft 365 admin center > Copilot > Billing and usage. Microsoft's linked setup guide instead directs administrators to Copilot > Cost management > Classic Billing & usage.
- Review the permissions on important .agent files and on the sites those agents use, since Learn says file permissions determine who can access or edit an agent.
- Decide whether any sensitive sites should be flagged with restricted content discovery, which removes the Agent icon and keeps their content out of other agents.

### At rollout
- Brief the helpdesk on the Add Agents and Bots option in the chat roster dropdown and on who is licensed to use agents, as Microsoft's notice suggests.
- Check whether SharePoint agents appear in the Teams admin center Manage apps list, and once Microsoft confirms it applies, use Allow or Block there to control them.
- If pay-as-you-go is used, create a budget in Microsoft Cost Management before usage grows.

### After rollout
- Review pay-as-you-go consumption by Copilot Studio meter and SharePoint agents in Microsoft Cost Management.
- Watch Message center and the Learn page for MC1193415 updates, since the timeline has already moved.

## Governance controls

<p class="controls__lead">Where each control lives. The left column says what the setting decides and how far it reaches; the middle gives the admin centre and the exact path; the right gives the script, API or command that does the same. <em>Not yet documented</em> means Microsoft has not published a control for that surface, so there is nothing to configure yet.</p>

<table class="controls">
<thead><tr><th>Control</th><th>Admin UI</th><th>API and automation</th></tr></thead>
<tbody>
<tr><td data-label="Control"><strong>Whether a Teams agent or app is allowed or blocked for the organisation</strong><br><small>Tenant</small><br><small class="controls__note">General control: not confirmed for SharePoint agents in the in-context store. The Update-M365TeamsApp reference describes its -IsBlocked $true example as unblocking, so it is not reliable guidance for a blocking command.</small></td><td data-label="Admin UI"><strong>Teams admin center</strong><br>Teams apps › Manage apps › app › Allow or Block <a href="https://learn.microsoft.com/microsoftteams/manage-apps" rel="noopener" class="controls__docs">Learn</a></td><td data-label="API and automation"><strong>PowerShell</strong><br><code>Update-M365TeamsApp -Id &lt;app-id&gt; -IsBlocked &lt;Boolean&gt;</code> <a href="https://learn.microsoft.com/powershell/module/microsoftteams/update-m365teamsapp" rel="noopener" class="controls__docs">Learn</a></td></tr>
</tbody>
</table>

Microsoft's notice says no changes to admin controls are needed and that existing policies are respected, and names no switch for this feature. The row above is a general Teams control: Microsoft Learn does not confirm that SharePoint agents added through the in-context store appear in Manage apps or are governed by it, and Teams Administrator is the role Learn gives for the Teams admin center.

Other controls come from the SharePoint agents pages. Learn says admins can turn 'Microsoft Copilot for SharePoint' on or off per user under the service plans of the Copilot licence, but this also disables Copilot in OneDrive and SharePoint page authoring for that user. Under pay-as-you-go, only users in the security group assigned to the billing policy have access to agents. Restricted content discovery turns agent features off per site. Blocking an agent in the Microsoft 365 admin center currently covers Copilot Chat only.

The checklist steps on .agent file permissions, restricted content discovery, the billing connection and budgets are background guidance from those pages; they have no rows in this table.

## Open questions

- Does the Teams admin center Manage apps page, or app-centric management, control SharePoint agents added from the in-context store, and is there a Teams policy that hides **Add Agents and Bots**? Watch the Teams admin center documentation and MC1193415.
- How are responses handled when an agent is added to a chat whose members have different access to the agent's data sources? Microsoft has not described this for the feature.
- Does the feature reach channels, as the roadmap description says, or only chats, as the notice says?
- The roadmap title mentions adaptive card link unfurling while the description and notice describe SharePoint agents: which does Microsoft intend this item to cover?

<!-- rationale
risk: Medium. The feature is on by default for Teams users on Desktop and Mac and puts agents into shared chats, while Microsoft's notice says no admin control changes are needed and existing policies are respected.
cost: Variable. Users need a Microsoft 365 Copilot licence or tenant pay-as-you-go billing for SharePoint agents, which Microsoft documents as 12 messages per interaction on the Copilot Studio meter.
impact: High. Microsoft's notice MC1193415 says all Teams users on Desktop and Mac are affected, and the feature is enabled by default.
-->

<!-- verifier-findings (2026-11-18, held; checked by gpt-6.1-sol)
The independent check found fault only with the statements below. This is a correction: change what they name and carry the rest of the page over unchanged.
Correct each of these with the smallest change that removes the fault: delete the statement, narrow it, or put the finding's own "Found" text or worded replacement in its place. Where a fix asks for more than that (a new row, an explanation, further references), do only the part that removes the fault. A correction adds no control rows.
- [contradicted, blocker] Risk assessment: Data exposure; Open questions: differing data-source permissions / absence: Microsoft has not described how SharePoint-agent responses are handled in a Teams chat whose members have different source permissions. | Found: If the user who asks the question has permission to see the answer, but some members in the chat group don't, the user sees a message explaining that the answer can't be automatically added to the chat. | Fix: Replace the shared-chat uncertainty in Data exposure and remove the corresponding Open question. Write: "In Teams, the agent checks the requesting user's permissions. If other chat members lack access, the answer is not posted automatically: the requester can select View response, review it, and decide whether to share it with the group." Cite and add to sources https://support.microsoft.com/office/share-an-agent-from-sharepoint-in-teams-6dcbf7b5-8c13-44e5-a68a-dbd71fb76ad3. | Source: https://support.microsoft.com/office/share-an-agent-from-sharepoint-in-teams-6dcbf7b5-8c13-44e5-a68a-dbd71fb76ad3
These are minor and do not hold the page. Where removing the statement, or rewording it in the words the fix gives, settles one, do that; otherwise leave it as it is. A minor finding may also add a source link it names for a statement already on the page. It adds no row and nothing that needs research.
- [contradicted, minor] Governance guidance; Governance controls: final paragraph / consistency: The checklist names .agent permissions, restricted content discovery, the billing connection and budgets, but the controls table has no corresponding rows. | Found: The checklist steps on .agent file permissions, restricted content discovery, the billing connection and budgets are background guidance from those pages; they have no rows in this table. | Fix: Remove the checklist bullets that tell readers to review .agent/site permissions, set restricted content discovery, check the billing connection, or create budgets, and remove the final paragraph acknowledging their missing rows. Keep the verified background explanations in the risk and cost sections; do not add control rows as part of this correction.
-->
