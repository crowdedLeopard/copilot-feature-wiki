---
title: "Microsoft Edge: Select Password option in the right-click menu"
slug: "microsoft-edge-select-password-from-the-context-menu"
roadmapId: 570662
topic: "modern-work"
products: ["Microsoft Edge"]
summary: "Edge adds a Select Password option to the right-click menu on sign-in fields so users can reach saved credentials when suggestions do not appear. Microsoft says no configuration is required; plan to tell users and test your password policies."
status: "in-development"
releasePhase: ["General Availability"]
clouds: ["Worldwide (Standard Multi-Tenant)"]
platforms: ["Web"]
targetDate: "December CY2026"
previewDate: null
risk: "low"
cost: "low"
impact: "medium"
defaultState: "on"
action: "prepare"
licensing:
  model: "unknown"
  notes: "Not yet published. Neither the roadmap record nor the Edge release-notes entry for this option names a licence, plan or meter."
audiences: ["m365-admin","security","end-user","change-adoption"]
tags: ["microsoft-edge","password-manager","user-experience"]
sources:
  - title: "Microsoft 365 Roadmap 570662"
    url: "https://www.microsoft.com/microsoft-365/roadmap?id=570662"
    kind: "roadmap"
  - title: "Release notes for Microsoft Edge Beta Channel"
    url: "https://learn.microsoft.com/deployedge/microsoft-edge-relnote-beta-channel"
    kind: "learn"
  - title: "PasswordManagerEnabled"
    url: "https://learn.microsoft.com/deployedge/microsoft-edge-policies/passwordmanagerenabled"
    kind: "learn"
  - title: "PasswordManagerBlocklist"
    url: "https://learn.microsoft.com/deployedge/microsoft-edge-policies/passwordmanagerblocklist"
    kind: "learn"
  - title: "PrimaryPasswordSetting"
    url: "https://learn.microsoft.com/deployedge/microsoft-edge-policies/primarypasswordsetting"
    kind: "learn"
  - title: "Microsoft Edge - Policies"
    url: "https://learn.microsoft.com/deployedge/microsoft-edge-policies"
    kind: "learn"
videos: []
related: ["microsoft-edge-ask-copilot-about-an-image"]
controls:
  - governs: "Whether Edge saves new passwords to the password manager"
    scope: "user"
    ui:
      surface: "Group Policy (Administrative Templates)"
      path: "Administrative Templates > Microsoft Edge > Password manager and protection > Enable saving passwords to the password manager"
      docs: "https://learn.microsoft.com/deployedge/microsoft-edge-policies/passwordmanagerenabled"
    api:
      kind: "other"
      call: "Registry: SOFTWARE\\Policies\\Microsoft\\Edge, value PasswordManagerEnabled"
      docs: "https://learn.microsoft.com/deployedge/microsoft-edge-policies/passwordmanagerenabled"
    note: "Existing policy. When disabled, users can still use previously saved passwords. Not documented as governing this option."
  - governs: "Domains for which the password manager Save and Fill are disabled"
    scope: "user"
    ui:
      surface: "Group Policy (Administrative Templates)"
      path: "Administrative Templates > Microsoft Edge > Password manager and protection > Configure the list of domains for which the password manager UI (Save and Fill) will be disabled"
      docs: "https://learn.microsoft.com/deployedge/microsoft-edge-policies/passwordmanagerblocklist"
    api:
      kind: "other"
      call: "Registry: SOFTWARE\\Policies\\Microsoft\\Edge\\PasswordManagerBlocklist, values 1, 2, 3"
      docs: "https://learn.microsoft.com/deployedge/microsoft-edge-policies/passwordmanagerblocklist"
    note: "Existing policy; Windows and macOS only. Users cannot use the password manager for the configured URLs."
  - governs: "Whether users must authenticate before a saved password is autofilled"
    scope: "user"
    ui:
      surface: "Group Policy (Administrative Templates)"
      path: "Administrative Templates > Microsoft Edge > Password manager and protection > Configures a setting that asks users to enter their device password while using password autofill"
      docs: "https://learn.microsoft.com/deployedge/microsoft-edge-policies/primarypasswordsetting"
    api:
      kind: "other"
      call: "Registry: SOFTWARE\\Policies\\Microsoft\\Edge, value PrimaryPasswordSetting"
      docs: "https://learn.microsoft.com/deployedge/microsoft-edge-policies/primarypasswordsetting"
    note: "Existing policy; Windows and macOS only. WithDevicePassword requires device authentication before saved-password autofill."
  - governs: "A setting that turns the Select Password option on or off"
    scope: "tenant"
    ui: null
    api: null
    note: "Microsoft Learn documents no such setting at the time of writing (November 2026)."
