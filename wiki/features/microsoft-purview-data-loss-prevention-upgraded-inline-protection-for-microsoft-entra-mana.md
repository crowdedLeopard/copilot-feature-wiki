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
  model: "unknown"
  notes: "Not yet published for this upgrade. The Edge for Business DLP page points to Microsoft 365 plan and service description guidance without naming a licence; the preview Protected Clipboard page lists Microsoft 365 E5 for its own scenario."
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
videos: []
related: ["microsoft-purview-data-loss-prevention-expanded-inline-protection-for-unmanaged-apps-in-ed","microsoft-purview-data-loss-prevention-new-guided-experience-to-diagnose-and-resolve-dlp-i","endpoint-dlp","sensitive-information-types"]
controls:
  - governs: "Which managed apps and users a DLP policy covers in Edge for Business"
    scope: "tenant"
    ui:
      surface: "Microsoft Purview portal"
      path: "Data loss prevention > Policies > + Create policy > Enterprise apps and Devices > Custom > Custom policy > Managed cloud apps"
      docs: "https://learn.microsoft.com/purview/dlp-create-policy-prevent-cloud-sharing-from-edge-biz"
    api: null
    note: "Today's policy wizard. Whether the upgrade changes these screens is not documented."
  - governs: "Whether access to business apps is enforced from Edge for Business"
    scope: "tenant"
    ui:
      surface: "Microsoft Defender portal"
      path: "System > Settings > Cloud apps > Conditional Access App Control > Edge for Business protection"
      docs: "https://learn.microsoft.com/defender-cloud-apps/in-browser-protection"
    api: null
    note: "Page is marked Preview. On it, Turn on Edge for Business browser protection and Enforce usage of Edge for Business are set. Required by Purview managed-app DLP policies today."
confidence: "medium"
created: "2026-11-21"
updated: "2026-11-21"
roadmapModified: "2026-10-06T22:56:31"
changes:
  - date: "2026-11-21"
    note: "First briefing for this roadmap item: the upgrade is known only from the roadmap, so it sets out today's documented managed-app protection and what is not yet stated."
  - date: "2026-11-21"
    note: "Checked against Microsoft Learn by gpt-6.1-sol: passed with 0 of 57 statements not yet confirmed"
version: 1
verification:
  status: "verified-with-gaps"
  date: "2026-11-21"
  version: 1
  model: "gpt-6.1-sol"
  engine: "copilot"
  claims: 57
  confirmed: 56
  unconfirmed: 0
  contradicted: 1
  attempts: 0
  hash: "bf6e6f028e3dc98134f366c3112057ab"
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

No licence or price for this upgrade is published at the time of writing (November 2026). The Learn page on DLP for cloud apps in Edge for Business points to Microsoft 365 Enterprise plans and the Microsoft 365 service description licensing guidance without naming a licence for this scenario.

The preview Protected Clipboard page lists Microsoft 365 E5 (or E5 Compliance / E5 Security add-on) for its own Purview DLP scenario. Do not read it as the licence for this upgrade.

The cost the sources show is indirect: administrator time to review policies, and the prerequisites that sit outside Purview, including Conditional Access and Defender for Cloud Apps in-browser protection.

## Scope

The roadmap lists Worldwide (Standard Multi-Tenant) and the Web platform; no US Government clouds are listed on the record, which is not a statement that they are excluded.

Today's managed-app protections run in Edge for Business version 144 or later, in the two latest stable versions, on the Edge work profile. Configuring them needs more than Purview rights: Learn says activating managed-app policies needs permissions for Conditional Access administration and for Microsoft Defender Edge in-browser protection. Whether those prerequisites and roles change with the upgrade is not stated.

## Governance guidance

### Before rollout
- Inventory the managed-app DLP policies in the Microsoft Purview portal and note which apps, users and groups each covers (row 1 of the controls table).
- Check that each app is onboarded to Conditional Access app control with a custom session control, and that Edge for Business in-browser protection is on (row 2), so you know which gaps the upgrade must not widen.
- List users who are also in scope for Defender session policies or Endpoint DLP policies for the same apps, since Learn says this can stop the browser policy applying.

### At rollout
- Watch the Microsoft 365 Roadmap and Message center for the preview announcement targeted for February CY2027 and for any migration guidance for existing policies.
- Test the upgraded configuration with a small pilot group before applying it to all users in scope.
- Use simulation mode, once documented, before turning block actions on.

