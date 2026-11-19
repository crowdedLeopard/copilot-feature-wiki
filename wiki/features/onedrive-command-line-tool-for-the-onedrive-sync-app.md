---
title: "OneDrive: odcli command-line tool for the sync app"
slug: "onedrive-command-line-tool-for-the-onedrive-sync-app"
roadmapId: 578910
topic: "modern-work"
products: ["OneDrive"]
summary: "Microsoft plans odcli, a command-line tool to check and manage the OneDrive sync app, with JSON output for scripts and AI agents. Controls, default and permissions are not yet published; no action is needed now."
status: "in-development"
releasePhase: ["General Availability"]
clouds: ["Worldwide (Standard Multi-Tenant)"]
platforms: ["Desktop","Mac"]
targetDate: "March CY2027"
previewDate: null
risk: "medium"
cost: "low"
impact: "low"
defaultState: "unknown"
action: "review"
licensing:
  model: "included"
  notes: "The OneDrive service description says OneDrive is included in Microsoft 365 and Office 365 plans, in SharePoint plans, and can be bought as a standalone plan. A licence or price specific to odcli is not yet published."
audiences: ["m365-admin","service-owner","security"]
tags: ["onedrive","sync-app","command-line-tools","automation","admin-controls","ai"]
sources:
  - title: "Microsoft 365 Roadmap 578910"
    url: "https://www.microsoft.com/microsoft-365/roadmap?id=578910"
    kind: "roadmap"
  - title: "Plan file sync for SharePoint and OneDrive in Microsoft 365"
    url: "https://learn.microsoft.com/sharepoint/plan-file-sync"
    kind: "learn"
  - title: "OneDrive service description"
    url: "https://learn.microsoft.com/office365/servicedescriptions/onedrive-for-business-service-description"
    kind: "learn"
  - title: "OneDrive Sync Release Notes"
    url: "https://learn.microsoft.com/sharepoint/sync-release-notes"
    kind: "learn"
videos: []
related: []
controls:
  - governs: "Whether odcli is available and which of its commands may run"
    scope: "tenant"
    ui: null
    api: null
    note: "No odcli setting, policy or API is documented at the time of writing (November 2026). Existing sync app policies are described in the notes."
confidence: "low"
created: "2026-11-18"
updated: "2026-11-18"
roadmapModified: "2026-11-05T23:59:28"
changes:
  - date: "2026-11-18"
    note: "First briefing: odcli is known only from the roadmap item; no Learn page, control, default or odcli-specific licence is published yet."
  - date: "2026-11-18"
    note: "Checked against Microsoft Learn by gpt-6.1-sol: passed: all 44 statements confirmed"
version: 1
verification:
  status: "verified"
  date: "2026-11-18"
  version: 1
  model: "gpt-6.1-sol"
  engine: "copilot"
  claims: 44
  confirmed: 44
  unconfirmed: 0
  contradicted: 0
  attempts: 0
  hash: "f99866aa006286069ef002ca7aa72dab"
---

## What's changing

Microsoft plans a new command-line tool, odcli, for the OneDrive sync app. The roadmap item states that it lets OneDrive users, IT admins and support engineers check and manage the sync app from the command line, with commands covering sync status, accounts, configuration, policies and managing the sync app.

The roadmap item also states that odcli produces JSON output so that scripts, management tools and AI agents can automate these tasks. Microsoft Learn does not describe odcli yet, so what follows about its behaviour is the roadmap's description only: which commands exist, which of them change settings, and how it is installed are not yet documented.

The roadmap record lists the item as In development, with a target date of March CY2027, release phase General Availability, platforms Desktop and Mac, and cloud Worldwide (Standard Multi-Tenant). The date is a target, not a commitment. The roadmap record does not state whether odcli arrives with the sync app or has to be installed, so the default state is Not stated.

## Why it matters

A tool that can read and, per the roadmap, manage sync app configuration and policies from a script changes who can adjust a device's OneDrive behaviour and how quickly. Support engineers get a scriptable way to check sync status, and administrators get a way to feed sync state into their own tooling. The same reach is also why the permission model matters: the roadmap names users as well as admins and support engineers among its audience.

Microsoft has not stated what happens on arrival, so base planning on the fact that no source says existing sync behaviour changes. The sensible stance is to review the tool when Microsoft publishes its documentation, before any script, management tool or AI agent is allowed to call it.

## Risk assessment

**Data exposure**
- The roadmap lists sync status and accounts among the command areas. Microsoft has not published what account or file information these commands return, so treat the JSON output as potentially identifying until the documentation says otherwise.
- The roadmap says JSON output is meant for scripts, management tools and AI agents. Where such a consumer stores or forwards that output is outside anything Microsoft has documented for odcli.

