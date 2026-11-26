---
title: "Microsoft Teams: default meeting templates apply admin-chosen meeting settings to new meetings"
slug: "microsoft-teams-default-meeting-templates"
roadmapId: 576609
topic: "modern-work"
products: ["Microsoft Teams","Outlook"]
summary: "Admins can set a custom meeting template as the default in a meeting template policy, so new Teams meetings made in Teams or Outlook start with its settings. Organisers need Teams Premium. Nothing applies until an admin sets one."
status: "rolling-out"
releasePhase: ["General Availability"]
clouds: ["Worldwide (Standard Multi-Tenant)","GCC"]
platforms: ["Desktop","Mac","Web"]
targetDate: "November CY2026"
previewDate: null
risk: "low"
cost: "medium"
impact: "medium"
defaultState: "admin-opt-in"
action: "review"
licensing:
  model: "add-on"
  notes: "Learn states that organisers must have a Teams Premium license to use default meeting templates, and the roadmap item says the same. A price is not repeated here; check the Teams Premium licensing page."
audiences: ["m365-admin","security","compliance","end-user"]
tags: ["teams","outlook","meeting-policy","meeting-templates","teams-premium","sensitivity-labels","powershell","gcc"]
sources:
  - title: "Microsoft 365 Roadmap: Microsoft Teams: Default meeting templates"
    url: "https://www.microsoft.com/microsoft-365/roadmap?id=576609"
    kind: "roadmap"
  - title: "Set a custom meeting template as the default in Microsoft Teams"
    url: "https://learn.microsoft.com/microsoftteams/custom-meeting-templates-set-default"
    kind: "learn"
  - title: "Overview of custom meeting templates in Microsoft Teams"
    url: "https://learn.microsoft.com/microsoftteams/custom-meeting-templates-overview"
    kind: "learn"
  - title: "Manage meeting templates in Microsoft Teams"
    url: "https://learn.microsoft.com/microsoftteams/manage-meeting-templates"
    kind: "learn"
  - title: "Set-CsTeamsMeetingTemplatePermissionPolicy"
    url: "https://learn.microsoft.com/powershell/module/microsoftteams/set-csteamsmeetingtemplatepermissionpolicy?view=teams-ps"
    kind: "learn"
  - title: "Microsoft Teams Premium licensing"
    url: "https://learn.microsoft.com/microsoftteams/teams-add-on-licensing/licensing-enhance-teams"
    kind: "learn"
videos: []
related: ["meeting-policy","sensitivity-labels","microsoft-teams-granular-conditional-access-for-teams-meetings","microsoft-teams-automatic-recording-and-transcription-choices-align-with-admin-policies","microsoft-teams-tenant-policy-controls-who-can-record-and-transcribe"]
controls:
  - governs: "Which custom meeting template is the default for users in a policy"
    scope: "group"
    ui:
      surface: "Teams admin center"
      path: "Meetings > Meeting template policies > policy > template > Set as default"
      docs: "https://learn.microsoft.com/microsoftteams/custom-meeting-templates-set-default"
    api:
      kind: "powershell"
      call: "Set-CsTeamsMeetingTemplatePermissionPolicy -Identity <policy name> -DefaultMeetingTemplateId customtemplate_<GUID>"
      docs: "https://learn.microsoft.com/powershell/module/microsoftteams/set-csteamsmeetingtemplatepermissionpolicy?view=teams-ps"
    note: "Only custom templates can be the default. Setting the parameter to null applies no default template. The policy must be assigned to users or groups."
  - governs: "Which meeting templates users in a policy can see"
    scope: "group"
    ui:
      surface: "Teams admin center"
      path: "Meetings > Meeting template policies > policy > Edit > Viewable templates > template > Hide"
      docs: "https://learn.microsoft.com/microsoftteams/manage-meeting-templates"
    api:
      kind: "powershell"
      call: "Set-CsTeamsMeetingTemplatePermissionPolicy -Identity <policy name> -HiddenMeetingTemplates <HiddenMeetingTemplate objects>"
      docs: "https://learn.microsoft.com/powershell/module/microsoftteams/set-csteamsmeetingtemplatepermissionpolicy?view=teams-ps"
    note: "Hiding controls which templates users see in the policy; the default template is a separate setting in the same policy."
