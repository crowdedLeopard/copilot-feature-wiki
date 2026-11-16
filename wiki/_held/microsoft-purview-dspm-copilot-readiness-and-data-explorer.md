---
title: "Microsoft Purview DSPM: Copilot readiness and data explorer"
slug: "microsoft-purview-dspm-copilot-readiness-and-data-explorer"
roadmapId: 571157
topic: "governance"
products: ["Microsoft Purview"]
summary: "Microsoft plans two new Purview DSPM experiences: a Copilot readiness view and a data explorer for sites and sensitive data. They are admin-side views, so security teams should review them; licensing is not yet published."
status: "in-development"
releasePhase: ["General Availability","Preview"]
clouds: ["Worldwide (Standard Multi-Tenant)"]
platforms: ["Web"]
targetDate: "March CY2027"
previewDate: "January CY2027"
risk: "low"
cost: "low"
impact: "low"
defaultState: "unknown"
action: "review"
licensing:
  model: "unknown"
  notes: "Not yet published for these two experiences. The Learn page on DSPM prerequisites says you need a supporting licence for the Purview solution and a supported region, and names no licence."
audiences: ["security","compliance","m365-admin"]
tags: ["purview","dspm","m365-copilot","oversharing","data-governance","sharepoint"]
sources:
  - title: "Microsoft 365 Roadmap 571157"
    url: "https://www.microsoft.com/microsoft-365/roadmap?id=571157"
    kind: "roadmap"
  - title: "Learn about Data Security Posture Management"
    url: "https://learn.microsoft.com/purview/data-security-posture-management-learn-about"
    kind: "learn"
  - title: "Considerations for Microsoft Purview Data Security Posture Management"
    url: "https://learn.microsoft.com/purview/data-security-posture-management-considerations"
    kind: "learn"
  - title: "Permissions for Data Security Posture Management"
    url: "https://learn.microsoft.com/purview/data-security-posture-management-permissions"
    kind: "learn"
  - title: "Prevent oversharing with data risk assessments from Data Security Posture Management"
    url: "https://learn.microsoft.com/purview/data-security-posture-management-oversharing"
    kind: "learn"
videos: []
related: ["purview-dlp-block-sensitive-data-in-copilot-web-search","purview-retention-last-accessed-sharepoint-onedrive","copilot-studio-purview-information-protection-labelled-files"]
controls:
  - governs: "Tenant-wide switch for the readiness and data explorer experiences"
    scope: "tenant"
    ui: null
    api: null
    note: "Searched Microsoft Learn in November 2026; no switch or API for the two new experiences is documented."
  - governs: "Oversharing findings and remediation in DSPM data risk assessments"
    scope: "tenant"
    ui:
      surface: "Microsoft Purview portal"
      path: "DSPM > Discover > Data risk assessments"
      docs: "https://learn.microsoft.com/purview/data-security-posture-management-oversharing"
    api: null
    note: "Existing DSPM feature, not the new readiness view."
  - governs: "Sensitive-data investigation in DSPM asset explorer today"
    scope: "tenant"
    ui:
      surface: "Microsoft Purview portal"
      path: "DSPM > Discover > Asset explorer"
      docs: "https://learn.microsoft.com/purview/data-security-posture-management-considerations"
    api: null
    note: "Existing DSPM feature and the current alternative; not the new data explorer. Learn says its Agent tab hosts the Data Security Posture Agent, which is in preview."
confidence: "medium"
created: "2026-11-16"
updated: "2026-11-16"
roadmapModified: "2026-11-11T00:52:46"
changes:
  - date: "2026-11-16"
    note: "First briefing for this roadmap item, which Microsoft Learn does not yet describe; DSPM background and roles come from the general DSPM pages."
version: 1
---

## What's changing

Microsoft plans to add two experiences to Microsoft Purview Data Security Posture Management (DSPM): a readiness view for Microsoft Copilot and a data explorer. The roadmap item describes both as ways for data security teams to see their data security posture, assess risks, investigate findings and prioritise remediation.

