---
title: "Microsoft Purview: new Data Security Posture Management experience with objectives, AI observability and agents"
slug: "microsoft-purview-new-microsoft-purview-data-security-posture-management-experience"
roadmapId: 532728
topic: "governance"
products: ["Microsoft Purview"]
summary: "Purview's new DSPM adds guided security objectives, AI observability, partner signals, a Posture Agent and Fabric and item-level oversharing checks. Admins decide roles, agent use and the metered parts; the old views stay as (classic)."
status: "launched"
releasePhase: ["General Availability","Preview"]
clouds: ["Worldwide (Standard Multi-Tenant)"]
platforms: ["Web"]
targetDate: "May CY2026"
previewDate: "December CY2025"
risk: "medium"
cost: "variable"
impact: "low"
defaultState: "unknown"
action: "prepare"
licensing:
  model: "mixed"
  notes: "DSPM's prerequisites ask for 'a supporting license' and point to the Purview service description, which mentions DSPM but does not give a base licence requirement for the new DSPM experience. The Posture Agent needs Microsoft 365 E5 with SCUs (per-seat plus pay-as-you-go); E5 and E7 include 400 SCUs a month per 1,000 paid licences."
audiences: ["security","compliance","finops"]
tags: ["dspm","purview","oversharing","security-copilot","security-compute-units","microsoft-fabric","sharepoint","data-security-investigations","role-groups","pay-as-you-go"]
sources:
  - title: "Microsoft 365 Roadmap 532728"
    url: "https://www.microsoft.com/microsoft-365/roadmap?id=532728"
    kind: "roadmap"
  - title: "Learn about Data Security Posture Management"
    url: "https://learn.microsoft.com/purview/data-security-posture-management-learn-about"
    kind: "learn"
  - title: "Considerations for Microsoft Purview Data Security Posture Management"
    url: "https://learn.microsoft.com/purview/data-security-posture-management-considerations"
    kind: "learn"
  - title: "Permissions for Data Security Posture Management"
    url: "https://learn.microsoft.com/purview/data-security-posture-management-permissions"
    kind: "learn"
  - title: "Setup tasks for Data Security Posture Management"
    url: "https://learn.microsoft.com/purview/data-security-posture-management-setup"
    kind: "learn"
  - title: "Prevent oversharing with data risk assessments from Data Security Posture Management"
    url: "https://learn.microsoft.com/purview/data-security-posture-management-oversharing"
    kind: "learn"
  - title: "Get started with the Data Security Posture Agent"
    url: "https://learn.microsoft.com/purview/copilot-in-purview-posture-agent-get-started"
    kind: "learn"
  - title: "Considerations for DSPM for AI to manage data security and compliance protections for AI interactions - (classic)"
    url: "https://learn.microsoft.com/purview/dspm-for-ai-considerations"
    kind: "learn"
  - title: "Get started with Data Security Posture Management - (classic)"
    url: "https://learn.microsoft.com/purview/data-security-posture-management-get-started"
    kind: "learn"
  - title: "Learn about Security Copilot for Microsoft 365 E5 and E7 included customers"
    url: "https://learn.microsoft.com/copilot/security/security-copilot-inclusion"
    kind: "learn"
  - title: "Billing in Data Security Investigations"
    url: "https://learn.microsoft.com/purview/data-security-investigations-billing"
    kind: "learn"
  - title: "Microsoft Purview service description"
    url: "https://learn.microsoft.com/office365/servicedescriptions/microsoft-365-service-descriptions/microsoft-365-tenantlevel-services-licensing-guidance/microsoft-purview-service-description"
    kind: "learn"
  - title: "Who can view, create and edit in DSPM (Purview role group membership) (Microsoft Purview portal)"
    url: "https://learn.microsoft.com/purview/purview-permissions"
    kind: "learn"
  - title: "Who can view, create and edit in DSPM (Purview role group membership) (PowerShell)"
    url: "https://learn.microsoft.com/powershell/module/exchangepowershell/add-rolegroupmember"
    kind: "learn"
