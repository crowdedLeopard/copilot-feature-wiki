---
title: "Outlook on the web: tenant default for using commas to separate recipients"
slug: "outlook-delimiter-setting-admin-policy"
roadmapId: 557676
topic: "modern-work"
products: ["Outlook"]
summary: "Admins can set an organisation-wide default for the Mail Compose and Reply setting that decides whether commas separate recipients. It is set in Exchange Online PowerShell; nothing needs doing unless you want to change the default."
status: "launched"
releasePhase: ["General Availability"]
clouds: ["Worldwide (Standard Multi-Tenant)"]
platforms: ["Web"]
targetDate: "June CY2026"
previewDate: null
risk: "low"
cost: "low"
impact: "low"
defaultState: "admin-opt-in"
action: "review"
licensing:
  model: "included"
  notes: "This is an option inside Exchange Online. Each user accessing Exchange Online must be assigned a subscription plan; Outlook on the web is listed across the service's plans. No licence or meter specific to RecipientDelimiters is documented as of November 2026."
audiences: ["m365-admin","service-owner"]
tags: ["outlook","exchange","powershell","admin-controls"]
sources:
  - title: "Microsoft 365 Roadmap 557676"
    url: "https://www.microsoft.com/microsoft-365/roadmap?id=557676"
    kind: "roadmap"
  - title: "Set-OrganizationConfig (ExchangePowerShell)"
    url: "https://learn.microsoft.com/powershell/module/exchangepowershell/set-organizationconfig"
    kind: "learn"
  - title: "Release notes for Outlook for Windows (New) in Government Cloud Channels"
    url: "https://learn.microsoft.com/officeupdates/release-notes-outlook-new-gc"
    kind: "learn"
  - title: "Outlook on the web in Exchange Online"
    url: "https://learn.microsoft.com/exchange/clients-and-mobile-in-exchange-online/outlook-on-the-web/outlook-on-the-web"
    kind: "learn"
  - title: "Exchange Online service description"
    url: "https://learn.microsoft.com/office365/servicedescriptions/exchange-online-service-description/exchange-online-service-description"
    kind: "learn"
videos: []
related: []
controls:
  - governs: "Organisation-wide default for whether commas separate recipients in Mail Compose and Reply"
    scope: "tenant"
    ui: null
    api:
      kind: "powershell"
      call: "Set-OrganizationConfig -RecipientDelimiters $false"
      docs: "https://learn.microsoft.com/powershell/module/exchangepowershell/set-organizationconfig"
    note: "Exchange Online only. $true keeps commas as separators and is described as the default value. Needs Exchange permissions that include Set-OrganizationConfig."
confidence: "medium"
created: "2026-11-24"
updated: "2026-11-24"
roadmapModified: "2026-07-28T22:43:45"
changes:
  - date: "2026-11-24"
    note: "First briefing for roadmap item 557676: documents the Set-OrganizationConfig -RecipientDelimiters control and the open mid-June 2026 correction note."
  - date: "2026-11-24"
    note: "Checked against Microsoft Learn by gpt-6.1-sol: held: 1 of 35 statements contradicted, 3 unconfirmed; taken offline until corrected"
  - date: "2026-11-24"
    note: "Corrected after verification: pilot advice now says pilot tenant, autonomy bullet reworded, licensing now included in Exchange Online, and risk and impact rationales narrowed."
  - date: "2026-11-24"
    note: "Checked against Microsoft Learn by gpt-6.1-sol: passed: all 32 statements confirmed"
version: 2
verification:
  status: "verified"
  date: "2026-11-24"
  version: 2
  model: "gpt-6.1-sol"
  engine: "copilot"
  claims: 32
  confirmed: 32
  unconfirmed: 0
  contradicted: 0
  attempts: 0
  hash: "a3b3c865014106587c0b92139f37046c"
---

## What's changing

Admins can now set a tenant-wide default for the Mail Compose and Reply setting that controls whether commas are used to separate recipients in Outlook on the web. The roadmap item describes this as an admin policy that defines the default value for that setting.

Microsoft Learn documents the control as the `-RecipientDelimiters` parameter of `Set-OrganizationConfig`, available only in the cloud-based service. Its description reads: "$true: Commas are used to separate recipients by default. This value is the default." and "$false: Commas aren't used to separate recipients by default." The same Learn page lists the parameter's default value as "None" in its properties table, so the wording is worth confirming in your own tenant before you rely on it.

The user-facing setting is described in Microsoft's release notes for the new Outlook for Windows in Government Cloud channels (June 13, 2025 entry): Outlook Web and the New Outlook support separating recipients with either a semicolon or a comma by default, and the setting lets users choose whether the comma is a separator or part of a contact name. Those notes are the closest Learn description of the behaviour; they are not a Worldwide page.

The roadmap record gives status Launched, target June CY2026, platform Web and cloud Worldwide (Standard Multi-Tenant). Its description carries an update dated June 2, 2026: Microsoft was correcting an issue with setting the policy and expected to complete in mid-June. The record does not say whether that correction has finished.

## Why it matters

This is a small control with one clear use: organisations whose contacts are stored as "Family name, First name" can stop commas splitting a display name into two recipients. The release notes name that case as the reason for the user setting. Setting the tenant default lets an admin make that choice once instead of leaving every user to find it.

If nobody acts, the Learn description lists commas as separators as the default value, so existing behaviour continues. Plan for support questions only if you change the default.

