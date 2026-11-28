---
title: "Microsoft Purview DLP: upgraded inline protection for Microsoft Entra-managed apps in Edge for Business"
slug: "microsoft-purview-data-loss-prevention-upgraded-inline-protection-for-microsoft-entra-mana"
roadmapId: 571397
topic: "governance"
products: ["Microsoft Purview"]
summary: "Microsoft plans to upgrade Purview DLP for Entra-managed apps in Edge for Business: a Conditional Access grant control, richer rules and simulation mode. Preview is targeted for February CY2027. Learn does not yet describe it."
status: "in-development"
releasePhase: ["General Availability","Preview"]
clouds: ["Worldwide (Standard Multi-Tenant)"]
platforms: ["Web"]
targetDate: "March CY2027"
previewDate: "February CY2027"
risk: "low"
cost: "low"
impact: "medium"
defaultState: "unknown"
action: "prepare"
licensing:
  model: "included"
  notes: "Browser inline DLP is included in Microsoft 365 E5/A5, Microsoft Purview Suite/EDU/FLW and Microsoft Defender + Purview Suite FLW, Microsoft 365 E5/A5/F5 Information Protection and Governance, and Office 365 E5/A5. No licensing change specific to this upgrade is published at the time of writing (November 2026)."
audiences: ["security","compliance","m365-admin"]
tags: ["purview","dlp","edge-for-business","conditional-access","entra-id","defender-for-cloud-apps"]
sources:
  - title: "Microsoft 365 Roadmap 571397"
    url: "https://www.microsoft.com/microsoft-365/roadmap?id=571397"
    kind: "roadmap"
  - title: "Learn about Data Loss Prevention for Cloud Apps in Edge for Business"
    url: "https://learn.microsoft.com/purview/dlp-browser-dlp-learn"
    kind: "learn"
  - title: "Help prevent users from sharing sensitive information with cloud apps in Microsoft Edge for Business"
    url: "https://learn.microsoft.com/purview/dlp-create-policy-prevent-cloud-sharing-from-edge-biz"
    kind: "learn"
  - title: "In-browser protection with Microsoft Edge for Business (Preview)"
    url: "https://learn.microsoft.com/defender-cloud-apps/in-browser-protection"
    kind: "learn"
  - title: "Conditional Access: Session"
    url: "https://learn.microsoft.com/entra/identity/conditional-access/concept-conditional-access-session"
    kind: "learn"
  - title: "Microsoft Edge for Business: Protected Clipboard (In Preview)"
    url: "https://learn.microsoft.com/deployedge/microsoft-edge-management-protected-clipboard"
    kind: "learn"
  - title: "New-DlpCompliancePolicy"
    url: "https://learn.microsoft.com/powershell/module/exchangepowershell/new-dlpcompliancepolicy"
    kind: "learn"
  - title: "Microsoft Purview service description"
    url: "https://learn.microsoft.com/office365/servicedescriptions/microsoft-365-service-descriptions/microsoft-365-tenantlevel-services-licensing-guidance/microsoft-purview-service-description#microsoft-purview-data-loss-prevention-dlp-for-cloud-apps-in-the-browser"
    kind: "learn"
  - title: "Require MFA for administrators"
    url: "https://learn.microsoft.com/entra/identity/conditional-access/policy-old-require-mfa-admin#create-a-conditional-access-policy"
    kind: "learn"