videos: []
related: ["microsoft-purview-dspm-new-microsoft-purview-data-security-posture-management-experience","microsoft-purview-data-security-posture-management-data-security-posture-agent-in-dspm","microsoft-purview-data-security-investigations-proactive-ai-insight-powered-by-data-securi","role-groups","restricted-content-discovery"]
controls:
  - governs: "Who can view, create and edit in DSPM (Purview role group membership)"
    scope: "tenant"
    ui:
      surface: "Microsoft Purview portal"
      path: "Settings > Roles and scopes > Role groups > Role groups for Microsoft Purview solutions > role group > Edit > Edit members of the role group > Choose users"
      docs: "https://learn.microsoft.com/purview/purview-permissions"
    api:
      kind: "powershell"
      call: "Add-RoleGroupMember -Identity \"<role-group>\" -Member \"<user-UPN>\""
      docs: "https://learn.microsoft.com/powershell/module/exchangepowershell/add-rolegroupmember"
    note: "Microsoft Purview Compliance Administrator can view, create and edit in DSPM; Data Security Viewers is needed to run Security Copilot prompts. Needs the Role management role."
  - governs: "Whether the Data Security Posture Agent is active"
    scope: "agent"
    ui:
      surface: "Microsoft Purview portal"
      path: "Agents > Explore agents > View agent > ellipsis next to Edit agent > Deactivate agent"
      docs: "https://learn.microsoft.com/purview/copilot-in-purview-posture-agent-get-started"
    api: null
    note: "Preview. Deactivating stops the agent from functioning without removing it; Remove agent deletes it."
  - governs: "Item-level scanning and remediation in custom Microsoft 365 data risk assessments"
    scope: "tenant"
    ui:
      surface: "Microsoft Purview portal"
      path: "Solutions > DSPM > Discover > Data risk assessments > Create custom assessment > Scan level > Item-level"
      docs: "https://learn.microsoft.com/purview/data-security-posture-management-oversharing"
    api: null
    note: "Select Authenticate to enter the Entra app details. SharePoint sites only, up to 10 sites."
  - governs: "Connecting Fabric workspaces to data risk assessments"
    scope: "tenant"
    ui:
      surface: "Microsoft Purview portal"
      path: "Solutions > DSPM > Discover > Data risk assessments > Fabric > Set config"
      docs: "https://learn.microsoft.com/purview/data-security-posture-management-oversharing"
    api: null
    note: "Needs an Entra app in a security group named in the Fabric admin portal's Admin API settings."
  - governs: "Integration of partner solutions through Microsoft Sentinel data lake"
    scope: "tenant"
    ui:
      surface: "Microsoft Purview portal"
      path: "Solutions > DSPM > Actions > Setup tasks > Integrate with partner solutions"
      docs: "https://learn.microsoft.com/purview/data-security-posture-management-setup"
    api: null
    note: "Preview. Connect to the Microsoft Sentinel content hub first; that needs Microsoft Sentinel Contributor."
confidence: "medium"
created: "2026-11-27"
updated: "2026-11-27"
roadmapModified: "2026-06-01T23:15:29"
changes:
  - date: "2026-11-27"
    note: "New briefing: the launched DSPM experience, with its roles, Posture Agent SCU costs, Fabric and item-level oversharing assessments and partner integration."
  - date: "2026-11-27"
    note: "Checked against Microsoft Learn by gpt-6.1-sol: held: 2 of 82 statements contradicted, 1 unconfirmed; taken offline until corrected"
  - date: "2026-11-27"
    note: "Corrected: the role group row now covers baseline DSPM access, with the extra roles some activities need; the service description is described as mentioning DSPM without a base licence; checklist items with no control row removed."
  - date: "2026-11-27"
    note: "Checked against Microsoft Learn by gpt-6.1-sol: held: 1 of 121 statements contradicted, 1 unconfirmed; taken offline until corrected"
