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
  notes: "The DSPM prerequisites page asks for 'a supporting license' without naming one. The Posture Agent page requires Microsoft 365 E5 with SCUs provisioned, under per-seat and pay-as-you-go models. A rate for the agent's SCU use is not yet published."
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
      path: "Agents > Explore agents > View agent > Deactivate agent"
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
version: 1
verification:
  status: "held"
  date: "2026-11-21"
  version: 1
  model: "gpt-6.1-sol"
  engine: "copilot"
  claims: 89
  confirmed: 86
  unconfirmed: 2
  contradicted: 1
  attempts: 1
  hash: "0ab2a69dd627a076c1a14d76275705b4"
---

## What's changing

The roadmap item describes a new Microsoft Purview Data Security Posture Management (DSPM) experience: outcome-based guided workflows, AI observability, enhanced posture reporting, Security Copilot agents for triage and policy management, and third-party signals from partners such as BigID, Cyera, OneTrust and Varonis. It also extends Data Risk Assessments to Fabric and to item-level analysis, with remediation actions such as bulk disabling of overshared SharePoint links. The roadmap status is In development, the target is January CY2027, the release phase is General Availability, the platform is Web, and the clouds listed are GCC, GCC High and DoD.

Microsoft Learn already documents a **current** version of DSPM that matches much of this description, and renames the earlier versions DSPM (classic) and DSPM for AI (classic). In it, **Data security objectives** cards (for example **Prevent oversharing of sensitive data**) group the Purview solutions needed for an outcome. Other pages are **Posture**, **AI observability**, **Asset explorer**, **Reports** and **Setup tasks**. Learn says most new features will be added to this version only. Learn does not say when the new version reaches any tenant or cloud, so the roadmap's status and target remain the dates to plan on.

For oversharing, Learn documents a default data risk assessment that runs weekly for the top 100 SharePoint sites (Microsoft 365 tab) or the top 100 Fabric workspaces (Fabric tab). Fabric assessments need a one-time setup with an Entra-registered app. Custom Microsoft 365 assessments can scan at item level, currently for SharePoint sites only, with per-item actions: **Resolve**, **Apply sensitivity label**, **Notify** and **Remove sharing link**. A bulk action to disable overshared links is not described on the Learn pages for these assessments at the time of writing (November 2026).

Learn also says AI agents can take direct action on detected risks, such as removing public sharing links, applying DLP policies or revoking permissions, with actions reviewed, approved or customised by admins and audited. The Data Security Posture Agent is in preview, and partner integration through Microsoft Sentinel data lake is in preview.

## Why it matters

This is a redesign of a tool your security team may already use, so the practical risk is a gap between the page they know and the one the roadmap describes. Microsoft has not stated what happens to existing tenants on arrival, so plan from what the roadmap and Learn say rather than assuming nothing changes.

The cost and exposure sit in the new options. The posture agent consumes SCUs each time it runs, Fabric and item-level scanning need an app registration with broad Graph permissions, and remediation actions can cut off legitimate access to files. Decide who may use these before January CY2027, not after the first assessment runs.

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
- Microsoft pauses refresh of Microsoft 365 data in DSPM when a tenant has not opened it for more than 60 days, and results take a day or so to appear after first use.
- Restricted administrators in administrative units cannot create one-click policies.

## Cost and licensing

**Licence.** The DSPM prerequisites say you need 'a supporting license for this Microsoft Purview solution' and a supported region, and point to the Microsoft Purview service description. They name no licence for DSPM itself. The service description's DSPM line refers to the licensing section of the DSPM for AI (classic) considerations page.

**Meters.** The Data Security Posture Agent (preview) requires both per-seat licensing and pay-as-you-go billing: Microsoft 365 E5 with SCUs provisioned. It consumes SCUs every time it runs, based on the complexity of its analysis, and consumption can be tracked in the Security Copilot usage monitoring tool. The setup page says some options need pay-as-you-go billing for data storage, shown in the UI where they apply, and suggests the Usage center for tracking.

**Indirect cost.** Admin time for the Entra app and Fabric admin portal setup, plus site owners' time handling item-level notifications.

**Not yet published.** An SCU rate for this agent, and a licence statement specific to the new DSPM experience.

## Scope

**Who and what.** Learn documents DSPM across Microsoft 365, Azure, Fabric and integrated third-party SaaS platforms. Item-level scanning is for Microsoft 365 SharePoint sites only.

