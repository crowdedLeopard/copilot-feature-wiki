---
title: "Microsoft Copilot: Word Agent drafts long-form Word documents through chat"
slug: "m365-copilot-word-agent"
roadmapId: 543420
topic: "m365-copilot"
products: ["Word","Microsoft Copilot (Microsoft 365)"]
summary: "The Word Agent in the Microsoft Copilot app drafts long-form Word documents using Anthropic's Claude models. Learn limits it to paid Microsoft 365 Copilot users. Check the Anthropic provider setting, in EU, EFTA and UK tenants before 9 December 2026."
status: "rolling-out"
releasePhase: ["General Availability","Preview"]
clouds: ["Worldwide (Standard Multi-Tenant)"]
platforms: ["Desktop","Mac","Web"]
targetDate: "February CY2026"
previewDate: "November CY2025"
risk: "medium"
cost: "low"
impact: "medium"
defaultState: "on"
action: "act-now"
licensing:
  model: "included"
  notes: "Microsoft Learn states the Word, Excel and PowerPoint Agents are available only to users with a paid Microsoft 365 Copilot licence. The roadmap item says the Word Agent is available with or without that licence; the two sources disagree."
audiences: ["m365-admin","security","compliance","change-adoption"]
tags: ["word","m365-copilot","agents","anthropic","work-iq","data-residency","document-generation","onedrive"]
sources:
  - title: "Microsoft 365 Roadmap: Microsoft Copilot (Microsoft 365): Word Agent"
    url: "https://www.microsoft.com/microsoft-365/roadmap?id=543420"
    kind: "roadmap"
  - title: "Get started with Word, Excel, and PowerPoint Agents in Microsoft Copilot"
    url: "https://learn.microsoft.com/copilot/manage/wordexcelppt-agents"
    kind: "learn"
  - title: "Claude models from Anthropic in Microsoft Online Services"
    url: "https://learn.microsoft.com/copilot/implement/connect-to-ai-subprocessor"
    kind: "learn"
  - title: "Enable Claude models only for Copilot experiences in Microsoft 365 apps"
    url: "https://learn.microsoft.com/copilot/implement/copilot-anthropic-apps"
    kind: "learn"
  - title: "Agent installation in Microsoft Copilot"
    url: "https://learn.microsoft.com/copilot/manage/copilot-agent-install"
    kind: "learn"
  - title: "Microsoft Copilot overview"
    url: "https://learn.microsoft.com/copilot/plan/copilot-overview"
    kind: "learn"
  - title: "Which users can use Anthropic models, and so the Word Agent (Microsoft 365 admin center)"
    url: "https://learn.microsoft.com/copilot/implement/connect-to-ai-subprocessor#opt-in-to-use-claude-models"
    kind: "learn"
  - title: "Whether Anthropic models, and so the Word Agent, are available in the tenant at all (Microsoft 365 admin center)"
    url: "https://learn.microsoft.com/copilot/implement/connect-to-ai-subprocessor#disable-connection-to-claude-models"
    kind: "learn"
  - title: "Blocking or unblocking the Word Agent for the whole organisation (Microsoft 365 admin center)"
    url: "https://learn.microsoft.com/microsoft-agent-365/admin/agent-actions"
    kind: "learn"
  - title: "Blocking or unblocking the Word Agent for the whole organisation (Microsoft Graph)"
    url: "https://learn.microsoft.com/microsoft-365/copilot/extensibility/api/admin-settings/package/copilotpackage-block"
    kind: "learn"
  - title: "Which users hold the paid Microsoft 365 Copilot licence Learn says the agent requires (Microsoft 365 admin center)"
    url: "https://learn.microsoft.com/microsoft-365/admin/manage/assign-licenses-to-users"
    kind: "learn"
  - title: "Which users hold the paid Microsoft 365 Copilot licence Learn says the agent requires (PowerShell)"
    url: "https://learn.microsoft.com/microsoft-365/enterprise/assign-licenses-to-user-accounts-with-microsoft-365-powershell"
    kind: "learn"
