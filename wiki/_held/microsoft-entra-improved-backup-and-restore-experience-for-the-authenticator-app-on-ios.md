---
title: "Microsoft Authenticator: iCloud backup and restore of account entries on iOS"
slug: "microsoft-entra-improved-backup-and-restore-experience-for-the-authenticator-app-on-ios"
roadmapId: 498158
topic: "governance"
products: ["Microsoft Entra"]
summary: "Microsoft Authenticator on iOS can back up account entries through iCloud so they reappear on a new iPhone. Users choose to turn it on; no admin switch is documented, and work accounts still need a fresh sign-in."
status: "in-development"
releasePhase: ["General Availability"]
clouds: ["Worldwide (Standard Multi-Tenant)"]
platforms: ["iOS"]
targetDate: "August CY2025"
previewDate: "September CY2025"
risk: "low"
cost: "low"
impact: "low"
defaultState: "user-opt-in"
action: "review"
licensing:
  model: "unknown"
  notes: "Not yet published. Microsoft Learn's transfer page names no licence for Authenticator backup and restore, and no meter or price for it is published at the time of writing (November 2026)."
audiences: ["m365-admin","security","end-user","change-adoption"]
tags: ["authentication","multifactor-authentication","passkeys","ios","mobile","backup-and-recovery","entra-id","microsoft-authenticator"]
sources:
  - title: "Transfer Microsoft Authenticator account entries to a new phone"
    url: "https://learn.microsoft.com/entra/identity/authentication/how-to-transfer-authenticator-new-phone"
    kind: "learn"
  - title: "How to enable passkeys (FIDO2) in Microsoft Entra ID"
    url: "https://learn.microsoft.com/entra/identity/authentication/how-to-authentication-passkeys-fido2"
    kind: "learn"
  - title: "Update fido2AuthenticationMethodConfiguration"
    url: "https://learn.microsoft.com/graph/api/fido2authenticationmethodconfiguration-update?view=graph-rest-1.0"
    kind: "learn"
  - title: "fido2AuthenticationMethodConfiguration resource type"
    url: "https://learn.microsoft.com/graph/api/resources/fido2authenticationmethodconfiguration?view=graph-rest-1.0"
    kind: "learn"
  - title: "Apple device restriction settings in Microsoft Intune"
    url: "https://learn.microsoft.com/intune/device-configuration/templates/ref-device-restrictions-apple"
    kind: "learn"
  - title: "Microsoft 365 Roadmap item 498158"
    url: "https://www.microsoft.com/microsoft-365/roadmap?id=498158"
    kind: "roadmap"
videos: []
related: ["microsoft-entra-id-account-recovery-529857"]
controls:
  - governs: "Tenant-wide switch for Authenticator account backup and restore on iOS"
    scope: "tenant"
    ui: null
    api: null
    note: "Microsoft Learn documents no administrator setting for this at the time of writing (November 2026); backup is turned on by each user in iOS."
  - governs: "Whether users can register a passkey themselves on a new phone after restore"
    scope: "tenant"
    ui:
      surface: "Microsoft Entra admin center"
      path: "Entra ID > Security > Authentication methods > Policies > Passkey (FIDO2) > Configure > Allow self-service set up"
      docs: "https://learn.microsoft.com/entra/identity/authentication/how-to-authentication-passkeys-fido2"
    api:
      kind: "graph"
      call: "PATCH /v1.0/policies/authenticationMethodsPolicy/authenticationMethodConfigurations/fido2"
      docs: "https://learn.microsoft.com/graph/api/fido2authenticationmethodconfiguration-update?view=graph-rest-1.0"
    note: "Authentication Policy Administrator or higher. Governs passkey registration, not the backup. The body property is isSelfServiceRegistrationAllowed. The page shows the Configure tab steps after opting in to passkey profiles."
confidence: "medium"
created: "2026-11-25"
updated: "2026-11-25"
roadmapModified: "2025-07-09T23:00:43"
changes:
  - date: "2026-11-25"
    note: "First briefing for this item: roadmap plan for Authenticator iCloud backup on iOS, set beside the behaviour Learn already documents, with the passkey self-service control for restored devices."
  - date: "2026-11-25"
    note: "Checked against Microsoft Learn by gpt-6.1-sol: held: 3 of 54 statements contradicted, 2 unconfirmed; taken offline until corrected"
