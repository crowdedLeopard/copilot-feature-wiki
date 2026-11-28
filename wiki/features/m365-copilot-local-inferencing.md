---
title: "Microsoft 365 Copilot: local inferencing in Australia, India, the UAE, the UK and the US"
slug: "m365-copilot-local-inferencing"
roadmapId: 571886
topic: "m365-copilot"
products: ["Microsoft Copilot (Microsoft 365)"]
summary: "Microsoft plans to run AI inferencing for supported Copilot interactions inside the local geography in five countries. Microsoft has published no admin setting, default or licence detail yet, so the action is to review."
status: "in-development"
releasePhase: ["General Availability"]
clouds: ["Worldwide (Standard Multi-Tenant)"]
platforms: ["Android","Desktop","iOS","Mac","Web"]
targetDate: "December CY2026"
previewDate: null
risk: "low"
cost: "low"
impact: "low"
defaultState: "unknown"
action: "review"
licensing:
  model: "per-user"
  notes: "Microsoft Learn says users need a Microsoft Copilot licence and a qualifying prerequisite licence. No licence or price specific to local inferencing is published."
audiences: ["m365-admin","compliance","security","service-owner"]
tags: ["m365-copilot","copilot-chat","data-residency","data-governance","copilot"]
sources:
  - title: "Microsoft 365 Roadmap: Microsoft Copilot (Microsoft 365): Local inferencing"
    url: "https://www.microsoft.com/microsoft-365/roadmap?id=571886"
    kind: "roadmap"
  - title: "Data, Privacy, and Security for Microsoft Copilot"
    url: "https://learn.microsoft.com/copilot/plan/microsoft-365-copilot-privacy"
    kind: "learn"
  - title: "Data Location FAQ"
    url: "https://learn.microsoft.com/microsoft-365/enterprise/m365-dr-data-location-faq?view=o365-worldwide"
    kind: "learn"
  - title: "Data Residency for Microsoft 365 Copilot (including Cowork)"
    url: "https://learn.microsoft.com/microsoft-365/enterprise/m365-dr-service-copilot"
    kind: "learn"
  - title: "Microsoft Copilot requirements"
    url: "https://learn.microsoft.com/copilot/plan/microsoft-copilot-requirements"
    kind: "learn"
  - title: "License options for Microsoft Copilot"
    url: "https://learn.microsoft.com/copilot/plan/copilot-license-options"
    kind: "learn"
  - title: "Configure Microsoft Copilot settings in the Microsoft 365 admin center"
    url: "https://learn.microsoft.com/copilot/implement/configure-copilot-admin-center"
    kind: "learn"
  - title: "Flex routing (EU and EFTA)"
    url: "https://learn.microsoft.com/copilot/manage/copilot-flex-routing"
    kind: "learn"
videos: []
related: []
controls:
  - governs: "Tenant choice of local inferencing for Copilot"
    scope: "tenant"
    ui: null
    api: null
    note: "Not yet documented. The Copilot settings page lists no setting for inferencing location. Flex routing exists for EU Data Boundary tenants only."
confidence: "low"
created: "2026-11-21"
updated: "2026-11-21"
roadmapModified: "2026-09-23T22:59:12"
changes:
  - date: "2026-11-21"
    note: "First briefing for this item: the roadmap describes local inferencing in five countries, and Microsoft Learn documents no admin setting, default or licence detail yet."
  - date: "2026-11-21"
    note: "Checked against Microsoft Learn by gpt-6.1-sol: passed: all 33 statements confirmed"
  - date: "2026-11-28"
    note: "Checked against Microsoft Learn by gpt-6.1-sol: passed: all 39 statements confirmed"
version: 1
verification:
  status: "verified"
  date: "2026-11-28"
  version: 1
  model: "gpt-6.1-sol"
  engine: "copilot"
  claims: 39
  confirmed: 39
  unconfirmed: 0
  contradicted: 0
  attempts: 0
  hash: "0bdce7344b3c0a1da76277de3808e070"
---

## What's changing

Microsoft plans to let AI inferencing for supported Copilot interactions happen within the applicable local geography. The roadmap item names Australia, India, the United Arab Emirates, the United Kingdom and the United States as the launch countries, and describes inferencing as the step in which an AI model executes a prompt to produce an output or response.

Microsoft Learn does not describe this feature yet, so what follows about its behaviour is the roadmap's description. The roadmap does not say which Copilot interactions are "supported", which tenants qualify, whether it is on by default, or whether an administrator can change it.

For context, Microsoft Learn's Copilot privacy page currently says that Copilot calls to the LLM are routed to the closest data centres in the region but can also call into other regions where capacity is available during high utilisation periods, and that customers outside the EU may have their queries processed in the US, EU or other regions (at the time of writing, November 2026). Whether local inferencing changes either statement is not documented.

The roadmap record shows status In development, a target of December CY2026, release phase General Availability, the Worldwide (Standard Multi-Tenant) cloud, and the Android, Desktop, iOS, Mac and Web platforms. The target is a plan, not an availability date.

## Why it matters

For organisations in these five countries, where a prompt is processed is a sovereignty and regulatory question, and Copilot's current documentation describes LLM routing as regional with possible spill-over to other regions. A commitment to local inferencing could change what a compliance owner can tell a regulator, which is why this item is worth tracking even though nothing is yet documented to change for users.