videos: []
related: ["m365-copilot-agent-mode-in-word-for-enhanced-document-editing","m365-copilot-copilot-chat-agent-mode-in-word-enables-conversational-support-to-create-edit","work-iq","agent-registry","m365-copilot-when-using-agent-mode-in-word-you-will-be-able-to-manually-select-which-model"]
controls:
  - governs: "Which users can use Anthropic models, and so the Word Agent"
    scope: "user"
    ui:
      surface: "Microsoft 365 admin center"
      path: "Copilot > Settings > View all > AI providers operating as Microsoft subprocessors > Available subprocessors for your organization > Anthropic > Choose who can access Anthropic models for Copilot and generative AI experiences"
      docs: "https://learn.microsoft.com/copilot/implement/connect-to-ai-subprocessor#opt-in-to-use-claude-models"
    api: null
    note: "AI Administrator or Global Administrator. Applies to every Copilot and Copilot Studio feature that relies on Anthropic, not the Word Agent alone."
  - governs: "Whether Anthropic models, and so the Word Agent, are available in the tenant at all"
    scope: "tenant"
    ui:
      surface: "Microsoft 365 admin center"
      path: "Copilot > Settings > User access > AI providers operating as Microsoft subprocessors > Available subprocessors for your organization > Disable Anthropic as a Microsoft subprocessor"
      docs: "https://learn.microsoft.com/copilot/implement/connect-to-ai-subprocessor#disable-connection-to-claude-models"
    api: null
    note: "AI Administrator or Global Administrator. Other features that depend on Claude models may also stop working."
  - governs: "Blocking or unblocking the Word Agent for the whole organisation"
    scope: "agent"
    ui:
      surface: "Microsoft 365 admin center"
      path: "Agents > All agents > agent > Block"
      docs: "https://learn.microsoft.com/microsoft-agent-365/admin/agent-actions"
    api:
      kind: "graph"
      call: "POST https://graph.microsoft.com/beta/copilot/admin/catalog/packages/{id}/block"
      docs: "https://learn.microsoft.com/microsoft-365/copilot/extensibility/api/admin-settings/package/copilotpackage-block"
    note: "Beta. The Package Management API requires a Microsoft Agent 365 licence and the CopilotPackages.ReadWrite.All delegated permission."
  - governs: "Which users hold the paid Microsoft 365 Copilot licence Learn says the agent requires"
    scope: "user"
    ui:
      surface: "Microsoft 365 admin center"
      path: "Users > Active users > user > Licenses and Apps > Licenses"
      docs: "https://learn.microsoft.com/microsoft-365/admin/manage/assign-licenses-to-users"
    api:
      kind: "powershell"
      call: "Set-MgUserLicense -UserId $userUPN -AddLicenses @{SkuId = \"<SkuId>\"} -RemoveLicenses @()"
      docs: "https://learn.microsoft.com/microsoft-365/enterprise/assign-licenses-to-user-accounts-with-microsoft-365-powershell"
    note: "Existing licence assignment; the roadmap item says the agent is also available without this licence."
confidence: "medium"
created: "2026-11-25"
updated: "2026-11-25"
roadmapModified: "2026-02-20T00:00:24"
changes:
  - date: "2026-11-25"
    note: "New briefing: Word Agent licensing conflict between roadmap and Learn, its dependence on Anthropic models, and the 9 December 2026 change to the EU, EFTA and UK Anthropic setting."
  - date: "2026-11-25"
    note: "Checked against Microsoft Learn by gpt-6.1-sol: passed with 0 of 64 statements not yet confirmed"
version: 1
verification:
  status: "verified-with-gaps"
  date: "2026-11-25"
  version: 1
  model: "gpt-6.1-sol"
  engine: "copilot"
  claims: 64
  confirmed: 64
  unconfirmed: 0
  contradicted: 0
  attempts: 0
  hash: "633ccbfd6cefeb5834051aa783e9cea6"
---

## What's changing

Microsoft is adding a Word Agent to the Microsoft Copilot app that researches, structures and formats long-form documents through multi-turn chat. The roadmap item describes it as designed for information-dense work such as strategic plans, policy documents and technical papers, with the option to open the draft in Word for full editing and collaboration.

Microsoft Learn documents the Word Agent together with the Excel and PowerPoint Agents. The agents are installed by Microsoft: for users with a paid Microsoft 365 Copilot licence they appear in the **Tools** menu and under **All Agents** in the left navigation pane when Anthropic models are enabled for the tenant. The agents use Anthropic's models exclusively, so if administrators disable Anthropic models the agents are unavailable, even to licensed users. Microsoft enables Claude models by default for most customers in the commercial cloud, excluding the EU, EFTA and UK, where they are disabled by default.

The agent uses Work IQ (the layer that retrieves Microsoft 365 data for Copilot) to draw on files, emails, meetings and sites the user has permission to access, and saves the documents it creates in OneDrive within the organisation's tenant.

The roadmap item is **Rolling out**, with a preview date of November CY2025 and a target of February CY2026, for General Availability and Preview on Desktop, Mac and Web in the Worldwide (Standard Multi-Tenant) cloud. The roadmap says the agent is available to Microsoft 365 users with or without a Microsoft 365 Copilot licence; Microsoft Learn says it requires a paid Microsoft 365 Copilot licence and is not available to Copilot Chat users without one.

