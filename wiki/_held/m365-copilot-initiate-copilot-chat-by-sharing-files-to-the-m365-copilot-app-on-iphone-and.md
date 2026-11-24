---
title: "Microsoft 365 Copilot: share files from iPhone and iPad apps to start a Copilot Chat"
slug: "m365-copilot-initiate-copilot-chat-by-sharing-files-to-the-m365-copilot-app-on-iphone-and"
roadmapId: 500633
topic: "m365-copilot"
products: ["Microsoft Copilot (Microsoft 365)"]
summary: "On iPhone and iPad, sharing a Word, Excel or PowerPoint file to the Microsoft 365 Copilot app uploads it to Copilot Chat. Users choose to do it; Microsoft Learn documents no setting specific to this share path."
status: "launched"
releasePhase: ["General Availability"]
clouds: ["Worldwide (Standard Multi-Tenant)"]
platforms: ["iOS"]
targetDate: "October CY2025"
previewDate: "September CY2025"
risk: "low"
cost: "low"
impact: "low"
defaultState: "user-opt-in"
action: "review"
licensing:
  model: "included"
  notes: "Learn says Copilot Chat (Basic) is included with eligible Microsoft 365 licences and that users with a Copilot licence get the full Microsoft Copilot app experience. A licence or meter specific to this feature is not yet published."
audiences: ["m365-admin","security","end-user","change-adoption"]
tags: ["m365-copilot","copilot-chat","file-upload","mobile"]
sources:
  - title: "Microsoft 365 Roadmap 500633"
    url: "https://www.microsoft.com/microsoft-365/roadmap?id=500633"
    kind: "roadmap"
  - title: "Microsoft Copilot overview"
    url: "https://learn.microsoft.com/copilot/plan/copilot-overview"
    kind: "learn"
  - title: "Get started with the Microsoft Copilot app"
    url: "https://learn.microsoft.com/copilot/plan/copilot-app-overview"
    kind: "learn"
  - title: "Manage Copilot Chat"
    url: "https://learn.microsoft.com/copilot/manage/manage-copilot-chat"
    kind: "learn"
  - title: "Apps for Microsoft 365 that work across application hosts"
    url: "https://learn.microsoft.com/microsoft-365/admin/manage/teams-apps-work-on-outlook-and-m365"
    kind: "learn"
  - title: "How to Manage Data Transfer Between iOS Apps in Microsoft Intune"
    url: "https://learn.microsoft.com/intune/app-management/protection/manage-data-transfer-ios"
    kind: "learn"
videos: []
related: ["m365-copilot-copilot-extensibility-users-will-be-able-to-upload-files-stored-locally-or-in","m365-copilot-capture-voice-notes-in-the-m365-copilot-mobile-app","app-management"]
controls:
  - governs: "Whether the Copilot app, and so its share target, is available in the tenant"
    scope: "tenant"
    ui:
      surface: "Microsoft 365 admin center"
      path: "Settings > Integrated Apps > Available Apps > app > Block app"
      docs: "https://learn.microsoft.com/microsoft-365/admin/manage/teams-apps-work-on-outlook-and-m365"
    api: null
    note: "Page says Global Admins only. Blocks the whole Copilot app experience, not just this share path; no setting specific to this share path is documented."
  - governs: "A switch for sharing files into Copilot Chat from other iOS apps"
    scope: "user"
    ui: null
    api: null
    note: "No setting specific to this feature is documented at the time of writing (November 2026)."
confidence: "medium"
created: "2026-11-24"
updated: "2026-11-24"
roadmapModified: "2026-06-09T23:15:32"
changes:
  - date: "2026-11-24"
    note: "New briefing: sharing Word, Excel and PowerPoint files from iPhone and iPad apps to the Copilot app starts a Copilot Chat; launched per the roadmap, no feature-specific admin setting documented."
  - date: "2026-11-24"
    note: "Checked against Microsoft Learn by gpt-6.1-sol: held: 3 of 34 statements contradicted, 1 unconfirmed; taken offline until corrected"
version: 1
verification:
  status: "held"
  date: "2026-11-24"
  version: 1
  model: "gpt-6.1-sol"
  engine: "copilot"
  claims: 34
  confirmed: 30
  unconfirmed: 1
  contradicted: 3
  attempts: 1
  hash: "cdfe8fedcc590ea7a4c8d560a673a636"
---

## What's changing

Users on iPhone and iPad can now start a Copilot Chat by sharing a file to the Microsoft 365 Copilot app. The roadmap item states that when a user shares a Word, Excel or PowerPoint file from a third-party app (including Files) and chooses Microsoft 365 Copilot as the target app, the file is uploaded to chat. The user can then open a preview of the file or continue the conversation with Copilot Chat.

The roadmap item lists status Launched, a target date of October CY2025 and a preview date of September CY2025. The release phase is General Availability, the platform is iOS, and the only cloud listed is Worldwide (Standard Multi-Tenant). No Message Center post was supplied for this item.

Microsoft Learn has no page for this feature that was found at the time of writing (November 2026), so what the briefing says about its behaviour is the roadmap's description. Learn now says the Microsoft 365 Copilot app is called Microsoft Copilot; the roadmap item still uses the older name.

