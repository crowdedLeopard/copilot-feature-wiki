---
title: "Word: Edit with Copilot for users in Microsoft 365 GCC"
slug: "word-copilot-edit-mode-is-available-to-users-in-office-365-gcc"
roadmapId: 570277
topic: "m365-copilot"
products: ["Word","Microsoft Copilot (Microsoft 365)"]
summary: "The roadmap says Edit with Copilot in Word is coming to GCC users. Microsoft's service description still lists it as unavailable in GCC, GCC High and DoD. Licensed Copilot users are affected; no admin action is documented yet."
status: "in-development"
releasePhase: ["General Availability"]
clouds: ["GCC","GCC High","DoD"]
platforms: ["Web"]
targetDate: "October CY2026"
previewDate: null
risk: "medium"
cost: "medium"
impact: "medium"
defaultState: "unknown"
action: "review"
licensing:
  model: "add-on"
  notes: "The Microsoft Copilot service description says Microsoft 365 Copilot is an add-on plan and that a Microsoft 365 Copilot licence is required for Edit with Copilot. A price specific to GCC is not yet published."
audiences: ["m365-admin","service-owner","change-adoption"]
tags: ["word","m365-copilot","microsoft-365-apps","anthropic","gcc","gcc-high","dod"]
sources:
  - title: "Microsoft 365 Roadmap 570277"
    url: "https://www.microsoft.com/microsoft-365/roadmap?id=570277"
    kind: "roadmap"
  - title: "Microsoft Copilot (service description)"
    url: "https://learn.microsoft.com/office365/servicedescriptions/office-365-platform-service-description/microsoft-365-copilot"
    kind: "learn"
  - title: "Understand Microsoft U.S. government cloud environments for Microsoft 365 and Microsoft Copilot"
    url: "https://learn.microsoft.com/copilot/plan/gov-overview"
    kind: "learn"
  - title: "License options for Microsoft Copilot"
    url: "https://learn.microsoft.com/copilot/plan/copilot-license-options"
    kind: "learn"
  - title: "Claude models from Anthropic in Microsoft Online Services"
    url: "https://learn.microsoft.com/copilot/implement/connect-to-ai-subprocessor"
    kind: "learn"
  - title: "Anthropic operated models for non-federal customers in GCC"
    url: "https://learn.microsoft.com/copilot/implement/anthropic-non-federal-gcc"
    kind: "learn"
  - title: "Assign or unassign licenses for users in the Microsoft 365 admin center"
    url: "https://learn.microsoft.com/microsoft-365/admin/manage/assign-licenses-to-users"
    kind: "learn"
  - title: "Assign Microsoft 365 licenses to user accounts with PowerShell"
    url: "https://learn.microsoft.com/microsoft-365/enterprise/assign-licenses-to-user-accounts-with-microsoft-365-powershell"
    kind: "learn"
videos: []
related: ["m365-copilot-edit-your-document-with-copilot-in-powerpoint-in-government-clouds-gcc-high","m365-copilot-edit-your-document-with-copilot-in-powerpoint-in-government-clouds","m365-copilot-copilot-in-powerpoint-for-government-clouds"]
controls:
  - governs: "Which users hold the Microsoft 365 Copilot licence this capability requires"
    scope: "user"
    ui:
      surface: "Microsoft 365 admin center"
      path: "Billing > Licenses > product > Assign licenses"
      docs: "https://learn.microsoft.com/microsoft-365/admin/manage/assign-licenses-to-users"
    api:
      kind: "powershell"
      call: "Set-MgUserLicense -UserId $userUPN -AddLicenses @{SkuId = \"<SkuId>\"} -RemoveLicenses @()"
      docs: "https://learn.microsoft.com/microsoft-365/enterprise/assign-licenses-to-user-accounts-with-microsoft-365-powershell"
    note: "Licence gates the capability per the service description. Needs License or User Administrator; PowerShell can use User.ReadWrite.All and needs a UsageLocation."
  - governs: "Which users can use Anthropic models in Copilot experiences"
    scope: "tenant"
    ui:
      surface: "Microsoft 365 admin center"
      path: "Copilot > Settings > View all > AI providers operating as Microsoft subprocessors > Available subprocessors for your organization > Anthropic > I acknowledge and agree to the above terms > Choose which users can access Anthropic models"
      docs: "https://learn.microsoft.com/copilot/implement/anthropic-non-federal-gcc"
    api: null
    note: "Non-federal GCC only; AI Administrator or Global Administrator. Governs Claude access, not Edit with Copilot as a whole. Microsoft Learn documents no API for it at the time of writing (November 2026)."
