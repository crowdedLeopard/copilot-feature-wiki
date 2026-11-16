---
title: "Microsoft Teams: Copilot in the Queues app on mobile"
slug: "microsoft-teams-copilot-in-the-queues-app-on-mobile"
roadmapId: 578859
topic: "modern-work"
products: ["Microsoft Teams"]
summary: "Copilot will answer questions about recorded call queue calls in the Queues app on Teams for Android and iOS. Needs Teams Premium and Microsoft 365 Copilot licences; Microsoft says no admin action is required."
status: "in-development"
releasePhase: ["General Availability"]
clouds: ["Worldwide (Standard Multi-Tenant)"]
platforms: ["Android","iOS"]
targetDate: "December CY2026"
previewDate: null
risk: "low"
cost: "medium"
impact: "low"
defaultState: "on"
action: "prepare"
licensing:
  model: "add-on"
  notes: "Microsoft's notice MC1552391 says users need a Teams Premium licence to use the Queues app and a Microsoft 365 Copilot licence to use Copilot. The Queues app also requires Teams Phone. No separate price or meter is stated for this feature."
audiences: ["m365-admin","service-owner","change-adoption"]
tags: ["teams","m365-copilot","mobile","licensing","transcripts"]
sources:
  - title: "Microsoft 365 Roadmap 578859"
    url: "https://www.microsoft.com/microsoft-365/roadmap?id=578859"
    kind: "roadmap"
  - title: "MC1552391: Microsoft Teams: Copilot in the Queues app on Mobile"
    url: "https://admin.microsoft.com/Adminportal/Home#/MessageCenter/:/messages/MC1552391"
    kind: "message-center"
  - title: "Manage Queues app for Microsoft Teams in your organization"
    url: "https://learn.microsoft.com/microsoftteams/manage-queues-app"
    kind: "learn"
  - title: "Manage Microsoft Copilot in Teams calls"
    url: "https://learn.microsoft.com/microsoftteams/copilot-teams-calling-transcription"
    kind: "learn"
  - title: "Setup - Automatic Recording template for Call Queue"
    url: "https://learn.microsoft.com/microsoftteams/aa-cq-setup-call-queue-template-recording-automatic"
    kind: "learn"
  - title: "Set-CsCallQueue"
    url: "https://learn.microsoft.com/powershell/module/microsoftteams/set-cscallqueue"
    kind: "learn"
  - title: "Microsoft 365 Copilot release notes"
    url: "https://learn.microsoft.com/microsoft-365/copilot/release-notes"
    kind: "learn"
videos: []
related: ["teams-intelligent-recap-without-saving-transcript"]
controls:
  - governs: "Which call queues record calls, and who can access the recordings"
    scope: "other"
    ui:
      surface: "Teams admin center"
      path: "Voice > Call queue > call queue > Templates > Automatic recording template"
      docs: "https://learn.microsoft.com/microsoftteams/aa-cq-setup-call-queue-template-recording-automatic"
    api:
      kind: "powershell"
      call: "Set-CsCallQueue -Identity <Guid> -AutoRecordingTemplateId <String>"
      docs: "https://learn.microsoft.com/powershell/module/microsoftteams/set-cscallqueue"
    note: "Existing control, not specific to Copilot. Microsoft's notice recommends automatic recording on queues where Copilot is wanted. The template is created under Voice > Templates and resources."
  - governs: "Whether Copilot can be used in Teams calls (documented for 1:1 and PSTN calls)"
    scope: "user"
    ui:
      surface: "Teams admin center"
      path: "Voice > Calling policies > policy > Copilot"
      docs: "https://learn.microsoft.com/microsoftteams/copilot-teams-calling-transcription"
    api:
      kind: "powershell"
      call: "Set-CsTeamsCallingPolicy -Identity <policy name> -Copilot Disabled"
      docs: "https://learn.microsoft.com/microsoftteams/copilot-teams-calling-transcription"
    note: "General control: its page covers 1:1 and PSTN calls; Microsoft has not confirmed it applies to Copilot in the Queues app."
  - governs: "Whether the Queues app is available in the Teams client"
    scope: "tenant"
    ui:
      surface: "Teams admin center"
      path: "Teams apps > Manage apps > Actions > Org-wide app settings > Microsoft apps"
      docs: "https://learn.microsoft.com/microsoftteams/manage-queues-app"
    api: null
    note: "Set to Off, this also turns off Insights and Tasks. It removes the whole Queues app, not Copilot alone."
  - governs: "A separate switch for Copilot in the Queues app on mobile"
    scope: "tenant"
    ui: null
    api: null
    note: "No such control is documented at the time of writing (November 2026)."
