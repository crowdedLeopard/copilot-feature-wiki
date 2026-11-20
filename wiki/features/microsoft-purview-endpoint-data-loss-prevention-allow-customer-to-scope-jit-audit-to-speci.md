---
title: "Microsoft Purview Endpoint DLP: scope just-in-time audit to users and groups"
slug: "microsoft-purview-endpoint-data-loss-prevention-allow-customer-to-scope-jit-audit-to-speci"
roadmapId: 562991
topic: "governance"
products: ["Microsoft Purview"]
summary: "Endpoint DLP just-in-time protection will require explicit audit scope configuration; block-scope users will also continue to have activity recorded. Admins should review who generates JIT audit events today and add them before the December 2026 rollout."
status: "in-development"
releasePhase: ["General Availability"]
clouds: ["Worldwide (Standard Multi-Tenant)"]
platforms: ["Web"]
targetDate: "December CY2026"
previewDate: null
risk: "medium"
cost: "low"
impact: "low"
defaultState: "unknown"
action: "act-now"
licensing:
  model: "included"
  notes: "The Microsoft Purview service description lists Endpoint DLP as Included for Microsoft 365 E5/A5/G5 and the Purview Suite plans it names. No licence or price specific to scoping JIT audit is published at the time of writing (November 2026)."
audiences: ["compliance","security","m365-admin"]
tags: ["purview","endpoint-dlp","dlp","auditing","just-in-time-protection"]
sources:
  - title: "Microsoft 365 Roadmap 562991"
    url: "https://www.microsoft.com/microsoft-365/roadmap?id=562991"
    kind: "roadmap"
  - title: "Get started with Microsoft Purview Data Loss Prevention just-in-time protection"
    url: "https://learn.microsoft.com/purview/endpoint-dlp-get-started-jit"
    kind: "learn"
  - title: "Learn about Microsoft Purview Data Loss Prevention just-in-time protection"
    url: "https://learn.microsoft.com/purview/endpoint-dlp-learn-about-jit"
    kind: "learn"
  - title: "Get started with endpoint data loss prevention"
    url: "https://learn.microsoft.com/purview/endpoint-dlp-getting-started"
    kind: "learn"
  - title: "Microsoft Purview service description"
    url: "https://learn.microsoft.com/office365/servicedescriptions/microsoft-365-service-descriptions/microsoft-365-tenantlevel-services-licensing-guidance/microsoft-purview-service-description"
    kind: "learn"
  - title: "MC1387575: (Updated) Microsoft Purview | Endpoint Data Loss Prevention: Scope Just-in-time audit by user or group"
    url: "https://admin.microsoft.com/Adminportal/Home#/MessageCenter/:/messages/MC1387575"
    kind: "message-center"
videos: []
related: ["auditing","microsoft-purview-endpoint-data-loss-prevention-policy-sync-and-device-health-ai-powered-i","microsoft-purview-endpoint-data-loss-prevention-view-only-access-to-device-onboarding-with"]
controls:
  - governs: "Which users and groups just-in-time protection audits and blocks"
    scope: "tenant"
    ui:
      surface: "Microsoft Purview portal"
      path: "Settings > Data Loss Prevention > Just-in-time protection"
      docs: "https://learn.microsoft.com/purview/endpoint-dlp-get-started-jit"
    api: null
    note: "Microsoft's notice MC1387575 places Audit covered user activities on the Devices tab here; Learn does not yet document that setting."
  - governs: "Whether just-in-time protection monitors Devices"
    scope: "tenant"
    ui:
      surface: "Microsoft Purview portal"
      path: "Settings > Data Loss Prevention > Just-in-time protection > Choose which locations to monitor > Devices"
      docs: "https://learn.microsoft.com/purview/endpoint-dlp-get-started-jit"
    api: null
    note: "Existing control, not the audit scope: it sets the location JIT monitors, not which users are audited."
confidence: "medium"
created: "2026-11-19"
updated: "2026-11-19"
roadmapModified: "2026-09-14T23:03:47"
changes:
  - date: "2026-11-19"
    note: "New briefing: JIT audit scoping in Endpoint DLP, with the notice's rollout window and the gap between the notice and Microsoft Learn."
  - date: "2026-11-19"
    note: "Checked against Microsoft Learn by gpt-6.1-sol: held: 2 of 52 statements contradicted, 0 unconfirmed; taken offline until corrected"
  - date: "2026-11-19"
    note: "Corrected the summary and Why it matters to say block-scope activity is also recorded, and set the action to act-now given the December 2026 rollout."
  - date: "2026-11-19"
    note: "Checked against Microsoft Learn by gpt-6.1-sol: passed with 0 of 50 statements not yet confirmed"
  - date: "2026-11-20"
    note: "Checked against Microsoft Learn by gpt-6.1-sol: passed with 0 of 57 statements not yet confirmed"
