---
title: "PowerPoint on Windows: Copilot agent notifies you when work finishes or needs attention"
slug: "powerpoint-async-notifications-for-powerpoint-agent-windows-desktop"
roadmapId: 570437
topic: "modern-work"
products: ["PowerPoint"]
summary: "Microsoft plans notifications from the PowerPoint agent on Windows desktop when its work is done or needs attention. No admin setting, default or price is published yet, so the action is to review."
status: "in-development"
releasePhase: ["General Availability"]
clouds: ["Worldwide (Standard Multi-Tenant)"]
platforms: ["Desktop"]
targetDate: "October CY2026"
previewDate: null
risk: "low"
cost: "low"
impact: "low"
defaultState: "unknown"
action: "review"
licensing:
  model: "add-on"
  notes: "The Learn page for Word, Excel, and PowerPoint Agents says they need a paid Microsoft 365 Copilot licence. Nothing specific to this notification capability is published, and the roadmap item names no licence."
audiences: ["m365-admin","service-owner","change-adoption"]
tags: ["powerpoint","m365-copilot","agents","microsoft-365-apps"]
sources:
  - title: "Microsoft 365 Roadmap 570437"
    url: "https://www.microsoft.com/microsoft-365/roadmap?id=570437"
    kind: "roadmap"
  - title: "Get started with Word, Excel, and PowerPoint Agents in Microsoft Copilot"
    url: "https://learn.microsoft.com/copilot/manage/wordexcelppt-agents"
    kind: "learn"
  - title: "Claude models from Anthropic in Microsoft Online Services"
    url: "https://learn.microsoft.com/copilot/implement/connect-to-ai-subprocessor"
    kind: "learn"
  - title: "Microsoft Copilot overview"
    url: "https://learn.microsoft.com/copilot/plan/copilot-overview"
    kind: "learn"
  - title: "Assign or unassign licenses for users in the Microsoft 365 admin center"
    url: "https://learn.microsoft.com/microsoft-365/admin/manage/assign-licenses-to-users"
    kind: "learn"
  - title: "Assign Microsoft 365 licenses to user accounts with PowerShell"
    url: "https://learn.microsoft.com/microsoft-365/enterprise/assign-licenses-to-user-accounts-with-microsoft-365-powershell"
    kind: "learn"
videos: []
related: ["m365-copilot-reference-files-saved-in-sharepoint-libraries-and-onedrive-folders-when-creat","work-iq"]
controls:
  - governs: "Whether Anthropic models, which the PowerPoint Agents page says those agents need, are available"
    scope: "tenant"
    ui:
      surface: "Microsoft 365 admin center"
      path: "Copilot > Settings > User access > AI providers operating as Microsoft subprocessors > Disable Anthropic as a Microsoft subprocessor"
      docs: "https://learn.microsoft.com/copilot/implement/connect-to-ai-subprocessor"
    api: null
    note: "Role: AI Administrator or Global Administrator. Applies to the PowerPoint Agents page; whether it governs this item's agent is not stated. Disabling affects all Claude use."
  - governs: "Which users hold the Microsoft 365 Copilot licence the PowerPoint Agents page requires"
    scope: "user"
    ui:
      surface: "Microsoft 365 admin center"
      path: "Users > Active users > user > Licenses and Apps > Licenses"
      docs: "https://learn.microsoft.com/microsoft-365/admin/manage/assign-licenses-to-users"
    api:
      kind: "powershell"
      call: "Set-MgUserLicense -UserId $userUPN -AddLicenses @{SkuId = \"<SkuId>\"} -RemoveLicenses @()"
      docs: "https://learn.microsoft.com/microsoft-365/enterprise/assign-licenses-to-user-accounts-with-microsoft-365-powershell"
    note: "Role: at least License Administrator or User Administrator. Assigns any licence; the SkuId is the Copilot add-on's."
  - governs: "Whether agent notifications can be turned on or off, or limited to users or devices"
    scope: "tenant"
    ui: null
    api: null
    note: "No tenant, user or API setting for this feature is documented at the time of writing (November 2026)."