confidence: "medium"
created: "2026-11-21"
updated: "2026-11-21"
roadmapModified: "2026-09-11T22:10:10"
changes:
  - date: "2026-11-21"
    note: "New briefing: the roadmap says Edit with Copilot in Word reaches GCC, while the service description still lists it as unavailable in GCC, GCC High and DoD."
  - date: "2026-11-21"
    note: "Checked against Microsoft Learn by gpt-6.1-sol: held: 2 of 43 statements contradicted, 0 unconfirmed; taken offline until corrected"
  - date: "2026-11-21"
    note: "Corrected the Anthropic setting path (terms acknowledgement step), replaced the claim about Claude in Edit with Copilot with what the GCC page documents, and qualified the data-boundary and PowerShell permission statements."
  - date: "2026-11-21"
    note: "Checked against Microsoft Learn by gpt-6.1-sol: held: 1 of 50 statements contradicted, 0 unconfirmed; taken offline until corrected"
  - date: "2026-11-21"
    note: "Corrected the data-exposure statement and risk rationale to state Microsoft's documented government-cloud boundary and the Anthropic exception."
  - date: "2026-11-21"
    note: "Checked against Microsoft Learn by gpt-6.1-sol: passed with 0 of 39 statements not yet confirmed"
version: 3
verification:
  status: "verified-with-gaps"
  date: "2026-11-21"
  version: 3
  model: "gpt-6.1-sol"
  engine: "copilot"
  claims: 39
  confirmed: 39
  unconfirmed: 0
  contradicted: 0
  attempts: 0
  hash: "52e8a85e35f57b5479cdf535b20a3587"
---

## What's changing

The roadmap item states that Edit with Copilot in Word is available to users in Office 365 GCC, so that government customers can work with Copilot as a co-creator directly in a document to create, refine and transform it. The record lists the release phase as General Availability and the platform as Web.

The record and Microsoft Learn disagree. The roadmap item gives the status as In development with a target of October CY2026, and lists GCC, GCC High and DoD as clouds, although its description names only Office 365 GCC. The Microsoft Copilot service description, whose table shows availability as of the page's last update date, lists Edit with Copilot in Word, Excel, PowerPoint and OneNote as available in Commercial/Worldwide and as "Not currently available" in GCC, GCCH and DoD at the time of writing (November 2026). The October CY2026 target month has passed without the status changing, so treat the date as unconfirmed.

Microsoft has not stated what happens on arrival, including whether the capability is on by default or needs an administrator or user to turn it on. Microsoft Learn's government cloud overview says release timing typically lags behind commercial environments, which fits the gap between the two sources.

## Why it matters

For a government tenant this is a licensed Copilot capability that would let Copilot act directly inside Word documents, so the questions are who holds the licence, whether users may use it on your data and when it really arrives. Plan on the roadmap date being a target and on the service description table as the better guide to what is live in your cloud today.

Because Microsoft has not stated the default, base advice on no source saying existing behaviour changes: nothing in the sources says users lose or gain anything until the capability reaches your tenant. Expect licensed users to ask for it as soon as the roadmap item moves to Launched, and prepare the answer (licence, model providers, cloud) before then.

## Risk assessment

**Data exposure**

- The roadmap says Copilot works "directly in your document", so it acts on the document a user has open. Microsoft Learn's government overview says Copilot operates entirely within the customer's U.S. government cloud tenant and that prompts, responses and generated content stay in the government cloud. The GCC-specific Anthropic documentation gives an exception: when enabled, those models process Customer Data outside Microsoft's FedRAMP-authorized U.S. Government cloud.

**Security & identity**

- Access follows the Microsoft 365 Copilot licence. Assigning or removing that licence (Billing > Licenses) is the control that decides who can use the capability.
- Microsoft's Anthropic page says Claude models aren't available for federal customers in GCC or for any customers in GCC High and DoD, and that a setting exists for non-federal GCC customers from 22 July 2026. Microsoft's GCC-specific page currently documents Anthropic models only in the model picker in Copilot Chat in the Microsoft Copilot app and on the web, not in Edit with Copilot.

**Autonomy & actions**