confidence: "high"
created: "2026-11-19"
updated: "2026-11-19"
roadmapModified: "2026-11-03T00:14:11"
changes:
  - date: "2026-11-19"
    note: "New briefing: default meeting templates in Teams meeting template policies, Teams Premium requirement and the two controls for setting and hiding templates."
  - date: "2026-11-19"
    note: "Checked against Microsoft Learn by gpt-6.1-sol: passed with 1 of 56 statements not yet confirmed"
  - date: "2026-11-26"
    note: "Checked against Microsoft Learn by gpt-6.1-sol: passed with 1 of 61 statements not yet confirmed"
version: 1
verification:
  status: "verified-with-gaps"
  date: "2026-11-26"
  version: 1
  model: "gpt-6.1-sol"
  engine: "copilot"
  claims: 61
  confirmed: 59
  unconfirmed: 1
  contradicted: 1
  attempts: 0
  hash: "7e37027dc5d891108fda0843f28509a3"
---

## What's changing

Default meeting templates let a Teams administrator set one custom meeting template as the default in a Teams meeting template policy. When a user who is assigned that policy schedules a new meeting in the Teams calendar or Outlook, the template is applied automatically, with its default values and any locked or hidden meeting options.

Organisers can change options that have a default value but are not locked. They cannot change locked options and cannot see hidden ones. Any settings the template enforces also apply to attendees. Only custom templates can be set as the default; Learn says the predefined templates included in Teams cannot.

Learn documents support in the Teams calendar and in Outlook on Teams desktop (Windows and Mac) and web, for both new Outlook and classic Outlook. Learn lists one known issue: users might see errors in certain meeting scenarios if the Copilot setting in the Teams meeting policy is set to **On with saved transcript required**, and Microsoft recommends a different Copilot setting until it is resolved.

The roadmap item is Rolling out, with a target of November CY2026, for Worldwide (Standard Multi-Tenant) and GCC, General Availability, on Desktop, Mac and Web. The target date is Microsoft's plan, not a commitment.

## Why it matters

This is a way to apply meeting protection settings (the template options include sensitivity label, lobby, end-to-end encryption, watermarks, recording and Copilot use) to every new meeting an assigned organiser creates, without relying on each organiser to set them. The roadmap item describes this as applying settings at scale.

Because Learn describes the default as something an admin sets in a policy, nothing changes for meetings until a template is created and set as the default. The decisions for a service owner are which users get Teams Premium, which options to lock, and whether the resulting organiser restrictions are acceptable to those users.

## Risk assessment

**Data exposure**

- A default template can carry a sensitivity label, lobby, watermark, end-to-end encryption and recording options (/concepts/sensitivity-labels/). Learn says that where a sensitivity label configures the same option, the label overrides the template. Check the two together so a label does not silently change what the template appears to enforce.
- Learn says organisers must have a Teams Premium licence to use default meeting templates. Confirm what organisers who are assigned the policy but are unlicensed see before relying on the default for protection.

**Security & identity**

- To select a sensitivity label in a custom template, the compliance admin must first publish the label to the Teams admin's account through a Purview label policy; otherwise the Teams admin cannot see it. Plan that hand-off before building the template.
- Learn says any meeting settings enforced through the default template apply to attendees, so a locked option affects everyone in the meeting, not only the organiser.

**Autonomy & actions**

- No change: the feature applies preset meeting options when a meeting is scheduled and takes no actions on its own.

**Change & support**

- Locked options cannot be changed and hidden options are not shown to organisers, so expect help desk questions from organisers who cannot find or change an option.
- Learn lists a known issue with the Copilot meeting policy value **On with saved transcript required**. Review which meeting policies assigned users have before enabling a default (/concepts/meeting-policy/).
- Learn's overview says the option to select a custom template when creating a meeting is not available on Outlook for Mac or Outlook on the web, while the default-template page lists Outlook on Mac and web as supported platforms. Test your own clients.

## Cost and licensing

Organisers must have a Teams Premium licence to use default meeting templates, according to the Learn page on setting a custom template as the default and the roadmap item. The Teams Premium licensing page lists "Meeting templates (configured by IT admin)" among the features applied at organiser level, and lists organisation-customised meeting templates among the Teams Premium features that need admin configuration in the Teams admin center before users can use them.

