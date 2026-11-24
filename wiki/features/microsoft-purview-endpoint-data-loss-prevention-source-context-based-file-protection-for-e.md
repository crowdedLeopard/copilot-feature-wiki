---
title: "Microsoft Purview Endpoint DLP: source context based file protection"
slug: "microsoft-purview-endpoint-data-loss-prevention-source-context-based-file-protection-for-e"
roadmapId: 547835
topic: "governance"
products: ["Microsoft Purview"]
summary: "Microsoft plans Endpoint DLP protection for files based on the website they came from or the app that created them. Learn publishes no controls, default or feature-specific licence yet; nothing to do now."
status: "in-development"
releasePhase: ["General Availability"]
clouds: ["Worldwide (Standard Multi-Tenant)"]
platforms: ["Web"]
targetDate: "February CY2026"
previewDate: null
risk: "low"
cost: "low"
impact: "low"
defaultState: "unknown"
action: "review"
licensing:
  model: "included"
  notes: "Microsoft's Purview service description lists Endpoint Data Loss Prevention (DLP) as included in Microsoft 365 E5/A5/G5, Microsoft Purview Suite/EDU/GOV/FLW and Microsoft Defender + Purview Suite FLW, and Microsoft 365 E5/A5/F5/G5 Information Protection & Governance. Nothing specific to this feature is published."
audiences: ["security","compliance"]
tags: ["purview","dlp","endpoint-dlp"]
sources:
  - title: "Microsoft 365 Roadmap 547835"
    url: "https://www.microsoft.com/microsoft-365/roadmap?id=547835"
    kind: "roadmap"
  - title: "Learn about Endpoint data loss prevention"
    url: "https://learn.microsoft.com/purview/endpoint-dlp-learn-about"
    kind: "learn"
  - title: "Get started with endpoint data loss prevention"
    url: "https://learn.microsoft.com/purview/endpoint-dlp-getting-started"
    kind: "learn"
  - title: "Data Loss Prevention policy reference"
    url: "https://learn.microsoft.com/purview/dlp-policy-reference"
    kind: "learn"
  - title: "Microsoft Purview service description"
    url: "https://learn.microsoft.com/office365/servicedescriptions/microsoft-365-service-descriptions/microsoft-365-tenantlevel-services-licensing-guidance/microsoft-purview-service-description"
    kind: "learn"
  - title: "Help prevent sharing of sensitive items with unauthorized cloud apps and services"
    url: "https://learn.microsoft.com/purview/endpoint-dlp-create-policy-unauthorized-cloud-apps-services"
    kind: "learn"
  - title: "Create and deploy data loss prevention policies"
    url: "https://learn.microsoft.com/purview/dlp-create-deploy-policy"
    kind: "learn"
  - title: "Create a DLP policy that uses device scoping"
    url: "https://learn.microsoft.com/purview/endpoint-dlp-create-policy-device-scoping"
    kind: "learn"
  - title: "Help prevent risky user activity by monitoring or restricting access to sensitive service domains"
    url: "https://learn.microsoft.com/purview/endpoint-dlp-create-policy-restrict-access-to-domains"
    kind: "learn"
  - title: "Set-DlpCompliancePolicy"
    url: "https://learn.microsoft.com/powershell/module/exchangepowershell/set-dlpcompliancepolicy"
    kind: "learn"
  - title: "Set-DlpComplianceRule"
    url: "https://learn.microsoft.com/powershell/module/exchangepowershell/set-dlpcompliancerule"
    kind: "learn"
videos: []
related: ["endpoint-dlp","microsoft-purview-compliance-portal-endpoint-data-loss-prevention-endpoint-dlp-shows-full"]
controls:
  - governs: "Rule condition or setting that protects files by the website or app they came from"
    scope: "tenant"
    ui: null
    api: null
    note: "Learn documents no such control at the time of writing (November 2026); the Endpoint conditions list has no source-website or source-app condition."
  - governs: "Which users an Endpoint DLP policy covers on devices (today's alternative)"
    scope: "user"
    ui:
      surface: "Microsoft Purview portal"
      path: "Data loss prevention > Policies > Create policy > Enterprise applications & devices > Categories > Custom > Regulations > Custom policy > Admin units > Full directory > Devices > Edit > All users, groups, and adaptive scopes"
      docs: "https://learn.microsoft.com/purview/endpoint-dlp-create-policy-device-scoping"
    api:
      kind: "powershell"
      call: "Set-DlpCompliancePolicy -Identity <policy> -AddEndpointDlpLocation <users>"
      docs: "https://learn.microsoft.com/powershell/module/exchangepowershell/set-dlpcompliancepolicy"
    note: "Scopes the Devices location of a policy; does not apply source-based protection. Parameter needs the Compliance Administrator or Compliance Data Administrator role and EndpointDLPLocation set to All."
