---
title: "Microsoft Purview Insider Risk Management: AI prompt and response messages visible for anonymised users"
slug: "microsoft-purview-insider-risk-management-viewing-ai-interaction-messages-for-anonymized-u"
roadmapId: 560599
topic: "governance"
products: ["Microsoft Purview"]
summary: "Insider Risk Management investigators can now read the risky AI prompts and responses behind an alert even when usernames are anonymised. Review who holds the investigating role groups and tell privacy stakeholders."
status: "launched"
releasePhase: ["General Availability","Preview"]
clouds: ["Worldwide (Standard Multi-Tenant)"]
platforms: ["Web"]
targetDate: "June CY2026"
previewDate: "May CY2026"
risk: "medium"
cost: "low"
impact: "low"
defaultState: "unknown"
action: "prepare"
licensing:
  model: "included"
  notes: "The Microsoft Purview service description lists Insider Risk Management as Included in Microsoft 365 E5/A5/G5, Microsoft Purview Suite and Microsoft 365 E5/A5/F5/G5 Insider Risk Management, among others. Nothing specific to this capability is published."
audiences: ["security","compliance","service-owner"]
tags: ["insider-risk-management","purview","privacy","role-groups","auditing","ai"]
sources:
  - title: "Microsoft 365 Roadmap 560599"
    url: "https://www.microsoft.com/microsoft-365/roadmap?id=560599"
    kind: "roadmap"
  - title: "Manage username privacy in Insider Risk Management"
    url: "https://learn.microsoft.com/purview/insider-risk-management-settings-privacy"
    kind: "learn"
  - title: "Assign permissions in Insider Risk Management"
    url: "https://learn.microsoft.com/purview/insider-risk-management-permissions"
    kind: "learn"
  - title: "Review activities with the Insider Risk Management audit log"
    url: "https://learn.microsoft.com/purview/insider-risk-management-audit-log"
    kind: "learn"
  - title: "Get started with Insider Risk Management"
    url: "https://learn.microsoft.com/purview/insider-risk-management-configure"
    kind: "learn"
  - title: "Microsoft Purview service description"
    url: "https://learn.microsoft.com/office365/servicedescriptions/microsoft-365-service-descriptions/microsoft-365-tenantlevel-services-licensing-guidance/microsoft-purview-service-description"
    kind: "learn"
  - title: "Use Microsoft Purview to manage data security & compliance for Entra-registered AI apps"
    url: "https://learn.microsoft.com/purview/ai-entra-registered"
    kind: "learn"
  - title: "Investigate Microsoft Purview Insider Risk Management activities"
    url: "https://learn.microsoft.com/purview/insider-risk-management-activities"
    kind: "learn"
  - title: "Who can access and investigate Insider Risk Management alerts and cases (PowerShell)"
    url: "https://learn.microsoft.com/powershell/module/exchangepowershell/add-rolegroupmember"
    kind: "learn"
videos: []
related: ["insider-risk-management","role-groups","microsoft-purview-insider-risk-management-priority-content-support-for-risky-ai-usage","microsoft-purview-compliance-portal-insider-risk-management-generative-ai-apps-activities","auditing"]
controls:
  - governs: "Who can access and investigate Insider Risk Management alerts and cases"
    scope: "tenant"
    ui:
      surface: "Microsoft Purview portal"
      path: "Settings > Roles and groups > Roles groups > Insider Risk Management > Edit > Choose users"
      docs: "https://learn.microsoft.com/purview/insider-risk-management-permissions"
    api:
      kind: "powershell"
      call: "Add-RoleGroupMember -Identity \"Insider Risk Management\" -Member \"<user-UPN>\""
      docs: "https://learn.microsoft.com/powershell/module/exchangepowershell/add-rolegroupmember"
    note: "The Insider Risk Management Analysts and Investigators role groups can also investigate alerts. Which role groups see AI message text is not yet documented."
  - governs: "Whether usernames are shown or anonymised in Insider Risk Management alerts and cases"
    scope: "tenant"
    ui:
      surface: "Microsoft Purview portal"
      path: "Settings > Insider Risk Management > Privacy > Show anonymized versions of usernames"
      docs: "https://learn.microsoft.com/purview/insider-risk-management-settings-privacy"
    api: null
    note: "Applies to all policies. Per the roadmap item, AI prompt and response messages are viewable when anonymisation is on, so this does not hide them."
  - governs: "Setting to hide AI prompt and response text from investigators of anonymised users"
    scope: "tenant"
    ui: null
    api: null
  - governs: "Record of actions investigators take in Insider Risk Management"
    scope: "tenant"
    ui:
      surface: "Microsoft Purview portal"
      path: "Insider Risk Management > Insider risk audit log"
      docs: "https://learn.microsoft.com/purview/insider-risk-management-audit-log"
    api: null
    note: "Kept for 180 days; export to CSV from the page. Viewing and exporting needs the Insider Risk Management or Insider Risk Management Auditors role group."