confidence: "medium"
created: "2026-11-19"
updated: "2026-11-21"
roadmapModified: "2026-11-20T23:20:27"
changes:
  - date: "2026-11-19"
    note: "First briefing for this roadmap item."
  - date: "2026-11-19"
    note: "Checked against Microsoft Learn by gpt-6.1-sol: held: 1 of 49 statements contradicted, 0 unconfirmed; taken offline until corrected"
  - date: "2026-11-20"
    note: "Correction: the PasswordManagerBlocklist statement now follows the policy reference, the first open question asks how the menu presents blocked domains, and two control notes state each policy's documented reach."
  - date: "2026-11-20"
    note: "Checked against Microsoft Learn by gpt-6.1-sol: passed: all 51 statements confirmed"
  - date: "2026-11-21"
    note: "Roadmap target moved from November to December CY2026; the release-notes entry is now cited by version only. Controls and ratings unchanged."
  - date: "2026-11-21"
    note: "Checked against Microsoft Learn by gpt-6.1-sol: passed with 0 of 53 statements not yet confirmed"
version: 3
verification:
  status: "verified-with-gaps"
  date: "2026-11-21"
  version: 3
  model: "gpt-6.1-sol"
  engine: "copilot"
  claims: 53
  confirmed: 53
  unconfirmed: 0
  contradicted: 0
  attempts: 0
  hash: "ed9a894287dbee4d1be0aae76e987e10"
---

## What's changing

Microsoft Edge is adding a **Select Password** option to the right-click menu on recognised username and password fields. It gives users a manual route to their saved credentials when Edge's automatic password suggestions do not appear.

The Edge Beta Channel release notes on Microsoft Learn list it as a feature update, "Select Password from the context menu", under Version 159.0.4402.7. They say users with saved credentials can search saved credentials by domain or username, fill credentials directly into the selected field, view credential details after completing OS authentication, and manage saved passwords through existing Edge Password Manager surfaces. They add: "No configuration is required, and existing password management policies continue to apply."

The roadmap item is **In development**, targeted for **December CY2026**, release phase General Availability, platform Web, cloud Worldwide (Standard Multi-Tenant). The Learn release notes word the feature as available ("Users can now"), so treat the roadmap status as the plan until it moves to Launched. At the time of writing (November 2026), Microsoft Learn describes the option only in that release-notes entry.

## Why it matters

This is a small change for users but a new route to saved credentials, so the helpdesk and the security team should know it exists. Microsoft's description says no configuration is required, so on that wording users see the option once it reaches their Edge, without admin action.

The practical task is to find out how your existing Edge password policies behave with the new menu entry. Microsoft says existing password management policies continue to apply but does not name them, so test the ones you rely on before users meet the option.

## Risk assessment

**Data exposure**

- The option lists and fills credentials already saved in the Edge Password Manager. The release notes name no new data source. Users can also view credential details after OS authentication.

**Security & identity**

- The release notes require OS authentication to view credential details. They say nothing on authentication before a fill, so confirm how this option behaves where `PrimaryPasswordSetting` is set to `WithDevicePassword`, which makes users prove their identity before a password is autofilled.
- Where `PasswordManagerBlocklist` lists a domain, its page says Save and Fill are disabled for it. The policy reference says users cannot use the password manager for those URLs; the Select Password release notes say existing password management policies continue to apply.

**Autonomy & actions**

- No change: the option is a user-initiated right-click, and the release notes describe no automatic action.

**Change & support**

- A new menu entry may prompt helpdesk questions from users who did not see suggestions before. Brief the helpdesk on what the option does and where saved passwords are managed.

