---
title: "Microsoft Intune: new enrollment policies experience for iOS/iPadOS automated device enrollment"
slug: "microsoft-intune-new-enrollment-policies-experience-for-ios-ipados-ade"
roadmapId: 469032
topic: "governance"
products: ["Microsoft Intune"]
summary: "Intune moves iOS/iPadOS automated device enrollment to new Enrollment policies with enrollment time grouping and no automatic Company Portal deployment. Admins creating policies and enrolling devices are affected."
status: "in-development"
releasePhase: ["General Availability"]
clouds: ["Worldwide (Standard Multi-Tenant)","GCC","GCC High","DoD"]
platforms: ["iOS"]
targetDate: "January CY2026"
previewDate: null
risk: "medium"
cost: "low"
impact: "medium"
defaultState: "on"
action: "prepare"
licensing:
  model: "included"
  notes: "Microsoft's Intune licensing page requires an Intune licence for any user or device that benefits from the service, and says most organisations get Intune through a Microsoft 365 bundle. No separate licence or price for this experience is published."
audiences: ["m365-admin","service-owner","change-adoption"]
tags: ["intune","ios","device-onboarding","intune-rbac","automated-device-enrollment","enrollment-time-grouping","gcc","gcc-high","dod"]
sources:
  - title: "Microsoft 365 Roadmap 469032"
    url: "https://www.microsoft.com/microsoft-365/roadmap?id=469032"
    kind: "roadmap"
  - title: "Set up automated device enrollment for iOS/iPadOS"
    url: "https://learn.microsoft.com/intune/device-enrollment/apple/setup-automated-ios"
    kind: "learn"
  - title: "Enrollment time grouping in Microsoft Intune"
    url: "https://learn.microsoft.com/intune/device-enrollment/setup-time-grouping"
    kind: "learn"
  - title: "setEnrollmentTimeDeviceMembershipTarget action"
    url: "https://learn.microsoft.com/graph/api/intune-deviceconfigv2-devicemanagementconfigurationpolicy-setenrollmenttimedevicemembershiptarget?view=graph-rest-beta"
    kind: "learn"
  - title: "clearEnrollmentTimeDeviceMembershipTarget action"
    url: "https://learn.microsoft.com/graph/api/intune-deviceconfigv2-devicemanagementconfigurationpolicy-clearenrollmenttimedevicemembershiptarget?view=graph-rest-beta"
    kind: "learn"
  - title: "Microsoft Intune licensing"
    url: "https://learn.microsoft.com/intune/fundamentals/licensing"
    kind: "learn"
  - title: "New iOS/iPadOS, visionOS, tvOS and macOS ADE enrollment policies experience"
    url: "https://techcommunity.microsoft.com/blog/intunecustomersuccess/new-iosipados-visionos-tvos-and-macos-ade-enrollment-policies-experience/4393531"
    kind: "blog"
videos: []
related: []
controls:
  - governs: "Entra security group used for enrollment time grouping in an iOS/iPadOS policy"
    scope: "group"
    ui:
      surface: "Microsoft Intune admin center"
      path: "Devices > Device onboarding > Enrollment > Apple mobile > Enrollment program tokens > token > Enrollment policies > Create policy > iOS/iPadOS > Device group"
      docs: "https://learn.microsoft.com/intune/device-enrollment/apple/setup-automated-ios"
    api:
      kind: "graph"
      call: "POST /beta/deviceManagement/configurationPolicies/{deviceManagementConfigurationPolicyId}/setEnrollmentTimeDeviceMembershipTarget"
      docs: "https://learn.microsoft.com/graph/api/intune-deviceconfigv2-devicemanagementconfigurationpolicy-setenrollmenttimedevicemembershiptarget?view=graph-rest-beta"
    note: "Beta API. The request body sets enrollmentTimeDeviceMembershipTargets. Needs the enrollment time device membership assignment permission in a custom RBAC role."
confidence: "medium"
created: "2026-11-25"
updated: "2026-11-25"
roadmapModified: "2025-09-09T23:15:14"
changes:
  - date: "2026-11-25"
    note: "First briefing for this item: covers the new Enrollment policies, enrollment time grouping, Company Portal changes and the gap between the roadmap status and Learn."
  - date: "2026-11-25"
    note: "Checked against Microsoft Learn by gpt-6.1-sol: held: 6 of 75 statements contradicted, 0 unconfirmed; taken offline until corrected"
version: 1
verification:
  status: "held"
  date: "2026-11-25"
  version: 1
  model: "gpt-6.1-sol"
  engine: "copilot"
  claims: 75
  confirmed: 69
  unconfirmed: 0
  contradicted: 6
  attempts: 1
  hash: "dee486cdcc57ffd5651f63431ef31575"
