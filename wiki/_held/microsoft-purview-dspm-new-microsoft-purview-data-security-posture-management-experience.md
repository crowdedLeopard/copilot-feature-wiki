---
title: "Microsoft Purview: new Data Security Posture Management experience"
slug: "microsoft-purview-dspm-new-microsoft-purview-data-security-posture-management-experience"
roadmapId: 561036
topic: "governance"
products: ["Microsoft Purview"]
summary: "Microsoft plans a new Purview DSPM experience with guided workflows, AI agents, partner data signals and wider oversharing checks. Security admins should plan roles, prerequisites and agent costs; the arrival default is not stated."
status: "in-development"
releasePhase: ["General Availability"]
clouds: ["GCC","GCC High","DoD"]
platforms: ["Web"]
targetDate: "January CY2027"
previewDate: null
risk: "medium"
cost: "variable"
impact: "medium"
defaultState: "unknown"
action: "prepare"
licensing:
  model: "mixed"
  notes: "The DSPM prerequisites name no licence ('a supporting license'). The Posture Agent page requires Microsoft 365 E5 with SCUs provisioned (per-seat plus pay-as-you-go); the Security Copilot inclusion page says eligible E5 customers get included SCU capacity for core Purview agentic scenarios. Agent SCU rate: not yet published."
audiences: ["security","compliance","m365-admin"]
tags: ["dspm","purview","oversharing","security-copilot","microsoft-fabric","sharepoint","dlp","gcc","gcc-high","dod"]
sources:
  - title: "Microsoft 365 Roadmap 561036"
    url: "https://www.microsoft.com/microsoft-365/roadmap?id=561036"
    kind: "roadmap"
  - title: "Learn about Data Security Posture Management"
    url: "https://learn.microsoft.com/purview/data-security-posture-management-learn-about"
    kind: "learn"
  - title: "Prevent oversharing with data risk assessments from Data Security Posture Management"
    url: "https://learn.microsoft.com/purview/data-security-posture-management-oversharing"
    kind: "learn"
  - title: "Permissions for Data Security Posture Management"
    url: "https://learn.microsoft.com/purview/data-security-posture-management-permissions"
    kind: "learn"
  - title: "Considerations for Microsoft Purview Data Security Posture Management"
    url: "https://learn.microsoft.com/purview/data-security-posture-management-considerations"
    kind: "learn"
  - title: "Setup tasks for Data Security Posture Management"
    url: "https://learn.microsoft.com/purview/data-security-posture-management-setup"
    kind: "learn"
  - title: "Get started with the Data Security Posture Agent"
    url: "https://learn.microsoft.com/purview/copilot-in-purview-posture-agent-get-started"
    kind: "learn"
  - title: "Considerations for DSPM for AI to manage data security and compliance protections for AI interactions - (classic)"
    url: "https://learn.microsoft.com/purview/ai-microsoft-purview-considerations"
    kind: "learn"
  - title: "Microsoft Purview service description"
    url: "https://learn.microsoft.com/office365/servicedescriptions/microsoft-365-service-descriptions/microsoft-365-tenantlevel-services-licensing-guidance/microsoft-purview-service-description"
    kind: "learn"
  - title: "Application card: Microsoft Purview Data Security Posture Management"
    url: "https://learn.microsoft.com/purview/data-security-posture-management-application-card"
    kind: "learn"
  - title: "Learn about Security Copilot for Microsoft 365 E5 and E7 included customers"
    url: "https://learn.microsoft.com/copilot/security/security-copilot-inclusion"
    kind: "learn"