confidence: "medium"
created: "2026-11-21"
updated: "2026-11-21"
roadmapModified: "2026-09-15T23:00:36"
changes:
  - date: "2026-11-21"
    note: "New briefing: roadmap-only description of agent notifications for PowerPoint on Windows desktop; no Learn page, setting or price for it yet."
  - date: "2026-11-21"
    note: "Checked against Microsoft Learn by gpt-6.1-sol: held: 1 of 52 statements contradicted, 3 unconfirmed; taken offline until corrected"
version: 1
verification:
  status: "held"
  date: "2026-11-21"
  version: 1
  model: "gpt-6.1-sol"
  engine: "copilot"
  claims: 52
  confirmed: 48
  unconfirmed: 3
  contradicted: 1
  attempts: 1
  hash: "ee64c791ed4030ad43a7d2cf061861cb"
---

## What's changing

Microsoft plans to let users start work with the PowerPoint agent, then leave PowerPoint, switch devices, go offline or end their workday, and still be told when Copilot has finished or needs attention. That is the roadmap item's description; it says nothing more about how the notification is delivered or where it appears.

Microsoft Learn has no page for this capability yet, so what follows about behaviour is the roadmap's description. The nearest Learn page covers Word, Excel, and PowerPoint Agents in Microsoft Copilot. The roadmap item does not say it is the same agent, so treat that page as background.

The roadmap record lists the status as In development, with a target of October CY2026, General Availability, the Worldwide (Standard Multi-Tenant) cloud and the Desktop platform. The target month has passed without a status change in the record at the time of writing (21 November 2026), and the record gives no preview date or more-information link.

## Why it matters

For a service owner this is a change in how people work with a long-running agent, not a change in what it can reach. Users who expect a notification may close PowerPoint or stop checking, so notification delivery becomes something your service desk is asked about. Microsoft has not stated what happens on arrival or whether an admin switch exists, so base plans on no source saying existing behaviour changes.

The controls that matter today sit around the agent, not the notification: who holds the Copilot licence, and whether the Anthropic models that the PowerPoint Agents page says those agents need are enabled. Both are rows in the controls table.

## Risk assessment

**Data exposure**
- The roadmap describes notifications only. The PowerPoint Agents page says those agents use Work IQ to retrieve files, emails, meetings and sites the licensed user can already access, and that generated content is stored in OneDrive. Whether a notification quotes any of that content is not described.

**Security & identity**
- Microsoft has not described where a notification appears, which devices receive it or under which account. Confirm these before telling users that notifications reach another device.

**Autonomy & actions**
- The item implies the agent keeps working after the user leaves PowerPoint. The roadmap does not say what the agent may do unattended, or whether it waits for approval when it "requires attention"; confirm this before rollout.

**Change & support**
- Expect questions such as "where did my notification go?" The roadmap gives no setting for users or admins, and the PowerPoint Agents page does not mention notifications.

## Cost and licensing

The Learn page for Word, Excel, and PowerPoint Agents in Microsoft Copilot says access requires a paid Microsoft 365 Copilot licence and that the agents are not available to Copilot Chat users without one. The Microsoft Copilot overview describes that licence as the Microsoft 365 Copilot add-on. Because the roadmap does not say the desktop agent in this item is the same agent, confirm the licence for this capability when Microsoft documents it.

A charge or meter specific to notifications is not yet published. The roadmap item names no licence, price or meter.

## Scope

The roadmap lists the Worldwide (Standard Multi-Tenant) cloud, the Desktop platform and the General Availability phase. Microsoft has not said which Windows builds, update channels or app versions will carry it.

For the related PowerPoint Agents page, Anthropic models must be enabled for the agents to work. The AI providers page says Claude models are on by default for most commercial-cloud customers, excluding EU/EFTA and the UK, where they are disabled by default. Whether this item depends on those models is not stated.

## Governance guidance

### Before rollout
- Confirm with your Microsoft account team or in Message center whether the desktop PowerPoint agent in this item is the agent described on the Word, Excel, and PowerPoint Agents page.
- Check which users hold the Microsoft 365 Copilot licence (Users > Active users > Licenses and Apps) so you know who could see the agent.
- Check whether Anthropic is enabled under AI providers operating as Microsoft subprocessors, and which users or groups can use it.

### At rollout
- Watch Message center and the roadmap entry for a status change from In development, and for any notice that gives a rollout window or an admin setting.
- Tell licensed PowerPoint users on Windows that notifications are planned and that Microsoft has not said where they appear.

