---
title: "Microsoft 365 Copilot: share a chat session or a single response by link"
slug: "m365-copilot-session-and-response-sharing-in-m365-copilot"
roadmapId: 562353
topic: "m365-copilot"
products: ["Microsoft Copilot (Microsoft 365)"]
summary: "Users can share a whole Copilot conversation or one response as a read-only link. It is on by default; an admin can turn it off for the whole tenant in the Microsoft 365 admin center, but not for chosen groups."
status: "launched"
releasePhase: ["General Availability"]
clouds: ["Worldwide (Standard Multi-Tenant)"]
platforms: ["Android","Desktop","Mac","Teams and Surface Devices","Web"]
targetDate: "August CY2026"
previewDate: null
risk: "medium"
cost: "low"
impact: "high"
defaultState: "on"
action: "act-now"
licensing:
  model: "unknown"
  notes: "Not yet published for this feature. The Learn page on managing sharing lists admin roles as its only prerequisites and names no licence; MC1461700 says all Microsoft 365 Copilot users are affected."
audiences: ["m365-admin","security","compliance","change-adoption"]
tags: ["m365-copilot","copilot","sharing","admin-controls","m365-admin-center","sensitivity-labels","auditing","privacy"]
sources:
  - title: "Microsoft 365 Roadmap 562353"
    url: "https://www.microsoft.com/microsoft-365/roadmap?id=562353"
    kind: "roadmap"
  - title: "Manage content sharing for Microsoft Copilot"
    url: "https://learn.microsoft.com/copilot/manage/microsoft-copilot-manage-content-sharing"
    kind: "learn"
  - title: "Share conversations and responses in Microsoft Copilot"
    url: "https://support.microsoft.com/microsoft-365-copilot/share-conversations-responses-in-microsoft-copilot"
    kind: "docs"
  - title: "copilotPolicySetting resource type"
    url: "https://learn.microsoft.com/microsoft-365/copilot/extensibility/api/admin-settings/resources/copilotpolicysetting"
    kind: "learn"
  - title: "Microsoft Copilot requirements"
    url: "https://learn.microsoft.com/copilot/plan/microsoft-copilot-requirements"
    kind: "learn"
  - title: "MC1461700"
    url: "https://admin.microsoft.com/Adminportal/Home#/MessageCenter/:/messages/MC1461700"
    kind: "message-center"
videos: []
related: []
controls:
  - governs: "Whether users can share Copilot sessions and responses"
    scope: "tenant"
    ui:
      surface: "Microsoft 365 admin center"
      path: "Copilot > Settings > Copilot sharing > Allow users to share Copilot responses > Save"
      docs: "https://learn.microsoft.com/copilot/manage/microsoft-copilot-manage-content-sharing"
    api: null
    note: "AI Admin edits, AI Reader views. Turned on by default. MC1461700 labels it Allow users to share Copilot sessions and responses."
  - governs: "Sharing for specific users or groups only"
    scope: "group"
    ui: null
    api: null
    note: "MC1461700 says the control cannot be scoped to specific users or groups."
confidence: "high"
created: "2026-11-17"
updated: "2026-11-17"
roadmapModified: "2026-10-26T23:15:50"
changes:
  - date: "2026-11-17"
    note: "First briefing for this item: sharing is on by default and has one tenant-wide switch in the Microsoft 365 admin center."
  - date: "2026-11-17"
    note: "Checked against Microsoft Learn by gpt-6.1-sol: passed with 0 of 56 statements not yet confirmed"
  - date: "2026-11-24"
    note: "Checked against Microsoft Learn by gpt-6.1-sol: passed with 0 of 72 statements not yet confirmed"
version: 1
verification:
  status: "verified-with-gaps"
  date: "2026-11-24"
  version: 1
  model: "gpt-6.1-sol"
  engine: "copilot"
  claims: 72
  confirmed: 69
  unconfirmed: 0
  contradicted: 3
  attempts: 0
  hash: "4340331f0f90450f9a4bd2bf59940c3b"
---

## What's changing