The readiness for Microsoft Copilot experience is described as bringing together insights into sensitive data exposure, oversharing and protection coverage, so teams can judge progress towards a more secure Microsoft Copilot deployment. The data explorer is described as a central place to see where sensitive data exists across sites, review site-level access and open preset views, so investigators switch between fewer tools.

Microsoft Learn describes DSPM generally but, at the time of writing (November 2026), does not describe either new experience, so what is said here about their behaviour is the roadmap's description. Do not assume details such as which data sources, thresholds or actions they include.

The roadmap item is In development, with a preview date of January CY2027 and a target date of March CY2027, for Worldwide (Standard Multi-Tenant) on the web. Both dates are Microsoft's targets, and the item lists General Availability and Preview as release phases.

## Why it matters

Oversharing is the usual reason a Copilot rollout stalls, and this change moves the evidence for it into the DSPM portal that data security teams already use. If your team plans a Microsoft 365 Copilot deployment in 2027, these views are likely to become where the readiness case is made, so decide who owns that review before they appear.

If nobody acts, nothing breaks: the roadmap describes insight and investigation views, not enforcement. The cost of waiting is that the people best placed to read site-level access and sensitive data exposure may not hold the DSPM roles when the views arrive.

## Risk assessment

**Data exposure**
- The roadmap describes a data explorer that shows sensitive data and site-level access in one place. Such a view concentrates sensitive-data findings, so keep access to the DSPM role lists below; which roles the new data explorer needs is not yet documented.
- Learn states that restricted administrators in a tenant with administrative units see data only for users in their assigned units. Microsoft has not said whether the new views follow that rule.

**Security & identity**
- Learn lists the Microsoft Entra Compliance Administrator role, the Microsoft Entra Global Administrator role and the Microsoft Purview Compliance Administrator role group as able to view, create and edit in DSPM. A reader who only needs to look can use a view-only role such as the Microsoft Purview Security Reader role group.

**Autonomy & actions**
- The roadmap describes assessment and investigation, not automatic changes. Existing DSPM data risk assessments show what remediation looks like today: their Protect tab offers actions such as a DLP policy or a sensitivity label. Whether the new readiness view offers the same actions is not documented.

**Change & support**
- Expect questions from teams who are told their sites are not ready for Copilot. Agree the escalation route for site owners before the views reach your tenant.
- Learn states that Microsoft pauses background refresh of Microsoft 365 data in DSPM when no one has opened the solution for more than 60 days, so readiness figures can be stale in a tenant where nobody visits.

## Cost and licensing

Microsoft has not published the licence, meter or price for the readiness and data explorer experiences, so no cost can be stated for them. The Learn page on DSPM considerations lists a supporting licence for the Microsoft Purview solution and a supported region as prerequisites, and does not name the licence; it points to the Microsoft Purview service description.

The same page states that, for Microsoft 365 Copilot and agents, users are assigned a licence for Microsoft 365 Copilot. That prerequisite concerns monitoring Copilot interactions in DSPM, not the new views, which Learn does not yet cover.

The cost known today is admin time: reading the findings, deciding on remediation and talking to site owners. No meter or cap is documented for these experiences at the time of writing (November 2026).

## Scope

The roadmap lists the Worldwide (Standard Multi-Tenant) cloud and the Web platform only; it lists no US Government cloud. Learn describes DSPM as used from the Microsoft Purview portal, and the audience is data security and compliance administrators rather than end users.

Rollout mechanics, any admin switch and any prerequisite specific to the two new experiences are not yet documented. For DSPM generally, Learn states that first-time use prompts you to accept initial setup tasks if they are not already turned on for the tenant, and advises allowing a day or so before data appears.

## Governance guidance

### Before rollout
- Name an owner for the Copilot readiness review in the data security team, and agree who briefs SharePoint site owners on what the findings mean.
- Compare the people who will use these views with the DSPM role lists in Learn, and prefer the view-only roles for readers who do not need to act.
- Open the existing data risk assessments and asset explorer in DSPM to learn how oversharing findings look today, so the new views are judged against a baseline.

