---
title: "Microsoft Teams: meeting policy setting for profanity filtering in transcripts"
slug: "microsoft-teams-admins-can-control-profanity-filtering-in-meeting-transcripts"
roadmapId: 570467
topic: "modern-work"
products: ["Microsoft Teams"]
summary: "A Teams meeting policy setting decides whether profane words are masked in live and saved transcripts. Masking stays on by default; no action is needed unless you want it off for some organisers."
status: "launched"
releasePhase: ["General Availability","Targeted Release"]
clouds: ["Worldwide (Standard Multi-Tenant)","GCC"]
platforms: ["Android","Desktop","iOS","Mac","Web"]
targetDate: "October CY2026"
previewDate: null
risk: "low"
cost: "low"
impact: "low"
defaultState: "on"
action: "review"
licensing:
  model: "unknown"
  notes: "Not yet published. Neither the roadmap item, Microsoft's notice MC1478003 nor the Set-CsTeamsMeetingPolicy reference page names a licence or meter for this setting."
audiences: ["m365-admin","compliance","service-owner","change-adoption"]
tags: ["teams","meeting-policy","meeting-transcripts","transcripts","admin-controls","powershell","gcc"]
sources:
  - title: "Microsoft 365 Roadmap 570467"
    url: "https://www.microsoft.com/microsoft-365/roadmap?id=570467"
    kind: "roadmap"
  - title: "MC1478003: Microsoft Teams: Admins can control profanity filtering in meeting transcripts"
    url: "https://admin.microsoft.com/Adminportal/Home#/MessageCenter/:/messages/MC1478003"
    kind: "message-center"
  - title: "Set-CsTeamsMeetingPolicy (MicrosoftTeams)"
    url: "https://learn.microsoft.com/powershell/module/microsoftteams/set-csteamsmeetingpolicy"
    kind: "learn"
  - title: "Admins - Manage transcription and captions for Teams meetings"
    url: "https://learn.microsoft.com/microsoftteams/meeting-transcription-captions"
    kind: "learn"
  - title: "Use Microsoft Teams administrator roles to manage Teams"
    url: "https://learn.microsoft.com/microsoftteams/using-admin-roles"
    kind: "learn"
  - title: "Release notes for Microsoft Teams admin features"
    url: "https://learn.microsoft.com/officeupdates/teams-admin"
    kind: "learn"
videos: []
related: ["teams-intelligent-recap-without-saving-transcript","work-iq-real-time-transcripts"]
controls:
  - governs: "Whether profane words are masked in live and saved meeting transcripts"
    scope: "user"
    ui:
      surface: "Teams admin center"
      path: "Meetings > Meeting policies > policy > Meeting settings > Recording and transcription > Filter out profane words in live transcription"
      docs: "https://admin.microsoft.com/Adminportal/Home#/MessageCenter/:/messages/MC1478003"
    api:
      kind: "powershell"
      call: "Set-CsTeamsMeetingPolicy -Identity <policy name> -FilterProfanityInTranscript Enabled|Disabled"
      docs: "https://learn.microsoft.com/powershell/module/microsoftteams/set-csteamsmeetingpolicy"
    note: "Applies through the policy assigned to the meeting organiser. The Learn page notes the setting has no effect until the feature is fully released."
  - governs: "Whether transcription is allowed at all for users with a policy"
    scope: "user"
    ui:
      surface: "Teams admin center"
      path: "Meetings > Meeting policies > policy > Transcription"
      docs: "https://learn.microsoft.com/microsoftteams/meeting-transcription-captions"
    api:
      kind: "powershell"
      call: "Set-CsTeamsMeetingPolicy -Identity <policy name> -AllowTranscription $true|$false"
      docs: "https://learn.microsoft.com/microsoftteams/meeting-transcription-captions"
    note: "Existing control. It switches transcription on or off; it does not control profanity masking."
  - governs: "Admin control over each participant's live-caption profanity preference"
    scope: "user"
    ui: null
    api: null
    note: "MC1478003 says the new setting leaves the participant's own preference unchanged. A Teams release note says users can update this preference in settings; no admin control for it is documented."
  - governs: "Per-organiser or per-meeting override of the filtering setting"
    scope: "other"
    ui: null
    api: null
    note: "MC1478003 states organisers and co-organisers receive no per-meeting override and no organiser-level control is added."
confidence: "medium"
created: "2026-11-16"
updated: "2026-11-16"
roadmapModified: "2026-11-04T23:59:50"
changes:
  - date: "2026-11-16"
    note: "First briefing for this item, based on Microsoft's notice MC1478003 and the Set-CsTeamsMeetingPolicy reference page."
  - date: "2026-11-16"
    note: "Added the Teams Administrator and Teams Communications Administrator roles that can manage meeting policies, removed unsupported statements about identity and permissions, and aligned the pre-rollout advice with what MC1478003 recommends."
version: 2
verification:
  status: "verified-with-gaps"
  date: "2026-11-16"
  version: 2
  model: "gpt-6.1-sol"
  engine: "copilot"
  claims: 46
  confirmed: 45
  unconfirmed: 0
  contradicted: 1
  attempts: 0
