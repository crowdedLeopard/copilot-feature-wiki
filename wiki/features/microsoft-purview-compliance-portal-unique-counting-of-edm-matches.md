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
  - title: "Test an exact data match sensitive information type"
    url: "https://learn.microsoft.com/purview/sit-get-started-exact-data-match-test"
    kind: "learn"
videos: []
related: ["sensitive-information-types","classifiers"]
controls:
  - governs: "Unique counting mode (primary match-level or row-level) of an EDM SIT"
    scope: "other"
    ui:
      surface: "Microsoft Purview portal"
      path: "Data classification > EDM classifiers > + Create EDM classifier > Upload a file containing sample data > Upload file > Select primary elements > Configure detection rules for primary elements > unique counting mode"
      docs: "https://learn.microsoft.com/purview/sit-create-edm-sit-unified-ux-schema-rule-package"
    api: null
    note: "Set per classifier in the new EDM experience (New EDM experience toggle On). This route uses the sample-file method. Compliance administrator or Global administrator role."
confidence: "high"
created: "2026-11-25"
updated: "2026-11-25"
roadmapModified: "2025-09-24T23:15:27"
changes:
  - date: "2026-11-25"
    note: "First briefing for roadmap item 502551; Learn already documents the row-level counting option in the new EDM wizard."
  - date: "2026-11-25"
    note: "Checked against Microsoft Learn by gpt-6.1-sol: held: 2 of 49 statements contradicted, 2 unconfirmed; taken offline until corrected"
  - date: "2026-11-25"
    note: "Corrected the admin path to include the sample-file route; removed unsupported statements about data access and unchanged rule actions and two threshold checklist steps."
  - date: "2026-11-25"
    note: "Checked against Microsoft Learn by gpt-6.1-sol: passed with 0 of 49 statements not yet confirmed"
version: 2
verification:
  status: "verified-with-gaps"
  date: "2026-11-25"
  version: 2
  model: "gpt-6.1-sol"
  engine: "copilot"
  claims: 49
  confirmed: 49
  unconfirmed: 0
  contradicted: 0
  attempts: 0
  hash: "6dfd452444d5c2966f038edcbf449729"
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
- The option changes how matches in content already scanned by an EDM SIT are counted. Learn describes row-level counting as showing how many unique records (rows) are sensitive.
- Lower counts under row-level counting could keep an item below a DLP or labelling rule's instance threshold that primary match-level counting would reach. Review thresholds before switching an existing classifier's mode.

**Security & identity**
- No change to identity or permissions is documented. Learn names Compliance administrator and Global administrator as the roles that create, test and deploy a custom SIT in the portal.

**Autonomy & actions**
- EDM matches feed rules that can act, such as DLP and auto-labelling rules, which Learn lists among EDM SIT uses. The counting mode changes how EDM matches are counted.

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
- Decide, per classifier, whether the question is how many records are sensitive (row-level) or how many matches there are (primary match-level).

### At rollout
- Open the new EDM experience and check the **Configure detection rules for primary elements** step for the unique counting mode before building new classifiers.
- Create a test EDM SIT with each mode and run the documented Test-DataClassification cmdlet on sample text, then wait 24 hours before testing in a DLP policy, as Learn advises.
- Tell DLP and compliance owners that match totals depend on the mode chosen.

### After rollout
- Compare match counts and rule hits from row-level classifiers against older ones.
- Watch the roadmap item and Learn page for the default mode and for support in classic and PowerShell workflows.

## Governance controls

<p class="controls__lead">Where each control lives. The left column says what the setting decides and how far it reaches; the middle gives the admin centre and the exact path; the right gives the script, API or command that does the same. <em>Not yet documented</em> means Microsoft has not published a control for that surface, so there is nothing to configure yet.</p>

<table class="controls">
<thead><tr><th>Control</th><th>Admin UI</th><th>API and automation</th></tr></thead>
<tbody>
<tr><td data-label="Control"><strong>Unique counting mode (primary match-level or row-level) of an EDM SIT</strong><br><small class="controls__note">Set per classifier in the new EDM experience (New EDM experience toggle On). This route uses the sample-file method. Compliance administrator or Global administrator role.</small></td><td data-label="Admin UI"><strong>Microsoft Purview portal</strong><br>Data classification › EDM classifiers › + Create EDM classifier › Upload a file containing sample data › Upload file › Select primary elements › Configure detection rules for primary elements › unique counting mode <a href="https://learn.microsoft.com/purview/sit-create-edm-sit-unified-ux-schema-rule-package" rel="noopener" class="controls__docs">Learn</a></td><td data-label="API and automation"><em class="controls__gap">Not yet documented</em></td></tr>
</tbody>
</table>

The documented control is the choice made when an EDM SIT is created in the new experience, as a step of the classifier wizard. Creating, testing and deploying a custom SIT in the portal needs the Compliance administrator or Global administrator role. Scripted configuration of the mode is not yet documented: Microsoft Learn's rule-package pages describe no such setting at the time of writing (November 2026).