confidence: "medium"
created: "2026-11-27"
updated: "2026-11-27"
roadmapModified: "2026-06-16T23:00:10"
changes:
  - date: "2026-11-27"
    note: "New briefing: AI prompt and response messages viewable for anonymised users in Insider Risk Management, with role-group, privacy and audit-log controls."
  - date: "2026-11-27"
    note: "Checked against Microsoft Learn by gpt-6.1-sol: held: 0 of 47 statements contradicted, 2 unconfirmed; taken offline until corrected"
  - date: "2026-11-27"
    note: "Corrected two statements: Autonomy & actions now gives only the roadmap's description, and Scope now says Microsoft has not documented which role groups can read AI interaction messages for anonymised users."
  - date: "2026-11-27"
    note: "Checked against Microsoft Learn by gpt-6.1-sol: passed: all 47 statements confirmed"
version: 2
verification:
  status: "verified"
  date: "2026-11-27"
  version: 2
  model: "gpt-6.1-sol"
  engine: "copilot"
  claims: 47
  confirmed: 47
  unconfirmed: 0
  contradicted: 0
  attempts: 0
  hash: "64c8d30efc9f51e74066c09111475be1"
---

## What's changing

Insider Risk Management (the Microsoft Purview solution that scores risky user activity and raises alerts and cases) now lets analysts open the risky AI prompts and responses behind an alert even when the tenant shows anonymised usernames. The roadmap item states that customers "can now access and review the underlying risky prompt and response interactions generated by users during AI usage, even when user anonymization is enabled", so that anonymised investigations do not limit visibility into AI activity.

Microsoft Learn does not describe this capability yet, so what follows about its behaviour is the roadmap's description. The anonymisation it works alongside is documented: with **Show anonymized versions of usernames** selected, a user such as 'Grace Taylor' appears as a pseudonym such as 'AnonIS8-988' throughout Insider Risk Management, and the setting applies to all policies. Learn already notes that names inside the metadata of an activity and within the content of files in Content explorer are not anonymised. Microsoft has not stated whether the new message view needs any setting to be turned on.

The roadmap item is **Launched**, with a preview date of May CY2026 and a target date of June CY2026, release phases General Availability and Preview, on the Web, for Worldwide (Standard Multi-Tenant).

## Why it matters

Pseudonymisation is the safeguard many organisations rely on when their works council, privacy office or legal team agrees to insider risk monitoring: analysts judge the activity before they learn who did it. The text of a Copilot prompt or response often names its author, colleagues or customers, so this change weakens that separation for AI alerts. Expect an investigator to be able to work out who an anonymised user is from the messages alone.

Microsoft has not stated what happens on arrival. Because the roadmap describes the capability as available now, plan as if it is already in place for anyone who can investigate alerts, and check that the people in those role groups, and the privacy commitments made about the tool, still fit.

## Risk assessment

**Data exposure**
- Investigators see the full prompt and response text of risky AI interactions, not only the signal that triggered the alert. Who can open alerts is set by role-group membership (see the controls table); Learn does not yet say which of the alert-investigating role groups sees the messages.
- For AI apps registered in Microsoft Entra, Learn states that Insider Risk Management needs a collection policy for prompts and responses, so whether there is message text to show for those apps depends on the tenant's collection policies.