**Security & identity**
- The roadmap says commands cover configuration and policies. Microsoft has not said whether odcli can change a setting that Group Policy, Intune or a Mac .plist file also sets, or which setting wins if they differ. Confirm this before relying on either channel.
- Which account runs odcli, and whether a command needs elevated rights, is not yet documented.

**Autonomy & actions**
- The roadmap says odcli can manage the sync app and names AI agents as automation consumers. An agent or script with shell access could therefore run management commands unattended. Microsoft documents no approval or restriction mechanism for odcli yet.

**Change & support**
- Help desks may start using odcli output in tickets and scripts. Plan to confirm the supported platforms and sync app versions when Microsoft publishes them; the roadmap lists Desktop and Mac only.

## Cost and licensing

The OneDrive service description says OneDrive is included in Microsoft 365 and Office 365 plans, in SharePoint plans, and can be purchased as a standalone plan (https://learn.microsoft.com/office365/servicedescriptions/onedrive-for-business-service-description). That page's feature table lists sync features and IT admin, security, and compliance features as available across the plan types it shows.

A licence, meter or price specific to odcli is not yet published, and the roadmap item names none. The cost known today is indirect: admin and support time to test commands, write scripts and update runbooks.

## Scope

The roadmap item lists OneDrive as the product, Desktop and Mac as platforms, and Worldwide (Standard Multi-Tenant) as the cloud. It does not list GCC, GCC High or DoD, which is a record fact and not a statement that odcli is unavailable there.

The roadmap names OneDrive users, IT admins and support engineers as the audience. Roles needed to run commands, the sync app versions that include odcli and any prerequisites are not yet documented. The target is March CY2027, and the item is In development.

## Governance guidance

### Before rollout
- Record the roadmap item (578910) and its March CY2027 target in your change tracker, and watch Message center and Microsoft Learn for the odcli documentation.
- List the scripts, management tools and AI agents in your tenant that can run commands on user devices, so you know which could call odcli once it exists.
- Ask your support team which sync status checks they run by hand today, so you can judge which odcli commands they would adopt.

### At rollout
- Read the odcli documentation when it is published and confirm which commands only read state and which change configuration or policies.
- Confirm how odcli interacts with the sync app policies you already deploy before letting scripts change settings.
- Pilot with a small group of IT and support staff on Desktop and Mac devices before wider use.

### After rollout
- Review any scripts and agent tasks that call odcli, and remove those that change configuration without a named owner.
- Check whether odcli activity can be logged centrally, and add it to your monitoring if so.

## Governance controls

<p class="controls__lead">Where each control lives. The left column says what the setting decides and how far it reaches; the middle gives the admin centre and the exact path; the right gives the script, API or command that does the same. <em>Not yet documented</em> means Microsoft has not published a control for that surface, so there is nothing to configure yet.</p>

<table class="controls">
<thead><tr><th>Control</th><th>Admin UI</th><th>API and automation</th></tr></thead>
<tbody>
<tr><td data-label="Control"><strong>Whether odcli is available and which of its commands may run</strong><br><small>Tenant</small><br><small class="controls__note">No odcli setting, policy or API is documented at the time of writing (November 2026). Existing sync app policies are described in the notes.</small></td><td data-label="Admin UI"><em class="controls__gap">Not yet documented</em></td><td data-label="API and automation"><em class="controls__gap">Not yet documented</em></td></tr>
</tbody>
</table>

Microsoft has not published a control for odcli itself at the time of writing (November 2026): no admin centre setting, policy or API that turns it on or off, limits its commands, or records its use is documented.

Today, Learn says OneDrive sync app settings on Windows computers can be managed with Windows Group Policy or administrative templates in Intune, and that Mac settings are configured using .plist files. These are the existing channels for sync app settings. Whether they govern odcli, or whether odcli can override them, is not documented.

## Open questions

- Which odcli commands only read state, and which change configuration or policies? Watch the OneDrive sync app pages on Microsoft Learn.
- Does odcli arrive with the sync app or need separate installation, and on which Desktop and Mac versions? The default state is Not stated.
- What permissions does odcli need, and can an administrator restrict or switch it off by policy? Watch Message center and the sync app policy pages.
- Can odcli changes be audited or logged, and does its JSON output include account details?

<!-- rationale
risk: Medium. The roadmap says odcli can manage the sync app, its configuration and policies, and is aimed at scripts and AI agents, but Microsoft has not published what it can change or how it is controlled.
cost: Low. The only cost the sources show is admin and support time to evaluate scripts; OneDrive is included in Microsoft 365 plans, and no odcli-specific licence or price is published.
impact: Low. The roadmap names OneDrive users, IT admins and support engineers as the audience, so most users will not notice; admins and help desks are the people who would use it.
-->