videos: []
related: ["microsoft-purview-dspm-copilot-readiness-and-data-explorer","microsoft-purview-compliance-portal-data-loss-prevention-restrict-access-action-support-fo","microsoft-purview-data-loss-prevention-data-security-triage-agent-summaries-and-categoriza","sensitivity-labels","auditing"]
controls:
  - governs: "Connecting Fabric workspaces to data risk assessments"
    scope: "tenant"
    ui:
      surface: "Microsoft Purview portal"
      path: "DSPM > Discover > Data risk assessments > Fabric > Set config"
      docs: "https://learn.microsoft.com/purview/data-security-posture-management-oversharing"
    api: null
    note: "Needs an Entra app and Fabric Admin API settings first; Fabric administrator and an Entra application role are involved."
  - governs: "Item-level scanning for custom Microsoft 365 assessments"
    scope: "tenant"
    ui:
      surface: "Microsoft Purview portal"
      path: "DSPM > Discover > Data risk assessments > Create custom assessment > Scan level > Item-level"
      docs: "https://learn.microsoft.com/purview/data-security-posture-management-oversharing"
    api: null
    note: "Select Authenticate to enter the Entra app. SharePoint sites only, up to 10 sites."
  - governs: "Whether the Data Security Posture Agent is active"
    scope: "agent"
    ui:
      surface: "Microsoft Purview portal"
      path: "Agents > Explore agents > View agent > ellipsis next to Edit agent > Deactivate agent"
      docs: "https://learn.microsoft.com/purview/copilot-in-purview-posture-agent-get-started"
    api: null
    note: "Deactivate agent is under the ellipsis next to Edit agent. Preview feature."
  - governs: "Partner solution integration through Microsoft Sentinel data lake"
    scope: "tenant"
    ui:
      surface: "Microsoft Purview portal"
      path: "DSPM > Actions > Setup tasks > Integrate with partner solutions"
      docs: "https://learn.microsoft.com/purview/data-security-posture-management-setup"
    api: null
    note: "Preview. Connect to the Microsoft Sentinel content hub first."
confidence: "medium"
created: "2026-11-21"
updated: "2026-11-21"
roadmapModified: "2026-10-08T23:04:12"
changes:
  - date: "2026-11-21"
    note: "New briefing: the roadmap's new DSPM experience compared with the current Learn documentation, including agents, partner signals and Fabric and item-level data risk assessments."
  - date: "2026-11-21"
    note: "Checked against Microsoft Learn by gpt-6.1-sol: held: 1 of 89 statements contradicted, 2 unconfirmed; taken offline until corrected"
  - date: "2026-11-21"
    note: "Corrected after verification: Fabric and Graph permission wording, audit wording narrowed to AI agent actions, E5 SCU inclusion noted, first-use timing, agent deactivation path."
  - date: "2026-11-21"
    note: "Checked against Microsoft Learn by gpt-6.1-sol: held: 1 of 112 statements contradicted, 0 unconfirmed; taken offline until corrected"
version: 2
verification:
  status: "held"
  date: "2026-11-21"
  version: 2
  model: "gpt-6.1-sol"
  engine: "copilot"
  claims: 112
  confirmed: 111
  unconfirmed: 0
  contradicted: 1
  attempts: 2
  hash: "cdb8773dca727b11ab593e52fef336db"
---

## What's changing

The roadmap item describes a new Microsoft Purview Data Security Posture Management (DSPM) experience: outcome-based guided workflows, AI observability, enhanced posture reporting, Security Copilot agents for triage and policy management, and third-party signals from partners such as BigID, Cyera, OneTrust and Varonis. It also extends Data Risk Assessments to Fabric and to item-level analysis, with remediation actions such as bulk disabling of overshared SharePoint links. The roadmap status is In development, the target is January CY2027, the release phase is General Availability, the platform is Web, and the clouds listed are GCC, GCC High and DoD.

Microsoft Learn already documents a **current** version of DSPM that matches much of this description, and renames the earlier versions DSPM (classic) and DSPM for AI (classic). In it, **Data security objectives** cards (for example **Prevent oversharing of sensitive data**) group the Purview solutions needed for an outcome. Other pages are **Posture**, **AI observability**, **Asset explorer**, **Reports** and **Setup tasks**. Learn says most new features will be added to this version only. Learn does not say when the new version reaches any tenant or cloud, so the roadmap's status and target remain the dates to plan on.

For oversharing, Learn documents a default data risk assessment that runs weekly for the top 100 SharePoint sites (Microsoft 365 tab) or the top 100 Fabric workspaces (Fabric tab). Fabric assessments need a one-time setup with an Entra-registered app. Custom Microsoft 365 assessments can scan at item level, currently for SharePoint sites only, with per-item actions: **Resolve**, **Apply sensitivity label**, **Notify** and **Remove sharing link**. A bulk action to disable overshared links is not described on the Learn pages for these assessments at the time of writing (November 2026).

