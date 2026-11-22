---
title: "Word: legal plugin for Copilot adds legal skills to Word desktop"
slug: "word-legal-plugin"
roadmapId: 571885
topic: "m365-copilot"
products: ["Word","Microsoft Copilot (Microsoft 365)"]
summary: "Microsoft plans a legal plugin for Copilot in Word to summarise, review, edit and draft legal documents. Learn says it is on by default for Copilot subscribers in Word desktop; admins can restrict it with a Cloud Policy setting."
status: "in-development"
releasePhase: ["General Availability","Preview"]
clouds: ["GCC"]
platforms: ["Desktop"]
targetDate: "December CY2026"
previewDate: "April CY2026"
risk: "medium"
cost: "low"
impact: "medium"
defaultState: "on"
action: "act-now"
licensing:
  model: "included"
  notes: "Learn says the plugin is enabled for Microsoft 365 Copilot commercial subscribers and names no separate licence, price or meter for it. Microsoft Copilot is available with Microsoft 365 E7 or as an add-on."
audiences: ["m365-admin","compliance","end-user","change-adoption"]
tags: ["m365-copilot","word","plugins","cloud-policy","microsoft-365-apps","gcc"]
sources:
  - title: "Manage Copilot for legal"
    url: "https://learn.microsoft.com/microsoft-365/admin/manage/manage-copilot-for-legal?view=o365-worldwide"
    kind: "learn"
  - title: "Overview of Cloud Policy service for Microsoft 365"
    url: "https://learn.microsoft.com/microsoft-365-apps/admin-center/overview-cloud-policy"
    kind: "learn"
  - title: "License options for Microsoft Copilot"
    url: "https://learn.microsoft.com/copilot/plan/copilot-license-options"
    kind: "learn"
  - title: "Word: legal plugin (Microsoft 365 Roadmap 571885)"
    url: "https://www.microsoft.com/microsoft-365/roadmap?id=571885"
    kind: "roadmap"
videos: []
related: ["cloud-policy","word-copilot-edit-mode-is-available-to-users-in-office-365-gcc","m365-copilot-copilot-can-edit-your-document-by-default-in-word","m365-copilot-copilot-cowork-for-government-clouds"]
controls:
  - governs: "Whether the legal plugin is available in Copilot in Word desktop, per user group"
    scope: "group"
    ui:
      surface: "Microsoft 365 Apps admin center"
      path: "Customization > Policy Management > Policy configurations > Create > Start with the basics > Choose the scope > Configure Settings"
      docs: "https://learn.microsoft.com/microsoft-365-apps/admin-center/overview-cloud-policy"
    api: null
    note: "Select the policy named \"Legal Skills in M365 Copilot in Word\" (named on the Manage Copilot for legal page). Applies when the Office app restarts. Does not govern the Cowork legal plugin."
confidence: "medium"
created: "2026-11-22"
updated: "2026-11-22"
roadmapModified: "2026-11-17T18:36:41"
changes:
  - date: "2026-11-22"
    note: "First briefing: roadmap item 571885 plus the Learn page on managing Copilot for legal, which gives the default and the Cloud Policy setting."
  - date: "2026-11-22"
    note: "Checked against Microsoft Learn by gpt-6.1-sol: held: 2 of 45 statements contradicted, 1 unconfirmed; taken offline until corrected"
version: 1
verification:
  status: "held"
  date: "2026-11-22"
  version: 1
  model: "gpt-6.1-sol"
  engine: "copilot"
  claims: 45
  confirmed: 42
  unconfirmed: 1
  contradicted: 2
  attempts: 1
  hash: "04654221a11f73ef83e2cd00e48ad643"
---

## What's changing

Microsoft is adding a legal plugin to Copilot in Word. The roadmap item describes it as a way to "Understand, summarize, edit, review and draft legal documents with Copilot in Word." The roadmap lists the platform as Desktop and the cloud as GCC.

