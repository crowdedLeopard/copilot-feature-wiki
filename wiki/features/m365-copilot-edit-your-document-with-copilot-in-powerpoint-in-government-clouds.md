---
title: "PowerPoint: edit presentations with Copilot in the DoD cloud"
slug: "m365-copilot-edit-your-document-with-copilot-in-powerpoint-in-government-clouds"
roadmapId: 566702
topic: "m365-copilot"
products: ["PowerPoint","Microsoft Copilot (Microsoft 365)"]
summary: "The roadmap lists editing decks with Copilot in PowerPoint as launched for DoD for Microsoft 365 Copilot (Premium) users, but the service description still shows it as not available there. Confirm before telling users."
status: "launched"
releasePhase: ["General Availability"]
clouds: ["DoD"]
platforms: ["Desktop","Web"]
targetDate: "October CY2026"
previewDate: null
risk: "medium"
cost: "medium"
impact: "medium"
defaultState: "unknown"
action: "review"
licensing:
  model: "add-on"
  notes: "The roadmap item says it is available to Microsoft 365 Copilot (Premium) users. The service description requires a Microsoft 365 Copilot licence, and the licence options page lists Microsoft Copilot as an add-on in DoD for eligible plans. A price is not yet published on those pages."
audiences: ["m365-admin","service-owner","security","end-user"]
tags: ["m365-copilot","powerpoint","microsoft-365-apps","licensing","dod"]
sources:
  - title: "Microsoft 365 Roadmap 566702"
    url: "https://www.microsoft.com/microsoft-365/roadmap?id=566702"
    kind: "roadmap"
  - title: "Microsoft Copilot (service description)"
    url: "https://learn.microsoft.com/office365/servicedescriptions/office-365-platform-service-description/microsoft-365-copilot"
    kind: "learn"
  - title: "License options for Microsoft Copilot"
    url: "https://learn.microsoft.com/microsoft-365/copilot/microsoft-365-copilot-licensing"
    kind: "learn"
  - title: "Microsoft Copilot overview"
    url: "https://learn.microsoft.com/copilot/plan/copilot-overview"
    kind: "learn"
  - title: "Understand Microsoft U.S. government cloud environments for Microsoft 365 and Microsoft Copilot"
    url: "https://learn.microsoft.com/copilot/plan/gov-overview"
    kind: "learn"
  - title: "Configure brand kit governance and organizational assets"
    url: "https://learn.microsoft.com/copilot/implement/configure-brand-kit-governance-organizational-assets"
    kind: "learn"
  - title: "Assign or unassign licenses for users in the Microsoft 365 admin center"
    url: "https://learn.microsoft.com/microsoft-365/admin/manage/assign-licenses-to-users"
    kind: "learn"
  - title: "Assign Microsoft 365 licenses to user accounts with PowerShell"
    url: "https://learn.microsoft.com/microsoft-365/enterprise/assign-licenses-to-user-accounts-with-microsoft-365-powershell"
    kind: "learn"
  - title: "Claude models from Anthropic in Microsoft Online Services"
    url: "https://learn.microsoft.com/microsoft-365/copilot/connect-to-ai-subprocessor"
    kind: "learn"
  - title: "Get started editing with Copilot in Office"
    url: "https://support.microsoft.com/office/copilot-frontier/get-started-editing-with-copilot-in-office"
    kind: "docs"
videos: []
related: ["m365-copilot-copilot-chat-in-onenote-can-create-edit-and-refine-content","m365-copilot-mcp-based-agent-enablement-for-u-s-government-clouds"]
controls:
  - governs: "Which users hold the Microsoft 365 Copilot licence this capability requires"
    scope: "user"
    ui:
      surface: "Microsoft 365 admin center"
      path: "Billing > Licenses > product > Assign licenses"
      docs: "https://learn.microsoft.com/microsoft-365/admin/manage/assign-licenses-to-users"
    api:
      kind: "powershell"
      call: "Set-MgUserLicense -UserId <user> -AddLicenses @{SkuId = \"<SkuId>\"} -RemoveLicenses @()"
      docs: "https://learn.microsoft.com/microsoft-365/enterprise/assign-licenses-to-user-accounts-with-microsoft-365-powershell"
    note: "Requires at least License Administrator or User Administrator. Governs access to the licensed Microsoft 365 Copilot (Premium) features, not this capability separately; removing the add-on does not remove all Basic Copilot access."
