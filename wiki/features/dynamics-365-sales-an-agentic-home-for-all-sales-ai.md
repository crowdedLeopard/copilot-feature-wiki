---
title: "Dynamics 365 Sales: Sales agent as the agentic home for sellers"
slug: "dynamics-365-sales-an-agentic-home-for-all-sales-ai"
roadmapId: 579978
topic: "m365-copilot"
products: ["Microsoft Copilot (Microsoft 365)","Dynamics 365 Sales"]
summary: "Microsoft plans to let sellers land in Sales agent instead of a dashboard when they open Dynamics 365 Sales. Microsoft has not stated the default or a dedicated control, so plan communication and check the Sales agent access settings."
status: "in-development"
releasePhase: ["General Availability","Preview"]
clouds: ["Worldwide (Standard Multi-Tenant)"]
platforms: ["Web"]
targetDate: "January CY2027"
previewDate: "December CY2026"
risk: "medium"
cost: "low"
impact: "medium"
defaultState: "unknown"
action: "prepare"
licensing:
  model: "mixed"
  notes: "Learn says Sales Enterprise, Sales Premium and Microsoft Relationship Sales include the basic features of Sales agent, and premium features need a Microsoft 365 Copilot licence. Sales agent supports CRM-only use with Dynamics 365 Sales Enterprise or Premium access; Graph grounding requires Microsoft 365 Copilot. No licensing requirement specific to the new home is published."
audiences: ["m365-admin","power-platform-admin","service-owner","change-adoption"]
tags: ["sales-agent","dynamics-365","m365-copilot","agents","user-experience","admin-controls"]
sources:
  - title: "Microsoft 365 Roadmap 579978"
    url: "https://www.microsoft.com/microsoft-365/roadmap?id=579978"
    kind: "roadmap"
  - title: "Manage access to Sales agent and Dynamics 365 Sales plugins across Microsoft apps"
    url: "https://learn.microsoft.com/microsoft-sales-copilot/access-settings-apps"
    kind: "learn"
  - title: "Use Sales agent in Microsoft 365 Copilot"
    url: "https://learn.microsoft.com/microsoft-sales-copilot/use-sales-chat"
    kind: "learn"
  - title: "Set up Sales agent in Microsoft 365 Copilot"
    url: "https://learn.microsoft.com/microsoft-sales-copilot/set-up-sales-chat"
    kind: "learn"
  - title: "Install Sales agent"
    url: "https://learn.microsoft.com/microsoft-sales-copilot/install-sales-app"
    kind: "learn"
  - title: "Administrator settings for Sales agent"
    url: "https://learn.microsoft.com/microsoft-sales-copilot/administrator-settings-sales-app"
    kind: "learn"
  - title: "Buy Dynamics 365 Sales"
    url: "https://learn.microsoft.com/dynamics365/sales/buy-dynamics-365-sales"
    kind: "learn"
  - title: "Add Microsoft Copilot for app users in model-driven apps"
    url: "https://learn.microsoft.com/power-apps/maker/model-driven-apps/add-microsoft-365-copilot"
    kind: "learn"