## Why it matters

This adds a way for work files held in other apps on a phone or tablet to reach Copilot Chat, so the question for a service owner is whether that path fits your data-handling rules. Learn documents uploading a file as one way to give Copilot Chat organisational content, so the capability itself is not new; the share route from third-party apps is.

Microsoft has not stated a default beyond the roadmap's description that a user chooses the share action, so the page rates the default as user-opt-in. If nobody acts, no source says existing behaviour changes: users who already have the app and choose to share a file will use it. Plan a short user message and a test on a managed device rather than a tenant-wide change.

## Risk assessment

**Data exposure**
- The roadmap says a shared file is uploaded to chat, so the content of a Word, Excel or PowerPoint file leaves a third-party app and enters Copilot Chat. Learn says users with Microsoft Entra accounts get Enterprise Data Protection for prompts and responses. Confirm which account (work or personal) receives a shared file before relying on that protection.

**Security & identity**
- Learn says chats, files and protections stay separate by the account the user signs in with, and that users should sign in with their work or school account to receive enterprise protections. Which account a shared file goes to is not described.
- Intune documents a Receive data from other apps setting for iOS app protection policies; Learn does not say whether it governs the Copilot app's share target.

**Autonomy & actions**
- No change documented: the roadmap describes an upload the user starts, followed by a preview or a conversation the user continues.

**Change & support**
- Expect questions from iPhone and iPad users about where a shared file goes and which account it uses. The only tenant control documented is blocking the Copilot app in Integrated Apps, which removes the whole app rather than this route.

## Cost and licensing

**Licence.** Learn says Copilot Chat (Basic) is the standalone baseline experience included with eligible Microsoft 365 licences, and that users with a Copilot licence get the full Microsoft Copilot app experience. The roadmap item names no licence for this feature, and no page read gives a licence or meter specific to it.

**Meter.** A credit rate or meter specific to sharing a file to the app is not yet published. Admin time to brief users and test the path is the only cost the sources show.

## Scope

The roadmap item lists iOS as the platform, which the item describes as iPhone and iPad, General Availability as the release phase and Worldwide (Standard Multi-Tenant) as the only cloud. It lists no other cloud, which is a record fact and not a statement that the feature is unavailable elsewhere.

The roadmap names Word, Excel and PowerPoint files shared from a third-party app, including Files. Users need the Microsoft Copilot app on the device; Learn's overview of the app describes iOS devices as a supported client. The roadmap names no role or prerequisite for administrators.

## Governance guidance

### Before rollout
- Decide with your security team whether work files in third-party iPhone and iPad apps may be shared into Copilot Chat, and write the answer into your user guidance.
- Tell users to sign in to the Microsoft Copilot app with their work or school account so they receive enterprise protections, and to look for the Work label and the green data protection shield.

### At rollout
- Test sharing a Word, Excel and PowerPoint file from the Files app on a managed iPhone or iPad, and record which account the file lands in.
- Check whether your Intune app protection policy for iOS changes what the test does, and record the result for your service desk.

### After rollout
- Decide whether blocking the Copilot app is acceptable if the test shows files reaching an account you do not want to receive them.
- Watch the Learn page for the Copilot app and Message center for a page or setting specific to this share path.

## Governance controls

<p class="controls__lead">Where each control lives. The left column says what the setting decides and how far it reaches; the middle gives the admin centre and the exact path; the right gives the script, API or command that does the same. <em>Not yet documented</em> means Microsoft has not published a control for that surface, so there is nothing to configure yet.</p>

<table class="controls">
<thead><tr><th>Control</th><th>Admin UI</th><th>API and automation</th></tr></thead>
<tbody>
<tr><td data-label="Control"><strong>Whether the Copilot app, and so its share target, is available in the tenant</strong><br><small>Tenant</small><br><small class="controls__note">Page says Global Admins only. Blocks the whole Copilot app experience, not just this share path; no setting specific to this share path is documented.</small></td><td data-label="Admin UI"><strong>Microsoft 365 admin center</strong><br>Settings › Integrated Apps › Available Apps › app › Block app <a href="https://learn.microsoft.com/microsoft-365/admin/manage/teams-apps-work-on-outlook-and-m365" rel="noopener" class="controls__docs">Learn</a></td><td data-label="API and automation"><em class="controls__gap">Not yet documented</em></td></tr>
<tr><td data-label="Control"><strong>A switch for sharing files into Copilot Chat from other iOS apps</strong><br><small>User</small><br><small class="controls__note">No setting specific to this feature is documented at the time of writing (November 2026).</small></td><td data-label="Admin UI"><em class="controls__gap">Not yet documented</em></td><td data-label="API and automation"><em class="controls__gap">Not yet documented</em></td></tr>
</tbody>
</table>

The documented control that reaches this feature is blocking the Copilot app in Integrated Apps. The page says its Integrated Apps controls are only available to Global Admins, and describes blocking Copilot there as a tenant-wide control that removes the Copilot app experience, so it is not a switch for the share path alone.