**Security & identity**
- Anonymisation of usernames is limited in places already: Learn states that it is not preserved for alerts exported through the exporting API or to Microsoft Purview eDiscovery. AI message text adds another place where identity can surface.

**Autonomy & actions**
- The roadmap describes this capability as access to and review of underlying risky AI prompt and response interactions.

**Change & support**
- Privacy notices, works council agreements or internal procedures that describe Insider Risk Management as pseudonymised may now overstate what anonymisation hides. Expect questions from privacy and HR stakeholders rather than from end users.

## Cost and licensing

- **Licence:** the Microsoft Purview service description lists Insider Risk Management as **Included** in Microsoft 365 E5/A5/G5, Microsoft Purview Suite/EDU/GOV/FLW and Microsoft Defender + Purview Suite FLW, and Microsoft 365 E5/A5/F5/G5 Insider Risk Management. This capability is part of Insider Risk Management investigations.
- **Meter:** Microsoft publishes no separate price or meter for viewing AI interaction messages. The Insider Risk Management getting-started page states that some indicators are only available if the organisation enables the pay-as-you-go billing model.
- **Indirect costs:** admin time to review role-group membership and to update privacy documentation.

## Scope

- **Who can investigate alerts:** members of role groups that can access and investigate alerts: *Insider Risk Management*, *Insider Risk Management Analysts* and *Insider Risk Management Investigators*, according to the permissions page. Of these, *Insider Risk Management* and *Insider Risk Management Investigators* can also open Content explorer. Microsoft has not documented which of these role groups can read the new AI interaction messages for anonymised users.
- **Which users' activity:** users with Insider Risk Management alerts from AI usage, in tenants where **Show anonymized versions of usernames** is selected.
- **Cloud:** Worldwide (Standard Multi-Tenant), as the roadmap record lists it.
- **Platform:** Web (Microsoft Purview portal).
- **Prerequisites:** an Insider Risk Management policy that raises alerts on AI activity; for AI apps registered in Microsoft Entra, Learn states a collection policy is needed for prompts and responses.

## Governance guidance

### Before rollout
- Review membership of the *Insider Risk Management*, *Insider Risk Management Analysts* and *Insider Risk Management Investigators* role groups in the Microsoft Purview portal, since these can access and investigate alerts.
- Brief the privacy office, works council or legal team that anonymised AI alerts now show prompt and response text, and record their decision.
- Update internal documentation that describes Insider Risk Management as hiding identities from investigators.

### At rollout
- Confirm the **Privacy** setting under Insider Risk Management settings shows the option your organisation agreed.
- Open a risky AI usage alert for an anonymised user with a test investigator account and check what message text appears.

### After rollout
- Review the Insider risk audit log for alert and case views by investigators, and export it before the 180-day retention ends if you need a longer record.
- Remove role-group members who no longer investigate, and allow up to 30 minutes for changes to apply.
- Watch the Insider Risk Management documentation for a page describing this message view and any setting that governs it.

## Governance controls

<p class="controls__lead">Where each control lives. The left column says what the setting decides and how far it reaches; the middle gives the admin centre and the exact path; the right gives the script, API or command that does the same. <em>Not yet documented</em> means Microsoft has not published a control for that surface, so there is nothing to configure yet.</p>