### After rollout
- Test with a pilot user: start agent work, close PowerPoint, and note where and when the notification arrives and what it shows.
- Record whether a notification setting exists in the admin centre and add it to the controls table when Microsoft documents it.

## Governance controls

<p class="controls__lead">Where each control lives. The left column says what the setting decides and how far it reaches; the middle gives the admin centre and the exact path; the right gives the script, API or command that does the same. <em>Not yet documented</em> means Microsoft has not published a control for that surface, so there is nothing to configure yet.</p>

<table class="controls">
<thead><tr><th>Control</th><th>Admin UI</th><th>API and automation</th></tr></thead>
<tbody>
<tr><td data-label="Control"><strong>Whether Anthropic models, which the PowerPoint Agents page says those agents need, are available</strong><br><small>Tenant</small><br><small class="controls__note">Role: AI Administrator or Global Administrator. Applies to the PowerPoint Agents page; whether it governs this item's agent is not stated. Disabling affects all Claude use.</small></td><td data-label="Admin UI"><strong>Microsoft 365 admin center</strong><br>Copilot › Settings › User access › AI providers operating as Microsoft subprocessors › Disable Anthropic as a Microsoft subprocessor <a href="https://learn.microsoft.com/copilot/implement/connect-to-ai-subprocessor" rel="noopener" class="controls__docs">Learn</a></td><td data-label="API and automation"><em class="controls__gap">Not yet documented</em></td></tr>
<tr><td data-label="Control"><strong>Which users hold the Microsoft 365 Copilot licence the PowerPoint Agents page requires</strong><br><small>User</small><br><small class="controls__note">Role: at least License Administrator or User Administrator. Assigns any licence; the SkuId is the Copilot add-on's.</small></td><td data-label="Admin UI"><strong>Microsoft 365 admin center</strong><br>Users › Active users › user › Licenses and Apps › Licenses <a href="https://learn.microsoft.com/microsoft-365/admin/manage/assign-licenses-to-users" rel="noopener" class="controls__docs">Learn</a></td><td data-label="API and automation"><strong>PowerShell</strong><br><code>Set-MgUserLicense -UserId $userUPN -AddLicenses @{SkuId = &quot;&lt;SkuId&gt;&quot;} -RemoveLicenses @()</code> <a href="https://learn.microsoft.com/microsoft-365/enterprise/assign-licenses-to-user-accounts-with-microsoft-365-powershell" rel="noopener" class="controls__docs">Learn</a></td></tr>
<tr><td data-label="Control"><strong>Whether agent notifications can be turned on or off, or limited to users or devices</strong><br><small>Tenant</small><br><small class="controls__note">No tenant, user or API setting for this feature is documented at the time of writing (November 2026).</small></td><td data-label="Admin UI"><em class="controls__gap">Not yet documented</em></td><td data-label="API and automation"><em class="controls__gap">Not yet documented</em></td></tr>
</tbody>
</table>

No admin or API control specific to agent notifications is documented at the time of writing (November 2026), so the third row records that gap. The first two rows are existing controls around the agent, not controls over notifications.

Changing Anthropic availability needs the AI Administrator or Global Administrator role and affects every Copilot experience that uses Claude models, not only PowerPoint. Assigning licences needs at least a License Administrator or User Administrator role.

## Open questions

- Is the PowerPoint agent in this roadmap item the agent on the Word, Excel, and PowerPoint Agents page, and does it need Anthropic models? Watch the Learn page and Message center.
- Is the notification on by default, and can an admin or user turn it off? Microsoft has not stated either.
- Where are notifications delivered (Windows, mobile, Teams, email), and does the notification text include presentation content?
- Which licence covers the capability, and is any charge or Copilot Credits meter specific to it?
- When will it ship, given the October CY2026 target has passed?

<!-- rationale
risk: Low. The roadmap describes notifications only, and no new data access or action is described; the default state and any notification content are not stated, so rating rests on today's behaviour continuing.
cost: Low. The only cost the sources show is the paid Microsoft 365 Copilot licence that the related PowerPoint Agents page requires; no charge or meter specific to notifications is published.
impact: Low. Only licensed users who run the PowerPoint agent in Windows desktop PowerPoint would notice; the roadmap lists Desktop as the only platform.
-->