## Open questions

- Which counting mode is the default for new EDM SITs, and does any existing EDM SIT change behaviour? Watch the Learn page for creating an EDM SIT (new experience) and the roadmap item.
- Do the roadmap's October CY2025 general availability target and September CY2025 preview target still stand now that Learn already documents the option while the item reads In development?
- Can classic-experience or PowerShell-created EDM SITs use row-level counting, and is there any scripted way to set the mode?
- Can the mode be changed on an existing classifier without rebuilding it?

<!-- rationale
risk: Low. It adds a counting option to EDM sensitive information types that administrators build; no source says existing EDM types change.
cost: Low. Learn lists EDM-based classification as included in Office 365 E5, Microsoft 365 E5 and similar subscriptions; no meter is documented for this option, so the known cost is administrator time to review counts and thresholds.
impact: Low. The people who notice are the administrators who author EDM classifiers and the DLP and compliance staff who tune match-count thresholds.
-->

<!-- verifier-findings (2026-11-25, verified-with-gaps; checked by gpt-6.1-sol)
The independent check found fault only with the statements below. This is a correction: change what they name and carry the rest of the page over unchanged.
These are minor and do not hold the page. Where removing the statement, or rewording it in the words the fix gives, settles one, do that; otherwise leave it as it is. A minor finding may also add a source link it names for a statement already on the page. It adds no row and nothing that needs research.
- [supported, minor] controls[0].ui; Governance controls table; Scope; Governance guidance / admin-path: The Microsoft Purview portal sample-file route is Data classification > EDM classifiers > + Create EDM classifier > Upload a file containing sample data > Upload file > Select primary elements > Configure detection rules for primary elements > unique counting mode. | Found: Open Data classification > EDM classifiers. Choose + Create EDM classifier. Configure settings for data in selected columns. Configure detection rules for primary elements. Select the unique counting mode. | Fix: Use the full cited route: 'Data classification > EDM classifiers > + Create EDM classifier > Upload a file containing sample data > Upload file > Select primary elements > Configure settings for data in selected columns > Configure detection rules for primary elements > unique counting mode'. Retain the note requiring New EDM experience On. Add this qualification to the note: 'The creation guide starts at Data classification > EDM classifiers; the testing guide instead gives Information Protection > Classifiers > EDM classifiers.' Both guides are already cited. | Source: https://learn.microsoft.com/purview/sit-create-edm-sit-unified-ux-schema-rule-package
- [supported, minor] controls[0].note; Risk assessment; Scope; Governance controls / role: The creation guide names Compliance administrator as a role that can create, test and deploy a custom EDM SIT in the portal. | Found: To create, test, and deploy a custom sensitive information type (which an EDM SIT is) in the Microsoft Purview portal, use an account that is in one of these roles: Compliance administrator; Global administrator | Fix: Keep the creation-guide role statement, and add: 'The EDM overview also lists Exchange Admin for its tasks, while the creation guide lists Compliance administrator or Global administrator for portal creation, testing and deployment.' The overview is already cited at https://learn.microsoft.com/purview/sit-get-started-exact-data-match-based-sits-overview. | Source: https://learn.microsoft.com/purview/sit-create-edm-sit-unified-ux-schema-rule-package
- [supported, minor] Why it matters; Risk assessment: Autonomy & actions / applicability: EDM SITs can be used in auto-labelling. | Found: EDM SITs can be used in: Microsoft Purview Data Loss Prevention; Auto-labeling (service and client side) | Fix: Keep the cited EDM overview's applicability statement. Add: 'Microsoft's secure-by-default deployment guidance differs: it says exact data match is not currently available to auto-labelling.' Cite https://learn.microsoft.com/purview/deploymentmodels/depmod-secure-by-default-step3, whose Reduce false positives with advanced classifiers section says 'Exact data match and document fingerprinting aren't currently available to auto-labeling'. | Source: https://learn.microsoft.com/purview/sit-get-started-exact-data-match-based-sits-overview
- [supported, minor] Why it matters; Risk assessment: Data exposure; rationale: impact / behaviour: Match counts can determine whether policy conditions are met, supplying the premise for the briefing's threshold-risk analysis. | Found: A satisfied pattern match returns a count and confidence level, which you can use in the conditions in your policy. When you add a condition for detecting a sensitive information type to a policy, you can edit the count and confidence level as shown in the following diagram. | Fix: Add https://learn.microsoft.com/purview/sit-create-a-custom-sensitive-information-type-in-scc-powershell to sources for the general policy-count premise. The already-cited EDM testing page additionally confirms that DLP or auto-labeling rules requiring multiple matches might not trigger. | Source: https://learn.microsoft.com/purview/sit-create-a-custom-sensitive-information-type-in-scc-powershell
-->