- The roadmap says Copilot can create, refine and transform documents. It does not say whether edits are tracked, reviewable or reversible in GCC, so run a pilot and check how edits appear before telling users it is safe to accept changes.

**Change & support**

- The roadmap says the capability is available while its status is In development, and the service description says it is not currently available. Expect support tickets from licensed users who cannot find it; compare against the service description table before escalating.
- The roadmap lists Web as the platform, so desktop Word is not in the record.

## Cost and licensing

The Microsoft Copilot service description says Microsoft 365 Copilot is an add-on plan with specific licensing prerequisites, and its footnote for Edit with Copilot says "A Microsoft 365 Copilot license is required to access this feature." The licence options page says Microsoft Copilot is available as an add-on in GCC, GCC High and DoD environments for the plans it lists for US Government.

Neither of those pages states a price, and no meter or credit rate for this capability is stated on them. Indirect cost is admin time to assign licences and a pilot. A GCC-specific price for this capability is not yet published; if you need one for a budget request, ask your Microsoft account team.

## Scope

**Users and licences.** Users who hold a Microsoft 365 Copilot licence, per the service description footnote. The licence options page lists the US Government plans that are eligible for the add-on.

**Clouds.** The roadmap record lists GCC, GCC High and DoD, but its description names Office 365 GCC only. The service description lists the capability as "Not currently available" in GCC, GCCH and DoD at the time of writing (November 2026).

**Platforms and rollout.** The roadmap lists Web. Status is In development with a target of October CY2026, and a release phase of General Availability. Microsoft has not stated a rollout mechanism for government clouds.

**Roles.** A License Administrator or User Administrator, at least, assigns licences. Changing the Anthropic provider setting needs the AI Administrator or Global Administrator role.

## Governance guidance

### Before rollout

- Check the Microsoft Copilot service description feature table for your cloud before giving users a date; it currently lists Edit with Copilot as not currently available in GCC, GCCH and DoD.
- Identify which users hold a Microsoft 365 Copilot licence, using the Licenses page in the Microsoft 365 admin center, and decide whether more licences are needed.
- Watch Message center and the roadmap item for a notice that gives the rollout window and default for your cloud.

### At rollout

- Run a pilot with a small group of licensed users in Word on the web, and record how Copilot's edits appear in the document before wider communication.
- Review the AI providers operating as Microsoft subprocessors setting if you are a non-federal GCC customer, and note who in your tenant may use Anthropic models.
- Tell licensed users that the capability is described for Word on the web only in the roadmap record.

### After rollout

- Compare help-desk reports from licensed users who cannot see Edit with Copilot with the service description table before raising a Microsoft support case.
- Re-read the service description table each month until it shows the capability as available in your cloud.

## Governance controls

<p class="controls__lead">Where each control lives. The left column says what the setting decides and how far it reaches; the middle gives the admin centre and the exact path; the right gives the script, API or command that does the same. <em>Not yet documented</em> means Microsoft has not published a control for that surface, so there is nothing to configure yet.</p>

<table class="controls">
<thead><tr><th>Control</th><th>Admin UI</th><th>API and automation</th></tr></thead>
<tbody>
<tr><td data-label="Control"><strong>Which users hold the Microsoft 365 Copilot licence this capability requires</strong><br><small>User</small><br><small class="controls__note">Licence gates the capability per the service description. Needs License or User Administrator; PowerShell can use User.ReadWrite.All and needs a UsageLocation.</small></td><td data-label="Admin UI"><strong>Microsoft 365 admin center</strong><br>Billing › Licenses › product › Assign licenses <a href="https://learn.microsoft.com/microsoft-365/admin/manage/assign-licenses-to-users" rel="noopener" class="controls__docs">Learn</a></td><td data-label="API and automation"><strong>PowerShell</strong><br><code>Set-MgUserLicense -UserId $userUPN -AddLicenses @{SkuId = &quot;&lt;SkuId&gt;&quot;} -RemoveLicenses @()</code> <a href="https://learn.microsoft.com/microsoft-365/enterprise/assign-licenses-to-user-accounts-with-microsoft-365-powershell" rel="noopener" class="controls__docs">Learn</a></td></tr>
<tr><td data-label="Control"><strong>Which users can use Anthropic models in Copilot experiences</strong><br><small>Tenant</small><br><small class="controls__note">Non-federal GCC only; AI Administrator or Global Administrator. Governs Claude access, not Edit with Copilot as a whole. Microsoft Learn documents no API for it at the time of writing (November 2026).</small></td><td data-label="Admin UI"><strong>Microsoft 365 admin center</strong><br>Copilot › Settings › View all › AI providers operating as Microsoft subprocessors › Available subprocessors for your organization › Anthropic › I acknowledge and agree to the above terms › Choose which users can access Anthropic models <a href="https://learn.microsoft.com/copilot/implement/anthropic-non-federal-gcc" rel="noopener" class="controls__docs">Learn</a></td><td data-label="API and automation"><em class="controls__gap">Not yet documented</em></td></tr>
</tbody>
</table>

