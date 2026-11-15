---
title: "Work IQ: real-time Teams meeting transcripts for apps and agents"
slug: "work-iq-real-time-transcripts"
roadmapId: 570651
desk: "agents"
products: ["Microsoft Teams","Microsoft Copilot (Microsoft 365)","Work IQ"]
summary: "Apps and agents can receive Teams meeting transcripts while the meeting is in progress through Work IQ. Admins control it with a separate Teams setting that is off by default."
status: "in-development"
releasePhase: ["General Availability","Preview"]
clouds: ["Worldwide (Standard Multi-Tenant)"]
platforms: ["Web"]
targetDate: "November CY2026"
previewDate: "September CY2026"
risk: "high"
cost: "variable"
impact: "medium"
defaultState: "admin-opt-in"
action: "prepare"
licensing:
  model: "unknown"
  notes: "No licence stated for the transcript access. Consuming agents may use consumption billing."
audiences: ["m365-admin","security","compliance","service-owner"]
tags: ["work-iq","teams","meeting-transcripts","real-time","transcript-api","agents","privacy"]
sources:
  - title: "Manage transcript API access for Teams meetings"
    url: "https://learn.microsoft.com/microsoftteams/meeting-transcript-api-access"
    kind: "learn"
  - title: "Microsoft 365 Roadmap item 570651"
    url: "https://www.microsoft.com/microsoft-365/roadmap?id=570651"
    kind: "roadmap"
videos: []
related: ["teams-intelligent-recap-without-saving-transcript","teams-ai-generated-meeting-memory","work-iq-memory-capabilities-expand-to-agents"]
confidence: "high"
created: "2026-11-15"
updated: "2026-11-15"
roadmapModified: "2026-10-19T23:15:15"
changes:
  - date: "2026-11-15"
    note: "New briefing: Work IQ real-time Teams transcripts, with setting effective 14 November 2026."
version: 1
---

## What's changing

Work IQ lets agents and apps, including ones an organisation builds, receive the transcript of a Teams meeting or call while it is in progress. The roadmap describes it as access to meeting transcripts in real time for assistance and insights.

Learn states a separate **Work IQ access** setting controls this. It is independent of Microsoft Graph access and is off by default. Turning it on does not start transcription, and an app only receives a transcript if AI is allowed in the meeting, transcription is running, the app acts for a signed-in user with the right Entra permissions, and Work IQ is enabled for that organisation.

Learn says Work IQ access takes effect on 14 November 2026. The roadmap shows a preview from September 2026 and general availability targeted for November 2026.

## Why it matters

Real-time access allows agents to act during a meeting, which raises privacy and compliance questions that post-meeting transcript access does not. Real-time transcripts received through Work IQ include speaker names, and the Include speaker attribution setting applies only to Graph.

Because the organiser's organisation decides, external meetings may behave differently from internal ones. Apps already using real-time transcripts need the setting turned on to keep working.

## Risk assessment

**Data exposure**
- Live speech content and speaker names are delivered to apps and agents.
- The organiser's tenant setting decides, not the app's tenant.

**Security & identity**
- Apps act on behalf of a signed-in user and need Entra permissions.

**Autonomy & actions**
- Agents could act on meeting content in real time; actions depend on the agent design.

**Change & support**
- Turning the setting off does not stop transcripts already in progress, and changes are not immediate.

## Cost and licensing

Not yet published for transcript access itself. Learn states Work IQ in Copilot Studio uses consumption billing with Copilot Credits, with no separate spending policy needed. Teams transcription must already be available for the meeting.

## Scope

Teams meetings and calls in the Worldwide cloud, on the web per the roadmap. The setting applies by the meeting organiser's organisation. Microsoft 365 Copilot, Facilitator and intelligent recap are not affected by the setting.

## Governance guidance

### Before rollout
- [ ] Identify apps and agents in your organisation that need real-time transcripts.
- [ ] Decide whether Work IQ access should be on before 14 November 2026.
- [ ] Review "Allow AI in all meetings" and transcription policies.
- [ ] Update privacy notices and meeting etiquette.

### At rollout
- [ ] Turn on WorkIQ access in the Teams admin center or with Set-CsTeamsMeetingConfiguration -EnableWorkIQTranscriptAccess.
- [ ] Check Entra permissions for each app.

### After rollout
- [ ] Test denied and allowed cases.
- [ ] Review which apps receive transcripts.
- [ ] Revisit the setting if apps change.

## Admin controls

Teams admin center: Meetings > Meeting settings > Transcript API access > WorkIQ access toggle (default off). PowerShell: `Set-CsTeamsMeetingConfiguration -EnableWorkIQTranscriptAccess $true -Identity Global`, which needs the latest Teams PowerShell module. Per-app control is through Microsoft Entra API permissions. Allow AI in all meetings must also be on.

## Open questions

- How will external organisers' settings interact with your policies?
- Is there per-meeting or per-app auditing of delivered transcripts?
- What billing applies to agents that consume transcripts?
- Which sovereign clouds will be supported?

<!-- rationale
risk: High. Live transcripts can contain sensitive spoken content and speaker names, and the setting takes effect on 14 November 2026, with organiser-tenant rules deciding access.
cost: Not yet published. Work IQ in Copilot Studio uses consumption billing, so agents consuming transcripts may use Copilot Credits.
impact: Medium. Meeting participants are affected indirectly; admins and app owners must act.
-->