## Cost and licensing

The roadmap record and the Edge release-notes entry name no licence, plan or meter for this option, so the licence position is not yet published. Microsoft has also published no price for it.

The cost to expect is indirect: admin time to test your password policies against the option, and communication and helpdesk time for users.

## Scope

**Users:** the release notes say users with saved credentials can use the options it lists. No role or licence is named.

**Clouds and platforms:** the roadmap record lists Worldwide (Standard Multi-Tenant) and the platform Web.

**Rollout:** the roadmap targets December CY2026 and the status is In development. The Learn release notes list the feature in the Beta Channel notes; Microsoft has not stated a version for the Stable channel at the time of writing (November 2026).

## Governance guidance

### Before rollout

- Check your Edge policy baseline for `PasswordManagerEnabled`, `PasswordManagerBlocklist` and `PrimaryPasswordSetting`, the existing password policies listed in the controls table, and note which are set.
- Confirm with security owners that a right-click route to saved credentials fits your password policy.
- Brief the helpdesk on the option and on where users manage saved passwords.

### At rollout

- Test the option in a pilot group with those policies set: on a domain listed in `PasswordManagerBlocklist`, and on a device where `PrimaryPasswordSetting` is `WithDevicePassword`. Record whether the option appears and whether it asks for authentication.
- Tell users that the option appears when they right-click a username or password field.

### After rollout

- Review helpdesk tickets about password filling for questions the briefing did not anticipate.
- Re-check the roadmap item and the Edge release notes for a version, channel or policy that Microsoft names for this option.

## Governance controls

<p class="controls__lead">Where each control lives. The left column says what the setting decides and how far it reaches; the middle gives the admin centre and the exact path; the right gives the script, API or command that does the same. <em>Not yet documented</em> means Microsoft has not published a control for that surface, so there is nothing to configure yet.</p>

<table class="controls">
<thead><tr><th>Control</th><th>Admin UI</th><th>API and automation</th></tr></thead>
<tbody>
<tr><td data-label="Control"><strong>Whether Edge saves new passwords to the password manager</strong><br><small>User</small><br><small class="controls__note">Existing policy. When disabled, users can still use previously saved passwords. Not documented as governing this option.</small></td><td data-label="Admin UI"><strong>Group Policy (Administrative Templates)</strong><br>Administrative Templates › Microsoft Edge › Password manager and protection › Enable saving passwords to the password manager <a href="https://learn.microsoft.com/deployedge/microsoft-edge-policies/passwordmanagerenabled" rel="noopener" class="controls__docs">Learn</a></td><td data-label="API and automation"><strong>API</strong><br><code>Registry: SOFTWARE\Policies\Microsoft\Edge, value PasswordManagerEnabled</code> <a href="https://learn.microsoft.com/deployedge/microsoft-edge-policies/passwordmanagerenabled" rel="noopener" class="controls__docs">Learn</a></td></tr>
<tr><td data-label="Control"><strong>Domains for which the password manager Save and Fill are disabled</strong><br><small>User</small><br><small class="controls__note">Existing policy; Windows and macOS only. Users cannot use the password manager for the configured URLs.</small></td><td data-label="Admin UI"><strong>Group Policy (Administrative Templates)</strong><br>Administrative Templates › Microsoft Edge › Password manager and protection › Configure the list of domains for which the password manager UI (Save and Fill) will be disabled <a href="https://learn.microsoft.com/deployedge/microsoft-edge-policies/passwordmanagerblocklist" rel="noopener" class="controls__docs">Learn</a></td><td data-label="API and automation"><strong>API</strong><br><code>Registry: SOFTWARE\Policies\Microsoft\Edge\PasswordManagerBlocklist, values 1, 2, 3</code> <a href="https://learn.microsoft.com/deployedge/microsoft-edge-policies/passwordmanagerblocklist" rel="noopener" class="controls__docs">Learn</a></td></tr>
<tr><td data-label="Control"><strong>Whether users must authenticate before a saved password is autofilled</strong><br><small>User</small><br><small class="controls__note">Existing policy; Windows and macOS only. WithDevicePassword requires device authentication before saved-password autofill.</small></td><td data-label="Admin UI"><strong>Group Policy (Administrative Templates)</strong><br>Administrative Templates › Microsoft Edge › Password manager and protection › Configures a setting that asks users to enter their device password while using password autofill <a href="https://learn.microsoft.com/deployedge/microsoft-edge-policies/primarypasswordsetting" rel="noopener" class="controls__docs">Learn</a></td><td data-label="API and automation"><strong>API</strong><br><code>Registry: SOFTWARE\Policies\Microsoft\Edge, value PrimaryPasswordSetting</code> <a href="https://learn.microsoft.com/deployedge/microsoft-edge-policies/primarypasswordsetting" rel="noopener" class="controls__docs">Learn</a></td></tr>
<tr><td data-label="Control"><strong>A setting that turns the Select Password option on or off</strong><br><small>Tenant</small><br><small class="controls__note">Microsoft Learn documents no such setting at the time of writing (November 2026).</small></td><td data-label="Admin UI"><em class="controls__gap">Not yet documented</em></td><td data-label="API and automation"><em class="controls__gap">Not yet documented</em></td></tr>
</tbody>
</table>