Microsoft 365 Copilot users can share Copilot chat content through a link. Session sharing shares a whole conversation, including all prompts and responses. Response sharing shares a single response together with the prompt that produced it. The roadmap item describes the shared content as opening in a read-only view from which recipients can continue in their own Copilot chat.

Microsoft Learn describes shared content as a snapshot. A recipient who continues from it gets a separate copy in their own chat history, and neither side sees the other's later changes. Learn's end-user page says a work or school account's link can be opened by anyone in the organisation who has it and signs in with a work or school account. MC1461700 adds that messages added after sharing remain private and are not in the shared session.

Sharing does not widen access to anything the chat referenced. Learn says recipients get no access to files, emails, chats, meetings or other Microsoft 365 content mentioned in a conversation, and that existing Microsoft 365 permissions still apply.

The roadmap record lists the item as Launched, General Availability, with a target of August CY2026, for Worldwide (Standard Multi-Tenant) on Android, Desktop, Mac, Teams and Surface Devices, and Web. MC1461700 (last updated 8 September 2026) says rollout would begin in late August 2026 and was expected to complete by late September 2026 (previously early September), and states that the feature is enabled by default. Learn gives the same default: Copilot sharing is turned on by default.

## Why it matters

This is a new way for Copilot output to leave the person who asked for it, and it is on without an administrator choosing it. A shared link carries the prompts and responses in it, so a summary of a confidential project or a draft built from sensitive material can be passed on with one link. Microsoft's pages say recipients still need their own permissions to open referenced files, mail and meetings, so the exposure is the Copilot text itself, not the sources behind it.

If nobody acts, sharing stays on for every user. Administrators who want it off have one tenant-wide switch; MC1461700 states that it cannot be scoped to specific users or groups. The decision is therefore whole-organisation: allow it and tell users how to manage links, or turn it off.

## Risk assessment

**Data exposure**

- A shared session or response exposes the prompts and responses in it to anyone who opens the link. Learn's end-user page says anyone who opens a sharing link can view them, and that a work or school account's link can be opened by anyone in the organisation who has it and signs in.
- Referenced content is not exposed by sharing. Learn says recipients get no access to referenced files, emails, chats or meetings, and existing Microsoft 365 permissions still apply. Text Copilot has already quoted from those sources is part of the response, so it travels with the link.
- Learn says the sharing setting also controls whether users can share content with lower-sensitivity labels, such as General or Public, or no sensitivity label. Its end-user page adds that some conversations or responses might not be available to share because of sharing policies or sensitivity label protections. Learn does not say which policies or labels.

**Security & identity**

- Recipients must sign in before they can view shared content, per Learn's end-user page. The same page says that for a link shared from a personal Microsoft account, anyone the link is shared with can open it by signing in with their Microsoft account.
- A user can stop sharing a link in Copilot under Settings > Data controls > Shared links, and Learn says deleting the original conversation also stops its links working.

**Autonomy & actions**

- No change documented: sharing is started by a user, link by link. Microsoft Learn describes no automatic sharing.

**Change & support**

- Expect questions from users because the Share option appears by default. Turning the setting off removes the Share option, including from the More options menu for a meeting, and applies to new sharing attempts only; Learn says existing recipient copies are not affected.
- The admin setting is labelled differently in MC1461700 and on Learn (see the controls notes), which can confuse admins following either.

## Cost and licensing

Microsoft has not published a licence or meter specific to this feature. The Learn page on managing Copilot sharing lists admin roles (AI Reader to view, AI Admin to edit) as its prerequisites and names no licence. MC1461700 says the affected audience is all Microsoft 365 Copilot users and does not mention a charge. No Copilot Credits or other meter is documented for sharing at the time of writing (November 2026).

The indirect cost is admin and communication time: deciding whether to leave the default, telling users how links behave, and reviewing audit records if sharing needs investigating. For the general licence requirements of the Microsoft Copilot app, see Learn's Microsoft Copilot requirements page; that page does not mention sharing.

## Scope

**Who is affected.** MC1461700 says all Microsoft 365 Copilot users. Learn says the settings apply to Copilot sharing in the Microsoft Copilot app and Microsoft 365 apps.