## Why it matters

If nobody acts, licensed users in most commercial tenants get an agent that pulls together organisational content and sends the relevant parts to Anthropic's models, because both the agent and Claude models are on by default there. That is the same data a user can already reach, but the processing location matters: Microsoft's Word Agent page says Anthropic models are currently excluded from the EU Data Boundary and in-country processing commitments, while a Microsoft page on Microsoft 365 apps says Claude models are coming into the EU Data Boundary starting in December 2026.

EU, EFTA and UK tenants have a dated change to plan for. From 9 December 2026, a tenant that has made no Anthropic selection, or chose **All users for Microsoft 365 apps only**, moves to **All users**. Since the Word Agent needs Anthropic models enabled for the tenant, confirm what that move means for the agent's availability before the date. Expect helpdesk questions from staff without a Copilot licence who read that the agent is for everyone.

## Risk assessment

**Data exposure**
- The agent retrieves files, emails, meetings and sites through Work IQ within the user's own permissions; overshared SharePoint content can end up in a drafted policy or plan. Microsoft states that sensitivity labels and compliance policies are respected.
- Microsoft performs the searches and shares only relevant context with Anthropic's reasoning model. The Anthropic provider setting (rows 1 and 2) decides whether that happens at all.

**Security & identity**
- Anthropic operates as a Microsoft subprocessor for these capabilities from 7 January 2026, under the Microsoft Product Terms and Data Protection Addendum and Enterprise Data Protection.
- Microsoft's Word Agent page says Anthropic models are currently excluded from the EU Data Boundary; a separate Microsoft page says Claude models are coming into it starting in December 2026. Data residency teams should check which applies to their tenant.

**Autonomy & actions**
- The agent creates Word documents and saves them in OneDrive within the tenant; the user then opens them in Word to edit and share. Blocking the agent (row 3) stops its use across the organisation.

**Change & support**
- The roadmap and Microsoft Learn disagree on whether unlicensed users get the agent, so communications need to say which users will see it.
- Microsoft notes that an Office agent might still appear in the agent store when Anthropic models are disabled, but users cannot use it; visibility in the store does not show that Anthropic is enabled.

## Cost and licensing

**Licence.** The Microsoft Learn page *Get started with Word, Excel, and PowerPoint Agents in Microsoft Copilot* states that the agents are premium capabilities available only to users with a paid Microsoft 365 Copilot licence, and are not available to Copilot Chat users without one. The roadmap item instead says the Word Agent is available to Microsoft 365 users with or without a Microsoft 365 Copilot licence. Budget on the Learn statement until Microsoft reconciles the two.

**Meter.** The Learn page names the paid licence and no meter. Microsoft's licence comparison lists Copilot Cowork, Copilot Code and Autopilot as the capabilities reached through usage-based billing; the Word Agent is not among them.

**Indirect costs.** Generated documents are saved in OneDrive within the tenant. Expect admin time to review the Anthropic setting and support time for unlicensed users.

**Not yet published.** Any licence arrangement matching the roadmap's "with or without a Microsoft 365 Copilot license" statement.

## Scope

- **Users:** per Microsoft Learn, users with a paid Microsoft 365 Copilot licence, in all officially supported Microsoft Copilot languages; the roadmap says users with or without that licence.
- **Prerequisite:** Anthropic models enabled for the tenant. Claude models are on by default for most commercial-cloud customers and disabled by default in the EU, EFTA and UK.
- **Roles:** AI Administrator or Global Administrator for the Anthropic provider setting.
- **Clouds:** Worldwide (Standard Multi-Tenant), per the roadmap record.
- **Platforms:** Desktop, Mac and Web, per the roadmap record; Learn places the agent in the Microsoft Copilot app.
- **Rollout:** Rolling out; preview November CY2025, target February CY2026. Microsoft's page says Anthropic as a subprocessor was introduced gradually, with full availability expected by the end of February 2026.

## Governance guidance

### Before rollout
- Check the Anthropic selection under Copilot > Settings > AI providers operating as Microsoft subprocessors, and in EU, EFTA and UK tenants set it deliberately before 9 December 2026, when no selection or **All users for Microsoft 365 apps only** becomes **All users**.
- Decide with data protection staff whether processing by Anthropic, currently outside the EU Data Boundary per the Word Agent page, is acceptable for long-form drafting.
- Restrict Anthropic access to a security group under **Choose who can access Anthropic models for Copilot and generative AI experiences** if only some licensed users should get the agent.