Microsoft Learn describes the plugin in "Manage Copilot for legal". It says Microsoft offers a set of legal plugins so that Copilot can help legal professionals understand, summarise, draft, redline and review legal documents. Within Word desktop, Learn says the legal plugin is enabled for all Microsoft 365 Copilot commercial subscribers by default, and that Copilot can then use legal skills to complete legal tasks in Word. The same page describes a separate legal plugin for Copilot Cowork, which is managed in a different admin centre and is not covered by this briefing.

The roadmap item is In development, with a preview target of April CY2026 and a general availability target of December CY2026. Learn describes the plugin as enabled today, without dates, so the two sources differ on timing. The roadmap dates are targets, and a tenant's own rollout timing is not stated on either source.

## Why it matters

Learn says the plugin is on by default in Word desktop for Microsoft 365 Copilot commercial subscribers, so legal skills can reach licensed users without an administrator choosing to enable them. If nobody acts, the default described on Learn applies; this is the Learn page's statement for commercial subscribers, and the roadmap item does not say what it means for GCC.

The wiki's view is that legal documents (contracts, policies, correspondence) are among the most sensitive content a tenant holds, so decide before the plugin reaches people whether it should be on for everyone or only for a legal group. The control is a Cloud Policy setting, which only affects Word desktop on users' devices, so decide who owns that policy before the target month.

## Risk assessment

**Data exposure**
- Learn does not describe what content beyond the open document the legal skills read or which sources they draw on. Ask your Microsoft contact or watch the Learn page before concluding the plugin sees only the open document.
- Legal documents often carry sensitive or privileged content. Check which sensitivity labels and Purview policies already cover those files, because the plugin acts inside Word on documents users open.

**Security & identity**
- Learn says the plugin is enabled for all Microsoft 365 Copilot commercial subscribers by default, so access follows the Copilot licence and not a separate legal role. Restricting it to a legal group means creating a Cloud Policy configuration that targets groups.
- Cloud Policy applies to user objects in Microsoft Entra ID that hold a supported licence, and a user in several groups with conflicting settings gets the setting from the highest-priority configuration.

**Autonomy & actions**
- The roadmap says the plugin can edit, review and draft legal documents, and Learn says redline. Microsoft Learn does not describe in this page whether edits are applied directly or proposed for approval. Confirm the behaviour in a pilot.
- Treat output as a draft for a qualified legal professional to check; that is the wiki's advice, not a Microsoft statement about this plugin.

**Change & support**
- Cloud Policy settings apply only when the Office app is restarted, so a change to the policy reaches users on their next restart and not at once.
- Expect questions from legal teams about when skills appear, because the roadmap targets preview in April CY2026 and general availability in December CY2026 while Learn already describes the plugin as enabled.

## Cost and licensing

**Licence.** Learn says the legal plugin for Copilot in Word is enabled for all Microsoft 365 Copilot commercial subscribers by default, and names no other licence for it ("Manage Copilot for legal"). Microsoft's licence options page says Microsoft Copilot is available with Microsoft 365 E7 or as an add-on for eligible commercial, US Government and education subscription plans.

**Meter and price.** "Manage Copilot for legal" names no meter, credit rate or price for the plugin at the time of writing (November 2026). A price or rate specific to this plugin is not yet published.

**Indirect costs.** Admin time to create and test a Cloud Policy configuration, communication to legal teams, and review time for any output.

## Scope

**Who.** Learn says users with a Microsoft 365 Copilot commercial subscription. The roadmap lists the Desktop platform and the GCC cloud, and Learn's wording for Word desktop is "commercial subscribers"; whether GCC tenants get the same default is not stated on the Learn page.

**Roles.** The Cloud Policy overview lists Office Apps Administrator (recommended), Security Administrator and Global Administrator as built-in roles that can manage the service.