videos: []
related: ["microsoft-purview-data-loss-prevention-expanded-inline-protection-for-unmanaged-apps-in-ed","microsoft-purview-data-loss-prevention-new-guided-experience-to-diagnose-and-resolve-dlp-i","endpoint-dlp","sensitive-information-types"]
controls:
  - governs: "Which managed apps and users a DLP policy covers in Edge for Business"
    scope: "tenant"
    ui:
      surface: "Microsoft Purview portal"
      path: "Data loss prevention > Policies > + Create policy > Enterprise apps and Devices > Custom > Custom policy > Assign admin units > Full directory > Managed cloud apps"
      docs: "https://learn.microsoft.com/purview/dlp-create-policy-prevent-cloud-sharing-from-edge-biz"
    api: null
    note: "Today's policy wizard. Whether the upgrade changes these screens is not documented. Groups: Specific users and groups > + Include > Include groups (import from connected apps first). Apps: + Include managed apps."
  - governs: "Whether access to business apps is enforced from Edge for Business"
    scope: "tenant"
    ui:
      surface: "Microsoft Defender portal"
      path: "System > Settings > Cloud apps > Conditional Access App Control > Edge for Business protection > Enforce usage of Edge for Business > Allow access only from Edge"
      docs: "https://learn.microsoft.com/defender-cloud-apps/in-browser-protection"
    api: null
    note: "Page is marked Preview. Turn on Edge for Business browser protection must be On; set Enforce for which devices? to All devices for the managed-app DLP setup. Required by Purview managed-app DLP policies today."
confidence: "medium"
created: "2026-11-21"
updated: "2026-11-28"
roadmapModified: "2026-10-06T22:56:31"
changes:
  - date: "2026-11-21"
    note: "First briefing for this roadmap item: the upgrade is known only from the roadmap, so it sets out today's documented managed-app protection and what is not yet stated."
  - date: "2026-11-21"
    note: "Checked against Microsoft Learn by gpt-6.1-sol: passed with 0 of 57 statements not yet confirmed"
  - date: "2026-11-28"
    note: "Checked against Microsoft Learn by gpt-6.1-sol: held: 4 of 65 statements contradicted, 0 unconfirmed; taken offline until corrected"
  - date: "2026-11-28"
    note: "Corrected the Edge for Business minimum version to 158; licensing now cites the Purview service description; extended both admin paths; removed checklist items that had no control row."
  - date: "2026-11-28"
    note: "Checked against Microsoft Learn by gpt-6.1-sol: passed with 0 of 69 statements not yet confirmed"
version: 2
verification:
  status: "verified-with-gaps"
  date: "2026-11-28"
  version: 2
  model: "gpt-6.1-sol"
  engine: "copilot"
  claims: 69
  confirmed: 69
  unconfirmed: 0
  contradicted: 0
  attempts: 0
  hash: "28a120d6e31c39e4b50d6e5fb27e41b0"
---

## What's changing

Microsoft plans to upgrade the inline data protection that Microsoft Purview Data Loss Prevention (DLP) applies to Microsoft Entra-managed apps in Edge for Business. The roadmap item says the upgraded experience integrates with a Microsoft Entra Conditional Access grant control, simplifies configuration and removes current Purview policy restrictions.

The roadmap lists what administrators gain: expanded conditions and condition combinations, multiple activities per rule, simulation mode, configurable alerts and notifications, and rule match activities visible in activity explorer.

Microsoft Learn does not yet describe this upgrade, so the paragraph above is the roadmap's description. Learn documents today's managed-app protection: policies apply when users reach Entra-connected (managed) apps in Edge for Business with work or school credentials, on unmanaged and managed devices, and only in the Edge work profile. Today's setup needs onboarding to Conditional Access app control, a Conditional Access policy with custom session controls, and Edge for Business in-browser protection.

The roadmap status is In development. The preview target is February CY2027 and the target date is March CY2027; release phases are Preview and General Availability, for Worldwide (Standard Multi-Tenant) and the Web platform. These are targets, not commitments.

## Why it matters

If your organisation protects data in business apps such as ServiceNow or Workday from unmanaged devices, this is the policy path you rely on, and the roadmap says its configuration and restrictions will change. Microsoft has not stated what happens to existing policies when the upgrade arrives, so plan on the assumption that rules, prerequisites and alert settings may need review.

The features the roadmap names (simulation mode, multiple activities per rule, alerts and activity explorer visibility) address common reasons for hesitating to enforce block rules. Whether the Conditional Access grant control replaces the session-control setup that Learn describes today is not stated, so confirm before redesigning anything.

## Risk assessment

