---
title: "Microsoft Purview Endpoint DLP: show the full path of the target domain in Activity explorer"
slug: "microsoft-purview-compliance-portal-endpoint-data-loss-prevention-endpoint-dlp-shows-full"
roadmapId: 480734
topic: "governance"
products: ["Microsoft Purview"]
summary: "Endpoint DLP events in Activity explorer are to show the full path of the target domain, not only the domain name. The roadmap lists it as launched; no admin action is documented."
status: "launched"
releasePhase: ["General Availability"]
clouds: ["GCC","GCC High","DoD"]
platforms: ["Web"]
targetDate: "April CY2025"
previewDate: null
risk: "low"
cost: "low"
impact: "low"
defaultState: "unknown"
action: "review"
licensing:
  model: "included"
  notes: "Microsoft's Purview service description lists Endpoint Data Loss Prevention (DLP) as Included for plans such as Microsoft 365 E5/A5/G5. No licence specific to this display change is published."
audiences: ["compliance","security"]
tags: ["endpoint-dlp","dlp","auditing","monitoring","privacy","purview","gcc","gcc-high","dod"]
sources:
  - title: "Microsoft 365 Roadmap 480734"
    url: "https://www.microsoft.com/microsoft-365/roadmap?id=480734"
    kind: "roadmap"
  - title: "Get started with activity explorer"
    url: "https://learn.microsoft.com/purview/data-classification-activity-explorer"
    kind: "learn"
  - title: "Learn about Endpoint data loss prevention"
    url: "https://learn.microsoft.com/purview/endpoint-dlp-learn-about"
    kind: "learn"
  - title: "Microsoft Purview service description"
    url: "https://learn.microsoft.com/office365/servicedescriptions/microsoft-365-service-descriptions/microsoft-365-tenantlevel-services-licensing-guidance/microsoft-purview-service-description"
    kind: "learn"
  - title: "dlpEndpointAuditRecord resource type"
    url: "https://learn.microsoft.com/graph/api/resources/security-dlpendpointauditrecord?view=graph-rest-1.0"
    kind: "learn"
videos: []
related: ["endpoint-dlp","auditing","microsoft-purview-compliance-portal-data-loss-prevention-optical-character-recognition-ocr"]
controls:
  - governs: "How much of the target address Activity explorer shows for Endpoint DLP events"
    scope: "tenant"
    ui: null
    api: null
    note: "No setting documented. Access to Activity explorer is held by the Purview roles Learn lists for it."
confidence: "medium"
created: "2026-11-23"
updated: "2026-11-23"
roadmapModified: "2026-09-16T22:57:03"
changes:
  - date: "2026-11-23"
    note: "First briefing: roadmap-only description of the full target path in Activity explorer; Learn does not yet describe it."
  - date: "2026-11-23"
    note: "Checked against Microsoft Learn by gpt-6.1-sol: passed with 0 of 42 statements not yet confirmed"
version: 1
verification:
  status: "verified-with-gaps"
  date: "2026-11-23"
  version: 1
  model: "gpt-6.1-sol"
  engine: "copilot"
  claims: 42
  confirmed: 40
  unconfirmed: 0
  contradicted: 2
  attempts: 0
  hash: "c1b89a1aabdff0645dea233779663c3a"
---

## What's changing

Endpoint DLP events in Activity explorer are to show the full path of the target domain, not just the domain name. That is the whole of the roadmap item's description: "Endpoint DLP should show full path of target domain and not just the domain name in Activity Explorer."

Microsoft Learn does not describe this change at the time of writing (November 2026), so the behaviour above is the roadmap's description and nothing more. Learn does explain the surfaces involved: Activity explorer takes its data from the Microsoft 365 unified audit logs, and when Endpoint DLP is enabled it also includes device-level activities from onboarded Windows 10, Windows 11 and the three most recent major macOS versions. Which activities, browsers or operating systems show the longer value is not stated.

The roadmap record gives the status as Launched, with a target of April CY2025, release phase General Availability and platform Web. It is listed for GCC, GCC High and DoD. Microsoft has not stated whether it is on by default or whether events recorded before the change show the longer value.

## Why it matters

For an analyst reading Endpoint DLP events, a full path of the target says more about where a file went than a domain name does. Investigations of uploads to cloud services should be easier to scope, though Learn does not describe how the path is used or which events carry it.

A full path can also be more sensitive than a domain, and Learn does not say whether the path is shown in full or trimmed. Microsoft has not stated what happens on arrival, so the sensible view is to confirm who can open Activity explorer and treat what they can now see as potentially more detailed. No source says existing behaviour changes beyond the display.

## Risk assessment

**Data exposure**
- The roadmap says Activity explorer will show the full path of the target domain. A longer value can expose more about a destination than a domain name; Learn does not describe how paths are handled or whether any part is masked, so check what appears in your own events.
- Activity explorer reads from the Microsoft 365 unified audit logs, and Learn lists the Purview roles and role groups that can open it. Anyone holding those roles can see the events.

**Security & identity**
- No change described: the roadmap item names no new permission, role or identity.

**Autonomy & actions**
- No change described: the item concerns what Activity explorer displays, and the roadmap describes no new policy action or enforcement.

**Change & support**
- Analysts may see longer values in Endpoint DLP events and ask why. Learn does not say whether events recorded earlier show the longer value, so do not promise reports that compare old and new events.

