---
title: "Microsoft Dataverse: richer record labels for Copilot /mention in Microsoft 365 apps"
slug: "microsoft-dataverse-improved-enterprise-experiences-in-power-platform-enhance-dataverse-re"
roadmapId: 576788
topic: "power-platform"
products: ["Microsoft Copilot (Microsoft 365)","Microsoft Dataverse"]
summary: "Dynamics 365 and Power Apps records offered through /mention in Microsoft 365 Copilot carry labels with environment and app context. Administrators decide per environment whether records are searchable; no new control is documented."
status: "launched"
releasePhase: ["General Availability","Preview"]
clouds: ["Worldwide (Standard Multi-Tenant)"]
platforms: ["Web"]
targetDate: "August CY2026"
previewDate: "July CY2026"
risk: "low"
cost: "low"
impact: "medium"
defaultState: "unknown"
action: "prepare"
licensing:
  model: "unknown"
  notes: "Not yet published for this change. The Learn page for /mention lists no licence requirement."
audiences: ["power-platform-admin","m365-admin","compliance"]
tags: ["m365-copilot","copilot-chat","dataverse","dynamics-365","power-apps","power-platform-admin-center"]
sources:
  - title: "Microsoft 365 Roadmap 576788"
    url: "https://www.microsoft.com/microsoft-365/roadmap?id=576788"
    kind: "roadmap"
  - title: "Use /mention to link to business records via Microsoft 365 Copilot"
    url: "https://learn.microsoft.com/power-platform/admin/link-records-outlook-web"
    kind: "learn"
  - title: "Manage feature settings"
    url: "https://learn.microsoft.com/power-platform/admin/settings-features"
    kind: "learn"
videos: []
related: ["microsoft-dataverse-enable-semantic-data-understanding-for-agentic-use","work-iq"]
controls:
  - governs: "Whether records from an environment are searchable through /mention in Microsoft 365 apps"
    scope: "environment"
    ui:
      surface: "Power Platform admin center"
      path: "Manage > Environments > environment > Settings > Product > Features > Search > Search for records in Microsoft 365 apps"
      docs: "https://learn.microsoft.com/power-platform/admin/link-records-outlook-web"
    api: null
    note: "Controls /mention record search generally; no separate switch for the label format is documented."
confidence: "medium"
created: "2026-11-18"
updated: "2026-11-18"
roadmapModified: "2026-10-16T19:09:06"
changes:
  - date: "2026-11-18"
    note: "First briefing for roadmap item 576788, now Launched: richer environment, app and record labels for Dataverse records in Copilot /mention."
  - date: "2026-11-18"
    note: "Checked against Microsoft Learn by gpt-6.1-sol: held: 2 of 40 statements contradicted, 0 unconfirmed; taken offline until corrected"
  - date: "2026-11-18"
    note: "Correction: removed the claim that enabled environments get the new labels without further steps, set action to prepare, and stated the System Administrator role from Manage feature settings."
  - date: "2026-11-18"
    note: "Checked against Microsoft Learn by gpt-6.1-sol: passed: all 45 statements confirmed"
version: 2
verification:
  status: "verified"
  date: "2026-11-18"
  version: 2
  model: "gpt-6.1-sol"
  engine: "copilot"
  claims: 45
  confirmed: 45
  unconfirmed: 0
  contradicted: 0
  attempts: 0
  hash: "0e599ad356b252ec240429404693ac3f"
---

## What's changing

Records from Microsoft Dataverse, Dynamics 365 and Power Apps that appear when a user types /mention in Microsoft 365 Copilot get a more descriptive label. The roadmap item says the label includes environment, app and table information and refers to the surface as Context IQ. Microsoft Learn describes the label as **Environment Name** + **App Name** + **Record Name**, so the roadmap's "table" and Learn's "record name" differ in wording.

The Learn page for /mention documents how it behaves. The records offered are the most recently viewed Dynamics 365 and Power Apps records. If a user opens the same record through several apps, the label shows the most recently used app. After a user views a record, it can take up to 15 minutes before that record can be referenced with /mention. The page describes /mention in Outlook on the web, Copilot Chat, Researcher, Word and Teams.

The roadmap item is marked Launched, with a preview date of July CY2026 and a target date of August CY2026. Its release phases are General Availability and Preview, the platform is Web and the cloud is Worldwide (Standard Multi-Tenant). The roadmap says the feature is "Enabled by admins/makers/marketers for end users", while the Manage feature settings page on Microsoft Learn lists the Search for records in Microsoft 365 apps setting with a default value of On. Microsoft has not stated what happens on arrival for the new labels, so the default state is recorded as not stated.

## Why it matters

The labels only change how records are described, but they sit on a data path that crosses boundaries. For /mention to work, a small set of Dataverse data is synced into Microsoft 365, and Microsoft's page warns that the sync can cross geo, service and compliance boundaries.

The practical view is that this needs communication, not emergency action. Check which environments have the setting on, confirm that the data flow was approved when it was enabled, and tell Dynamics 365 and Power Apps users what the new labels show. If nobody acts, Microsoft has not stated whether anything changes beyond the label text.

## Risk assessment

**Data exposure**