<table class="controls">
<thead><tr><th>Control</th><th>Admin UI</th><th>API and automation</th></tr></thead>
<tbody>
<tr><td data-label="Control"><strong>Who can access and investigate Insider Risk Management alerts and cases</strong><br><small>Tenant</small><br><small class="controls__note">The Insider Risk Management Analysts and Investigators role groups can also investigate alerts. Which role groups see AI message text is not yet documented.</small></td><td data-label="Admin UI"><strong>Microsoft Purview portal</strong><br>Settings › Roles and groups › Roles groups › Insider Risk Management › Edit › Choose users <a href="https://learn.microsoft.com/purview/insider-risk-management-permissions" rel="noopener" class="controls__docs">Learn</a></td><td data-label="API and automation"><strong>PowerShell</strong><br><code>Add-RoleGroupMember -Identity &quot;Insider Risk Management&quot; -Member &quot;&lt;user-UPN&gt;&quot;</code> <a href="https://learn.microsoft.com/powershell/module/exchangepowershell/add-rolegroupmember" rel="noopener" class="controls__docs">Learn</a></td></tr>
<tr><td data-label="Control"><strong>Whether usernames are shown or anonymised in Insider Risk Management alerts and cases</strong><br><small>Tenant</small><br><small class="controls__note">Applies to all policies. Per the roadmap item, AI prompt and response messages are viewable when anonymisation is on, so this does not hide them.</small></td><td data-label="Admin UI"><strong>Microsoft Purview portal</strong><br>Settings › Insider Risk Management › Privacy › Show anonymized versions of usernames <a href="https://learn.microsoft.com/purview/insider-risk-management-settings-privacy" rel="noopener" class="controls__docs">Learn</a></td><td data-label="API and automation"><em class="controls__gap">Not yet documented</em></td></tr>
<tr><td data-label="Control"><strong>Setting to hide AI prompt and response text from investigators of anonymised users</strong><br><small>Tenant</small></td><td data-label="Admin UI"><em class="controls__gap">Not yet documented</em></td><td data-label="API and automation"><em class="controls__gap">Not yet documented</em></td></tr>
<tr><td data-label="Control"><strong>Record of actions investigators take in Insider Risk Management</strong><br><small>Tenant</small><br><small class="controls__note">Kept for 180 days; export to CSV from the page. Viewing and exporting needs the Insider Risk Management or Insider Risk Management Auditors role group.</small></td><td data-label="Admin UI"><strong>Microsoft Purview portal</strong><br>Insider Risk Management › Insider risk audit log <a href="https://learn.microsoft.com/purview/insider-risk-management-audit-log" rel="noopener" class="controls__docs">Learn</a></td><td data-label="API and automation"><em class="controls__gap">Not yet documented</em></td></tr>
</tbody>
</table>

Microsoft Learn documents no setting that hides AI prompt and response text from investigators while usernames stay anonymised (November 2026); the **Privacy** setting offers two options, to show anonymised usernames or not. Role-group membership is therefore the working control. Members of the Microsoft Entra ID *Global Administrator* and *Compliance Administrator* roles and the Microsoft Purview *Organization Management* and *Compliance Administrator* role groups can assign users to Insider Risk Management role groups and hold the permissions of *Insider Risk Management Admins*. Administrative units scope analysts and investigators to a set of users for alerts and cases, but the permissions page lists Content explorer access as unrestricted for scoped investigators. The Insider risk audit log is separate from the Microsoft 365 audit log, is turned on automatically and cannot be disabled; *Insider Risk Management* and *Insider Risk Management Auditors* can view and export it. See /concepts/role-groups/ and /concepts/insider-risk-management/.

## Open questions

- Which Insider Risk Management role groups can open the AI prompt and response messages for an anonymised user: all alert investigators, or only those with Content explorer access? Watch the permissions page.
- Does the Insider risk audit log record each time an investigator opens an AI interaction message, or only the alert view?
- Will Microsoft add a setting to keep AI message text hidden while usernames are anonymised, for organisations whose privacy agreements require it?
- Which AI apps' interactions does the message view cover, and does it depend on a collection policy capturing prompts and responses for each app?

<!-- rationale
risk: Medium. Pseudonymised investigations now show the full text of users' AI prompts and responses, which can identify the person; membership of the Insider Risk Management role groups is the documented control over who investigates alerts.
cost: Low. Insider Risk Management is included in the licences the Microsoft Purview service description lists; no separate charge for this capability is published, so the cost is admin time on role reviews and privacy sign-off.
impact: Low. Only Insider Risk Management analysts and investigators see the change; end users notice nothing.
-->