**Rollout.** The roadmap item is In development, with preview targeted for April CY2026 and general availability for December CY2026. For government customers (GCC, GCC High and DoD), the Cloud Policy overview gives Version 2402 as the minimum Office client version for policies delivered to Microsoft 365 Apps on Windows.

**Not covered.** The legal plugin for Copilot Cowork is a separate plugin that users add in Cowork and that admins govern from the Agent Tools page of the Microsoft 365 admin center.

## Governance guidance

### Before rollout
- Decide whether the legal plugin should be on for every Copilot-licensed user or only for a legal group, and name the owner of that decision.
- Review the Cloud Policy configurations your tenant already has in the Microsoft 365 Apps admin center, including their priority order, so a new Legal Skills setting does not conflict with them.
- Confirm the Office Apps Administrator role (or another listed role) is assigned to whoever will edit the policy.
- Tell legal and compliance teams what the plugin is and that Learn describes it as on by default for commercial Copilot subscribers.

### At rollout
- Create a policy configuration in the Microsoft 365 Apps admin center that sets "Legal Skills in M365 Copilot in Word" and scope it to the groups you chose.
- Ask pilot users to restart Word, because Cloud Policy settings apply when the Office app restarts.
- Test one non-sensitive and one labelled legal document in the pilot group to see how the plugin behaves with your sensitivity labels.

### After rollout
- Check the Microsoft Purview audit log for changes to the policy configuration, if auditing is enabled.
- Review the Learn page and Message center for GCC wording and for any price or meter for the plugin.
- Gather feedback from legal users on accuracy and on any need for a narrower group.

## Governance controls

<p class="controls__lead">Where each control lives. The left column says what the setting decides and how far it reaches; the middle gives the admin centre and the exact path; the right gives the script, API or command that does the same. <em>Not yet documented</em> means Microsoft has not published a control for that surface, so there is nothing to configure yet.</p>

<table class="controls">
<thead><tr><th>Control</th><th>Admin UI</th><th>API and automation</th></tr></thead>
<tbody>
<tr><td data-label="Control"><strong>Whether the legal plugin is available in Copilot in Word desktop, per user group</strong><br><small>Group</small><br><small class="controls__note">Select the policy named &quot;Legal Skills in M365 Copilot in Word&quot; (named on the Manage Copilot for legal page). Applies when the Office app restarts. Does not govern the Cowork legal plugin.</small></td><td data-label="Admin UI"><strong>Microsoft 365 Apps admin center</strong><br>Customization › Policy Management › Policy configurations › Create › Start with the basics › Choose the scope › Configure Settings <a href="https://learn.microsoft.com/microsoft-365-apps/admin-center/overview-cloud-policy" rel="noopener" class="controls__docs">Learn</a></td><td data-label="API and automation"><em class="controls__gap">Not yet documented</em></td></tr>
</tbody>
</table>

The only documented control is the Cloud Policy setting for Word desktop. It is set per policy configuration, which can target all users or specific Microsoft Entra groups, and the highest-priority configuration wins where settings conflict. Microsoft Learn documents no API or PowerShell call for this setting at the time of writing (November 2026), so changes are made in the admin centre.

The control does not govern the Cowork legal plugin, which is managed from the Agent Tools page of the Microsoft 365 admin center. The Cloud Policy overview says changes to policy configurations are tracked in the Microsoft Purview audit log when auditing is enabled.

## Open questions

- Does the legal plugin apply by default to GCC tenants, and from which date? Learn says "commercial subscribers" while the roadmap lists GCC. Watch the Learn page and Message center.
- Will a price, credit rate or separate licence be published for the plugin? "Manage Copilot for legal" names none at the time of writing.
- Which data does the plugin read beyond the open document, and is that covered by existing sensitivity labels and Purview policies?
- Is there any API or script for the "Legal Skills in M365 Copilot in Word" policy, or only the admin centre?
- How do the roadmap's April CY2026 preview and December CY2026 general availability targets relate to Learn's description of the plugin as already enabled?

