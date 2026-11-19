---
title: "Dynamics 365 Customer Service: next best actions from Customer Intent Agent in the Copilot pane"
slug: "dynamics-365-customer-service-copilot-and-ai-innovation-view-next-best-actions-with-custom"
roadmapId: 577819
topic: "m365-copilot"
products: ["Microsoft Copilot (Microsoft 365)","Dynamics 365 Customer Service"]
summary: "Customer Service can show next best actions for a case in the Copilot pane. An administrator turns them on in Copilot Service admin center and adds experience profiles; nothing reaches representatives until then."
status: "launched"
releasePhase: ["General Availability"]
clouds: ["Worldwide (Standard Multi-Tenant)"]
platforms: ["Web"]
targetDate: "August CY2026"
previewDate: null
risk: "low"
cost: "variable"
impact: "low"
defaultState: "admin-opt-in"
action: "review"
licensing:
  model: "mixed"
  notes: "Learn requires the licensing in the Dynamics 365 Licensing Guide for production use of Copilot features, and the Customer Intent Agent page lists a pay-as-you-go plan as a prerequisite. A credit rate for next best actions is not yet published."
audiences: ["service-owner","finops","change-adoption"]
tags: ["customer-service","dynamics-365","copilot","agents","pay-as-you-go","copilot-credits"]
sources:
  - title: "Microsoft 365 Roadmap 577819"
    url: "https://www.microsoft.com/microsoft-365/roadmap?id=577819"
    kind: "roadmap"
  - title: "Manage Copilot features in Customer Service"
    url: "https://learn.microsoft.com/dynamics365/customer-service/administer/configure-copilot-features"
    kind: "learn"
  - title: "Enable intent-based suggestions for service representatives"
    url: "https://learn.microsoft.com/dynamics365/contact-center/administer/enable-intent-for-service-reps"
    kind: "learn"
  - title: "Use intent-based suggestions"
    url: "https://learn.microsoft.com/dynamics365/contact-center/use/use-intent-suggestions"
    kind: "learn"
  - title: "Manage Customer Intent Agent"
    url: "https://learn.microsoft.com/dynamics365/contact-center/administer/manage-customer-intent-agent"
    kind: "learn"
  - title: "Manage consumption-based billing and capacity"
    url: "https://learn.microsoft.com/dynamics365/customer-service/administer/setup-pay-as-you-go"
    kind: "learn"
  - title: "Create and use experience profiles"
    url: "https://learn.microsoft.com/dynamics365/customer-service/administer/create-agent-experience-profile"
    kind: "learn"
videos: []
related: ["copilot-credits","m365-copilot-service-agent-in-m365-your-dedicated-service-specialist","dynamics-365-customer-service-manage-intraday-operations-with-ai-agent"]
controls:
  - governs: "Whether next best actions are turned on, and which experience profiles get them"
    scope: "tenant"
    ui:
      surface: "Copilot Service admin center"
      path: "Support experience > Productivity > Intent-based suggestions > Manage > Turn on intent-based suggestions > Actions"
      docs: "https://learn.microsoft.com/dynamics365/contact-center/administer/enable-intent-for-service-reps"
    api: null
    note: "The same page has Enable in experience profiles > Select experience profiles. Turning it off does not revert Copilot or other shared settings."
  - governs: "Which representatives have Copilot features in Copilot Service workspace"
    scope: "group"
    ui:
      surface: "Copilot Service admin center"
      path: "Support experience > Workspaces > Experience profiles > profile > Productivity pane > Copilot"
      docs: "https://learn.microsoft.com/dynamics365/customer-service/administer/create-agent-experience-profile"
    api: null
    note: "Covers Copilot features in general, not next best actions alone. Needs the App Profile Manager Administrator and Basic User roles."
confidence: "medium"
created: "2026-11-19"
updated: "2026-11-19"
roadmapModified: "2026-10-22T23:45:45"
changes:
  - date: "2026-11-19"
    note: "First briefing for this item: Launched, with admin setup in Copilot Service admin center, the pay-as-you-go prerequisite and the unpublished credit rate."
  - date: "2026-11-19"
    note: "Checked against Microsoft Learn by gpt-6.1-sol: held: 3 of 50 statements contradicted, 0 unconfirmed; taken offline until corrected"
