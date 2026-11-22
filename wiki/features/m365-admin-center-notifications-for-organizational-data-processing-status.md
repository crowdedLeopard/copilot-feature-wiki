---
title: "Microsoft 365 admin center: email notifications for organizational data processing status"
slug: "m365-admin-center-notifications-for-organizational-data-processing-status"
roadmapId: 564971
topic: "governance"
products: ["Microsoft 365 admin center"]
summary: "The roadmap plans on-by-default emails to organizational data source admins when connector processing completes or needs attention. Learn does not yet describe it. Admins can plan recipients and mailbox rules."
status: "in-development"
releasePhase: ["General Availability","Preview"]
clouds: ["Worldwide (Standard Multi-Tenant)"]
platforms: ["Web"]
targetDate: "July CY2026"
previewDate: "June CY2026"
risk: "low"
cost: "low"
impact: "low"
defaultState: "on"
action: "prepare"
licensing:
  model: "included"
  notes: "Learn says licensing for Microsoft 365 Organizational Data Service varies with the app that consumes the data (for example Exchange Online for Microsoft 365 Profile). A licence specific to these notifications is not yet published."
audiences: ["m365-admin","change-adoption"]
tags: ["m365-admin-center","organizational-data-service","hris-import","monitoring"]
sources:
  - title: "Microsoft 365 Roadmap 564971"
    url: "https://www.microsoft.com/microsoft-365/roadmap?id=564971"
    kind: "roadmap"
  - title: "How to get started with Microsoft 365 Organizational Data Service"
    url: "https://learn.microsoft.com/microsoft-365-apps/org-data-service/get-started"
    kind: "learn"
  - title: "Import and manage your organizational data with a .csv file"
    url: "https://learn.microsoft.com/microsoft-365-apps/org-data-service/import/import-orgdata"
    kind: "learn"
videos: []
related: ["m365-admin-center-organizational-data-granular-access-policy-controls-for-custom-attribute","m365-admin-center-data-quality-report-for-profile-data","microsoft-viva-import-hris-data-in-viva-glint-from-microsoft-admin-center"]
controls:
  - governs: "Unsubscribing from organizational data processing status emails"
    scope: "other"
    ui: null
    api: null
    note: "The roadmap describes an unsubscribe option. Microsoft Learn documents no path or call for it at the time of writing (November 2026). Unsubscribe scope is not yet documented."
confidence: "medium"
created: "2026-11-22"
updated: "2026-11-22"
roadmapModified: "2026-06-04T23:15:54"
changes:
  - date: "2026-11-22"
    note: "New briefing: planned on-by-default email notifications for organizational data processing status; Learn does not yet describe the feature."
  - date: "2026-11-22"
    note: "Checked against Microsoft Learn by gpt-6.1-sol: held: 2 of 53 statements contradicted, 4 unconfirmed; taken offline until corrected"
  - date: "2026-11-22"
    note: "Correction: removed an unsupported claim that the emails depend on the same connectors and roles, set the unsubscribe control's scope to other, and gave the Data connections path for checking validation status."
  - date: "2026-11-22"
    note: "Checked against Microsoft Learn by gpt-6.1-sol: held: 2 of 49 statements contradicted, 1 unconfirmed; taken offline until corrected"
  - date: "2026-11-22"
    note: "Correction: licensing model set to included (service licensing depends on the consuming app; none specific to the notifications is published), CSV-import role inconsistency noted, and checklist items without a controls-table row removed."
  - date: "2026-11-22"
    note: "Checked against Microsoft Learn by gpt-6.1-sol: passed: all 51 statements confirmed"
version: 3
verification:
  status: "verified"
  date: "2026-11-22"
  version: 3
  model: "gpt-6.1-sol"
  engine: "copilot"
  claims: 51
  confirmed: 51
  unconfirmed: 0
  contradicted: 0
  attempts: 0
  hash: "fc3fe71e4450362605eeda20014d6cc7"
---

## What's changing

The Microsoft 365 roadmap plans email notifications to organizational data source admins when data processing through one of their configured connectors completes successfully or requires attention. The roadmap says notifications are enabled by default, with an option to unsubscribe.

Microsoft Learn does not describe this feature yet, so what follows about its behaviour is the roadmap's description. Learn does describe the surrounding service, Microsoft 365 Organizational Data Service, which brings employee data into Microsoft 365 from HR systems and other sources through connector options (CSV Import, Workday, SAP SuccessFactors, Azure Blob Storage and an API-based connector in public preview). Its setup steps already include a step to monitor import status, where you track upload progress, review validation results and address issues found during processing. The roadmap item adds email on top of that.

The record lists the item as In development, with a preview target of June CY2026 and a general availability target of July CY2026, for Worldwide (Standard Multi-Tenant) on the web. Both target months have passed and the status is still In development at the time of writing (November 2026), so treat the dates as unconfirmed. No Message Center post was supplied with this item.

## Why it matters

If the roadmap description holds, organizational data source admins will start receiving email about import outcomes without having chosen to, because the default is on. Those admins should expect new messages, decide who should be on the receiving end and tell them what the emails mean before they arrive.

