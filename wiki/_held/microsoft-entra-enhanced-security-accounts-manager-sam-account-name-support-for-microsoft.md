---
title: "Microsoft Entra Domain Services: sAMAccountName synchronised from on-premises Active Directory"
slug: "microsoft-entra-enhanced-security-accounts-manager-sam-account-name-support-for-microsoft"
roadmapId: 569446
topic: "governance"
products: ["Microsoft Entra"]
summary: "Entra Domain Services can take sAMAccountName from onPremisesSamAccountName for hybrid users. Existing managed domains must opt in; enabling it changes the logon name source for existing hybrid users. Needs Enterprise or Premium SKU."
status: "in-development"
releasePhase: ["General Availability","Preview"]
clouds: ["Worldwide (Standard Multi-Tenant)"]
platforms: ["Web"]
targetDate: "November CY2026"
previewDate: "August CY2026"
risk: "medium"
cost: "low"
impact: "low"
defaultState: "admin-opt-in"
action: "review"
licensing:
  model: "included"
  notes: "Microsoft Learn lists an Enterprise or Premium Domain Services SKU as a prerequisite and says the feature is not available with the Standard SKU. The page names no separate charge for the feature."
audiences: ["m365-admin","security"]
tags: ["entra-domain-services","hybrid-identity","entra-id","identity"]
sources:
  - title: "Public preview of enhanced security account manager support"
    url: "https://learn.microsoft.com/entra/identity/domain-services/security-account-name"
    kind: "learn"
  - title: "Microsoft.AAD domainServices"
    url: "https://learn.microsoft.com/azure/templates/microsoft.aad/domainservices"
    kind: "learn"
  - title: "Management concepts for user accounts, passwords, and administration in Microsoft Entra Domain Services"
    url: "https://learn.microsoft.com/entra/identity/domain-services/administration-concepts"
    kind: "learn"
  - title: "Frequently asked questions (FAQs) about Microsoft Entra Domain Services"
    url: "https://learn.microsoft.com/entra/identity/domain-services/faqs"
    kind: "learn"
  - title: "Microsoft 365 Roadmap item 569446"
    url: "https://www.microsoft.com/microsoft-365/roadmap?id=569446"
    kind: "roadmap"
videos: []
related: []
controls:
  - governs: "Whether sAMAccountName is synchronised from onPremisesSamAccountName"
    scope: "other"
    ui:
      surface: "Microsoft Entra admin center"
      path: "Microsoft Entra Domain Services > managed domain > Security settings > sAMAccountName synchronization from on-premises"
      docs: "https://learn.microsoft.com/entra/identity/domain-services/security-account-name"
    api:
      kind: "other"
      call: "Microsoft.AAD/domainServices@2026-08-31-preview: properties.domainSecuritySettings.syncOnPremSamAccountName"
      docs: "https://learn.microsoft.com/azure/templates/microsoft.aad/domainservices"
    note: "Per managed domain; preview API version. Portal change needs Application Administrator and Groups Administrator."
confidence: "high"
created: "2026-11-22"
updated: "2026-11-22"
roadmapModified: "2026-09-01T22:59:38"
changes:
  - date: "2026-11-22"
    note: "First briefing for this roadmap item, based on the Learn feature page and the preview ARM template reference."
  - date: "2026-11-22"
    note: "Checked against Microsoft Learn by gpt-6.1-sol: held: 1 of 47 statements contradicted, 1 unconfirmed; taken offline until corrected"
version: 1
verification:
  status: "held"
  date: "2026-11-22"
  version: 1
  model: "gpt-6.1-sol"
  engine: "copilot"
  claims: 47
  confirmed: 45
  unconfirmed: 1
  contradicted: 1
  attempts: 1
  hash: "7f3aa7b6ae0fabaeb7d82d24d0a5de17"
---

## What's changing

Microsoft Entra Domain Services can now populate the sAMAccountName attribute (the legacy logon name from Active Directory) from the onPremisesSamAccountName attribute in Microsoft Entra ID. Microsoft Learn describes the feature as in public preview.

When the setting is disabled, Domain Services generates sAMAccountName from mailNickname or the user principal name prefix, truncating and de-duplicating where needed. When it is enabled, hybrid users take the value from onPremisesSamAccountName and existing hybrid users are updated during synchronisation. Cloud-only users without an onPremisesSamAccountName value continue to use mailNickname-based generation.

Existing managed domains keep the current behaviour until an administrator enables the setting. For new managed domains, the roadmap item and the Learn page both say enhanced synchronisation is enabled by default, but another passage on the same Learn page says it needs to be enabled and is disabled by default; see Open questions.