These rows are existing Edge password policies, set through Group Policy on Windows or preference keys on macOS. The release notes say existing password management policies continue to apply but do not name which; the policy references describe their reach generally rather than naming the new menu entry. `PasswordManagerEnabled` is relevant because its page says that when it is disabled, users can still use previously saved passwords. A setting specific to this option is not yet documented, hence the last row.

## Open questions

- How does the Select Password menu present a domain blocked by `PasswordManagerBlocklist`? Confirm the user experience in a pilot.
- Does filling through Select Password ask for device authentication where `PrimaryPasswordSetting` is `WithDevicePassword`?
- Which Edge version and release channel will deliver the option to most users, and does it match the roadmap's December CY2026 target?
- Will Microsoft add a dedicated policy to hide or turn off the option? Watch the Edge policy list and Message center.

<!-- rationale
risk: Low. The option works on credentials already saved in Edge, viewing their details needs OS authentication, and Microsoft says existing password management policies continue to apply.
cost: Low. The only cost the sources show is admin and helpdesk time for communication and testing; a licence or meter for this option is not yet published.
impact: Medium. Users who save passwords in Edge get a new right-click entry without admin action; administrators get no new setting for it.
-->

<!-- verifier-findings (2026-11-21, verified-with-gaps; checked by gpt-6.1-sol)
The independent check found fault only with the statements below. This is a correction: change what they name and carry the rest of the page over unchanged.
These are minor and do not hold the page. Where removing the statement, or rewording it in the words the fix gives, settles one, do that; otherwise leave it as it is. A minor finding may also add a source link it names for a statement already on the page. It adds no row and nothing that needs research.
- [supported, minor] controls[0].note; Governance controls table / applicability: PasswordManagerEnabled is not documented as governing this option. | Found: If you disable this policy, users can't save and add new passwords, but they can still use previously saved passwords. | Fix: Remove 'Not documented as governing this option.' from controls[0].note and the matching table note. Keep the documented qualification that disabling this policy still permits use of previously saved passwords, as stated at https://learn.microsoft.com/deployedge/microsoft-edge-policies/passwordmanagerenabled. | Source: https://learn.microsoft.com/deployedge/microsoft-edge-policies/passwordmanagerenabled
- [supported, minor] controls[2].governs, note; Risk assessment: Security & identity; Governance guidance / behaviour: WithDevicePassword requires device authentication before saved-password autofill. | Found: If you set this policy to 'WithDevicePassword', users have to enter their device password (or preferred mode of authentication under Windows) to prove their identity before their password is autofilled. | Fix: Add to controls[2].note and its matching table note: 'The prompt frequency defaults to Ask permission once per browsing session; users can change it to Always ask permission.' This qualification is stated at https://learn.microsoft.com/deployedge/microsoft-edge-policies/primarypasswordsetting. | Source: https://learn.microsoft.com/deployedge/microsoft-edge-policies/primarypasswordsetting
-->
