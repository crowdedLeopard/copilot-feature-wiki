---
title: "Microsoft Purview: row-level counting of exact data match (EDM) matches"
slug: "microsoft-purview-compliance-portal-unique-counting-of-edm-matches"
roadmapId: 502551
topic: "governance"
products: ["Microsoft Purview"]
summary: "Microsoft plans a mode that counts each EDM row once instead of each primary-element match. Learn already shows it in the EDM classifier wizard. It affects Purview administrators who build EDM sensitive information types."
status: "in-development"
releasePhase: ["General Availability","Preview"]
clouds: ["Worldwide (Standard Multi-Tenant)"]
platforms: ["Web"]
targetDate: "October CY2025"
previewDate: "September CY2025"
risk: "low"
cost: "low"
impact: "low"
defaultState: "unknown"
action: "review"
licensing:
  model: "included"
  notes: "Learn lists EDM-based classification as included in Office 365 E5, Microsoft 365 E5, Microsoft Purview Suite and Microsoft E5/A5 Information Protection and Governance. No licence or price specific to this counting mode is published."
audiences: ["compliance","security","m365-admin"]
tags: ["purview","sensitive-information-types","exact-data-match","dlp","auto-labeling"]
sources:
  - title: "Microsoft 365 Roadmap 502551"
    url: "https://www.microsoft.com/microsoft-365/roadmap?id=502551"
    kind: "roadmap"
  - title: "Create an EDM SIT schema and rule package (New experience)"
    url: "https://learn.microsoft.com/purview/sit-create-edm-sit-unified-ux-schema-rule-package"
    kind: "learn"
  - title: "Get started with exact data match sensitive information types in Microsoft Purview"
    url: "https://learn.microsoft.com/purview/sit-get-started-exact-data-match-based-sits-overview"
    kind: "learn"
  - title: "Create notifications for exact data match activities"
    url: "https://learn.microsoft.com/purview/sit-edm-notifications-activities"
    kind: "learn"
  - title: "Create exact data match sensitive information type/rule package"
    url: "https://learn.microsoft.com/purview/sit-get-started-exact-data-match-create-rule-package"
    kind: "learn"
videos: []
related: ["sensitive-information-types","classifiers"]
controls:
  - governs: "Unique counting mode (primary match-level or row-level) of an EDM SIT"
    scope: "other"
    ui:
      surface: "Microsoft Purview portal"
      path: "Data classification > EDM classifiers > + Create EDM classifier > Configure detection rules for primary elements > unique counting mode"
      docs: "https://learn.microsoft.com/purview/sit-create-edm-sit-unified-ux-schema-rule-package"
    api: null
    note: "Set per classifier in the new EDM experience (New EDM experience toggle On). Compliance administrator or Global administrator role."
confidence: "high"
created: "2026-11-25"
updated: "2026-11-25"
roadmapModified: "2025-09-24T23:15:27"
changes:
  - date: "2026-11-25"
    note: "First briefing for roadmap item 502551; Learn already documents the row-level counting option in the new EDM wizard."
  - date: "2026-11-25"
    note: "Checked against Microsoft Learn by gpt-6.1-sol: held: 2 of 49 statements contradicted, 2 unconfirmed; taken offline until corrected"
version: 1
verification:
  status: "held"
  date: "2026-11-25"
  version: 1
  model: "gpt-6.1-sol"
  engine: "copilot"
  claims: 49
  confirmed: 45
  unconfirmed: 2
  contradicted: 2
  attempts: 1
  hash: "a68ffa503f1cf94ffe2fc3bc83e00915"
---

## What's changing

Microsoft's roadmap item describes a new way to count exact data match (EDM) matches: each row of the sensitive information source table is counted once, in addition to the current behaviour, where each primary element is counted once. The item is titled "Microsoft Purview compliance portal: Unique Counting of EDM Matches".

The Learn page for creating an EDM sensitive information type (SIT) in the new experience already describes this as a **unique counting mode** on the "Configure detection rules for primary elements" step. It offers **Primary Match-level Counting**, which counts each matching combination of primary and supporting elements separately, even within the same row, and **Row-level Counting**, which counts each row only once even if several elements match in it.

The roadmap record gives status In development, a preview target of September CY2025 and a general availability target of October CY2025, for Worldwide (Standard Multi-Tenant) on the web. Those dates are Microsoft's targets, and both are before today's date, 25 November 2026, while the record still reads In development. Learn documents the option as available in the wizard, so the two sources differ on whether it has shipped.

Microsoft has not stated which mode applies by default or whether existing EDM SITs change.

## Why it matters

Match counts decide whether a DLP rule, auto-labelling rule or other EDM consumer fires, so a change in how matches are counted can change how many items trip a threshold. Learn lists the places EDM SITs are used: Microsoft Purview Data Loss Prevention, auto-labelling, Insider Risk Management, eDiscovery and Microsoft Defender for Cloud Apps.