confidence: "medium"
created: "2026-11-19"
updated: "2026-11-19"
roadmapModified: "2026-11-03T00:14:11"
changes:
  - date: "2026-11-19"
    note: "New briefing: the roadmap lists the capability as launched for DoD, while the service description still shows it as not available there."
  - date: "2026-11-19"
    note: "Checked against Microsoft Learn by gpt-6.1-sol: held: 3 of 56 statements contradicted, 0 unconfirmed; taken offline until corrected"
  - date: "2026-11-19"
    note: "Corrected: Copilot licence assignment now described as governing the licensed Premium features, not all Copilot access; licence assign and remove steps fixed; brand-group checklist item removed."
  - date: "2026-11-19"
    note: "Checked against Microsoft Learn by gpt-6.1-sol: passed with 0 of 65 statements not yet confirmed"
  - date: "2026-11-21"
    note: "Checked against Microsoft Learn by gpt-6.1-sol: passed with 0 of 66 statements not yet confirmed"
  - date: "2026-11-28"
    note: "Checked against Microsoft Learn by gpt-6.1-sol: passed with 0 of 78 statements not yet confirmed"
version: 2
verification:
  status: "verified-with-gaps"
  date: "2026-11-28"
  version: 2
  model: "gpt-6.1-sol"
  engine: "copilot"
  claims: 78
  confirmed: 78
  unconfirmed: 0
  contradicted: 0
  attempts: 0
  hash: "c6d67a5490105669ca89bd76925a7af9"
---

## What's changing

The roadmap item describes Copilot in PowerPoint as a way to create, edit and refine presentations through natural language, inside the deck. A user can start a new presentation or build on an existing one by asking Copilot to generate slides, update content, improve layouts and polish design while keeping the deck's formatting, structure and branding. The item adds that Copilot can connect to a brand kit to apply branded templates, insert brand-approved images and check for brand compliance. It is listed for the DoD cloud, on Desktop and Web.

The roadmap status is Launched, with a target of October CY2026 and the release phase General Availability. Microsoft's Microsoft Copilot service description lists a row for "Edit with Copilot in Word, Excel, PowerPoint, and OneNote" and shows it as "Not currently available" for DoD (and for GCC and GCC High). The roadmap item does not name that row, so treat it as the likely match and confirm. The two sources disagree at the time of writing (November 2026), and the service description says its table shows availability as of its last update date.

Microsoft Learn has no page for this DoD release at the time of writing (November 2026), so the behaviour above is the roadmap's description. Microsoft has not stated what happens on arrival, for example whether it appears for licensed users automatically.

## Why it matters

For a DoD tenant that already pays for Microsoft Copilot, this decides whether staff can ask Copilot to build and rework decks directly in PowerPoint. Because Microsoft has not stated a default, and no source says existing behaviour changes, plan on it being available only to licensed users once it reaches your tenant, and confirm before announcing it.

The main practical risk is a mismatch of expectations: the roadmap says Launched while the service description says not available. Service owners should settle which is true for their tenant before users, or a help desk, are told either way.

## Risk assessment

**Data exposure**
- Copilot reads and rewrites the content of the open deck, and the brand kit option brings organisation assets into the deck. Microsoft's government cloud overview says Microsoft Copilot operates within the customer's U.S. government cloud tenant and that prompts, responses and generated content stay in the government cloud. That statement is about Copilot generally, not this capability.
- The brand kit governance page lists an organisation assets library as a prerequisite for brand kits. Whether brand kits work in DoD is an open question.