version: 2
verification:
  status: "held"
  date: "2026-11-27"
  version: 2
  model: "gpt-6.1-sol"
  engine: "copilot"
  claims: 121
  confirmed: 119
  unconfirmed: 1
  contradicted: 1
  attempts: 2
  hash: "3d2270029b703beff5f8fe28468e4d43"
---

## What's changing

Microsoft Purview Data Security Posture Management (DSPM) has a new version that pulls data security posture for ordinary data and for AI apps and agents into one place in the Microsoft Purview portal, under **Solutions > DSPM**. The earlier versions remain available as **Data Security Posture Management (classic)** and **DSPM for AI (classic)**, and Microsoft's documentation says most new features will be added to the new version only.

The new version is organised around **Data security objectives**, such as *Prevent oversharing of sensitive data* and *Prevent exfiltration to risky locations*, each with suggested actions, one-click policies and progress metrics. It adds an **AI observability** page (an inventory of AI apps and agents with activity in the last 30 days), posture **Reports**, an **Asset explorer**, and Security Copilot features including the **Data Security Posture Agent**, a natural-language search for sensitive data that is in preview. Partner signals arrive through Microsoft Sentinel data lake, also in preview; the initial partners are Varonis (for Salesforce), Cyera (for Snowflake), BigID (for Databricks) and OneTrust (for Google Cloud Platform). Data risk assessments now cover Fabric workspaces, and custom Microsoft 365 assessments can scan at item level and act on individual items, including **Remove sharing link**. The roadmap describes this as "bulk disabling of overshared SharePoint links"; Learn documents item-level remediation for up to 10 SharePoint sites per assessment.

Microsoft has not stated what changes in a tenant on arrival. Learn says that on first use an administrator is prompted to accept initial setup tasks if they are not already turned on, and that the Posture Agent must be activated and configured before it can be used.

The roadmap item is **Launched**, with preview in December CY2025 and general availability targeted for May CY2026, for the Worldwide (Standard Multi-Tenant) cloud on the web. Parts of the experience are still marked preview on Learn, including the Posture Agent and partner integration.

## Why it matters

This is now where Microsoft puts new DSPM capability, so security teams that run the classic views will move here sooner or later, and the move is a chance to decide who gets which role and which of the metered pieces to switch on. The objectives turn findings into one-click policies and remediation, which means DSPM users can change DLP, labelling and sharing in a few clicks; the role split between view-only and edit roles matters more than it did for a dashboard.

Cost now depends on which parts you use: the Posture Agent draws on SCUs every run, proactive AI insights draw on Data Security Investigations compute units every 24 hours, and some setup options need Purview pay-as-you-go billing. Microsoft has not stated whether anything starts on its own when the new version reaches a tenant, so plan as though nothing runs until an admin completes the setup tasks, and confirm that in the portal.

## Risk assessment

**Data exposure**
- Item-level scanning for custom Microsoft 365 assessments needs a registered Entra app with Microsoft Graph application permissions including Files.ReadWrite.All and Sites.ReadWrite.All, granted with admin consent. Treat that app's client secret like any other credential for an app with write permissions to files and sites.
- Fabric assessments need an Entra app that is a member of a security group specified in the Admin API settings of the Fabric admin portal; confirm with the Fabric administrator what those settings expose before adding it.
- The Posture Agent searches files in SharePoint and OneDrive, Teams messages, Exchange email and Copilot interactions. Roles decide what a user sees: Compliance Admin and the viewer roles see summaries only, while Data Classification Content Viewer and Purview Content Analyst can open matched files and label them.

**Security & identity**
- Microsoft recommends deploying the Posture Agent with an agent identity; the deploying account needs the Role Management role.
- Restricted administrators (those scoped to administrative units) see data for their units only and cannot create one-click policies, which apply to all users.

**Autonomy & actions**
- Learn says AI agents in DSPM can act on detected risks, such as removing public sharing links, applying DLP policies or revoking permissions, under admin review, and that these actions are audited.
- **Remove sharing link** cuts access through that link at once; Learn warns it can block legitimate users until the owner sets a narrower link.
- Posture Agent prompts can be scheduled daily, weekly or monthly, so SCU use continues until the schedule is removed.

