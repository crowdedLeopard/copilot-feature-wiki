---
title: "Microsoft Purview: Data Security Posture Agent in DSPM"
slug: "microsoft-purview-data-security-posture-management-data-security-posture-agent-in-dspm"
roadmapId: 542790
topic: "governance"
products: ["Microsoft Purview"]
summary: "Microsoft Purview DSPM gains a Security Copilot agent that finds sensitive data in SharePoint, OneDrive, Exchange, Teams and Copilot by natural-language request. An admin must deploy it, and it consumes security compute units."
status: "launched"
releasePhase: ["General Availability","Preview"]
clouds: ["Worldwide (Standard Multi-Tenant)"]
platforms: ["Web"]
targetDate: "June CY2026"
previewDate: "December CY2025"
risk: "low"
cost: "variable"
impact: "low"
defaultState: "admin-opt-in"
action: "review"
licensing:
  model: "mixed"
  notes: "Learn says the agent requires both the standard per-seat licensing model and the pay-as-you-go billing model: Microsoft 365 E5, with security compute units (SCUs) provisioned. A per-run SCU figure for this agent is not yet published."
audiences: ["security","compliance","finops","m365-admin"]
tags: ["purview","dspm","security-copilot","agents","sensitivity-labels","auditing","pay-as-you-go","entra-agent-id"]
sources:
  - title: "Microsoft 365 Roadmap 542790"
    url: "https://www.microsoft.com/microsoft-365/roadmap?id=542790"
    kind: "roadmap"
  - title: "Get started with the Data Security Posture Agent"
    url: "https://learn.microsoft.com/purview/copilot-in-purview-posture-agent-get-started"
    kind: "learn"
  - title: "Considerations for Microsoft Purview Data Security Posture Management"
    url: "https://learn.microsoft.com/purview/data-security-posture-management-considerations"
    kind: "learn"
  - title: "Security Copilot agents in Microsoft Purview overview"
    url: "https://learn.microsoft.com/purview/copilot-in-purview-agents-overview"
    kind: "learn"
  - title: "Learn about Security Copilot for Microsoft 365 E5 and E7 included customers"
    url: "https://learn.microsoft.com/copilot/security/security-copilot-inclusion"
    kind: "learn"
  - title: "Manage security compute unit usage in Security Copilot"
    url: "https://learn.microsoft.com/copilot/security/manage-usage"
    kind: "learn"
  - title: "Learn about Microsoft Purview billing models"
    url: "https://learn.microsoft.com/purview/purview-billing-models"
    kind: "learn"
  - title: "Search the audit log"
    url: "https://learn.microsoft.com/purview/audit-search"
    kind: "learn"
  - title: "Audit log activities"
    url: "https://learn.microsoft.com/purview/audit-log-activities"
    kind: "learn"
  - title: "Search-UnifiedAuditLog"
    url: "https://learn.microsoft.com/powershell/module/exchangepowershell/search-unifiedauditlog"
    kind: "learn"
videos: []
related: ["microsoft-purview-dspm-new-microsoft-purview-data-security-posture-management-experience","microsoft-purview-data-loss-prevention-data-security-triage-agent-summaries-and-categoriza","auditing","sensitivity-labels","agent-identity"]
controls:
  - governs: "Whether the Data Security Posture Agent is active in the tenant"
    scope: "tenant"
    ui:
      surface: "Microsoft Purview portal"
      path: "Agents > Explore agents > View agent > ellipsis next to Edit agent > Deactivate agent"
      docs: "https://learn.microsoft.com/purview/copilot-in-purview-posture-agent-get-started"
    api: null
    note: "Deactivate stops the agent without removing it; Remove agent deletes it. Needs the roles the page lists; one agent instance per tenant."
  - governs: "Security compute unit consumption by the agent"
    scope: "tenant"
    ui:
      surface: "Microsoft Purview portal"
      path: "Agents > Explore agents > View agent > Performance"
      docs: "https://learn.microsoft.com/purview/copilot-in-purview-posture-agent-get-started"
    api: null
    note: "Shows consumption only. In the Security Copilot portal, changing provisioned or overage SCUs requires an Azure capacity owner or contributor who is also a Security Copilot owner."
  - governs: "Audit records of agent runs and result views"
    scope: "tenant"
    ui:
      surface: "Microsoft Purview portal"
      path: "Audit > Search"
      docs: "https://learn.microsoft.com/purview/audit-search"
    api:
      kind: "powershell"
      call: "Search-UnifiedAuditLog -StartDate <start> -EndDate <end> -Operations AgentRan"
      docs: "https://learn.microsoft.com/powershell/module/exchangepowershell/search-unifiedauditlog"
    note: "Needs the Audit Logs or View-Only Audit Logs role. Other agent operations include AgentResultViewed and AgentRunDeleted."
