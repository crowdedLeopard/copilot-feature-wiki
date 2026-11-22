---
title: "Microsoft 365 Copilot: graph connector prompts in the Prompt Gallery for Copilot Chat"
slug: "m365-copilot-discover-graph-connector-prompts-in-the-prompt-gallery-when-using-copilot-cha"
roadmapId: 501448
topic: "m365-copilot"
products: ["Microsoft Copilot (Microsoft 365)"]
summary: "Roadmap item: graph connector prompts are planned for the Prompt Gallery in Copilot Chat. No admin control or default is published; Copilot Chat is included with eligible Microsoft 365 licences, but licensing for these prompts is not yet published."
status: "in-development"
releasePhase: ["General Availability"]
clouds: ["Worldwide (Standard Multi-Tenant)"]
platforms: ["Android","Desktop","iOS","Linux","Mac","Web"]
targetDate: "June CY2026"
previewDate: null
risk: "low"
cost: "low"
impact: "low"
defaultState: "unknown"
action: "review"
licensing:
  model: "included"
  notes: "Copilot Chat is included with eligible Microsoft 365 licences; licensing specific to these new prompts is not yet published. Connector licensing is published separately: federated connectors need a Microsoft 365 Copilot add-on licence (or Microsoft 365 E7)."
audiences: ["m365-admin","change-adoption","end-user"]
tags: ["m365-copilot","copilot-chat","copilot-connectors","prompt-gallery","adoption"]
sources:
  - title: "Understand Prompt Gallery in Copilot"
    url: "https://learn.microsoft.com/copilot/manage/copilot-prompt-gallery"
    kind: "learn"
  - title: "Export prompts that users saved, liked, or shared in Copilot Prompt Gallery"
    url: "https://learn.microsoft.com/copilot/manage/copilot-prompt-gallery-export-prompts"
    kind: "learn"
  - title: "Prerequisites for deploying connectors"
    url: "https://learn.microsoft.com/microsoft-365/copilot/connectors/prerequisites"
    kind: "learn"
  - title: "Copilot connectors overview"
    url: "https://learn.microsoft.com/microsoft-365/copilot/connectors/overview"
    kind: "learn"
  - title: "Microsoft Copilot overview"
    url: "https://learn.microsoft.com/copilot/plan/copilot-overview"
    kind: "learn"
  - title: "Microsoft 365 Roadmap item 501448"
    url: "https://www.microsoft.com/microsoft-365/roadmap?id=501448"
    kind: "roadmap"
videos: []
related: ["m365-copilot-copilot-extensibility-admins-can-govern-and-manage-federated-copilot-connecto","m365-copilot-federated-copilot-connectors-in-m365-copilot","microsoft-copilot-microsoft-m365-delegated-prompt-publishing-for-organization-prompts","m365-admin-center-usage-reports-m365-copilot-connectors"]
controls:
  - governs: "Whether graph connector prompts appear in the Prompt Gallery"
    scope: "tenant"
    ui: null
    api: null
    note: "No switch documented for this feature; connector deployment is a separate control."
confidence: "medium"
created: "2026-11-22"
updated: "2026-11-22"
roadmapModified: "2026-04-02T23:15:15"
changes:
  - date: "2026-11-22"
    note: "First briefing: roadmap item for graph connector prompts in the Prompt Gallery; Microsoft Learn documents no control, default or licence for it yet."
  - date: "2026-11-22"
    note: "Checked against Microsoft Learn by gpt-6.1-sol: held: 2 of 41 statements contradicted, 1 unconfirmed; taken offline until corrected"
  - date: "2026-11-22"
    note: "Corrected after the independent check: removed the unsupported 'not a new data path' claim, added the Microsoft 365 E7 alternative, removed four checklist steps without control rows, and restated licensing."
  - date: "2026-11-22"
    note: "Checked against Microsoft Learn by gpt-6.1-sol: held: 1 of 43 statements contradicted, 1 unconfirmed; taken offline until corrected"