Microsoft has not stated what happens on arrival, so treat existing EDM SITs as unchanged until a source says otherwise. The practical decision is for new or rebuilt EDM classifiers: choose row-level counting when you care how many records are sensitive, and keep primary match-level counting when you want every match. That wording is Learn's.

## Risk assessment

**Data exposure**
- No new data is read. The option changes how matches in content already scanned by an EDM SIT are counted. Learn describes row-level counting as showing how many unique records (rows) are sensitive.
- Lower counts under row-level counting could keep an item below a DLP or labelling rule's instance threshold that primary match-level counting would reach. Review thresholds before switching an existing classifier's mode.

**Security & identity**
- No change to identity or permissions is documented. Learn names Compliance administrator and Global administrator as the roles that create, test and deploy a custom SIT in the portal.

**Autonomy & actions**
- EDM matches feed rules that can act, such as DLP and auto-labelling rules, which Learn lists among EDM SIT uses. The counting mode changes the number those rules see, not the action they take.

**Change & support**
- Two counting modes can produce different totals for the same content, so expect support questions when a new EDM SIT reports fewer matches than an older one.
- Learn documents the option in the new experience's wizard, and says classic-experience and PowerShell-uploaded schemas are not viewable or manageable there.

## Cost and licensing

Learn's EDM notifications page states that EDM-based classification is included in Office 365 E5, Microsoft 365 E5, Microsoft Purview Suite (formerly known as Microsoft 365 E5 Compliance) and Microsoft E5/A5 Information Protection and Governance. The "Get started with exact data match sensitive information types" page points to the Microsoft 365 security and compliance licensing guidance for complete licensing information.

The counting mode is an option inside EDM SIT creation. No licence, price or meter specific to this option is published at the time of writing (November 2026). The indirect cost is administrator time to choose a mode and re-check any match-count thresholds.

## Scope

- **Clouds and platform:** the roadmap record lists Worldwide (Standard Multi-Tenant) and the web.
- **Where it appears:** Learn shows the choice in the Microsoft Purview portal's new EDM experience (Data classification > EDM classifiers, with the **New EDM experience** toggle On).
- **Roles:** Learn names Compliance administrator or Global administrator for creating, testing and deploying an EDM SIT in the portal.
- **Limits that apply to the new experience:** Learn says it creates one schema per EDM SIT and limits you to 10 EDM SITs; schemas made in the classic experience or uploaded as XML through PowerShell are not viewable or manageable in the new experience.
- **Prerequisites:** a source data export and an EDM sample file, per the Learn page.

## Governance guidance

### Before rollout
- Inventory the EDM SITs in Data classification > EDM classifiers and note which DLP, auto-labelling or other rules use each one.
- Record the instance-count thresholds on those rules so you can compare them with row-level counts.
- Decide, per classifier, whether the question is how many records are sensitive (row-level) or how many matches there are (primary match-level).

### At rollout
- Open the new EDM experience and check the **Configure detection rules for primary elements** step for the unique counting mode before building new classifiers.
- Create a test EDM SIT with each mode and run the documented Test-DataClassification cmdlet on sample text, then wait 24 hours before testing in a DLP policy, as Learn advises.
- Tell DLP and compliance owners that match totals depend on the mode chosen.

### After rollout
- Compare match counts and rule hits from row-level classifiers against older ones.
- Revisit rule thresholds if row-level counts fall below the numbers the rules expect.
- Watch the roadmap item and Learn page for the default mode and for support in classic and PowerShell workflows.

## Governance controls

<p class="controls__lead">Where each control lives. The left column says what the setting decides and how far it reaches; the middle gives the admin centre and the exact path; the right gives the script, API or command that does the same. <em>Not yet documented</em> means Microsoft has not published a control for that surface, so there is nothing to configure yet.</p>

<table class="controls">
<thead><tr><th>Control</th><th>Admin UI</th><th>API and automation</th></tr></thead>
<tbody>
<tr><td data-label="Control"><strong>Unique counting mode (primary match-level or row-level) of an EDM SIT</strong><br><small class="controls__note">Set per classifier in the new EDM experience (New EDM experience toggle On). Compliance administrator or Global administrator role.</small></td><td data-label="Admin UI"><strong>Microsoft Purview portal</strong><br>Data classification › EDM classifiers › + Create EDM classifier › Configure detection rules for primary elements › unique counting mode <a href="https://learn.microsoft.com/purview/sit-create-edm-sit-unified-ux-schema-rule-package" rel="noopener" class="controls__docs">Learn</a></td><td data-label="API and automation"><em class="controls__gap">Not yet documented</em></td></tr>
</tbody>
</table>