---

## What's changing

Teams adds a meeting policy setting that controls whether profane words are masked in live transcription and in the saved meeting transcript. The roadmap item and Microsoft's notice MC1478003 both say filtering stays on by default, so current behaviour is preserved until an administrator changes a policy.

The notice names the setting **Filter out profane words in live transcription** and says it appears in the applicable Teams meeting policy under Meeting settings > Recording and transcription. When it is turned off in the policy assigned to a meeting organiser, words that would otherwise be masked can appear in both the live and the saved transcript for that organiser's scheduled meetings. The organiser's assigned policy decides; organisers and co-organisers get no per-meeting override. Each participant's live-caption profanity preference is not changed.

The roadmap item is Launched, with a target date of October CY2026, for Worldwide and GCC, on Android, desktop, iOS, Mac and web. MC1478003 (published 23 September 2026) gives Targeted Release (Worldwide) as early to mid-October 2026 and General Availability (Worldwide, GCC) as mid to late October 2026, and sets no act-by date.

The sources differ on one point. At the time of writing (November 2026) the Set-CsTeamsMeetingPolicy reference page documents the matching `-FilterProfanityInTranscript` parameter (default `Enabled`) but still carries the note "This feature has not been fully released yet, so the setting will have no effect." Check that the setting is visible and effective in your tenant before relying on it.

## Why it matters

This is a new control over what transcripts contain, and it ships set to the existing behaviour. If nobody acts, transcripts keep masking profane words. The decision for a service owner is whether any group has a real need for verbatim transcripts, such as HR or legal workflows, and whether that justifies a separate policy.

Because the setting sits on the organiser's policy, turning it off changes what is stored in the saved transcript for every scheduled meeting that organiser runs, and the notice describes no per-meeting override. Settle who may be assigned a filtering-off policy before anyone edits a policy.

## Risk assessment

**Data exposure**
- With filtering off, saved transcripts can contain profane words that were previously masked. Microsoft Learn says transcripts are stored together with meeting recordings in OneDrive and SharePoint storage, so the unmasked text sits wherever those files are.
- Microsoft has not said whether downstream uses of the transcript, such as Copilot recaps, see masked or unmasked text.

**Security & identity**
- The behaviour follows the meeting organiser's assigned meeting policy, so user or group policy assignment decides which meetings are affected. Teams Administrator and Teams Communications Administrator can both manage meeting policies, so either role can change which organisers get unmasked transcripts.

**Autonomy & actions**
- No change: the setting takes no actions on its own and only changes how recognised words are written to the transcript.

**Change & support**
- Live captions keep following each participant's own profanity setting, while the transcript follows the organiser's policy. In a meeting whose organiser has filtering off, the two can differ, so expect helpdesk questions about the mismatch.
- Microsoft's notice asks administrators to notify compliance, legal and helpdesk teams before turning filtering off.

## Cost and licensing

No licence, meter or price is published for this setting. The Set-CsTeamsMeetingPolicy reference page and MC1478003 state none, so treat the licensing as not yet published rather than as free.

The cost the sources do show is indirect: administrator time to create or edit meeting policies, and the communication to compliance, legal and helpdesk teams that MC1478003 recommends before filtering is turned off.

## Scope

The setting applies per meeting organiser, through the Teams meeting policy assigned to them. Per MC1478003, users whose organiser is assigned a policy that keeps filtering on are not affected, and neither is each participant's live-caption preference.

- **Clouds:** the roadmap item lists Worldwide (Standard Multi-Tenant) and GCC.
- **Platforms:** Android, desktop, iOS, Mac and web.
- **Release phase:** General Availability and Targeted Release.
- **Who configures it:** Microsoft Learn says Teams Administrator and Teams Communications Administrator can manage meetings, including meeting policies, in the Teams admin center and PowerShell. It does not name a role for this specific setting.

## Governance guidance

### Before rollout
- Confirm the business need and review compliance policies and transcript requirements before turning filtering off, as MC1478003 recommends. Recording the business reason is a suggested internal step, not a Microsoft requirement.
- List the meeting policies in use under Meetings > Meeting policies in the Teams admin center and identify which organisers each is assigned to.
- Notify compliance, legal and helpdesk teams that saved transcripts may contain words that were previously masked.

### At rollout
- Leave the setting on in the Global policy so existing behaviour is preserved.
- Create a separate custom meeting policy for any group that needs filtering off, rather than editing the Global policy.
- Assign that policy only to named users or groups, using the assignment steps on the Learn transcription page.

### After rollout
- Check the **Filter out profane words in live transcription** value on each policy in the Teams admin center, and test a meeting transcript, given the Learn note that the setting may not yet take effect.
- Update internal transcript guidance if the default policy behaviour changes.
- Review membership of any filtering-off policy on a schedule so organisers do not keep it without a reason.

## Governance controls

<p class="controls__lead">Where each control lives. The left column says what the setting decides and how far it reaches; the middle gives the admin centre and the exact path; the right gives the script, API or command that does the same. <em>Not yet documented</em> means Microsoft has not published a control for that surface, so there is nothing to configure yet.</p>