version: 1
verification:
  status: "held"
  date: "2026-11-19"
  version: 1
  model: "gpt-6.1-sol"
  engine: "copilot"
  claims: 50
  confirmed: 47
  unconfirmed: 0
  contradicted: 3
  attempts: 1
  hash: "b3e31bd5bbd13e0306c7fc25b0eb8a06"
---

## What's changing

Customer Service can now show next best actions for a case in the Copilot pane. After a case is created or updated, Customer Intent Agent analyses the case context, such as emails and notes, and suggests actions that help a representative follow up with the customer, review a draft response or resolve the case.

An administrator turns the feature on in Copilot Service admin center, on the **Intent-based suggestions** page, and selects the experience profiles that get it. The roadmap item describes enabling it for the entire organisation, consolidating important case attributes in one place and suggesting knowledge articles; Learn's current description of the feature covers the Copilot pane suggestions and the profile-based setup above.

The roadmap record gives the status as Launched, with a target date of August CY2026, release phase General Availability, Worldwide (Standard Multi-Tenant) and the Web platform. Microsoft's roadmap also lists drafting emails, updating knowledge articles and updating case notes as one-click actions; Learn lists following up with the customer, reviewing a draft response, copying the generated response and resolving the case.

## Why it matters

For a service owner this adds an AI-generated recommendation layer to the case form that representatives will start to rely on, and Learn ties it to Customer Intent Agent, which is also linked to a pay-as-you-go plan. Decide who gets it, and check what it costs, before you add it to a profile.

The roadmap and Learn both describe an administrator turning it on. If nobody acts, no source says representatives see next best actions, so there is no deadline, only a decision about fit and spend.

## Risk assessment

**Data exposure**
- Next best actions read case context such as emails and notes to build suggestions, so the quality and sensitivity of what is in case emails and notes matters. Limit exposure by choosing which experience profiles receive the feature (controls table, row 1).
- Learn's Copilot features page says that for regions without Copilot in region by default, data movement across regions must be allowed in Power Platform admin center before opting in to Copilot. Check your environment's geography before rollout.

**Security & identity**
- By default, only users with the Customer Service Representative role can use Copilot features; custom roles need the privileges the Copilot features page lists, including Miscellaneous privileges > prvIntelligenceUsage. A role missing them leaves the representative without Copilot.

**Autonomy & actions**
- Learn describes suggestions a representative views and selects, such as reviewing the generated email response and refining it before sending. The roadmap also describes one-click actions such as updating case notes and knowledge articles; confirm in a test environment which actions write to records.

**Change & support**
- Representatives see a new set of actions in the Copilot pane. Brief them, because a draft response is generated from case content and needs review before it is sent.
- Learn says that when the Copilot Credits quota is depleted the AI capability is unavailable until more capacity is added, so a depleted quota would look like a support fault.

## Cost and licensing

Learn's Copilot features page lists, as a prerequisite, meeting the licensing requirements for using the feature with production environments and points to the Dynamics 365 Licensing Guide. It names no specific licence for next best actions.

The Customer Intent Agent page lists setting up a pay-as-you-go plan as a prerequisite, and the Customer Service billing page says selected Copilot and agent capabilities in Dynamics 365 use consumption-based billing with Copilot Credits. The next best actions page itself lists no plan. A Copilot Credits rate specific to next best actions is not yet published, so size the spend from your own case volume once the rate appears. The billing page also says that when the quota is depleted the AI capability is unavailable until more capacity is added.

See /concepts/copilot-credits/ for how the meter works. Indirect cost is administrator time to configure profiles and to train representatives.

## Scope

Representatives in the experience profiles an administrator selects see the actions in Copilot Service workspace. The Copilot features page says that by default representatives added to the default experience profiles can use Copilot features, and that Copilot features need the Customer Service Representative role or a custom role with the listed privileges.