---

## What's changing

Intune is replacing the older iOS/iPadOS automated device enrollment (ADE) profiles with enrollment policies, created under **Enrollment program tokens**. The roadmap item describes the new policies as adding enrollment time grouping and an improved interface, and as removing automatic deployment of the Company Portal app and deprecated settings.

Microsoft's Intune Customer Success blog says all newly created iOS/iPadOS and macOS enrollment policies will automatically be part of the new experience, and that existing enrollment profiles stay in **Profiles**, where they can be viewed, edited, assigned and deleted but not newly created. The blog also says the Company Portal application will never be sent down automatically from creating or assigning a new policy. The Learn setup page says the Company Portal single app mode option is no longer supported and will soon be removed.

The sources differ on authentication. The blog says there is no Company Portal authentication method in the new policies, while the Learn setup page still lists **Company Portal** beside **Setup Assistant with modern authentication** and recommends the latter with just-in-time (JIT) registration. Learn also states that Intune ended support for Setup Assistant (legacy) with the 2610 service release in October 2026.

The roadmap record shows status In development with a target of January CY2026, and it was last modified in September 2025. The blog's April 2026 update gives the 2606 service release (end of June) as the ETA for iOS/iPadOS. Learn already documents the policies as the current way to create them, so treat the roadmap status as out of date and check the Intune admin centre in your tenant.

## Why it matters

If you create iOS/iPadOS ADE policies, the new experience becomes the only place to do it. The blog says new profiles can no longer be created in the old experience, and Learn says the old experience will not receive new features. Plan to build new policies rather than edit old profiles.

The practical risk is the Company Portal. Learn says to deploy it through Intune, not the App Store, so user-affinity enrolments that used to receive it from the profile now need an explicit app assignment. The gain is enrollment time grouping: without it, Learn says devices can take up to 8 hours after enrolment to receive all apps and policies.

## Risk assessment

**Data exposure**
- No new data access is described. Enrollment time grouping places devices in a static Microsoft Entra security group you nominate, so anyone who can edit that group changes what apps and policies those devices get.

**Security & identity**
- Learn recommends Setup Assistant with modern authentication with JIT registration for user-affinity enrolment. Check policies that chose **Company Portal** authentication, because the blog says the new experience has no such method.
- The enrollment time grouping group must be static, and Learn says the Intune Provisioning Client must be added as its owner. The permission to choose a group is a separate custom RBAC permission, so it can be withheld from policy authors.

**Autonomy & actions**
- **Await final configuration** is **Yes** by default for new policies. Learn says this locks the end-user experience until device configuration policies install, with no minimum or maximum time enforced; most devices tested were released within 15 minutes.

**Change & support**
- Learn says changes to an existing policy take effect only after devices are reset to factory settings and reactivated; the device name template is the exception.
- A synced device with no enrollment policy fails to enrol when switched on. Learn recommends setting a default policy.
- The blog warns that deleting an old enrollment profile stops device renaming being enforced.
- Learn lists a known issue: the **Remove** option for the enrollment time grouping group is missing when editing an existing policy.

## Cost and licensing

Microsoft's Intune licensing page says an Intune licence is required for any user or device that benefits directly or indirectly from the service, and that most organisations get Intune as part of a Microsoft 365 bundle such as E3, E5 or E7. The setup page's prerequisites list Apple Business or Apple School Manager access, an active Apple token and an Apple MDM push certificate, and name no separate licence or meter for enrollment policies.

Indirect costs are admin time to build and test new policies, and the Company Portal deployment. Learn says to deploy it as a required VPP app with device licensing, and notes that devices are blocked from enrolling if there are not enough Company Portal licences for a VPP token.

## Scope

The roadmap record lists Microsoft Intune, the iOS platform, General Availability, and the Worldwide, GCC, GCC High and DoD clouds. The Learn setup page covers iOS/iPadOS devices bought through Apple Business or Apple School Manager. The same blog also covers macOS, visionOS and tvOS; this briefing covers the iOS/iPadOS item only.

Learn states a limit of 1,000 enrollment policies per enrollment token. Existing profiles are not changed by the new experience, per the blog. Learn's enrollment time grouping page says that feature for Apple ADE policies isn't available in some sovereign cloud environments, including Azure operated by 21Vianet and Azure Government; how that applies to the roadmap's GCC High and DoD entries is not stated.

## Governance guidance