**Clouds and platforms.** The roadmap record lists Worldwide (Standard Multi-Tenant) only, and Android, Desktop, Mac, Teams and Surface Devices, and Web. The record does not list the US Government clouds; no page read says sharing is unavailable there.

**Roles.** Learn names AI Reader to view the sharing settings and AI Admin to edit them, with access to the Microsoft 365 admin center.

**Rollout.** Status Launched, General Availability. MC1461700 gave a rollout window from late August 2026 to late September 2026 and set no act-by date.

**Recipients.** MC1461700 says links are for others in the same organisation. Learn's end-user page describes the same for work or school accounts.

## Governance guidance

### Before rollout

- Decide whether your organisation allows sharing of Copilot sessions and responses, and record the decision with the AI Admin who owns the setting.
- Check which teams handle material you would not want passed on as Copilot text, and ask whether your sensitivity label setup is relevant, since Learn says the sharing setting also controls sharing of content with lower-sensitivity labels or none.
- Confirm the AI Reader and AI Admin role holders can open Copilot > Settings > Copilot sharing in the Microsoft 365 admin center.

### At rollout

- Leave **Allow users to share Copilot responses** selected if you want sharing, or clear it and select Save to remove the Share option for everyone, noting there is no per-group scoping.
- Tell users that a link shows the prompts and responses in it, that referenced files still follow their own permissions, and that Copilot > Settings > Data controls > Shared links lets them stop sharing a link.
- Allow time for a changed setting to take effect; Learn says changes apply to new sharing attempts after Save.

### After rollout

- Review Microsoft Purview audit records for sharing events, link access and blocked sharing attempts, which Learn says Purview records.
- Revisit the decision when Microsoft answers the open questions below, particularly on scoping and on audit event names.

## Governance controls

<p class="controls__lead">Where each control lives. The left column says what the setting decides and how far it reaches; the middle gives the admin centre and the exact path; the right gives the script, API or command that does the same. <em>Not yet documented</em> means Microsoft has not published a control for that surface, so there is nothing to configure yet.</p>

<table class="controls">
<thead><tr><th>Control</th><th>Admin UI</th><th>API and automation</th></tr></thead>
<tbody>
<tr><td data-label="Control"><strong>Whether users can share Copilot sessions and responses</strong><br><small>Tenant</small><br><small class="controls__note">AI Admin edits, AI Reader views. Turned on by default. MC1461700 labels it Allow users to share Copilot sessions and responses.</small></td><td data-label="Admin UI"><strong>Microsoft 365 admin center</strong><br>Copilot › Settings › Copilot sharing › Allow users to share Copilot responses › Save <a href="https://learn.microsoft.com/copilot/manage/microsoft-copilot-manage-content-sharing" rel="noopener" class="controls__docs">Learn</a></td><td data-label="API and automation"><em class="controls__gap">Not yet documented</em></td></tr>
<tr><td data-label="Control"><strong>Sharing for specific users or groups only</strong><br><small>Group</small><br><small class="controls__note">MC1461700 says the control cannot be scoped to specific users or groups.</small></td><td data-label="Admin UI"><em class="controls__gap">Not yet documented</em></td><td data-label="API and automation"><em class="controls__gap">Not yet documented</em></td></tr>
</tbody>
</table>

The tenant-wide switch is the only documented admin control for this feature. It governs session and response sharing for the whole organisation, so turning it off removes sharing for every user; MC1461700 states the control cannot be scoped through Entra ID groups or other user or group targeting.

Label mismatch: MC1461700 names the control Copilot session and response sharing with the setting Allow users to share Copilot sessions and responses, while Learn's page names it Copilot sharing with Allow users to share Copilot responses. The table follows Learn's steps; check what your tenant shows.

At the time of writing (November 2026) Microsoft Learn documents no API for this setting: the Microsoft Graph copilotPolicySetting list of supported settings lists five settings, none of them sharing, and the Learn page on managing Copilot sharing gives admin centre steps only.

Microsoft Purview records sharing activity according to Learn, but the page read gives no audit operation names and no portal path, so no control row is given for it.

## Open questions