**Change & support**
- Background processing of Microsoft 365 data pauses when nobody in the tenant has opened DSPM for more than 60 days, and resumes with a delay when an admin returns.
- **Notify** sends site owners a fixed, non-customisable email about potentially overshared items; warn site owners before using it at scale.

## Cost and licensing

**Licence.** The DSPM prerequisites on Learn require "a supporting license for this Microsoft Purview solution" and refer to the Microsoft Purview service description, which at the time of writing (November 2026) mentions DSPM but does not give a base licence requirement for the new DSPM experience. The classic DSPM documentation states that it needs a Microsoft 365 E5 or Microsoft Purview Suite licence; Microsoft has not published whether the same applies to the new version. Monitoring Microsoft 365 Copilot and agents needs users licensed for Microsoft 365 Copilot.

**Meters.**
- **Data Security Posture Agent (preview):** the get-started page says it needs both per-seat licensing and pay-as-you-go billing, specifically Microsoft 365 E5 with SCUs provisioned, and that it consumes SCUs every time it runs. Microsoft 365 E5 and E7 customers receive 400 SCUs a month for every 1,000 paid user licences, up to 10,000 SCUs a month, at no additional cost. A rate for a Posture Agent run is not yet published.
- **Proactive AI insights** on the exfiltration objective use Data Security Investigations, which bills AI capacity pay-as-you-go in compute units; each 24-hour refresh consumes compute units. The Security Copilot inclusion page lists the non-agentic Data Security Investigations experience as not covered by the included SCUs.
- **Setup tasks:** the setup page says some options require Purview pay-as-you-go billing and shows notices in the portal when they do.
- **Partner integration** runs through Microsoft Sentinel data lake; the inclusion page lists Sentinel data lake compute and storage as not covered.

**Caps.** Learn documents no spending limit specific to DSPM. Posture Agent consumption can be watched from the agent's **Performance** tab and stopped by deactivating the agent (see the controls table).

## Scope

- **Who uses it:** security and compliance administrators in the Microsoft Purview portal. Microsoft Entra Compliance Administrator, Global Administrator and the Microsoft Purview Compliance Administrator role group can view, create and edit; view-only roles include the Microsoft Purview Security Reader role group, Data Security Viewers and the Entra AI Administrator role. Running Security Copilot prompts in DSPM needs Data Security Viewers.
- **Data sources:** asset explorer's Microsoft locations currently include Microsoft 365 only; non-Microsoft locations come through partner integration.
- **Item-level limits:** SharePoint sites only, OneDrive not supported, at most 10 sites, and up to 200,000 items per location for assessments.
- **Partner connection:** needs the Microsoft Sentinel Contributor role to connect partner solutions in the Sentinel content hub.
- **Clouds and platforms:** the roadmap lists Worldwide (Standard Multi-Tenant) and Web.
- **Prerequisites:** auditing (on by default for new tenants, per the setup page), Security Copilot onboarding with the Purview plug-in for the Posture Agent, and Entra app registrations for Fabric and item-level assessments.

## Governance guidance

### Before rollout
- Decide who needs edit access (Microsoft Purview Compliance Administrator role group) and who needs view-only access, and assign the role groups in the Purview portal.
- Confirm the tenant's DSPM licence with your Microsoft account team, since the service description mentions DSPM but does not give a base licence requirement for the new DSPM experience.

### At rollout
- Activate the Posture Agent only if you want it, using an agent identity as Microsoft recommends.
- Run a first custom assessment with item-level scanning against a few SharePoint sites before using Remove sharing link.
- Brief site owners on the Notify email and on what Remove sharing link does to their users.

### After rollout
- Re-run custom assessments with the duplicate option after they expire at 30 days.
- Open DSPM at least every 60 days, or processing of Microsoft 365 data pauses.

## Governance controls

