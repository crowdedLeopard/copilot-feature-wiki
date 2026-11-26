---
title: "Dynamics 365 Sales: ask Sales agent about opportunity research in Microsoft 365 Copilot"
slug: "dynamics-365-sales-opportunity-acceleration-chat-about-sales-opportunity-agent-insights-fr"
roadmapId: 576814
topic: "m365-copilot"
products: ["Microsoft Copilot (Microsoft 365)","Dynamics 365 Sales"]
summary: "Sellers can ask Sales agent in Microsoft 365 Copilot about opportunity research, starting with short insights. The roadmap shows it as launched. Admins should check Sales agent access, licensing and agent capacity."
status: "launched"
releasePhase: ["General Availability","Preview"]
clouds: ["Worldwide (Standard Multi-Tenant)"]
platforms: ["Web"]
targetDate: "July CY2026"
previewDate: "June CY2026"
risk: "low"
cost: "low"
impact: "medium"
defaultState: "admin-opt-in"
action: "review"
licensing:
  model: "mixed"
  notes: "Sales agent needs a Microsoft 365 Copilot licence plus Dynamics 365 Sales or Salesforce access, or Dynamics 365 Sales Enterprise or Premium access for CRM data only. Sales Opportunity Agent uses tenant capacity. A rate specific to this feature is not yet published."
audiences: ["m365-admin","service-owner","finops","change-adoption"]
tags: ["sales-agent","sales-opportunity-agent","m365-copilot","dynamics-365","agents","usage-based-billing","admin-controls"]
sources:
  - title: "Microsoft 365 Roadmap 576814"
    url: "https://www.microsoft.com/microsoft-365/roadmap?id=576814"
    kind: "roadmap"
  - title: "Use Sales agent in Microsoft 365 Copilot"
    url: "https://learn.microsoft.com/microsoft-sales-copilot/use-sales-chat"
    kind: "learn"
  - title: "Use the Sales agent in Microsoft 365 Copilot from Dynamics 365 Sales"
    url: "https://learn.microsoft.com/dynamics365/sales/use-sales-agent-microsoft365-copilot"
    kind: "learn"
  - title: "Set up Sales agent in Microsoft 365 Copilot"
    url: "https://learn.microsoft.com/microsoft-sales-copilot/set-up-sales-chat"
    kind: "learn"
  - title: "Sales Opportunity Agent overview"
    url: "https://learn.microsoft.com/dynamics365/sales/sales-opportunity-agent"
    kind: "learn"
  - title: "Opportunity research"
    url: "https://learn.microsoft.com/dynamics365/developer/reference/mcp-tools/get_opportunity_research"
    kind: "learn"
  - title: "Manage consumption-based billing for agent capabilities"
    url: "https://learn.microsoft.com/dynamics365/sales/copilot-consumption-based-billing"
    kind: "learn"
  - title: "Administrator settings for Sales agent"
    url: "https://learn.microsoft.com/microsoft-sales-copilot/administrator-settings-sales-app"
    kind: "learn"
  - title: "Sales agent FAQ"
    url: "https://learn.microsoft.com/microsoft-sales-copilot/sales-m365-copilot-faq"
    kind: "learn"
  - title: "Which users and apps can use Sales agent, including in Microsoft 365 Copilot (Sales agent administrator settings (Sales app in Outlook or Teams))"
    url: "https://learn.microsoft.com/microsoft-sales-copilot/access-settings-apps"
    kind: "learn"
  - title: "Whether Sales Chat is available in a CRM environment, and to which security groups (Sales agent administrator settings (Sales app in Outlook or Teams))"
    url: "https://learn.microsoft.com/microsoft-sales-copilot/access-settings"
    kind: "learn"