version: 2
verification:
  status: "verified-with-gaps"
  date: "2026-11-20"
  version: 2
  model: "gpt-6.1-sol"
  engine: "copilot"
  claims: 57
  confirmed: 57
  unconfirmed: 0
  contradicted: 0
  attempts: 0
  hash: "a97cbb53ea0ef407370683bf6e8278c4"
---

## What's changing

Microsoft plans to let administrators choose which users and groups have their activity audited when just-in-time (JIT) protection is on in Microsoft Purview Endpoint Data Loss Prevention. The roadmap item says customers will be able to include or exclude users or groups so that audits are generated only for the selected ones.

Microsoft's notice MC1387575 gives the detail. It says audit logging "must be explicitly configured" so that only users or groups in the audit scope have their activities logged, where previously JIT activity was logged automatically for users not targeted by policies. It says JIT audit is managed through a setting called **Audit covered user activities** under Settings > Data loss prevention > Just-in-time protection, on the Devices tab. Per the notice, users in audit scope see no enforcement actions and their activities are recorded in Activity explorer; users in block scope are prevented from completing actions while files are evaluated, and their activities are also recorded; users in neither scope have no JIT-covered activity recorded.

The audited activities the notice lists are printing, transfers to removable media or network shares, copying or moving files using Remote Desktop Protocol or an unapproved Bluetooth app, and uploading files to a restricted cloud service domain.

The roadmap item is In development, with a target of December CY2026 and release phase General Availability. The notice, updated 14 September 2026, moves the start of the rollout to mid-December 2026 (previously mid-September) with completion expected by end of December 2026. Microsoft Learn's just-in-time protection pages do not yet describe the Audit covered user activities setting (at the time of writing, November 2026), so its behaviour here is as the notice and roadmap describe it.

## Why it matters

This change decides which activity your DLP team can see. JIT audit events show in Activity explorer and, on the notice's description, move from logged automatically to explicitly scoped audit logging, while block-scope activity is also recorded. If the audit scope is left empty or incomplete, people who generate JIT events today may stop appearing in investigations and compliance reviews.

Microsoft has not stated what happens on arrival if nobody acts, so treat the notice's own recommendations as the plan: find who currently generates JIT audit events, add them to the audit scope, and confirm the events still appear after rollout.

## Risk assessment

**Data exposure**
- The notice does not describe new data access. It changes which users' JIT activity is recorded in Activity explorer. Users outside both audit and block scope are described as having no JIT-covered activity recorded, which is a visibility gap rather than an exposure of data.

**Security & identity**
- Audit coverage now depends on the users and groups you select. The notice says scope may be applied by user or group selection, so changes to those groups change what is recorded. Review who maintains them.
- The notice lists audit events as relevant to compliance and investigation workflows; incomplete scope weakens that evidence for out-of-scope users.

**Autonomy & actions**
- Users in block scope are prevented from completing actions while files are evaluated for sensitive information, per the notice. Putting a user in audit scope instead means no enforcement action is shown to them.

**Change & support**
- The notice asks for anti-malware client version 4.18.26060 or later before enabling the feature, whereas the Learn get-started page gives 4.18.23080 as the minimum for JIT protection generally. Check device versions against the notice.
- Learn says to allow at least an hour for JIT setting updates to reach client devices, so scope changes are not immediate.

## Cost and licensing

The Microsoft Purview service description lists Endpoint Data Loss Prevention (DLP) as Included for Microsoft 365 E5/A5/G5, Microsoft Purview Suite/EDU/GOV/FLW and Microsoft Defender + Purview Suite FLW, and Microsoft 365 E5/A5/F5/G5 Information Protection & Governance. The Endpoint DLP getting-started page points to the Microsoft 365 licensing pages for SKU details.

Neither Microsoft's notice nor Learn's JIT pages state a meter, price or separate licence for scoping JIT audit, and none is published at the time of writing (November 2026). The costs the sources show are indirect: administrator time to review and set the audit scope, and updating the anti-malware client on devices.

## Scope

Microsoft's notice says admins managing Microsoft Purview Endpoint DLP and JIT protection settings are affected, and that the change touches Endpoint DLP and Activity explorer.

- **Devices:** Learn lists JIT protection support for Windows 10, Windows 11 and the three most recent macOS versions. The roadmap lists the platform as Web.
- **Cloud:** the roadmap record lists Worldwide (Standard Multi-Tenant).
- **Rollout:** the notice gives mid-December to end of December 2026; the roadmap target is December CY2026.
- **Prerequisite:** the notice asks for anti-malware client 4.18.26060 or later; Learn gives 4.18.23080 as the JIT minimum.
- **Roles:** Learn's JIT pages name no role for changing the setting at the time of writing (November 2026).

## Governance guidance

### Before rollout
- Review your current JIT configuration at Settings > Data Loss Prevention > Just-in-time protection and identify users and groups that generate JIT audit events today in Activity explorer.
- Check the anti-malware client version on devices against 4.18.26060 or later from the notice, using the Learn Advanced hunting query or the Diagnostics page.
- Agree an owner for the groups you will use as audit scope, since group membership decides what is recorded.