confidence: "low"
created: "2026-11-24"
updated: "2026-11-24"
roadmapModified: "2026-01-27T00:01:00"
changes:
  - date: "2026-11-24"
    note: "First briefing: roadmap-only item with no Learn page yet; controls, default and feature-specific licence are not yet documented."
  - date: "2026-11-24"
    note: "Checked against Microsoft Learn by gpt-6.1-sol: held: 3 of 38 statements contradicted, 0 unconfirmed; taken offline until corrected"
  - date: "2026-11-24"
    note: "Corrected after the independent check: named the roles Microsoft documents for creating DLP policies, gave the full portal path for scoping a policy to devices, and removed two checklist items that had no controls row."
  - date: "2026-11-24"
    note: "Checked against Microsoft Learn by gpt-6.1-sol: passed: all 47 statements confirmed"
version: 2
verification:
  status: "verified"
  date: "2026-11-24"
  version: 2
  model: "gpt-6.1-sol"
  engine: "copilot"
  claims: 47
  confirmed: 47
  unconfirmed: 0
  contradicted: 0
  attempts: 0
  hash: "cb6b0b70968d5e99399641aaa575a77d"
---

## What's changing

The roadmap item says Microsoft plans to let Endpoint data loss prevention (Endpoint DLP) protect a file based on the website it was downloaded from or the app that created it. Its full description is one sentence: "Protect file based on the website the file is downloaded or the app the file is created." Microsoft Learn does not describe this capability at the time of writing (November 2026), so what follows about behaviour is the roadmap's description and nothing more.

Endpoint DLP is the part of Microsoft Purview Data Loss Prevention that extends activity monitoring and protection to Windows 10/11 and macOS devices, and certain Windows server versions, once they are onboarded to Microsoft Purview. The roadmap record lists the platform as Web and does not name Windows or macOS. Microsoft has not said which operating systems, browsers or apps the new capability covers.

The record gives status In development, release phase General Availability and a target of February CY2026, for the Worldwide (Standard Multi-Tenant) cloud. That target month has passed while the status is still In development, so treat the date as unreliable. The record was last modified on 2026-01-27.

## Why it matters

Today's Endpoint DLP conditions describe the content of a file and where it is going. Learn lists a condition for a user accessing a sensitive website from Microsoft Edge, which is destination-based, but no condition based on where a file came from. This item would add that source view, which could matter for files from unsanctioned sites or created in unapproved apps.

Because Microsoft has not stated what happens on arrival, the wiki's view is that no source says existing endpoint behaviour changes, so nothing needs doing yet. Security and compliance owners should watch for documentation before planning policy changes.

## Risk assessment

**Data exposure**
- The roadmap item describes protecting files by source website or creating app. Microsoft has not said what the protection does (audit, block, label or encrypt), so the exposure it would close cannot be sized yet.
- Learn says devices must be onboarded to be used as locations in DLP policies, so confirm which devices are onboarded before relying on any new rule.

**Security & identity**
- No identity or permission change is described in the record or on Microsoft Learn. Microsoft documents DLP policy creation and deployment for the Compliance administrator, Compliance data administrator, Information Protection, Information Protection Admin, and Security administrator role groups; no additional permission specific to source-context protection is published.

**Autonomy & actions**
- No autonomous or agent behaviour is described. Whether the capability only audits or can restrict file activity is not stated.

**Change & support**
- If the capability restricts activity, users on onboarded devices could meet new prompts or blocks. Microsoft has not said whether any exists by default, so pilot with audit-only rules where Microsoft provides them.
- The target month (February CY2026) has passed with the item still In development, so plan on the date moving again.

## Cost and licensing

Microsoft's Purview service description lists Endpoint Data Loss Prevention (DLP) as Included for Microsoft 365 E5/A5/G5, Microsoft Purview Suite/EDU/GOV/FLW and Microsoft Defender + Purview Suite FLW, and Microsoft 365 E5/A5/F5/G5 Information Protection & Governance. The Endpoint DLP getting-started page points to Microsoft 365 licensing guidance for subscription details.

No licence, add-on or meter specific to source context based file protection is published at the time of writing (November 2026). The known indirect cost is admin time to design and test rules and to handle alerts.