version: 1
verification:
  status: "held"
  date: "2026-11-25"
  version: 1
  model: "gpt-6.1-sol"
  engine: "copilot"
  claims: 54
  confirmed: 49
  unconfirmed: 2
  contradicted: 3
  attempts: 1
  hash: "83dbe621a1af4a63c070c36b00bada41"
---

## What's changing

The roadmap item describes a better backup and restore experience for Microsoft Authenticator on iOS. Microsoft plans to let users back up account names, covering Microsoft work or school accounts, Microsoft personal accounts and third-party accounts such as Amazon or Google, using iCloud and iCloud Keychain. The roadmap text calls this end-to-end encrypted backup of account names and TOTP credentials (time-based one-time passcodes, the six-digit codes that refresh every 30 seconds). On a new iPhone the account names are meant to appear in the app automatically, and the user signs in to finish setup.

Microsoft Learn already documents the behaviour on its page [Transfer Microsoft Authenticator account entries to a new phone](https://learn.microsoft.com/entra/identity/authentication/how-to-transfer-authenticator-new-phone). To back up on iOS, the user enables iCloud Drive, iCloud Keychain and iCloud Backup, then turns on the **Authenticator** toggle under **Apple Account > iCloud > Saved to iCloud**. After a restore, a work or school account comes back as its account name only and the user must sign in again. A personal Microsoft account that uses only a one-time password code has its verification code entry restored; if it also uses passwordless sign-in, only the account name is restored. Third-party accounts that use a one-time password code have the verification code entry restored.

The roadmap record gives the status as In development, with a General Availability target of August CY2025 and a preview date of September CY2025, for Worldwide (Standard Multi-Tenant) on iOS. Both dates have passed while the status still reads In development, and the record and the Learn page do not say which parts are live. Treat the record's dates as targets and confirm the behaviour on a test device.

## Why it matters

This mainly changes what users and the help desk see when someone gets a new iPhone. Learn's page says the account name is what comes back for a work or school account, so the user must still sign in again to finish setup; plan the help desk script around that red prompt rather than expecting a silent restore.

Microsoft has not published an administrator control for the backup, so the decision is how to brief users and whether your device management settings for iCloud already allow or block it. Microsoft has not stated whether any existing behaviour changes for users who do nothing; on Learn's description, nothing is backed up until the user turns on the iCloud toggles.

## Risk assessment

**Data exposure**
- Learn says that for a work or school account only the account name is restored, so no organisational sign-in credential is described as moving to iCloud. Personal Microsoft accounts and third-party accounts can have their verification code entry restored, so those one-time-code seeds sit in the user's Apple account backup (the roadmap describes the backup as end-to-end encrypted).
- The backup depends on the user's own iCloud Drive, iCloud Keychain and iCloud Backup settings. The Intune iCloud settings named in the controls notes are the nearest device-level levers, though Learn does not say they cover Authenticator.

**Security & identity**
- A restored work account is not signed in: the user must sign in again, and Learn says that if passkeys are enforced for the account, a passkey must be set up for the new phone before the old device is removed. Use the passkey row in the controls table to check that self-service setup is allowed.
- Learn says passkeys are handled separately from Authenticator account backup, and that a passkey saved only to the old phone needs a new passkey on the new phone, so users who erase the old phone early may be left without that sign-in method.

**Autonomy & actions**
- No change: the feature runs only when a user turns on backup and restores on a new phone; Learn describes no background action by Microsoft or an administrator.

**Change & support**
- Expect tickets from users who see the red text on a restored work account, and from users whose restore is not offered: Learn's troubleshooting table says to check that backup was enabled on the old phone, that the same recovery account is used and that the restore is to the same device type.
- Learn tells users to keep the old phone until they confirm sign-in works on the new one; put that into your new-device guidance.

## Cost and licensing

No licence, price or meter for Authenticator backup and restore is published on the Learn transfer page, which lists steps and expected behaviour only. Licensing is therefore Not yet published for this feature at the time of writing (November 2026).

The costs that are visible are indirect: user communication, help desk time for the sign-in-again step after restore, and any passkey registration needed for the new phone.

## Scope

The roadmap record lists Worldwide (Standard Multi-Tenant) as the cloud, iOS as the platform and General Availability as the release phase. It lists no GCC, GCC High or DoD cloud, which is a record fact, not a statement that the feature is unavailable there.

The users in scope are people who use Microsoft Authenticator on an iPhone and turn on iCloud Drive, iCloud Keychain and iCloud Backup. Learn's troubleshooting table says a restore needs the same device type as the old phone. No administrator role is documented for backup or restore itself. Rollout mechanics, a minimum Authenticator version and an iOS version are not stated on the roadmap record or on the Learn page.

## Governance guidance

### Before rollout
- Test a backup on a pilot iPhone using the iCloud steps on the Learn transfer page, then restore to a second iPhone and record what a work or school account looks like afterwards.
- Check whether your Intune iOS/iPadOS device restriction profiles set **Block iCloud backup** or **Block iCloud Keychain sync**, and confirm in a pilot whether they stop Authenticator backup, because Microsoft has not said they do.
- Confirm that **Allow self-service set up** is Yes in the Passkey (FIDO2) settings (first controls row) for users you expect to re-register a passkey on a new phone.

### At rollout
- Tell iPhone users to keep the old phone until sign-in works on the new one, as the Learn page instructs.
- Give the help desk the expected behaviour: a restored work or school account shows its name only, and the user opens it and signs in again.

### After rollout
- Review tickets for restore not offered and check the three causes Learn lists: backup not enabled on the old phone, a different recovery account, a different device type.
- Watch the roadmap item and the Learn transfer page for the status change from In development and for any admin setting.

## Governance controls

<p class="controls__lead">Where each control lives. The left column says what the setting decides and how far it reaches; the middle gives the admin centre and the exact path; the right gives the script, API or command that does the same. <em>Not yet documented</em> means Microsoft has not published a control for that surface, so there is nothing to configure yet.</p>

<table class="controls">
<thead><tr><th>Control</th><th>Admin UI</th><th>API and automation</th></tr></thead>
<tbody>
<tr><td data-label="Control"><strong>Tenant-wide switch for Authenticator account backup and restore on iOS</strong><br><small>Tenant</small><br><small class="controls__note">Microsoft Learn documents no administrator setting for this at the time of writing (November 2026); backup is turned on by each user in iOS.</small></td><td data-label="Admin UI"><em class="controls__gap">Not yet documented</em></td><td data-label="API and automation"><em class="controls__gap">Not yet documented</em></td></tr>
<tr><td data-label="Control"><strong>Whether users can register a passkey themselves on a new phone after restore</strong><br><small>Tenant</small><br><small class="controls__note">Authentication Policy Administrator or higher. Governs passkey registration, not the backup. The body property is isSelfServiceRegistrationAllowed. The page shows the Configure tab steps after opting in to passkey profiles.</small></td><td data-label="Admin UI"><strong>Microsoft Entra admin center</strong><br>Entra ID › Security › Authentication methods › Policies › Passkey (FIDO2) › Configure › Allow self-service set up <a href="https://learn.microsoft.com/entra/identity/authentication/how-to-authentication-passkeys-fido2" rel="noopener" class="controls__docs">Learn</a></td><td data-label="API and automation"><strong>Microsoft Graph</strong><br><code>PATCH /v1.0/policies/authenticationMethodsPolicy/authenticationMethodConfigurations/fido2</code> <a href="https://learn.microsoft.com/graph/api/fido2authenticationmethodconfiguration-update?view=graph-rest-1.0" rel="noopener" class="controls__docs">Learn</a></td></tr>
</tbody>
</table>

No administrator setting for Authenticator backup and restore is documented, so the first row is empty by design. The second row is not a control over the backup: it governs passkey self-service registration, which Learn says users may need after a restore, and the Learn transfer page says that if the IT admin does not allow self-service passkey setup, the user contacts the admin or help desk.

The passkey row needs at least the Authentication Policy Administrator role. The page gives the Configure tab steps after opting in to passkey profiles, and says that after opting in you cannot opt out. The Graph call's body property is isSelfServiceRegistrationAllowed.

Intune has iOS/iPadOS device restriction settings named **Block iCloud backup** and **Block iCloud Keychain sync** (Learn's [Apple device restriction settings](https://learn.microsoft.com/intune/device-configuration/templates/ref-device-restrictions-apple) page, Cloud and Storage), and both require supervised devices from iOS/iPadOS 13.0. Microsoft Learn does not say that they govern the Authenticator backup, so they are not a table row; verify in a pilot.

## Open questions

- Is there, or will there be, a tenant setting or Intune app configuration that lets administrators turn Authenticator iCloud backup off? Watch Message center and the Learn transfer page.
- Which licence, if any, covers Authenticator backup and restore, and does the feature carry a price? Watch Microsoft Entra licensing pages.
- Do the Intune **Block iCloud backup** and **Block iCloud Keychain sync** settings stop the Authenticator backup on supervised devices? Test in a pilot and watch Learn.
- Is the feature generally available? The roadmap status is In development with an August CY2025 target, while Learn already documents the steps; watch the roadmap item for the status change.

<!-- rationale
risk: Low. Backup is a user-side iCloud setting, and for work or school accounts Learn says only the account name is restored, so no sign-in credential for the organisation moves.
cost: Low. The only cost shown is admin and help desk time for users who must sign in again on a new phone; a licence or meter for this feature is not yet published.
impact: Low. Only users who turn on the iCloud backup and then change iPhone notice it, and nothing is documented as changing for anyone else.
-->

<!-- verifier-findings (2026-11-25, held; checked by gpt-6.1-sol)
The independent check found fault only with the statements below. This is a correction: change what they name and carry the rest of the page over unchanged.
Correct each of these with the smallest change that removes the fault: delete the statement, narrow it, or put the finding's own "Found" text or worded replacement in its place. Where a fix asks for more than that (a new row, an explanation, further references), do only the part that removes the fault. A correction adds no control rows.
- [unsupported, major] What's changing: TOTP parenthesis / behaviour: The backed-up TOTP credentials are uniformly six-digit codes refreshing every 30 seconds. | Found: Searched: Microsoft Authenticator six-digit 30 seconds; Authenticator six-digit code. Opened transfer and Authenticator app concept pages; neither establishes a uniform six-digit length for all backed-up account types. | Fix: Replace the parenthesis with '(time-based one-time passcodes)', removing the blanket six-digit and refresh-interval description.
- [contradicted, blocker] Risk assessment: Data exposure; Governance guidance: Before rollout; Governance controls; Open questions / absence: Microsoft has not said whether the named Intune iCloud restrictions govern the services required by Authenticator backup. | Found: Block iCloud backup: Yes stops users from backing up devices to iCloud. ... Block iCloud Keychain sync: Yes disables syncing credentials stored in the Keychain to iCloud. | Fix: Replace the unconfirmed-applicability caveats with: 'On supervised iOS/iPadOS devices, Block iCloud backup stops device backups to iCloud, and Block iCloud Keychain sync disables syncing credentials stored in Keychain to iCloud. Authenticator's documented iOS backup procedure requires iCloud Backup and iCloud Keychain to be enabled.' Cite https://learn.microsoft.com/intune/device-configuration/templates/ref-device-restrictions-apple and https://learn.microsoft.com/entra/identity/authentication/how-to-transfer-authenticator-new-phone. Remove the open question asking whether those prerequisite services can be restricted; do not claim a separate Authenticator-specific switch exists. | Source: https://learn.microsoft.com/intune/device-configuration/templates/ref-device-restrictions-apple
- [unsupported, major] Risk assessment: Autonomy & actions / behaviour: The feature runs only when a user turns on backup and restores on a new phone, with no background action. | Found: Searched: Authenticator backup background. Read transfer and Authenticator app concept pages and roadmap record; they describe enabling backup and recovering entries, not an exclusive execution schedule or the absence of background backup after enablement. | Fix: Replace the bullet with: 'Learn documents user-side steps to enable backup and recover account entries on a new phone.' Cite https://learn.microsoft.com/entra/identity/authentication/how-to-transfer-authenticator-new-phone.
These are minor and do not hold the page. Where removing the statement, or rewording it in the words the fix gives, settles one, do that; otherwise leave it as it is. A minor finding may also add a source link it names for a statement already on the page. It adds no row and nothing that needs research.
- [contradicted, minor] Governance guidance: Before rollout; Governance controls / consistency: The checklist directs readers to review Intune iCloud restriction controls that are absent from the controls table. | Found: Check whether your Intune iOS/iPadOS device restriction profiles set Block iCloud backup or Block iCloud Keychain sync ... [The table contains only a tenant-wide backup switch gap and passkey self-service registration.] | Fix: Remove the Before rollout checklist bullet directing review of Intune restriction profiles; those controls have no table row. Keep the verified description of their reach in the controls notes.
- [contradicted, minor] Governance guidance: Before rollout / consistency: The passkey self-service setting is in the first controls row. | Found: Passkey (FIDO2) settings (first controls row) ... [The first row is Tenant-wide switch for Authenticator account backup and restore on iOS; the passkey setting is the second row.] | Fix: Replace '(first controls row)' with '(second controls row)'.
-->