Prerequisites on the next best actions page: Intent or knowledge management is configured, and Ask a question is enabled in the Copilot help pane. The Copilot features page lists the System Administrator role as a prerequisite for setting up Copilot features. The record lists Worldwide (Standard Multi-Tenant) and the Web platform.

## Governance guidance

### Before rollout
- Confirm that Intent or knowledge management is configured and that **Ask a question** is enabled in the Copilot help pane (Copilot Service admin center, row 1).
- Check with finance whether the pay-as-you-go plan the Customer Intent Agent page lists as a prerequisite is in place, and who monitors Copilot Credits.
- Check that custom security roles carry the Copilot privileges listed on the Copilot features page.
- Check the environment's geography against the data movement rules on the Copilot features page.

### At rollout
- Turn on **Actions** on the **Intent-based suggestions** page (row 1).
- Select a pilot experience profile before adding wider groups (row 2).
- Tell the pilot representatives that suggested responses need review before sending.

### After rollout
- Open a case as a test representative and confirm the Copilot pane shows next best actions, as the Learn validation steps describe.
- Watch Copilot Credits consumption and the quota alerts Dynamics 365 sends.
- Review which suggested actions representatives use, and widen or narrow the experience profiles.

## Governance controls

<p class="controls__lead">Where each control lives. The left column says what the setting decides and how far it reaches; the middle gives the admin centre and the exact path; the right gives the script, API or command that does the same. <em>Not yet documented</em> means Microsoft has not published a control for that surface, so there is nothing to configure yet.</p>

<table class="controls">
<thead><tr><th>Control</th><th>Admin UI</th><th>API and automation</th></tr></thead>
<tbody>
<tr><td data-label="Control"><strong>Whether next best actions are turned on, and which experience profiles get them</strong><br><small>Tenant</small><br><small class="controls__note">The same page has Enable in experience profiles &gt; Select experience profiles. Turning it off does not revert Copilot or other shared settings.</small></td><td data-label="Admin UI"><strong>Copilot Service admin center</strong><br>Support experience › Productivity › Intent-based suggestions › Manage › Turn on intent-based suggestions › Actions <a href="https://learn.microsoft.com/dynamics365/contact-center/administer/enable-intent-for-service-reps" rel="noopener" class="controls__docs">Learn</a></td><td data-label="API and automation"><em class="controls__gap">Not yet documented</em></td></tr>
<tr><td data-label="Control"><strong>Which representatives have Copilot features in Copilot Service workspace</strong><br><small>Group</small><br><small class="controls__note">Covers Copilot features in general, not next best actions alone. Needs the App Profile Manager Administrator and Basic User roles.</small></td><td data-label="Admin UI"><strong>Copilot Service admin center</strong><br>Support experience › Workspaces › Experience profiles › profile › Productivity pane › Copilot <a href="https://learn.microsoft.com/dynamics365/customer-service/administer/create-agent-experience-profile" rel="noopener" class="controls__docs">Learn</a></td><td data-label="API and automation"><em class="controls__gap">Not yet documented</em></td></tr>
</tbody>
</table>

Next best actions have an administrator switch (**Actions**) and are assigned through experience profiles. Learn says that turning intent-based suggestions off or removing it from an experience profile does not revert the Copilot or other shared settings.

The experience profile row governs access to Copilot features in Copilot Service workspace in general; Learn says to add next best actions to representatives' experience profiles from the Intent-based suggestions page. Microsoft Learn documents no API for either setting at the time of writing (November 2026). Creating profiles needs the App Profile Manager Administrator and Basic User roles.

## Open questions

- Which next best actions write to case notes or knowledge articles, given that the roadmap lists them as one-click actions and Learn lists follow-up, review, copy and resolve? Watch the Customer Intent Agent page and the roadmap item.
- Does turning on next best actions require the pay-as-you-go plan that the Customer Intent Agent page lists, given that the next best actions page lists no plan?
- What Copilot Credits rate applies to next best actions? Watch the Customer Service billing page and the Power Platform Licensing Guide.
- The roadmap says an administrator can enable the feature for the entire organisation, while Learn selects experience profiles; does the organisation-wide option exist as a separate setting?