### After rollout
- Review rule matches in Defender XDR investigations and, once available, activity explorer, and tune conditions to cut false positives.
- Re-check Conditional Access and in-browser protection settings after any policy change, because the browser policy depends on them.

## Governance controls

<p class="controls__lead">Where each control lives. The left column says what the setting decides and how far it reaches; the middle gives the admin centre and the exact path; the right gives the script, API or command that does the same. <em>Not yet documented</em> means Microsoft has not published a control for that surface, so there is nothing to configure yet.</p>

<table class="controls">
<thead><tr><th>Control</th><th>Admin UI</th><th>API and automation</th></tr></thead>
<tbody>
<tr><td data-label="Control"><strong>Which managed apps and users a DLP policy covers in Edge for Business</strong><br><small>Tenant</small><br><small class="controls__note">Today's policy wizard. Whether the upgrade changes these screens is not documented.</small></td><td data-label="Admin UI"><strong>Microsoft Purview portal</strong><br>Data loss prevention › Policies › + Create policy › Enterprise apps and Devices › Custom › Custom policy › Managed cloud apps <a href="https://learn.microsoft.com/purview/dlp-create-policy-prevent-cloud-sharing-from-edge-biz" rel="noopener" class="controls__docs">Learn</a></td><td data-label="API and automation"><em class="controls__gap">Not yet documented</em></td></tr>
<tr><td data-label="Control"><strong>Whether access to business apps is enforced from Edge for Business</strong><br><small>Tenant</small><br><small class="controls__note">Page is marked Preview. On it, Turn on Edge for Business browser protection and Enforce usage of Edge for Business are set. Required by Purview managed-app DLP policies today.</small></td><td data-label="Admin UI"><strong>Microsoft Defender portal</strong><br>System › Settings › Cloud apps › Conditional Access App Control › Edge for Business protection <a href="https://learn.microsoft.com/defender-cloud-apps/in-browser-protection" rel="noopener" class="controls__docs">Learn</a></td><td data-label="API and automation"><em class="controls__gap">Not yet documented</em></td></tr>
</tbody>
</table>

The upgrade itself has no documented controls yet, so the rows describe today's managed-app protection. Creating DLP policies in the Purview portal is governed by DLP permissions; Learn points to the DLP deployment page for them. Conditional Access policies need the Conditional Access Administrator role, and Edge in-browser protection needs Defender permissions.

The Conditional Access policy that today carries the session control is configured in the Microsoft Entra admin center; Learn's Conditional Access session page says the Conditional Access App Control Custom setting is necessary for apps included in these policies. Whether the planned grant control replaces or adds to it is not documented, and no separate row exists for it yet.

No tenant-wide switch for the upgraded experience is documented at the time of writing.

## Open questions

- Which Conditional Access grant control does the upgrade use, and does it replace the custom session control and Conditional Access app control onboarding that Learn requires today? Watch the Learn page on DLP for cloud apps in Edge for Business.
- Do existing managed-app DLP policies migrate to the upgraded model automatically, or must they be recreated? Watch Message center.
- Which licence covers the upgraded experience, and does simulation mode or the added alerting need a different one?
- Is the experience on by default for new policies, and does it change existing rules without administrator action?
- Will the upgrade extend to US Government clouds, which the roadmap item does not list?

<!-- rationale
risk: Low. The roadmap describes a new control, and no source says existing policies change on arrival, so the exposure is today's managed-app DLP behaviour continuing, with the gaps its prerequisites already carry.
cost: Low. The only cost the sources show is admin time to rework policy configuration; a licence for this upgrade is not yet published.
impact: Medium. Security and compliance administrators who run managed-app DLP policies see the new configuration; users notice only when a rule blocks or audits an action in Edge for Business.
-->