Microsoft has not stated what happens on arrival, so the wiki cannot say that tenants will get it automatically or that they must opt in. Treat the item as something to review: confirm with Microsoft what "supported Copilot interactions" covers before relying on it in a compliance statement.

## Risk assessment

**Data exposure**
- The roadmap describes processing happening inside the local geography, which narrows where prompts are processed. It does not say anything about at-rest storage, which Microsoft Learn documents separately: interaction content is stored at rest in the relevant Local Region Geography under the tenant's data residency configuration.
- "Supported Copilot interactions" is not defined, so interactions outside that set may still be processed under the regional routing the Copilot privacy page describes.

**Security & identity**
- No change is described: the roadmap item mentions no new permissions, identities or connections.

**Autonomy & actions**
- No change is described: the roadmap item concerns where inferencing runs, not what Copilot can do.

**Change & support**
- A compliance statement written on the strength of the roadmap headline could overstate what Microsoft commits to. Hold it until Microsoft publishes the scope.
- Support teams in the five countries may be asked whether processing is local. Microsoft has not published how an administrator can verify where a given interaction was processed.

## Cost and licensing

Microsoft Learn's Microsoft Copilot requirements page says users need a Microsoft Copilot licence and a qualifying prerequisite licence, and that Microsoft Copilot Chat is available to users with an eligible Microsoft 365 subscription. The roadmap item and Learn describe no separate licence for local inferencing.

A price, meter or credit rate specific to local inferencing is not yet published. The cost the sources show is indirect: administrator and compliance time to assess scope.

## Scope

The roadmap item lists Australia, India, the United Arab Emirates, the United Kingdom and the United States as the launch countries for supported Copilot interactions. The record's cloud is Worldwide (Standard Multi-Tenant), and its platforms are Android, Desktop, iOS, Mac and Web.

Whether the country is decided by the tenant's geography, the user's location or another attribute is not stated. The roadmap names no prerequisites, roles or rollout mechanism, and Microsoft Learn describes none. The target is December CY2026 and the status is In development.

## Governance guidance

### Before rollout
- Ask the compliance and legal owners in the five countries whether any current regulatory or contractual requirement depends on where Copilot inferencing happens.
- Record the current position from the Copilot privacy page and the data location FAQ, so there is a baseline to compare with once Microsoft publishes details.
- Watch Message center and the roadmap item for the scope of "supported Copilot interactions", the default and any admin setting.

### At rollout
- Check the Copilot settings page in the Microsoft 365 admin center for any new setting about processing location, using the table below as the reference for what is documented today.
- Confirm with Microsoft or your account team which interactions and tenants are covered before telling users or regulators that processing is local.

### After rollout
- Compare Microsoft's published scope with the commitments in your compliance documentation and correct any statement that went further than Microsoft's.
- Re-read the Data Location FAQ and Copilot privacy page, which describe storage and routing today, for changes that follow the launch.

## Governance controls

<p class="controls__lead">Where each control lives. The left column says what the setting decides and how far it reaches; the middle gives the admin centre and the exact path; the right gives the script, API or command that does the same. <em>Not yet documented</em> means Microsoft has not published a control for that surface, so there is nothing to configure yet.</p>

<table class="controls">
<thead><tr><th>Control</th><th>Admin UI</th><th>API and automation</th></tr></thead>
<tbody>
<tr><td data-label="Control"><strong>Tenant choice of local inferencing for Copilot</strong><br><small>Tenant</small><br><small class="controls__note">Not yet documented. The Copilot settings page lists no setting for inferencing location. Flex routing exists for EU Data Boundary tenants only.</small></td><td data-label="Admin UI"><em class="controls__gap">Not yet documented</em></td><td data-label="API and automation"><em class="controls__gap">Not yet documented</em></td></tr>
</tbody>
</table>

At the time of writing (November 2026), the Copilot settings page for the Microsoft 365 admin center lists settings for user access, data access, Copilot actions and other settings, and none of them is about where inferencing happens. The role it names for managing Copilot settings is an appropriate admin role such as AI Administrator.

Microsoft documents flex routing as a tenant setting for EU Data Boundary tenants only; it is not a control for the five countries in this item.

## Open questions

- Which Copilot interactions, apps and models count as "supported" for local inferencing, and which are excluded? Watch the Microsoft 365 Roadmap item and Message center.
- Is local inferencing on by default for tenants in the five countries, or does an administrator choose it? Microsoft has not stated a default.
- Does it apply by tenant geography, user location or Preferred Data Location for Multi-Geo tenants?
- Will Microsoft document an admin setting, audit evidence or a report showing where an interaction was processed?
- Will local inferencing carry any licence or meter beyond the existing Microsoft Copilot licence requirements?

<!-- rationale
risk: Low. The roadmap item describes processing moving closer to the tenant, not new data access or autonomy. Microsoft has not stated a default, so this rates today's behaviour continuing.
cost: Low. No licence or meter specific to this feature is published; the known cost is admin and compliance time. Microsoft Copilot's existing licence requirements still apply.
impact: Low. Users are not described as seeing any change; the people who notice are administrators and compliance owners in tenants that rely on where inferencing happens.
-->
