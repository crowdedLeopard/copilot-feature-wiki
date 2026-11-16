import { test } from 'node:test';
import assert from 'node:assert/strict';
import { topicForMessage, roadmapIdsIn, publicationCheck, sanitiseHtml, normaliseMessage, briefSection } from './message-center.mjs';

test('topic: services decide, mapped to roadmap product names', () => {
  assert.equal(topicForMessage({ title: 'x', services: ['SharePoint Online', 'OneDrive for Business'] }), 'modern-work');
  assert.equal(topicForMessage({ title: 'x', services: ['Microsoft Purview', 'SharePoint Online'] }), 'governance');
  assert.equal(topicForMessage({ title: 'x', services: ['Microsoft Copilot Studio'] }), 'copilot-studio');
  assert.equal(topicForMessage({ title: 'x', services: ['Dynamics 365 Apps'] }), null);
});

test('topic: services the ledger does not cover put a post outside it, whatever the title says', () => {
  assert.equal(topicForMessage({ title: 'The November 2026 Windows security update is now available', services: ['Windows'] }), null);
  assert.equal(topicForMessage({ title: 'Dynamics 365 Project Operations - Version 4.172.3603.1 hotfix release', services: ['Dynamics 365 Apps'] }), null);
  assert.equal(topicForMessage({ title: 'Windows Office Hours: November 19, 2026', services: ['Windows'] }), null);
  // Mixed posts take the topic of the covered service; a Windows mention does not pull them out.
  assert.equal(topicForMessage({ title: 'Windows updates are available for 2026 time zone changes', services: ['Exchange Online', 'Windows', 'Power BI'] }), 'power-platform');
  assert.equal(topicForMessage({ title: 'New Outlook for Windows: All Accounts view', services: ['Exchange Online', 'Microsoft Copilot (Microsoft 365)'] }), 'm365-copilot');
  // Broad-service posts about Windows or Dynamics are out too, unless the title names a covered product.
  assert.equal(topicForMessage({ title: 'Microsoft Windows: Updates to address compromised certificates', services: ['Microsoft 365 suite'] }), null);
  assert.equal(topicForMessage({ title: 'Classic Outlook for Windows: upcoming visual improvements', services: ['Microsoft 365 suite'] }), 'modern-work');
  // A trailing space in a service name (seen in the feed) does not break the match.
  assert.equal(topicForMessage({ title: 'x', services: ['Microsoft Clipchamp '] }), 'modern-work');
  assert.equal(topicForMessage({ title: 'x', services: ['Project for the web'] }), 'modern-work');
  // Message Center files Copilot Studio under "Microsoft Copilot (Power Platform)": the title separates the two.
  assert.equal(topicForMessage({ title: 'Copilot Studio - Evaluation Viewer role', services: ['Microsoft Copilot (Power Platform)'] }), 'copilot-studio');
  assert.equal(topicForMessage({ title: 'Copilot in Power Apps: new formula help', services: ['Microsoft Copilot (Power Platform)'] }), 'power-platform');
  assert.equal(topicForMessage({ title: 'Something new', services: ['Microsoft Copilot (Power Platform)'] }), 'power-platform');
});

test('topic: a broad service leaves it to the title, then to Modern Work', () => {
  assert.equal(topicForMessage({ title: 'Microsoft 365 admin center: new report', services: ['Microsoft 365 suite'] }), 'governance');
  assert.equal(topicForMessage({ title: 'Microsoft 365 Copilot: Researcher agent', services: ['Microsoft 365 suite'] }), 'm365-copilot');
  assert.equal(topicForMessage({ title: 'Copilot Studio: new channel', services: ['Microsoft 365 suite'] }), 'copilot-studio');
  assert.equal(topicForMessage({ title: 'Something suite-wide', services: ['Microsoft 365 suite'] }), 'modern-work');
});

test('topic: a tracked roadmap item wins, so the post sits with its briefing', () => {
  const map = new Map([[490738, 'governance']]);
  assert.equal(topicForMessage({ title: 'Copilot Credits usage report', services: ['Microsoft 365 suite'], roadmapIds: [490738] }, map), 'governance');
});