videos: []
related: ["m365-copilot-discover-and-act-on-recommended-lead-and-opportunity-actions-in-sales-agent","microsoft-dataverse-enable-semantic-data-understanding-for-agentic-use","work-iq"]
controls:
  - governs: "Whether sellers land in Sales agent instead of the dashboard"
    scope: "tenant"
    ui: null
    api: null
    note: "Not yet documented for the home. Microsoft Learn describes no such switch at the time of writing (November 2026)."
  - governs: "Access to Sales agent in Microsoft 365 Copilot in Dynamics 365"
    scope: "group"
    ui:
      surface: "Microsoft Teams"
      path: "Sales > Settings > Tenant > Access settings > Allow access to Sales agent > Dynamics 365"
      docs: "https://learn.microsoft.com/microsoft-sales-copilot/access-settings-apps"
    api: null
    note: "General control: Microsoft has not confirmed it applies to the new home. Needs Global, Exchange or Power Platform Administrator."
  - governs: "Whether Microsoft Copilot is available in an environment's model-driven apps"
    scope: "environment"
    ui:
      surface: "Power Platform admin center"
      path: "Copilot > Settings > Power Apps > Chat Agent > Microsoft Copilot > environment > Edit Setting"
      docs: "https://learn.microsoft.com/power-apps/maker/model-driven-apps/add-microsoft-365-copilot"
    api: null
    note: "Learn ties Sales agent in Dynamics 365 to this setting. Whether it governs the new home is not confirmed."
  - governs: "Which CRM tables Sales agent can read"
    scope: "environment"
    ui:
      surface: "Microsoft Teams"
      path: "Sales > Settings > Features > Sales Chat > Add"
      docs: "https://learn.microsoft.com/microsoft-sales-copilot/set-up-sales-chat"
    api: null
    note: "General control for Sales agent. Use System Administrator or System Customizer in Dynamics 365; with a custom security role, additional Sales agent privileges might be needed."
confidence: "medium"
created: "2026-11-17"
updated: "2026-11-19"
roadmapModified: "2026-11-17T18:36:41"
changes:
  - date: "2026-11-17"
    note: "New briefing: roadmap item 579978, Sales agent as the agentic home in Dynamics 365 Sales; Learn does not yet describe the home itself."
  - date: "2026-11-17"
    note: "Checked against Microsoft Learn by gpt-6.1-sol: held: 3 of 64 statements contradicted, 2 unconfirmed; taken offline until corrected"
  - date: "2026-11-17"
    note: "Correction: softened the claim that the home replaces every seller's opening screen, set licensing to not yet published and cost to low, narrowed the risk rationale, and removed the Dataverse capacity step."
  - date: "2026-11-17"
    note: "Checked against Microsoft Learn by gpt-6.1-sol: passed: all 68 statements confirmed"
  - date: "2026-11-19"
    note: "Checked against Microsoft Learn by gpt-6.1-sol: held: 4 of 64 statements contradicted, 0 unconfirmed; taken offline until corrected"
  - date: "2026-11-19"
    note: "Correction: licensing set to mixed with the published CRM-only and Microsoft 365 Copilot rules, Sales agent admin paths now start at Microsoft Teams, and the Dynamics 365 role carries its custom-role qualification."
  - date: "2026-11-19"
    note: "Checked against Microsoft Learn by gpt-6.1-sol: passed: all 68 statements confirmed"
  - date: "2026-11-26"
    note: "Checked against Microsoft Learn by gpt-6.1-sol: passed with 0 of 63 statements not yet confirmed"
version: 3
verification:
  status: "verified-with-gaps"
  date: "2026-11-26"
  version: 3
  model: "gpt-6.1-sol"
  engine: "copilot"
  claims: 63
  confirmed: 63
  unconfirmed: 0
  contradicted: 0
  attempts: 0
  hash: "ad6dcda57f610013059f8f6c8cf507bd"
---

## What's changing

Microsoft plans to make Sales agent the first thing sellers see in Dynamics 365 Sales. The roadmap item says sellers "can land in Sales agent: an agentic home for all sales AI instead of a traditional dashboard", with structured workflows that bring agent recommendations and customer-engagement preparation together. From that home sellers can review prioritised recommendations and next steps from their agents, prepare for upcoming customer meetings, and review past meetings when the required meeting information is available.

Microsoft Learn does not describe this home experience yet, so what follows about its behaviour is the roadmap's description. Learn does document Sales agent in Dynamics 365 today as a preview capability: it is reachable only if an administrator has enabled Microsoft 365 Copilot in model-driven apps, and the same page says the meeting preparation features are not accessible there at the time of writing (November 2026). The roadmap item lists meeting preparation as part of the home, so the two descriptions differ and the final design is not confirmed.