### Before rollout
- Inventory existing profiles under Enrollment program tokens > token > Profiles, and note which use Company Portal authentication or the Company Portal single app mode option.
- Decide the authentication method for user-affinity policies; Learn recommends Setup Assistant with modern authentication and JIT registration.
- Plan to deploy the Company Portal app as a required app, since a new policy does not send it.
- If you will use enrollment time grouping, create a static security group, add the Intune Provisioning Client as owner, and grant a policy author the enrollment time device membership assignment permission in a custom role.

### At rollout
- Create new policies under Enrollment policies and set one as the default so synced devices do not fail to enrol.
- Pilot each policy on a wiped test device, because later edits reach devices only after a factory reset.
- Review **Await final configuration** with the service desk, since the default for new policies is **Yes**.

### After rollout
- Review the Enrollment time grouping failures report under Devices > Monitor; Learn says it shows only failures and needs the Microsoft.Intune/ManagedDevices/Read permission.
- Move devices from old profiles to new policies, and check device naming before deleting an old profile.
- Re-check the roadmap item and Learn setup page for status changes and any change to the Company Portal authentication option.

## Governance controls

<p class="controls__lead">Where each control lives. The left column says what the setting decides and how far it reaches; the middle gives the admin centre and the exact path; the right gives the script, API or command that does the same. <em>Not yet documented</em> means Microsoft has not published a control for that surface, so there is nothing to configure yet.</p>

<table class="controls">
<thead><tr><th>Control</th><th>Admin UI</th><th>API and automation</th></tr></thead>
<tbody>
<tr><td data-label="Control"><strong>Entra security group used for enrollment time grouping in an iOS/iPadOS policy</strong><br><small>Group</small><br><small class="controls__note">Beta API. The request body sets enrollmentTimeDeviceMembershipTargets. Needs the enrollment time device membership assignment permission in a custom RBAC role.</small></td><td data-label="Admin UI"><strong>Microsoft Intune admin center</strong><br>Devices › Device onboarding › Enrollment › Apple mobile › Enrollment program tokens › token › Enrollment policies › Create policy › iOS/iPadOS › Device group <a href="https://learn.microsoft.com/intune/device-enrollment/apple/setup-automated-ios" rel="noopener" class="controls__docs">Learn</a></td><td data-label="API and automation"><strong>Microsoft Graph</strong><br><code>POST /beta/deviceManagement/configurationPolicies/{deviceManagementConfigurationPolicyId}/setEnrollmentTimeDeviceMembershipTarget</code> <a href="https://learn.microsoft.com/graph/api/intune-deviceconfigv2-devicemanagementconfigurationpolicy-setenrollmenttimedevicemembershiptarget?view=graph-rest-beta" rel="noopener" class="controls__docs">Learn</a></td></tr>
</tbody>
</table>

Enrollment time grouping is the one control the sources tie to this feature on both surfaces. Learn says choosing the group needs the enrollment time device membership assignment permission in a custom RBAC role under Enrollment programs, and adding the Intune Provisioning Client as group owner needs a Microsoft Entra Group Administrator or an existing group owner.

The enrollment time grouping page shows a DELETE request to remove the group, but the Graph reference for the clearEnrollmentTimeDeviceMembershipTarget action lists POST, so check the reference before scripting. Both are /beta calls.

The other settings, such as User Affinity, Await final configuration and locked enrollment, are set per policy in the policy wizard.

## Open questions

- Has the new experience reached all tenants and clouds? The roadmap shows In development with a January CY2026 target, while Learn documents the policies as current. Watch the roadmap item and What's new in Intune.
- Does the enrollment time grouping page's note about some sovereign clouds, including Azure Government, apply to the GCC High and DoD clouds the roadmap lists?
- Does the new experience offer the Company Portal authentication method? The blog says no; the Learn setup page still lists it.
- Which Intune RBAC permissions are needed to create policies under Enrollment policies? The setup page names only the enrollment time device membership assignment permission, for the Device group setting.

<!-- rationale
risk: Medium. The new policies no longer send the Company Portal app automatically, so enrolment flows that relied on it need an explicit app deployment, and changes to an existing policy reach devices only after a factory reset.
cost: Low. The only cost the sources show is admin time to migrate policies; an Intune licence is already required, and no separate meter or price for this experience is published on the pages read.
impact: Medium. Intune administrators who create enrolment policies notice first, and people setting up new corporate iPhones and iPads see different authentication choices and a locked wait at the end of setup.
-->