The cost to plan for is the Teams Premium licence for the organisers you want covered, plus admin time to build the template, publish any label and handle organiser questions. The Teams Premium licensing page carries a licensing update stating that, as of April 1, 2026, some features previously only available with Teams Premium are now included with Teams Enterprise; check that page for current plan terms.

## Scope

**Users:** users who are assigned the meeting template policy that has a default template, and who schedule new meetings in the Teams calendar or Outlook. Organisers need a Teams Premium licence. Attendees receive any settings the template enforces.

**Clouds and platforms (roadmap record):** Worldwide (Standard Multi-Tenant) and GCC; Desktop, Mac and Web; General Availability.

**Learn platform support:** Teams calendar and Outlook on Teams desktop (Windows and Mac) and web, with both new and classic Outlook.

**Prerequisites:** a custom meeting template (predefined templates cannot be the default) and a meeting template policy assigned to the users or groups. By default, the Global (Org-wide default) meeting template policy lets users see all available templates.

## Governance guidance

### Before rollout

- Create the custom template the default will carry, deciding which options to lock, hide or leave editable, in the Teams admin center.
- Ask the compliance admin to publish any sensitivity label you want in the template to your Teams admin account through a Purview label policy.
- Identify which organisers hold Teams Premium licences and which users will be in the policy, so the default reaches the people you intend.
- Check the Copilot setting in the meeting policies of those users and avoid **On with saved transcript required** while Learn's known issue stands.

### At rollout

- Set the template as the default in a meeting template policy, in the Teams admin center or with PowerShell.
- Assign the policy to a pilot group of organisers before wider users or groups.
- Schedule test meetings from the Teams calendar, new Outlook, classic Outlook and Outlook on the web, and confirm the settings apply as intended.

### After rollout

- Review locked and hidden options with organisers who report missing or fixed settings, and adjust the template.
- Remove the template as the default in the policy if it causes problems; Learn says it is then no longer applied automatically to new meetings.
- Recheck the Learn pages for the known issue and for platform support changes.

## Governance controls

<p class="controls__lead">Where each control lives. The left column says what the setting decides and how far it reaches; the middle gives the admin centre and the exact path; the right gives the script, API or command that does the same. <em>Not yet documented</em> means Microsoft has not published a control for that surface, so there is nothing to configure yet.</p>

<table class="controls">
<thead><tr><th>Control</th><th>Admin UI</th><th>API and automation</th></tr></thead>
<tbody>
<tr><td data-label="Control"><strong>Which custom meeting template is the default for users in a policy</strong><br><small>Group</small><br><small class="controls__note">Only custom templates can be the default. Setting the parameter to null applies no default template. The policy must be assigned to users or groups.</small></td><td data-label="Admin UI"><strong>Teams admin center</strong><br>Meetings › Meeting template policies › policy › template › Set as default <a href="https://learn.microsoft.com/microsoftteams/custom-meeting-templates-set-default" rel="noopener" class="controls__docs">Learn</a></td><td data-label="API and automation"><strong>PowerShell</strong><br><code>Set-CsTeamsMeetingTemplatePermissionPolicy -Identity &lt;policy name&gt; -DefaultMeetingTemplateId customtemplate_&lt;GUID&gt;</code> <a href="https://learn.microsoft.com/powershell/module/microsoftteams/set-csteamsmeetingtemplatepermissionpolicy?view=teams-ps" rel="noopener" class="controls__docs">Learn</a></td></tr>
<tr><td data-label="Control"><strong>Which meeting templates users in a policy can see</strong><br><small>Group</small><br><small class="controls__note">Hiding controls which templates users see in the policy; the default template is a separate setting in the same policy.</small></td><td data-label="Admin UI"><strong>Teams admin center</strong><br>Meetings › Meeting template policies › policy › Edit › Viewable templates › template › Hide <a href="https://learn.microsoft.com/microsoftteams/manage-meeting-templates" rel="noopener" class="controls__docs">Learn</a></td><td data-label="API and automation"><strong>PowerShell</strong><br><code>Set-CsTeamsMeetingTemplatePermissionPolicy -Identity &lt;policy name&gt; -HiddenMeetingTemplates &lt;HiddenMeetingTemplate objects&gt;</code> <a href="https://learn.microsoft.com/powershell/module/microsoftteams/set-csteamsmeetingtemplatepermissionpolicy?view=teams-ps" rel="noopener" class="controls__docs">Learn</a></td></tr>
</tbody>
</table>