The roadmap record lists the item as In development, with a preview target of December CY2026 and a general availability target of January CY2027, for Worldwide (Standard Multi-Tenant) on the web. These are Microsoft's targets, not commitments. The record lists both Preview and General Availability as release phases and does not say which features arrive in which phase.

## Why it matters

The roadmap describes a home that sellers can land in instead of a traditional dashboard. Microsoft has not stated whether sellers get it automatically or an administrator turns it on, so plan on the possibility that it arrives without a switch being flipped and prepare communication for sellers and sales managers.

For the service owner the questions are data and licences. Sales agent reads CRM tables and, with a Microsoft 365 Copilot licence, Microsoft Graph data such as email and meetings. The existing Sales agent access settings and Dataverse security roles are the controls Learn documents today; confirm with Microsoft that they govern the new home before relying on them.

## Risk assessment

**Data exposure**

- The Sales agent reads CRM tables chosen in its admin settings. Learn says that when an entity is added, Sales agent has access to all columns in it, so review the **Sales Chat** table list before the home draws on it.
- Meeting and email context depends on Microsoft Graph. Learn says Graph-grounded data needs access to Microsoft 365 Copilot and that Sales agent only surfaces information the user has permission to access.

**Security & identity**

- Tenant access settings do not grant access to CRM data and do not override licensing, environment or security requirements, so Dataverse security roles remain the boundary for what a seller sees. Whether the home follows the same rules is not yet documented.
- Users who received Sales agent through automatic installation are blocked by default in Microsoft 365 Copilot, Outlook and Teams, but not in Dynamics 365, according to the Learn default-access table.

**Autonomy & actions**

- The roadmap says sellers move from an insight to the next action and that agents provide recommendations. Microsoft has not said which actions can be taken from the home or whether any write to CRM, so confirm this at preview.

**Change & support**

- A new landing page changes how sellers start their day and may raise support questions. Learn says users blocked by an access setting see an administrator-disabled message in the Dynamics 365 case, so support staff should know the message.
- Learn says Sales agent in Dynamics 365 depends on Microsoft 365 Copilot being enabled for the environment and app module, and that Dataverse search can increase storage usage; check both before sellers are told to expect the home.

## Cost and licensing

Learn's Buy Dynamics 365 Sales page says Sales Enterprise, Sales Premium and Microsoft Relationship Sales licences include the basic features of Sales agent, and that using the premium features requires a Microsoft 365 Copilot licence. The Sales agent usage and set-up pages add that a Dynamics 365 Sales Enterprise or Premium user without Microsoft 365 Copilot can still use Sales agent with CRM data only, and that Graph-grounded data needs access to Microsoft 365 Copilot. The meeting preparation section also says specific licensing requirements apply and points to the Microsoft Product Terms.

No price, meter or Copilot Credits rate is published for the agentic home itself, and the roadmap item names none. No licensing requirement specific to the home is published either. The indirect cost Learn does document is storage: Sales agent uses Dataverse search for Dynamics 365, and Learn says enabling it can increase storage usage because indexes are created for searchable tables. Admin time for settings and seller communication is the other cost.

## Scope

The roadmap lists Dynamics 365 Sales and Microsoft Copilot (Microsoft 365) as the products, Worldwide (Standard Multi-Tenant) as the cloud and Web as the platform. No US Government cloud is listed on the record.

Learn says access to Dynamics 365 Sales Enterprise or Premium can make a user eligible for Sales agent and automatic distribution, and that additional Microsoft 365 licences or entitlements might be required for Microsoft 365-grounded features. Sales agent is available in Dynamics 365 only when Microsoft 365 Copilot is enabled for the environment and app module; automatic installation alone does not make it available. Rollout mechanics for the home, including whether it replaces the dashboard for every seller, are not yet published.

## Governance guidance

### Before rollout

