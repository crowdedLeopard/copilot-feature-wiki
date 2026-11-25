---
title: "Outlook: admin policy for \"Days of email to save\" in new Outlook for Windows offline settings"
slug: "outlook-offline-settings-days-of-email-to-save-admin-policy"
roadmapId: 570069
topic: "modern-work"
products: ["Outlook"]
summary: "Tenant admins will be able to set the default \"Days of email to save\" value in new Outlook for Windows and lock it against user changes. Targeted November CY2026; no admin control is documented yet."
status: "in-development"
releasePhase: ["General Availability","Targeted Release"]
clouds: ["Worldwide (Standard Multi-Tenant)","GCC"]
platforms: ["Desktop"]
targetDate: "November CY2026"
previewDate: null
risk: "low"
cost: "low"
impact: "low"
defaultState: "unknown"
action: "review"
licensing:
  model: "included"
  notes: "Microsoft Learn says using the new or classic Outlook for Windows desktop app with a Microsoft 365 organisational address needs a plan that includes the desktop Microsoft 365 apps. Nothing specific to this policy is published."
audiences: ["m365-admin","service-owner","change-adoption"]
tags: ["outlook","exchange","policy","admin-controls","gcc"]
sources:
  - title: "Microsoft 365 Roadmap 570069"
    url: "https://www.microsoft.com/microsoft-365/roadmap?id=570069"
    kind: "roadmap"
  - title: "Policy Management in new Outlook for Windows"
    url: "https://learn.microsoft.com/microsoft-365-apps/outlook/manage/policy-management"
    kind: "learn"
  - title: "Release notes for Outlook for Windows (new)"
    url: "https://learn.microsoft.com/officeupdates/release-notes-outlook-new"
    kind: "learn"
  - title: "View or modify policy properties in Exchange Online for Outlook on the web and the new Outlook for Windows"
    url: "https://learn.microsoft.com/exchange/clients-and-mobile-in-exchange-online/outlook-on-the-web/configure-outlook-web-app-mailbox-policy-properties"
    kind: "learn"
  - title: "Understand licensing in new Outlook for Windows"
    url: "https://learn.microsoft.com/microsoft-365-apps/outlook/get-started/licensing-options"
    kind: "learn"
  - title: "Set-OwaMailboxPolicy"
    url: "https://learn.microsoft.com/powershell/module/exchangepowershell/set-owamailboxpolicy"
    kind: "learn"
  - title: "Only a subset of your Exchange mailbox items are synchronized in Outlook"
    url: "https://learn.microsoft.com/troubleshoot/outlook/user-interface/only-subset-items-synchronized"
    kind: "learn"
videos: []
related: []
controls:
  - governs: "Default value and user-change lock for \"Days of email to save\""
    scope: "tenant"
    ui: null
    api: null
    note: "Planned per the roadmap; Microsoft Learn documents no admin setting or API for it at the time of writing (November 2026)."
  - governs: "Whether new Outlook for Windows can be used offline at all (existing control)"
    scope: "group"
    ui:
      surface: "Exchange admin center"
      path: "Roles > Outlook web app policies > policy > Manage access > Offline access"
      docs: "https://learn.microsoft.com/exchange/clients-and-mobile-in-exchange-online/outlook-on-the-web/configure-outlook-web-app-mailbox-policy-properties"
    api:
      kind: "powershell"
      call: "Set-OwaMailboxPolicy -OfflineEnabledWin $false"
      docs: "https://learn.microsoft.com/microsoft-365-apps/outlook/manage/policy-management"
    note: "Existing control: allows or blocks offline use. It does not set the number of days to save."