## Scope

The roadmap record lists the Worldwide (Standard Multi-Tenant) cloud, the Microsoft Purview product, release phase General Availability and platform Web. It lists no US Government clouds, and absence from the record is not a statement that the feature is unavailable there.

Endpoint DLP policy targeting can be configured using a combination of users and devices, and devices must be onboarded to Microsoft Purview. Which users, roles, operating systems and apps the new capability covers, and how it rolls out, is not stated.

## Governance guidance

### Before rollout
- Review the Devices-location policies you already run (Data loss prevention > Policies) so you know the baseline to compare against.
- Assign someone to watch the Microsoft Purview what's new page and the roadmap item for documentation of the capability.

### At rollout
- Check the Endpoint DLP rule conditions in your tenant for a new source-based option before building policies, as none is documented now.
- Test any new rule on a pilot group of users and devices before widening scope.

### After rollout
- Record the licence the feature requires once Microsoft publishes it, and update budget notes.

## Governance controls

<p class="controls__lead">Where each control lives. The left column says what the setting decides and how far it reaches; the middle gives the admin centre and the exact path; the right gives the script, API or command that does the same. <em>Not yet documented</em> means Microsoft has not published a control for that surface, so there is nothing to configure yet.</p>

<table class="controls">
<thead><tr><th>Control</th><th>Admin UI</th><th>API and automation</th></tr></thead>
<tbody>
<tr><td data-label="Control"><strong>Rule condition or setting that protects files by the website or app they came from</strong><br><small>Tenant</small><br><small class="controls__note">Learn documents no such control at the time of writing (November 2026); the Endpoint conditions list has no source-website or source-app condition.</small></td><td data-label="Admin UI"><em class="controls__gap">Not yet documented</em></td><td data-label="API and automation"><em class="controls__gap">Not yet documented</em></td></tr>
<tr><td data-label="Control"><strong>Which users an Endpoint DLP policy covers on devices (today's alternative)</strong><br><small>User</small><br><small class="controls__note">Scopes the Devices location of a policy; does not apply source-based protection. Parameter needs the Compliance Administrator or Compliance Data Administrator role and EndpointDLPLocation set to All.</small></td><td data-label="Admin UI"><strong>Microsoft Purview portal</strong><br>Data loss prevention › Policies › Create policy › Enterprise applications &amp; devices › Categories › Custom › Regulations › Custom policy › Admin units › Full directory › Devices › Edit › All users, groups, and adaptive scopes <a href="https://learn.microsoft.com/purview/endpoint-dlp-create-policy-device-scoping" rel="noopener" class="controls__docs">Learn</a></td><td data-label="API and automation"><strong>PowerShell</strong><br><code>Set-DlpCompliancePolicy -Identity &lt;policy&gt; -AddEndpointDlpLocation &lt;users&gt;</code> <a href="https://learn.microsoft.com/powershell/module/exchangepowershell/set-dlpcompliancepolicy" rel="noopener" class="controls__docs">Learn</a></td></tr>
</tbody>
</table>

No setting for source context based file protection is documented, so the table shows that gap. The one control that is documented is the Devices location of a DLP policy, which decides which users the Endpoint DLP policy covers; it is today's alternative and does not itself apply source-based protection.

The Set-DlpCompliancePolicy parameter -AddEndpointDlpLocation adds accounts to the included list only where the EndpointDLPLocation parameter was given the value All, and requires the Compliance Administrator or Compliance Data Administrator role in Microsoft Entra ID.

## Open questions

- What exactly does the capability do with a source match: audit, restrict, label or encrypt the file, and which rule condition or setting configures it? Watch the Microsoft Purview what's new page and the roadmap item.
- Which platforms does it cover? The roadmap record lists Web only, while Endpoint DLP is documented for Windows and macOS.
- Is it on, off or opt-in on arrival? Microsoft has not stated a default.
- Does it need anything beyond the Endpoint DLP licence listed in the Purview service description?
- When will it ship, given the February CY2026 target has passed while the status is In development?

<!-- rationale
risk: Low. The roadmap item describes a protection capability, and no source says existing endpoint behaviour changes. The default is not stated, so this rates today's behaviour continuing.
cost: Low. Microsoft's Purview service description lists Endpoint DLP as included in specific licences; the only known cost is admin time. A feature-specific licence or meter is not yet published.
impact: Low. The roadmap item names no audience beyond Microsoft Purview customers, and no source says users on onboarded devices see a change by default.
-->