- Microsoft's page says synced data includes the environment name, app name and record name, plus a link to the most recently used record, and that the sync can cross geo, service and compliance boundaries for multi-geo organisations. The richer labels display the environment and app names in Copilot, so treat those names as text that users see. The per-environment setting is the control (first row of the table).
- Researcher uses a referenced record as contextual grounding. The page says Researcher does not currently retrieve or reason over live Dynamics 365 or Power Apps data for that record.

**Security & identity**

- The page says records offered through /mention are those a user has access to and has most recently used. An email recipient needs security roles that grant access to the data to open a shared record. Microsoft Learn does not describe the authorisation mechanism further, so test it with a user who lacks access.
- Updates or deletions of the synced data update or delete the record in Microsoft 365, per the same page.

**Autonomy & actions**

- The page says Copilot uses a referenced record as context to ground its response and perform actions against the relevant business data. It does not list which actions, so confirm what Copilot can do with a referenced record before you rely on it.

**Change & support**

- Expect questions from users when a record they just viewed is not yet offered (up to 15 minutes) or when the label names a different app from the one they expected, because the label reflects the most recently used app.

## Cost and licensing

Microsoft has not published licensing for this change. The Learn page for /mention, "Use /mention to link to business records via Microsoft 365 Copilot", lists the Power Platform admin center setting as the step to enable it and names no licence and no meter. The roadmap record names none either.

The cost the sources support is administrator time: reviewing the per-environment setting and telling users about the new labels. No charge for the setting itself is documented, and no separate meter is documented at the time of writing (November 2026).

## Scope

The roadmap record lists the Worldwide (Standard Multi-Tenant) cloud, the Web platform and the products Microsoft Copilot (Microsoft 365) and Microsoft Dataverse. It lists General Availability and Preview as release phases and the status as Launched.

The setting is configured per environment in the Power Platform admin center. The /mention page does not name a role; Manage feature settings requires the System Administrator security role or equivalent permissions to update these settings. Records come from Dynamics 365 and Power Apps model-driven apps, and users see only records they have access to and have recently viewed.

## Governance guidance

### Before rollout

- Check the **Search for records in Microsoft 365 apps** setting in each environment (Power Platform admin center; first row of the table) and list which are on. The /mention page tells administrators to turn it on, and the Manage feature settings page lists its default value as On, so confirm the actual state rather than assuming it.
- Ask your compliance team to review the sync of environment, app and record names to Microsoft 365, especially for multi-geo organisations, where Microsoft's page says it can cross geo boundaries.
- Review the display names of environments and apps that users will see in labels.

### At rollout

- Set the setting for each environment according to that review, and save the change.
- Tell Dynamics 365 and Power Apps users that a viewed record can take up to 15 minutes to be offered through /mention.

### After rollout

- Test /mention with a user who does not have access to a sample record and confirm it is not offered.
- Watch Message center and the /mention Learn page for a licensing statement or a tenant-level control.

## Governance controls

<p class="controls__lead">Where each control lives. The left column says what the setting decides and how far it reaches; the middle gives the admin centre and the exact path; the right gives the script, API or command that does the same. <em>Not yet documented</em> means Microsoft has not published a control for that surface, so there is nothing to configure yet.</p>

<table class="controls">
<thead><tr><th>Control</th><th>Admin UI</th><th>API and automation</th></tr></thead>
<tbody>
<tr><td data-label="Control"><strong>Whether records from an environment are searchable through /mention in Microsoft 365 apps</strong><br><small>Environment</small><br><small class="controls__note">Controls /mention record search generally; no separate switch for the label format is documented.</small></td><td data-label="Admin UI"><strong>Power Platform admin center</strong><br>Manage › Environments › environment › Settings › Product › Features › Search › Search for records in Microsoft 365 apps <a href="https://learn.microsoft.com/power-platform/admin/link-records-outlook-web" rel="noopener" class="controls__docs">Learn</a></td><td data-label="API and automation"><em class="controls__gap">Not yet documented</em></td></tr>
</tbody>
</table>

The one documented control is the per-environment **Search for records in Microsoft 365 apps** setting. The /mention page does not name a role; Manage feature settings requires the System Administrator security role or equivalent permissions to update these settings. Microsoft Learn documents no API for this specific setting at the time of writing (November 2026), so the API side is shown as not documented.

The setting is not specific to the new labels: it governs whether /mention offers records from that environment. No separate switch for the label format is documented. Access to the records themselves follows Dataverse security roles, which the page says the user and the email recipient need.

## Open questions

- Is the Search for records in Microsoft 365 apps setting on by default for new and existing environments? The Manage feature settings page lists On, while the /mention page tells administrators to turn it on. Watch the Learn pages and Message center.
- Does the new label include table information, as the roadmap says, or only environment, app and record name, as the Learn page says?
- Does the feature need a Microsoft 365 Copilot licence, a Dynamics 365 or Power Apps licence, or neither? No licence is named for /mention.
- Is there a PowerShell, Power Platform API or Dataverse setting that sets this control without the admin centre?

<!-- rationale
risk: Low. The change is the label text on records that the /mention setting already makes available; the sync of environment, app and record names that sits behind it is documented separately and is set per environment.
cost: Low. The only cost the sources show is administrator time to review the per-environment setting; the Learn page for /mention names no licence or meter, and licensing for this change is not yet published.
impact: Medium. Users of Dynamics 365 and model-driven Power Apps who reference business records in Microsoft 365 Copilot will see the new labels; people who never use /mention will not notice.
-->