**Data exposure**
- Managed-app DLP applies only where both the user and the app are in scope for every prerequisite protection; Learn says the policy is not applied in Edge until all requirements are met. A gap in Conditional Access or in-browser protection leaves the DLP rule inert while the policy appears to exist.
- Learn says Microsoft Purview browser data security policies do not apply to B2B guest users, so guest activity in managed apps is outside today's policies.

**Security & identity**
- Learn says a user already signed in to an app may not be affected by a new policy until their token expires and they sign in again; shorter sign-in frequency in Conditional Access shortens the wait. Expect a lag when you first target users.
- Learn says protections might not apply if the user is also in scope for a Defender session policy or an Endpoint DLP policy for the same managed apps. Check overlaps before and after the upgrade.

**Autonomy & actions**
- No autonomous behaviour is described. Block actions on managed-app activities act on users in Edge for Business; Learn says Endpoint DLP policies take priority over inline Edge policies when user, context and action match.

**Change & support**
- The roadmap says current Purview policy restrictions are being removed and configuration simplified. Microsoft has not said whether existing policies migrate or need recreating; helpdesk and security operations should expect changed policy screens and alert settings.

## Cost and licensing

Browser inline DLP is included in Microsoft 365 E5/A5, Microsoft Purview Suite/EDU/FLW and Microsoft Defender + Purview Suite FLW, Microsoft 365 E5/A5/F5 Information Protection and Governance, and Office 365 E5/A5. No licensing change specific to this upgrade is published at the time of writing (November 2026). The Learn page on DLP for cloud apps in Edge for Business points to Microsoft 365 Enterprise plans and the Microsoft 365 service description licensing guidance without naming a licence for this scenario.

The preview Protected Clipboard page lists Microsoft 365 E5 (or E5 Compliance / E5 Security add-on) for its own Purview DLP scenario. Do not read it as the licence for this upgrade.

The cost the sources show is indirect: administrator time to review policies, and the prerequisites that sit outside Purview, including Conditional Access and Defender for Cloud Apps in-browser protection.

## Scope

The roadmap lists Worldwide (Standard Multi-Tenant) and the Web platform; no US Government clouds are listed on the record, which is not a statement that they are excluded.

Today's managed-app protections run in Edge for Business version 158 or later, in the two latest stable versions, on the Edge work profile. Configuring them needs more than Purview rights: Learn says activating managed-app policies needs permissions for Conditional Access administration and for Microsoft Defender Edge in-browser protection. Whether those prerequisites and roles change with the upgrade is not stated.

## Governance guidance

### Before rollout
- Inventory the managed-app DLP policies in the Microsoft Purview portal and note which apps, users and groups each covers (row 1 of the controls table).
- Check that Edge for Business in-browser protection is on (row 2), so you know which gaps the upgrade must not widen.

### At rollout
- Watch the Microsoft 365 Roadmap and Message center for the preview announcement targeted for February CY2027 and for any migration guidance for existing policies.
- Test the upgraded configuration with a small pilot group before applying it to all users in scope.
- Use simulation mode, once documented, before turning block actions on.

### After rollout
- Re-check in-browser protection settings after any policy change, because the browser policy depends on them.

## Governance controls

<p class="controls__lead">Where each control lives. The left column says what the setting decides and how far it reaches; the middle gives the admin centre and the exact path; the right gives the script, API or command that does the same. <em>Not yet documented</em> means Microsoft has not published a control for that surface, so there is nothing to configure yet.</p>