**Security & identity**
- Access follows the Microsoft 365 Copilot licence, which the service description says is required for this feature. Licence assignment is the control to use, and it governs access to the licensed Microsoft 365 Copilot (Premium) features, not this capability on its own; removing the add-on does not remove all Basic Copilot access ([Microsoft Copilot overview](https://learn.microsoft.com/copilot/plan/copilot-overview)).
- The roadmap item describes no change to sign-in or permissions.

**Autonomy & actions**
- A single prompt can change layouts, text and templates across many slides, and the brand compliance check is the roadmap's description. Ask users to review the result before sharing a deck outside their team.

**Change & support**
- Expect licensed users to report that the capability is missing while the service description still shows it as not available for DoD. Microsoft's government cloud overview says release timing typically lags behind commercial environments.

## Cost and licensing

The roadmap item says the capability is available to Microsoft 365 Copilot (Premium) users. The Microsoft Copilot service description says a Microsoft 365 Copilot licence is required for this feature and describes Microsoft 365 Copilot as an add-on plan with specific licensing prerequisites. The licence options page says Microsoft Copilot is available as an add-on in GCC, GCC High and DoD for the plans it lists.

The licence options page lists eligible plans and no price, and neither it nor the roadmap item names a separate meter or charge for this capability. Indirect costs are admin time to assign licences, user training and the review of generated slides.

## Scope

- **Cloud:** the roadmap item lists DoD only.
- **Platforms:** Desktop and Web, per the roadmap item.
- **Users:** Microsoft 365 Copilot (Premium) users, per the roadmap item. The licence options page lists the eligible DoD plans for the add-on.
- **Rollout:** status Launched, target October CY2026, General Availability. The service description lists DoD as not currently available for Edit with Copilot.
- **Roles:** at least License Administrator or User Administrator to assign licences.
- **Prerequisites for brand kits:** the brand kit governance page lists an organisation assets library and mail-enabled security groups for brand managers and users. Its page does not say whether these apply in DoD.

## Governance guidance

### Before rollout
- Check the Microsoft Copilot service description and Message center for the DoD status of Edit with Copilot, since it conflicts with the roadmap's Launched status.
- Review assignments in the Microsoft 365 admin center under Billing > Licenses, then select the Microsoft 365 Copilot product. For group-based assignments, inspect the group's members under Teams & groups > Active teams & groups to identify the users.

### At rollout
- Assign the Microsoft 365 Copilot licence for pilot users through Billing > Licenses > product > Assign licenses. To remove it, go to Billing > Licenses, select the product and the users or groups, then select Unassign licenses. Set-MgUserLicense can also assign or remove licences; a License Administrator or User Administrator can manage the assignments.
- Tell the pilot group to review every Copilot-generated or Copilot-edited slide before a deck is shared.

### After rollout
- Compare what pilot users see in PowerPoint on desktop and web with the service description row, and record any difference for Microsoft support.
- Re-check the service description for the DoD column when Microsoft updates it.

## Governance controls

<p class="controls__lead">Where each control lives. The left column says what the setting decides and how far it reaches; the middle gives the admin centre and the exact path; the right gives the script, API or command that does the same. <em>Not yet documented</em> means Microsoft has not published a control for that surface, so there is nothing to configure yet.</p>

<table class="controls">
<thead><tr><th>Control</th><th>Admin UI</th><th>API and automation</th></tr></thead>
<tbody>
<tr><td data-label="Control"><strong>Which users hold the Microsoft 365 Copilot licence this capability requires</strong><br><small>User</small><br><small class="controls__note">Requires at least License Administrator or User Administrator. Governs access to the licensed Microsoft 365 Copilot (Premium) features, not this capability separately; removing the add-on does not remove all Basic Copilot access.</small></td><td data-label="Admin UI"><strong>Microsoft 365 admin center</strong><br>Billing › Licenses › product › Assign licenses <a href="https://learn.microsoft.com/microsoft-365/admin/manage/assign-licenses-to-users" rel="noopener" class="controls__docs">Learn</a></td><td data-label="API and automation"><strong>PowerShell</strong><br><code>Set-MgUserLicense -UserId &lt;user&gt; -AddLicenses @{SkuId = &quot;&lt;SkuId&gt;&quot;} -RemoveLicenses @()</code> <a href="https://learn.microsoft.com/microsoft-365/enterprise/assign-licenses-to-user-accounts-with-microsoft-365-powershell" rel="noopener" class="controls__docs">Learn</a></td></tr>
</tbody>
</table>

Licence assignment is the control read for this capability. The service description requires a Microsoft 365 Copilot licence for it. It governs access to the licensed Microsoft 365 Copilot (Premium) features, not editing in PowerPoint on its own; removing the add-on does not remove all Basic Copilot access ([Microsoft Copilot overview](https://learn.microsoft.com/copilot/plan/copilot-overview)).

The brand kit governance page describes two independent policies: the Enterprise Brand Manager policy, which controls who can publish, edit and manage official brand kits, and the Restrict brand kit creation policy, which controls who can create and edit personal brand kits. To publish a personal brand kit as an official one, a user must satisfy both. Whether they apply in DoD is an open question.

## Open questions

- Is Edit with Copilot in PowerPoint available in DoD tenants now, given the roadmap's Launched status and the service description's "Not currently available"? Watch the roadmap item and the service description.
- Is there an admin setting specific to this capability in DoD, beyond Copilot licence assignment? Watch Microsoft Learn and Message center.
- Do brand kits, brand-approved images and the brand compliance check work in DoD, and do the brand kit governance policies apply there?
- Which model serves these requests in DoD? A support page on editing with Copilot in Office, written for consumer Microsoft 365 plans, says it uses Anthropic models, while Learn says Claude models are not available to DoD customers.
- What happens on arrival for licensed users: does it appear automatically? Microsoft has not stated this.

<!-- rationale
risk: Medium. Copilot rewrites and generates slide content in users' decks, and the only control read that governs it is Copilot licence assignment; Microsoft's sources disagree on whether it is available in DoD.
cost: Medium. Microsoft documents Microsoft Copilot as an add-on licence in DoD for eligible plans, so each user needs one; no separate meter or price for this capability is given.
impact: Medium. Licensed Copilot users in DoD tenants who build or revise decks will notice it; users without the add-on licence will not.
-->

<!-- verifier-findings (2026-11-28, verified-with-gaps; checked by gpt-6.1-sol)
The independent check found fault only with the statements below. This is a correction: change what they name and carry the rest of the page over unchanged.
These are minor and do not hold the page. Where removing the statement, or rewording it in the words the fix gives, settles one, do that; otherwise leave it as it is. A minor finding may also add a source link it names for a statement already on the page. It adds no row and nothing that needs research.
- [supported, minor] Risk assessment: Data exposure / behaviour: Copilot uses the context of the open presentation. | Found: It understands document context, can perform multi-step tasks, and generates or edits content directly within PowerPoint | Fix: Cite https://support.microsoft.com/topic/008f17aa-8e5f-4cda-ba6c-0588000bdad7 after the statement that Copilot reads and rewrites the open deck, and add that article to sources. Retain the DoD availability caveat. | Source: https://support.microsoft.com/topic/008f17aa-8e5f-4cda-ba6c-0588000bdad7
- [supported, minor] Risk assessment: Autonomy & actions / behaviour: One prompt can change text across multiple slides. | Found: Complex reasoning and audience adaptation: "Update slides 4-6 for a UK audience." | Fix: Cite https://support.microsoft.com/topic/008f17aa-8e5f-4cda-ba6c-0588000bdad7 after the sentence about one prompt changing multiple slides and add that article to sources. Retain the DoD availability caveat. | Source: https://support.microsoft.com/topic/008f17aa-8e5f-4cda-ba6c-0588000bdad7
- [supported, minor] Risk assessment: Autonomy & actions / behaviour: One prompt can change layouts across a presentation. | Found: Ask it to reformat your presentation to match the branded template style, applying consistent colors, fonts, and layouts throughout | Fix: Cite https://support.microsoft.com/topic/008f17aa-8e5f-4cda-ba6c-0588000bdad7 after the sentence about one prompt changing multiple slides and add that article to sources. Retain the DoD availability caveat. | Source: https://support.microsoft.com/topic/008f17aa-8e5f-4cda-ba6c-0588000bdad7
- [supported, minor] Risk assessment: Autonomy & actions / behaviour: One prompt can change presentation templates, in the sense of applying their branded styling. | Found: Ask it to reformat your presentation to match the branded template style, applying consistent colors, fonts, and layouts throughout | Fix: Replace the sentence with 'A single prompt can change text across multiple slides and apply presentation-wide layout and branded template styling; the brand compliance check is the roadmap's description.' Cite https://support.microsoft.com/topic/008f17aa-8e5f-4cda-ba6c-0588000bdad7 and add it to sources. | Source: https://support.microsoft.com/topic/008f17aa-8e5f-4cda-ba6c-0588000bdad7
-->