- Which label does the admin center show for the setting, "Copilot sharing > Allow users to share Copilot responses" as on Learn, or "Copilot session and response sharing > Allow users to share Copilot sessions and responses" as in MC1461700? Watch the Learn page and Message center.
- Will Microsoft offer scoping of sharing to groups or users? MC1461700 says the control cannot be scoped today.
- Which sharing policies and sensitivity labels block sharing, and how do they interact with the tenant switch? Learn says only that the setting also controls sharing of lower-sensitivity or unlabelled content.
- What are the audit operation names and where do they appear in Microsoft Purview for sharing, link access and blocked attempts?
- Is a licence or meter specific to sharing planned? None is published at the time of writing.

<!-- rationale
risk: Medium. Sharing is on by default and a link lets recipients read the prompts and responses in it, but it grants no access to referenced files, mail or meetings, and one tenant-wide switch can turn it off.
cost: Low. The only cost the sources show is admin time to decide on the setting and tell users; Microsoft Learn names no licence or meter for this feature at the time of writing (November 2026).
impact: High. Microsoft's notice MC1461700 says all Microsoft 365 Copilot users are affected and that the feature is enabled by default, so a Share option appears for users without an admin acting.
-->

<!-- verifier-findings (2026-11-24, verified-with-gaps; checked by gpt-6.1-sol)
The independent check found fault only with the statements below. This is a correction: change what they name and carry the rest of the page over unchanged.
These are minor and do not hold the page. Where removing the statement, or rewording it in the words the fix gives, settles one, do that; otherwise leave it as it is. A minor finding may also add a source link it names for a statement already on the page. It adds no row and nothing that needs research.
- [supported, minor] title; What's changing; unattributed running prose / behaviour: The briefing calls the product Microsoft 365 Copilot. | Found: Microsoft 365 Copilot is now named Microsoft Copilot, and Microsoft 365 Copilot Chat is now named Microsoft Copilot Chat. | Fix: Use 'Microsoft Copilot' in the title and unattributed running prose; retain the original name when reporting the roadmap record or MC1461700. | Source: https://learn.microsoft.com/copilot/plan/microsoft-copilot-requirements
- [supported, minor] front matter: licensing.model, licensing.notes; Cost and licensing / licensing: Licensing is unknown because no licence specific to sharing has been published. | Found: Microsoft Copilot | Users need a Microsoft Copilot license and a qualifying prerequisite license. | Fix: Set licensing.model to 'included'. Begin licensing.notes and Cost and licensing with: 'For Microsoft Copilot, users need a Microsoft Copilot license and a qualifying prerequisite license. Microsoft has not published a licence specific to sharing.' Retain the cited requirements URL and the narrower absence. | Source: https://learn.microsoft.com/copilot/plan/microsoft-copilot-requirements
- [contradicted, minor] Governance guidance: Before rollout; Governance controls table / consistency: The checklist asks admins to check sensitivity label setup, but the controls table has no corresponding row. | Found: Checklist: 'ask whether your sensitivity label setup is relevant'. Table rows: 'Whether users can share Copilot sessions and responses' and 'Sharing for specific users or groups only'. | Fix: Remove the Before rollout bullet beginning 'Check which teams handle material'; its sensitivity-label review has no corresponding controls-table row.
- [contradicted, minor] Governance guidance: At rollout; Governance controls table / consistency: The checklist directs users to shared-link management, but that control has no table row. | Found: Checklist: 'Copilot > Settings > Data controls > Shared links lets them stop sharing a link'. Table rows cover only the tenant sharing switch and unavailable user/group scoping. | Fix: Remove ', and that Copilot > Settings > Data controls > Shared links lets them stop sharing a link' from the At rollout communication bullet; leave its other advice and the explanatory Security & identity text unchanged.
- [contradicted, minor] Governance guidance: After rollout; Governance controls table / consistency: The checklist asks admins to review Purview audit records, but audit review has no table row. | Found: Checklist: 'Review Microsoft Purview audit records for sharing events, link access and blocked sharing attempts'. Table rows cover only the tenant sharing switch and unavailable user/group scoping. | Fix: Remove the After rollout bullet beginning 'Review Microsoft Purview audit records'; the requested audit review has no corresponding controls-table row.
-->