- Confirm which Dynamics 365 environments have Microsoft 365 Copilot enabled, since Learn ties Sales agent in Dynamics 365 to that setting (Power Platform admin center > Copilot > Settings).
- Review the entities listed under Sales Chat in the Sales agent administrator settings, because the agent has access to every column of an added entity. Use System Administrator or System Customizer in Dynamics 365 for these settings; if using a custom security role, additional Sales agent privileges might be needed.
- Check seller licences: Sales Enterprise or Premium for the basic features, and Microsoft 365 Copilot for Graph-grounded and premium features.
- Brief sales managers that the roadmap plans a change to the landing experience, with a preview target of December CY2026.

### At rollout

- Pilot with a security group, once Microsoft confirms that the Sales agent access setting governs the home: expand Dynamics 365, choose **Who can use this feature?** > **Set access restrictions**, and add the pilot security group under **Allow access**.
- Watch Message center and the Learn Sales agent pages for the default state, which Microsoft has not stated.
- Allow up to 15 minutes for access setting changes, and up to one hour for Microsoft Entra group changes, as Learn states.

### After rollout

- Ask pilot sellers whether meeting preparation and past-meeting review appear in the home, since Learn's current preview page says meeting preparation is not accessible in Dynamics 365.
- Collect seller feedback on recommendations and record the questions for Microsoft.

## Governance controls

<p class="controls__lead">Where each control lives. The left column says what the setting decides and how far it reaches; the middle gives the admin centre and the exact path; the right gives the script, API or command that does the same. <em>Not yet documented</em> means Microsoft has not published a control for that surface, so there is nothing to configure yet.</p>

<table class="controls">
<thead><tr><th>Control</th><th>Admin UI</th><th>API and automation</th></tr></thead>
<tbody>
<tr><td data-label="Control"><strong>Whether sellers land in Sales agent instead of the dashboard</strong><br><small>Tenant</small><br><small class="controls__note">Not yet documented for the home. Microsoft Learn describes no such switch at the time of writing (November 2026).</small></td><td data-label="Admin UI"><em class="controls__gap">Not yet documented</em></td><td data-label="API and automation"><em class="controls__gap">Not yet documented</em></td></tr>
<tr><td data-label="Control"><strong>Access to Sales agent in Microsoft 365 Copilot in Dynamics 365</strong><br><small>Group</small><br><small class="controls__note">General control: Microsoft has not confirmed it applies to the new home. Needs Global, Exchange or Power Platform Administrator.</small></td><td data-label="Admin UI"><strong>Microsoft Teams</strong><br>Sales › Settings › Tenant › Access settings › Allow access to Sales agent › Dynamics 365 <a href="https://learn.microsoft.com/microsoft-sales-copilot/access-settings-apps" rel="noopener" class="controls__docs">Learn</a></td><td data-label="API and automation"><em class="controls__gap">Not yet documented</em></td></tr>
<tr><td data-label="Control"><strong>Whether Microsoft Copilot is available in an environment's model-driven apps</strong><br><small>Environment</small><br><small class="controls__note">Learn ties Sales agent in Dynamics 365 to this setting. Whether it governs the new home is not confirmed.</small></td><td data-label="Admin UI"><strong>Power Platform admin center</strong><br>Copilot › Settings › Power Apps › Chat Agent › Microsoft Copilot › environment › Edit Setting <a href="https://learn.microsoft.com/power-apps/maker/model-driven-apps/add-microsoft-365-copilot" rel="noopener" class="controls__docs">Learn</a></td><td data-label="API and automation"><em class="controls__gap">Not yet documented</em></td></tr>
<tr><td data-label="Control"><strong>Which CRM tables Sales agent can read</strong><br><small>Environment</small><br><small class="controls__note">General control for Sales agent. Use System Administrator or System Customizer in Dynamics 365; with a custom security role, additional Sales agent privileges might be needed.</small></td><td data-label="Admin UI"><strong>Microsoft Teams</strong><br>Sales › Settings › Features › Sales Chat › Add <a href="https://learn.microsoft.com/microsoft-sales-copilot/set-up-sales-chat" rel="noopener" class="controls__docs">Learn</a></td><td data-label="API and automation"><em class="controls__gap">Not yet documented</em></td></tr>
</tbody>
</table>

