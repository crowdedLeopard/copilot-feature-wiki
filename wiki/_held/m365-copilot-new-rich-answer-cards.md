---
title: "Microsoft Copilot: new rich answer cards for weather, sports, finance, images, video, places and news"
slug: "m365-copilot-new-rich-answer-cards"
roadmapId: 567008
topic: "m365-copilot"
products: ["Microsoft Copilot (Microsoft 365)"]
summary: "Microsoft is rolling out model-driven answer cards in Microsoft Copilot on all surfaces. Learn has no page for them yet; the Allow web search in Copilot policy is the nearest documented control. Plan a user briefing."
status: "rolling-out"
releasePhase: ["General Availability"]
clouds: ["Worldwide (Standard Multi-Tenant)"]
platforms: ["Desktop","Mobile","Teams and Surface Devices","Web"]
targetDate: "September CY2026"
previewDate: null
risk: "low"
cost: "low"
impact: "medium"
defaultState: "unknown"
action: "prepare"
licensing:
  model: "included"
  notes: "Learn's Microsoft Copilot requirements page says Microsoft Copilot Chat is available to users with an eligible Microsoft 365 subscription, and a Microsoft Copilot licence is required for licensed Microsoft Copilot capabilities. No licence or meter specific to answer cards is published."
audiences: ["m365-admin","service-owner","change-adoption"]
tags: ["copilot-chat","m365-copilot","cloud-policy","web-search"]
sources:
  - title: "Microsoft 365 Roadmap 567008"
    url: "https://www.microsoft.com/microsoft-365/roadmap?id=567008"
    kind: "roadmap"
  - title: "Microsoft 365 Copilot release notes"
    url: "https://learn.microsoft.com/microsoft-365/copilot/release-notes"
    kind: "learn"
  - title: "Data, privacy, and security for web search in Microsoft Copilot and Microsoft Copilot Chat"
    url: "https://learn.microsoft.com/copilot/plan/manage-public-web-access"
    kind: "learn"
  - title: "Microsoft Copilot requirements"
    url: "https://learn.microsoft.com/copilot/plan/microsoft-copilot-requirements"
    kind: "learn"
  - title: "Overview of Cloud Policy service for Microsoft 365"
    url: "https://learn.microsoft.com/microsoft-365-apps/admin-center/overview-cloud-policy"
    kind: "learn"
  - title: "Supported Copilot resources for Tenant Configuration Management (preview)"
    url: "https://learn.microsoft.com/graph/utcm-copilot-resources"
    kind: "learn"
  - title: "Create configurationMonitor"
    url: "https://learn.microsoft.com/graph/api/configurationmanagement-post-configurationmonitors?view=graph-rest-beta"
    kind: "learn"
videos: []
related: ["cloud-policy","m365-copilot-domain-exclusion-web-grounding","m365-copilot-code-blocks-in-m365-copilot"]
controls:
  - governs: "Whether Copilot can use web search, the nearest documented control to answer cards"
    scope: "tenant"
    ui:
      surface: "Microsoft 365 Apps admin center"
      path: "Customization > Policy Management > policy configuration > Choose the scope > Configure Settings > Allow web search in Copilot"
      docs: "https://learn.microsoft.com/microsoft-365-apps/admin-center/overview-cloud-policy"
    api:
      kind: "graph"
      call: "POST /beta/admin/configurationManagement/configurationMonitors"
      docs: "https://learn.microsoft.com/graph/api/configurationmanagement-post-configurationmonitors?view=graph-rest-beta"
    note: "Policy applies to Microsoft Copilot and Copilot Chat; not stated whether it covers answer cards. Preview TCM: mode applyOnce, resourceType microsoft.copilot.allowwebsearch, value 0, 1 or 2. AI Administrator."
  - governs: "Switch for answer cards on their own, separate from web search"
    scope: "tenant"
    ui: null
    api: null
    note: "Not yet documented at the time of writing (November 2026)."
confidence: "medium"
created: "2026-11-23"
updated: "2026-11-23"
roadmapModified: "2026-09-10T23:01:27"
changes:
  - date: "2026-11-23"
    note: "First briefing for this item: roadmap status Rolling out; Learn has no page for it, so the web search policy is listed as the nearest control."
  - date: "2026-11-23"
    note: "Checked against Microsoft Learn by gpt-6.1-sol: held: 2 of 49 statements contradicted, 0 unconfirmed; taken offline until corrected"
version: 1
verification:
  status: "held"
  date: "2026-11-23"
  version: 1
  model: "gpt-6.1-sol"
  engine: "copilot"
  claims: 49
  confirmed: 47
  unconfirmed: 0
  contradicted: 2
  attempts: 1
  hash: "12d28d82501bb7862365042925e864b6"
---

## What's changing