confidence: "medium"
created: "2026-11-21"
updated: "2026-11-21"
roadmapModified: "2026-08-27T22:38:48"
changes:
  - date: "2026-11-21"
    note: "First briefing for this item: the policy is planned for November CY2026 and Microsoft Learn documents no admin control for it yet."
  - date: "2026-11-21"
    note: "Checked against Microsoft Learn by gpt-6.1-sol: passed with 0 of 39 statements not yet confirmed"
  - date: "2026-11-25"
    note: "Checked against Microsoft Learn by gpt-6.1-sol: passed with 0 of 42 statements not yet confirmed"
version: 1
verification:
  status: "verified-with-gaps"
  date: "2026-11-25"
  version: 1
  model: "gpt-6.1-sol"
  engine: "copilot"
  claims: 42
  confirmed: 42
  unconfirmed: 0
  contradicted: 0
  attempts: 0
  hash: "cf2d1be8c95d8da5dd2dbfbc00f56bc2"
---

## What's changing

The roadmap item says tenant admins will be able to define the default value for "Days of email to save" in Offline settings of new Outlook for Windows and designate whether end users can change it. The policy will set and enforce the "Days of email to save" setting found under Settings > General > Offline.

Microsoft Learn does not describe this policy yet, so what follows about its behaviour is the roadmap's description. The roadmap does not say which tool will configure it, which values it will accept, or what happens to users who already chose their own value.

For background, the new Outlook for Windows release notes for May 30, 2025 (version 20250523006.11) say the default mail sync window in offline mode was expanded from seven days to 30 days.

The record lists the item as In development, targeted for November CY2026, for Desktop, in Worldwide (Standard Multi-Tenant) and GCC, with General Availability and Targeted Release phases. The target is a plan, not a commitment.

## Why it matters

"Days of email to save" decides how much mail new Outlook keeps available offline, so it affects local storage and sync volume on each device and what users can read without a connection. Today the value is a user setting; a policy lets an organisation standardise it and stop users widening or narrowing it.

Microsoft has not stated what happens on arrival, so base planning on no source saying existing behaviour changes. Decide your preferred window and whether to lock it before the policy ships, so that the first configuration is deliberate.

## Risk assessment

**Data exposure**

- A longer "Days of email to save" window means more mail kept on each Windows device for offline use. Setting a short window and preventing user changes would limit that; the roadmap says the policy will do both, but no documentation yet shows how.

**Security & identity**

- No change documented: the roadmap describes a setting for how much mail is kept offline, not a new sign-in or permission path. Microsoft Learn already documents `OfflineEnabledWin` on `Set-OwaMailboxPolicy`, which allows or blocks use of new Outlook for Windows offline altogether.

**Autonomy & actions**

- No change: the roadmap describes no automated action.

**Change & support**

- If the policy lowers a user's value or removes their ability to change it, expect support questions about mail that is no longer available offline. Microsoft has not said how a changed value is applied to existing users.
- Raising the value for many users at once may increase sync traffic. The only Microsoft guidance read on this is for classic Outlook's Cached Exchange Mode, which warns that raising the sync window triggers a full resynchronisation; it is not stated for this policy.

## Cost and licensing

No price or meter specific to this policy is published at the time of writing (November 2026). The roadmap record names no licence.

Microsoft Learn's licensing page for new Outlook for Windows says that using the Outlook for Windows desktop app, classic or new, with a Microsoft 365 organisational email address needs a plan that includes the desktop versions of the Microsoft 365 apps. That page says nothing specific to this policy.

Indirect costs are admin time to choose and test a value, and any extra local storage or network use from a longer window.

## Scope

The roadmap item concerns new Outlook for Windows (platform Desktop) and the "Days of email to save" setting under Settings > General > Offline. The record lists Worldwide (Standard Multi-Tenant) and GCC, with General Availability and Targeted Release phases.

Who can configure the policy, which users or mailboxes it targets and whether it needs a particular licence or role are not stated. Microsoft Learn notes that most new Outlook mailbox policies apply to both Outlook on the web and new Outlook for Windows; whether this one does is not stated.

## Governance guidance

### Before rollout