videos: []
related: ["m365-copilot-discover-and-act-on-recommended-lead-and-opportunity-actions-in-sales-agent","dynamics-365-sales-an-agentic-home-for-all-sales-ai","m365-copilot-enable-semantic-model-in-sales-agent","m365-copilot-use-dataverse-business-skills-in-sales-agent"]
controls:
  - governs: "Which users and apps can use Sales agent, including in Microsoft 365 Copilot"
    scope: "tenant"
    ui:
      surface: "Sales agent administrator settings (Sales app in Outlook or Teams)"
      path: "Sales > Settings > Tenant > Access settings > Allow access to Sales agent > Sales agent > Microsoft 365 Copilot"
      docs: "https://learn.microsoft.com/microsoft-sales-copilot/access-settings-apps"
    api: null
    note: "Needs Global Administrator, Exchange Administrator or Power Platform Administrator. Controls access only; it does not install the app or grant CRM data."
  - governs: "Whether Sales Chat is available in a CRM environment, and to which security groups"
    scope: "environment"
    ui:
      surface: "Sales agent administrator settings (Sales app in Outlook or Teams)"
      path: "Sales > Settings > Environment > Access settings > Allow access to Sales Chat"
      docs: "https://learn.microsoft.com/microsoft-sales-copilot/access-settings"
    api: null
    note: "Dynamics 365 needs System Administrator or System Customizer. Turning it off keeps Sales agent visible but removes Sales data from answers."
confidence: "medium"
created: "2026-11-21"
updated: "2026-11-21"
roadmapModified: "2026-10-16T19:09:24"
changes:
  - date: "2026-11-21"
    note: "First briefing for this item: roadmap shows Launched; Learn has no page for it, so access settings, licensing and agent capacity come from related Sales agent pages."
  - date: "2026-11-21"
    note: "Checked against Microsoft Learn by gpt-6.1-sol: held: 3 of 71 statements contradicted, 0 unconfirmed; taken offline until corrected"
  - date: "2026-11-21"
    note: "Corrected after the independent check: default state now admin-opt-in per the roadmap's Enabled for line, the roadmap title's agent reference, access path, and FAQ differences; removed three checklist items."
  - date: "2026-11-21"
    note: "Checked against Microsoft Learn by gpt-6.1-sol: passed: all 74 statements confirmed"
  - date: "2026-11-26"
    note: "Checked against Microsoft Learn by gpt-6.1-sol: passed: all 82 statements confirmed"
version: 2
verification:
  status: "verified"
  date: "2026-11-26"
  version: 2
  model: "gpt-6.1-sol"
  engine: "copilot"
  claims: 82
  confirmed: 82
  unconfirmed: 0
  contradicted: 0
  attempts: 0
  hash: "0211b149bcff82962b1a923585dae76a"
---

## What's changing

Sellers can ask Sales agent in Microsoft 365 Copilot about opportunity research and get short, action-oriented insights first, then ask for deeper analysis when they want it. The roadmap item describes this as asking "about opportunity research from Sales agent". It lists status Launched, a preview date of June CY2026 and a target date of July CY2026, with General Availability and Preview as release phases, the Web platform and the Worldwide (Standard Multi-Tenant) cloud.

Microsoft Learn has no page for this item itself, so what follows about its behaviour is the roadmap's description plus background from related pages. The roadmap title identifies the insights as Sales Opportunity Agent insights; its description does not specify how Sales agent retrieves them. Learn describes Sales Opportunity Agent (previously known as Opportunity Research Agent), which synthesises insights from CRM, emails, meetings and web research. A Learn reference page for an "Opportunity research" tool in Dynamics 365 Sales says it retrieves the persisted Sales Opportunity Agent research for an opportunity, including deal overview, account, competitor, stakeholder, historical-pattern and custom insight sections when available. Microsoft has not said that this tool is how the roadmap item works.

Sales agent itself is a chat interface in Microsoft 365 Copilot, reached under Agents > Sales. Learn documents summaries of an opportunity, account or lead, meeting catch-up and CRM look-ups as existing uses. The research tool page is marked as illustrating current capabilities, with tool names and behaviour liable to change.

## Why it matters

This puts opportunity research in the chat sellers already use, so the effect on a tenant is mainly about who can reach it, what it reads and what the underlying agent costs. Sales Opportunity Agent consumes the tenant's capacity as it processes opportunities, so a seller-facing chat that depends on its research gives finance and Power Platform admins a reason to look at that agent's scope and refresh schedule.