<!-- rationale
risk: Medium. Learn says the legal plugin is enabled by default in Word desktop for Microsoft 365 Copilot commercial subscribers, and a policy in the Microsoft 365 Apps admin center can restrict it.
cost: Low. Learn names no separate licence or meter for the plugin; the cost shown is admin and communication time on top of the Microsoft 365 Copilot licence users already need.
impact: Medium. People who work on legal documents in Word desktop notice it first; Learn says the plugin is enabled by default for Microsoft 365 Copilot commercial subscribers.
-->

<!-- verifier-findings (2026-11-22, held; checked by gpt-6.1-sol)
The independent check found fault only with the statements below. This is a correction: change what they name and carry the rest of the page over unchanged.
Correct each of these with the smallest change that removes the fault: delete the statement, narrow it, or put the finding's own "Found" text or worded replacement in its place. Where a fix asks for more than that (a new row, an explanation, further references), do only the part that removes the fault. A correction adds no control rows.
- [contradicted, blocker] Risk assessment: Change & support / behaviour: A change to the policy reaches users on their next restart. | Found: If the user has previously signed in, the check-in call is made only if the check-in interval has lapsed. | Fix: Replace the Change & support bullet with 'Cloud Policy settings take effect when the Office app is restarted after the device has retrieved the applicable settings. Retrieval follows the service's check-in interval, so the next restart alone does not guarantee that a newly changed policy has arrived.' Source: https://learn.microsoft.com/microsoft-365-apps/admin-center/overview-cloud-policy. | Source: https://learn.microsoft.com/microsoft-365-apps/admin-center/overview-cloud-policy
- [unsupported, major] Risk assessment: Data exposure / behaviour: The legal plugin acts on documents users open inside Word. | Found: Searched: Copilot legal plugin Word data sources document edits approval legal role. Read Manage Copilot for legal and the roadmap; they describe legal tasks and documents in Word but do not specify that the documents acted on are documents users open. | Fix: Replace 'because the plugin acts inside Word on documents users open' with 'because the plugin provides legal skills in Word desktop'. Keep the preceding recommendation to check existing file protections as the wiki's advice, not a claim that those protections govern the plugin.
These are minor and do not hold the page. Where removing the statement, or rewording it in the words the fix gives, settles one, do that; otherwise leave it as it is. A minor finding may also add a source link it names for a statement already on the page. It adds no row and nothing that needs research.
- [supported, minor] controls[0].ui; Governance controls: Admin UI / admin-path: The Microsoft 365 Apps admin center route through Customization, Policy Management, Policy configurations, Create, Start with the basics, Choose the scope and Configure Settings reaches the policy selection page. | Found: Under Customization, select Policy Management. On the Policy configurations page, select Create. On the Configure Settings page, select the policies that you want to include in the policy configuration. | Fix: Extend controls[0].ui.path and the rendered route to 'Customization > Policy Management > Policy configurations > Create > Start with the basics > Choose the scope > Configure Settings > Legal Skills in M365 Copilot in Word'. The final policy name is given at https://learn.microsoft.com/microsoft-365/admin/manage/manage-copilot-for-legal?view=o365-worldwide; retain the existing note. | Source: https://learn.microsoft.com/microsoft-365-apps/admin-center/overview-cloud-policy
- [contradicted, minor] Governance guidance: After rollout; Risk assessment: Data exposure; Governance controls / consistency: The governance advice asks readers to check audit and existing file-protection controls that are absent from the controls table. | Found: Check the Microsoft Purview audit log for changes to the policy configuration, if auditing is enabled. / Check which sensitivity labels and Purview policies already cover those files / Whether the legal plugin is available in Copilot in Word desktop, per user group | Fix: The After rollout audit-log check and the Data exposure sensitivity-label/Purview-policy check have no corresponding controls-table rows. This is a checklist/table coverage finding only; do not add control rows as part of this correction.
-->