- Record the current "Days of email to save" value that users see in Settings > General > Offline on a pilot device, so you can compare after the policy arrives.
- Check whether `OfflineEnabledWin` is set on your Outlook on the web mailbox policies, since that existing setting allows or blocks offline use of new Outlook for Windows.
- Agree the window and whether users may change it with the service owner, weighing device storage against offline access.

### At rollout

- Watch Message center and the new Outlook for Windows release notes for the policy's name, configuration tool and values.
- Pilot the policy with a small group before widening it, and tell that group what to expect in Settings > General > Offline.

### After rollout

- Confirm on pilot devices that the enforced value appears in Offline settings and that users cannot change it if you chose to lock it.
- Review support tickets about missing offline mail and adjust the value if needed.

## Governance controls

<p class="controls__lead">Where each control lives. The left column says what the setting decides and how far it reaches; the middle gives the admin centre and the exact path; the right gives the script, API or command that does the same. <em>Not yet documented</em> means Microsoft has not published a control for that surface, so there is nothing to configure yet.</p>

<table class="controls">
<thead><tr><th>Control</th><th>Admin UI</th><th>API and automation</th></tr></thead>
<tbody>
<tr><td data-label="Control"><strong>Default value and user-change lock for &quot;Days of email to save&quot;</strong><br><small>Tenant</small><br><small class="controls__note">Planned per the roadmap; Microsoft Learn documents no admin setting or API for it at the time of writing (November 2026).</small></td><td data-label="Admin UI"><em class="controls__gap">Not yet documented</em></td><td data-label="API and automation"><em class="controls__gap">Not yet documented</em></td></tr>
<tr><td data-label="Control"><strong>Whether new Outlook for Windows can be used offline at all (existing control)</strong><br><small>Group</small><br><small class="controls__note">Existing control: allows or blocks offline use. It does not set the number of days to save.</small></td><td data-label="Admin UI"><strong>Exchange admin center</strong><br>Roles › Outlook web app policies › policy › Manage access › Offline access <a href="https://learn.microsoft.com/exchange/clients-and-mobile-in-exchange-online/outlook-on-the-web/configure-outlook-web-app-mailbox-policy-properties" rel="noopener" class="controls__docs">Learn</a></td><td data-label="API and automation"><strong>PowerShell</strong><br><code>Set-OwaMailboxPolicy -OfflineEnabledWin $false</code> <a href="https://learn.microsoft.com/microsoft-365-apps/outlook/manage/policy-management" rel="noopener" class="controls__docs">Learn</a></td></tr>
</tbody>
</table>

The policy itself has no documented admin surface or automation at the time of writing (November 2026), so the first row records that gap. The second row is an existing control: `OfflineEnabledWin` allows or blocks use of new Outlook for Windows offline. It does not set the number of days, and it should not be taken as a way to enforce this setting.

Microsoft Learn says most of the new Outlook mailbox policies apply to both Outlook on the web and new Outlook for Windows, so you cannot enable them on one client but not the other. Changes to Outlook on the web mailbox policies might take up to 60 minutes to take effect.

## Open questions

- Which tool will configure the policy (an Exchange mailbox policy, Cloud Policy, Intune or another), and where will it be documented? Watch Message center and Microsoft Learn.
- Which values will the policy accept, and how does it relate to the 30-day default?
- What is the default state on arrival: is the setting unlocked until an admin configures it?
- What happens to users who already changed the value, and is mail already saved offline removed when a lower value is enforced?
- Will the policy apply to GCC at the same time as Worldwide?

<!-- rationale
risk: Low. The policy is a new control over a user setting that already exists in Settings > General > Offline; its default state is not stated, so the rating assumes today's user-chosen behaviour continues until Microsoft says otherwise.
cost: Low. The only cost the sources show is admin time to choose a value, plus the extra local mail storage and sync traffic a longer window may cause; no price or meter specific to this policy is published.
impact: Low. Admins configure it, and users notice only if the policy changes their value or stops them changing it in Offline settings of new Outlook for Windows.
-->