### At rollout
- Read the preview documentation when Microsoft publishes it and record the licence, default state and any admin switch it names.
- Run the preview with a small security group first, and check whether results respect administrative units.

### After rollout
- Open DSPM at least every 60 days so Microsoft 365 data refresh is not paused.
- Turn findings into tracked work for site owners, and recheck the same sites after remediation.

## Governance controls

<p class="controls__lead">Where each control lives. The left column says what the setting decides and how far it reaches; the middle gives the admin centre and the exact path; the right gives the script, API or command that does the same. <em>Not yet documented</em> means Microsoft has not published a control for that surface, so there is nothing to configure yet.</p>

<table class="controls">
<thead><tr><th>Control</th><th>Admin UI</th><th>API and automation</th></tr></thead>
<tbody>
<tr><td data-label="Control"><strong>Tenant-wide switch for the readiness and data explorer experiences</strong><br><small>Tenant</small><br><small class="controls__note">Searched Microsoft Learn in November 2026; no switch or API for the two new experiences is documented.</small></td><td data-label="Admin UI"><em class="controls__gap">Not yet documented</em></td><td data-label="API and automation"><em class="controls__gap">Not yet documented</em></td></tr>
<tr><td data-label="Control"><strong>Oversharing findings and remediation in DSPM data risk assessments</strong><br><small>Tenant</small><br><small class="controls__note">Existing DSPM feature, not the new readiness view.</small></td><td data-label="Admin UI"><strong>Microsoft Purview portal</strong><br>DSPM › Discover › Data risk assessments <a href="https://learn.microsoft.com/purview/data-security-posture-management-oversharing" rel="noopener" class="controls__docs">Learn</a></td><td data-label="API and automation"><em class="controls__gap">Not yet documented</em></td></tr>
<tr><td data-label="Control"><strong>Sensitive-data investigation in DSPM asset explorer today</strong><br><small>Tenant</small><br><small class="controls__note">Existing DSPM feature and the current alternative; not the new data explorer. Learn says its Agent tab hosts the Data Security Posture Agent, which is in preview.</small></td><td data-label="Admin UI"><strong>Microsoft Purview portal</strong><br>DSPM › Discover › Asset explorer <a href="https://learn.microsoft.com/purview/data-security-posture-management-considerations" rel="noopener" class="controls__docs">Learn</a></td><td data-label="API and automation"><em class="controls__gap">Not yet documented</em></td></tr>
</tbody>
</table>

Learn documents no tenant switch, role or API specific to the two new experiences at the time of writing (November 2026). Access to DSPM today rests on the roles listed on the Learn permissions page: Microsoft Entra Compliance Administrator, Microsoft Entra Global Administrator or the Microsoft Purview Compliance Administrator role group to view, create and edit, and view-only roles such as Microsoft Purview Security Reader. The existing data risk assessments and asset explorer are the current alternative for oversharing and sensitive-data investigation; they are not controls over the new views.

## Open questions

- Which licence will the Copilot readiness view and the data explorer need, and will they be metered? Watch the Microsoft Purview service description and the DSPM Learn pages.
- Will either experience be on by default for tenants that already use DSPM, or will an admin have to enable it? Watch Message center.
- Which roles will be needed to open the data explorer and to see site-level access, and will administrative units limit what restricted administrators see?
- Will the readiness view offer remediation actions, or only reporting?
- Is the readiness view new to the current DSPM or an update of an existing page? The roadmap record does not say.

<!-- rationale
risk: Low. The roadmap describes read-and-investigate views for data security teams, so nothing reaches users or changes data unless an admin acts; the default state is not stated, so this rates today's behaviour continuing.
cost: Low. The only cost the sources show is admin time; the licence for these two experiences is not yet published, and the DSPM Learn page lists only 'a supporting license' without naming one.
impact: Low. Data security and compliance administrators are the audience; end users and makers will not see these views.
-->