confidence: "medium"
created: "2026-11-16"
updated: "2026-11-16"
roadmapModified: "2026-11-04T00:02:09"
changes:
  - date: "2026-11-16"
    note: "First briefing for roadmap item 578859, using Message Center post MC1552391 and the Queues app, call queue recording and Copilot in Teams calls pages on Microsoft Learn."
version: 1
---

## What's changing

Microsoft plans to bring Copilot to the Queues app on Teams for Android and iOS. From shared call history, calling reps and supervisor leads can open Copilot on a recorded call, ask questions about it and get information and insights from the conversation without reviewing the whole call.

Microsoft's notice MC1552391 (published 2026-11-13) says Copilot is available for recorded call queue calls, as it is on desktop, and that the feature does not change how call recordings are created, stored or accessed. Microsoft Learn's release notes for October 27, 2026 describe the same flow in the Queues app: open a recorded call from unified call history, select the **Recap** tab and launch the Copilot Chat sidecar. Microsoft Learn has no page for the mobile feature itself at the time of writing (November 2026).

The roadmap record shows status In development, a target of December CY2026, release phase General Availability, Worldwide (Standard Multi-Tenant) only, on Android and iOS. The notice gives the rollout window: Targeted Release begins late November 2026 and completes by early December 2026; General Availability begins early December 2026 and completes by mid December 2026. The notice sets no act-by date.

## Why it matters

This puts an AI assistant in front of customer call content on phones, for the people who handle and supervise those calls. If nobody acts, licensed users start seeing Copilot on recorded calls as the rollout reaches them, and unlicensed users will not, which can prompt licence requests and support questions.

The main work is licensing and recording coverage. Copilot only has a call to work with where the call queue records calls, so the recording setup decides who benefits. Plan the licence assignments and the communication to queue teams before the Targeted Release window opens in late November 2026.

## Risk assessment

**Data exposure**

- Copilot answers questions from recorded call queue calls opened from shared call history. Anyone who can already open a recording there can now query it on mobile, so check who is granted access to recordings in the automatic recording template (a control row below).
- Microsoft's notice says the feature does not change how recordings are created, stored or accessed. Where the recordings and any transcripts sit is set by the template's SharePoint site.

**Security & identity**

- Microsoft's notice names calling reps and supervisor leads as users, with eligibility set by the Teams Premium and Microsoft 365 Copilot licences. Microsoft Learn does not describe a separate permission for the Copilot feature in the Queues app.

**Autonomy & actions**

- The roadmap and notice describe Copilot answering questions and surfacing insights for a person to act on. Neither describes Copilot taking actions on its own.

**Change & support**

- A new Copilot entry appears on mobile for licensed users, and only for calls that were recorded. Expect questions from agents whose queue does not record, or who lack a licence.
- No tenant switch for Copilot in the Queues app is documented. Turning off the Queues app removes it entirely, along with Insights and Tasks.

## Cost and licensing

