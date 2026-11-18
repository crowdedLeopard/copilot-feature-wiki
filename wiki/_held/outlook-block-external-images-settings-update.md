---
title: "Outlook: new settings to block or load external images"
slug: "outlook-block-external-images-settings-update"
roadmapId: 565862
topic: "modern-work"
products: ["Outlook"]
summary: "Outlook on the web and new Outlook for Windows get settings to block all external content or, if the admin allows, load it by default. The roadmap says the default (safe senders only) is unchanged."
status: "rolling-out"
releasePhase: ["General Availability"]
clouds: ["Worldwide (Standard Multi-Tenant)"]
platforms: ["Web"]
targetDate: "July CY2026"
previewDate: null
risk: "low"
cost: "low"
impact: "low"
defaultState: "off"
action: "review"
licensing:
  model: "unknown"
  notes: "Not yet published. The roadmap record names no licence for this change, and the Learn page on Outlook on the web in Exchange Online names none either."
audiences: ["m365-admin","security","end-user"]
tags: ["outlook","exchange","privacy"]
sources:
  - title: "Microsoft 365 Roadmap 565862"
    url: "https://www.microsoft.com/microsoft-365/roadmap?id=565862"
    kind: "roadmap"
  - title: "Set-OwaMailboxPolicy"
    url: "https://learn.microsoft.com/powershell/module/exchangepowershell/set-owamailboxpolicy"
    kind: "learn"
  - title: "Create a mailbox policy in Exchange Online for Outlook on the web and the new Outlook for Windows"
    url: "https://learn.microsoft.com/exchange/clients-and-mobile-in-exchange-online/outlook-on-the-web/create-outlook-web-app-mailbox-policy"
    kind: "learn"
  - title: "Outlook on the web in Exchange Online"
    url: "https://learn.microsoft.com/exchange/clients-and-mobile-in-exchange-online/outlook-on-the-web/outlook-on-the-web"
    kind: "learn"
  - title: "Planning considerations to deploy Outlook for Windows"
    url: "https://learn.microsoft.com/microsoft-365-apps/outlook/configuration/plan-outlook-deployment"
    kind: "learn"
  - title: "Configure junk email settings on Exchange Online mailboxes"
    url: "https://learn.microsoft.com/defender-office-365/configure-junk-email-settings-on-exo-mailboxes"
    kind: "learn"
videos: []
related: []
controls:
  - governs: "Admin allowance for users to load all external content by default"
    scope: "tenant"
    ui: null
    api: null
    note: "The roadmap says load-all is available only if the customer admin allows it. No Microsoft Learn page documents where this is set at the time of writing."
confidence: "medium"
created: "2026-11-18"
updated: "2026-11-18"
roadmapModified: "2026-11-11T00:52:46"
changes:
  - date: "2026-11-18"
    note: "First briefing for this item: roadmap-described settings to block or load external images; no Learn page or admin control documented yet."
  - date: "2026-11-18"
    note: "Checked against Microsoft Learn by gpt-6.1-sol: held: 1 of 42 statements contradicted, 2 unconfirmed; taken offline until corrected"
version: 1
verification:
  status: "held"
  date: "2026-11-18"
  version: 1
  model: "gpt-6.1-sol"
  engine: "copilot"
  claims: 42
  confirmed: 39
  unconfirmed: 2
  contradicted: 1
  attempts: 1
  hash: "4f78d7194af7844d7b01fcecb8579024"
---

## What's changing

Outlook on the web and the new Outlook for Windows are getting new settings for loading external images. According to the roadmap item, the new settings let customers block all external content, or load all content by default if the customer admin allows it. The roadmap also says the existing default behaviour does not change: external content loads only for safe senders.

Microsoft Learn has no page for this feature at the time of writing (November 2026), so what follows about its behaviour is the roadmap's description. In particular, Microsoft has not said where users or admins find the settings, whether the block-all setting is chosen by each user or set by an admin, or what "if the customer admin allows" is set through.

The roadmap record gives the status as Rolling out, the release phase as General Availability, the target date as July CY2026 and the clouds as Worldwide (Standard Multi-Tenant). The record lists the platform as Web; the description also names the new Outlook for Windows. The record was last modified on 2026-11-11.