<table class="controls">
<thead><tr><th>Control</th><th>Admin UI</th><th>API and automation</th></tr></thead>
<tbody>
<tr><td data-label="Control"><strong>Whether profane words are masked in live and saved meeting transcripts</strong><br><small>User</small><br><small class="controls__note">Applies through the policy assigned to the meeting organiser. The Learn page notes the setting has no effect until the feature is fully released.</small></td><td data-label="Admin UI"><strong>Teams admin center</strong><br>Meetings › Meeting policies › policy › Meeting settings › Recording and transcription › Filter out profane words in live transcription <a href="https://admin.microsoft.com/Adminportal/Home#/MessageCenter/:/messages/MC1478003" rel="noopener" class="controls__docs">Learn</a></td><td data-label="API and automation"><strong>PowerShell</strong><br><code>Set-CsTeamsMeetingPolicy -Identity &lt;policy name&gt; -FilterProfanityInTranscript Enabled|Disabled</code> <a href="https://learn.microsoft.com/powershell/module/microsoftteams/set-csteamsmeetingpolicy" rel="noopener" class="controls__docs">Learn</a></td></tr>
<tr><td data-label="Control"><strong>Whether transcription is allowed at all for users with a policy</strong><br><small>User</small><br><small class="controls__note">Existing control. It switches transcription on or off; it does not control profanity masking.</small></td><td data-label="Admin UI"><strong>Teams admin center</strong><br>Meetings › Meeting policies › policy › Transcription <a href="https://learn.microsoft.com/microsoftteams/meeting-transcription-captions" rel="noopener" class="controls__docs">Learn</a></td><td data-label="API and automation"><strong>PowerShell</strong><br><code>Set-CsTeamsMeetingPolicy -Identity &lt;policy name&gt; -AllowTranscription $true|$false</code> <a href="https://learn.microsoft.com/microsoftteams/meeting-transcription-captions" rel="noopener" class="controls__docs">Learn</a></td></tr>
<tr><td data-label="Control"><strong>Admin control over each participant's live-caption profanity preference</strong><br><small>User</small><br><small class="controls__note">MC1478003 says the new setting leaves the participant's own preference unchanged. A Teams release note says users can update this preference in settings; no admin control for it is documented.</small></td><td data-label="Admin UI"><em class="controls__gap">Not yet documented</em></td><td data-label="API and automation"><em class="controls__gap">Not yet documented</em></td></tr>
<tr><td data-label="Control"><strong>Per-organiser or per-meeting override of the filtering setting</strong><br><small class="controls__note">MC1478003 states organisers and co-organisers receive no per-meeting override and no organiser-level control is added.</small></td><td data-label="Admin UI"><em class="controls__gap">Not yet documented</em></td><td data-label="API and automation"><em class="controls__gap">Not yet documented</em></td></tr>
</tbody>
</table>

The filtering setting lives only in the Teams meeting policy, so its scope is the organiser's policy assignment. Microsoft documents no tenant-wide master switch for it and no organiser-level or per-meeting override; the Global policy is the nearest tenant default. The Teams admin center location comes from MC1478003; at the time of writing (November 2026) the Learn pages do not describe it.

The existing **Transcription** policy setting turns transcription on or off entirely. It is an alternative if unmasked transcripts are unacceptable, but it does not control masking. Teams Administrator and Teams Communications Administrator can manage meeting policies.

## Open questions

- Does the **Filter out profane words in live transcription** setting appear and take effect in every tenant yet? The Set-CsTeamsMeetingPolicy page still says the setting has no effect; watch that page and Message center.
- Do downstream features that read transcripts, such as Copilot meeting recaps, use masked or unmasked text when filtering is off? Watch the Teams Copilot documentation.
- Will Microsoft document an administrator control over participants' live-caption profanity preference, or will it stay a user setting?
- Will a licence or meter ever apply to this setting? None is published at the time of writing (November 2026).

<!-- rationale
risk: Low. Masking stays on by default, so exposure arises only if an administrator turns it off in a policy assigned to meeting organisers.
cost: Low. The only cost the sources show is admin and communication time; Microsoft has not published a licence requirement or meter for this setting.
impact: Low. Nothing changes for users while the default holds; only people in meetings run by organisers whose policy turns filtering off would see unmasked words.
-->

<!-- verifier-findings (2026-11-16, verified-with-gaps; checked by gpt-6.1-sol)
The independent check found these statements unsupported or contradicted. Fix every one in the next rewrite:
- [contradicted, minor] Governance guidance: At rollout; Governance controls / consistency: The controls table covers every control the checklist asks administrators to configure and every control the prose reports as absent. | Found: Assign that policy only to named users or groups, using the assignment steps on the Learn transcription page. / Microsoft documents no tenant-wide master switch for it | Fix: Add a meeting-policy assignment row with the user and group assignment paths documented at https://learn.microsoft.com/microsoftteams/meeting-transcription-captions. Add a separate tenant-wide profanity-filter master-switch row with ui and api null to represent the absence already stated in the prose.
-->