The benefit is earlier notice of imports that need attention. Microsoft has not published what the emails contain or how they are delivered, so do not build an alerting process on them until that is documented.

## Risk assessment

**Data exposure**
- The roadmap describes notifications about processing status, not data. Microsoft has not published the email content. Confirm whether messages could carry file names, record counts or error detail before forwarding them outside the admin team.

**Security & identity**
- The roadmap names organizational data source admins as recipients. Learn describes the Organizational Data Source Administrator role as the one with permissions to manage settings related to ingesting and managing Microsoft 365 Organizational Data Service. Anyone you assign that role may start receiving the emails.

**Autonomy & actions**
- No change: the roadmap describes an email notice only, and no automated action is described.

**Change & support**
- Notifications are on by default per the roadmap, so recipients may see unexpected mail and ask the help desk about it. The unsubscribe option is described in the roadmap, but Microsoft has not documented where it is or whether it applies per person or per connector.

## Cost and licensing

No licence or meter specific to these notifications is published at the time of writing (November 2026). The roadmap item names no licence.

Learn's getting-started page for Microsoft 365 Organizational Data Service says licensing requirements vary with the Microsoft 365 or Viva app that consumes the organizational data. Its table lists at least one Exchange Online licence in the tenant for Microsoft 365 Profile, a Microsoft Viva Insights licence (or a Microsoft 365 licence that includes Insights) for Insights, and a Microsoft Viva Glint licence (or a Microsoft 365 licence that includes Viva Glint) for Viva Glint. People Skills needs Microsoft 365 Copilot or Viva.

The indirect cost is admin time to review recipients and handle the emails.

## Scope

- **Recipients:** organizational data source admins, per the roadmap description. Which people that includes, for example whether Global Administrators are covered, is not stated.
- **Connectors:** the roadmap says notifications relate to "configured connectors". Learn lists CSV Import among the connector options, but whether CSV uploads are covered is not stated.
- **Clouds and platforms:** the record lists Worldwide (Standard Multi-Tenant) and Web. Other clouds are not listed on the roadmap item.
- **Release phase:** the record lists Preview and General Availability.
- **Prerequisites:** Learn says only Global Administrators and Organizational Data Source Administrators can upload data, and describes the role assignment in Microsoft Entra ID. The CSV-import page also says organizational data must be imported by the Organizational Data Source Administrator, although its task table lists Global/Organizational Data Source Administrator; the documentation is inconsistent.

## Governance guidance

### Before rollout
- Agree a shared mailbox or distribution arrangement if the HR data owners and IT want the same emails, after confirming how recipients are chosen.
- Brief the recipients that emails about import status are planned, so they are not mistaken for phishing or ignored.

### At rollout
- Check the Microsoft 365 admin center Message center for a post about this feature and read its rollout window and act-by date, if one appears.

### After rollout
- Decide who stays subscribed, using the unsubscribe option once Microsoft documents where it is.

## Governance controls

<p class="controls__lead">Where each control lives. The left column says what the setting decides and how far it reaches; the middle gives the admin centre and the exact path; the right gives the script, API or command that does the same. <em>Not yet documented</em> means Microsoft has not published a control for that surface, so there is nothing to configure yet.</p>

<table class="controls">
<thead><tr><th>Control</th><th>Admin UI</th><th>API and automation</th></tr></thead>
<tbody>
<tr><td data-label="Control"><strong>Unsubscribing from organizational data processing status emails</strong><br><small class="controls__note">The roadmap describes an unsubscribe option. Microsoft Learn documents no path or call for it at the time of writing (November 2026). Unsubscribe scope is not yet documented.</small></td><td data-label="Admin UI"><em class="controls__gap">Not yet documented</em></td><td data-label="API and automation"><em class="controls__gap">Not yet documented</em></td></tr>
</tbody>
</table>

Microsoft has not documented where the unsubscribe option sits, so the table records that gap. Until then the existing control over who is likely to be notified is the Organizational Data Source Administrator role, which a Global Administrator assigns in Microsoft Entra ID according to Learn. That role governs who manages organizational data imports. It is not documented as a notification setting, so do not treat it as one.

To check validation status, go to Microsoft 365 admin center > Settings > Viva > Data management > Microsoft 365 Organizational Data Service > Data connections.

## Open questions

- Where does an admin unsubscribe from the notifications, and is it per person, per connector or tenant-wide? Watch the Learn pages for Microsoft 365 Organizational Data Service and Message center.
- Who exactly receives the email: holders of the Organizational Data Source Administrator role only, or also Global Administrators or the person who set up each connector?
- Do the emails cover every connector option, including CSV Import and the API-based connector in public preview?
- What do the emails contain, and what counts as "requires attention"?
- Will rollout follow the July CY2026 target now that it has passed, and will Microsoft send a Message center post with an act-by date?

<!-- rationale
risk: Low. The roadmap describes email about processing status only, without describing changes to data access or automated actions, and it gives an unsubscribe option. What the emails contain is not yet published.
cost: Low. The only cost the sources show is admin time to review recipients and handle the emails. No meter or licence specific to the notifications is published.
impact: Low. The roadmap names organizational data source admins as the recipients, so only the people who manage organizational data imports are likely to notice.
-->