## Why it matters

External images in HTML email are a privacy and tracking concern. Microsoft's guidance for Outlook for Windows describes senders adding a web beacon, which includes external content such as graphic images, so that opening a message confirms the address is valid. Block-all gives organisations that want stricter handling an option to ask for it; load-all is the opposite direction and is gated by the admin.

If nobody acts, the roadmap says the existing default (load external content only for safe senders) continues. Treat that as the wiki's reading of the roadmap text, not a Learn-documented default. The practical work is to find out how the admin gate for load-all is exposed in your tenant before users ask for it.

## Risk assessment

**Data exposure**
- Loading all external content by default would let images fetched from external servers load for every sender, not only safe senders. The roadmap makes this available only if the customer admin allows it; no Learn page yet shows where that decision is made.
- Block-all narrows exposure compared with the stated default, because external content from safe senders would no longer load either. The roadmap does not say who can turn it on.

**Security & identity**
- No change to sign-in, roles or identity is described in the roadmap text.
- Microsoft's Outlook deployment guidance says junk senders often add a web beacon in HTML email that includes external content, such as graphic images. That is the exposure the load-all option reopens for users who choose it.

**Autonomy & actions**
- No change: the roadmap describes display settings for images, not an agent or automated action.

**Change & support**
- Users who switch to block-all may report missing images in newsletters and notifications; prepare a help desk answer.
- The roadmap description mixes tenses ("now support will support"), so confirm in your own tenant whether the settings have reached users before announcing them.

## Cost and licensing

The roadmap record names no licence, meter or price for this change. The Learn page on Outlook on the web in Exchange Online describes the product and its policies and names no licence. A licence or meter specific to this feature is not yet published.

The only cost the sources show is indirect: admin time to decide the stance and help desk time for users who see blocked images.

## Scope

- **Clients:** Outlook on the web and the new Outlook for Windows, per the roadmap description. The record's platform field lists Web only.
- **Clouds:** the record lists Worldwide (Standard Multi-Tenant). Other clouds are not listed on the roadmap item.
- **Rollout:** status Rolling out, release phase General Availability, target date July CY2026, as the record gives them. Microsoft has not published a per-tenant rollout schedule on Learn.
- **Users and roles:** which users get the settings and which admin role configures the admin allowance are not stated.
- **Default:** the roadmap says existing default behaviour is not changed.

## Governance guidance

### Before rollout
- Confirm with Microsoft's Message center and the Exchange Online documentation how the admin allowance for loading all content is exposed, since no Learn page describes it yet.
- Decide whether your organisation wants users able to load all external content by default, and record the decision for security and compliance reviewers.
- Brief the help desk that a block-all setting would hide images in messages from safe senders too.

### At rollout
- Open Outlook on the web and the new Outlook for Windows with a test mailbox and look for the new external image settings.
- Test a newsletter-style message from a safe sender and from an unknown sender under each setting that appears.

### After rollout
- Watch the Microsoft 365 Roadmap item and Message center for the Learn page and for an admin control; update the decision when they appear.
- Collect help desk tickets about missing or unexpectedly loaded images and use them to decide on communication to users.

## Governance controls

<p class="controls__lead">Where each control lives. The left column says what the setting decides and how far it reaches; the middle gives the admin centre and the exact path; the right gives the script, API or command that does the same. <em>Not yet documented</em> means Microsoft has not published a control for that surface, so there is nothing to configure yet.</p>

<table class="controls">
<thead><tr><th>Control</th><th>Admin UI</th><th>API and automation</th></tr></thead>
<tbody>
<tr><td data-label="Control"><strong>Admin allowance for users to load all external content by default</strong><br><small>Tenant</small><br><small class="controls__note">The roadmap says load-all is available only if the customer admin allows it. No Microsoft Learn page documents where this is set at the time of writing.</small></td><td data-label="Admin UI"><em class="controls__gap">Not yet documented</em></td><td data-label="API and automation"><em class="controls__gap">Not yet documented</em></td></tr>
</tbody>
</table>

At the time of writing (November 2026), Microsoft Learn documents no admin control for these settings. The Set-OwaMailboxPolicy reference lists ExternalImageProxyEnabled, which sets whether external images load through the Outlook external image proxy; it is not described as the setting for blocking external content or loading it by default, so it is not shown as this feature's control.