Learn also says AI agents can take direct action on detected risks, such as removing public sharing links, applying DLP policies or revoking permissions, with actions reviewed, approved or customised by admins and audited. The Data Security Posture Agent is in preview, and partner integration through Microsoft Sentinel data lake is in preview.

## Why it matters

This is a redesign of a tool your security team may already use, so the practical risk is a gap between the page they know and the one the roadmap describes. Microsoft has not stated what happens to existing tenants on arrival, so plan from what the roadmap and Learn say rather than assuming nothing changes.

The cost and exposure sit in the new options. The posture agent consumes SCUs each time it runs, Fabric scanning needs an Entra app with Fabric admin API access, Microsoft 365 item-level scanning needs an Entra app with broad Microsoft Graph application permissions, and remediation actions can cut off legitimate access to files. Decide who may use these before January CY2027, not after the first assessment runs.

## Risk assessment

**Data exposure**

- Item-level scanning of Microsoft 365 uses an Entra app with Graph application permissions that include Files.ReadWrite.All and Sites.ReadWrite.All, with admin consent. Limit who can create the app and who holds its secret.
- Fabric data risk assessments need an Entra app in a security group named in the Fabric admin portal's Admin API settings.
- Partner signals arrive through Microsoft Sentinel data lake (preview). Learn does not describe what data each partner sends or receives.

**Security & identity**

- DSPM can be viewed, created and edited by the Entra Compliance Administrator role and the Microsoft Purview Compliance Administrator role group, among the roles Learn lists; separate view-only roles exist.
- Learn recommends federated credentials over a client secret for the Fabric app, and an agent identity over a personal account for deploying the Posture Agent.

**Autonomy & actions**

- Learn says AI agents can take direct action on detected risks, and that admins review, approve or customise the actions, which are audited.
- **Remove sharing link** stops the link working, and Learn says to use it sparingly because it can block legitimate access. The site owner or item owner must then set a less permissive link type.
- **Notify** sends the site owner an email that Learn says is not customisable.

**Change & support**

- Item-level scanning is limited to 10 SharePoint sites at present.
- Microsoft pauses refresh of Microsoft 365 data in DSPM when a tenant has not opened it for more than 60 days, and results take a day or so to appear after first use. The DSPM application card allows up to three days for initial processing; the oversharing page specifies a four-day delay for the first default SharePoint assessment.
- Restricted administrators in administrative units cannot create one-click policies.

## Cost and licensing

**Licence.** The DSPM prerequisites say you need 'a supporting license for this Microsoft Purview solution' and a supported region, and point to the Microsoft Purview service description. They name no licence for DSPM itself. The service description's DSPM line refers to the licensing section of the DSPM for AI (classic) considerations page.

**Meters.** The Data Security Posture Agent (preview) requires both per-seat licensing and pay-as-you-go billing: Microsoft 365 E5 with SCUs provisioned. It consumes SCUs every time it runs, based on the complexity of its analysis, and consumption can be tracked in the Security Copilot usage monitoring tool. The Security Copilot inclusion page says eligible Microsoft 365 E5 customers receive included SCU capacity covering core Purview agentic scenarios without separate provisioning; this differs from the agent page's pay-as-you-go wording. The setup page says some options need pay-as-you-go billing for data storage, shown in the UI where they apply, and suggests the Usage center for tracking.

**Indirect cost.** Admin time for the Entra app and Fabric admin portal setup, plus site owners' time handling item-level notifications.

**Not yet published.** An SCU rate for this agent, and a licence statement specific to the new DSPM experience.

## Scope

**Who and what.** Learn documents DSPM across Microsoft 365, Azure, Fabric and integrated third-party SaaS platforms. Item-level scanning is for Microsoft 365 SharePoint sites only.

**Roles.** Learn lists the Entra Compliance Administrator role and the Microsoft Purview Compliance Administrator role group among those that can view, create and edit in DSPM, and separate view-only roles. Connecting partner solutions in the Sentinel content hub needs Microsoft Sentinel Contributor. Entra app setup needs Cloud Application Administrator, Application Administrator or Privileged Role Administrator; Fabric prerequisites need a Fabric administrator.

**Clouds and platform.** The roadmap lists GCC, GCC High and DoD, and the Web platform. Microsoft Learn's DSPM pages state no government-cloud availability for the new experience at the time of writing (November 2026); they say only that your region must be supported.

