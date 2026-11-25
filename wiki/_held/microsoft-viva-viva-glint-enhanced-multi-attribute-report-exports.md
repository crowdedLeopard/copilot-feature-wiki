---
title: "Viva Glint: enhanced multi-attribute report exports"
slug: "microsoft-viva-viva-glint-enhanced-multi-attribute-report-exports"
roadmapId: 580455
topic: "modern-work"
products: ["Microsoft Viva"]
summary: "Microsoft plans to widen who can use the Viva Glint Multi-attribute export, raise its supported scale and add control over the questions and attributes included. Glint administrators should review access before the January 2027 target."
status: "in-development"
releasePhase: ["General Availability"]
clouds: ["Worldwide (Standard Multi-Tenant)","GCC"]
platforms: ["Web"]
targetDate: "January CY2027"
previewDate: null
risk: "medium"
cost: "low"
impact: "medium"
defaultState: "unknown"
action: "prepare"
licensing:
  model: "included"
  notes: "Learn says using Viva Glint requires a purchase of a Viva Suite or Viva Glint subscription plan, and that individual user licence assignment isn't required for using Viva Glint. No separate price for this enhancement is published."
audiences: ["m365-admin","service-owner","compliance"]
tags: ["viva-glint","data-export","analytics","privacy","licensing","gcc"]
sources:
  - title: "Microsoft 365 Roadmap 580455"
    url: "https://www.microsoft.com/microsoft-365/roadmap?id=580455"
    kind: "roadmap"
  - title: "Use Viva Glint's Multi-attribute export"
    url: "https://learn.microsoft.com/viva/glint/reports/multi-attribute-export-report"
    kind: "learn"
  - title: "Viva Glint licensing"
    url: "https://learn.microsoft.com/viva/glint/setup/glint-order-teams"
    kind: "learn"
  - title: "Assign Viva Glint Service and Tenant Administrators"
    url: "https://learn.microsoft.com/viva/glint/setup/post-provisioning-next-steps"
    kind: "learn"
  - title: "Key roles for Viva Glint"
    url: "https://learn.microsoft.com/viva/glint/start/role-definitions"
    kind: "learn"
videos: []
related: ["microsoft-viva-viva-glint-configure-data-retention-policy-for-viva-glint","microsoft-viva-viva-glint-enhanced-multiple-choice-questions-with-up-to-500-options","microsoft-viva-viva-glint-in-product-access-to-feature-announcements"]
controls:
  - governs: "Who holds the Viva Glint Service Administrator role"
    scope: "tenant"
    ui:
      surface: "Microsoft 365 admin center"
      path: "Settings > Viva > Viva Glint > Assign Glint service admin > Add users"
      docs: "https://learn.microsoft.com/viva/glint/setup/post-provisioning-next-steps"
    api: null
    note: "Done by a Microsoft 365 Global Administrator or Viva Glint Tenant Administrator. Today's access to the app, not confirmed as the control for the expanded export audience."
confidence: "medium"
created: "2026-11-25"
updated: "2026-11-25"
roadmapModified: "2026-11-25T00:10:31"
changes:
  - date: "2026-11-25"
    note: "New briefing: planned Viva Glint Multi-attribute export enhancements, with today's documented behaviour, the Service Administrator control and open questions on access and scale."
  - date: "2026-11-25"
    note: "Checked against Microsoft Learn by gpt-6.1-sol: held: 2 of 50 statements contradicted, 1 unconfirmed; taken offline until corrected"
version: 1
verification:
  status: "held"
  date: "2026-11-25"
  version: 1
  model: "gpt-6.1-sol"
  engine: "copilot"
  claims: 50
  confirmed: 47
  unconfirmed: 1
  contradicted: 2
  attempts: 1
  hash: "9b2e9f10a20a9ea9895e32de3b595fff"
---

## What's changing

Microsoft plans three changes to the Viva Glint Multi-attribute export: it expands who can use the export, increases the supported scale, and gives authorised users more control over the questions and attributes included. These are the roadmap item's words; Microsoft Learn does not yet describe the enhanced version, so what follows about the new behaviour is the roadmap's description.

The export that Learn documents today lets Viva Glint Administrators view survey results for combinations of up to three attributes, for Engagement-type and Employee Lifecycle surveys. The Learn page says only Viva Glint Admins can access it. For Recurring and Ad Hoc surveys the admin picks a program cycle; for Always-On and Employee Lifecycle surveys the admin picks a date range. Learn says a warning appears when the attribute value combinations exceed 12,000. Whether that figure changes is not stated.

Learn also says the export adheres to the organisation's selected confidentiality and suppression thresholds, and that suppression is evaluated each time the export is generated and takes into account the order in which attributes are selected. The same attributes chosen in a different order can therefore show different suppressed cells.

The roadmap record gives the status as In development, with a target of January CY2027, General Availability, on the web, for Worldwide (Standard Multi-Tenant) and GCC. The target is a plan, not a commitment. The record does not say who the newly permitted users are, what the new scale is, or how the question and attribute controls work.

## Why it matters