<p class="controls__lead">Where each control lives. The left column says what the setting decides and how far it reaches; the middle gives the admin centre and the exact path; the right gives the script, API or command that does the same. <em>Not yet documented</em> means Microsoft has not published a control for that surface, so there is nothing to configure yet.</p>

<table class="controls">
<thead><tr><th>Control</th><th>Admin UI</th><th>API and automation</th></tr></thead>
<tbody>
<tr><td data-label="Control"><strong>Who can view, create and edit in DSPM (Purview role group membership)</strong><br><small>Tenant</small><br><small class="controls__note">Microsoft Purview Compliance Administrator can view, create and edit in DSPM; Data Security Viewers is needed to run Security Copilot prompts. Needs the Role management role.</small></td><td data-label="Admin UI"><strong>Microsoft Purview portal</strong><br>Settings › Roles and scopes › Role groups › Role groups for Microsoft Purview solutions › role group › Edit › Edit members of the role group › Choose users <a href="https://learn.microsoft.com/purview/purview-permissions" rel="noopener" class="controls__docs">Learn</a></td><td data-label="API and automation"><strong>PowerShell</strong><br><code>Add-RoleGroupMember -Identity &quot;&lt;role-group&gt;&quot; -Member &quot;&lt;user-UPN&gt;&quot;</code> <a href="https://learn.microsoft.com/powershell/module/exchangepowershell/add-rolegroupmember" rel="noopener" class="controls__docs">Learn</a></td></tr>
<tr><td data-label="Control"><strong>Whether the Data Security Posture Agent is active</strong><br><small>Agent</small><br><small class="controls__note">Preview. Deactivating stops the agent from functioning without removing it; Remove agent deletes it.</small></td><td data-label="Admin UI"><strong>Microsoft Purview portal</strong><br>Agents › Explore agents › View agent › ellipsis next to Edit agent › Deactivate agent <a href="https://learn.microsoft.com/purview/copilot-in-purview-posture-agent-get-started" rel="noopener" class="controls__docs">Learn</a></td><td data-label="API and automation"><em class="controls__gap">Not yet documented</em></td></tr>
<tr><td data-label="Control"><strong>Item-level scanning and remediation in custom Microsoft 365 data risk assessments</strong><br><small>Tenant</small><br><small class="controls__note">Select Authenticate to enter the Entra app details. SharePoint sites only, up to 10 sites.</small></td><td data-label="Admin UI"><strong>Microsoft Purview portal</strong><br>Solutions › DSPM › Discover › Data risk assessments › Create custom assessment › Scan level › Item-level <a href="https://learn.microsoft.com/purview/data-security-posture-management-oversharing" rel="noopener" class="controls__docs">Learn</a></td><td data-label="API and automation"><em class="controls__gap">Not yet documented</em></td></tr>
<tr><td data-label="Control"><strong>Connecting Fabric workspaces to data risk assessments</strong><br><small>Tenant</small><br><small class="controls__note">Needs an Entra app in a security group named in the Fabric admin portal's Admin API settings.</small></td><td data-label="Admin UI"><strong>Microsoft Purview portal</strong><br>Solutions › DSPM › Discover › Data risk assessments › Fabric › Set config <a href="https://learn.microsoft.com/purview/data-security-posture-management-oversharing" rel="noopener" class="controls__docs">Learn</a></td><td data-label="API and automation"><em class="controls__gap">Not yet documented</em></td></tr>
<tr><td data-label="Control"><strong>Integration of partner solutions through Microsoft Sentinel data lake</strong><br><small>Tenant</small><br><small class="controls__note">Preview. Connect to the Microsoft Sentinel content hub first; that needs Microsoft Sentinel Contributor.</small></td><td data-label="Admin UI"><strong>Microsoft Purview portal</strong><br>Solutions › DSPM › Actions › Setup tasks › Integrate with partner solutions <a href="https://learn.microsoft.com/purview/data-security-posture-management-setup" rel="noopener" class="controls__docs">Learn</a></td><td data-label="API and automation"><em class="controls__gap">Not yet documented</em></td></tr>
</tbody>
</table>