<table class="controls">
<thead><tr><th>Control</th><th>Admin UI</th><th>API and automation</th></tr></thead>
<tbody>
<tr><td data-label="Control"><strong>Which managed apps and users a DLP policy covers in Edge for Business</strong><br><small>Tenant</small><br><small class="controls__note">Today's policy wizard. Whether the upgrade changes these screens is not documented. Groups: Specific users and groups &gt; + Include &gt; Include groups (import from connected apps first). Apps: + Include managed apps.</small></td><td data-label="Admin UI"><strong>Microsoft Purview portal</strong><br>Data loss prevention › Policies › + Create policy › Enterprise apps and Devices › Custom › Custom policy › Assign admin units › Full directory › Managed cloud apps <a href="https://learn.microsoft.com/purview/dlp-create-policy-prevent-cloud-sharing-from-edge-biz" rel="noopener" class="controls__docs">Learn</a></td><td data-label="API and automation"><em class="controls__gap">Not yet documented</em></td></tr>
<tr><td data-label="Control"><strong>Whether access to business apps is enforced from Edge for Business</strong><br><small>Tenant</small><br><small class="controls__note">Page is marked Preview. Turn on Edge for Business browser protection must be On; set Enforce for which devices? to All devices for the managed-app DLP setup. Required by Purview managed-app DLP policies today.</small></td><td data-label="Admin UI"><strong>Microsoft Defender portal</strong><br>System › Settings › Cloud apps › Conditional Access App Control › Edge for Business protection › Enforce usage of Edge for Business › Allow access only from Edge <a href="https://learn.microsoft.com/defender-cloud-apps/in-browser-protection" rel="noopener" class="controls__docs">Learn</a></td><td data-label="API and automation"><em class="controls__gap">Not yet documented</em></td></tr>
</tbody>
</table>

The upgrade itself has no documented controls yet, so the rows describe today's managed-app protection. Creating DLP policies in the Purview portal is governed by DLP permissions; Learn points to the DLP deployment page for them. Configuring Conditional Access policies requires at least the Conditional Access Administrator role, and Edge in-browser protection needs Defender permissions.

The Conditional Access policy that today carries the session control is configured in the Microsoft Entra admin center; Learn's Conditional Access session page says the Conditional Access App Control Custom setting is necessary for apps included in these policies. Whether the planned grant control replaces or adds to it is not documented, and no separate row exists for it yet.

## Open questions

- Which Conditional Access grant control does the upgrade use, and does it replace the custom session control and Conditional Access app control onboarding that Learn requires today? Watch the Learn page on DLP for cloud apps in Edge for Business.
- Do existing managed-app DLP policies migrate to the upgraded model automatically, or must they be recreated? Watch Message center.
- Will this upgrade change the published browser DLP entitlement, including for simulation mode or added alerting?
- Is the experience on by default for new policies, and does it change existing rules without administrator action?
- Will the upgrade extend to US Government clouds, which the roadmap item does not list?

<!-- rationale
risk: Low. The roadmap describes a new control, and no source says existing policies change on arrival, so the exposure is today's managed-app DLP behaviour continuing, with the gaps its prerequisites already carry.
cost: Low. The only cost the sources show is admin time to rework policy configuration; a licensing change specific to this upgrade is not yet published.
impact: Medium. Security and compliance administrators who run managed-app DLP policies see the new configuration; users may notice policy actions and work-profile prompts in Edge for Business.
-->

<!-- verifier-findings (2026-11-28, verified-with-gaps; checked by gpt-6.1-sol)
The independent check found fault only with the statements below. This is a correction: change what they name and carry the rest of the page over unchanged.
These are minor and do not hold the page. Where removing the statement, or rewording it in the words the fix gives, settles one, do that; otherwise leave it as it is. A minor finding may also add a source link it names for a statement already on the page. It adds no row and nothing that needs research.
- [supported, minor] controls[0].ui; Governance controls table / admin-path: The Purview path through Data loss prevention, Policies and the Enterprise apps and Devices custom wizard reaches Managed cloud apps. | Found: Select Data loss prevention > Policies > + Create policy. Select Enterprise apps and Devices. Select Custom from the Categories list and then Custom policy from the Regulations list. Accept the default Full directory on the Assign admin units page. Select Managed cloud apps | Fix: Extend controls[0].ui.path and its rendered copy to 'Data loss prevention > Policies > + Create policy > Enterprise apps and Devices > Categories > Custom > Regulations > Custom policy > Assign admin units > Full directory > Managed cloud apps > Specific users and groups > + Include > Include groups > group > + Include managed apps > app', as documented at https://learn.microsoft.com/purview/dlp-create-policy-prevent-cloud-sharing-from-edge-biz. The existing path stops before the selectors that set coverage. | Source: https://learn.microsoft.com/purview/dlp-create-policy-prevent-cloud-sharing-from-edge-biz
-->