The export turns survey data into a file that leaves the Viva Glint app. Widening who can run it, and allowing larger attribute combinations, increases the number of people who can hold cuts of survey results outside Viva Glint's own report permissions. Learn says the export applies the confidentiality and suppression thresholds, which is the main protection, but the attribute-order behaviour means anyone running several exports of the same survey can see different cells suppressed.

Microsoft has not stated what happens on arrival: whether the wider access is switched on for roles automatically or must be granted. Treat the January 2027 target as the point to have decided who should be authorised, rather than assuming that nothing changes until an administrator acts.

## Risk assessment

**Data exposure**
- The export contains survey results broken down by up to three attributes, and the roadmap says more users will be able to use it and larger scale will be supported. Each extra exporter is a further copy of attribute-level results outside the Viva Glint app. Learn says the export adheres to the confidentiality and suppression thresholds the organisation selected.
- Learn says suppression depends on the order in which attributes are selected. Repeated exports with different attribute orders can reveal different combinations, so review the thresholds with that in mind.

**Security & identity**
- Learn describes the Viva Glint Service Administrator role as having access to all administrative functionality and all survey data within the app. The export page names the audience as Viva Glint Admins. Which additional roles the enhancement admits is not stated.

**Autonomy & actions**
- No change documented: the export runs when an authorised user selects Export, and no agent or automated action is described.

**Change & support**
- The roadmap says authorised users get more control over the questions and attributes included. Learn does not yet describe how, so help-desk and training material for Glint administrators will need updating once the page is published.

## Cost and licensing

Learn's Viva Glint licensing page says the purchase of a Viva Suite or Viva Glint subscription plan is required for using Viva Glint, and that individual user licence assignment isn't required for using Viva Glint. The roadmap item names no separate licence, and no price or meter specific to this enhancement is published at the time of writing (November 2026).

The indirect cost is administrator time: reviewing who holds the Viva Glint Service Administrator role and any newly authorised users, and revisiting confidentiality thresholds. Learn says the licence count must be greater than or equal to the number of active users in the app; whether new exporters count differently is not stated.

## Scope

The roadmap record lists Worldwide (Standard Multi-Tenant) and GCC, the web platform and General Availability, with a target of January CY2027 and status In development. It does not list other clouds; that is a record fact and not a statement that the feature is unavailable elsewhere.

Today, Learn says only Viva Glint Admins can access the export, which covers Engagement-type and Employee Lifecycle surveys. Viva Glint Service Administrators are assigned in the Microsoft 365 admin center by a Microsoft 365 Global Administrator or a Viva Glint Tenant Administrator. Which users the enhancement adds, and whether it arrives on or must be enabled, is not stated.

## Governance guidance

### Before rollout
- Review who holds the Viva Glint Service Administrator role in the Microsoft 365 admin center, using the first row of the controls table, and remove people who no longer need access to all survey data.
- Check the confidentiality and suppression thresholds configured for each survey programme, since the export adheres to them.
- Decide, with HR and the survey owner, which roles you would want to be able to export attribute-level results, so you can judge Microsoft's announcement against that list.

### At rollout
- Watch Message center and the roadmap item for the rollout date and for the roles the enhancement admits.
- Test the export on a non-sensitive survey, selecting the same attributes in two different orders, and compare which cells are suppressed.

### After rollout
- Confirm who can now see the Multi-attribute export tile under Reports and whether that matches your list.
- Update internal guidance for Glint administrators on how many attributes, and which questions, an export should include.

## Governance controls

<p class="controls__lead">Where each control lives. The left column says what the setting decides and how far it reaches; the middle gives the admin centre and the exact path; the right gives the script, API or command that does the same. <em>Not yet documented</em> means Microsoft has not published a control for that surface, so there is nothing to configure yet.</p>

<table class="controls">
<thead><tr><th>Control</th><th>Admin UI</th><th>API and automation</th></tr></thead>
<tbody>
<tr><td data-label="Control"><strong>Who holds the Viva Glint Service Administrator role</strong><br><small>Tenant</small><br><small class="controls__note">Done by a Microsoft 365 Global Administrator or Viva Glint Tenant Administrator. Today's access to the app, not confirmed as the control for the expanded export audience.</small></td><td data-label="Admin UI"><strong>Microsoft 365 admin center</strong><br>Settings › Viva › Viva Glint › Assign Glint service admin › Add users <a href="https://learn.microsoft.com/viva/glint/setup/post-provisioning-next-steps" rel="noopener" class="controls__docs">Learn</a></td><td data-label="API and automation"><em class="controls__gap">Not yet documented</em></td></tr>
</tbody>
</table>

Learn documents the Viva Glint Service Administrator assignment as a Microsoft 365 admin center task, available to a Microsoft 365 Global Administrator or a Viva Glint Tenant Administrator. The export page names its audience as Viva Glint Admins, while the role pages use the name Viva Glint Service Administrator (formerly Company Admin); confirm that these are the same group when the enhanced page is published.

The row is today's access control for the app. It is not confirmed to be the control for the expanded audience, because Microsoft has not said who that audience is. Microsoft Learn documents no PowerShell or Graph operation for assigning Viva Glint Service Administrators at the time of writing (November 2026).

## Open questions