Microsoft's notice MC1552391 says users need a Teams Premium licence to use the Queues app and a Microsoft 365 Copilot licence to use Copilot. Microsoft Learn's Queues app page adds that users must also have a Teams Phone licence (see [Manage Queues app for Microsoft Teams in your organization](https://learn.microsoft.com/microsoftteams/manage-queues-app)).

No price, meter or Copilot Credits charge is stated for this feature in the roadmap record, the notice or the Learn pages read. Budget for the two add-on licences per user plus admin time to assign them and to confirm recording is on. Microsoft Learn's Queues app page says that once a user is licensed for Teams Premium, it can take up to 48 hours for the Queues app to appear in the Teams client.

## Scope

**Users:** calling reps and supervisor leads in call queues, per Microsoft's notice, who hold Teams Premium and Microsoft 365 Copilot licences. The Queues app is enabled by default for Teams users with both a Teams Premium and a Teams Phone licence who are voice enabled.

**Platforms and cloud:** Android and iOS; Worldwide (Standard Multi-Tenant) as the roadmap lists it. The Queues app is supported on iOS and Android mobile clients, per its Learn page.

**Prerequisites:** the call must be recorded, and the notice recommends automatic recording on the call queues where users should use Copilot. Copilot in the Queues app is already available on desktop, per the notice.

## Governance guidance

### Before rollout

- Assign Microsoft 365 Copilot and Teams Premium to the agents and leads who should use the feature, as Microsoft's notice recommends, and confirm they also hold Teams Phone.
- Check that the call queues you care about have an automatic recording template assigned (Teams admin center > Voice > Call queue).
- Review who may access recordings in each automatic recording template, because that access is set when the template is created and cannot be changed afterwards.
- Tell queue teams that Copilot works only on recorded calls.

### At rollout

- Test with a licensed agent and a lead on Android and iOS: open a recorded call in shared call history and ask Copilot a question.
- Watch Message center for MC1552391 updates, since the rollout window moves with Targeted Release first.

### After rollout

- Handle licence requests from users who see the Queues app but not Copilot.
- Re-check the Learn pages for an admin control specific to Copilot in the Queues app, as none is documented at the time of writing (November 2026).

## Governance controls

<p class="controls__lead">Where each control lives. The left column says what the setting decides and how far it reaches; the middle gives the admin centre and the exact path; the right gives the script, API or command that does the same. <em>Not yet documented</em> means Microsoft has not published a control for that surface, so there is nothing to configure yet.</p>

<table class="controls">
<thead><tr><th>Control</th><th>Admin UI</th><th>API and automation</th></tr></thead>
<tbody>
<tr><td data-label="Control"><strong>Which call queues record calls, and who can access the recordings</strong><br><small class="controls__note">Existing control, not specific to Copilot. Microsoft's notice recommends automatic recording on queues where Copilot is wanted. The template is created under Voice &gt; Templates and resources.</small></td><td data-label="Admin UI"><strong>Teams admin center</strong><br>Voice › Call queue › call queue › Templates › Automatic recording template <a href="https://learn.microsoft.com/microsoftteams/aa-cq-setup-call-queue-template-recording-automatic" rel="noopener" class="controls__docs">Learn</a></td><td data-label="API and automation"><strong>PowerShell</strong><br><code>Set-CsCallQueue -Identity &lt;Guid&gt; -AutoRecordingTemplateId &lt;String&gt;</code> <a href="https://learn.microsoft.com/powershell/module/microsoftteams/set-cscallqueue" rel="noopener" class="controls__docs">Learn</a></td></tr>
<tr><td data-label="Control"><strong>Whether Copilot can be used in Teams calls (documented for 1:1 and PSTN calls)</strong><br><small>User</small><br><small class="controls__note">General control: its page covers 1:1 and PSTN calls; Microsoft has not confirmed it applies to Copilot in the Queues app.</small></td><td data-label="Admin UI"><strong>Teams admin center</strong><br>Voice › Calling policies › policy › Copilot <a href="https://learn.microsoft.com/microsoftteams/copilot-teams-calling-transcription" rel="noopener" class="controls__docs">Learn</a></td><td data-label="API and automation"><strong>PowerShell</strong><br><code>Set-CsTeamsCallingPolicy -Identity &lt;policy name&gt; -Copilot Disabled</code> <a href="https://learn.microsoft.com/microsoftteams/copilot-teams-calling-transcription" rel="noopener" class="controls__docs">Learn</a></td></tr>
<tr><td data-label="Control"><strong>Whether the Queues app is available in the Teams client</strong><br><small>Tenant</small><br><small class="controls__note">Set to Off, this also turns off Insights and Tasks. It removes the whole Queues app, not Copilot alone.</small></td><td data-label="Admin UI"><strong>Teams admin center</strong><br>Teams apps › Manage apps › Actions › Org-wide app settings › Microsoft apps <a href="https://learn.microsoft.com/microsoftteams/manage-queues-app" rel="noopener" class="controls__docs">Learn</a></td><td data-label="API and automation"><em class="controls__gap">Not yet documented</em></td></tr>
<tr><td data-label="Control"><strong>A separate switch for Copilot in the Queues app on mobile</strong><br><small>Tenant</small><br><small class="controls__note">No such control is documented at the time of writing (November 2026).</small></td><td data-label="Admin UI"><em class="controls__gap">Not yet documented</em></td><td data-label="API and automation"><em class="controls__gap">Not yet documented</em></td></tr>
</tbody>
</table>

The recording template decides which calls exist for Copilot to use; it does not switch Copilot on or off. The Teams calling policy **Copilot** setting is documented for one-to-one and PSTN calls, and Microsoft has not confirmed that it governs Copilot on call queue calls in the Queues app, so do not rely on it as a switch for this feature. Turning off the Queues app at org level is blunt and also turns off Insights and Tasks.

## Open questions

- Does the Teams calling policy **Copilot** setting, or any other policy, turn off Copilot on call queue calls in the Queues app? Watch the Learn page on managing Copilot in Teams calls and MC1552391.
- Is a Copilot Credits meter or any other charge involved beyond the two licences? Watch the Microsoft 365 Copilot and Teams Premium licensing pages.
- Are Copilot questions and answers on a call stored or audited, and where can administrators see them? Microsoft has not said.
- Will the mobile feature match desktop for queue types and call types? Watch Message center and the Teams Phone Copilot pages.

<!-- rationale
risk: Low. Copilot works on call recordings that users can already open in shared call history, and Microsoft's notice says recording creation, storage and access do not change.
cost: Medium. Users need a Teams Premium licence for the Queues app and a Microsoft 365 Copilot licence for Copilot, so each agent or supervisor who wants the feature needs both add-ons.
impact: Low. Only calling reps and supervisor leads in call queues, with the right licences and recorded calls, will see it; most Teams users are unaffected.
-->