Learn does not document a control for this landing page specifically, so the first row records that gap. The Sales agent access settings and the model-driven app Copilot setting are existing controls for Sales agent in Dynamics 365. General control: Microsoft has not confirmed that either one governs the new home.

The tenant access settings need Global Administrator, Exchange Administrator or Power Platform Administrator. The environment-level settings under Sales Chat need System Administrator or System Customizer in Dynamics 365; with a custom security role, additional Sales agent privileges might be needed. Per Learn, the **Dynamics 365** access setting defaults to access for all eligible users, and Microsoft 365 Copilot in Dynamics 365 must also be turned on.

Microsoft Learn documents no API or PowerShell cmdlet for the Sales agent access settings or the Sales Chat table list at the time of writing (November 2026).

## Open questions

- Is the agentic home on by default for Dynamics 365 Sales users, or does an administrator or maker choose it? Watch Message center and the roadmap item.
- Is there a setting that keeps the existing dashboard as the landing page, or turns the home off for a group of sellers?
- Does the **Dynamics 365** access setting in the Sales agent access settings govern the home?
- Will meeting preparation and past-meeting review be available in Dynamics 365 at preview, given that Learn's preview page says they are not accessible there today?
- Will the home need licensing beyond what Learn publishes for Sales agent today, which is CRM-only use with Sales Enterprise or Premium and Microsoft 365 Copilot for Graph grounding?

<!-- rationale
risk: Medium. The roadmap plans agent recommendations and customer-meeting preparation in a new landing experience, while its default and dedicated controls are not yet stated.
cost: Low. Known costs are administrator time, seller communication and possible Dataverse search storage growth. No licensing requirement specific to this home is published.
impact: Medium. The planned home is aimed at sellers in Dynamics 365 Sales, rather than the wider workforce; Microsoft has not stated whether it replaces the opening screen for every seller.
-->

<!-- verifier-findings (2026-11-26, verified-with-gaps; checked by gpt-6.1-sol)
The independent check found fault only with the statements below. This is a correction: change what they name and carry the rest of the page over unchanged.
These are minor and do not hold the page. Where removing the statement, or rewording it in the words the fix gives, settles one, do that; otherwise leave it as it is. A minor finding may also add a source link it names for a statement already on the page. It adds no row and nothing that needs research.
- [supported, minor] controls[2].ui; Governance controls / admin-path: Environment Copilot availability is managed through Power Platform admin center > Copilot > Settings > Power Apps > Chat Agent > Microsoft Copilot > environment > Edit Setting. | Found: go to Copilot > Settings. Under Power Apps, expand Chat Agent and choose Microsoft Copilot. ... Select an environment group or an environment name, then select Edit Setting. ... Select On | Fix: Extend controls[2].ui.path and the matching rendered path to 'Copilot > Settings > Power Apps > Chat Agent > Microsoft Copilot > environment > Edit Setting > On', as documented at https://learn.microsoft.com/power-apps/maker/model-driven-apps/add-microsoft-365-copilot. | Source: https://learn.microsoft.com/power-apps/maker/model-driven-apps/add-microsoft-365-copilot
- [supported, minor] Governance guidance: Before rollout / admin-path: Power Platform admin center > Copilot > Settings is the starting page for checking environment Copilot enablement. | Found: In the navigation pane, go to Copilot > Settings. Under Power Apps, expand Chat Agent and choose Microsoft Copilot. | Fix: Replace the parenthetical path with 'Power Platform admin center > Copilot > Settings > Power Apps > Chat Agent > Microsoft Copilot > environment > Edit Setting', which reaches the setting to inspect. | Source: https://learn.microsoft.com/power-apps/maker/model-driven-apps/add-microsoft-365-copilot
-->