version: 2
verification:
  status: "held"
  date: "2026-11-22"
  version: 2
  model: "gpt-6.1-sol"
  engine: "copilot"
  claims: 43
  confirmed: 41
  unconfirmed: 1
  contradicted: 1
  attempts: 2
  hash: "657693ec87826595826c1141d0324388"
---

## What's changing

The roadmap item states that popular graph connector prompts will become available in the Prompt Gallery for use in Copilot Chat. The record gives no further detail: it does not say which connectors are covered, who writes the prompts, or whether they appear for every user.

Microsoft Learn describes the Prompt Gallery as a catalogue of Microsoft-curated prompts (under **Suggested**), prompts users save (under **Your Prompts**) and prompts shared by team (under **Teams**), available within Microsoft Copilot or Copilot Chat. Learn does not yet describe graph connector prompts in it, so what follows about this feature's behaviour is the roadmap's description only.

The record lists the item as In development, with a target of June CY2026, release phase General Availability, in Worldwide (Standard Multi-Tenant) on Android, Desktop, iOS, Linux, Mac and Web. That target month has passed and the record still shows In development (last modified 2026-04-02), so treat the date as unconfirmed until the status changes.

## Why it matters

The roadmap describes extra graph connector prompts in the existing Prompt Gallery for use in Copilot Chat; it does not describe changes to data access. If it reaches your tenant, users may start asking Copilot questions about content indexed from external systems, so the quality of connector permissions and of the indexed content matters more than it did.

Microsoft has not stated what happens on arrival, so base planning on no source saying that existing behaviour changes. The practical task is to know which connectors you have deployed and who is licensed to use them before users are prompted towards them.

## Risk assessment

**Data exposure**
- The roadmap describes prompts, not new data access. Answers to a connector prompt can only draw on whatever connector content Copilot already reaches for that user; the roadmap does not say otherwise.
- Prompt text a user saves or shares from the gallery is stored in collections in the Microsoft 365 Substrate data store, within the tenant boundary, according to the Prompt Gallery page.

**Security & identity**
- No new identity or permission model is described. Whether prompts appear for users who lack access to the underlying connector is not stated.

**Autonomy & actions**
- Nothing in the record describes autonomous behaviour or write actions; the item adds prompts to a gallery.

**Change & support**
- Users may see connector prompts they cannot use if they hold no qualifying licence, which can generate support questions. Federated connectors need a Microsoft 365 Copilot add-on licence or Microsoft 365 E7, per the connector prerequisites page.
- No admin setting for this feature is documented, so communication to users is the available lever.

## Cost and licensing

Copilot Chat is included with eligible Microsoft 365 licences; licensing specific to these new prompts is not yet published.

Connector licensing is published separately on the connectors prerequisites page. It states that federated Copilot connectors are available only to tenants and users with a Microsoft 365 Copilot add-on licence (or Microsoft 365 E7), and that if your organisation has Microsoft 365 Copilot licences, connector grounding in Copilot is included and no extra charges apply. Whether the new prompts are limited to any connector type or licence is not yet published.

The indirect cost is admin and communication time.

## Scope

The record lists Worldwide (Standard Multi-Tenant) only, with platforms Android, Desktop, iOS, Linux, Mac and Web, and release phase General Availability. The record does not list GCC, GCC High or DoD; that is not a statement that they are excluded.

Which users see the prompts, and whether a connector must be deployed or a licence held first, is not stated. Microsoft Learn says an AI administrator in the Microsoft 365 admin center is needed to configure and deploy Copilot connectors.

## Governance guidance

### Before rollout
- Watch the roadmap item and Message center for a status change from In development.

### At rollout
- Tell service desk and champions that suggested prompts for connected data may appear in Copilot Chat, and who is licensed to use them.

### After rollout
- Check the Prompt Gallery in a test account with and without a Copilot licence to see who the connector prompts appear for, and record the result.

## Governance controls

