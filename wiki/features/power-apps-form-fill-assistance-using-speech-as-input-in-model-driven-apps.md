---
title: "Power Apps: speech as an input source for form fill assistance in model-driven apps"
slug: "power-apps-form-fill-assistance-using-speech-as-input-in-model-driven-apps"
roadmapId: 576281
desk: "power-platform"
products: ["Power Apps"]
summary: "Users in model-driven apps can record speech with a microphone icon and have the transcript fill form fields. Recordings are transient and not saved."
status: "in-development"
releasePhase: ["General Availability"]
clouds: ["Worldwide (Standard Multi-Tenant)"]
platforms: ["Android","iOS","Web"]
targetDate: "December CY2026"
previewDate: null
risk: "medium"
cost: "low"
impact: "high"
defaultState: "on"
action: "act-now"
licensing:
  model: "per-user"
  notes: "Learn: Power Apps premium or Dynamics 365 enterprise or premium licence for form fill assistance."
audiences: ["power-platform-admin","compliance","change-adoption","end-user"]
tags: ["power-apps","model-driven-apps","form-fill-assistance","speech","copilot","mobile"]
sources:
  - title: "Microsoft 365 Roadmap item 576281"
    url: "https://www.microsoft.com/microsoft-365/roadmap?id=576281"
    kind: "roadmap"
  - title: "Use AI form fill assistance feature in model-driven apps"
    url: "https://learn.microsoft.com/power-apps/user/form-filling-assistance"
    kind: "learn"
videos: []
related: ["power-apps-form-fill-assistance-using-m365-files-in-model-driven-apps","power-apps-use-the-modernized-personal-settings-experience"]
confidence: "medium"
created: "2026-11-14"
updated: "2026-11-14"
roadmapModified: "2026-10-23T21:59:27"
changes:
  - date: "2026-11-14"
    note: "New briefing from roadmap item 576281 with Learn form fill guidance."
version: 1
---

## What's changing

Form fill assistance in Power Apps will accept speech as a source. Users select the microphone icon and record their content, and the transcript is used as a source for the form entry. The roadmap says recordings are transient and not saved.

Learn describes form fill assistance as AI-suggested field values that users must review and accept before saving. Current sources include files and pasted text.

The roadmap lists general availability for December CY2026, monthly channel, version 2612.1, Worldwide only, with Android among the platforms. Feature scope is users, enabled by default.

## Why it matters

Because the feature is on by default, users may begin dictating records, including customer or health details, without any announcement. Service owners should decide whether speech input suits their data and workplace settings.

There is also a records angle: the transcript is not stored, but the values the user accepts are.

## Risk assessment

**Data exposure**
- Speech is transcribed and sent for processing. Transient handling is stated by the roadmap; confirm region and retention in Learn at release.
- Learn says fields with column security are not supported for suggestions.

**Security & identity**
- Microphone access follows device and browser permissions.

**Autonomy & actions**
- Suggestions need user acceptance. Nothing saves until the user does so.

**Change & support**
- Transcription errors may enter records. Brief users to check values.

## Cost and licensing

Learn says form fill assistance needs a Power Apps premium licence for model-driven apps or a Dynamics 365 enterprise or premium licence, and is hidden without one. No extra speech meter is published. Usage may be subject to service limits.

## Scope

Users of model-driven apps with form fill assistance on, including mobile platforms per the roadmap. Worldwide only. Fields must allow form fill assistance, and supported types are text, numeric, choice and date.

## Governance guidance

### Before rollout
- [ ] Decide whether speech input is acceptable for each app and data class.
- [ ] Review the form fill assistance settings per environment.
- [ ] Draft user guidance on dictation in shared spaces.

### At rollout
- [ ] Check the Data entry setting under Copilot > Settings > Power Apps before the December release.
- [ ] Switch off the Allow form fill assistance column property for sensitive columns.

### After rollout
- [ ] Sample records for transcription errors.
- [ ] Gather user feedback and adjust settings.

## Admin controls

Learn says the primary control for form fill assistance is moving to the Power Platform admin center under Copilot > Settings > Power Apps > Data entry. App-level settings are in the app designer, and the column property Allow form fill assistance applies per column. A speech-specific switch is not yet published.

## Open questions

- Is there a separate switch for speech input?
- Where is audio processed, and for how long?
- Which languages are supported?

<!-- rationale
risk: Medium. It is enabled by default for users and processes spoken content, which may include personal or sensitive information.
cost: Low. Learn says form fill assistance needs a Power Apps premium or Dynamics 365 licence; no additional charge for speech is published.
impact: High. The roadmap lists users as enabled by default, so many users of enabled apps may see the microphone.
-->