**Roles.** Learn lists the Entra Compliance Administrator role and the Microsoft Purview Compliance Administrator role group among those that can view, create and edit in DSPM, and separate view-only roles. Connecting partner solutions in the Sentinel content hub needs Microsoft Sentinel Contributor. Entra app setup needs Cloud Application Administrator, Application Administrator or Privileged Role Administrator; Fabric prerequisites need a Fabric administrator.

**Clouds and platform.** The roadmap lists GCC, GCC High and DoD, and the Web platform. Microsoft Learn's DSPM pages state no government-cloud availability for the new experience at the time of writing (November 2026); they say only that your region must be supported.

**Prerequisites.** Learn lists a supporting licence and permissions, and the Posture Agent needs Microsoft 365 E5 with SCUs.

## Governance guidance

### Before rollout

- Assign the Compliance Administrator role or role group to the few people who will create assessments, and view-only roles to analysts.
- Ask an Application Administrator, Cloud Application Administrator or Privileged Role Administrator to prepare the Entra app, and a Fabric administrator to prepare the Admin API settings, only if you plan Fabric or item-level scans.
- Decide whether to use the Data Security Posture Agent (preview), and confirm Microsoft 365 E5 and SCU provisioning with your finance owner first.
- List which administrators sit in administrative units, because restricted administrators cannot create one-click policies.

### At rollout

- Open Solutions > DSPM in the Microsoft Purview portal, accept the setup tasks that apply, and allow a day or so before expecting data.
- Review the weekly default data risk assessment results for SharePoint and, if configured, Fabric.
- Limit custom item-level assessments to the SharePoint sites you intend to remediate, and agree with site owners before using **Remove sharing link**.
- Treat the partner integration setup task as preview and test it with one partner first.

### After rollout

- Check [audit](/concepts/auditing/) records of actions taken by AI agents and by admins in DSPM.
- Track SCU consumption for the Posture Agent against the budget you agreed.
- Return to DSPM at least every 60 days so data refresh is not paused.
- Watch Message center and the DSPM Learn page for the rollout date, cloud availability and licence statement.

## Governance controls

<p class="controls__lead">Where each control lives. The left column says what the setting decides and how far it reaches; the middle gives the admin centre and the exact path; the right gives the script, API or command that does the same. <em>Not yet documented</em> means Microsoft has not published a control for that surface, so there is nothing to configure yet.</p>

<table class="controls">
<thead><tr><th>Control</th><th>Admin UI</th><th>API and automation</th></tr></thead>
<tbody>
<tr><td data-label="Control"><strong>Connecting Fabric workspaces to data risk assessments</strong><br><small>Tenant</small><br><small class="controls__note">Needs an Entra app and Fabric Admin API settings first; Fabric administrator and an Entra application role are involved.</small></td><td data-label="Admin UI"><strong>Microsoft Purview portal</strong><br>DSPM › Discover › Data risk assessments › Fabric › Set config <a href="https://learn.microsoft.com/purview/data-security-posture-management-oversharing" rel="noopener" class="controls__docs">Learn</a></td><td data-label="API and automation"><em class="controls__gap">Not yet documented</em></td></tr>
<tr><td data-label="Control"><strong>Item-level scanning for custom Microsoft 365 assessments</strong><br><small>Tenant</small><br><small class="controls__note">Select Authenticate to enter the Entra app. SharePoint sites only, up to 10 sites.</small></td><td data-label="Admin UI"><strong>Microsoft Purview portal</strong><br>DSPM › Discover › Data risk assessments › Create custom assessment › Scan level › Item-level <a href="https://learn.microsoft.com/purview/data-security-posture-management-oversharing" rel="noopener" class="controls__docs">Learn</a></td><td data-label="API and automation"><em class="controls__gap">Not yet documented</em></td></tr>
<tr><td data-label="Control"><strong>Whether the Data Security Posture Agent is active</strong><br><small>Agent</small><br><small class="controls__note">Deactivate agent is under the ellipsis next to Edit agent. Preview feature.</small></td><td data-label="Admin UI"><strong>Microsoft Purview portal</strong><br>Agents › Explore agents › View agent › Deactivate agent <a href="https://learn.microsoft.com/purview/copilot-in-purview-posture-agent-get-started" rel="noopener" class="controls__docs">Learn</a></td><td data-label="API and automation"><em class="controls__gap">Not yet documented</em></td></tr>
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
risk: Medium. The documented DSPM can remove sharing links and run AI agents on detected risks, and item-level scans need an Entra app with Files.ReadWrite.All and Sites.ReadWrite.All, but each step is admin-configured and audited.
cost: Variable. The Data Security Posture Agent (preview) needs Microsoft 365 E5 plus provisioned security compute units (SCUs), a metered consumption; the licence for DSPM itself is only described as 'a supporting license'.
impact: Medium. Security and compliance teams meet a new DSPM experience, and SharePoint site owners can receive item-level notifications; most end users do not notice it.
-->