Microsoft Learn documents no setting specific to sharing files to the Copilot app on iPhone and iPad at the time of writing (November 2026). Intune's Receive data from other apps setting for iOS app protection policies exists, but is not confirmed to govern the Copilot app, so it is not a row here.

## Open questions

- Does a file shared from another iOS app go to the user's work or school account or to a personal Microsoft account when both can be signed in? Watch the Microsoft Copilot app pages on Learn.
- Does the Intune Receive data from other apps setting apply to the Copilot app's share target on iPhone and iPad?
- Is there a licence or meter specific to this feature, and does a shared file count toward any usage limit? Watch the Copilot overview and release notes pages.
- Will Microsoft publish an admin setting for this share path, or is blocking the Copilot app the only tenant control?

<!-- rationale
risk: Low. A user picks one file and shares it to the app; Learn already describes uploading a file as a way to give Copilot Chat organisational content. Whether Intune app protection governs this share path is not confirmed.
cost: Low. Learn says Copilot Chat (Basic) is included with eligible Microsoft 365 licences; a licence or meter specific to this feature is not yet published, so only admin and communication time is known.
impact: Low. Only iPhone and iPad users who choose to share a file to the app notice it; nothing changes for other users or platforms.
-->

<!-- verifier-findings (2026-11-24, held; checked by gpt-6.1-sol)
The independent check found fault only with the statements below. This is a correction: change what they name and carry the rest of the page over unchanged.
Correct each of these with the smallest change that removes the fault: delete the statement, narrow it, or put the finding's own "Found" text or worded replacement in its place. Where a fix asks for more than that (a new row, an explanation, further references), do only the part that removes the fault. A correction adds no control rows.
- [contradicted, blocker] Risk assessment: Security & identity; Governance controls; rationale: risk; Open questions / absence: Intune app protection and Receive data from other apps are not confirmed to govern the Microsoft Copilot app. | Found: These apps support the core App Protection Policy settings ... Restricting data transfer and copy-and-paste functions. Microsoft Copilot | iOS | [Core App Protection Policy settings] ✔ | Fix: Replace the unconfirmed-applicability statements with: 'Microsoft lists Microsoft Copilot for iOS as supporting core Intune app protection policies, including data-transfer restrictions. Test how the assigned policy handles this share route.' Cite https://learn.microsoft.com/intune/app-management/ref-protected-apps and https://learn.microsoft.com/intune/app-management/protection/manage-data-transfer-ios. Narrow the open question to how the assigned policy behaves on this particular sharing route, rather than whether the app supports protection. | Source: https://learn.microsoft.com/intune/app-management/ref-protected-apps
- [unsupported, blocker] controls[0].governs and note; Risk assessment: Change & support; Governance controls / applicability: Blocking Copilot in Integrated Apps removes the whole mobile app experience and therefore its iOS share target. | Found: Searched: Microsoft Graph block Copilot app Integrated Apps API copilot application availability. Opened Manage Copilot Chat, Integrated Apps guidance and app overview. These document blocking organisational Copilot access and a turned-off Chat screen, not removal of the iOS share target or personal | Fix: Change controls[0].governs to 'Access to organisational Copilot Chat through the Copilot app'. Replace whole-app removal and share-target implications in its note and the prose with: 'Blocking Copilot through Integrated Apps blocks organisational Copilot Chat access, including for licensed users; blocked users see a Copilot Chat was turned off for your organization screen. Microsoft does not describe whether this removes the iOS share target.' Cite https://learn.microsoft.com/copilot/manage/manage-copilot-chat. Do not present this as a control over personal Microsoft-account access.
- [contradicted, blocker] Risk assessment: Change & support / absence: Blocking Copilot in Integrated Apps is the only documented tenant control relevant to this feature. | Found: IT admins of work or school environments can limit their users from accessing the Copilot app with their Microsoft account (personal account) by using Tenant Restrictions. | Fix: Replace 'The only tenant control documented is blocking the Copilot app in Integrated Apps, which removes the whole app rather than this route' with 'Integrated Apps provides a control over organisational Copilot Chat access, rather than a dedicated switch for this sharing route.' Remove the implication that blocking the app is the only documented tenant control; retain the open question about a dedicated share-route switch without that exclusivity. | Source: https://learn.microsoft.com/copilot/plan/copilot-app-overview
These are minor and do not hold the page. Where removing the statement, or rewording it in the words the fix gives, settles one, do that; otherwise leave it as it is. A minor finding may also add a source link it names for a statement already on the page. It adds no row and nothing that needs research.
- [contradicted, minor] Governance guidance: At rollout; Governance controls / consistency: The checklist asks readers to check an Intune iOS app protection policy, but the controls table has no corresponding row. | Found: Check whether your Intune app protection policy for iOS changes what the test does ... Intune's Receive data from other apps setting ... is not a row here. | Fix: Remove the standalone checklist item 'Check whether your Intune app protection policy for iOS changes what the test does, and record the result for your service desk.' Keep the managed-device sharing test and the corrected explanation of Intune's documented reach; this correction does not add a controls row.
-->