**Prerequisites.** Learn lists a supporting licence and permissions, and the Posture Agent needs Microsoft 365 E5 with SCUs.

## Governance guidance

### Before rollout

- Plan which few people will hold the Compliance Administrator role or role group to create assessments, with view-only roles for analysts.
- Identify who would prepare the Entra app (Application Administrator, Cloud Application Administrator or Privileged Role Administrator) and the Fabric Admin API settings (a Fabric administrator), if you plan Fabric or item-level scans.
- Decide whether to use the Data Security Posture Agent (preview), and confirm Microsoft 365 E5 and SCU provisioning with your finance owner first.
- List which administrators sit in administrative units, because restricted administrators cannot create one-click policies.

### At rollout

- Open Solutions > DSPM in the Microsoft Purview portal, accept the setup tasks that apply, and allow a day or so before expecting data; the DSPM application card allows up to three days for initial processing, and the oversharing page specifies a four-day delay for the first default SharePoint assessment.
- Review the weekly default data risk assessment results for SharePoint and, if configured, Fabric.
- Limit custom item-level assessments to the SharePoint sites you intend to remediate, and agree with site owners before using **Remove sharing link**.
- Treat the partner integration setup task as preview and test it with one partner first.

### After rollout

- Check audit records of automated actions taken by AI agents in DSPM.
- Compare the Posture Agent's SCU consumption with the budget you agreed.
- Return to DSPM at least every 60 days so data refresh is not paused.
- Watch Message center and the DSPM Learn page for the rollout date, cloud availability and licence statement.

## Governance controls

<p class="controls__lead">Where each control lives. The left column says what the setting decides and how far it reaches; the middle gives the admin centre and the exact path; the right gives the script, API or command that does the same. <em>Not yet documented</em> means Microsoft has not published a control for that surface, so there is nothing to configure yet.</p>

<table class="controls">
<thead><tr><th>Control</th><th>Admin UI</th><th>API and automation</th></tr></thead>
<tbody>
<tr><td data-label="Control"><strong>Connecting Fabric workspaces to data risk assessments</strong><br><small>Tenant</small><br><small class="controls__note">Needs an Entra app and Fabric Admin API settings first; Fabric administrator and an Entra application role are involved.</small></td><td data-label="Admin UI"><strong>Microsoft Purview portal</strong><br>DSPM › Discover › Data risk assessments › Fabric › Set config <a href="https://learn.microsoft.com/purview/data-security-posture-management-oversharing" rel="noopener" class="controls__docs">Learn</a></td><td data-label="API and automation"><em class="controls__gap">Not yet documented</em></td></tr>
<tr><td data-label="Control"><strong>Item-level scanning for custom Microsoft 365 assessments</strong><br><small>Tenant</small><br><small class="controls__note">Select Authenticate to enter the Entra app. SharePoint sites only, up to 10 sites.</small></td><td data-label="Admin UI"><strong>Microsoft Purview portal</strong><br>DSPM › Discover › Data risk assessments › Create custom assessment › Scan level › Item-level <a href="https://learn.microsoft.com/purview/data-security-posture-management-oversharing" rel="noopener" class="controls__docs">Learn</a></td><td data-label="API and automation"><em class="controls__gap">Not yet documented</em></td></tr>
<tr><td data-label="Control"><strong>Whether the Data Security Posture Agent is active</strong><br><small>Agent</small><br><small class="controls__note">Deactivate agent is under the ellipsis next to Edit agent. Preview feature.</small></td><td data-label="Admin UI"><strong>Microsoft Purview portal</strong><br>Agents › Explore agents › View agent › ellipsis next to Edit agent › Deactivate agent <a href="https://learn.microsoft.com/purview/copilot-in-purview-posture-agent-get-started" rel="noopener" class="controls__docs">Learn</a></td><td data-label="API and automation"><em class="controls__gap">Not yet documented</em></td></tr>
<tr><td data-label="Control"><strong>Partner solution integration through Microsoft Sentinel data lake</strong><br><small>Tenant</small><br><small class="controls__note">Preview. Connect to the Microsoft Sentinel content hub first.</small></td><td data-label="Admin UI"><strong>Microsoft Purview portal</strong><br>DSPM › Actions › Setup tasks › Integrate with partner solutions <a href="https://learn.microsoft.com/purview/data-security-posture-management-setup" rel="noopener" class="controls__docs">Learn</a></td><td data-label="API and automation"><em class="controls__gap">Not yet documented</em></td></tr>
</tbody>
</table>