The roadmap describes this capability as enabled by admins/makers/marketers for end users; it does not identify a feature-specific switch. Learn does say that Sales agent access is turned on for all users by default, with auto-installed users blocked in Microsoft 365 Copilot, so the practical question for a service owner is whether the existing access settings and licences already match who should see opportunity research.

## Risk assessment

**Data exposure**
- The research report that the Learn reference page describes covers deal overview, account, competitor and stakeholder sections, and Sales Opportunity Agent draws on CRM, emails, meetings and web research. The tool requires read access to Dynamics 365 Sales opportunities and the agent's research results for the selected environment. Check which sellers hold that read access, because the report can carry email- and meeting-derived content as well as CRM fields.
- Sales agent only surfaces information the user has permission to access, and tenant access settings do not grant access to CRM data. CRM security roles are the control that bounds what a seller sees.

**Security & identity**
- Access to Sales agent is evaluated per application against Microsoft Entra security groups and the Restrict auto-installed users setting. Changing these settings needs one of the Microsoft Entra roles Learn lists: Global Administrator, Exchange Administrator or Power Platform Administrator.
- Microsoft has not documented which identity the chat uses to read the persisted research, so confirm this with Microsoft before relying on any assumption.

**Autonomy & actions**
- The Learn reference page says the opportunity research tool is read-only and does not modify records. It suggests follow-up prompts such as drafting a follow-up email; whether the roadmap feature can take actions is not stated.

**Change & support**
- If Sales agent access is off for a user, Sales agent stays visible but shows an administrator-disabled message, which will look like a fault to sellers. Setup problems also show up as missing data: Sales Chat must be enabled and configured for the user's CRM environment.
- Research sections appear only "when available", so expect questions from sellers on opportunities the agent has not yet researched.

## Cost and licensing

**Licence.** Sales agent needs one of two options, per Learn: a Microsoft 365 Copilot licence and access to Dynamics 365 Sales or Salesforce (CRM data plus Microsoft 365 Graph grounding), or Dynamics 365 Sales Enterprise or Premium access without a Microsoft 365 Copilot licence (CRM data only). A Microsoft 365 Copilot licence is required for Sales agent to access Graph-grounded data such as Outlook emails and Teams meetings. The Sales agent FAQ still says a Microsoft 365 Copilot licence is required, whereas the use and setup pages list the CRM-only Enterprise or Premium option.

**Meter.** Sales Opportunity Agent uses the capacity assigned to the tenant, as prepaid capacity or pay-as-you-go. Its consumption scales with the number of opportunities in scope and how often insights are refreshed, and Learn says narrowing the opportunity scope and the refresh frequency in the agent configuration settings manages usage. Dynamics 365 Sales bills these agent capabilities in Copilot Studio messages and says that when quota is depleted, the AI capability is unavailable until more capacity is added. A rate for questions about research in Sales agent chat is not yet published.

**Indirect cost.** For Dynamics 365, Sales agent uses Dataverse search, and Learn says enabling it can increase storage usage because indexes are created for searchable tables.

## Scope

Sellers with a Sales agent entitlement (see licensing above) in the Worldwide (Standard Multi-Tenant) cloud on the Web platform, per the roadmap record. The record's "Enabled for" line reads: enabled by admins/makers/marketers for end users.

Learn lists these prerequisites for Sales agent: it is installed, the user is signed in to the CRM, Sales Chat is turned on in Access settings and configured for the environment, and the user has the right CRM privileges. Learn marks use of Sales agent inside Outlook, Word, PowerPoint, Excel and Dynamics 365 as preview, with only conversational chat available there, while the Dynamics 365 Sales page describes opening it from the Sales Hub app. The roadmap lists both General Availability and Preview phases without saying which part is which.

## Governance guidance

### Before rollout
- Confirm which sellers hold a Microsoft 365 Copilot licence or Dynamics 365 Sales Enterprise or Premium access, since that decides whether chat answers include Graph-grounded data.
- Review Sales agent access under Tenant > Access settings, including Restrict auto-installed users, which Learn says blocks auto-installed users in Microsoft 365 Copilot by default.