<!-- verifier-findings (2026-11-21, verified-with-gaps; checked by gpt-6.1-sol)
The independent check found fault only with the statements below. This is a correction: change what they name and carry the rest of the page over unchanged.
These are minor and do not hold the page. Where removing the statement, or rewording it in the words the fix gives, settles one, do that; otherwise leave it as it is. A minor finding may also add a source link it names for a statement already on the page. It adds no row and nothing that needs research.
- [supported, minor] front matter: licensing.model and notes; Cost and licensing; Open questions; rationale: cost / licensing: Licensing is unknown because no requirement specific to this upgrade is published. | Found: With a DLP policy, admins can apply inline data protection to identify, audit, and protect sensitive data in interactions with cloud apps (unmanaged and managed) in Microsoft Edge for Business. | Fix: Set licensing.model to included. Replace the opening licensing sentence and notes with: 'The Purview service description includes browser inline DLP in Microsoft 365 E5/A5, Microsoft Purview Suite/EDU/FLW and Microsoft Defender + Purview Suite FLW, Microsoft 365 E5/A5/F5 Information Protection and Governance, and Office 365 E5/A5. No licensing change specific to this upgrade is published at the time of writing (November 2026).' Cite https://learn.microsoft.com/office365/servicedescriptions/microsoft-365-service-descriptions/microsoft-365-tenantlevel-services-licensing-guidance/microsoft-purview-service-description#microsoft-purview-data-loss-prevention-dlp-for-cloud-apps-in-the-browser. In the cost rationale, replace 'a licence for this upgrade is not yet published' with 'a licensing change specific to this upgrade is not yet published'. This is an understatement of existing entitlement, not evidence of a new upgrade licence. | Source: https://learn.microsoft.com/office365/servicedescriptions/microsoft-365-service-descriptions/microsoft-365-tenantlevel-services-licensing-guidance/microsoft-purview-service-description#microsoft-purview-data-loss-prevention-dlp-for-cloud-apps-in-the-browser
- [supported, minor] Governance controls / role: Conditional Access policies are configured in the Microsoft Entra admin center with the Conditional Access Administrator role. | Found: Sign in to the Microsoft Entra admin center as at least a Conditional Access Administrator. Browse to Entra ID > Conditional Access > Policies. | Fix: Change the sentence to 'Configuring Conditional Access policies requires at least the Conditional Access Administrator role' and add https://learn.microsoft.com/entra/identity/conditional-access/policy-old-require-mfa-admin#create-a-conditional-access-policy to sources. | Source: https://learn.microsoft.com/entra/identity/conditional-access/policy-old-require-mfa-admin#create-a-conditional-access-policy
- [supported, minor] controls[0].ui; Governance controls table / admin-path: The Purview policy wizard is reached through Data loss prevention > Policies > + Create policy > Enterprise apps and Devices > Custom > Custom policy > Managed cloud apps. | Found: Select Data loss prevention > Policies > + Create policy. Select Enterprise apps and Devices. Select Custom from the Categories list and then Custom policy from the Regulations list. Accept the default Full directory on the Assign admin units page. Select Managed cloud apps | Fix: The printed steps are correct but stop before the app/user scope controls and omit a wizard page. Use 'Data loss prevention > Policies > + Create policy > Enterprise apps and Devices > Custom > Custom policy > Assign admin units > Full directory > Managed cloud apps' as the common path. State in the note: 'Select Specific users and groups > + Include > Include groups to choose groups; select + Include managed apps to choose apps. Groups must first be imported from connected apps.' The cited setup page documents these steps. | Source: https://learn.microsoft.com/purview/dlp-create-policy-prevent-cloud-sharing-from-edge-biz
- [supported, minor] controls[1].ui; Governance controls table / admin-path: Edge browser enforcement is configured at Microsoft Defender portal > System > Settings > Cloud apps > Conditional Access App Control > Edge for Business protection. | Found: go to System > Settings > Cloud apps > Conditional Access App Control section > Edge for Business protection. | Fix: The path reaches the correct page but stops before the deciding control. Extend it to 'System > Settings > Cloud apps > Conditional Access App Control > Edge for Business protection > Enforce usage of Edge for Business > Allow access only from Edge'. In the note specify 'Turn on Edge for Business browser protection must be On; set Enforce for which devices? to All devices for the managed-app DLP setup.' | Source: https://learn.microsoft.com/defender-cloud-apps/in-browser-protection
- [contradicted, minor] Governance guidance: Before rollout and After rollout; Governance controls table / consistency: The checklist asks readers to check controls not represented in the controls table. | Found: Check that each app is onboarded to Conditional Access app control with a custom session control ... List users who are also in scope for Defender session policies or Endpoint DLP policies ... Review rule matches in Defender XDR investigations | Fix: The table has no rows for Conditional Access onboarding/session controls, overlapping Defender session or Endpoint DLP policies, or investigation monitoring. Do not add unverified rows. Narrow the second Before rollout bullet to 'Check that Edge for Business in-browser protection is on (row 2), so you know which gaps the upgrade must not widen'; remove the third Before rollout bullet and the first After rollout bullet; narrow the remaining After rollout bullet to 'Re-check in-browser protection settings after any policy change, because the browser policy depends on them.' The factual prerequisite and overlap explanations can remain in the body.
-->