confidence: "high"
created: "2026-11-23"
updated: "2026-11-23"
roadmapModified: "2026-08-10T22:43:02"
changes:
  - date: "2026-11-23"
    note: "First briefing for the Data Security Posture Agent in DSPM: licensing, SCU metering, roles, controls and the preview/launched difference."
  - date: "2026-11-23"
    note: "Checked against Microsoft Learn by gpt-6.1-sol: held: 4 of 77 statements contradicted, 0 unconfirmed; taken offline until corrected"
  - date: "2026-11-23"
    note: "Correction: risk lowered to low, SCU capacity role and E5 inclusion wording fixed, limits and administrative-unit caveats added, deployment path completed and checklist limited to tabled controls."
  - date: "2026-11-23"
    note: "Checked against Microsoft Learn by gpt-6.1-sol: passed with 0 of 102 statements not yet confirmed"
version: 2
verification:
  status: "verified-with-gaps"
  date: "2026-11-23"
  version: 2
  model: "gpt-6.1-sol"
  engine: "copilot"
  claims: 102
  confirmed: 101
  unconfirmed: 0
  contradicted: 1
  attempts: 0
  hash: "4486d361663d1b8bbac108887d14ca71"
---

## What's changing

The Data Security Posture Agent is a Microsoft Security Copilot agent in Data Security Posture Management (DSPM) in Microsoft Purview. A data security admin describes in plain language the data they want to find, and the agent searches for it and assesses the associated risk. Learn describes it as a quick, intent-based search for pre-investigation checks, not for formal cases that still need eDiscovery, audit or Data Security Investigations.

The agent searches files in SharePoint and OneDrive, messages in Teams, emails in Exchange and interactions with Copilot. Searches run from DSPM > Discover > Asset explorer > Agent tab, with preconfigured or custom prompts; a custom prompt needs data sources added first. Results show a count of matched items with any applied sensitivity labels and a risk level, and **View Insights** produces a report that can be downloaded as a Word document. Prompts can also be scheduled daily, weekly or monthly. The agent is exclusive to the current version of DSPM and is not available in DSPM (classic).

The roadmap record lists the item as Launched, with release phases General Availability and Preview, a preview date of December CY2025 and a target date of June CY2026, for Worldwide (Standard Multi-Tenant) on the Web. Learn pages read in November 2026 still say the agent is in preview, so the two sources differ on its release stage. No Message Center post was supplied for this item.

## Why it matters

This gives a data security team a way to ask where a kind of sensitive content sits across Microsoft 365 without building keyword or sensitive-information-type rules first. The cost of that convenience is a new metered workload (SCUs) and a new set of people who can see matched content.

Microsoft's Security Copilot inclusion page says agents are not enabled automatically and an organisation must set them up and deploy them, and the agent page says it must be activated and configured before use. If nobody acts, the agent is therefore not deployed. The decisions that matter are who may view and label what it finds, which identity it runs under, and how much SCU capacity it may draw on.

## Risk assessment

**Data exposure**
- What a person sees depends on their role. Learn's role table lets Compliance Admin, Security Reader, Data Security Viewer, Data Security AI Viewer and Data Security AI Admin run the agent and view the summary only, while Data Classification Content Viewer, Purview Content Analyst, Data Security Investigation Investigator and Data Security Investigation Admin can also view the matched file and label it.
- Learn's Security Copilot inclusion page says Relevant Customer Data may be copied, processed and stored by Security Copilot to provide responses, and the agent needs Microsoft 365 data sharing enabled in Security Copilot.

**Security & identity**
- The agent is deployed either with its own Microsoft Entra agent identity (recommended, and the deploying account needs the Role Management role) or with the identity of the admin who sets it up, in which case all activities are associated with that user.
- Learn's agents overview says agents aren't administrative unit aware, so do not assume a restricted admin's searches are limited to their units. The DSPM considerations page separately says restricted administrators viewing asset explorer see data for users in their assigned administrative units only; the relationship to agent searches is unclear.