- Which roles or users will be allowed to use the Multi-attribute export once access expands, and is that governed by a Viva Glint user role setting or by the Service Administrator assignment? Watch the Multi-attribute export Learn page.
- Does the enhancement arrive on for the newly permitted users, or must an administrator grant it? Microsoft has not stated a default; watch Message center.
- What is the new supported scale, and does the 12,000 combination warning documented today change?
- How will authorised users control the questions included? The current Learn page describes selecting attributes and a cycle or date range, and does not describe choosing questions.

<!-- rationale
risk: Medium. The roadmap says more people will be able to use an export that breaks survey scores down by attribute combinations, so confidentiality settings and role assignments matter more; who gains access is not yet stated.
cost: Low. The only cost the sources show is admin time; Microsoft Learn states Viva Glint needs a Viva Suite or Viva Glint subscription, and no price specific to this enhancement is published.
impact: Medium. Today Learn says Viva Glint Admins use this export; the roadmap says the audience expands, so Glint administrators and whoever is newly authorised will notice. Survey takers see no change.
-->

<!-- verifier-findings (2026-11-25, held; checked by gpt-6.1-sol)
The independent check found fault only with the statements below. This is a correction: change what they name and carry the rest of the page over unchanged.
Correct each of these with the smallest change that removes the fault: delete the statement, narrow it, or put the finding's own "Found" text or worded replacement in its place. Where a fix asks for more than that (a new row, an explanation, further references), do only the part that removes the fault. A correction adds no control rows.
- [contradicted, blocker] Cost and licensing: second paragraph / licensing: The licence count must be greater than or equal to the number of active users in the app, without an exemption. | Found: The total number of active licenses in your subscriptions should be greater than or equal to the number of active users in the app. Support users don't count toward your organization's Viva Glint licenses. | Fix: Replace the licence-count sentence with: "Learn says the total number of active licences in subscriptions should be greater than or equal to the number of active users in the app; support users do not count towards the organisation's Viva Glint licences." Source: https://learn.microsoft.com/viva/glint/setup/glint-order-teams. | Source: https://learn.microsoft.com/viva/glint/setup/glint-order-teams
These are minor and do not hold the page. Where removing the statement, or rewording it in the words the fix gives, settles one, do that; otherwise leave it as it is. A minor finding may also add a source link it names for a statement already on the page. It adds no row and nothing that needs research.
- [supported, minor] controls[0].note; Scope; Governance controls / role: A Microsoft 365 Global Administrator or Viva Glint Tenant Administrator assigns Service Administrators. | Found: Users can only be added/removed to this role by a Microsoft 365 Global Administrator or a Viva Glint Tenant Administrator from the Microsoft 365 Admin Center. PIM users assigned access through group assignment will encounter access errors until access rights are assigned through direct assignment. | Fix: Keep the role statement, and add its documented access qualification in Governance controls: "Viva Glint Tenant Administrators using PIM-enabled accounts must have direct assignment, not group assignment, to manage settings in the Microsoft 365 admin center." Source: https://learn.microsoft.com/viva/glint/setup/post-provisioning-next-steps. | Source: https://learn.microsoft.com/viva/glint/setup/post-provisioning-next-steps
- [supported, minor] Governance guidance: After rollout / admin-path: The Multi-attribute export tile is reached under Reports. | Found: Select Reports from the Viva Glint Dashboard. In the Survey programs list on the left, select a survey. Select the Multi-attribute export tile. | Fix: Replace "under Reports" with "at Viva Glint Dashboard > Reports > Survey programs > survey > Multi-attribute export". The omitted survey selection does not make the existing route wrong, but this gives the full documented route. | Source: https://learn.microsoft.com/viva/glint/reports/multi-attribute-export-report
- [supported, minor] Governance guidance: Before rollout; Cost and licensing / behaviour: Confidentiality and suppression thresholds can be configured at the survey-program level. | Found: Use the guidance in this article to adjust confidentiality thresholds at the overall level or at the survey program level and understand the impact of those changes. | Fix: Add https://learn.microsoft.com/viva/glint/setup/manage-confidentiality-thresholds, titled "Manage Viva Glint confidentiality thresholds", to sources for the advice to check survey-program thresholds. | Source: https://learn.microsoft.com/viva/glint/setup/manage-confidentiality-thresholds
- [unsupported, minor] rationale: impact / behaviour: Survey takers see no change from the enhancement. | Found: Searched: Viva Glint multi-attribute export select questions automated export survey takers. Read roadmap, multi-attribute-export-report and role-definitions; no survey-taker impact statement. | Fix: Remove "Survey takers see no change." from the impact rationale.
- [contradicted, minor] Governance guidance: Before rollout; controls / consistency: The checklist tells readers to check confidentiality and suppression thresholds, but the controls table contains only Service Administrator assignment. | Found: Check the confidentiality and suppression thresholds configured for each survey programme, since the export adheres to them. Control table: Who holds the Viva Glint Service Administrator role. | Fix: Remove the Before rollout checklist bullet "Check the confidentiality and suppression thresholds configured for each survey programme, since the export adheres to them." It names a control with no table row; do not add a control row as part of this correction.
-->