The first row governs who can use the capability, because Microsoft says a Microsoft 365 Copilot licence is required. Assigning licences needs at least the License Administrator or User Administrator role, and the PowerShell route can use the User.ReadWrite.All permission scope and requires a UsageLocation on each user.

The second row is a general Claude-access control, not a control over Edit with Copilot as a whole. Microsoft's GCC-specific page currently documents Anthropic models only in the model picker in Copilot Chat in the Microsoft Copilot app and on the web, not in Edit with Copilot. The setting is described for non-federal GCC customers only, and Microsoft says the option doesn't appear for federal GCC, GCC High and DoD customers.

## Open questions

- Is Edit with Copilot in Word on by default for licensed users in GCC, or does an administrator or user opt in? Watch the roadmap item and Message center.
- Which clouds does the capability reach and when: the description names GCC, the record lists GCC High and DoD, and the service description lists all three as not currently available? Watch the service description table.
- Which administrator setting, if any, turns Edit with Copilot in Word off for a government tenant without removing the Microsoft 365 Copilot licence?
- Are Copilot's edits tracked and reversible in the GCC version, and which audit events record them?

<!-- rationale
risk: Medium. Copilot would work directly in documents held in a government tenant, subject to existing Copilot licensing; Microsoft documents a government-cloud boundary for Copilot and an exception for enabled Anthropic models, and has not stated whether it arrives on by default.
cost: Medium. The service description says a Microsoft 365 Copilot licence, an add-on plan, is required for this feature; a price for it is not yet published.
impact: Medium. Users who hold a Microsoft 365 Copilot licence and work in Word on the web in a government tenant would notice it; unlicensed users would not.
-->

<!-- verifier-findings (2026-11-21, verified-with-gaps; checked by gpt-6.1-sol)
The independent check found fault only with the statements below. This is a correction: change what they name and carry the rest of the page over unchanged.
These are minor and do not hold the page. Where removing the statement, or rewording it in the words the fix gives, settles one, do that; otherwise leave it as it is. A minor finding may also add a source link it names for a statement already on the page. It adds no row and nothing that needs research.
- [supported, minor] controls[0].ui; Risk assessment: Security & identity; rendered controls table / admin-path: Microsoft 365 admin center > Billing > Licenses > product > Assign licenses reaches licence assignment; the prose also abbreviates the route to Billing > Licenses. | Found: In the admin center, go to the Billing > Licenses page. Select a product. On the product details page, select Assign licenses. | Fix: Keep controls[0].ui unchanged. Replace '(Billing > Licenses)' in Risk assessment with '(Microsoft 365 admin center > Billing > Licenses > product > Assign licenses; to remove access, select the user or group and Unassign licenses)', as documented at https://learn.microsoft.com/microsoft-365/admin/manage/assign-licenses-to-users. | Source: https://learn.microsoft.com/microsoft-365/admin/manage/assign-licenses-to-users
- [supported, minor] controls[1].ui; rendered controls table / admin-path: The printed Anthropic route follows the GCC-specific page through the terms acknowledgement and user-access section. | Found: Review the information in the Terms and conditions section, and if they're acceptable, select the I acknowledge and agree to the above terms checkbox. Under Choose which users can access Anthropic models, select All users, or specify users and groups, and then select Save. | Fix: Set controls[1].ui.path and the rendered route to 'Copilot > Settings > View all > AI providers operating as Microsoft subprocessors > Available subprocessors for your organization > Anthropic > Terms and conditions > I acknowledge and agree to the above terms > Choose which users can access Anthropic models > All users or users and groups', matching https://learn.microsoft.com/copilot/implement/anthropic-non-federal-gcc. | Source: https://learn.microsoft.com/copilot/implement/anthropic-non-federal-gcc
-->