**Autonomy & actions**
- A scheduled prompt re-runs daily, weekly or monthly without a person starting it, and each run consumes SCUs.
- Labelling is a user action on the results: up to 10 files at a time, by users holding the Data Classification Content Viewer or Purview Content Analyst role.

**Change & support**
- Learn marks the agent as preview, so behaviour and limits can change. Results can be partial: in some cases the agent scans at most 5 GB or 10K items and returns only the top 1,000 matched items, and only two prompts can run concurrently. The DSPM considerations page instead says search supports content up to 1 GB of data; Microsoft does not reconcile these limits.
- Vague or contradictory prompts return an invalid result with a reason, which is a likely source of support questions.

## Cost and licensing

**Licence.** Learn's get-started page says the agent requires both the standard per-seat licensing model and the pay-as-you-go billing model, and that the organisation must be licensed for Microsoft 365 E5 with security compute units (SCUs) provisioned.

**Meter.** The agent consumes SCUs every time it runs, based on the complexity of the analysis, and SCUs must be provisioned for it to work. Consumption can be tracked on the agent's Performance tab and in the Security Copilot usage monitoring tool. A per-run SCU figure for this agent is not yet published.

**Included capacity and limits.** Microsoft's Security Copilot inclusion page says Microsoft 365 E5 and E7 customers have 400 SCUs each month for every 1,000 paid user licences, up to 10,000 SCUs each month, at no additional cost, and covers all agentic scenarios in Microsoft Purview, including this Security Copilot agent. Allocations reset monthly and do not roll over. The same page says usage beyond the allocation will be throttled at a future date, with an option to scale at $6 USD for each SCU on a pay-as-you-go basis at that time. For provisioned capacity, Learn says overage SCUs can be set as unlimited or to a maximum, and that when provisioned and overage SCUs are exhausted analysts see an error and cannot submit more prompts.

Admin time to deploy, assign roles and review results is the other cost.

## Scope

**Who and what.** Microsoft 365 E5 with SCUs provisioned, per the licence statement above. Learn lists the roles for deploying the agent, and a separate table of roles for running it and viewing results; deploying with an agent identity needs the Role Management role. There can be only one instance of the agent in a tenant.

**Prerequisites.** The tenant must be onboarded to Microsoft Security Copilot, Microsoft 365 data sharing must be enabled in Security Copilot, and the Microsoft Purview plug-in must be enabled in Security Copilot. To see the latest status of labels applied to files, auditing must be turned on.

**Where.** Content in SharePoint, OneDrive, Teams, Exchange and Copilot interactions. The roadmap lists Worldwide (Standard Multi-Tenant) and the Web platform. The agent is available only in the current version of DSPM, not DSPM (classic).

**Rollout.** Roadmap status Launched; preview date December CY2025, target June CY2026.

## Governance guidance

### Before rollout
- Check SCU capacity with the Security Copilot capacity owner before the first scheduled prompt.

### At rollout
- Deploy from Agents > Explore agents > agent > Add > Setup > Deploy agent > Create and use agent identity (recommended) or Assign and use my identity, and record which identity option was chosen.
- Start with prompts restricted to named users, groups or sites, which Learn says are more efficient than tenant-wide searches.
- Hold off scheduling prompts until a few manual runs show the SCU cost.

### After rollout
- Review SCU consumption on the agent's Performance tab each month against the SCUs you can draw on.
- Search the audit log for the agent's activities, such as AgentRan and AgentResultViewed, to see who ran it and viewed results.
- Deactivate the agent if SCU use or access to matched content is not acceptable.
- Re-read the Learn page and Message center for any change to the preview label.

## Governance controls

<p class="controls__lead">Where each control lives. The left column says what the setting decides and how far it reaches; the middle gives the admin centre and the exact path; the right gives the script, API or command that does the same. <em>Not yet documented</em> means Microsoft has not published a control for that surface, so there is nothing to configure yet.</p>