The default is set per meeting template policy, so it reaches only the users or groups the policy is assigned to; the Global (Org-wide default) policy is the starting point for everyone else. Hiding a template and setting the default are separate settings in the same policy. Where a sensitivity label sets the same option as the template, Learn says the label overrides the template. The Copilot option inside a template and the Copilot setting in the Teams meeting policy are separate controls; the meeting policy is where Learn's known issue arises.

## Open questions

- What happens to organisers who are assigned the policy but do not hold a Teams Premium licence when they schedule a meeting? Watch the Learn page on setting a custom template as the default.
- Does the default template apply in Outlook for Mac and Outlook on the web, given the overview page says the template picker is not available there? Watch the custom meeting templates overview and the default template page.
- When will the Copilot meeting policy known issue be resolved, and will the page be updated? Watch the default template page.
- When does the rollout reach GCC tenants, given the record lists GCC with a November CY2026 target? Watch the Microsoft 365 roadmap item.

<!-- rationale
risk: Low. The feature adds a control that applies nothing until an admin sets a default template; the exposure that remains at its default is that meetings keep today's organiser-chosen settings.
cost: Medium. Learn says organisers must have a Teams Premium licence to use default meeting templates, so a subset of users needs an add-on licence, plus admin time to build the template.
impact: Medium. Organisers assigned the policy see defaults applied to new meetings and may find options locked or hidden; attendees get any settings the template enforces.
-->

<!-- verifier-findings (2026-11-26, verified-with-gaps; checked by gpt-6.1-sol)
The independent check found fault only with the statements below. This is a correction: change what they name and carry the rest of the page over unchanged.
Correct each of these with the smallest change that removes the fault: delete the statement, narrow it, or put the finding's own "Found" text or worded replacement in its place. Where a fix asks for more than that (a new row, an explanation, further references), do only the part that removes the fault. A correction adds no control rows.
- [unsupported, major] Risk assessment: Autonomy & actions / behaviour: The feature takes no actions on its own. | Found: Searched: 'Teams default meeting templates automatically apply actions organizer unlicensed Teams Premium default template Outlook Mac web'; opened custom-meeting-templates-set-default and custom-meeting-templates-overview. Neither states this unrestricted negative. | Fix: Replace the bullet with: 'The feature automatically applies the configured meeting options when an organiser schedules a meeting.'
These are minor and do not hold the page. Where removing the statement, or rewording it in the words the fix gives, settles one, do that; otherwise leave it as it is. A minor finding may also add a source link it names for a statement already on the page. It adds no row and nothing that needs research.
- [supported, minor] Governance controls: Global policy / applicability: The Global (Org-wide default) policy applies to users without another applicable policy. | Found: If a user isn't directly assigned a policy or isn't a member of any groups that are assigned a policy, the user gets the global (Org-wide default) policy for that policy type. | Fix: Add https://learn.microsoft.com/microsoftteams/policy-assignment-overview to sources for the Global policy fallback statement. | Source: https://learn.microsoft.com/microsoftteams/policy-assignment-overview
- [supported, minor] Governance guidance: Before rollout and After rollout / behaviour: Admins can configure custom templates with locked, hidden or editable options in the Teams admin center. | Found: Use this procedure to create a custom meeting template in the Teams admin center. To prevent the meeting organizer from changing an option, select the option and then select lock. To prevent the meeting organizer from seeing an option, select the option and then select Hide. | Fix: Add https://learn.microsoft.com/microsoftteams/create-custom-meeting-template to sources for configuring custom template options. | Source: https://learn.microsoft.com/microsoftteams/create-custom-meeting-template
- [contradicted, minor] Governance guidance; Governance controls / consistency: The governance checklist names controls not represented in the controls table. | Found: Checklist: 'Create the custom template', 'publish any sensitivity label', 'Check the Copilot setting', 'Assign the policy'. Table: setting a default and hiding templates. | Fix: Remove checklist steps for creating or adjusting template options, publishing sensitivity labels, checking the Copilot meeting policy and assigning policies: these controls have no corresponding table row. Do not add rows.
-->