## Risk assessment

**Data exposure**
- No change: the setting decides how typed text in the recipient field is split. The sources describe no new data access.

**Security & identity**
- A mis-split recipient can send mail to the wrong address. Setting `-RecipientDelimiters $false` stops commas acting as separators by default, so users who type comma-separated addresses may find the addresses joined. Tell users before you change the default.

**Autonomy & actions**
- The cited documentation describes a recipient-delimiter preference, not an autonomous action.

**Change & support**
- The roadmap description says an issue with setting the policy was being corrected, with completion expected in mid-June 2026. Test the cmdlet in a pilot tenant and read back the result before announcing a change.
- The user-level setting lets individuals choose for themselves, according to the release notes. Microsoft Learn does not state whether a tenant default replaces a choice a user has already made; see Open questions.

## Cost and licensing

This is an option inside Exchange Online. The [Exchange Online service description](https://learn.microsoft.com/office365/servicedescriptions/exchange-online-service-description/exchange-online-service-description) says each user accessing Exchange Online must be assigned a subscription plan, and lists Outlook on the web across the service's plans. The Set-OrganizationConfig reference page names no licence for `-RecipientDelimiters`, and no licence, meter or charge specific to this setting is documented as of November 2026.

The cost the sources support is admin time: running one Exchange Online PowerShell cmdlet and communicating the change to users. The `Set-OrganizationConfig` cmdlet requires Exchange permissions assigned to you, as its Learn page states.

## Scope

The roadmap record lists platform Web and cloud Worldwide (Standard Multi-Tenant), with release phase General Availability and status Launched. The record does not list US Government clouds.

The parameter is documented as available only in the cloud-based service and applies to the whole organisation. Microsoft Learn describes it as the organisation-wide default for the Mail Compose and Reply setting. Whether the default also reaches the new Outlook for Windows is not stated for this parameter, although the release notes for the user setting mention both Outlook Web and the New Outlook.

## Governance guidance

### Before rollout
- Identify which users see display names in "Family name, First name" form in the address book, since they are the ones the setting helps.
- Confirm that your admin account holds the Exchange permissions needed to run `Set-OrganizationConfig`.
- Decide whether to leave the default alone or set `-RecipientDelimiters $false`, and write the user guidance for either choice.

### At rollout
- Run `Set-OrganizationConfig -RecipientDelimiters $false` from Exchange Online PowerShell only if you want commas not to separate recipients by default (control table row 1).
- Pilot the change with a small group in Outlook on the web before telling the whole organisation.
- Tell users that typing a comma between addresses will behave differently once the default changes.

### After rollout
- Check that a test user in Outlook on the web sees the Mail Compose and Reply setting at the value you set.
- Watch the helpdesk for reports of mis-addressed or joined recipients.
- Review the roadmap item and the Set-OrganizationConfig page for changes to how the policy behaves.

## Governance controls

<p class="controls__lead">Where each control lives. The left column says what the setting decides and how far it reaches; the middle gives the admin centre and the exact path; the right gives the script, API or command that does the same. <em>Not yet documented</em> means Microsoft has not published a control for that surface, so there is nothing to configure yet.</p>

<table class="controls">
<thead><tr><th>Control</th><th>Admin UI</th><th>API and automation</th></tr></thead>
<tbody>
<tr><td data-label="Control"><strong>Organisation-wide default for whether commas separate recipients in Mail Compose and Reply</strong><br><small>Tenant</small><br><small class="controls__note">Exchange Online only. $true keeps commas as separators and is described as the default value. Needs Exchange permissions that include Set-OrganizationConfig.</small></td><td data-label="Admin UI"><em class="controls__gap">Not yet documented</em></td><td data-label="API and automation"><strong>PowerShell</strong><br><code>Set-OrganizationConfig -RecipientDelimiters $false</code> <a href="https://learn.microsoft.com/powershell/module/exchangepowershell/set-organizationconfig" rel="noopener" class="controls__docs">Learn</a></td></tr>
</tbody>
</table>

The only documented control is the PowerShell parameter. It needs Exchange permissions that include `Set-OrganizationConfig`; Learn says to see "Find the permissions required to run any Exchange cmdlet" for the roles. No Exchange admin center path for this setting is documented at the time of writing (November 2026).

The row sets the organisation default. The release notes describe a separate user choice in the same setting, and Microsoft Learn does not say how the two interact.

## Open questions

- Has Microsoft finished the correction to setting the policy that the June 2, 2026 roadmap update expected to complete in mid-June? Watch the roadmap item.
- Does a tenant default set with `-RecipientDelimiters` override a choice a user has already made in the Mail Compose and Reply setting? Watch the Set-OrganizationConfig page.
- Does the tenant default also apply in the new Outlook for Windows, or only in Outlook on the web as the roadmap platform suggests?
- Will Microsoft document an Exchange admin center setting for this default? Watch the Outlook on the web admin documentation.

<!-- rationale
risk: Low. The policy only sets the default for a mail-composition preference; the cited sources describe no new data access, and Learn lists $true (commas separate recipients) as the value that applies when nothing is set.
cost: Low. The only cost the sources show is admin time to run one cmdlet and tell users; Microsoft has not published a licence or meter specific to this setting.
impact: Low. This is an administrator-configured recipient-delimiter default. The roadmap lists Web; whether the tenant default also affects new Outlook for Windows is not stated for this parameter.
-->