The roadmap item is In development, with a preview target of August CY2026 and a target of November CY2026. It lists Worldwide (Standard Multi-Tenant) and the Web platform.

## Why it matters

Applications that use legacy authentication commonly expect a sAMAccountName that is unique, no longer than 20 characters and free of unsupported special characters. Where the generated value differs from the on-premises one, the same person has two logon names, and scripts or access-control entries built on the on-premises name may fail. This setting is the way to make the two match for hybrid users.

The same switch is a change of identity source. If nobody acts on an existing domain, Microsoft Learn says current behaviour continues, so the decision is yours and the risk sits in how you enable it: check first which applications depend on today's generated names.

## Risk assessment

**Data exposure**
- No new data source is described: the value comes from an attribute already in Microsoft Entra ID. The setting changes which attribute fills sAMAccountName in the managed domain.

**Security & identity**
- Enabling it changes the sAMAccountName source for existing hybrid users. Access-control configurations that reference the previously generated name may stop matching; Learn tells administrators to review them before enabling.
- Hybrid users whose onPremisesSamAccountName is not populated are a prerequisite gap: Learn requires the attribute to be populated for users synchronised from on-premises Active Directory.

**Autonomy & actions**
- No agent or autonomous behaviour. Synchronisation updates existing hybrid users automatically once the setting is enabled.

**Change & support**
- Applications, scripts and scheduled tasks that use sAMAccountName can fail after synchronisation completes. Learn suggests comparing sample users' values in Domain Services with Microsoft Entra ID and testing dependent applications.
- Learn says the administrator changing the setting must have both the Application Administrator and Groups Administrator roles, so plan who holds both.

## Cost and licensing

Microsoft Learn lists a Microsoft Entra Domain Services managed domain on the Enterprise or Premium SKU as a prerequisite, and says the feature is not available with the Standard SKU. The page names no separate charge for the feature.