test('roadmap ids: from the RoadmapIds detail, prose and links', () => {
  assert.deepEqual(roadmapIdsIn({ details: [{ name: 'RoadmapIds', value: '558933, 490738' }] }), [490738, 558933]);
  assert.deepEqual(roadmapIdsIn({ body: 'This message is associated with Microsoft 365 Roadmap ID 472030.' }), [472030]);
  assert.deepEqual(roadmapIdsIn({ body: 'Roadmap IDs 123456 and 234567' }), [123456, 234567]);
  assert.deepEqual(roadmapIdsIn({ body: 'see https://www.microsoft.com/microsoft-365/roadmap?id=472030 and ?featureid=558933' }), [472030, 558933]);
  assert.deepEqual(roadmapIdsIn({ body: 'Published on November 12, 2026 at 10:00' }), []);
});

const generic = { title: 'Teams: new feature', summary: '', body: 'Updated November 10, 2026. How this will affect your organization: users will see a new button. What you need to do to prepare: nothing. See https://learn.microsoft.com/x', tags: ['Admin impact'] };

test('screen: the text Microsoft sends every tenant passes', () => {
  assert.deepEqual(publicationCheck(generic), { ok: true, reasons: [] });
  assert.equal(publicationCheck({ ...generic, body: 'Example: contoso.onmicrosoft.com and admin@contoso.com' }).ok, true);
  assert.equal(publicationCheck({ ...generic, body: 'Write to m365-support@microsoft.com' }).ok, true);
});

test('screen: anything that could identify or describe one tenant is withheld', () => {
  assert.deepEqual(publicationCheck({ ...generic, tags: ['Data privacy'] }).reasons, ['privacy-tag']);
  assert.deepEqual(publicationCheck(generic, { hasAttachments: true }).reasons, ['attachments']);
  assert.deepEqual(publicationCheck({ ...generic, body: 'We have identified that your organization has 23 apps' }).reasons, ['targeted-wording']);
  assert.deepEqual(publicationCheck({ ...generic, body: 'Contact jane.doe@fourthcoffee.com' }).reasons, ['email-address']);
  assert.deepEqual(publicationCheck({ ...generic, body: 'Tenant 0f1e2d3c-4b5a-6978-8a9b-0c1d2e3f4a5b' }).reasons, ['guid']);
  assert.deepEqual(publicationCheck({ ...generic, body: 'Sites on fourthcoffee.sharepoint.com are affected' }).reasons, ['tenant-domain']);
  assert.deepEqual(publicationCheck({ ...generic, body: 'Fourth Coffee users will see this' }, { tenantWords: ['Fourth Coffee', 'fourthcoffee.com'] }).reasons, ['tenant-word']);
  assert.equal(publicationCheck({ ...generic, body: 'A coffee break is fine' }, { tenantWords: ['Fourth Coffee'] }).ok, true);
});

test('sanitise: keeps paragraphs, lists and https links, drops scripts, images and styling', () => {
  const html = sanitiseHtml('<div><p style="x">Hi <b>there</b></p><script>alert(1)</script><img src="x"><a href="javascript:alert(1)">bad</a> <a href="https://learn.microsoft.com/a" style="c">ok</a><ul><li>one</li></ul></div>');
  assert.equal(html.includes('<script'), false);
  assert.equal(html.includes('<img'), false);
  assert.equal(html.includes('javascript:'), false);
  assert.equal(html.includes('style='), false);
  assert.ok(html.includes('<a href="https://learn.microsoft.com/a" rel="noopener">ok</a>'));
  assert.ok(html.includes('<ul><li>one</li></ul>'));
});

test('normalise: Graph casing becomes the taxonomy keys; the brief carries the data', () => {
  const msg = normaliseMessage({ id: 'MC1', title: 'Teams: x', category: 'PlanForChange', severity: 'High', services: ['Microsoft Teams'], startDateTime: '2026-11-01T00:00:00Z', lastModifiedDateTime: '2026-11-02T00:00:00Z', actionRequiredByDateTime: '2027-01-15T00:00:00Z', body: { contentType: 'Html', content: '<p>Roadmap ID 558933</p>' }, details: [{ name: 'Secret', value: 'dropped' }, { name: 'ExternalLink', value: 'https://learn.microsoft.com/x' }] }, '2026-11-16T00:00:00Z');
  assert.equal(msg.category, 'planForChange');
  assert.equal(msg.severity, 'high');
  assert.deepEqual(msg.roadmapIds, [558933]);
  assert.equal(msg.links.external, 'https://learn.microsoft.com/x');
  assert.equal(msg.topic, 'modern-work');
  const brief = briefSection([msg]);
  assert.ok(brief.includes('### MC1: Teams: x'));
  assert.ok(brief.includes('Act by: 2027-01-15'));
  assert.ok(brief.includes('<message_center_post id="MC1">'));
  assert.equal(brief.includes('dropped'), false);
});