Safe senders are managed separately. The Learn page on junk email settings says users can configure their safelist collection in Outlook or Outlook on the web by default, and that admins can use Set-MailboxJunkEmailConfiguration to configure it on a user's mailbox. The roadmap says the existing default depends on safe senders, so that list decides which senders' images load under the default.

## Open questions

- Where will administrators find the setting that allows loading all external content, and which admin role and PowerShell parameter, if any, controls it? Watch the Exchange Online and new Outlook policy pages on Microsoft Learn.
- Is the block-all setting chosen by each user, set by an admin, or both?
- Is a new setting off until someone chooses it, and does the admin allowance start as allowed or not allowed? The roadmap says only that existing default behaviour is not changed.
- Which licences cover this change? A licence or meter for this feature is not yet published.
- Does the roadmap's Web platform entry mean the settings reach the new Outlook for Windows at the same time as Outlook on the web?

<!-- rationale
risk: Low. The roadmap says existing default behaviour is not changed, and loading all content by default is available only if the customer admin allows it; Microsoft Learn documents no admin switch for it yet.
cost: Low. The only cost the sources show is admin and help desk time; no licence or meter for this feature is published, and the roadmap record names none.
impact: Low. The roadmap says existing default behaviour is unchanged, so most users see no difference until a new setting is chosen; who chooses it is not stated.
-->

<!-- verifier-findings (2026-11-18, held; checked by gpt-6.1-sol)
The independent check found fault only with the statements below. This is a correction: change what they name and carry the rest of the page over unchanged.
Correct each of these with the smallest change that removes the fault: delete the statement, narrow it, or put the finding's own "Found" text or worded replacement in its place. Where a fix asks for more than that (a new row, an explanation, further references), do only the part that removes the fault. A correction adds no control rows.
- [unsupported, blocker] front matter: defaultState / default: The new control is off by default. | Found: Searched: Outlook external images off by default web; Outlook external content settings default. Read roadmap, Set-OwaMailboxPolicy, Set-MailboxMessageConfiguration and new Outlook Policy Management; none states the new control or admin allowance starts off. | Fix: Set defaultState to 'unknown'. Retain the roadmap's statement that existing safe-senders-only behavior is unchanged, and retain the open question about the initial state of the admin allowance; neither establishes that the new control itself is off.
- [contradicted, blocker] front matter: licensing.model and notes; Cost and licensing; Open questions / licensing: Which licence covers this change is not yet published, so the licensing model is unknown. | Found: To use the Outlook for Windows desktop app (either the classic or new version) with a Microsoft 365 organizational email address, you need to purchase a plan that includes the desktop versions of the Microsoft 365 apps. | Fix: Set licensing.model to 'included'. Replace the broad licensing-unknown wording with: 'Outlook on the web is included in Exchange Online plans, including Plan 1 and Plan 2. New Outlook for Windows requires a qualifying desktop-app licence, such as Microsoft 365 Business Standard or Business Premium; once an account has a qualifying licence, secondary accounts such as Business Basic or E1 can be added. No licence or meter specific to this settings update was found.' Cite https://learn.microsoft.com/office365/servicedescriptions/exchange-online-service-description/exchange-online-service-description and https://learn.microsoft.com/microsoft-365-apps/outlook/get-started/licensing-options. Narrow the licensing open question to any entitlement specific to the update. | Source: https://learn.microsoft.com/microsoft-365-apps/outlook/get-started/licensing-options
- [unsupported, blocker] controls[0].scope; Governance controls: Tenant / applicability: The admin allowance has tenant scope. | Found: Searched: Outlook external images admin tenant. Read roadmap, Set-OwaMailboxPolicy, EAC mailbox-policy creation and new Outlook Policy Management. The roadmap names customer-admin allowance but no scope; no reference states its scope is tenant-wide. | Fix: Set controls[0].scope to 'other', replace the rendered 'Tenant' scope with 'Other', and append to the row note: 'The scope of the admin allowance is not yet documented.' Do not infer tenant-wide enforcement from the words 'customer admin'.
-->