The documented control is the choice made when an EDM SIT is created in the new experience, as a step of the classifier wizard. Creating, testing and deploying a custom SIT in the portal needs the Compliance administrator or Global administrator role. Scripted configuration of the mode is not yet documented: Microsoft Learn's rule-package pages describe no such setting at the time of writing (November 2026).

## Open questions

- Which counting mode is the default for new EDM SITs, and does any existing EDM SIT change behaviour? Watch the Learn page for creating an EDM SIT (new experience) and the roadmap item.
- Do the roadmap's October CY2025 general availability target and September CY2025 preview target still stand now that Learn already documents the option while the item reads In development?
- Can classic-experience or PowerShell-created EDM SITs use row-level counting, and is there any scripted way to set the mode?
- Can the mode be changed on an existing classifier without rebuilding it?

<!-- rationale
risk: Low. It adds a counting option to EDM sensitive information types that administrators build; no source says existing EDM types change, and it reads no new data.
cost: Low. Learn lists EDM-based classification as included in Office 365 E5, Microsoft 365 E5 and similar subscriptions; no meter is documented for this option, so the known cost is administrator time to review counts and thresholds.
impact: Low. The people who notice are the administrators who author EDM classifiers and the DLP and compliance staff who tune match-count thresholds.
-->

<!-- verifier-findings (2026-11-25, held; checked by gpt-6.1-sol)
The independent check found fault only with the statements below. This is a correction: change what they name and carry the rest of the page over unchanged.
Correct each of these with the smallest change that removes the fault: delete the statement, narrow it, or put the finding's own "Found" text or worded replacement in its place. Where a fix asks for more than that (a new row, an explanation, further references), do only the part that removes the fault. A correction adds no control rows.
- [contradicted, blocker] controls[0].ui; Governance controls table / admin-path: The printed route goes directly from + Create EDM classifier to Configure detection rules for primary elements and unique counting mode. | Found: Select the method you want to use for your schema: either Upload a file containing sample data, or Manually define your data structure. ... On the Select primary elements page ... Configure settings for data in selected columns. | Fix: Replace controls[0].ui.path and its rendered route with 'Data classification > EDM classifiers > + Create EDM classifier > Upload a file containing sample data > Upload file > Select primary elements > Configure settings for data in selected columns > Configure detection rules for primary elements > unique counting mode'. Keep the note that New EDM experience must be On, and add 'This route uses the sample-file method.' The cited creation page gives this branch; the current route omits the required schema-method choice. | Source: https://learn.microsoft.com/purview/sit-create-edm-sit-unified-ux-schema-rule-package
- [unsupported, major] Risk assessment: Data exposure; rationale: risk / behaviour: The counting option reads no new data. | Found: Searched: EDM row-level counting data access permissions actions no new data; exact data match counting data permissions actions. Read the new-experience creation page and EDM overview; neither states unchanged data access for this mode. | Fix: Remove 'No new data is read.' from Data exposure and ', and it reads no new data' from the risk rationale. Retain the supported description of how row-level counting counts matches.
- [unsupported, major] Risk assessment: Autonomy & actions / behaviour: The counting mode does not change the actions that consuming rules take. | Found: Searched: exact data match counting data permissions actions. Read the new-experience creation page and EDM overview; they describe counting and supported consumers, not an assurance that consuming-rule actions remain unchanged. | Fix: Replace 'The counting mode changes the number those rules see, not the action they take.' with 'The counting mode changes how EDM matches are counted.'
These are minor and do not hold the page. Where removing the statement, or rewording it in the words the fix gives, settles one, do that; otherwise leave it as it is. A minor finding may also add a source link it names for a statement already on the page. It adds no row and nothing that needs research.
- [supported, minor] Why it matters; Risk assessment: Data exposure; Governance guidance / behaviour: DLP and auto-labelling rules using EDM can require multiple matches, so counts can affect whether their conditions are met. | Found: DLP or auto-labeling rules that require multiple matches don't trigger ... Make sure that the proximity requirements for both your EDM SIT and the base SITs are met. | Fix: Add https://learn.microsoft.com/purview/sit-get-started-exact-data-match-test to sources for the statements about EDM match-count conditions in DLP and auto-labelling rules. | Source: https://learn.microsoft.com/purview/sit-get-started-exact-data-match-test#troubleshooting-tips
- [contradicted, minor] Governance guidance: Before rollout and After rollout; Governance controls / consistency: The checklist tells readers to record and revisit rule instance-count thresholds, but these controls have no table row. | Found: Record the instance-count thresholds on those rules ... Revisit rule thresholds ... Controls table: Unique counting mode (primary match-level or row-level) of an EDM SIT. | Fix: Remove 'Record the instance-count thresholds on those rules so you can compare them with row-level counts.' and 'Revisit rule thresholds if row-level counts fall below the numbers the rules expect.' from the governance checklist, or narrow those steps to comparing classifier match counts. The threshold controls have no row; do not add rows as part of this correction.
-->