Microsoft plans to show new answer cards in Microsoft Copilot. The roadmap item describes them as model-driven and dynamically placed, covering seven topics: weather, sports, finance, images, video, places and news. It says they are for Entra and MSA users across all surfaces.

Microsoft Learn has no page for this roadmap item, so what follows about behaviour is the roadmap's description. The roadmap does not say where the card content comes from, what a card contains or whether users can dismiss one. Microsoft Learn's Microsoft 365 Copilot release notes for 21 April 2026 describe a separate roadmap item, 500865, in which Copilot Chat shows Bing web answer cards such as Weather and Stocks. Whether item 567008 uses the same source is not stated.

The record lists the status as Rolling out, with a target of September CY2026, release phase General Availability, cloud Worldwide (Standard Multi-Tenant) and platforms Desktop, Mobile, Teams and Surface Devices, and Web. The target month has passed and the record still shows Rolling out. It was last modified on 10 September 2026. No Message Center post was supplied for this item.

## Why it matters

This changes what users see in Copilot answers. Microsoft has not stated what happens on arrival, and no source says an admin must act first, so plan for users seeing the cards.

The practical question for a service owner is whether the cards sit under the web search controls you already manage. Microsoft Learn does not say, so treat web search as the likely route but confirm it in a pilot before telling users the cards can be switched off.

## Risk assessment

**Data exposure**

- The roadmap does not describe what data a card reads or where it comes from. Learn's web search page documents that when Copilot searches the web it sends a generated query to the Bing search service and the user's client IP address, and that the Data Protection Addendum does not apply to generated web search queries. Confirm whether answer cards use that route before relying on those terms.

**Security & identity**

- The roadmap lists Entra and MSA users. Learn's Microsoft Copilot requirements page says users must have a work or school account in Microsoft Entra ID, so how the MSA reference relates to your tenant's users is not explained.

**Autonomy & actions**

- The roadmap describes cards that present information and describes no actions a card takes on a user's behalf.

**Change & support**

- Cards are dynamically placed, so two users asking the same question on different surfaces may see different layouts. Expect service desk questions about weather, finance and places answers that look unlike earlier text replies.

## Cost and licensing

No licence or meter is published for answer cards. Learn's Microsoft Copilot requirements page says Microsoft Copilot Chat is available to users with an eligible Microsoft 365 subscription, and that a Microsoft Copilot licence is required for licensed Microsoft Copilot capabilities. That is the entitlement of the Copilot experience a user is in; nothing on the page is specific to this feature.

The page documents no charge for answer cards at the time of writing (November 2026), and a credit rate or other meter for this feature is not yet published. The cost the sources show is admin time to brief users and to test the web search policy.

## Scope

The roadmap lists Entra and MSA users across all surfaces: Desktop, Mobile, Teams and Surface Devices, and Web. The cloud listed is Worldwide (Standard Multi-Tenant); the record lists no US Government cloud. The status is Rolling out and the release phase is General Availability.

Learn's Microsoft Copilot requirements page says users must have a work or school account in Microsoft Entra ID and that Microsoft Copilot Chat is available to users with an eligible Microsoft 365 subscription. Which roles configure the feature is not stated; for the web search policy, see the controls notes.

## Governance guidance

### Before rollout

- Check in the Microsoft 365 Apps admin center whether the **Allow web search in Copilot** policy is configured and which users it targets. If it is unconfigured, Learn says web search is available unless **Allow the use of additional optional connected experiences in Office** is set to Disabled.
- Decide whether your organisation accepts weather, sports, finance, places and news answers in Copilot, and brief the service desk on the change.
- Confirm which of your users sign in with a work or school account, given the roadmap's reference to MSA users.

### At rollout

- Test with a pilot account on each surface (Desktop, Mobile, Teams, Web) by asking weather, stock, places and news questions, and record whether cards appear.
- Repeat the test with web search set to Disabled for the pilot account's group, to find out whether the cards follow the policy.

### After rollout

- Watch Message center and Microsoft Learn's Microsoft 365 Copilot release notes for a page that describes answer cards and any admin control.
- Record the pilot result on your own change record, because Learn does not state it.

## Governance controls

<p class="controls__lead">Where each control lives. The left column says what the setting decides and how far it reaches; the middle gives the admin centre and the exact path; the right gives the script, API or command that does the same. <em>Not yet documented</em> means Microsoft has not published a control for that surface, so there is nothing to configure yet.</p>