### At rollout
- Block the Word Agent under Agents > All agents if the organisation is not ready, remembering that it applies to every user.
- Tell users which licence the agent needs, since the roadmap and Microsoft Learn differ.
- Confirm with a licensed pilot user that the agent appears under **Tools** and **All Agents**.

### After rollout
- Review Microsoft 365 Copilot licence assignments under Users > Active users if demand for the agent grows among unlicensed staff.
- Recheck the Anthropic setting after Microsoft brings Claude models into the EU Data Boundary.

## Governance controls

<p class="controls__lead">Where each control lives. The left column says what the setting decides and how far it reaches; the middle gives the admin centre and the exact path; the right gives the script, API or command that does the same. <em>Not yet documented</em> means Microsoft has not published a control for that surface, so there is nothing to configure yet.</p>

<table class="controls">
<thead><tr><th>Control</th><th>Admin UI</th><th>API and automation</th></tr></thead>
<tbody>
<tr><td data-label="Control"><strong>Which users can use Anthropic models, and so the Word Agent</strong><br><small>User</small><br><small class="controls__note">AI Administrator or Global Administrator. Applies to every Copilot and Copilot Studio feature that relies on Anthropic, not the Word Agent alone.</small></td><td data-label="Admin UI"><strong>Microsoft 365 admin center</strong><br>Copilot › Settings › View all › AI providers operating as Microsoft subprocessors › Available subprocessors for your organization › Anthropic › Choose who can access Anthropic models for Copilot and generative AI experiences <a href="https://learn.microsoft.com/copilot/implement/connect-to-ai-subprocessor#opt-in-to-use-claude-models" rel="noopener" class="controls__docs">Learn</a></td><td data-label="API and automation"><em class="controls__gap">Not yet documented</em></td></tr>
<tr><td data-label="Control"><strong>Whether Anthropic models, and so the Word Agent, are available in the tenant at all</strong><br><small>Tenant</small><br><small class="controls__note">AI Administrator or Global Administrator. Other features that depend on Claude models may also stop working.</small></td><td data-label="Admin UI"><strong>Microsoft 365 admin center</strong><br>Copilot › Settings › User access › AI providers operating as Microsoft subprocessors › Available subprocessors for your organization › Disable Anthropic as a Microsoft subprocessor <a href="https://learn.microsoft.com/copilot/implement/connect-to-ai-subprocessor#disable-connection-to-claude-models" rel="noopener" class="controls__docs">Learn</a></td><td data-label="API and automation"><em class="controls__gap">Not yet documented</em></td></tr>
<tr><td data-label="Control"><strong>Blocking or unblocking the Word Agent for the whole organisation</strong><br><small>Agent</small><br><small class="controls__note">Beta. The Package Management API requires a Microsoft Agent 365 licence and the CopilotPackages.ReadWrite.All delegated permission.</small></td><td data-label="Admin UI"><strong>Microsoft 365 admin center</strong><br>Agents › All agents › agent › Block <a href="https://learn.microsoft.com/microsoft-agent-365/admin/agent-actions" rel="noopener" class="controls__docs">Learn</a></td><td data-label="API and automation"><strong>Microsoft Graph</strong><br><code>POST https://graph.microsoft.com/beta/copilot/admin/catalog/packages/{id}/block</code> <a href="https://learn.microsoft.com/microsoft-365/copilot/extensibility/api/admin-settings/package/copilotpackage-block" rel="noopener" class="controls__docs">Learn</a></td></tr>
<tr><td data-label="Control"><strong>Which users hold the paid Microsoft 365 Copilot licence Learn says the agent requires</strong><br><small>User</small><br><small class="controls__note">Existing licence assignment; the roadmap item says the agent is also available without this licence.</small></td><td data-label="Admin UI"><strong>Microsoft 365 admin center</strong><br>Users › Active users › user › Licenses and Apps › Licenses <a href="https://learn.microsoft.com/microsoft-365/admin/manage/assign-licenses-to-users" rel="noopener" class="controls__docs">Learn</a></td><td data-label="API and automation"><strong>PowerShell</strong><br><code>Set-MgUserLicense -UserId $userUPN -AddLicenses @{SkuId = &quot;&lt;SkuId&gt;&quot;} -RemoveLicenses @()</code> <a href="https://learn.microsoft.com/microsoft-365/enterprise/assign-licenses-to-user-accounts-with-microsoft-365-powershell" rel="noopener" class="controls__docs">Learn</a></td></tr>
</tbody>
</table>