<!-- verifier-findings (2026-11-21, held; checked by gpt-6.1-sol)
The independent check found fault only with the statements below. This is a correction: change what they name and carry the rest of the page over unchanged.
Correct each of these with the smallest change that removes the fault: delete the statement, narrow it, or put the finding's own "Found" text or worded replacement in its place. Where a fix asks for more than that (a new row, an explanation, further references), do only the part that removes the fault. A correction adds no control rows.
- [unsupported, blocker] front matter: licensing.model / licensing: This notification capability has an add-on licensing model. | Found: Searched: "PowerPoint agent" "notifications" license credits; "PowerPoint" "agent" "Windows" licence notifications. Read wordexcelppt-agents and copilot-overview; neither establishes an add-on requirement for this item, and the overview also documents in-app access without the add-on. | Fix: Set licensing.model to "unknown". Keep the existing notes and Cost and licensing paragraph describing the paid licence as background for the separate Word, Excel, and PowerPoint Agents. Replace the cost rationale with "Low. Plan for pilot checks and support communications; licensing and any charge or meter specific to notifications are not yet published."
- [unsupported, major] Why it matters / behaviour: The notification change does not change what the agent can reach. | Found: Searched: PowerPoint agent notifications delivery device offline account content approval. Read roadmap and wordexcelppt-agents; the record describes notifications but does not state unchanged data access, and the agents page is explicitly treated as background. | Fix: Replace the first sentence of Why it matters with "For a service owner this is a change in how people work with a long-running agent; the roadmap describes no change to what it can reach."
- [unsupported, blocker] rationale: impact; Governance guidance: Before rollout / licensing: Only licensed users who run the desktop PowerPoint agent would notice this feature. | Found: Searched: "PowerPoint agent" "notifications" license credits; "PowerPoint" "agent" "Windows" licence notifications. Read roadmap, wordexcelppt-agents and copilot-overview; no source establishes this notification feature's licensed-user audience. | Fix: Replace the impact rationale with "Low. The change concerns users who run the PowerPoint agent on Windows desktop; its licensing and default are not stated, and the roadmap lists Desktop as the only platform." In Before rollout, replace "so you know who could see the agent" with "as background for the separately documented PowerPoint Agents".
These are minor and do not hold the page. Where removing the statement, or rewording it in the words the fix gives, settles one, do that; otherwise leave it as it is. A minor finding may also add a source link it names for a statement already on the page. It adds no row and nothing that needs research.
- [supported, minor] controls[0].ui; Governance controls table / admin-path: Anthropic can be disabled at Microsoft 365 admin center > Copilot > Settings > User access > AI providers operating as Microsoft subprocessors > Disable Anthropic as a Microsoft subprocessor. | Found: On the AI providers operating as Microsoft subprocessors page, under Available subprocessors for your organization, select Disable Anthropic as a Microsoft subprocessor. | Fix: Use the full path "Copilot > Settings > User access > AI providers operating as Microsoft subprocessors > Available subprocessors for your organization > Disable Anthropic as a Microsoft subprocessor" in controls[0].ui.path and the rendered table. The omitted step is a heading, not a navigation choice. | Source: https://learn.microsoft.com/copilot/implement/connect-to-ai-subprocessor
- [supported, minor] controls[1].ui; Governance guidance: Before rollout; Governance controls table / admin-path: A user's licences are managed at Microsoft 365 admin center > Users > Active users > user > Licenses and Apps > Licenses. | Found: Select the row of the user that you want to assign a license to. In the right pane, select Licenses and Apps. Expand the Licenses section, select the boxes for the licenses that you want to assign, then select Save changes. | Fix: The control row is correct. Expand the abbreviated Before rollout path to "Microsoft 365 admin center > Users > Active users > user > Licenses and Apps > Licenses" so the checklist carries the same complete route. | Source: https://learn.microsoft.com/microsoft-365/admin/manage/assign-licenses-to-users
- [contradicted, minor] Governance guidance: Before rollout; controls[0] / consistency: The checklist asks readers to check Anthropic user and group access, but the table's Anthropic row only gives the provider availability control. | Found: Checklist: "Check whether Anthropic is enabled ... and which users or groups can use it." Table path ends at "Disable Anthropic as a Microsoft subprocessor", not the user or group access selection. | Fix: Remove "and which users or groups can use it" from the Before rollout Anthropic checklist item; do not add another control row.
-->