<table class="controls">
<thead><tr><th>Control</th><th>Admin UI</th><th>API and automation</th></tr></thead>
<tbody>
<tr><td data-label="Control"><strong>Whether the Data Security Posture Agent is active in the tenant</strong><br><small>Tenant</small><br><small class="controls__note">Deactivate stops the agent without removing it; Remove agent deletes it. Needs the roles the page lists; one agent instance per tenant.</small></td><td data-label="Admin UI"><strong>Microsoft Purview portal</strong><br>Agents › Explore agents › View agent › ellipsis next to Edit agent › Deactivate agent <a href="https://learn.microsoft.com/purview/copilot-in-purview-posture-agent-get-started" rel="noopener" class="controls__docs">Learn</a></td><td data-label="API and automation"><em class="controls__gap">Not yet documented</em></td></tr>
<tr><td data-label="Control"><strong>Security compute unit consumption by the agent</strong><br><small>Tenant</small><br><small class="controls__note">Shows consumption only. In the Security Copilot portal, changing provisioned or overage SCUs requires an Azure capacity owner or contributor who is also a Security Copilot owner.</small></td><td data-label="Admin UI"><strong>Microsoft Purview portal</strong><br>Agents › Explore agents › View agent › Performance <a href="https://learn.microsoft.com/purview/copilot-in-purview-posture-agent-get-started" rel="noopener" class="controls__docs">Learn</a></td><td data-label="API and automation"><em class="controls__gap">Not yet documented</em></td></tr>
<tr><td data-label="Control"><strong>Audit records of agent runs and result views</strong><br><small>Tenant</small><br><small class="controls__note">Needs the Audit Logs or View-Only Audit Logs role. Other agent operations include AgentResultViewed and AgentRunDeleted.</small></td><td data-label="Admin UI"><strong>Microsoft Purview portal</strong><br>Audit › Search <a href="https://learn.microsoft.com/purview/audit-search" rel="noopener" class="controls__docs">Learn</a></td><td data-label="API and automation"><strong>PowerShell</strong><br><code>Search-UnifiedAuditLog -StartDate &lt;start&gt; -EndDate &lt;end&gt; -Operations AgentRan</code> <a href="https://learn.microsoft.com/powershell/module/exchangepowershell/search-unifiedauditlog" rel="noopener" class="controls__docs">Learn</a></td></tr>
</tbody>
</table>

Deactivate agent stops the agent working and does not remove it; Remove agent deletes it from Microsoft Purview, and it is re-enabled by following the enabling steps again. Microsoft Learn documents no API, PowerShell cmdlet or CLI command for deploying, deactivating or removing this agent, or for reading its SCU use, at the time of writing (November 2026).

Who can run the agent, view content snippets, view matched files and label files is set by Purview roles rather than by an agent setting: see the role table on the get-started page. The size of the SCU allocation is managed in Security Copilot, not in the agent's settings.

## Open questions

- When will Learn drop the preview label, given the roadmap lists the item as Launched with a June CY2026 target? Watch the get-started page and Message center.
- How many SCUs does a typical run of this agent consume? Watch the get-started page.
- Are searches by an administrative-unit-restricted admin limited to their units, given Learn says agents aren't administrative unit aware?
- Will Microsoft document an API or PowerShell command for deploying or deactivating the agent?

<!-- rationale
risk: Low. Nobody can use the agent until an administrator deploys it; review content access and SCU consumption before opting in.
cost: Variable. The agent consumes security compute units (SCUs) every time it runs, on top of the Microsoft 365 E5 licence Learn names; a per-run SCU figure for this agent is not yet published.
impact: Low. It is aimed at data security admins and is run from the Microsoft Purview portal; the roadmap lists the Web platform only.
-->

<!-- verifier-findings (2026-11-23, verified-with-gaps; checked by gpt-6.1-sol)
The independent check found fault only with the statements below. This is a correction: change what they name and carry the rest of the page over unchanged.
These are minor and do not hold the page. Where removing the statement, or rewording it in the words the fix gives, settles one, do that; otherwise leave it as it is. A minor finding may also add a source link it names for a statement already on the page. It adds no row and nothing that needs research.
- [contradicted, minor] Governance guidance; Governance controls / consistency: Every control the governance checklist asks readers to check or configure appears in the controls table. | Found: Checklist: 'Check SCU capacity'; 'Deploy ... record which identity option was chosen'; 'Start with prompts restricted'; 'Hold off scheduling prompts'. Table: agent deactivation, consumption monitoring, audit search. | Fix: The Before rollout capacity check and the At rollout deployment/identity, prompt-scope and scheduling steps have no corresponding controls-table rows. Remove those checklist steps or recast them as planning advice outside the checklist; do not add control rows in this correction.
-->