<!-- rationale
risk: Low. Learn describes the actions as a setting an administrator turns on and assigns to experience profiles; the agent reads case emails and notes and suggests steps that representatives select.
cost: Variable. The Customer Intent Agent page lists a pay-as-you-go plan as a prerequisite and Dynamics 365 consumption billing uses Copilot Credits; a rate specific to next best actions is not yet published.
impact: Low. Representatives in the experience profiles an administrator selects see the actions; other users and customers do not.
-->

<!-- verifier-findings (2026-11-19, held; checked by gpt-6.1-sol)
The independent check found fault only with the statements below. This is a correction: change what they name and carry the rest of the page over unchanged.
Correct each of these with the smallest change that removes the fault: delete the statement, narrow it, or put the finding's own "Found" text or worded replacement in its place. Where a fix asks for more than that (a new row, an explanation, further references), do only the part that removes the fault. A correction adds no control rows.
- [contradicted, blocker] controls[0].api; Governance controls / absence: Microsoft Learn documents no API for enabling next best actions. | Found: Update ... PATCH /msdyn_nextbestactionsconfigs(msdyn_nextbestactionsconfigid) ... msdyn_isenabled ... Whether Next Best Actions is enabled for this target entity. | Fix: Replace controls[0].api null with kind 'rest', call 'PATCH /msdyn_nextbestactionsconfigs(msdyn_nextbestactionsconfigid)', and docs 'https://learn.microsoft.com/dynamics365/developer/reference/entities/msdyn_nextbestactionsconfig'. Add to its note: 'The request body sets msdyn_isenabled; msdyn_targetentity identifies the target entity, such as incident. This operation documents next-best-action enablement, not experience-profile assignment.' Replace the blanket no-API sentence with 'Dataverse documents updates to next-best-action enablement and profile Copilot configuration.' Cite both Dataverse references used for the API corrections. | Source: https://learn.microsoft.com/dynamics365/developer/reference/entities/msdyn_nextbestactionsconfig
- [contradicted, blocker] controls[1].api; Governance controls / absence: Microsoft Learn documents no API for experience-profile Copilot access settings. | Found: Update ... PATCH /msdyn_appcopilotconfigurations(msdyn_appcopilotconfigurationid) ... msdyn_appconfigurationid ... App profile ... msdyn_copilotfeature ... Copilot Feature ... msdyn_enabled ... Enabled | Fix: Replace controls[1].api null with kind 'rest', call 'PATCH /msdyn_appcopilotconfigurations(msdyn_appcopilotconfigurationid)', and docs 'https://learn.microsoft.com/dynamics365/developer/reference/entities/msdyn_appcopilotconfiguration'. Add to the note: 'For individual profile Copilot features, the request body sets msdyn_enabled; msdyn_copilotfeature identifies the feature and msdyn_appconfigurationid links the app profile.' Cite this reference and https://learn.microsoft.com/dynamics365/guidance/resources/cs-contact-center-copilot-setup#copilot-settings-in-agent-profiles, which identifies the underlying table for profile Copilot settings. Remove the blanket no-API claim. | Source: https://learn.microsoft.com/dynamics365/developer/reference/entities/msdyn_appcopilotconfiguration
These are minor and do not hold the page. Where removing the statement, or rewording it in the words the fix gives, settles one, do that; otherwise leave it as it is. A minor finding may also add a source link it names for a statement already on the page. It adds no row and nothing that needs research.
- [contradicted, minor] Governance guidance: Before rollout; Governance controls / consistency: Every configuration control the governance checklist asks administrators to check is represented in the controls table. | Found: Check with finance whether the pay-as-you-go plan ... is in place ... Check that custom security roles carry the Copilot privileges ... Check the environment's geography against the data movement rules | Fix: The checklist's checks for billing-plan setup, custom security-role privileges, regional data movement, and the Ask a question prerequisite have no corresponding controls-table rows; row 1 is the Actions switch, not these separate controls. Correct the checklist's row-1 implication for Ask a question. This finding does not request additional control rows.
-->