<!-- verifier-findings (2026-11-21, held; checked by gpt-6.1-sol)
The independent check found fault only with the statements below. This is a correction: change what they name and carry the rest of the page over unchanged.
Correct each of these with the smallest change that removes the fault: delete the statement, narrow it, or put the finding's own "Found" text or worded replacement in its place. Where a fix asks for more than that (a new row, an explanation, further references), do only the part that removes the fault. A correction adds no control rows.
- [unsupported, blocker] Why it matters / applicability: Fabric scanning, as well as item-level scanning, requires broad Microsoft Graph permissions. | Found: Searched: "Fabric data risk assessments" "Graph" permissions. Read current oversharing, classic prerequisites and Fabric enable-service-principal-admin-apis. Graph permissions are specified for Microsoft 365 item-level scanning; Fabric setup specifies Fabric admin API access. | Fix: Replace 'Fabric and item-level scanning need an app registration with broad Graph permissions' with 'Fabric scanning needs an Entra app with Fabric admin API access; Microsoft 365 item-level scanning needs an Entra app with broad Microsoft Graph application permissions.'
- [unsupported, blocker] rationale: risk; Governance guidance: After rollout / applicability: Every configuration and remediation step in DSPM is audited, including all administrator actions. | Found: Searched: "Data Security Posture Management" "audit" assessments configuration actions; "Data Security Posture Management" "audit" "item-level" "Remove sharing link". Read overview, application card, oversharing and audit activity excerpts. No guarantee covers every configuration step. | Fix: Replace 'but each step is admin-configured and audited' with 'but the setup is admin-configured and automated AI agent actions are audited'. Narrow the after-rollout checklist to 'Check audit records of automated actions taken by AI agents in DSPM.'
These are minor and do not hold the page. Where removing the statement, or rewording it in the words the fix gives, settles one, do that; otherwise leave it as it is. A minor finding may also add a source link it names for a statement already on the page. It adds no row and nothing that needs research.
- [supported, minor] Risk assessment: Change & support; Governance guidance: At rollout / behaviour: First-use data starts appearing after a day or so. | Found: Allow a day or so before you start to see data from your tenant that you can take action on. | Fix: Keep the general first-use guidance but add: 'The DSPM application card allows up to three days for initial processing; the oversharing page specifies a four-day delay for the first default SharePoint assessment.' Cite https://learn.microsoft.com/purview/data-security-posture-management-application-card and the already cited oversharing page. | Source: https://learn.microsoft.com/purview/data-security-posture-management-learn-about
- [supported, minor] front matter: licensing.model; licensing.notes; Cost and licensing; rationale: cost / licensing: Licensing is mixed because the Posture Agent documentation requires per-seat and pay-as-you-go models. | Found: This agent requires both the standard per seat licensing model and the pay-as-you-go billing model. | Fix: Keep the agent-page requirement, but add: 'The Security Copilot inclusion page says eligible Microsoft 365 E5 customers receive included SCU capacity covering core Purview agentic scenarios without separate provisioning; this differs from the agent page's pay-as-you-go wording.' Cite https://learn.microsoft.com/copilot/security/security-copilot-inclusion. | Source: https://learn.microsoft.com/purview/copilot-in-purview-posture-agent-get-started
- [supported, minor] controls[2].ui; Governance controls table / admin-path: Posture Agent deactivation is reached at Microsoft Purview portal > Agents > Explore agents > View agent > Deactivate agent. | Found: select Agents ... Select Explore agents ... Select View agent ... select the ellipsis (three dots) next to the Edit agent button ... Select Deactivate agent. | Fix: Set controls[2].ui.path to 'Agents > Explore agents > View agent > ellipsis next to Edit agent > Deactivate agent', matching the deactivation procedure. The current note already identifies the omitted button. | Source: https://learn.microsoft.com/purview/copilot-in-purview-posture-agent-get-started
- [contradicted, minor] Governance guidance; Governance controls / consistency: The checklist directs readers to review controls absent from the controls table. | Found: Assign the Compliance Administrator role ... prepare the Entra app ... Check audit ... Track SCU consumption ... The table contains only Fabric connection, item-level scanning, agent deactivation and partner integration. | Fix: Remove the checklist directions to assign roles, configure Entra/Fabric prerequisite access, check audit records and track SCU consumption, or restate them as planning advice without directing readers to set or review controls. Keep their factual descriptions elsewhere; do not add control rows.
-->