### At rollout
- Pilot with a security group under Allow access, and clear Restrict auto-installed users for the pilot, as Learn's tip suggests.
- Test an opportunity research question as a seller and as a user without the CRM role, and confirm the second gets no extra data.
- Tell sellers to open Microsoft 365 Copilot, select Agents, then Sales.

### After rollout
- Re-check the Learn pages for Sales agent and the research tool, which say tool names and behaviour can change.

## Governance controls

<p class="controls__lead">Where each control lives. The left column says what the setting decides and how far it reaches; the middle gives the admin centre and the exact path; the right gives the script, API or command that does the same. <em>Not yet documented</em> means Microsoft has not published a control for that surface, so there is nothing to configure yet.</p>

<table class="controls">
<thead><tr><th>Control</th><th>Admin UI</th><th>API and automation</th></tr></thead>
<tbody>
<tr><td data-label="Control"><strong>Which users and apps can use Sales agent, including in Microsoft 365 Copilot</strong><br><small>Tenant</small><br><small class="controls__note">Needs Global Administrator, Exchange Administrator or Power Platform Administrator. Controls access only; it does not install the app or grant CRM data.</small></td><td data-label="Admin UI"><strong>Sales agent administrator settings (Sales app in Outlook or Teams)</strong><br>Sales › Settings › Tenant › Access settings › Allow access to Sales agent › Sales agent › Microsoft 365 Copilot <a href="https://learn.microsoft.com/microsoft-sales-copilot/access-settings-apps" rel="noopener" class="controls__docs">Learn</a></td><td data-label="API and automation"><em class="controls__gap">Not yet documented</em></td></tr>
<tr><td data-label="Control"><strong>Whether Sales Chat is available in a CRM environment, and to which security groups</strong><br><small>Environment</small><br><small class="controls__note">Dynamics 365 needs System Administrator or System Customizer. Turning it off keeps Sales agent visible but removes Sales data from answers.</small></td><td data-label="Admin UI"><strong>Sales agent administrator settings (Sales app in Outlook or Teams)</strong><br>Sales › Settings › Environment › Access settings › Allow access to Sales Chat <a href="https://learn.microsoft.com/microsoft-sales-copilot/access-settings" rel="noopener" class="controls__docs">Learn</a></td><td data-label="API and automation"><em class="controls__gap">Not yet documented</em></td></tr>
</tbody>
</table>

Both controls need the Sales agent administrator settings, which are visible only to administrators signed in to the Sales agent in Outlook or Teams. Tenant access settings need one of the Microsoft Entra roles Global Administrator, Exchange Administrator or Power Platform Administrator. Environment settings in Dynamics 365 need the System Administrator or System Customizer role.

The two switches work together: Learn says tenant access settings do not override environment-level Sales chat access, app installation, licensing or CRM privileges. When the environment-level Sales Chat access is turned off, users still see Sales as an agent and can ask questions, but responses do not include Sales data. The Sales agent FAQ's end-user answer says instead that such users will not receive responses to their queries.

Microsoft Learn documents no API for either access setting at the time of writing (November 2026). Learn documents no switch specific to opportunity research in chat, so these existing Sales agent settings are what an admin has today. Agent capacity is allocated through the Power Platform admin center, as the consumption billing page describes.

## Open questions

- Does Sales agent answer research questions from the Sales Opportunity Agent report, through the Opportunity research tool or otherwise? Watch the roadmap item and the Sales agent pages on Learn.
- Is there a switch specific to opportunity research in chat, or do Sales Chat and Sales agent access settings govern it entirely?
- Is any meter or rate specific to questions about research in Sales agent published, beyond the capacity Sales Opportunity Agent uses?
- Which parts of the experience are preview and which are generally available, given that the roadmap lists both phases?

<!-- rationale
risk: Low. The questions are asked in Sales agent, which Learn says surfaces only information the user has permission to access, and the related research tool is documented as read-only.
cost: Low. Sales agent needs the licences Learn lists, and Sales Opportunity Agent draws on tenant capacity, but Microsoft has not published a meter or rate specific to asking about research in chat.
impact: Medium. Sellers who use Sales agent in Microsoft 365 Copilot notice it; admins are affected only through access settings, licensing and agent capacity.
-->