These rows are portal paths only: Microsoft Learn documents no API for these controls at the time of writing (November 2026). Role-based access is described on the DSPM permissions page rather than as a switch, so it has no row here.

Deactivating the Posture Agent makes it inactive but does not uninstall it. The Fabric and item-level rows depend on prerequisites set outside DSPM: an Entra app and, for Fabric, the Admin API settings in the Fabric admin portal. DSPM data risk assessments sit alongside, and do not replace, [sensitivity labels](/concepts/sensitivity-labels/) and DLP policies, which the remediation options create.

## Open questions

- When does the new DSPM experience reach existing tenants, and what happens to the DSPM and DSPM for AI (classic) pages when it does? Watch the roadmap item and Message center.
- Is the new experience, including the agents and partner integrations, available in GCC, GCC High and DoD as the roadmap lists? Watch the DSPM Learn pages and the Purview government planning pages.
- Which licence covers DSPM itself, and what is the SCU rate for the Posture Agent?
- How will bulk disabling of overshared SharePoint links work: which role, which scope and which audit events? Watch the data risk assessments page.
- What data do partner integrations pass through Microsoft Sentinel data lake, and who can see it?

<!-- rationale
risk: Medium. The documented DSPM can remove sharing links and run AI agents on detected risks, and item-level scans need an Entra app with Files.ReadWrite.All and Sites.ReadWrite.All, but the setup is admin-configured and automated AI agent actions are audited.
cost: Variable. The Data Security Posture Agent (preview) needs Microsoft 365 E5 plus provisioned security compute units (SCUs), a metered consumption; the licence for DSPM itself is only described as 'a supporting license'.
impact: Medium. Security and compliance teams meet a new DSPM experience, and SharePoint site owners can receive item-level notifications; most end users do not notice it.
-->

<!-- verifier-findings (2026-11-21, held; checked by gpt-6.1-sol)
The independent check found fault only with the statements below. This is a correction: change what they name and carry the rest of the page over unchanged.
Correct each of these with the smallest change that removes the fault: delete the statement, narrow it, or put the finding's own "Found" text or worded replacement in its place. Where a fix asks for more than that (a new row, an explanation, further references), do only the part that removes the fault. A correction adds no control rows.
- [contradicted, blocker] What's changing: second paragraph / absence: Learn does not say when the new version reaches any tenant or cloud. | Found: General availability (GA): The new version of Data Security Posture Management is now generally available. Partner solutions for non-Microsoft data sources remain in preview, as does the Data Security Posture Agent. | Fix: Replace the final sentence of the second paragraph with: 'Microsoft Learn's May 2026 update announces general availability of the current DSPM version, while partner solutions and the Posture Agent remain in preview. Roadmap item 561036 remains In development, targeted for January CY2027 in GCC, GCC High and DoD; Learn does not give tenant-level rollout dates for those government clouds.' Cite https://learn.microsoft.com/purview/whats-new#may-2026. | Source: https://learn.microsoft.com/purview/whats-new#may-2026
These are minor and do not hold the page. Where removing the statement, or rewording it in the words the fix gives, settles one, do that; otherwise leave it as it is. A minor finding may also add a source link it names for a statement already on the page. It adds no row and nothing that needs research.
- [supported, minor] Cost and licensing: Licence / licensing: The service description redirects DSPM licensing information to the DSPM for AI (classic) considerations page. | Found: For information about licensing about Microsoft Purview Data Security Posture Management for AI, see Considerations for deploying Microsoft Purview Data Security Posture Management for AI & data security and compliance protections for Microsoft Copilot and other generative AI apps | Microsoft Learn. | Fix: Replace the last sentence of Licence with: 'The service description's DSPM for AI licensing pointer links to the DSPM for AI (classic) considerations page.' The link targets the article, not a licensing section, and the article has no section with that name. | Source: https://learn.microsoft.com/office365/servicedescriptions/microsoft-365-service-descriptions/microsoft-365-tenantlevel-services-licensing-guidance/microsoft-purview-service-description
-->