- The role group row governs baseline DSPM access; some activities require additional roles, such as Data Security Viewers to run Security Copilot prompts and Microsoft Sentinel Contributor to connect partner solutions in the Microsoft Sentinel content hub. Edit roles can create one-click policies that apply to all users, so keep them to the people who own DLP and labelling. Adding role group members in the portal needs the Role management role.
- Microsoft Learn documents no PowerShell or Graph operation for data risk assessments, the Posture Agent or partner integration at the time of writing (November 2026); these are managed in the portal.
- Deactivating the Posture Agent stops it without removing it; Remove agent deletes it and it must be set up again.
- Item-level and Fabric assessments depend on Entra app registrations that Cloud Application Administrator, Application Administrator or Privileged Role Administrator creates in the Entra admin centre.

## Open questions

- Which licence entitles a tenant to the new DSPM, and does it match the Microsoft 365 E5 or Microsoft Purview Suite requirement documented for the classic version? Watch the Microsoft Purview service description.
- How many SCUs does a typical Posture Agent run consume, and can its consumption be limited separately from other Security Copilot workloads? Watch the Posture Agent get-started page.
- When will the Posture Agent and partner integration leave preview, and will licensing change when they do? Watch Message center and the DSPM Learn pages.
- Will Microsoft retire the classic DSPM and DSPM for AI views, and on what date? Watch Message center.
- Will item-level remediation support OneDrive or more than 10 SharePoint sites, as the roadmap's "bulk disabling" suggests? Watch the data risk assessments page.

<!-- rationale
risk: Medium. Agents and item-level remediation can label files and remove SharePoint sharing links, and item-level scanning needs an Entra app with Files.ReadWrite.All and Sites.ReadWrite.All; each piece is set up by an admin.
cost: Variable. The Posture Agent consumes Security Compute Units (SCUs) each run, proactive AI insights consume Data Security Investigations compute units, and some options need Purview pay-as-you-go billing.
impact: Low. The new experience is used by security and compliance admins; site owners can receive oversharing notices and users can lose access through removed sharing links.
-->

<!-- verifier-findings (2026-11-27, held; checked by gpt-6.1-sol)
The independent check found fault only with the statements below. This is a correction: change what they name and carry the rest of the page over unchanged.
Correct each of these with the smallest change that removes the fault: delete the statement, narrow it, or put the finding's own "Found" text or worded replacement in its place. Where a fix asks for more than that (a new row, an explanation, further references), do only the part that removes the fault. A correction adds no control rows.
- [contradicted, blocker] front matter: defaultState; What's changing; Why it matters / default: DSPM's default is unknown, and Microsoft has not stated what starts without administrator setup. | Found: **Opt-in analytics processing**: Data Security Posture Management requires explicit opt-in before processing organizational data. Analytics in both Insider Risk Management and DLP must be enabled before Data Security Posture Management can generate insights. | Fix: Set defaultState to admin-opt-in. Replace both broad unstated-default sentences with: 'DSPM requires explicit opt-in before processing organisational data; analytics in Insider Risk Management and DLP must be enabled before it can generate insights.' Cite https://learn.microsoft.com/purview/data-security-posture-management-application-card. Retain the separate documented Posture Agent activation requirement. | Source: https://learn.microsoft.com/purview/data-security-posture-management-application-card
- [unsupported, blocker] Risk assessment: Autonomy & actions / cost: Scheduled Posture Agent SCU use continues until the schedule is removed. | Found: Searched: "Data Security Posture Agent" "remove" "schedule". Opened Posture Agent get-started: it documents recurring eligible prompts, SCUs per run and agent deactivation, but does not state the claimed schedule-removal condition. | Fix: Replace 'so SCU use continues until the schedule is removed' with 'and each run consumes SCUs; deactivating the agent stops it from functioning', as documented at https://learn.microsoft.com/purview/copilot-in-purview-posture-agent-get-started.
-->