<!-- verifier-findings (2026-11-25, held; checked by gpt-6.1-sol)
The independent check found fault only with the statements below. This is a correction: change what they name and carry the rest of the page over unchanged.
Correct each of these with the smallest change that removes the fault: delete the statement, narrow it, or put the finding's own "Found" text or worded replacement in its place. Where a fix asks for more than that (a new row, an explanation, further references), do only the part that removes the fault. A correction adds no control rows.
- [contradicted, blocker] Why it matters; Governance guidance: Before rollout; rationale: risk / applicability: User-affinity enrollments that previously received Company Portal now need explicit Company Portal app deployment. | Found: Sending the Company Portal app to ADE devices with user device affinity (optional) - iOS/iPadOS only. For Setup Assistant with modern authentication, the Company Portal is no longer required because of Just in Time registration and compliance Remediation | Fix: Replace the implication of mandatory deployment in Why it matters, the Before rollout checklist and the risk rationale with: 'If you still need the Company Portal app, deploy it explicitly through Intune; new policies do not send it automatically. Company Portal is optional for enrollment with Setup Assistant with modern authentication and JIT registration.' The cited blog states both points. | Source: https://techcommunity.microsoft.com/blog/intunecustomersuccess/new-iosipados-visionos-tvos-and-macos-ade-enrollment-policies-experience/4393531
- [contradicted, blocker] Governance controls / role: Adding Intune Provisioning Client as group owner needs a Microsoft Entra Group Administrator or an existing group owner. | Found: you must be a Microsoft Entra Group Administrator (or hold the microsoft.directory/groups/owners/update permission), or be an existing owner of the security group. | Fix: Replace the role requirement with: 'Adding the Intune Provisioning Client as group owner requires a Microsoft Entra Group Administrator, an account holding microsoft.directory/groups/owners/update, or an existing owner of the security group.' This is the complete requirement at https://learn.microsoft.com/intune/device-enrollment/setup-time-grouping. | Source: https://learn.microsoft.com/intune/device-enrollment/setup-time-grouping
- [contradicted, blocker] Scope; Open questions: sovereign clouds / absence: How the Azure Government exclusion applies to GCC High and DoD is not stated. | Found: The Intune GCC High and DoD offerings are built on the Microsoft Azure Government Cloud. Government cloud: This service is also known as GCC High or DoD. | Fix: Replace the unresolved caveat in Scope with: 'The enrollment time grouping page excludes Apple ADE enrollment time grouping in Azure Government. Microsoft's Intune government service description places GCC High and DoD in Azure Government, so this restriction covers those deployments even though the roadmap lists them.' Cite https://learn.microsoft.com/intune/fundamentals/government-service and remove the corresponding Open questions bullet. | Source: https://learn.microsoft.com/intune/fundamentals/government-service
- [contradicted, blocker] Governance guidance: Before rollout, inventory bullet / admin-path: The inventory route is Enrollment program tokens > token > Profiles. | Found: Existing enrollment profiles will remain in Devices > Enrollment > Apple > Enrollment program tokens > select a token > Profiles. | Fix: Replace the part-way-in inventory route with 'Microsoft Intune admin center > Devices > Device onboarding > Enrollment > Apple mobile > Enrollment program tokens > token > Profiles'. The current prefix is documented at https://learn.microsoft.com/intune/device-enrollment/apple/setup-automated-ios and the Profiles destination at the cited blog. | Source: https://techcommunity.microsoft.com/blog/intunecustomersuccess/new-iosipados-visionos-tvos-and-macos-ade-enrollment-policies-experience/4393531
- [contradicted, blocker] Governance guidance: At rollout; rationale: risk versus Risk assessment / consistency: The pilot advice and risk rationale say policy edits reach devices only after factory reset, while Risk assessment correctly exempts the device name template. | Found: Risk assessment: the device name template is the exception. At rollout: later edits reach devices only after a factory reset. Risk rationale: changes to an existing policy reach devices only after a factory reset. | Fix: Add 'except changes to the device name template' to the factory-reset statements in the At rollout pilot bullet and the risk rationale. Learn states that naming-template changes take effect at the next check-in: https://learn.microsoft.com/intune/device-enrollment/apple/setup-automated-ios.
These are minor and do not hold the page. Where removing the statement, or rewording it in the words the fix gives, settles one, do that; otherwise leave it as it is. A minor finding may also add a source link it names for a statement already on the page. It adds no row and nothing that needs research.
- [contradicted, minor] Governance guidance versus Governance controls / consistency: The checklist asks readers to review or configure controls that have no corresponding controls-table row. | Found: Decide the authentication method; deploy the Company Portal app as a required app; grant a policy author ... permission; set one as the default; Review Await final configuration; Review the Enrollment time grouping failures report. Table: only the enrollment time grouping group. | Fix: The Before rollout authentication, Company Portal assignment and custom-role permission steps, At rollout default-policy and Await final configuration steps, and After rollout failures-report step have no corresponding controls-table rows.
-->