Domain Services is a paid service ([FAQ](https://learn.microsoft.com/entra/identity/domain-services/faqs)), billed by SKU; the SKU can be switched after a domain is created, and prices are on the Azure pricing page. A domain on the Standard SKU would therefore carry the cost of a SKU change before it can use this feature. Indirect cost is administrator time for the pre-enable review and post-enable validation.

## Scope

The feature applies to a Microsoft Entra Domain Services managed domain on the Enterprise or Premium SKU. It affects hybrid users, meaning users synchronised from on-premises Active Directory with onPremisesSamAccountName populated in Microsoft Entra ID; cloud-only users keep generated names.

The roadmap lists Worldwide (Standard Multi-Tenant) and the Web platform. The record lists General Availability and Preview as release phases; Learn marks the feature as public preview. Roles needed to change the setting: Application Administrator and Groups Administrator, both.

## Governance guidance

### Before rollout
- Check that the domain is on the Enterprise or Premium SKU; the feature is not available with the Standard SKU.
- Confirm that onPremisesSamAccountName is populated correctly in Microsoft Entra ID for your hybrid users.
- Inventory applications, scripts, scheduled tasks and access-control configurations that use sAMAccountName, and identify integrations that depend on the currently generated value.
- Assign an administrator who holds both Application Administrator and Groups Administrator.

### At rollout
- Enable sAMAccountName synchronisation from on-premises in the managed domain's Security settings, using the control in the table below.
- Wait for synchronisation to complete before testing; existing hybrid users are updated during synchronisation.

### After rollout
- Compare sAMAccountName values for representative hybrid users in Domain Services with the source values in Microsoft Entra ID.
- Test authentication for applications and scripts that depend on sAMAccountName.
- For a user with an unexpected value, confirm onPremisesSamAccountName is populated and that the setting is enabled.

## Governance controls

<p class="controls__lead">Where each control lives. The left column says what the setting decides and how far it reaches; the middle gives the admin centre and the exact path; the right gives the script, API or command that does the same. <em>Not yet documented</em> means Microsoft has not published a control for that surface, so there is nothing to configure yet.</p>

<table class="controls">
<thead><tr><th>Control</th><th>Admin UI</th><th>API and automation</th></tr></thead>
<tbody>
<tr><td data-label="Control"><strong>Whether sAMAccountName is synchronised from onPremisesSamAccountName</strong><br><small class="controls__note">Per managed domain; preview API version. Portal change needs Application Administrator and Groups Administrator.</small></td><td data-label="Admin UI"><strong>Microsoft Entra admin center</strong><br>Microsoft Entra Domain Services › managed domain › Security settings › sAMAccountName synchronization from on-premises <a href="https://learn.microsoft.com/entra/identity/domain-services/security-account-name" rel="noopener" class="controls__docs">Learn</a></td><td data-label="API and automation"><strong>API</strong><br><code>Microsoft.AAD/domainServices@2026-08-31-preview: properties.domainSecuritySettings.syncOnPremSamAccountName</code> <a href="https://learn.microsoft.com/azure/templates/microsoft.aad/domainservices" rel="noopener" class="controls__docs">Learn</a></td></tr>
</tbody>
</table>

The portal setting and the Azure Resource Manager property control the same switch. The Learn template reference documents the property under a preview API version, so treat the scripted route as preview. Learn states the two-role requirement (Application Administrator and Groups Administrator) for the portal procedure; it does not state the roles for the Resource Manager route.

The setting is per managed domain. The pages read describe no per-user or per-group selection of which hybrid users switch source.

## Open questions

- What is the default for a new managed domain? One Learn passage says enhanced synchronisation is enabled by default for new domains and another says it needs to be enabled and is disabled by default. Watch the Learn page and the roadmap item.
- Can the setting be turned off again after enabling on an existing domain, and what happens to the generated names? Learn does not describe it.
- When does the feature reach general availability? The roadmap targets November CY2026 while status is In development and Learn calls it public preview.

<!-- rationale
risk: Medium. Enabling the setting changes the sAMAccountName source for existing hybrid users, so applications, scripts and access-control entries that rely on the generated value can break.
cost: Low. The feature page names Enterprise or Premium SKU as a prerequisite and no separate charge; Standard SKU domains would need a SKU change first, and prices are on the Azure pricing page.
impact: Low. An administrator has to enable it on an existing domain; users notice only if their sAMAccountName changes and a dependent application or script is affected.
-->

<!-- verifier-findings (2026-11-22, held; checked by gpt-6.1-sol)
The independent check found fault only with the statements below. This is a correction: change what they name and carry the rest of the page over unchanged.
Correct each of these with the smallest change that removes the fault: delete the statement, narrow it, or put the finding's own "Found" text or worded replacement in its place. Where a fix asks for more than that (a new row, an explanation, further references), do only the part that removes the fault. A correction adds no control rows.
- [unsupported, blocker] controls[0].api; Governance controls table / command: Microsoft.AAD/domainServices@2026-08-31-preview: properties.domainSecuritySettings.syncOnPremSamAccountName is an API call that sets the synchronization control. | Found: Searched: 'Microsoft.AAD domainServices 2026-08-31-preview syncOnPremSamAccountName update PATCH PUT'; read the cited ARM reference and update-operation results. The printed string names a resource and property, not an operation. | Fix: Remove the printed string as an API call and the claim that it is a scripted route. Retain it only as the documented fact: 'The ARM template reference for Microsoft.AAD/domainServices@2026-08-31-preview documents properties.domainSecuritySettings.syncOnPremSamAccountName, with values Enabled and Disabled.' Do not replace it with a claim that no automation is documented: the property is real.
- [contradicted, blocker] front matter: cost; Cost and licensing; rationale: cost / consistency: The low cost rating covers administrator time and the paid SKU change needed for a Standard domain to use the feature. | Found: cost: "low"; "A domain on the Standard SKU would therefore carry the cost of a SKU change before it can use this feature." The assessment scale defines low as "indirect cost only: admin time, communications, training." | Fix: Set cost to variable and replace the cost rationale with: 'Variable. Domain Services charges accrue per hour based on the selected SKU; Standard domains need Enterprise or Premium to use this feature. For domains already on an eligible SKU, the feature page names no separate charge and the rollout work is administrator time.' Name the Azure Domain Services hourly SKU-based billing in Cost and licensing, citing https://learn.microsoft.com/entra/fundamentals/licensing.
These are minor and do not hold the page. Where removing the statement, or rewording it in the words the fix gives, settles one, do that; otherwise leave it as it is. A minor finding may also add a source link it names for a statement already on the page. It adds no row and nothing that needs research.
- [supported, minor] Cost and licensing / cost: Domain Services billing depends on the selected SKU. | Found: Microsoft Entra Domain Services charges accrue per hour based on the SKU the tenant owner selects. | Fix: Add https://learn.microsoft.com/entra/fundamentals/licensing to sources and cite its Microsoft Entra Domain Services section for billing by SKU. | Source: https://learn.microsoft.com/entra/fundamentals/licensing
-->