<table class="controls">
<thead><tr><th>Control</th><th>Admin UI</th><th>API and automation</th></tr></thead>
<tbody>
<tr><td data-label="Control"><strong>Whether Copilot can use web search, the nearest documented control to answer cards</strong><br><small>Tenant</small><br><small class="controls__note">Policy applies to Microsoft Copilot and Copilot Chat; not stated whether it covers answer cards. Preview TCM: mode applyOnce, resourceType microsoft.copilot.allowwebsearch, value 0, 1 or 2. AI Administrator.</small></td><td data-label="Admin UI"><strong>Microsoft 365 Apps admin center</strong><br>Customization › Policy Management › policy configuration › Choose the scope › Configure Settings › Allow web search in Copilot <a href="https://learn.microsoft.com/microsoft-365-apps/admin-center/overview-cloud-policy" rel="noopener" class="controls__docs">Learn</a></td><td data-label="API and automation"><strong>Microsoft Graph</strong><br><code>POST /beta/admin/configurationManagement/configurationMonitors</code> <a href="https://learn.microsoft.com/graph/api/configurationmanagement-post-configurationmonitors?view=graph-rest-beta" rel="noopener" class="controls__docs">Learn</a></td></tr>
<tr><td data-label="Control"><strong>Switch for answer cards on their own, separate from web search</strong><br><small>Tenant</small><br><small class="controls__note">Not yet documented at the time of writing (November 2026).</small></td><td data-label="Admin UI"><em class="controls__gap">Not yet documented</em></td><td data-label="API and automation"><em class="controls__gap">Not yet documented</em></td></tr>
</tbody>
</table>

The **Allow web search in Copilot** policy is the nearest documented control. Learn says it applies to both Microsoft Copilot and Microsoft Copilot Chat. Whether answer cards fall under it is not stated on that page, so use the pilot test above. A user-level **Web content** toggle also exists; if an admin turns web search off, Learn says the toggle is turned off and appears dimmed.

The API row uses Tenant Configuration Management (preview). Learn says the TCM service supports these Copilot settings only in tenant-level policies in the Microsoft 365 Apps admin center, and names AI Administrator as the least-privileged role for the signed-in user for remediation and applyOnce. The second row records that Microsoft Learn documents no setting for answer cards on their own at the time of writing (November 2026).

## Open questions

- Do answer cards come from the Bing search service, and does the **Allow web search in Copilot** policy turn them off? Watch the web search page on Microsoft Learn.
- What is the default state on arrival, and will Microsoft send a Message Center post for this item?
- How does the roadmap's reference to MSA users apply to a tenant whose users sign in with Entra accounts?
- Will a licence or meter specific to answer cards be published, and will admin reporting or audit record card use?

<!-- rationale
risk: Low. The roadmap describes a display change for seven answer topics, and Microsoft Learn documents no new organisational data access for it. Web search to Bing is governed by a separate policy.
cost: Low. The roadmap names no licence or meter, and the only cost the sources show is admin and communication time. A licence or meter specific to answer cards is not yet published.
impact: Medium. The roadmap says the cards appear across Desktop, Mobile, Teams and Surface Devices, and Web, so users who ask about the seven topics will see new layouts in Copilot answers.
-->

<!-- verifier-findings (2026-11-23, held; checked by gpt-6.1-sol)
The independent check found fault only with the statements below. This is a correction: change what they name and carry the rest of the page over unchanged.
Correct each of these with the smallest change that removes the fault: delete the statement, narrow it, or put the finding's own "Found" text or worded replacement in its place. Where a fix asks for more than that (a new row, an explanation, further references), do only the part that removes the fault. A correction adds no control rows.
- [contradicted, blocker] controls[0].ui; Governance controls table / admin-path: The printed Microsoft 365 Apps admin center path reaches Allow web search in Copilot and its docs link documents the control's own steps. | Found: On the Configure Settings page, select the policies that you want to include in the policy configuration. You can search for the policy by name, or you can create a custom filter. | Fix: Set controls[0].ui.docs and the rendered UI Learn link to https://learn.microsoft.com/copilot/plan/manage-public-web-access, which names Allow web search in Copilot and links to Cloud Policy. Keep overview-cloud-policy in sources for the route into the configuration; the current docs page never names the final setting. | Source: https://learn.microsoft.com/microsoft-365-apps/admin-center/overview-cloud-policy
- [contradicted, blocker] controls[0].api; controls[0].note; Governance controls / command: POST /beta/admin/configurationManagement/configurationMonitors with mode applyOnce applies the web search baseline, with only the tenant-level restriction stated. | Found: Before using TCM, ensure that the target setting isn't configured in any group-level policy in that admin center. If it is, monitoring, snapshots, remediation, and applyOnce fail for that resource. | Fix: Keep the API call. Add to controls[0].note and the TCM paragraph: 'Before using TCM, ensure Allow web search in Copilot is not configured in any group-level policy in the Microsoft 365 Apps admin center; otherwise monitoring, snapshots, remediation and applyOnce fail for this resource.' Cite https://learn.microsoft.com/graph/utcm-copilot-resources. | Source: https://learn.microsoft.com/graph/utcm-copilot-resources
-->