### At rollout
- Add every user or group that should keep generating JIT audit events to the audit scope, as the notice recommends.
- Turn on Audit covered user activities on the Devices tab once the scope is set, as the notice describes.
- Allow at least an hour for the setting to reach devices before judging results.

### After rollout
- Validate in Activity explorer that expected activities appear for in-scope users, as the notice recommends.
- Compare against your earlier list of JIT audit users to find anyone who has dropped out.

## Governance controls

<p class="controls__lead">Where each control lives. The left column says what the setting decides and how far it reaches; the middle gives the admin centre and the exact path; the right gives the script, API or command that does the same. <em>Not yet documented</em> means Microsoft has not published a control for that surface, so there is nothing to configure yet.</p>

<table class="controls">
<thead><tr><th>Control</th><th>Admin UI</th><th>API and automation</th></tr></thead>
<tbody>
<tr><td data-label="Control"><strong>Which users and groups just-in-time protection audits and blocks</strong><br><small>Tenant</small><br><small class="controls__note">Microsoft's notice MC1387575 places Audit covered user activities on the Devices tab here; Learn does not yet document that setting.</small></td><td data-label="Admin UI"><strong>Microsoft Purview portal</strong><br>Settings › Data Loss Prevention › Just-in-time protection <a href="https://learn.microsoft.com/purview/endpoint-dlp-get-started-jit" rel="noopener" class="controls__docs">Learn</a></td><td data-label="API and automation"><em class="controls__gap">Not yet documented</em></td></tr>
<tr><td data-label="Control"><strong>Whether just-in-time protection monitors Devices</strong><br><small>Tenant</small><br><small class="controls__note">Existing control, not the audit scope: it sets the location JIT monitors, not which users are audited.</small></td><td data-label="Admin UI"><strong>Microsoft Purview portal</strong><br>Settings › Data Loss Prevention › Just-in-time protection › Choose which locations to monitor › Devices <a href="https://learn.microsoft.com/purview/endpoint-dlp-get-started-jit" rel="noopener" class="controls__docs">Learn</a></td><td data-label="API and automation"><em class="controls__gap">Not yet documented</em></td></tr>
</tbody>
</table>

The notice names two scopes, audit and block. The roadmap item speaks of including or excluding users and groups, while the notice describes explicit inclusion; the setting's exact options are not yet documented on Learn.

The path in the table is the Learn page's route to Just-in-time protection settings. The notice places Audit covered user activities on the Devices tab of that page; Learn does not yet document that setting. Microsoft Learn documents no PowerShell, Graph or other API for JIT protection settings at the time of writing (November 2026), so changes are made in the portal. Learn's JIT pages name no role needed to change the setting at the time of writing.

## Open questions

- Does the setting support excluding users or groups, as the roadmap item says, or does it work by explicit inclusion as Microsoft's notice describes? Watch the Just-in-time protection Learn pages and MC1387575.
- What is the state of Audit covered user activities when the feature arrives, and are users outside any scope unaudited until an admin acts? Watch MC1387575 and the Learn pages.
- Which anti-malware client version is required: 4.18.26060 or later as the notice says, or the Learn minimum of 4.18.23080?
- Which Purview role can edit the audit and block scope, and can an API manage it?

<!-- rationale
risk: Medium. Microsoft's notice says users outside the audit and block scope will have no JIT activity recorded, so an unreviewed tenant could lose audit visibility; existing admin controls cover this once configured.
cost: Low. The only cost the sources show is admin time and client updates; Endpoint DLP is listed as included in the Microsoft 365 E5-level plans on the Purview service description, and no charge specific to this setting is published.
impact: Low. Admins who manage Endpoint DLP and just-in-time protection notice first; users in block scope see JIT blocking as before, and out-of-scope users see no change on their device.
-->

<!-- verifier-findings (2026-11-20, verified-with-gaps; checked by gpt-6.1-sol)
The independent check found fault only with the statements below. This is a correction: change what they name and carry the rest of the page over unchanged.
These are minor and do not hold the page. Where removing the statement, or rewording it in the words the fix gives, settles one, do that; otherwise leave it as it is. A minor finding may also add a source link it names for a statement already on the page. It adds no row and nothing that needs research.
- [supported, minor] controls[0].ui; Governance controls; Governance guidance / Before rollout / admin-path: Microsoft Purview portal > Settings > Data Loss Prevention > Just-in-time protection reaches the page holding audit and block scoping. | Found: Sign in to the Microsoft Purview portal. 2. Select Settings > Data Loss Prevention > Just-in-time protection. | Fix: Extend controls[0].ui.path and its rendered table path to 'Settings > Data Loss Prevention > Just-in-time protection > Devices > Audit covered user activities'. Retain the note attributing the Devices tab and audit setting to MC1387575, which supplies those final steps. | Source: https://learn.microsoft.com/purview/endpoint-dlp-get-started-jit
-->