<p class="controls__lead">Where each control lives. The left column says what the setting decides and how far it reaches; the middle gives the admin centre and the exact path; the right gives the script, API or command that does the same. <em>Not yet documented</em> means Microsoft has not published a control for that surface, so there is nothing to configure yet.</p>

<table class="controls">
<thead><tr><th>Control</th><th>Admin UI</th><th>API and automation</th></tr></thead>
<tbody>
<tr><td data-label="Control"><strong>Whether graph connector prompts appear in the Prompt Gallery</strong><br><small>Tenant</small><br><small class="controls__note">No switch documented for this feature; connector deployment is a separate control.</small></td><td data-label="Admin UI"><em class="controls__gap">Not yet documented</em></td><td data-label="API and automation"><em class="controls__gap">Not yet documented</em></td></tr>
</tbody>
</table>

No tenant switch, per-connector setting or API for graph connector prompts in the Prompt Gallery is documented at the time of writing (November 2026), so the row above is empty on both sides. Connectors themselves are deployed and governed separately by an AI administrator in the Microsoft 365 admin center.

For monitoring, the Prompt Gallery page says admins can track saved, liked and shared prompts of a specific user and prompts shared with a specific team; the export is a PowerShell script run by a Global Administrator and does not govern the feature.

## Open questions

- Which connectors and connector types will the prompts cover, and will federated connectors be included? Watch the roadmap item and the Prompt Gallery page.
- Is the feature on by default, and can an administrator turn it off or limit it to a group? Microsoft has not stated either.
- Do the prompts appear for users who have no licence or access to the connector behind them?
- Is a graph connector the same thing as what Microsoft Learn now calls a Microsoft 365 Copilot connector? Confirm on the connectors documentation.
- Will the June CY2026 target be revised, given the item is still In development?

<!-- rationale
risk: Low. The roadmap describes only extra prompts in an existing gallery; no new data source, agent or action is described. Connector data stays governed by the connectors already deployed.
cost: Low. No licence or meter specific to this feature is published; the only known cost is admin time, plus the Copilot licence connector grounding already depends on.
impact: Low. Users with Copilot Chat would see extra suggested prompts; nothing in the record says existing behaviour changes, and administrators have nothing to configure so far.
-->

<!-- verifier-findings (2026-11-22, held; checked by gpt-6.1-sol)
The independent check found fault only with the statements below. This is a correction: change what they name and carry the rest of the page over unchanged.
Correct each of these with the smallest change that removes the fault: delete the statement, narrow it, or put the finding's own "Found" text or worded replacement in its place. Where a fix asks for more than that (a new row, an explanation, further references), do only the part that removes the fault. A correction adds no control rows.
- [contradicted, blocker] Governance controls / role: Connectors themselves are governed by an AI administrator in the Microsoft 365 admin center. | Found: To manage federated connectors, you need one of the following administrator roles: Global Administrator; Search Administrator. | Fix: Narrow the sentence to the operation supported by the cited prerequisites page: 'Connectors themselves are deployed separately by an AI administrator in the Microsoft 365 admin center.' Remove 'and governed'; deployment prerequisites do not establish the role for every connector governance operation. | Source: https://learn.microsoft.com/microsoft-365/copilot/connectors/manage-federated-connectors
- [unsupported, blocker] Risk assessment: Data exposure; rationale: risk / applicability: Answers to the new connector prompts can only draw on connector content Copilot already reaches for the user, so existing deployed connectors completely determine their data reach. | Found: Searched: Copilot connector prompts Prompt Gallery answers existing data access permissions connector content. Read connectors overview and Prompt Gallery. Permission filtering is stated, but no text establishes unchanged connector reach or the new prompts' retrieval mechanism. | Fix: Replace the second sentence of the Data exposure bullet with 'The connectors overview states that users only see content they are authorised to access.' Replace the last sentence of the risk rationale with the same narrower statement. Cite https://learn.microsoft.com/microsoft-365/copilot/connectors/overview; do not infer unchanged data reach from roadmap silence.
-->