The Word Agent depends on Anthropic's models, so the Anthropic provider setting is the most decisive control: turning Anthropic off makes the agent unavailable even to licensed users, but Microsoft notes that some other features also depend on Claude models and may stop working. The user and group assignment applies at provider level across Microsoft Copilot and Copilot Studio, not to the Word Agent alone. Changing the Anthropic setting needs the AI Administrator or Global Administrator role. Blocking the agent in Agents > All agents applies to the whole organisation; the Graph block call needs a Microsoft Agent 365 licence and the CopilotPackages.ReadWrite.All delegated permission. See /concepts/agent-registry/ and /concepts/work-iq/.

## Open questions

- Will the Word Agent reach users without a Microsoft 365 Copilot licence, as the roadmap item says, or stay a premium capability as Microsoft Learn says? Watch the Learn page and Message center.
- When Claude models come into the EU Data Boundary, does that cover the Word Agent in the Microsoft Copilot app as well as Copilot in the Word, Excel and PowerPoint apps?
- For EU, EFTA and UK tenants moved to **All users** on 9 December 2026, will the Word Agent appear for every licensed user from that date?
- Can the Word Agent be assigned to specific users in Agents > All agents, or only blocked for the whole organisation?

<!-- rationale
risk: Medium. The agent reads the files, mail, meetings and sites a user can already reach and sends relevant context to Anthropic's models, which Microsoft currently excludes from the EU Data Boundary; the Anthropic provider setting and the agent block cover it.
cost: Low. Microsoft Learn ties the Word Agent to the paid Microsoft 365 Copilot licence and documents no separate meter for it; the remaining cost is admin time and support for users who expect it without that licence.
impact: Medium. Users with a paid Microsoft 365 Copilot licence see the agent in the Microsoft Copilot app where Anthropic models are enabled; staff without that licence, and tenants with Anthropic switched off, do not.
-->

<!-- verifier-findings (2026-11-25, verified-with-gaps; checked by gpt-6.1-sol)
The independent check found fault only with the statements below. This is a correction: change what they name and carry the rest of the page over unchanged.
These are minor and do not hold the page. Where removing the statement, or rewording it in the words the fix gives, settles one, do that; otherwise leave it as it is. A minor finding may also add a source link it names for a statement already on the page. It adds no row and nothing that needs research.
- [supported, minor] What's changing; Scope: Prerequisite / default: Claude models are disabled by default in the EU, EFTA and UK. | Found: Customers within the EU Data Boundary and customers in the UK have Claude models disabled by default. | Fix: Qualify both regional-default statements: 'The general provider page says Claude models are disabled by default in the EU, EFTA and UK; the Microsoft 365 apps page says apps-only access is enabled by default for tenants in those regions created after 25 March 2026.' The second statement is documented at https://learn.microsoft.com/copilot/implement/copilot-anthropic-apps and concerns Copilot inside the apps, not the Word Agent. | Source: https://learn.microsoft.com/copilot/implement/connect-to-ai-subprocessor
- [supported, minor] Governance guidance: Before rollout, first bullet / admin-path: Copilot > Settings > AI providers operating as Microsoft subprocessors reaches the page holding the Anthropic selection. | Found: Go to the Microsoft 365 admin center and select Copilot > Settings. On the User access page, select AI providers operating as Microsoft subprocessors. | Fix: Replace the abbreviated checklist path with the already documented user-access route: 'Copilot > Settings > View all > AI providers operating as Microsoft subprocessors > Available subprocessors for your organization > Anthropic > Choose who can access Anthropic models for Copilot and generative AI experiences'. | Source: https://learn.microsoft.com/copilot/implement/connect-to-ai-subprocessor#disable-connection-to-claude-models
- [supported, minor] Governance guidance: At rollout, first bullet; Governance controls prose / admin-path: Agents > All agents is where administrators block Word Agent. | Found: Select Agents > All agents. In the All agents page, select an agent from the list of agents. In the agent details pane that opens, immediately under the agent's name, select Block or Unblock. | Fix: Expand the prose block path to 'Agents > All agents > agent > Block', matching controls[2].ui. | Source: https://learn.microsoft.com/microsoft-agent-365/admin/agent-actions
- [supported, minor] Governance guidance: After rollout, first bullet / admin-path: Users > Active users is where administrators review individual Microsoft 365 Copilot licence assignments. | Found: In the admin center, go to the Users > Active users page. Select the row of the user that you want to assign a license to. In the right pane, select Licenses and Apps. | Fix: Expand the checklist path to 'Users > Active users > user > Licenses and Apps > Licenses', matching controls[3].ui. | Source: https://learn.microsoft.com/microsoft-365/admin/manage/assign-licenses-to-users
-->