<!-- verifier-findings (2026-11-25, verified-with-gaps; checked by gpt-6.1-sol)
The independent check found fault only with the statements below. This is a correction: change what they name and carry the rest of the page over unchanged.
These are minor and do not hold the page. Where removing the statement, or rewording it in the words the fix gives, settles one, do that; otherwise leave it as it is. A minor finding may also add a source link it names for a statement already on the page. It adds no row and nothing that needs research.
- [supported, minor] Why it matters; Risk assessment: Data exposure; Cost and licensing; rationale: cost / behaviour: Days of email to save determines how many days of email are saved locally for offline access. | Found: Select the number of days to save emails locally: 1. Select Settings > General > Offline > Days of email to save. 2. From the dropdown, select 7, 30 (this is the default value), 90, or 180 days of email to save. | Fix: Add https://support.microsoft.com/office/2460e4a8-16c7-47fc-b204-b1549275aac9, titled 'How to work offline in Outlook for Windows', to sources for the existing local-save behaviour. | Source: https://support.microsoft.com/office/2460e4a8-16c7-47fc-b204-b1549275aac9
- [supported, minor] Why it matters; Governance guidance: Before rollout; rationale: risk / behaviour: Users can currently choose the Days of email to save value in new Outlook's Offline settings. | Found: Update these settings to choose which folders to save and how many days of items to save. If you have more than one account, select the account you want the settings to apply to: | Fix: Cite https://support.microsoft.com/office/2460e4a8-16c7-47fc-b204-b1549275aac9 for the existing user-selectable setting; the same source addition supports the local-save description. | Source: https://support.microsoft.com/office/2460e4a8-16c7-47fc-b204-b1549275aac9
- [supported, minor] Scope; Governance controls / applicability: Most new Outlook mailbox policies apply to both Outlook on the web and new Outlook for Windows rather than being independently enabled per client. | Found: Most of the mailbox policies apply to both Outlook on the web and new Outlook for Windows, so you can't enable them on one client but not the other. | Fix: Keep the cited 'most' wording, but add: 'The Exchange overview instead states that all mailbox policies set for Outlook on the web also affect new Outlook for Windows.' Cite https://learn.microsoft.com/exchange/clients-and-mobile-in-exchange-online/outlook-on-the-web/outlook-web-app-mailbox-policies. | Source: https://learn.microsoft.com/microsoft-365-apps/outlook/manage/policy-management
- [supported, minor] controls[1].ui; Governance controls: existing-control table row / admin-path: The Exchange admin center route to the mailbox policy's Offline access section is Roles > Outlook web app policies > policy > Manage access > Offline access. | Found: In the EAC, go to Roles > Outlook web app policies. ... Access: Select Manage access. In the Edit access flyout that opens, the available settings are visible in the following sections: ... Offline access | Fix: Change controls[1].ui.path and the rendered path to 'Roles > Outlook web app policies > policy > Access > Manage access > Offline access'. Access is an omitted heading; the cited page gives the route only as far as the Offline access section. | Source: https://learn.microsoft.com/exchange/clients-and-mobile-in-exchange-online/outlook-on-the-web/configure-outlook-web-app-mailbox-policy-properties
- [supported, minor] controls[1].scope / applicability: The existing mailbox-policy control can govern a group of users. | Found: A mailbox can only have one Outlook on the web mailbox policy applied to it. You can create different policies for different types of users in your Exchange Online organization. | Fix: Add https://learn.microsoft.com/exchange/clients-and-mobile-in-exchange-online/outlook-on-the-web/outlook-web-app-mailbox-policies to sources for mailbox-policy scope; this is the same source needed for the cross-client documentation difference. | Source: https://learn.microsoft.com/exchange/clients-and-mobile-in-exchange-online/outlook-on-the-web/outlook-web-app-mailbox-policies
-->