## Cost and licensing

Microsoft's Purview service description lists Endpoint Data Loss Prevention (DLP) as Included for plans such as Microsoft 365 E5/A5/G5 and Microsoft Purview Suite. Microsoft Learn publishes no separate licence, meter or price for this display change at the time of writing (November 2026).

The indirect cost is admin and analyst time to confirm who can read Activity explorer and to brief them on the longer value.

## Scope

The roadmap lists the clouds GCC, GCC High and DoD, the platform Web and release phase General Availability, with the status Launched and a target of April CY2025. Learn states that Activity explorer includes device-level activities from onboarded Windows 10, Windows 11 and the three most recent major macOS versions once Endpoint DLP is enabled; it does not say which of those show the longer value.

Learn lists these Microsoft Purview roles for Activity explorer: Information Protection Admin, Information Protection Analyst, Information Protection Investigator and Information Protection Reader (along with Information Protection Admin). Learn also lists Microsoft 365 roles, including Compliance Admins, Security Admins and Compliance Data Admins. Rollout mechanics are not stated.

## Governance guidance

### Before rollout
- Review who holds the Information Protection roles and the Microsoft 365 roles that Learn lists for Activity explorer, and remove access nobody needs.
- Tell compliance and security analysts that Endpoint DLP events may show a longer target value than before.

### At rollout
- Open a recent Endpoint DLP event in Activity explorer and note what the target field shows, so the team knows what the change looks like in your tenant.
- Confirm with Microsoft support or the Message center whether the change is on for your cloud if events still show only domain names.

### After rollout
- Check whether exported or shared Activity explorer data now carries longer values, and handle it as you handle other investigation data.
- Watch the Learn pages for Activity explorer and Endpoint DLP for a description of the field.

## Governance controls

<p class="controls__lead">Where each control lives. The left column says what the setting decides and how far it reaches; the middle gives the admin centre and the exact path; the right gives the script, API or command that does the same. <em>Not yet documented</em> means Microsoft has not published a control for that surface, so there is nothing to configure yet.</p>

<table class="controls">
<thead><tr><th>Control</th><th>Admin UI</th><th>API and automation</th></tr></thead>
<tbody>
<tr><td data-label="Control"><strong>How much of the target address Activity explorer shows for Endpoint DLP events</strong><br><small>Tenant</small><br><small class="controls__note">No setting documented. Access to Activity explorer is held by the Purview roles Learn lists for it.</small></td><td data-label="Admin UI"><em class="controls__gap">Not yet documented</em></td><td data-label="API and automation"><em class="controls__gap">Not yet documented</em></td></tr>
</tbody>
</table>

Microsoft Learn documents no setting to choose how much of the target address Activity explorer shows, so the row above is empty on both surfaces. Access to the data is governed by the Purview roles and role groups that Learn lists for Activity explorer, which give access to the whole feature rather than to this field.

## Open questions

- Does the longer value appear for every Endpoint DLP activity that has a target domain, or only for some, such as uploads to cloud services? Watch the Activity explorer and Endpoint DLP pages on Microsoft Learn.
- Is the path shown unredacted, and is it kept in the audit record as well as in Activity explorer?
- Do events recorded before the change show the longer value, given that Activity explorer reports on up to 30 days of data?
- Is the change on by default in GCC, GCC High and DoD, and does it depend on a client or extension version? Watch the Message center.

<!-- rationale
risk: Low. The roadmap describes a change to what Activity explorer displays for Endpoint DLP events, and no new data access or enforcement is described; the main exposure is what a full path reveals to people who can read the events.
cost: Low. Microsoft publishes no separate licence or meter for this change; Endpoint DLP itself is listed as included in plans such as Microsoft 365 E5/A5/G5, so the cost known is admin time to check access.
impact: Low. The change appears in Activity explorer, which is used by compliance and security staff holding the roles Microsoft lists; end users are not described as seeing anything different.
-->

<!-- verifier-findings (2026-11-23, verified-with-gaps; checked by gpt-6.1-sol)
The independent check found fault only with the statements below. This is a correction: change what they name and carry the rest of the page over unchanged.
These are minor and do not hold the page. Where removing the statement, or rewording it in the words the fix gives, settles one, do that; otherwise leave it as it is. A minor finding may also add a source link it names for a statement already on the page. It adds no row and nothing that needs research.
- [contradicted, minor] Governance guidance: Before rollout; controls / consistency: The checklist tells readers to review and remove Activity explorer role access, but the controls table contains no access-control row. | Found: Review who holds the Information Protection roles and the Microsoft 365 roles that Learn lists for Activity explorer, and remove access nobody needs. / The only control row governs how much of the target address Activity explorer shows. | Fix: Remove the first Before rollout checklist bullet about reviewing and removing role access; retain the documented role information in Scope and Governance controls. Do not add an unverified control row.
- [contradicted, minor] front matter: action / consistency: The review action rating treats this display change as an optional capability or a new control. | Found: action: "review" / Endpoint DLP events in Activity explorer are to show the full path of the target domain, not just the domain name. / Tell compliance and security analysts that Endpoint DLP events may show a longer target value than before. | Fix: Change action from "review" to "prepare": the standard places a redesign of existing behaviour that needs low-risk communication in prepare, including when its default state is unknown.
-->
